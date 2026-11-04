/** Découpage d'un texte source en passages de 40 à 400 mots, avec localisation (`loc`) et lignes. */
import type { SourceTier } from '../../../src/content/schema.ts'

export interface Passage {
  id: string
  file: string
  tier: SourceTier
  loc: string
  /** lignes 1-indexées, bornes incluses */
  fromLine: number
  toLine: number
  text: string
}

export const MIN_WORDS = 40
export const MAX_WORDS = 400

const HEADING = /^(#{1,6})\s+(.*?)\s*#*\s*$/
const PAGE_MARK = /^\s*<!--\s*Page\s+(\d+)\s*-->\s*$/i
const SLIDE = /^slide\s+\d+/i

const wc = (s: string): number => s.split(/\s+/).filter(Boolean).length

interface Section {
  loc: string
  from: number // index de ligne 0-indexé
  to: number // inclus
  lines: string[]
}

export function chunkText(text: string, file: string, tier: SourceTier): Passage[] {
  const lines = text.split('\n')
  const sections: Section[] = []
  let cur: Section | null = null
  let parent = '' // dernier titre qui n'est pas « Slide N »
  let page = 1
  let pagesSeen = /\f|<!--\s*Page\s+\d+\s*-->/i.test(text)

  const start = (i: number, loc: string): Section => {
    const s: Section = { loc, from: i, to: i, lines: [] }
    sections.push(s)
    return s
  }

  lines.forEach((raw, i) => {
    let line = raw
    let boundary: string | null = null
    const pm = PAGE_MARK.exec(line)
    if (pm) {
      page = Number(pm[1])
      boundary = `p. ${page}`
    } else {
      const ff = line.split('\f').length - 1
      if (ff > 0) {
        page += ff
          line = line.replaceAll('\f', '')
        boundary = `p. ${page}`
      }
      const h = HEADING.exec(line)
      if (h) {
        const title = (h[2] ?? '').trim()
        if (SLIDE.test(title) && parent) boundary = `${parent} › ${title}`
        else {
          boundary = title || `p. ${page}`
          if (!SLIDE.test(title)) parent = title
        }
      }
    }
    if (boundary !== null) {
      cur = start(i, boundary)
    } else if (cur === null) {
      cur = start(i, pagesSeen ? `p. ${page}` : 'début')
    }
    cur.lines.push(line)
    cur.to = i
  })

  // 1) découper les sections trop longues
  const split: Section[] = []
  for (const s of sections) {
    const total = wc(s.lines.join(' '))
    if (total <= MAX_WORDS) {
      split.push(s)
      continue
    }
    const parts = Math.ceil(total / (MAX_WORDS * 0.75))
    const target = total / parts
    let acc: Section = { loc: s.loc, from: s.from, to: s.from, lines: [] }
    let words = 0
    s.lines.forEach((l, k) => {
      const lw = wc(l)
      if (words >= target && acc.lines.length > 0 && words + lw > 0 && l.trim() !== '') {
        split.push(acc)
        acc = { loc: `${s.loc} (suite)`, from: s.from + k, to: s.from + k, lines: [] }
        words = 0
      }
      acc.lines.push(l)
      acc.to = s.from + k
      words += lw
    })
    split.push(acc)
  }

  // 2) fusionner les passages trop courts avec le suivant (sinon le précédent)
  const merged: Section[] = []
  let pending: Section | null = null
  for (const s of split) {
    let candidate: Section = s
    if (pending) {
      const loc = (pending.loc.startsWith('p. ') && !s.loc.startsWith('p. ')) || s.loc.startsWith(`${pending.loc} › `) ? s.loc : pending.loc
      candidate = { loc, from: pending.from, to: s.to, lines: [...pending.lines, ...s.lines] }
      pending = null
    }
    if (wc(candidate.lines.join(' ')) < MIN_WORDS) pending = candidate
    else merged.push(candidate)
  }
  if (pending) {
    const prev = merged[merged.length - 1]
    if (prev && wc(prev.lines.join(' ')) + wc(pending.lines.join(' ')) <= MAX_WORDS * 1.25) {
      prev.lines.push(...pending.lines)
      prev.to = pending.to
    } else merged.push(pending)
  }

  return merged
    .map((s) => ({ s, body: s.lines.join('\n').trim() }))
    .filter(({ body }) => body !== '')
    .map(({ s, body }, n) => ({
      id: `${file}#${n + 1}`,
      file,
      tier,
      loc: s.loc,
      fromLine: s.from + 1,
      toLine: s.to + 1,
      text: body,
    }))
}
