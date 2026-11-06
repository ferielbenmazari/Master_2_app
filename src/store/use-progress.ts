import { useEffect, useState } from 'react'
import { currentStreak } from '@/lib/streak'
import { getActivity, getReading } from './progress'
import { noteStreak } from './streak-seen'

/** Chapitres lus (finishedAt présent) parmi `chapterIds`. */
export function useReadChapters(chapterIds: string[]): Set<string> {
  const key = chapterIds.join('|')
  const [read, setRead] = useState<Set<string>>(new Set())
  useEffect(() => {
    let live = true
    Promise.all(
      (key ? key.split('|') : []).map(async (id) =>
        (await getReading(id))?.finishedAt ? id : null,
      ),
    ).then((ids) => {
      if (live) setRead(new Set(ids.filter((x): x is string => x !== null)))
    })
    return () => {
      live = false
    }
  }, [key])
  return read
}

export function useDueCount(): number {
  const [n, setN] = useState(0)
  useEffect(() => {
    let live = true
    // Compter les cartes charge tous les chapitres : on attend que la page soit affichée et inactive.
    const run = () =>
      void import('./due').then(({ getDueCount }) => getDueCount()).then((v) => live && setN(v))
    const id = window.setTimeout(run, 1200)
    return () => {
      live = false
      clearTimeout(id)
    }
  }, [])
  return n
}

export function useStreak(): { streak: number; grew: boolean } {
  const [state, setState] = useState({ streak: 0, grew: false })
  useEffect(() => {
    let live = true
    getActivity().then((rows) => {
      if (!live) return
      const streak = currentStreak(rows.filter((r) => r.count > 0).map((r) => r.date))
      setState({ streak, grew: noteStreak(streak) })
    })
    return () => {
      live = false
    }
  }, [])
  return state
}
