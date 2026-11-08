import {
  asPing,
  asPong,
  computeRtt,
  generateRoomCode,
  hostPeerId,
  isValidRoomCode,
  isWireMessage,
  makePing,
  makePong,
  mapPeerErrorType,
  normalizeRoomCode,
  requireRoomCode,
  ROOM_ALPHABET,
  rttStats,
} from './room'
import { TransportError } from './types'

describe('code de salle', () => {
  it('génère 4 caractères lisibles, toujours valides', () => {
    for (let i = 0; i < 200; i++) {
      const code = generateRoomCode()
      expect(code).toHaveLength(4)
      expect(isValidRoomCode(code)).toBe(true)
    }
  })

  it('exclut les caractères ambigus 0 O 1 I L', () => {
    for (const c of '0O1IL') expect(ROOM_ALPHABET).not.toContain(c)
  })

  it('couvre les bornes du générateur injectable', () => {
    expect(generateRoomCode(() => 0)).toBe('AAAA')
    expect(generateRoomCode(() => 0.999999)).toBe('9999')
    expect(generateRoomCode(() => 1)).toBe('9999')
  })

  it('normalise la saisie', () => {
    expect(normalizeRoomCode(' k7-px ')).toBe('K7PX')
  })

  it('valide longueur et alphabet', () => {
    expect(isValidRoomCode('K7PX')).toBe(true)
    expect(isValidRoomCode('K7P')).toBe(false)
    expect(isValidRoomCode('K7PXA')).toBe(false)
    expect(isValidRoomCode('K0PX')).toBe(false)
    expect(isValidRoomCode('')).toBe(false)
  })

  it('requireRoomCode normalise ou lève invalid-code', () => {
    expect(requireRoomCode('k7px')).toBe('K7PX')
    expect(() => requireRoomCode('zz')).toThrow(TransportError)
    try {
      requireRoomCode('zz')
    } catch (e) {
      expect((e as TransportError).kind).toBe('invalid-code')
    }
  })

  it('identifiant PeerJS de l’hôte', () => {
    expect(hostPeerId('K7PX')).toBe('m2rev-K7PX')
  })
})

describe('erreurs PeerJS', () => {
  it('traduit les types connus', () => {
    expect(mapPeerErrorType('peer-unavailable', true)).toBe('room-not-found')
    expect(mapPeerErrorType('unavailable-id', true)).toBe('code-taken')
    for (const t of ['network', 'server-error', 'socket-error', 'socket-closed']) {
      expect(mapPeerErrorType(t, true)).toBe('signaling')
    }
    expect(mapPeerErrorType('browser-incompatible', true)).toBe('unsupported')
    expect(mapPeerErrorType('webrtc', true)).toBe('unknown')
  })

  it('hors-ligne prime sur le reste', () => {
    expect(mapPeerErrorType('network', false)).toBe('offline')
    expect(mapPeerErrorType('peer-unavailable', false)).toBe('offline')
  })
})

describe('messages', () => {
  it('reconnaît un message valide', () => {
    expect(isWireMessage({ t: 'ping' })).toBe(true)
    expect(isWireMessage({ t: 3 })).toBe(false)
    expect(isWireMessage(null)).toBe(false)
    expect(isWireMessage('ping')).toBe(false)
    expect(isWireMessage([])).toBe(false)
  })

  it('ping → pong conserve seq et horodatage', () => {
    const ping = makePing(4, 1000)
    expect(ping).toEqual({ t: 'ping', seq: 4, sentAt: 1000 })
    expect(makePong(ping)).toEqual({ t: 'pong', seq: 4, sentAt: 1000 })
  })

  it('asPing / asPong rejettent les messages mal formés', () => {
    expect(asPing({ t: 'ping', seq: 1, sentAt: 5 })).toEqual({ t: 'ping', seq: 1, sentAt: 5 })
    expect(asPing({ t: 'pong', seq: 1, sentAt: 5 })).toBeNull()
    expect(asPing({ t: 'ping', seq: 'x', sentAt: 5 })).toBeNull()
    expect(asPong({ t: 'pong', seq: 1, sentAt: 5 })).toEqual({ t: 'pong', seq: 1, sentAt: 5 })
    expect(asPong({ t: 'pong', seq: 1 })).toBeNull()
  })
})

describe('RTT', () => {
  it('calcule et arrondit le temps aller-retour', () => {
    expect(computeRtt(makePong(makePing(1, 1000)), 1042.6)).toBe(43)
  })

  it('refuse un horodatage incohérent', () => {
    expect(computeRtt({ t: 'pong', seq: 1, sentAt: 2000 }, 1000)).toBeNull()
    expect(computeRtt({ t: 'pong', seq: 1, sentAt: Number.NaN }, 1000)).toBeNull()
  })

  it('statistiques', () => {
    expect(rttStats([])).toBeNull()
    expect(rttStats([10, 30, 20])).toEqual({ count: 3, min: 10, avg: 20, max: 30 })
  })
})
