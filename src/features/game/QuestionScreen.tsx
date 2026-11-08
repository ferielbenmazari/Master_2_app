import { Check, X } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import RichText from '@/components/content/RichText'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import TimerRing from '@/components/ui/TimerRing'
import { GAME } from '@/i18n/game-ui'
import { UI } from '@/i18n/ui'
import type { Choice, PublicQuestion } from './engine'
import { useCountdown } from './use-countdown'

interface Props {
  question: PublicQuestion
  receivedAt: number
  /** Réponse déjà envoyée (verrouille l'écran). */
  myChoice: Choice | null
  lang: 'fr' | 'en'
  onAnswer: (choice: Choice) => void
  /** Zone sous les réponses : pour l'hôte, avancement et bouton « Passer à la correction ». */
  footer?: ReactNode
}

/** Écran de réponse : énoncé, minuteur, gros boutons (≥ 44 px, ici 68 px). */
export default function QuestionScreen({
  question,
  receivedAt,
  myChoice,
  lang,
  onAnswer,
  footer,
}: Props) {
  const left = useCountdown(receivedAt, question.durationMs)
  const total = Math.round(question.durationMs / 1000)
  const noLimit = question.durationMs === 0
  const [checked, setChecked] = useState<readonly number[]>([])
  const answered = myChoice !== null
  const locked = answered || (!noLimit && left <= 0)
  const n = String(question.index + 1).padStart(2, '0')

  function toggle(i: number) {
    if (locked) return
    if (!question.multi) {
      onAnswer([i])
      return
    }
    setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))
  }

  const chosen = Array.isArray(myChoice) ? myChoice : checked

  return (
    <section
      aria-label={GAME.question(question.index + 1, question.total)}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className="display text-[22px]"
          aria-label={GAME.question(question.index + 1, question.total)}
        >
          <span aria-hidden="true">Q.{n}</span>{' '}
          <span aria-hidden="true" className="dim text-sm">
            / {question.total}
          </span>
        </div>
        {noLimit ? (
          <span className="mono dim">{GAME.noTimer}</span>
        ) : (
          <TimerRing
            seconds={left}
            total={total}
            tone={left <= total * 0.25 ? 'danger' : left <= total * 0.5 ? 'warn' : undefined}
          />
        )}
      </div>

      {question.origin && (
        <p className="mono dim" lang={lang} data-testid="question-origin">
          {GAME.origin(question.origin.course, question.origin.chapter, question.origin.title[lang])}
        </p>
      )}
      <Panel hi>
        <p className="stmt" lang={lang}>
          <RichText lang={lang} text={question.text[lang]} noTerms />
        </p>
      </Panel>

      {question.kind === 'tf' ? (
        <div className="tf" role="group" aria-label={UI.quiz.tfGroup}>
          {([true, false] as const).map((v) => (
            <Button
              key={String(v)}
              icon={v ? Check : X}
              aria-pressed={myChoice === v}
              disabled={locked && myChoice !== v}
              aria-disabled={locked}
              className="min-h-24! text-2xl!"
              onClick={() => !locked && onAnswer(v)}
            >
              {v ? UI.quiz.true : UI.quiz.false}
            </Button>
          ))}
        </div>
      ) : (
        <fieldset className="flex flex-col gap-3 border-0 p-0">
          {question.multi && (
            <legend className="mb-2 text-sm text-ink-soft">{GAME.multiHint}</legend>
          )}
          <div className="tf grid-cols-1" role="group">
            {question.options.map((o, i) => (
              <Button
                key={i}
                aria-pressed={chosen.includes(i)}
                disabled={locked && !chosen.includes(i)}
                aria-disabled={locked}
                className="min-h-16! justify-start! text-left! text-base!"
                onClick={() => toggle(i)}
              >
                <span lang={lang}>
                  <RichText lang={lang} text={o[lang]} noTerms />
                </span>
              </Button>
            ))}
          </div>
          {question.multi && !answered && (
            <Button
              variant="primary"
              icon={Check}
              disabled={locked || checked.length === 0}
              onClick={() => onAnswer(checked)}
            >
              {GAME.validate}
            </Button>
          )}
        </fieldset>
      )}

      <p role="status" className="mono dim text-center">
        {answered ? GAME.sent : !noLimit && left <= 0 ? GAME.timeUp : ''}
      </p>
      {footer}
    </section>
  )
}
