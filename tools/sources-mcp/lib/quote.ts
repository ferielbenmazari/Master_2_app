/**
 * Vérificateur de citations — portage exact de tools/sources-mcp/reference/verify_quote.py.
 * Ne pas « améliorer » l'algorithme : les ratios doivent rester identiques à ceux du Python.
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export const QUOTE_THRESHOLD = 0.9

/** Équivalent de `norm()` : NFKD, sans diacritiques, minuscules, ligatures, [a-z0-9] séparés par un espace. */
export function normalize(text: string): string {
  const decomposed = text.normalize('NFKD').replace(/\p{M}/gu, '')
  return decomposed
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const normalizedCache = new Map<string, string>()
function normalizeCached(text: string): string {
  let n = normalizedCache.get(text)
  if (n === undefined) {
    n = normalize(text)
    normalizedCache.set(text, n)
  }
  return n
}

/** Équivalent de `SequenceMatcher.find_longest_match` (sans junk) : [i, j, taille]. */
function longestMatch(
  a: string[],
  b2j: Map<string, number[]>,
  alo: number,
  ahi: number,
  blo: number,
  bhi: number,
): [number, number, number] {
  let besti = alo
  let bestj = blo
  let bestsize = 0
  let j2len = new Map<number, number>()
  for (let i = alo; i < ahi; i++) {
    const newj2len = new Map<number, number>()
    for (const j of b2j.get(a[i] as string) ?? []) {
      if (j < blo) continue
      if (j >= bhi) break
      const k = (j2len.get(j - 1) ?? 0) + 1
      newj2len.set(j, k)
      if (k > bestsize) {
        besti = i - k + 1
        bestj = j - k + 1
        bestsize = k
      }
    }
    j2len = newj2len
  }
  return [besti, bestj, bestsize]
}

/** Somme des tailles de `get_matching_blocks()` (autojunk=False). */
function matchingTotal(a: string[], b: string[]): number {
  const b2j = new Map<string, number[]>()
  b.forEach((w, j) => {
    const list = b2j.get(w)
    if (list) list.push(j)
    else b2j.set(w, [j])
  })
  let total = 0
  const queue: [number, number, number, number][] = [[0, a.length, 0, b.length]]
  while (queue.length > 0) {
    const [alo, ahi, blo, bhi] = queue.pop() as [number, number, number, number]
    const [i, j, k] = longestMatch(a, b2j, alo, ahi, blo, bhi)
    if (k > 0) {
      total += k
      if (alo < i && blo < j) queue.push([alo, i, blo, j])
      if (i + k < ahi && j + k < bhi) queue.push([i + k, ahi, j + k, bhi])
    }
  }
  return total
}

/** Équivalent de `check()` : ratio ∈ [0, 1] des mots de la citation retrouvés dans l'ordre. */
export function quoteRatio(text: string, quote: string): number {
  const n = normalizeCached(text)
  const q = normalize(quote)
  if (!q) return 0
  if (n.includes(q)) return 1
  const tw = n === '' ? [] : n.split(' ')
  const qw = q.split(' ')
  const L = qw.length
  let best = 0
  const last = Math.max(1, tw.length - L + 1)
  for (let i = 0; i < last; i++) {
    const win = tw.slice(i, i + L + 3)
    best = Math.max(best, matchingTotal(qw, win) / L)
    if (best >= 1) break
  }
  return best
}

export function verifyQuote(text: string, quote: string): { ratio: number; found: boolean } {
  const ratio = quoteRatio(text, quote)
  return { ratio, found: ratio >= QUOTE_THRESHOLD }
}

/** Nombre de mots d'une citation (convention du Python : split sur les espaces). */
export function quoteWordCount(quote: string): number {
  return quote.split(/\s+/).filter(Boolean).length
}

const fileCache = new Map<string, string | null>()

/** Lit un fichier source (UTF-8) avec cache ; `null` s'il n'existe pas. */
export function readSourceFile(root: string, file: string): string | null {
  const abs = resolve(root, file)
  const hit = fileCache.get(abs)
  if (hit !== undefined) return hit
  let content: string | null
  try {
    content = readFileSync(abs, 'utf-8')
  } catch {
    content = null
  }
  fileCache.set(abs, content)
  return content
}
