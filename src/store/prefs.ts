import type { CourseColor } from '@/lib/course-color'

export type Theme = 'system' | 'light' | 'dark'
export type LangMode = 'fr' | 'both' | 'en'

export interface Prefs {
  pseudo: string
  avatar: CourseColor
  theme: Theme
  langMode: LangMode
  trainLang: 'fr' | 'en'
}

export const PREFS_KEY = 'm2rev:prefs'
export const AVATAR_COLORS: readonly CourseColor[] = ['lime', 'coral', 'cyan', 'gold', 'orange']

export const DEFAULT_PREFS: Prefs = {
  pseudo: '',
  avatar: 'lime',
  theme: 'system',
  langMode: 'both',
  trainLang: 'fr',
}

const THEMES: readonly Theme[] = ['system', 'light', 'dark']
const LANG_MODES: readonly LangMode[] = ['fr', 'both', 'en']

/** Relit les préférences ; toute valeur absente ou invalide retombe sur le défaut. */
export function loadPrefs(): Prefs {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(PREFS_KEY) ?? 'null')
    if (typeof raw !== 'object' || raw === null) return { ...DEFAULT_PREFS }
    const r = raw as Record<string, unknown>
    return {
      pseudo: typeof r.pseudo === 'string' ? r.pseudo.trim() : DEFAULT_PREFS.pseudo,
      avatar: AVATAR_COLORS.includes(r.avatar as CourseColor) ? (r.avatar as CourseColor) : DEFAULT_PREFS.avatar,
      theme: THEMES.includes(r.theme as Theme) ? (r.theme as Theme) : DEFAULT_PREFS.theme,
      langMode: LANG_MODES.includes(r.langMode as LangMode) ? (r.langMode as LangMode) : DEFAULT_PREFS.langMode,
      trainLang: r.trainLang === 'en' ? 'en' : 'fr',
    }
  } catch {
    return { ...DEFAULT_PREFS }
  }
}

export function savePrefs(prefs: Prefs): void {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
  } catch {
    /* stockage indisponible : les préférences restent valables pour la session */
  }
}

/** Thème effectif (`system` suit l'OS). */
export function resolveTheme(theme: Theme): 'light' | 'dark' {
  if (theme !== 'system') return theme
  const light = typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: light)').matches
  return light ? 'light' : 'dark'
}

export function removePrefs(): void {
  try {
    localStorage.removeItem(PREFS_KEY)
  } catch {
    /* stockage indisponible */
  }
}
