import { comboBurst } from './celebrate'

/** XP d'une lecture terminée : stub à 0 (l'XP n'est alors pas affiché ; passer à 30, docs/02) tant que le système de rang/XP (T12) n'existe pas (cohérent avec l'accueil, T06). */
export const READ_XP = 0

/** Célébration de fin de chapitre. */
export function celebrate(): void {
  comboBurst(1, READ_XP)
}
