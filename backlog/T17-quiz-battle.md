---
id: T17
title: "Quiz Battle multijoueur"
lot: 3
status: doing
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
- [x] Partie complète à 3 onglets en local (e2e `tests/e2e/battle.spec.ts`, transport local, avec une déconnexion en cours de partie)
- [ ] Partie complète sur téléphones réels (test utilisatrice)
- [x] `npm run check` vert (tsc, lint, vitest `src/` verts ; `validate:content` rouge hors périmètre : citations INF4-03, autre session)

## Hors périmètre
Reconnexion, historique en ligne.

## Journal
- 2026-11-08 : jeu construit sur le transport LOCAL (décision validée) ; le test PeerJS sur téléphones reste à faire par l'utilisatrice, donc la tâche reste `doing`. Le jeu ne parle qu'à `GameTransport` : transport choisi à l'écran (Internet (PeerJS) par défaut, « Même appareil / onglets » pour les tests).
- Livré : `src/features/game/engine.ts` (réducteurs purs `hostReduce` / `guestReduce`, messages typés et validés, score 500 + round(500 × restant / total), classement avec égalités), `questions.ts` (10 questions V/F + QCM, mélange par graine), `session.ts` (HostSession / GuestSession), écrans Arène, création (chapitres, QR `qrcode`), rejoindre (`#/jouer/rejoindre/<CODE>`, avatar), question, correction bilingue, classement animé, podium + confettis. Entrée : lien « Jouer à plusieurs » sur l'accueil + onglet Arène.
- Choix : l'hôte joue aussi ; seul l'hôte avance à la question suivante ; l'hôte est autoritaire (la question envoyée ne contient ni réponse ni explication, tout arrive dans `reveal`). Pas de reconnexion (hors périmètre) : un arrivant en cours de partie est refusé avec un message.
- Écarts : le QR est généré avec les couleurs des tokens (`--on-accent` sur `--acid`) ; le mode « passe-téléphone » de la maquette n'est pas fait (T18). Non testé : réseau réel PeerJS, appareils tactiles réels, thème sombre en capture.
