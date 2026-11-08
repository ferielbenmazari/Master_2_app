import { Check, X } from 'lucide-react'
import { useId, useMemo, useRef, useState } from 'react'
import RichText from '@/components/content/RichText'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { UI } from '@/i18n/ui'
import { findKeywords, freeScore } from '@/lib/writing'
import ItemPrompt from './ItemPrompt'
import type { ItemProps } from './item-props'
import { settleWriting } from './writing-effects'
import WritingFeedback from './WritingFeedback'

/** Niveau 4 : rédaction libre ; mots-clés trouvés/manquants, réponse modèle, checklist d'auto-correction. */
export default function FreeItem({ item, onDone, actions }: ItemProps<'free'>) {
  const [text, setText] = useState('')
  const [checked, setChecked] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const id = useId()
  const report = useMemo(() => (checked ? findKeywords(text, item.keywords) : null), [checked, text, item.keywords])
  const total = item.keywords.length

  function check() {
    if (checked || text.trim() === '') return
    const r = findKeywords(text, item.keywords)
    const { score, passed } = freeScore(r)
    setChecked(true)
    settleWriting(rootRef.current, item.id, passed, score)
    onDone(passed)
  }

  return (
    <div ref={rootRef} className="flex flex-col gap-4">
      <ItemPrompt prompt={item.prompt} hint={UI.writing.instruction.free} />

      <div className="flex flex-col gap-2">
        <label htmlFor={`${id}-text`} className="text-sm font-bold">
          {UI.writing.textarea}
        </label>
        <textarea
          id={`${id}-text`}
          className="just"
          lang="en"
          value={text}
          readOnly={checked}
          spellCheck={false}
          aria-describedby={`${id}-help`}
          onChange={(e) => setText(e.target.value)}
        />
        <span id={`${id}-help`} className="text-sm text-ink-soft">
          {UI.writing.textareaHelp}
        </span>
      </div>

      {!checked && (
        <div className="flex">
          <Button variant="primary" icon={Check} disabled={text.trim() === ''} onClick={check}>
            {UI.writing.check}
          </Button>
        </div>
      )}

      {report && (
        <WritingFeedback
          correct={freeScore(report).passed}
          label={UI.writing.keywordsScore(report.found.length, total)}
          actions={actions}
        >
          {total > 0 && (
            <div>
              <span className="mono dim block">{UI.writing.keywords}</span>
              <ul className="mt-1 flex flex-wrap gap-2" lang="en">
                {[
                  ...report.found.map((k) => ({ k, found: true })),
                  ...report.missing.map((k) => ({ k, found: false })),
                ].map(({ k, found }) => (
                  <li key={k} className="kw" data-state={found ? 'found' : 'missing'}>
                    <Icon icon={found ? Check : X} size={12} />
                    {k}
                    <span className="sr-only">
                      {' '}
                      ({found ? UI.writing.keywordFound : UI.writing.keywordMissing})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <span className="mono dim block">{UI.writing.modelAnswer}</span>
            <p lang="en" className="font-bold">
              {item.modelAnswer}
            </p>
          </div>

          {item.checklist.length > 0 && (
            <fieldset className="flex flex-col gap-2 border-0 p-0">
              <legend className="mono dim">{UI.writing.checklist}</legend>
              <p className="mb-1 text-sm text-ink-soft">{UI.writing.checklistHelp}</p>
              {item.checklist.map((c, i) => (
                <label key={i} className="opt">
                  <input type="checkbox" />
                  <span className="min-w-0">
                    <span lang="fr">
                      <RichText lang="fr" text={c.fr} noTerms />
                    </span>
                    <span lang="en" className="block text-sm text-ink-soft">
                      <RichText lang="en" text={c.en} noTerms />
                    </span>
                  </span>
                </label>
              ))}
            </fieldset>
          )}

          {item.usefulPhrases && item.usefulPhrases.length > 0 && (
            <div>
              <span className="mono dim block">{UI.writing.usefulPhrases}</span>
              <ul className="mt-1 flex flex-wrap gap-2" lang="en">
                {item.usefulPhrases.map((p) => (
                  <li key={p} className="kw">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </WritingFeedback>
      )}
    </div>
  )
}
