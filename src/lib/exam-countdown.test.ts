import type { Course } from '@/content/schema'
import { daysUntil, nextExam, stickerDays } from './exam-countdown'

const NOW = new Date(2026, 10, 4, 15, 30) // 4 nov. 2026
const course = (id: string, examDate?: string) =>
  ({ id, code: id.toUpperCase(), examDate }) as unknown as Course

describe('daysUntil', () => {
  it('compte les jours calendaires', () => {
    expect(daysUntil('2026-11-10', NOW)).toBe(6)
    expect(daysUntil('2026-11-04', NOW)).toBe(0)
    expect(daysUntil('2026-11-01', NOW)).toBe(-3)
  })
  it('renvoie null sans date ou avec un format invalide', () => {
    expect(daysUntil(undefined, NOW)).toBeNull()
    expect(daysUntil('10/11/2026', NOW)).toBeNull()
  })
})

describe('stickerDays', () => {
  it('seulement dans les 30 prochains jours', () => {
    expect(stickerDays('2026-11-10', NOW)).toBe(6)
    expect(stickerDays('2026-12-03', NOW)).toBe(29)
    expect(stickerDays('2026-12-04', NOW)).toBeNull()
    expect(stickerDays('2026-11-01', NOW)).toBeNull()
    expect(stickerDays(undefined, NOW)).toBeNull()
  })
})

describe('nextExam', () => {
  it('prend le plus proche non passé', () => {
    const r = nextExam([course('a', '2026-11-12'), course('b', '2026-11-09'), course('c', '2026-10-01'), course('d')], NOW)
    expect(r?.course.id).toBe('b')
    expect(r?.days).toBe(5)
  })
  it('renvoie null sans examDate', () => {
    expect(nextExam([course('a'), course('b')], NOW)).toBeNull()
  })
})
