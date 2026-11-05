import { getCourses, loadAllChapters } from '@/content/loader'
import { getDueCards } from './fsrs'
import { loadPrefs } from './prefs'

/** Ids de toutes les flashcards, toutes matières confondues. */
export async function allFlashcardIds(): Promise<string[]> {
  const chapters = (await Promise.all(getCourses().map((c) => loadAllChapters(c.id)))).flat()
  return chapters.flatMap((ch) => ch.flashcards.map((f) => f.id))
}

/** Nombre de cartes à revoir aujourd'hui (en retard + nouvelles dans la limite quotidienne). */
export async function getDueCount(now: Date = new Date()): Promise<number> {
  return (await getDueCards(now, await allFlashcardIds(), loadPrefs().newPerDay)).length
}
