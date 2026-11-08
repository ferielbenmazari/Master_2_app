import { Check, X } from 'lucide-react'
import RichText from '@/components/content/RichText'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import type { ExamQuestion } from '@/content/schema'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'
import type { ExamAnswer } from '@/store/exam-session'
import ExamQuestionStem from './ExamQuestionStem'

/** Question en cours de passage : réponse sauvegardée au fil de la saisie (via `onChange`). */
export default function ExamQuestionField({
  q,
  n,
  total,
  layout,
  inputLang,
  answer,
  onChange,
}: {
  q: ExamQuestion
  n: number
  total: number
  layout: Layout
  inputLang: 'fr' | 'en'
  answer: ExamAnswer | undefined
  onChange: (a: ExamAnswer) => void
}) {
  const headingId = `${q.id}-stem`
  const a = answer ?? {}
  const optLang = layout === 'en' ? 'en' : 'fr'

  return (
    <Panel hi className="flex flex-col gap-3">
      <ExamQuestionStem q={q} n={n} total={total} layout={layout} headingId={headingId} />

      {q.type === 'true_false' && (
        <>
          <div className="tf" role="group" aria-labelledby={headingId}>
            {([true, false] as const).map((v) => (
              <Button
                key={String(v)}
                icon={v ? Check : X}
                aria-pressed={a.bool === v}
                onClick={() => onChange({ ...a, bool: a.bool === v ? undefined : v })}
              >
                {v ? UI.exams.true : UI.exams.false}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${q.id}-just`} className="text-sm font-bold">
              {UI.exams.justification}
            </label>
            <textarea
              id={`${q.id}-just`}
              className="just"
              value={a.text ?? ''}
              lang={inputLang}
              onChange={(e) => onChange({ ...a, text: e.target.value })}
            />
          </div>
        </>
      )}

      {q.type === 'mcq' && (
        <fieldset className="flex flex-col gap-2 border-0 p-0" aria-labelledby={headingId}>
          <legend className="mb-2 text-sm text-ink-soft">{UI.exams.mcqHint}</legend>
          {q.options.map((opt, i) => {
            const checked = a.picks?.includes(i) ?? false
            return (
              <label key={i} className="opt">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const cur = a.picks ?? []
                    onChange({ ...a, picks: checked ? cur.filter((x) => x !== i) : [...cur, i].sort((x, y) => x - y) })
                  }}
                />
                <span className="min-w-0" lang={optLang}>
                  <RichText noTerms lang={optLang} text={opt[optLang]} />
                  {layout !== 'fr' && layout !== 'en' && (
                    <span lang="en" className="block text-sm text-ink-soft">
                      <RichText noTerms lang="en" text={opt.en} />
                    </span>
                  )}
                </span>
              </label>
            )
          })}
        </fieldset>
      )}

      {q.type === 'open' && (
        <div className="flex flex-col gap-2">
          <label htmlFor={`${q.id}-text`} className="text-sm font-bold">
            {UI.exams.answerLabel}
          </label>
          <textarea
            id={`${q.id}-text`}
            className="ex-draft"
            value={a.text ?? ''}
            lang={inputLang}
            aria-describedby={`${q.id}-help`}
            onChange={(e) => onChange({ ...a, text: e.target.value })}
          />
          <span id={`${q.id}-help`} className="text-sm text-ink-soft">
            {UI.exams.answerHelp}
          </span>
        </div>
      )}
    </Panel>
  )
}
