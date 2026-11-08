import { Link } from 'react-router'
import { ArrowRight, Flag } from 'lucide-react'
import Button from '@/components/ui/Button'
import { GAME } from '@/i18n/game-ui'
import type { Choice, GuestView } from './engine'
import Podium from './Podium'
import QuestionScreen from './QuestionScreen'
import RevealScreen from './RevealScreen'

interface Props {
  view: GuestView
  selfId: string
  onAnswer: (choice: Choice) => void
  /** Hôte uniquement : passe à la question suivante / au podium. */
  onNext?: () => void
  /** Hôte uniquement : clôt la manche sans attendre tout le monde, avec l'avancement des réponses. */
  host?: { onClose: () => void; answered: number; expected: number }
  onLeave: () => void
}

/** Écrans de jeu communs à l'hôte et aux invités (question, correction, podium). Le salon est géré par l'appelant. */
export default function GameScreens({ view, selfId, onAnswer, onNext, host, onLeave }: Props) {
  const last = view.question ? view.question.index + 1 >= view.question.total : false

  if (view.phase === 'question' && view.question) {
    return (
      <QuestionScreen
        key={view.question.index}
        question={view.question}
        receivedAt={view.receivedAt}
        myChoice={view.myChoice}
        lang={view.lang}
        onAnswer={onAnswer}
        footer={
          host && (
            <div className="flex flex-col gap-2">
              <p role="status" className="mono dim text-center">
                {GAME.answeredCount(host.answered, host.expected)}
              </p>
              <Button block icon={Flag} onClick={host.onClose}>
                {GAME.closeRound}
              </Button>
            </div>
          )
        }
      />
    )
  }
  if (view.phase === 'reveal') {
    return (
      <RevealScreen
        view={view}
        selfId={selfId}
        lang={view.lang}
        footer={
          onNext ? (
            <Button variant="primary" block icon={last ? Flag : ArrowRight} onClick={onNext}>
              {last ? GAME.seePodium : GAME.next}
            </Button>
          ) : (
            <p role="status" className="mono dim text-center">
              {GAME.waitNext}
            </p>
          )
        }
      />
    )
  }
  if (view.phase === 'podium') {
    return (
      <Podium
        ranking={view.ranking}
        selfId={selfId}
        footer={
          <Link to="/jouer" className="btn primary btn-block" onClick={onLeave}>
            {GAME.backToArena}
          </Link>
        }
      />
    )
  }
  return null
}
