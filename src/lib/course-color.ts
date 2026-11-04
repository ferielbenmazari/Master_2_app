import type { CSSProperties } from 'react'

/** Valeurs autorisées pour `course.json.color`. */
export type CourseColor = 'lime' | 'coral' | 'cyan' | 'gold' | 'orange'

const COURSE_VARS: Record<CourseColor, string> = {
  lime: 'var(--acid)',
  coral: 'var(--coral)',
  cyan: 'var(--cyan)',
  gold: 'var(--gold)',
  orange: 'var(--orange)',
}

/** Pose `--course` (couleur de matière) sur un élément ; sans couleur, le défaut CSS (acid) s'applique. */
export function courseStyle(color?: CourseColor): CSSProperties | undefined {
  return color ? ({ '--course': COURSE_VARS[color] } as CSSProperties) : undefined
}
