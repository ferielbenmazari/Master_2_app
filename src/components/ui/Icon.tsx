import type { LucideIcon, LucideProps } from 'lucide-react'

type IconProps = Omit<LucideProps, 'ref'> & {
  /** Composant lucide-react, ex. `Flame`. */
  icon: LucideIcon
}

/** Icône au trait (2 px, 20 px par défaut, 14 px dans les étiquettes). Décorative sauf si `aria-label` est fourni. */
export default function Icon({
  icon: Glyph,
  size = 20,
  strokeWidth = 2,
  className,
  ...rest
}: IconProps) {
  const labelled = Boolean(rest['aria-label'])
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      className={['i', className].filter(Boolean).join(' ')}
      aria-hidden={labelled ? undefined : true}
      role={labelled ? 'img' : undefined}
      {...rest}
    />
  )
}
