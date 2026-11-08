import { UI } from '@/i18n/ui'

const CIRCUMFERENCE = 126

type TimerRingProps = {
  /** Secondes restantes. */
  seconds: number
  /** Durée totale en secondes. */
  total: number
  /** Texte affiché au centre (défaut : les secondes). */
  label?: string
  /** Libellé accessible (défaut : « N secondes restantes »). */
  ariaLabel?: string
  /** `warn` = orange, `danger` = rouge (défaut : couleur de la matière). */
  tone?: 'ok' | 'warn' | 'danger'
}

/** Minuteur circulaire (l'appelant fait tourner le temps). */
export default function TimerRing({ seconds, total, label, ariaLabel, tone }: TimerRingProps) {
  const ratio = total > 0 ? Math.max(0, Math.min(1, seconds / total)) : 0
  return (
    <div className="timer" role="timer" data-tone={tone} aria-label={ariaLabel ?? UI.timer.remaining(seconds)}>
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
      <span aria-hidden="true">{label ?? seconds}</span>
    </div>
  )
}
