import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import type { Course } from '@/content/schema'
import { loadChapter } from '@/content/loader'
import { UI } from '@/i18n/ui'
import AppRoutes from '@/routes'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'

// Fixtures : on ajoute une 5ᵉ matière (équivalent de content/test/course.json) et on pilote examDate.
const fixture = vi.hoisted(() => ({
  examDates: {} as Record<string, string | undefined>,
  extra: true,
}))
vi.mock('@/content/loader', async (orig) => {
  const real = await orig<typeof import('@/content/loader')>()
  const test: Course = {
    id: 'test',
    code: 'S3-TEST',
    title: { fr: 'Matière de test', en: 'Test course' },
    color: 'gold',
    icon: 'IconeInexistante',
    description: { fr: 'd', en: 'd' },
  }
  const withDates = () =>
    [...real.getCourses(), ...(fixture.extra ? [test] : [])].map((c) => ({
      ...c,
      examDate: fixture.examDates[c.id],
    }))
  return {
    ...real,
    getCourses: () => withDates(),
    getCourse: (id: string) => withDates().find((c) => c.id === id),
  }
})

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
  localStorage.setItem('m2.effects', 'off')
  fixture.examDates = {}
  fixture.extra = true
})

describe('accueil', () => {
  it('affiche toutes les matières du contenu, y compris une 6ᵉ ajoutée, sans code spécifique', () => {
    renderAt('/')
    const links = screen
      .getAllByRole('link')
      .filter((a) => a.getAttribute('href')?.startsWith('/matiere/'))
    expect(links.map((a) => a.getAttribute('href'))).toEqual([
      '/matiere/inf4',
      '/matiere/isi1',
      '/matiere/isi5',
      '/matiere/isi7',
      '/matiere/rec1',
      '/matiere/test',
    ])
    expect(screen.getByText('Matière de test')).toBeInTheDocument()
  })

  it('sans examDate : pas de J-n et ligne de journal neutre', () => {
    renderAt('/')
    expect(screen.queryByText(/^J-\d+$/)).toBeNull()
    expect(screen.getByText('0 CARTE EN ATTENTE')).toBeInTheDocument()
    expect(screen.queryByText(/CONTRÔLE/)).toBeNull()
  })

  it('avec examDate proche : sticker J-n et ligne CONTRÔLE', () => {
    const d = new Date()
    d.setDate(d.getDate() + 6)
    const p = (n: number) => String(n).padStart(2, '0')
    fixture.examDates = { isi1: `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}` }
    renderAt('/')
    expect(screen.getByText('J-6')).toBeInTheDocument()
    expect(screen.getByText('CONTRÔLE ISI1 DANS 6J // 0 CARTE EN ATTENTE')).toBeInTheDocument()
  })

  it('examDate lointaine : pas de sticker', () => {
    fixture.examDates = { isi1: '2099-01-01' }
    renderAt('/')
    expect(screen.queryByText(/^J-\d+$/)).toBeNull()
  })
})

describe('matière', () => {
  it('sans chapitre : « Contenu en préparation »', () => {
    renderAt('/matiere/isi5')
    expect(screen.getByRole('heading', { name: 'Contenu en préparation' })).toBeInTheDocument()
  })

  it('liste les chapitres avec numéro, titre et durée', async () => {
    renderAt('/matiere/rec1')
    const link = await screen.findByRole('link', { name: /Ta recherche tient-elle debout/ })
    expect(link).toHaveAttribute('href', '/matiere/rec1/chapitre/rec1-05-qualite-validite-ethique')
    expect(link).toHaveTextContent(/^0\d/)
    expect(link).toHaveTextContent('min')
    expect(screen.getByRole('link', { name: 'Chapitres' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Glossaire' })).toBeInTheDocument()
  })
})

describe('hub de chapitre', () => {
  it('affiche le badge de statut et les 7 tuiles avec leurs compteurs', async () => {
    const ch = await loadChapter('rec1-05-qualite-validite-ethique')
    renderAt('/matiere/rec1/chapitre/rec1-05-qualite-validite-ethique')
    expect(
      await screen.findByText(ch.status === 'reviewed' ? UI.hub.reviewed : UI.hub.draft),
    ).toBeInTheDocument()
    const tiles = screen.getAllByRole('listitem')
    expect(tiles).toHaveLength(7)
    for (const name of [
      'Express 5 min',
      'Lire l’histoire',
      'Fiche',
      'Flashcards',
      'Quiz',
      'Exercices',
      'Atelier anglais',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /^Quiz \d+$/ })).toHaveAttribute(
      'href',
      '/matiere/rec1/chapitre/rec1-05-qualite-validite-ethique/quiz',
    )
  })

  it('chapitre inconnu → retour à la matière', async () => {
    renderAt('/matiere/rec1/chapitre/nope')
    await waitFor(() => expect(screen.getByRole('link', { name: 'Chapitres' })).toBeInTheDocument())
  })
})
