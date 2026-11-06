/** État d'une session Express : étape courante, combo, XP (local à la session, pas de magasin d'XP avant T12+). */
import type { Grade } from '@/store/fsrs'
import { Rating } from '@/store/fsrs'
import { scoreAnswer, XP_COMBO, XP_CORRECT } from '@/features/quiz/quiz-logic'

/** XP d'un point clé lu. */
export const XP_KEYPOINT = 5
/** XP d'une carte jugée « Difficile » (la carte est juste mais pénible : le combo ne bouge pas). */
export const XP_HARD = 5

export interface ExpressState {
  total: number
  /** Étape courante (0-based) ; `index === total` : session terminée. */
  index: number
  combo: number
  maxCombo: number
  xp: number
}

export type ExpressAction =
  | { type: 'keypoint' }
  | { type: 'card'; grade: Grade }
  | { type: 'quiz'; correct: boolean }
  | { type: 'next' }

export function startExpress(total: number): ExpressState {
  return { total, index: 0, combo: 0, maxCombo: 0, xp: 0 }
}

export const isFinished = (s: ExpressState) => s.index >= s.total

/** Combo et XP après une carte notée : Encore casse le combo, Difficile le garde, Bien/Facile l'augmentent. */
export function scoreCard(combo: number, grade: Grade): { combo: number; xp: number } {
  if (grade === Rating.Again) return { combo: 0, xp: 0 }
  if (grade === Rating.Hard) return { combo, xp: XP_HARD }
  const next = combo + 1
  return { combo: next, xp: XP_CORRECT + (next >= 2 ? XP_COMBO : 0) }
}

function gain(s: ExpressState, r: { combo: number; xp: number }): ExpressState {
  return { ...s, combo: r.combo, maxCombo: Math.max(s.maxCombo, r.combo), xp: s.xp + r.xp }
}

export function expressReducer(state: ExpressState, action: ExpressAction): ExpressState {
  switch (action.type) {
    case 'keypoint':
      return gain(state, { combo: state.combo, xp: XP_KEYPOINT })
    case 'card':
      return gain(state, scoreCard(state.combo, action.grade))
    case 'quiz':
      return gain(state, scoreAnswer(state.combo, action.correct))
    case 'next':
      return isFinished(state) ? state : { ...state, index: state.index + 1 }
  }
}
