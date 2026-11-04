---
id: T17
title: "Quiz Battle multijoueur"
lot: 3
status: todo
depends: [T16]
agent: builder
---

# T17 — Quiz Battle multijoueur

## Objectif
Réviser à plusieurs, chacun sur son téléphone, façon quiz de soirée.

## À lire d'abord
- `docs/01-architecture.md` (Multijoueur)
- `docs/design/maquette.html` (écran 06)
- `docs/adr/001-transport-multijoueur.md`

## À faire
1. `src/features/game/engine.ts` : réducteur pur (lobby → question → reveal → … → podium), messages typés `hello | lobby | start | question | answer | reveal | scores | end`. Score = bonne réponse ? `500 + round(500 × tempsRestant / tempsTotal)` : 0. Tests complets du réducteur.
2. Hôte : choix des matières/chapitres, 10 questions, 20 s ; questions tirées des `quiz` (V/F + QCM). Code géant + QR (`qrcode`) vers `#/jouer/rejoindre/<CODE>`.
3. Invité : rejoindre par code ou lien, choisir son avatar ; écran réponse plein écran (gros boutons).
4. Reveal : bonne réponse + justification bilingue ; classement animé ; podium final + confettis.
5. Déconnexion d'un joueur : la partie continue.

## Critères d'acceptation
- [ ] Partie complète à 3 onglets en local
- [ ] Partie complète sur téléphones réels (test utilisatrice)
- [ ] `npm run check` vert

## Hors périmètre
Reconnexion, historique en ligne.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
