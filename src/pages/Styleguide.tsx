import { useState } from 'react'
import {
  BookOpen,
  Clock,
  ClipboardList,
  FlaskConical,
  Flame,
  Gamepad2,
  GitBranch,
  Home,
  Inbox,
  Languages,
  Layers,
  PenLine,
  Quote,
  RefreshCw,
  Shield,
  Target,
  Trophy,
  TriangleAlert,
  User,
  Wifi,
  Zap,
} from 'lucide-react'
import Ambient from '@/components/ui/Ambient'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import EmptyState from '@/components/ui/EmptyState'
import GlitchText from '@/components/ui/GlitchText'
import HexAvatar from '@/components/ui/HexAvatar'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Radar from '@/components/ui/Radar'
import ScrambleText from '@/components/ui/ScrambleText'
import SegBar from '@/components/ui/SegBar'
import Squiggle from '@/components/ui/Squiggle'
import Tag from '@/components/ui/Tag'
import ThemeToggle, { type Theme } from '@/components/ui/ThemeToggle'
import TimerRing from '@/components/ui/TimerRing'
import TypeLine from '@/components/ui/TypeLine'
import XpBar from '@/components/ui/XpBar'
import { UI } from '@/i18n/ui'
import { courseStyle } from '@/lib/course-color'
import { useEffectsLevel, type EffectsLevel } from '@/store/effects'
import LangDemo from './styleguide/LangDemo'
import OverlayDemo from './styleguide/OverlayDemo'
import Sample from './styleguide/Sample'

const SWATCHES = [
  ['acid', 'acid · ISI1 · succès', 'var(--acid)'],
  ['coral', 'coral · REC1', 'var(--coral)'],
  ['cyan', 'cyan · INF4 · info', 'var(--cyan)'],
  ['gold', 'gold · ISI5 · rangs', 'var(--gold)'],
  ['orange', 'orange · série', 'var(--orange)'],
  ['red', 'red · erreur', 'var(--red)'],
  ['marker', 'marker · termes', 'var(--marker)'],
  ['surface', 'surface', 'var(--surface-2)'],
] as const

const ICONS = [
  Home,
  Layers,
  Gamepad2,
  User,
  Flame,
  Zap,
  BookOpen,
  Target,
  ClipboardList,
  FlaskConical,
  GitBranch,
  Shield,
  Languages,
  PenLine,
  Wifi,
  RefreshCw,
  TriangleAlert,
  Clock,
  Trophy,
  Quote,
]

const EFFECTS: { value: EffectsLevel; label: string }[] = [
  { value: 'full', label: UI.effects.full },
  { value: 'light', label: UI.effects.light },
  { value: 'off', label: UI.effects.off },
]

/** Page de référence du kit UI (temporaire, affichée depuis App.tsx). */
export default function Styleguide() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [effects, setEffects] = useEffectsLevel()

  function changeTheme(next: Theme) {
    setTheme(next)
    document.documentElement.dataset.theme = next
  }

  return (
    <>
      <Ambient />
      <main className="relative z-[1] mx-auto max-w-[1400px] px-4 pb-24 pt-7">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono dim">
              <ScrambleText>{'// MASTER 2 MIAGE SBI · KIT UI'}</ScrambleText>
            </p>
            <h1 className="display text-[clamp(34px,6vw,68px)]">
              <GlitchText text="M2 // Arena">
                M2 <span className="acc">//</span> Arena
              </GlitchText>
            </h1>
            <p className="mono dim mt-3">Styleguide · Style 3 « Arena Warm »</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle theme={theme} onChange={changeTheme} />
            <div className="flex items-center gap-1" role="group" aria-label={UI.effects.label}>
              <span className="mono dim mr-1">{UI.effects.label}</span>
              {EFFECTS.map((e) => (
                <Button
                  key={e.value}
                  variant={effects === e.value ? 'primary' : 'secondary'}
                  aria-pressed={effects === e.value}
                  className="px-3"
                  onClick={() => setEffects(e.value)}
                >
                  {e.label}
                </Button>
              ))}
            </div>
          </div>
        </header>

        <Sample num="00" title="Tokens, polices, icônes">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SWATCHES.map(([key, label, color]) => (
              <Panel key={key} className="p-3">
                <b
                  className="mb-2.5 block h-[46px] [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]"
                  style={{ background: color }}
                />
                <span className="mono">{label}</span>
              </Panel>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Panel>
              <span className="mono dim">Display · Unbounded</span>
              <p className="display mt-2 text-[28px]">Validité interne</p>
            </Panel>
            <Panel>
              <span className="mono dim">Lecture · Manrope</span>
              <p className="mt-2 text-[16.5px] leading-[1.7]">
                Une étude est solide quand elle écarte les{' '}
                <span className="term">explications alternatives</span>.
              </p>
            </Panel>
            <Panel>
              <span className="mono dim">HUD · JetBrains Mono</span>
              <p className="mono mt-2.5 text-[17px] text-ink">T-00:42 · 3/10 · +120 XP</p>
            </Panel>
          </div>
          <div className="mt-3 flex flex-wrap gap-2.5" role="list" aria-label="Icônes">
            {ICONS.map((glyph, i) => (
              <span
                key={i}
                role="listitem"
                className="grid h-11 w-11 place-items-center border border-line bg-surface text-acid [[data-theme='light']_&]:text-ink"
              >
                <Icon icon={glyph} />
              </span>
            ))}
          </div>
        </Sample>

        <Sample num="01" title="Panel, Tag, Button">
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              <Panel>Panel</Panel>
              <Panel hi course="coral">
                Panel hi
              </Panel>
              <Panel live course="cyan">
                Panel live
              </Panel>
              <Panel drop hi>
                Panel drop
              </Panel>
              <Panel brackets hi className="col-span-2">
                Panel avec coins de viseur
              </Panel>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Tag icon={BookOpen} tilt="left">
                Chapitre 05 · 12 min
              </Tag>
              <Tag tilt="right">J-6</Tag>
              <Tag course="cyan">EN · internal validity</Tag>
              <Tag course="coral" icon={Zap}>
                Combo x2
              </Tag>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" icon={Zap}>
                Lancer
              </Button>
              <Button>Secondaire</Button>
              <Button variant="ghost">Fantôme</Button>
              <Button disabled>Désactivé</Button>
            </div>
            <Button variant="primary" block icon={Zap}>
              Pleine largeur
            </Button>
          </div>
        </Sample>

        <Sample num="02" title="Barres, avatar, compteurs, journal">
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <HexAvatar initials="RP" />
              <div className="flex-1">
                <div className="mb-1.5 flex items-baseline justify-between">
                  <span className="font-display text-[15px] font-bold">renard_punk</span>
                  <span className="streak">
                    <Icon icon={Flame} />5
                  </span>
                </div>
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="mono dim">Rang · Analyste II</span>
                  <span className="mono hl">
                    <CountUp to={1240} suffix=" XP" />
                  </span>
                </div>
                <XpBar value={62} label="Progression du rang" />
              </div>
            </div>
            <SegBar done={2} total={9} label="Chapitres terminés" />
            <SegBar done={3} total={5} course="coral" label="Chapitres terminés" />
            <TypeLine text="CONTRÔLE ISI1 DANS 6J // 23 CARTES EN ATTENTE // RECORD COMBO 12" />
            <div className="flex items-end gap-4">
              <div className="display big">
                <CountUp to={23} />
              </div>
              <div className="mono dim leading-[1.6]">
                cartes
                <br />à revoir
              </div>
            </div>
            <div className="flex items-center gap-6">
              <TimerRing seconds={14} total={20} />
              <LangDemo />
              <HexAvatar initials="G3" course="coral" size="sm" />
            </div>
          </div>
        </Sample>

        <Sample num="03" title="Titres : glitch, décodage, gribouillis">
          <div>
            <Tag icon={BookOpen} tilt="left" course="coral">
              Chapitre 05 · 12 min
            </Tag>
            <h3 className="display mt-3 text-2xl">
              <ScrambleText>Ta recherche tient-elle debout ?</ScrambleText>
            </h3>
            <div style={courseStyle('coral')}>
              <Squiggle />
            </div>
            <p className="text-sm text-ink-soft">
              Qualité, validité, plagiat : ce qui sépare un bon mémoire d'un mémoire recalé.
            </p>
          </div>
        </Sample>

        <Sample num="04" title="Radar, état vide, surcouches">
          <div className="grid gap-6">
            <Radar code="K7PX" />
            <EmptyState
              icon={Inbox}
              title="Rien à revoir"
              text="Toutes les cartes du jour sont faites. Reviens demain."
            >
              <Button variant="primary" icon={Zap}>
                Lancer un quiz
              </Button>
            </EmptyState>
            <OverlayDemo />
          </div>
        </Sample>

        <Sample num="05" title="Composition : carte matière et mission">
          <div className="grid gap-4">
            <Panel live brackets drop dots course="lime">
              <div className="flex items-center justify-between">
                <Tag icon={Target}>Mission du jour</Tag>
                <span className="mono dim">≈ 9 min</span>
              </div>
              <div className="my-3.5 flex items-end justify-between">
                <div className="display big">
                  <CountUp to={23} />
                </div>
                <div className="mono dim text-right leading-[1.6]">
                  cartes
                  <br />à revoir
                </div>
              </div>
              <Button variant="primary" block icon={Zap}>
                Lancer
              </Button>
            </Panel>
            <div className="grid grid-cols-2 gap-3">
              <Panel
                hi
                drop
                tilt
                course="lime"
                className="flex min-h-[138px] flex-col justify-between"
              >
                <Tag tilt="right" className="absolute right-2.5 top-2.5">
                  J-6
                </Tag>
                <span className="grid h-[34px] w-[34px] place-items-center bg-[color-mix(in_srgb,var(--course)_14%,transparent)] text-course [[data-theme='light']_&]:text-ink">
                  <Icon icon={ClipboardList} />
                </span>
                <div>
                  <h4 className="font-display text-[13.5px] font-bold leading-tight">
                    Ingénierie des exigences
                  </h4>
                  <div className="mono dim my-2">ISI1 · 20%</div>
                  <SegBar done={2} total={9} label="ISI1" />
                </div>
              </Panel>
              <Panel
                hi
                drop
                tilt
                course="coral"
                className="flex min-h-[138px] flex-col justify-between"
              >
                <Tag tilt="left" className="absolute right-2.5 top-2.5">
                  J-7
                </Tag>
                <span className="grid h-[34px] w-[34px] place-items-center bg-[color-mix(in_srgb,var(--course)_14%,transparent)] text-course [[data-theme='light']_&]:text-ink">
                  <Icon icon={FlaskConical} />
                </span>
                <div>
                  <h4 className="font-display text-[13.5px] font-bold leading-tight">
                    Méthodes de recherche
                  </h4>
                  <div className="mono dim my-2">REC1 · 55%</div>
                  <SegBar done={3} total={5} label="REC1" />
                </div>
              </Panel>
            </div>
          </div>
        </Sample>
      </main>
    </>
  )
}
