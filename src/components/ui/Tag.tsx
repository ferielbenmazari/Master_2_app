import type { HTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import { courseStyle, type CourseColor } from '@/lib/course-color'
import Icon from './Icon'

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  course?: CourseColor
  icon?: LucideIcon
  /** Étiquette inclinée façon sticker : -4° (`left`) ou +3° (`right`). */
  tilt?: 'left' | 'right'
}

/** Étiquette mono (« J-6 », « Chapitre 05 »…). */
export default function Tag({ course, icon, tilt, className, style, children, ...rest }: TagProps) {
  return (
    <span
      className={cn('tag', tilt && 'tilt', tilt === 'right' && 'r', className)}
      style={{ ...courseStyle(course), ...style }}
      {...rest}
    >
      {icon && <Icon icon={icon} size={12} />}
      {children}
    </span>
  )
}
