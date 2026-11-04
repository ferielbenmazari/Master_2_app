import { Check, Hourglass } from 'lucide-react'
import { Link, NavLink, useParams } from 'react-router'
import EmptyState from '@/components/ui/EmptyState'
import Icon from '@/components/ui/Icon'
import Tag from '@/components/ui/Tag'
import { getChapterIndex, getCourse, getExamIndex } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import { useChapters } from '@/content/use-chapters'
import { pickLang } from '@/lib/bilingual'
import { courseIcon } from '@/lib/course-icon'
import { stickerDays } from '@/lib/exam-countdown'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import { useReadChapters } from '@/store/use-progress'

function ChapterRow({ chapter, done, index }: { chapter: Chapter; done: boolean; index: number }) {
  const { prefs } = usePrefs()
  const title = pickLang(chapter.title, prefs.langMode)
  const hook = pickLang(chapter.hook, prefs.langMode)
  return (
    <li style={{ '--i': index } as React.CSSProperties}>
      <Link
        to={`/matiere/${chapter.courseId}/chapitre/${chapter.id}`}
        className="panel hi drop flex min-h-[72px] items-center gap-4"
      >
        <span className="chap-num" aria-hidden="true">
          {UI.course.chapterNumber(chapter.order)}
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="display text-base leading-tight">{title.main}</span>
          <span className="text-sm text-ink-soft">{hook.main}</span>
          <span className="flex flex-wrap items-center gap-2">
            <span className="mono dim">{UI.course.minutes(chapter.estimatedMinutes)}</span>
            {chapter.status === 'draft' && <Tag>{UI.course.draft}</Tag>}
          </span>
        </span>
        {done && <Icon icon={Check} aria-label={UI.course.read} className="text-[var(--course)]" />}
      </Link>
    </li>
  )
}

/** Page matière : en-tête, onglets, liste des chapitres. */
export default function Course({ now }: { now?: Date }) {
  const { courseId = '' } = useParams()
  const course = getCourse(courseId)
  const { prefs } = usePrefs()
  const chapters = useChapters(courseId)
  const read = useReadChapters(getChapterIndex(courseId).map((c) => c.id))
  if (!course) return null
  const title = pickLang(course.title, prefs.langMode)
  const days = stickerDays(course.examDate, now)
  const firstExam = getExamIndex(courseId)[0]
  const empty = getChapterIndex(courseId).length === 0

  return (
    <div className="flex flex-col gap-5">
      <header className="flex items-center gap-4">
        <div className="ico !h-12 !w-12">
          <Icon icon={courseIcon(course.icon)} size={24} />
        </div>
        <div className="flex-1">
          <div className="mono hl w-fit">{course.code}</div>
          <h1 className="display text-2xl">{title.main}</h1>
          {title.alt && <p className="text-sm text-ink-soft">{title.alt}</p>}
        </div>
        {days !== null && <Tag tilt="right">{UI.home.examSoon(days)}</Tag>}
      </header>
      <nav className="tabs" aria-label={UI.course.tabs}>
        <NavLink to={`/matiere/${courseId}`} end className={({ isActive }) => (isActive ? 'on' : '')}>
          {UI.course.chapters}
        </NavLink>
        <NavLink to={`/matiere/${courseId}/glossaire`} className={({ isActive }) => (isActive ? 'on' : '')}>
          {UI.course.glossary}
        </NavLink>
        {firstExam ? (
          <NavLink to={`/matiere/${courseId}/partiel/${firstExam.slug}`} className={({ isActive }) => (isActive ? 'on' : '')}>
            {UI.course.exams}
          </NavLink>
        ) : (
          <span aria-disabled="true">{UI.course.exams}</span>
        )}
      </nav>
      {empty ? (
        <EmptyState icon={Hourglass} title={UI.course.preparingTitle} text={UI.course.preparingText}>
          <Link to="/" className="btn">
            {UI.course.back}
          </Link>
        </EmptyState>
      ) : chapters === null ? (
        <p className="mono dim" role="status">
          {UI.course.loading}
        </p>
      ) : (
        <ol className="stagger flex flex-col gap-3">
          {chapters.map((ch, i) => (
            <ChapterRow key={ch.id} chapter={ch} done={read.has(ch.id)} index={i} />
          ))}
        </ol>
      )}
    </div>
  )
}
