import { createContext, useContext } from 'react'
import type { Term } from '@/content/schema'

export interface ReaderCtx {
  courseId: string
  chapterId: string
  glossary: ReadonlyMap<string, Term>
}

export const ReaderContext = createContext<ReaderCtx>({
  courseId: '',
  chapterId: '',
  glossary: new Map(),
})

export function useReader(): ReaderCtx {
  return useContext(ReaderContext)
}
