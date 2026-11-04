/** CLI de secours : npm run sources -- <index|search|read|verify|coverage> … (même lib que le serveur MCP). */
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SourceTierSchema, type SourceTier } from '../../src/content/schema.ts'
import { coverage, listSources, readSource, searchSources, verifyQuoteInFile } from './lib/api.ts'
import { listCourseIds } from './lib/manifest.ts'
import { getIndex } from './lib/search.ts'

const ROOT = resolve(fileURLToPath(import.meta.url), '../../..')
const USAGE = `Usage :
  npm run sources -- index <courseId>
  npm run sources -- list <courseId> [--tiers cours,annale,...]
  npm run sources -- search <courseId> "<requête>" [--tiers cours,lecture] [-k 8]
  npm run sources -- read <file> [fromLine toLine | --loc "<titre>"]
  npm run sources -- verify <file> "<citation>"
  npm run sources -- coverage <courseId>`

function flag(args: string[], name: string): string | undefined {
  const i = args.indexOf(name)
  if (i < 0) return undefined
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}

function parseTiers(v: string | undefined): SourceTier[] | undefined {
  if (v === undefined) return undefined
  return v.split(',').map((t) => SourceTierSchema.parse(t.trim()))
}

function main(argv: string[]): void {
  const [cmd, ...rest] = argv
  const args = [...rest]
  switch (cmd) {
    case 'index': {
      const id = args[0]
      if (!id) throw new Error(`courseId manquant. Matières : ${listCourseIds(ROOT).join(', ')}`)
      const idx = getIndex(ROOT, id, { force: true })
      const files = new Set(idx.passages.map((p) => p.file))
      console.log(`✔ index ${id} : ${idx.passages.length} passages, ${files.size} fichiers → .cache/sources-index-${id}.json`)
      const missing = listSources(ROOT, id, ['cours', 'annale', 'lecture', 'complement']).filter((s) => !s.available)
      if (missing.length > 0) console.log(`⚠ ${missing.length} source(s) sans texte lisible (extraction à faire) : ${missing.slice(0, 5).map((m) => m.file).join(', ')}${missing.length > 5 ? ', …' : ''}`)
      return
    }
    case 'list': {
      const tiers = parseTiers(flag(args, '--tiers'))
      const id = args[0]
      if (!id) throw new Error('courseId manquant')
      for (const s of listSources(ROOT, id, tiers)) console.log(`${s.available ? ' ' : '✗'} [${s.tier}] ${s.file}${s.title ? ` — ${s.title}` : ''}`)
      return
    }
    case 'search': {
      const tiers = parseTiers(flag(args, '--tiers'))
      const k = Number(flag(args, '-k') ?? 8)
      const [id, query] = args
      if (!id || !query) throw new Error('usage : search <courseId> "<requête>"')
      const hits = searchSources(ROOT, id, query, tiers, k)
      if (hits.length === 0) console.log('Aucun résultat.')
      hits.forEach((h, i) => {
        console.log(`#${i + 1} [${h.score}] ${h.tier} · ${h.file} · ${h.loc} (l. ${h.fromLine}-${h.toLine})`)
        console.log(`    ${h.text.replace(/\s+/g, ' ').slice(0, 220)}`)
      })
      return
    }
    case 'read': {
      const loc = flag(args, '--loc')
      const [file, a, b] = args
      if (!file) throw new Error('usage : read <file> [fromLine toLine | --loc "<titre>"]')
      const r = readSource(ROOT, file, { ...(loc !== undefined ? { loc } : {}), ...(a ? { fromLine: Number(a) } : {}), ...(b ? { toLine: Number(b) } : {}) })
      console.log(`# ${r.file} l. ${r.fromLine}-${r.toLine}/${r.totalLines}${r.loc ? ` (${r.loc})` : ''}${r.truncated ? ' [tronqué à 300 lignes]' : ''}`)
      console.log(r.text)
      return
    }
    case 'verify': {
      const [file, quote] = args
      if (!file || !quote) throw new Error('usage : verify <file> "<citation>"')
      const r = verifyQuoteInFile(ROOT, file, quote)
      console.log(`${r.found ? '✔ trouvée' : '✘ introuvable'} (ratio ${r.ratio.toFixed(2)})${r.loc ? ` · ${r.loc}` : ''}`)
      if (r.bestMatch) console.log(`  ${r.bestMatch}`)
      process.exitCode = r.found ? 0 : 1
      return
    }
    case 'coverage': {
      const id = args[0]
      if (!id) throw new Error('courseId manquant')
      const r = coverage(ROOT, id)
      const icon = { covered: '✔', partial: '◐', absent: '✘' } as const
      for (const [ch, s] of Object.entries(r.byChapter).sort()) {
        console.log(`Chapitre ${ch} : ${s.covered}/${s.total} notions couvertes (${s.partial} partielles, ${s.absent} absentes)`)
        for (const n of r.notions.filter((x) => x.chapter === ch)) {
          console.log(`  ${icon[n.status]} ${'★'.repeat(n.importance).padEnd(3)} ${n.id} — ${n.status === 'covered' ? 'couverte' : `${n.status === 'partial' ? 'partielle' : 'absente'} : manque ${n.missing.join(', ')}`}${n.chapterWritten ? '' : ' (chapitre non écrit)'}`)
        }
      }
      console.log(`Total ${id} : ${r.total.covered}/${r.total.total} notions couvertes`)
      for (const w of r.warnings) console.log(`⚠ ${w}`)
      return
    }
    default:
      console.log(USAGE)
      process.exitCode = cmd ? 1 : 0
  }
}

try {
  main(process.argv.slice(2))
} catch (e) {
  console.error(`Erreur : ${(e as Error).message}`)
  process.exitCode = 1
}
