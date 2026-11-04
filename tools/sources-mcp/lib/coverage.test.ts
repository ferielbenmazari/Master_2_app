import { describe, expect, it } from 'vitest'
import { NotionsSchema, type Chapter } from '../../../src/content/schema.ts'
import { computeCoverage } from './coverage.ts'

const L = (s: string) => ({ fr: s, en: s })
const src = [{ file: 'x.md', loc: 'l', quote: 'une citation assez longue ici' }]
const notions = NotionsSchema.parse({
  courseId: 'tst',
  status: 'test',
  notions: [
    { id: 'n-a', label: L('A'), importance: 3, why: 'w', chapter: '01', src },
    { id: 'n-b', label: L('B'), importance: 2, why: 'w', chapter: '01', src },
    { id: 'n-c', label: L('C'), importance: 3, why: 'w', chapter: '01', src },
    { id: 'n-d', label: L('D'), importance: 2, why: 'w', chapter: '02', src },
  ],
})
// Chapitre minimal : seuls les champs lus par computeCoverage comptent (le schéma impose des minimums de contenu).
const chapter = {
  id: 'tst-01-x',
  courseId: 'tst',
  title: L('t'),
  estimatedMinutes: 5,
  sources: [],
  story: [{ type: 'paragraph', text: L('p'), src, notions: ['n-a', 'n-b'] }],
  keyPoints: [],
  glossary: [],
  flashcards: [{ id: 'tst-01-f1', front: L('f'), back: L('b'), src, notions: ['n-a', 'n-b'] }],
  quiz: [{ id: 'tst-01-q1', type: 'true_false', level: 'apply', statement: L('s'), answer: true, explanation: L('e'), src, notions: ['n-a'] }],
  exercises: [],
  writing: [],
} as unknown as Chapter

describe('computeCoverage', () => {
  const r = computeCoverage(notions, [chapter])
  const st = (id: string) => r.notions.find((n) => n.id === id)
  it('★★★ couverte avec bloc + quiz + flashcard', () => expect(st('n-a')?.status).toBe('covered'))
  it('★★ couverte avec bloc + flashcard', () => expect(st('n-b')?.status).toBe('covered'))
  it('notion non référencée : absente', () => {
    expect(st('n-c')).toMatchObject({ status: 'absent', missing: ["bloc d'histoire", 'quiz', 'flashcard'] })
    expect(st('n-d')).toMatchObject({ status: 'absent', chapterWritten: false })
  })
  it('totaux par chapitre', () => expect(r.byChapter['01']).toEqual({ total: 3, covered: 2, partial: 0, absent: 1 }))
})
