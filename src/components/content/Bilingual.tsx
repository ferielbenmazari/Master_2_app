import type { ReactNode } from 'react'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'

type Lang = 'fr' | 'en'

interface BilingualProps {
  layout: Layout
  /** Rend le contenu dans une langue ; `alt` = version secondaire (EN en mode FR+EN). */
  render: (lang: Lang, alt: boolean) => ReactNode
  className?: string
}

/**
 * Affiche un bloc selon la mise en page : une langue, FR puis EN empilés (mobile),
 * ou deux colonnes (grand écran). Chaque bloc est sa propre ligne de grille : FR et EN restent alignés.
 */
export default function Bilingual({ layout, render, className }: BilingualProps) {
  if (layout === 'fr' || layout === 'en') {
    return (
      <div className={className} lang={layout}>
        {render(layout, false)}
      </div>
    )
  }
  if (layout === 'stack') {
    return (
      <div className={className}>
        <div lang="fr">{render('fr', false)}</div>
        <div className="en-block" lang="en">
          <span className="mono en-tag" aria-label={UI.reader.langBlock}>
            EN
          </span>
          {render('en', true)}
        </div>
      </div>
    )
  }
  return (
    <div className={`grid grid-cols-2 items-start gap-8 ${className ?? ''}`}>
      <div lang="fr">{render('fr', false)}</div>
      <div lang="en" className="en-col">
        {render('en', true)}
      </div>
    </div>
  )
}
