import { describe, expect, it } from 'vitest'
import { chunkText, MAX_WORDS, MIN_WORDS } from './chunk.ts'

const words = (n: number, w = 'mot'): string => Array.from({ length: n }, () => w).join(' ')
const wc = (s: string): number => s.split(/\s+/).filter(Boolean).length

describe('chunkText', () => {
  it('découpe un Markdown de slides par titres, avec loc et lignes', () => {
    const md = ['# Titre du cours', '', words(45), '', '---', '', '## Premier sujet', words(50), '', '---', '## Second sujet', words(60)].join('\n')
    const ps = chunkText(md, 'a.md', 'cours')
    expect(ps.map((p) => p.loc)).toEqual(['Titre du cours', 'Premier sujet', 'Second sujet'])
    expect(ps[1]).toMatchObject({ fromLine: 7, toLine: 10, tier: 'cours', file: 'a.md' })
    expect(ps[2]?.toLine).toBe(12)
  })

  it('préfixe « Slide N » par le titre parent', () => {
    const md = ['## Kano', '### Slide 1', words(45), '### Slide 2', words(45)].join('\n')
    const ps = chunkText(md, 'a.md', 'cours')
    expect(ps.map((p) => p.loc)).toEqual(['Kano › Slide 1', 'Kano › Slide 2'])
  })

  it('découpe un texte pdftotext par sauts de page \\f', () => {
    const txt = [words(50), 'suite page 1', '\f' + words(50), '\f' + words(50)].join('\n')
    const ps = chunkText(txt, 'a.txt', 'cours')
    expect(ps.map((p) => p.loc)).toEqual(['p. 1', 'p. 2', 'p. 3'])
    expect(ps[1]?.text.includes('\f')).toBe(false)
    expect(ps[1]?.fromLine).toBe(3)
  })

  it('découpe sur les marqueurs <!-- Page N -->', () => {
    const txt = ['<!-- Page 4 -->', words(45), '<!-- Page 5 -->', words(45)].join('\n')
    expect(chunkText(txt, 'a.md', 'cours').map((p) => p.loc)).toEqual(['p. 4', 'p. 5'])
  })

  it('fusionne les passages trop courts avec le suivant et garde le titre', () => {
    const md = ['## Court', 'trois petits mots', '## Long', words(60)].join('\n')
    const ps = chunkText(md, 'a.md', 'cours')
    expect(ps).toHaveLength(1)
    expect(ps[0]?.loc).toBe('Court')
    expect(ps[0]?.text).toContain('Long')
  })

  it('découpe les sections de plus de 400 mots', () => {
    const md = ['## Énorme', ...Array.from({ length: 30 }, () => words(40))].join('\n')
    const ps = chunkText(md, 'a.md', 'cours')
    expect(ps.length).toBeGreaterThan(1)
    for (const p of ps) {
      expect(wc(p.text)).toBeLessThanOrEqual(MAX_WORDS)
      expect(wc(p.text)).toBeGreaterThanOrEqual(MIN_WORDS)
    }
    expect(ps[1]?.loc).toBe('Énorme (suite)')
    // couverture sans trou ni chevauchement
    for (let i = 1; i < ps.length; i++) expect(ps[i]!.fromLine).toBe(ps[i - 1]!.toLine + 1)
  })
})
