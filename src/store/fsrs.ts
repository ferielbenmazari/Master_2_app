/**
 * Répétition espacée (ts-fsrs, modèle FSRS-6, pas de fuzz : comportement déterministe).
 * Horloge injectée (`now`) partout : aucune dépendance cachée à l'heure courante dans la logique.
 * Les identifiants de carte sont les `id` de flashcard (globalement uniques, docs/03).
 */
import { DefaultScheduler, Rating, State, type DefaultSchedulerCardInput, type Grade } from 'ts-fsrs'
import { db, localDay, type CardState } from './db'
import { getCard, localDate, putCard } from './progress'

/** Notes : 1 Encore · 2 Difficile · 3 Bien · 4 Facile. */
export { Rating, type Grade }
export const GRADES: readonly Grade[] = [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]

/** Une carte en (ré)apprentissage due dans ce délai est proposée tout de suite (comme Anki). */
export const LEARN_AHEAD_MS = 20 * 60_000

type FsrsCard = DefaultSchedulerCardInput<'FSRS-6'>

let schedulerPromise: ReturnType<typeof makeScheduler> | undefined
function makeScheduler() {
  return DefaultScheduler({
    version: 'FSRS-6',
    enableFuzz: false,
    learningSteps: ['1m', '10m'],
    relearningSteps: ['10m'],
  })
}
const scheduler = () => (schedulerPromise ??= makeScheduler())

/** État stocké → carte ts-fsrs (défauts pour les champs absents des sauvegardes v1). */
function toFsrs(s: CardState): FsrsCard {
  const state = s.state
  return {
    cardId: s.cardId,
    stability: s.stability,
    difficulty: s.difficulty,
    state,
    scheduleStatus: state === State.New ? 'new' : state === State.Review ? 'review' : 'learning',
    dueAt: new Date(s.due),
    lastReviewAt: s.last_review ? new Date(s.last_review) : null,
    reps: s.reps,
    lapses: s.lapses,
    scheduledDays: s.scheduledDays ?? 0,
    learningStep: s.learningStep ?? 0,
  } as FsrsCard
}

/** Carte ts-fsrs → état stocké (dates en ISO). */
function fromFsrs(c: FsrsCard, cardId: string, introduced: string | undefined): CardState {
  return {
    cardId,
    due: new Date(c.dueAt).toISOString(),
    stability: c.stability,
    difficulty: c.difficulty,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state,
    ...(c.lastReviewAt ? { last_review: new Date(c.lastReviewAt).toISOString() } : {}),
    scheduledDays: c.scheduledDays,
    learningStep: c.learningStep,
    ...(introduced ? { introduced } : {}),
  }
}

/** Carte vierge (jamais revue), `due` = maintenant. */
async function blank(id: string, now: Date): Promise<FsrsCard> {
  return { ...(await scheduler()).newCard({ now }), cardId: id } as FsrsCard
}

export function getCardState(id: string): Promise<CardState | undefined> {
  return getCard(id)
}

/** Libellé court d'un délai : « 1 min », « 3 h », « 2 j », « 4 mois », « 1 an ». */
export function formatInterval(ms: number): string {
  const min = Math.max(0, ms) / 60_000
  if (min < 1) return '< 1 min'
  if (min < 60) return `${Math.round(min)} min`
  const h = min / 60
  if (h < 24) return `${Math.round(h)} h`
  const d = h / 24
  if (d < 30) return `${Math.round(d)} j`
  if (d < 365) return `${Math.round(d / 30)} mois`
  const y = d / 365
  return y < 1.5 ? '1 an' : `${Math.round(y)} ans`
}

/** Délais proposés avant la prochaine revue pour chacune des 4 notes. */
export async function previewIntervals(id: string, now: Date): Promise<Record<Grade, string>> {
  const s = await scheduler()
  const stored = await getCard(id)
  const card = stored ? toFsrs(stored) : await blank(id, now)
  const out = {} as Record<Grade, string>
  for (const p of s.preview({ card, now })) {
    if (GRADES.includes(p.grade as Grade)) out[p.grade as Grade] = formatInterval(new Date(p.card.dueAt).getTime() - now.getTime())
  }
  return out
}

/**
 * Enregistre une revue : crée la carte si besoin, applique FSRS, persiste et compte l'activité
 * (une seule transaction). Renvoie le nouvel état.
 */
export async function review(id: string, rating: Grade, now: Date): Promise<CardState> {
  const s = await scheduler()
  return db.transaction('rw', db.cards, db.activity, async () => {
    const stored = await getCard(id)
    const card = stored ? toFsrs(stored) : await blank(id, now)
    const result = s.review({ card, grade: rating, now })
    const next = fromFsrs(result.card as FsrsCard, id, stored?.introduced ?? localDay(now))
    await putCard(next, localDate(now))
    return next
  })
}

/** Nombre de nouvelles cartes déjà introduites le jour local de `now`. */
export async function newIntroducedToday(now: Date): Promise<number> {
  const today = localDay(now)
  return db.cards.filter((c) => c.introduced === today).count()
}

/** Une carte (ré)apprise est « due » si son échéance est passée (ou proche pour les cartes en apprentissage). */
export function isDue(c: CardState, now: Date): boolean {
  const t = new Date(c.due).getTime()
  const learning = c.state === State.Learning || c.state === State.Relearning
  return t <= now.getTime() + (learning ? LEARN_AHEAD_MS : 0)
}

/**
 * Cartes à travailler maintenant parmi `universe` (ids de flashcards existantes) :
 * d'abord les cartes en retard (échéance croissante : « Encore » avant « Facile »),
 * puis les nouvelles dans la limite quotidienne restante. Les ids stockés absents de `universe` sont ignorés.
 */
export async function getDueCards(now: Date, universe: readonly string[], newLimit: number): Promise<string[]> {
  const ids = [...new Set(universe)]
  const stored = new Map((await db.cards.bulkGet(ids)).flatMap((c) => (c ? [[c.cardId, c] as const] : [])))
  const due = ids
    .flatMap((id) => {
      const c = stored.get(id)
      return c && isDue(c, now) ? [c] : []
    })
    .sort((a, b) => a.due.localeCompare(b.due) || a.cardId.localeCompare(b.cardId))
    .map((c) => c.cardId)
  const room = Math.max(0, newLimit - (await newIntroducedToday(now)))
  const fresh = ids.filter((id) => !stored.has(id)).slice(0, room)
  return [...due, ...fresh]
}
