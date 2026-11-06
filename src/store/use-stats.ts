import { useEffect, useState } from 'react'
import { getCourses, getNotions, loadAllChapters } from '@/content/loader'
import { courseStats, type CourseStats } from '@/lib/stats'
import { activityCalendar, currentStreak, type CalendarCell } from '@/lib/streak'
import { getActivity, getAllCards, getAttempts, getFinishedChapterIds } from './progress'

export interface ProfileStats {
  streak: number
  calendar: CalendarCell[][]
  courses: CourseStats[]
}

/** Statistiques du profil, calculées depuis le stockage local (`null` pendant le chargement). */
export function useProfileStats(now?: Date): ProfileStats | null {
  const [stats, setStats] = useState<ProfileStats | null>(null)
  useEffect(() => {
    let live = true
    void (async () => {
      const [activity, attempts, cards, read] = await Promise.all([
        getActivity(),
        getAttempts(),
        getAllCards(),
        getFinishedChapterIds(),
      ])
      const courses = await Promise.all(
        getCourses().map(async (c) => {
          const [chapters, notions] = await Promise.all([loadAllChapters(c.id), getNotions(c.id)])
          const notionLabels = new Map(notions?.notions.map((n) => [n.id, n.label]))
          return courseStats({ courseId: c.id, chapters, notionLabels }, attempts, cards, read)
        }),
      )
      if (!live) return
      setStats({
        streak: currentStreak(activity.filter((r) => r.count > 0).map((r) => r.date), now),
        calendar: activityCalendar(activity, now),
        courses,
      })
    })()
    return () => {
      live = false
    }
  }, [now])
  return stats
}
