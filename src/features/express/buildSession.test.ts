import { describe, expect, it } from 'vitest'
import type { Chapter, Course, Flashcard, KeyPoint, QuizItem } from '@/content/schema'
import type { Attempt, CardState } from '@/store/db'
import type { DeckCard } from '@/features/flashcards/deck-cards'
import { buildSession, conceptsSeen, EXPRESS_STEPS, type ExpressInput, type ExpressStep } from './buildSession'

const NOW = new Date('2026-11-06T10:00:00Z')
const course = { id: 'c', code: 'S1-C', color: 'lime' } as unknown as Course
const L = (s: string) => ({ fr: s, en: s })

const kp = (id: string, notions?: string[]): KeyPoint => ({ text: L(id), src: [], ...(notions ? { notions } : {}) })
const qz = (id: string, level: QuizItem['level'] = 'remember'): QuizItem => ({
  id,
  type: 'true_false',
  statement: L(id),
  answer: true,
  justification: L('j'),
  level,
  src: [],
})
const fc = (id: string, notions?: string[]): Flashcard => ({ id, front: L('q'), back: L('r'), ...(notions ? { notions } : {}) })
// Fixture minimale : seuls les champs lus par buildSession sont renseignés.
const chapter = (id: string, o: { kps?: KeyPoint[]; quiz?: QuizItem[] } = {}): Chapter =>
  ({ id, glossary: [], keyPoints: o.kps ?? [], quiz: o.quiz ?? [], flashcards: [] }) as unknown as Chapter

function deck(chapters: Chapter[], cards: Record<string, Flashcard[]>): Map<string, DeckCard> {
  const m = new Map<string, DeckCard>()
  for (const [chapterId, list] of Object.entries(cards)) {
    for (const card of list) m.set(card.id, { card, course, chapterId, glossary: new Map() })
  }
  void chapters
  return m
}

function input(chapters: Chapter[], cards: Record<string, Flashcard[]> = {}, o: Partial<ExpressInput> = {}): ExpressInput {
  return {
    pools: chapters.map((c) => ({ course, chapter: c })),
    cards: deck(chapters, cards),
    importance: new Map(),
    cardStates: new Map(),
    attempts: [],
    now: NOW,
    seed: 1,
    ...o,
  }
}

const ids = (steps: ExpressStep[], kind: ExpressStep['kind']) => steps.filter((s) => s.kind === kind).map((s) => s.id)
const state = (cardId: string, due: string, reps = 1): CardState => ({ cardId, due, stability: 5, difficulty: 5, reps, lapses: 0, state: 2 })
const att = (itemId: string, correct: boolean, at = '2026-11-05T10:00:00Z'): Attempt => ({ itemId, kind: 'quiz', correct, at })

/** 3 chapitres bien fournis. */
const rich = () => {
  const chapters = ['a', 'b', 'c'].map((x) =>
    chapter(x, { kps: [kp(`${x}1`), kp(`${x}2`)], quiz: [qz(`${x}-q1`), qz(`${x}-q2`, 'apply'), qz(`${x}-q3`, 'analyze')] }),
  )
  const cards = Object.fromEntries(['a', 'b', 'c'].map((x) => [x, [fc(`${x}-f1`), fc(`${x}-f2`), fc(`${x}-f3`)]]))
  return { chapters, cards }
}

describe('buildSession : forme', () => {
  it('6 étapes : 1 point clé, 3 flashcards, 2 quiz ; le point clé ouvre, puis cartes et quiz alternent', () => {
    const { chapters, cards } = rich()
    const s = buildSession(input(chapters, cards))
    expect(s).toHaveLength(EXPRESS_STEPS)
    expect(s.map((x) => x.kind)).toEqual(['keypoint', 'card', 'quiz', 'card', 'quiz', 'card'])
  })

  it('est déterministe pour une même graine, et varie avec la graine', () => {
    const { chapters, cards } = rich()
    const a = buildSession(input(chapters, cards, { seed: 7 })).map((x) => x.id)
    expect(buildSession(input(chapters, cards, { seed: 7 })).map((x) => x.id)).toEqual(a)
    const others = [1, 2, 3, 4, 5].map((seed) => buildSession(input(chapters, cards, { seed })).map((x) => x.id).join())
    expect(new Set(others).size).toBeGreaterThan(1)
  })
})

describe('buildSession : priorités', () => {
  it('points clés : notions ★★★ d’abord, puis les moins revues', () => {
    const c1 = chapter('a', { kps: [kp('plain'), kp('star-seen', ['n-s1']), kp('star-fresh', ['n-s2']), kp('mid', ['n-m'])] })
    const imp = new Map([
      ['n-s1', 3],
      ['n-s2', 3],
      ['n-m', 2],
    ])
    const seen: Attempt[] = [att('qx', true), att('qx', true)]
    const withQuiz = chapter('a', { kps: c1.keyPoints, quiz: [{ ...qz('qx'), notions: ['n-s1'] }] })
    const s = buildSession(input([withQuiz], {}, { importance: imp, attempts: seen }))
    expect(ids(s, 'keypoint')[0]).toBe('a#kp3') // ★★★ jamais revue
    const two = buildSession(input([withQuiz], {}, { importance: imp, attempts: seen, seed: 9 }))
    expect(ids(two, 'keypoint')).toHaveLength(1 + 3) // repli : le manque de cartes/quiz est comblé par des points clés
    expect(ids(two, 'keypoint').slice(0, 3)).toEqual(['a#kp3', 'a#kp2', 'a#kp4'])
  })

  it('flashcards : dues d’abord (la plus en retard en tête), puis nouvelles, puis non dues', () => {
    const fcs = ['due-old', 'due-new', 'fresh1', 'fresh2', 'later'].map((id) => fc(id))
    const states = new Map([
      ['due-old', state('due-old', '2026-11-01T00:00:00Z')],
      ['due-new', state('due-new', '2026-11-05T00:00:00Z')],
      ['later', state('later', '2026-12-01T00:00:00Z')],
    ])
    const s = buildSession(input([chapter('a', { kps: [kp('k')], quiz: [qz('q1'), qz('q2')] })], { a: fcs }, { cardStates: states }))
    expect(ids(s, 'card')).toEqual(['due-old', 'due-new', expect.stringMatching(/^fresh/)])
    const more = buildSession(input([chapter('a', { quiz: [] })], { a: fcs }, { cardStates: states }))
    // repli : sans quiz ni point clé, toutes les cartes disponibles sont reprises (5), la moins urgente en dernier
    expect(ids(more, 'card')).toHaveLength(5)
    expect(ids(more, 'card').at(-1)).toBe('later')
  })

  it('flashcards neuves : celles d’une notion ★★★ passent avant', () => {
    const fcs = [fc('plain'), fc('star', ['n-s'])]
    const s = buildSession(input([chapter('a')], { a: fcs }, { importance: new Map([['n-s', 3]]), seed: 3 }))
    expect(ids(s, 'card')[0]).toBe('star')
  })

  it('quiz : ratés récemment d’abord, puis apply/analyze, puis le reste', () => {
    const quiz = [qz('easy'), qz('hard1', 'apply'), qz('missed', 'remember'), qz('hard2', 'analyze')]
    const s = buildSession(input([chapter('a', { quiz })], {}, { attempts: [att('missed', false)], seed: 4 }))
    const q = ids(s, 'quiz')
    expect(q[0]).toBe('missed')
    expect(['hard1', 'hard2']).toContain(q[1])
  })

  it('quiz : un item raté puis réussi n’est plus prioritaire ; le plus récemment raté passe en premier', () => {
    const quiz = [qz('redone'), qz('miss-old'), qz('miss-new'), qz('other', 'apply')]
    const attempts = [
      att('redone', false, '2026-11-01T10:00:00Z'),
      att('redone', true, '2026-11-02T10:00:00Z'),
      att('miss-old', false, '2026-11-03T10:00:00Z'),
      att('miss-new', false, '2026-11-04T10:00:00Z'),
    ]
    const s = buildSession(input([chapter('a', { quiz })], {}, { attempts }))
    expect(ids(s, 'quiz').slice(0, 2)).toEqual(['miss-new', 'miss-old'])
  })
})

describe('buildSession : entrelacement entre chapitres', () => {
  it('à priorité égale, les items viennent de chapitres différents', () => {
    const { chapters, cards } = rich()
    const s = buildSession(input(chapters, cards))
    const chaptersOfCards = new Set(s.filter((x) => x.kind === 'card').map((x) => x.chapterId))
    const chaptersOfQuiz = new Set(s.filter((x) => x.kind === 'quiz').map((x) => x.chapterId))
    expect(chaptersOfCards.size).toBe(3)
    expect(chaptersOfQuiz.size).toBe(2)
  })

  it('la priorité l’emporte sur l’entrelacement (cartes dues d’un seul chapitre)', () => {
    const { chapters, cards } = rich()
    const states = new Map(['a-f1', 'a-f2', 'a-f3'].map((id) => [id, state(id, '2026-11-01T00:00:00Z')] as const))
    const s = buildSession(input(chapters, cards, { cardStates: states }))
    expect(ids(s, 'card').sort()).toEqual(['a-f1', 'a-f2', 'a-f3'])
  })
})

describe('buildSession : sessions consécutives', () => {
  it('n’en reprend pas les items de la précédente tant qu’il y en a d’autres', () => {
    const { chapters, cards } = rich()
    const first = buildSession(input(chapters, cards, { seed: 1 }))
    const second = buildSession(input(chapters, cards, { seed: 1, exclude: new Set(first.map((x) => x.id)) }))
    expect(second).toHaveLength(EXPRESS_STEPS)
    const firstIds = new Set(first.map((x) => x.id))
    expect(second.filter((x) => firstIds.has(x.id))).toEqual([])
  })

  it('reprend des items exclus si le contenu manque (repli)', () => {
    const chapters = [chapter('a', { kps: [kp('only')], quiz: [qz('q1')] })]
    const cards = { a: [fc('f1')] }
    const first = buildSession(input(chapters, cards))
    const again = buildSession(input(chapters, cards, { exclude: new Set(first.map((x) => x.id)) }))
    expect(again.map((x) => x.id).sort()).toEqual(first.map((x) => x.id).sort())
  })
})

describe('buildSession : repli si peu de contenu', () => {
  it('sans quiz : les cartes (puis les points clés) comblent jusqu’à 6 étapes', () => {
    const chapters = [chapter('a', { kps: [kp('k1'), kp('k2')] })]
    const cards = { a: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].map((id) => fc(id)) }
    const s = buildSession(input(chapters, cards))
    expect(s).toHaveLength(6)
    expect(ids(s, 'quiz')).toHaveLength(0)
    expect(ids(s, 'card')).toHaveLength(5)
    expect(ids(s, 'keypoint')).toHaveLength(1)
  })

  it('sans cartes : les quiz et points clés comblent', () => {
    const chapters = [chapter('a', { kps: [kp('k1'), kp('k2'), kp('k3')], quiz: ['q1', 'q2', 'q3', 'q4'].map((id) => qz(id)) })]
    const s = buildSession(input(chapters))
    expect(s).toHaveLength(6)
    expect(ids(s, 'card')).toHaveLength(0)
    expect(ids(s, 'quiz')).toHaveLength(4)
    expect(ids(s, 'keypoint')).toHaveLength(2)
  })

  it('très peu de contenu : moins de 6 étapes, sans doublon ; rien du tout : session vide', () => {
    const tiny = buildSession(input([chapter('a', { quiz: [qz('q1')] })]))
    expect(tiny.map((x) => x.id)).toEqual(['q1'])
    expect(buildSession(input([chapter('a')]))).toEqual([])
    expect(buildSession(input([]))).toEqual([])
  })

  it('un chapitre seul : tout vient de ce chapitre', () => {
    const { chapters, cards } = rich()
    const s = buildSession(input([chapters[1]!], { b: cards.b! }))
    expect(new Set(s.map((x) => x.chapterId))).toEqual(new Set(['b']))
    expect(s).toHaveLength(6)
  })
})

describe('conceptsSeen', () => {
  it('compte les notions distinctes, à défaut l’item', () => {
    const base = { course, chapterId: 'a', glossary: new Map() }
    const steps = [
      { ...base, kind: 'keypoint', id: 'k', point: kp('k'), notions: ['n-1'] },
      { ...base, kind: 'quiz', id: 'q', item: qz('q'), order: [], notions: ['n-1', 'n-2'] },
      { ...base, kind: 'quiz', id: 'q2', item: qz('q2'), order: [], notions: [] },
    ] as ExpressStep[]
    expect(conceptsSeen(steps)).toBe(3)
  })
})
