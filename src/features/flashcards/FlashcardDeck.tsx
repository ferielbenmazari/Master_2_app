import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ReaderContext } from '@/components/content/ReaderContext'
import SegBar from '@/components/ui/SegBar'
import { UI } from '@/i18n/ui'
import { courseStyle } from '@/lib/course-color'
import { flashKo, flashOk } from '@/lib/celebrate'
import { GRADES, previewIntervals, review, Rating, type Grade } from '@/store/fsrs'
import { usePrefs } from '@/store/PrefsProvider'
import FlashcardCard from './FlashcardCard'
import { requeue } from './deck-queue'
import type { DeckCard } from './deck-cards'

interface Props {
  /** Ids des cartes à travailler, dans l'ordre. */
  ids: readonly string[]
  cards: ReadonlyMap<string, DeckCard>
  /** Horloge injectée (tests). */
  now?: () => Date
  /** Affiché quand la file est vide (session terminée). */
  finished: ReactNode
}

const RATE_COLOR: Record<Grade, string | undefined> = {
  [Rating.Again]: 'var(--red)',
  [Rating.Hard]: 'var(--orange)',
  [Rating.Good]: undefined,
  [Rating.Easy]: 'var(--cyan)',
}
const realNow = () => new Date()

/** Session de flashcards : file d'attente, flip, 4 notes FSRS avec délai, raccourcis 1–4. */
export default function FlashcardDeck({ ids, cards, now = realNow, finished }: Props) {
  const { prefs } = usePrefs()
  const [queue, setQueue] = useState<string[]>(() => ids.filter((id) => cards.has(id)))
  const [total] = useState(queue.length)
  const [done, setDone] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [delays, setDelays] = useState<{ id: string; v: Record<Grade, string> } | null>(null)
  const [error, setError] = useState(false)
  /** Nombre de revues faites : relance l'aperçu des délais même si la même carte revient (dernière carte). */
  const [reviews, setReviews] = useState(0)
  const busy = useRef(false)

  const currentId = queue[0]
  const current = currentId ? cards.get(currentId) : undefined

  useEffect(() => {
    if (!currentId) return
    let live = true
    previewIntervals(currentId, now()).then((v) => live && setDelays({ id: currentId, v }))
    return () => {
      live = false
    }
  }, [currentId, now, reviews])

  const rate = useCallback(
    async (grade: Grade) => {
      if (!currentId || !flipped || busy.current) return
      busy.current = true
      try {
        const at = now()
        const next = await review(currentId, grade, at)
        if (grade === Rating.Again) flashKo()
        else if (grade >= Rating.Good) flashOk()
        const rest = queue.slice(1)
        const q = requeue(rest, currentId, next.state, new Date(next.due).getTime(), at.getTime())
        if (q.length === rest.length) setDone((d) => d + 1)
        setQueue(q)
        setDelays(null)
        setReviews((r) => r + 1)
        setFlipped(false)
        setError(false)
      } catch {
        setError(true)
      } finally {
        busy.current = false
      }
    },
    [currentId, flipped, now, queue],
  )

  // Espace/Entrée (focus hors boutons) retourne ; 1–4 notent, seulement une fois la carte retournée.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const t = e.target instanceof Element ? e.target : null
      const interactive = t?.closest('button, a, input, textarea, select, [role="dialog"]')
      if (!flipped && (e.key === ' ' || e.key === 'Enter') && !interactive) {
        e.preventDefault()
        setFlipped(true)
      } else if (flipped && /^[1-4]$/.test(e.key) && !t?.closest('input, textarea, select, [role="dialog"]')) {
        e.preventDefault()
        void rate(Number(e.key) as Grade)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [flipped, rate])

  const ctx = useMemo(
    () =>
      current
        ? { courseId: current.course.id, chapterId: current.chapterId, glossary: current.glossary, quiz: new Map() }
        : undefined,
    [current],
  )

  if (!current || !ctx) return <>{finished}</>
  const code = current.course.code.replace(/^S\d+-/, '')
  const n = Math.min(done + 1, total)
  const shown = delays && delays.id === currentId ? delays.v : undefined

  return (
    <section aria-label={UI.flashcards.title} className="mx-auto flex max-w-xl flex-col" style={courseStyle(current.course.color) as CSSProperties}>
      <div className="flex items-center justify-between">
        <span className="mono dim">
          {code} · {UI.flashcards.deck}
        </span>
        <span className="mono hl" role="status" aria-label={UI.flashcards.position(n, total)}>
          <span aria-hidden="true">
            {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </span>
      </div>
      <SegBar className="mt-2.5" done={done} total={total} label={UI.flashcards.title} />
      <ReaderContext.Provider value={ctx}>
        <FlashcardCard key={current.card.id} card={current.card} lang={prefs.trainLang} flipped={flipped} onFlip={() => setFlipped(true)} />
      </ReaderContext.Provider>
      <div className="sr-only" role="status" aria-live="polite">
        {flipped ? UI.flashcards.flipped : ''}
      </div>
      <div className="rate" role="group" aria-label={UI.flashcards.rateGroup}>
        {GRADES.map((g) => (
          <button
            key={g}
            type="button"
            className={g === Rating.Good ? 'good' : undefined}
            style={{ '--c': RATE_COLOR[g] } as CSSProperties}
            disabled={!flipped}
            aria-label={shown ? UI.flashcards.rateLabel(UI.flashcards.ratings[g], shown[g], g) : UI.flashcards.ratings[g]}
            onClick={() => void rate(g)}
          >
            {UI.flashcards.ratings[g]}
            <small aria-hidden="true">{shown?.[g] ?? '…'}</small>
          </button>
        ))}
      </div>
      {error && (
        <p role="alert" className="mt-3 text-sm text-[var(--bad)]">
          {UI.flashcards.saveError}
        </p>
      )}
    </section>
  )
}
