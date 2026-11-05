import Dexie, { type EntityTable } from 'dexie'

/**
 * Version du schéma (base Dexie et fichiers d'export).
 * v2 (T09) : `cards` suit ts-fsrs (FSRS-6) + index sur `due`.
 */
export const SCHEMA_VERSION = 2

/**
 * État FSRS sérialisé (dates en ISO 8601). Champs de ts-fsrs : `due` = dueAt, `last_review` = lastReviewAt,
 * `state` : 0 nouvelle, 1 apprentissage, 2 révision, 3 réapprentissage. Les champs v2 sont optionnels
 * (absents des sauvegardes v1) : `fsrs.ts` applique alors des valeurs par défaut.
 */
export interface CardState {
  cardId: string
  due: string
  stability: number
  difficulty: number
  reps: number
  lapses: number
  state: number
  last_review?: string
  scheduledDays?: number
  learningStep?: number
  /** Date locale AAAA-MM-JJ de la première révision (quota de nouvelles cartes par jour). */
  introduced?: string
}

/** Date locale AAAA-MM-JJ d'un horodatage ISO (ou d'une Date). */
export function localDay(d: string | Date): string {
  const x = typeof d === 'string' ? new Date(d) : d
  const p = (n: number) => String(n).padStart(2, '0')
  return `${x.getFullYear()}-${p(x.getMonth() + 1)}-${p(x.getDate())}`
}

export type AttemptKind = 'quiz' | 'exercise' | 'writing' | 'exam' | (string & {})

export interface Attempt {
  id?: number
  itemId: string
  kind: AttemptKind
  correct: boolean
  score?: number
  /** Horodatage ISO 8601. */
  at: string
}

export interface Reading {
  chapterId: string
  progress: number
  finishedAt?: string
}

export interface Activity {
  /** Date locale AAAA-MM-JJ. */
  date: string
  count: number
}

export type RevisionDB = Dexie & {
  cards: EntityTable<CardState, 'cardId'>
  attempts: EntityTable<Attempt, 'id'>
  reading: EntityTable<Reading, 'chapterId'>
  activity: EntityTable<Activity, 'date'>
}

export const db = new Dexie('m2rev') as RevisionDB
const common = {
  attempts: '++id, itemId, kind, at',
  reading: 'chapterId',
  activity: 'date',
}
db.version(1).stores({ cards: 'cardId', ...common })
db.version(SCHEMA_VERSION)
  .stores({ cards: 'cardId, due', ...common })
  .upgrade((tx) =>
    tx
      .table<CardState>('cards')
      .toCollection()
      .modify((c) => {
        c.scheduledDays ??= 0
        c.learningStep ??= 0
        if (c.introduced === undefined && c.last_review) c.introduced = localDay(c.last_review)
      }),
  )
