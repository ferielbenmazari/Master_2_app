import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { getCourse, loadChapter } from '@/content/loader'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { getCardState } from '@/store/fsrs'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'

vi.mock('@/lib/celebrate', () => ({ comboBurst: vi.fn(), flashOk: vi.fn(), flashKo: vi.fn() }))

const CH = 'rec1-05-qualite-validite-ethique'

async function open(path: string, prefs: object = {}) {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test', ...prefs }))
  localStorage.setItem('m2.effects', 'off')
  render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
  await screen.findByRole('group', { name: 'Évaluer ta mémoire' }, { timeout: 5000 })
}

beforeEach(async () => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  localStorage.clear()
  await Promise.all([db.cards.clear(), db.activity.clear()])
})
afterEach(cleanup)

describe('FlashcardDeck', () => {
  it('le flip se fait au clavier ; les boutons et raccourcis 1–4 ne marchent qu’après retournement', async () => {
    await open(`/matiere/rec1/chapitre/${CH}/flashcards`)
    const rate = screen.getAllByRole('button').filter((b) => /^(Encore|Difficile|Bien|Facile)/.test(b.getAttribute('aria-label') ?? b.textContent ?? ''))
    expect(rate).toHaveLength(4)
    for (const b of rate) expect(b).toBeDisabled()
    fireEvent.keyDown(window, { key: '3' })
    expect(await db.cards.count()).toBe(0)

    const flip = screen.getByRole('button', { name: 'Retourner la carte' })
    expect(flip).toHaveFocus()
    // verso masqué aux lecteurs d'écran tant que la carte n'est pas retournée
    expect(document.querySelector('.face.back')).toHaveAttribute('aria-hidden', 'true')
    expect(document.querySelector('.face.back')).toHaveAttribute('inert')
    fireEvent.keyDown(window, { key: ' ' })
    await waitFor(() => expect(document.querySelector('.flip')).toHaveClass('on'))
    expect(document.querySelector('.face.front')).toHaveAttribute('aria-hidden', 'true')
    expect(document.querySelector('.face.back')).not.toHaveAttribute('aria-hidden')
    for (const b of rate) expect(b).toBeEnabled()
    // verso FR + EN
    expect(document.querySelector('.face.back p[lang="fr"]')).not.toBeNull()
    expect(document.querySelector('.face.back p[lang="en"]')).not.toBeNull()
  })

  it('noter une carte la persiste et avance le compteur ; « Encore » la fait revenir', async () => {
    const ch = await loadChapter(CH)
    await open(`/matiere/rec1/chapitre/${CH}/flashcards`)
    const total = ch.flashcards.length
    expect(screen.getByRole('status', { name: `Carte 1 sur ${total}` })).toBeInTheDocument()
    const firstId = ch.flashcards[0]!.id

    fireEvent.click(screen.getByRole('button', { name: 'Retourner la carte' }))
    await act(async () => fireEvent.keyDown(window, { key: '1' }))
    await waitFor(async () => expect((await getCardState(firstId))?.reps).toBe(1))
    // Encore : la carte reste dans la session (compteur inchangé)
    expect(screen.getByRole('status', { name: `Carte 1 sur ${total}` })).toBeInTheDocument()

    // Facile : sort de la session
    fireEvent.click(screen.getByRole('button', { name: 'Retourner la carte' }))
    await act(async () => fireEvent.keyDown(window, { key: '4' }))
    await screen.findByRole('status', { name: `Carte 2 sur ${total}` })
    expect(await db.cards.count()).toBe(2)
    expect((await db.activity.toArray()).reduce((n, a) => n + a.count, 0)).toBe(2)
  })

  it('respecte la limite de nouvelles cartes et affiche l’état festif quand tout est revu', async () => {
    await open(`/matiere/rec1/chapitre/${CH}/flashcards`, { newPerDay: 1 })
    expect(screen.getByRole('status', { name: /sur 1$/ })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Retourner la carte' }))
    await act(async () => fireEvent.keyDown(window, { key: '4' }))
    await screen.findByText('Tout est revu pour aujourd’hui !')
    cleanup()
    // rechargement : toujours rien de plus aujourd'hui
    localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test', newPerDay: 1 }))
    render(
      <PrefsProvider>
        <MemoryRouter initialEntries={['/reviser']}>
          <AppRoutes />
        </MemoryRouter>
      </PrefsProvider>,
    )
    await screen.findByText('Tout est revu pour aujourd’hui !', undefined, { timeout: 5000 })
  })

  it('/reviser mélange les matières et ignore un id disparu du contenu', async () => {
    expect(getCourse('rec1')).toBeDefined()
    await db.cards.put({ cardId: 'carte-supprimee', due: '2020-01-01T00:00:00.000Z', stability: 1, difficulty: 5, reps: 1, lapses: 0, state: 2 })
    await open('/reviser', { newPerDay: 3 })
    expect(screen.getByRole('status', { name: /sur 3$/ })).toBeInTheDocument()
  })
})
