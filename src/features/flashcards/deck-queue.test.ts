import 'fake-indexeddb/auto'
import { db } from '@/store/db'
import { getDueCards, review, Rating } from '@/store/fsrs'
import { requeue } from './deck-queue'

const T0 = new Date(2026, 10, 4, 10, 0, 0)
const others = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10', 'x11', 'x12']

beforeEach(async () => {
  await Promise.all([db.cards.clear(), db.activity.clear()])
})

describe('requeue', () => {
  it('« Encore » revient avant « Bien » dans la même session ; « Facile » ne revient pas', async () => {
    const again = await review('a', Rating.Again, T0)
    const good = await review('g', Rating.Good, T0)
    const easy = await review('e', Rating.Easy, T0)
    const now = T0.getTime()
    const qAgain = requeue(others, 'a', again.state, new Date(again.due).getTime(), now)
    const qGood = requeue(others, 'g', good.state, new Date(good.due).getTime(), now)
    const qEasy = requeue(others, 'e', easy.state, new Date(easy.due).getTime(), now)
    expect(qAgain.indexOf('a')).toBeGreaterThan(0)
    expect(qAgain.indexOf('a')).toBeLessThan(qGood.indexOf('g'))
    expect(qEasy).toEqual(others)
  })

  it('une carte seule en apprentissage est reproposée tout de suite', () => {
    expect(requeue([], 'a', 1, T0.getTime() + 60_000, T0.getTime())).toEqual(['a'])
  })

  it('ne réinsère pas une carte planifiée au-delà de la fenêtre d’apprentissage', () => {
    expect(requeue(['b'], 'a', 2, T0.getTime() + 3 * 86_400_000, T0.getTime())).toEqual(['b'])
  })
})

describe('session : ordre et persistance', () => {
  it('une session rechargée propose « Encore » avant « Facile » une fois leurs échéances atteintes', async () => {
    await review('easy', Rating.Easy, T0)
    await review('again', Rating.Again, T0)
    const t = new Date(T0.getTime() + 10 * 86_400_000)
    expect((await getDueCards(t, ['easy', 'again'], 20))[0]).toBe('again')
  })
})
