import type { L, StoryBlock } from '@/content/schema'
import { parseRich, type RichNode } from '@/lib/rich-text'

export interface TocSubSub {
  /** Rang dans sa sous-partie (1, 2…). */
  k: number
  text: L
}
export interface TocSub {
  /** Rang de la sous-partie dans sa partie (1, 2…). */
  m: number
  text: L
  /** Sous-parties de 3ᵉ niveau (`subheading` avec `level: 3`). */
  subs: TocSubSub[]
}
export interface TocPart {
  /** Numéro de la partie, identique au « Partie n/N » du lecteur. */
  n: number
  text: L
  subs: TocSub[]
}

/**
 * Sommaire d'un chapitre : une partie par `heading`, ses `subheading` en sous-parties, et les
 * `subheading` de niveau 3 en sous-parties de la dernière sous-partie (sans sous-partie ouverte,
 * un niveau 3 compte comme une sous-partie). Les sous-titres avant le premier titre sont ignorés.
 */
export function buildToc(story: StoryBlock[]): TocPart[] {
  const parts: TocPart[] = []
  for (const b of story) {
    if (b.type === 'heading') parts.push({ n: parts.length + 1, text: b.text, subs: [] })
    else if (b.type === 'subheading') {
      const cur = parts[parts.length - 1]
      if (!cur) continue
      const last = cur.subs[cur.subs.length - 1]
      if (b.level === 3 && last) last.subs.push({ k: last.subs.length + 1, text: b.text })
      else cur.subs.push({ m: cur.subs.length + 1, text: b.text, subs: [] })
    }
  }
  return parts
}

/** Identifiant d'ancre : partie (`partie-3`), sous-partie (`partie-3-2`), 3ᵉ niveau (`partie-3-2-1`). */
export function tocAnchor(n: number, m?: number, k?: number): string {
  return ['partie', n, m, m ? k : undefined].filter((x) => x !== undefined && x !== 0).join('-')
}

/** Valeur du paramètre `?partie=` : `3`, `3.2` ou `3.2.1`. */
export function tocParam(n: number, m?: number, k?: number): string {
  return [n, m, m ? k : undefined].filter((x) => x !== undefined && x !== 0).join('.')
}

/** `?partie=3`, `3.2` ou `3.2.1` → identifiant d'ancre ; `null` si absent ou invalide. */
export function anchorFromParam(value: string | null): string | null {
  const r = /^(\d+)(?:\.(\d+)(?:\.(\d+))?)?$/.exec(value ?? '')
  if (!r) return null
  return tocAnchor(Number(r[1]), r[2] ? Number(r[2]) : undefined, r[3] ? Number(r[3]) : undefined)
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
