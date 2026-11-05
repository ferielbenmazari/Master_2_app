import 'fake-indexeddb/auto'
import { db } from './db'
import { formatInterval, getCardState, getDueCards, previewIntervals, review, Rating } from './fsrs'
import { getActivity } from './progress'

const T0 = new Date(2026, 10, 4, 10, 0, 0)
const min = (n: number) => new Date(T0.getTime() + n * 60_000)
const day = (n: number) => min(n * 1440)

beforeEach(async () => {
  await Promise.all([db.cards.clear(), db.attempts.clear(), db.reading.clear(), db.activity.clear()])
})

describe('formatInterval', () => {
  it('formate en unités lisibles', () => {
    expect(formatInterval(20_000)).toBe('< 1 min')
    expect(formatInterval(60_000)).toBe('1 min')
    expect(formatInterval(6 * 60_000)).toBe('6 min')
    expect(formatInterval(3 * 3_600_000)).toBe('3 h')
    expect(formatInterval(2 * 86_400_000)).toBe('2 j')
    expect(formatInterval(90 * 86_400_000)).toBe('3 mois')
    expect(formatInterval(400 * 86_400_000)).toBe('1 an')
    expect(formatInterval(900 * 86_400_000)).toBe('2 ans')
  })
})

describe('review / previewIntervals', () => {
  it('persiste la revue, compte l’activité et marque la carte introduite ce jour', async () => {
    const s = await review('c1', Rating.Good, T0)
    expect(s).toMatchObject({ cardId: 'c1', state: 1, reps: 1, lapses: 0, introduced: '2026-11-04' })
    expect(await getCardState('c1')).toEqual(s)
    expect(await getActivity()).toEqual([{ date: '2026-11-04', count: 1 }])
  })

  it('stocke des dates ISO et les champs de ts-fsrs', async () => {
    const s = await review('c1', Rating.Easy, T0)
    expect(new Date(s.due).toISOString()).toBe(s.due)
    expect(s.last_review).toBe(T0.toISOString())
    expect(s.stability).toBeGreaterThan(0)
    expect(s.scheduledDays).toBeGreaterThan(1)
  })

  it('previewIntervals : carte neuve puis carte en cours', async () => {
    const p = await previewIntervals('c1', T0)
    expect(p[Rating.Again]).toBe('1 min')
    expect(p[Rating.Hard]).toMatch(/^\d+ min$/)
    expect(p[Rating.Good]).toBe('10 min')
    expect(p[Rating.Easy]).toMatch(/ j$/)
    await review('c1', Rating.Good, T0)
    const q = await previewIntervals('c1', min(10))
    expect(q[Rating.Good]).toMatch(/ j$/)
  })

  it('« Encore » sur une carte en révision incrémente les lapses', async () => {
    await review('c1', Rating.Easy, T0)
    const s = await review('c1', Rating.Again, day(10))
    expect(s.lapses).toBe(1)
    expect(s.state).toBe(3)
  })
})

describe('getDueCards', () => {
  const universe = ['a', 'b', 'c', 'd', 'e']

  it('nouvelles cartes limitées par jour local, y compris après rechargement', async () => {
    expect(await getDueCards(T0, universe, 2)).toEqual(['a', 'b'])
    await review('a', Rating.Easy, T0)
    await review('b', Rating.Easy, T0)
    // quota atteint : les cartes revues (échéance lointaine) ne sont pas dues, aucune nouvelle de plus
    expect(await getDueCards(min(5), universe, 2)).toEqual([])
    // « rechargement » : le quota vient de la base, pas de la mémoire
    db.close()
    await db.open()
    expect(await getDueCards(min(5), universe, 2)).toEqual([])
    // le lendemain : de nouveau 2 nouvelles
    expect(await getDueCards(day(1), universe, 2)).toEqual(['c', 'd'])
  })

  it('le jour est le jour local (23 h 59 puis minuit)', async () => {
    const late = new Date(2026, 10, 4, 23, 59)
    await review('a', Rating.Easy, late)
    expect(await getDueCards(new Date(2026, 10, 4, 23, 59, 30), ['a', 'b'], 1)).toEqual([])
    expect(await getDueCards(new Date(2026, 10, 5, 0, 1), ['a', 'b'], 1)).toEqual(['b'])
  })

  it('une carte « Encore » revient avant une carte « Facile » et avant les nouvelles', async () => {
    await review('a', Rating.Easy, T0)
    await review('b', Rating.Again, T0)
    await review('c', Rating.Good, T0)
    const later = day(30)
    const order = await getDueCards(later, ['a', 'b', 'c', 'd'], 20)
    expect(order.slice(0, 3)).toEqual(['b', 'c', 'a'])
    expect(order[3]).toBe('d')
    // quelques minutes après : seules les cartes en apprentissage, Encore d'abord
    expect(await getDueCards(min(3), ['a', 'b', 'c'], 0)).toEqual(['b', 'c'])
  })

  it('ignore une carte stockée dont l’id a disparu du contenu', async () => {
    await review('fantome', Rating.Again, T0)
    expect(await getDueCards(min(5), ['a'], 20)).toEqual(['a'])
    expect(await getDueCards(min(5), ['fantome', 'a'], 20)).toEqual(['fantome', 'a'])
  })

  it('dédoublonne l’univers', async () => {
    expect(await getDueCards(T0, ['a', 'a', 'b'], 20)).toEqual(['a', 'b'])
  })
})

describe('migration v1 → v2', () => {
  it('une carte v1 (sans champs v2) reste lisible et révisable', async () => {
    await db.cards.put({ cardId: 'old', due: T0.toISOString(), stability: 2, difficulty: 5, reps: 1, lapses: 0, state: 2, last_review: '2026-11-01T10:00:00.000Z' })
    const s = await review('old', Rating.Good, T0)
    expect(s.reps).toBe(2)
    expect(s.state).toBe(2)
  })
})
