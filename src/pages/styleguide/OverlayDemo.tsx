import { useRef, useState } from 'react'
import { Quote, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import Popover from '@/components/ui/Popover'
import Sheet from '@/components/ui/Sheet'
import Toast from '@/components/ui/Toast'
import { comboBurst, flashKo, flashOk } from '@/lib/celebrate'

/** Démo des surcouches (popover, feuille, toast) et du feedback de réponse. */
export default function OverlayDemo() {
  const anchor = useRef<HTMLButtonElement>(null)
  const target = useRef<HTMLDivElement>(null)
  const [pop, setPop] = useState(false)
  const [sheet, setSheet] = useState(false)
  const [toast, setToast] = useState(false)
  return (
    <div ref={target} className="flex flex-wrap items-center gap-3">
      <button
        ref={anchor}
        type="button"
        className="term min-h-11"
        aria-expanded={pop}
        onClick={() => setPop((p) => !p)}
      >
        validité interne
      </button>
      <Popover open={pop} onClose={() => setPop(false)} anchor={anchor.current} label="Définition">
        <p className="text-sm">
          L'étude contrôle les variables parasites et écarte les explications alternatives.
        </p>
        <p className="mt-1.5 text-[13px] text-ink-soft">The study controls extraneous variables.</p>
      </Popover>
      <Button onClick={() => setSheet(true)}>Feuille</Button>
      <Sheet open={sheet} onClose={() => setSheet(false)} title="Réglages">
        <p className="text-sm text-ink-soft">Contenu de la feuille modale.</p>
      </Sheet>
      <Button icon={Quote} onClick={() => setToast(true)}>
        Toast
      </Button>
      <Toast open={toast} onClose={() => setToast(false)} message="Signalement enregistré." />
      <Button
        variant="primary"
        icon={Zap}
        onClick={() => {
          flashOk()
          comboBurst(3, 120)
        }}
      >
        Bonne réponse
      </Button>
      <Button onClick={() => flashKo(target.current)}>Mauvaise réponse</Button>
    </div>
  )
}
