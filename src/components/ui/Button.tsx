import type { ButtonHTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import { courseStyle, type CourseColor } from '@/lib/course-color'
import Icon from './Icon'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  /** Pleine largeur. */
  block?: boolean
  icon?: LucideIcon
  course?: CourseColor
}

/** Bouton parallélogramme (reflet au survol ; `primary` = fond `--course`). */
export default function Button({
  variant = 'secondary',
  block,
  icon,
  course,
  className,
  style,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn('btn', variant !== 'secondary' && variant, block && 'btn-block', className)}
      style={{ ...courseStyle(course), ...style }}
      {...rest}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </button>
  )
}
