import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { PartyPopper } from 'lucide-react'
import EmptyState from '@/components/ui/EmptyState'
import { getCourse, getCourses, loadAllChapters } from '@/content/loader'
import { UI } from '@/i18n/ui'
import { getDueCards } from '@/store/fsrs'
import { usePrefs } from '@/store/PrefsProvider'
import { indexCards, type DeckCard } from './deck-cards'
import FlashcardDeck from './FlashcardDeck'

/** `all` : toutes les matières (/reviser) ; sinon un chapitre. */
export type SessionScope = 'all' | { courseId: string; chapterId: string }

interface Loaded {
  key: string
  ids: string[]
  cards: Map<string, DeckCard>
}

async function load(scope: SessionScope, newPerDay: number, now: Date): Promise<Omit<Loaded, 'key'>> {
  const entries =
    scope === 'all'
      ? await Promise.all(getCourses().map(async (course) => ({ course, chapters: await loadAllChapters(course.id) })))
      : await (async () => {
          // toute la matière : un terme déjà défini dans un chapitre précédent n'a pas de carte ici
          const course = getCourse(scope.courseId)
          return course ? [{ course, chapters: await loadAllChapters(course.id) }] : []
        })()
  const cards = indexCards(entries, scope === 'all' ? undefined : scope.chapterId)
  return { cards, ids: await getDueCards(now, [...cards.keys()], newPerDay) }
}

/** Charge les cartes à travailler (dues + nouvelles dans la limite du jour) et lance la session. */
export default function FlashcardSession({ scope, now }: { scope: SessionScope; now?: () => Date }) {
  const { prefs } = usePrefs()
  const key = scope === 'all' ? 'all' : scope.chapterId
  const [loaded, setLoaded] = useState<Loaded | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let live = true
    load(scope, prefs.newPerDay, now?.() ?? new Date())
      .then((r) => live && setLoaded({ key, ...r }))
      .catch(() => live && setFailed(true))
    return () => {
      live = false
    }
    // La session est figée au chargement : changer `newPerDay` en cours de route ne doit pas la rejouer.
  }, [key])

  if (failed) return <p role="alert">{UI.flashcards.saveError}</p>
  if (!loaded || loaded.key !== key)
    return (
      <p className="mono dim" role="status">
        {UI.review.loading}
      </p>
    )

  const back = scope === 'all' ? '/' : `/matiere/${scope.courseId}/chapitre/${scope.chapterId}`
  const finished = (
    <EmptyState
      icon={PartyPopper}
      title={UI.review.doneTitle}
      text={scope === 'all' ? UI.review.doneText : UI.review.doneChapterText}
    >
      <Link to={back} className="btn primary">
        {scope === 'all' ? UI.review.doneHome : UI.review.doneChapter}
      </Link>
    </EmptyState>
  )
  return <FlashcardDeck ids={loaded.ids} cards={loaded.cards} now={now} finished={finished} />
}
