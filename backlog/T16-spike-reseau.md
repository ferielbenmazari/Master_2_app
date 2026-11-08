---
id: T16
title: "Spike réseau multijoueur (test réel en partage de connexion)"
lot: 3
status: doing
depends: [T11]
agent: builder
---

# T16 — Spike réseau multijoueur (test réel en partage de connexion)

## Objectif
Vérifier AVANT de construire le jeu que les téléphones se connectent entre eux en partage de connexion.

## À lire d'abord
- `docs/01-architecture.md` (Multijoueur)

## À faire
1. Installer `peerjs`. `src/features/game/transport/types.ts` : interface `GameTransport { host(code), join(code), send(to|'all', msg), onMessage(cb), onPeers(cb), close() }`.
2. `peer-transport.ts` (PeerJS, id `m2rev-<CODE>`, STUN Google) et `local-transport.ts` (même appareil, pour T18 et les tests).
3. Page `#/jouer/test` : Créer (affiche le code) / Rejoindre (saisie du code), liste des pairs, bouton Ping → RTT affiché.
4. Rédiger `docs/adr/001-transport-multijoueur.md` avec le **protocole de test manuel** : 3 téléphones (Android + iPhone si possible), l'un fait le partage de connexion ; tester hôte = téléphone du partage, puis hôte = invité. Tableau de résultats à remplir par l'utilisatrice.
5. **S'arrêter** : demander à l'utilisatrice de faire le test et de remplir le tableau. Décision : PeerJS OK → T17 ; sinon proposer un transport alternatif (nouvelle ADR) avant T17.

## Critères d'acceptation
- [x] Ping fonctionnel entre deux onglets de la même machine (e2e `tests/e2e/transport.spec.ts`, transport local)
- [ ] ADR rédigée avec résultats réels remplis par l'utilisatrice
- [ ] `npm run check` vert (tsc, lint, vitest src/ verts ; `validate:content` rouge hors périmètre, voir Journal)

## Hors périmètre
Le jeu lui-même.

## Journal
- 2026-11-08 : points 1 à 4 réalisés. `peerjs` installé ; interface `GameTransport` + `PeerTransport` (id `m2rev-<CODE>`, STUN Google, import dynamique : chunk ~87 Ko) + `LocalTransport` (BroadcastChannel) dans `src/features/game/transport/` ; logique pure (code de salle, messages, RTT, mapping d'erreurs) dans `room.ts` testé ; page `#/jouer/test` (`src/features/game/TransportTest.tsx`) ; ADR `docs/adr/001-transport-multijoueur.md` (statut « proposée »).
- Tests automatisés : Vitest (`room.test.ts`, `local-transport.test.ts`, route) et e2e Playwright sur deux pages via le transport local. **Le transport PeerJS n'a jamais été exercé sur un vrai réseau** : aucune mesure n'a été faite.
- **Reste à faire par l'utilisatrice (point 5)** : suivre le protocole de test manuel de l'ADR sur 3 téléphones (hôte = téléphone en partage de connexion, puis hôte = invité), remplir le tableau de résultats et le verdict. Selon le verdict : PeerJS OK → T17 ; sinon nouvelle ADR de transport alternatif avant T17. La tâche reste `doing` jusqu'à là (critère « ADR avec résultats réels » non atteint).
