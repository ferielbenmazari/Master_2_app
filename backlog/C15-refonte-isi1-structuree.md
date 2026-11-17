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
- [x] Chapitre 3 validé par l'utilisatrice (2026-11-17 : « c'est beaucoup mieux, il faut que tous les cours ressemblent à ça »)
- [x] Chapitres 1, 2, 4 refondus
- [ ] Chapitres 5 à 9 refondus ; élargissements (10-12) réduits ou supprimés
- [ ] `course.json.chapterOrder`, `PARCOURS.md`, notions et annales jouables alignés sur la nouvelle architecture
- [ ] `npm run check` vert à chaque étape

## Journal
2026-11-17 : chapitre 3 refondu en 5 parties (typologie du cours et types ISO ; confusions à éviter ; NFR selon Glinz et les trois problèmes ; classification, méthode en 4 questions, exemple entièrement corrigé A14 R5, exemples en bref, erreurs de classification ; usages en partiel et en projet), 2 230 mots (17 min). Typologie rapatriée du ch. 1 et types ISO du ch. 2 (notions réaffectées au ch. 03 ; représentation par aspects ramenée à ★). Quiz : 3 retirés (aspects, portée théorique), 6 ajoutés (typologie, ISO), objectifs remappés ; 6 flashcards ajoutées.
Écarts : corrigé de l'exercice 1, question 3, rectifié (FAUX → VRAI : chez Glinz, le genre ne dépend pas de la représentation ; c'était le problème des définitions classiques) ; qz-04, qz-05, fc-07, ex-03 et wr-04 précisés (vision du cours / classique : la NFR se décompose en FR ; taxonomie de Glinz : la préoccupation reste, seule la représentation change). Renvois aux autres chapitres par thème et non par numéro tant que l'architecture n'est pas entièrement appliquée.
2026-11-17 (suite) : sommaires (T27). Chapitre 1 « Les fondamentaux » créé (`11-fondamentaux.json`, 9 min) : définition IEEE 610.12, demande / besoin / exigence, cadre de Pohl (méthode + corrigés Q6), vocabulaire ISO, As-Is / To-Be, CPRE en repère. Chapitre 2 « Pourquoi les projets échouent » réécrit dans `01-pourquoi-les-exigences.json` (8 min) : fiche CHAOS, causes et mythes, huit erreurs types (causes, conséquences, remède), méthode de diagnostic. Chapitre 4 « Une bonne exigence » créé (`12-bonne-exigence.json`, 11 min) : exigence bien formée, shall / should / will / may, 9 + 4 qualités ISO (Pohl & Rupp en une ligne), 5 défauts de rédaction, boîte à outils (mots à bannir, pièges du langage), méthode de correction + corrigé R1-R5, gabarit, revue, corrigés Q8 / Q9 / Q17.
Écarts : `02-normes-certification.json` supprimé ; ses blocs uniques (attributs, StRS / SyRS / SRS) et 4 quiz déplacés provisoirement dans le chapitre « Documenter » (06), d'où ont été retirés les épisodes désormais traités au chapitre 4 (gabarit, R1-R5, revues, pièges du langage) ; l'épisode vide « réflexion » y est réparé. Notions réaffectées (11, 12, 06) ; « négociation » ramenée à ★ en attendant le chapitre priorisation. Un commit (chapitre 1) est parti avec un test instable en échec : corrigé aussitôt (délai explicite du test de rendu, commit suivant).
