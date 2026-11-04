---
id: T07
title: "Lecteur du cours narratif bilingue"
lot: 1
status: todo
depends: [T06]
agent: builder
---

# T07 — Lecteur du cours narratif bilingue

## Objectif
Lire un chapitre agréablement en FR et EN, avec le vocabulaire technique mis en avant.

## À lire d'abord
- `docs/00-besoin.md` (Règle bilingue)
- `docs/02-design-system.md` (TermChip, Mise en page)
- `docs/design/maquette.html` (écran 02 + lecteur grand écran)
- `docs/03-modele-contenu.md` (StoryBlock)

## À faire
0. Installer `marked` et `mermaid`.
1. `src/components/content/RichText.tsx` : markdown inline (`marked.parseInline`, puis rendu sûr) + `[[termes]]` → `TermChip`.
2. `TermChip` : surligneur `--marker` ; au tap → `Popover` (terme FR, terme EN, définition FR+EN, exemple, piège, **source**).
2b. `SourceChip` (icône `Quote`) en fin de chaque bloc sourcé → `Sheet` « Ce que dit le cours » : chaque `src` avec `quote` en italique, `loc` et nom lisible du fichier (titre depuis `sources.json` embarqué au build). C'est la preuve visible de la fidélité au cours (`docs/06` §1).
3. `Bilingual` : selon `langMode` et la largeur : `both` + ≥ 1024 px → grille 2 colonnes **alignées bloc par bloc** ; `both` mobile → FR puis EN (style `.en` de la maquette) ; `fr`/`en` → une seule langue.
4. Rendu de chaque `StoryBlock` : heading (+ `Squiggle`), paragraph, list, callout (4 variantes avec icônes lucide `Lightbulb`, `TriangleAlert` (exam, rouge), `Info`, `Sparkles`), table (scroll horizontal interne), diagram (`mermaid` **importé dynamiquement**, thème clair/sombre), quote, checkpoint (pour l'instant : carte « Teste-toi » qui pointe vers le quiz ; T08 la rendra interactive).
5. Barre XP de progression collée en haut, `LangToggle`, **épisodes** : chaque `heading` affiche « Épisode N/M » + gribouillis (`Squiggle`) et `ScrambleText` ; fin de chapitre : « Ce que tu sais maintenant » (3 `keyPoints`) + bouton « J'ai fini » → `setReading(…, 1, true)` + `comboBurst` + XP.
6. Typo de lecture : Manrope 16/17 px, interligne 1.7, `max-width: 68ch`.

## Critères d'acceptation
- [ ] Le chapitre REC1-05 se lit entièrement, tous types de blocs rendus
- [ ] Chaque bloc sourcé affiche sa puce Source ; la feuille montre les citations exactes
- [ ] Les 3 modes langue fonctionnent ; en `both` desktop les blocs FR/EN sont alignés
- [ ] Popover des termes accessible au clavier (Entrée/Échap)
- [ ] `mermaid` absent du bundle initial (vérifier `dist/assets`)
- [ ] `npm run check` vert

## Hors périmètre
Checkpoints interactifs (T08).

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
