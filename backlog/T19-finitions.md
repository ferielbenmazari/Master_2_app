---
id: T19
title: "Finitions : animations, accessibilité, performance"
lot: 4
status: todo
depends: [T15]
agent: builder
---

# T19 — Finitions : animations, accessibilité, performance

## Objectif
Le « wahou » final, sans sacrifier la lisibilité ni l'accessibilité.

## À lire d'abord
- `docs/02-design-system.md` (Mouvement)

## À faire
1. Transitions de pages (`AnimatePresence`), cascade sur toutes les listes, glitch au survol des titres (desktop), séries qui « pop ».
2. Audit clavier complet, contrastes (outil de contraste sur les tokens clair/sombre), `aria-live` pour les feedbacks de quiz.
3. Lighthouse mobile ≥ 90 (perf, a11y, best practices), découpage du bundle par feature (lazy routes).
4. Revue mode sombre de tous les écrans (captures).

## Critères d'acceptation
- [ ] Lighthouse ≥ 90 sur 3 pages
- [ ] Aucun problème bloquant au clavier
- [ ] reduced-motion vérifié sur tous les écrans
- [ ] `npm run check` vert

## Hors périmètre
Nouvelles fonctionnalités.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
