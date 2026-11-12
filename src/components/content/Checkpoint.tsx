import { Link } from 'react-router'
import Panel from '@/components/ui/Panel'
import QuizCard from '@/features/quiz/QuizCard'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import { useReader } from './ReaderContext'

/** Bloc `checkpoint` du lecteur : la question du quiz jouable sur place (cible `#cp-<quizId>`). */
export default function Checkpoint({ quizId, quizHref }: { quizId: string; quizHref: string }) {
  const { quiz, objectives } = useReader()
  const { prefs } = usePrefs()
  const item = quiz.get(quizId)
  // dans le lecteur, la langue de lecture prime ; en FR+EN on suit la langue d'entraînement
  const lang = prefs.langMode === 'both' ? prefs.trainLang : prefs.langMode
  return (
    <Panel hi brackets id={`cp-${quizId}`} className="flex scroll-mt-24 flex-col gap-3">
      <h3 className="display text-base">{UI.reader.checkpoint}</h3>
      {item ? (
        <QuizCard item={item} lang={lang} objectives={objectives} />
      ) : (
        <p className="text-sm text-ink-soft">{UI.reader.checkpointText}</p>
      )}
      <Link to={quizHref} className="btn self-start">
        {item ? UI.quiz.toQuiz : UI.reader.checkpointGo}
      </Link>
    </Panel>
  )
}
