import { ChevronLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'
import ChapterToc from '@/components/content/ChapterToc'
import Icon from '@/components/ui/Icon'
import LangToggle from '@/components/ui/LangToggle'
import { getCourse } from '@/content/loader'
import { useChapters } from '@/content/use-chapters'
import { UI } from '@/i18n/ui'
import { buildToc } from '@/lib/toc'
import { usePrefs } from '@/store/PrefsProvider'

/** Sommaire général d'une matière (route `/matiere/:courseId/sommaire`) : chapitres, parties, sous-parties. */
export default function CourseToc() {
  const { courseId = '' } = useParams()
  const course = getCourse(courseId)
  const chapters = useChapters(courseId)
  const { prefs, setPrefs } = usePrefs()
  if (!course) return <Navigate to="/" replace />
  const lang = prefs.langMode === 'en' ? 'en' : 'fr'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <Link to={`/matiere/${courseId}`} className="mono dim inline-flex min-h-11 items-center gap-1.5">
          <Icon icon={ChevronLeft} size={14} />
          {course.code.replace(/^S\d+-/, '')}
        </Link>
        <LangToggle value={prefs.langMode} onChange={(langMode) => setPrefs({ langMode })} />
      </div>
      <h1 className="display text-2xl">{UI.toc.title}</h1>
      {chapters === null ? (
        <p className="mono dim" role="status">
          {UI.course.loading}
        </p>
      ) : (
        <ol className="flex flex-col gap-3">
          {chapters.map((ch) => (
            <li key={ch.id} className="panel flex flex-col gap-1">
              <Link
                to={`/matiere/${courseId}/chapitre/${ch.id}`}
                className="toc-chapter-title"
                aria-label={`${UI.toc.chapter} ${UI.course.chapterNumber(ch.order)} : ${ch.title[lang]}`}
              >
                <span className="chap-num" aria-hidden="true">
                  {UI.course.chapterNumber(ch.order)}
                </span>
                <span className="display text-base leading-tight">{ch.title[lang]}</span>
              </Link>
              <ChapterToc
                toc={buildToc(ch.story)}
                lang={lang}
                hrefFor={(p) => `/matiere/${courseId}/chapitre/${ch.id}/lire?partie=${p}`}
              />
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
