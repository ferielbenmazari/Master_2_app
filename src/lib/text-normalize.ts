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

/** -ise/-ize (et dérivés : -ised, -ising, -isation…) et -yse/-yze : forme canonique en « s » (britannique). */
const IZE = /([a-z])iz(?=(?:e|ed|es|ing|er|ers|ation|ations|ational)?(?:\b|$))/g
const YZE = /([a-z])yz(?=(?:e|ed|es|ing|er|ers)?(?:\b|$))/g

/**
 * Forme canonique d'une réponse en anglais pour comparer sans se soucier de la casse, des espaces,
 * des apostrophes typographiques, des guillemets (supprimés), de la ponctuation finale ni de -ise/-ize (-isation/-ization).
 * Les accents sont conservés (anglais : ils ne servent pas).
 */
export function normalizeAnswer(s: string): string {
  return s
    .normalize('NFC')
    .replace(/[‘’‛′`´]/g, "'")
    .replace(/[“”„«»″]/g, '"')
    .replace(/[‐-―−]/g, '-')
    .toLowerCase()
    .replace(/"/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:!?…])/g, '$1')
    .trim()
    .replace(/[.,;:!?…\s]+$/, '')
    .replace(IZE, '$1is')
    .replace(YZE, '$1ys')
}
