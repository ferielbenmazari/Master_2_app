---
id: C08
title: "Qualité des citations et lisibilité (tous les chapitres)"
lot: contenu
status: todo
depends: [C07]
agent: fact-checker puis content-reviewer (un chapitre par appel)
---

# C08 — Qualité des citations et lisibilité

## Constat (revue du 2026-11-06, `npm run validate:content`)
- **164 citations de 1 à 3 mots** (« clear vision of what is expected », « Many → Experiment »). Une citation si courte se retrouve partout : elle ne prouve pas que l'agent a lu le bon passage (garantie G1 affaiblie).
- Des `src` **hors sujet** : la citation existe mais ne soutient pas l'affirmation (ex. REC1-04, V/F sur l'arbre de décision 2 qui cite la ligne SMS/SLR).
- **74 paragraphes > 90 mots** (jusqu'à 250 mots dans INF4-04), 3 chapitres > 15 min (INF4-06 : 20 min, ISI1-08 : 25 min, ISI1-09 : 30 min), 4 épisodes > 450 mots sans checkpoint, 3 listes > 7 items.
- **Texte PDF ISI1 abîmé** : l'extraction a remplacé « ti » par `=` ou `M` (`s=ll`, `informaMon`, `SurspéciﬁcaMon`) et garde les ligatures `ﬁ` `ﬀ`. La puce Source montre ce texte tel quel à l'utilisatrice.

## À faire
1. **Réparer le texte ISI1** (une fois, script versionné `scripts/repair-pdf-text.ts`, testé) : dans `sources-texte/isi1/*.md`, remplacer `=` et `M` **entre deux lettres minuscules** par `ti`, et les ligatures par leurs lettres. Appliquer **la même** fonction aux `quote` des chapitres ISI1 qui citent ces fichiers. Relire le diff (attention aux vrais `M` et `=`), puis `npm run validate:content` → 0 erreur.
2. **Par chapitre** (fact-checker) : remplacer chaque citation < 4 mots par un passage de 6 à 25 mots qui **porte** l'affirmation ; supprimer les `src` hors sujet.
3. **Par chapitre** (content-reviewer) : couper les paragraphes > 90 mots, découper les chapitres > 15 min en deux fichiers (ou alléger), ajouter les checkpoints manquants, scinder les listes > 7 items.
4. Quand le total d'avertissements « citation de N mots » est à 0 : passer cette règle en **erreur** dans `scripts/lib/validate.ts` (tâche builder, 5 lignes + test) pour que ça ne revienne plus.

## Critères d'acceptation
- [ ] 0 citation < 4 mots ; 0 paragraphe > 90 mots ; 0 chapitre > 15 min
- [ ] Aucune citation affichée avec `=`/`M` à la place de « ti »
- [ ] `npm run validate:content` : 0 erreur, avertissements restants justifiés dans le Journal

## Journal
