import { z } from 'zod'
import { UI } from '@/i18n/ui'
import { db, SCHEMA_VERSION } from './db'
import { removeDrafts } from './drafts'
import { AVATAR_COLORS, DEFAULT_PREFS, MAX_NEW_PER_DAY, loadPrefs, removePrefs, savePrefs, type Prefs } from './prefs'
import { localDate } from './progress'

export class ImportError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ImportError'
  }
}

const isoDate = z.string().min(1)
const cardSchema = z.object({
  cardId: z.string().min(1),
  due: isoDate,
  stability: z.number(),
  difficulty: z.number(),
  reps: z.number().int().nonnegative(),
  lapses: z.number().int().nonnegative(),
  state: z.number().int().nonnegative(),
  last_review: isoDate.optional(),
  // v2 : absents des sauvegardes v1
  scheduledDays: z.number().nonnegative().optional(),
  learningStep: z.number().int().nonnegative().optional(),
  introduced: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
})
const attemptSchema = z.object({
  id: z.number().int().positive(),
  itemId: z.string().min(1),
  kind: z.string().min(1),
  correct: z.boolean(),
  score: z.number().optional(),
  at: isoDate,
})
const readingSchema = z.object({
  chapterId: z.string().min(1),
  progress: z.number().min(0).max(1),
  finishedAt: isoDate.optional(),
})
const activitySchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  count: z.number().int().nonnegative(),
})
const prefsSchema = z.object({
  pseudo: z.string().refine((s) => s.trim() !== '' && s.trim().length <= 24),
  avatar: z.enum(AVATAR_COLORS as [string, ...string[]]),
  theme: z.enum(['system', 'light', 'dark']),
  langMode: z.enum(['fr', 'both', 'en']),
  trainLang: z.enum(['fr', 'en']),
  quizTimer: z.union([z.literal(0), z.literal(15), z.literal(30), z.literal(60)]).optional(),
  newPerDay: z.number().int().min(0).max(MAX_NEW_PER_DAY).optional(),
})

const backupSchema = z.object({
  app: z.literal('revision-m2'),
  schemaVersion: z.union([z.literal(1), z.literal(SCHEMA_VERSION)]),
  exportedAt: isoDate,
  prefs: prefsSchema,
  tables: z.object({
    cards: z.array(cardSchema),
    attempts: z.array(attemptSchema),
    reading: z.array(readingSchema),
    activity: z.array(activitySchema),
  }),
})

/** Pseudo assaini pour un nom de fichier (sans accents ni caractères spéciaux). */
export function safeFilePart(pseudo: string): string {
  const s = pseudo
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
  return s || 'etudiant'
}

export function exportFilename(pseudo: string, date: string = localDate()): string {
  return `revision-m2-${safeFilePart(pseudo)}-${date}.json`
}

/** Sérialise préférences + toutes les tables dans un Blob JSON. */
export async function exportAll(prefs: Prefs = loadPrefs()): Promise<Blob> {
  const [cards, attempts, reading, activity] = await Promise.all([
    db.cards.toArray(),
    db.attempts.toArray(),
    db.reading.toArray(),
    db.activity.toArray(),
  ])
  const data = {
    app: 'revision-m2',
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    prefs,
    tables: { cards, attempts, reading, activity },
  }
  return new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
}

/**
 * Valide le fichier puis remplace tout dans une transaction unique : en cas d'erreur
 * les données existantes sont intactes. Renvoie les préférences importées.
 */
export async function importAll(file: Blob): Promise<Prefs> {
  let raw: unknown
  try {
    raw = JSON.parse(await file.text())
  } catch {
    throw new ImportError(UI.backup.errCorrupt)
  }
  if (typeof raw === 'object' && raw !== null && 'schemaVersion' in raw && raw.schemaVersion !== 1 && raw.schemaVersion !== SCHEMA_VERSION) {
    throw new ImportError(UI.backup.errVersion)
  }
  const parsed = backupSchema.safeParse(raw)
  if (!parsed.success) throw new ImportError(UI.backup.errShape)
  const { tables, prefs } = parsed.data
  try {
    await db.transaction('rw', db.cards, db.attempts, db.reading, db.activity, async () => {
      await Promise.all([db.cards.clear(), db.attempts.clear(), db.reading.clear(), db.activity.clear()])
      await db.cards.bulkAdd(tables.cards)
      await db.attempts.bulkAdd(tables.attempts)
      await db.reading.bulkAdd(tables.reading)
      await db.activity.bulkAdd(tables.activity)
    })
  } catch {
    throw new ImportError(UI.backup.errWrite)
  }
  const next: Prefs = { ...DEFAULT_PREFS, ...prefs, pseudo: prefs.pseudo.trim(), avatar: prefs.avatar as Prefs['avatar'] }
  savePrefs(next)
  return next
}

/** Efface la progression et les préférences. */
export async function resetAll(): Promise<void> {
  await db.transaction('rw', db.cards, db.attempts, db.reading, db.activity, () =>
    Promise.all([db.cards.clear(), db.attempts.clear(), db.reading.clear(), db.activity.clear()]),
  )
  removePrefs()
  removeDrafts()
}
