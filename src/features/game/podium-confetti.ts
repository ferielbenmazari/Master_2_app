import confetti from 'canvas-confetti'
import { getEffectsLevel } from '@/store/effects'

function cssColor(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

/** Confettis de fin de partie (couleurs des tokens). No-op si les effets sont coupés ou si l'OS demande moins d'animations. */
export function podiumConfetti(): void {
  if (getEffectsLevel() === 'off') return
  const colors = ['--acid', '--coral', '--gold', '--cyan'].map(cssColor).filter(Boolean)
  const base = {
    disableForReducedMotion: true,
    ...(colors.length ? { colors } : {}),
  }
  void confetti({ ...base, particleCount: 90, spread: 80, origin: { x: 0.2, y: 0.7 } })
  void confetti({ ...base, particleCount: 90, spread: 80, origin: { x: 0.8, y: 0.7 } })
}
