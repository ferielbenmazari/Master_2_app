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
      [JSON.stringify({ ...good, schemaVersion: 2 }), 'autre version'],
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
