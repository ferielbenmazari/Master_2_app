import { Target, Zap } from 'lucide-react'
import { Link } from 'react-router'
import CountUp from '@/components/ui/CountUp'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'

/** Mission du jour : nombre de cartes à revoir et bouton « Lancer ». */
export default function MissionPanel({ due }: { due: number }) {
  return (
    <Panel live brackets drop dots>
      <div className="flex items-center justify-between">
        <Tag icon={Target}>{UI.home.mission}</Tag>
        {due > 0 && <span className="mono dim">{UI.home.missionMinutes(Math.max(1, Math.round(due * 0.4)))}</span>}
      </div>
      <div className="mb-3.5 mt-3 flex items-end justify-between">
        <div className="display big">
          <CountUp to={due} />
        </div>
        <div className="mono dim text-right leading-relaxed">{UI.home.missionCards}</div>
      </div>
      <Link to="/reviser" className="btn primary btn-block">
        <Icon icon={Zap} />
        {UI.home.missionLaunch}
      </Link>
    </Panel>
  )
}
