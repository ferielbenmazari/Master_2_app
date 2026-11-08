import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import AppRoutes from './routes'
import { PrefsProvider } from './store/PrefsProvider'
import { PREFS_KEY, DEFAULT_PREFS } from './store/prefs'

function renderAt(path: string) {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  return render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
}

beforeEach(() => {
  localStorage.clear()
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test' }))
})

describe('routes', () => {
  it('route inconnue → accueil', () => {
    renderAt('/nimporte/quoi')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Salut Test')
  })

  it('matière inconnue → accueil', () => {
    renderAt('/matiere/zzz9')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Salut Test')
  })

  it('page non réalisée → « Bientôt ici »', () => {
    renderAt('/jouer/passe-telephone')
    expect(screen.getByRole('heading', { name: 'Bientôt ici' })).toBeInTheDocument()
  })

  it('/jouer → Arène (créer / rejoindre)', async () => {
    renderAt('/jouer')
    expect(await screen.findByRole('heading', { name: 'Créer une partie' }, { timeout: 8000 })).toBeInTheDocument()
  }, 15_000)

  it('/jouer/rejoindre/CODE préremplit le code', async () => {
    renderAt('/jouer/rejoindre/K7PX')
    expect(await screen.findByLabelText(/Code de la salle/, {}, { timeout: 8000 })).toHaveValue('K7PX')
  }, 15_000)

  it('/jouer/creer → choix des chapitres', async () => {
    renderAt('/jouer/creer')
    expect(await screen.findByText('Chapitres en jeu', {}, { timeout: 8000 })).toBeInTheDocument()
  }, 15_000)

  it('/jouer/test → page de test réseau ', async () => {
    renderAt('/jouer/test')
    expect(await screen.findByRole('heading', { name: 'Test réseau' }, { timeout: 8000 })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Bientôt ici' })).not.toBeInTheDocument()
  })

  it('le styleguide reste accessible', async () => {
    renderAt('/styleguide')
    expect(await screen.findByRole('heading', { level: 1 }, { timeout: 8000 })).toHaveTextContent(
      'M2 // Arena',
    )
  })

  it('onboarding affiché sans pseudo', () => {
    localStorage.clear()
    renderAt('/')
    expect(screen.getByRole('dialog', { name: 'Choisis ton pseudo' })).toBeInTheDocument()
  })
})
