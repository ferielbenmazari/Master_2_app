import { LocalTransport } from './local-transport'
import { TransportError, type PeerInfo, type WireMessage } from './types'

const open: LocalTransport[] = []
function make() {
  const t = new LocalTransport()
  open.push(t)
  return t
}
afterEach(() => {
  open.splice(0).forEach((t) => t.close())
})

/** Attend le prochain message reçu par `t`. */
function nextMessage(t: LocalTransport) {
  return new Promise<{ from: string; msg: WireMessage }>((resolve) => {
    const off = t.onMessage((from, msg) => {
      off()
      resolve({ from, msg })
    })
  })
}

function nextPeers(t: LocalTransport, pred: (p: readonly PeerInfo[]) => boolean) {
  return new Promise<readonly PeerInfo[]>((resolve) => {
    const off = t.onPeers((p) => {
      if (pred(p)) {
        off()
        resolve(p)
      }
    })
  })
}

async function kindOf(p: Promise<unknown>) {
  try {
    await p
    return null
  } catch (e) {
    return e instanceof TransportError ? e.kind : 'autre'
  }
}

describe('LocalTransport', () => {
  it('un invité rejoint l’hôte, les deux voient l’autre', async () => {
    const host = make()
    const guest = make()
    await host.host('K7PX')
    const hostSees = nextPeers(host, (p) => p.length === 1)
    await guest.join('k7px')
    const seen = await hostSees
    expect(seen).toEqual([{ id: guest.selfId, isHost: false }])
  })

  it('ping/pong entre deux instances', async () => {
    const host = make()
    const guest = make()
    await host.host('PQNG')
    await guest.join('PQNG')

    const atHost = nextMessage(host)
    guest.send('all', { t: 'ping', seq: 1 })
    expect(await atHost).toEqual({ from: guest.selfId, msg: { t: 'ping', seq: 1 } })

    const atGuest = nextMessage(guest)
    host.send(guest.selfId, { t: 'pong', seq: 1 })
    expect(await atGuest).toEqual({ from: host.selfId, msg: { t: 'pong', seq: 1 } })
  })

  it('l’hôte diffuse à tous les invités', async () => {
    const host = make()
    const a = make()
    const b = make()
    await host.host('CAST')
    await a.join('CAST')
    await b.join('CAST')
    const ra = nextMessage(a)
    const rb = nextMessage(b)
    host.send('all', { t: 'lobby' })
    expect((await ra).msg.t).toBe('lobby')
    expect((await rb).msg.t).toBe('lobby')
  })

  it('un message adressé à un invité n’arrive pas aux autres', async () => {
    const host = make()
    const a = make()
    const b = make()
    await host.host('QNKY')
    await a.join('QNKY')
    await b.join('QNKY')
    const received: string[] = []
    b.onMessage((_f, m) => received.push(m.t))
    const ra = nextMessage(a)
    host.send(a.selfId, { t: 'private' })
    await ra
    await new Promise((r) => setTimeout(r, 30))
    expect(received).toEqual([])
  })

  it('les salles ne se mélangent pas', async () => {
    const h1 = make()
    const h2 = make()
    const g2 = make()
    await h1.host('AAAA')
    await h2.host('BBBB')
    await g2.join('BBBB')
    const got: string[] = []
    h1.onMessage((_f, m) => got.push(m.t))
    const atH2 = nextMessage(h2)
    g2.send('all', { t: 'x' })
    await atH2
    await new Promise((r) => setTimeout(r, 30))
    expect(got).toEqual([])
  })

  it('un départ met à jour la liste de pairs de l’hôte', async () => {
    const host = make()
    const guest = make()
    await host.host('QEAV')
    await guest.join('QEAV')
    const gone = nextPeers(host, (p) => p.length === 0)
    guest.close()
    expect(await gone).toEqual([])
  })

  it('l’invité est prévenu quand l’hôte part', async () => {
    const host = make()
    const guest = make()
    await host.host('BYE2')
    await guest.join('BYE2')
    const gone = nextPeers(guest, (p) => p.length === 0)
    host.close()
    expect(await gone).toEqual([])
  })

  it('code inexistant → room-not-found', async () => {
    expect(await kindOf(make().join('ZZZZ'))).toBe('room-not-found')
  })

  it('code déjà pris → code-taken', async () => {
    const host = make()
    await host.host('TAKE')
    expect(await kindOf(make().host('TAKE'))).toBe('code-taken')
  })

  it('code mal formé → invalid-code', async () => {
    expect(await kindOf(make().join('x'))).toBe('invalid-code')
    expect(await kindOf(make().host('0000'))).toBe('invalid-code')
  })

  it('close est idempotent et silencieux ensuite', async () => {
    const host = make()
    await host.host('XDEM')
    host.close()
    host.close()
    expect(() => host.send('all', { t: 'x' })).not.toThrow()
  })
})
