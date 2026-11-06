// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { repairJsonQuotes, repairPdfText } from './repair-pdf-text.ts'

describe('repairPdfText', () => {
  it.each([
    ['Introduc=on', 'Introduction'],
    ['informaMon', 'information'],
    ['s=ll', 'still'],
    ['cer=ﬁca=on', 'certification'],
    ['SurspéciﬁcaMon', 'Surspécification'],
    ['Répar==on', 'Répartition'],
    ['U=lisateurs', 'Utilisateurs'],
    ['UMlisaMon', 'Utilisation'],
    ['jusMﬁés', 'justifiés'],
    ['ﬂux eﬀort oﬃce ﬄ', 'flux effort office ffl'],
    ['évalua=on', 'évaluation'],
  ])('%s → %s', (input, expected) => {
    expect(repairPdfText(input)).toBe(expected)
  })

  it.each([
    'RE = P(L) × S(L)',
    'x=1',
    'V={v1, v2}',
    'a=b',
    'ID=51',
    'NB =>',
    '« ring tone » = « sms »',
    'Calculated=',
    'OptiMix',
    'OptiMIx',
    'DeMarco',
    'MoSCoW',
    'CMMI SEMC PM MRs',
    'Methodology Model Management',
    'FSM IBM',
  ])('laisse intact : %s', (input) => {
    expect(repairPdfText(input)).toBe(input)
  })

  it('est idempotente', () => {
    const once = repairPdfText('Introduc=on a=b informaMon')
    expect(repairPdfText(once)).toBe(once)
  })
})

describe('repairJsonQuotes', () => {
  it('ne répare que les champs quote', () => {
    const json = '{ "text": "Introduc=on", "quote": "Introduc=on de l\\"informaMon\\"", "x": "s=ll" }'
    expect(repairJsonQuotes(json)).toBe('{ "text": "Introduc=on", "quote": "Introduction de l\\"information\\"", "x": "s=ll" }')
  })
})
