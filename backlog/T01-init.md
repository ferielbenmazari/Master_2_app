---
id: T01
title: "Initialiser le projet (Vite + React + TS + Tailwind)"
lot: 0
status: todo
depends: []
agent: builder
---

# T01 — Initialiser le projet (Vite + React + TS + Tailwind)

## Objectif
Avoir un projet qui démarre, se teste et se vérifie avec une seule commande.

## À lire d'abord
- `CLAUDE.md`
- `docs/01-architecture.md` (stack, arborescence, scripts)
- `docs/05-deploiement.md` (scripts attendus)

## À faire
1. Générer le squelette **dans un dossier temporaire** (`npm create vite@latest /tmp/scaffold -- --template react-ts`) puis copier dans le repo **sans écraser** `docs/`, `backlog/`, `content/`, `ressources/`, `.claude/`, `CLAUDE.md`, `README.md`.
2. Installer : `react-router`, `tailwindcss` + `@tailwindcss/vite`, `zod`, dev : `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `eslint` (config Vite par défaut), `prettier`, `tsx`, `@playwright/test`.
3. `vite.config.ts` : `base: './'`, alias `@` → `src`, plugin Tailwind, config Vitest (`environment: 'jsdom'`, `setupFiles` jest-dom).
4. `tsconfig` : `strict: true`, `noUncheckedIndexedAccess: true`, paths `@/*`.
5. Scripts `package.json` : `dev`, `build` (`tsc -b && vite build`), `preview`, `test` (`vitest run`), `validate:content` (`tsx scripts/validate-content.ts` — créer un script provisoire qui affiche « validation à implémenter (T02) » et sort en 0), `lint`, `e2e` (`playwright test`), `check` (`tsc -b --noEmit && npm run lint && npm run test && npm run validate:content`).
6. `.gitignore` : `node_modules`, `dist`, `tests/screens`, `playwright-report`, `test-results`, `.cache`, `.DS_Store`.
7. `src/App.tsx` minimal : titre « Révision M2 » ; un test Vitest qui vérifie ce titre.
8. `playwright.config.ts` (webServer = `npm run dev`, projet chromium mobile 390×844) + `tests/e2e/smoke.spec.ts` qui ouvre `/` et voit le titre.

## Critères d'acceptation
- [ ] `npm install && npm run check` passe au vert
- [ ] `npm run build` produit `dist/`
- [ ] `npm run e2e` passe
- [ ] Aucun fichier de `docs/`, `backlog/`, `content/`, `ressources/`, `.claude/` modifié
- [ ] `npm run check` vert

## Hors périmètre
Design, routing, contenu.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
