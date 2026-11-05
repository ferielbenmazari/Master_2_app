import { describe, expect, it } from 'vitest'
import type { Chapter, Term } from '@/content/schema'
import { buildGlossary, filterGlossary, groupByLetter } from './glossary'

const t = (id: string, fr: string, en: string): Term => ({
  id,
  fr,
  en,
  definition: { fr: 'd', en: 'd' },
  src: [],
})
const ch = (id: string, order: number, glossary: Term[]) => ({ id, order, glossary }) as unknown as Chapter

const chapters = [
  ch('c1', 1, [t('term-a', 'validité interne', 'internal validity'), t('term-b', 'échantillon', 'sample')]),
  ch('c2', 2, [t('term-a', 'doublon', 'dup'), t('term-c', 'Éthique', 'ethics')]),
]

describe('glossary', () => {
  const all = buildGlossary(chapters)
  it('dédoublonne par id', () => {
    expect(all.map((e) => e.term.id)).toEqual(['term-a', 'term-b', 'term-c'])
    expect(all[0]?.chapterId).toBe('c1')
  })
  it('« validite » trouve FR et EN', () => {
    expect(filterGlossary(all, 'validite').map((e) => e.term.id)).toEqual(['term-a'])
    expect(filterGlossary(all, 'INTERNAL Validity')).toHaveLength(1)
    expect(filterGlossary(all, 'ethique')).toHaveLength(1)
    expect(filterGlossary(all, '')).toHaveLength(3)
    expect(filterGlossary(all, 'zzz')).toHaveLength(0)
  })
  it('groupe par lettre (accents ignorés)', () => {
    expect(groupByLetter(all, 'fr').map((g) => g.letter)).toEqual(['E', 'V'])
    expect(groupByLetter(all, 'en').map((g) => g.letter)).toEqual(['E', 'I', 'S'])
  })
})
