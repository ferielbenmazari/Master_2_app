---
id: T24
title: "Dette de revue : réserves T04-T08"
lot: 2
status: todo
depends: [T11]
agent: builder
---

# T24 — Dette de revue : réserves T04-T08

## Objectif
Solder les réserves notées par le `reviewer` dans `backlog/IDEES.md` qui gênent l'usage réel sur téléphone.

## À faire (par ordre d'importance)
1. **Quiz** : persister la manche en cours (Dexie, via `src/store/*`) pour que « Revoir le passage » ou un changement d'appli ne la perde pas ; reprendre là où on en était.
2. **iPhone** : `env(safe-area-inset-bottom)` sous la barre du bas.
3. **Onboarding** : piège du focus dans le `Sheet`, focus initial sur le champ pseudo, bouton « fermer » fonctionnel ou retiré ; `trim()` du pseudo et `maxLength` 24 appliqué dans `loadPrefs` ; pas de « Salut » sans pseudo.
4. **Chargement** : `.catch` sur `Course.tsx` / `ChapterHub.tsx` avec un message d'erreur lisible ; `daysUntil` renvoie `null` pour une date impossible.
5. **Accessibilité** : `aria-current` sur « Base » pour `/matiere/*` ; puces de terme inline ≥ 44 px de zone tactile (pseudo-élément).
6. Rayer chaque réserve traitée dans `IDEES.md`.

## Critères d'acceptation
- [ ] Une manche de quiz survit à un aller-retour vers le lecteur (test e2e)
- [ ] Captures mobile 390×844 sans chevauchement de la barre du bas
- [ ] `npm run check` vert

## Journal
