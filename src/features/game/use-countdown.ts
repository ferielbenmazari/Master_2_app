import { useEffect, useState } from 'react'

/** Secondes restantes (arrondies au-dessus) avant `startedAt + durationMs`, rafraîchies cinq fois par seconde. */
export function useCountdown(startedAt: number, durationMs: number): number {
  const compute = () => Math.max(0, Math.ceil((startedAt + durationMs - Date.now()) / 1000))
  const [left, setLeft] = useState(compute)
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, Math.ceil((startedAt + durationMs - Date.now()) / 1000)))
    tick()
    const id = setInterval(tick, 200)
    return () => clearInterval(id)
  }, [startedAt, durationMs])
  return left
}
