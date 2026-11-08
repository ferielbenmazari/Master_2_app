import { Check, Lightbulb } from 'lucide-react'
import { useMemo, useRef, useState, type CSSProperties } from 'react'
import Button from '@/components/ui/Button'
import { UI } from '@/i18n/ui'
import { checkCloze, clozeGaps, clozeHint, parseCloze } from '@/lib/writing'
import ItemPrompt from './ItemPrompt'
import type { ItemProps } from './item-props'
import { settleWriting } from './writing-effects'
import WritingFeedback from './WritingFeedback'

/** Niveau 2 : phrase à trous ; chaque trou accepte toutes ses variantes. */
export default function ClozeItem({ item, onDone, actions }: ItemProps<'cloze'>) {
  const segments = useMemo(() => parseCloze(item.text), [item.text])
  const gaps = useMemo(() => clozeGaps(segments), [segments])
  const [values, setValues] = useState<string[]>(() => gaps.map(() => ''))
  const [results, setResults] = useState<boolean[] | null>(null)
  const [hint, setHint] = useState(false)
  const rootRef = useRef<HTMLFormElement>(null)
  const done = results !== null

  function check() {
    if (done) return
    const r = checkCloze(gaps, values)
    const ok = r.every(Boolean)
    setResults(r)
    settleWriting(rootRef.current, item.id, ok)
    onDone(ok)
  }

  let gapNo = -1
  const complete = segments.map((s) => (s.type === 'text' ? s.value : s.answers[0] ?? '')).join('')

  return (
    <form
      ref={rootRef}
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        check()
      }}
    >
      <ItemPrompt prompt={item.prompt} hint={UI.writing.instruction.cloze} />

      <div className="panel hi">
        <p className="cloze" lang="en">
          {segments.map((s, i) => {
            if (s.type === 'text') return <span key={i}>{s.value}</span>
            const g = ++gapNo
            const state = results ? (results[g] ? 'right' : 'wrong') : undefined
            const longest = Math.max(6, ...s.answers.map((a) => a.length)) + 2
            return (
              <input
                key={i}
                type="text"
                value={values[g] ?? ''}
                data-state={state}
                readOnly={done}
                aria-label={UI.writing.gap(g + 1, gaps.length)}
                aria-invalid={state === 'wrong' || undefined}
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                placeholder={hint ? clozeHint(s.answers) : ''}
                style={{ width: `${longest}ch`, minWidth: '6em' } as CSSProperties}
                onChange={(e) => setValues((v) => v.map((x, j) => (j === g ? e.target.value : x)))}
              />
            )
          })}
        </p>
      </div>

      {!done && (
        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="primary" icon={Check}>
            {UI.writing.check}
          </Button>
          <Button icon={Lightbulb} aria-pressed={hint} onClick={() => setHint((h) => !h)}>
            {hint ? UI.writing.hintHide : UI.writing.hint}
          </Button>
        </div>
      )}

      {results && (
        <WritingFeedback correct={results.every(Boolean)} actions={actions}>
          {results.some((r) => !r) && (
            <ul className="flex flex-col gap-1">
              {gaps.map((answers, g) =>
                results[g] ? null : (
                  <li key={g} className="text-sm">
                    <span className="mono dim">
                      {UI.writing.gap(g + 1, gaps.length)} · {UI.writing.expectedGap}
                    </span>{' '}
                    <b lang="en">{answers.join(' / ')}</b>
                  </li>
                ),
              )}
            </ul>
          )}
          <p lang="en" className="font-bold">
            {complete}
          </p>
          <p lang="fr" className="text-ink-soft">
            <span className="mono">FR</span> {item.translation}
          </p>
        </WritingFeedback>
      )}
    </form>
  )
}
