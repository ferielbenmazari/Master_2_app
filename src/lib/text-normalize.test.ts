import { describe, expect, it } from 'vitest'
import { normalizeForSearch } from './text-normalize'

describe('normalizeForSearch', () => {
  it('retire accents et casse', () => {
    expect(normalizeForSearch('Validité INTERNE')).toBe('validite interne')
    expect(normalizeForSearch('Éthique à Ça')).toBe('ethique a ca')
  })
  it('gère les ligatures et espaces', () => {
    expect(normalizeForSearch('  cœur   vœu ')).toBe('coeur voeu')
  })
  it('chaîne vide', () => {
    expect(normalizeForSearch('')).toBe('')
  })
})
