import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, Outlet, useParams } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import { ReaderContext } from '@/components/content/ReaderContext'
import Icon from '@/components/ui/Icon'
import { getChapterIndex, getCourse, loadChapter } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import { UI } from '@/i18n/ui'

export interface ExercisesOutlet {
  chapter: Chapter
  /** Chemin du chapitre (`/matiere/:courseId/chapitre/:chapterId`). */
  base: string
}

/** Charge le chapitre des routes `…/chapitre/:chapterId/exercices[/:exerciseId]`. */
export default function ExercisesLayout() {
  const { courseId = '', chapterId = '' } = useParams()
  const course = getCourse(courseId)
  const known = getChapterIndex(courseId).some((c) => c.id === chapterId)
  const [loaded, setLoaded] = useState<Chapter | null>(null)

  useEffect(() => {
    if (!known) return
    let live = true
    loadChapter(chapterId).then((c) => live && setLoaded(c))
    return () => {
      live = false
    }
  }, [known, chapterId])

  const chapter = loaded?.id === chapterId ? loaded : null
  const glossary = useMemo(() => new Map((chapter?.glossary ?? []).map((t) => [t.id, t])), [chapter])

  if (!course || !known) return <Navigate to={`/matiere/${courseId}`} replace />
  if (!chapter)
    return (
      <p className="mono dim" role="status">
        {UI.exercises.loading}
      </p>
    )
  const base = `/matiere/${courseId}/chapitre/${chapterId}`
  const code = course.code.replace(/^S\d+-/, '')
  const outlet: ExercisesOutlet = { chapter, base }

  return (
    <ReaderContext.Provider value={{ courseId, chapterId, glossary, quiz: new Map() }}>
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <Link to={base} className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start">
          <Icon icon={ChevronLeft} size={14} />
          {UI.exercises.back(code)}
          {String(chapter.order).padStart(2, '0')}
        </Link>
        <Outlet context={outlet} />
      </div>
    </ReaderContext.Provider>
  )
}
