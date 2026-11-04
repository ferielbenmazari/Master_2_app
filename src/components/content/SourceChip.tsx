import { Quote } from 'lucide-react'
import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import Sheet from '@/components/ui/Sheet'
import { getSourceTitle } from '@/content/loader'
import type { SourceRef } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { useReader } from './ReaderContext'

/** Contenu de la feuille : chaque citation exacte, son passage et le nom lisible du fichier. */
export function SourcesSheet({
  src,
  open,
  onClose,
}: {
  src: SourceRef[]
  open: boolean
  onClose: () => void
}) {
  const { courseId } = useReader()
  return (
    <Sheet open={open} onClose={onClose} title={UI.reader.sourcesTitle}>
      <ul className="flex flex-col gap-4">
        {src.map((s, i) => (
          <li key={i} className="flex flex-col gap-1">
            <blockquote className="border-l-2 border-[var(--course)] pl-3 text-[15px] italic leading-relaxed">
              {s.quote}
            </blockquote>
            <span className="mono dim">
              {UI.reader.sourcesLoc} : {s.loc}
            </span>
            <span className="mono dim">
              {UI.reader.sourcesFile} : {getSourceTitle(courseId, s.file)}
            </span>
          </li>
        ))}
      </ul>
    </Sheet>
  )
}

/** Puce « Source » en fin de bloc sourcé : ouvre la feuille « Ce que dit le cours ». */
export default function SourceChip({ src }: { src: SourceRef[] }) {
  const [open, setOpen] = useState(false)
  if (src.length === 0) return null
  return (
    <>
      <button
        type="button"
        className="tag mt-1 min-h-11 cursor-pointer"
        aria-label={UI.reader.sourceLabel}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <Icon icon={Quote} size={12} />
        {UI.reader.source}
        {src.length > 1 && ` · ${src.length}`}
      </button>
      <SourcesSheet src={src} open={open} onClose={() => setOpen(false)} />
    </>
  )
}
