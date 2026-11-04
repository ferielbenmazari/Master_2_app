import { Gamepad2, Home, Layers, User, type LucideIcon } from 'lucide-react'
import { NavLink, Outlet, useLocation } from 'react-router'
import Ambient from '@/components/ui/Ambient'
import Icon from '@/components/ui/Icon'
import { UI } from '@/i18n/ui'
import Onboarding from './Onboarding'

const ITEMS: { to: string; label: string; icon: LucideIcon; end?: boolean; prefix: string }[] = [
  { to: '/', label: UI.nav.base, icon: Home, prefix: '/matiere' },
  { to: '/reviser', label: UI.nav.review, icon: Layers, prefix: '/reviser' },
  { to: '/jouer', label: UI.nav.arena, icon: Gamepad2, prefix: '/jouer' },
  { to: '/profil', label: UI.nav.profile, icon: User, prefix: '/profil' },
]

function useIsOn() {
  const { pathname } = useLocation()
  return (item: (typeof ITEMS)[number]) =>
    item.to === '/'
      ? pathname === '/' || pathname.startsWith(item.prefix)
      : pathname.startsWith(item.prefix)
}

/** Coquille : fond, rail (≥ 1024 px), contenu, barre du bas (< 1024 px). */
export default function AppLayout() {
  const isOn = useIsOn()
  return (
    <>
      <Ambient />
      <div className="relative min-h-dvh lg:grid lg:grid-cols-[76px_1fr]">
        <nav className="rail sticky top-0 z-[2] hidden h-dvh lg:flex" aria-label={UI.nav.label}>
          {ITEMS.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              aria-label={it.label}
              title={it.label}
              className={isOn(it) ? 'on' : ''}
            >
              <Icon icon={it.icon} />
            </NavLink>
          ))}
        </nav>
        <main className="relative z-[1] mx-auto w-full max-w-[1100px] px-4 pb-24 pt-7 lg:pb-10">
          <Outlet />
        </main>
        <nav className="nav fixed inset-x-0 bottom-0 z-[2] lg:hidden" aria-label={UI.nav.label}>
          {ITEMS.map((it) => (
            <NavLink key={it.to} to={it.to} className={isOn(it) ? 'on' : ''}>
              <Icon icon={it.icon} />
              {it.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <Onboarding />
    </>
  )
}
