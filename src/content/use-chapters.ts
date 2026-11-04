import { useEffect, useState } from 'react'
import { loadAllChapters } from './loader'
import type { Chapter } from './schema'

/** Chapitres chargés d'une matière ; `null` pendant le chargement. */
export function useChapters(courseId: string): Chapter[] | null {
  const [state, setState] = useState<{ courseId: string; chapters: Chapter[] } | null>(null)
  useEffect(() => {
    let live = true
    loadAllChapters(courseId).then((chapters) => live && setState({ courseId, chapters }))
    return () => {
      live = false
    }
  }, [courseId])
  return state?.courseId === courseId ? state.chapters : null
}
