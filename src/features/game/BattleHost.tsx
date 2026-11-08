import { Radio } from 'lucide-react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { getCourses, loadAllChapters } from '@/content/loader'
import type { Chapter } from '@/content/schema'
import { GAME } from '@/i18n/game-ui'
import type { CourseColor } from '@/lib/course-color'
import { usePrefs } from '@/store/PrefsProvider'
import AvatarPicker from './AvatarPicker'
import { QUESTION_COUNT, QUESTION_SECONDS } from './engine'
import GameScreens from './GameScreens'
import { countQuizItems, pickBattleQuestions } from './questions'
import RoomLobby from './RoomLobby'
import { HostSession } from './session'
import { createTransport, type TransportKind } from './transport/create-transport'
import { generateRoomCode } from './transport/room'
import { TransportError } from './transport/types'
import TransportPicker from './TransportPicker'

const CODE_ATTEMPTS = 3

interface Opened {
  session: HostSession
  code: string
  chapters: Chapter[]
}

function errorText(e: unknown): string {
  const kind = e instanceof TransportError ? e.kind : 'unknown'
  return GAME.errors[kind] ?? GAME.errors.unknown ?? ''
}

function HostRoom({ opened, onLeave }: { opened: Opened; onLeave: () => void }) {
  const { session, code, chapters } = opened
  const snap = useSyncExternalStore(session.subscribe, session.getSnapshot)
  const { state, view, selfId } = snap

  if (state.phase === 'lobby') {
    const present = view.players.filter((p) => p.connected).length
    return (
      <RoomLobby
        code={code}
        view={view}
        selfId={selfId}
        host={{
          canStart: present >= 2,
          onStart: () => session.start(pickBattleQuestions(chapters, QUESTION_COUNT, Date.now())),
        }}
        onLeave={onLeave}
      />
    )
  }
  return (
    <GameScreens
      view={view}
      selfId={selfId}
      onAnswer={(c) => session.answer(c)}
      onNext={state.phase === 'reveal' ? () => session.next() : undefined}
      onLeave={onLeave}
    />
  )
}

/** Hôte : choix des chapitres et du transport, ouverture de la salle, puis partie (l'hôte joue aussi). */
export default function BattleHost() {
  const { prefs } = usePrefs()
  const [kind, setKind] = useState<TransportKind>('peer')
  const [avatar, setAvatar] = useState<CourseColor>(prefs.avatar)
  const [chapters, setChapters] = useState<Chapter[] | null>(null)
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set())
  const [opened, setOpened] = useState<Opened | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const live = useRef<HostSession | null>(null)

  useEffect(() => {
    let alive = true
    Promise.all(getCourses().map((c) => loadAllChapters(c.id))).then((lists) => {
      if (!alive) return
      const all = lists.flat().filter((c) => c.quiz.length > 0)
      setChapters(all)
      setSelected(new Set(all.map((c) => c.id)))
    })
    return () => {
      alive = false
    }
  }, [])

  // fermeture du réseau en quittant la page
  useEffect(() => () => live.current?.close(), [])

  const picked = (chapters ?? []).filter((c) => selected.has(c.id))
  const available = countQuizItems(picked)

  function toggle(ids: readonly string[], on: boolean) {
    setSelected((prev) => {
      const next = new Set(prev)
      ids.forEach((id) => (on ? next.add(id) : next.delete(id)))
      return next
    })
  }

  async function open() {
    setError('')
    setBusy(true)
    const total = Math.min(QUESTION_COUNT, available)
    for (let attempt = 0; attempt < CODE_ATTEMPTS; attempt++) {
      const code = generateRoomCode()
      const session = new HostSession(createTransport(kind), {
        me: { name: prefs.pseudo, avatar },
        total,
      })
      live.current = session
      try {
        await session.open(code)
        setOpened({ session, code, chapters: picked })
        setBusy(false)
        return
      } catch (e) {
        session.close()
        live.current = null
        if (!(
          e instanceof TransportError &&
          e.kind === 'code-taken' &&
          attempt < CODE_ATTEMPTS - 1
        )) {
          setError(errorText(e))
          break
        }
      }
    }
    setBusy(false)
  }

  function leave() {
    live.current?.close()
    live.current = null
    setOpened(null)
  }

  if (opened) {
    return (
      <div className="mx-auto w-full max-w-xl">
        <HostRoom opened={opened} onLeave={leave} />
      </div>
    )
  }

  const byCourse = getCourses()
    .map((c) => ({ course: c, list: (chapters ?? []).filter((ch) => ch.courseId === c.id) }))
    .filter((g) => g.list.length > 0)

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="display text-2xl">{GAME.create}</h1>
        <Tag icon={Radio}>{GAME.tag}</Tag>
      </div>
      <p className="text-ink-soft">{GAME.createText}</p>

      <Panel className="flex flex-col gap-3 p-5">
        <h2 className="display text-lg">{GAME.avatarLabel}</h2>
        <AvatarPicker name={prefs.pseudo} value={avatar} onChange={setAvatar} />
      </Panel>

      <Panel className="flex flex-col gap-4 p-5">
        <h2 className="display text-lg">{GAME.scope}</h2>
        {chapters === null ? (
          <p role="status" className="text-ink-soft">
            {GAME.scopeLoading}
          </p>
        ) : (
          byCourse.map(({ course, list }) => {
            const ids = list.map((c) => c.id)
            const all = ids.every((id) => selected.has(id))
            return (
              <fieldset key={course.id} className="flex flex-col gap-1 border-0 p-0">
                <legend className="mb-1 w-full">
                  <label className="flex min-h-11 items-center gap-3 font-bold">
                    <input
                      type="checkbox"
                      checked={all}
                      onChange={(e) => toggle(ids, e.target.checked)}
                      className="h-5 w-5"
                    />
                    {GAME.scopeCourse(course.code.replace(/^S\d+-/, ''))}
                  </label>
                </legend>
                {list.map((c) => (
                  <label key={c.id} className="flex min-h-11 items-center gap-3 pl-8">
                    <input
                      type="checkbox"
                      checked={selected.has(c.id)}
                      onChange={(e) => toggle([c.id], e.target.checked)}
                      className="h-5 w-5"
                    />
                    <span>{GAME.chapterLabel(c.order, c.title.fr, c.quiz.length)}</span>
                  </label>
                ))}
              </fieldset>
            )
          })
        )}
        <p role="status" className="mono dim">
          {available > 0
            ? `${GAME.available(available)} · ${GAME.rules(Math.min(QUESTION_COUNT, available), QUESTION_SECONDS)}`
            : GAME.noneSelected}
        </p>
      </Panel>

      <Panel className="flex flex-col gap-4 p-5">
        <TransportPicker value={kind} onChange={setKind} disabled={busy} />
      </Panel>

      {error && (
        <p role="alert" className="text-[var(--bad)]">
          {error}
        </p>
      )}
      <Button
        variant="primary"
        block
        disabled={busy || available === 0}
        onClick={() => void open()}
      >
        {busy ? GAME.opening : GAME.open}
      </Button>
    </div>
  )
}
