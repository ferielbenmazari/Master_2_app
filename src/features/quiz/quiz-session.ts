import type { QuizItem } from '@/content/schema'
import { prepareQuiz, scoreAnswer, type PreparedItem } from './quiz-logic'

export interface SessionState {
  /** Items de la manche en cours (déjà mélangés). */
  round: PreparedItem[]
  index: number
  /** Résultat de chaque item répondu dans la manche (id → juste ?). */
  results: Record<string, boolean>
  combo: number
  /** Total d'XP de la manche (affichage seulement, pas de magasin avant T12). */
  xp: number
  /** Numéro de manche, pour dériver la graine. */
  roundNo: number
  finished: boolean
}

export type SessionAction =
  | { type: 'answer'; id: string; correct: boolean }
  | { type: 'next' }
  | { type: 'retry'; seed: number }

export function startSession(items: readonly QuizItem[], seed: number): SessionState {
  return { round: prepareQuiz(items, seed), index: 0, results: {}, combo: 0, xp: 0, roundNo: 0, finished: false }
}

/** Items ratés de la manche courante, dans l'ordre de la manche. */
export function mistakes(state: SessionState): PreparedItem[] {
  return state.round.filter((p) => state.results[p.item.id] === false)
}

export function score(state: SessionState): { correct: number; total: number } {
  return {
    correct: state.round.filter((p) => state.results[p.item.id] === true).length,
    total: state.round.length,
  }
}

export function sessionReducer(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case 'answer': {
      if (action.id in state.results) return state // une seule réponse par item et par manche
      const s = scoreAnswer(state.combo, action.correct)
      return {
        ...state,
        results: { ...state.results, [action.id]: action.correct },
        combo: s.combo,
        xp: state.xp + s.xp,
      }
    }
    case 'next': {
      const last = state.index >= state.round.length - 1
      return last ? { ...state, finished: true } : { ...state, index: state.index + 1 }
    }
    case 'retry': {
      const wrong = mistakes(state)
      if (wrong.length === 0) return state
      return {
        round: prepareQuiz(
          wrong.map((p) => p.item),
          action.seed,
        ),
        index: 0,
        results: {},
        combo: 0,
        xp: 0,
        roundNo: state.roundNo + 1,
        finished: false,
      }
    }
  }
}
