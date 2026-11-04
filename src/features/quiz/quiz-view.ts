import type { Chapter, QuizItem } from '@/content/schema'

/** Énoncé d'un item dans la langue demandée. */
export function stemOf(item: QuizItem, lang: 'fr' | 'en'): string {
  return item.type === 'true_false' ? item.statement[lang] : item.question[lang]
}

/** Vrai si le cours narratif contient un bloc `checkpoint` qui renvoie à cet item (cible du lien « revoir le passage »). */
export function hasCheckpoint(chapter: Chapter, quizId: string): boolean {
  return chapter.story.some((b) => b.type === 'checkpoint' && b.quizId === quizId)
}
