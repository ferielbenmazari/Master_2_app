import { TransportError, type TransportErrorKind, type WireMessage } from './types'

/** Alphabet lisible : sans 0/O, 1/I/L (confusions à l'oral et à l'écran). */
export const ROOM_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
export const ROOM_CODE_LENGTH = 4
export const PEER_ID_PREFIX = 'm2rev-'

/** Serveurs STUN publics de Google (pas de TURN : pas de relais, on teste si le NAT laisse passer). */
export const STUN_SERVERS: readonly { urls: string }[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
]

/** Code de salle aléatoire (ex. `K7PX`). `random` est injectable pour les tests. */
export function generateRoomCode(random: () => number = Math.random): string {
  let code = ''
  for (let i = 0; i < ROOM_CODE_LENGTH; i++) {
    const idx = Math.min(ROOM_ALPHABET.length - 1, Math.floor(random() * ROOM_ALPHABET.length))
    code += ROOM_ALPHABET[idx]
  }
  return code
}

/** Saisie utilisateur → code canonique (majuscules, sans espaces ni tirets). */
export function normalizeRoomCode(input: string): string {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, '')
}

export function isValidRoomCode(code: string): boolean {
  return code.length === ROOM_CODE_LENGTH && [...code].every((c) => ROOM_ALPHABET.includes(c))
}

/** Normalise et valide, ou lève `TransportError('invalid-code')`. */
export function requireRoomCode(input: string): string {
  const code = normalizeRoomCode(input)
  if (!isValidRoomCode(code)) throw new TransportError('invalid-code', input)
  return code
}

/** Identifiant PeerJS de l'hôte d'une salle. */
export function hostPeerId(code: string): string {
  return `${PEER_ID_PREFIX}${code}`
}

/** Traduit une erreur PeerJS (`err.type`) en erreur de transport. */
export function mapPeerErrorType(type: string, online: boolean): TransportErrorKind {
  if (!online) return 'offline'
  switch (type) {
    case 'peer-unavailable':
      return 'room-not-found'
    case 'unavailable-id':
      return 'code-taken'
    case 'network':
    case 'server-error':
    case 'socket-error':
    case 'socket-closed':
      return 'signaling'
    case 'browser-incompatible':
      return 'unsupported'
    default:
      return 'unknown'
  }
}

/** Valide qu'une donnée reçue est bien un message (objet avec un `t` texte). */
export function isWireMessage(value: unknown): value is WireMessage {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    typeof (value as { t?: unknown }).t === 'string'
  )
}

// --- Ping / pong (spike) ---

export type PingMessage = { readonly t: 'ping'; readonly seq: number; readonly sentAt: number }
export type PongMessage = { readonly t: 'pong'; readonly seq: number; readonly sentAt: number }

export function makePing(seq: number, now: number): PingMessage {
  return { t: 'ping', seq, sentAt: now }
}

/** Le pong renvoie tel quel l'horodatage du ping : seul l'émetteur mesure, sans horloge partagée. */
export function makePong(ping: PingMessage): PongMessage {
  return { t: 'pong', seq: ping.seq, sentAt: ping.sentAt }
}

function hasSeqAndTime(msg: WireMessage): msg is WireMessage & { seq: number; sentAt: number } {
  return Number.isFinite(msg.seq) && Number.isFinite(msg.sentAt)
}

export function asPing(msg: WireMessage): PingMessage | null {
  return msg.t === 'ping' && hasSeqAndTime(msg) ? makePing(msg.seq, msg.sentAt) : null
}

export function asPong(msg: WireMessage): PongMessage | null {
  return msg.t === 'pong' && hasSeqAndTime(msg)
    ? { t: 'pong', seq: msg.seq, sentAt: msg.sentAt }
    : null
}

/** Temps aller-retour en ms (arrondi), ou null si l'horodatage est incohérent. */
export function computeRtt(pong: PongMessage, now: number): number | null {
  const rtt = now - pong.sentAt
  return Number.isFinite(rtt) && rtt >= 0 ? Math.round(rtt) : null
}

export type RttStats = { count: number; min: number; avg: number; max: number }

export function rttStats(samples: readonly number[]): RttStats | null {
  if (samples.length === 0) return null
  const sum = samples.reduce((a, b) => a + b, 0)
  return {
    count: samples.length,
    min: Math.min(...samples),
    avg: Math.round(sum / samples.length),
    max: Math.max(...samples),
  }
}
