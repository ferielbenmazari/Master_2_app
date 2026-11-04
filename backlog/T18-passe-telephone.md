---
id: T18
title: "Mode passe-téléphone (hors-ligne)"
lot: 3
status: todo
depends: [T17]
agent: builder
---

# T18 — Mode passe-téléphone (hors-ligne)

## Objectif
Jouer à plusieurs sur un seul téléphone, sans réseau.

## À lire d'abord
- `src/features/game/engine.ts`

## À faire
1. Réutiliser `engine.ts` avec `local-transport`.
2. Saisie de 2 à 6 joueurs (pseudo + avatar), tour par tour : écran « Passe le téléphone à gr3nouille » (avec son `HexAvatar`) (anti-triche : question masquée tant qu'on n'a pas appuyé).
3. Mêmes questions, même score (temps compris), podium.

## Critères d'acceptation
- [ ] Partie complète en mode avion
- [ ] `npm run check` vert

## Hors périmètre
—

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
