---
id: T05
title: "Stockage de la progression (Dexie) + export/import"
lot: 0
status: done
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
- [x] Export télécharge `revision-m2-<pseudo>-<AAAA-MM-JJ>.json`
- [x] Import restaure exactement
- [x] Données conservées après rechargement
- [x] `npm run check` vert

## Hors périmètre
Statistiques et série de jours (T12).

## Journal
- 2026-11-04 : `dexie` + `fake-indexeddb` (dev) ajoutés ; `src/store/{db,progress,backup}.ts` ; page /profil complète (pseudo, avatar, thème, langue du contenu, langue d'entraînement, export, import avec confirmation, réinitialisation à double confirmation).
- Import : validation zod puis remplacement en une transaction Dexie (testé : échec en cours d'écriture = rollback, prefs inchangées). Réinitialisation vide aussi les prefs puis recharge la page (onboarding).
- Pseudo : `trim` + refus du vide dans `loadPrefs`, `setPrefs` et l'import. Format de l'export : `{app, schemaVersion, exportedAt, prefs, tables}`.
- Écart : `CardState` est un type minimal (T09 le raffinera). Les radios de langue d'entraînement s'appellent « Français / English » pour ne pas entrer en collision avec FR / EN du mode langue.
