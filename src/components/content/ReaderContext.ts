import { createContext, useContext } from 'react'
import type { Objective, QuizItem, Term } from '@/content/schema'

export interface ReaderCtx {
  courseId: string
  chapterId: string
  glossary: ReadonlyMap<string, Term>
  /** Items de quiz du chapitre, par id (blocs `checkpoint`). */
  quiz: ReadonlyMap<string, QuizItem>
  /** Objectifs du chapitre (rappelés dans la correction des checkpoints). */
  objectives?: readonly Objective[]
}

export const ReaderContext = createContext<ReaderCtx>({
  courseId: '',
  chapterId: '',
  glossary: new Map(),
  quiz: new Map(),
})

export function useReader(): ReaderCtx {
  return useContext(ReaderContext)
}
