import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import Icon from './Icon'
import Panel from './Panel'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  text?: string
  /** Action proposée (Button…). */
  children?: ReactNode
}

/** Écran vide : icône, titre, explication, action. */
export default function EmptyState({ icon, title, text, children }: EmptyStateProps) {
  return (
    <Panel className="flex flex-col items-center gap-3 py-8 text-center">
      <Icon icon={icon} size={32} className="text-ink-soft" />
      <h3 className="display text-lg">{title}</h3>
      {text && <p className="max-w-[40ch] text-sm text-ink-soft">{text}</p>}
      {children}
    </Panel>
  )
}
