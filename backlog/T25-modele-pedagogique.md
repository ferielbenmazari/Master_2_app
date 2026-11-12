---
id: T25
title: "Modèle pédagogique : question directrice, objectifs, méthode, synthèse"
lot: refonte-pedagogique
status: done
depends: [C10]
agent: main
---

# T25 — Modèle pédagogique dans le schéma et l'app

## Objectif
Permettre à chaque chapitre d'afficher sa question directrice, ses objectifs, ce qui est attendu au partiel, son positionnement, des méthodes pas à pas, des paragraphes d'explication et une synthèse structurée ; rattacher chaque quiz/exercice à un objectif. Tout est facultatif dans le schéma (compatibilité avec le contenu existant).

## Critères d'acceptation
- [x] `schema.ts` + `docs/03` : `question`, `objectives`, `examFocus`, `prerequisites`, `next`, `synthesis` ; bloc `method` ; `paragraph.explain` ; callout `repere` ; `objective` et `trap` sur quiz/exercices ; `course.chapterOrder`
- [x] Loader : ordre des chapitres selon `course.json.chapterOrder` si présent
- [x] Validateur : objectifs couverts (≥ 1 quiz), quiz/exercices pointant un objectif existant, `explain` sans `src` autorisé
- [x] Lecteur : en-tête (question, objectifs, au partiel, avant/après), rendu méthode/explication/repère, synthèse structurée en fin de lecture
- [x] Quiz : objectif visé + confusion à éviter dans la correction ; fiche synthèse : objectifs + synthèse ; page matière : question de chaque chapitre
- [x] Tests à jour, `npm run check` vert

## Journal
2026-11-12 : schéma (champs facultatifs : `question`, `objectives`, `examFocus`, `prerequisites`, `next`, `synthesis`, bloc `method`, `paragraph.explain`, callout `repere`, `objective`/`trap` sur quiz et exercices, `course.chapterOrder`/`objectives`) ; loader `orderChapterRefs` ; validateur R13 (ordre) et R14 (objectifs) + avertissements `W-pedago`, `W-objective-uncovered`, `W-quiz-no-objective` ; composants `ChapterGuide` et `ChapterSynthesis` (lecteur), rendu méthode / explication / repère, objectif et confusion dans la correction des quiz et checkpoints, question sur le hub et la page matière, objectifs + synthèse sur la fiche. 11 tests ajoutés.
Écart : la synthèse remplace les 3 points clés en fin de lecture seulement si le chapitre en a une (repli inchangé sinon).
