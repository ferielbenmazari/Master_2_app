import { useRef, type KeyboardEvent } from 'react'
import { UI } from '@/i18n/ui'
import { WRITING_KINDS, type WritingKind } from '@/lib/writing'

interface Props {
  level: WritingKind
  counts: Record<WritingKind, number>
  onChange: (k: WritingKind) => void
}

/** Onglets de niveau 01 ORDRE · 02 TROUS · 03 ERREUR · 04 LIBRE (un niveau sans exercice est inactif). */
export default function LevelTabs({ level, counts, onChange }: Props) {
  const refs = useRef<Partial<Record<WritingKind, HTMLButtonElement | null>>>({})

  function onKey(e: KeyboardEvent, k: WritingKind) {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    let i = WRITING_KINDS.indexOf(k)
    for (let n = 0; n < WRITING_KINDS.length; n++) {
      i = (i + step + WRITING_KINDS.length) % WRITING_KINDS.length
      const next = WRITING_KINDS[i]!
      if (counts[next] > 0) {
        onChange(next)
        refs.current[next]?.focus()
        return
      }
    }
  }

  return (
    <div className="levels" role="tablist" aria-label={UI.writing.levelsLabel}>
      {WRITING_KINDS.map((k, i) => (
        <button
          key={k}
          ref={(el) => {
            refs.current[k] = el
          }}
          type="button"
          role="tab"
          id={`writing-tab-${k}`}
          aria-selected={k === level}
          aria-controls="writing-panel"
          aria-label={UI.writing.levelTab(i + 1, UI.writing.levels[k].name, counts[k])}
          tabIndex={k === level ? 0 : -1}
          disabled={counts[k] === 0}
          onClick={() => onChange(k)}
          onKeyDown={(e) => onKey(e, k)}
        >
          {UI.writing.levels[k].tab}
        </button>
      ))}
    </div>
  )
}
