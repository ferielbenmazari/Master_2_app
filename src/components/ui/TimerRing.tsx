import { UI } from '@/i18n/ui'

const CIRCUMFERENCE = 126

type TimerRingProps = {
  /** Secondes restantes. */
  seconds: number
  /** Durée totale en secondes. */
  total: number
}

/** Minuteur circulaire (l'appelant fait tourner le temps). */
export default function TimerRing({ seconds, total }: TimerRingProps) {
  const ratio = total > 0 ? Math.max(0, Math.min(1, seconds / total)) : 0
  return (
    <div className="timer" role="timer" aria-label={UI.timer.remaining(seconds)}>
      <svg viewBox="0 0 46 46" aria-hidden="true">
        <circle className="t" cx="23" cy="23" r="20" />
        <circle
          className="v"
          cx="23"
          cy="23"
          r="20"
          style={{ strokeDashoffset: CIRCUMFERENCE * (1 - ratio) }}
        />
      </svg>
      <span aria-hidden="true">{seconds}</span>
    </div>
  )
}
