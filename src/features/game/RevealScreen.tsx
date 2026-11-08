import { Check, Minus, X } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import RichText from '@/components/content/RichText'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { GAME } from '@/i18n/game-ui'
import { UI } from '@/i18n/ui'
import { BothLangs } from '@/features/quiz/QuizCard'
import type { GuestView } from './engine'
import Ranking from './Ranking'

interface Props {
  view: GuestView
  selfId: string
  lang: 'fr' | 'en'
  /** Boutons de l'hôte (« Question suivante »), ou message d'attente pour les invités. */
  footer: ReactNode
}

/** Correction : bonne réponse, justification bilingue du cours, puis classement animé. */
export default function RevealScreen({ view, selfId, lang, footer }: Props) {
  const { question, reveal, ranking } = view
  if (!question || !reveal) return null
  const mine = reveal.results.find((r) => r.id === selfId)
  const tone = mine?.correct ? 'var(--ok)' : mine?.answered ? 'var(--bad)' : 'var(--ink-dim)'
  const verdict = mine?.correct
    ? GAME.verdictRight
    : mine?.answered
      ? GAME.verdictWrong
      : GAME.verdictNone

  return (
    <section aria-label={GAME.rightAnswer} className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2" aria-live="polite">
        <Tag
          tilt="left"
          icon={mine?.correct ? Check : mine?.answered ? X : Minus}
          style={{ '--course': tone } as CSSProperties}
        >
          {verdict}
        </Tag>
        {mine && mine.gain > 0 && (
          <Tag style={{ '--course': 'var(--gold)' } as CSSProperties}>{GAME.gain(mine.gain)}</Tag>
        )}
        <span className="mono dim">{GAME.question(question.index + 1, question.total)}</span>
      </div>

      <Panel hi className="flex flex-col gap-2">
        <p className="stmt" lang={lang}>
          <RichText lang={lang} text={question.text[lang]} noTerms />
        </p>
        <div>
          <span className="mono dim block">{GAME.rightAnswer}</span>
          {typeof reveal.correct === 'boolean' ? (
            <strong data-testid="right-answer">
              {reveal.correct ? UI.quiz.true : UI.quiz.false}
            </strong>
          ) : (
            <ul className="list-disc pl-5" data-testid="right-answer">
              {reveal.correct.map((i) => (
                <li key={i} lang={lang}>
                  <RichText lang={lang} text={question.options[i]?.[lang] ?? ''} noTerms />
                </li>
              ))}
            </ul>
          )}
        </div>
        {view.feedback && (
          <div className="mt-1">
            <span className="mono dim block">{GAME.explanation}</span>
            <BothLangs fr={reveal.explanation.fr} en={reveal.explanation.en} />
          </div>
        )}
      </Panel>

      <div>
        <h2 className="mono dim mb-2">{GAME.ranking}</h2>
        <Ranking ranking={ranking} selfId={selfId} showGain />
      </div>
      <div className="flex flex-col gap-3">{footer}</div>
    </section>
  )
}
