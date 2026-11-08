---
id: T15
title: "Atelier anglais (4 niveaux, sans IA)"
lot: 2
status: done
depends: [T11]
agent: builder
---

# T15 — Atelier anglais (4 niveaux, sans IA)

## Objectif
Apprendre à écrire des phrases d'examen simples et justes, corrigées sans IA.

## À lire d'abord
- `docs/00-besoin.md` (Atelier anglais)
- `docs/03-modele-contenu.md` (WritingItem)
- `docs/design/maquette.html` (écran 05)

## À faire
1. `src/lib/text-normalize.ts` : `normalizeAnswer` (casse, espaces, apostrophes/guillemets typographiques, ponctuation finale, équivalence -ise/-ize et -isation/-ization) + tests.
2. **reorder** : mots (ponctuation collée) mélangés avec graine, jamais dans l'ordre initial ; tap pour placer/retirer ; vérification contre `answer` + `accepted`.
3. **cloze** : `parseCloze` → champs inline ; chaque trou accepte toutes ses variantes ; affiche `translation` après validation.
4. **spot_error** : phrase découpée en mots cliquables ; correct si le mot cliqué appartient au fragment `error` ; puis `corrected` + `explanation` bilingue.
5. **free** : zone de texte → mots-clés trouvés/manquants (sous-chaîne normalisée, puces vert/rose), `modelAnswer`, `checklist` à cocher, `usefulPhrases`.
6. Onglets de niveau 1-4 (maquette), consigne en FR, enregistrement des tentatives.

## Critères d'acceptation
- [x] Les 5 items de REC1-05 jouables
- [x] Tests unitaires sur normalize, cloze, spot_error, keywords
- [ ] `npm run check` vert (tsc, lint, build et tests de `src/` verts ; seul le test de contenu `scripts/lib/validate.test.ts` reste rouge à cause de 17 citations de `inf4/03-cadre-ple`, hors périmètre)

## Hors périmètre
Correction grammaticale automatique.

## Journal
2026-11-08 — Atelier jouable sur `…/chapitre/:id/anglais` (`src/features/writing/`), logique pure dans `src/lib/writing.ts` (+ `normalizeAnswer` dans `text-normalize.ts`), tests Vitest + e2e `tests/e2e/writing.spec.ts`.
- Consigne toujours en FR (le texte à produire est en anglais) ; correction en FR+EN. Réponse libre comptée « réussie » à partir de 60 % des mots-clés (`FREE_PASS_RATIO`), score 0..1 enregistré dans `attempts`.
- Le niveau « Indice » du cloze est dérivé de la réponse (première lettre + traits bas), rien d'inventé. Un niveau sans exercice (ex. REC1-04) est grisé ; un chapitre sans atelier affiche un état vide.
- Écart : `e2e/flashcards.spec.ts` échoue déjà sur HEAD propre (hors T15).
