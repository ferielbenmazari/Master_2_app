/** Serveur MCP `m2-sources` (stdio) : accès filtré aux sources de cours. */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'
import { coverage, listSources, readSource, searchSources, verifyQuoteInFile } from './lib/api.ts'

const ROOT = resolve(fileURLToPath(import.meta.url), '../../..')
const tier = z.enum(['cours', 'annale', 'lecture', 'complement'])
const tiers = tier.array().min(1).optional().describe('Niveaux de confiance ; défaut : ["cours","annale"]. Les fichiers « ignore » ne sont jamais renvoyés.')
const courseId = z.string().regex(/^[a-z0-9]+$/, 'identifiant de matière, ex. rec1').describe('Identifiant de matière (isi1, rec1, inf4, isi5)')

const server = new McpServer({ name: 'm2-sources', version: '1.0.0' })

type Result = { content: { type: 'text'; text: string }[]; isError?: boolean }
function run(fn: () => unknown): Result {
  try {
    return { content: [{ type: 'text', text: JSON.stringify(fn()) }] }
  } catch (e) {
    return { content: [{ type: 'text', text: (e as Error).message }], isError: true }
  }
}

server.registerTool(
  'list_sources',
  { description: 'Liste les sources d\'une matière (par défaut cours + annale).', inputSchema: { courseId, tiers } },
  (a) => run(() => listSources(ROOT, a.courseId, a.tiers)),
)

server.registerTool(
  'search_sources',
  {
    description: 'Recherche plein texte (BM25, FR+EN) dans les passages des sources. Renvoie {file, loc, tier, score, fromLine, toLine, text}. Par défaut cours + annale uniquement.',
    inputSchema: { courseId, query: z.string().min(1).max(300), tiers, k: z.number().int().min(1).max(30).default(8).describe('Nombre de passages (défaut 8)') },
  },
  (a) => run(() => searchSources(ROOT, a.courseId, a.query, a.tiers, a.k)),
)

server.registerTool(
  'read_source',
  {
    description: 'Lit un passage d\'un fichier source, par titre/page (loc) ou par lignes (max 300 lignes).',
    inputSchema: {
      file: z.string().min(1).describe('Chemin relatif au repo (celui renvoyé par list_sources / search_sources)'),
      loc: z.string().min(1).optional().describe('Titre ou « p. N » du passage'),
      fromLine: z.number().int().min(1).optional(),
      toLine: z.number().int().min(1).optional(),
    },
  },
  (a) => run(() => readSource(ROOT, a.file, { ...(a.loc !== undefined ? { loc: a.loc } : {}), ...(a.fromLine !== undefined ? { fromLine: a.fromLine } : {}), ...(a.toLine !== undefined ? { toLine: a.toLine } : {}) })),
)

server.registerTool(
  'verify_quote',
  {
    description: 'Vérifie une citation dans un fichier source (même algorithme que npm run validate:content). Renvoie {found, ratio, loc, bestMatch} ; found = ratio ≥ 0,9.',
    inputSchema: { file: z.string().min(1), quote: z.string().min(1).max(2000) },
  },
  (a) => run(() => verifyQuoteInFile(ROOT, a.file, a.quote)),
)

server.registerTool(
  'coverage',
  { description: 'Couverture des notions (notions.json) par les chapitres : couvert / partiel / absent, avec ce qui manque.', inputSchema: { courseId } },
  (a) => run(() => coverage(ROOT, a.courseId)),
)

await server.connect(new StdioServerTransport())
