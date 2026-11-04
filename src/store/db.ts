import Dexie, { type EntityTable } from 'dexie'

export const SCHEMA_VERSION = 1

/** État FSRS sérialisé (dates en ISO 8601). T09 le raffinera ; la forme suit les champs de ts-fsrs. */
export interface CardState {
  cardId: string
  due: string
  stability: number
  difficulty: number
  reps: number
  lapses: number
  state: number
  last_review?: string
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
db.version(SCHEMA_VERSION).stores({
  cards: 'cardId',
  attempts: '++id, itemId, kind, at',
  reading: 'chapterId',
  activity: 'date',
})
