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
    renderAt('/matiere/isi1/chapitre/x/anglais')
    expect(screen.getByRole('heading', { name: 'Bientôt ici' })).toBeInTheDocument()
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
