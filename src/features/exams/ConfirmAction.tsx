import { useState, type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import { UI } from '@/i18n/ui'

/** Action en deux temps (pas de `window.confirm`) : un bouton, puis un message avec « Oui » / « Annuler ». */
export default function ConfirmAction({
  label,
  message,
  confirmLabel,
  onConfirm,
  variant = 'secondary',
  icon,
}: {
  label: string
  message: ReactNode
  confirmLabel: string
  onConfirm: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: LucideIcon
}) {
  const [asking, setAsking] = useState(false)
  if (!asking)
    return (
      <Button variant={variant} icon={icon} onClick={() => setAsking(true)}>
        {label}
      </Button>
    )
  return (
    <Panel hi role="alertdialog" aria-label={label} className="flex flex-col gap-3">
      <p className="text-sm">{message}</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" onClick={onConfirm} autoFocus>
          {confirmLabel}
        </Button>
        <Button onClick={() => setAsking(false)}>{UI.exams.cancel}</Button>
      </div>
    </Panel>
  )
}
