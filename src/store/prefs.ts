import type { CourseColor } from '@/lib/course-color'

export type Theme = 'system' | 'light' | 'dark'
export type LangMode = 'fr' | 'both' | 'en'

/** Minuteur du quiz en secondes par question ; 0 = désactivé. */
export type QuizTimer = 0 | 15 | 30 | 60
export const QUIZ_TIMERS: readonly QuizTimer[] = [0, 15, 30, 60]

/** Nouvelles cartes introduites par jour (FSRS). */
export const NEW_PER_DAY_OPTIONS: readonly number[] = [5, 10, 20, 30, 50]
export const MAX_NEW_PER_DAY = 200

export interface Prefs {
  pseudo: string
  avatar: CourseColor
  theme: Theme
  langMode: LangMode
  trainLang: 'fr' | 'en'
  quizTimer: QuizTimer
  newPerDay: number
}

export const PREFS_KEY = 'm2rev:prefs'
export const AVATAR_COLORS: readonly CourseColor[] = ['lime', 'coral', 'cyan', 'gold', 'orange']

export const DEFAULT_PREFS: Prefs = {
  pseudo: '',
  avatar: 'lime',
  theme: 'system',
  langMode: 'both',
  trainLang: 'fr',
  quizTimer: 0,
  newPerDay: 20,
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
      quizTimer: QUIZ_TIMERS.includes(r.quizTimer as QuizTimer) ? (r.quizTimer as QuizTimer) : DEFAULT_PREFS.quizTimer,
      newPerDay:
        typeof r.newPerDay === 'number' && Number.isInteger(r.newPerDay) && r.newPerDay >= 0 && r.newPerDay <= MAX_NEW_PER_DAY
          ? r.newPerDay
          : DEFAULT_PREFS.newPerDay,
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
