const KEY = 'm2.express.recent'
/** On ne retient que la dernière session (6 items) : de quoi éviter de la rejouer à l'identique. */
const MAX = 12

/** Ids des items de la dernière session Express (vide si rien ou stockage indisponible). */
export function loadRecentExpress(): Set<string> {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(KEY) ?? '[]')
    return new Set(Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : [])
  } catch {
    return new Set()
  }
}

/** Mémorise les items de la session qui démarre (remplace la précédente). */
export function saveRecentExpress(ids: readonly string[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(ids.slice(0, MAX)))
  } catch {
    /* stockage indisponible : la session suivante pourra se répéter, rien de grave */
  }
}
