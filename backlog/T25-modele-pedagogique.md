---
id: T25
title: "Modèle pédagogique : question directrice, objectifs, méthode, synthèse"
lot: refonte-pedagogique
status: todo
depends: [C10]
agent: main
---

# T25 — Modèle pédagogique dans le schéma et l'app

## Objectif
Permettre à chaque chapitre d'afficher sa question directrice, ses objectifs, ce qui est attendu au partiel, son positionnement, des méthodes pas à pas, des paragraphes d'explication et une synthèse structurée ; rattacher chaque quiz/exercice à un objectif. Tout est facultatif dans le schéma (compatibilité avec le contenu existant).

## Critères d'acceptation
- [ ] `schema.ts` + `docs/03` : `question`, `objectives`, `examFocus`, `prerequisites`, `next`, `synthesis` ; bloc `method` ; `paragraph.explain` ; callout `repere` ; `objective` et `trap` sur quiz/exercices ; `course.chapterOrder`
- [ ] Loader : ordre des chapitres selon `course.json.chapterOrder` si présent
- [ ] Validateur : objectifs couverts (≥ 1 quiz), quiz/exercices pointant un objectif existant, `explain` sans `src` autorisé
- [ ] Lecteur : en-tête (question, objectifs, au partiel, avant/après), rendu méthode/explication/repère, synthèse structurée en fin de lecture
- [ ] Quiz : objectif visé + confusion à éviter dans la correction ; fiche synthèse : objectifs + synthèse ; page matière : question de chaque chapitre
- [ ] Tests à jour, `npm run check` vert
