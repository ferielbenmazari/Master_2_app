---
id: T05
title: "Stockage de la progression (Dexie) + export/import"
lot: 0
status: todo
depends: [T04]
agent: builder
---

# T05 — Stockage de la progression (Dexie) + export/import

## Objectif
Mémoriser la progression sur l'appareil et pouvoir la sauvegarder/restaurer.

## À lire d'abord
- `docs/01-architecture.md` (Données locales)

## À faire
1. Installer `dexie`. `src/store/db.ts` : base `m2rev`, tables `cards`, `attempts`, `reading`, `activity` (voir doc), `schemaVersion = 1`.
2. `src/store/progress.ts` : `recordAttempt`, `getAttempts(filter)`, `setReading(chapterId, progress, finished?)`, `getReading`, `bumpActivity(date)`, `getActivity()`; chaque écriture appelle `bumpActivity`.
3. `src/store/backup.ts` : `exportAll()` → Blob JSON (prefs + tables + `schemaVersion` + date), `importAll(file)` → valide la forme (zod) puis remplace tout dans une transaction.
4. Page `/profil` : avatar + pseudo modifiables, thème, mode langue, langue d'entraînement, boutons **Exporter ma progression** / **Importer** (confirmation), **Réinitialiser** (double confirmation).
5. Tests avec `fake-indexeddb` (dev) : aller-retour export → import identique.

## Critères d'acceptation
- [ ] Export télécharge `revision-m2-<pseudo>-<AAAA-MM-JJ>.json`
- [ ] Import restaure exactement
- [ ] Données conservées après rechargement
- [ ] `npm run check` vert

## Hors périmètre
Statistiques et série de jours (T12).

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
