import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { loadChapter } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'

const CH = 'rec1-05-qualite-validite-ethique'
const BASE = `/matiere/rec1/chapitre/${CH}/exercices`

function open(path: string, prefs: object = {}) {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test', ...prefs }))
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  return render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
}

let chapter: Chapter
beforeAll(async () => {
  chapter = await loadChapter(CH)
})
beforeEach(async () => {
  localStorage.clear()
  await db.attempts.clear()
  await db.activity.clear()
})
afterEach(() => vi.restoreAllMocks())

describe('exercices REC1-05', () => {
  it('liste les 3 exercices par difficulté, avec le badge « format partiel »', async () => {
    open(BASE)
    const list = await screen.findByRole('list', { name: 'Liste des exercices' }, { timeout: 5000 })
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(3)
    const diffs = chapter.exercises.map((e) => e.difficulty)
    expect(diffs).toEqual([...diffs].sort())
    expect(within(items[2]!).getByText('Format partiel')).toBeInTheDocument()
    expect(within(items[0]!).queryByText('Format partiel')).toBeNull()
  })

  for (const ex of [0, 1, 2]) {
    it(`exercice ${ex + 1} : énoncé, indices un par un, corrigé bilingue, auto-évaluation`, async () => {
      const e = chapter.exercises[ex]!
      open(`${BASE}/${e.id}`)
      await screen.findByRole('heading', { level: 1 }, { timeout: 5000 })
      expect(screen.queryByText('Corrigé')).toBeNull()

      // indices
      for (let i = 1; i <= e.hints.length; i++) {
        fireEvent.click(screen.getByRole('button', { name: /^Un indice/ }))
        expect(screen.getByText(`Indice ${i} sur ${e.hints.length}`)).toBeInTheDocument()
      }
      expect(screen.queryByRole('button', { name: /^Un indice/ })).toBeNull()

      // corrigé FR + EN
      fireEvent.click(screen.getByRole('button', { name: 'Voir le corrigé' }))
      expect(await screen.findByRole('heading', { name: 'Corrigé' })).toBeInTheDocument()
      expect(document.querySelector('.rich-block [lang="fr"], [lang="fr"] .rich-block')).not.toBeNull()
      expect(document.querySelector('[lang="en"] .rich-block')).not.toBeNull()

      // auto-évaluation
      fireEvent.click(screen.getByRole('button', { name: 'Moyen' }))
      await waitFor(async () => expect(await db.attempts.count()).toBe(1))
      const [a] = await db.attempts.toArray()
      expect(a).toMatchObject({ itemId: e.id, kind: 'exercise', correct: false, score: 0.5 })
      // un second clic n'enregistre rien de plus
      fireEvent.click(screen.getByRole('button', { name: 'Réussi' }))
      expect(await db.attempts.count()).toBe(1)
    })
  }

  it('énoncé en markdown bloc : liste ordonnée', async () => {
    open(`${BASE}/${chapter.exercises[0]!.id}`, { langMode: 'fr' })
    await screen.findByRole('heading', { level: 1 }, { timeout: 5000 })
    const ol = document.querySelector('.rich-block ol')
    expect(ol?.querySelectorAll('li')).toHaveLength(3)
  })

  it('le brouillon survit à un rechargement', async () => {
    const id = chapter.exercises[1]!.id
    const first = open(`${BASE}/${id}`)
    const box = (await screen.findByLabelText('Ton brouillon', undefined, { timeout: 5000 })) as HTMLTextAreaElement
    fireEvent.change(box, { target: { value: 'a) patchwork' } })
    first.unmount()

    open(`${BASE}/${id}`)
    const again = (await screen.findByLabelText('Ton brouillon', undefined, { timeout: 5000 })) as HTMLTextAreaElement
    expect(again.value).toBe('a) patchwork')
  })

  it('exercice inconnu → retour à la liste', async () => {
    open(`${BASE}/nimporte-quoi`)
    expect(await screen.findByRole('list', { name: 'Liste des exercices' }, { timeout: 5000 })).toBeInTheDocument()
  })
})
