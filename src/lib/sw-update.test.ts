import { consumeSwUpdated, watchSwUpdate } from './sw-update'

function fakeStore() {
  const m = new Map<string, string>()
  return {
    setItem: (k: string, v: string) => void m.set(k, v),
    getItem: (k: string) => m.get(k) ?? null,
    removeItem: (k: string) => void m.delete(k),
  }
}

describe('sw-update', () => {
  it('ne note rien à la première installation (pas de contrôleur)', () => {
    const store = fakeStore()
    const add = vi.fn()
    watchSwUpdate({ controller: null, addEventListener: add }, store)
    expect(add).not.toHaveBeenCalled()
  })

  it('note la mise à jour puis la consomme une seule fois', () => {
    const store = fakeStore()
    let cb: () => void = () => {}
    watchSwUpdate(
      { controller: {} as ServiceWorker, addEventListener: (_: string, f: unknown) => void (cb = f as () => void) },
      store,
    )
    cb()
    expect(consumeSwUpdated(store)).toBe(true)
    expect(consumeSwUpdated(store)).toBe(false)
  })

  it('sans service worker : sans effet', () => {
    expect(() => watchSwUpdate(undefined, fakeStore())).not.toThrow()
  })
})
