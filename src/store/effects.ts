import { useSyncExternalStore } from 'react'

export type EffectsLevel = 'full' | 'light' | 'off'

const KEY = 'm2.effects'
const LEVELS: readonly EffectsLevel[] = ['full', 'light', 'off']

const listeners = new Set<() => void>()
let explicit: EffectsLevel | null = readStored()
let level: EffectsLevel = compute()

function readStored(): EffectsLevel | null {
  try {
    const v = localStorage.getItem(KEY)
    return LEVELS.includes(v as EffectsLevel) ? (v as EffectsLevel) : null
  } catch {
    return null
  }
}

function prefersReducedMotion(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Choix explicite sinon `off` si l'OS demande moins d'animations, sinon `full`. */
function compute(): EffectsLevel {
  return explicit ?? (prefersReducedMotion() ? 'off' : 'full')
}

function apply(): void {
  if (typeof document !== 'undefined') document.documentElement.dataset.fx = level
  listeners.forEach((l) => l())
}

export function getEffectsLevel(): EffectsLevel {
  return level
}

export function setEffectsLevel(next: EffectsLevel): void {
  explicit = next
  level = next
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* stockage indisponible : le choix reste valable pour la session */
  }
  apply()
}

/** Relit les préférences (OS + stockage) et pose `data-fx` sur <html>. À appeler au démarrage. */
export function initEffects(): void {
  explicit = readStored()
  level = compute()
  apply()
  if (typeof matchMedia === 'function') {
    matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
      if (explicit === null) {
        level = compute()
        apply()
      }
    })
  }
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

/** Niveau d'effets courant + setter. */
export function useEffectsLevel(): [EffectsLevel, (l: EffectsLevel) => void] {
  const current = useSyncExternalStore(subscribe, getEffectsLevel, getEffectsLevel)
  return [current, setEffectsLevel]
}
