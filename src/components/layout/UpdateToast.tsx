import { useState } from 'react'
import Toast from '@/components/ui/Toast'
import { UI } from '@/i18n/ui'
import { consumeSwUpdated } from '@/lib/sw-update'

// Lu une seule fois au chargement du module (insensible au double rendu de StrictMode).
const updatedAtBoot = typeof sessionStorage !== 'undefined' && consumeSwUpdated(sessionStorage)

/** Annonce qu'une nouvelle version vient d'être installée. */
export default function UpdateToast() {
  const [open, setOpen] = useState(updatedAtBoot)
  // monté seulement si nécessaire : le conteneur role=status de Toast ne doit pas exister en double
  if (!open) return null
  return <Toast open={open} onClose={() => setOpen(false)} message={UI.pwa.updated} />
}
