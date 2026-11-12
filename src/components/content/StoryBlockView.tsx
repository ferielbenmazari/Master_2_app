import {
  Compass,
  Info,
  Lightbulb,
  Route,
  Sparkles,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react'
import Icon from '@/components/ui/Icon'
import ScrambleText from '@/components/ui/ScrambleText'
import Squiggle from '@/components/ui/Squiggle'
import type { StoryBlock } from '@/content/schema'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'
import { parseRich } from '@/lib/rich-text'
import Checkpoint from './Checkpoint'
import Bilingual from './Bilingual'
import MermaidDiagram from './MermaidDiagram'
import RichText from './RichText'
import SourceChip from './SourceChip'

const CALLOUTS: Record<Extract<StoryBlock, { type: 'callout' }>['variant'], LucideIcon> = {
  tip: Lightbulb,
  exam: TriangleAlert,
  warning: Info,
  analogy: Sparkles,
  repere: Compass,
}

interface Props {
  block: StoryBlock
  layout: Layout
  /** Épisode (blocs `heading`). */
  episode?: { n: number; total: number }
  /** Lien vers le quiz du chapitre (carte checkpoint). */
  quizHref: string
  /** Rang du tableau dans le chapitre (1, 2…). */
  tableNo?: number
}

function Heading({
  text,
  episode,
  alt,
  lang,
}: {
  text: string
  episode?: Props['episode']
  alt: boolean
  lang: 'fr' | 'en'
}) {
  if (alt)
    return (
      <div className="mt-4">
        <span className="mono invisible" aria-hidden="true">
          .
        </span>
        <p className="display mt-1 text-2xl leading-tight text-ink-soft">{text}</p>
      </div>
    )
  const plain = parseRich(text).every((n) => n.kind === 'text')
  return (
    <div className="mt-4">
      {episode && <span className="mono hl">{UI.reader.episode(episode.n, episode.total)}</span>}
      <h2 className="display mt-1 text-2xl leading-tight">
        {plain ? <ScrambleText>{text}</ScrambleText> : <RichText lang={lang} text={text} />}
      </h2>
      <Squiggle />
    </div>
  )
}

/** Rend un bloc de l'histoire dans la mise en page courante. */
export default function StoryBlockView({ block, layout, episode, quizHref, tableNo = 1 }: Props) {
  switch (block.type) {
    case 'heading':
      return (
        <Bilingual
          layout={layout}
          render={(lang, alt) => (
            <Heading text={block.text[lang]} episode={episode} alt={alt} lang={lang} />
          )}
        />
      )

    case 'paragraph':
      return (
        <Bilingual
          layout={layout}
          render={(lang, alt) => (
            <div className={block.explain ? 'explain' : undefined}>
              {block.explain && !alt && (
                <span className="mono explain-title">{UI.reader.explain}</span>
              )}
              <p className={block.narrative ? 'narrative' : undefined}>
                <RichText lang={lang} text={block.text[lang]} />
              </p>
              {!alt && block.src && block.src.length > 0 && <SourceChip src={block.src} />}
            </div>
          )}
        />
      )

    case 'list': {
      const List = block.ordered ? 'ol' : 'ul'
      return (
        <Bilingual
          layout={layout}
          render={(lang, alt) => (
            <div>
              <List className={`prose-list ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
                {block.items.map((it, i) => (
                  <li key={i}>
                    <RichText lang={lang} text={it[lang]} />
                  </li>
                ))}
              </List>
              {!alt && <SourceChip src={block.src} />}
            </div>
          )}
        />
      )
    }

    case 'callout':
      return (
        <Bilingual
          layout={layout}
          render={(lang, alt) => (
            <aside className={`callout callout-${block.variant}`}>
              <span className="mono callout-title">
                <Icon icon={CALLOUTS[block.variant]} size={14} />
                {UI.reader.callout[block.variant]}
              </span>
              <p>
                <RichText lang={lang} text={block.text[lang]} />
              </p>
              {!alt && block.src && block.src.length > 0 && <SourceChip src={block.src} />}
            </aside>
          )}
        />
      )

    case 'table':
      return (
        <Bilingual
          layout={layout}
          render={(lang, alt) => (
            <div>
              <div
                className="table-wrap"
                role="region"
                tabIndex={0}
                aria-label={UI.reader.table(tableNo)}
              >
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i} scope="col">
                          <RichText lang={lang} text={h[lang]} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((c, i) => (
                          <td key={i}>
                            <RichText lang={lang} text={c[lang]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {!alt && <SourceChip src={block.src} />}
            </div>
          )}
        />
      )

    case 'method':
      return (
        <Bilingual
          layout={layout}
          render={(lang, alt) => (
            <aside className="method-box">
              <span className="mono callout-title">
                <Icon icon={Route} size={14} />
                {UI.reader.method}
                {!alt && <span className="dim method-built">· {UI.reader.methodBuilt}</span>}
              </span>
              <p className="method-title">
                <RichText lang={lang} text={block.title[lang]} />
              </p>
              <ol className="method-steps">
                {block.steps.map((st, i) => (
                  <li key={i}>
                    <span className="method-do">
                      <RichText lang={lang} text={st.do[lang]} />
                    </span>
                    <span className="method-why">
                      <span className="mono">{UI.reader.methodWhy}</span>{' '}
                      <RichText lang={lang} text={st.why[lang]} />
                    </span>
                  </li>
                ))}
              </ol>
              {!alt && block.src && block.src.length > 0 && <SourceChip src={block.src} />}
            </aside>
          )}
        />
      )

    case 'diagram':
      return (
        <figure className="diagram-fig">
          <MermaidDiagram code={block.mermaid} />
          <figcaption>
            <Bilingual
              layout={layout}
              render={(lang) => <RichText lang={lang} text={block.caption[lang]} />}
            />
          </figcaption>
          {block.src && block.src.length > 0 && <SourceChip src={block.src} />}
        </figure>
      )

    case 'quote':
      return (
        <Bilingual
          layout={layout}
          render={(lang) => (
            <blockquote className="story-quote">
              <p>
                <RichText lang={lang} text={block.text[lang]} />
              </p>
              <cite className="mono dim">{block.source}</cite>
            </blockquote>
          )}
        />
      )

    case 'checkpoint':
      return <Checkpoint quizId={block.quizId} quizHref={quizHref} />
  }
}
