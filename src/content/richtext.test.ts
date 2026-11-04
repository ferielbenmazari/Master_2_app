import { describe, expect, it } from 'vitest'
import { findAllTermRefs, parseCloze, parseTermRefs } from './richtext'

describe('parseTermRefs', () => {
  it('découpe texte et références, avec libellé optionnel', () => {
    expect(parseTermRefs('La [[term-internal-validity|validité interne]] et [[term-bias]].')).toEqual([
      { type: 'text', value: 'La ' },
      { type: 'term', termId: 'term-internal-validity', label: 'validité interne' },
      { type: 'text', value: ' et ' },
      { type: 'term', termId: 'term-bias' },
      { type: 'text', value: '.' },
    ])
  })
  it('texte sans référence', () => {
    expect(parseTermRefs('rien')).toEqual([{ type: 'text', value: 'rien' }])
    expect(parseTermRefs('')).toEqual([])
  })
})

describe('findAllTermRefs', () => {
  it('liste les ids dans l’ordre', () => {
    expect(findAllTermRefs('[[term-a]] puis [[term-b|B]] puis [[term-a]]')).toEqual(['term-a', 'term-b', 'term-a'])
    expect(findAllTermRefs('aucun')).toEqual([])
  })
})

describe('parseCloze', () => {
  it('extrait les trous et leurs réponses acceptées', () => {
    expect(parseCloze('Internal validity {{controls|controls for}} extraneous variables.')).toEqual([
      { type: 'text', value: 'Internal validity ' },
      { type: 'gap', answers: ['controls', 'controls for'] },
      { type: 'text', value: ' extraneous variables.' },
    ])
  })
  it('plusieurs trous, aucun trou', () => {
    expect(parseCloze('{{a}} et {{b}}').filter((s) => s.type === 'gap')).toHaveLength(2)
    expect(parseCloze('sans trou').some((s) => s.type === 'gap')).toBe(false)
  })
})
