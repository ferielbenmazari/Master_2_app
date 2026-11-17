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

  it('texte brut d’un titre : sans markdown, terme remplacé par son libellé', () => {
    expect(plainText('**Glinz** et la [[term-concern|préoccupation]]')).toBe('Glinz et la préoccupation')
    expect(plainText('Le *genre* d’une [[term-nfr]]')).toBe('Le genre d’une nfr')
  })
})
