import type { Chapter, Term } from '@/content/schema'
import { normalizeForSearch } from './text-normalize'

export interface GlossaryEntry {
  term: Term
  chapterId: string
  chapterOrder: number
  /** FR + EN normalisés, pour la recherche. */
  haystack: string
}

/** Tous les termes d'une matière, dédoublonnés par `id` (première occurrence gardée). */
export function buildGlossary(chapters: readonly Chapter[]): GlossaryEntry[] {
  const seen = new Set<string>()
  const out: GlossaryEntry[] = []
  for (const ch of chapters) {
    for (const term of ch.glossary) {
      if (seen.has(term.id)) continue
      seen.add(term.id)
      out.push({
        term,
        chapterId: ch.id,
        chapterOrder: ch.order,
        haystack: normalizeForSearch(`${term.fr} ${term.en}`),
      })
    }
  }
  return out
}

/** Filtre par requête (FR ou EN, sans accents ni casse) ; requête vide = tout. */
export function filterGlossary(entries: readonly GlossaryEntry[], query: string): GlossaryEntry[] {
  const q = normalizeForSearch(query)
  return q ? entries.filter((e) => e.haystack.includes(q)) : [...entries]
}

export interface LetterGroup {
  letter: string
  entries: GlossaryEntry[]
}

/** Trie par terme dans la langue donnée et groupe par initiale (non-lettre → « # »). */
export function groupByLetter(entries: readonly GlossaryEntry[], lang: 'fr' | 'en'): LetterGroup[] {
  const key = (e: GlossaryEntry) => normalizeForSearch(e.term[lang])
  const sorted = [...entries].sort((a, b) => key(a).localeCompare(key(b)))
  const groups: LetterGroup[] = []
  for (const e of sorted) {
    const c = key(e).charAt(0).toUpperCase()
    const letter = /[A-Z]/.test(c) ? c : '#'
    const last = groups[groups.length - 1]
    if (last?.letter === letter) last.entries.push(e)
    else groups.push({ letter, entries: [e] })
  }
  return groups
}
