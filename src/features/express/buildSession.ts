/**
 * Session Express (T20) : 6 étapes — 1 point clé, 3 flashcards, 2 quiz — prises à travers les chapitres.
 * Fonction pure : toutes les données (progression, horloge, graine) sont passées en entrée.
 * - point clé : notions ★★★ d'abord, les moins revues en premier ;
 * - flashcards : dues d'abord, puis nouvelles (★★★ avant le reste), puis les moins en retard ;
 * - quiz : ratés récemment d'abord, puis `apply`/`analyze`, puis le reste (les moins tentés en premier) ;
 * - entrelacement : à priorité égale, on prend le chapitre le moins utilisé jusque-là ;
 * - une session ne reprend pas les items de la précédente (`exclude`) tant qu'il en reste d'autres.
 */
import type { Chapter, Course, KeyPoint, QuizItem, Term } from '@/content/schema'
import { shuffle } from '@/lib/shuffle'
import type { Attempt, CardState } from '@/store/db'
import { isDue } from '@/store/fsrs'
import type { DeckCard } from '@/features/flashcards/deck-cards'
import { prepareItem } from '@/features/quiz/quiz-logic'

export const EXPRESS_COUNTS = { keypoint: 1, card: 3, quiz: 2 } as const
export const EXPRESS_STEPS = EXPRESS_COUNTS.keypoint + EXPRESS_COUNTS.card + EXPRESS_COUNTS.quiz
type Kind = keyof typeof EXPRESS_COUNTS

export interface ExpressPool {
  course: Course
  chapter: Chapter
}

interface StepBase {
  /** Identifiant stable de l'item (pour ne pas le reproposer à la session suivante). */
  id: string
  course: Course
  chapterId: string
  glossary: ReadonlyMap<string, Term>
  /** Notions rattachées (vide si le contenu n'en déclare pas). */
  notions: readonly string[]
}
export type ExpressStep =
  | (StepBase & { kind: 'keypoint'; point: KeyPoint })
  | (StepBase & { kind: 'card'; deck: DeckCard })
  | (StepBase & { kind: 'quiz'; item: QuizItem; order: readonly number[] })

export interface ExpressInput {
  /** Chapitres de la portée (un chapitre, une matière ou toutes), dans l'ordre. */
  pools: readonly ExpressPool[]
  /** Flashcards de la portée (écrites + glossaire), voir `indexCards`. */
  cards: ReadonlyMap<string, DeckCard>
  /** Importance 1..3 des notions (notions.json), toutes matières confondues. */
  importance: ReadonlyMap<string, number>
  cardStates: ReadonlyMap<string, CardState>
  /** Tentatives de quiz enregistrées. */
  attempts: readonly Attempt[]
  /** Items déjà vus lors de la session précédente. */
  exclude?: ReadonlySet<string>
  now: Date
  seed: number
}

interface Candidate<S> {
  id: string
  chapterId: string
  tier: number
  rank: number
  step: S
}

const EXCLUDED_PENALTY = 100

/** Meilleurs `n` candidats : priorité (tier, rank), puis chapitre le moins utilisé ; l'aléa ne départage que les égalités. */
function pick<S>(candidates: readonly Candidate<S>[], n: number, exclude: ReadonlySet<string>, seed: number): S[] {
  const pool = shuffle(candidates, seed)
    .map((c) => ({ ...c, tier: c.tier + (exclude.has(c.id) ? EXCLUDED_PENALTY : 0) }))
    .sort((a, b) => a.tier - b.tier || a.rank - b.rank)
  const used = new Map<string, number>()
  const out: S[] = []
  while (out.length < n && pool.length > 0) {
    const tier = pool[0]!.tier
    let best = 0
    let bestUse = Infinity
    for (let i = 0; i < pool.length && pool[i]!.tier === tier; i++) {
      const u = used.get(pool[i]!.chapterId) ?? 0
      if (u < bestUse) {
        best = i
        bestUse = u
      }
    }
    const [c] = pool.splice(best, 1)
    out.push(c!.step)
    used.set(c!.chapterId, (used.get(c!.chapterId) ?? 0) + 1)
  }
  return out
}

const maxImportance = (notions: readonly string[], importance: ReadonlyMap<string, number>) =>
  notions.reduce((m, n) => Math.max(m, importance.get(n) ?? 0), 0)

/** Nombre de fois où chaque notion a été travaillée (tentatives de quiz + revues de cartes). */
function exposure(input: ExpressInput): Map<string, number> {
  const out = new Map<string, number>()
  const add = (notions: readonly string[] | undefined, n: number) => {
    for (const id of notions ?? []) out.set(id, (out.get(id) ?? 0) + n)
  }
  const quizNotions = new Map<string, readonly string[]>()
  for (const { chapter } of input.pools) for (const q of chapter.quiz) quizNotions.set(q.id, q.notions ?? [])
  for (const a of input.attempts) add(quizNotions.get(a.itemId), 1)
  for (const [id, d] of input.cards) add(d.card.notions, input.cardStates.get(id)?.reps ?? 0)
  return out
}

export function buildSession(input: ExpressInput): ExpressStep[] {
  const { pools, cards, importance, cardStates, now, seed } = input
  const exclude = input.exclude ?? new Set<string>()
  const seen = exposure(input)
  const glossaries = new Map(pools.map(({ chapter }) => [chapter.id, new Map(chapter.glossary.map((t) => [t.id, t]))]))
  const base = (course: Course, chapterId: string, notions: readonly string[] | undefined) => ({
    course,
    chapterId,
    glossary: glossaries.get(chapterId) ?? new Map<string, Term>(),
    notions: notions ?? [],
  })

  // ---- points clés : ★★★ d'abord, puis les notions les moins revues
  const keypoints: Candidate<ExpressStep>[] = pools.flatMap(({ course, chapter }) =>
    chapter.keyPoints.map((point, i) => {
      const id = `${chapter.id}#kp${i + 1}`
      const notions = point.notions ?? []
      return {
        id,
        chapterId: chapter.id,
        tier: 3 - maxImportance(notions, importance),
        rank: notions.reduce((n, x) => n + (seen.get(x) ?? 0), 0),
        step: { kind: 'keypoint', id, point, ...base(course, chapter.id, notions) } as ExpressStep,
      }
    }),
  )

  // ---- flashcards : dues, nouvelles ★★★, nouvelles, puis les plus proches de l'échéance
  const flash: Candidate<ExpressStep>[] = [...cards.values()].map((deck) => {
    const state = cardStates.get(deck.card.id)
    const notions = deck.card.notions ?? []
    const star = maxImportance(notions, importance) >= 3
    const due = state ? new Date(state.due).getTime() : 0
    return {
      id: deck.card.id,
      chapterId: deck.chapterId,
      tier: !state ? (star ? 1 : 2) : isDue(state, now) ? 0 : 3,
      rank: state ? due : 0,
      step: { kind: 'card', id: deck.card.id, deck, ...base(deck.course, deck.chapterId, notions) } as ExpressStep,
    }
  })

  // ---- quiz : ratés récemment, puis apply/analyze, puis le reste (les moins tentés d'abord)
  const history = new Map<string, { n: number; lastAt: string; lastOk: boolean }>()
  for (const a of input.attempts) {
    if (a.kind !== 'quiz') continue
    const h = history.get(a.itemId)
    if (!h) history.set(a.itemId, { n: 1, lastAt: a.at, lastOk: a.correct })
    else {
      h.n++
      if (a.at >= h.lastAt) Object.assign(h, { lastAt: a.at, lastOk: a.correct })
    }
  }
  const quiz: Candidate<ExpressStep>[] = pools.flatMap(({ course, chapter }) =>
    chapter.quiz.map((item) => {
      const h = history.get(item.id)
      const missed = h !== undefined && !h.lastOk
      const hard = item.level === 'apply' || item.level === 'analyze'
      return {
        id: item.id,
        chapterId: chapter.id,
        tier: missed ? 0 : hard ? 1 : 2,
        rank: missed ? -new Date(h.lastAt).getTime() : (h?.n ?? 0),
        step: {
          kind: 'quiz',
          id: item.id,
          item,
          order: prepareItem(item, seed).order,
          ...base(course, chapter.id, item.notions),
        } as ExpressStep,
      }
    }),
  )

  // ---- répartition : 1 / 3 / 2, le manque d'un type est comblé par les autres (cartes, quiz, points clés)
  const byKind: Record<Kind, Candidate<ExpressStep>[]> = { keypoint: keypoints, card: flash, quiz }
  const counts: Record<Kind, number> = {
    keypoint: Math.min(EXPRESS_COUNTS.keypoint, keypoints.length),
    card: Math.min(EXPRESS_COUNTS.card, flash.length),
    quiz: Math.min(EXPRESS_COUNTS.quiz, quiz.length),
  }
  for (const kind of ['card', 'quiz', 'keypoint'] as const) {
    const room = Math.min(byKind[kind].length - counts[kind], EXPRESS_STEPS - counts.keypoint - counts.card - counts.quiz)
    if (room > 0) counts[kind] += room
  }
  const picked = {
    keypoint: pick(keypoints, counts.keypoint, exclude, seed + 1),
    card: pick(flash, counts.card, exclude, seed + 2),
    quiz: pick(quiz, counts.quiz, exclude, seed + 3),
  }

  // ---- ordre : le point clé d'abord (échauffement), puis cartes et quiz en alternance
  const out: ExpressStep[] = [...picked.keypoint]
  for (let i = 0; i < Math.max(picked.card.length, picked.quiz.length); i++) {
    const c = picked.card[i]
    const q = picked.quiz[i]
    if (c) out.push(c)
    if (q) out.push(q)
  }
  return out
}

/** « Notions vues » d'une session : notions déclarées, à défaut l'item lui-même. */
export function conceptsSeen(steps: readonly ExpressStep[]): number {
  return new Set(steps.flatMap((s) => (s.notions.length > 0 ? s.notions : [s.id]))).size
}
