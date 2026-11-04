import { useRef, useState } from 'react'
import { Download, RotateCcw, Upload } from 'lucide-react'
import Button from '@/components/ui/Button'
import HexAvatar from '@/components/ui/HexAvatar'
import LangToggle from '@/components/ui/LangToggle'
import Panel from '@/components/ui/Panel'
import Sheet from '@/components/ui/Sheet'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Toast from '@/components/ui/Toast'
import { UI } from '@/i18n/ui'
import { exportAll, exportFilename, ImportError, importAll, resetAll } from '@/store/backup'
import { AVATAR_COLORS, QUIZ_TIMERS } from '@/store/prefs'
import { usePrefs } from '@/store/PrefsProvider'

const TRAIN_LANGS = [
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'English' },
] as const

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export default function Profile() {
  const { prefs, setPrefs, resolvedTheme } = usePrefs()
  const [draft, setDraft] = useState(prefs.pseudo)
  const [pendingFile, setPendingFile] = useState<File | null>(null)
  const [resetStep, setResetStep] = useState<0 | 1 | 2>(0)
  const [toast, setToast] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const t = UI.profile

  async function onExport() {
    download(await exportAll(prefs), exportFilename(prefs.pseudo))
    setToast(t.exported)
  }

  async function onImport() {
    const file = pendingFile
    setPendingFile(null)
    if (!file) return
    try {
      const imported = await importAll(file)
      setPrefs(imported)
      setDraft(imported.pseudo)
      setToast(t.imported)
    } catch (e) {
      setToast(e instanceof ImportError ? e.message : UI.backup.errWrite)
    }
  }

  async function onReset() {
    await resetAll()
    window.location.reload()
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center gap-3">
        <HexAvatar initials={prefs.pseudo} course={prefs.avatar} aria-hidden="true" />
        <h1 className="display text-2xl">{t.title}</h1>
        <span className="text-ink-soft">{prefs.pseudo}</span>
      </header>
      <Panel className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm text-ink-soft">
          {t.pseudo}
          <input
            value={draft}
            maxLength={24}
            autoComplete="nickname"
            onChange={(e) => {
              setDraft(e.target.value)
              if (e.target.value.trim()) setPrefs({ pseudo: e.target.value })
            }}
            onBlur={() => setDraft(prefs.pseudo)}
            className="h-11 border border-line-hi bg-surface px-3 text-ink"
          />
        </label>
        <div role="radiogroup" aria-label={t.avatar} className="flex gap-2">
          {AVATAR_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={prefs.avatar === c}
              aria-label={UI.onboarding.color(UI.onboarding.colors[c])}
              onClick={() => setPrefs({ avatar: c })}
              className="grid h-11 w-11 place-items-center border border-line-hi aria-checked:border-ink"
            >
              <HexAvatar initials="" course={c} size="sm" aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-ink-soft">{t.theme}</span>
          <ThemeToggle theme={resolvedTheme} onChange={(theme) => setPrefs({ theme })} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-ink-soft">{t.langMode}</span>
          <LangToggle value={prefs.langMode} onChange={(langMode) => setPrefs({ langMode })} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-ink-soft">{t.trainLang}</span>
          <div className="lang" role="radiogroup" aria-label={t.trainLang}>
            {TRAIN_LANGS.map((o) => (
              <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={prefs.trainLang === o.value}
                onClick={() => setPrefs({ trainLang: o.value })}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-ink-soft">{UI.quiz.timer}</span>
          <div className="lang" role="radiogroup" aria-label={UI.quiz.timer} aria-describedby="quiz-timer-help">
            {QUIZ_TIMERS.map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={prefs.quizTimer === n}
                onClick={() => setPrefs({ quizTimer: n })}
              >
                {n === 0 ? UI.quiz.timerOff : UI.quiz.timerSec(n)}
              </button>
            ))}
          </div>
          <span id="quiz-timer-help" className="w-full text-xs text-ink-soft">
            {UI.quiz.timerHelp}
          </span>
        </div>
      </Panel>
      <Panel className="flex flex-col gap-3">
        <h2 className="display text-lg">{t.data}</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" icon={Download} onClick={() => void onExport()}>
            {t.export}
          </Button>
          <Button icon={Upload} onClick={() => fileRef.current?.click()}>
            {t.import}
          </Button>
          <Button variant="ghost" icon={RotateCcw} onClick={() => setResetStep(1)}>
            {t.reset}
          </Button>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          aria-label={t.import}
          data-testid="import-file"
          onChange={(e) => {
            setPendingFile(e.target.files?.[0] ?? null)
            e.target.value = ''
          }}
        />
      </Panel>

      <Sheet open={pendingFile !== null} onClose={() => setPendingFile(null)} title={t.importConfirmTitle}>
        <p className="mb-4 text-sm text-ink-soft">{t.importConfirmText(pendingFile?.name ?? '')}</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => void onImport()}>
            {t.importConfirm}
          </Button>
          <Button onClick={() => setPendingFile(null)}>{t.cancel}</Button>
        </div>
      </Sheet>
      <Sheet open={resetStep > 0} onClose={() => setResetStep(0)} title={t.resetTitle}>
        <p className="mb-4 text-sm text-ink-soft">{resetStep === 1 ? t.resetText1 : t.resetText2}</p>
        <div className="flex flex-wrap gap-3">
          {resetStep === 1 ? (
            <Button variant="primary" onClick={() => setResetStep(2)}>
              {t.resetNext}
            </Button>
          ) : (
            <Button variant="primary" onClick={() => void onReset()}>
              {t.resetConfirm}
            </Button>
          )}
          <Button onClick={() => setResetStep(0)}>{t.cancel}</Button>
        </div>
      </Sheet>
      <Toast open={toast !== ''} onClose={() => setToast('')} message={toast} />
    </div>
  )
}
