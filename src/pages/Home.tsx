import { Flame, Users } from 'lucide-react'
import { Link } from 'react-router'
import CourseCard from '@/components/home/CourseCard'
import MissionPanel from '@/components/home/MissionPanel'
import HexAvatar from '@/components/ui/HexAvatar'
import Icon from '@/components/ui/Icon'
import TypeLine from '@/components/ui/TypeLine'
import XpBar from '@/components/ui/XpBar'
import { getChapterIndex, getCourses } from '@/content/loader'
import { nextExam } from '@/lib/exam-countdown'
import { GAME } from '@/i18n/game-ui'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import { useDueCount, useReadChapters, useStreak } from '@/store/use-progress'

export default function Home({ now }: { now?: Date }) {
  const { prefs } = usePrefs()
  const courses = getCourses()
  const due = useDueCount()
  const { streak, grew } = useStreak()
  const read = useReadChapters(courses.flatMap((c) => getChapterIndex(c.id).map((r) => r.id)))
  const next = nextExam(courses, now)
  const log = next ? UI.home.logExam(next.course.code.replace(/^S\d+-/, ''), next.days, due) : UI.home.logNeutral(due)

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center gap-3">
        <HexAvatar initials={prefs.pseudo} course={prefs.avatar} aria-hidden="true" />
        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h1 className="display text-[15px]">{UI.home.greeting(prefs.pseudo)}</h1>
            <span className={grew ? 'streak pop-up' : 'streak'} aria-label={UI.home.streak(streak)}>
              <Icon icon={Flame} />
              {streak}
            </span>
          </div>
          <div className="mb-1 flex items-baseline justify-between">
            <span className="mono dim">{UI.home.rank}</span>
            <span className="mono hl">0 {UI.home.xp}</span>
          </div>
          <XpBar value={0} label={UI.home.xpLabel} />
        </div>
      </header>
      <TypeLine text={log} />
      <MissionPanel due={due} />
      <section aria-label={UI.home.courses}>
        <div className="stagger grid grid-cols-2 gap-3 lg:grid-cols-4" style={{ perspective: 700 }}>
          {courses.map((c, i) => (
            <CourseCard key={c.id} course={c} read={read} langMode={prefs.langMode} now={now} index={i} />
          ))}
        </div>
      </section>
      <Link to="/jouer" className="mono dim inline-flex min-h-11 items-center gap-2 self-start underline underline-offset-4">
        <Icon icon={Users} size={14} />
        {GAME.entry}
      </Link>
    </div>
  )
}
