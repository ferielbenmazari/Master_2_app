import { localDate } from '@/store/progress'

/** Série simple : jours consécutifs avec activité, jusqu'à aujourd'hui (ou hier si rien aujourd'hui). La série complète est T12. */
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
