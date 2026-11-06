---
id: T12
title: "Tableau de bord : série de jours et statistiques"
lot: 2
status: done
depends: [T11]
agent: builder
---

# T12 — Tableau de bord : série de jours et statistiques

## Objectif
Rester motivé·e : voir sa régularité et ses points faibles.

## À lire d'abord
- `docs/01-architecture.md` (activity, attempts)

## À faire
1. `src/lib/streak.ts` : série = jours consécutifs (jusqu'à aujourd'hui ou hier) avec ≥ 1 action (+ tests, fuseau local).
2. Accueil : badge série (icône `Flame`) réel avec animation pop quand la série augmente.
3. `/profil` : par matière — % chapitres lus, taux de réussite quiz, cartes maîtrisées (FSRS `stability` > 21 j), 5 notions les plus ratées (liens).
4. Calendrier type « contributions » des 8 dernières semaines (cases colorées).

## Critères d'acceptation
- [x] Série correcte sur des jeux de dates de test
- [x] Statistiques cohérentes avec les tentatives enregistrées
- [x] `npm run check` vert

## Hors périmètre
Classement entre amis.

## Journal
2026-11-06 — `lib/streak.ts` (série + `activityCalendar`, tests : mois/année/heure d'hiver), `lib/stats.ts` (lecture, taux de quiz, cartes à stabilité > 21 j, notions ratées), badge de série avec « pop » quand la série augmente (`store/streak-seen.ts`), section « Ma progression » dans `/profil` (calendrier 8 semaines + une carte de stats par matière). Test e2e `tests/e2e/dashboard.spec.ts`.
Écart : seuls 10 items de quiz REC1 portent des `notions` (ISI1/INF4 aucun) ; un item sans notion compte pour son chapitre (libellé = titre du chapitre, lien vers le hub du chapitre). Liens des notions = hub du chapitre (pas d'ancre par notion).
Constat : `FlashcardDeck.test` et `QuizRunner.test` sont instables quand 16 workers vitest tournent (échecs aussi sans mes changements) ; verts avec `--maxWorkers=6`.
