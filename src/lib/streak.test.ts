import { activityCalendar, activityLevel, currentStreak } from './streak'

const NOW = new Date(2026, 10, 4, 12) // mercredi 4 novembre 2026

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
  it('un seul jour (aujourd’hui) vaut 1', () => {
    expect(currentStreak(['2026-11-04'], NOW)).toBe(1)
  })
  it('ignore les doublons et l’ordre', () => {
    expect(currentStreak(['2026-11-04', '2026-11-03', '2026-11-04', '2026-11-02'], NOW)).toBe(3)
  })
  it('traverse un changement de mois et d’année', () => {
    expect(currentStreak(['2026-12-30', '2026-12-31', '2027-01-01'], new Date(2027, 0, 1, 8))).toBe(3)
    expect(currentStreak(['2026-10-30', '2026-10-31', '2026-11-01'], new Date(2026, 10, 1, 23, 59))).toBe(3)
  })
  it('traverse le passage à l’heure d’hiver (25 octobre 2026) sans sauter de jour', () => {
    const days = ['2026-10-23', '2026-10-24', '2026-10-25', '2026-10-26', '2026-10-27']
    expect(currentStreak(days, new Date(2026, 9, 27, 0, 30))).toBe(5)
  })
  it('un jour futur isolé ne compte pas', () => {
    expect(currentStreak(['2026-11-06'], NOW)).toBe(0)
  })
})

describe('activityLevel', () => {
  it('quantifie le nombre d’actions', () => {
    expect([0, 1, 2, 3, 5, 6, 10, 11].map(activityLevel)).toEqual([0, 1, 1, 2, 2, 3, 3, 4])
  })
})

describe('activityCalendar', () => {
  it('8 semaines de 7 jours, lundi → dimanche, la dernière contient aujourd’hui', () => {
    const cal = activityCalendar([], NOW)
    expect(cal).toHaveLength(8)
    expect(cal.every((w) => w.length === 7)).toBe(true)
    expect(cal[7]?.[0]?.date).toBe('2026-11-02') // lundi
    expect(cal[7]?.[2]?.date).toBe('2026-11-04')
    expect(cal[7]?.[6]?.date).toBe('2026-11-08')
    expect(cal[0]?.[0]?.date).toBe('2026-09-14')
  })
  it('marque les jours futurs et reporte les compteurs', () => {
    const cal = activityCalendar(
      [
        { date: '2026-11-04', count: 4 },
        { date: '2026-11-03', count: 1 },
        { date: '2026-09-14', count: 20 },
      ],
      NOW,
    )
    const last = cal[7] ?? []
    expect(last.map((c) => c.future)).toEqual([false, false, false, true, true, true, true])
    expect(last[2]).toMatchObject({ count: 4, level: 2 })
    expect(last[1]).toMatchObject({ count: 1, level: 1 })
    expect(cal[0]?.[0]).toMatchObject({ count: 20, level: 4 })
  })
  it('un dimanche reste dans la semaine qui finit ce jour-là', () => {
    const cal = activityCalendar([], new Date(2026, 10, 8, 10))
    expect(cal[7]?.[6]?.date).toBe('2026-11-08')
    expect(cal[7]?.every((c) => !c.future)).toBe(true)
  })
})
