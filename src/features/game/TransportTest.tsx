import { useEffect, useRef, useState } from 'react'
import { LogIn, Plus, Radio, Wifi, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Radar from '@/components/ui/Radar'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'
import { LocalTransport } from './transport/local-transport'
import { PeerTransport } from './transport/peer-transport'
import {
  asPing,
  asPong,
  computeRtt,
  generateRoomCode,
  makePing,
  makePong,
  normalizeRoomCode,
  rttStats,
} from './transport/room'
import { ALL, TransportError, type GameTransport, type PeerInfo } from './transport/types'

type Kind = 'peer' | 'local'
type Phase = 'idle' | 'connecting' | 'ready'

const BLIPS = [
  { top: '30%', left: '68%' },
  { top: '70%', left: '26%' },
  { top: '24%', left: '30%' },
  { top: '72%', left: '70%' },
]

function createTransport(kind: Kind): GameTransport {
  return kind === 'local' ? new LocalTransport() : new PeerTransport()
}

/** Page de test du transport (T16) : créer / rejoindre une salle, lister les pairs, mesurer le ping. */
export default function TransportTest() {
  const t = UI.net
  const [kind, setKind] = useState<Kind>('peer')
  const [phase, setPhase] = useState<Phase>('idle')
  const [role, setRole] = useState<'host' | 'guest'>('host')
  const [code, setCode] = useState('')
  const [input, setInput] = useState('')
  const [peers, setPeers] = useState<readonly PeerInfo[]>([])
  const [rtts, setRtts] = useState<Record<string, number[]>>({})
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const transport = useRef<GameTransport | null>(null)
  const unsubs = useRef<(() => void)[]>([])
  const seq = useRef(0)
  const hadPeer = useRef(false)

  function teardown() {
    unsubs.current.forEach((u) => u())
    unsubs.current = []
    transport.current?.close()
    transport.current = null
  }

  // Nettoyage des connexions au démontage de la page.
  useEffect(() => teardown, [])

  async function start(as: 'host' | 'guest', rawCode: string) {
    teardown()
    setError('')
    setNotice('')
    setRtts({})
    setPeers([])
    hadPeer.current = false
    setRole(as)
    setPhase('connecting')
    const tr = createTransport(kind)
    transport.current = tr
    unsubs.current = [
      tr.onPeers((list) => {
        setPeers(list)
        if (list.length > 0) hadPeer.current = true
        else if (as === 'guest' && hadPeer.current) setNotice(t.lost)
      }),
      tr.onMessage((from, msg) => {
        const ping = asPing(msg)
        if (ping) {
          tr.send(from, makePong(ping))
          return
        }
        const pong = asPong(msg)
        const rtt = pong ? computeRtt(pong, performance.now()) : null
        if (rtt !== null) setRtts((prev) => ({ ...prev, [from]: [...(prev[from] ?? []), rtt] }))
      }),
    ]
    try {
      if (as === 'host') await tr.host(rawCode)
      else await tr.join(rawCode)
      if (transport.current !== tr) return // quitté entre-temps
      setCode(normalizeRoomCode(rawCode))
      setPhase('ready')
    } catch (e) {
      if (transport.current !== tr) return
      teardown()
      setPhase('idle')
      const kindKey = e instanceof TransportError ? e.kind : 'unknown'
      setError(t.errors[kindKey] ?? t.errors.unknown ?? '')
    }
  }

  function leave() {
    teardown()
    setPhase('idle')
    setPeers([])
    setNotice('')
  }

  function ping() {
    seq.current += 1
    transport.current?.send(ALL, makePing(seq.current, performance.now()))
  }

  const busy = phase === 'connecting'

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="display text-2xl">{t.title}</h1>
        <Tag icon={Radio}>{t.tag}</Tag>
      </div>
      <p className="max-w-[60ch] text-ink-soft">{t.intro}</p>

      {phase !== 'ready' && (
        <>
          <div role="group" aria-label={t.transportLabel} className="tf my-0">
            <Button
              className="min-h-11! text-sm!"
              aria-pressed={kind === 'peer'}
              icon={Wifi}
              onClick={() => setKind('peer')}
              disabled={busy}
            >
              {t.transportPeer}
            </Button>
            <Button
              className="min-h-11! text-sm!"
              aria-pressed={kind === 'local'}
              onClick={() => setKind('local')}
              disabled={busy}
            >
              {t.transportLocal}
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Panel className="flex flex-col gap-4 p-5">
              <h2 className="display text-lg">{t.create}</h2>
              <Button
                variant="primary"
                icon={Plus}
                block
                disabled={busy}
                onClick={() => void start('host', generateRoomCode())}
              >
                {t.create}
              </Button>
            </Panel>
            <Panel className="flex flex-col gap-4 p-5">
              <h2 className="display text-lg">{t.joinTitle}</h2>
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  void start('guest', input)
                }}
              >
                <label className="flex flex-col gap-1">
                  <span className="mono dim">{t.codeLabel}</span>
                  <input
                    value={input}
                    onChange={(e) => setInput(normalizeRoomCode(e.target.value).slice(0, 4))}
                    maxLength={4}
                    autoCapitalize="characters"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    inputMode="text"
                    placeholder="K7PX"
                    aria-describedby="net-code-hint"
                    className="min-h-11 border border-line-hi bg-surface px-3 font-mono text-lg tracking-[0.3em] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
                  />
                  <span id="net-code-hint" className="text-sm text-ink-soft">
                    {t.codeHint}
                  </span>
                </label>
                <Button type="submit" icon={LogIn} block disabled={busy}>
                  {t.join}
                </Button>
              </form>
            </Panel>
          </div>

          {busy && (
            <p role="status" className="text-ink-soft">
              {t.connecting}
            </p>
          )}
        </>
      )}

      {error && (
        <p role="alert" className="text-[var(--bad)]">
          {error}
        </p>
      )}

      {phase === 'ready' && (
        <Panel className="flex flex-col gap-5 p-5">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <div className="shrink-0">
              <Radar code={code} blips={BLIPS.slice(0, peers.length)} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="display text-lg">{t.roomCode(code)}</h2>
              <p role="status" className="text-ink-soft">
                {role === 'host' ? t.hosting : t.joined}
              </p>
            </div>
          </div>

          {notice && (
            <p role="alert" className="text-[var(--bad)]">
              {notice}
            </p>
          )}

          <div>
            <h3 className="mono dim mb-2">{t.peers}</h3>
            {peers.length === 0 ? (
              <p className="text-ink-soft">{t.noPeers}</p>
            ) : (
              <ul className="flex flex-col gap-2" aria-label={t.peers}>
                {peers.map((p) => {
                  const samples = rtts[p.id] ?? []
                  const last = samples[samples.length - 1]
                  const stats = rttStats(samples)
                  return (
                    <li
                      key={p.id}
                      data-testid="peer"
                      className="flex flex-col gap-1 border border-line bg-surface px-3 py-2"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{t.peerLabel(p.isHost, p.id)}</span>
                        <strong data-testid="rtt" className="font-mono">
                          {last === undefined ? t.rttNone : t.rtt(last)}
                        </strong>
                      </div>
                      {stats && (
                        <span className="text-sm text-ink-soft">
                          {t.stats(stats.count, stats.min, stats.avg, stats.max)}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary" icon={Radio} onClick={ping} disabled={peers.length === 0}>
              {t.ping}
            </Button>
            <Button icon={X} onClick={leave}>
              {t.leave}
            </Button>
          </div>
        </Panel>
      )}
    </div>
  )
}
