---
id: T21
title: "Bouton « Signaler une erreur »"
lot: 2
status: todo
depends: [T11]
agent: builder
---

# T21 — Bouton « Signaler une erreur »

## Objectif
Fermer la boucle qualité : chacun des 3 utilisateurs peut signaler en 10 secondes une erreur de contenu, que les agents corrigent ensuite (`/corriger-signalements`).

## À lire d'abord
- `docs/06-qualite-contenu.md` §8

## À faire
1. Icône `Flag` discrète sur chaque bloc d'histoire, terme, question, corrigé → `Sheet` : type (erreur de fond · question ambiguë · trop facile · anglais incorrect · autre) + commentaire libre.
2. Envoi : ouvre `https://github.com/<owner>/<repo>/issues/new?labels=signalement&title=…&body=…` (owner/repo dans `src/config.ts`) avec `itemId`, chapitre, extrait du texte, type, commentaire, version de l'app. Repli si pas de compte GitHub : bouton « Copier le signalement » (presse-papiers).
3. Liste locale « Mes signalements » dans le profil.

## Critères d'acceptation
- [ ] Le lien ouvre une issue pré-remplie et lisible
- [ ] Le corps contient tout ce qu'il faut au fact-checker (id, fichier, texte)
- [ ] `npm run check` vert

## Hors périmètre
Envoi sans GitHub vers un serveur.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
