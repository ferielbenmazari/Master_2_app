import { useEffect, useRef } from 'react'
import { useEffectsLevel } from '@/store/effects'

const FRAME_MS = 1000 / 20
const PALETTE_VARS = ['--acid', '--coral', '--gold'] as const

type Particle = { x: number; y: number; v: number; r: number; c: number }

function makeParticles(w: number, h: number): Particle[] {
  const count = Math.min(70, Math.floor(w / 18))
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    v: 0.15 + Math.random() * 0.5,
    r: Math.random() * 1.6 + 0.4,
    c: Math.floor(Math.random() * PALETTE_VARS.length),
  }))
}

/** Un seul canvas de particules chaudes. Pause onglet masqué ; repeint à 20 images/s. */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const root = document.documentElement
    let w = 0
    let h = 0
    let particles: Particle[] = []
    let colors: string[] = []
    let alpha = 0.55
    let raf = 0
    let last = 0

    const readTheme = () => {
      const style = getComputedStyle(root)
      colors = PALETTE_VARS.map((v) => style.getPropertyValue(v).trim())
      alpha = root.dataset.theme === 'light' ? 0.35 : 0.55
    }
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      particles = makeParticles(w, h)
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.y -= p.v * 3 // 20 images/s : vitesse triplée pour garder le rythme de la maquette
        if (p.y < -5) {
          p.y = h + 5
          p.x = Math.random() * w
        }
        const color = colors[p.c] ?? ''
        const s = p.r * 1.6
        ctx.fillStyle = color
        ctx.globalAlpha = alpha * 0.25
        ctx.fillRect(p.x - s, p.y - s, s * 3, s * 3) // halo (remplace shadowBlur, bien plus coûteux)
        ctx.globalAlpha = alpha
        ctx.fillRect(p.x, p.y, s, s)
      }
    }
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      if (t - last < FRAME_MS) return
      last = t
      draw()
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) raf = requestAnimationFrame(loop)
    }

    readTheme()
    resize()
    const observer = new MutationObserver(readTheme)
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    onVisibility()
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="fx-canvas" aria-hidden="true" />
}

/**
 * Décor de fond : auras + grille + lignes d'écran + particules.
 * `full` = tout ; `light` = grille et lignes seulement ; `off` = grille et lignes statiques, ni aura ni canvas.
 */
export default function Ambient() {
  const [level] = useEffectsLevel()
  return (
    <div aria-hidden="true">
      {level === 'full' && (
        <>
          <div className="aura a1" />
          <div className="aura a2" />
          <ParticleCanvas />
        </>
      )}
      <div className="grid-bg" />
      <div className="scan" />
    </div>
  )
}
