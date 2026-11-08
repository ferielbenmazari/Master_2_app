import type { DataConnection, Peer } from 'peerjs'
import { ALL, TransportError, type GameTransport, type PeerInfo, type WireMessage } from './types'
import { hostPeerId, isWireMessage, mapPeerErrorType, requireRoomCode, STUN_SERVERS } from './room'

/** Attente maximale de la signalisation (ouverture du Peer) et de la connexion à l'hôte. */
const OPEN_TIMEOUT_MS = 12_000

/**
 * Transport WebRTC via PeerJS (signalisation publique gratuite). L'hôte est le Peer `m2rev-<CODE>` ;
 * les invités s'y connectent. PeerJS est chargé à la demande (hors du bundle de démarrage).
 */
export class PeerTransport implements GameTransport {
  selfId = ''
  private peer: Peer | null = null
  private role: 'host' | 'guest' | null = null
  private conns = new Map<string, DataConnection>()
  private closed = false
  private messageCbs = new Set<(from: string, msg: WireMessage) => void>()
  private peerCbs = new Set<(peers: readonly PeerInfo[]) => void>()

  private async createPeer(id?: string): Promise<Peer> {
    if (typeof RTCPeerConnection === 'undefined') throw new TransportError('unsupported')
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      throw new TransportError('offline')
    }
    const { Peer } = await import('peerjs')
    if (this.closed) throw new TransportError('unknown', 'closed')
    const options = { config: { iceServers: STUN_SERVERS.map((s) => ({ ...s })) } }
    const peer = id ? new Peer(id, options) : new Peer(options)
    this.peer = peer
    return peer
  }

  /** Attend l'ouverture du Peer (signalisation), ou rejette (erreur PeerJS, délai dépassé). */
  private waitOpen(peer: Peer): Promise<void> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new TransportError('signaling', 'timeout')),
        OPEN_TIMEOUT_MS,
      )
      peer.once('open', (id) => {
        clearTimeout(timer)
        this.selfId = id
        resolve()
      })
      peer.once('error', (err) => {
        clearTimeout(timer)
        reject(this.toError(err))
      })
    })
  }

  private toError(err: unknown): TransportError {
    if (err instanceof TransportError) return err
    const type = (err as { type?: unknown } | null)?.type
    const online = typeof navigator === 'undefined' || navigator.onLine !== false
    return new TransportError(mapPeerErrorType(typeof type === 'string' ? type : '', online))
  }

  async host(input: string): Promise<void> {
    const code = requireRoomCode(input)
    const peer = await this.createPeer(hostPeerId(code))
    try {
      await this.waitOpen(peer)
    } catch (e) {
      this.close()
      throw e
    }
    this.role = 'host'
    peer.on('connection', (conn) => this.track(conn))
    // erreurs tardives (hors ouverture) : ignorées, la liste de pairs reste la source de vérité
    peer.on('error', () => {})
    // signalisation coupée (mise en veille, perte réseau) : on se reconnecte pour accepter de nouveaux invités
    peer.on('disconnected', () => {
      if (!this.closed && !peer.destroyed) peer.reconnect()
    })
  }

  async join(input: string): Promise<void> {
    const code = requireRoomCode(input)
    const peer = await this.createPeer()
    try {
      await this.waitOpen(peer)
      const conn = peer.connect(hostPeerId(code), { reliable: true, serialization: 'json' })
      await new Promise<void>((resolve, reject) => {
        const timer = setTimeout(
          () => reject(new TransportError('timeout', 'connect')),
          OPEN_TIMEOUT_MS,
        )
        conn.once('open', () => {
          clearTimeout(timer)
          resolve()
        })
        const fail = (err: unknown) => {
          clearTimeout(timer)
          reject(this.toError(err))
        }
        // un hôte introuvable est signalé sur le Peer (peer-unavailable), pas sur la connexion
        peer.once('error', fail)
        conn.once('error', fail)
      })
      this.role = 'guest'
      peer.on('error', () => {})
      this.track(conn)
    } catch (e) {
      this.close()
      throw e
    }
  }

  private track(conn: DataConnection) {
    const register = () => {
      if (this.closed) return
      this.conns.set(conn.peer, conn)
      this.emitPeers()
    }
    if (conn.open) register()
    else conn.once('open', register)
    conn.on('data', (data) => {
      if (isWireMessage(data)) this.messageCbs.forEach((cb) => cb(conn.peer, data))
    })
    const drop = () => {
      if (this.conns.get(conn.peer) === conn) {
        this.conns.delete(conn.peer)
        this.emitPeers()
      }
    }
    conn.on('close', drop)
    conn.on('error', () => {
      drop()
      conn.close()
    })
  }

  send(to: string, msg: WireMessage): void {
    if (this.closed) return
    if (this.role === 'guest') {
      // un invité n'écrit qu'à l'hôte, seul pair connu
      this.conns.forEach((c) => c.send(msg))
    } else if (to === ALL) {
      this.conns.forEach((c) => c.send(msg))
    } else {
      this.conns.get(to)?.send(msg)
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
    this.conns.forEach((c) => c.close())
    this.conns.clear()
    this.peer?.destroy()
    this.peer = null
    this.messageCbs.clear()
    this.peerCbs.clear()
  }

  private emitPeers() {
    const isHost = this.role === 'guest'
    const peers: PeerInfo[] = [...this.conns.keys()].map((id) => ({ id, isHost }))
    this.peerCbs.forEach((cb) => cb(peers))
  }
}
