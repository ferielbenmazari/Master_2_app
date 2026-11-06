import { db, localDay, type Attempt, type CardState, type Reading, type Activity } from './db'

/** Date locale AAAA-MM-JJ (pas UTC). */
export function localDate(d: Date = new Date()): string {
  return localDay(d)
}

async function bump(date: string): Promise<void> {
  const row = await db.activity.get(date)
  await db.activity.put({ date, count: (row?.count ?? 0) + 1 })
}

/** Compte une action pour le jour donné. */
export function bumpActivity(date: string = localDate()): Promise<void> {
  return db.transaction('rw', db.activity, () => bump(date))
}

export function getActivity(): Promise<Activity[]> {
  return db.activity.orderBy('date').toArray()
}

export function recordAttempt(a: Omit<Attempt, 'id' | 'at'> & { at?: string }): Promise<void> {
  const at = a.at ?? new Date().toISOString()
  return db.transaction('rw', db.attempts, db.activity, async () => {
    await db.attempts.add({ ...a, at })
    await bump(localDate(new Date(at)))
  })
}

export interface AttemptFilter {
  itemId?: string
  kind?: string
  /** Borne basse (ISO) sur `at`. */
  since?: string
}

export async function getAttempts(filter: AttemptFilter = {}): Promise<Attempt[]> {
  const all = await db.attempts.orderBy('at').toArray()
  return all.filter(
    (a) =>
      (filter.itemId === undefined || a.itemId === filter.itemId) &&
      (filter.kind === undefined || a.kind === filter.kind) &&
      (filter.since === undefined || a.at >= filter.since),
  )
}

export function setReading(chapterId: string, progress: number, finished = false): Promise<void> {
  const p = Number.isFinite(progress) ? Math.min(1, Math.max(0, progress)) : 0
  return db.transaction('rw', db.reading, db.activity, async () => {
    const prev = await db.reading.get(chapterId)
    const finishedAt = finished ? (prev?.finishedAt ?? new Date().toISOString()) : prev?.finishedAt
    await db.reading.put({ chapterId, progress: p, ...(finishedAt ? { finishedAt } : {}) })
    await bump(localDate())
  })
}

export function getReading(chapterId: string): Promise<Reading | undefined> {
  return db.reading.get(chapterId)
}

export function putCard(card: CardState, date: string = localDate()): Promise<void> {
  return db.transaction('rw', db.cards, db.activity, async () => {
    await db.cards.put(card)
    await bump(date)
  })
}

export function getCard(cardId: string): Promise<CardState | undefined> {
  return db.cards.get(cardId)
}

export function getAllCards(): Promise<CardState[]> {
  return db.cards.toArray()
}

/** Ids des chapitres terminés (lus jusqu'au bout). */
export async function getFinishedChapterIds(): Promise<Set<string>> {
  const rows = await db.reading.toArray()
  return new Set(rows.filter((r) => r.finishedAt).map((r) => r.chapterId))
}
