import type { CSSProperties } from 'react'
import { UI } from '@/i18n/ui'
import { GRADES, Rating, type Grade } from '@/store/fsrs'

const RATE_COLOR: Record<Grade, string | undefined> = {
  [Rating.Again]: 'var(--red)',
  [Rating.Hard]: 'var(--orange)',
  [Rating.Good]: undefined,
  [Rating.Easy]: 'var(--cyan)',
}

interface Props {
  /** Délais proposés par note (`undefined` tant qu'ils ne sont pas calculés). */
  delays?: Record<Grade, string>
  /** Désactivées tant que la carte n'est pas retournée. */
  disabled: boolean
  onRate: (grade: Grade) => void
}

/** Les 4 notes FSRS (Encore · Difficile · Bien · Facile) avec le délai avant la prochaine revue. */
export default function RateBar({ delays, disabled, onRate }: Props) {
  return (
    <div className="rate" role="group" aria-label={UI.flashcards.rateGroup}>
      {GRADES.map((g) => (
        <button
          key={g}
          type="button"
          className={g === Rating.Good ? 'good' : undefined}
          style={{ '--c': RATE_COLOR[g] } as CSSProperties}
          disabled={disabled}
          aria-label={delays ? UI.flashcards.rateLabel(UI.flashcards.ratings[g], delays[g], g) : UI.flashcards.ratings[g]}
          onClick={() => onRate(g)}
        >
          {UI.flashcards.ratings[g]}
          <small aria-hidden="true">{delays?.[g] ?? '…'}</small>
        </button>
      ))}
    </div>
  )
}
