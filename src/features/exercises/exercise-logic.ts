import type { Exercise } from '@/content/schema'

export type Rating = 'missed' | 'medium' | 'success'
export const RATINGS: readonly Rating[] = ['missed', 'medium', 'success']

/** Exercices triés par difficulté croissante (ordre du contenu conservé à difficulté égale). */
export function sortByDifficulty(list: readonly Exercise[]): Exercise[] {
  return list
    .map((e, i) => ({ e, i }))
    .sort((a, b) => a.e.difficulty - b.e.difficulty || a.i - b.i)
    .map((x) => x.e)
}

/** Auto-évaluation → score (0, 0,5, 1) et réussite (seul « Réussi » compte comme correct). */
export function ratingOutcome(r: Rating): { correct: boolean; score: number } {
  return r === 'success' ? { correct: true, score: 1 } : r === 'medium' ? { correct: false, score: 0.5 } : { correct: false, score: 0 }
}
