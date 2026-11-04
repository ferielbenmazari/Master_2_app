import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { courseStyle, type CourseColor } from '@/lib/course-color'

type SegBarProps = Omit<HTMLAttributes<HTMLDivElement>, 'role'> & {
  done: number
  total: number
  course?: CourseColor
  label: string
}

/** Progression en segments. */
export default function SegBar({
  done,
  total,
  course,
  label,
  className,
  style,
  ...rest
}: SegBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      className={cn('segbar', className)}
      style={{ ...courseStyle(course), ...style }}
      {...rest}
    >
      {Array.from({ length: total }, (_, i) => (
        <b key={i} className={i < done ? 'on' : undefined} />
      ))}
    </div>
  )
}
