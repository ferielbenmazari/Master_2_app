import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { getCourses, loadAllChapters, loadChapter } from '@/content/loader'
import type { Chapter, WritingItem } from '@/content/schema'
import AppRoutes from '@/routes'
import { db } from '@/store/db'
import { PrefsProvider } from '@/store/PrefsProvider'
import { DEFAULT_PREFS, PREFS_KEY } from '@/store/prefs'
import { splitSentence } from '@/lib/writing'

vi.mock('@/lib/celebrate', () => ({ comboBurst: vi.fn(), flashOk: vi.fn(), flashKo: vi.fn() }))

const CH = 'rec1-05-qualite-validite-ethique'
const PATH = `/matiere/rec1/chapitre/${CH}/anglais`

let chapter: Chapter
const item = <K extends WritingItem['kind']>(id: string, kind: K) => {
  const found = chapter.writing.find((w) => w.id === id && w.kind === kind)
  if (!found) throw new Error(`item ${id} (${kind}) introuvable`)
  return found as Extract<WritingItem, { kind: K }>
}

async function open(path = PATH) {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test' }))
  localStorage.setItem('m2.effects', 'off')
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
  render(
    <PrefsProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </PrefsProvider>,
  )
  await screen.findByRole('tablist', { name: 'Niveaux de l’atelier' }, { timeout: 5000 })
}

const click = (el: HTMLElement) => fireEvent.click(el)
const tab = (n: number) => screen.getByRole('tab', { name: new RegExp(`^Niveau ${n} `) })

beforeAll(async () => {
  chapter = await loadChapter(CH)
})
beforeEach(async () => {
  localStorage.clear()
  await db.attempts.clear()
  await db.activity.clear()
})
afterEach(() => vi.restoreAllMocks())

describe('atelier anglais REC1-05', () => {
  it('affiche 4 niveaux, le niveau 1 est sélectionné, les 5 items sont répartis', async () => {
    await open()
    expect(screen.getAllByRole('tab')).toHaveLength(4)
    expect(tab(1)).toHaveAttribute('aria-selected', 'true')
    expect(tab(1)).toHaveTextContent('01 ORDRE')
    expect(tab(2)).toHaveAccessibleName('Niveau 2 : Trous, 1 exercice')
    expect(tab(3)).toHaveAccessibleName('Niveau 3 : Erreur, 2 exercices')
    expect(screen.getByText('Exercice 1 sur 1')).toBeInTheDocument()
  })

  it('niveau 1 : mots mélangés (pas dans l’ordre), tap pour placer/retirer, bonne phrase validée', async () => {
    const it1 = item('rec1-05-wr-01', 'reorder')
    await open()
    const bank = screen.getByRole('group', { name: 'Mots à placer' })
    const shown = within(bank)
      .getAllByRole('button')
      .map((b) => b.textContent)
    expect(shown).toHaveLength(splitSentence(it1.answer).length)
    expect(shown).not.toEqual(splitSentence(it1.answer))

    const first = within(bank).getAllByRole('button')[0]!
    click(first)
    expect(first).toBeDisabled()
    click(screen.getByRole('button', { name: `Retirer « ${first.textContent} »` }))
    expect(first).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Vérifier' })).toBeDisabled()

    for (const w of splitSentence(it1.answer)) {
      const b = within(bank)
        .getAllByRole('button', { name: w })
        .find((x) => !(x as HTMLButtonElement).disabled)!
      click(b)
    }
    click(screen.getByRole('button', { name: 'Vérifier' }))
    expect(screen.getByRole('group', { name: 'Correct' })).toBeInTheDocument()
    await waitFor(async () => expect(await db.attempts.toArray()).toHaveLength(1))
    const [a] = await db.attempts.toArray()
    expect(a).toMatchObject({ itemId: 'rec1-05-wr-01', kind: 'writing', correct: true })
  })

  it('niveau 1 : mauvais ordre → phrase attendue affichée, tentative fausse', async () => {
    await open()
    const bank = screen.getByRole('group', { name: 'Mots à placer' })
    for (const b of within(bank).getAllByRole('button')) click(b) // ordre mélangé
    click(screen.getByRole('button', { name: 'Vérifier' }))
    expect(screen.getByRole('group', { name: 'Raté' })).toBeInTheDocument()
    expect(screen.getByText('Phrase attendue')).toBeInTheDocument()
    await waitFor(async () => expect((await db.attempts.toArray())[0]?.correct).toBe(false))
  })

  it('niveau 1 : récapitulatif de niveau puis passage au niveau suivant', async () => {
    await open()
    const bank = screen.getByRole('group', { name: 'Mots à placer' })
    for (const w of splitSentence(item('rec1-05-wr-01', 'reorder').answer)) {
      click(
        within(bank)
          .getAllByRole('button', { name: w })
          .find((x) => !(x as HTMLButtonElement).disabled)!,
      )
    }
    click(screen.getByRole('button', { name: 'Vérifier' }))
    click(screen.getByRole('button', { name: 'Voir mon résultat' }))
    expect(screen.getByRole('heading', { name: 'Niveau terminé' })).toBeInTheDocument()
    expect(screen.getByText('1 réussi sur 1')).toBeInTheDocument()
    click(screen.getByRole('button', { name: 'Niveau suivant : Trous' }))
    expect(tab(2)).toHaveAttribute('aria-selected', 'true')
  })

  it('niveau 2 : variantes acceptées, traduction après validation', async () => {
    await open()
    click(tab(2))
    const g1 = screen.getByLabelText('Trou 1 sur 2')
    const g2 = screen.getByLabelText('Trou 2 sur 2')
    expect(screen.queryByText(/^FR/)).toBeNull()
    fireEvent.change(g1, { target: { value: 'Controls for' } })
    fireEvent.change(g2, { target: { value: 'rules out.' } })
    click(screen.getByRole('button', { name: 'Vérifier' }))
    expect(screen.getByRole('group', { name: 'Correct' })).toBeInTheDocument()
    expect(g1).toHaveAttribute('data-state', 'right')
    expect(screen.getByText(/contrôle les variables parasites/)).toBeInTheDocument()
  })

  it('niveau 2 : trou faux → bonne réponse affichée, indice dérivé de la réponse', async () => {
    await open()
    click(tab(2))
    click(screen.getByRole('button', { name: 'Indice' }))
    expect(screen.getByLabelText('Trou 1 sur 2')).toHaveAttribute('placeholder', 'c_______')
    fireEvent.change(screen.getByLabelText('Trou 1 sur 2'), { target: { value: 'controls' } })
    fireEvent.change(screen.getByLabelText('Trou 2 sur 2'), { target: { value: 'removes' } })
    click(screen.getByRole('button', { name: 'Vérifier' }))
    expect(screen.getByRole('group', { name: 'Raté' })).toBeInTheDocument()
    expect(screen.getByLabelText('Trou 2 sur 2')).toHaveAttribute('data-state', 'wrong')
    expect(screen.getByText('eliminates / rules out')).toBeInTheDocument()
  })

  it('niveau 3 : mot du fragment fautif → correct, phrase corrigée et explication FR + EN', async () => {
    await open()
    click(tab(3))
    click(screen.getByRole('button', { name: 'Actually,' }))
    expect(screen.getByRole('group', { name: 'Correct' })).toBeInTheDocument()
    expect(
      screen.getByText('Currently, plagiarism is a big problem in universities.'),
    ).toBeInTheDocument()
    expect(screen.getByText(/Faux-ami/)).toBeInTheDocument()
    expect(screen.getByText(/False friend/)).toBeInTheDocument()
  })

  it('niveau 3 : mot hors du fragment → raté ; le « of » du fragment compte, pas celui de « validity of »', async () => {
    await open()
    click(tab(3))
    click(screen.getByRole('button', { name: 'Actually,' })) // 1er exercice
    click(screen.getByRole('button', { name: 'Exercice suivant' }))
    const sentence = screen.getByRole('group', { name: 'Phrase à corriger' })
    click(within(sentence).getAllByRole('button', { name: 'of' })[0]!) // « validity of »
    expect(screen.getByRole('group', { name: 'Raté' })).toBeInTheDocument()
    expect(screen.getByText('« depend of »')).toBeInTheDocument()
    await waitFor(async () => expect(await db.attempts.count()).toBe(2))
  })

  it('niveau 4 : mots-clés trouvés / manquants, réponse modèle, checklist, tournures utiles', async () => {
    await open()
    click(tab(4))
    expect(screen.getByRole('button', { name: 'Vérifier' })).toBeDisabled()
    fireEvent.change(screen.getByLabelText('Ta rédaction en anglais'), {
      target: {
        value:
          'Internal validity controls extraneous variables. External validity is about whether findings can be generalized.',
      },
    })
    click(screen.getByRole('button', { name: 'Vérifier' }))
    const g = screen.getByRole('group', { name: '4 mots-clés sur 5' })
    const chips = within(g)
      .getAllByRole('listitem')
      .filter((li) => li.classList.contains('kw'))
    const state = (k: string) =>
      chips.find((li) => li.textContent?.startsWith(k))?.getAttribute('data-state')
    expect(state('alternative explanations')).toBe('missing')
    expect(state('generalis')).toBe('found')
    expect(state('internal validity')).toBe('found')
    expect(within(g).getByText('Réponse modèle')).toBeInTheDocument()
    expect(within(g).getAllByRole('checkbox')).toHaveLength(
      item('rec1-05-wr-05', 'free').checklist.length,
    )
    expect(within(g).getByText('refers to')).toBeInTheDocument()
    await waitFor(async () => {
      const [a] = await db.attempts.toArray()
      expect(a).toMatchObject({
        itemId: 'rec1-05-wr-05',
        kind: 'writing',
        correct: true,
        score: 0.8,
      })
    })
  })

  it('chapitre sans atelier → état vide', async () => {
    // un chapitre du contenu réel sans atelier (le contenu évolue : on le cherche plutôt que de le figer)
    const all = (await Promise.all(getCourses().map((c) => loadAllChapters(c.id)))).flat()
    const empty = all.find((c) => c.writing.length === 0)
    if (!empty) return
    localStorage.setItem(PREFS_KEY, JSON.stringify({ ...DEFAULT_PREFS, pseudo: 'Test' }))
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
    render(
      <PrefsProvider>
        <MemoryRouter initialEntries={[`/matiere/${empty.courseId}/chapitre/${empty.id}/anglais`]}>
          <AppRoutes />
        </MemoryRouter>
      </PrefsProvider>,
    )
    expect(
      await screen.findByText('Pas encore d’atelier pour ce chapitre.', {}, { timeout: 5000 }),
    ).toBeInTheDocument()
  })
})
