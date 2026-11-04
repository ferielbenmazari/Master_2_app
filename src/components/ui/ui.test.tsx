import { fireEvent, render, screen } from '@testing-library/react'
import { Flame, Inbox } from 'lucide-react'
import { setEffectsLevel } from '@/store/effects'
import Ambient from './Ambient'
import Button from './Button'
import CountUp from './CountUp'
import EmptyState from './EmptyState'
import GlitchText from './GlitchText'
import HexAvatar from './HexAvatar'
import Icon from './Icon'
import LangToggle from './LangToggle'
import Panel from './Panel'
import Popover from './Popover'
import Radar from './Radar'
import ScrambleText from './ScrambleText'
import SegBar from './SegBar'
import Sheet from './Sheet'
import Squiggle from './Squiggle'
import Tag from './Tag'
import ThemeToggle from './ThemeToggle'
import TimerRing from './TimerRing'
import Toast from './Toast'
import TypeLine from './TypeLine'
import XpBar from './XpBar'

beforeEach(() => {
  setEffectsLevel('off')
  // jsdom n'implémente pas canvas
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
})
afterEach(() => {
  localStorage.clear()
  vi.restoreAllMocks()
})

describe('kit UI : rendu', () => {
  it('Panel : variantes et décor masqué aux lecteurs d’écran', () => {
    const { container } = render(
      <Panel hi live drop brackets dots course="coral">
        Contenu
      </Panel>,
    )
    const panel = container.firstElementChild as HTMLElement
    expect(panel).toHaveClass('panel', 'hi', 'live', 'drop', 'brackets')
    expect(panel.style.getPropertyValue('--course')).toBe('var(--coral)')
    expect(panel.querySelectorAll('.br')).toHaveLength(4)
    expect(panel.querySelectorAll('[aria-hidden="true"]').length).toBeGreaterThanOrEqual(5)
    expect(screen.getByText('Contenu')).toBeInTheDocument()
  })

  it('Button : variantes, bloc, type par défaut', () => {
    render(
      <Button variant="primary" block icon={Flame}>
        Lancer
      </Button>,
    )
    const b = screen.getByRole('button', { name: 'Lancer' })
    expect(b).toHaveClass('btn', 'primary', 'btn-block')
    expect(b).toHaveAttribute('type', 'button')
  })

  it('Tag : inclinaison', () => {
    render(<Tag tilt="right">J-6</Tag>)
    expect(screen.getByText('J-6')).toHaveClass('tag', 'tilt', 'r')
  })

  it('XpBar et SegBar : progression accessible', () => {
    render(
      <>
        <XpBar value={150} label="Rang" />
        <SegBar done={2} total={5} label="Chapitres" />
      </>,
    )
    expect(screen.getByRole('progressbar', { name: 'Rang' })).toHaveAttribute(
      'aria-valuenow',
      '100',
    )
    const seg = screen.getByRole('progressbar', { name: 'Chapitres' })
    expect(seg).toHaveAttribute('aria-valuenow', '2')
    expect(seg.querySelectorAll('b.on')).toHaveLength(2)
    expect(seg.querySelectorAll('b')).toHaveLength(5)
  })

  it('HexAvatar : initiales en majuscules', () => {
    render(<HexAvatar initials="rp" />)
    expect(screen.getByText('RP')).toHaveClass('hex')
  })

  it('LangToggle appelle onChange', () => {
    const onChange = vi.fn()
    render(<LangToggle value="fr-en" onChange={onChange} />)
    expect(screen.getByRole('radio', { name: 'FR+EN' })).toBeChecked()
    fireEvent.click(screen.getByRole('radio', { name: 'EN' }))
    expect(onChange).toHaveBeenCalledWith('en')
  })

  it('ThemeToggle propose le thème opposé', () => {
    const onChange = vi.fn()
    render(<ThemeToggle theme="dark" onChange={onChange} />)
    fireEvent.click(screen.getByRole('button', { name: 'Mode jour' }))
    expect(onChange).toHaveBeenCalledWith('light')
  })

  it('TimerRing : minuteur accessible', () => {
    render(<TimerRing seconds={10} total={20} />)
    expect(screen.getByRole('timer', { name: '10 secondes restantes' })).toBeInTheDocument()
  })

  it('Radar : code de salle', () => {
    render(<Radar code="K7PX" />)
    expect(screen.getByRole('img', { name: 'Code de la salle : K7PX' })).toBeInTheDocument()
  })

  it('GlitchText, Squiggle, Icon', () => {
    const { container } = render(
      <>
        <GlitchText text="M2 // Arena" />
        <Squiggle />
        <Icon icon={Flame} />
      </>,
    )
    expect(screen.getByText('M2 // Arena')).toHaveAttribute('data-text', 'M2 // Arena')
    expect(container.querySelector('.squiggle')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('svg.i:not(.squiggle)')).toHaveAttribute('aria-hidden', 'true')
  })

  it('EmptyState', () => {
    render(
      <EmptyState icon={Inbox} title="Rien à revoir" text="Reviens demain.">
        <Button>Action</Button>
      </EmptyState>,
    )
    expect(screen.getByRole('heading', { name: 'Rien à revoir' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
  })

  it('Popover s’ouvre et se ferme avec Échap', () => {
    const onClose = vi.fn()
    render(
      <Popover open onClose={onClose} anchor={null} label="Définition">
        Texte
      </Popover>,
    )
    expect(screen.getByRole('dialog', { name: 'Définition' })).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('Sheet modale et fermeture', () => {
    const onClose = vi.fn()
    render(
      <Sheet open onClose={onClose} title="Réglages">
        Corps
      </Sheet>,
    )
    expect(screen.getByRole('dialog', { name: 'Réglages' })).toHaveAttribute('aria-modal', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Fermer' }))
    expect(onClose).toHaveBeenCalled()
  })

  it('Toast annonce son message', () => {
    render(<Toast open onClose={() => {}} message="Enregistré" duration={0} />)
    expect(screen.getByRole('status')).toHaveTextContent('Enregistré')
  })
})

describe('kit UI : effets', () => {
  it('off : CountUp, TypeLine et ScrambleText affichent le texte final tout de suite', () => {
    render(
      <>
        <span data-testid="c">
          <CountUp to={1240} suffix=" XP" />
        </span>
        <TypeLine text="Journal complet" />
        <p data-testid="s">
          <ScrambleText>Titre décodé</ScrambleText>
        </p>
      </>,
    )
    expect(screen.getByTestId('c')).toHaveTextContent('1240 XP')
    expect(screen.getByText('Journal complet')).toBeInTheDocument()
    expect(screen.getByTestId('s')).toHaveTextContent('Titre décodé')
  })

  it('off : Ambient sans aura ni canvas', () => {
    const { container } = render(<Ambient />)
    expect(container.querySelector('.aura')).toBeNull()
    expect(container.querySelector('canvas')).toBeNull()
  })

  it('light : pas d’aura ni de canvas ; full : auras et un seul canvas', () => {
    setEffectsLevel('light')
    const light = render(<Ambient />)
    expect(light.container.querySelector('.aura')).toBeNull()
    expect(light.container.querySelector('canvas')).toBeNull()
    light.unmount()
    setEffectsLevel('full')
    const full = render(<Ambient />)
    expect(full.container.querySelectorAll('.aura')).toHaveLength(2)
    expect(full.container.querySelectorAll('canvas')).toHaveLength(1)
  })

  it('full : CountUp démarre à 0', () => {
    setEffectsLevel('full')
    render(
      <span data-testid="c">
        <CountUp to={50} />
      </span>,
    )
    expect(screen.getByTestId('c')).toHaveTextContent('0')
  })
})
