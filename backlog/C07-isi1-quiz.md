---
id: C07
title: "ISI1 — quiz des chapitres 02 à 09 (+ V/F des annales) · alertes quiz INF4"
lot: contenu
status: doing
depends: [C02]
agent: /quiz-essentiel isi1
---

# C07 — ISI1 — quiz des chapitres 02 à 09

## Objectif
ISI1 est la priorité n°1 des contrôles, mais seul le chapitre 01 a un quiz (les 8 autres : 0 question). Ajouter 10 à 15 questions par chapitre, au format exact du prof (V/F « justifiez si et seulement si FAUX »).

## Comment
Session Sonnet : `/quiz-essentiel isi1 02`, `/clear`, `/quiz-essentiel isi1 03`… jusqu'à 09. Commit + push après chaque chapitre.

**Annales d'abord** : les 4 annales (`ressources/S3__ISI1/Markdown/exam_1.md`, `examen_2.md`, `examen_3.md`, `examen_4.md`) contiennent une trentaine de V/F du prof (10 en 2013, 20 en 2014). Quand un V/F d'annale porte sur une notion du chapitre **et** que la réponse est établie par le cours, le reprendre (même tournure, au plus légèrement adapté) avec **deux** `src` : l'annale (l'énoncé) + le cours (la réponse). Id : `isi1-<nn>-qz-annale-<k>`. Un V/F d'annale dont la réponse n'est pas dans les supports → ne pas l'utiliser, le noter dans le Journal.

## Puis : alertes quiz INF4 (même session, 15 min)
`npm run validate:content` signale : INF4-04 « bonne réponse la plus longue dans 4/5 QCM » ; INF4-05 « 67 % de FAUX » et « mots absolus uniquement dans les FAUX ». Les corriger (`/quiz-essentiel inf4 04`, puis `05`, en mode correction).

## Critères d'acceptation
- [x] ISI1 ch. 02 à 09 : 10-15 questions chacun, ≥ 1 checkpoint par épisode
- [ ] Au moins 12 V/F d'annales réutilisés au total, chacun avec sa source de cours
- [ ] 0 alerte « question évidente » sur ISI1 et INF4
- [ ] `npm run validate:content` : 0 erreur

## Journal
2026-11-06 (revue, après les commits 35ec8bb → 904b46a) : quiz ISI1 ch. 02 à 09 faits (13-15 questions chacun, ≤ 2 `remember`, ≥ 7 `apply`/`analyze`, checkpoints en place, 0 alerte « question évidente »). **Reste** : (1) seulement 4 V/F d'annales réutilisés (tous dans le ch. 06) → repasser `/quiz-essentiel isi1 <nn>` en mode **ajout** sur 01-05 et 07-09 pour atteindre ≥ 12 au total, sans dépasser 18 questions par chapitre ; (2) les alertes quiz INF4-04 et INF4-05.
