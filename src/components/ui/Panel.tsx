import { useState, type HTMLAttributes, type PointerEvent } from 'react'
import { cn } from '@/lib/cn'
import { courseStyle, type CourseColor } from '@/lib/course-color'
import { useEffectsLevel } from '@/store/effects'

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  /** Couleur de matière (pose `--course`). */
  course?: CourseColor
  /** Bordure en dégradé de la couleur de matière. */
  hi?: boolean
  /** Bordure qui tourne. */
  live?: boolean
  /** Ombre décalée façon sticker. */
  drop?: boolean
  /** Coins de viseur. */
  brackets?: boolean
  /** Trame de points décorative. */
  dots?: boolean
  /** Tilt 3D + reflet au survol (coupé en niveau `off`). */
  tilt?: boolean
}

/** Panneau chanfreiné (coins haut-gauche et bas-droit coupés). */
export default function Panel({
  course,
  hi,
  live,
  drop,
  brackets,
  dots,
  tilt,
  className,
  style,
  children,
  onPointerMove,
  onPointerLeave,
  ...rest
}: PanelProps) {
  const [level] = useEffectsLevel()
  const [tiltStyle, setTiltStyle] = useState<Record<string, string>>({})

  function move(e: PointerEvent<HTMLDivElement>) {
    onPointerMove?.(e)
    if (!tilt || level === 'off') return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    setTiltStyle({
      transform: `perspective(700px) rotateX(${(0.5 - y) * 14}deg) rotateY(${(x - 0.5) * 14}deg) translateZ(6px)`,
      '--mx': `${x * 100}%`,
      '--my': `${y * 100}%`,
    })
  }
  function leave(e: PointerEvent<HTMLDivElement>) {
    onPointerLeave?.(e)
    setTiltStyle({})
  }

  return (
    <div
      className={cn(
        'panel',
        hi && 'hi',
        live && 'live',
        drop && 'drop',
        brackets && 'brackets',
        tilt && 'tilt3d',
        className,
      )}
      style={{ ...courseStyle(course), ...tiltStyle, ...style }}
      onPointerMove={tilt ? move : onPointerMove}
      onPointerLeave={tilt ? leave : onPointerLeave}
      {...rest}
    >
      {dots && <span className="dots" aria-hidden="true" />}
      {brackets && (
        <>
          <span className="br tl" aria-hidden="true" />
          <span className="br tr" aria-hidden="true" />
          <span className="br bl" aria-hidden="true" />
          <span className="br brr" aria-hidden="true" />
        </>
      )}
      {tilt && <span className="glare" aria-hidden="true" />}
      {children}
    </div>
  )
}
