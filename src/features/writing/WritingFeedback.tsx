import { Check, X } from 'lucide-react'
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'

interface Props {
  correct: boolean
  /** Remplace « Correct » / « Raté ». */
  label?: string
  children?: ReactNode
  actions?: ReactNode
}

/** Panneau de correction : verdict, contenu, boutons. Prend le focus à l'ouverture. */
export default function WritingFeedback({ correct, label, children, actions }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.focus()
  }, [])
  const verdict = label ?? (correct ? UI.writing.correct : UI.writing.wrong)
  return (
    <Panel hi>
      <div ref={ref} tabIndex={-1} role="group" aria-label={verdict} className="fb flex flex-col gap-3 outline-none">
        <div className="flex flex-wrap items-center gap-2">
          <Tag
            tilt="left"
            icon={correct ? Check : X}
            style={{ '--course': correct ? 'var(--ok)' : 'var(--bad)' } as CSSProperties}
          >
            {verdict}
          </Tag>
        </div>
        {children}
        {actions && <div className="mt-3 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </Panel>
  )
}
