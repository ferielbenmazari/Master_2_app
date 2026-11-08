import { describe, expect, it } from 'vitest'
import { getChapterIndex, getCourse, getCourses, getExamIndex, getNotions, loadAllChapters, loadChapter, loadExam } from './loader'

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
    expect(idx).toContainEqual({ id: REC1_05, courseId: 'rec1', order: 5, path: `/content/rec1/chapters/05-qualite-validite-ethique.json` })
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
