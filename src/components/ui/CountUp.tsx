import { useEffect, useState } from 'react'
import { useEffectsLevel } from '@/store/effects'

type CountUpProps = {
  to: number
  suffix?: string
  /** Durée en ms. */
  duration?: number
}

/** Compteur qui monte (valeur finale immédiate en niveau `off`). */
export default function CountUp({ to, suffix = '', duration = 1200 }: CountUpProps) {
  const [level] = useEffectsLevel()
  const animate = level !== 'off'
  const [value, setValue] = useState(animate ? 0 : to)

  useEffect(() => {
    if (!animate) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / duration)
      setValue(Math.round(to * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [animate, to, duration])

  return (
    <>
      {animate ? value : to}
      {suffix}
    </>
  )
}
