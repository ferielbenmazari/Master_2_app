import { loadDraft, removeDrafts, saveDraft } from './drafts'

beforeEach(() => localStorage.clear())

describe('brouillons', () => {
  it('relit ce qui a été enregistré', () => {
    saveDraft('rec1-05-ex-01', 'ma réponse')
    expect(loadDraft('rec1-05-ex-01')).toBe('ma réponse')
    expect(loadDraft('autre')).toBe('')
  })

  it('un texte vide supprime le brouillon', () => {
    saveDraft('a', 'x')
    saveDraft('a', '')
    expect(localStorage.length).toBe(0)
  })

  it('removeDrafts ne touche que les brouillons', () => {
    saveDraft('a', 'x')
    localStorage.setItem('m2rev:prefs', '{}')
    removeDrafts()
    expect(loadDraft('a')).toBe('')
    expect(localStorage.getItem('m2rev:prefs')).toBe('{}')
  })
})
