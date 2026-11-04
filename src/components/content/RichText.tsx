import type { ReactNode } from 'react'
import { parseRich, type RichNode } from '@/lib/rich-text'
import TermChip, { TermLabel } from './TermChip'

type Lang = 'fr' | 'en'

function render(nodes: RichNode[], noTerms: boolean, lang: Lang): ReactNode[] {
  return nodes.map((n, i) => {
    switch (n.kind) {
      case 'text':
        return n.value
      case 'br':
        return <br key={i} />
      case 'term':
        if (noTerms) return <TermLabel key={i} termId={n.termId} label={n.label} lang={lang} />
        return <TermChip key={i} termId={n.termId} label={n.label} lang={lang} />
      case 'el': {
        const kids = render(n.children, noTerms, lang)
        if (n.tag === 'a')
          return (
            <a
              key={i}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {kids}
            </a>
          )
        const Tag = n.tag
        return <Tag key={i}>{kids}</Tag>
      }
    }
  })
}

/**
 * Markdown inline + `[[termes]]` → éléments React. Aucun HTML brut : balises de la liste blanche
 * uniquement (strong, em, del, code, sup, sub, a http(s)/mailto, br). Voir `src/lib/rich-text.ts`.
 */
export default function RichText({
  text,
  noTerms = false,
  lang = 'fr',
}: {
  text: string
  noTerms?: boolean
  lang?: Lang
}) {
  return <>{render(parseRich(text), noTerms, lang)}</>
}
