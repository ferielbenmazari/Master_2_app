import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { loadChapter } from '@/content/loader'
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
  it('rend chaque type de bloc du chapitre (attentes calculées depuis le contenu)', async () => {
    const ch = await loadChapter(CH)
    const count = (t: string) => ch.story.filter((b) => b.type === t).length
    const { container } = await open('fr')
    const episodes = count('heading')
    expect(container.querySelectorAll('section h2').length).toBe(episodes + 1) // + « Ce que tu sais maintenant »
    expect(screen.getByText(`Épisode 1/${episodes}`)).toBeInTheDocument()
    expect(container.querySelectorAll('.reader-flow p').length).toBeGreaterThan(
      count('paragraph') - 1,
    )
    expect(container.querySelectorAll('ul.prose-list, ol.prose-list').length).toBe(count('list'))
    const variants = new Set(ch.story.flatMap((b) => (b.type === 'callout' ? [b.variant] : [])))
    for (const v of variants)
      expect(container.querySelectorAll(`aside.callout-${v}`).length).toBeGreaterThan(0)
    const tables = count('table')
    expect(container.querySelectorAll('.table-wrap table').length).toBe(tables)
    expect(
      [...container.querySelectorAll('.table-wrap')].map((t) => t.getAttribute('aria-label')),
    ).toEqual(Array.from({ length: tables }, (_, i) => `Tableau ${i + 1}, défilement horizontal`))
    expect(container.querySelectorAll('.method-box').length).toBe(count('method'))
    expect(container.querySelectorAll('.explain').length).toBe(
      ch.story.filter((b) => b.type === 'paragraph' && b.explain).length,
    )
    expect(container.textContent).not.toMatch(/term-[a-z]/)
    expect(container.querySelectorAll('blockquote.story-quote').length).toBe(count('quote'))
    expect(screen.getAllByRole('heading', { name: 'Teste-toi' }).length).toBe(count('checkpoint'))
    expect(container.querySelector('script, img, iframe')).toBeNull()
  })

  it('fil du chapitre en tête et synthèse structurée en fin de lecture', async () => {
    const ch = await loadChapter(CH)
    await open('fr')
    if (ch.question) expect(screen.getByText(ch.question.fr)).toBeInTheDocument()
    if (ch.objectives) expect(screen.getByText(ch.objectives[0]!.text.fr)).toBeInTheDocument()
    if (ch.synthesis) {
      expect(screen.getByText('À savoir restituer')).toBeInTheDocument()
      expect(screen.getByText(ch.synthesis.mustDo[0]!.fr)).toBeInTheDocument()
    }
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
