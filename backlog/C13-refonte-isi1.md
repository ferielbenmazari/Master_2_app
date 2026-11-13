---
id: C13
title: "Refonte pédagogique ISI1"
lot: refonte-pedagogique
status: done
depends: [T25, C11]
agent: main
---

# C13 — Refonte pédagogique ISI1

## Objectif
Appliquer l'architecture validée (audit du 2026-11-12) : chapitres réorganisés par problématique, chapitre priorisation et modèles de buts (sources externes citées), annales 2013 et 2014 jouables.

## Critères d'acceptation
- [x] Chaque chapitre : question directrice, objectifs, au partiel, avant/après, synthèse
- [x] Notions hiérarchisées (preuve A-E) ; contexte en encadré « repère », jamais quizzé
- [x] Méthodes pas à pas + corrigé commenté + exercice de transfert pour chaque compétence
- [x] Quiz rattachés à un objectif, avec confusion à éviter
- [x] Fidélité : 0 citation invalide, `npm run check` vert

## Journal
2026-11-13 : sources externes enregistrées pour les notions d'annale absentes des supports : `sources-texte/isi1/ext-van-lamsweerde-2001-kaos.md` (raffinement ET/OU, soft goals), `ext-yu-1997-istar.md` (i*, softgoals). À faire : déclarer ces fichiers dans `sources.json` (tier `complement`), extrait du cours SEG3101 d'Ottawa (triage, AHP : échelle 1-9, réciprocité, normalisation, moyenne des lignes) déjà téléchargé mais pas encore enregistré, nouveau chapitre 10 (priorisation, modèles de buts), annales 2013 et 2014 en partiels, puis transformation des 9 chapitres (objectifs, méthodes, exercices). Sans source fiable trouvée : top 10 / 100 $, matrice d'Eisenhower.
2026-11-13 (suite) : nouveau chapitre 10 « Prioriser et modéliser les buts » (triage avec les trois groupes de Davis, techniques dont top 10 et 100 $, AHP pas à pas avec corrigé de l'annale 2014 C relue sur le PDF, Kano, KAOS ET/OU, soft goals, corrigé de l'annale 2013 C relue sur le PDF : triangle inversé sous « nouveau film ») ; sources externes enregistrées : SEG3101 Ottawa, Waterloo CS445, Karlsson et al. 2007, van Lamsweerde 2001, Yu 1997, Alexander 2005 (Davis, triage), Hujainah et al. 2021 (top 10).
Les 9 chapitres existants passent au format pédagogique : question, objectifs, au partiel, avant/après, synthèse, méthodes (diagnostiquer un texte, corriger une exigence, classer selon Glinz, corriger un diagramme de cas d'utilisation, choisir une technique d'élicitation, construire une réflexion), quiz reliés à un objectif avec piège, flashcards, exercices au format des annales (corrigés proposés de 2013 B, C, D et 2014 B, C, D), atelier d'écriture ; chapitres 7-9 marqués « hors annales », 8 et 9 condensés à 15 min. Carte des notions recalibrée (★★★ 37 → selon les annales). Partiels `annale-2013.json` et `annale-2014.json` (2014 Q13 omise, sans source).
Écarts : la réponse à 2013 Q6 (Pohl) passe de FAUX à VRAI proposé ; restent à confirmer Eisenhower, IEEE 830 (Q11), FR → NFR (Q7). Test des cartes rendu indépendant du total (les cartes écrites remplacent les cartes générées du glossaire). Citations courtes héritées allongées automatiquement depuis les sources (outil de session). ISI1 : 0 avertissement du validateur.

