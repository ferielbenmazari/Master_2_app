import { Check, FlaskConical } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { Link, useOutletContext } from 'react-router'
import EmptyState from '@/components/ui/EmptyState'
import Panel from '@/components/ui/Panel'
import SegBar from '@/components/ui/SegBar'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'
import { pickLang } from '@/lib/bilingual'
import { usePrefs } from '@/store/PrefsProvider'
import { getAttempts } from '@/store/progress'
import { sortByDifficulty } from './exercise-logic'
import type { ExercisesOutlet } from './ExercisesLayout'

/** `…/exercices` : liste triée par difficulté. */
export default function ExerciseList() {
  const { chapter, base } = useOutletContext<ExercisesOutlet>()
  const { prefs } = usePrefs()
  const [done, setDone] = useState<ReadonlySet<string>>(new Set())

  useEffect(() => {
    let live = true
    void getAttempts({ kind: 'exercise' }).then((a) => live && setDone(new Set(a.map((x) => x.itemId))))
    return () => {
      live = false
    }
  }, [])

  const list = sortByDifficulty(chapter.exercises)
  if (list.length === 0) return <EmptyState icon={FlaskConical} title={UI.exercises.title} text={UI.exercises.empty} />

  return (
    <section aria-labelledby="ex-title" className="flex flex-col gap-4">
      <h1 id="ex-title" className="display text-2xl">
        {UI.exercises.title}
      </h1>
      <ul aria-label={UI.exercises.list} className="stagger flex flex-col gap-3">
        {list.map((e, i) => {
          const title = pickLang(e.title, prefs.langMode)
          return (
            <li key={e.id} style={{ '--i': i } as CSSProperties}>
              <Link to={`${base}/exercices/${e.id}`} className="block">
                <Panel hi drop className="flex min-h-[72px] flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <SegBar
                      done={e.difficulty}
                      total={3}
                      label={UI.exercises.difficulty(e.difficulty)}
                      className="w-20"
                    />
                    <span className="mono dim">{UI.exercises.difficultyLabels[e.difficulty]}</span>
                    {e.examStyle && <Tag tilt="left">{UI.exercises.partial}</Tag>}
                    {done.has(e.id) && <Tag icon={Check}>{UI.exercises.done}</Tag>}
                  </div>
                  <h2 className="display text-[15px] leading-tight">{title.main}</h2>
                  {title.alt && <p className="text-sm text-ink-soft">{title.alt}</p>}
                </Panel>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
