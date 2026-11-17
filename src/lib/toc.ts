import type { L, StoryBlock } from '@/content/schema'
import { parseRich, type RichNode } from '@/lib/rich-text'

export interface TocSub {
  /** Rang de la sous-partie dans sa partie (1, 2…). */
  m: number
  text: L
}
export interface TocPart {
  /** Numéro de la partie, identique au « Partie n/N » du lecteur. */
  n: number
  text: L
  subs: TocSub[]
}

/** Sommaire d'un chapitre : une partie par `heading`, ses `subheading` en sous-parties (les sous-titres avant le premier titre sont ignorés). */
export function buildToc(story: StoryBlock[]): TocPart[] {
  const parts: TocPart[] = []
  for (const b of story) {
    if (b.type === 'heading') parts.push({ n: parts.length + 1, text: b.text, subs: [] })
    else if (b.type === 'subheading') {
      const cur = parts[parts.length - 1]
      if (cur) cur.subs.push({ m: cur.subs.length + 1, text: b.text })
    }
  }
  return parts
}

/** Identifiant d'ancre d'une partie (`partie-3`) ou d'une sous-partie (`partie-3-2`). */
export function tocAnchor(n: number, m?: number): string {
  return m ? `partie-${n}-${m}` : `partie-${n}`
}

/** Valeur du paramètre `?partie=` : `3` ou `3.2`. */
export function tocParam(n: number, m?: number): string {
  return m ? `${n}.${m}` : String(n)
}

/** `?partie=3` ou `?partie=3.2` → identifiant d'ancre ; `null` si absent ou invalide. */
export function anchorFromParam(value: string | null): string | null {
  const r = /^(\d+)(?:\.(\d+))?$/.exec(value ?? '')
  if (!r) return null
  return tocAnchor(Number(r[1]), r[2] ? Number(r[2]) : undefined)
}

function nodesText(nodes: RichNode[]): string {
  return nodes
    .map((n) => {
      if (n.kind === 'text') return n.value
      if (n.kind === 'br') return ' '
      if (n.kind === 'term') return n.label ?? n.termId.replace(/^term-/, '').replace(/-/g, ' ')
      return nodesText(n.children)
    })
    .join('')
}

/** Texte brut d'un titre (sans markdown ni balises de terme), pour le sommaire. */
export function plainText(text: string): string {
  return nodesText(parseRich(text)).replace(/\s+/g, ' ').trim()
}
