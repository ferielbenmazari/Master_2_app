---
id: C04
title: "REC1 — analyse, chapitres 01 à 04, partiel blanc"
lot: contenu
status: doing
depends: [C00]
agent: /ajouter-cours rec1
---

# C04 — REC1 — analyse, chapitres 01 à 04, partiel blanc

## Objectif
Compléter `notions.json` et `PROFIL-PROF.md` (cours 1-4), rédiger les chapitres 01-04 (le 05 sert de modèle), puis un partiel blanc fondé sur les questions de la consigne d'évaluation.

## Comment
Lancer `/ajouter-cours rec1` dans Claude Code (session Sonnet). Peut tourner **dans une autre session en parallèle** des tâches T** (fichiers différents). Règles : `docs/06-qualite-contenu.md`.

## Critères d'acceptation
- [ ] Notions des cours 1-5 complètes et validées
- [ ] Chapitres 01-04 `reviewed`, couverture ★★★ 100 %
- [x] 1 partiel blanc (7 : `content/rec1/exams/blanc-01.json` complet + `blanc-ch01…ch06` par chapitre ; format = hypothèse, corrigés `proposed`)

## Journal
2026-11-06 (revue) : cours + quiz des 5 chapitres (11-14 questions chacun) ; seul le 05 est `reviewed`. **Reste** : `sources.json` à valider, `notions.json` limité au ch. 05 (12 notions ; ★★★ non couvertes : 2), flashcards/exercices/atelier des ch. 01-04, partiel blanc.
2026-11-08 : **ch.06 « Les 11 méthodes, fiche par fiche »** ajouté (grille du devoir du cours 1 : définition, quand / quand pas, faisabilité, données, analyse, protocole, validité, exemple, synthèse pour expérience, étude de cas, enquête, entretien, POC, recherche-action, design science, revue de littérature, SLR, SMS, MLR) ; **11 corrigés du devoir** dans les exercices du ch.01 (`rec1-01-ex-05…15`) ; 4 exercices au ch.04 (il n'en avait aucun) ; 7 partiels blancs. Lectures des méthodes extraites vers `sources-texte/rec1/` (13, 16, 19, 22, 24-26, 29, 30, 33-36…) et passées en niveau `lecture`.
Écarts : plafond d'exercices relevé de 6 à 16 (`schema.ts`, `docs/03`) ; ch.06 = 40 min de lecture (avertissement > 15 min conservé : à découper en 06/07 si besoin) ; ch.05 non touché (fixture de `ExerciseView.test.tsx`). **Reste** : ch.04 sans flashcards ni atelier ni champ `notions` renseigné (couverture ★★★ non mesurable) ; ch.06 `draft` (fact-checker + content-reviewer à passer) ; format du contrôle à confirmer avec l'utilisatrice ; 4 sources sans texte (28, 37, 38, 40 : scans ou manuel de 34 000 lignes).
