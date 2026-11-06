import { useCallback, useEffect, useRef, useState } from 'react'
import FlashcardCard from '@/features/flashcards/FlashcardCard'
import RateBar from '@/features/flashcards/RateBar'
import type { Flashcard } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { previewIntervals, review, type Grade } from '@/store/fsrs'
import { usePrefs } from '@/store/PrefsProvider'

interface Props {
  card: Flashcard
  /** Horloge injectée (tests). */
  now?: () => Date
  /** Appelée une fois la note enregistrée par FSRS. */
  onRated: (grade: Grade) => void
}

const realNow = () => new Date()

/** Une flashcard dans Express : flip (tap, Espace, Entrée), 4 notes (boutons ou touches 1–4), revue FSRS enregistrée. */
export default function CardStep({ card, now = realNow, onRated }: Props) {
  const { prefs } = usePrefs()
  const [flipped, setFlipped] = useState(false)
  const [delays, setDelays] = useState<Awaited<ReturnType<typeof previewIntervals>> | undefined>()
  const [error, setError] = useState(false)
  const busy = useRef(false)

  useEffect(() => {
    let live = true
    previewIntervals(card.id, now()).then((v) => live && setDelays(v))
    return () => {
      live = false
    }
  }, [card.id, now])

  const rate = useCallback(
    async (grade: Grade) => {
      if (!flipped || busy.current) return
      busy.current = true
      try {
        await review(card.id, grade, now())
        setError(false)
        onRated(grade)
      } catch {
        setError(true)
      } finally {
        busy.current = false
      }
    },
    [card.id, flipped, now, onRated],
  )

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const t = e.target instanceof Element ? e.target : null
      if (!flipped && (e.key === ' ' || e.key === 'Enter') && !t?.closest('button, a, input, textarea, select, [role="dialog"]')) {
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

  return (
    <div className="flex flex-col">
      <FlashcardCard card={card} lang={prefs.trainLang} flipped={flipped} onFlip={() => setFlipped(true)} />
      <div className="sr-only" role="status" aria-live="polite">
        {flipped ? UI.flashcards.flipped : ''}
      </div>
      <RateBar delays={delays} disabled={!flipped} onRate={(g) => void rate(g)} />
      {error && (
        <p role="alert" className="mt-3 text-sm text-[var(--bad)]">
          {UI.flashcards.saveError}
        </p>
      )}
    </div>
  )
}
