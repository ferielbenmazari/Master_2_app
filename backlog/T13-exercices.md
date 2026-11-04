---
id: T13
title: "Exercices corrigés"
lot: 2
status: todo
depends: [T11]
agent: builder
---

# T13 — Exercices corrigés

## Objectif
S'entraîner sur des exercices de niveau Master avec indices et corrigé.

## À lire d'abord
- `docs/03-modele-contenu.md` (Exercise)

## À faire
1. `…/exercices` : liste triée par difficulté (1 à 3 segments), badge « format partiel » si `examStyle`.
2. Écran exercice : énoncé (markdown **bloc** : listes, tableaux), zone de brouillon libre (sauvegardée), bouton « Un indice » (révèle les `hints` un par un), « Voir le corrigé » (bilingue), puis auto-évaluation **Raté · Moyen · Réussi** → `recordAttempt`.
3. `RichText` en mode bloc (`marked.parse` + rendu sûr + termes).

## Critères d'acceptation
- [ ] Les 3 exercices de REC1-05 complets
- [ ] Le brouillon survit à un rechargement
- [ ] `npm run check` vert

## Hors périmètre
Correction automatique.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
