---
id: T11
title: "PWA hors-ligne + déploiement Cloudflare Pages  ★ JALON MVP"
lot: 1
status: todo
depends: [T09, T10, T20]
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
7. e2e : charger l'app, passer hors-ligne (`context.setOffline(true)`), recharger, ouvrir REC1-05 → OK.

## Critères d'acceptation
- [ ] Lighthouse mobile : PWA installable, Performance ≥ 85
- [ ] Test e2e hors-ligne vert
- [ ] Build déployable tel quel sur Cloudflare Pages (preset Vite, sortie `dist`)
- [ ] `npm run check` vert

## Hors périmètre
Notifications push.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
