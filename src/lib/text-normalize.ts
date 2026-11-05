/** Minuscules, sans accents ni ligatures, espaces compactés : base de la recherche instantanée. */
export function normalizeForSearch(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/œ/gi, 'oe')
    .replace(/æ/gi, 'ae')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}
