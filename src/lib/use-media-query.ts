import { useSyncExternalStore } from 'react'

/** Suit une media query (faux si `matchMedia` est absent, ex. tests). */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (notify) => {
      if (typeof matchMedia !== 'function') return () => {}
      const mq = matchMedia(query)
      mq.addEventListener('change', notify)
      return () => mq.removeEventListener('change', notify)
    },
    () => typeof matchMedia === 'function' && matchMedia(query).matches,
    () => false,
  )
}
