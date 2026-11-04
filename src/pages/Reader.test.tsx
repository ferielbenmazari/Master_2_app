import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import AppRoutes from '@/routes'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY, type LangMode } from '@/store/prefs'
import { getReading } from '@/store/progress'

vi.mock('@/lib/celebrate', () => ({ comboBurst: vi.fn() }))

const CH = 'rec1-05-qualite-validite-ethique'

async function open(langMode: LangMode = 'fr') {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test', langMode }))
  localStorage.setItem('m2.effects', 'off')
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  const view = render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[`/matiere/rec1/chapitre/${CH}/lire`]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
  await screen.findByRole('heading', { level: 1 }, { timeout: 5000 })
  return view
}

describe('lecteur REC1-05', () => {
  it('rend tous les types de blocs présents (heading, paragraph, list, callout x4, table, quote, checkpoint)', async () => {
    const { container } = await open('fr')
    expect(container.querySelectorAll('section h2').length).toBe(7) // 6 épisodes + « Ce que tu sais maintenant »
    expect(screen.getByText('Épisode 1/6')).toBeInTheDocument()
    expect(container.querySelectorAll('.reader-flow p').length).toBeGreaterThan(9)
    expect(container.querySelectorAll('ul.prose-list, ol.prose-list').length).toBe(2)
    for (const v of ['tip', 'exam', 'warning', 'analogy']) {
      expect(container.querySelectorAll(`aside.callout-${v}`).length).toBeGreaterThan(0)
    }
    expect(container.querySelectorAll('.table-wrap table').length).toBe(2)
    expect(
      [...container.querySelectorAll('.table-wrap')].map((t) => t.getAttribute('aria-label')),
    ).toEqual(['Tableau 1, défilement horizontal', 'Tableau 2, défilement horizontal'])
    expect(container.textContent).not.toMatch(/term-[a-z]/)
    expect(container.querySelectorAll('blockquote.story-quote').length).toBe(1)
    expect(screen.getAllByRole('heading', { name: 'Teste-toi' }).length).toBe(5)
    expect(container.querySelector('script, img, iframe')).toBeNull()
  })

  it('modes de langue : fr / en / both (empilé en dessous de 1024 px)', async () => {
    const fr = await open('fr')
    expect(fr.container.querySelectorAll('[lang="en"]').length).toBe(0)
    fr.unmount()
    const en = await open('en')
    expect(en.container.querySelectorAll('[lang="fr"]').length).toBe(0)
    expect(en.container.querySelectorAll('[lang="en"]').length).toBeGreaterThan(5)
    en.unmount()
    const both = await open('both')
    expect(both.container.querySelectorAll('[lang="fr"]').length).toBeGreaterThan(5)
    expect(both.container.querySelectorAll('.en-block').length).toBeGreaterThan(5)
  })

  it('puce Source → feuille avec citation exacte et nom lisible du fichier', async () => {
    await open('fr')
    fireEvent.click(screen.getAllByRole('button', { name: 'Voir la source dans le cours' })[0]!)
    const dlg = await screen.findByRole('dialog', { name: 'Ce que dit le cours' })
    expect(within(dlg).getAllByRole('blockquote').length).toBeGreaterThan(0)
    expect(dlg.textContent).toMatch(/Passage :/)
    // nom lisible (titre de sources.json), pas le chemin brut
    expect(dlg.textContent).not.toMatch(/ressources\//)
  })

  it('terme : Entrée ouvre la bulle (focus dedans), Échap la ferme et rend le focus', async () => {
    await open('fr')
    const term = document.querySelector<HTMLButtonElement>('button.term')!
    term.focus()
    fireEvent.click(term) // Entrée sur un <button> = clic
    const pop = await screen.findByRole('dialog', { name: /^Définition/ })
    expect(term).toHaveAttribute('aria-expanded', 'true')
    expect(pop).toHaveFocus()
    fireEvent.keyDown(document, { key: 'Escape' })
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
    expect(term).toHaveFocus()
  })

  it('« J’ai fini » marque le chapitre lu', async () => {
    await open('fr')
    fireEvent.click(screen.getByRole('button', { name: 'J’ai fini' }))
    await waitFor(async () => expect((await getReading(CH))?.finishedAt).toBeTruthy())
    expect(await screen.findByText('Chapitre terminé')).toBeInTheDocument()
  })
})
