import { Quote } from 'lucide-react'
import { useCallback, useEffect, useId, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Popover from '@/components/ui/Popover'
import type { Term } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { useReader } from './ReaderContext'
import TermDetail from './TermDetail'
import { SourcesSheet } from './SourceChip'

/** Terme technique surligné ; au tap / Entrée → définition FR+EN, exemple, piège, source. */
/** Libellé affiché : celui de `[[id|label]]`, sinon le terme du glossaire dans la langue du bloc, sinon l'id. */
export function termLabel(
  term: Term | undefined,
  termId: string,
  label: string | undefined,
  lang: 'fr' | 'en',
): string {
  return label ?? (term ? term[lang] : termId)
}

/** Terme sans bulle (dans une définition) : même libellé, en gras. */
export function TermLabel({
  termId,
  label,
  lang,
}: {
  termId: string
  label?: string | undefined
  lang: 'fr' | 'en'
}) {
  const { glossary } = useReader()
  return <strong>{termLabel(glossary.get(termId), termId, label, lang)}</strong>
}

export default function TermChip({
  termId,
  label: given,
  lang = 'fr',
}: {
  termId: string
  label?: string | undefined
  lang?: 'fr' | 'en'
}) {
  const { glossary } = useReader()
  const term = glossary.get(termId)
  const label = termLabel(term, termId, given, lang)
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)
  const [sheet, setSheet] = useState(false)
  const popId = useId()
  const close = useCallback(() => setOpen(false), [])

  // la bulle est en position fixe : on la ferme si la page défile
  useEffect(() => {
    if (!open) return
    // seuil : ignore les petits défilements résiduels (focus rendu après une feuille, etc.)
    const y0 = window.scrollY
    const onScroll = () => Math.abs(window.scrollY - y0) > 24 && close()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open, close])

  if (!term) return <strong>{label}</strong>

  return (
    <>
      <button
        ref={setAnchor}
        type="button"
        className="term"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? popId : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
      </button>
      <Popover open={open} onClose={close} anchor={anchor} label={UI.reader.termOpen(term.fr)}>
        <div id={popId} className="flex flex-col gap-2">
          <TermDetail term={term} />
          <div className="flex justify-between gap-2">
            <button
              type="button"
              className="tag min-h-11 cursor-pointer"
              onClick={() => {
                setOpen(false)
                setSheet(true)
              }}
            >
              <Icon icon={Quote} size={12} />
              {UI.reader.source}
            </button>
            <button type="button" className="tag min-h-11 cursor-pointer" onClick={close}>
              {UI.dialog.close}
            </button>
          </div>
        </div>
      </Popover>
      <SourcesSheet src={term.src} open={sheet} onClose={() => setSheet(false)} />
    </>
  )
}
