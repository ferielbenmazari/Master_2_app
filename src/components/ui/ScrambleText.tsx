import { useEffect, useState } from 'react'
import { useEffectsLevel } from '@/store/effects'

const GLYPHS = '!<>-_\\/[]{}=+*^?#ABCDEFX01'
const STEPS = 24
const STEP_MS = 32

type ScrambleTextProps = {
  children: string
}

/** Texte qui se « décode » à l'apparition. Texte brut en niveau `off`. */
export default function ScrambleText({ children: text }: ScrambleTextProps) {
  const [level] = useEffectsLevel()
  const animate = level !== 'off'
  const [display, setDisplay] = useState<string | null>(null)

  useEffect(() => {
    if (!animate) return
    let step = 0
    const id = setInterval(() => {
      step++
      if (step > STEPS) {
        clearInterval(id)
        setDisplay(null)
        return
      }
      setDisplay(
        text
          .split('')
          .map((ch, i) =>
            i < (step / STEPS) * text.length || ch === ' '
              ? ch
              : (GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? ch),
          )
          .join(''),
      )
    }, STEP_MS)
    return () => clearInterval(id)
  }, [animate, text])

  if (display === null || !animate) return <>{text}</>
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </>
  )
}
