---
id: T20
title: "Session Express 5 min"
lot: 1
status: done
depends: [T08, T09, T10]
agent: builder
---

# T20 — Session Express 5 min

## Objectif
Donner envie de revenir chaque jour : une session courte, intense et gratifiante, lançable en un tap depuis la Base ou un chapitre.

## À lire d'abord
- `docs/06-qualite-contenu.md` §6 (principes : récupération active, entrelacement, récompense)
- `docs/design/maquette.html` (Mission du jour, combos, XP)

## À faire
1. `src/features/express/buildSession.ts` (pur, testé) : 1 point clé (`keyPoints`, priorité aux notions ★★★ peu revues) + 3 flashcards (dues d'abord) + 2 quiz (`apply`/`analyze` en priorité, ratés récemment d'abord), **entrelacés** entre chapitres de la matière (ou de toutes les matières depuis la Base).
2. Écran plein écran : barre de progression en segments (6), minuteur discret 5:00, enchaînement sans retour au menu, combos et XP.
3. Fin : récap « +XP · combo max · notions vues » + bouton « Encore 5 min » + mise à jour de la série.
4. Bouton **Lancer** de la Mission du jour → Express toutes matières ; tuile Express du hub → Express du chapitre.

## Critères d'acceptation
- [x] Une session dure ≤ 5 min pour un utilisateur moyen (6 étapes)
- [x] Deux sessions consécutives ne proposent pas les mêmes items si d'autres sont disponibles
- [x] Tests unitaires de `buildSession` (priorités, entrelacement, repli si peu de contenu)
- [x] `npm run check` vert

## Hors périmètre
Notifications de rappel.

## Journal
2026-11-06 — `buildSession` (pur, 18 tests : priorités, entrelacement par chapitre, exclusion de la session précédente, repli) ; reducer d'état (`express-state.ts`) ; écran plein écran hors coquille (`/express` et `…/chapitre/:id/express`) : segments, minuteur 5:00 indicatif (jamais coupant), combo/XP, récap (+XP · combo max · notions vues · série) et « Encore 5 min » ; « Lancer » (Mission) → `/express`, tuile Express du hub → Express du chapitre. Réutilise `FlashcardCard`, `QuizCard` (qui enregistre les tentatives) et un nouveau `RateBar` extrait de `FlashcardDeck`.
Écarts : XP locale à la session (pas de magasin d'XP, cf. T12) ; « notions vues » = notions déclarées des items, à défaut l'item ; l'exclusion de la session précédente passe par `localStorage` (`store/express-recent.ts`) ; le quota de nouvelles cartes/jour n'est pas appliqué aux 3 cartes d'Express ; pas d'Express au niveau d'une matière (hors fiche, `buildSession` le supporte).
