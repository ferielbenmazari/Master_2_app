import { hashSeed, shuffle } from './shuffle'
import { normalizeAnswer } from './text-normalize'

/** Niveaux de l'atelier : 1 ordre, 2 trous, 3 erreur, 4 rédaction libre. */
export const WRITING_KINDS = ['reorder', 'cloze', 'spot_error', 'free'] as const
export type WritingKind = (typeof WRITING_KINDS)[number]

/** Vrai si `input` correspond à l'une des variantes, une fois normalisés. */
export function matchesAny(input: string, variants: readonly string[]): boolean {
  const n = normalizeAnswer(input)
  if (n === '') return false
  return variants.some((v) => normalizeAnswer(v) === n)
}

// ---------------------------------------------------------------- reorder

/** Mots d'une phrase (la ponctuation reste collée au mot). */
export function splitSentence(sentence: string): string[] {
  return sentence.split(/\s+/).filter((w) => w !== '')
}

/**
 * Mots mélangés avec une graine, jamais dans l'ordre initial (si au moins deux mots diffèrent).
 * Renvoie les indices des mots d'origine : `words[order[k]]` est le k-ième mot proposé.
 */
export function shuffledOrder(words: readonly string[], seed: number): number[] {
  const idx = words.map((_, i) => i)
  const same = (o: readonly number[]) => o.every((i, k) => words[i] === words[k])
  if (words.every((w) => w === words[0])) return idx
  for (let t = 0; t < 20; t++) {
    const o = shuffle(idx, seed + t)
    if (!same(o)) return o
  }
  return [...idx.slice(1), idx[0]!]
}

/** Graine reproductible pour un item donné et un numéro de tentative. */
export function itemSeed(itemId: string, attempt = 0): number {
  return (hashSeed(itemId) + attempt) >>> 0
}

/** La phrase reconstituée correspond-elle à `answer` ou à l'une des variantes `accepted` ? */
export function checkReorder(placed: readonly string[], answer: string, accepted: readonly string[] = []): boolean {
  return matchesAny(placed.join(' '), [answer, ...accepted])
}

// ---------------------------------------------------------------- cloze

export type ClozeSegment = { type: 'text'; value: string } | { type: 'gap'; answers: string[] }

/** Découpe `"A {{x|y}} b"` en segments texte/trou. Les réponses acceptées d'un trou sont séparées par `|`. */
export function parseCloze(text: string): ClozeSegment[] {
  const out: ClozeSegment[] = []
  const re = /\{\{([^}]*)\}\}/g
  let last = 0
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index > last) out.push({ type: 'text', value: text.slice(last, m.index) })
    const answers = m[1]!
      .split('|')
      .map((a) => a.trim())
      .filter((a) => a !== '')
    out.push({ type: 'gap', answers })
    last = m.index + m[0].length
  }
  if (last < text.length) out.push({ type: 'text', value: text.slice(last) })
  return out
}

/** Les trous seulement, dans l'ordre. */
export function clozeGaps(segments: readonly ClozeSegment[]): string[][] {
  return segments.flatMap((s) => (s.type === 'gap' ? [s.answers] : []))
}

/** Correction trou par trou (`inputs[i]` = saisie du i-ième trou). */
export function checkCloze(gaps: readonly (readonly string[])[], inputs: readonly string[]): boolean[] {
  return gaps.map((answers, i) => matchesAny(inputs[i] ?? '', answers))
}

/** Indice dérivé de la réponse : première lettre puis traits bas (« c_______ »). */
export function clozeHint(answers: readonly string[]): string {
  const a = answers[0] ?? ''
  return a === '' ? '' : a[0]! + a.slice(1).replace(/[^\s]/g, '_')
}

// ---------------------------------------------------------------- spot_error

export interface SentenceWord {
  text: string
  start: number
  end: number
}

/** Mots cliquables d'une phrase avec leurs positions (début inclus, fin exclue). */
export function sentenceWords(sentence: string): SentenceWord[] {
  const out: SentenceWord[] = []
  const re = /\S+/g
  for (let m = re.exec(sentence); m; m = re.exec(sentence)) {
    out.push({ text: m[0], start: m.index, end: m.index + m[0].length })
  }
  return out
}

/** Positions de toutes les occurrences du fragment fautif dans la phrase. */
export function errorSpans(sentence: string, error: string): Array<[number, number]> {
  const spans: Array<[number, number]> = []
  if (error === '') return spans
  for (let i = sentence.indexOf(error); i !== -1; i = sentence.indexOf(error, i + 1)) {
    spans.push([i, i + error.length])
  }
  return spans
}

/** Le mot cliqué appartient-il au fragment fautif (recouvrement avec une occurrence) ? */
export function isErrorWord(word: SentenceWord, spans: ReadonlyArray<readonly [number, number]>): boolean {
  return spans.some(([s, e]) => word.start < e && word.end > s)
}

// ---------------------------------------------------------------- free

export interface KeywordReport {
  found: string[]
  missing: string[]
}

/** Mots-clés présents (sous-chaîne, après normalisation) ou manquants dans la réponse libre. */
export function findKeywords(answer: string, keywords: readonly string[]): KeywordReport {
  const text = normalizeAnswer(answer)
  const found: string[] = []
  const missing: string[] = []
  for (const k of keywords) {
    const nk = normalizeAnswer(k)
    ;(nk !== '' && text.includes(nk) ? found : missing).push(k)
  }
  return { found, missing }
}

/** Part des mots-clés à retrouver pour compter la rédaction comme réussie. */
export const FREE_PASS_RATIO = 0.6

/** Score 0..1 (1 s'il n'y a aucun mot-clé attendu) et réussite. */
export function freeScore(report: KeywordReport): { score: number; passed: boolean } {
  const total = report.found.length + report.missing.length
  const score = total === 0 ? 1 : report.found.length / total
  return { score, passed: score >= FREE_PASS_RATIO }
}
