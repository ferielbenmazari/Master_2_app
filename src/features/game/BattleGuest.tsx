import { LogIn, Radio } from 'lucide-react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Link, useParams } from 'react-router'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { GAME } from '@/i18n/game-ui'
import type { CourseColor } from '@/lib/course-color'
import { usePrefs } from '@/store/PrefsProvider'
import AvatarPicker from './AvatarPicker'
import GameScreens from './GameScreens'
import RoomLobby from './RoomLobby'
import { GuestSession } from './session'
import { createTransport, type TransportKind } from './transport/create-transport'
import { normalizeRoomCode } from './transport/room'
import { TransportError } from './transport/types'
import TransportPicker from './TransportPicker'

function errorText(e: unknown): string {
  const kind = e instanceof TransportError ? e.kind : 'unknown'
  return GAME.errors[kind] ?? GAME.errors.unknown ?? ''
}

function GuestRoom({
  session,
  code,
  onLeave,
}: {
  session: GuestSession
  code: string
  onLeave: () => void
}) {
  const { view, selfId, hostLeft } = useSyncExternalStore(session.subscribe, session.getSnapshot)

  if (hostLeft && view.phase !== 'podium') {
    return (
      <div className="flex flex-col gap-4">
        <p role="alert" className="text-[var(--bad)]">
          {GAME.hostLeft}
        </p>
        <Link to="/jouer" className="btn primary btn-block" onClick={onLeave}>
          {GAME.backToArena}
        </Link>
      </div>
    )
  }
  if (view.phase === 'locked') {
    return (
      <div className="flex flex-col gap-4">
        <p role="alert" className="text-[var(--bad)]">
          {GAME.locked}
        </p>
        <Link to="/jouer" className="btn primary btn-block" onClick={onLeave}>
          {GAME.backToArena}
        </Link>
      </div>
    )
  }
  if (view.phase === 'joining') {
    return (
      <p role="status" className="text-ink-soft">
        {GAME.connecting}
      </p>
    )
  }
  if (view.phase === 'lobby')
    return <RoomLobby code={code} view={view} selfId={selfId} onLeave={onLeave} />
  return (
    <GameScreens
      view={view}
      selfId={selfId}
      onAnswer={(c) => session.answer(c)}
      onLeave={onLeave}
    />
  )
}

/** Invité : code (saisi ou venu du lien / QR), avatar, transport, puis partie. */
export default function BattleGuest() {
  const { code: urlCode = '' } = useParams()
  const { prefs } = usePrefs()
  const [kind, setKind] = useState<TransportKind>('peer')
  const [avatar, setAvatar] = useState<CourseColor>(prefs.avatar)
  const [input, setInput] = useState(normalizeRoomCode(urlCode).slice(0, 4))
  const [joined, setJoined] = useState<{ session: GuestSession; code: string } | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const live = useRef<GuestSession | null>(null)

  useEffect(() => () => live.current?.close(), [])

  async function join() {
    setError('')
    setBusy(true)
    const session = new GuestSession(createTransport(kind), { name: prefs.pseudo, avatar })
    live.current = session
    try {
      await session.join(input)
      setJoined({ session, code: normalizeRoomCode(input) })
    } catch (e) {
      session.close()
      live.current = null
      setError(errorText(e))
    }
    setBusy(false)
  }

  function leave() {
    live.current?.close()
    live.current = null
    setJoined(null)
  }

  if (joined) {
    return (
      <div className="mx-auto w-full max-w-xl">
        <GuestRoom session={joined.session} code={joined.code} onLeave={leave} />
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="display text-2xl">{GAME.joinTitle}</h1>
        <Tag icon={Radio}>{GAME.tag}</Tag>
      </div>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
          void join()
        }}
      >
        <Panel className="flex flex-col gap-3 p-5">
          <label className="flex flex-col gap-1">
            <span className="mono dim">{GAME.codeLabel}</span>
            <input
              value={input}
              onChange={(e) => setInput(normalizeRoomCode(e.target.value).slice(0, 4))}
              maxLength={4}
              autoCapitalize="characters"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              placeholder="K7PX"
              aria-describedby="battle-code-hint"
              className="min-h-14 border border-line-hi bg-surface px-3 font-mono text-2xl tracking-[0.3em] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
            />
            <span id="battle-code-hint" className="text-sm text-ink-soft">
              {GAME.codeHint}
            </span>
          </label>
        </Panel>
        <Panel className="flex flex-col gap-3 p-5">
          <h2 className="display text-lg">{GAME.avatarLabel}</h2>
          <AvatarPicker name={prefs.pseudo} value={avatar} onChange={setAvatar} />
        </Panel>
        <Panel className="p-5">
          <TransportPicker value={kind} onChange={setKind} disabled={busy} />
        </Panel>
        {error && (
          <p role="alert" className="text-[var(--bad)]">
            {error}
          </p>
        )}
        <Button type="submit" variant="primary" block icon={LogIn} disabled={busy}>
          {busy ? GAME.connecting : GAME.join}
        </Button>
      </form>
    </div>
  )
}
