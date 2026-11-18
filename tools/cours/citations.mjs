#!/usr/bin/env node
// Retrouve les citations DÉJÀ VÉRIFIÉES d'une matière (champs src du contenu existant) pour les réutiliser
// lors d'une refonte, au lieu de recopier des passages à la main (docs/06 §11.4).
// Usage :
//   node tools/cours/citations.mjs <courseId> "<extrait du texte cité>" [--fichier <morceau de nom de fichier>] [--max 10]
// Sortie : une ligne JSON par citation trouvée, prête à coller dans un tableau "src".
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const args = process.argv.slice(2)
const opt = (name) => {
  const i = args.indexOf(name)
  if (i < 0) return undefined
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}
const fileFilter = opt('--fichier')
const max = Number(opt('--max') ?? 10)
const [courseId, needle] = args
if (!courseId || !needle) {
  console.error('Usage : node tools/cours/citations.mjs <courseId> "<extrait>" [--fichier <nom>] [--max 10]')
  process.exit(1)
}
const norm = (s) => s.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ')
const root = join(process.cwd(), 'content', courseId)
if (!existsSync(root)) {
  console.error(`Matière introuvable : ${root}`)
  process.exit(1)
}
const seen = new Set()
const hits = []
function walk(o, where) {
  if (Array.isArray(o)) return o.forEach((v) => walk(v, where))
  if (o && typeof o === 'object') {
    if (typeof o.file === 'string' && typeof o.quote === 'string' && typeof o.loc === 'string') {
      const key = `${o.file}|${o.quote}`
      if (!seen.has(key) && norm(o.quote).includes(norm(needle)) && (!fileFilter || o.file.includes(fileFilter))) {
        seen.add(key)
        hits.push({ ref: { file: o.file, loc: o.loc, quote: o.quote }, where })
      }
    }
    for (const v of Object.values(o)) walk(v, where)
  }
}
function scan(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    if (statSync(p).isDirectory()) scan(p)
    else if (f.endsWith('.json')) walk(JSON.parse(readFileSync(p, 'utf8')), p.slice(process.cwd().length + 1))
  }
}
scan(root)
if (!hits.length) {
  console.error('Aucune citation vérifiée ne contient cet extrait. Cherche le passage dans les sources (MCP m2-sources : search_sources / verify_quote).')
  process.exit(2)
}
for (const h of hits.slice(0, max)) console.log(JSON.stringify(h.ref), ` // ${h.where}`)
if (hits.length > max) console.error(`… ${hits.length - max} autre(s) : affine l'extrait ou --fichier.`)
