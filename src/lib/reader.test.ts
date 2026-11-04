import type { StoryBlock } from '@/content/schema'
import { layoutFor, scrollRatio, splitEpisodes } from './reader'

const l = { fr: 'a', en: 'b' }
const h: StoryBlock = { type: 'heading', text: l }
const p: StoryBlock = { type: 'paragraph', text: l }

describe('layoutFor', () => {
  it('3 modes × largeur', () => {
    expect(layoutFor('fr', true)).toBe('fr')
    expect(layoutFor('en', false)).toBe('en')
    expect(layoutFor('both', true)).toBe('columns')
    expect(layoutFor('both', false)).toBe('stack')
  })
})

describe('splitEpisodes', () => {
  it('un heading ouvre un épisode ; introduction avant le premier', () => {
    const { episodes, total } = splitEpisodes([p, h, p, p, h, p])
    expect(total).toBe(2)
    expect(episodes.map((e) => [e.n, e.blocks.length, e.heading !== null])).toEqual([
      [0, 1, false],
      [1, 2, true],
      [2, 1, true],
    ])
  })
  it('pas de heading → aucune numérotation', () => {
    expect(splitEpisodes([p, p])).toMatchObject({ total: 0, episodes: [{ n: 0 }] })
    expect(splitEpisodes([])).toEqual({ episodes: [], total: 0 })
  })
})

describe('scrollRatio', () => {
  it('borné entre 0 et 1', () => {
    expect(scrollRatio(0, 2000, 1000)).toBe(0)
    expect(scrollRatio(500, 2000, 1000)).toBe(0.5)
    expect(scrollRatio(5000, 2000, 1000)).toBe(1)
    expect(scrollRatio(0, 500, 1000)).toBe(1)
  })
})
