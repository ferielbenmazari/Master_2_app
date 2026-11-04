import { Check, Languages, X, Zap } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import TimerRing from '@/components/ui/TimerRing'
import type { QuizItem } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { comboBurst, flashKo, flashOk } from '@/lib/celebrate'
import { recordAttempt } from '@/store/progress'
import { isCorrect, scoreAnswer, type Answer } from './quiz-logic'

type Lang = 'fr' | 'en'

export interface QuizResult {
  correct: boolean
  timedOut: boolean
  combo: number
  xp: number
}

interface QuizCardProps {
  item: QuizItem
  /** QCM : `order[k]` = indice original de l'option affichée en k-ième position (défaut : ordre du contenu). */
  order?: readonly number[]
  /** Langue de l'énoncé. */
  lang: Lang
  /** Combo en cours avant cette question. */
  combo?: number
  /** Minuteur en secondes (0 ou absent = désactivé). */
  timerSeconds?: number
  onAnswered?: (r: QuizResult) => void
  /** Boutons affichés sous la correction (ex. « Suivante »). */
  actions?: ReactNode
}

const other = (l: Lang): Lang => (l === 'fr' ? 'en' : 'fr')

/** Texte bilingue de correction : FR puis EN, toujours les deux. */
function BothLangs({ fr, en }: { fr: string; en: string }) {
  return (
    <>
      <p lang="fr">
        <b>FR</b> — <RichText lang="fr" text={fr} noTerms />
      </p>
      <p lang="en" className="mt-1.5 text-ink-soft">
        <b>EN</b> — <RichText lang="en" text={en} noTerms />
      </p>
    </>
  )
}

/** Carte de question (vrai/faux justifié ou QCM) avec correction bilingue. Réutilisée par le quiz et les checkpoints. */
export default function QuizCard({
  item,
  order,
  lang,
  combo = 0,
  timerSeconds = 0,
  onAnswered,
  actions,
}: QuizCardProps) {
  const [showAlt, setShowAlt] = useState(false)
  const [pick, setPick] = useState<boolean | null>(null)
  const [checked, setChecked] = useState<readonly number[]>([])
  const [mine, setMine] = useState('')
  const [result, setResult] = useState<QuizResult | null>(null)
  const [left, setLeft] = useState(timerSeconds)
  const rootRef = useRef<HTMLDivElement>(null)
  const fbRef = useRef<HTMLDivElement>(null)

  const shown = item.type === 'mcq' ? (order && order.length === item.options.length ? order : item.options.map((_, i) => i)) : []
  const alt = other(lang)

  function settle(answer: Answer, timedOut: boolean) {
    if (result) return
    const correct = !timedOut && isCorrect(item, answer)
    const s = scoreAnswer(combo, correct)
    if (correct) {
      flashOk()
      if (s.combo >= 2) comboBurst(s.combo, s.xp)
    } else {
      flashKo(rootRef.current)
    }
    setResult({ correct, timedOut, combo: s.combo, xp: s.xp })
    void recordAttempt({ itemId: item.id, kind: 'quiz', correct })
    onAnswered?.({ correct, timedOut, combo: s.combo, xp: s.xp })
  }

  const settleRef = useRef(settle)
  useEffect(() => {
    settleRef.current = settle
  })

  useEffect(() => {
    if (!timerSeconds || result) return
    const id = setInterval(() => setLeft((l) => l - 1), 1000)
    return () => clearInterval(id)
  }, [timerSeconds, result])

  useEffect(() => {
    if (timerSeconds > 0 && left <= 0 && !result) {
      settleRef.current(item.type === 'true_false' ? (pick ?? !item.answer) : checked, true)
    }
  }, [left, timerSeconds, result, item, pick, checked])

  useEffect(() => {
    if (result) fbRef.current?.focus()
  }, [result])

  const done = result !== null
  const stem = item.type === 'true_false' ? item.statement : item.question

  function toggle(orig: number) {
    if (done) return
    setChecked((c) => (c.includes(orig) ? c.filter((i) => i !== orig) : [...c, orig]))
  }

  const verdict = result
    ? result.timedOut
      ? UI.quiz.timeout
      : result.correct
        ? UI.quiz.correct
        : UI.quiz.wrong
    : ''

  return (
    <div ref={rootRef} className="flex flex-col gap-3">
      <Panel hi className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <p className="stmt min-w-0" lang={lang}>
            <RichText lang={lang} text={stem[lang]} noTerms />
          </p>
          {timerSeconds > 0 && !done && (
            <div className="shrink-0">
              <TimerRing seconds={Math.max(0, left)} total={timerSeconds} />
            </div>
          )}
        </div>
        {showAlt && (
          <p lang={alt} className="text-sm text-ink-soft">
            <span className="mono">{alt.toUpperCase()}</span> <RichText lang={alt} text={stem[alt]} noTerms />
          </p>
        )}
        <button
          type="button"
          onClick={() => setShowAlt((v) => !v)}
          aria-pressed={showAlt}
          className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start underline underline-offset-4"
        >
          <Icon icon={Languages} size={14} />
          {showAlt ? UI.quiz.hideAlt(lang) : UI.quiz.seeIn(lang)}
        </button>
      </Panel>

      {item.type === 'true_false' ? (
        <>
          <div className="tf" role="group" aria-label={UI.quiz.tfGroup}>
            {([true, false] as const).map((v) => (
              <Button
                key={String(v)}
                icon={v ? Check : X}
                aria-pressed={pick === v}
                aria-disabled={done}
                onClick={() => {
                  if (done) return
                  setPick(v)
                  if (v) settle(true, false)
                }}
              >
                {v ? UI.quiz.true : UI.quiz.false}
              </Button>
            ))}
          </div>
          {pick === false && !done && (
            <div className="flex flex-col gap-2">
              <label htmlFor={`just-${item.id}`} className="text-sm font-bold">
                {UI.quiz.yourJustification}
              </label>
              <textarea
                id={`just-${item.id}`}
                className="just"
                value={mine}
                lang={lang}
                aria-describedby={`just-help-${item.id}`}
                onChange={(e) => setMine(e.target.value)}
              />
              <span id={`just-help-${item.id}`} className="text-sm text-ink-soft">
                {UI.quiz.justificationHelp}
              </span>
              <Button variant="primary" icon={Check} className="self-start" onClick={() => settle(false, false)}>
                {UI.quiz.validate}
              </Button>
            </div>
          )}
        </>
      ) : (
        <fieldset className="flex flex-col gap-2 border-0 p-0">
          <legend className="mb-2 text-sm text-ink-soft">{UI.quiz.mcqHint}</legend>
          {shown.map((orig) => {
            const opt = item.options[orig]!
            const isGood = item.correct.includes(orig)
            const isPicked = checked.includes(orig)
            const state = !done ? undefined : isGood ? (isPicked ? 'right' : 'missed') : isPicked ? 'wrong' : undefined
            return (
              <label key={orig} className="opt" data-state={state}>
                <input
                  type="checkbox"
                  checked={isPicked}
                  aria-disabled={done}
                  onChange={() => toggle(orig)}
                />
                <span className="min-w-0">
                  <span lang={lang}>
                    <RichText lang={lang} text={opt[lang]} noTerms />
                  </span>
                  {showAlt && (
                    <span lang={alt} className="block text-sm text-ink-soft">
                      <RichText lang={alt} text={opt[alt]} noTerms />
                    </span>
                  )}
                  {state && (
                    <span className="opt-mark">
                      <Icon icon={state === 'wrong' ? X : Check} size={14} />{' '}
                      {state === 'right' ? UI.quiz.optionRight : state === 'wrong' ? UI.quiz.optionWrong : UI.quiz.optionMissed}
                    </span>
                  )}
                </span>
              </label>
            )
          })}
          {!done && (
            <Button
              variant="primary"
              icon={Check}
              className="self-start"
              disabled={checked.length === 0}
              onClick={() => settle(checked, false)}
            >
              {UI.quiz.validate}
            </Button>
          )}
        </fieldset>
      )}

      <div aria-live="polite" className="sr-only">
        {verdict}
      </div>
      {result && (
        <Panel hi>
          <div ref={fbRef} tabIndex={-1} className="fb flex flex-col gap-1 outline-none">
            <div className="flex flex-wrap items-center gap-2">
              <Tag
                tilt="left"
                icon={result.correct ? Check : X}
                style={{ '--course': result.correct ? 'var(--ok)' : 'var(--bad)' } as React.CSSProperties}
              >
                {verdict}
                {item.type === 'true_false' && !result.correct ? ` · ${UI.quiz.answerWas(item.answer)}` : ''}
              </Tag>
              {result.correct && result.xp > 0 && (
                <Tag icon={Zap} style={{ '--course': 'var(--gold)' } as React.CSSProperties}>
                  {UI.quiz.xp(result.xp)}
                </Tag>
              )}
              <Tag>{UI.quiz.levels[item.level]}</Tag>
            </div>
            {item.type === 'true_false' && mine.trim() && pick === false && (
              <blockquote className="mt-2 border-l-2 border-[var(--course)] pl-3 text-sm" lang={lang}>
                <span className="mono dim block">{UI.quiz.yourJustification}</span>
                {mine.trim()}
              </blockquote>
            )}
            <div className="mt-2">
              <span className="mono dim block">
                {item.type === 'true_false' ? UI.quiz.officialJustification : UI.quiz.explanation}
              </span>
              <BothLangs
                fr={item.type === 'true_false' ? item.justification.fr : item.explanation.fr}
                en={item.type === 'true_false' ? item.justification.en : item.explanation.en}
              />
            </div>
            <div className="flex">
              <SourceChip src={item.src} />
            </div>
            {actions && <div className="mt-3 flex flex-wrap gap-3">{actions}</div>}
          </div>
        </Panel>
      )}
    </div>
  )
}
