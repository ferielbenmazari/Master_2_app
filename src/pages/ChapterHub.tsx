import {
  BadgeCheck,
  BookOpen,
  ChevronLeft,
  FileText,
  FlaskConical,
  Languages,
  Layers,
  ListChecks,
  Timer,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { getChapterIndex, getCourse, loadChapter } from '@/content/loader'
import { useChapters } from '@/content/use-chapters'
import type { Chapter } from '@/content/schema'
import { chapterCardCount } from '@/features/flashcards/glossary-cards'
import { pickLang } from '@/lib/bilingual'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'

type TileDef = { view: string; label: string; icon: LucideIcon; count?: number }

/** `cards` : écrites + tirées du glossaire (`undefined` tant que la matière n'est pas chargée). */
function tiles(ch: Chapter, cards: number | undefined): TileDef[] {
  return [
    { view: 'express', label: UI.hub.express, icon: Timer },
    { view: 'lire', label: UI.hub.read, icon: BookOpen },
    { view: 'fiche', label: UI.hub.sheet, icon: FileText },
    { view: 'flashcards', label: UI.hub.flashcards, icon: Layers, count: cards },
    { view: 'quiz', label: UI.hub.quiz, icon: ListChecks, count: ch.quiz.length },
    { view: 'exercices', label: UI.hub.exercises, icon: FlaskConical, count: ch.exercises.length },
    { view: 'anglais', label: UI.hub.english, icon: Languages, count: ch.writing.length },
  ]
}

/** Hub d'un chapitre : titre, accroche, statut, 7 tuiles de modes. */
export default function ChapterHub() {
  const { courseId = '', chapterId = '' } = useParams()
  const course = getCourse(courseId)
  const known = getChapterIndex(courseId).some((c) => c.id === chapterId)
  const { prefs } = usePrefs()
  const courseChapters = useChapters(courseId)
  const [state, setState] = useState<{ id: string; chapter: Chapter } | null>(null)

  useEffect(() => {
    if (!known) return
    let live = true
    loadChapter(chapterId).then((chapter) => live && setState({ id: chapterId, chapter }))
    return () => {
      live = false
    }
  }, [known, chapterId])

  if (!course || !known) return <Navigate to={`/matiere/${courseId}`} replace />
  const chapter = state?.id === chapterId ? state.chapter : null
  if (!chapter) {
    return (
      <p className="mono dim" role="status">
        {UI.course.loading}
      </p>
    )
  }

  const title = pickLang(chapter.title, prefs.langMode)
  const hook = pickLang(chapter.hook, prefs.langMode)
  const base = `/matiere/${courseId}/chapitre/${chapterId}`
  const reviewed = chapter.status === 'reviewed'

  return (
    <div className="flex flex-col gap-5">
      <Link
        to={`/matiere/${courseId}`}
        className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start"
      >
        <Icon icon={ChevronLeft} size={14} />
        {UI.hub.back(course.code.replace(/^S\d+-/, ''))}
      </Link>
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Tag tilt="left" icon={BookOpen}>
            {UI.hub.chapter(chapter.order)} · {UI.course.minutes(chapter.estimatedMinutes)}
          </Tag>
          <Tag icon={reviewed ? BadgeCheck : undefined} course={reviewed ? undefined : 'orange'}>
            {reviewed ? UI.hub.reviewed : UI.hub.draft}
          </Tag>
        </div>
        <h1 className="display text-2xl">{title.main}</h1>
        {title.alt && <p className="text-sm text-ink-soft">{title.alt}</p>}
        {chapter.question ? (
          <>
            <p className="font-semibold">{pickLang(chapter.question, prefs.langMode).main}</p>
            {pickLang(chapter.question, prefs.langMode).alt && (
              <p className="text-sm text-ink-soft">
                {pickLang(chapter.question, prefs.langMode).alt}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="text-ink-soft">{hook.main}</p>
            {hook.alt && <p className="text-sm text-ink-soft">{hook.alt}</p>}
          </>
        )}
      </header>
      <ul aria-label={UI.hub.tiles} className="stagger grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles(
          chapter,
          courseChapters ? chapterCardCount(courseChapters, chapter.id) : undefined,
        ).map((t, i) => (
          <li key={t.view} style={{ '--i': i } as CSSProperties}>
            <Link to={`${base}/${t.view}`} className="block h-full">
              <Panel hi drop tilt className="flex h-full min-h-[110px] flex-col justify-between">
                <div className="ico">
                  <Icon icon={t.icon} />
                </div>
                <div>
                  <h2 className="display mt-2.5 text-[13.5px] leading-tight">{t.label}</h2>
                  {t.count !== undefined && <span className="mono hl">{t.count}</span>}
                </div>
              </Panel>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
