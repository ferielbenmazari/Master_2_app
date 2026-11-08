import { useMemo, useRef, useState } from 'react'
import { BothLangs } from '@/features/quiz/QuizCard'
import { UI } from '@/i18n/ui'
import { errorSpans, isErrorWord, sentenceWords } from '@/lib/writing'
import ItemPrompt from './ItemPrompt'
import type { ItemProps } from './item-props'
import { settleWriting } from './writing-effects'
import WritingFeedback from './WritingFeedback'

/** Niveau 3 : toucher le mot fautif ; puis phrase corrigée et explication bilingue. */
export default function SpotErrorItem({ item, onDone, actions }: ItemProps<'spot_error'>) {
  const words = useMemo(() => sentenceWords(item.sentence), [item.sentence])
  const spans = useMemo(() => errorSpans(item.sentence, item.error), [item.sentence, item.error])
  const [picked, setPicked] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const done = picked !== null
  const ok = picked !== null && isErrorWord(words[picked]!, spans)

  function pick(i: number) {
    if (done) return
    const right = isErrorWord(words[i]!, spans)
    setPicked(i)
    settleWriting(rootRef.current, item.id, right)
    onDone(right)
  }

  return (
    <div ref={rootRef} className="flex flex-col gap-4">
      <ItemPrompt prompt={item.prompt} hint={UI.writing.instruction.spot_error} />

      <div className="panel hi">
        <span className="mono dim mb-2 block" id={`${item.id}-sentence`}>
          {UI.writing.sentence}
        </span>
        <div className="flex flex-wrap gap-2" role="group" aria-labelledby={`${item.id}-sentence`} lang="en">
          {words.map((w, i) => {
            const state = !done ? undefined : isErrorWord(w, spans) ? 'right' : i === picked ? 'wrong' : undefined
            return (
              <button
                key={i}
                type="button"
                className="word"
                data-state={state}
                aria-pressed={done ? i === picked : undefined}
                disabled={done}
                onClick={() => pick(i)}
              >
                {w.text}
              </button>
            )
          })}
        </div>
      </div>

      {done && (
        <WritingFeedback correct={ok} actions={actions}>
          {!ok && (
            <p className="text-sm">
              <span className="mono dim">{UI.writing.errorWas}</span> <b lang="en">« {item.error} »</b>
            </p>
          )}
          <div>
            <span className="mono dim block">{UI.writing.correctedSentence}</span>
            <p lang="en" className="font-bold">
              {item.corrected}
            </p>
          </div>
          <div>
            <span className="mono dim block">{UI.writing.explanation}</span>
            <BothLangs fr={item.explanation.fr} en={item.explanation.en} />
          </div>
        </WritingFeedback>
      )}
    </div>
  )
}
