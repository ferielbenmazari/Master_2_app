/** Opérations communes au serveur MCP et au CLI. Toutes renvoient des objets JSON compacts ; les erreurs sont des `Error` lisibles. */
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'
import { ChapterSchema, NotionsSchema, type Chapter, type SourceTier } from '../../../src/content/schema.ts'
import { chunkText } from './chunk.ts'
import { computeCoverage, type CoverageReport } from './coverage.ts'
import { DEFAULT_TIERS, ignoredFiles, resolveSources } from './manifest.ts'
import { getIndex, searchIndex, type SearchHit } from './search.ts'
import { normalize, quoteRatio, verifyQuote } from './quote.ts'

export const MAX_READ_LINES = 300

export function listSources(root: string, courseId: string, tiers: SourceTier[] = DEFAULT_TIERS) {
  const allowed = new Set(tiers)
  return resolveSources(root, courseId)
    .filter((s) => allowed.has(s.tier) && s.tier !== 'ignore')
    .map((s) => ({ file: s.file, tier: s.tier, title: s.title, chapters: s.chapters, available: s.available }))
}

export function searchSources(root: string, courseId: string, query: string, tiers: SourceTier[] = DEFAULT_TIERS, k = 8): SearchHit[] {
  return searchIndex(getIndex(root, courseId), query, tiers, k)
}

/** Résout un chemin demandé : dans le repo, sous ressources/, sources-texte/ ou content/, jamais un fichier « ignore ». */
function safePath(root: string, file: string): string {
  const abs = resolve(root, file)
  const rel = relative(root, abs)
  const top = rel.split(sep)[0]
  if (rel.startsWith('..') || !['ressources', 'sources-texte', 'content'].includes(top ?? '')) {
    throw new Error(`Chemin refusé : ${file} (autorisé : ressources/, sources-texte/, content/)`)
  }
  if (ignoredFiles(root).has(rel.split(sep).join('/'))) throw new Error(`Fichier classé « ignore » dans sources.json : ${file}`)
  if (!existsSync(abs)) throw new Error(`Fichier introuvable : ${file}. Fichiers texte disponibles : voir list_sources`)
  return abs
}

export interface ReadResult {
  file: string
  fromLine: number
  toLine: number
  totalLines: number
  loc?: string
  truncated: boolean
  text: string
}

export function readSource(root: string, file: string, sel: { loc?: string; fromLine?: number; toLine?: number } = {}): ReadResult {
  const abs = safePath(root, file)
  const content = readFileSync(abs, 'utf-8')
  const lines = content.split('\n')
  let from = sel.fromLine ?? 1
  let to = sel.toLine ?? from + MAX_READ_LINES - 1
  let loc: string | undefined
  if (sel.loc !== undefined) {
    const passages = chunkText(content, file, 'cours')
    const want = normalize(sel.loc)
    const hit = passages.find((p) => normalize(p.loc) === want) ?? passages.find((p) => normalize(p.loc).includes(want))
    if (!hit) throw new Error(`Passage « ${sel.loc} » introuvable dans ${file}. Passages : ${passages.slice(0, 12).map((p) => p.loc).join(' | ')}`)
    from = hit.fromLine
    to = hit.toLine
    loc = hit.loc
  }
  if (from < 1) from = 1
  if (to < from) throw new Error(`Plage invalide : ${from}-${to}`)
  if (from > lines.length) throw new Error(`Le fichier ${file} n'a que ${lines.length} lignes`)
  const truncated = to - from + 1 > MAX_READ_LINES
  if (truncated) to = from + MAX_READ_LINES - 1
  to = Math.min(to, lines.length)
  return { file, fromLine: from, toLine: to, totalLines: lines.length, ...(loc ? { loc } : {}), truncated, text: lines.slice(from - 1, to).join('\n') }
}

export interface VerifyResult {
  found: boolean
  ratio: number
  /** localisation et extrait du passage qui contient le mieux la citation */
  loc: string | null
  bestMatch: string | null
}

/** Même algorithme et même seuil que le validateur (quote.ts) sur le fichier entier ; le passage est donné à titre d'aide. */
export function verifyQuoteInFile(root: string, file: string, quote: string): VerifyResult {
  const abs = safePath(root, file)
  const content = readFileSync(abs, 'utf-8')
  const { ratio, found } = verifyQuote(content, quote)
  let best: { loc: string; text: string; r: number } | null = null
  for (const p of chunkText(content, file, 'cours')) {
    const r = quoteRatio(p.text, quote)
    if (!best || r > best.r) best = { loc: p.loc, text: p.text, r }
    if (r >= 1) break
  }
  return {
    found,
    ratio: Math.round(ratio * 1000) / 1000,
    loc: best && best.r > 0 ? best.loc : null,
    bestMatch: best && best.r > 0 ? best.text.replace(/\s+/g, ' ').slice(0, 240) : null,
  }
}

export function coverage(root: string, courseId: string): CoverageReport & { warnings: string[] } {
  const dir = join(root, 'content', courseId)
  const notionsPath = join(dir, 'notions.json')
  if (!existsSync(notionsPath)) throw new Error(`content/${courseId}/notions.json absent : la couverture se calcule à partir de la carte des notions`)
  const parsed = NotionsSchema.safeParse(JSON.parse(readFileSync(notionsPath, 'utf-8')))
  if (!parsed.success) throw new Error(`content/${courseId}/notions.json invalide : ${parsed.error.issues[0]?.message}`)
  const warnings: string[] = []
  const chapters: Chapter[] = []
  const chDir = join(dir, 'chapters')
  const files = existsSync(chDir) ? readdirSync(chDir).filter((f) => f.endsWith('.json')).sort() : []
  for (const f of files) {
    const r = ChapterSchema.safeParse(JSON.parse(readFileSync(join(chDir, f), 'utf-8')))
    if (r.success) chapters.push(r.data)
    else warnings.push(`${f} ignoré : schéma invalide (lancer npm run validate:content)`)
  }
  return { ...computeCoverage(parsed.data, chapters), warnings }
}
