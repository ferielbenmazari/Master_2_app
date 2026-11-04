import { act, renderHook } from '@testing-library/react'
import { getEffectsLevel, initEffects, setEffectsLevel, useEffectsLevel } from './effects'

function mockReduce(matches: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({ matches, addEventListener: vi.fn(), removeEventListener: vi.fn() }),
  )
}

afterEach(() => {
  localStorage.clear()
  vi.unstubAllGlobals()
})

describe('effects', () => {
  it('vaut full par défaut', () => {
    mockReduce(false)
    initEffects()
    expect(getEffectsLevel()).toBe('full')
    expect(document.documentElement.dataset.fx).toBe('full')
  })

  it('vaut off si prefers-reduced-motion', () => {
    mockReduce(true)
    initEffects()
    expect(getEffectsLevel()).toBe('off')
    expect(document.documentElement.dataset.fx).toBe('off')
  })

  it('un choix explicite l’emporte et est persisté', () => {
    mockReduce(true)
    initEffects()
    setEffectsLevel('light')
    expect(getEffectsLevel()).toBe('light')
    expect(localStorage.getItem('m2.effects')).toBe('light')
    initEffects()
    expect(getEffectsLevel()).toBe('light')
  })

  it('le hook suit les changements', () => {
    mockReduce(false)
    initEffects()
    const { result } = renderHook(() => useEffectsLevel())
    expect(result.current[0]).toBe('full')
    act(() => result.current[1]('off'))
    expect(result.current[0]).toBe('off')
  })
})
