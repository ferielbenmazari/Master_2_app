import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { loadRecentExpress } from '@/store/express-recent'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'

vi.mock('@/lib/celebrate', () => ({ comboBurst: vi.fn(), flashOk: vi.fn(), flashKo: vi.fn() }))

const CH = 'rec1-05-qualite-validite-ethique'

function renderAt(path: string) {
  return render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
}

beforeEach(async () => {
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  localStorage.clear()
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test' }))
  localStorage.setItem('m2.effects', 'off')
  await Promise.all([db.cards.clear(), db.activity.clear(), db.attempts.clear()])
})
afterEach(cleanup)

const T = { timeout: 8000 }

/** Joue l'étape affichée, quel que soit son type ; renvoie son type. */
async function playStep(): Promise<'keypoint' | 'card' | 'quiz'> {
  const first = await waitFor(() => {
    const kp = screen.queryByRole('button', { name: 'Compris' })
    const flip = screen.queryByRole('button', { name: 'Retourner la carte' })
    const tf = screen.queryByRole('button', { name: 'Vrai' })
    const ok = screen.queryByRole('button', { name: 'Valider' })
    const found = kp ?? flip ?? tf ?? ok
    if (!found) throw new Error('aucune étape')
    return { kp, flip, tf, ok }
  }, T)
  if (first.kp) {
    fireEvent.click(first.kp)
    return 'keypoint'
  }
  if (first.flip) {
    fireEvent.click(first.flip)
    await act(async () => fireEvent.keyDown(window, { key: '3' }))
    return 'card'
  }
  if (first.tf) fireEvent.click(first.tf)
  else {
    fireEvent.click(screen.getAllByRole('checkbox')[0]!)
    fireEvent.click(first.ok!)
  }
  fireEvent.click(await screen.findByRole('button', { name: /^(Suivant|Voir mon score)$/ }))
  return 'quiz'
}

describe('Express', () => {
  it('enchaîne 6 étapes (1 point clé, 3 cartes, 2 quiz) sans quitter l’écran, puis affiche le récap', async () => {
    renderAt(`/matiere/rec1/chapitre/${CH}/express`)
    // plein écran : pas de barre de navigation
    expect(screen.queryByRole('navigation')).toBeNull()
    const kinds: string[] = []
    for (let i = 0; i < 6; i++) {
      await screen.findByRole('progressbar', { name: `Étape ${i + 1} sur 6` }, T)
      kinds.push(await playStep())
    }
    expect(kinds).toEqual(['keypoint', 'card', 'quiz', 'card', 'quiz', 'card'])
    expect(await screen.findByRole('heading', { name: 'Session terminée' }, T)).toBeInTheDocument()
    expect(screen.getByText('XP gagnée')).toBeInTheDocument()
    expect(screen.getByText('Combo max')).toBeInTheDocument()
    expect(screen.getByText('Notions vues')).toBeInTheDocument()
    // la série est mise à jour : l'activité du jour est enregistrée
    expect(await screen.findByLabelText('Série : 1 jour', undefined, T)).toBeInTheDocument()
    expect((await db.activity.toArray()).reduce((n, a) => n + a.count, 0)).toBeGreaterThanOrEqual(6)
    expect(await db.cards.count()).toBe(3)
    expect(await db.attempts.count()).toBe(2)
    expect(screen.getByRole('link', { name: 'Retour au chapitre' })).toHaveAttribute('href', `/matiere/rec1/chapitre/${CH}`)
  }, 40_000)

  it('« Encore 5 min » lance une nouvelle session qui ne reprend pas les items de la précédente', async () => {
    renderAt(`/matiere/rec1/chapitre/${CH}/express`)
    for (let i = 0; i < 6; i++) await playStep()
    await screen.findByRole('heading', { name: 'Session terminée' }, T)
    const firstIds = loadRecentExpress()
    expect(firstIds.size).toBe(6)
    fireEvent.click(screen.getByRole('button', { name: 'Encore 5 min' }))
    await screen.findByRole('progressbar', { name: 'Étape 1 sur 6' }, T)
    const secondIds = loadRecentExpress()
    expect(secondIds.size).toBe(6)
    expect([...secondIds].filter((id) => firstIds.has(id))).toEqual([])
  }, 40_000)

  it('Base : « Lancer » ouvre l’Express toutes matières, avec un bouton pour quitter', async () => {
    renderAt('/')
    expect(await screen.findByRole('link', { name: 'Lancer' })).toHaveAttribute('href', '/express')
    cleanup()
    renderAt('/express')
    const bar = await screen.findByRole('progressbar', { name: 'Étape 1 sur 6' }, T)
    expect(bar).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Quitter la session' })).toHaveAttribute('href', '/')
    expect(within(screen.getByRole('timer')).getByText('05:00')).toBeInTheDocument()
  }, 20_000)

  it('chapitre inconnu → retour à la matière', async () => {
    renderAt('/matiere/rec1/chapitre/nope/express')
    await waitFor(() => expect(screen.getByRole('link', { name: 'Chapitres' })).toBeInTheDocument(), T)
  })
})
