import HexAvatar from '@/components/ui/HexAvatar'
import { GAME } from '@/i18n/game-ui'
import type { CourseColor } from '@/lib/course-color'
import { AVATAR_COLORS } from '@/store/prefs'

interface Props {
  name: string
  value: CourseColor
  onChange: (c: CourseColor) => void
}

/** Choix de la couleur d'avatar pour la partie (zones tactiles de 48 px). */
export default function AvatarPicker({ name, value, onChange }: Props) {
  return (
    <div role="group" aria-label={GAME.avatarLabel} className="flex flex-wrap gap-2">
      {AVATAR_COLORS.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={value === c}
          aria-label={GAME.avatarColor(GAME.colors[c] ?? c)}
          onClick={() => onChange(c)}
          className="grid min-h-12 min-w-12 place-items-center bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] aria-pressed:shadow-[inset_0_0_0_2px_var(--ink)]"
        >
          <HexAvatar initials={name} course={c} aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
