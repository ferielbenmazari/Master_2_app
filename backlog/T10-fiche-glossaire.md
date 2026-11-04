---
id: T10
title: "Fiche synthèse et glossaire"
lot: 1
status: todo
depends: [T07]
agent: builder
---

# T10 — Fiche synthèse et glossaire

## Objectif
Relire l'essentiel en 3 minutes et retrouver n'importe quel terme.

## À lire d'abord
- `docs/03-modele-contenu.md` (keyPoints, Term)

## À faire
1. `…/fiche` : `keyPoints` numérotés (bilingues) avec `SourceChip`, puis tableau des termes du chapitre (FR · EN · définition · source). `@media print` propre (fond blanc, sans effets ni navigation, citations en note).
2. `/matiere/:courseId/glossaire` : tous les termes de la matière (dédoublonnés par `id`), recherche instantanée FR/EN **insensible aux accents et à la casse**, en-têtes de lettre collants, clic → mêmes infos que le Popover + lien vers le chapitre.
3. `src/lib/text-normalize.ts` : `normalizeForSearch` (+ tests).

## Critères d'acceptation
- [ ] Recherche « validite » trouve « validité interne » et « internal validity »
- [ ] Impression de la fiche lisible sur une page A4 pour REC1-05
- [ ] `npm run check` vert

## Hors périmètre
Export PDF.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
