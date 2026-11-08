import { layoutFor, type Layout } from '@/lib/reader'
import { useMediaQuery } from '@/lib/use-media-query'
import { usePrefs } from '@/store/PrefsProvider'

/** Mise en page bilingue du partiel (selon le mode de langue) et langue de saisie des réponses. */
export function useExamLayout(): {
  /** Énoncés : une langue, ou FR+EN selon la largeur. */
  layout: Layout
  /** Corrections : toujours les deux langues (colonnes sur grand écran). */
  bothLayout: 'columns' | 'stack'
  /** Langue de saisie (attribut `lang` des zones de texte). */
  inputLang: 'fr' | 'en'
} {
  const { prefs } = usePrefs()
  const wide = useMediaQuery('(min-width: 1024px)')
  return {
    layout: layoutFor(prefs.langMode, wide),
    bothLayout: wide ? 'columns' : 'stack',
    inputLang: prefs.langMode === 'en' ? 'en' : prefs.langMode === 'fr' ? 'fr' : prefs.trainLang,
  }
}
