import { Moon, Sun } from 'lucide-react'
import { UI } from '@/i18n/ui'
import Button from './Button'

export type Theme = 'dark' | 'light'

type ThemeToggleProps = {
  theme: Theme
  onChange: (theme: Theme) => void
}

/** Bascule mode nuit / mode jour (l'appelant pose `data-theme`). */
export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  const toLight = theme === 'dark'
  return (
    <Button icon={toLight ? Sun : Moon} onClick={() => onChange(toLight ? 'light' : 'dark')}>
      {toLight ? UI.theme.toLight : UI.theme.toDark}
    </Button>
  )
}
