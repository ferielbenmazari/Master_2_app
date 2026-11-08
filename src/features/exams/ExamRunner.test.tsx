import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { loadExam } from '@/content/loader'
import type { Exam } from '@/content/schema'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { loadExamSession } from '@/store/exam-session'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'

const PATH = '/matiere/rec1/partiel/blanc-ch01'
const T0 = new Date('2026-11-09T09:00:00Z').getTime()

function open(path = PATH) {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test', langMode: 'fr' }))
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  return render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
}

let exam: Exam
let now = T0
beforeAll(async () => {
  exam = await loadExam('rec1', 'blanc-ch01')
})
beforeEach(async () => {
  localStorage.clear()
  now = T0
  vi.spyOn(Date, 'now').mockImplementation(() => now)
  await db.attempts.clear()
  await db.activity.clear()
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

async function start() {
  fireEvent.click(await screen.findByRole('button', { name: 'Commencer le partiel' }, { timeout: 5000 }))
  return screen.findByRole('timer')
}

describe('liste des partiels', () => {
  it('liste les partiels REC1 avec leur durée, et lie vers chacun', async () => {
    open('/matiere/rec1/partiels')
    const list = await screen.findByRole('list', { name: 'Liste des partiels' }, { timeout: 8000 })
    const items = within(list).getAllByRole('listitem')
    expect(items.length).toBeGreaterThanOrEqual(7)
    expect(within(list).getAllByText('Partiel blanc').length).toBe(items.length)
    expect(within(list).getAllByText('Pas encore tenté').length).toBe(items.length)
    expect(within(items[0]!).getByRole('link')).toHaveAttribute('href', expect.stringContaining('/matiere/rec1/partiel/'))
  })
})

describe('passage d’un partiel REC1 de bout en bout', () => {
  it('consignes → minuteur → réponses → copie rendue → correction → note enregistrée', async () => {
    open()
    // consignes : le minuteur n'a pas démarré
    expect(await screen.findByRole('heading', { name: 'Consignes' }, { timeout: 5000 })).toBeInTheDocument()
    expect(screen.queryByRole('timer')).toBeNull()
    expect(loadExamSession(exam.id)).toBeNull()

    const timer = await start()
    expect(timer).toHaveAccessibleName('Temps restant : 30 minutes 0 secondes')
    expect(screen.getByText('T-30:00')).toBeInTheDocument()
    expect(loadExamSession(exam.id)?.startedAt).toBe(T0)

    // section A : 4 vrai/faux (bonnes réponses : F F V V)
    const answers = [false, false, true, true]
    const groups = screen.getAllByRole('group', { name: /./ }).filter((g) => g.classList.contains('tf'))
    expect(groups).toHaveLength(4)
    groups.forEach((g, i) => fireEvent.click(within(g).getByRole('button', { name: answers[i] ? 'Vrai' : 'Faux' })))
    fireEvent.change(screen.getAllByLabelText('Justification (facultative)')[0]!, { target: { value: 'parce que' } })

    // section B : QCM, bonne réponse = option 3 (indice 2)
    fireEvent.click(screen.getByRole('button', { name: /^B\. QCM/ }))
    const boxes = await screen.findAllByRole('checkbox')
    fireEvent.click(boxes[2]!)

    // section C : texte libre
    fireEvent.click(screen.getByRole('button', { name: /^C\. Questions ouvertes/ }))
    const texts = await screen.findAllByLabelText('Ta réponse')
    fireEvent.change(texts[0]!, { target: { value: 'ma réponse 1' } })

    // brouillon sauvegardé automatiquement
    const saved = loadExamSession(exam.id)!
    expect(saved.section).toBe(2)
    expect(saved.answers['rec1-exam-ch01-q01']).toEqual({ bool: false, text: 'parce que' })
    expect(saved.answers['rec1-exam-ch01-q05']).toEqual({ picks: [2] })
    expect(saved.answers['rec1-exam-ch01-q06']).toEqual({ text: 'ma réponse 1' })

    // rendre la copie (confirmation en deux temps)
    fireEvent.click(screen.getByRole('button', { name: 'Rendre ma copie' }))
    expect(screen.getByText(/1 question sans réponse/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Oui, rendre' }))

    // correction : 8 + 2 auto = 10/22 → 9,09/20 ; badge non officiel
    expect(await screen.findByText('Corrigé proposé (non officiel)')).toBeInTheDocument()
    expect(screen.getByText('Note : 9,09 sur 20')).toBeInTheDocument()
    expect(screen.getByText('10 / 22 pts')).toBeInTheDocument()

    // auto-correction de la question ouverte q06 : critères cochés → points
    const q06 = screen.getAllByRole('checkbox')
    const before = q06.length
    expect(before).toBeGreaterThanOrEqual(5)
    for (const c of q06) fireEvent.click(c)
    expect(screen.getByText('Note : 20 sur 20')).toBeInTheDocument()

    // enregistrement : tentative en base, copie effacée, retour aux consignes avec l'historique
    fireEvent.click(screen.getByRole('button', { name: 'Enregistrer ma note' }))
    await waitFor(async () => expect(await db.attempts.count()).toBe(1))
    expect(await db.attempts.toArray()).toEqual([
      expect.objectContaining({ itemId: exam.id, kind: 'exam', correct: true, score: 20 }),
    ])
    expect(loadExamSession(exam.id)).toBeNull()
    expect(await screen.findByText('Note enregistrée : 20/20.')).toBeInTheDocument()
    const history = await screen.findByRole('heading', { name: 'Tes tentatives' })
    await waitFor(() => expect(history.parentElement).toHaveTextContent('Meilleur : 20/20'))
    expect(history.parentElement).toHaveTextContent('· 20/20')
  })

  it('le minuteur survit à un rechargement (dérivé de l’heure de démarrage)', async () => {
    const first = open()
    await start()
    fireEvent.change((await screen.findAllByLabelText('Justification (facultative)'))[0]!, { target: { value: 'garde-moi' } })
    first.unmount()

    now = T0 + (12 * 60 + 30) * 1000 // 12 min 30 plus tard
    open()
    const timer = await screen.findByRole('timer', undefined, { timeout: 5000 })
    expect(timer).toHaveAccessibleName('Temps restant : 17 minutes 30 secondes')
    expect(screen.getByText('T-17:30')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Commencer le partiel' })).toBeNull()
    expect(screen.getAllByLabelText('Justification (facultative)')[0]).toHaveValue('garde-moi')
  })

  it('passe à l’orange à 10 min et au rouge à 2 min', async () => {
    open()
    await start()
    const hud = () => document.querySelector('.exam-hud')!
    expect(hud()).toHaveAttribute('data-tone', 'ok')
    now = T0 + 20 * 60 * 1000
    await waitFor(() => expect(hud()).toHaveAttribute('data-tone', 'warn'), { timeout: 3000 })
    now = T0 + 28 * 60 * 1000
    await waitFor(() => expect(hud()).toHaveAttribute('data-tone', 'danger'), { timeout: 3000 })
  })

  it('temps écoulé pendant l’absence : la copie est rendue automatiquement', async () => {
    const first = open()
    await start()
    fireEvent.click(within(screen.getAllByRole('group').find((g) => g.classList.contains('tf'))!).getByRole('button', { name: 'Faux' }))
    first.unmount()

    now = T0 + 45 * 60 * 1000
    open()
    expect(await screen.findByText('Temps écoulé : copie rendue automatiquement.', undefined, { timeout: 5000 })).toBeInTheDocument()
    expect(loadExamSession(exam.id)?.submittedAt).toBe(T0 + 30 * 60 * 1000)
    // la correction note déjà la réponse donnée (q01 = Faux : juste → 2/22)
    expect(screen.getByText('2 / 22 pts')).toBeInTheDocument()
  })

  it('abandon : la copie et le minuteur sont effacés', async () => {
    open()
    await start()
    fireEvent.click(screen.getByRole('button', { name: 'Abandonner' }))
    fireEvent.click(screen.getByRole('button', { name: 'Oui, abandonner' }))
    expect(await screen.findByRole('button', { name: 'Commencer le partiel' })).toBeInTheDocument()
    expect(loadExamSession(exam.id)).toBeNull()
  })

  it('partiel inconnu : retour à la liste sans planter', async () => {
    open('/matiere/rec1/partiel/nexiste-pas')
    expect(await screen.findByText('Chapitres')).toBeInTheDocument()
  })
})
