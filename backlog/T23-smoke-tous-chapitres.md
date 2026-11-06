---
id: T23
title: "Smoke e2e : chaque chapitre s'ouvre et se joue"
lot: 2
status: todo
depends: [T11]
agent: builder
---

# T23 — Smoke e2e : chaque chapitre s'ouvre et se joue

## Objectif
Les e2e ne testent que REC1-05. Or 22 chapitres sont en ligne, écrits par des agents. Un test qui ouvre **chaque** chapitre détecte les plantages (Mermaid invalide, `[[termId]]` cassé, bloc inattendu) avant les utilisateurs.

## À faire
1. `tests/e2e/all-chapters.spec.ts` : pour chaque chapitre listé par le loader (via `content/*/chapters/*.json`), en viewport mobile 390×844 :
   - ouvrir le lecteur, scroller jusqu'en bas, **aucune erreur console**, aucun débordement horizontal ;
   - chaque `diagram` produit un `<svg>` ;
   - ouvrir la fiche ; si le quiz n'est pas vide, répondre à la 1re question et voir la correction.
2. Un rapport en fin de test : chapitres OK / KO.
3. Corriger dans le code les plantages trouvés ; un problème de **contenu** → l'ajouter à `IDEES.md` (ne pas modifier `content/`).

## Critères d'acceptation
- [ ] 22/22 chapitres passent (ou les KO sont listés dans `IDEES.md` avec la cause)
- [ ] Durée du test < 3 min
- [ ] `npm run check` vert

## Journal
