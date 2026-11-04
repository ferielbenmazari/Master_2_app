import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type GlitchTextProps = {
  /** Texte des calques glitch (doit correspondre au texte affiché). */
  text: string
  children?: ReactNode
  as?: ElementType
  className?: string
}

/** Texte au glitch discret (calques coral/cyan). Coupé en `light` et `off` par CSS. */
export default function GlitchText({
  text,
  children = text,
  as: Tag = 'span',
  className,
}: GlitchTextProps) {
  return (
    <Tag className={cn('glitch', className)} data-text={text}>
      {children}
    </Tag>
  )
}
