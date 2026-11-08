import { Wifi } from 'lucide-react'
import Button from '@/components/ui/Button'
import { GAME } from '@/i18n/game-ui'
import type { TransportKind } from './transport/create-transport'

interface Props {
  value: TransportKind
  onChange: (kind: TransportKind) => void
  disabled?: boolean
}

/** Choix du transport : Internet (PeerJS) par défaut, « même appareil » pour tester avec des onglets. */
export default function TransportPicker({ value, onChange, disabled }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div role="group" aria-label={GAME.transportLabel} className="tf my-0">
        <Button
          className="min-h-11! text-sm!"
          aria-pressed={value === 'peer'}
          icon={Wifi}
          onClick={() => onChange('peer')}
          disabled={disabled}
        >
          {GAME.transportPeer}
        </Button>
        <Button
          className="min-h-11! text-sm!"
          aria-pressed={value === 'local'}
          onClick={() => onChange('local')}
          disabled={disabled}
        >
          {GAME.transportLocal}
        </Button>
      </div>
      <p className="text-sm text-ink-soft">{GAME.transportHelp}</p>
    </div>
  )
}
