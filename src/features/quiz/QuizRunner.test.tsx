import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { loadChapter } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'
import { prepareQuiz, type PreparedItem } from './quiz-logic'

vi.mock('@/lib/celebrate', () => ({ comboBurst: vi.fn(), flashOk: vi.fn(), flashKo: vi.fn() }))

const CH = 'rec1-05-qualite-validite-ethique'
const SEED = Math.floor(0.5 * 2 ** 31)

async function open(prefs: object = {}, path = `/matiere/rec1/chapitre/${CH}/quiz`) {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test', ...prefs }))
  localStorage.setItem('m2.effects', 'off')
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  vi.spyOn(Math, 'random').mockReturnValue(0.5)
  render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
  await screen.findByRole('status', { name: /^Question 1 sur/ }, { timeout: 5000 })
}

const click = (el: HTMLElement) => fireEvent.click(el)
const btn = (name: string | RegExp) => screen.getByRole('button', { name })

/** Joue la question affichée : juste ou fausse. */
function answer(p: PreparedItem, right: boolean) {
  const { item, order } = p
  if (item.type === 'true_false') {
    const v = right ? item.answer : !item.answer
    click(btn(v ? 'Vrai' : 'Faux'))
    if (!v) click(btn('Valider'))
  } else {
    const boxes = screen.getAllByRole('checkbox')
    const pick = right ? item.correct : [item.options.findIndex((_, i) => !item.correct.includes(i))]
    for (const orig of pick) click(boxes[order.indexOf(orig)]!)
    click(btn('Valider'))
  }
}

async function playRound(plan: PreparedItem[], wrongIdx: Set<number>) {
  const n = plan.length
  for (const [i, p] of plan.entries()) {
    expect(screen.getByRole('status', { name: `Question ${i + 1} sur ${n}` })).toBeInTheDocument()
    answer(p, !wrongIdx.has(i))
    expect((await screen.findAllByText(wrongIdx.has(i) ? 'Raté' : 'Correct', { exact: false })).length).toBeGreaterThan(0)
    // correction dans les deux langues
    expect(document.querySelector('.fb p[lang="fr"]')).not.toBeNull()
    expect(document.querySelector('.fb p[lang="en"]')).not.toBeNull()
    click(btn(i === n - 1 ? 'Voir mon score' : 'Suivante'))
  }
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

describe('QuizRunner REC1-05', () => {
  it('joue tous les items, enregistre chaque réponse, puis ne refait que les erreurs', async () => {
    await open()
    const plan = prepareQuiz(chapter.quiz, SEED)
    const n = plan.length
    expect(n).toBeGreaterThanOrEqual(10)
    const wrongIdx = new Set([0, 4, 6])
    await playRound(plan, wrongIdx)

    const stored = await db.attempts.toArray()
    expect(stored).toHaveLength(n)
    expect(stored.every((a) => a.kind === 'quiz')).toBe(true)
    expect(stored.filter((a) => !a.correct).map((a) => a.itemId).sort()).toEqual(
      [...wrongIdx].map((i) => plan[i]!.item.id).sort(),
    )

    expect(screen.getByLabelText(`Score : ${n - 3} bonnes réponses sur ${n}`)).toBeInTheDocument()
    const list = within(screen.getByRole('region', { name: 'À revoir' }))
    expect(list.getAllByRole('listitem')).toHaveLength(3)

    click(btn('Refaire mes erreurs'))
    await screen.findByRole('status', { name: 'Question 1 sur 3' })
    // la manche de rattrapage ne contient QUE les 3 erreurs (même graine mockée → ordre prévisible)
    const wrongItems = [...wrongIdx].sort((a, b) => a - b).map((i) => plan[i]!.item)
    const plan2 = prepareQuiz(wrongItems, SEED)
    expect(plan2.map((p) => p.item.id).sort()).toEqual(wrongItems.map((q) => q.id).sort())
    await playRound(plan2, new Set())
    expect(screen.getByLabelText('Score : 3 bonnes réponses sur 3')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Refaire mes erreurs' })).toBeNull()
    expect(await db.attempts.count()).toBe(n + 3)
  }, 20000)

  it('vrai/faux : FAUX ouvre le champ de justification, affichée avec la justification officielle', async () => {
    await open()
    const plan = prepareQuiz(chapter.quiz, SEED)
    let i = 0
    while (plan[i]!.item.type !== 'true_false') {
      answer(plan[i]!, true)
      click(btn('Suivante'))
      i++
    }
    expect(screen.queryByLabelText('Ta justification')).toBeNull()
    click(btn('Faux'))
    fireEvent.change(screen.getByLabelText('Ta justification'), { target: { value: 'parce que mon avis' } })
    click(btn('Valider'))
    expect(await screen.findByText('parce que mon avis')).toBeInTheDocument()
    expect(screen.getByText('Justification du cours')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /voir dans le cours/ })).toBeInTheDocument()
  })

  it('énoncé en trainLang avec lien « Voir en EN »', async () => {
    await open({ trainLang: 'fr' })
    expect(document.querySelector('.stmt')?.getAttribute('lang')).toBe('fr')
    click(btn('Voir en EN'))
    expect(document.querySelector('p[lang="en"]')).not.toBeNull()
  })

  it('minuteur : le temps écoulé compte comme faux', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    try {
      await open({ quizTimer: 15 })
      expect(screen.getByRole('timer')).toBeInTheDocument()
      await act(async () => {
        await vi.advanceTimersByTimeAsync(16000)
      })
      expect((await screen.findAllByText('Temps écoulé', { exact: false })).length).toBeGreaterThan(0)
      await waitFor(async () => expect(await db.attempts.count()).toBe(1))
      expect((await db.attempts.toArray())[0]?.correct).toBe(false)
    } finally {
      vi.useRealTimers()
    }
  })

  it('pas de minuteur par défaut', async () => {
    await open()
    expect(screen.queryByRole('timer')).toBeNull()
  })
})
