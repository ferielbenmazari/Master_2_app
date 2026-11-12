---
id: C12
title: "Refonte pédagogique REC1"
lot: refonte-pedagogique
status: done
depends: [T25, C11]
agent: main
---

# C12 — Refonte pédagogique REC1

## Objectif
Appliquer l'architecture validée (audit du 2026-11-12) : 7 chapitres recentrés (dont un nouveau : hypothèses et cadre conceptuel), quiz rattachés aux objectifs, exercices au format du contrôle, ch.06 réduit en fiches de référence.

## Critères d'acceptation
- [x] Chaque chapitre : question directrice, objectifs, au partiel, avant/après, synthèse
- [x] Notions hiérarchisées (preuve A-E) ; contexte en encadré « repère », jamais quizzé
- [x] Méthodes pas à pas + corrigé commenté + exercice de transfert pour chaque compétence
- [x] Quiz rattachés à un objectif, avec confusion à éviter
- [x] Fidélité : 0 citation invalide, `npm run check` vert

## Journal
2026-11-13 : 7 chapitres refondus (ordre via `course.json.chapterOrder`, nouveau `07-hypotheses-cadre-conceptuel` affiché en 4e) ; question directrice, objectifs, au partiel, avant/après, synthèse partout ; méthodes pas à pas (diagnostic de RQ, hypothèses, choix et justification, menaces → atténuations, intégrer une source) ; quiz rattachés aux objectifs avec confusions à éviter ; exercices au format du contrôle de novembre. `notions.json` refondu (81 notions, étoiles = niveau de preuve), `PARCOURS.md` ajouté, 0 avertissement REC1.
Écarts : schémas du cours 4 relus sur les images (matrice : expérience et POC du labo au terrain ; arbre 2 : « Not enough » → SMS ; la transcription Markdown disait « re-scope ») ; partiels ch04/ch06 corrigés en conséquence. Statut `draft` : la relecture indépendante (agents fact-checker et content-reviewer) reste à lancer.
