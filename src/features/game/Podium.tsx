import { Trophy } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'
import HexAvatar from '@/components/ui/HexAvatar'
import Icon from '@/components/ui/Icon'
import { GAME } from '@/i18n/game-ui'
import { winners, type RankedPlayer } from './engine'
import { podiumConfetti } from './podium-confetti'
import Ranking from './Ranking'

interface Props {
  ranking: readonly RankedPlayer[]
  selfId: string
  footer: ReactNode
}

const HEIGHTS: Record<number, string> = { 1: 'h-32', 2: 'h-24', 3: 'h-16' }

/** Podium final : les trois premières places (égalités comprises), le classement complet et des confettis. */
export default function Podium({ ranking, selfId, footer }: Props) {
  useEffect(() => {
    podiumConfetti()
  }, [])

  const top = winners(ranking)
  const headline =
    top.length > 1 ? GAME.tie(top.map((p) => p.name).join(', ')) : GAME.winner(top[0]?.name ?? '')
  const first3 = ranking.slice(0, 3)
  // ordre visuel 2 - 1 - 3 quand il y a trois places distinctes
  const visual = first3.length === 3 ? [first3[1]!, first3[0]!, first3[2]!] : first3

  return (
    <section aria-label={GAME.podium} className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-2 text-center">
        <Icon icon={Trophy} size={32} className="text-[var(--gold)]" />
        <h1 className="display text-2xl" data-testid="podium-headline">
          {headline}
        </h1>
        <p className="mono dim">{GAME.finished}</p>
      </div>

      <div className="flex items-end justify-center gap-3" aria-hidden="true">
        {visual.map((p) => (
          <div key={p.id} className="flex w-24 flex-col items-center gap-2">
            <HexAvatar initials={p.name} course={p.avatar} />
            <span className="display w-full truncate text-center text-xs">{p.name}</span>
            <div
              className={`${HEIGHTS[Math.min(p.rank, 3)] ?? 'h-16'} flex w-full flex-col items-center justify-start gap-1 bg-surface pt-2 shadow-[inset_0_0_0_1px_var(--line-hi)]`}
              style={{ animation: 'rise var(--dur-slow) var(--ease-out) both' }}
            >
              <span className="display text-2xl">{p.rank}</span>
              <span className="mono text-xs">{GAME.points(p.score)}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mono dim mb-2">{GAME.ranking}</h2>
        <Ranking ranking={ranking} selfId={selfId} />
      </div>
      <div className="flex flex-col gap-3">{footer}</div>
    </section>
  )
}
