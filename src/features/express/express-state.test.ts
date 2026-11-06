import { describe, expect, it } from 'vitest'
import { Rating } from '@/store/fsrs'
import { expressReducer, isFinished, scoreCard, startExpress, XP_HARD, XP_KEYPOINT } from './express-state'

describe('scoreCard', () => {
  it('Encore casse le combo, Difficile le garde, Bien/Facile l’augmentent (+5 XP dès x2)', () => {
    expect(scoreCard(3, Rating.Again)).toEqual({ combo: 0, xp: 0 })
    expect(scoreCard(3, Rating.Hard)).toEqual({ combo: 3, xp: XP_HARD })
    expect(scoreCard(0, Rating.Good)).toEqual({ combo: 1, xp: 10 })
    expect(scoreCard(1, Rating.Easy)).toEqual({ combo: 2, xp: 15 })
  })
})

describe('expressReducer', () => {
  it('cumule XP et combo, retient le combo max, avance puis termine', () => {
    let s = startExpress(3)
    s = expressReducer(s, { type: 'keypoint' })
    expect(s).toMatchObject({ xp: XP_KEYPOINT, combo: 0 })
    s = expressReducer(s, { type: 'next' })
    s = expressReducer(s, { type: 'card', grade: Rating.Good })
    s = expressReducer(s, { type: 'quiz', correct: true })
    expect(s).toMatchObject({ combo: 2, maxCombo: 2, xp: XP_KEYPOINT + 10 + 15 })
    s = expressReducer(s, { type: 'quiz', correct: false })
    expect(s).toMatchObject({ combo: 0, maxCombo: 2 })
    expect(isFinished(s)).toBe(false)
    for (let i = 0; i < 5; i++) s = expressReducer(s, { type: 'next' })
    expect(s.index).toBe(3)
    expect(isFinished(s)).toBe(true)
  })
})
