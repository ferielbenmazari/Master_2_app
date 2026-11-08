import { ALL, TransportError, type GameTransport, type PeerInfo, type WireMessage } from './types'
import { isWireMessage, requireRoomCode } from './room'

/** Délai laissé aux autres onglets pour répondre (sondage de code, accueil d'un invité). */
const PROBE_MS = 80
const JOIN_TIMEOUT_MS = 1500

type Frame =
  | { k: 'probe'; from: string }
  | { k: 'taken'; to: string }
  | { k: 'join'; from: string }
  | { k: 'welcome'; from: string; to: string }
  | { k: 'leave'; from: string }
  | { k: 'data'; from: string; to: string; msg: WireMessage }

function isFrame(value: unknown): value is Frame {
  if (typeof value !== 'object' || value === null) return false
  const f = value as Record<string, unknown>
  switch (f.k) {
    case 'probe':
    case 'join':
    case 'leave':
      return typeof f.from === 'string'
    case 'taken':
      return typeof f.to === 'string'
    case 'welcome':
      return typeof f.from === 'string' && typeof f.to === 'string'
    case 'data':
      return typeof f.from === 'string' && typeof f.to === 'string' && isWireMessage(f.msg)
    default:
      return false
  }
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

/**
 * Transport « même appareil » : les onglets d'un même navigateur se parlent via BroadcastChannel.
 * Même protocole en étoile que le transport PeerJS (un hôte, des invités). Sert aux tests
 * automatisés et, plus tard, au repli hors-ligne.
 */
export class LocalTransport implements GameTransport {
  selfId = ''
  private channel: BroadcastChannel | null = null
  private role: 'host' | 'guest' | null = null
  private hostId = ''
  private guests = new Set<string>()
  private closed = false
  private messageCbs = new Set<(from: string, msg: WireMessage) => void>()
  private peerCbs = new Set<(peers: readonly PeerInfo[]) => void>()
  private onFrame: ((f: Frame) => void) | null = null

  private open(code: string): BroadcastChannel {
    if (typeof BroadcastChannel === 'undefined') throw new TransportError('unsupported')
    this.selfId = `local-${Math.random().toString(36).slice(2, 8)}`
    const channel = new BroadcastChannel(`m2rev-local-${code}`)
    channel.onmessage = (e: MessageEvent<unknown>) => {
      if (isFrame(e.data)) this.onFrame?.(e.data)
    }
    this.channel = channel
    return channel
  }

  private post(frame: Frame) {
    this.channel?.postMessage(frame)
  }

  async host(input: string): Promise<void> {
    const code = requireRoomCode(input)
    const channel = this.open(code)
    let taken = false
    this.onFrame = (f) => {
      if (f.k === 'taken' && f.to === this.selfId) taken = true
    }
    channel.postMessage({ k: 'probe', from: this.selfId } satisfies Frame)
    await wait(PROBE_MS)
    if (this.closed) throw new TransportError('unknown', 'closed')
    if (taken) {
      this.close()
      throw new TransportError('code-taken', code)
    }
    this.role = 'host'
    this.onFrame = (f) => this.hostFrame(f)
  }

  async join(input: string): Promise<void> {
    const code = requireRoomCode(input)
    this.open(code)
    this.role = 'guest'
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.close()
        reject(new TransportError('room-not-found', code))
      }, JOIN_TIMEOUT_MS)
      this.onFrame = (f) => {
        if (f.k === 'welcome' && f.to === this.selfId) {
          clearTimeout(timer)
          this.hostId = f.from
          this.onFrame = (g) => this.guestFrame(g)
          resolve()
        }
      }
      this.post({ k: 'join', from: this.selfId })
    })
    this.emitPeers()
  }

  private hostFrame(f: Frame) {
    switch (f.k) {
      case 'probe':
        this.post({ k: 'taken', to: f.from })
        break
      case 'join':
        this.guests.add(f.from)
        this.post({ k: 'welcome', from: this.selfId, to: f.from })
        this.emitPeers()
        break
      case 'leave':
        if (this.guests.delete(f.from)) this.emitPeers()
        break
      case 'data':
        if (this.guests.has(f.from) && (f.to === this.selfId || f.to === ALL)) {
          this.deliver(f.from, f.msg)
        }
        break
      default:
        break
    }
  }

  private guestFrame(f: Frame) {
    if (f.k === 'leave' && f.from === this.hostId) {
      this.hostId = ''
      this.emitPeers()
    } else if (f.k === 'data' && f.from === this.hostId && (f.to === this.selfId || f.to === ALL)) {
      this.deliver(f.from, f.msg)
    }
  }

  send(to: string, msg: WireMessage): void {
    if (this.closed || !this.role) return
    if (this.role === 'guest') {
      if (this.hostId) this.post({ k: 'data', from: this.selfId, to: this.hostId, msg })
    } else {
      this.post({ k: 'data', from: this.selfId, to, msg })
    }
  }

  onMessage(cb: (from: string, msg: WireMessage) => void): () => void {
    this.messageCbs.add(cb)
    return () => this.messageCbs.delete(cb)
  }

  onPeers(cb: (peers: readonly PeerInfo[]) => void): () => void {
    this.peerCbs.add(cb)
    return () => this.peerCbs.delete(cb)
  }

  close(): void {
    if (this.closed) return
    this.closed = true
    if (this.channel && this.role) this.post({ k: 'leave', from: this.selfId })
    this.channel?.close()
    this.channel = null
    this.onFrame = null
    this.guests.clear()
    this.messageCbs.clear()
    this.peerCbs.clear()
  }

  private deliver(from: string, msg: WireMessage) {
    this.messageCbs.forEach((cb) => cb(from, msg))
  }

  private emitPeers() {
    const peers: PeerInfo[] =
      this.role === 'host'
        ? [...this.guests].map((id) => ({ id, isHost: false }))
        : this.hostId
          ? [{ id: this.hostId, isHost: true }]
          : []
    this.peerCbs.forEach((cb) => cb(peers))
  }
}
