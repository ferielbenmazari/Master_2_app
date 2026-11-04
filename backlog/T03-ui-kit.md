---
id: T03
title: "Design tokens et kit UI « Arena Warm » (Style 3)"
lot: 0
status: todo
depends: [T01]
agent: builder
---

# T03 — Design tokens et kit UI « Arena Warm » (Style 3)

## Objectif
Disposer de tous les éléments visuels de la maquette sous forme de composants réutilisables.

## À lire d'abord
- `docs/02-design-system.md` (en entier)
- `docs/design/maquette.html` (**référence** ; CSS : tokens, `.panel` + variantes, `.brackets`, `.btn`, `.tag`, `.xpbar`, `.segbar`, `.hex`, `.term`, `.glitch`, `.aura`, `.squiggle`, `.radar`, `.timer` ; JS : particules, scramble, countUp, tilt) — **ne pas** s'inspirer de `maquette-style1.html` ni `maquette-style2.html` (archives)

## À faire
1. Installer `motion`, `canvas-confetti` (+ types), `lucide-react`, `@fontsource/unbounded`, `@fontsource/manrope`, `@fontsource/jetbrains-mono` (graisses utilisées seulement).
2. `src/styles/tokens.css` : **reprendre exactement** les variables de la maquette (sombre par défaut via `[data-theme]`, clair). Exposer à Tailwind v4 via `@theme` (couleurs, polices).
3. `src/styles/global.css` : base, focus visible, classes utilitaires de la maquette (`.panel` et variantes, `.btn`, `.tag`, `.hl`…), règles `prefers-reduced-motion`.
4. `src/store/effects.ts` : niveau d'effets `full | light | off` (défaut `full`, `off` si reduced-motion) + hook `useEffectsLevel()`.
5. Composants `src/components/ui/` (liste de `docs/02` §Composants) ; `Ambient` = auras + grille + lignes d'écran + particules (un seul canvas, pause quand l'onglet est masqué, coupé en `off`, sans particules en `light`).
6. `src/lib/celebrate.ts` : `comboBurst(n, xp)`, `flashOk()`, `flashKo(el)` (secousse) — no-op en `off`.
7. Page `src/pages/Styleguide.tsx` : chaque composant en sombre et clair ; affichée temporairement depuis `App.tsx`.
8. Tests : rendu de chaque composant ; `LangToggle` appelle `onChange` ; effets coupés en `off`.

## Critères d'acceptation
- [ ] Styleguide fidèle à `docs/design/maquette.html` (captures mobile + desktop, sombre + clair, comparées côte à côte)
- [ ] Aucune couleur hexadécimale ni emoji dans `src/components/**` (grep)
- [ ] Polices chargées hors-ligne (aucun appel à fonts.googleapis.com)
- [ ] `prefers-reduced-motion` émulé → plus d'auras, particules, glitch, scramble
- [ ] Performance : le canvas d'ambiance consomme < 5 % CPU au repos (onglet Performance)
- [ ] `npm run check` vert

## Hors périmètre
Navigation, pages réelles.

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
