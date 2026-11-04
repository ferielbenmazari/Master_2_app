import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { UI } from '@/i18n/ui'
import { useEffectsLevel } from '@/store/effects'
import Panel from './Panel'
import Icon from './Icon'

type SheetProps = {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

/** Feuille modale remontant du bas (réglages, détails). Échap / fond / bouton pour fermer. */
export default function Sheet({ open, onClose, title, children }: SheetProps) {
  const [level] = useEffectsLevel()
  const ref = useRef<HTMLDivElement>(null)
  const d = level === 'off' ? 0 : 0.22

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    ref.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="sheet-backdrop"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: d }}
          />
          <motion.div
            key="sheet"
            className="sheet"
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: d, ease: [0.16, 1, 0.3, 1] }}
          >
            <Panel hi>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="display text-lg">{title}</h2>
                <button
                  type="button"
                  aria-label={UI.dialog.close}
                  onClick={onClose}
                  className="grid h-11 w-11 place-items-center text-ink-soft"
                >
                  <Icon icon={X} />
                </button>
              </div>
              {children}
            </Panel>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
