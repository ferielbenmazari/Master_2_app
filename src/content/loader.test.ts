import { describe, expect, it } from 'vitest'
import {
  getChapterIndex,
  getCourse,
  getCourses,
  getExamIndex,
  getNotions,
  loadAllChapters,
  loadChapter,
  loadExam,
  orderChapterRefs,
} from './loader'
import type { Course } from './schema'

const REC1_05 = 'rec1-05-qualite-validite-ethique'

describe('loader', () => {
  it('liste les 4 matières', () => {
    expect(getCourses().map((c) => c.id)).toEqual(['inf4', 'isi1', 'isi5', 'rec1'])
    expect(getCourse('rec1')?.code).toBe('S3-REC1')
    expect(getCourse('zzz')).toBeUndefined()
  })

  it('indexe les chapitres sans les charger', () => {
    const idx = getChapterIndex('rec1')
    expect(idx.map((c) => c.order)).toEqual([...idx.map((c) => c.order)].sort((a, b) => a - b))
    expect(idx).toContainEqual({
      id: REC1_05,
      courseId: 'rec1',
      order: 6,
      path: `/content/rec1/chapters/05-qualite-validite-ethique.json`,
    })
    // ordre d'affichage REC1 : course.json.chapterOrder (le chapitre 07 s'insère en 4e position)
    expect(idx.map((c) => c.id.slice(5, 7))).toEqual(['01', '02', '03', '07', '04', '05', '06'])
    expect(getChapterIndex('inf4').every((c) => c.courseId === 'inf4')).toBe(true)
  })

  it('charge un chapitre validé, avec cache', async () => {
    const a = await loadChapter(REC1_05)
    expect(a.courseId).toBe('rec1')
    expect(a.quiz.length).toBeGreaterThanOrEqual(8)
    expect(await loadChapter(REC1_05)).toBe(a)
    expect(await loadAllChapters('rec1')).toHaveLength(getChapterIndex('rec1').length)
  })

  it('rejette un chapitre ou un examen inconnu', async () => {
    await expect(loadChapter('rec1-99-nope')).rejects.toThrow(/introuvable/)
    await expect(loadExam('rec1', 'nope')).rejects.toThrow(/introuvable/)
    expect(getExamIndex('cours-inconnu')).toEqual([])
  })

  it('indexe et charge les partiels blancs de REC1', async () => {
    const index = getExamIndex('rec1')
    expect(index.map((e) => e.slug)).toContain('blanc-01')
    for (const ref of index) {
      const exam = await loadExam('rec1', ref.slug)
      expect(exam.courseId).toBe('rec1')
      expect(exam.sections.length).toBeGreaterThan(0)
    }
  })

  it('charge les notions, null si absentes', async () => {
    expect((await getNotions('rec1'))?.notions.length).toBeGreaterThanOrEqual(12)
    expect(await getNotions('cours-inconnu')).toBeNull()
  })
})

describe('orderChapterRefs', () => {
  const ref = (id: string, order: number) => ({
    id,
    courseId: 'x',
    order,
    path: `/content/x/chapters/${id}.json`,
  })
  const course = (chapterOrder?: string[]) =>
    ({
      id: 'x',
      code: 'X',
      title: { fr: 'X', en: 'X' },
      color: 'lime',
      icon: 'Book',
      description: { fr: 'X', en: 'X' },
      chapterOrder,
    }) as Course
  it('sans chapterOrder : ordre des numéros de fichier', () => {
    expect(
      orderChapterRefs([ref('x-02-b', 2), ref('x-01-a', 1)], [course()]).map((r) => r.id),
    ).toEqual(['x-01-a', 'x-02-b'])
  })
  it('avec chapterOrder : position dans la liste, sans changer les ids', () => {
    const out = orderChapterRefs(
      [ref('x-01-a', 1), ref('x-02-b', 2), ref('x-07-new', 7)],
      [course(['x-01-a', 'x-07-new', 'x-02-b'])],
    )
    expect(out.map((r) => [r.id, r.order])).toEqual([
      ['x-01-a', 1],
      ['x-07-new', 2],
      ['x-02-b', 3],
    ])
  })
})
