import type { Chapter } from '@/content/schema'
import type { Attempt, CardState } from '@/store/db'
import { courseStats, humanizeNotionId } from './stats'

const L = (s: string) => ({ fr: s, en: s })
function chapter(id: string, quiz: { id: string; notions?: string[] }[], cards: string[] = []): Chapter {
  return {
    id,
    courseId: 'c',
    title: L(`Titre ${id}`),
    quiz: quiz.map((q) => ({ ...q })),
    flashcards: cards.map((c) => ({ id: c })),
    glossary: [],
  } as unknown as Chapter
}
const att = (itemId: string, correct: boolean, kind = 'quiz'): Attempt => ({ itemId, kind, correct, at: '2026-11-01T10:00:00Z' })
const card = (cardId: string, stability: number): CardState =>
  ({ cardId, stability, due: '', difficulty: 5, reps: 1, lapses: 0, state: 2 }) as CardState

const ch1 = chapter('c-01', [{ id: 'q1', notions: ['n-a'] }, { id: 'q2', notions: ['n-a', 'n-b'] }, { id: 'q3' }], ['f1', 'f2'])
const ch2 = chapter('c-02', [{ id: 'q4', notions: ['n-b'] }], ['f3'])
const input = { courseId: 'c', chapters: [ch1, ch2], notionLabels: new Map([['n-a', L('Notion A')]]) }

describe('courseStats', () => {
  it('lecture : % de chapitres lus', () => {
    const s = courseStats(input, [], [], new Set(['c-01', 'autre']))
    expect(s).toMatchObject({ chaptersTotal: 2, chaptersRead: 1, readPercent: 50 })
  })

  it('taux de réussite quiz cohérent avec les tentatives (hors autres matières et autres types)', () => {
    const s = courseStats(
      input,
      [att('q1', true), att('q1', false), att('q2', true), att('inconnu', false), att('q4', true, 'exercise')],
      [],
      new Set(),
    )
    expect(s.quizAttempts).toBe(3)
    expect(s.quizCorrect).toBe(2)
    expect(s.quizPercent).toBe(67)
  })

  it('pas de tentative : taux nul (null), pas de point faible', () => {
    const s = courseStats(input, [], [], new Set())
    expect(s.quizPercent).toBeNull()
    expect(s.weakSpots).toEqual([])
  })

  it('cartes maîtrisées : stabilité > 21 j, cartes de la matière seulement', () => {
    const s = courseStats(input, [], [card('f1', 21), card('f2', 21.5), card('f3', 60), card('ailleurs', 99)], new Set())
    expect(s.cardsTotal).toBe(3)
    expect(s.cardsMastered).toBe(2)
  })

  it('les cartes du glossaire comptent dans le total et les maîtrisées', () => {
    const withTerm = { ...ch1, glossary: [{ id: 'term-a', fr: 'a', en: 'a', definition: L('d'), src: [] }] } as unknown as Chapter
    const s = courseStats({ courseId: 'c', chapters: [withTerm, ch2] }, [], [card('c-01-gl-term-a-a', 30), card('c-01-gl-term-a-b', 3)], new Set())
    expect(s.cardsTotal).toBe(5) // f1, f2, f3 + 2 cartes du terme
    expect(s.cardsMastered).toBe(1)
  })

  it('notions les plus ratées : par notion, repli sur le chapitre, triées, plafonnées à 5', () => {
    const s = courseStats(
      input,
      [att('q1', false), att('q2', false), att('q2', true), att('q3', false), att('q4', false), att('q4', false)],
      [],
      new Set(),
    )
    expect(s.weakSpots.map((w) => [w.id, w.missed, w.total])).toEqual([
      ['n-b', 3, 4],
      ['n-a', 2, 3],
      ['c-01', 1, 1],
    ])
    expect(s.weakSpots[0]).toMatchObject({ kind: 'notion', label: L('b'), chapterId: 'c-01' })
    expect(s.weakSpots[1]?.label).toEqual(L('Notion A'))
    expect(s.weakSpots[2]).toMatchObject({ kind: 'chapter', label: L('Titre c-01') })
  })

  it('une notion toujours réussie n’est pas un point faible', () => {
    expect(courseStats(input, [att('q1', true)], [], new Set()).weakSpots).toEqual([])
  })

  it('au plus 5 points faibles', () => {
    const many = chapter('c-03', Array.from({ length: 7 }, (_, i) => ({ id: `m${i}`, notions: [`n-m${i}`] })))
    const s = courseStats({ courseId: 'c', chapters: [many] }, many.quiz.map((q) => att(q.id, false)), [], new Set())
    expect(s.weakSpots).toHaveLength(5)
  })
})

describe('humanizeNotionId', () => {
  it('enlève le préfixe et les tirets', () => {
    expect(humanizeNotionId('n-other-validities')).toEqual(L('other validities'))
  })
})
