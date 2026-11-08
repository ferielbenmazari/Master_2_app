import { Check, RotateCcw } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { UI } from '@/i18n/ui'
import { checkReorder, shuffledOrder, splitSentence } from '@/lib/writing'
import ItemPrompt from './ItemPrompt'
import type { ItemProps } from './item-props'
import { settleWriting } from './writing-effects'
import WritingFeedback from './WritingFeedback'

/** Niveau 1 : remettre les mots dans l'ordre (tap pour placer, tap sur un mot placé pour le retirer). */
export default function ReorderItem({ item, onDone, actions }: ItemProps<'reorder'>) {
  const words = useMemo(() => splitSentence(item.answer), [item.answer])
  const [seed] = useState(() => Math.floor(Math.random() * 2 ** 31))
  const order = useMemo(() => shuffledOrder(words, seed), [words, seed])
  /** Numéros de case (dans la banque) des mots placés, dans l'ordre de la phrase. */
  const [placed, setPlaced] = useState<number[]>([])
  const [result, setResult] = useState<boolean | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const done = result !== null

  function check() {
    if (done) return
    const ok = checkReorder(
      placed.map((k) => words[order[k]!]!),
      item.answer,
      item.accepted,
    )
    setResult(ok)
    settleWriting(rootRef.current, item.id, ok)
    onDone(ok)
  }

  return (
    <div ref={rootRef} className="flex flex-col gap-4">
      <ItemPrompt prompt={item.prompt} hint={UI.writing.instruction.reorder} />

      <div className="flex flex-col gap-2">
        <span className="mono dim" id={`${item.id}-zone`}>
          {UI.writing.yourSentence}
        </span>
        <div className="word-zone" role="group" aria-labelledby={`${item.id}-zone`} lang="en">
          {placed.length === 0 && <span className="mono dim self-center">{UI.writing.emptySentence}</span>}
          {placed.map((k) => (
            <button
              key={k}
              type="button"
              className="word"
              disabled={done}
              aria-label={`Retirer « ${words[order[k]!]} »`}
              onClick={() => setPlaced((p) => p.filter((x) => x !== k))}
            >
              {words[order[k]!]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="mono dim" id={`${item.id}-bank`}>
          {UI.writing.wordBank}
        </span>
        <div className="flex flex-wrap gap-2" role="group" aria-labelledby={`${item.id}-bank`} lang="en">
          {order.map((wi, k) => {
            const used = placed.includes(k)
            return (
              <button
                key={k}
                type="button"
                className="word"
                data-state={used ? 'used' : undefined}
                disabled={used || done}
                onClick={() => setPlaced((p) => [...p, k])}
              >
                {words[wi]}
              </button>
            )
          })}
        </div>
      </div>

      {!done && (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" icon={Check} disabled={placed.length !== words.length} onClick={check}>
            {UI.writing.check}
          </Button>
          <Button icon={RotateCcw} disabled={placed.length === 0} onClick={() => setPlaced([])}>
            {UI.writing.reset}
          </Button>
        </div>
      )}

      {result !== null && (
        <WritingFeedback correct={result} actions={actions}>
          <div>
            <span className="mono dim block">{result ? UI.writing.yourSentence : UI.writing.expected}</span>
            <p lang="en" className="font-bold">
              {item.answer}
            </p>
          </div>
        </WritingFeedback>
      )}
    </div>
  )
}
