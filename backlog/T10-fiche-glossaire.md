---
id: T10
title: "Fiche synthèse et glossaire"
lot: 1
status: done
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
- [x] Recherche « validite » trouve « validité interne » et « internal validity »
- [x] Impression de la fiche lisible sur une page A4 pour REC1-05
- [x] `npm run check` vert

## Hors périmètre
Export PDF.

## Journal
2026-11-05 : pages `ChapterSheet` (fiche, route `/fiche`) et `Glossary` (recherche FR/EN, lettres collantes, Sheet de détail + lien chapitre), `normalizeForSearch`, `lib/glossary.ts`, `TermDetail` extrait de `TermChip`. Impression A4 : fond blanc, sans navigation, citations en notes numérotées (fichier + passage) ; en mode FR+EN seule la langue principale est imprimée pour tenir sur 1 page (REC1-05 vérifié en PDF). Test e2e `sheet-glossary.spec.ts`.
