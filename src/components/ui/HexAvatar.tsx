import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { courseStyle, type CourseColor } from '@/lib/course-color'

type HexAvatarProps = HTMLAttributes<HTMLDivElement> & {
  initials: string
  course?: CourseColor
  size?: 'md' | 'sm'
}

/** Avatar hexagonal : initiales sur dégradé de la couleur choisie. */
export default function HexAvatar({
  initials,
  course,
  size = 'md',
  className,
  style,
  ...rest
}: HexAvatarProps) {
  return (
    <div
      className={cn('hex', size === 'sm' && 'sm', className)}
      style={{ ...courseStyle(course), ...style }}
      {...rest}
    >
      {initials.slice(0, 2).toUpperCase()}
    </div>
  )
}
