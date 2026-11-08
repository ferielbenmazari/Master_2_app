/**
 * Minuteur d'examen : état dérivé d'un horodatage de démarrage (jamais d'un compteur en mémoire),
 * pour survivre à un rechargement de la page.
 */

export type TimerTone = 'ok' | 'warn' | 'danger'

/** Le HUD passe à l'orange à 10 min, au rouge à 2 min. */
export const WARN_SECONDS = 10 * 60
export const DANGER_SECONDS = 2 * 60

export interface ExamTimerState {
  /** Secondes restantes (entier, jamais négatif). */
  remainingSec: number
  totalSec: number
  tone: TimerTone
  expired: boolean
}

/** `startedAt` et `now` en millisecondes (Date.now()). Les secondes entamées comptent (arrondi au supérieur). */
export function examTimer(startedAt: number, durationMinutes: number, now: number): ExamTimerState {
  const totalSec = Math.round(durationMinutes * 60)
  const elapsedMs = Math.max(0, now - startedAt)
  const remainingSec = Math.max(0, Math.min(totalSec, Math.ceil((totalSec * 1000 - elapsedMs) / 1000)))
  const tone: TimerTone = remainingSec <= DANGER_SECONDS ? 'danger' : remainingSec <= WARN_SECONDS ? 'warn' : 'ok'
  return { remainingSec, totalSec, tone, expired: remainingSec === 0 }
}

/** Instant de fin (ms) : sert d'heure de remise quand le temps est écoulé. */
export function examDeadline(startedAt: number, durationMinutes: number): number {
  return startedAt + Math.round(durationMinutes * 60) * 1000
}

/** « MM:SS » (les minutes peuvent dépasser 59 : un partiel de 90 min s'affiche 90:00). */
export function formatClock(sec: number): string {
  const s = Math.max(0, Math.floor(sec))
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

/**
 * Palier d'annonce pour lecteur d'écran : change rarement (toutes les 5 min, puis 10, 2, 1 et 0 min)
 * afin que le minuteur ne parle pas à chaque seconde. Valeur = minutes à annoncer.
 */
export function announceBucket(remainingSec: number): number {
  if (remainingSec <= 0) return 0
  if (remainingSec <= 60) return 1
  if (remainingSec <= DANGER_SECONDS) return 2
  if (remainingSec <= WARN_SECONDS) return 10
  return Math.ceil(remainingSec / 300) * 5
}
