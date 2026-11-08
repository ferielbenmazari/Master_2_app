import { ArrowRight, Flag, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import SegBar from '@/components/ui/SegBar'
import type { WritingItem } from '@/content/schema'
import { UI } from '@/i18n/ui'
import ClozeItem from './ClozeItem'
import FreeItem from './FreeItem'
import ReorderItem from './ReorderItem'
import SpotErrorItem from './SpotErrorItem'

interface Props {
  items: readonly WritingItem[]
  /** Nom du niveau suivant non vide, s'il existe. */
  nextLevelName?: string
  base: string
  onReplay: () => void
  onNextLevel: () => void
}

/** Parcourt les exercices d'un niveau un par un, puis affiche le récapitulatif. */
export default function LevelPlay({ items, nextLevelName, base, onReplay, onNextLevel }: Props) {
  const [index, setIndex] = useState(0)
  const [wins, setWins] = useState(0)
  const total = items.length
  const item = items[index]

  if (!item) {
    return (
      <Panel hi brackets className="flex flex-col items-start gap-3">
        <h2 className="display text-xl">{UI.writing.recapTitle}</h2>
        <p className="display text-4xl">{UI.writing.recapScore(wins, total)}</p>
        {wins === total && <p>{UI.writing.recapPerfect}</p>}
        <div className="flex flex-wrap gap-3">
          {nextLevelName && (
            <Button variant="primary" icon={ArrowRight} onClick={onNextLevel}>
              {UI.writing.nextLevel(nextLevelName)}
            </Button>
          )}
          <Button icon={RotateCcw} onClick={onReplay}>
            {UI.writing.replay}
          </Button>
          <Link to={base} className="btn">
            {UI.writing.backToChapter}
          </Link>
        </div>
      </Panel>
    )
  }

  const last = index === total - 1
  const common = {
    onDone: (ok: boolean) => ok && setWins((w) => w + 1),
    actions: (
      <Button variant="primary" block icon={last ? Flag : ArrowRight} onClick={() => setIndex((i) => i + 1)}>
        {last ? UI.writing.seeResult : UI.writing.next}
      </Button>
    ),
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="mono dim" role="status">
          {UI.writing.position(index + 1, total)}
        </span>
        <SegBar done={index} total={total} label={UI.progress.segments(index, total)} className="w-40" />
      </div>
      {item.kind === 'reorder' && <ReorderItem key={item.id} item={item} {...common} />}
      {item.kind === 'cloze' && <ClozeItem key={item.id} item={item} {...common} />}
      {item.kind === 'spot_error' && <SpotErrorItem key={item.id} item={item} {...common} />}
      {item.kind === 'free' && <FreeItem key={item.id} item={item} {...common} />}
    </div>
  )
}
