import { Timer, X, Zap } from 'lucide-react'
import { useEffect, useMemo, useReducer, useState, type CSSProperties } from 'react'
import { Link } from 'react-router'
import { ReaderContext } from '@/components/content/ReaderContext'
import Icon from '@/components/ui/Icon'
import SegBar from '@/components/ui/SegBar'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'
import { comboBurst, flashKo, flashOk } from '@/lib/celebrate'
import { courseStyle } from '@/lib/course-color'
import { Rating, type Grade } from '@/store/fsrs'
import { bumpActivity } from '@/store/progress'
import { conceptsSeen, type ExpressStep } from './buildSession'
import CardStep from './CardStep'
import ExpressRecap from './ExpressRecap'
import { expressReducer, isFinished, scoreCard, startExpress } from './express-state'
import KeyPointStep from './KeyPointStep'
import QuizStep from './QuizStep'

/** Budget de temps affiché : indicatif, la session n'est jamais coupée. */
export const EXPRESS_SECONDS = 5 * 60

interface Props {
  steps: readonly ExpressStep[]
  back: { to: string; label: string }
  onAgain: () => void
  /** Horloge injectée (tests). */
  now?: () => Date
}

const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

/** Session plein écran : barre de segments, minuteur discret, étapes enchaînées, combo/XP, récap final. */
export default function ExpressPlay({ steps, back, onAgain, now }: Props) {
  const [state, dispatch] = useReducer(expressReducer, steps.length, startExpress)
  const [elapsed, setElapsed] = useState(0)
  const finished = isFinished(state)
  const step = steps[state.index]

  useEffect(() => {
    if (finished) return
    const id = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(id)
  }, [finished])

  const ctx = useMemo(
    () =>
      step
        ? {
            courseId: step.course.id,
            chapterId: step.chapterId,
            glossary: step.glossary,
            quiz: new Map(step.kind === 'quiz' ? [[step.item.id, step.item]] : []),
          }
        : undefined,
    [step],
  )

  if (finished || !step || !ctx) {
    return <ExpressRecap xp={state.xp} maxCombo={state.maxCombo} concepts={conceptsSeen(steps)} back={back} onAgain={onAgain} />
  }

  function rated(grade: Grade) {
    const r = scoreCard(state.combo, grade)
    if (grade === Rating.Again) flashKo()
    else if (grade >= Rating.Good) {
      flashOk()
      if (r.combo >= 2) comboBurst(r.combo, r.xp)
    }
    dispatch({ type: 'card', grade })
    dispatch({ type: 'next' })
  }

  const remaining = Math.max(0, EXPRESS_SECONDS - elapsed)
  const last = state.index >= steps.length - 1

  return (
    <section aria-label={UI.express.title} className="flex flex-1 flex-col gap-4" style={courseStyle(step.course.color) as CSSProperties}>
      <div className="flex items-center gap-3">
        <Link to={back.to} aria-label={UI.express.close} className="mono dim inline-flex min-h-11 min-w-11 items-center justify-center">
          <Icon icon={X} />
        </Link>
        <SegBar className="flex-1" done={state.index} total={steps.length} label={UI.express.step(state.index + 1, steps.length)} />
        <span
          className="mono dim inline-flex min-h-11 items-center gap-1.5 tabular-nums"
          role="timer"
          aria-label={UI.express.timer(mmss(remaining))}
          data-over={remaining === 0 || undefined}
        >
          <Icon icon={Timer} size={14} />
          <span aria-hidden="true">{mmss(remaining)}</span>
        </span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="mono dim">
          {step.course.code.replace(/^S\d+-/, '')} · {UI.express.kinds[step.kind]}
        </span>
        <div className="flex items-center gap-2">
          {state.combo >= 2 && (
            <Tag icon={Zap} style={{ '--course': 'var(--coral)' } as CSSProperties}>
              {UI.quiz.combo(state.combo)}
            </Tag>
          )}
          <span className="mono hl" aria-label={UI.quiz.xp(state.xp)}>
            {state.xp} {UI.home.xp}
          </span>
        </div>
      </div>
      <ReaderContext.Provider value={ctx}>
        {step.kind === 'keypoint' && (
          <KeyPointStep
            key={step.id}
            point={step.point}
            onDone={() => {
              void bumpActivity()
              dispatch({ type: 'keypoint' })
              dispatch({ type: 'next' })
            }}
          />
        )}
        {step.kind === 'card' && <CardStep key={step.id} card={step.deck.card} now={now} onRated={rated} />}
        {step.kind === 'quiz' && (
          <QuizStep
            key={step.id}
            item={step.item}
            order={step.order}
            combo={state.combo}
            last={last}
            onAnswered={(correct) => dispatch({ type: 'quiz', correct })}
            onNext={() => dispatch({ type: 'next' })}
          />
        )}
      </ReaderContext.Provider>
    </section>
  )
}
