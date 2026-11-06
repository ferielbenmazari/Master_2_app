---
id: C02
title: "ISI1 — chapitres (rédaction → vérification → relecture)"
lot: contenu
status: doing
depends: [C01]
agent: /ajouter-cours isi1 (étape 4)
---

# C02 — ISI1 — chapitres (rédaction → vérification → relecture)

## Objectif
Rédiger les chapitres 01 à 09 du PLAN ISI1, en commençant par ceux qui couvrent le plus de notions ★★★ (contrôle la semaine du 9 novembre).

## Comment
Lancer `/ajouter-cours isi1 (étape 4)` dans Claude Code (session Sonnet). Peut tourner **dans une autre session en parallèle** des tâches T** (fichiers différents). Règles : `docs/06-qualite-contenu.md`.

## Critères d'acceptation
- [ ] Tous les chapitres `status: reviewed` (après fact-checker et content-reviewer)
- [ ] `npm run sources -- coverage isi1` : 100 % des ★★★ couvertes
- [ ] 0 erreur de validation, 0 avertissement non traité

## Journal
2026-11-06 (revue) : cours des 9 chapitres rédigés en mode essentiel (`draft`, sans fact-checker ni content-reviewer). Quiz : ch. 01 seulement (13 questions) → **C07**. Flashcards, exercices, atelier : vides. Thèmes d'annales sans chapitre : KAOS / i*, cas d'utilisation, priorisation (AHP, top 10, 100 $, Eisenhower), triage, cadre 3D de Pohl → attendre `PROGRAMME.md` coché et les notes de cours.
