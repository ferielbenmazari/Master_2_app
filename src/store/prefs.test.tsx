import { act, render, screen } from '@testing-library/react'
import { DEFAULT_PREFS, PREFS_KEY, loadPrefs, resolveTheme, savePrefs } from './prefs'
import { PrefsProvider, usePrefs } from './PrefsProvider'

beforeEach(() => {
  localStorage.clear()
  delete document.documentElement.dataset.theme
})

describe('prefs', () => {
  it('retombe sur les défauts sans stockage ou avec JSON invalide', () => {
    expect(loadPrefs()).toEqual(DEFAULT_PREFS)
    localStorage.setItem(PREFS_KEY, '{oups')
    expect(loadPrefs()).toEqual(DEFAULT_PREFS)
  })

  it('persiste et relit', () => {
    savePrefs({ ...DEFAULT_PREFS, pseudo: 'Zoé', theme: 'light', langMode: 'en', avatar: 'cyan' })
    expect(loadPrefs()).toMatchObject({ pseudo: 'Zoé', theme: 'light', langMode: 'en', avatar: 'cyan' })
  })

  it('ignore les valeurs invalides champ par champ', () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ pseudo: 'A', theme: 'rose', langMode: 3 }))
    expect(loadPrefs()).toMatchObject({ pseudo: 'A', theme: 'system', langMode: 'both' })
  })

  it('rejette un pseudo d’espaces seuls et rogne les autres', () => {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ pseudo: '   ' }))
    expect(loadPrefs().pseudo).toBe('')
    localStorage.setItem(PREFS_KEY, JSON.stringify({ pseudo: '  Zoé ' }))
    expect(loadPrefs().pseudo).toBe('Zoé')
  })

  it('résout le thème explicite', () => {
    expect(resolveTheme('light')).toBe('light')
    expect(resolveTheme('dark')).toBe('dark')
  })
})

function Probe() {
  const { prefs, setPrefs } = usePrefs()
  return <button onClick={() => setPrefs({ theme: 'light' })}>{prefs.theme}</button>
}

describe('PrefsProvider', () => {
  it('pose data-theme et sauvegarde les changements', () => {
    render(
      <PrefsProvider>
        <Probe />
      </PrefsProvider>,
    )
    act(() => screen.getByRole('button').click())
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(loadPrefs().theme).toBe('light')
  })
})
