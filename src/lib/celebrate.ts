import confetti from 'canvas-confetti'
import { UI } from '@/i18n/ui'
import { getEffectsLevel } from '@/store/effects'

const LIFETIME_MS = 1200

function overlay(className: string, html?: (el: HTMLElement) => void): HTMLElement {
  const el = document.createElement('div')
  el.className = className
  el.setAttribute('aria-hidden', 'true')
  html?.(el)
  document.body.appendChild(el)
  setTimeout(() => el.remove(), LIFETIME_MS)
  return el
}

function cssColor(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

/** Flash vert plein cadre (bonne réponse). No-op en `off`. */
export function flashOk(): void {
  if (getEffectsLevel() === 'off') return
  overlay('flash ok')
}

/** Vignette rouge + secousse de `el` (mauvaise réponse). No-op en `off`. */
export function flashKo(el?: HTMLElement | null): void {
  if (getEffectsLevel() === 'off') return
  overlay('flash ko')
  if (el) {
    el.classList.remove('shake')
    void el.offsetWidth // relance l'animation
    el.classList.add('shake')
    setTimeout(() => el.classList.remove('shake'), 400)
  }
}

/** « COMBO xN · +XP » qui explose ; confettis en mode `full`. No-op en `off`. */
export function comboBurst(n: number, xp: number): void {
  const level = getEffectsLevel()
  if (level === 'off') return
  overlay('combo', (el) => {
    const title = document.createElement('div')
    title.className = 'display'
    title.textContent = UI.celebrate.combo(n)
    const gain = document.createElement('div')
    gain.className = 'mono'
    gain.style.color = 'var(--ink)'
    gain.textContent = UI.celebrate.xp(xp)
    el.append(title, gain)
  })
  if (level === 'full') {
    const colors = ['--acid', '--coral', '--gold'].map(cssColor).filter(Boolean)
    void confetti({
      particleCount: Math.min(40 + n * 8, 120),
      spread: 70,
      origin: { y: 0.45 },
      disableForReducedMotion: true,
      ...(colors.length ? { colors } : {}),
    })
  }
}
