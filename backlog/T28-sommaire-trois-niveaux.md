---
id: T28
title: "Sommaire détaillé : 3ᵉ niveau de titres (sous-partie d'une sous-partie)"
lot: refonte-pedagogique
status: done
depends: [T27]
agent: main
---

# T28 — Sommaire à trois niveaux

## Objectif
Demande de l'utilisatrice (2026-11-18) : « dans toutes les matières (en commençant par ISI1), un sommaire détaillé avec même les sous-titres : chapitre 1, grande partie 1, sous-partie 1, et sous-partie de sous-partie s'il y en a ». Le sommaire (T27) ne connaissait que deux niveaux (`heading`, `subheading`). On ajoute un 3ᵉ niveau, facultatif, sans nouveau type de bloc : `subheading` avec `level: 3`.

## Critères d'acceptation
- [x] Schéma : `subheading.level?: 3` ; `docs/03-modele-contenu.md` à jour
- [x] `lib/toc.ts` : 3ᵉ niveau rattaché à la dernière sous-partie (un niveau 3 sans sous-partie ouverte compte comme une sous-partie), ancres `partie-n-m-k`, paramètre `?partie=n.m.k` (tests)
- [x] Lecteur : sous-titre de niveau 3 rendu en `h4`, ancre posée selon la même règle que le sommaire ; sommaire du chapitre et sommaire général affichent le 3ᵉ niveau, indenté (cibles ≥ 44 px, couleurs par tokens)
- [x] `tools/cours/outline.mjs` affiche le 3ᵉ niveau
- [x] `npm run check` vert

## Journal
2026-11-18 : `level: 3` sur `subheading` (schéma strict, champ facultatif : aucun contenu existant à migrer). `buildToc` produit `TocSub.subs` ; `tocAnchor` / `tocParam` / `anchorFromParam` acceptent un 3ᵉ rang. `ChapterToc` imbrique une liste `toc-subsubs` ; le lecteur compte les sous-titres comme `buildToc` pour que les liens du sommaire tombent au bon endroit. 3 tests ajoutés (toc ×2, rendu h4).
