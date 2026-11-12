---
id: C11
title: "Méthode de conception pédagogique (docs + agents)"
lot: refonte-pedagogique
status: done
depends: [T25]
agent: main
---

# C11 — Méthode de conception pédagogique

## Objectif
Inscrire dans `docs/06`, `docs/04` et les agents la méthode issue de l'audit : niveaux de preuve A-E, chapitre = question + objectifs + méthode + corrigé commenté + transfert + synthèse, statut « explication », extraction des exercices du prof, sources externes fiables autorisées en complément (citées).

## Critères d'acceptation
- [x] `docs/06-qualite-contenu.md` : section « Conception pédagogique »
- [x] Agents `course-analyst`, `content-author`, `content-reviewer`, skills `cours-essentiel`, `quiz-essentiel` à jour ; `bash agentic/install.sh`

## Journal
2026-11-12 : `docs/06` §9 (niveaux de preuve A-E, gabarit de chapitre, statut « explication », exercices des profs, quiz, sources hors supports) ; agents `content-author`, `course-analyst` (livrable `PARCOURS.md`), `content-reviewer` (grille de 12 questions) et skills `cours-essentiel`, `quiz-essentiel` mis à jour, `install.sh` relancé. Validateur : un terme de glossaire peut s'appuyer sur une annale qui l'emploie (notions d'examen absentes des supports, définies par une source externe citée).
