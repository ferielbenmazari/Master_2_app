---
id: T12
title: "Tableau de bord : série de jours et statistiques"
lot: 2
status: todo
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
- [ ] Série correcte sur des jeux de dates de test
- [ ] Statistiques cohérentes avec les tentatives enregistrées
- [ ] `npm run check` vert

## Hors périmètre
Classement entre amis.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
