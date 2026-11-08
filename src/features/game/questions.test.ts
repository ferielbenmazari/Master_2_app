import { loadAllChapters, loadChapter } from '@/content/loader'
import type { Chapter, QuizItem } from '@/content/schema'
import { isChoiceCorrect } from './engine'
import { countQuizItems, pickBattleQuestions, toBattleQuestion } from './questions'

const L = (s: string) => ({ fr: s, en: `${s}-en` })
const base = { level: 'remember' as const, src: [], notions: [] }

const tf = (n: number, answer = true): QuizItem =>
  ({
    ...base,
    id: `t-${n}`,
    type: 'true_false',
    statement: L(`vf ${n}`),
    answer,
    justification: L(`just ${n}`),
  }) as QuizItem
const mcq = (n: number): QuizItem =>
  ({
    ...base,
    id: `m-${n}`,
    type: 'mcq',
    question: L(`qcm ${n}`),
    options: [L('o0'), L('o1'), L('o2'), L('o3')],
    correct: [1, 3],
    explanation: L(`expl ${n}`),
  }) as QuizItem

const chapterOf = (id: string, quiz: QuizItem[], courseId = 'rec1', order = 1) =>
  ({ id, courseId, order, title: L(`titre ${id}`), quiz }) as unknown as Chapter

describe('origine des questions (matière et chapitre)', () => {
  it('chaque question porte sa matière (en majuscules), son numéro de chapitre et son titre bilingue', () => {
    const chapters = [
      chapterOf('c1', [tf(1), tf(2)], 'rec1', 3),
      chapterOf('c2', [mcq(1), mcq(2)], 'isi1', 7),
    ]
    const q = pickBattleQuestions(chapters, 4, 9)
    const byId = Object.fromEntries(q.map((x) => [x.id, x.origin]))
    expect(byId['t-1']).toEqual({ course: 'REC1', chapter: 3, title: L('titre c1') })
    expect(byId['m-2']).toEqual({ course: 'ISI1', chapter: 7, title: L('titre c2') })
    expect(q.every((x) => x.origin !== undefined)).toBe(true)
  })
})

describe('sélection des questions', () => {
  const chapters = [
    chapterOf('c1', [tf(1), tf(2), tf(3), mcq(1), mcq(2)]),
    chapterOf('c2', [tf(4), tf(5), tf(6), tf(7), mcq(3), mcq(4)]),
  ]

  it('tire 10 questions distinctes, vrai/faux et QCM', () => {
    const q = pickBattleQuestions(chapters, 10, 123)
    expect(q).toHaveLength(10)
    expect(new Set(q.map((x) => x.id)).size).toBe(10)
    expect(q.some((x) => x.kind === 'tf')).toBe(true)
    expect(q.some((x) => x.kind === 'mcq')).toBe(true)
  })

  it('est déterministe pour une graine, et varie avec elle', () => {
    const ids = (seed: number) => pickBattleQuestions(chapters, 10, seed).map((x) => x.id)
    expect(ids(5)).toEqual(ids(5))
    expect(ids(5)).not.toEqual(ids(6))
  })

  it('rend moins de questions si le fonds est plus petit, dédoublonne, et gère zéro', () => {
    expect(pickBattleQuestions(chapters.slice(0, 1), 10, 1)).toHaveLength(5)
    expect(pickBattleQuestions([chapters[0]!, chapters[0]!], 10, 1)).toHaveLength(5)
    expect(pickBattleQuestions([], 10, 1)).toEqual([])
    expect(pickBattleQuestions(chapters, 0, 1)).toEqual([])
    expect(countQuizItems(chapters)).toBe(11)
  })

  it('un QCM suit l’ordre mélangé : les bonnes réponses restent les mêmes textes', () => {
    for (let seed = 1; seed <= 20; seed++) {
      for (const q of pickBattleQuestions([chapterOf('c', [mcq(1)])], 1, seed)) {
        expect(q.kind).toBe('mcq')
        expect(q.options.map((o) => o.fr).sort()).toEqual(['o0', 'o1', 'o2', 'o3'])
        const good = (q.correct as number[]).map((i) => q.options[i]!.fr).sort()
        expect(good).toEqual(['o1', 'o3'])
      }
    }
  })

  it('un vrai/faux garde sa réponse et sa justification', () => {
    const [q] = pickBattleQuestions([chapterOf('c', [tf(1, false)])], 1, 1)
    expect(q).toMatchObject({ kind: 'tf', correct: false, options: [], explanation: L('just 1') })
    expect(isChoiceCorrect(q!, false)).toBe(true)
  })

  it('fonctionne sur le vrai contenu du dépôt', async () => {
    const chapter = await loadChapter('rec1-05-qualite-validite-ethique')
    const q = pickBattleQuestions([chapter], 10, 42)
    expect(q.length).toBeGreaterThan(0)
    for (const item of q) {
      expect(item.text.fr.length).toBeGreaterThan(0)
      expect(item.explanation.fr.length).toBeGreaterThan(0)
      if (item.kind === 'mcq')
        expect(Array.isArray(item.correct) && item.correct.length > 0).toBe(true)
    }
    const raw = chapter.quiz.find((x) => x.type === 'mcq')
    if (raw) {
      const prepared = toBattleQuestion({ item: raw, order: raw.options.map((_, i) => i) })
      expect(prepared.correct).toEqual(raw.type === 'mcq' ? raw.correct : [])
    }
  })

  it('tous les cours chargent', async () => {
    const all = await loadAllChapters('rec1')
    expect(countQuizItems(all)).toBeGreaterThan(10)
  })
})
