import { UI } from '@/i18n/ui'
import { courseStyle, type CourseColor } from '@/lib/course-color'

type Blip = { top: string; left: string }

const DEFAULT_BLIPS: Blip[] = [
  { top: '30%', left: '68%' },
  { top: '70%', left: '26%' },
]

type RadarProps = {
  /** Code de la salle (ex. K7PX). */
  code: string
  course?: CourseColor
  blips?: Blip[]
}

/** Radar de la salle multijoueur : balayage + joueurs détectés. */
export default function Radar({ code, course, blips = DEFAULT_BLIPS }: RadarProps) {
  return (
    <div className="radar" style={courseStyle(course)} role="img" aria-label={UI.radar.label(code)}>
      {blips.map((b, i) => (
        <span
          key={i}
          className="blip"
          aria-hidden="true"
          style={{ top: b.top, left: b.left, animationDelay: `${i * 0.5}s` }}
        />
      ))}
      <div className="code" aria-hidden="true">
        {code}
      </div>
    </div>
  )
}
