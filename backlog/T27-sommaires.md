---
id: T27
title: "Sommaire général de la matière et sommaire de chaque chapitre"
lot: refonte-pedagogique
status: done
depends: [T26]
agent: main
---

# T27 — Sommaires

## Objectif
Demande de l'utilisatrice (2026-11-17) : « un sommaire général et un sommaire par chapitre, ce sera plus simple de s'y retrouver ». Construits automatiquement à partir des titres (`heading`) et sous-titres (`subheading`) des chapitres, sans champ de contenu supplémentaire.

## Critères d'acceptation
- [x] `lib/toc.ts` : sommaire d'un chapitre (parties, sous-parties), ancres, paramètre `?partie=n` / `n.m`, texte brut des titres (tests)
- [x] Lecteur : panneau « Sommaire · n parties » repliable sous l'en-tête ; un clic défile jusqu'à la (sous-)partie (mouvement réduit respecté) ; `?partie=` à l'ouverture
- [x] Matière : onglet « Sommaire » → page « Sommaire général » (chapitres, parties, sous-parties ; liens vers le lecteur à cet endroit)
- [x] Anciens chapitres sans numéros : numérotation ajoutée à l'affichage
- [x] Cibles tactiles ≥ 44 px, couleurs par tokens ; tests à jour, `npm run check` vert

## Journal
2026-11-17 : `lib/toc.ts` (+ tests), composant `ChapterToc` (boutons dans le lecteur, liens dans le sommaire général), page `CourseToc` (route `matiere/:courseId/sommaire`, onglet « Sommaire »), ancres `partie-n` / `partie-n-m` avec `scroll-margin-top` sous la barre collée. 6 tests ajoutés. Un test de la suite a échoué une fois sous charge pendant `npm run check`, non reproduit sur deux relances complètes (instabilité de délai, sans lien identifié avec T27). `docs/06` §10.2 : fidélité = alignement sur les notions (définitions, propriétés), forme libre.
