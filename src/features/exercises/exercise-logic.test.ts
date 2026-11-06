import type { Exercise } from '@/content/schema'
import { ratingOutcome, sortByDifficulty } from './exercise-logic'

const ex = (id: string, difficulty: 1 | 2 | 3): Exercise => ({
  id,
  title: { fr: id, en: id },
  difficulty,
  statement: { fr: 's', en: 's' },
  hints: [{ fr: 'h', en: 'h' }],
  solution: { fr: 's', en: 's' },
  level: 'apply',
  src: [],
})

describe('exercices', () => {
  it('tri par difficulté, stable', () => {
    const out = sortByDifficulty([ex('c', 3), ex('a', 1), ex('d', 1), ex('b', 2)])
    expect(out.map((e) => e.id)).toEqual(['a', 'd', 'b', 'c'])
  })

  it('auto-évaluation', () => {
    expect(ratingOutcome('success')).toEqual({ correct: true, score: 1 })
    expect(ratingOutcome('medium')).toEqual({ correct: false, score: 0.5 })
    expect(ratingOutcome('missed')).toEqual({ correct: false, score: 0 })
  })
})
