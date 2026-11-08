import { getExamIndex, loadExam } from '@/content/loader'
import type { Exam, ExamQuestion } from '@/content/schema'
import type { Attempt } from '@/store/db'
import {
  answeredCount,
  autoPoints,
  bestAttempt,
  bestScores,
  criteriaWeights,
  criterionPoints,
  flattenQuestions,
  openPoints,
  scoreExam,
  splitMaterial,
  toNote20,
  totalPoints,
} from './exam-logic'

const L = (s: string) => ({ fr: s, en: `${s} (en)` })
const base = { level: 'understand' as const, src: [{ file: 'f.pdf', loc: 'p.1', quote: 'q' }] }

const tf = (id: string, points: number, answer: boolean): ExamQuestion => ({
  id,
  type: 'true_false',
  points,
  statement: L('énoncé'),
  answer,
  justification: L('j'),
  ...base,
})
const mcq = (id: string, points: number, correct: number[]): ExamQuestion => ({
  id,
  type: 'mcq',
  points,
  question: L('q'),
  options: [L('a'), L('b'), L('c')],
  correct,
  explanation: L('e'),
  ...base,
})
const open = (id: string, points: number, guide: string[]): ExamQuestion => ({
  id,
  type: 'open',
  points,
  prompt: L('p'),
  correction: L('c'),
  gradingGuide: guide.map(L),
  ...base,
})

function exam(questions: ExamQuestion[][]): Exam {
  return {
    id: 'x-exam',
    courseId: 'x',
    title: L('t'),
    kind: 'mock',
    durationMinutes: 30,
    correctionStatus: 'proposed',
    instructions: L('i'),
    sections: questions.map((qs, i) => ({
      title: L(`S${i}`),
      points: qs.reduce((t, q) => t + q.points, 0),
      instructions: L('i'),
      questions: qs,
    })),
  }
}

describe('toNote20', () => {
  it('ramène sur 20 quel que soit le barème', () => {
    expect(toNote20(22, 22)).toBe(20)
    expect(toNote20(11, 22)).toBe(10)
    expect(toNote20(20, 40)).toBe(10)
    expect(toNote20(0, 22)).toBe(0)
    expect(toNote20(7, 20)).toBe(7)
  })
  it('arrondit au centième, borne à [0, 20], barème vide = 0', () => {
    expect(toNote20(1, 3)).toBe(6.67)
    expect(toNote20(30, 20)).toBe(20)
    expect(toNote20(-2, 20)).toBe(0)
    expect(toNote20(5, 0)).toBe(0)
  })
})

describe('correction automatique', () => {
  it('vrai/faux : points si la réponse est la bonne, 0 sinon ou sans réponse', () => {
    const q = tf('a', 2, false) as Extract<ExamQuestion, { type: 'true_false' }>
    expect(autoPoints(q, { bool: false })).toBe(2)
    expect(autoPoints(q, { bool: true })).toBe(0)
    expect(autoPoints(q, { text: 'juste une justification' })).toBe(0)
    expect(autoPoints(q, undefined)).toBe(0)
  })
  it('QCM : ensemble exact, pas de crédit partiel', () => {
    const q = mcq('m', 3, [0, 2]) as Extract<ExamQuestion, { type: 'mcq' }>
    expect(autoPoints(q, { picks: [2, 0] })).toBe(3)
    expect(autoPoints(q, { picks: [0] })).toBe(0)
    expect(autoPoints(q, { picks: [0, 1, 2] })).toBe(0)
    expect(autoPoints(q, { picks: [] })).toBe(0)
  })
})

describe('critères de correction', () => {
  it('lit les points dans le texte du critère', () => {
    expect(criterionPoints('Définition (1,5 pt)')).toBe(1.5)
    expect(criterionPoints('Cinq activités nommées (2,5 pts)')).toBe(2.5)
    expect(criterionPoints('1,2 pt par ligne comparée correctement')).toBe(1.2)
    expect(criterionPoints('Justification par le bon scénario')).toBeNull()
  })
  it('un critère sans points pèse comme la moyenne des autres', () => {
    const q = open('o', 6, ['A (2 pts)', 'B (4 pts)', 'C']) as Extract<ExamQuestion, { type: 'open' }>
    expect(criteriaWeights(q)).toEqual([2, 4, 3])
  })
  it('question ouverte : proportion des critères cochés × points, plafonnée', () => {
    const q = open('o', 8, ['A (2 pts)', 'B (2 pts)', 'C (2 pts)', 'D (2 pts)']) as Extract<ExamQuestion, { type: 'open' }>
    expect(openPoints(q, [])).toBe(0)
    expect(openPoints(q, [0, 3])).toBe(4)
    expect(openPoints(q, [0, 1, 2, 3])).toBe(8)
    expect(openPoints(q, [0, 0, 0])).toBe(2) // doublons ignorés
    expect(openPoints(q, [9])).toBe(0) // indice inconnu ignoré
  })
  it('barème de la fiche différent de `points` : normalisé sur `points`', () => {
    const q = open('o', 6, ['1,5 pt par situation correctement classée', 'Justification']) as Extract<ExamQuestion, { type: 'open' }>
    expect(openPoints(q, [0, 1])).toBe(6)
    expect(openPoints(q, [0])).toBe(3)
  })
})

describe('scoreExam', () => {
  const e = exam([
    [tf('t1', 2, true), tf('t2', 2, false)],
    [mcq('m1', 2, [1])],
    [open('o1', 6, ['A (3 pts)', 'B (3 pts)'])],
  ])

  it('barème et numérotation', () => {
    expect(totalPoints(e)).toBe(12)
    expect(flattenQuestions(e).map((f) => [f.q.id, f.section, f.n])).toEqual([
      ['t1', 0, 1],
      ['t2', 0, 2],
      ['m1', 1, 3],
      ['o1', 2, 4],
    ])
  })

  it('copie parfaite = 20/20', () => {
    const s = scoreExam(
      e,
      { t1: { bool: true }, t2: { bool: false }, m1: { picks: [1] }, o1: { text: 'x' } },
      { o1: [0, 1] },
    )
    expect(s).toMatchObject({ earned: 12, total: 12, note: 20 })
  })

  it('copie blanche = 0/20', () => {
    const s = scoreExam(e, {}, {})
    expect(s).toMatchObject({ earned: 0, note: 0 })
    expect(s.questions.every((q) => q.blank)).toBe(true)
  })

  it('mélange : 2 + 0 + 2 + 3 = 7/12 → 11,67/20', () => {
    const s = scoreExam(e, { t1: { bool: true }, t2: { bool: true }, m1: { picks: [1] }, o1: { text: 'x' } }, { o1: [1] })
    expect(s.earned).toBe(7)
    expect(s.note).toBe(11.67)
    expect(s.questions.map((q) => q.earned)).toEqual([2, 0, 2, 3])
  })

  it('compte les questions traitées par section', () => {
    expect(answeredCount(e, 0, { t1: { bool: true }, t2: { text: '  ' } })).toBe(1)
    expect(answeredCount(e, 2, { o1: { text: 'réponse' } })).toBe(1)
    expect(answeredCount(e, 9, {})).toBe(0)
  })
})

describe('meilleure tentative', () => {
  const at = (id: string, score: number, when: string): Attempt => ({ itemId: id, kind: 'exam', correct: score >= 10, score, at: when })
  it('note la plus haute, la plus récente à égalité', () => {
    const list = [at('e', 8, '2026-01-01'), at('e', 14, '2026-01-02'), at('e', 14, '2026-01-03'), at('e', 11, '2026-01-04')]
    expect(bestAttempt(list)).toEqual(at('e', 14, '2026-01-03'))
    expect(bestAttempt([])).toBeUndefined()
  })
  it('par partiel, en ignorant les autres types de tentatives', () => {
    const m = bestScores([
      at('a', 5, '2026-01-01'),
      at('a', 12.5, '2026-01-02'),
      at('b', 9, '2026-01-01'),
      { itemId: 'a', kind: 'quiz', correct: true, score: 19, at: '2026-01-05' },
    ])
    expect([...m]).toEqual([
      ['a', 12.5],
      ['b', 9],
    ])
  })
})

describe('splitMaterial', () => {
  it('markdown seul', () => {
    expect(splitMaterial('Voici un texte')).toEqual([{ kind: 'md', text: 'Voici un texte' }])
  })
  it('bloc mermaid entouré de markdown ; ASCII en bloc de code conservé', () => {
    const src = 'Avant\n\n```mermaid\ngraph TD\n  A-->B\n```\n\nAprès\n\n```\n+--+\n|ab|\n+--+\n```\n'
    const parts = splitMaterial(src)
    expect(parts.map((p) => p.kind)).toEqual(['md', 'mermaid', 'md'])
    expect(parts[1]).toEqual({ kind: 'mermaid', code: 'graph TD\n  A-->B' })
    expect((parts[2] as { text: string }).text).toContain('+--+')
  })
  it('vide', () => {
    expect(splitMaterial('  \n')).toEqual([])
  })
})

describe('partiels REC1 réels', () => {
  it('le loader indexe et valide les 7 partiels blancs, barème cohérent', async () => {
    const refs = getExamIndex('rec1')
    expect(refs.length).toBeGreaterThanOrEqual(7)
    for (const ref of refs) {
      const ex = await loadExam('rec1', ref.slug)
      expect(totalPoints(ex)).toBeGreaterThan(0)
      // copie parfaite (auto + tous critères cochés) = 20 ; copie blanche = 0
      const answers = Object.fromEntries(
        flattenQuestions(ex).map(({ q }) => [
          q.id,
          q.type === 'true_false' ? { bool: q.answer } : q.type === 'mcq' ? { picks: [...q.correct] } : { text: 'x' },
        ]),
      )
      const grading = Object.fromEntries(
        flattenQuestions(ex).flatMap(({ q }) => (q.type === 'open' ? [[q.id, q.gradingGuide.map((_, i) => i)]] : [])),
      )
      expect(scoreExam(ex, answers, grading).note).toBe(20)
      expect(scoreExam(ex, {}, {}).note).toBe(0)
    }
  })
})
