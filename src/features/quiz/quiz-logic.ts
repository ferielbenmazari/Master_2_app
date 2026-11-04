import type { QuizItem } from '@/content/schema'
import { hashSeed, shuffle } from '@/lib/shuffle'

export const XP_CORRECT = 10
export const XP_COMBO = 5

export type QuizLevel = QuizItem['level']

export const LEVEL_LABELS: Record<QuizLevel, string> = {
  remember: 'Mémoire',
  understand: 'Compréhension',
  apply: 'Application',
  analyze: 'Analyse',
}

/** Réponse de l'élève : un booléen (vrai/faux) ou les indices ORIGINAUX cochés (QCM). */
export type Answer = boolean | readonly number[]

/** Item prêt à jouer : pour un QCM, `order[k]` = indice original de l'option affichée en k-ième position. */
export interface PreparedItem {
  item: QuizItem
  order: readonly number[]
}

export function prepareItem(item: QuizItem, seed: number): PreparedItem {
  if (item.type === 'true_false') return { item, order: [] }
  const idx = item.options.map((_, i) => i)
  return { item, order: shuffle(idx, seed ^ hashSeed(item.id)) }
}

/** Mélange stable (par graine) des items, et des options des QCM, sans perdre la correspondance avec `correct`. */
export function prepareQuiz(items: readonly QuizItem[], seed: number): PreparedItem[] {
  return shuffle(items, seed).map((it) => prepareItem(it, seed))
}

/** Correction exacte : pour un QCM, l'ensemble coché doit être identique à `correct` (pas de crédit partiel). */
export function isCorrect(item: QuizItem, answer: Answer): boolean {
  if (item.type === 'true_false') return typeof answer === 'boolean' && answer === item.answer
  if (typeof answer === 'boolean') return false
  const chosen = new Set(answer)
  const good = new Set(item.correct)
  return chosen.size === good.size && [...good].every((i) => chosen.has(i))
}

/** Combo après la réponse et XP gagnée : +10 par bonne réponse, +5 de plus dès le combo x2 ; 0 et combo remis à 0 sur erreur. */
export function scoreAnswer(combo: number, correct: boolean): { combo: number; xp: number } {
  if (!correct) return { combo: 0, xp: 0 }
  const next = combo + 1
  return { combo: next, xp: XP_CORRECT + (next >= 2 ? XP_COMBO : 0) }
}
