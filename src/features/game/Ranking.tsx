import { GAME } from '@/i18n/game-ui'
import HexAvatar from '@/components/ui/HexAvatar'
import type { RankedPlayer } from './engine'

const ROW_H = 52
const GAP = 8

interface Props {
  ranking: readonly RankedPlayer[]
  selfId: string
  /** Affiche les points gagnés à la manche (+640). */
  showGain?: boolean
}

/**
 * Classement animé : chaque ligne est positionnée par son rang et glisse (transition) quand le classement change.
 * Les animations sont coupées par `prefers-reduced-motion` (règle globale).
 */
export default function Ranking({ ranking, selfId, showGain }: Props) {
  return (
    <ol
      aria-label={GAME.ranking}
      className="relative"
      style={{ height: ranking.length * (ROW_H + GAP) - GAP }}
    >
      {ranking.map((p, i) => (
        <li
          key={p.id}
          data-testid="rank-row"
          aria-label={GAME.rowLabel(p.rank, p.name, p.score)}
          className="absolute inset-x-0 flex items-center gap-3 bg-surface px-3 shadow-[inset_0_0_0_1px_var(--line)] transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)]"
          style={{
            height: ROW_H,
            transform: `translateY(${i * (ROW_H + GAP)}px)`,
            ...(p.id === selfId ? { boxShadow: 'inset 0 0 0 2px var(--course, var(--acid))' } : {}),
          }}
        >
          <span aria-hidden="true" className="display w-6 text-center text-sm">
            {p.rank}
          </span>
          <HexAvatar initials={p.name} course={p.avatar} size="sm" aria-hidden="true" />
          <span aria-hidden="true" className="display min-w-0 flex-1 truncate text-sm font-medium">
            {p.name}
            {!p.connected && <span className="mono dim"> · {GAME.disconnected}</span>}
          </span>
          {showGain && p.gain > 0 && (
            <span aria-hidden="true" className="mono text-[var(--course,var(--acid))]">
              {GAME.gain(p.gain)}
            </span>
          )}
          <strong aria-hidden="true" className="mono w-16 text-right">
            {p.score}
          </strong>
        </li>
      ))}
    </ol>
  )
}
