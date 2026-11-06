import { getCourse, getCourses, getNotions, loadAllChapters } from '@/content/loader'
import type { Chapter, Course } from '@/content/schema'
import { indexCards } from '@/features/flashcards/deck-cards'
import { getAttempts, getAllCards } from '@/store/progress'
import type { ExpressInput, ExpressPool } from './buildSession'

/** `all` : toutes les matières (Base) ; sinon un chapitre. */
export type ExpressScope = 'all' | { courseId: string; chapterId: string }

export type ExpressData = Omit<ExpressInput, 'exclude' | 'now' | 'seed'>

/** Charge contenu et progression nécessaires à `buildSession` pour une portée. */
export async function loadExpressData(scope: ExpressScope): Promise<ExpressData> {
  const courses: Course[] = scope === 'all' ? getCourses() : [getCourse(scope.courseId)].filter((c): c is Course => !!c)
  const entries = await Promise.all(courses.map(async (course) => ({ course, chapters: await loadAllChapters(course.id) })))
  const chapterId = scope === 'all' ? undefined : scope.chapterId
  const pools: ExpressPool[] = entries.flatMap(({ course, chapters }) =>
    chapters.filter((c: Chapter) => !chapterId || c.id === chapterId).map((chapter) => ({ course, chapter })),
  )
  const importance = new Map<string, number>()
  for (const c of courses) {
    for (const n of (await getNotions(c.id))?.notions ?? []) importance.set(n.id, n.importance)
  }
  const [states, attempts] = await Promise.all([getAllCards(), getAttempts({ kind: 'quiz' })])
  return {
    pools,
    cards: indexCards(entries, chapterId),
    importance,
    cardStates: new Map(states.map((c) => [c.cardId, c])),
    attempts,
  }
}
