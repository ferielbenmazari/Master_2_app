import { UI } from '@/i18n/ui'

export type LangMode = 'fr' | 'both' | 'en'

const OPTIONS: { value: LangMode; label: string }[] = [
  { value: 'fr', label: UI.lang.fr },
  { value: 'both', label: UI.lang.frEn },
  { value: 'en', label: UI.lang.en },
]

type LangToggleProps = {
  value: LangMode
  onChange: (value: LangMode) => void
}

/** Sélecteur de langue du contenu : FR · FR+EN · EN. */
export default function LangToggle({ value, onChange }: LangToggleProps) {
  return (
    <div className="lang" role="radiogroup" aria-label={UI.lang.label}>
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
