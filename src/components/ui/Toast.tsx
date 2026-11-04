import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { useEffectsLevel } from '@/store/effects'
import Panel from './Panel'

type ToastProps = {
  open: boolean
  onClose: () => void
  message: string
  /** Fermeture automatique en ms (0 = jamais). */
  duration?: number
}

/** Notification brève, annoncée aux lecteurs d'écran (role=status). */
export default function Toast({ open, onClose, message, duration = 3500 }: ToastProps) {
  const [level] = useEffectsLevel()

  useEffect(() => {
    if (!open || duration === 0) return
    const id = setTimeout(onClose, duration)
    return () => clearTimeout(id)
  }, [open, duration, onClose])

  return createPortal(
    <div className="toast" role="status" aria-live="polite">
      <AnimatePresence>
        {open && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: level === 'off' ? 0 : 0.22 }}
          >
            <Panel hi className="text-sm font-bold">
              {message}
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body,
  )
}
