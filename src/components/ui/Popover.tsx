import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Panel from './Panel'

type PopoverProps = {
  open: boolean
  onClose: () => void
  /** Élément déclencheur : le popover se place dessous. */
  anchor: HTMLElement | null
  children: ReactNode
  /** Nom accessible. */
  label: string
}

/** Bulle ancrée (définition d'un terme) ; prend le focus, se ferme avec Échap ou un clic à l'extérieur (focus rendu au déclencheur). */
export default function Popover({ open, onClose, anchor, children, label }: PopoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ top: 0, left: 0 })

  useLayoutEffect(() => {
    if (!open || !anchor || !ref.current) return
    const a = anchor.getBoundingClientRect()
    const width = ref.current.offsetWidth
    const left = Math.max(12, Math.min(a.left, window.innerWidth - width - 12))
    setPos({ top: a.bottom + 8, left })
  }, [open, anchor])

  // focus géré : la bulle prend le focus à l'ouverture, puis le rend au déclencheur à la fermeture
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    ref.current?.focus({ preventScroll: true })
    return () => {
      const a = anchor ?? previous
      if (a?.isConnected) a.focus({ preventScroll: true })
    }
  }, [open, anchor])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const onDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (!ref.current?.contains(target) && !anchor?.contains(target)) onClose()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open, onClose, anchor])

  if (!open) return null
  return createPortal(
    <div ref={ref} className="pop" role="dialog" aria-label={label} tabIndex={-1} style={pos}>
      <Panel hi>{children}</Panel>
    </div>,
    document.body,
  )
}
