import HexAvatar from '@/components/ui/HexAvatar'
import { GAME } from '@/i18n/game-ui'
import type { PlayerInfo } from './engine'

interface Props {
  players: readonly PlayerInfo[]
  hostId: string
  selfId: string
}

/** Joueurs présents dans le salon (maquette 06 : avatar hexagonal, pseudo, état). */
export default function PlayerList({ players, hostId, selfId }: Props) {
  return (
    <ul aria-label={GAME.players} className="grid gap-2 text-left">
      {players.map((p, i) => (
        <li
          key={p.id}
          data-testid="player"
          className="flex min-h-12 items-center gap-3 bg-surface px-3 py-2 shadow-[inset_0_0_0_1px_var(--line)]"
          style={{
            animation: 'rise var(--dur-slow) var(--ease-out) both',
            animationDelay: `${Math.min(i, 5) * 80}ms`,
          }}
        >
          <HexAvatar initials={p.name} course={p.avatar} size="sm" aria-hidden="true" />
          <span className="display min-w-0 flex-1 truncate text-sm font-medium">
            {p.name}
            {p.id === selfId && <span className="mono dim"> · {GAME.you}</span>}
          </span>
          <span className="mono text-ink-soft">
            {p.id === hostId ? GAME.host : p.connected ? GAME.ready : GAME.away}
          </span>
        </li>
      ))}
    </ul>
  )
}
