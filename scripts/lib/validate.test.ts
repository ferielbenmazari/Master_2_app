// @vitest-environment node
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { readSourceFile } from '../../tools/sources-mcp/lib/quote.ts'
import { ChapterSchema, NotionsSchema, SourcesSchema, type Chapter, type Exam, type Notions, type Sources } from '../../src/content/schema.ts'
import { formatReport, formatSummary } from './format-report.ts'
import { loadContentTree } from './load-tree.ts'
import { validateTree, type ContentTree, type Issue, type Report } from './validate.ts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const readText = (file: string): string | null => readSourceFile(root, file)
const CH_FILE = 'content/rec1/chapters/05-qualite-validite-ethique.json'
const SRC_FILE = 'ressources/S3__REC1/Markdown/5_recmeth_5.md'

const real = loadContentTree(root)
const rec1 = real.courses.find((c) => c.dir === 'rec1')!
const baseChapter = ChapterSchema.parse(rec1.chapters.find((c) => c.file.includes('05-'))!.data)
const baseSources = SourcesSchema.parse(rec1.sources!.data)
const baseNotions = NotionsSchema.parse(rec1.notions!.data)
const clone = <T>(v: T): T => structuredClone(v)

interface Opts {
  sources?: (s: Sources) => void
  notions?: (n: Notions) => void
  exams?: Exam[]
  file?: string
}
/** Valide le chapitre REC1-05 (modifié par `mutate`) dans une matière rec1 en mémoire. */
function run(mutate: (ch: Chapter) => void = () => {}, opts: Opts = {}, raw?: (data: Chapter) => unknown): Report {
  const ch = clone(baseChapter)
  mutate(ch)
  const sources = clone(baseSources)
  opts.sources?.(sources)
  const notions = clone(baseNotions)
  opts.notions?.(notions)
  const tree: ContentTree = {
    loadIssues: [],
    courses: [
      {
        dir: 'rec1',
        course: rec1.course!,
        sources: { file: 'content/rec1/sources.json', data: sources },
        notions: { file: 'content/rec1/notions.json', data: notions },
        chapters: [{ file: opts.file ?? CH_FILE, data: raw ? raw(ch) : ch }],
        exams: (opts.exams ?? []).map((e, i) => ({ file: `content/rec1/exams/e${i}.json`, data: e })),
      },
    ],
  }
  return validateTree(tree, readText)
}

const has = (r: Report, code: string): boolean => r.issues.some((i) => i.code === code)
const errors = (r: Report): Issue[] => r.issues.filter((i) => i.severity === 'error')
const find = (r: Report, code: string): Issue => {
  const i = r.issues.find((x) => x.code === code)
  if (!i) throw new Error(`aucune issue ${code} : ${JSON.stringify(r.issues.map((x) => x.code))}`)
  return i
}
const quote0 = baseChapter.keyPoints[0]!.src[0]!
const lorem = (n: number): string => Array.from({ length: n }, (_, i) => `mot${i % 9}`).join(' ')
const L = (s: string): { fr: string; en: string } => ({ fr: s, en: s })

describe('contenu actuel', () => {
  it('l’exemple REC1-05 passe : 0 erreur, 143 citations (123 + 20 de notions.json)', () => {
    const r = validateTree(real, readText)
    expect(errors(r)).toEqual([])
    expect(r.stats.courses).toBe(4)
    expect(r.stats.chapters).toBe(1)
    expect(r.stats.citations).toBe(143)
    expect(formatSummary(r)).toMatch(/^✔ 4 matières · 1 chapitre · 143 citations vérifiées · couverture ★★★ \d+\/\d+/)
  })
  it('formate les messages comme spécifié', () => {
    const r = run((ch) => {
      ch.quiz[2]!.src[0]!.quote = 'phrase totalement inventée qui ne figure nulle part ici'
    })
    expect(formatReport(r)).toMatch(/✖ content\/rec1\/chapters\/05-.*\.json › quiz\[2\]\.src\[0\] : citation introuvable \(ratio 0\.\d\d\) dans ressources\//)
  })
})

describe('règles d’erreur', () => {
  it('R1 : champ inconnu, cardinalité, JSON invalide', () => {
    expect(has(run(() => {}, {}, (ch) => ({ ...ch, extra: 1 })), 'R1')).toBe(true)
    expect(has(run((ch) => { ch.story = ch.story.slice(0, 5) }), 'R1')).toBe(true)
    expect(has(run((ch) => { ch.quiz.forEach((q) => { if (q.type === 'mcq') q.options = q.options.slice(0, 2) }) }), 'R1')).toBe(true)
    const dir = mkdtempSync(join(tmpdir(), 'validate-'))
    mkdirSync(join(dir, 'content/x'), { recursive: true })
    writeFileSync(join(dir, 'content/x/course.json'), '{ pas du json')
    expect(loadContentTree(dir).loadIssues[0]?.code).toBe('R1')
  })
  it('R2 : id dupliqué, mauvais préfixe, id ≠ fichier, terme en double', () => {
    expect(has(run((ch) => { ch.quiz[1]!.id = ch.quiz[0]!.id }), 'R2')).toBe(true)
    expect(has(run((ch) => { ch.flashcards[0]!.id = 'autre-01-fc-01' }), 'R2')).toBe(true)
    expect(has(run((ch) => { ch.id = 'rec1-06-autre' }), 'R2')).toBe(true)
    expect(has(run((ch) => { ch.glossary[1]!.id = ch.glossary[0]!.id }), 'R2')).toBe(true)
  })
  it('R2 : unicité globale entre chapitres et examens', () => {
    const ex = baseExam()
    ex.id = baseChapter.id
    expect(has(run(() => {}, { exams: [ex] }), 'R2')).toBe(true)
  })
  it('R3 : [[termId]] inconnu, termId de flashcard inconnu', () => {
    expect(has(run((ch) => { const b = ch.story.find((x) => x.type === 'paragraph'); if (b?.type === 'paragraph') b.text.fr += ' [[term-inexistant]]' }), 'R3')).toBe(true)
    expect(has(run((ch) => { ch.flashcards[0]!.termId = 'term-inexistant' }), 'R3')).toBe(true)
  })
  it('R4 : checkpoint vers un quiz inexistant', () => {
    expect(has(run((ch) => { const b = ch.story.find((x) => x.type === 'checkpoint'); if (b?.type === 'checkpoint') b.quizId = 'rec1-05-qz-99' }), 'R4')).toBe(true)
  })
  it('R5 : indice correct hors limites ou en double', () => {
    const mcq = (ch: Chapter) => ch.quiz.find((q) => q.type === 'mcq')!
    expect(has(run((ch) => { const q = mcq(ch); if (q.type === 'mcq') q.correct = [9] }), 'R5')).toBe(true)
    expect(has(run((ch) => { const q = mcq(ch); if (q.type === 'mcq') q.correct = [0, 0] }), 'R5')).toBe(true)
  })
  it('R6 : cloze sans trou, spot_error dont error ∉ sentence', () => {
    expect(has(run((ch) => { for (const w of ch.writing) if (w.kind === 'cloze') w.text = 'Aucun trou ici.' }), 'R6')).toBe(true)
    expect(has(run((ch) => { for (const w of ch.writing) if (w.kind === 'spot_error') w.error = 'zzz absent' }), 'R6')).toBe(true)
  })
  it('R7 : champ fr vide, courseId ≠ dossier', () => {
    expect(has(run((ch) => { ch.title.fr = '  ' }), 'R7')).toBe(true)
    expect(has(run((ch) => { ch.courseId = 'isi1' }), 'R7')).toBe(true)
  })
  it('R8 : fichier introuvable ou classé ignore', () => {
    expect(has(run((ch) => { ch.keyPoints[0]!.src[0]!.file = 'ressources/n-existe-pas.md' }), 'R8')).toBe(true)
    expect(has(run((ch) => { ch.sources = ['ressources/n-existe-pas.md'] }), 'R8')).toBe(true)
    const r = run(() => {}, { sources: (s) => { for (const e of s.sources) if (e.file === SRC_FILE) e.tier = 'ignore' } })
    expect(find(r, 'R8').message).toMatch(/ignore/)
  })
  it('R9 : citation altérée (≥ 2 mots) échoue, 1 mot passe', () => {
    const q = 'Internal validity: How well the study is conducted (controls extraneous variables, eliminates alternative explanations).'
    const one = run((ch) => { ch.keyPoints[0]!.src[0]!.quote = q.replace('conducted', 'performed') })
    expect(has(one, 'R9')).toBe(false)
    const two = run((ch) => { ch.keyPoints[0]!.src[0]!.quote = q.replace('conducted', 'performed').replace('well', 'badly') })
    expect(find(two, 'R9').message).toMatch(/ratio 0\.8/)
  })
  it('R10 : sourçage obligatoire', () => {
    expect(has(run((ch) => { const b = ch.story.find((x) => x.type === 'paragraph' && !x.narrative); if (b?.type === 'paragraph') delete b.src }), 'R10')).toBe(true)
    expect(has(run((ch) => { const b = ch.story.find((x) => x.type === 'callout' && x.variant !== 'analogy'); if (b?.type === 'callout') delete b.src }), 'R10')).toBe(true)
    expect(has(run((ch) => { const b = ch.story.find((x) => x.type === 'list'); if (b?.type === 'list') b.src = [] }), 'R10')).toBe(true)
    expect(has(run((ch) => { ch.keyPoints[0]!.src = [] }), 'R10')).toBe(true)
    expect(has(run((ch) => { ch.quiz[0]!.src = [] }), 'R10')).toBe(true)
    expect(has(run((ch) => { ch.exercises[0]!.src = [] }), 'R10')).toBe(true)
    expect(has(run((ch) => { ch.glossary[0]!.src = [] }), 'R10')).toBe(true)
    expect(has(run((ch) => { const f = ch.flashcards.find((x) => x.termId === undefined)!; delete f.src }), 'R10')).toBe(true)
  })
  it('R10 : une définition doit citer le niveau "cours"', () => {
    const r = run(() => {}, { sources: (s) => { for (const e of s.sources) if (e.file === SRC_FILE) e.tier = 'lecture' } })
    expect(find(r, 'R10').message).toMatch(/cours/)
  })
  it('R10 : narrative et analogy sont dispensés', () => {
    const r = run((ch) => {
      ch.story.push({ type: 'paragraph', text: L('Histoire pure.'), narrative: true })
      ch.story.push({ type: 'callout', variant: 'analogy', text: L('Comme un pont.') })
    })
    expect(has(r, 'R10')).toBe(false)
  })
  it('R11 : notion inconnue', () => {
    expect(has(run((ch) => { ch.quiz[0]!.notions = ['n-inconnue'] }), 'R11')).toBe(true)
    expect(has(run((ch) => { ch.notions.push('n-inconnue') }), 'R11')).toBe(true)
  })
})

function baseExam(): Exam {
  const mk = (n: number, answer: boolean) => ({
    id: `rec1-exam-test-q${n}`,
    type: 'true_false' as const,
    points: 1,
    statement: L(`Énoncé ${n}`),
    answer,
    justification: L('Parce que.'),
    level: 'understand' as const,
    src: [quote0],
  })
  return {
    id: 'rec1-exam-test',
    courseId: 'rec1',
    title: L('Test'),
    kind: 'past',
    durationMinutes: 60,
    correctionStatus: 'proposed',
    instructions: L('Répondez.'),
    sections: [{ title: L('S1'), points: 4, instructions: L('V/F'), questions: [mk(1, true), mk(2, false), mk(3, true), mk(4, false)] }],
  }
}

describe('examens', () => {
  it('un examen valide passe', () => {
    const r = run(() => {}, { exams: [baseExam()] })
    expect(errors(r)).toEqual([])
    expect(r.stats.exams).toBe(1)
  })
  it('R2/R5/R9/R10 sur les questions d’examen', () => {
    const ex = baseExam()
    const qs = ex.sections[0]!.questions
    qs[1]!.id = 'autre-q2'
    qs[2]!.src = []
    qs[3]!.src = [{ ...quote0, quote: 'texte qui ne figure absolument pas dans la source' }]
    ex.sections[0]!.questions.push({ id: 'rec1-exam-test-q5', type: 'mcq', points: 1, question: L('Q ?'), options: [L('a'), L('b'), L('c')], correct: [5], explanation: L('x'), level: 'apply', src: [quote0] })
    const r = run(() => {}, { exams: [ex] })
    for (const c of ['R2', 'R10', 'R9', 'R5']) expect(has(r, c)).toBe(true)
  })
  it('W-tf-ratio sur un partiel blanc', () => {
    const ex = baseExam()
    ex.kind = 'mock'
    for (const q of ex.sections[0]!.questions) if (q.type === 'true_false') q.answer = true
    expect(has(run(() => {}, { exams: [ex] }), 'W-tf-ratio')).toBe(true)
  })
})

describe('avertissements (règle 12)', () => {
  it('l’exemple ne déclenche aucune erreur', () => {
    expect(errors(run())).toEqual([])
  })
  it('W-level-remember et W-level-apply-analyze', () => {
    const r = run((ch) => { for (const q of ch.quiz) q.level = 'remember' })
    expect(has(r, 'W-level-remember')).toBe(true)
    expect(has(r, 'W-level-apply-analyze')).toBe(true)
  })
  it('W-level-exercise-analyze', () => {
    expect(has(run((ch) => { for (const e of ch.exercises) e.level = 'apply' }), 'W-level-exercise-analyze')).toBe(true)
  })
  it('W-tf-ratio', () => {
    expect(has(run((ch) => { for (const q of ch.quiz) if (q.type === 'true_false') q.answer = true }), 'W-tf-ratio')).toBe(true)
  })
  it('W-absolute-words : mots absolus seulement dans les FAUX', () => {
    const r = run((ch) => {
      for (const q of ch.quiz) if (q.type === 'true_false') { q.statement.fr = q.statement.fr.replace(/jamais|toujours/gi, 'souvent'); q.statement.en = q.statement.en.replace(/never|always/gi, 'often') }
      const f = ch.quiz.find((q) => q.type === 'true_false' && !q.answer)
      if (f?.type === 'true_false') f.statement.fr += ' Cela garantit toujours le résultat.'
    })
    expect(has(r, 'W-absolute-words')).toBe(true)
  })
  it('W-mcq-longest', () => {
    const r = run((ch) => {
      for (const q of ch.quiz) if (q.type === 'mcq') { q.options = [L('court'), L('court aussi'), L('la bonne réponse, nettement plus longue que les autres')]; q.correct = [2] }
    })
    expect(has(r, 'W-mcq-longest')).toBe(true)
  })
  it('W-mcq-position', () => {
    const r = run((ch) => {
      for (const q of ch.quiz) if (q.type === 'mcq') { q.options = [L('aaaa'), L('bbbb'), L('cccc')]; q.correct = [1] }
    })
    expect(has(r, 'W-mcq-position')).toBe(true)
  })
  it('W-answer-in-question', () => {
    const r = run((ch) => {
      const q = ch.quiz.find((x) => x.type === 'mcq')
      if (q?.type === 'mcq') { q.question = L('Quelle est la validité interne de cette étude ?'); q.options[q.correct[0]!] = L('validité interne') }
    })
    expect(has(r, 'W-answer-in-question')).toBe(true)
  })
  it('W-paragraph-long, W-episode-long', () => {
    const r = run((ch) => {
      ch.story.push({ type: 'heading', text: L('Épisode trop long') }, { type: 'paragraph', text: L(lorem(460)), src: [quote0] })
    })
    expect(has(r, 'W-paragraph-long')).toBe(true)
    expect(has(r, 'W-episode-long')).toBe(true)
  })
  it('W-chapter-long', () => {
    expect(has(run((ch) => { ch.estimatedMinutes = 16 }), 'W-chapter-long')).toBe(true)
  })
  it('W-list-long', () => {
    const r = run((ch) => { ch.story.push({ type: 'list', items: Array.from({ length: 8 }, (_, i) => L(`item ${i}`)), src: [quote0] }) })
    expect(r.issues.filter((i) => i.code === 'W-list-long').length).toBeGreaterThanOrEqual(1)
  })
  it('W-quote-length', () => {
    expect(has(run((ch) => { ch.keyPoints[0]!.src[0] = { ...quote0, quote: 'conclusions right' } }), 'W-quote-length')).toBe(true)
  })
  it('W-source-non-listee', () => {
    const r = run(() => {}, { sources: (s) => { s.sources = s.sources.filter((e) => e.file !== SRC_FILE && e.text !== SRC_FILE) } })
    expect(has(r, 'W-source-non-listee')).toBe(true)
  })
  it('W-coverage : notion ★★★ sans quiz ni flashcard', () => {
    const r = run(() => {}, {
      notions: (n) => { n.notions.push({ id: 'n-orpheline', label: L('Orpheline'), importance: 3, why: 'test', chapter: '05', src: [quote0] }) },
    })
    expect(r.issues.some((i) => i.code === 'W-coverage' && i.path === 'n-orpheline')).toBe(true)
    expect(r.stats.coverage3.total).toBe(baseNotions.notions.filter((n) => n.importance === 3).length + 1)
  })
})
