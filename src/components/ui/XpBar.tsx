import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { courseStyle, type CourseColor } from '@/lib/course-color'

type XpBarProps = Omit<HTMLAttributes<HTMLDivElement>, 'role'> & {
  /** Pourcentage 0-100. */
  value: number
  course?: CourseColor
  /** Nom accessible de la progression. */
  label: string
}

/** Barre d'XP continue avec reflet qui balaie. */
export default function XpBar({ value, course, label, className, style, ...rest }: XpBarProps) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      className={cn('xpbar', className)}
      style={{ ...courseStyle(course), ...style }}
      {...rest}
    >
      <i style={{ width: `${pct}%` }} />
    </div>
  )
}
