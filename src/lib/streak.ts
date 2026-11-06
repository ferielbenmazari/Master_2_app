import { localDate } from '@/store/progress'

/** Série : jours consécutifs avec activité, jusqu'à aujourd'hui (ou hier si rien aujourd'hui). Fuseau local. */
export function currentStreak(activityDates: string[], now: Date = new Date()): number {
  const days = new Set(activityDates)
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  if (!days.has(localDate(d))) d.setDate(d.getDate() - 1)
  let n = 0
  while (days.has(localDate(d))) {
    n++
    d.setDate(d.getDate() - 1)
  }
  return n
}

/** Intensité d'une case du calendrier : 0 = aucune action, 4 = journée très active. */
export type ActivityLevel = 0 | 1 | 2 | 3 | 4

export interface CalendarCell {
  /** Date locale AAAA-MM-JJ. */
  date: string
  count: number
  level: ActivityLevel
  /** Jour pas encore arrivé (case grisée). */
  future: boolean
}

export function activityLevel(count: number): ActivityLevel {
  if (count <= 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 10) return 3
  return 4
}

/**
 * Calendrier type « contributions » : `weeks` semaines (lundi → dimanche), la dernière étant celle d'aujourd'hui.
 * Retourne un tableau de semaines, chacune de 7 cases.
 */
export function activityCalendar(
  rows: readonly { date: string; count: number }[],
  now: Date = new Date(),
  weeks = 8,
): CalendarCell[][] {
  const counts = new Map<string, number>()
  for (const r of rows) counts.set(r.date, (counts.get(r.date) ?? 0) + r.count)
  const today = localDate(now)
  const mondayOffset = (now.getDay() + 6) % 7
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset - (weeks - 1) * 7)
  return Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const date = localDate(new Date(start.getFullYear(), start.getMonth(), start.getDate() + w * 7 + d))
      const count = counts.get(date) ?? 0
      return { date, count, level: activityLevel(count), future: date > today }
    }),
  )
}
