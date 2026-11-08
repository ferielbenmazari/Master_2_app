import { GuestSession, HostSession } from './session'
import { LocalTransport } from './transport/local-transport'
import type { BattleQuestion } from './engine'

const L = (s: string) => ({ fr: s, en: `${s}-en` })
const QUESTIONS: BattleQuestion[] = [
  {
    id: 'q1',
    kind: 'tf',
    text: L('énoncé 1'),
    options: [],
    correct: true,
    explanation: L('pourquoi 1'),
  },
  {
    id: 'q2',
    kind: 'mcq',
    text: L('énoncé 2'),
    options: [L('a'), L('b'), L('c')],
    correct: [0, 2],
    explanation: L('pourquoi 2'),
  },
]

const sessions: { close(): void }[] = []
afterEach(() => sessions.splice(0).forEach((s) => s.close()))

async function until(cond: () => boolean, label: string, ms = 3000) {
  const t0 = Date.now()
  while (!cond()) {
    if (Date.now() - t0 > ms) throw new Error(`délai dépassé : ${label}`)
    await new Promise((r) => setTimeout(r, 10))
  }
}

async function room(code: string, guests: string[]) {
  const host = new HostSession(new LocalTransport(), {
    me: { name: 'Hôte', avatar: 'lime' },
    total: 2,
    tickMs: 20,
  })
  sessions.push(host)
  await host.open(code)
  const joined: GuestSession[] = []
  for (const name of guests) {
    const g = new GuestSession(new LocalTransport(), { name, avatar: 'coral' })
    sessions.push(g)
    await g.join(code)
    joined.push(g)
  }
  await until(
    () => host.getSnapshot().view.players.length === guests.length + 1,
    'tous dans le salon',
  )
  return { host, guests: joined }
}

describe('partie complète via le transport local (hôte + 2 invités)', () => {
  it('salon → questions → corrections → podium, sans fuite des réponses', async () => {
    const { host, guests } = await room('ABCD', ['Alice', 'Bob'])
    const [alice, bob] = guests as [GuestSession, GuestSession]
    expect(alice.getSnapshot().view.players.map((p) => p.name)).toEqual(['Hôte', 'Alice', 'Bob'])

    host.start(QUESTIONS)
    await until(() => alice.getSnapshot().view.phase === 'question', 'question 1 reçue')
    const q = alice.getSnapshot().view.question!
    expect(JSON.stringify(q)).not.toContain('pourquoi')
    expect(alice.getSnapshot().view.reveal).toBeNull()

    host.answer(true)
    alice.answer(true)
    bob.answer(false)
    await until(() => bob.getSnapshot().view.phase === 'reveal', 'correction 1')
    expect(bob.getSnapshot().view.reveal).toMatchObject({
      correct: true,
      explanation: L('pourquoi 1'),
    })
    const rank = bob.getSnapshot().view.ranking
    expect(rank[2]).toMatchObject({ name: 'Bob', score: 0 })
    expect(rank[0]!.score).toBeGreaterThanOrEqual(500)

    host.next()
    await until(() => alice.getSnapshot().view.question?.index === 1, 'question 2')
    host.answer([0, 2])
    alice.answer([0])
    // Bob se déconnecte : la manche se termine sans lui
    bob.close()
    await until(() => alice.getSnapshot().view.phase === 'reveal', 'correction 2 sans Bob')

    host.next()
    await until(() => alice.getSnapshot().view.phase === 'podium', 'podium')
    const final = alice.getSnapshot().view.ranking
    expect(final.map((p) => p.name)).toEqual(['Hôte', 'Alice', 'Bob'])
    expect(final[2]!.connected).toBe(false)
    expect(host.getSnapshot().state.phase).toBe('podium')
  })

  it('le temps écoulé clôt la manche sans réponse', async () => {
    const short = new HostSession(new LocalTransport(), {
      me: { name: 'X', avatar: 'lime' },
      total: 1,
      seconds: 1,
      tickMs: 20,
    })
    sessions.push(short)
    await short.open('JKMN')
    const g = new GuestSession(new LocalTransport(), { name: 'Y', avatar: 'cyan' })
    sessions.push(g)
    await g.join('JKMN')
    await until(() => short.getSnapshot().view.players.length === 2, 'salon')
    short.start(QUESTIONS.slice(0, 1))
    await until(() => g.getSnapshot().view.phase === 'reveal', 'temps écoulé', 3000)
    expect(g.getSnapshot().view.reveal!.results.every((r) => !r.answered)).toBe(true)
  })

  it('un arrivant en cours de partie est prévenu que la salle est fermée', async () => {
    const { host } = await room('PQRS', ['Alice'])
    host.start(QUESTIONS)
    const late = new GuestSession(new LocalTransport(), { name: 'Retard', avatar: 'gold' })
    sessions.push(late)
    await late.join('PQRS')
    await until(() => late.getSnapshot().view.phase === 'locked', 'salle verrouillée')
  })

  it('l’hôte qui part est signalé aux invités', async () => {
    const { host, guests } = await room('TUVW', ['Alice'])
    host.close()
    await until(() => guests[0]!.getSnapshot().hostLeft, 'hôte parti')
  })
})
