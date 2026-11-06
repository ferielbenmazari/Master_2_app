/** Brouillons d'exercices (zone de texte libre), conservés dans le navigateur. */

const PREFIX = 'm2rev:draft:'

export function loadDraft(exerciseId: string): string {
  try {
    return localStorage.getItem(PREFIX + exerciseId) ?? ''
  } catch {
    return ''
  }
}

/** Enregistre le brouillon ; un texte vide supprime l'entrée. */
export function saveDraft(exerciseId: string, text: string): void {
  try {
    if (text === '') localStorage.removeItem(PREFIX + exerciseId)
    else localStorage.setItem(PREFIX + exerciseId, text)
  } catch {
    /* stockage indisponible : le brouillon reste valable pour la session */
  }
}

/** Supprime tous les brouillons (réinitialisation). */
export function removeDrafts(): void {
  try {
    for (const k of Object.keys(localStorage)) if (k.startsWith(PREFIX)) localStorage.removeItem(k)
  } catch {
    /* stockage indisponible */
  }
}
