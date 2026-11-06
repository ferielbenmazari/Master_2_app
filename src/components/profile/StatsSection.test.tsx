import { render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { getChapterIndex, loadChapter } from '@/content/loader'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'
import { bumpActivity, localDate, putCard, recordAttempt, setReading } from '@/store/progress'

const CH = 'rec1-05-qualite-validite-ethique'

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

beforeEach(async () => {
  localStorage.clear()
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test' }))
  localStorage.setItem('m2.effects', 'off')
  await Promise.all([db.attempts.clear(), db.activity.clear(), db.cards.clear(), db.reading.clear()])
})

describe('profil : statistiques', () => {
  it('sans historique : zéros, pas de série, pas de point faible', async () => {
    renderAt('/profil')
    expect(await screen.findByText(/Pas de série en cours/, {}, { timeout: 5000 })).toBeInTheDocument()
    expect(screen.getAllByText('Pas encore de quiz').length).toBeGreaterThan(0)
    expect(screen.getByTestId('heatmap').querySelectorAll('i')).toHaveLength(56)
  })

  it('reflète les tentatives, lectures, cartes et la série enregistrées', async () => {
    const ch = await loadChapter(CH)
    const [q1, q2, q3] = ch.quiz
    const cardId = ch.flashcards[0]?.id ?? ''
    await recordAttempt({ itemId: q1?.id ?? '', kind: 'quiz', correct: true })
    await recordAttempt({ itemId: q2?.id ?? '', kind: 'quiz', correct: false })
    await recordAttempt({ itemId: q3?.id ?? '', kind: 'quiz', correct: false })
    await setReading(CH, 1, true)
    const now = new Date()
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
    await bumpActivity(localDate(yesterday))
    await putCard({ cardId, due: now.toISOString(), stability: 40, difficulty: 5, reps: 3, lapses: 0, state: 2 })

    renderAt('/profil')
    expect(await screen.findByText('2 jours d’affilée', {}, { timeout: 5000 })).toBeInTheDocument()
    const panel = (await screen.findByText('1 bonne réponse sur 3', {}, { timeout: 5000 })).closest('.panel') as HTMLElement
    expect(within(panel).getByText('33 %')).toBeInTheDocument()
    expect(within(panel).getByText(`${Math.round(100 / getChapterIndex('rec1').length)} %`)).toBeInTheDocument() // 1 chapitre lu
    expect(within(panel).getByText(`1 / ${ch.flashcards.length}`)).toBeInTheDocument()
    const links = within(panel).getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('href', expect.stringContaining(`/matiere/rec1/chapitre/${CH}`))
    const active = screen.getByTestId('heatmap').querySelectorAll('i[data-level]:not([data-level="0"])')
    expect(active.length).toBe(2)
  })
})

describe('accueil : badge série', () => {
  it('joue le pop quand la série augmente, une seule fois', async () => {
    await bumpActivity()
    const first = renderAt('/')
    await waitFor(() => expect(document.querySelector('.streak.pop-up')).not.toBeNull())
    expect(document.querySelector('.streak')).toHaveTextContent('1')
    first.unmount()
    renderAt('/')
    await waitFor(() => expect(document.querySelector('.streak')).toHaveTextContent('1'))
    expect(document.querySelector('.streak.pop-up')).toBeNull()
  })
})
