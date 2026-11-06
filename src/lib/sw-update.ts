/**
 * Détecte une mise à jour du service worker. Le plugin PWA (autoUpdate) recharge la page
 * au changement de contrôleur : on note donc un drapeau avant le rechargement, puis on
 * affiche le toast au démarrage suivant.
 */
const FLAG = 'sw-updated'

export function watchSwUpdate(
  sw: Pick<ServiceWorkerContainer, 'controller' | 'addEventListener'> | undefined,
  store: Pick<Storage, 'setItem'>,
): void {
  if (!sw || !sw.controller) return // première installation : rien à annoncer
  sw.addEventListener('controllerchange', () => store.setItem(FLAG, '1'))
}

/** Lit puis efface le drapeau. */
export function consumeSwUpdated(store: Pick<Storage, 'getItem' | 'removeItem'>): boolean {
  const v = store.getItem(FLAG) === '1'
  if (v) store.removeItem(FLAG)
  return v
}
