---
id: T16
title: "Spike réseau multijoueur (test réel en partage de connexion)"
lot: 3
status: todo
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
- [ ] Ping fonctionnel entre deux onglets de la même machine
- [ ] ADR rédigée avec résultats réels remplis par l'utilisatrice
- [ ] `npm run check` vert

## Hors périmètre
Le jeu lui-même.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
