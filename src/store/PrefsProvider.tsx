import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
import { loadPrefs, resolveTheme, savePrefs, type Prefs } from './prefs'

interface PrefsContextValue {
  prefs: Prefs
  setPrefs: (patch: Partial<Prefs>) => void
  /** Thème effectivement appliqué (jamais `system`). */
  resolvedTheme: 'light' | 'dark'
}

const PrefsContext = createContext<PrefsContextValue | null>(null)

/** Fournit les préférences, les persiste et pose `data-theme` sur <html>. */
export function PrefsProvider({ children }: { children: ReactNode }) {
  const [prefs, setState] = useState<Prefs>(loadPrefs)
  const [, setSystemTick] = useState(0)

  const setPrefs = useCallback((patch: Partial<Prefs>) => {
    setState((p) => {
      const next = { ...p, ...patch }
      savePrefs(next)
      return next
    })
  }, [])

  // Recalculé à chaque rendu ; `setSystemTick` provoque un rendu quand l'OS change de thème.
  const resolvedTheme = resolveTheme(prefs.theme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme
  }, [resolvedTheme])

  useLayoutEffect(() => {
    if (prefs.theme !== 'system' || typeof matchMedia !== 'function') return
    const mq = matchMedia('(prefers-color-scheme: light)')
    const onChange = () => setSystemTick((t) => t + 1)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [prefs.theme])

  const value = useMemo(() => ({ prefs, setPrefs, resolvedTheme }), [prefs, setPrefs, resolvedTheme])
  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
}

export function usePrefs(): PrefsContextValue {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs doit être utilisé dans <PrefsProvider>')
  return ctx
}
