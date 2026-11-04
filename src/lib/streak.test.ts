import { currentStreak } from './streak'

const NOW = new Date(2026, 10, 4, 12)

describe('currentStreak', () => {
  it('0 sans activité', () => {
    expect(currentStreak([], NOW)).toBe(0)
  })
  it('compte les jours consécutifs jusqu’à aujourd’hui', () => {
    expect(currentStreak(['2026-11-02', '2026-11-03', '2026-11-04', '2026-10-30'], NOW)).toBe(3)
  })
  it('la série tient encore si seul hier est actif', () => {
    expect(currentStreak(['2026-11-02', '2026-11-03'], NOW)).toBe(2)
  })
  it('une journée manquée casse la série', () => {
    expect(currentStreak(['2026-11-01', '2026-11-02'], NOW)).toBe(0)
  })
})
