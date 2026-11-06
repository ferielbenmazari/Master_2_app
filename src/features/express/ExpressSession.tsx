import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Hourglass } from 'lucide-react'
import EmptyState from '@/components/ui/EmptyState'
import { UI } from '@/i18n/ui'
import { loadRecentExpress, saveRecentExpress } from '@/store/express-recent'
import { buildSession, type ExpressStep } from './buildSession'
import ExpressPlay from './ExpressPlay'
import { loadExpressData, type ExpressScope } from './load-express'

interface Props {
  scope: ExpressScope
  back: { to: string; label: string }
  onAgain: () => void
  now?: () => Date
}

const newSeed = () => Math.floor(Math.random() * 2 ** 31)

/** Prépare UNE session (données fraîches, items de la précédente écartés) puis la joue. Remonté à chaque « Encore 5 min ». */
export default function ExpressSession({ scope, back, onAgain, now }: Props) {
  const [steps, setSteps] = useState<ExpressStep[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let live = true
    loadExpressData(scope)
      .then((data) => {
        if (!live) return
        const built = buildSession({ ...data, exclude: loadRecentExpress(), now: now?.() ?? new Date(), seed: newSeed() })
        saveRecentExpress(built.map((s) => s.id))
        setSteps(built)
      })
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
    // La session est figée au chargement (le composant est remonté pour en lancer une autre).
  }, [])

  if (failed) return <p role="alert">{UI.express.error}</p>
  if (!steps)
    return (
      <p className="mono dim" role="status">
        {UI.express.loading}
      </p>
    )
  if (steps.length === 0)
    return (
      <EmptyState icon={Hourglass} title={UI.express.emptyTitle} text={UI.express.emptyText}>
        <Link to={back.to} className="btn">
          {back.label}
        </Link>
      </EmptyState>
    )
  return <ExpressPlay steps={steps} back={back} onAgain={onAgain} now={now} />
}
