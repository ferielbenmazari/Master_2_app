import { useEffect, useMemo, useReducer, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import { ReaderContext } from '@/components/content/ReaderContext'
import Icon from '@/components/ui/Icon'
import { getChapterIndex, getCourse, loadChapter } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import { UI } from '@/i18n/ui'
import QuizFinal from './QuizFinal'
import QuizSession from './QuizSession'
import { sessionReducer, startSession } from './quiz-session'

const newSeed = () => Math.floor(Math.random() * 2 ** 31)

interface PlayProps {
  chapter: Chapter
  base: string
  code: string
  onAgain: () => void
}

function Play({ chapter, base, code, onAgain }: PlayProps) {
  const [state, dispatch] = useReducer(sessionReducer, undefined, () => startSession(chapter.quiz, newSeed()))
  return state.finished ? (
    <QuizFinal
      chapter={chapter}
      base={base}
      state={state}
      onRetry={() => dispatch({ type: 'retry', seed: newSeed() })}
      onAgain={onAgain}
    />
  ) : (
    <QuizSession chapter={chapter} code={code} state={state} dispatch={dispatch} />
  )
}

/** Quiz d'un chapitre (route `…/chapitre/:chapterId/quiz`). */
export default function QuizRunner() {
  const { courseId = '', chapterId = '' } = useParams()
  const course = getCourse(courseId)
  const known = getChapterIndex(courseId).some((c) => c.id === chapterId)
  const [loaded, setLoaded] = useState<Chapter | null>(null)
  const [run, setRun] = useState(0)

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
  const quiz = useMemo(() => new Map((chapter?.quiz ?? []).map((q) => [q.id, q])), [chapter])

  if (!course || !known) return <Navigate to={`/matiere/${courseId}`} replace />
  if (!chapter)
    return (
      <p className="mono dim" role="status">
        {UI.quiz.loading}
      </p>
    )
  const base = `/matiere/${courseId}/chapitre/${chapterId}`
  const code = course.code.replace(/^S\d+-/, '')

  return (
    <ReaderContext.Provider value={{ courseId, chapterId, glossary, quiz }}>
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <Link to={base} className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start">
          <Icon icon={ChevronLeft} size={14} />
          {UI.quiz.back(code)}
          {String(chapter.order).padStart(2, '0')}
        </Link>
        <Play key={run} chapter={chapter} base={base} code={code} onAgain={() => setRun((r) => r + 1)} />
      </div>
    </ReaderContext.Provider>
  )
}
