/** Analyse du texte enrichi : références de termes [[termId]] / [[termId|texte]] et trous {{a|b}}. */

export type TermRefSegment =
  | { type: 'text'; value: string }
  | { type: 'term'; termId: string; label?: string }

export type ClozeSegment =
  | { type: 'text'; value: string }
  | { type: 'gap'; answers: string[] }

const TERM_REF = /\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]/g
const CLOZE_GAP = /\{\{([^}]*)\}\}/g

/** Découpe un texte en segments texte / référence de terme. */
export function parseTermRefs(text: string): TermRefSegment[] {
  const out: TermRefSegment[] = []
  let last = 0
  for (const m of text.matchAll(TERM_REF)) {
    const start = m.index
    if (start > last) out.push({ type: 'text', value: text.slice(last, start) })
    const termId = (m[1] as string).trim()
    const label = m[2]?.trim()
    out.push(label ? { type: 'term', termId, label } : { type: 'term', termId })
    last = start + m[0].length
  }
  if (last < text.length) out.push({ type: 'text', value: text.slice(last) })
  return out
}

/** Ids de termes référencés dans un texte (dans l'ordre, avec doublons). */
export function findAllTermRefs(text: string): string[] {
  return parseTermRefs(text).flatMap((s) => (s.type === 'term' ? [s.termId] : []))
}

/** Découpe un texte à trous : `{{controls|controls for}}` → trou avec 2 réponses acceptées. */
export function parseCloze(text: string): ClozeSegment[] {
  const out: ClozeSegment[] = []
  let last = 0
  for (const m of text.matchAll(CLOZE_GAP)) {
    const start = m.index
    if (start > last) out.push({ type: 'text', value: text.slice(last, start) })
    const answers = (m[1] as string)
      .split('|')
      .map((a) => a.trim())
      .filter(Boolean)
    out.push({ type: 'gap', answers })
    last = start + m[0].length
  }
  if (last < text.length) out.push({ type: 'text', value: text.slice(last) })
  return out
}
