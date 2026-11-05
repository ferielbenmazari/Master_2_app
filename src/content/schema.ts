/** Schémas zod du contenu — traduction exacte de docs/03-modele-contenu.md (strict : aucun champ inconnu). */
import { z } from 'zod'

const nonEmpty = z.string().trim().min(1)
const stringArray = z.array(nonEmpty)

/** Texte bilingue. */
export const LSchema = z.strictObject({ fr: nonEmpty, en: nonEmpty })
export type L = z.infer<typeof LSchema>

export const CourseColorSchema = z.enum(['lime', 'coral', 'cyan', 'gold', 'orange'])
export const LevelSchema = z.enum(['remember', 'understand', 'apply', 'analyze'])
export type Level = z.infer<typeof LevelSchema>

export const SourceRefSchema = z.strictObject({ file: nonEmpty, loc: nonEmpty, quote: nonEmpty })
export type SourceRef = z.infer<typeof SourceRefSchema>

const srcList = z.array(SourceRefSchema)
const notionIds = stringArray.optional()

// ---------------------------------------------------------------- Course
export const CourseSchema = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+$/, 'minuscules et chiffres uniquement'),
  code: nonEmpty,
  title: LSchema,
  teacher: nonEmpty.optional(),
  color: CourseColorSchema,
  icon: nonEmpty,
  description: LSchema,
  examDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'format AAAA-MM-JJ').optional(),
})
export type Course = z.infer<typeof CourseSchema>

// ---------------------------------------------------------------- Story
export const StoryBlockSchema = z.discriminatedUnion('type', [
  z.strictObject({ type: z.literal('heading'), text: LSchema }),
  z.strictObject({
    type: z.literal('paragraph'),
    text: LSchema,
    src: srcList.optional(),
    narrative: z.boolean().optional(),
    notions: notionIds,
  }),
  z.strictObject({
    type: z.literal('list'),
    ordered: z.boolean().optional(),
    items: z.array(LSchema).min(1),
    src: srcList,
    notions: notionIds,
  }),
  z.strictObject({
    type: z.literal('callout'),
    variant: z.enum(['tip', 'warning', 'exam', 'analogy']),
    text: LSchema,
    src: srcList.optional(),
  }),
  z.strictObject({
    type: z.literal('table'),
    headers: z.array(LSchema).min(1),
    rows: z.array(z.array(LSchema)).min(1),
    src: srcList,
    notions: notionIds,
  }),
  z.strictObject({ type: z.literal('diagram'), mermaid: nonEmpty, caption: LSchema, src: srcList.optional() }),
  z.strictObject({ type: z.literal('quote'), text: LSchema, source: nonEmpty }),
  z.strictObject({ type: z.literal('checkpoint'), quizId: nonEmpty }),
])
export type StoryBlock = z.infer<typeof StoryBlockSchema>

export const KeyPointSchema = z.strictObject({ text: LSchema, src: srcList, notions: notionIds })
export type KeyPoint = z.infer<typeof KeyPointSchema>

export const TermSchema = z.strictObject({
  id: z.string().regex(/^term-[a-z0-9-]+$/, 'doit commencer par "term-"'),
  fr: nonEmpty,
  en: nonEmpty,
  definition: LSchema,
  example: LSchema.optional(),
  pitfall: LSchema.optional(),
  src: srcList,
  notion: nonEmpty.optional(),
})
export type Term = z.infer<typeof TermSchema>

export const FlashcardSchema = z.strictObject({
  id: nonEmpty,
  front: LSchema,
  back: LSchema,
  termId: nonEmpty.optional(),
  src: srcList.optional(),
  notions: notionIds,
})
export type Flashcard = z.infer<typeof FlashcardSchema>

const options = z.array(LSchema).min(3).max(5)
const correct = z.array(z.number().int().nonnegative()).min(1)

export const QuizItemSchema = z.discriminatedUnion('type', [
  z.strictObject({
    id: nonEmpty,
    type: z.literal('true_false'),
    statement: LSchema,
    answer: z.boolean(),
    justification: LSchema,
    level: LevelSchema,
    src: srcList,
    notions: notionIds,
  }),
  z.strictObject({
    id: nonEmpty,
    type: z.literal('mcq'),
    question: LSchema,
    options,
    correct,
    explanation: LSchema,
    level: LevelSchema,
    src: srcList,
    notions: notionIds,
  }),
])
export type QuizItem = z.infer<typeof QuizItemSchema>

export const ExerciseSchema = z.strictObject({
  id: nonEmpty,
  title: LSchema,
  difficulty: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  statement: LSchema,
  hints: z.array(LSchema).min(1).max(3),
  solution: LSchema,
  examStyle: z.boolean().optional(),
  level: LevelSchema,
  src: srcList,
  notions: notionIds,
})
export type Exercise = z.infer<typeof ExerciseSchema>

export const WritingItemSchema = z.discriminatedUnion('kind', [
  z.strictObject({
    id: nonEmpty,
    kind: z.literal('reorder'),
    prompt: LSchema,
    answer: nonEmpty,
    accepted: stringArray.optional(),
  }),
  z.strictObject({ id: nonEmpty, kind: z.literal('cloze'), prompt: LSchema, text: nonEmpty, translation: nonEmpty }),
  z.strictObject({
    id: nonEmpty,
    kind: z.literal('spot_error'),
    prompt: LSchema,
    sentence: nonEmpty,
    error: nonEmpty,
    corrected: nonEmpty,
    explanation: LSchema,
  }),
  z.strictObject({
    id: nonEmpty,
    kind: z.literal('free'),
    prompt: LSchema,
    modelAnswer: nonEmpty,
    keywords: stringArray,
    checklist: z.array(LSchema),
    usefulPhrases: stringArray.optional(),
  }),
])
export type WritingItem = z.infer<typeof WritingItemSchema>

// ---------------------------------------------------------------- Chapter
export const ChapterSchema = z
  .strictObject({
    id: nonEmpty,
    courseId: nonEmpty,
    order: z.number().int().positive(),
    title: LSchema,
    hook: LSchema,
    estimatedMinutes: z.number().positive(),
    sources: stringArray,
    status: z.enum(['draft', 'reviewed']),
    story: z.array(StoryBlockSchema).min(12).max(40),
    glossary: z.array(TermSchema).min(6).max(20),
    notions: stringArray,
    keyPoints: z.array(KeyPointSchema).min(5).max(10),
    flashcards: z.array(FlashcardSchema).max(25),
    quiz: z.array(QuizItemSchema).min(8).max(20),
    exercises: z.array(ExerciseSchema).max(6),
    writing: z.array(WritingItemSchema).max(12),
  })
  .superRefine((ch, ctx) => {
    const tf = ch.quiz.filter((q) => q.type === 'true_false').length
    if (tf * 2 < ch.quiz.length) {
      ctx.addIssue({ code: 'custom', path: ['quiz'], message: 'au moins 50 % des items du quiz doivent être true_false' })
    }
    for (const kind of ch.writing.length === 0 ? [] : (['reorder', 'cloze', 'spot_error', 'free'] as const)) {
      if (!ch.writing.some((w) => w.kind === kind)) {
        ctx.addIssue({ code: 'custom', path: ['writing'], message: `le kind "${kind}" doit apparaître au moins une fois` })
      }
    }
  })
export type Chapter = z.infer<typeof ChapterSchema>

// ---------------------------------------------------------------- Exam
const examQuestion = z.discriminatedUnion('type', [
  z.strictObject({
    id: nonEmpty,
    type: z.literal('true_false'),
    points: z.number().nonnegative(),
    statement: LSchema,
    answer: z.boolean(),
    justification: LSchema,
    level: LevelSchema,
    src: srcList,
  }),
  z.strictObject({
    id: nonEmpty,
    type: z.literal('mcq'),
    points: z.number().nonnegative(),
    question: LSchema,
    options,
    correct,
    explanation: LSchema,
    level: LevelSchema,
    src: srcList,
  }),
  z.strictObject({
    id: nonEmpty,
    type: z.literal('open'),
    points: z.number().nonnegative(),
    prompt: LSchema,
    material: nonEmpty.optional(),
    correction: LSchema,
    gradingGuide: z.array(LSchema).min(1),
    level: LevelSchema,
    src: srcList,
  }),
])
export type ExamQuestion = z.infer<typeof examQuestion>

export const ExamSectionSchema = z.strictObject({
  title: LSchema,
  points: z.number().nonnegative(),
  instructions: LSchema,
  questions: z.array(examQuestion).min(1),
})
export type ExamSection = z.infer<typeof ExamSectionSchema>

export const ExamSchema = z.strictObject({
  id: nonEmpty,
  courseId: nonEmpty,
  title: LSchema,
  kind: z.enum(['past', 'mock']),
  year: z.number().int().optional(),
  durationMinutes: z.number().positive(),
  source: nonEmpty.optional(),
  correctionStatus: z.enum(['proposed', 'official']),
  instructions: LSchema,
  sections: z.array(ExamSectionSchema).min(1),
})
export type Exam = z.infer<typeof ExamSchema>

// ---------------------------------------------------------------- sources.json / notions.json
export const SourceTierSchema = z.enum(['cours', 'annale', 'lecture', 'complement', 'ignore'])
export type SourceTier = z.infer<typeof SourceTierSchema>

/** Entrée de sources.json. Champs optionnels = ceux réellement présents dans les manifestes existants. */
export const SourceEntrySchema = z.strictObject({
  file: nonEmpty,
  tier: SourceTierSchema,
  title: nonEmpty.optional(),
  text: nonEmpty.optional(),
  chapters: stringArray.optional(),
  role: nonEmpty.optional(),
  transcriptionOf: nonEmpty.optional(),
  reason: nonEmpty.optional(),
  note: nonEmpty.optional(),
})
export type SourceEntry = z.infer<typeof SourceEntrySchema>

export const SourcesSchema = z.strictObject({
  courseId: nonEmpty,
  status: nonEmpty,
  sources: z.array(SourceEntrySchema),
})
export type Sources = z.infer<typeof SourcesSchema>

export const NotionSchema = z.strictObject({
  id: z.string().regex(/^n-[a-z0-9-]+$/, 'doit commencer par "n-"'),
  label: LSchema,
  importance: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  why: nonEmpty,
  chapter: z.string().regex(/^\d{2}$/, 'numéro de chapitre sur 2 chiffres'),
  src: srcList.min(1),
})
export type Notion = z.infer<typeof NotionSchema>

export const NotionsSchema = z.strictObject({
  courseId: nonEmpty,
  status: nonEmpty,
  notions: z.array(NotionSchema),
})
export type Notions = z.infer<typeof NotionsSchema>
