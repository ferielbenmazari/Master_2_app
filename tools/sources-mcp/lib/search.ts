/** BM25 maison (sans dépendance), tokenisation insensible aux accents, FR + EN. Index mis en cache dans .cache/. */
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { SourceTier } from '../../../src/content/schema.ts'
import { chunkText, type Passage } from './chunk.ts'
import { DEFAULT_TIERS, resolveSources } from './manifest.ts'
import { normalize } from './quote.ts'

const STOPWORDS = new Set(
  (
    'a an and are as at be by for from has have in is it its of on or that the this to was were with which who ' +
    'le la les un une des du de d l et ou en au aux ce ces se sa son ses sur par pour dans est sont qui que qu ne pas plus ' +
    'il elle ils elles on nous vous leur leurs avec sans comme mais donc car si y'
  ).split(' '),
)

export function tokenize(text: string): string[] {
  return normalize(text)
    .split(' ')
    .filter((w) => w.length > 0 && !STOPWORDS.has(w))
    .map((w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w))
}

interface IndexedPassage extends Passage {
  tf: Record<string, number>
  len: number
}

export interface SourceIndex {
  version: number
  courseId: string
  stamps: Record<string, number>
  passages: IndexedPassage[]
}

const VERSION = 1

function mtime(root: string, file: string): number {
  try {
    return statSync(join(root, file)).mtimeMs
  } catch {
    return 0
  }
}

function stampsFor(root: string, courseId: string): Record<string, number> {
  const stamps: Record<string, number> = { [`content/${courseId}/sources.json`]: mtime(root, `content/${courseId}/sources.json`) }
  for (const s of resolveSources(root, courseId)) if (s.available) stamps[s.file] = mtime(root, s.file)
  return stamps
}

function sameStamps(a: Record<string, number>, b: Record<string, number>): boolean {
  const ka = Object.keys(a)
  return ka.length === Object.keys(b).length && ka.every((k) => a[k] === b[k])
}

export function buildIndex(root: string, courseId: string): SourceIndex {
  const passages: IndexedPassage[] = []
  const seen = new Set<string>()
  for (const s of resolveSources(root, courseId)) {
    if (!s.available || seen.has(s.file)) continue
    seen.add(s.file)
    const text = readFileSync(join(root, s.file), 'utf-8')
    for (const p of chunkText(text, s.file, s.tier)) {
      const toks = tokenize(`${p.loc} ${p.text}`)
      const tf: Record<string, number> = {}
      for (const t of toks) tf[t] = (tf[t] ?? 0) + 1
      passages.push({ ...p, tf, len: toks.length })
    }
  }
  return { version: VERSION, courseId, stamps: stampsFor(root, courseId), passages }
}

/** Charge l'index depuis .cache/ s'il est à jour (mtime), sinon le reconstruit et l'écrit. */
export function getIndex(root: string, courseId: string, opts: { force?: boolean } = {}): SourceIndex {
  const cacheFile = join(root, '.cache', `sources-index-${courseId}.json`)
  if (!opts.force) {
    try {
      const cached = JSON.parse(readFileSync(cacheFile, 'utf-8')) as SourceIndex
      if (cached.version === VERSION && sameStamps(cached.stamps, stampsFor(root, courseId))) return cached
    } catch {
      /* pas de cache exploitable */
    }
  }
  const index = buildIndex(root, courseId)
  try {
    mkdirSync(join(root, '.cache'), { recursive: true })
    writeFileSync(cacheFile, JSON.stringify(index))
  } catch {
    /* cache non critique */
  }
  return index
}

export interface SearchHit {
  file: string
  loc: string
  tier: SourceTier
  score: number
  fromLine: number
  toLine: number
  text: string
}

const K1 = 1.2
const B = 0.75

export function searchIndex(index: SourceIndex, query: string, tiers: SourceTier[] = DEFAULT_TIERS, k = 8): SearchHit[] {
  const allowed = new Set<SourceTier>(tiers.filter((t) => t !== 'ignore'))
  const qTerms = [...new Set(tokenize(query))]
  if (qTerms.length === 0) return []
  const docs = index.passages.filter((p) => allowed.has(p.tier))
  if (docs.length === 0) return []
  const avg = docs.reduce((s, d) => s + d.len, 0) / docs.length || 1
  const df = new Map<string, number>()
  for (const d of docs) for (const t of qTerms) if (d.tf[t]) df.set(t, (df.get(t) ?? 0) + 1)
  const scored: SearchHit[] = []
  for (const d of docs) {
    let score = 0
    for (const t of qTerms) {
      const f = d.tf[t]
      if (!f) continue
      const n = df.get(t) ?? 0
      const idf = Math.log(1 + (docs.length - n + 0.5) / (n + 0.5))
      score += (idf * (f * (K1 + 1))) / (f + K1 * (1 - B + (B * d.len) / avg))
    }
    if (score > 0) scored.push({ file: d.file, loc: d.loc, tier: d.tier, score: Math.round(score * 1000) / 1000, fromLine: d.fromLine, toLine: d.toLine, text: d.text })
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, k)
}
