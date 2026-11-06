import type { Chapter, L } from '@/content/schema'
import type { Attempt, CardState } from '@/store/db'

/** Une carte est « maîtrisée » quand sa stabilité FSRS dépasse 21 jours. */
export const MASTERED_STABILITY_DAYS = 21
export const WEAK_SPOTS_MAX = 5

export interface WeakSpot {
  /** Identifiant de notion (`n-…`) ou, à défaut de notion sur l'item, identifiant de chapitre. */
  id: string
  kind: 'notion' | 'chapter'
  label: L
  /** Chapitre vers lequel pointe le lien. */
  chapterId: string
  missed: number
  total: number
}

export interface CourseStats {
  courseId: string
  chaptersTotal: number
  chaptersRead: number
  /** 0..100 */
  readPercent: number
  quizAttempts: number
  quizCorrect: number
  /** 0..100, `null` sans tentative. */
  quizPercent: number | null
  cardsTotal: number
  cardsMastered: number
  weakSpots: WeakSpot[]
}

export interface CourseInput {
  courseId: string
  chapters: readonly Chapter[]
  /** Libellés des notions (notions.json), s'il existe. */
  notionLabels?: ReadonlyMap<string, L>
}

const pct = (n: number, d: number) => (d === 0 ? 0 : Math.round((n / d) * 100))

/** « n-other-validities » → « other validities » (repli quand notions.json n'a pas la notion). */
export function humanizeNotionId(id: string): L {
  const s = id.replace(/^n-/, '').replace(/-/g, ' ')
  return { fr: s, en: s }
}

/** Statistiques d'une matière, calculées uniquement à partir des tentatives, cartes et lectures enregistrées. */
export function courseStats(
  input: CourseInput,
  attempts: readonly Attempt[],
  cards: readonly CardState[],
  readChapterIds: ReadonlySet<string>,
): CourseStats {
  const { courseId, chapters, notionLabels } = input
  const quizItems = new Map<string, { chapter: Chapter; notions: readonly string[] }>()
  for (const ch of chapters) {
    for (const q of ch.quiz) if (!quizItems.has(q.id)) quizItems.set(q.id, { chapter: ch, notions: q.notions ?? [] })
  }
  const cardIds = new Set(chapters.flatMap((ch) => ch.flashcards.map((f) => f.id)))

  let quizAttempts = 0
  let quizCorrect = 0
  const spots = new Map<string, WeakSpot>()
  for (const a of attempts) {
    const item = quizItems.get(a.itemId)
    if (!item) continue
    if (a.kind === 'quiz') {
      quizAttempts++
      if (a.correct) quizCorrect++
    }
    const keys =
      item.notions.length > 0
        ? item.notions.map((id) => ({ id, kind: 'notion' as const, label: notionLabels?.get(id) ?? humanizeNotionId(id) }))
        : [{ id: item.chapter.id, kind: 'chapter' as const, label: item.chapter.title }]
    for (const k of keys) {
      const spot = spots.get(k.id) ?? { ...k, chapterId: item.chapter.id, missed: 0, total: 0 }
      spot.total++
      if (!a.correct) spot.missed++
      spots.set(k.id, spot)
    }
  }

  const weakSpots = [...spots.values()]
    .filter((s) => s.missed > 0)
    .sort((a, b) => b.missed - a.missed || b.missed / b.total - a.missed / a.total || a.id.localeCompare(b.id))
    .slice(0, WEAK_SPOTS_MAX)

  const chaptersRead = chapters.filter((ch) => readChapterIds.has(ch.id)).length
  return {
    courseId,
    chaptersTotal: chapters.length,
    chaptersRead,
    readPercent: pct(chaptersRead, chapters.length),
    quizAttempts,
    quizCorrect,
    quizPercent: quizAttempts === 0 ? null : pct(quizCorrect, quizAttempts),
    cardsTotal: cardIds.size,
    cardsMastered: cards.filter((c) => cardIds.has(c.cardId) && c.stability > MASTERED_STABILITY_DAYS).length,
    weakSpots,
  }
}
