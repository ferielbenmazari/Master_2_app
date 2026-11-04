import { hashSeed, shuffle } from './shuffle'

describe('shuffle', () => {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  it('est stable pour une même graine et ne modifie pas l’entrée', () => {
    expect(shuffle(base, 42)).toEqual(shuffle(base, 42))
    expect(base).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('conserve les éléments et varie selon la graine', () => {
    expect([...shuffle(base, 1)].sort((a, b) => a - b)).toEqual(base)
    expect(shuffle(base, 1)).not.toEqual(shuffle(base, 2))
  })
  it('hashSeed est déterministe', () => {
    expect(hashSeed('a')).toBe(hashSeed('a'))
    expect(hashSeed('a')).not.toBe(hashSeed('b'))
  })
})
