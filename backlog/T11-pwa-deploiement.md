---
id: T11
title: "PWA hors-ligne + déploiement Cloudflare Pages  ★ JALON MVP"
lot: 1
status: done
depends: [T09, T10]
agent: builder
---

# T11 — PWA hors-ligne + déploiement Cloudflare Pages  ★ JALON MVP

## Objectif
Installer l'app sur téléphone, l'utiliser sans réseau, et la partager par une URL.

## À lire d'abord
- `docs/05-deploiement.md`

## À faire
1. Installer `vite-plugin-pwa` : `registerType: 'autoUpdate'`, manifest (nom « Révision M2 », `short_name` « Révision », couleurs des tokens, `display: standalone`), précache de tout le build (html, js, css, woff2, json, svg, png).
2. Icône : `public/icon.svg` (style sticker punk, « M2 » sur fond lime, bordure encre) + `scripts/make-icons.ts` qui génère 192/512/maskable PNG avec Playwright (déjà en dépendance).
3. Toast « Nouvelle version disponible » quand le service worker se met à jour.
4. `.github/workflows/check.yml` : `npm ci && npm run check` sur chaque push/PR.
5. `.github/workflows/deploy-gh-pages.yml.disabled` (alternative documentée, désactivée).
6. Mettre à jour `README.md` (section « Mettre en ligne ») si besoin.
6 bis. **Node 24** : `ts-fsrs` exige Node ≥ 24. Ajouter `.nvmrc` (`24`) et `"engines": { "node": ">=24" }` ; dans `docs/05-deploiement.md`, indiquer la variable Cloudflare Pages `NODE_VERSION=24`. Même version dans les workflows GitHub.
6 ter. `docs/05-deploiement.md` : passer l'accès restreint (Cloudflare Access, emails des 3 utilisateurs) de « optionnel » à **recommandé** — l'app publie des extraits des supports des profs.
7. e2e : charger l'app, passer hors-ligne (`context.setOffline(true)`), recharger, ouvrir REC1-05 → OK.

## Critères d'acceptation
- [x] Lighthouse mobile : PWA installable (manifeste, SW, icônes vérifiés par e2e) ; Performance ≥ 85 **non atteint : 0,75-0,80 accepté pour le MVP** (décision utilisatrice)
- [x] Test e2e hors-ligne vert
- [x] Build déployable tel quel sur Cloudflare Pages (preset Vite, sortie `dist`)
- [x] `npm run check` vert

## Hors périmètre
Notifications push.

> 2026-11-06 (revue) : T20 retiré des dépendances — on met en ligne d'abord, l'Express suivra (voir `backlog/SPRINT.md`).

## Journal
2026-11-06 — PWA (vite-plugin-pwa, autoUpdate, précache complet), icônes (scripts/make-icons.ts), toast de mise à jour, workflows GitHub (check + gh-pages désactivé), Node 24, docs de déploiement, e2e hors-ligne.
Écarts : Lighthouse mobile Performance 0,75-0,80 (seuil 0,85, variance ~0,05) ; bundle d'entrée ~535 Ko (react-dom, router, zod, dexie). Routes en lazy, polices préchargées, SW enregistré après `load`. Accepté pour le MVP, optimisation notée dans IDEES.md.
Toast de mise à jour testé en unitaire seulement (autoUpdate recharge la page ; drapeau sessionStorage). Score « PWA » absent de Lighthouse 13 : installabilité vérifiée par e2e.
`tests/e2e/flashcards.spec.ts:23` instable (préexistant).
