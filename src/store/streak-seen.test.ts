import { noteStreak } from './streak-seen'

beforeEach(() => localStorage.clear())

describe('noteStreak', () => {
  it('pas d’animation tant qu’il n’y a pas de série', () => {
    expect(noteStreak(0)).toBe(false)
  })
  it('anime quand la série augmente, une seule fois', () => {
    expect(noteStreak(1)).toBe(true)
    expect(noteStreak(1)).toBe(false)
    expect(noteStreak(2)).toBe(true)
  })
  it('une série qui retombe est enregistrée sans animation, puis repart', () => {
    noteStreak(5)
    expect(noteStreak(0)).toBe(false)
    expect(noteStreak(1)).toBe(true)
  })
})
