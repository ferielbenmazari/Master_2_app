---
id: T22
title: "Flashcards tirées automatiquement du glossaire"
lot: 1
status: todo
depends: [T09]
agent: builder
---

# T22 — Flashcards tirées automatiquement du glossaire

## Objectif
Aujourd'hui, 21 chapitres sur 22 ont `flashcards: []` : l'écran Flashcards est vide presque partout. Or les 22 chapitres ont un glossaire **déjà sourcé** (≈ 240 termes). On en tire des cartes côté app, sans générer de contenu : 0 coût, 0 risque d'invention.

## À lire d'abord
- `docs/03-modele-contenu.md` (Term, Flashcard) · `docs/06-qualite-contenu.md` §6.7 (deux angles)
- `src/features/flashcards/deck-cards.ts`, `src/store/fsrs.ts`

## À faire
1. `src/features/flashcards/glossary-cards.ts` (pur, testé) : pour chaque `Term` d'un chapitre, 2 cartes virtuelles
   - **terme → définition** : recto = terme (`fr`/`en` selon la langue), verso = `definition` (+ `example` et `pitfall` s'ils existent) ;
   - **définition → terme** : recto = `definition`, verso = terme.
   Les deux portent `termId` (la puce Source affiche donc les `src` du terme). Ids **stables** : `<chapterId>-gl-<termId>-a` / `-b` (l'historique FSRS ne doit pas se perdre).
2. Dans `indexCards` : ajouter ces cartes **après** les flashcards écrites à la main ; ne pas créer de carte pour un `termId` déjà couvert par une flashcard écrite à la main dans le même chapitre. Un même `term.id` défini dans plusieurs chapitres ne donne des cartes qu'**une fois** (premier chapitre dans l'ordre).
3. Compteur de la tuile Flashcards du hub (`ChapterHub.tsx`) = cartes écrites + cartes du glossaire.
4. Tests : ids stables, pas de doublon inter-chapitres, priorité aux cartes écrites, langue FR/EN.

## Critères d'acceptation
- [ ] Chaque chapitre a ≥ 8 flashcards dans l'app, ≈ 470 au total (vérifié par un test sur le contenu réel ; INF4-02 est le plus petit : 4 termes propres)
- [ ] L'historique FSRS des 10 cartes de REC1-05 est conservé (ids inchangés)
- [ ] La puce Source d'une carte du glossaire montre les citations du terme
- [ ] `npm run check` vert

## Hors périmètre
Générer des flashcards dans les JSON (c'est le travail des agents de contenu, plus tard).

## Journal
