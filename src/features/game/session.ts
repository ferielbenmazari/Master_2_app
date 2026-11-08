import type { CourseColor } from '@/lib/course-color'
import {
  createGuestView,
  createHostState,
  guestReduce,
  hostReduce,
  parseGameMessage,
  QUESTION_COUNT,
  QUESTION_SECONDS,
  type BattleQuestion,
  type Choice,
  type GameMessage,
  type GuestView,
  type HostAction,
  type HostState,
} from './engine'
import { ALL, type GameTransport } from './transport/types'

/** Magasin observable minimal, compatible `useSyncExternalStore`. */
abstract class Store<T> {
  private listeners = new Set<() => void>()
  protected abstract snapshot: T

  subscribe = (cb: () => void): (() => void) => {
    this.listeners.add(cb)
    return () => this.listeners.delete(cb)
  }
  getSnapshot = (): T => this.snapshot
  protected emit() {
    this.listeners.forEach((cb) => cb())
  }
}

export interface Me {
  readonly name: string
  readonly avatar: CourseColor
}

export interface HostSnapshot {
  readonly state: HostState
  /** Ce que voit l'hôte en tant que joueur (mêmes messages que les invités). */
  readonly view: GuestView
  readonly selfId: string
}

export interface HostOptions {
  readonly me: Me
  readonly total?: number
  readonly seconds?: number
  readonly clock?: () => number
  readonly tickMs?: number
}

/** Côté hôte : relie le réseau au réducteur `hostReduce`, joue aussi sa propre partie. */
export class HostSession extends Store<HostSnapshot> {
  protected snapshot: HostSnapshot
  private state: HostState
  private view = createGuestView()
  private unsubs: (() => void)[] = []
  private timer: ReturnType<typeof setInterval> | null = null
  private closed = false
  private readonly clock: () => number
  private readonly transport: GameTransport
  private readonly opts: HostOptions

  constructor(transport: GameTransport, opts: HostOptions) {
    super()
    this.transport = transport
    this.opts = opts
    this.clock = opts.clock ?? Date.now
    this.state = createHostState('', opts.total ?? QUESTION_COUNT, opts.seconds ?? QUESTION_SECONDS)
    this.snapshot = { state: this.state, view: this.view, selfId: '' }
  }

  /** Ouvre la salle `code` ; rejette avec une `TransportError`. */
  async open(code: string): Promise<void> {
    await this.transport.host(code)
    if (this.closed) return
    const hostId = this.transport.selfId
    this.state = createHostState(
      hostId,
      this.opts.total ?? QUESTION_COUNT,
      this.opts.seconds ?? QUESTION_SECONDS,
    )
    this.unsubs = [
      this.transport.onMessage((from, wire) => this.receive(from, wire)),
      this.transport.onPeers((peers) =>
        this.dispatch({ type: 'peers', ids: peers.map((p) => p.id) }),
      ),
    ]
    this.dispatch({
      type: 'hello',
      id: hostId,
      name: this.opts.me.name,
      avatar: this.opts.me.avatar,
    })
  }

  private receive(from: string, wire: Parameters<typeof parseGameMessage>[0]) {
    const msg = parseGameMessage(wire)
    if (!msg) return
    if (msg.t === 'hello')
      this.dispatch({ type: 'hello', id: from, name: msg.name, avatar: msg.avatar })
    else if (msg.t === 'answer') {
      this.dispatch({
        type: 'answer',
        id: from,
        index: msg.index,
        choice: msg.choice,
        now: this.clock(),
      })
    }
  }

  private dispatch(action: HostAction) {
    if (this.closed) return
    const step = hostReduce(this.state, action)
    this.state = step.state
    for (const { to, msg } of step.out) {
      this.transport.send(to, msg)
      if (to === ALL || to === this.state.hostId) this.feedView(msg)
    }
    this.publish()
  }

  private feedView(msg: GameMessage) {
    this.view = guestReduce(this.view, { type: 'msg', msg, now: this.clock() })
  }

  private publish() {
    this.snapshot = { state: this.state, view: this.view, selfId: this.state.hostId }
    this.emit()
  }

  /** Lance la partie avec ces questions (tirées par l'appelant). */
  start(questions: readonly BattleQuestion[]) {
    this.dispatch({ type: 'start', questions, now: this.clock() })
    if (this.state.phase === 'question' && !this.timer) {
      this.timer = setInterval(
        () => this.dispatch({ type: 'tick', now: this.clock() }),
        this.opts.tickMs ?? 250,
      )
    }
  }

  /** Question suivante (ou podium) depuis l'écran de correction. */
  next() {
    this.dispatch({ type: 'next', now: this.clock() })
    if (this.state.phase === 'podium') this.stopTimer()
  }

  /** Réponse de l'hôte, qui joue comme les autres. */
  answer(choice: Choice) {
    const index = this.view.question?.index
    if (index === undefined) return
    this.view = guestReduce(this.view, { type: 'answered', choice })
    this.dispatch({ type: 'answer', id: this.state.hostId, index, choice, now: this.clock() })
  }

  private stopTimer() {
    if (this.timer) clearInterval(this.timer)
    this.timer = null
  }

  close() {
    if (this.closed) return
    this.stopTimer()
    this.unsubs.forEach((u) => u())
    this.unsubs = []
    this.closed = true
    this.transport.close()
    this.emit()
  }
}

export interface GuestSnapshot {
  readonly view: GuestView
  readonly selfId: string
  /** Vrai si l'hôte a disparu après la connexion. */
  readonly hostLeft: boolean
}

/** Côté invité : ne connaît que les messages reçus de l'hôte. */
export class GuestSession extends Store<GuestSnapshot> {
  protected snapshot: GuestSnapshot
  private view = createGuestView()
  private hostLeft = false
  private unsubs: (() => void)[] = []
  private closed = false
  private readonly clock: () => number
  private readonly transport: GameTransport
  private readonly me: Me

  constructor(transport: GameTransport, me: Me, clock?: () => number) {
    super()
    this.transport = transport
    this.me = me
    this.clock = clock ?? Date.now
    this.snapshot = { view: this.view, selfId: '', hostLeft: false }
  }

  /** Rejoint la salle `code` puis se présente à l'hôte ; rejette avec une `TransportError`. */
  async join(code: string): Promise<void> {
    this.unsubs = [
      this.transport.onMessage((_from, wire) => {
        const msg = parseGameMessage(wire)
        if (!msg) return
        this.view = guestReduce(this.view, { type: 'msg', msg, now: this.clock() })
        this.publish()
      }),
      this.transport.onPeers((peers) => {
        if (peers.length === 0 && !this.closed) {
          this.hostLeft = true
          this.publish()
        }
      }),
    ]
    await this.transport.join(code)
    if (this.closed) return
    this.send({ t: 'hello', name: this.me.name, avatar: this.me.avatar })
    this.publish()
  }

  private send(msg: GameMessage) {
    this.transport.send(ALL, msg)
  }

  answer(choice: Choice) {
    const q = this.view.question
    if (!q || this.view.phase !== 'question' || this.view.myChoice !== null) return
    this.view = guestReduce(this.view, { type: 'answered', choice })
    this.send({ t: 'answer', index: q.index, choice })
    this.publish()
  }

  private publish() {
    this.snapshot = { view: this.view, selfId: this.transport.selfId, hostLeft: this.hostLeft }
    this.emit()
  }

  close() {
    if (this.closed) return
    this.closed = true
    this.unsubs.forEach((u) => u())
    this.unsubs = []
    this.transport.close()
  }
}
