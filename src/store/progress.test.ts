import 'fake-indexeddb/auto'
import { db } from './db'
import { getActivity, getAttempts, getCard, getReading, localDate, putCard, recordAttempt, setReading, bumpActivity } from './progress'

beforeEach(async () => {
  await Promise.all([db.cards.clear(), db.attempts.clear(), db.reading.clear(), db.activity.clear()])
})

describe('progress', () => {
  it('localDate formate en date locale', () => {
    expect(localDate(new Date(2026, 10, 9, 23, 59))).toBe('2026-11-09')
    expect(localDate(new Date(2026, 0, 5))).toBe('2026-01-05')
  })

  it('recordAttempt enregistre, filtre et compte l’activité', async () => {
    await recordAttempt({ itemId: 'q1', kind: 'quiz', correct: true, at: '2026-11-03T10:00:00' })
    await recordAttempt({ itemId: 'q2', kind: 'exercise', correct: false, score: 0.5, at: '2026-11-03T11:00:00' })
    await recordAttempt({ itemId: 'q1', kind: 'quiz', correct: false, at: '2026-11-04T09:00:00' })
    expect(await getAttempts()).toHaveLength(3)
    expect(await getAttempts({ itemId: 'q1' })).toHaveLength(2)
    expect(await getAttempts({ kind: 'exercise' })).toHaveLength(1)
    expect(await getAttempts({ since: '2026-11-04' })).toHaveLength(1)
    expect(await getActivity()).toEqual([
      { date: '2026-11-03', count: 2 },
      { date: '2026-11-04', count: 1 },
    ])
  })

  it('setReading borne la progression et garde finishedAt', async () => {
    await setReading('c1', 1.4, true)
    const first = await getReading('c1')
    expect(first?.progress).toBe(1)
    expect(first?.finishedAt).toBeDefined()
    await setReading('c1', 0.5)
    expect((await getReading('c1'))?.finishedAt).toBe(first?.finishedAt)
    expect(await getReading('absent')).toBeUndefined()
    expect((await getActivity())[0]?.count).toBe(2)
  })

  it('putCard et bumpActivity', async () => {
    await putCard({ cardId: 'k', due: '2026-11-05T00:00:00.000Z', stability: 1, difficulty: 5, reps: 1, lapses: 0, state: 1 })
    expect((await getCard('k'))?.reps).toBe(1)
    await bumpActivity('2026-01-01')
    await bumpActivity('2026-01-01')
    expect((await getActivity()).find((a) => a.date === '2026-01-01')?.count).toBe(2)
  })
})
