import { layoutFor, type Layout } from '@/lib/reader'
import { useMediaQuery } from '@/lib/use-media-query'
import { usePrefs } from '@/store/PrefsProvider'

/** Mise en page du partiel selon sa langue propre (`prefs.examLang`, FR par défaut) et langue de saisie des réponses. */
export function useExamLayout(): {
  /** Énoncés : une langue, ou FR+EN selon la largeur. */
  layout: Layout
  /** Corrections : selon le sélecteur FR · FR+EN · EN (FR+EN en colonnes sur grand écran). */
  bothLayout: Layout
  /** Langue de saisie (attribut `lang` des zones de texte). */
  inputLang: 'fr' | 'en'
} {
  const { prefs } = usePrefs()
  const wide = useMediaQuery('(min-width: 1024px)')
  return {
    layout: layoutFor(prefs.examLang, wide),
    bothLayout: layoutFor(prefs.examLang, wide),
    inputLang: prefs.examLang === 'en' ? 'en' : prefs.examLang === 'fr' ? 'fr' : prefs.trainLang,
  }
}
