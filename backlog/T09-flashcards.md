---
id: T09
title: "Flashcards à répétition espacée (FSRS)"
lot: 1
status: done
depends: [T08]
agent: builder
---

# T09 — Flashcards à répétition espacée (FSRS)

## Objectif
Mémoriser durablement le vocabulaire et les notions, avec une session « à revoir aujourd'hui ».

## À lire d'abord
- `docs/design/maquette.html` (écran 03)
- `docs/01-architecture.md` (table cards)

## À faire
1. Installer `ts-fsrs`. `src/store/fsrs.ts` : `getCardState(id)`, `review(id, rating)`, `previewIntervals(id)` (texte « 1 min / 8 min / 2 j / 5 j »), `getDueCards(now)`, nouvelles cartes limitées à 20/jour (réglable dans le profil).
2. `FlashcardDeck` : carte qui se retourne (flip 3D, Espace/Entrée), recto dans `trainLang`, verso **FR + EN** ; 4 boutons Encore · Difficile · Bien · Facile avec délai ; raccourcis clavier 1-4.
3. Route chapitre `…/flashcards` (cartes du chapitre) et `/reviser` (toutes les cartes dues, toutes matières, via `loadAllChapters`).
4. `getDueCount()` utilisé par l'accueil renvoie le vrai total.
5. Tests : une carte notée « Encore » revient avant une carte « Facile » ; persistance.

## Critères d'acceptation
- [x] Session `/reviser` fonctionnelle et vide quand tout est revu (EmptyState festif)
- [x] Le compteur de l'accueil se met à jour
- [x] Flip accessible au clavier
- [x] `npm run check` vert

## Hors périmètre
Statistiques détaillées.

## Journal
- 2026-11-04 : `ts-fsrs` 6.0.0 (API `DefaultScheduler`, asynchrone ; l'ancienne API `fsrs()` est dépréciée), modèle FSRS-6, étapes 1 min/10 min, sans fuzz. `src/store/fsrs.ts` (review, previewIntervals, getDueCards, quota de nouvelles cartes par jour local), `src/features/flashcards/` (FlashcardDeck, file de session, routes chapitre et `/reviser`).
- Schéma Dexie v2 (`SCHEMA_VERSION` = 2) : champs `scheduledDays`, `learningStep`, `introduced`, index `due`, migration des lignes v1 ; l'import accepte toujours les sauvegardes v1 (testé). Nouveau réglage `newPerDay` (défaut 20, profil, rétro-compatible).
- Écart : `getDueCount()` charge tous les chapitres de toutes les matières (import lazy) pour connaître les ids existants.
