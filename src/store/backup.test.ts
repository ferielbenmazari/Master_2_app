import 'fake-indexeddb/auto'
import { exportAll, exportFilename, importAll, ImportError, resetAll, safeFilePart } from './backup'
import { db } from './db'
import { DEFAULT_PREFS, PREFS_KEY, loadPrefs, savePrefs } from './prefs'
import { putCard, recordAttempt, setReading } from './progress'

const prefs = { ...DEFAULT_PREFS, pseudo: 'Zoé', avatar: 'cyan' as const, theme: 'dark' as const, trainLang: 'en' as const }

async function snapshot() {
  return [await db.cards.toArray(), await db.attempts.toArray(), await db.reading.toArray(), await db.activity.toArray()]
}

async function seed() {
  await recordAttempt({ itemId: 'q1', kind: 'quiz', correct: true, at: '2026-11-03T10:00:00' })
  await setReading('c1', 0.5)
  await putCard({ cardId: 'k', due: '2026-11-05T00:00:00.000Z', stability: 1.5, difficulty: 5, reps: 2, lapses: 1, state: 2, last_review: '2026-11-04T00:00:00.000Z' })
}

beforeEach(async () => {
  localStorage.clear()
  await resetAll()
  savePrefs(prefs)
})

const file = (text: string) => new File([text], 'b.json', { type: 'application/json' })

describe('backup', () => {
  it('aller-retour export → import identique', async () => {
    await seed()
    const before = await snapshot()
    const blob = await exportAll()
    await resetAll()
    expect(await snapshot()).not.toEqual(before)
    expect(loadPrefs()).toEqual(DEFAULT_PREFS)
    const imported = await importAll(blob)
    expect(await snapshot()).toEqual(before)
    expect(imported).toEqual(prefs)
    expect(loadPrefs()).toEqual(prefs)
  })

  it('rejette JSON corrompu, mauvaise forme et mauvaise version sans rien perdre', async () => {
    await seed()
    const before = await snapshot()
    const good = JSON.parse(await (await exportAll()).text())
    const cases: [string, string][] = [
      ['{oups', 'JSON'],
      ['[]', 'valide'],
      [JSON.stringify({ ...good, schemaVersion: 3 }), 'autre version'],
      [JSON.stringify({ ...good, tables: { ...good.tables, cards: [{ cardId: 1 }] } }), 'valide'],
      [JSON.stringify({ ...good, prefs: { ...good.prefs, pseudo: '   ' } }), 'valide'],
    ]
    for (const [text, msg] of cases) {
      await expect(importAll(file(text))).rejects.toThrow(ImportError)
      await expect(importAll(file(text))).rejects.toThrow(msg)
    }
    expect(await snapshot()).toEqual(before)
    expect(loadPrefs()).toEqual(prefs)
  })

  it('importe une sauvegarde T05 (schemaVersion 1, sans champs FSRS v2 ni newPerDay) sans perte', async () => {
    const v1 = {
      app: 'revision-m2',
      schemaVersion: 1,
      exportedAt: '2026-11-03T10:00:00.000Z',
      prefs: { pseudo: 'Léa', avatar: 'lime', theme: 'dark', langMode: 'both', trainLang: 'fr' },
      tables: {
        cards: [{ cardId: 'old', due: '2026-11-05T00:00:00.000Z', stability: 2, difficulty: 5, reps: 1, lapses: 0, state: 2, last_review: '2026-11-01T00:00:00.000Z' }],
        attempts: [{ id: 1, itemId: 'q1', kind: 'quiz', correct: true, at: '2026-11-02T10:00:00.000Z' }],
        reading: [{ chapterId: 'c1', progress: 0.5 }],
        activity: [{ date: '2026-11-02', count: 3 }],
      },
    }
    const imported = await importAll(file(JSON.stringify(v1)))
    expect(imported.newPerDay).toBe(20)
    expect(await db.cards.toArray()).toEqual(v1.tables.cards)
    expect(await db.attempts.toArray()).toEqual(v1.tables.attempts)
    expect(await db.activity.toArray()).toEqual(v1.tables.activity)
  })

  it('exporte et réimporte les champs FSRS v2 et newPerDay', async () => {
    const card = { cardId: 'n', due: '2026-11-05T00:00:00.000Z', stability: 1, difficulty: 5, reps: 1, lapses: 0, state: 1, last_review: '2026-11-04T09:00:00.000Z', scheduledDays: 0.5, learningStep: 1, introduced: '2026-11-04' }
    await db.cards.put(card)
    const blob = await exportAll({ ...prefs, newPerDay: 10 })
    await db.cards.clear()
    const imported = await importAll(blob)
    expect(imported.newPerDay).toBe(10)
    expect(await db.cards.toArray()).toEqual([card])
  })

  it('transaction atomique : un échec en cours d’écriture annule tout', async () => {
    await seed()
    const before = await snapshot()
    const good = JSON.parse(await (await exportAll()).text())
    const dup = { id: 7, itemId: 'x', kind: 'quiz', correct: true, at: '2026-11-01' }
    good.tables.attempts = [dup, dup]
    good.prefs.pseudo = 'Autre'
    await expect(importAll(file(JSON.stringify(good)))).rejects.toThrow(ImportError)
    expect(await snapshot()).toEqual(before)
    expect(loadPrefs().pseudo).toBe('Zoé')
  })

  it('la réinitialisation vide aussi les préférences', async () => {
    await seed()
    await resetAll()
    expect(await snapshot()).toEqual([[], [], [], []])
    expect(localStorage.getItem(PREFS_KEY)).toBeNull()
  })

  it('nom de fichier assaini', () => {
    expect(exportFilename('Zoé', '2026-11-04')).toBe('revision-m2-Zoe-2026-11-04.json')
    expect(safeFilePart('../a b/c:d')).toBe('a-b-c-d')
    expect(safeFilePart('???')).toBe('etudiant')
  })
})
