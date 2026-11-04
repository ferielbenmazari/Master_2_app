import HexAvatar from '@/components/ui/HexAvatar'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'
import Soon from './Soon'

export default function Home() {
  const { prefs } = usePrefs()
  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center gap-3">
        <HexAvatar initials={prefs.pseudo} course={prefs.avatar} aria-hidden="true" />
        <h1 className="display text-2xl">{UI.home.greeting(prefs.pseudo)}</h1>
      </header>
      <Soon />
    </div>
  )
}
