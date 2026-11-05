/**
 * Validation du contenu (règles 1 à 12 de docs/03-modele-contenu.md).
 * Pure : travaille sur un arbre déjà lu (`ContentTree`) et une fonction `readText` pour les sources.
 */
import {
  ChapterSchema,
  CourseSchema,
  ExamSchema,
  NotionsSchema,
  SourcesSchema,
  type Chapter,
  type Exam,
  type ExamQuestion,
  type Notions,
  type QuizItem,
  type Sources,
} from '../../src/content/schema.ts'
import { findAllTermRefs, parseCloze } from '../../src/content/richtext.ts'
import { normalize, quoteWordCount, verifyQuote } from '../../tools/sources-mcp/lib/quote.ts'

// ------------------------------------------------------------------ types
export type Severity = 'error' | 'warning'
export interface Issue {
  severity: Severity
  /** R1…R11 pour les erreurs ; `W-…` pour les avertissements (règle 12). */
  code: string
  file: string
  path: string
  message: string
}
export interface RawFile {
  /** chemin affiché, relatif à la racine du repo (ex. content/rec1/course.json) */
  file: string
  data: unknown
}
export interface CourseInput {
  /** nom du dossier : content/<dir>/ */
  dir: string
  course?: RawFile
  sources?: RawFile
  notions?: RawFile
  chapters: RawFile[]
  exams: RawFile[]
}
export interface ContentTree {
  courses: CourseInput[]
  /** erreurs de lecture / JSON invalide déjà détectées */
  loadIssues: Issue[]
}
export interface CoverageStats {
  covered: number
  total: number
}
export interface Report {
  issues: Issue[]
  stats: {
    courses: number
    chapters: number
    exams: number
    citations: number
    coverage3: CoverageStats
    coverage2: CoverageStats
  }
}
export type ReadText = (file: string) => string | null

// ------------------------------------------------------------------ utilitaires
type Q = QuizItem | Exclude<ExamQuestion, { type: 'open' }>
type SrcLike = { file: string; loc: string; quote: string }

function fmtPath(path: readonly PropertyKey[]): string {
  let out = ''
  for (const p of path) out += typeof p === 'number' ? `[${p}]` : out ? `.${String(p)}` : String(p)
  return out
}

function isSourceRef(o: unknown): o is SrcLike {
  if (typeof o !== 'object' || o === null) return false
  const r = o as Record<string, unknown>
  return typeof r.file === 'string' && typeof r.loc === 'string' && typeof r.quote === 'string'
}

function walk(value: unknown, path: string, visit: (v: unknown, path: string, key: string | undefined) => boolean | void, key?: string): void {
  if (visit(value, path, key) === false) return
  if (Array.isArray(value)) value.forEach((v, i) => walk(v, `${path}[${i}]`, visit))
  else if (typeof value === 'object' && value !== null) {
    for (const [k, v] of Object.entries(value)) walk(v, path ? `${path}.${k}` : k, visit, k)
  }
}

const words = (s: string): number => s.split(/\s+/).filter(Boolean).length

// ------------------------------------------------------------------ contexte
class Ctx {
  issues: Issue[] = []
  citations = 0
  ids = new Map<string, string>() // id → "file › path"
  readText: ReadText
  constructor(readText: ReadText) {
    this.readText = readText
  }
  add(severity: Severity, code: string, file: string, path: string, message: string): void {
    this.issues.push({ severity, code, file, path, message })
  }
  error(code: string, file: string, path: string, message: string): void {
    this.add('error', code, file, path, message)
  }
  warn(code: string, file: string, path: string, message: string): void {
    this.add('warning', code, file, path, message)
  }
}

interface CourseCtx {
  dir: string
  tiers: Map<string, string> // chemin de fichier → tier
  notionIds: Set<string> | null
  glossaryIds: Set<string> // tous chapitres de la matière
}

// ------------------------------------------------------------------ point d'entrée
export function validateTree(tree: ContentTree, readText: ReadText): Report {
  const ctx = new Ctx(readText)
  ctx.issues.push(...tree.loadIssues)
  const cov3: CoverageStats = { covered: 0, total: 0 }
  const cov2: CoverageStats = { covered: 0, total: 0 }
  let chapterCount = 0
  let examCount = 0

  for (const ci of tree.courses) {
    const dirFile = `content/${ci.dir}`
    // --- course.json
    if (ci.course) {
      const r = CourseSchema.safeParse(ci.course.data)
      if (!r.success) schemaIssues(ctx, ci.course.file, r.error.issues)
      else if (r.data.id !== ci.dir) ctx.error('R7', ci.course.file, 'id', `id "${r.data.id}" ≠ nom du dossier "${ci.dir}"`)
    } else ctx.error('R1', `${dirFile}/course.json`, '', 'fichier course.json manquant')

    // --- sources.json
    const tiers = new Map<string, string>()
    let sources: Sources | null = null
    if (ci.sources) {
      const r = SourcesSchema.safeParse(ci.sources.data)
      if (!r.success) schemaIssues(ctx, ci.sources.file, r.error.issues)
      else {
        sources = r.data
        if (sources.courseId !== ci.dir) ctx.error('R7', ci.sources.file, 'courseId', `courseId "${sources.courseId}" ≠ dossier "${ci.dir}"`)
        for (const s of sources.sources) {
          tiers.set(s.file, s.tier)
          if (s.text && !tiers.has(s.text)) tiers.set(s.text, s.tier)
        }
      }
    } else ctx.error('R1', `${dirFile}/sources.json`, '', 'fichier sources.json manquant')

    // --- notions.json
    let notions: Notions | null = null
    if (ci.notions) {
      const r = NotionsSchema.safeParse(ci.notions.data)
      if (!r.success) schemaIssues(ctx, ci.notions.file, r.error.issues)
      else {
        notions = r.data
        if (notions.courseId !== ci.dir) ctx.error('R7', ci.notions.file, 'courseId', `courseId "${notions.courseId}" ≠ dossier "${ci.dir}"`)
        const seen = new Set<string>()
        notions.notions.forEach((n, i) => {
          if (seen.has(n.id)) ctx.error('R2', ci.notions!.file, `notions[${i}].id`, `notion "${n.id}" en double`)
          seen.add(n.id)
        })
        checkSourceRefs(ctx, ci.notions.file, notions.notions, 'notions', tiers, sources !== null)
      }
    }

    const cc: CourseCtx = {
      dir: ci.dir,
      tiers: sources ? tiers : new Map(),
      notionIds: notions ? new Set(notions.notions.map((n) => n.id)) : null,
      glossaryIds: new Set(),
    }

    // --- chapitres : schéma d'abord (pour connaître tous les glossaires)
    const chapters: { file: string; data: Chapter }[] = []
    for (const raw of ci.chapters) {
      const r = ChapterSchema.safeParse(raw.data)
      if (!r.success) schemaIssues(ctx, raw.file, r.error.issues)
      else {
        chapters.push({ file: raw.file, data: r.data })
        for (const t of r.data.glossary) cc.glossaryIds.add(t.id)
      }
    }
    const exams: { file: string; data: Exam }[] = []
    for (const raw of ci.exams) {
      const r = ExamSchema.safeParse(raw.data)
      if (!r.success) schemaIssues(ctx, raw.file, r.error.issues)
      else exams.push({ file: raw.file, data: r.data })
    }

    for (const ch of chapters) checkChapter(ctx, cc, ch.file, ch.data)
    for (const ex of exams) checkExam(ctx, cc, ex.file, ex.data)
    chapterCount += ci.chapters.length
    examCount += ci.exams.length

    // --- couverture des notions (06 §3)
    if (notions) {
      const cov = checkCoverage(ctx, ci, notions, chapters)
      cov3.covered += cov.c3.covered
      cov3.total += cov.c3.total
      cov2.covered += cov.c2.covered
      cov2.total += cov.c2.total
    }
  }

  return {
    issues: ctx.issues,
    stats: {
      courses: tree.courses.length,
      chapters: chapterCount,
      exams: examCount,
      citations: ctx.citations,
      coverage3: cov3,
      coverage2: cov2,
    },
  }
}

// ------------------------------------------------------------------ R1 / R7 : schéma
function schemaIssues(ctx: Ctx, file: string, issues: readonly { code: string; path: PropertyKey[]; message: string }[]): void {
  for (const i of issues) {
    const last = i.path[i.path.length - 1]
    const empty = i.code === 'too_small' && (last === 'fr' || last === 'en')
    ctx.error(empty ? 'R7' : 'R1', file, fmtPath(i.path), empty ? 'champ vide' : i.message)
  }
}

// ------------------------------------------------------------------ R8 / R9 : sources et citations
function checkSourceRefs(ctx: Ctx, file: string, root: unknown, basePath: string, tiers: Map<string, string>, hasManifest: boolean): void {
  walk(root, basePath, (v, path) => {
    if (!isSourceRef(v)) return
    checkOneRef(ctx, file, path, v, tiers, hasManifest)
    return false
  })
}

function checkFileUsable(ctx: Ctx, file: string, path: string, target: string, tiers: Map<string, string>, hasManifest: boolean): string | null {
  const text = ctx.readText(target)
  if (text === null) {
    ctx.error('R8', file, path, `fichier introuvable : ${target}`)
    return null
  }
  const tier = tiers.get(target)
  if (tier === 'ignore') {
    ctx.error('R8', file, path, `fichier classé "ignore" dans sources.json : ${target}`)
    return null
  }
  if (tier === undefined && hasManifest) ctx.warn('W-source-non-listee', file, path, `fichier absent de sources.json : ${target}`)
  return text
}

function checkOneRef(ctx: Ctx, file: string, path: string, ref: SrcLike, tiers: Map<string, string>, hasManifest: boolean): void {
  const text = checkFileUsable(ctx, file, `${path}.file`, ref.file, tiers, hasManifest)
  const wc = quoteWordCount(ref.quote)
  if (wc < 4 || wc > 40) ctx.warn('W-quote-length', file, `${path}.quote`, `citation de ${wc} mots (attendu : 4 à 40)`)
  if (text === null) return
  const { ratio, found } = verifyQuote(text, ref.quote)
  if (found) ctx.citations++
  else ctx.error('R9', file, path, `citation introuvable (ratio ${ratio.toFixed(2)}) dans ${ref.file}`)
}

// ------------------------------------------------------------------ chapitre
function registerId(ctx: Ctx, file: string, path: string, id: string, prefix: string): void {
  const prev = ctx.ids.get(id)
  if (prev !== undefined) ctx.error('R2', file, path, `id "${id}" déjà utilisé (${prev})`)
  else ctx.ids.set(id, `${file} › ${path}`)
  if (!id.startsWith(`${prefix}-`)) ctx.error('R2', file, path, `id "${id}" doit commencer par "${prefix}-"`)
}

function checkChapter(ctx: Ctx, cc: CourseCtx, file: string, ch: Chapter): void {
  const m = /^([a-z0-9]+)-(\d{2})-[a-z0-9-]+$/.exec(ch.id)
  const base = file.replace(/^.*\//, '').replace(/\.json$/, '')
  if (ch.courseId !== cc.dir) ctx.error('R7', file, 'courseId', `courseId "${ch.courseId}" ≠ dossier "${cc.dir}"`)
  if (!m || ch.id !== `${cc.dir}-${base}`) ctx.error('R2', file, 'id', `id "${ch.id}" attendu : "${cc.dir}-${base}" (<courseId>-<nn>-<slug>)`)
  const short = m ? `${m[1]}-${m[2]}` : ch.id
  const tiers = cc.tiers
  const hasManifest = tiers.size > 0

  registerId(ctx, file, 'id', ch.id, cc.dir)

  // --- R8 : chapter.sources
  ch.sources.forEach((s, i) => checkFileUsable(ctx, file, `sources[${i}]`, s, tiers, hasManifest))

  // --- R2 : ids
  const quizIds = new Set<string>()
  ch.quiz.forEach((q, i) => {
    registerId(ctx, file, `quiz[${i}].id`, q.id, short)
    quizIds.add(q.id)
  })
  ch.flashcards.forEach((f, i) => registerId(ctx, file, `flashcards[${i}].id`, f.id, short))
  ch.exercises.forEach((e, i) => registerId(ctx, file, `exercises[${i}].id`, e.id, short))
  ch.writing.forEach((w, i) => registerId(ctx, file, `writing[${i}].id`, w.id, short))
  const termIds = new Set<string>()
  ch.glossary.forEach((t, i) => {
    if (termIds.has(t.id)) ctx.error('R2', file, `glossary[${i}].id`, `terme "${t.id}" en double dans le glossaire`)
    termIds.add(t.id)
  })

  // --- R3 : [[termId]] et termId des flashcards
  walk(ch, '', (v, path, key) => {
    if (key === 'src' || key === 'mermaid') return false
    if (typeof v === 'string') {
      for (const id of findAllTermRefs(v)) {
        if (!cc.glossaryIds.has(id)) ctx.error('R3', file, path, `terme [[${id}]] absent des glossaires de la matière`)
      }
    }
  })
  ch.flashcards.forEach((f, i) => {
    if (f.termId !== undefined && !termIds.has(f.termId)) ctx.error('R3', file, `flashcards[${i}].termId`, `terme "${f.termId}" absent du glossaire du chapitre`)
  })

  // --- R4 : checkpoints
  ch.story.forEach((b, i) => {
    if (b.type === 'checkpoint' && !quizIds.has(b.quizId)) ctx.error('R4', file, `story[${i}].quizId`, `quiz "${b.quizId}" introuvable dans ce chapitre`)
  })

  // --- R5 / R6
  ch.quiz.forEach((q, i) => checkQuizItem(ctx, file, `quiz[${i}]`, q))
  ch.writing.forEach((w, i) => {
    if (w.kind === 'cloze' && !parseCloze(w.text).some((s) => s.type === 'gap' && s.answers.length > 0)) {
      ctx.error('R6', file, `writing[${i}].text`, 'le texte à trous ne contient aucun {{…}}')
    }
    if (w.kind === 'spot_error' && !w.sentence.includes(w.error)) {
      ctx.error('R6', file, `writing[${i}].error`, `"${w.error}" n'est pas une sous-chaîne de sentence`)
    }
  })

  // --- R8 / R9 : toutes les citations
  for (const key of ['story', 'glossary', 'keyPoints', 'flashcards', 'quiz', 'exercises', 'writing'] as const) {
    checkSourceRefs(ctx, file, ch[key], key, tiers, hasManifest)
  }

  // --- R10 : sourçage obligatoire
  const need = (path: string, src: readonly unknown[] | undefined, what: string): void => {
    if (!src || src.length === 0) ctx.error('R10', file, path, `${what} : src obligatoire`)
  }
  ch.story.forEach((b, i) => {
    const p = `story[${i}]`
    if (b.type === 'paragraph' && !b.narrative) need(`${p}.src`, b.src, 'paragraphe non narratif')
    if (b.type === 'list') need(`${p}.src`, b.src, 'liste')
    if (b.type === 'table') need(`${p}.src`, b.src, 'tableau')
    if (b.type === 'callout' && b.variant !== 'analogy') need(`${p}.src`, b.src, `callout ${b.variant}`)
  })
  ch.keyPoints.forEach((k, i) => need(`keyPoints[${i}].src`, k.src, 'point clé'))
  ch.quiz.forEach((q, i) => need(`quiz[${i}].src`, q.src, 'question de quiz'))
  ch.exercises.forEach((e, i) => need(`exercises[${i}].src`, e.src, 'exercice'))
  ch.flashcards.forEach((f, i) => {
    if (f.termId === undefined) need(`flashcards[${i}].src`, f.src, 'flashcard sans termId')
  })
  ch.glossary.forEach((t, i) => {
    need(`glossary[${i}].src`, t.src, 'terme')
    if (t.src.length > 0 && tiers.size > 0 && !t.src.some((s) => tiers.get(s.file) === 'cours')) {
      ctx.error('R10', file, `glossary[${i}].src`, `terme "${t.id}" : au moins une source de niveau "cours" est obligatoire pour la définition`)
    }
  })

  // --- R11 : notions
  if (cc.notionIds) {
    const known = cc.notionIds
    const check = (path: string, ids: readonly string[] | undefined): void => {
      ids?.forEach((id, i) => {
        if (!known.has(id)) ctx.error('R11', file, `${path}[${i}]`, `notion "${id}" absente de notions.json`)
      })
    }
    check('notions', ch.notions)
    ch.story.forEach((b, i) => {
      if (b.type === 'paragraph' || b.type === 'list' || b.type === 'table') check(`story[${i}].notions`, b.notions)
    })
    ch.keyPoints.forEach((k, i) => check(`keyPoints[${i}].notions`, k.notions))
    ch.flashcards.forEach((f, i) => check(`flashcards[${i}].notions`, f.notions))
    ch.quiz.forEach((q, i) => check(`quiz[${i}].notions`, q.notions))
    ch.exercises.forEach((e, i) => check(`exercises[${i}].notions`, e.notions))
    ch.glossary.forEach((t, i) => {
      if (t.notion !== undefined) check(`glossary[${i}].notion`, [t.notion])
    })
  }

  // --- R12 : avertissements
  warnLevels(ctx, file, ch)
  warnEvident(ctx, file, ch.quiz.map((q, i) => ({ path: `quiz[${i}]`, q })))
  warnLengths(ctx, file, ch)
}

function checkQuizItem(ctx: Ctx, file: string, path: string, q: Q | ExamQuestion): void {
  if (q.type !== 'mcq') return
  const bad = q.correct.filter((c) => c >= q.options.length)
  if (bad.length > 0) ctx.error('R5', file, `${path}.correct`, `indice(s) hors limites : ${bad.join(', ')} (options : 0–${q.options.length - 1})`)
  if (new Set(q.correct).size !== q.correct.length) ctx.error('R5', file, `${path}.correct`, 'indices en double')
}

// ------------------------------------------------------------------ examen
function checkExam(ctx: Ctx, cc: CourseCtx, file: string, ex: Exam): void {
  if (ex.courseId !== cc.dir) ctx.error('R7', file, 'courseId', `courseId "${ex.courseId}" ≠ dossier "${cc.dir}"`)
  const hasManifest = cc.tiers.size > 0
  registerId(ctx, file, 'id', ex.id, cc.dir)
  if (ex.source !== undefined) checkFileUsable(ctx, file, 'source', ex.source, cc.tiers, hasManifest)
  const evident: { path: string; q: Q }[] = []
  ex.sections.forEach((s, si) => {
    s.questions.forEach((q, qi) => {
      const p = `sections[${si}].questions[${qi}]`
      registerId(ctx, file, `${p}.id`, q.id, cc.dir)
      checkQuizItem(ctx, file, p, q)
      if (q.src.length === 0) ctx.error('R10', file, `${p}.src`, 'question d\'examen : src obligatoire')
      if (q.type !== 'open') evident.push({ path: p, q })
    })
  })
  checkSourceRefs(ctx, file, ex.sections, 'sections', cc.tiers, hasManifest)
  walk(ex, '', (v, path, key) => {
    if (key === 'src' || key === 'mermaid' || key === 'material') return false
    if (typeof v === 'string') {
      for (const id of findAllTermRefs(v)) {
        if (!cc.glossaryIds.has(id)) ctx.error('R3', file, path, `terme [[${id}]] absent des glossaires de la matière`)
      }
    }
  })
  if (ex.kind === 'mock') warnEvident(ctx, file, evident)
}

// ------------------------------------------------------------------ R12 : niveaux
function warnLevels(ctx: Ctx, file: string, ch: Chapter): void {
  const n = ch.quiz.length
  const count = (...lv: string[]): number => ch.quiz.filter((q) => lv.includes(q.level)).length
  const remember = count('remember')
  const high = count('apply', 'analyze')
  if (remember / n > 0.3) ctx.warn('W-level-remember', file, 'quiz', `${remember}/${n} questions "remember" (${Math.round((remember / n) * 100)} % > 30 %)`)
  if (high / n < 0.35) ctx.warn('W-level-apply-analyze', file, 'quiz', `apply + analyze = ${high}/${n} (${Math.round((high / n) * 100)} % < 35 %)`)
  if (ch.flashcards.length === 0 || ch.exercises.length === 0 || ch.writing.length === 0) ctx.warn('W-essentiel', file, 'chapter', 'chapitre « essentiel » : flashcards, exercices ou atelier d\'écriture vides (à compléter avec /ajouter-cours)')
  else if (!ch.exercises.some((e) => e.level === 'analyze')) ctx.warn('W-level-exercise-analyze', file, 'exercises', 'aucun exercice de niveau "analyze"')
}

// ------------------------------------------------------------------ R12 : questions évidentes
const ABSOLUTE_WORDS = new Set([
  'toujours', 'jamais', 'parfaitement', 'garantir', 'garantit', 'garantie', 'uniquement', 'systematiquement',
  'always', 'never', 'perfectly', 'guarantee', 'guarantees', 'only', 'systematically',
])

function hasAbsolute(l: { fr: string; en: string }): boolean {
  return [l.fr, l.en].some((t) => normalize(t).split(' ').some((w) => ABSOLUTE_WORDS.has(w)))
}

function warnEvident(ctx: Ctx, file: string, items: { path: string; q: Q }[]): void {
  const tf = items.flatMap((i) => (i.q.type === 'true_false' ? [{ path: i.path, q: i.q }] : []))
  const mcq = items.flatMap((i) => (i.q.type === 'mcq' ? [{ path: i.path, q: i.q }] : []))

  if (tf.length >= 4) {
    const falseRatio = tf.filter((t) => !t.q.answer).length / tf.length
    if (falseRatio < 0.4 || falseRatio > 0.65) {
      ctx.warn('W-tf-ratio', file, 'quiz', `${Math.round(falseRatio * 100)} % de FAUX parmi les vrai/faux (attendu : 40 à 65 %)`)
    }
  }
  const abs = tf.filter((t) => hasAbsolute(t.q.statement))
  if (abs.length > 0 && abs.every((t) => !t.q.answer)) {
    ctx.warn('W-absolute-words', file, abs[0]!.path, `mots absolus présents uniquement dans des énoncés FAUX (${abs.length} énoncé(s)) : indice trop évident`)
  }

  if (mcq.length >= 3) {
    const longest = mcq.filter((m) => {
      const lens = m.q.options.map((o) => o.fr.length)
      const max = Math.max(...lens)
      const idx = lens.indexOf(max)
      return lens.filter((l) => l === max).length === 1 && m.q.correct.length === 1 && m.q.correct[0] === idx
    })
    if (longest.length / mcq.length >= 0.75) {
      ctx.warn('W-mcq-longest', file, 'quiz', `la bonne réponse est la plus longue dans ${longest.length}/${mcq.length} QCM`)
    }
    const single = mcq.filter((m) => m.q.correct.length === 1).map((m) => m.q.correct[0])
    if (single.length >= 3 && new Set(single).size === 1) {
      ctx.warn('W-mcq-position', file, 'quiz', `la bonne réponse est toujours à la position ${(single[0] ?? 0) + 1}`)
    }
  }
  for (const m of mcq) {
    for (const idx of m.q.correct) {
      const opt = m.q.options[idx]
      if (!opt) continue
      for (const lang of ['fr', 'en'] as const) {
        const o = normalize(opt[lang])
        if ((words(o) >= 2 || o.length >= 8) && normalize(m.q.question[lang]).includes(o)) {
          ctx.warn('W-answer-in-question', file, `${m.path}.options[${idx}]`, `la bonne réponse (${lang}) figure mot pour mot dans l'énoncé`)
          break
        }
      }
    }
  }
}

// ------------------------------------------------------------------ R12 : longueurs
function warnLengths(ctx: Ctx, file: string, ch: Chapter): void {
  if (ch.estimatedMinutes > 15) ctx.warn('W-chapter-long', file, 'estimatedMinutes', `${ch.estimatedMinutes} min de lecture (> 15) : découper le chapitre`)
  let episodeWords = 0
  let hasCheckpoint = false
  let episodeStart = 0
  const closeEpisode = (): void => {
    if (episodeWords > 450 && !hasCheckpoint) ctx.warn('W-episode-long', file, `story[${episodeStart}]`, `épisode de ${episodeWords} mots (> 450) sans checkpoint`)
  }
  ch.story.forEach((b, i) => {
    if (b.type === 'heading') {
      closeEpisode()
      episodeWords = 0
      hasCheckpoint = false
      episodeStart = i
    }
    if (b.type === 'checkpoint') hasCheckpoint = true
    if (b.type === 'paragraph') {
      const w = words(b.text.fr)
      episodeWords += w
      if (w > 90) ctx.warn('W-paragraph-long', file, `story[${i}]`, `paragraphe de ${w} mots (> 90)`)
    }
    if (b.type === 'list') {
      episodeWords += b.items.reduce((s, it) => s + words(it.fr), 0)
      if (b.items.length > 7) ctx.warn('W-list-long', file, `story[${i}]`, `liste de ${b.items.length} items (> 7)`)
    }
    if (b.type === 'callout' || b.type === 'quote') episodeWords += words(b.text.fr)
  })
  closeEpisode()
}

// ------------------------------------------------------------------ R12 : couverture des notions
function checkCoverage(
  ctx: Ctx,
  ci: CourseInput,
  notions: Notions,
  chapters: { file: string; data: Chapter }[],
): { c3: CoverageStats; c2: CoverageStats } {
  const c3: CoverageStats = { covered: 0, total: 0 }
  const c2: CoverageStats = { covered: 0, total: 0 }
  const file = ci.notions?.file ?? `content/${ci.dir}/notions.json`
  for (const n of notions.notions) {
    if (n.importance < 2) continue
    const entry = chapters.find((c) => c.data.id.startsWith(`${ci.dir}-${n.chapter}-`))
    if (!entry) continue // chapitre pas encore écrit : non comptabilisé
    const ch = entry.data
    const inStory = ch.story.some((b) => (b.type === 'paragraph' || b.type === 'list' || b.type === 'table') && b.notions?.includes(n.id))
    const inQuiz = ch.quiz.some((q) => q.notions?.includes(n.id))
    const termNotions = new Map(ch.glossary.map((t) => [t.id, t.notion]))
    const inCards = ch.flashcards.some((f) => f.notions?.includes(n.id) || (f.termId !== undefined && termNotions.get(f.termId) === n.id))
    const lacks: string[] = []
    if (!inStory) lacks.push('bloc d\'histoire')
    if (n.importance === 3) {
      if (!inQuiz) lacks.push('quiz')
      if (!inCards) lacks.push('flashcard')
    } else if (!inQuiz && !inCards) lacks.push('quiz ou flashcard')
    const stats = n.importance === 3 ? c3 : c2
    stats.total++
    if (lacks.length === 0) stats.covered++
    else {
      ctx.warn('W-coverage', file, n.id, `notion ${'★'.repeat(n.importance)} non couverte dans ${entry.file} : manque ${lacks.join(', ')}`)
    }
  }
  return { c3, c2 }
}
