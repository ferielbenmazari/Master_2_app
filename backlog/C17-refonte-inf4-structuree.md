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
- [ ] Chapitres 1, 2, 4, 5, 8 à 11 (dont RED-PL déplacé)
- [ ] `course.json.chapterOrder`, `order`, `notions.json`, `PLAN.md` alignés sur l'architecture finale
- [ ] 0 avertissement du validateur, `npm run check` vert, schémas vérifiés à l'écran, sommaires affichés sur le serveur de dev

## Journal
2026-11-18 : diagnostic (aucun encadré définition / à retenir, titres en accroche, 5 chapitres sans schéma, catégories A-D en double, quatre notations d'une même relation jamais reliées) et sommaire en 11 chapitres. Pilote ch. 3 refondu (voir « Réalisation » du document de sommaire) : 12 min, 4 schémas, corrigé de l'exercice 8192 → 46 par cas (9 + 25 + 12), vérifié par énumération. Écart : les deux transcriptions de la slide 26 divergent sur F2 (obligatoire / optionnelle) ; la réponse du prof tranche (obligatoire).
2026-11-18 (suite) : chapitres 6 et 7 (découpe de l'ancien 07). Exercice F1…F12 (12 produits, F8 morte) et exercice « F5 morte » corrigés et vérifiés par énumération ; deux écarts de source signalés (cardinalité relâchée seulement après effacement des exclusions ; sens des requires dans la transcription du schéma). 5 schémas contrôlés à l'écran ; pages vérifiées sur le serveur de dev de l'utilisatrice.
