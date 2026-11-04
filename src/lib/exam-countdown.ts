import type { Course } from '@/content/schema'

const DAY_MS = 86_400_000

/** Jours calendaires entre `now` et `examDate` (AAAA-MM-JJ) ; `null` si absente ou invalide. */
export function daysUntil(examDate: string | undefined, now: Date = new Date()): number | null {
  const m = examDate ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(examDate) : null
  if (!m) return null
  const target = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((target - today) / DAY_MS)
}

/** Nombre de jours à afficher en sticker « J-n » : seulement si le contrôle est dans moins de 30 jours. */
export function stickerDays(examDate: string | undefined, now: Date = new Date()): number | null {
  const d = daysUntil(examDate, now)
  return d !== null && d >= 0 && d < 30 ? d : null
}

/** Prochain contrôle daté (aujourd'hui ou à venir), ou `null` si aucune matière n'a de `examDate`. */
export function nextExam(courses: Course[], now: Date = new Date()): { course: Course; days: number } | null {
  let best: { course: Course; days: number } | null = null
  for (const course of courses) {
    const days = daysUntil(course.examDate, now)
    if (days !== null && days >= 0 && (!best || days < best.days)) best = { course, days }
  }
  return best
}
