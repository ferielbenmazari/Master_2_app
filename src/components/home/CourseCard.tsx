import { Link } from 'react-router'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import SegBar from '@/components/ui/SegBar'
import Tag from '@/components/ui/Tag'
import { getChapterIndex } from '@/content/loader'
import type { Course } from '@/content/schema'
import { pickLang } from '@/lib/bilingual'
import { courseIcon } from '@/lib/course-icon'
import { stickerDays } from '@/lib/exam-countdown'
import { UI } from '@/i18n/ui'
import type { LangMode } from '@/store/prefs'

type CourseCardProps = {
  course: Course
  /** Ids des chapitres lus. */
  read: Set<string>
  langMode: LangMode
  now?: Date
  index?: number
}

/** Carte matière de l'accueil : icône lucide, titre, code, chapitres lus, sticker J-n. */
export default function CourseCard({ course, read, langMode, now, index = 0 }: CourseCardProps) {
  const chapters = getChapterIndex(course.id)
  const done = chapters.filter((c) => read.has(c.id)).length
  const days = stickerDays(course.examDate, now)
  const empty = chapters.length === 0
  const { main } = pickLang(course.title, langMode)
  return (
    <Link to={`/matiere/${course.id}`} className="block h-full" style={{ '--i': index } as React.CSSProperties}>
      <Panel
        course={course.color}
        hi={!empty}
        drop
        tilt
        className="flex h-full min-h-[138px] flex-col justify-between"
      >
        {days !== null && (
          <Tag tilt={index % 2 === 0 ? 'right' : 'left'} className="absolute right-2.5 top-2.5">
            {UI.home.examSoon(days)}
          </Tag>
        )}
        <div className="ico">
          <Icon icon={courseIcon(course.icon)} />
        </div>
        <div>
          <h3 className="display mt-2.5 text-[13.5px] leading-tight">{main}</h3>
          <div className="mono dim mb-1.5 mt-2">
            {course.code} · {empty ? UI.home.preparing : UI.home.percent(Math.round((done / chapters.length) * 100))}
          </div>
          <SegBar
            done={done}
            total={Math.max(empty ? 2 : chapters.length, 1)}
            label={UI.home.chaptersRead(done, chapters.length)}
          />
        </div>
      </Panel>
    </Link>
  )
}
