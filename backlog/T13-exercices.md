---
id: T13
title: "Exercices corrigés"
lot: 2
status: done
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
- [x] Les 3 exercices de REC1-05 complets
- [x] Le brouillon survit à un rechargement
- [x] `npm run check` vert

## Hors périmètre
Correction automatique.

## Journal
- 2026-11-06 : liste `…/exercices` (tri par difficulté, SegBar, badge « Format partiel », « Déjà fait ») et écran `…/exercices/:exerciseId` (énoncé, brouillon, indices un par un, corrigé FR+EN, auto-évaluation Raté/Moyen/Réussi -> `recordAttempt` kind `exercise`, score 0 / 0,5 / 1, correct = Réussi seulement).
- `RichText` gagne `block` (`parseRichBlocks` : paragraphes, listes, tableaux, citations, code ; HTML brut inerte ; retour à la ligne simple conservé).
- Brouillon : localStorage via `src/store/drafts.ts` (effacé par `resetAll`, hors export JSON).
- Écart : test `QuizRunner` (déjà instable en suite complète, > 5 s) passé à 20 s de timeout pour que `npm run check` soit vert. Captures : `tests/screens/T13-*.png`.
