/**
 * Répare le texte abîmé par l'extraction PDF des supports ISI1 :
 *  - « ti » rendu par `=` ou `M` entre deux lettres minuscules (`Introduc=on`, `informaMon`) ;
 *  - ligatures ﬁ ﬂ ﬀ ﬃ ﬄ (→ fi fl ff ffi ffl).
 * Heuristique volontairement étroite : on ne touche ni aux `=` de formules (`a = b`, `x=1`, `ID=51`)
 * ni aux `M` majuscules d'acronymes ou de noms propres. Les mots de EXCEPTIONS restent intacts.
 *
 * CLI : `tsx scripts/repair-pdf-text.ts [--write] [fichier...]`
 *  - sans `--write` : dry-run (compte les remplacements, affiche des exemples) ;
 *  - `.json` : seuls les champs `"quote"` sont réparés ; autre fichier : texte entier ;
 *  - sans fichier : sources-texte/isi1/*.md + content/isi1/chapters/*.json + content/isi1/notions.json.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const LIGATURES: Record<string, string> = { 'ﬃ': 'ffi', 'ﬄ': 'ffl', 'ﬀ': 'ff', 'ﬁ': 'fi', 'ﬂ': 'fl' }

/** Mots où un `M` (ou `=`) entre minuscules est réel. */
export const EXCEPTIONS: ReadonlySet<string> = new Set(['OptiMix', 'OptiMIx', 'DeMarco'])

const WORD = /[\p{L}=]+/gu

function repairWord(word: string): string {
  if (EXCEPTIONS.has(word)) return word
  // `a=b` : formule à une lettre de chaque côté, jamais un « ti » cassé
  if (/^\p{L}=\p{L}$/u.test(word)) return word
  return (
    word
      // « Répar==on » → « Répartition » (deux « ti » collés)
      .replace(/(?<=\p{Ll})==(?=\p{Ll})/gu, 'titi')
      // `=` entre une lettre (même majuscule initiale : « U=lisateurs ») et une minuscule
      .replace(/(?<=\p{L})=(?=\p{Ll})/gu, 'ti')
      .replace(/(?<=\p{Ll})M(?=\p{Ll})/gu, 'ti')
      // « UMlisaMon » : le « t » initial a lui aussi été remplacé
      .replace(/^UM(?=l)/u, 'Uti')
  )
}

/** Fonction pure : répare un texte (ligatures puis `ti`). */
export function repairPdfText(text: string): string {
  const unligatured = text.replace(/[ﬀ-ﬄ]/g, (c) => LIGATURES[c] ?? c)
  return unligatured.replace(WORD, repairWord)
}

const QUOTE_FIELD = /("quote"\s*:\s*")((?:[^"\\]|\\.)*)(")/g

/** Répare uniquement les valeurs des champs `"quote"` d'un JSON (mise en forme du fichier préservée). */
export function repairJsonQuotes(json: string): string {
  return json.replace(QUOTE_FIELD, (_m, open: string, value: string, close: string) => open + repairPdfText(value) + close)
}

/** Nombre de caractères modifiés entre deux textes de même structure (approximation pour le rapport). */
export function countRepairs(before: string, after: string): number {
  const a = before.match(WORD) ?? []
  const b = after.match(WORD) ?? []
  let n = 0
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) n++
  return n
}

function defaultTargets(root: string): string[] {
  const list = (dir: string, ext: string): string[] =>
    existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(ext)).sort().map((f) => join(dir, f)) : []
  return [
    ...list(join(root, 'sources-texte/isi1'), '.md'),
    ...list(join(root, 'content/isi1/chapters'), '.json'),
    join(root, 'content/isi1/notions.json'),
  ]
}

function main(): void {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
  const args = process.argv.slice(2)
  const write = args.includes('--write')
  const given = args.filter((a) => !a.startsWith('--')).map((a) => resolve(a))
  const files = given.length > 0 ? given : defaultTargets(root)
  let total = 0
  for (const file of files) {
    const before = readFileSync(file, 'utf8')
    const after = file.endsWith('.json') ? repairJsonQuotes(before) : repairPdfText(before)
    if (before === after) continue
    const n = countRepairs(before, after)
    total += n
    console.log(`${write ? 'réparé ' : 'à réparer'} ${file.replace(root + '/', '')} : ${n} mots`)
    if (write) writeFileSync(file, after)
  }
  console.log(`${total} mots ${write ? 'réparés' : 'à réparer (dry-run, ajouter --write)'}`)
}

if (process.argv[1] !== undefined && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main()
