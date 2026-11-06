import { Flame } from 'lucide-react'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import { getCourses } from '@/content/loader'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import { useProfileStats } from '@/store/use-stats'
import ActivityCalendar from './ActivityCalendar'
import CourseStatsPanel from './CourseStatsPanel'

/** Régularité (série + calendrier) et statistiques par matière. */
export default function StatsSection({ now }: { now?: Date }) {
  const { prefs } = usePrefs()
  const stats = useProfileStats(now)
  const t = UI.stats
  if (!stats) {
    return (
      <p className="text-sm text-ink-soft" role="status">
        {t.loading}
      </p>
    )
  }
  const courses = getCourses()
  return (
    <section aria-labelledby="stats-title" className="flex flex-col gap-4">
      <h2 id="stats-title" className="display text-lg">
        {t.title}
      </h2>
      <Panel className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="streak" aria-hidden="true">
            <Icon icon={Flame} />
            {stats.streak}
          </span>
          <p className="text-sm text-ink-soft">{stats.streak > 0 ? t.streakDays(stats.streak) : t.streakNone}</p>
        </div>
        <h3 className="mono dim">{t.calendarTitle}</h3>
        <ActivityCalendar weeks={stats.calendar} />
      </Panel>
      <div className="grid gap-4 md:grid-cols-2">
        {stats.courses.flatMap((s) => {
          const course = courses.find((c) => c.id === s.courseId)
          return course ? [<CourseStatsPanel key={s.courseId} course={course} stats={s} langMode={prefs.langMode} />] : []
        })}
      </div>
    </section>
  )
}
