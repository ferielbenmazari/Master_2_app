import { ArrowRight, Flag, Zap } from 'lucide-react'
import type { CSSProperties } from 'react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import type { Chapter } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import QuizCard from './QuizCard'
import type { SessionAction, SessionState } from './quiz-session'

interface Props {
  chapter: Chapter
  code: string
  state: SessionState
  dispatch: (a: SessionAction) => void
}

/** Une question à la fois : compteur `Q.03 / 10`, combo, carte et bouton « Suivante ». */
export default function QuizSession({ chapter, code, state, dispatch }: Props) {
  const { prefs } = usePrefs()
  const current = state.round[state.index]
  if (!current) return null
  const total = state.round.length
  const last = state.index >= total - 1
  const n = String(state.index + 1).padStart(2, '0')

  return (
    <section aria-label={UI.quiz.title} className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="mono dim">
            {code} · {UI.hub.chapter(chapter.order)}
          </div>
          <div className="display mt-1 text-[22px]" role="status" aria-label={UI.quiz.position(state.index + 1, total)}>
            <span aria-hidden="true">Q.{n}</span>{' '}
            <span className="dim text-sm" aria-hidden="true">
              / {total}
            </span>
          </div>
        </div>
        {state.combo >= 2 && (
          <Tag icon={Zap} style={{ '--course': 'var(--coral)' } as CSSProperties}>
            {UI.quiz.combo(state.combo)}
          </Tag>
        )}
      </div>
      <QuizCard
        key={`${state.roundNo}-${current.item.id}`}
        item={current.item}
        order={current.order}
        lang={prefs.trainLang}
        combo={state.combo}
        timerSeconds={prefs.quizTimer}
        onAnswered={(r) => dispatch({ type: 'answer', id: current.item.id, correct: r.correct })}
        actions={
          <Button
            variant="primary"
            block
            icon={last ? Flag : ArrowRight}
            onClick={() => dispatch({ type: 'next' })}
          >
            {last ? UI.quiz.seeResult : UI.quiz.next}
          </Button>
        }
      />
    </section>
  )
}
