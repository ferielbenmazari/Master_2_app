import type { StoryBlock } from '@/content/schema'
import { anchorFromParam, buildToc, plainText, tocAnchor, tocParam } from './toc'

const L = (s: string) => ({ fr: s, en: `${s} (en)` })

describe('sommaire d’un chapitre (T27)', () => {
  const story: StoryBlock[] = [
    { type: 'subheading', text: L('Avant tout titre') },
    { type: 'heading', text: L('1. Typologie') },
    { type: 'paragraph', text: L('x'), explain: true },
    { type: 'subheading', text: L('1.1 Attribut qualité') },
    { type: 'subheading', text: L('1.2 ISO') },
    { type: 'heading', text: L('2. Distinguer') },
    { type: 'checkpoint', quizId: 'q' },
  ]

  it('une partie par titre, ses sous-titres en sous-parties ; sous-titre orphelin ignoré', () => {
    const toc = buildToc(story)
    expect(toc.map((p) => p.n)).toEqual([1, 2])
    expect(toc[0]!.subs.map((s) => [s.m, s.text.fr])).toEqual([
      [1, '1.1 Attribut qualité'],
      [2, '1.2 ISO'],
    ])
    expect(toc[1]!.subs).toEqual([])
  })

  it('ancres et paramètre ?partie=', () => {
    expect(tocAnchor(3)).toBe('partie-3')
    expect(tocAnchor(3, 2)).toBe('partie-3-2')
    expect(tocParam(3)).toBe('3')
    expect(tocParam(3, 2)).toBe('3.2')
    expect(anchorFromParam('3')).toBe('partie-3')
    expect(anchorFromParam('3.2')).toBe('partie-3-2')
    expect(anchorFromParam(null)).toBeNull()
    expect(anchorFromParam('abc')).toBeNull()
  })

  it('3ᵉ niveau (T28) : `level: 3` rattaché à la dernière sous-partie ; sans sous-partie, il en devient une', () => {
    const toc = buildToc([
      { type: 'heading', text: L('1. Kano') },
      { type: 'subheading', text: L('1.1 Catégories') },
      { type: 'subheading', text: L('1.1.1 Dissatisfier'), level: 3 },
      { type: 'subheading', text: L('1.1.2 Satisfier'), level: 3 },
      { type: 'subheading', text: L('1.2 Évolution') },
      { type: 'heading', text: L('2. Techniques') },
      { type: 'subheading', text: L('Niveau 3 orphelin'), level: 3 },
    ])
    expect(toc[0]!.subs.map((s) => [s.m, s.subs.map((x) => [x.k, x.text.fr])])).toEqual([
      [1, [[1, '1.1.1 Dissatisfier'], [2, '1.1.2 Satisfier']]],
      [2, []],
    ])
    expect(toc[1]!.subs.map((s) => [s.m, s.text.fr, s.subs.length])).toEqual([[1, 'Niveau 3 orphelin', 0]])
  })

  it('ancres et paramètre ?partie= de 3ᵉ niveau', () => {
    expect(tocAnchor(3, 2, 1)).toBe('partie-3-2-1')
    expect(tocParam(3, 2, 1)).toBe('3.2.1')
    expect(anchorFromParam('3.2.1')).toBe('partie-3-2-1')
    expect(anchorFromParam('3.2.1.4')).toBeNull()
  })

  it('texte brut d’un titre : sans markdown, terme remplacé par son libellé', () => {
    expect(plainText('**Glinz** et la [[term-concern|préoccupation]]')).toBe('Glinz et la préoccupation')
    expect(plainText('Le *genre* d’une [[term-nfr]]')).toBe('Le genre d’une nfr')
  })
})
