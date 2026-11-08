import { useEffect, useState } from 'react'
import { GAME } from '@/i18n/game-ui'

/** URL de la page « rejoindre » pour un code (le routeur est en mode hash). */
export function joinUrl(code: string): string {
  return `${window.location.origin}${window.location.pathname}#/jouer/rejoindre/${code}`
}

function cssColor(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

/** QR code de la salle (bibliothèque chargée à la demande). Modules sombres sur fond clair des tokens : lisible en thème clair et sombre. */
export default function RoomQr({ code }: { code: string }) {
  const [src, setSrc] = useState('')
  useEffect(() => {
    let live = true
    import('qrcode')
      .then(({ default: QRCode }) =>
        QRCode.toDataURL(joinUrl(code), {
          margin: 2,
          width: 220,
          // sans token lisible, la bibliothèque garde ses couleurs par défaut
          color: {
            dark: cssColor('--on-accent') || undefined,
            light: cssColor('--acid') || undefined,
          },
        }),
      )
      .then((url) => live && setSrc(url))
      .catch(() => live && setSrc(''))
    return () => {
      live = false
    }
  }, [code])
  if (!src) return null
  return (
    <img
      src={src}
      alt={GAME.qrAlt}
      width={220}
      height={220}
      className="mx-auto block h-[220px] w-[220px]"
    />
  )
}
