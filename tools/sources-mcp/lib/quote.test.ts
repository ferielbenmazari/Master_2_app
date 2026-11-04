// @vitest-environment node
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { normalize, quoteRatio, quoteWordCount, readSourceFile, verifyQuote } from './quote.ts'

const here = dirname(fileURLToPath(import.meta.url))
const reference = resolve(here, '../reference')

const TEXT =
  '## Research QUALITY criteria\n- **Originality:** Are the RQ/conclusions novel? Never reached before?\n' +
  '- **Validity:** Are the conclusions right?\n- **Reproducibility:** Can the conclusions be reproduced/repeated?\n' +
  "L'œuvre de l’étudiant : validité interne — contrôle des variables parasites, élimination des explications alternatives.\n" +
  'Internal validity: How well the study is conducted (controls extraneous variables, eliminates alternative explanations).'

const CASES: { name: string; text: string; quote: string }[] = [
  { name: 'exacte', text: TEXT, quote: 'Are the conclusions right?' },
  { name: 'casse et markdown', text: TEXT, quote: 'ORIGINALITY: are the rq/conclusions novel' },
  { name: 'accents et ligature', text: TEXT, quote: "l'oeuvre de l'etudiant: validite interne" },
  { name: 'vide', text: TEXT, quote: '   ' },
  { name: 'ponctuation seule', text: TEXT, quote: '*** --- ###' },
  { name: '1 mot changé sur 8', text: TEXT, quote: 'Internal validity: How well the study is performed (controls extraneous variables)' },
  { name: '2 mots changés', text: TEXT, quote: 'Internal validity: How badly the study is performed (controls extraneous variables)' },
  { name: 'inversion', text: TEXT, quote: 'extraneous variables controls eliminates alternative explanations' },
  { name: 'mot en trop', text: TEXT, quote: 'Can the very many conclusions be reproduced/repeated?' },
  { name: 'totalement absente', text: TEXT, quote: 'The quick brown fox jumps over the lazy dog' },
  { name: 'texte vide', text: '', quote: 'something quite different here' },
  { name: 'citation plus longue que le texte', text: 'one two three', quote: 'one two three four five six' },
  { name: 'coupure de ligne PDF', text: 'the study is\nconducted with\ncontrols on extraneous\nvariables', quote: 'the study is conducted with controls on extraneous variables' },
  { name: 'répétitions', text: 'a b a b a b a b c d', quote: 'a b c d a b' },
]

function pythonRatios(): number[] {
  const code =
    "import sys,json; sys.path.insert(0,sys.argv[1]); import verify_quote as v;" +
    "print(json.dumps([v.check(c['text'],c['quote']) for c in json.load(sys.stdin)]))"
  const r = spawnSync('python3', ['-I', '-c', code, reference], { input: JSON.stringify(CASES), encoding: 'utf-8', env: { ...process.env, PYTHONDONTWRITEBYTECODE: '1' } })
  // -I retire le dossier courant ET le dossier du script du chemin : on l'ajoute explicitement via argv[1].
  if (r.status !== 0) throw new Error(`python3 a échoué : ${r.stderr}`)
  return JSON.parse(r.stdout) as number[]
}

describe('verifyQuote ≡ verify_quote.py', () => {
  const expected = pythonRatios()

  it.each(CASES.map((c, i) => [c.name, i] as const))('ratio identique : %s', (_name, i) => {
    const c = CASES[i]!
    expect(quoteRatio(c.text, c.quote)).toBe(expected[i])
  })

  it('couvre au moins 10 cas et des ratios variés', () => {
    expect(CASES.length).toBeGreaterThanOrEqual(10)
    expect(new Set(expected).size).toBeGreaterThan(4)
  })

  it('found suit le seuil de 0.9', () => {
    expect(verifyQuote(TEXT, 'Are the conclusions right?')).toEqual({ ratio: 1, found: true })
    expect(verifyQuote(TEXT, 'The quick brown fox jumps over the lazy dog').found).toBe(false)
  })
})

describe('citation altérée', () => {
  const quote = 'Internal validity: How well the study is conducted (controls extraneous variables, eliminates alternative explanations)'
  it('passe si un seul mot change (≥ 90 %)', () => {
    expect(verifyQuote(TEXT, quote.replace('conducted', 'performed')).found).toBe(true)
  })
  it('échoue si au moins 2 mots changent', () => {
    const altered = quote.replace('conducted', 'performed').replace('well', 'badly')
    // 15 mots, 2 changés → 13/15 = 0.867
    expect(verifyQuote(TEXT, altered).found).toBe(false)
  })
})

describe('normalize', () => {
  it('retire accents, ligatures, ponctuation et markdown', () => {
    expect(normalize('**Œuvre** d’été — `x_y`')).toBe('oeuvre d ete x y')
  })
  it('compte les mots', () => {
    expect(quoteWordCount(' a  b\nc ')).toBe(3)
  })
})

describe('readSourceFile', () => {
  it('lit et met en cache, null si absent', () => {
    const a = readSourceFile(resolve(here, '../../..'), 'package.json')
    expect(a).toContain('revision-m2')
    expect(readSourceFile(resolve(here, '../../..'), 'package.json')).toBe(a)
    expect(readSourceFile(resolve(here, '../../..'), 'nope.md')).toBeNull()
  })
})
