---
id: T14
title: "Partiels blancs et annales corrigées"
lot: 2
status: done
depends: [T13]
agent: builder
---

# T14 — Partiels blancs et annales corrigées

## Objectif
Se mettre en conditions d'examen et se corriger avec un barème.

## À lire d'abord
- `docs/03-modele-contenu.md` (Exam)
- `docs/design/maquette.html` (HUD JetBrains Mono, `TimerRing`)

## À faire
1. Onglet Partiels de la matière : liste (annale / blanc, durée, meilleur score).
2. Mode examen : écran d'instructions → démarrage du minuteur (HUD JetBrains Mono, passe orange à 10 min, rouge à 2 min), navigation par sections, réponses : V/F (+ justification), QCM, texte libre ; `material` rendu (markdown, bloc mermaid, ASCII en police mono). Sauvegarde automatique du brouillon (Dexie).
3. Rendre la copie → correction : V/F et QCM notés automatiquement ; questions ouvertes : corrigé + `gradingGuide` sous forme de cases à cocher → points ; note finale /20 ; badge « Corrigé proposé (non officiel) » si `correctionStatus: proposed`.
4. Historique des tentatives par partiel.

## Critères d'acceptation
- [x] Un partiel d'exemple se passe de bout en bout (partiels réels `content/rec1/exams/blanc-*.json` : aucun exemple.json nécessaire)
- [x] Le minuteur survit à un rechargement
- [x] Note /20 correcte (tests sur la fonction de calcul)
- [~] `npm run check` : tsc, lint, tests de la tâche et build verts ; reste rouge à cause des 17 erreurs de citation de `inf4/03-cadre-ple` (hors périmètre)

## Hors périmètre
Correction automatique des questions ouvertes.

## Journal
- 2026-11-08 : onglet Partiels (`/matiere/:id/partiels`), consignes + historique, passage chronométré (HUD `T-MM:SS`, orange 10 min, rouge 2 min, annonce lecteur d'écran par paliers), navigation par sections, V/F + justification, QCM, texte libre, `material` (markdown, mermaid, ASCII en bloc de code), correction (V/F et QCM auto, ouvertes par critères cochés, note /20, badge « Corrigé proposé (non officiel) »).
- Logique pure : `src/lib/exam-timer.ts`, `src/features/exams/exam-logic.ts`, `src/store/exam-session.ts` (tests Vitest) ; e2e `tests/e2e/exams.spec.ts`.
- Écarts : la copie en cours est en localStorage (`m2rev:exam:<id>`, comme les brouillons T13) et non Dexie ; seules les tentatives terminées (kind `exam`, `score` = note /20) vont dans Dexie `attempts` (pas de changement de schéma). V/F noté sur la seule réponse booléenne (justification non notée). Points d'un critère lus dans son texte « (2 pts) », normalisés sur les points de la question.
