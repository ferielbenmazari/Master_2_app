const KEY = 'm2.streak.seen'

function read(): number {
  try {
    const n = Number(localStorage.getItem(KEY))
    return Number.isFinite(n) && n > 0 ? n : 0
  } catch {
    return 0
  }
}

/**
 * Mémorise la série affichée et dit si elle vient d'augmenter depuis la dernière fois (animation « pop »).
 * Une série qui retombe est simplement enregistrée.
 */
export function noteStreak(streak: number): boolean {
  const grew = streak > read()
  try {
    localStorage.setItem(KEY, String(streak))
  } catch {
    /* stockage indisponible : pas d'animation, rien de grave */
  }
  return grew
}
