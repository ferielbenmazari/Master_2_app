import { useEffect, useState } from 'react'
import { useEffectsLevel } from '@/store/effects'

type TypeLineProps = {
  text: string
  /** Délai entre deux caractères, en ms. */
  speed?: number
}

/** Ligne de journal « tapée » avec curseur clignotant. */
export default function TypeLine({ text, speed = 38 }: TypeLineProps) {
  const [level] = useEffectsLevel()
  const animate = level !== 'off'
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!animate) return
    setCount(0)
    const id = setInterval(() => {
      setCount((c) => {
        if (c + 1 >= text.length) clearInterval(id)
        return c + 1
      })
    }, speed)
    return () => clearInterval(id)
  }, [animate, text, speed])

  const typing = animate && count < text.length
  return (
    <div className="log">
      <span aria-hidden="true">&gt; </span>
      {typing ? (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">{text.slice(0, count)}</span>
        </>
      ) : (
        <span>{text}</span>
      )}
      <span className="caret" aria-hidden="true" />
    </div>
  )
}
