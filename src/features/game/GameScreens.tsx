import { Link } from 'react-router'
import { ArrowRight, Flag } from 'lucide-react'
import Button from '@/components/ui/Button'
import { GAME } from '@/i18n/game-ui'
import { usePrefs } from '@/store/PrefsProvider'
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
  onLeave: () => void
}

/** Écrans de jeu communs à l'hôte et aux invités (question, correction, podium). Le salon est géré par l'appelant. */
export default function GameScreens({ view, selfId, onAnswer, onNext, onLeave }: Props) {
  const { prefs } = usePrefs()
  const last = view.question ? view.question.index + 1 >= view.question.total : false

  if (view.phase === 'question' && view.question) {
    return (
      <QuestionScreen
        key={view.question.index}
        question={view.question}
        receivedAt={view.receivedAt}
        myChoice={view.myChoice}
        lang={prefs.trainLang}
        onAnswer={onAnswer}
      />
    )
  }
  if (view.phase === 'reveal') {
    return (
      <RevealScreen
        view={view}
        selfId={selfId}
        lang={prefs.trainLang}
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
