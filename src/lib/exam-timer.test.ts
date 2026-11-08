import { announceBucket, examDeadline, examTimer, formatClock } from './exam-timer'

const T0 = 1_000_000

describe('examTimer', () => {
  it('au démarrage : durée complète, ton neutre', () => {
    const s = examTimer(T0, 30, T0)
    expect(s).toEqual({ remainingSec: 1800, totalSec: 1800, tone: 'ok', expired: false })
  })

  it('se déduit de l’horodatage : après rechargement, le temps écoulé est conservé', () => {
    // 12 min 30 s plus tard, quel que soit le nombre de rechargements entre-temps
    const s = examTimer(T0, 30, T0 + (12 * 60 + 30) * 1000)
    expect(s.remainingSec).toBe(17 * 60 + 30)
    expect(s.tone).toBe('ok')
  })

  it('orange à 10 min, rouge à 2 min', () => {
    expect(examTimer(T0, 30, T0 + 20 * 60 * 1000 - 1000).tone).toBe('ok')
    expect(examTimer(T0, 30, T0 + 20 * 60 * 1000).tone).toBe('warn')
    expect(examTimer(T0, 30, T0 + 28 * 60 * 1000 - 1000).tone).toBe('warn')
    expect(examTimer(T0, 30, T0 + 28 * 60 * 1000).tone).toBe('danger')
  })

  it('expire à 0 et ne devient jamais négatif', () => {
    expect(examTimer(T0, 30, T0 + 1800 * 1000)).toMatchObject({ remainingSec: 0, expired: true, tone: 'danger' })
    expect(examTimer(T0, 30, T0 + 99_999_999).remainingSec).toBe(0)
  })

  it('une horloge en retard ne dépasse pas la durée totale', () => {
    expect(examTimer(T0, 30, T0 - 5000).remainingSec).toBe(1800)
  })

  it('les secondes entamées comptent', () => {
    expect(examTimer(T0, 1, T0 + 500).remainingSec).toBe(60)
    expect(examTimer(T0, 1, T0 + 1500).remainingSec).toBe(59)
  })

  it('examDeadline = démarrage + durée', () => {
    expect(examDeadline(T0, 30)).toBe(T0 + 1_800_000)
  })
})

describe('formatClock', () => {
  it('MM:SS', () => {
    expect(formatClock(0)).toBe('00:00')
    expect(formatClock(65)).toBe('01:05')
    expect(formatClock(1800)).toBe('30:00')
    expect(formatClock(5400)).toBe('90:00')
    expect(formatClock(-3)).toBe('00:00')
  })
})

describe('announceBucket', () => {
  it('paliers rares : 5 min, puis 10, 2, 1 et 0', () => {
    expect(announceBucket(1800)).toBe(30)
    expect(announceBucket(1501)).toBe(30)
    expect(announceBucket(1500)).toBe(25)
    expect(announceBucket(601)).toBe(15)
    expect(announceBucket(600)).toBe(10)
    expect(announceBucket(121)).toBe(10)
    expect(announceBucket(120)).toBe(2)
    expect(announceBucket(61)).toBe(2)
    expect(announceBucket(60)).toBe(1)
    expect(announceBucket(1)).toBe(1)
    expect(announceBucket(0)).toBe(0)
  })
  it('stable d’une seconde à l’autre (pas de spam)', () => {
    const distinct = new Set(Array.from({ length: 1800 }, (_, i) => announceBucket(1800 - i)))
    expect(distinct.size).toBeLessThanOrEqual(12)
  })
})
