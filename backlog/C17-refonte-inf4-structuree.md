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
- [x] Chapitres 2, 4, 10 (exigences d’application) et 11 (RED-PL) restructurés (parties numérotées, définitions, « À retenir ») ; 12 et 13 : parties TaskForge ajoutées, titres numérotés
- [x] `course.json.chapterOrder`, `order`, `notions.json`, `PLAN.md` alignés sur l'architecture du 2026-11-20 (13 chapitres)
- [ ] 0 avertissement du validateur, `npm run check` vert, schémas vérifiés à l'écran, sommaires affichés sur le serveur de dev

## Journal
2026-11-18 : diagnostic (aucun encadré définition / à retenir, titres en accroche, 5 chapitres sans schéma, catégories A-D en double, quatre notations d'une même relation jamais reliées) et sommaire en 11 chapitres. Pilote ch. 3 refondu (voir « Réalisation » du document de sommaire) : 12 min, 4 schémas, corrigé de l'exercice 8192 → 46 par cas (9 + 25 + 12), vérifié par énumération. Écart : les deux transcriptions de la slide 26 divergent sur F2 (obligatoire / optionnelle) ; la réponse du prof tranche (obligatoire).
2026-11-18 (suite) : chapitres 6 et 7 (découpe de l'ancien 07). Exercice F1…F12 (12 produits, F8 morte) et exercice « F5 morte » corrigés et vérifiés par énumération ; deux écarts de source signalés (cardinalité relâchée seulement après effacement des exclusions ; sens des requires dans la transcription du schéma). 5 schémas contrôlés à l'écran ; pages vérifiées sur le serveur de dev de l'utilisatrice.
2026-11-18 (suite) : chapitre 5 refondu (stratégies d’élicitation). Règle « vocabulaire du prof et liens » appliquée : ALL / SOME (variabilité) ≠ SHALL / SHOULD / COULD (priorité), étapes ↔ triptyque, breakdown structure ↔ représentation extensive, pivot ↔ OVM. Décompte de l’exercice des magasins (12 produits) et remarque sur Payment présentés comme proposés.
2026-11-20 : le prof a donné tout le dossier EPI (tutoriels VariaMos T0 à T5, quiz 0 à 2, TaskForge, ISO 24707, consigne d'examen). Analyse globale (`ANALYSE-EPI.md`), 50 notions ajoutées (citations vérifiées), 6 sources déclarées et indexées, deux chapitres nouveaux, chapitres 1, 3, 7, 8 refondus ou complétés, 36 questions des quiz du prof dans `exams/` (corrigés proposés). Couverture ★★★ 236/236, ★★ 318/318, 0 avertissement. Reste : chapitres 2, 4, 10, 11 (ancien format), restructuration de 12 et 13, quiz 3 à 5 (vides), traduction anglaise des cellules de tableau des chapitres ajoutés.
2026-11-20 (suite) : PARCOURS.md (preuves, format probable déduit d'ISI1, niveaux par budget d'heures, calendrier jusqu'au partiel du 7 décembre), partiels blancs `exams/blanc-01` et `blanc-02` (20 vrai/faux + 3 exercices), chapitres 2, 4, 10, 11 restructurés, renvois « chapitre N » remplacés par des titres. Écart : la restructuration de 2, 4, 10 et 11 n'est pas une réécriture complète (contenu vérifié lors de la refonte pédagogique précédente) ; schémas des chapitres 12 et 13 absents ; cellules de tableau en français en mode EN pour les chapitres ajoutés.
2026-11-22 : nouvelles ressources du prof intégrées : quiz 3, 4, 5, version 2 du quiz 0, pages TaskForge de l'intranet et trois QCM d'auto-évaluation TaskForge (84 questions, 7 partiels « annale » dans `exams/`, corrigés proposés avec une raison par proposition et des renvois au cours, FR et EN). Cours complété là où il ne permettait pas de répondre : gestes VariaMos de T0 et configurer ≠ dériver (ch. 1), calcul du point mort (ch. 2), ordre des variables, `findall(_, …)` et ce qu'une énumération prouve (ch. 7), lecture prudente des résultats et exercice corrigé TaskForge A / B / C (ch. 8), complétion, optimum, précaution de novembre 2024 et format JSON TaskForge (ch. 9), hypothèse ou preuve dans la reconstruction (ch. 12). Comptes TaskForge revérifiés par énumération (72, 36, 48, 0, 96, 192, 16). Écart : le quiz 4 du prof vaut 21 points (fichier source) ; la question 3 du quiz 0 V2 a des points illisibles, comptée sur 2.
2026-11-22 (suite) : l'utilisatrice n'aura aucun corrigé officiel, l'app doit les fournir. Les 12 quiz avaient déjà une correction par proposition ; ajout de 4 « devoirs » corrigés (questions ouvertes, corrigé expliqué, grille d'auto-évaluation) : toutes les questions des TP TaskForge T1, T2, T3 et les exercices finaux des tutoriels VariaMos 2 à 5. Modèle ClothingStores lu sur les schémas (PDF rendus à 300 dpi), comptes vérifiés par énumération (3840 solutions, noyau de 8, TotFeat 20 / 5 ; tutoriel 5 : 9, 4, 5, 2). Code du kit (gabarit, générateur, manifestes, CSV) ajouté à `sources-texte/inf4/24-taskforge-guide-modeles.md` pour le citer ; fiche tutoriels reliée aux devoirs. Écart : le schéma du tutoriel 2 a User optionnelle (4096 solutions), le modèle fourni pour les tutoriels 3 à 5 l'a obligatoire (3840) ; l'expression TotFeat du tutoriel 5 cite ProductMgmt deux fois. Bonus TaskForge (coûts au choix) non corrigé : pas de réponse unique.
