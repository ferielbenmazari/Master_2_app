#!/usr/bin/env node
// Capture à l'écran (largeur téléphone) chaque schéma des chapitres demandés, pour vérifier qu'ils
// s'affichent et restent lisibles (docs/06 §11.3).
// Pré-requis : un build servi sur un port libre, PAS un second serveur de dev :
//   npm run build && npx vite preview --port 4179 --strictPort   (en arrière-plan)
// Usage :
//   node tools/cours/capture-schemas.mjs <courseId> <chapterId…> [--url http://localhost:4179] [--out <dossier>]
// Sortie : une image par schéma ; la liste des schémas en erreur (« n'a pas pu être affiché »).
import { createRequire } from 'node:module'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const args = process.argv.slice(2)
const opt = (name, def) => {
  const i = args.indexOf(name)
  if (i < 0) return def
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}
const base = opt('--url', 'http://localhost:4179')
const out = opt('--out', join(tmpdir(), 'captures-schemas'))
const [courseId, ...chapterIds] = args
if (!courseId || !chapterIds.length) {
  console.error('Usage : node tools/cours/capture-schemas.mjs <courseId> <chapterId…> [--url …] [--out …]')
  process.exit(1)
}
mkdirSync(out, { recursive: true })
const req = createRequire(join(process.cwd(), 'package.json'))
const { chromium } = req('@playwright/test')

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const failed = []
page.on('console', (m) => {
  if (m.type() === 'error') failed.push(`console : ${m.text().slice(0, 200)}`)
})
await page.goto(base + '/')
await page.waitForTimeout(1000)
const dialog = page.getByRole('dialog', { name: 'Choisis ton pseudo' })
if (await dialog.count()) {
  await dialog.getByLabel('Pseudo').fill('Capture')
  await dialog.getByRole('button', { name: 'C’est parti' }).click()
  await page.waitForTimeout(500)
}
let total = 0
for (const ch of chapterIds) {
  await page.goto(`${base}/#/matiere/${courseId}/chapitre/${ch}/lire`)
  await page.waitForTimeout(2000)
  const figs = page.locator('.diagram-fig')
  const n = await figs.count()
  for (let i = 0; i < n; i++) {
    const el = figs.nth(i)
    await el.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2500)
    const txt = await el.innerText()
    if (/n.a pas pu être affiché/i.test(txt)) failed.push(`${ch} schéma ${i} : non affiché`)
    const file = join(out, `${ch}-${i}.png`)
    await el.screenshot({ path: file })
    total++
  }
  console.log(`${ch} : ${n} schéma(s)`)
}
await browser.close()
console.log(`${total} capture(s) dans ${out}`)
if (failed.length) {
  console.log('PROBLÈMES :\n' + failed.join('\n'))
  process.exit(3)
}
