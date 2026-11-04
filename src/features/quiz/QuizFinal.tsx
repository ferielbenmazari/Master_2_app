import { RotateCcw, Zap } from 'lucide-react'
import { Link } from 'react-router'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import type { Chapter } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import { hasCheckpoint, stemOf } from './quiz-view'
import { mistakes, score, type SessionState } from './quiz-session'

interface Props {
  chapter: Chapter
  base: string
  state: SessionState
  onRetry: () => void
  onAgain: () => void
}

/** Écran final : score, XP, erreurs avec renvoi au cours, « Refaire mes erreurs ». */
export default function QuizFinal({ chapter, base, state, onRetry, onAgain }: Props) {
  const { prefs } = usePrefs()
  const { correct, total } = score(state)
  const wrong = mistakes(state)

  return (
    <section aria-labelledby="quiz-final" className="flex flex-col gap-4">
      <Panel hi brackets className="flex flex-col items-start gap-3">
        <h1 id="quiz-final" className="display text-xl">
          {UI.quiz.finalTitle}
        </h1>
        <p className="display text-5xl" aria-label={UI.quiz.scoreLabel(correct, total)}>
          <span aria-hidden="true">{UI.quiz.score(correct, total)}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {state.xp > 0 && <Tag icon={Zap}>{UI.quiz.xp(state.xp)}</Tag>}
        </div>
        {wrong.length === 0 && <p>{UI.quiz.perfect}</p>}
        <div className="flex flex-wrap gap-3">
          {wrong.length > 0 && (
            <Button variant="primary" icon={RotateCcw} onClick={onRetry}>
              {UI.quiz.redo}
            </Button>
          )}
          <Button onClick={onAgain}>{UI.quiz.again}</Button>
          <Link to={base} className="btn">
            {UI.quiz.backToChapter}
          </Link>
        </div>
      </Panel>

      {wrong.length > 0 && (
        <section aria-labelledby="quiz-mistakes" className="flex flex-col gap-3">
          <h2 id="quiz-mistakes" className="display text-lg">
            {UI.quiz.mistakes}
          </h2>
          <ul className="flex flex-col gap-3">
            {wrong.map(({ item }) => (
              <li key={item.id}>
                <Panel className="flex flex-col gap-1">
                  <p lang={prefs.trainLang}>
                    <RichText lang={prefs.trainLang} text={stemOf(item, prefs.trainLang)} noTerms />
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {hasCheckpoint(chapter, item.id) && (
                      <Link to={`${base}/lire?q=${item.id}`} className="mono underline underline-offset-4 min-h-11 inline-flex items-center">
                        {UI.quiz.reread}
                      </Link>
                    )}
                    <SourceChip src={item.src} />
                  </div>
                </Panel>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}
