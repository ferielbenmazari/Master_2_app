/**
 * Accès au contenu (seul point d'entrée de l'app vers content/).
 * Les extraits sources (`src`) sont dans les JSON : l'app ne lit jamais ressources/.
 * Cours : chargés d'emblée (petits). Chapitres, examens, notions : chargés à la demande puis mis en cache.
 */
import {
  ChapterSchema,
  CourseSchema,
  ExamSchema,
  NotionsSchema,
  type Chapter,
  type Course,
  type Exam,
  type Notions,
} from './schema'

type Loader = () => Promise<unknown>

const courseModules = import.meta.glob('/content/*/course.json', { eager: true, import: 'default' })
const chapterModules = import.meta.glob('/content/*/chapters/*.json', { import: 'default' }) as Record<string, Loader>
const examModules = import.meta.glob('/content/*/exams/*.json', { import: 'default' }) as Record<string, Loader>
// Manifestes de sources : embarqués au build (petits), uniquement pour afficher un nom lisible de fichier.
const sourceModules = import.meta.glob('/content/*/sources.json', { eager: true, import: 'default' }) as Record<string, unknown>

const notionModules = import.meta.glob('/content/*/notions.json', { import: 'default' }) as Record<string, Loader>

/** Entrée d'index : connue sans charger le fichier (déduite du chemin). */
export interface ChapterRef {
  /** "rec1-05-qualite-validite-ethique" */
  id: string
  courseId: string
  /** rang d'affichage : position dans `course.chapterOrder`, sinon numéro du nom de fichier (05 → 5) */
  order: number
  path: string
}
export interface ExamRef {
  /** nom de fichier sans extension */
  slug: string
  courseId: string
  path: string
}

const courses: Course[] = Object.values(courseModules)
  .map((m) => CourseSchema.parse(m))
  .sort((a, b) => a.id.localeCompare(b.id))

function parsePath(path: string): { courseId: string; name: string } | null {
  const m = /^\/content\/([^/]+)\/(?:chapters|exams)\/([^/]+)\.json$/.exec(path)
  return m ? { courseId: m[1] as string, name: m[2] as string } : null
}

/**
 * Ordre d'affichage : `course.chapterOrder` (liste d'ids) s'il existe, sinon le numéro du nom de fichier.
 * Permet d'insérer ou de déplacer un chapitre sans changer son id (la progression enregistrée est conservée).
 */
export function orderChapterRefs(refs: ChapterRef[], courseList: readonly Course[]): ChapterRef[] {
  const position = new Map<string, number>()
  for (const c of courseList) c.chapterOrder?.forEach((id, i) => position.set(id, i + 1))
  return refs
    .map((r) => {
      const pos = position.get(r.id)
      return pos === undefined ? r : { ...r, order: pos }
    })
    .sort((a, b) => a.courseId.localeCompare(b.courseId) || a.order - b.order || a.id.localeCompare(b.id))
}

const chapterRefs: ChapterRef[] = orderChapterRefs(
  Object.keys(chapterModules).flatMap((path) => {
    const p = parsePath(path)
    const nn = p ? /^(\d{2})-/.exec(p.name) : null
    return p && nn ? [{ id: `${p.courseId}-${p.name}`, courseId: p.courseId, order: Number(nn[1]), path }] : []
  }),
  courses,
)

const examRefs: ExamRef[] = Object.keys(examModules)
  .flatMap((path) => {
    const p = parsePath(path)
    return p ? [{ slug: p.name, courseId: p.courseId, path }] : []
  })
  .sort((a, b) => a.courseId.localeCompare(b.courseId) || a.slug.localeCompare(b.slug))

function memo<T>(cache: Map<string, Promise<T>>, key: string, make: () => Promise<T>): Promise<T> {
  let p = cache.get(key)
  if (!p) {
    p = make()
    // un échec n'est pas mis en cache (réessai possible)
    p.catch(() => cache.delete(key))
    cache.set(key, p)
  }
  return p
}

const chapterCache = new Map<string, Promise<Chapter>>()
const examCache = new Map<string, Promise<Exam>>()
const notionsCache = new Map<string, Promise<Notions | null>>()

export function getCourses(): Course[] {
  return courses
}

export function getCourse(courseId: string): Course | undefined {
  return courses.find((c) => c.id === courseId)
}

/** Chapitres d'une matière, dans l'ordre d'affichage. */
export function getChapterIndex(courseId: string): ChapterRef[] {
  return chapterRefs.filter((c) => c.courseId === courseId)
}

export function loadChapter(chapterId: string): Promise<Chapter> {
  return memo(chapterCache, chapterId, async () => {
    const ref = chapterRefs.find((c) => c.id === chapterId)
    const load = ref ? chapterModules[ref.path] : undefined
    if (!ref || !load) throw new Error(`Chapitre introuvable : ${chapterId}`)
    return ChapterSchema.parse(await load())
  })
}

export function loadAllChapters(courseId: string): Promise<Chapter[]> {
  return Promise.all(getChapterIndex(courseId).map((c) => loadChapter(c.id)))
}

export function getExamIndex(courseId: string): ExamRef[] {
  return examRefs.filter((e) => e.courseId === courseId)
}

export function loadExam(courseId: string, slug: string): Promise<Exam> {
  return memo(examCache, `${courseId}/${slug}`, async () => {
    const ref = examRefs.find((e) => e.courseId === courseId && e.slug === slug)
    const load = ref ? examModules[ref.path] : undefined
    if (!ref || !load) throw new Error(`Examen introuvable : ${courseId}/${slug}`)
    return ExamSchema.parse(await load())
  })
}

/** Carte des notions d'une matière, ou `null` si la matière n'en a pas encore. */
export function getNotions(courseId: string): Promise<Notions | null> {
  return memo(notionsCache, courseId, async () => {
    const load = notionModules[`/content/${courseId}/notions.json`]
    return load ? NotionsSchema.parse(await load()) : null
  })
}

const sourceTitles = new Map<string, string>()
for (const [path, json] of Object.entries(sourceModules)) {
  const courseId = /^\/content\/([^/]+)\//.exec(path)?.[1]
  const list = (json as { sources?: { file?: unknown; title?: unknown }[] } | null)?.sources
  if (!courseId || !Array.isArray(list)) continue
  for (const s of list) {
    if (typeof s.file === 'string' && typeof s.title === 'string') sourceTitles.set(`${courseId}:${s.file}`, s.title)
  }
}

/** Nom lisible d'un fichier source (titre de sources.json), à défaut le nom de fichier. */
export function getSourceTitle(courseId: string, file: string): string {
  return sourceTitles.get(`${courseId}:${file}`) ?? file.split('/').pop() ?? file
}
