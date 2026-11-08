import { flashKo, flashOk } from '@/lib/celebrate'
import { recordAttempt } from '@/store/progress'

/** Retour visuel + enregistrement de la tentative (kind `writing`). `score` : 0..1 pour la rédaction libre. */
export function settleWriting(root: HTMLElement | null, itemId: string, correct: boolean, score?: number): void {
  if (correct) flashOk()
  else flashKo(root)
  void recordAttempt({ itemId, kind: 'writing', correct, ...(score !== undefined ? { score } : {}) })
}
