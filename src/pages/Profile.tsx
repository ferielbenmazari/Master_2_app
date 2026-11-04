import HexAvatar from '@/components/ui/HexAvatar'
import LangToggle from '@/components/ui/LangToggle'
import Panel from '@/components/ui/Panel'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'

export default function Profile() {
  const { prefs, setPrefs, resolvedTheme } = usePrefs()
  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center gap-3">
        <HexAvatar initials={prefs.pseudo} course={prefs.avatar} aria-hidden="true" />
        <h1 className="display text-2xl">{UI.profile.title}</h1>
        <span className="text-ink-soft">{prefs.pseudo}</span>
      </header>
      <Panel className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-ink-soft">{UI.profile.theme}</span>
          <ThemeToggle theme={resolvedTheme} onChange={(theme) => setPrefs({ theme })} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-ink-soft">{UI.profile.langMode}</span>
          <LangToggle value={prefs.langMode} onChange={(langMode) => setPrefs({ langMode })} />
        </div>
      </Panel>
    </div>
  )
}
