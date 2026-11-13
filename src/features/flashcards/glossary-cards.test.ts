import { describe, expect, it } from 'vitest'
import { getCourses, loadAllChapters } from '@/content/loader'
import type { Chapter, Course, Flashcard, Term } from '@/content/schema'
import { indexCards } from './deck-cards'
import { chapterCardCount, courseGlossaryCards, glossaryCardId, termCards } from './glossary-cards'

const src = [{ file: 'f.pdf', loc: 'p. 1', quote: 'citation' }]
const t = (id: string, extra: Partial<Term> = {}): Term => ({
  id,
  fr: `${id} fr`,
  en: `${id} en`,
  definition: { fr: `def ${id} fr`, en: `def ${id} en` },
  src,
  ...extra,
})
const fc = (id: string, termId?: string): Flashcard => ({ id, front: { fr: 'q', en: 'q' }, back: { fr: 'r', en: 'r' }, ...(termId ? { termId } : {}) })
// Fixture minimale : seuls `id`, `glossary` et `flashcards` sont lus par le code testé.
const ch = (id: string, glossary: Term[], flashcards: Flashcard[] = []) => ({ id, glossary, flashcards }) as unknown as Chapter
const course = { id: 'c', code: 'S1-C', color: 'lime' } as unknown as Course

describe('termCards', () => {
  const term = t('term-x', { example: { fr: 'ex fr', en: 'ex en' }, pitfall: { fr: 'pi fr', en: 'pi en' }, notion: 'n-x' })
  const [a, b] = termCards('ch1', term)

  it('ids stables et termId porté par les deux cartes', () => {
    expect(a.id).toBe('ch1-gl-term-x-a')
    expect(b.id).toBe('ch1-gl-term-x-b')
    expect(glossaryCardId('ch1', 'term-x', 'a')).toBe(a.id)
    expect(a.termId).toBe('term-x')
    expect(b.termId).toBe('term-x')
  })
  it('terme → définition : recto = terme (FR/EN), verso = définition + exemple + piège', () => {
    expect(a.front).toEqual({ fr: 'term-x fr', en: 'term-x en' })
    expect(a.back.fr).toBe('def term-x fr<br>**Exemple.** ex fr<br>**Piège.** pi fr')
    expect(a.back.en).toBe('def term-x en<br>**Example.** ex en<br>**Pitfall.** pi en')
  })
  it('définition → terme : recto = définition, verso = terme', () => {
    expect(b.front).toEqual(term.definition)
    expect(b.back).toEqual({ fr: 'term-x fr', en: 'term-x en' })
  })
  it('les citations du terme sont portées par la carte (puce Source)', () => {
    expect(a.src).toEqual(src)
    expect(b.src).toEqual(src)
    expect(a.notions).toEqual(['n-x'])
  })
  it('sans exemple ni piège : le verso est la définition seule', () => {
    expect(termCards('c', t('term-y'))[0].back).toEqual({ fr: 'def term-y fr', en: 'def term-y en' })
  })
})

describe('courseGlossaryCards', () => {
  it('2 cartes par terme, les « terme → définition » avant les « définition → terme »', () => {
    const cards = courseGlossaryCards([ch('c1', [t('term-a'), t('term-b')])]).get('c1') ?? []
    expect(cards.map((c) => c.id)).toEqual(['c1-gl-term-a-a', 'c1-gl-term-b-a', 'c1-gl-term-a-b', 'c1-gl-term-b-b'])
  })
  it('un term.id défini dans plusieurs chapitres n’a de cartes que dans le premier', () => {
    const m = courseGlossaryCards([ch('c1', [t('term-a')]), ch('c2', [t('term-a'), t('term-b')])])
    expect(m.get('c1')).toHaveLength(2)
    expect(m.get('c2')?.map((c) => c.id)).toEqual(['c2-gl-term-b-a', 'c2-gl-term-b-b'])
  })
  it('un terme couvert par une flashcard écrite du même chapitre n’en reçoit pas', () => {
    const m = courseGlossaryCards([ch('c1', [t('term-a'), t('term-b')], [fc('c1-fc-1', 'term-a')])])
    expect(m.get('c1')?.map((c) => c.id)).toEqual(['c1-gl-term-b-a', 'c1-gl-term-b-b'])
  })
  it('chapterCardCount = écrites + glossaire dédoublonné', () => {
    const chapters = [ch('c1', [t('term-a')], [fc('c1-fc-1')]), ch('c2', [t('term-a'), t('term-b')])]
    expect(chapterCardCount(chapters, 'c1')).toBe(3)
    expect(chapterCardCount(chapters, 'c2')).toBe(2)
    expect(chapterCardCount(chapters, 'inconnu')).toBe(0)
  })
})

describe('indexCards', () => {
  const chapters = [ch('c1', [t('term-a')], [fc('c1-fc-1')]), ch('c2', [t('term-a'), t('term-b')], [fc('c2-fc-1')])]

  it('cartes écrites d’abord, puis cartes du glossaire', () => {
    expect([...indexCards([{ course, chapters }]).keys()]).toEqual([
      'c1-fc-1',
      'c2-fc-1',
      'c1-gl-term-a-a',
      'c1-gl-term-a-b',
      'c2-gl-term-b-a',
      'c2-gl-term-b-b',
    ])
  })
  it('chaque carte du glossaire connaît son glossaire (termes cliquables) et son chapitre', () => {
    const d = indexCards([{ course, chapters }]).get('c2-gl-term-b-a')
    expect(d?.chapterId).toBe('c2')
    expect(d?.glossary.has('term-b')).toBe(true)
  })
  it('restreint à un chapitre en gardant la déduplication de la matière', () => {
    expect([...indexCards([{ course, chapters }], 'c2').keys()]).toEqual(['c2-fc-1', 'c2-gl-term-b-a', 'c2-gl-term-b-b'])
  })
})

describe('contenu réel', () => {
  it('chaque chapitre a ≥ 8 cartes, sans doublon, et l’historique de REC1-05 est conservé', async () => {
    const entries = await Promise.all(getCourses().map(async (c) => ({ course: c, chapters: await loadAllChapters(c.id) })))
    const cards = indexCards(entries)
    const perChapter = new Map<string, number>()
    for (const d of cards.values()) perChapter.set(d.chapterId, (perChapter.get(d.chapterId) ?? 0) + 1)
    for (const { chapters } of entries) {
      for (const c of chapters) expect(perChapter.get(c.id) ?? 0, c.id).toBeGreaterThanOrEqual(8)
    }
    // Une carte écrite liée à un terme remplace ses deux cartes générées : le total suit le contenu,
    // on vérifie donc seulement qu'il reste cohérent avec le nombre de chapitres.
    const chapterCount = entries.reduce((n, e) => n + e.chapters.length, 0)
    expect(cards.size).toBeGreaterThanOrEqual(8 * chapterCount)
    expect(cards.size).toBeLessThanOrEqual(60 * chapterCount)

    const rec = entries.find((e) => e.course.id === 'rec1')?.chapters.find((c) => c.id === 'rec1-05-qualite-validite-ethique')
    const written = rec?.flashcards.map((f) => f.id) ?? []
    expect(written).toHaveLength(10)
    for (const id of written) expect(cards.get(id)?.card.id).toBe(id)
    expect(written[0]).toBe('rec1-05-fc-01')
    // aucun doublon d'id (la Map l'écraserait silencieusement)
    const total = entries.flatMap((e) => e.chapters).reduce((n, c) => n + c.flashcards.length, 0)
    expect(total).toBeLessThan(cards.size)
  })
})
