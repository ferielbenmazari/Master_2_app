import { Compass, GraduationCap, Target } from 'lucide-react'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import type { Chapter, L } from '@/content/schema'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'
import Bilingual from './Bilingual'
import RichText from './RichText'

interface Props {
  chapter: Chapter
  layout: Layout
}

function Line({ text, lang }: { text: L; lang: 'fr' | 'en' }) {
  return <RichText lang={lang} text={text[lang]} />
}

/** Indique si le chapitre porte au moins un élément du « fil » (question, objectifs, partiel, positionnement). */
export function hasGuide(ch: Chapter): boolean {
  return Boolean(
    ch.question || ch.objectives?.length || ch.examFocus || ch.prerequisites || ch.next,
  )
}

/** En-tête pédagogique : question directrice, objectifs, ce qui est attendu au partiel, avant / après. */
export default function ChapterGuide({ chapter, layout }: Props) {
  if (!hasGuide(chapter)) return null
  const { question, objectives, examFocus, prerequisites, next } = chapter
  return (
    <Panel hi className="guide-panel" aria-label={UI.reader.guide}>
      {question && (
        <section>
          <span className="mono dim flex items-center gap-1.5">
            <Icon icon={Compass} size={14} />
            {UI.reader.question}
          </span>
          <Bilingual
            layout={layout}
            render={(lang) => (
              <p className="guide-q">
                <Line text={question} lang={lang} />
              </p>
            )}
          />
        </section>
      )}
      {objectives && objectives.length > 0 && (
        <section>
          <span className="mono dim flex items-center gap-1.5">
            <Icon icon={Target} size={14} />
            {UI.reader.objectives}
          </span>
          <ul className="guide-list mt-1.5">
            {objectives.map((o) => (
              <li key={o.id}>
                <Tag className="lvl">{UI.quiz.levels[o.level]}</Tag>
                <Bilingual
                  layout={layout}
                  className="min-w-0 flex-1"
                  render={(lang) => <Line text={o.text} lang={lang} />}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
      {examFocus && (examFocus.documented?.length || examFocus.probable?.length) ? (
        <section>
          <span className="mono dim flex items-center gap-1.5">
            <Icon icon={GraduationCap} size={14} />
            {UI.reader.examFocus}
          </span>
          <ul className="guide-list mt-1.5">
            {(examFocus.documented ?? []).map((t, i) => (
              <li key={`d${i}`}>
                <Tag className="lvl" style={{ '--course': 'var(--ok)' } as React.CSSProperties}>
                  {UI.reader.documented}
                </Tag>
                <Bilingual
                  layout={layout}
                  className="min-w-0 flex-1"
                  render={(lang) => <Line text={t} lang={lang} />}
                />
              </li>
            ))}
            {(examFocus.probable ?? []).map((t, i) => (
              <li key={`p${i}`}>
                <Tag className="lvl" style={{ '--course': 'var(--gold)' } as React.CSSProperties}>
                  {UI.reader.probable}
                </Tag>
                <Bilingual
                  layout={layout}
                  className="min-w-0 flex-1"
                  render={(lang) => <Line text={t} lang={lang} />}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {(prerequisites || next) && (
        <section className="grid gap-2 text-sm">
          {prerequisites && (
            <div>
              <span className="mono dim">{UI.reader.prerequisites}</span>
              <Bilingual
                layout={layout}
                render={(lang) => (
                  <p>
                    <Line text={prerequisites} lang={lang} />
                  </p>
                )}
              />
            </div>
          )}
          {next && (
            <div>
              <span className="mono dim">{UI.reader.next}</span>
              <Bilingual
                layout={layout}
                render={(lang) => (
                  <p>
                    <Line text={next} lang={lang} />
                  </p>
                )}
              />
            </div>
          )}
        </section>
      )}
    </Panel>
  )
}
