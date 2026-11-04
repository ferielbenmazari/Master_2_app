---
id: T06
title: "Accueil, page matière, hub de chapitre"
lot: 1
status: todo
depends: [T05]
agent: builder
---

# T06 — Accueil, page matière, hub de chapitre

## Objectif
Trouver en 2 taps n'importe quel chapitre et mode de révision.

## À lire d'abord
- `docs/design/maquette.html` (écran 01)
- `docs/02-design-system.md` (Écrans 1-3)

## À faire
1. **Base** (maquette 01) : `HexAvatar` + pseudo + rang/XP (0 pour l'instant) + série, `TypeLine` (« CONTRÔLE ISI1 DANS 6J // 23 CARTES EN ATTENTE », construit depuis `examDate` et `getDueCount()` qui renvoie 0 tant que T09 n'existe pas), **Mission du jour** (`Panel live` + brackets, `CountUp`), cartes matières (icône lucide de `course.json`, titre, code, `SegBar` = chapitres lus, `Tag tilt` J-n si `examDate` < 30 jours, tilt 3D).
2. **Matière** `/matiere/:courseId` : en-tête couleur matière, onglets Chapitres · Glossaire · Partiels. Liste des chapitres : numéro géant Unbounded, titre, accroche, durée, badge « brouillon » si `status: draft`, coche si lu.
3. **Hub chapitre** : titre bilingue, accroche, badge **Vérifié** si `status: reviewed` (sinon « Brouillon »), grille de 7 tuiles (Express 5 min · Lire l'histoire · Fiche · Flashcards (n) · Quiz (n) · Exercices (n) · Atelier anglais (n)), entrée en cascade.
4. Les matières sans chapitre affichent « Contenu en préparation ».

## Critères d'acceptation
- [ ] Les 4 matières de `content/` s'affichent sans code spécifique
- [ ] Ajouter un dossier `content/test/course.json` fait apparaître une 5ᵉ matière (vérifié puis supprimé)
- [ ] Captures fidèles à la maquette (mobile + desktop, clair + sombre)
- [ ] `npm run check` vert

## Hors périmètre
Contenu des modes.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
