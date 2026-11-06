import { ArrowRight, Flag } from 'lucide-react'
import Button from '@/components/ui/Button'
import type { QuizItem } from '@/content/schema'
import QuizCard from '@/features/quiz/QuizCard'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'

interface Props {
  item: QuizItem
  order: readonly number[]
  combo: number
  last: boolean
  onAnswered: (correct: boolean) => void
  onNext: () => void
}

/** Une question de quiz dans Express (QuizCard enregistre la tentative et joue les effets). */
export default function QuizStep({ item, order, combo, last, onAnswered, onNext }: Props) {
  const { prefs } = usePrefs()
  return (
    <QuizCard
      item={item}
      order={order}
      lang={prefs.trainLang}
      combo={combo}
      timerSeconds={prefs.quizTimer}
      onAnswered={(r) => onAnswered(r.correct)}
      actions={
        <Button variant="primary" block icon={last ? Flag : ArrowRight} onClick={onNext}>
          {last ? UI.quiz.seeResult : UI.express.next}
        </Button>
      }
    />
  )
}
