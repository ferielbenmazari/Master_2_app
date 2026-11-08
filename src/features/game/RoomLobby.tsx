import { Check, Copy, LogOut, Radio, Zap } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import Button from '@/components/ui/Button'
import Radar from '@/components/ui/Radar'
import Tag from '@/components/ui/Tag'
import { GAME } from '@/i18n/game-ui'
import type { GuestView } from './engine'
import PlayerList from './PlayerList'
import RoomQr, { joinUrl } from './RoomQr'

const BLIPS = [
  { top: '30%', left: '68%' },
  { top: '70%', left: '26%' },
  { top: '24%', left: '30%' },
  { top: '72%', left: '70%' },
]

interface Props {
  code: string
  view: GuestView
  selfId: string
  /** Hôte : code, QR et bouton de lancement. Invité : simple attente. */
  host?: { onStart: () => void; canStart: boolean }
  onLeave: () => void
  children?: ReactNode
}

/** Salon (maquette 06) : radar avec le code géant, QR, joueurs présents, règles, lancement. */
export default function RoomLobby({ code, view, selfId, host, onLeave, children }: Props) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(joinUrl(code))
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section aria-label={GAME.players} className="flex flex-col gap-4 text-center">
      <div>
        <Tag icon={Radio}>{host ? GAME.hostTag : GAME.guestTag}</Tag>
      </div>
      <Radar code={code} blips={BLIPS.slice(0, Math.max(0, view.players.length - 1))} />
      {host && (
        <>
          <p className="mono dim">{GAME.codeOrQr}</p>
          <RoomQr code={code} />
          <div className="flex justify-center">
            <Button icon={copied ? Check : Copy} onClick={() => void copy()}>
              {copied ? GAME.linkCopied : GAME.copyLink}
            </Button>
          </div>
        </>
      )}
      <PlayerList players={view.players} hostId={view.hostId} selfId={selfId} />
      <p className="mono dim">{GAME.rules(view.total, view.seconds)}</p>
      {children}
      {host ? (
        <>
          {!host.canStart && (
            <p role="status" className="text-sm text-ink-soft">
              {GAME.needPlayers}
            </p>
          )}
          <Button
            variant="primary"
            block
            icon={Zap}
            disabled={!host.canStart}
            onClick={host.onStart}
          >
            {GAME.launch}
          </Button>
        </>
      ) : (
        <p role="status" className="mono dim">
          {GAME.waitingHost}
        </p>
      )}
      <Button block icon={LogOut} onClick={onLeave}>
        {GAME.leave}
      </Button>
    </section>
  )
}
