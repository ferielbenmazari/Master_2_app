import type { Chapter, Course, Flashcard, Term } from '@/content/schema'
import { courseGlossaryCards } from './glossary-cards'

/** Une flashcard avec son contexte (matière, chapitre, glossaire pour les termes et sources). */
export interface DeckCard {
  card: Flashcard
  course: Course
  chapterId: string
  glossary: ReadonlyMap<string, Term>
}

/**
 * Index des cartes par id (si un id est dupliqué, la première occurrence gagne).
 * Les cartes écrites à la main viennent d'abord, puis celles du glossaire (voir glossary-cards.ts).
 * `onlyChapterId` restreint l'index à un chapitre, mais la déduplication des termes se fait sur toute la matière.
 */
export function indexCards(
  entries: { course: Course; chapters: readonly Chapter[] }[],
  onlyChapterId?: string,
): Map<string, DeckCard> {
  const map = new Map<string, DeckCard>()
  const glossaries = new Map<string, ReadonlyMap<string, Term>>()
  for (const { course, chapters } of entries) {
    for (const ch of chapters) {
      const glossary = new Map(ch.glossary.map((t) => [t.id, t]))
      glossaries.set(ch.id, glossary)
      if (onlyChapterId && ch.id !== onlyChapterId) continue
      for (const card of ch.flashcards) {
        if (!map.has(card.id)) map.set(card.id, { card, course, chapterId: ch.id, glossary })
      }
    }
  }
  for (const { course, chapters } of entries) {
    const generated = courseGlossaryCards(chapters)
    for (const ch of chapters) {
      if (onlyChapterId && ch.id !== onlyChapterId) continue
      const glossary = glossaries.get(ch.id) ?? new Map<string, Term>()
      for (const card of generated.get(ch.id) ?? []) {
        if (!map.has(card.id)) map.set(card.id, { card, course, chapterId: ch.id, glossary })
      }
    }
  }
  return map
}
