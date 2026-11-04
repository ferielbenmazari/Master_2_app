---
id: T15
title: "Atelier anglais (4 niveaux, sans IA)"
lot: 2
status: todo
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
- [ ] Les 5 items de REC1-05 jouables
- [ ] Tests unitaires sur normalize, cloze, spot_error, keywords
- [ ] `npm run check` vert

## Hors périmètre
Correction grammaticale automatique.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
