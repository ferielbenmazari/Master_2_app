import type { ReactNode } from 'react'
import type { WritingItem } from '@/content/schema'

/** Props communes des quatre types d'exercice de l'atelier. */
export interface ItemProps<K extends WritingItem['kind']> {
  item: Extract<WritingItem, { kind: K }>
  /** Appelé une fois, à la vérification. */
  onDone: (correct: boolean) => void
  /** Boutons affichés sous la correction (« Exercice suivant »). */
  actions: ReactNode
}
