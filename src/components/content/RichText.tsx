import type { ReactNode } from 'react'
import { parseRich, parseRichBlocks, type RichBlock, type RichNode } from '@/lib/rich-text'
import { UI } from '@/i18n/ui'
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

function renderBlocks(blocks: RichBlock[], noTerms: boolean, lang: Lang): ReactNode[] {
  const inline = (n: RichNode[]) => render(n, noTerms, lang)
  return blocks.map((b, i) => {
    switch (b.kind) {
      case 'p':
        return <p key={i}>{inline(b.children)}</p>
      case 'heading':
        return (
          <p key={i} className="rb-heading">
            {inline(b.children)}
          </p>
        )
      case 'list': {
        const List = b.ordered ? 'ol' : 'ul'
        return (
          <List key={i} start={b.ordered ? b.start : undefined}>
            {b.items.map((it, j) => (
              <li key={j}>{renderBlocks(it, noTerms, lang)}</li>
            ))}
          </List>
        )
      }
      case 'table':
        return (
          <div key={i} className="table-wrap" role="region" tabIndex={0} aria-label={UI.reader.table(1)}>
            <table>
              <thead>
                <tr>
                  {b.head.map((c, j) => (
                    <th key={j} scope="col">
                      {inline(c)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, j) => (
                  <tr key={j}>
                    {r.map((c, k) => (
                      <td key={k}>{inline(c)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'quote':
        return <blockquote key={i}>{renderBlocks(b.children, noTerms, lang)}</blockquote>
      case 'code':
        return (
          <pre key={i}>
            <code>{b.text}</code>
          </pre>
        )
      case 'hr':
        return <hr key={i} />
    }
  })
}

/**
 * Markdown inline + `[[termes]]` → éléments React. Aucun HTML brut : balises de la liste blanche
 * uniquement (strong, em, del, code, sup, sub, a http(s)/mailto, br). Voir `src/lib/rich-text.ts`.
 * `block` : markdown bloc (paragraphes, listes, tableaux, citations, code) dans un conteneur `.rich-block`.
 */
export default function RichText({
  text,
  noTerms = false,
  lang = 'fr',
  block = false,
}: {
  text: string
  noTerms?: boolean
  lang?: Lang
  block?: boolean
}) {
  if (block) return <div className="rich-block">{renderBlocks(parseRichBlocks(text), noTerms, lang)}</div>
  return <>{render(parseRich(text), noTerms, lang)}</>
}
