import RichText from '@/components/content/RichText'
import Bilingual from '@/components/content/Bilingual'
import Tag from '@/components/ui/Tag'
import type { ExamQuestion } from '@/content/schema'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'
import ExamMaterial from './ExamMaterial'

/** Énoncé d'une question (numéro, points, texte bilingue, document joint). */
export default function ExamQuestionStem({
  q,
  n,
  total,
  layout,
  headingId,
}: {
  q: ExamQuestion
  n: number
  total: number
  layout: Layout
  headingId: string
}) {
  const stem = q.type === 'true_false' ? q.statement : q.type === 'mcq' ? q.question : q.prompt
  const matLang = layout === 'en' ? 'en' : 'fr'
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mono hl">{UI.exams.question(n, total)}</span>
        <Tag>{UI.exams.points(q.points)}</Tag>
      </div>
      <div id={headingId}>
        <Bilingual
          layout={layout}
          render={(lang, alt) =>
            q.type === 'open' ? (
              <div className={alt ? 'text-ink-soft' : undefined}>
                <RichText block noTerms lang={lang} text={stem[lang]} />
              </div>
            ) : (
              <p className={alt ? 'text-ink-soft' : 'stmt'}>
                <RichText noTerms lang={lang} text={stem[lang]} />
              </p>
            )
          }
        />
      </div>
      {q.type === 'open' && q.material && <ExamMaterial material={q.material} lang={matLang} />}
    </div>
  )
}
