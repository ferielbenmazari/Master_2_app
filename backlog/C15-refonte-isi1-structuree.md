---
id: C15
title: "Refonte ISI1 v2 : cours sélectionnés, hiérarchisés, structurés"
lot: refonte-pedagogique
status: in-progress
depends: [T26, C13]
agent: main
---

# C15 — Refonte ISI1 v2 (présentation structurée)

## Objectif
Appliquer l'architecture validée le 2026-11-17 (`content/isi1/REFONTE-ARCHITECTURE.md`) et les règles de `docs/06` §10 : budget par notion selon l'importance au partiel, définitions d'abord, ensembles complets au même endroit, méthode + exemple corrigé, « À retenir » par partie, abandon du style narratif. Ordre : chapitre 3 (pilote, validation de l'utilisatrice), puis 1, 2 et 4, puis le reste.

## Critères d'acceptation
- [x] Chapitre 3 pilote refondu (typologie complète, Glinz en un bloc problème → classification → méthode → exemple corrigé → usages)
- [ ] Chapitre 3 validé par l'utilisatrice
- [ ] Chapitres 1, 2, 4 refondus
- [ ] Chapitres 5 à 9 refondus ; élargissements (10-12) réduits ou supprimés
- [ ] `course.json.chapterOrder`, `PARCOURS.md`, notions et annales jouables alignés sur la nouvelle architecture
- [ ] `npm run check` vert à chaque étape

## Journal
2026-11-17 : chapitre 3 refondu en 5 parties (typologie du cours et types ISO ; confusions à éviter ; NFR selon Glinz et les trois problèmes ; classification, méthode en 4 questions, exemple entièrement corrigé A14 R5, exemples en bref, erreurs de classification ; usages en partiel et en projet), 2 230 mots (17 min). Typologie rapatriée du ch. 1 et types ISO du ch. 2 (notions réaffectées au ch. 03 ; représentation par aspects ramenée à ★). Quiz : 3 retirés (aspects, portée théorique), 6 ajoutés (typologie, ISO), objectifs remappés ; 6 flashcards ajoutées.
Écarts : corrigé de l'exercice 1, question 3, rectifié (FAUX → VRAI : chez Glinz, le genre ne dépend pas de la représentation ; c'était le problème des définitions classiques) ; qz-04, qz-05, fc-07, ex-03 et wr-04 précisés (vision du cours / classique : la NFR se décompose en FR ; taxonomie de Glinz : la préoccupation reste, seule la représentation change). Renvois aux autres chapitres par thème et non par numéro tant que l'architecture n'est pas entièrement appliquée.
