import { LEARN_AHEAD_MS } from '@/store/fsrs'

const LEARNING = [1, 3] // ts-fsrs State.Learning, State.Relearning

/**
 * File d'une session après la revue de la carte `id` (déjà retirée de `rest`).
 * Une carte restée en (ré)apprentissage et due bientôt revient dans la session, d'autant plus tôt que son
 * délai est court : « Encore » (1 min) repasse après quelques cartes, « Bien » (10 min) vers la fin.
 * Une carte « sortie » (Facile, révision planifiée à plusieurs jours) ne revient pas.
 */
export function requeue(rest: readonly string[], id: string, state: number, dueMs: number, nowMs: number): string[] {
  const delay = dueMs - nowMs
  if (!LEARNING.includes(state) || delay > LEARN_AHEAD_MS) return [...rest]
  const at = Math.min(rest.length, Math.ceil(Math.max(0, delay) / 30_000))
  return [...rest.slice(0, at), id, ...rest.slice(at)]
}
