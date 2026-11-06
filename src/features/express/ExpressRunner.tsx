import { useState } from 'react'
import { Navigate, useParams } from 'react-router'
import Ambient from '@/components/ui/Ambient'
import { getChapterIndex, getCourse } from '@/content/loader'
import { UI } from '@/i18n/ui'
import ExpressSession from './ExpressSession'
import type { ExpressScope } from './load-express'

/**
 * Express plein écran (sans barre de navigation) :
 * `/express` = toutes les matières ; `/matiere/:courseId/chapitre/:chapterId/express` = un chapitre.
 */
export default function ExpressRunner({ now }: { now?: () => Date }) {
  const { courseId, chapterId } = useParams()
  const [run, setRun] = useState(0)

  let scope: ExpressScope = 'all'
  let back: { to: string; label: string } = { to: '/', label: UI.express.backHome }
  if (courseId && chapterId) {
    const known = getCourse(courseId) && getChapterIndex(courseId).some((c) => c.id === chapterId)
    if (!known) return <Navigate to={`/matiere/${courseId}`} replace />
    scope = { courseId, chapterId }
    back = { to: `/matiere/${courseId}/chapitre/${chapterId}`, label: UI.express.backChapter }
  }

  return (
    <>
      <Ambient />
      <main className="relative z-[1] mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pb-8 pt-3">
        <ExpressSession key={`${run}`} scope={scope} back={back} now={now} onAgain={() => setRun((r) => r + 1)} />
      </main>
    </>
  )
}
