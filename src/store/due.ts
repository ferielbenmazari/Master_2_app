import { getCourses, loadAllChapters } from '@/content/loader'
import { indexCards } from '@/features/flashcards/deck-cards'
import { getDueCards } from './fsrs'
import { loadPrefs } from './prefs'

/** Ids de toutes les flashcards (écrites + tirées du glossaire), toutes matières confondues. */
export async function allFlashcardIds(): Promise<string[]> {
  const entries = await Promise.all(getCourses().map(async (course) => ({ course, chapters: await loadAllChapters(course.id) })))
  return [...indexCards(entries).keys()]
}

/** Nombre de cartes à revoir aujourd'hui (en retard + nouvelles dans la limite quotidienne). */
export async function getDueCount(now: Date = new Date()): Promise<number> {
  return (await getDueCards(now, await allFlashcardIds(), loadPrefs().newPerDay)).length
}
