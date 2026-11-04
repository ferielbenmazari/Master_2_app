---
id: T09
title: "Flashcards à répétition espacée (FSRS)"
lot: 1
status: todo
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
- [ ] Session `/reviser` fonctionnelle et vide quand tout est revu (EmptyState festif)
- [ ] Le compteur de l'accueil se met à jour
- [ ] Flip accessible au clavier
- [ ] `npm run check` vert

## Hors périmètre
Statistiques détaillées.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
