import { loadChapter } from '@/content/loader'
import type { QuizItem } from '@/content/schema'
import { isCorrect, prepareQuiz, scoreAnswer } from './quiz-logic'

const L = (s: string) => ({ fr: s, en: s })
const mcq: QuizItem = {
  id: 'x-qz-01',
  type: 'mcq',
  question: L('q'),
  options: [L('a'), L('b'), L('c'), L('d')],
  correct: [0, 2],
  explanation: L('e'),
  level: 'apply',
  src: [],
}
const tf: QuizItem = {
  id: 'x-qz-02',
  type: 'true_false',
  statement: L('s'),
  answer: false,
  justification: L('j'),
  level: 'remember',
  src: [],
}

describe('isCorrect', () => {
  it('vrai/faux', () => {
    expect(isCorrect(tf, false)).toBe(true)
    expect(isCorrect(tf, true)).toBe(false)
    expect(isCorrect(tf, [0])).toBe(false)
  })
  it('QCM multi-réponses : ensemble exact, ordre libre, pas de crédit partiel', () => {
    expect(isCorrect(mcq, [0, 2])).toBe(true)
    expect(isCorrect(mcq, [2, 0])).toBe(true)
    expect(isCorrect(mcq, [0])).toBe(false)
    expect(isCorrect(mcq, [0, 2, 3])).toBe(false)
    expect(isCorrect(mcq, [1, 3])).toBe(false)
    expect(isCorrect(mcq, [])).toBe(false)
    expect(isCorrect(mcq, true)).toBe(false)
  })
})

describe('scoreAnswer', () => {
  it('+10 par bonne réponse, +5 dès le combo x2, remise à 0 sur erreur', () => {
    expect(scoreAnswer(0, true)).toEqual({ combo: 1, xp: 10 })
    expect(scoreAnswer(1, true)).toEqual({ combo: 2, xp: 15 })
    expect(scoreAnswer(4, false)).toEqual({ combo: 0, xp: 0 })
  })
})

describe('prepareQuiz', () => {
  it('est stable pour une graine et garde la correspondance avec correct', () => {
    const a = prepareQuiz([mcq, tf], 7)
    expect(prepareQuiz([mcq, tf], 7)).toEqual(a)
    const p = a.find((x) => x.item.id === mcq.id)!
    expect([...p.order].sort()).toEqual([0, 1, 2, 3])
    // les options affichées correspondant aux indices originaux "a" et "c" sont les bonnes
    const shownCorrect = p.order.map((orig, k) => (mcq.type === 'mcq' && mcq.correct.includes(orig) ? k : -1)).filter((k) => k >= 0)
    const back = shownCorrect.map((k) => p.order[k]!)
    expect(isCorrect(mcq, back)).toBe(true)
  })
})

describe('REC1-05', () => {
  it('tous les items sont préparables et leur bonne réponse est reconnue', async () => {
    const ch = await loadChapter('rec1-05-qualite-validite-ethique')
    expect(ch.quiz.length).toBeGreaterThanOrEqual(10)
    const prepared = prepareQuiz(ch.quiz, 3)
    expect(prepared).toHaveLength(ch.quiz.length)
    for (const { item, order } of prepared) {
      if (item.type === 'true_false') {
        expect(isCorrect(item, item.answer)).toBe(true)
        expect(isCorrect(item, !item.answer)).toBe(false)
      } else {
        expect([...order].sort()).toEqual(item.options.map((_, i) => i))
        expect(isCorrect(item, item.correct)).toBe(true)
      }
    }
  })
})
