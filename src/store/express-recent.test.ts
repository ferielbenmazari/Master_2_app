import { beforeEach, describe, expect, it } from 'vitest'
import { loadRecentExpress, saveRecentExpress } from './express-recent'

beforeEach(() => localStorage.clear())

describe('express-recent', () => {
  it('vide au départ, relit ce qui a été enregistré, remplace la session précédente', () => {
    expect(loadRecentExpress().size).toBe(0)
    saveRecentExpress(['a', 'b'])
    expect([...loadRecentExpress()]).toEqual(['a', 'b'])
    saveRecentExpress(['c'])
    expect([...loadRecentExpress()]).toEqual(['c'])
  })
  it('ignore un stockage corrompu', () => {
    localStorage.setItem('m2.express.recent', '{pas du json')
    expect(loadRecentExpress().size).toBe(0)
    localStorage.setItem('m2.express.recent', JSON.stringify([1, 'ok', null]))
    expect([...loadRecentExpress()]).toEqual(['ok'])
  })
})
