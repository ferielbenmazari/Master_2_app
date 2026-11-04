import { useState, type FormEvent } from 'react'
import Button from '@/components/ui/Button'
import HexAvatar from '@/components/ui/HexAvatar'
import Sheet from '@/components/ui/Sheet'
import { UI } from '@/i18n/ui'
import { AVATAR_COLORS } from '@/store/prefs'
import { usePrefs } from '@/store/PrefsProvider'

/** Premier lancement (pas de pseudo) : choix du pseudo et de la couleur d'avatar. */
export default function Onboarding() {
  const { prefs, setPrefs } = usePrefs()
  const [pseudo, setPseudo] = useState('')
  const [avatar, setAvatar] = useState(prefs.avatar)
  const name = pseudo.trim()

  function submit(e: FormEvent) {
    e.preventDefault()
    if (name) setPrefs({ pseudo: name, avatar })
  }

  return (
    // Non fermable : sans pseudo l'app n'a pas de sens ; `onClose` ne fait rien.
    <Sheet open={prefs.pseudo === ''} onClose={() => undefined} title={UI.onboarding.title}>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <HexAvatar initials={name || '?'} course={avatar} aria-hidden="true" />
          <label className="flex flex-1 flex-col gap-1 text-sm text-ink-soft">
            {UI.onboarding.pseudoLabel}
            <input
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              maxLength={24}
              autoComplete="nickname"
              className="h-11 border border-line-hi bg-surface px-3 text-ink"
            />
          </label>
        </div>
        <div role="radiogroup" aria-label={UI.onboarding.colorLabel} className="flex gap-2">
          {AVATAR_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={avatar === c}
              aria-label={UI.onboarding.color(UI.onboarding.colors[c])}
              onClick={() => setAvatar(c)}
              className="grid h-11 w-11 place-items-center border border-line-hi aria-checked:border-ink"
            >
              <HexAvatar initials="" course={c} size="sm" aria-hidden="true" />
            </button>
          ))}
        </div>
        <Button type="submit" variant="primary" block disabled={!name}>
          {UI.onboarding.submit}
        </Button>
      </form>
    </Sheet>
  )
}
