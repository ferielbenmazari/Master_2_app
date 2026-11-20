---
id: C17
title: "Refonte INF4 au format structuré (sommaire priorisé et détaillé)"
lot: refonte-pedagogique
status: in-progress
depends: [C16, T28]
agent: main
---

# C17 — Refonte INF4 structurée

## Objectif
Appliquer `/refondre-cours` à INF4 (docs/06 §11) : sommaire priorisé (`content/inf4/REFONTE-ARCHITECTURE.md`), 11 chapitres courts, sous-parties numérotées (sommaire détaillé), exercices du prof corrigés dans le cours, schémas du cours redessinés. Aucune annale : niveau A* = exercice du prof, `examFocus` toujours `probable` (les questionnaires EPI de l'utilisatrice viendront plus tard).

## Critères d'acceptation
- [x] Diagnostic et sommaire priorisé écrits ; accepté sans objection (2026-11-18)
- [x] Pilote : chapitre 3 « Les feature models »
- [x] Chapitres 6 « Traduire un modèle en contraintes » et 7 « Vérifier, diagnostiquer et corriger » (nouveau)
- [x] Chapitre 5 « Trois stratégies »
- [x] Chapitre 1 refondu ; chapitres 3, 7, 8 complétés ; nouveaux chapitres « gabarit SECRET » et « Configurer » ; parties TaskForge dans les chapitres « Conception et réalisation » et « Tester » (2026-11-20)
- [ ] Restent à refondre : chapitres 2, 4, 10 (exigences d’application), 11 (RED-PL) ; 12 et 13 à restructurer
- [x] `course.json.chapterOrder`, `order`, `notions.json`, `PLAN.md` alignés sur l'architecture du 2026-11-20 (13 chapitres)
- [ ] 0 avertissement du validateur, `npm run check` vert, schémas vérifiés à l'écran, sommaires affichés sur le serveur de dev

## Journal
2026-11-18 : diagnostic (aucun encadré définition / à retenir, titres en accroche, 5 chapitres sans schéma, catégories A-D en double, quatre notations d'une même relation jamais reliées) et sommaire en 11 chapitres. Pilote ch. 3 refondu (voir « Réalisation » du document de sommaire) : 12 min, 4 schémas, corrigé de l'exercice 8192 → 46 par cas (9 + 25 + 12), vérifié par énumération. Écart : les deux transcriptions de la slide 26 divergent sur F2 (obligatoire / optionnelle) ; la réponse du prof tranche (obligatoire).
2026-11-18 (suite) : chapitres 6 et 7 (découpe de l'ancien 07). Exercice F1…F12 (12 produits, F8 morte) et exercice « F5 morte » corrigés et vérifiés par énumération ; deux écarts de source signalés (cardinalité relâchée seulement après effacement des exclusions ; sens des requires dans la transcription du schéma). 5 schémas contrôlés à l'écran ; pages vérifiées sur le serveur de dev de l'utilisatrice.
2026-11-18 (suite) : chapitre 5 refondu (stratégies d’élicitation). Règle « vocabulaire du prof et liens » appliquée : ALL / SOME (variabilité) ≠ SHALL / SHOULD / COULD (priorité), étapes ↔ triptyque, breakdown structure ↔ représentation extensive, pivot ↔ OVM. Décompte de l’exercice des magasins (12 produits) et remarque sur Payment présentés comme proposés.
2026-11-20 : le prof a donné tout le dossier EPI (tutoriels VariaMos T0 à T5, quiz 0 à 2, TaskForge, ISO 24707, consigne d'examen). Analyse globale (`ANALYSE-EPI.md`), 50 notions ajoutées (citations vérifiées), 6 sources déclarées et indexées, deux chapitres nouveaux, chapitres 1, 3, 7, 8 refondus ou complétés, 36 questions des quiz du prof dans `exams/` (corrigés proposés). Couverture ★★★ 236/236, ★★ 318/318, 0 avertissement. Reste : chapitres 2, 4, 10, 11 (ancien format), restructuration de 12 et 13, quiz 3 à 5 (vides), traduction anglaise des cellules de tableau des chapitres ajoutés.
