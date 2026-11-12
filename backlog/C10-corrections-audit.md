---
id: C10
title: "Corrections immédiates issues de l'audit pédagogique"
lot: contenu
status: done
depends: []
agent: main
---

# C10 — Corrections immédiates issues de l'audit pédagogique

## Objectif
Corriger les erreurs repérées pendant l'audit pédagogique (phase 1, 2026-11-12) et remettre `npm run check` au vert.

## Critères d'acceptation
- [x] REC1 ch.04, `rec1-04-ex-04` : arbre de décision 1 conforme au PDF (slide 81 : « Many » → « Do you control some variables? »)
- [x] ISI1 ch.06 : l'encadré IEEE 830 n'affirme plus que la liste du cours est fermée
- [x] REC1 ch.05, `rec1-05-ex-03` : plus de « triangulation » (absente du cours 5)
- [x] Tests rouges réparés (`validate.test.ts` : résumé avec examens ; `QuizRunner.test.tsx` : libellé du bouton source)

## Journal
2026-11-12 : 3 corrections de contenu ; 2 tests déjà rouges avant l'audit réparés (le résumé du validateur affiche désormais les examens ; le test du quiz cherchait un libellé inexistant).
