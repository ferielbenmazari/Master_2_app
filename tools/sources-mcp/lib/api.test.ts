import { mkdirSync, mkdtempSync, utimesSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { coverage, listSources, readSource, searchSources, verifyQuoteInFile } from './api.ts'
import { verifyQuote } from './quote.ts'
import { readFileSync } from 'node:fs'

const REPO = resolve(fileURLToPath(import.meta.url), '../../../..')
const FILE = 'ressources/S3__REC1/Markdown/5_recmeth_5.md'

describe('REC1 (sources réelles)', () => {
  it('« threats to validity » → passage Validation of results en tête, avec loc', () => {
    const hits = searchSources(REPO, 'rec1', 'threats to validity')
    expect(hits[0]?.loc).toMatch(/VALIDATION OF RESULTS/)
    expect(hits[0]?.file).toBe(FILE)
  })
  it('« internal validity » → Validation of results parmi les deux premiers', () => {
    const hits = searchSources(REPO, 'rec1', 'internal validity', undefined, 3)
    expect(hits.slice(0, 2).map((h) => h.loc).join('|')).toMatch(/VALIDATION OF RESULTS/)
  })
  it('la recherche insensible aux accents et aux mots vides fonctionne (FR)', () => {
    expect(searchSources(REPO, 'isi1', 'exigences « exciter » Kano', undefined, 3).length).toBeGreaterThan(0)
  })
  it('verify_quote donne le même ratio que le validateur', () => {
    const text = readFileSync(join(REPO, FILE), 'utf-8')
    for (const q of ['Reproducibility: Can the conclusions be reproduced/repeated?', 'Reproducibility can the conclusions be reproduced and then some other words']) {
      const v = verifyQuoteInFile(REPO, FILE, q)
      const ref = verifyQuote(text, q)
      expect(v.found).toBe(ref.found)
      expect(v.ratio).toBeCloseTo(ref.ratio, 3)
    }
    expect(verifyQuoteInFile(REPO, FILE, 'Reproducibility: Can the conclusions be reproduced/repeated?').loc).toBe('RESEARCH QUALITY CRITERIA')
  })
  it('read_source par loc et par lignes ; plafonné à 300 lignes', () => {
    expect(readSource(REPO, FILE, { loc: 'research quality criteria' }).text).toContain('Originality')
    expect(readSource(REPO, FILE, { fromLine: 1, toLine: 5 }).text.split('\n')).toHaveLength(5)
    const big = readSource(REPO, 'ressources/S3__REC1/Markdown/2_recmeth_2.md', { fromLine: 1, toLine: 400 })
    expect(big.truncated).toBe(true)
    expect(big.toLine).toBe(300)
  })
  it('refuse les chemins hors périmètre', () => {
    expect(() => readSource(REPO, '../etc/passwd')).toThrow(/refusé/)
    expect(() => readSource(REPO, 'package.json')).toThrow(/refusé/)
  })
  it('coverage rec1 : rapporte les notions du chapitre 05 selon les règles de 06 §3', () => {
    const r = coverage(REPO, 'rec1')
    expect(r.byChapter['05']?.total).toBeGreaterThanOrEqual(12)
    // n-plagiarism (sans flashcard), n-avoid-plagiarism (sans quiz ni flashcard) et n-translation-rules (sans bloc d'histoire) restent partielles (cf. validateur)
    const uncovered = r.notions.filter((n) => n.status !== 'covered').map((n) => n.id)
    for (const id of ['n-avoid-plagiarism', 'n-plagiarism', 'n-translation-rules']) expect(uncovered).toContain(id)
    expect(r.notions.find((n) => n.id === 'n-validity-threats')?.status).toBe('covered')
  })
})

describe('filtrage par niveau (fixture)', () => {
  const root = mkdtempSync(join(tmpdir(), 'm2-sources-'))
  mkdirSync(join(root, 'content', 'tst'), { recursive: true })
  mkdirSync(join(root, 'ressources'), { recursive: true })
  const body = (w: string): string => `## ${w}\n` + Array.from({ length: 50 }, () => w).join(' ')
  for (const n of ['cours', 'annale', 'lecture', 'complement', 'ignore']) writeFileSync(join(root, 'ressources', `${n}.md`), body(`zebra${n}`) + '\nzebra commun\n')
  writeFileSync(
    join(root, 'content', 'tst', 'sources.json'),
    JSON.stringify({
      courseId: 'tst',
      status: 'test',
      sources: ['cours', 'annale', 'lecture', 'complement', 'ignore'].map((t) => ({ file: `ressources/${t}.md`, tier: t, ...(t === 'ignore' ? { reason: 'doublon' } : {}) })),
    }),
  )
  const tiersOf = (tiers?: Parameters<typeof searchSources>[3]): string[] => searchSources(root, 'tst', 'zebra', tiers, 30).map((h) => h.tier).sort()

  it('par défaut : cours + annale seulement', () => expect(tiersOf()).toEqual(['annale', 'cours']))
  it('complement/lecture seulement sur demande', () => expect(tiersOf(['complement', 'lecture'])).toEqual(['complement', 'lecture']))
  it('ignore jamais renvoyé, même demandé', () => {
    expect(tiersOf(['cours', 'annale', 'lecture', 'complement', 'ignore'] as never)).not.toContain('ignore')
    expect(listSources(root, 'tst', ['ignore'])).toEqual([])
    expect(() => readSource(root, 'ressources/ignore.md')).toThrow(/ignore/)
  })
  it('index reconstruit quand un fichier change', () => {
    expect(searchSources(root, 'tst', 'nouveauterme')).toEqual([])
    const f = join(root, 'ressources', 'cours.md')
    writeFileSync(f, body('nouveauterme') + '\n')
    const future = new Date(Date.now() + 5000)
    utimesSync(f, future, future)
    expect(searchSources(root, 'tst', 'nouveauterme')).toHaveLength(1)
  })
})
