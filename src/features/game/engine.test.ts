import {
  createGuestView,
  createHostState,
  guestReduce,
  hostReduce,
  isChoiceCorrect,
  parseGameMessage,
  rankPlayers,
  scoreFor,
  winners,
  type BattleQuestion,
  type GameMessage,
  type GuestView,
  type HostAction,
  type HostState,
  type Outgoing,
} from './engine'

const L = (s: string) => ({ fr: s, en: `${s}-en` })

const TF: BattleQuestion = {
  id: 'q1',
  kind: 'tf',
  text: L('énoncé 1'),
  options: [],
  correct: true,
  explanation: L('pourquoi 1'),
}
const MCQ: BattleQuestion = {
  id: 'q2',
  kind: 'mcq',
  text: L('énoncé 2'),
  options: [L('a'), L('b'), L('c')],
  correct: [0, 2],
  explanation: L('pourquoi 2'),
}
const QUESTIONS = [TF, MCQ]
const DURATION = 20_000

/** Applique des actions à la suite et cumule les messages émis. */
function run(initial: HostState, actions: HostAction[]) {
  let state = initial
  const out: Outgoing[] = []
  for (const a of actions) {
    const step = hostReduce(state, a)
    state = step.state
    out.push(...step.out)
  }
  return { state, out }
}

function lobby(...guests: string[]): HostState {
  const hello = (id: string): HostAction => ({ type: 'hello', id, name: id, avatar: 'lime' })
  return run(createHostState('H', 2, 20), [hello('H'), ...guests.map(hello)]).state
}

function started(...guests: string[]): HostState {
  return run(lobby(...guests), [{ type: 'start', questions: QUESTIONS, now: 1000 }]).state
}

const msgs = (out: readonly Outgoing[], t: GameMessage['t']) => out.filter((o) => o.msg.t === t)

describe('score', () => {
  it('mauvaise réponse = 0', () => {
    expect(scoreFor(false, 20_000, 20_000)).toBe(0)
  })
  it('500 + round(500 × temps restant / temps total)', () => {
    expect(scoreFor(true, 20_000, 20_000)).toBe(1000)
    expect(scoreFor(true, 0, 20_000)).toBe(500)
    expect(scoreFor(true, 10_000, 20_000)).toBe(750)
    expect(scoreFor(true, 6_000, 20_000)).toBe(650)
    expect(scoreFor(true, 1_234, 20_000)).toBe(500 + Math.round((500 * 1234) / 20000))
  })
  it('borne le temps restant à [0, total]', () => {
    expect(scoreFor(true, -5, 20_000)).toBe(500)
    expect(scoreFor(true, 99_999, 20_000)).toBe(1000)
  })
})

describe('correction', () => {
  it('QCM : ensemble exact, sans crédit partiel', () => {
    expect(isChoiceCorrect(MCQ, [0, 2])).toBe(true)
    expect(isChoiceCorrect(MCQ, [2, 0])).toBe(true)
    expect(isChoiceCorrect(MCQ, [0])).toBe(false)
    expect(isChoiceCorrect(MCQ, [0, 1, 2])).toBe(false)
    expect(isChoiceCorrect(MCQ, true)).toBe(false)
    expect(isChoiceCorrect(TF, true)).toBe(true)
    expect(isChoiceCorrect(TF, [0])).toBe(false)
  })
})

describe('salon', () => {
  it('accueille les joueurs et diffuse le salon, hôte compris', () => {
    const { state, out } = run(createHostState('H', 10, 20), [
      { type: 'hello', id: 'H', name: 'Hôte', avatar: 'cyan' },
      { type: 'hello', id: 'A', name: '  Alice  ', avatar: 'coral' },
    ])
    expect(state.players.map((p) => [p.id, p.name, p.avatar])).toEqual([
      ['H', 'Hôte', 'cyan'],
      ['A', 'Alice', 'coral'],
    ])
    const last = msgs(out, 'lobby').at(-1)!.msg
    expect(last).toMatchObject({ t: 'lobby', hostId: 'H', locked: false, total: 10, seconds: 20 })
  })

  it('un second hello met à jour le joueur au lieu de le dupliquer', () => {
    const s = run(lobby('A'), [{ type: 'hello', id: 'A', name: 'Alice2', avatar: 'gold' }]).state
    expect(s.players.filter((p) => p.id === 'A')).toHaveLength(1)
    expect(s.players.find((p) => p.id === 'A')).toMatchObject({ name: 'Alice2', avatar: 'gold' })
  })

  it('un invité qui part du salon en est retiré', () => {
    const { state, out } = run(lobby('A', 'B'), [{ type: 'peers', ids: ['B'] }])
    expect(state.players.map((p) => p.id)).toEqual(['H', 'B'])
    expect(msgs(out, 'lobby')).toHaveLength(1)
  })

  it('ne démarre pas sans question', () => {
    const s = lobby('A')
    expect(hostReduce(s, { type: 'start', questions: [], now: 0 }).state.phase).toBe('lobby')
  })

  it('refuse un arrivant une fois la partie commencée et le lui dit', () => {
    const s = started('A')
    const step = hostReduce(s, { type: 'hello', id: 'Z', name: 'Zoé', avatar: 'lime' })
    expect(step.state.players.map((p) => p.id)).toEqual(['H', 'A'])
    expect(step.out).toEqual([
      { to: 'Z', msg: expect.objectContaining({ t: 'lobby', locked: true }) },
    ])
  })
})

describe('manche', () => {
  it('le départ envoie start puis la première question, sans la réponse', () => {
    const { out } = run(lobby('A'), [{ type: 'start', questions: QUESTIONS, now: 1000 }])
    expect(out.map((o) => o.msg.t)).toEqual(['start', 'question'])
    const q = out[1]!.msg
    expect(q).toMatchObject({
      t: 'question',
      index: 0,
      total: 2,
      durationMs: DURATION,
      kind: 'tf',
      multi: false,
    })
    const json = JSON.stringify(out)
    expect(json).not.toContain('pourquoi')
    expect(json).not.toContain('"correct"')
    expect(json).not.toContain('"answer"')
  })

  it('un QCM à plusieurs bonnes réponses est marqué multi, sans dire lesquelles', () => {
    const s = run(started('A'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 2000 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 2000 },
    ]).state
    const { out } = hostReduce(s, { type: 'next', now: 5000 })
    const q = out[0]!.msg
    expect(q).toMatchObject({ t: 'question', index: 1, kind: 'mcq', multi: true })
    expect(JSON.stringify(out)).not.toContain('pourquoi')
    expect(Object.keys(q)).not.toContain('correct')
  })

  it('fin de manche quand tous les joueurs connectés ont répondu : points au temps restant', () => {
    const { state, out } = run(started('A', 'B'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 + 0 }, // 20 s restantes → 1000
      { type: 'answer', id: 'A', index: 0, choice: true, now: 1000 + 10_000 }, // 750
      { type: 'answer', id: 'B', index: 0, choice: false, now: 1000 + 2_000 }, // faux → 0
    ])
    expect(state.phase).toBe('reveal')
    const byId = Object.fromEntries(state.players.map((p) => [p.id, p.score]))
    expect(byId).toEqual({ H: 1000, A: 750, B: 0 })
    const reveal = msgs(out, 'reveal')[0]!.msg
    expect(reveal).toMatchObject({
      t: 'reveal',
      index: 0,
      correct: true,
      explanation: L('pourquoi 1'),
    })
    expect((reveal as Extract<GameMessage, { t: 'reveal' }>).results).toEqual([
      { id: 'H', answered: true, correct: true, gain: 1000 },
      { id: 'A', answered: true, correct: true, gain: 750 },
      { id: 'B', answered: true, correct: false, gain: 0 },
    ])
    const scores = msgs(out, 'scores')[0]!.msg as Extract<GameMessage, { t: 'scores' }>
    expect(scores.ranking.map((r) => [r.id, r.rank, r.score])).toEqual([
      ['H', 1, 1000],
      ['A', 2, 750],
      ['B', 3, 0],
    ])
  })

  it('pas de fin de manche tant qu’il manque une réponse', () => {
    const { state, out } = run(started('A'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1500 },
    ])
    expect(state.phase).toBe('question')
    expect(out).toEqual([])
  })

  it('fin de manche quand le temps est écoulé (tick), les absents font 0', () => {
    const base = run(started('A'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 },
    ]).state
    expect(hostReduce(base, { type: 'tick', now: 1000 + DURATION - 1 }).state.phase).toBe(
      'question',
    )
    const { state } = hostReduce(base, { type: 'tick', now: 1000 + DURATION })
    expect(state.phase).toBe('reveal')
    expect(state.players.map((p) => p.score)).toEqual([1000, 0])
  })

  it('ignore les réponses tardives', () => {
    const s = started('A')
    const late = hostReduce(s, {
      type: 'answer',
      id: 'A',
      index: 0,
      choice: true,
      now: 1000 + DURATION + 1,
    })
    expect(late.state.answers).toEqual({})
    const edge = hostReduce(s, {
      type: 'answer',
      id: 'A',
      index: 0,
      choice: true,
      now: 1000 + DURATION,
    })
    expect(edge.state.answers['A']).toBeDefined()
  })

  it('ignore les doublons : la première réponse compte', () => {
    const { state } = run(started('A'), [
      { type: 'answer', id: 'A', index: 0, choice: false, now: 2000 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 2100 },
    ])
    expect(state.answers['A']!.choice).toBe(false)
  })

  it('ignore les réponses d’une autre question, d’un inconnu, ou mal formées', () => {
    const s = started('A')
    const same = (a: HostAction) => hostReduce(s, a).state.answers
    expect(same({ type: 'answer', id: 'A', index: 1, choice: true, now: 2000 })).toEqual({})
    expect(same({ type: 'answer', id: 'Z', index: 0, choice: true, now: 2000 })).toEqual({})
    expect(same({ type: 'answer', id: 'A', index: 0, choice: [0], now: 2000 })).toEqual({})
  })

  it('QCM : indices hors bornes, vides ou booléen refusés ; doublons et ordre normalisés', () => {
    const q2 = run(started('A'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1100 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 1100 },
      { type: 'next', now: 5000 },
    ]).state
    for (const choice of [[], [3], [-1], true] as const) {
      expect(
        hostReduce(q2, { type: 'answer', id: 'A', index: 1, choice, now: 5100 }).state.answers,
      ).toEqual({})
    }
    const ok = hostReduce(q2, {
      type: 'answer',
      id: 'A',
      index: 1,
      choice: [2, 0, 2],
      now: 5100,
    }).state
    expect(ok.answers['A']!.choice).toEqual([0, 2])
  })

  it('« next » n’avance qu’après la correction', () => {
    const s = started('A')
    expect(hostReduce(s, { type: 'next', now: 3000 }).state).toBe(s)
  })

  it('les scores se cumulent d’une manche à l’autre, la question suivante est envoyée', () => {
    const { state, out } = run(started('A'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 1000 },
      { type: 'next', now: 9000 },
      { type: 'answer', id: 'H', index: 1, choice: [0, 2], now: 9000 + 10_000 },
      { type: 'answer', id: 'A', index: 1, choice: [1], now: 9000 + 1000 },
    ])
    expect(state.phase).toBe('reveal')
    expect(state.players.map((p) => p.score)).toEqual([1750, 1000])
    expect(msgs(out, 'question')).toHaveLength(1)
    const reveal = msgs(out, 'reveal')[1]!.msg as Extract<GameMessage, { t: 'reveal' }>
    expect(reveal.correct).toEqual([0, 2])
  })
})

describe('déconnexion', () => {
  it('la partie continue : le joueur parti n’est plus attendu', () => {
    const afterOne = run(started('A', 'B'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1500 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 1500 },
    ]).state
    expect(afterOne.phase).toBe('question') // B est attendu
    const { state, out } = hostReduce(afterOne, { type: 'peers', ids: ['A'] })
    expect(state.phase).toBe('reveal')
    expect(msgs(out, 'reveal')).toHaveLength(1)
    const ranking = (msgs(out, 'scores')[0]!.msg as Extract<GameMessage, { t: 'scores' }>).ranking
    const b = ranking.find((r) => r.id === 'B')!
    expect(b).toMatchObject({ connected: false, score: 0 })
  })

  it('le joueur parti reste au classement avec ses points et la partie va au podium', () => {
    const s = run(started('A', 'B'), [
      { type: 'answer', id: 'B', index: 0, choice: true, now: 1000 },
      { type: 'peers', ids: ['A'] },
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 1000 },
      { type: 'next', now: 3000 },
      { type: 'answer', id: 'H', index: 1, choice: [0, 2], now: 3000 },
      { type: 'answer', id: 'A', index: 1, choice: [0, 2], now: 3000 },
      { type: 'next', now: 4000 },
    ])
    expect(s.state.phase).toBe('podium')
    const end = msgs(s.out, 'end')[0]!.msg as Extract<GameMessage, { t: 'end' }>
    expect(end.ranking).toHaveLength(3)
    expect(end.ranking.find((r) => r.id === 'B')).toMatchObject({ connected: false, score: 1000 })
  })

  it('la déconnexion du dernier joueur non répondu clôt la manche mais pas si personne ne reste', () => {
    const { state } = run(started('A'), [{ type: 'peers', ids: [] }])
    // seul l'hôte reste connecté, il n'a pas répondu : on attend toujours
    expect(state.phase).toBe('question')
    expect(state.players.find((p) => p.id === 'A')!.connected).toBe(false)
  })

  it('une réponse d’un joueur déconnecté est ignorée', () => {
    const s = run(started('A'), [{ type: 'peers', ids: [] }]).state
    expect(
      hostReduce(s, { type: 'answer', id: 'A', index: 0, choice: true, now: 1100 }).state.answers,
    ).toEqual({})
  })
})

describe('classement et podium', () => {
  const p = (id: string, score: number) => ({
    id,
    name: id,
    avatar: 'lime' as const,
    connected: true,
    score,
  })

  it('trie par score, égalités au même rang (1, 1, 3), ordre d’arrivée conservé', () => {
    const r = rankPlayers([p('a', 500), p('b', 900), p('c', 900), p('d', 100)], { b: 900 })
    expect(r.map((x) => [x.id, x.rank])).toEqual([
      ['b', 1],
      ['c', 1],
      ['a', 3],
      ['d', 4],
    ])
    expect(r[0]!.gain).toBe(900)
    expect(r[1]!.gain).toBe(0)
  })

  it('winners renvoie tous les ex æquo en tête', () => {
    expect(winners(rankPlayers([p('a', 5), p('b', 5), p('c', 1)])).map((x) => x.id)).toEqual([
      'a',
      'b',
    ])
    expect(winners(rankPlayers([p('a', 5), p('b', 4)])).map((x) => x.id)).toEqual(['a'])
    expect(winners([])).toEqual([])
  })

  it('égalité parfaite au podium (personne ne répond)', () => {
    const { out } = run(started('A'), [
      { type: 'tick', now: 1000 + DURATION },
      { type: 'next', now: 30_000 },
      { type: 'tick', now: 30_000 + DURATION },
      { type: 'next', now: 60_000 },
    ])
    const end = msgs(out, 'end')[0]!.msg as Extract<GameMessage, { t: 'end' }>
    expect(end.ranking.map((r) => r.rank)).toEqual([1, 1])
  })
})

describe('messages réseau', () => {
  it('valide et nettoie un hello', () => {
    expect(parseGameMessage({ t: 'hello', name: '  Zoé   la  rapide  ', avatar: 'cyan' })).toEqual({
      t: 'hello',
      name: 'Zoé la rapide',
      avatar: 'cyan',
    })
    expect(parseGameMessage({ t: 'hello', name: '', avatar: 'cyan' })).toMatchObject({
      name: 'Joueur',
    })
    expect(parseGameMessage({ t: 'hello', name: 'x'.repeat(100), avatar: 'cyan' })).toMatchObject({
      name: 'x'.repeat(20),
    })
    expect(parseGameMessage({ t: 'hello', name: 'x', avatar: 'rouge' })).toBeNull()
  })
  it('rejette les types inconnus et les messages mal formés', () => {
    expect(parseGameMessage({ t: 'ping' })).toBeNull()
    expect(parseGameMessage({ t: 'answer', index: 'a', choice: true })).toBeNull()
    expect(parseGameMessage({ t: 'answer', index: 1, choice: ['x'] })).toBeNull()
    expect(parseGameMessage({ t: 'answer', index: 1, choice: [1] })).toEqual({
      t: 'answer',
      index: 1,
      choice: [1],
    })
    expect(parseGameMessage({ t: 'question', index: 0 })).toBeNull()
    expect(parseGameMessage({ t: 'end', ranking: [{ id: 1 }] })).toBeNull()
  })
  it('les messages émis par l’hôte survivent à un aller-retour JSON', () => {
    const { out } = run(started('A'), [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 },
      { type: 'answer', id: 'A', index: 0, choice: false, now: 1000 },
    ])
    expect(out.length).toBeGreaterThan(0)
    for (const o of out) {
      const wire = JSON.parse(JSON.stringify(o.msg)) as { t: string }
      expect(parseGameMessage(wire)).toEqual(o.msg)
    }
  })
})

describe('vue du joueur', () => {
  const feed = (v: GuestView, msg: GameMessage, now = 0) =>
    guestReduce(v, { type: 'msg', msg, now })

  it('suit tout le déroulé à partir des seuls messages', () => {
    const { out } = run(lobby('A'), [
      { type: 'start', questions: QUESTIONS, now: 1000 },
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 },
      { type: 'answer', id: 'A', index: 0, choice: false, now: 1000 },
      { type: 'next', now: 2000 },
      { type: 'tick', now: 2000 + DURATION },
      { type: 'next', now: 99_000 },
    ])
    let v = feed(createGuestView(), lobbyOf(lobby('A')), 5)
    expect(v.phase).toBe('lobby')
    expect(v.players.map((x) => x.id)).toEqual(['H', 'A'])

    const phases: string[] = []
    for (const o of out) {
      v = feed(v, o.msg, 7)
      phases.push(`${o.msg.t}:${v.phase}`)
    }
    expect(phases).toEqual([
      'start:lobby',
      'question:question',
      'reveal:reveal',
      'scores:reveal',
      'question:question',
      'reveal:reveal',
      'scores:reveal',
      'end:podium',
    ])
    expect(v.ranking.map((r) => r.id)).toEqual(['H', 'A'])
  })

  it('verrouille la réponse (une seule) et la remet à zéro à la question suivante', () => {
    const q = {
      t: 'question',
      index: 0,
      total: 2,
      durationMs: DURATION,
      kind: 'tf',
      text: L('x'),
      options: [],
      multi: false,
      origin: null,
    } as const
    let v = feed(createGuestView(), q, 42)
    expect(v.receivedAt).toBe(42)
    v = guestReduce(v, { type: 'answered', choice: true })
    v = guestReduce(v, { type: 'answered', choice: false })
    expect(v.myChoice).toBe(true)
    v = feed(v, { ...q, index: 1 })
    expect(v.myChoice).toBeNull()
  })

  it('ignore un reveal d’une autre question et un salon tardif', () => {
    const q = {
      t: 'question',
      index: 1,
      total: 2,
      durationMs: DURATION,
      kind: 'tf',
      text: L('x'),
      options: [],
      multi: false,
      origin: null,
    } as const
    let v = feed(createGuestView(), q)
    const reveal = {
      t: 'reveal',
      index: 0,
      correct: true,
      explanation: L('e'),
      results: [],
    } as const
    expect(feed(v, reveal).phase).toBe('question')
    v = feed(v, lobbyOf(lobby('A')))
    expect(v.phase).toBe('question')
  })

  it('un salon verrouillé met l’arrivant en « partie déjà commencée »', () => {
    const locked = hostReduce(started('A'), { type: 'hello', id: 'Z', name: 'Z', avatar: 'lime' })
      .out[0]!.msg
    expect(feed(createGuestView(), locked).phase).toBe('locked')
  })
})

function lobbyOf(s: HostState): GameMessage {
  const step = hostReduce(s, { type: 'hello', id: 'H', name: 'H', avatar: 'lime' })
  return step.out[0]!.msg
}

describe('réglages de la partie (temps, langue, correction)', () => {
  const hello = (id: string): HostAction => ({ type: 'hello', id, name: id, avatar: 'lime' })
  const custom = (seconds: number, lang: 'fr' | 'en', feedback: boolean) =>
    run(createHostState('H', 2, seconds, lang, feedback), [hello('H'), hello('A')])

  it('par défaut : français et correction détaillée', () => {
    const { out } = run(createHostState('H', 2, 20), [hello('H')])
    expect(msgs(out, 'lobby')[0]!.msg).toMatchObject({ lang: 'fr', feedback: true, seconds: 20 })
  })

  it('le salon et le départ annoncent temps, langue et correction aux invités', () => {
    const { state, out } = custom(45, 'en', false)
    expect(msgs(out, 'lobby').at(-1)!.msg).toMatchObject({
      seconds: 45,
      lang: 'en',
      feedback: false,
    })
    const started = run(state, [{ type: 'start', questions: QUESTIONS, now: 1000 }])
    expect(msgs(started.out, 'start')[0]!.msg).toMatchObject({
      t: 'start',
      seconds: 45,
      lang: 'en',
      feedback: false,
    })
    expect(msgs(started.out, 'question')[0]!.msg).toMatchObject({ durationMs: 45_000 })
  })

  it('le score suit la durée choisie (10 s : 5 s restantes = 750 points)', () => {
    const { state } = custom(10, 'fr', true)
    const s = run(state, [
      { type: 'start', questions: QUESTIONS, now: 1000 },
      { type: 'answer', id: 'H', index: 0, choice: true, now: 1000 + 5_000 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 1000 + 10_000 },
    ]).state
    expect(Object.fromEntries(s.players.map((p) => [p.id, p.score]))).toEqual({ H: 750, A: 500 })
  })

  it('la durée choisie est celle du temps écoulé (30 s)', () => {
    const { state } = custom(30, 'fr', true)
    const s = run(state, [{ type: 'start', questions: QUESTIONS, now: 0 }]).state
    expect(hostReduce(s, { type: 'tick', now: 29_999 }).state.phase).toBe('question')
    expect(hostReduce(s, { type: 'tick', now: 30_000 }).state.phase).toBe('reveal')
  })

  it('sans correction détaillée, la justification n’est pas envoyée', () => {
    const { state } = custom(20, 'fr', false)
    const { out } = run(state, [
      { type: 'start', questions: QUESTIONS, now: 0 },
      { type: 'answer', id: 'H', index: 0, choice: true, now: 100 },
      { type: 'answer', id: 'A', index: 0, choice: false, now: 100 },
    ])
    const reveal = msgs(out, 'reveal')[0]!.msg as Extract<GameMessage, { t: 'reveal' }>
    expect(reveal.correct).toBe(true) // la bonne réponse reste donnée
    expect(reveal.explanation).toEqual({ fr: '', en: '' })
    expect(JSON.stringify(out)).not.toContain('pourquoi')
  })

  it('avec correction détaillée, la justification est envoyée', () => {
    const { state } = custom(20, 'en', true)
    const { out } = run(state, [
      { type: 'start', questions: QUESTIONS, now: 0 },
      { type: 'tick', now: 20_000 },
    ])
    expect((msgs(out, 'reveal')[0]!.msg as Extract<GameMessage, { t: 'reveal' }>).explanation).toEqual(
      L('pourquoi 1'),
    )
  })

  it('la vue d’un joueur retient langue et correction annoncées par l’hôte', () => {
    const { out } = custom(15, 'en', false)
    let v: GuestView = createGuestView()
    expect(v).toMatchObject({ lang: 'fr', feedback: true })
    for (const o of out) v = guestReduce(v, { type: 'msg', msg: o.msg, now: 1 })
    expect(v).toMatchObject({ phase: 'lobby', seconds: 15, lang: 'en', feedback: false })
  })

  it('un message sans réglage (ancienne version) retombe sur français + correction', () => {
    const m = parseGameMessage({ t: 'start', total: 5, seconds: 20 } as never)
    expect(m).toEqual({ t: 'start', total: 5, seconds: 20, lang: 'fr', feedback: true })
    const bad = parseGameMessage({ t: 'start', total: 5, seconds: 20, lang: 'de' } as never)
    expect(bad).toMatchObject({ lang: 'fr' })
  })
})

describe('mode sans minuteur (seconds = 0)', () => {
  const hello = (id: string): HostAction => ({ type: 'hello', id, name: id, avatar: 'lime' })
  const open = () =>
    run(createHostState('H', 2, 0), [
      hello('H'),
      hello('A'),
      hello('B'),
      { type: 'start', questions: QUESTIONS, now: 0 },
    ])

  it('annonce une durée nulle et ne clôt jamais la manche au temps', () => {
    const { state, out } = open()
    expect(msgs(out, 'question')[0]!.msg).toMatchObject({ durationMs: 0 })
    expect(hostReduce(state, { type: 'tick', now: 10 * 3600_000 }).state.phase).toBe('question')
  })

  it('accepte une réponse aussi tardive soit-elle', () => {
    const { state } = open()
    const s = hostReduce(state, {
      type: 'answer',
      id: 'A',
      index: 0,
      choice: true,
      now: 3600_000,
    }).state
    expect(s.answers.A).toBeDefined()
  })

  it('se termine quand tous les connectés ont répondu : 1000 points par bonne réponse, vite ou lentement', () => {
    const { state } = run(open().state, [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 10 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 900_000 },
      { type: 'answer', id: 'B', index: 0, choice: false, now: 20 },
    ])
    expect(state.phase).toBe('reveal')
    expect(Object.fromEntries(state.players.map((p) => [p.id, p.score]))).toEqual({
      H: 1000,
      A: 1000,
      B: 0,
    })
  })

  it('l’hôte peut clore la manche : les absents comptent 0', () => {
    const { state, out } = run(open().state, [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 10 },
      { type: 'close' },
    ])
    expect(state.phase).toBe('reveal')
    const reveal = msgs(out, 'reveal')[0]!.msg as Extract<GameMessage, { t: 'reveal' }>
    expect(reveal.results.map((r) => [r.id, r.answered, r.gain])).toEqual([
      ['H', true, 1000],
      ['A', false, 0],
      ['B', false, 0],
    ])
  })

  it('« close » est sans effet hors d’une manche en cours', () => {
    const lobbyState = run(createHostState('H', 2, 0), [hello('H')]).state
    expect(hostReduce(lobbyState, { type: 'close' }).out).toEqual([])
    expect(hostReduce(lobbyState, { type: 'close' }).state).toBe(lobbyState)
  })

  it('un joueur qui part pendant la manche ne bloque pas l’attente', () => {
    const afterAnswers = run(open().state, [
      { type: 'answer', id: 'H', index: 0, choice: true, now: 10 },
      { type: 'answer', id: 'A', index: 0, choice: true, now: 10 },
    ]).state
    expect(afterAnswers.phase).toBe('question')
    expect(hostReduce(afterAnswers, { type: 'peers', ids: ['A'] }).state.phase).toBe('reveal')
  })
})

describe('origine de la question (matière et chapitre)', () => {
  const ORIGIN = { course: 'REC1', chapter: 3, title: L('Littérature') }
  const withOrigin: BattleQuestion = { ...TF, origin: ORIGIN }

  it('la question envoyée aux joueurs indique matière et chapitre', () => {
    const { out } = run(lobby('A'), [{ type: 'start', questions: [withOrigin], now: 0 }])
    expect(msgs(out, 'question')[0]!.msg).toMatchObject({ origin: ORIGIN })
  })

  it('sans origine connue, la question reste valable (origin = null)', () => {
    const { out } = run(lobby('A'), [{ type: 'start', questions: [TF], now: 0 }])
    expect(msgs(out, 'question')[0]!.msg).toMatchObject({ origin: null })
  })

  it('la vue d’un joueur la conserve ; un message mal formé est rejeté', () => {
    const { out } = run(lobby('A'), [{ type: 'start', questions: [withOrigin], now: 5 }])
    const q = msgs(out, 'question')[0]!.msg
    const v = guestReduce(createGuestView(), { type: 'msg', msg: q, now: 5 })
    expect(v.question?.origin).toEqual(ORIGIN)
    expect(parseGameMessage({ ...(q as object), origin: { course: 1 } } as never)).toBeNull()
    expect(parseGameMessage({ ...(q as object), origin: undefined } as never)).toMatchObject({
      origin: null,
    })
  })
})
