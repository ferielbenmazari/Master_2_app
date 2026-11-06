import { Check, Eye, Lightbulb } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useOutletContext, useParams } from 'react-router'
import Bilingual from '@/components/content/Bilingual'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import SegBar from '@/components/ui/SegBar'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'
import { layoutFor } from '@/lib/reader'
import { useMediaQuery } from '@/lib/use-media-query'
import { loadDraft, saveDraft } from '@/store/drafts'
import { usePrefs } from '@/store/PrefsProvider'
import { recordAttempt } from '@/store/progress'
import { RATINGS, ratingOutcome, sortByDifficulty, type Rating } from './exercise-logic'
import type { ExercisesOutlet } from './ExercisesLayout'

/** `…/exercices/:exerciseId` : énoncé, brouillon, indices, corrigé, auto-évaluation. */
export default function ExerciseView() {
  const { exerciseId = '' } = useParams()
  const { chapter, base } = useOutletContext<ExercisesOutlet>()
  const exercise = chapter.exercises.find((e) => e.id === exerciseId)
  if (!exercise) return <Navigate to={`${base}/exercices`} replace />
  // `key` : état remis à zéro quand on passe à l'exercice suivant
  return <Exercise key={exercise.id} exerciseId={exercise.id} />
}

function Exercise({ exerciseId }: { exerciseId: string }) {
  const { chapter, base } = useOutletContext<ExercisesOutlet>()
  const exercise = chapter.exercises.find((e) => e.id === exerciseId)!
  const { prefs } = usePrefs()
  const wide = useMediaQuery('(min-width: 1024px)')
  const layout = layoutFor(prefs.langMode, wide)
  const bothLayout = wide ? 'columns' : 'stack'

  const [draft, setDraft] = useState(() => loadDraft(exercise.id))
  const [hints, setHints] = useState(0)
  const [solution, setSolution] = useState(false)
  const [rated, setRated] = useState<Rating | null>(null)

  const sorted = sortByDifficulty(chapter.exercises)
  const next = sorted[sorted.findIndex((e) => e.id === exercise.id) + 1]
  const draftLang = prefs.langMode === 'en' ? 'en' : prefs.langMode === 'fr' ? 'fr' : prefs.trainLang

  function rate(r: Rating) {
    if (rated) return
    setRated(r)
    void recordAttempt({ itemId: exercise.id, kind: 'exercise', ...ratingOutcome(r) })
  }

  return (
    <article aria-labelledby="ex-title" className="flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <SegBar done={exercise.difficulty} total={3} label={UI.exercises.difficulty(exercise.difficulty)} className="w-20" />
          <span className="mono dim">{UI.exercises.difficultyLabels[exercise.difficulty]}</span>
          {exercise.examStyle && <Tag tilt="left">{UI.exercises.partial}</Tag>}
          <Tag>{UI.quiz.levels[exercise.level]}</Tag>
        </div>
        <h1 id="ex-title" className="display text-xl leading-tight">
          <Bilingual
            layout={layout === 'columns' ? 'stack' : layout}
            render={(lang, alt) => (alt ? <span className="text-ink-soft">{exercise.title[lang]}</span> : exercise.title[lang])}
          />
        </h1>
      </header>

      <Panel hi className="flex flex-col gap-2">
        <h2 className="mono dim">{UI.exercises.statement}</h2>
        <Bilingual layout={layout} render={(lang) => <RichText block lang={lang} text={exercise.statement[lang]} />} />
      </Panel>

      <div className="flex flex-col gap-2">
        <label htmlFor="ex-draft" className="text-sm font-bold">
          {UI.exercises.draft}
        </label>
        <textarea
          id="ex-draft"
          className="ex-draft"
          value={draft}
          lang={draftLang}
          aria-describedby="ex-draft-help"
          onChange={(e) => {
            setDraft(e.target.value)
            saveDraft(exercise.id, e.target.value)
          }}
        />
        <span id="ex-draft-help" className="text-sm text-ink-soft">
          {UI.exercises.draftHelp}
        </span>
      </div>

      {hints > 0 && (
        <ol aria-label={UI.exercises.hint} className="flex flex-col gap-2">
          {exercise.hints.slice(0, hints).map((h, i) => (
            <li key={i}>
              <Panel className="flex flex-col gap-1">
                <span className="mono hl">{UI.exercises.hintN(i + 1, exercise.hints.length)}</span>
                <Bilingual layout={layout} render={(lang) => <RichText block lang={lang} text={h[lang]} />} />
              </Panel>
            </li>
          ))}
        </ol>
      )}

      {!solution && (
        <div className="flex flex-wrap gap-3">
          {hints < exercise.hints.length && (
            <Button icon={Lightbulb} onClick={() => setHints((n) => n + 1)}>
              {UI.exercises.hint}
              {hints > 0 ? ` (${hints}/${exercise.hints.length})` : ''}
            </Button>
          )}
          <Button variant="primary" icon={Eye} onClick={() => setSolution(true)}>
            {UI.exercises.showSolution}
          </Button>
        </div>
      )}

      {solution && (
        <Panel hi brackets className="flex flex-col gap-3">
          <h2 className="display text-lg">{UI.exercises.solution}</h2>
          <Bilingual
            layout={bothLayout}
            render={(lang, alt) => (
              <div className={alt ? 'text-ink-soft' : undefined}>
                <RichText block lang={lang} text={exercise.solution[lang]} />
              </div>
            )}
          />
          <div className="flex">
            <SourceChip src={exercise.src} />
          </div>
        </Panel>
      )}

      {solution && (
        <section aria-labelledby="ex-eval" className="flex flex-col gap-3">
          <h2 id="ex-eval" className="display text-lg">
            {UI.exercises.selfEval}
          </h2>
          <p className="text-sm text-ink-soft">{UI.exercises.selfEvalHelp}</p>
          <div className="flex flex-wrap gap-3" role="group" aria-label={UI.exercises.selfEval}>
            {RATINGS.map((r) => (
              <Button
                key={r}
                variant={r === 'success' ? 'primary' : 'secondary'}
                aria-pressed={rated === r}
                aria-disabled={rated !== null}
                icon={rated === r ? Check : undefined}
                onClick={() => rate(r)}
              >
                {UI.exercises.rate[r]}
              </Button>
            ))}
          </div>
          <div aria-live="polite">
            {rated && (
              <>
                <p className="mb-3 text-sm">{UI.exercises.saved}</p>
                <div className="flex flex-wrap gap-3">
                  {next && (
                    <Link to={`${base}/exercices/${next.id}`} className="btn primary">
                      {UI.exercises.next}
                    </Link>
                  )}
                  <Link to={`${base}/exercices`} className="btn">
                    {UI.exercises.backToList}
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </article>
  )
}
