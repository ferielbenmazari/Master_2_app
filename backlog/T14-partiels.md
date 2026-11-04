---
id: T14
title: "Partiels blancs et annales corrigées"
lot: 2
status: todo
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
- [ ] Un partiel d'exemple (créer `content/rec1/exams/exemple.json` minimal si aucun n'existe encore, à supprimer ensuite) se passe de bout en bout
- [ ] Le minuteur survit à un rechargement
- [ ] Note /20 correcte (tests sur la fonction de calcul)
- [ ] `npm run check` vert

## Hors périmètre
Correction automatique des questions ouvertes.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
