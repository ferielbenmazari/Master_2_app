/** Couverture des notions par les chapitres (règles de docs/06 §3). Pure : travaille sur des objets déjà validés. */
import type { Chapter, Notions } from '../../../src/content/schema.ts'

export type CoverageStatus = 'covered' | 'partial' | 'absent'

export interface NotionCoverage {
  id: string
  label: string
  importance: 1 | 2 | 3
  chapter: string
  status: CoverageStatus
  /** éléments de chapitre qui référencent la notion */
  refs: { chapter: string; story: number; quiz: number; flashcards: number }
  /** ce qu'il manque pour être couverte (vide si couverte) */
  missing: string[]
  chapterWritten: boolean
}

export interface CoverageReport {
  courseId: string
  notions: NotionCoverage[]
  /** par chapitre du PLAN et par importance */
  byChapter: Record<string, { total: number; covered: number; partial: number; absent: number }>
  total: { total: number; covered: number; partial: number; absent: number }
}

/**
 * Règles : ★★★ → ≥ 1 bloc d'histoire + ≥ 1 quiz + ≥ 1 flashcard ; ★★ → ≥ 1 bloc + (≥ 1 quiz ou flashcard) ;
 * ★ → au moins une référence. `partial` = référencée mais règle non satisfaite ; `absent` = aucune référence.
 */
export function computeCoverage(notions: Notions, chapters: Chapter[]): CoverageReport {
  const out: NotionCoverage[] = []
  for (const n of notions.notions) {
    let story = 0
    let quiz = 0
    let cards = 0
    let where = ''
    for (const ch of chapters) {
      const termNotions = new Map(ch.glossary.map((t) => [t.id, t.notion]))
      const s = ch.story.filter((b) => (b.type === 'paragraph' || b.type === 'list' || b.type === 'table' || b.type === 'method') && b.notions?.includes(n.id)).length
      const q = ch.quiz.filter((x) => x.notions?.includes(n.id)).length
      const f = ch.flashcards.filter((x) => x.notions?.includes(n.id) || (x.termId !== undefined && termNotions.get(x.termId) === n.id)).length
      if (s + q + f > 0 && !where) where = ch.id
      story += s
      quiz += q
      cards += f
    }
    const missing: string[] = []
    if (n.importance >= 2 && story === 0) missing.push("bloc d'histoire")
    if (n.importance === 3) {
      if (quiz === 0) missing.push('quiz')
      if (cards === 0) missing.push('flashcard')
    } else if (n.importance === 2 && quiz + cards === 0) missing.push('quiz ou flashcard')
    const any = story + quiz + cards
    if (n.importance === 1 && any === 0) missing.push('au moins une référence')
    const status: CoverageStatus = missing.length === 0 ? 'covered' : any === 0 ? 'absent' : 'partial'
    out.push({
      id: n.id,
      label: n.label.fr,
      importance: n.importance,
      chapter: n.chapter,
      status,
      refs: { chapter: where, story, quiz, flashcards: cards },
      missing,
      chapterWritten: chapters.some((c) => c.id.startsWith(`${notions.courseId}-${n.chapter}-`)),
    })
  }
  const zero = () => ({ total: 0, covered: 0, partial: 0, absent: 0 })
  const byChapter: CoverageReport['byChapter'] = {}
  const total = zero()
  for (const c of out) {
    const b = (byChapter[c.chapter] ??= zero())
    for (const t of [b, total]) {
      t.total++
      t[c.status]++
    }
  }
  return { courseId: notions.courseId, notions: out, byChapter, total }
}
