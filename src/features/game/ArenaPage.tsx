import { LogIn, Plus, Radio } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { GAME } from '@/i18n/game-ui'
import { UI } from '@/i18n/ui'
import { normalizeRoomCode } from './transport/room'

/** Point d'entrée de l'Arène : créer une partie de Quiz Battle ou rejoindre celle d'un ami. */
export default function ArenaPage() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="display glitch-title text-2xl">{UI.arena.title}</h1>
        <Tag icon={Radio}>{GAME.title}</Tag>
      </div>
      <p className="text-ink-soft">{GAME.intro}</p>

      <Panel hi className="flex flex-col gap-3 p-5">
        <h2 className="display text-lg">{GAME.create}</h2>
        <p className="text-sm text-ink-soft">{GAME.createText}</p>
        <Link to="/jouer/creer" className="btn primary btn-block">
          <Plus aria-hidden="true" className="h-[18px] w-[18px]" />
          {GAME.create}
        </Link>
      </Panel>

      <Panel className="flex flex-col gap-3 p-5">
        <h2 className="display text-lg">{GAME.joinTitle}</h2>
        <p className="text-sm text-ink-soft">{GAME.joinText}</p>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            void navigate(`/jouer/rejoindre/${normalizeRoomCode(code)}`)
          }}
        >
          <label className="flex flex-col gap-1">
            <span className="mono dim">{GAME.codeLabel}</span>
            <input
              value={code}
              onChange={(e) => setCode(normalizeRoomCode(e.target.value).slice(0, 4))}
              maxLength={4}
              autoCapitalize="characters"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              placeholder="K7PX"
              className="min-h-14 border border-line-hi bg-surface px-3 font-mono text-2xl tracking-[0.3em] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
            />
          </label>
          <Button type="submit" icon={LogIn} block>
            {GAME.join}
          </Button>
        </form>
      </Panel>

      <Link
        to="/jouer/test"
        className="mono dim inline-flex min-h-11 items-center self-start underline underline-offset-4"
      >
        {GAME.testLink}
      </Link>
    </div>
  )
}
