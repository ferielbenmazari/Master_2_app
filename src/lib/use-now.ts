import { useEffect, useState } from 'react'

/** Heure courante (ms) rafraîchie toutes les `intervalMs` et au retour sur l'onglet (les minuteurs de fond sont ralentis). */
export function useNow(intervalMs = 1000): number {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const tick = () => setNow(Date.now())
    const id = setInterval(tick, intervalMs)
    document.addEventListener('visibilitychange', tick)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', tick)
    }
  }, [intervalMs])
  return now
}
