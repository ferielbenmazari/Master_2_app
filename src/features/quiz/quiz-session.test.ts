import { loadChapter } from '@/content/loader'
import { isCorrect } from './quiz-logic'
import { mistakes, score, sessionReducer, startSession, type SessionState } from './quiz-session'

async function play(wrongIds: Set<string>) {
  const ch = await loadChapter('rec1-05-qualite-validite-ethique')
  let s = startSession(ch.quiz, 11)
  for (const p of s.round) {
    s = sessionReducer(s, { type: 'answer', id: p.item.id, correct: !wrongIds.has(p.item.id) })
    s = sessionReducer(s, { type: 'next' })
  }
  return s
}

describe('session de quiz', () => {
  it('score, combo, XP et fin', async () => {
    const s = await play(new Set(['rec1-05-qz-03']))
    expect(s.finished).toBe(true)
    expect(score(s)).toEqual({ correct: 9, total: 10 })
    expect(mistakes(s).map((p) => p.item.id)).toEqual(['rec1-05-qz-03'])
    expect(s.xp).toBeGreaterThan(0)
  })

  it('le combo est remis à 0 sur erreur', () => {
    const items = [1, 2, 3].map((n) => ({
      id: `t-${n}`,
      type: 'true_false' as const,
      statement: { fr: 'a', en: 'a' },
      answer: true,
      justification: { fr: 'a', en: 'a' },
      level: 'apply' as const,
      src: [],
    }))
    let s: SessionState = startSession(items, 1)
    s = sessionReducer(s, { type: 'answer', id: 't-1', correct: true })
    s = sessionReducer(s, { type: 'answer', id: 't-2', correct: true })
    expect(s.combo).toBe(2)
    s = sessionReducer(s, { type: 'answer', id: 't-3', correct: false })
    expect(s.combo).toBe(0)
    expect(s.xp).toBe(25)
  })

  it('« Refaire mes erreurs » ne repropose que les erreurs de la session', async () => {
    const wrong = new Set(['rec1-05-qz-02', 'rec1-05-qz-07', 'rec1-05-qz-10'])
    const s1 = await play(wrong)
    const s2 = sessionReducer(s1, { type: 'retry', seed: 5 })
    expect(s2.round.map((p) => p.item.id).sort()).toEqual([...wrong].sort())
    expect(s2.results).toEqual({})
    expect(s2.finished).toBe(false)
    // seconde manche : une seule erreur restante -> la suivante ne contient qu'elle
    let s = s2
    for (const p of s.round) {
      s = sessionReducer(s, { type: 'answer', id: p.item.id, correct: p.item.id !== 'rec1-05-qz-07' })
      s = sessionReducer(s, { type: 'next' })
    }
    const s3 = sessionReducer(s, { type: 'retry', seed: 6 })
    expect(s3.round.map((p) => p.item.id)).toEqual(['rec1-05-qz-07'])
  })

  it('refuse de rejouer sans erreur, et ignore une double réponse', async () => {
    const s1 = await play(new Set())
    expect(sessionReducer(s1, { type: 'retry', seed: 1 })).toBe(s1)
    const id = s1.round[0]!.item.id
    expect(sessionReducer(s1, { type: 'answer', id, correct: false })).toBe(s1)
  })

  it('les options mélangées gardent la correspondance avec correct', async () => {
    const s = await play(new Set())
    for (const p of s.round) {
      if (p.item.type === 'mcq') {
        const shownGood = p.order.flatMap((orig, k) => (p.item.type === 'mcq' && p.item.correct.includes(orig) ? [k] : []))
        expect(isCorrect(p.item, shownGood.map((k) => p.order[k]!))).toBe(true)
      }
    }
  })
})
