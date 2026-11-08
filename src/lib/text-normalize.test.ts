import { describe, expect, it } from 'vitest'
import { normalizeAnswer, normalizeForSearch } from './text-normalize'

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

describe('normalizeAnswer', () => {
  it('casse, espaces et espaces insécables', () => {
    expect(normalizeAnswer('  Internal   VALIDITY  ')).toBe('internal validity')
  })
  it('apostrophes et guillemets typographiques', () => {
    expect(normalizeAnswer('It’s the researcher’s “choice”')).toBe("it's the researcher's choice")
    expect(normalizeAnswer('«controls for»')).toBe('controls for')
  })
  it('ponctuation finale ignorée, interne conservée', () => {
    expect(normalizeAnswer('Findings are general.')).toBe('findings are general')
    expect(normalizeAnswer('Findings are general !!')).toBe('findings are general')
    expect(normalizeAnswer('state-of-the-art, again')).toBe('state-of-the-art, again')
    expect(normalizeAnswer('state‑of‑the‑art')).toBe('state-of-the-art')
  })
  it('-ise/-ize et -isation/-ization équivalents', () => {
    expect(normalizeAnswer('generalize')).toBe(normalizeAnswer('generalise'))
    expect(normalizeAnswer('The generalization of findings')).toBe(normalizeAnswer('the generalisation of findings.'))
    expect(normalizeAnswer('organized')).toBe(normalizeAnswer('organised'))
    expect(normalizeAnswer('analyze')).toBe(normalizeAnswer('analyse'))
    expect(normalizeAnswer('organizational')).toBe(normalizeAnswer('organisational'))
  })
  it('ne touche pas aux mots qui ne sont pas des variantes -ize', () => {
    expect(normalizeAnswer('citizen')).toBe('citizen')
    expect(normalizeAnswer('pizza')).toBe('pizza')
  })
  it('chaîne vide', () => {
    expect(normalizeAnswer('  .')).toBe('')
  })
})
