import { ChevronLeft, Languages } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import EmptyState from '@/components/ui/EmptyState'
import Icon from '@/components/ui/Icon'
import Tag from '@/components/ui/Tag'
import { getChapterIndex, getCourse, loadChapter } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { courseStyle } from '@/lib/course-color'
import { WRITING_KINDS, type WritingKind } from '@/lib/writing'
import LevelPlay from './LevelPlay'
import LevelTabs from './LevelTabs'

interface BodyProps {
  chapter: Chapter
  base: string
}

function Body({ chapter, base }: BodyProps) {
  const byKind = useMemo(
    () =>
      Object.fromEntries(WRITING_KINDS.map((k) => [k, chapter.writing.filter((w) => w.kind === k)])) as Record<
        WritingKind,
        Chapter['writing']
      >,
    [chapter],
  )
  const counts = useMemo(
    () => Object.fromEntries(WRITING_KINDS.map((k) => [k, byKind[k].length])) as Record<WritingKind, number>,
    [byKind],
  )
  const [level, setLevel] = useState<WritingKind>(() => WRITING_KINDS.find((k) => counts[k] > 0) ?? 'reorder')
  const [run, setRun] = useState(0)

  const next = WRITING_KINDS.slice(WRITING_KINDS.indexOf(level) + 1).find((k) => counts[k] > 0)
  const select = (k: WritingKind) => {
    setLevel(k)
    setRun((r) => r + 1)
  }

  return (
    <>
      <LevelTabs level={level} counts={counts} onChange={select} />
      <div id="writing-panel" role="tabpanel" aria-labelledby={`writing-tab-${level}`} className="flex flex-col gap-4">
        <LevelPlay
          key={`${level}-${run}`}
          items={byKind[level]}
          base={base}
          {...(next ? { nextLevelName: UI.writing.levels[next].name } : {})}
          onReplay={() => setRun((r) => r + 1)}
          onNextLevel={() => next && select(next)}
        />
      </div>
    </>
  )
}

/** Atelier anglais d'un chapitre (route `…/chapitre/:chapterId/anglais`) : 4 niveaux, corrigé sans IA. */
export default function WritingRunner() {
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

  if (!course || !known) return <Navigate to={`/matiere/${courseId}`} replace />
  if (!chapter)
    return (
      <p className="mono dim" role="status">
        {UI.writing.loading}
      </p>
    )
  const base = `/matiere/${courseId}/chapitre/${chapterId}`
  const code = course.code.replace(/^S\d+-/, '')

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4" style={courseStyle('cyan')}>
      <Link to={base} className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start">
        <Icon icon={ChevronLeft} size={14} />
        {UI.writing.back(code)}
        {String(chapter.order).padStart(2, '0')}
      </Link>
      <header className="flex flex-col gap-2">
        <Tag tilt="left" icon={Languages} className="self-start">
          {UI.writing.tag(code)}
        </Tag>
        <h1 className="display text-2xl">{UI.writing.title}</h1>
      </header>
      {chapter.writing.length === 0 ? (
        <EmptyState icon={Languages} title={UI.writing.empty} text={UI.writing.emptyText}>
          <Link to={base} className="btn">
            {UI.writing.backToChapter}
          </Link>
        </EmptyState>
      ) : (
        <Body chapter={chapter} base={base} />
      )}
    </div>
  )
}
