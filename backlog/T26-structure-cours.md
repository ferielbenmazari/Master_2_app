---
id: T26
title: "Structure du cours : sous-titres, « Définition à connaître », « À retenir »"
lot: refonte-pedagogique
status: done
depends: [T25]
agent: main
---

# T26 — Structure du cours dans le lecteur

## Objectif
Permettre une présentation directe et structurée (décision de l'utilisatrice du 2026-11-17, `docs/06` §10) : sous-parties à l'intérieur d'une partie, définitions immédiatement identifiables, récapitulatif de fin de partie. Modification légère, sans contrainte nouvelle sur le contenu existant.

## Critères d'acceptation
- [x] `schema.ts` + `docs/03` : bloc `subheading` ; variants de callout `definition` et `retenir`
- [x] Lecteur : `subheading` rendu en `h3` (n'ouvre pas de nouvelle partie) ; encadrés « Définition à connaître » (couleur de la matière) et « À retenir », couleurs par tokens
- [x] Libellé des parties : « Partie n/N » au lieu de « Épisode n/N »
- [x] Validateur : `definition` exige `src` ; `retenir` dispensé (récapitulatif sans fait nouveau)
- [x] `docs/06` §10 : règles de présentation structurée
- [x] Tests à jour, `npm run check` vert

## Journal
2026-11-17 : schéma (`subheading`, callouts `definition` et `retenir`), rendu dans `StoryBlockView` (icônes BookOpen et Bookmark, classes `callout-definition`, `callout-retenir`, `story-subheading`), libellé « Partie n/N », règle R10 adaptée, `docs/03` et `docs/06` §10. 5 tests ajoutés (3 de rendu, 2 de validation).
Écart : les prompts des agents de contenu (`agentic/`) décrivent encore le style narratif ; à aligner sur `docs/06` §10 avant de les réutiliser.
