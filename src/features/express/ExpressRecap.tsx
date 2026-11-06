import { Flame, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import CountUp from '@/components/ui/CountUp'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'
import { currentStreak } from '@/lib/streak'
import { getActivity } from '@/store/progress'

interface Props {
  xp: number
  maxCombo: number
  concepts: number
  back: { to: string; label: string }
  onAgain: () => void
}

/** Récap de fin : +XP · combo max · notions vues, série mise à jour, « Encore 5 min ». */
export default function ExpressRecap({ xp, maxCombo, concepts, back, onAgain }: Props) {
  const [streak, setStreak] = useState<number | null>(null)
  useEffect(() => {
    let live = true
    getActivity().then((rows) => live && setStreak(currentStreak(rows.filter((r) => r.count > 0).map((r) => r.date))))
    return () => {
      live = false
    }
  }, [])

  const stats: { label: string; value: number; prefix: string }[] = [
    { label: UI.express.recapXp, value: xp, prefix: '+' },
    { label: UI.express.recapCombo, value: maxCombo, prefix: 'x' },
    { label: UI.express.recapConcepts, value: concepts, prefix: '' },
  ]

  return (
    <section aria-labelledby="express-recap" className="flex flex-col gap-4">
      <Panel live brackets drop dots className="flex flex-col gap-4">
        <Tag icon={Zap}>{UI.express.title}</Tag>
        <h1 id="express-recap" className="display text-2xl">
          {UI.express.recapTitle}
        </h1>
        <dl className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-1">
              <dt className="mono dim">{s.label}</dt>
              <dd className="display hl text-3xl leading-none">
                {s.prefix}
                <CountUp to={s.value} duration={700} />
              </dd>
            </div>
          ))}
        </dl>
        {streak !== null && streak > 0 && (
          <p className="streak self-start" aria-label={UI.express.recapStreak(streak)}>
            <Icon icon={Flame} />
            <span>{UI.express.recapStreak(streak)}</span>
          </p>
        )}
      </Panel>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" block icon={Zap} onClick={onAgain} autoFocus>
          {UI.express.again}
        </Button>
        <Link to={back.to} className="btn btn-block">
          {back.label}
        </Link>
      </div>
    </section>
  )
}
