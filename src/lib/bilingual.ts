import type { L } from '@/content/schema'
import type { LangMode } from '@/store/prefs'

/** Texte principal selon le mode de langue ; `alt` = l'autre langue, présent seulement en mode FR+EN. */
export function pickLang(l: L, mode: LangMode): { main: string; alt?: string } {
  if (mode === 'en') return { main: l.en }
  if (mode === 'both') return { main: l.fr, alt: l.en }
  return { main: l.fr }
}
