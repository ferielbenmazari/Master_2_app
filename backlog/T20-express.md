---
id: T20
title: "Session Express 5 min"
lot: 1
status: todo
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
- [ ] Une session dure ≤ 5 min pour un utilisateur moyen (6 étapes)
- [ ] Deux sessions consécutives ne proposent pas les mêmes items si d'autres sont disponibles
- [ ] Tests unitaires de `buildSession` (priorités, entrelacement, repli si peu de contenu)
- [ ] `npm run check` vert

## Hors périmètre
Notifications de rappel.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
