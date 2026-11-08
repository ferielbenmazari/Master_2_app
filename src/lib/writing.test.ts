import { describe, expect, it } from 'vitest'
import {
  checkCloze,
  checkReorder,
  clozeGaps,
  clozeHint,
  errorSpans,
  findKeywords,
  freeScore,
  isErrorWord,
  itemSeed,
  matchesAny,
  parseCloze,
  sentenceWords,
  shuffledOrder,
  splitSentence,
} from './writing'

describe('matchesAny', () => {
  it('compare après normalisation', () => {
    expect(matchesAny('  Controls FOR. ', ['controls', 'controls for'])).toBe(true)
    expect(matchesAny('control', ['controls'])).toBe(false)
  })
  it('une saisie vide ne passe jamais', () => {
    expect(matchesAny('  ', ['', 'x'])).toBe(false)
  })
})

describe('reorder', () => {
  const answer = 'External validity is about the generalisation of the findings.'
  const words = splitSentence(answer)

  it('garde la ponctuation collée au mot', () => {
    expect(words).toHaveLength(9)
    expect(words.at(-1)).toBe('findings.')
  })
  it('mélange avec graine, jamais dans l’ordre initial, permutation complète', () => {
    for (let seed = 0; seed < 200; seed++) {
      const o = shuffledOrder(words, seed)
      expect([...o].sort((a, b) => a - b)).toEqual(words.map((_, i) => i))
      expect(o.map((i) => words[i])).not.toEqual(words)
    }
  })
  it('est reproductible pour une graine donnée', () => {
    expect(shuffledOrder(words, 42)).toEqual(shuffledOrder(words, 42))
  })
  it('deux mots : jamais l’ordre initial non plus', () => {
    for (let seed = 0; seed < 50; seed++) expect(shuffledOrder(['A', 'b'], seed)).toEqual([1, 0])
  })
  it('mots tous identiques ou un seul mot : ne boucle pas', () => {
    expect(shuffledOrder(['a'], 1)).toEqual([0])
    expect(shuffledOrder(['a', 'a'], 1)).toEqual([0, 1])
  })
  it('graine d’item stable', () => {
    expect(itemSeed('rec1-05-wr-01')).toBe(itemSeed('rec1-05-wr-01'))
    expect(itemSeed('rec1-05-wr-01', 1)).not.toBe(itemSeed('rec1-05-wr-01', 0))
  })
  it('vérifie contre answer et accepted', () => {
    const accepted = ['External validity is about the generalization of the findings.']
    expect(checkReorder(words, answer, accepted)).toBe(true)
    expect(checkReorder(splitSentence(accepted[0]!), answer)).toBe(true) // -ize ≡ -ise
    expect(checkReorder(['About', 'external', 'validity', 'is'], answer)).toBe(false)
    expect(checkReorder([...words].reverse(), answer, accepted)).toBe(false)
  })
  it('accepte un ordre alternatif déclaré dans accepted', () => {
    expect(checkReorder(['b', 'a'], 'a b', ['b a'])).toBe(true)
  })
})

describe('cloze', () => {
  const text = 'Internal validity {{controls|controls for}} extraneous variables and {{eliminates|rules out}} alternative explanations.'
  const segs = parseCloze(text)

  it('découpe texte et trous, variantes séparées par |', () => {
    expect(segs.map((s) => s.type)).toEqual(['text', 'gap', 'text', 'gap', 'text'])
    expect(clozeGaps(segs)).toEqual([
      ['controls', 'controls for'],
      ['eliminates', 'rules out'],
    ])
    expect(segs[0]).toEqual({ type: 'text', value: 'Internal validity ' })
  })
  it('trou en début et en fin de phrase', () => {
    expect(parseCloze('{{A}} b {{c}}')).toEqual([
      { type: 'gap', answers: ['A'] },
      { type: 'text', value: ' b ' },
      { type: 'gap', answers: ['c'] },
    ])
  })
  it('texte sans trou', () => {
    expect(clozeGaps(parseCloze('rien'))).toEqual([])
  })
  it('chaque trou accepte toutes ses variantes', () => {
    const gaps = clozeGaps(segs)
    expect(checkCloze(gaps, ['controls for', 'Rules out'])).toEqual([true, true])
    expect(checkCloze(gaps, ['Controls', 'eliminates.'])).toEqual([true, true])
    expect(checkCloze(gaps, ['controll', ''])).toEqual([false, false])
  })
  it('saisies manquantes → faux', () => {
    expect(checkCloze([['a'], ['b']], ['a'])).toEqual([true, false])
  })
  it('indice : première lettre puis traits bas', () => {
    expect(clozeHint(['controls', 'controls for'])).toBe('c_______')
    expect(clozeHint(['rules out'])).toBe('r____ ___')
    expect(clozeHint([])).toBe('')
  })
})

describe('spot_error', () => {
  const sentence = 'The validity of the results depend of the sample.'
  const spans = errorSpans(sentence, 'depend of')
  const words = sentenceWords(sentence)

  it('découpe en mots avec positions', () => {
    expect(words.map((w) => w.text)).toEqual(['The', 'validity', 'of', 'the', 'results', 'depend', 'of', 'the', 'sample.'])
    expect(sentence.slice(words[5]!.start, words[5]!.end)).toBe('depend')
  })
  it('correct si le mot cliqué appartient au fragment fautif', () => {
    const ok = words.filter((w) => isErrorWord(w, spans)).map((w) => w.text)
    expect(ok).toEqual(['depend', 'of']) // le « of » du fragment, pas celui de « validity of the results »
  })
  it('le « of » hors fragment est faux', () => {
    expect(isErrorWord(words[2]!, spans)).toBe(false)
  })
  it('fragment au début, ponctuation collée', () => {
    const s = 'Actually, plagiarism is a big problem.'
    const w = sentenceWords(s)
    expect(isErrorWord(w[0]!, errorSpans(s, 'Actually'))).toBe(true)
    expect(isErrorWord(w[1]!, errorSpans(s, 'Actually'))).toBe(false)
  })
  it('fragment sur plusieurs mots : n’importe lequel suffit', () => {
    const s = 'In the method, informations are continually revised.'
    const sp = errorSpans(s, 'informations are')
    const names = sentenceWords(s).filter((w) => isErrorWord(w, sp)).map((w) => w.text)
    expect(names).toEqual(['informations', 'are'])
  })
  it('fragment absent ou vide : aucun mot correct', () => {
    expect(errorSpans(sentence, 'zzz')).toEqual([])
    expect(errorSpans(sentence, '')).toEqual([])
  })
  it('plusieurs occurrences : toutes comptent', () => {
    expect(errorSpans('a b a', 'a')).toEqual([
      [0, 1],
      [4, 5],
    ])
  })
})

describe('keywords (free)', () => {
  const kw = ['internal validity', 'external validity', 'extraneous variables', 'alternative explanations', 'generalis']

  it('trouve par sous-chaîne normalisée (casse, ponctuation, -ize)', () => {
    const r = findKeywords(
      'INTERNAL  validity controls extraneous variables. External validity is about whether findings can be generalized.',
      kw,
    )
    expect(r.found).toEqual(['internal validity', 'external validity', 'extraneous variables', 'generalis'])
    expect(r.missing).toEqual(['alternative explanations'])
  })
  it('un mot-clé avec -ize dans le contenu est trouvé avec -ise', () => {
    expect(findKeywords('we generalise', ['generaliz']).found).toEqual(['generaliz'])
  })
  it('réponse vide : tout manque', () => {
    const r = findKeywords('', kw)
    expect(r.found).toEqual([])
    expect(r.missing).toEqual(kw)
  })
  it('score et seuil de réussite', () => {
    expect(freeScore({ found: ['a', 'b', 'c'], missing: ['d', 'e'] })).toEqual({ score: 0.6, passed: true })
    expect(freeScore({ found: ['a'], missing: ['d', 'e'] }).passed).toBe(false)
    expect(freeScore({ found: [], missing: [] })).toEqual({ score: 1, passed: true })
  })
})
