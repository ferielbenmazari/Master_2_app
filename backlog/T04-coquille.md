---
id: T04
title: "Coquille de l'app : routes, navigation, préférences, onboarding"
lot: 0
status: todo
depends: [T02, T03]
agent: builder
---

# T04 — Coquille de l'app : routes, navigation, préférences, onboarding

## Objectif
Une app navigable sur mobile et desktop, avec préférences mémorisées.

## À lire d'abord
- `docs/01-architecture.md` (Données locales)
- `docs/02-design-system.md` (Mise en page)
- `docs/design/maquette.html` (.nav, .desk/.rail)

## À faire
1. `HashRouter` + routes dans `src/routes.tsx` :
   `/` · `/reviser` · `/jouer/*` · `/profil` · `/styleguide` · `/matiere/:courseId` · `/matiere/:courseId/glossaire` · `/matiere/:courseId/partiel/:examId` · `/matiere/:courseId/chapitre/:chapterId` · `…/chapitre/:chapterId/(lire|fiche|flashcards|quiz|exercices|anglais)`. Pages non encore faites → `EmptyState` « Bientôt ici ».
2. `src/components/layout/AppLayout.tsx` : barre du bas (< 768 px : Base · Réviser · Arène · Profil, icônes lucide, indicateur lumineux), rail d'icônes gauche (≥ 1024 px), `Ambient` en fond.
3. `src/components/layout/CourseScope.tsx` : pose `--course` (couleur de la matière) sur son conteneur pour toutes les routes `/matiere/:courseId/**`.
4. `src/store/prefs.ts` : `{ pseudo, avatar, theme: 'system'|'light'|'dark', langMode: 'fr'|'both'|'en', trainLang: 'fr'|'en' }`, localStorage `m2rev:prefs` (try/catch), contexte React `PrefsProvider` + `usePrefs()`. Le thème pose `data-theme` sur `<html>`.
5. Onboarding au premier lancement (pas de pseudo) : `Sheet` « Choisis ton pseudo » + choix d'une couleur d'avatar (`HexAvatar` avec initiales, 5 couleurs de la palette). Pas de nom en dur nulle part.
6. `src/i18n/ui.ts` : toutes les chaînes d'interface.
7. Tests : prefs persistées et relues ; route inconnue → redirection `/`.

## Critères d'acceptation
- [ ] Navigation fonctionnelle mobile (barre du bas) et desktop (rail)
- [ ] Thème et mode langue persistés après rechargement
- [ ] Onboarding affiché une seule fois
- [ ] e2e : premier lancement → pseudo → accueil
- [ ] `npm run check` vert

## Hors périmètre
Contenu réel des pages (T06+).

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
