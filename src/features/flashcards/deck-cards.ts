import type { Chapter, Course, Flashcard, Term } from '@/content/schema'

/** Une flashcard avec son contexte (matière, chapitre, glossaire pour les termes et sources). */
export interface DeckCard {
  card: Flashcard
  course: Course
  chapterId: string
  glossary: ReadonlyMap<string, Term>
}

/** Index des cartes par id (si un id est dupliqué, la première occurrence gagne). */
export function indexCards(entries: { course: Course; chapters: readonly Chapter[] }[]): Map<string, DeckCard> {
  const map = new Map<string, DeckCard>()
  for (const { course, chapters } of entries) {
    for (const ch of chapters) {
      const glossary = new Map(ch.glossary.map((t) => [t.id, t]))
      for (const card of ch.flashcards) {
        if (!map.has(card.id)) map.set(card.id, { card, course, chapterId: ch.id, glossary })
      }
    }
  }
  return map
}
