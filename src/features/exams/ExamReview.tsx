import { Check, X } from 'lucide-react'
import Bilingual from '@/components/content/Bilingual'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import type { ExamQuestion } from '@/content/schema'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'
import type { ExamAnswer } from '@/store/exam-session'
import { isBlank, type QuestionScore } from './exam-logic'
import ExamQuestionStem from './ExamQuestionStem'

const fmt = (n: number) => String(Math.round(n * 100) / 100).replace('.', ',')

function BothLangs({ text, bothLayout }: { text: { fr: string; en: string }; bothLayout: 'columns' | 'stack' }) {
  return (
    <Bilingual
      layout={bothLayout}
      render={(lang, alt) => (
        <div className={alt ? 'text-ink-soft' : undefined}>
          <RichText block noTerms lang={lang} text={text[lang]} />
        </div>
      )}
    />
  )
}

/** Une question corrigée : réponse donnée, corrigé bilingue, sources ; critères à cocher pour les questions ouvertes. */
export default function ExamReview({
  q,
  n,
  total,
  layout,
  bothLayout,
  answer,
  score,
  checked,
  onToggle,
}: {
  q: ExamQuestion
  n: number
  total: number
  layout: Layout
  bothLayout: 'columns' | 'stack'
  answer: ExamAnswer | undefined
  score: QuestionScore
  checked: readonly number[]
  onToggle: (criterion: number) => void
}) {
  const headingId = `${q.id}-stem`
  const blank = isBlank(q, answer)
  const full = score.earned >= score.max
  const readLang = layout === 'en' ? 'en' : 'fr'

  return (
    <Panel hi className="flex flex-col gap-3">
      <ExamQuestionStem q={q} n={n} total={total} layout={layout} headingId={headingId} />

      <div className="flex flex-wrap items-center gap-2">
        {q.type !== 'open' && (
          <Tag
            tilt="left"
            icon={full ? Check : X}
            style={{ '--course': full ? 'var(--ok)' : 'var(--bad)' } as React.CSSProperties}
          >
            {full ? UI.exams.verdictOk : UI.exams.verdictKo}
          </Tag>
        )}
        <Tag>{UI.exams.earned(fmt(score.earned), fmt(score.max))}</Tag>
        <Tag>{UI.quiz.levels[q.level]}</Tag>
      </div>

      {q.type === 'true_false' && (
        <>
          <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
            <span>
              <span className="mono dim">{UI.exams.yourAnswer} : </span>
              {answer?.bool === undefined ? UI.exams.noAnswer : answer.bool ? UI.exams.trueLabel : UI.exams.falseLabel}
            </span>
            <span>
              <span className="mono dim">{UI.exams.correctAnswer} : </span>
              <b>{q.answer ? UI.exams.trueLabel : UI.exams.falseLabel}</b>
            </span>
          </p>
          {(answer?.text ?? '').trim() && (
            <blockquote className="border-l-2 border-[var(--course)] pl-3 text-sm whitespace-pre-wrap" lang={readLang}>
              <span className="mono dim block">{UI.exams.yourJustification}</span>
              {answer?.text}
            </blockquote>
          )}
          <div>
            <span className="mono dim block">{UI.exams.officialJustification}</span>
            <BothLangs text={q.justification} bothLayout={bothLayout} />
          </div>
        </>
      )}

      {q.type === 'mcq' && (
        <>
          <ul className="flex flex-col gap-2" aria-label={UI.exams.yourPicks}>
            {q.options.map((opt, i) => {
              const good = q.correct.includes(i)
              const picked = answer?.picks?.includes(i) ?? false
              const state = good ? (picked ? 'right' : 'missed') : picked ? 'wrong' : undefined
              return (
                <li key={i} className="opt cursor-default" data-state={state}>
                  <span className="min-w-0">
                    <span lang={readLang}>
                      <RichText noTerms lang={readLang} text={opt[readLang]} />
                    </span>
                    {layout !== 'fr' && layout !== 'en' && (
                      <span lang="en" className="block text-sm text-ink-soft">
                        <RichText noTerms lang="en" text={opt.en} />
                      </span>
                    )}
                    {state && (
                      <span className="opt-mark">
                        <Icon icon={state === 'wrong' ? X : Check} size={14} />{' '}
                        {state === 'right' ? UI.exams.optionRight : state === 'wrong' ? UI.exams.optionWrong : UI.exams.optionMissed}
                      </span>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
          <div>
            <span className="mono dim block">{UI.exams.explanation}</span>
            <BothLangs text={q.explanation} bothLayout={bothLayout} />
          </div>
        </>
      )}

      {q.type === 'open' && (
        <>
          <blockquote className="border-l-2 border-[var(--course)] pl-3 text-sm whitespace-pre-wrap" lang={readLang}>
            <span className="mono dim block">{UI.exams.yourAnswer}</span>
            {blank ? UI.exams.noAnswer : answer?.text}
          </blockquote>
          <div>
            <span className="mono dim block">{UI.exams.correctionText}</span>
            <BothLangs text={q.correction} bothLayout={bothLayout} />
          </div>
          <fieldset className="flex flex-col gap-2 border-0 p-0">
            <legend className="mb-1 text-sm font-bold">{UI.exams.gradingTitle}</legend>
            <p className="text-sm text-ink-soft">{UI.exams.gradingHelp}</p>
            {q.gradingGuide.map((g, i) => (
              <label key={i} className="opt">
                <input type="checkbox" checked={checked.includes(i)} onChange={() => onToggle(i)} />
                <span className="min-w-0">
                  <span lang="fr">{g.fr}</span>
                  <span lang="en" className="block text-sm text-ink-soft">
                    {g.en}
                  </span>
                </span>
              </label>
            ))}
          </fieldset>
        </>
      )}

      <div className="flex">
        <SourceChip src={q.src} />
      </div>
    </Panel>
  )
}
