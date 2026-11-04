import confetti from 'canvas-confetti'
import { comboBurst, flashKo, flashOk } from './celebrate'
import { setEffectsLevel } from '@/store/effects'

vi.mock('canvas-confetti', () => ({ default: vi.fn() }))

afterEach(() => {
  document.body.innerHTML = ''
  localStorage.clear()
  vi.clearAllMocks()
})

describe('celebrate', () => {
  it('ne fait rien en off', () => {
    setEffectsLevel('off')
    const el = document.createElement('div')
    document.body.appendChild(el)
    flashOk()
    flashKo(el)
    comboBurst(3, 120)
    expect(document.querySelector('.flash, .combo')).toBeNull()
    expect(el.classList.contains('shake')).toBe(false)
    expect(confetti).not.toHaveBeenCalled()
  })

  it('affiche flash, secousse, combo et confettis en full', () => {
    setEffectsLevel('full')
    const el = document.createElement('div')
    document.body.appendChild(el)
    flashOk()
    flashKo(el)
    comboBurst(3, 120)
    expect(document.querySelector('.flash.ok')).not.toBeNull()
    expect(document.querySelector('.flash.ko')).not.toBeNull()
    expect(el.classList.contains('shake')).toBe(true)
    expect(document.querySelector('.combo')?.textContent).toContain('Combo x3')
    expect(document.querySelector('.combo')?.textContent).toContain('+120 XP')
    expect(confetti).toHaveBeenCalledOnce()
  })

  it('pas de confettis en light', () => {
    setEffectsLevel('light')
    comboBurst(2, 20)
    expect(document.querySelector('.combo')).not.toBeNull()
    expect(confetti).not.toHaveBeenCalled()
  })
})
