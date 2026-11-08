# 001 — Transport du multijoueur (spike réseau T16)

Date : 2026-11-08 · Statut : **proposée** (en attente du test manuel sur téléphones, voir « Résultats »)

## Contexte

Le multijoueur (T17 Quiz Battle, T18 passe-téléphone) repose sur WebRTC via **PeerJS** : pas de serveur à nous, signalisation publique gratuite (`0.peerjs.com`), STUN Google. Le risque connu : certains partages de connexion mobile (NAT symétrique / CGNAT) empêchent deux appareils de s'ouvrir une connexion directe, et nous n'avons **pas de serveur TURN** (relais) : ce serait payant ou à héberger.

Avant de construire le jeu, T16 vérifie en conditions réelles que des téléphones se connectent entre eux, en particulier quand l'un d'eux fournit le partage de connexion aux autres.

## Décision (provisoire)

- Le jeu ne parle qu'à l'interface `GameTransport` (`src/features/game/transport/types.ts`) : `host(code)`, `join(code)`, `send(to|'all', msg)`, `onMessage`, `onPeers`, `close()`.
- Deux implémentations :
  - `peer-transport.ts` : PeerJS (chargé à la demande, chunk séparé), hôte = Peer d'id `m2rev-<CODE>`, invités = Peer anonymes qui se connectent à l'hôte (topologie en étoile), STUN `stun.l.google.com:19302` et `stun1.l.google.com:19302`.
  - `local-transport.ts` : onglets d'un même navigateur via `BroadcastChannel` (tests automatisés, repli hors-ligne T18). Même protocole en étoile.
- Si le test manuel est concluant : **PeerJS retenu**, on enchaîne sur T17. Sinon : nouvelle ADR proposant un transport alternatif (par exemple signalisation manuelle par QR/copier-coller, ou relais TURN) à brancher derrière la même interface, avant T17.

## Protocole de test manuel (à faire par l'utilisatrice)

Page de test : **`#/jouer/test`** de l'app déployée (HTTPS obligatoire pour WebRTC hors `localhost`). Laisser le transport sur **« Internet (PeerJS) »**.

Matériel : 3 appareils (idéalement 2 Android + 1 iPhone, ou ce que tu as ; noter les modèles et navigateurs). Appelons-les **P** (celui qui partage sa connexion mobile, en 4G/5G), **A** et **B** (connectés au Wi-Fi/point d'accès de P).

Préparation :
1. Sur P, activer le partage de connexion. Sur A et B, se connecter à ce point d'accès (couper la 4G/5G de A et B pour être sûre que le trafic passe par P).
2. Sur chaque appareil, ouvrir `https://<site>/#/jouer/test` (adresse de l'app déployée, voir `05-deploiement.md`, suivie de `#/jouer/test`).

**Scénario 1 : l'hôte est le téléphone qui partage (P)**
1. P : « Créer une salle », noter le code.
2. A : saisir le code, « Rejoindre ». Noter OK/échec et le message d'erreur éventuel.
3. B : idem.
4. P voit-il A et B dans la liste ? A et B voient-ils l'hôte ?
5. Sur chaque appareil, appuyer 5 fois sur « Ping » (espacés d'une seconde). Noter le RTT affiché (min / moy / max).
6. Laisser la salle ouverte 2 minutes en mettant l'écran de A en veille 20 secondes puis en le rallumant : la connexion survit-elle ? (noter oui/non)

**Scénario 2 : l'hôte est un invité (A)**
1. Quitter la salle sur tous les appareils.
2. A : « Créer une salle », noter le code.
3. P puis B : rejoindre avec ce code. Noter OK/échec.
4. Pings (5 par appareil), relever les RTT.

**Scénario 3 (si possible) : hors partage de connexion**
Tous sur le même Wi-Fi (box), puis un appareil en 4G sans Wi-Fi : relever OK/échec. Cela distingue « PeerJS marche mal » de « ce partage-là bloque ».

Interprétation :
- Échec avec message « Aucune salle avec ce code » : le code est faux, ou l'hôte a quitté / n'a pas fini d'ouvrir sa salle.
- Échec avec « L'hôte ne répond pas » (délai 12 s) : signalisation OK mais connexion directe impossible (NAT) → à noter, c'est le cas qui motive un transport alternatif.
- Échec avec « Le serveur de rencontre est injoignable » : signalisation publique indisponible ou bloquée (à retenter plus tard, puis à noter).

### Résultats (à remplir, rien n'a été mesuré à ce jour)

Appareils : P = `…` · A = `…` · B = `…` · Date : `…`

| # | Scénario | Hôte | Invité | Connexion (OK / échec + message) | RTT min / moy / max (ms) | Reste connecté après veille 20 s (oui/non) | Remarques |
|---|----------|------|--------|----------------------------------|--------------------------|--------------------------------------------|-----------|
| 1a | Hôte = téléphone qui partage | P | A | | | | |
| 1b | Hôte = téléphone qui partage | P | B | | | | |
| 2a | Hôte = invité | A | P | | | | |
| 2b | Hôte = invité | A | B | | | | |
| 3a | Même Wi-Fi (box), sans partage | | | | | | |
| 3b | Un appareil en 4G, les autres en Wi-Fi | | | | | | |

Verdict (à remplir) : PeerJS OK pour T17 ☐ oui ☐ non, alternative à étudier.

## Conséquences

- Tant que le tableau est vide, T17 ne démarre pas (T16 reste « doing »).
- Le chunk PeerJS (~87 Ko, ~23 Ko gzip) est chargé uniquement à l'ouverture de la page de test (puis du jeu) ; le bundle de démarrage n'augmente pas.
- Les tests automatisés n'utilisent jamais le réseau public : ils passent par `LocalTransport`.
- Limite assumée : sans TURN, une partie des réseaux (CGNAT, pare-feux d'entreprise) ne permettra pas de jouer à distance ; le mode passe-téléphone (T18) reste le repli.
