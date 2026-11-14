---
id: C14
title: "Refonte pédagogique INF4"
lot: refonte-pedagogique
status: done
depends: [T25, C11]
agent: main
---

# C14 — Refonte pédagogique INF4

## Objectif
Appliquer l'architecture validée (audit du 2026-11-12) : chapitres recentrés sur les savoir-faire (compter, construire, traduire, diagnostiquer), exercices corrigés dans chaque chapitre.

## Critères d'acceptation
- [x] Chaque chapitre : question directrice, objectifs, au partiel, avant/après, synthèse
- [x] Notions hiérarchisées (preuve A-E) ; contexte en encadré « repère », jamais quizzé
- [x] Méthodes pas à pas + corrigé commenté + exercice de transfert pour chaque compétence
- [x] Quiz rattachés à un objectif, avec confusion à éviter
- [x] Fidélité : 0 citation invalide, `npm run check` vert

## Journal
2026-11-14 : fin de la refonte INF4. Les 9 chapitres existants ont le format pédagogique (question, objectifs, au partiel, avant/après, synthèse, méthodes, quiz reliés à un objectif avec piège, exercices corrigés). Chapitre 08 (RED-PL) refait : méthodes « traiter un besoin au matching », « traduire une dépendance en inégalité ILP », « poser et lire un arbitrage » ; exercices du tableur ILP du prof (F1…F12 : 9 features au plus, 6 au moins), corrigé de l'arbitrage Stago, cas de matching, cas de transfert (livraison). Chapitre 06 coupé (20 min → 15) : il garde conception, coût A-D et réalisation ; le test d'application devient le nouveau chapitre 10 (`10-test-application.json`, affiché après le 06 : ch.05 retitré « 1/3 », 06 « 2/3 », 10 « 3/3 »).
Notions : `notions.json` — les 14 notions de test passent au chapitre 10 ; recalibrage des notions de contexte (Stago, travaux voisins, cadre deux étapes, flux de conception, abstractions, buts de réalisation et de test) à ★. Contexte en encadrés « repère » non quizzés. Validateur : 0 avertissement, ★★★ 145/145, ★★ 232/232.
Écarts : (1) la Fig. 4 de RED-PL (étude de cas Stago) : la transcription Markdown ne correspond pas à l'image du PDF (coûts de R4, R8, R10, R11, revenus de R5, R6, R11 ; totaux 97 et 99, pas 93) ; les chapitres suivent l'image (qui fait foi), l'ancien « revenu 93 » est supprimé, la capture affiche 99 alors que le tableau donne 109 pour la même sélection (la case de R2 y vaut 0) : noté dans l'exercice et dans `sources.json`. (2) Le tableur ILP du prof n'est pas citable : ses contraintes sont reprises en toutes lettres, l'exercice cite le Tableau 1 de l'article. (3) Les catégories de coût des exemples Bluetooth (C) et portes coulissantes/iris (B) sont déduites des critères de §16.4 (le livre ne les donne pas) : signalé dans le texte. Statut `draft` : fact-checker et content-reviewer restent à lancer.
