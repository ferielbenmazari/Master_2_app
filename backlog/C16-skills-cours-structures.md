---
id: C16
title: "Skills de rédaction et de refonte des cours (format structuré, orienté sommaire et partiel)"
lot: refonte-pedagogique
status: done
depends: [C15]
agent: main
---

# C16 — Skills de rédaction et de refonte des cours

## Objectif
Capitaliser la refonte d'ISI1 (validée par l'utilisatrice le 2026-11-18 : « la version structurée et synthétique est infiniment mieux ») pour les autres matières : une méthode unique, des skills pour corriger les cours existants et écrire les prochains, des outils et des garde-fous qui évitent de refaire les mêmes erreurs. Approche **orientée sommaire et réussite au partiel** ; on synthétise ce qui peut tomber, on ne le supprime jamais.

## Critères d'acceptation
- [x] Méthode de référence dans `docs/06` §11 (principes, contenu d'un chapitre, contrôles, pièges techniques rencontrés)
- [x] Skill `/refondre-cours` (cours existant : diagnostic → sommaire priorisé validé → réécriture → schémas → contrôles → alignement)
- [x] Skill `/rediger-cours` (nouveau cours, même méthode) ; `/cours-essentiel` redirige vers lui
- [x] Consignes contradictoires alignées (content-author, content-reviewer, ajouter-cours, quiz-essentiel, docs/03, docs/00 F1, CLAUDE.md)
- [x] Outils `tools/cours/` : `outline.mjs` (sommaire, statistiques, couverture), `citations.mjs` (réutiliser les citations vérifiées), `capture-schemas.mjs` (rendu des schémas à l'écran)
- [x] Garde-fou automatique : `src/content/diagrams.test.ts` refuse tout schéma Mermaid invalide dans `npm run check`
- [x] `npm run check` vert

## Journal
2026-11-18 : méthode écrite (docs/06 §11) à partir de ce qui a marché et de ce qui a coincé sur ISI1 (en-têtes de tableau vides, glossaire sans source cours, mots absolus seulement dans des FAUX, notions déplacées sans mise à jour de `notions.json`, courbes Mermaid illisibles, serveur de dev cassé par un second `npm run dev`). Deux skills et trois outils, installés dans `.claude/`. Test des schémas vérifié dans les deux sens (passe sur le contenu, échoue sur un schéma cassé).
Écart : les outils sont en JavaScript dans `tools/cours/` (ignoré par ESLint comme `tools/sources-mcp`) ; aucune dépendance ajoutée (Playwright est déjà là pour les e2e).
