---
id: T08
title: "Quiz Vrai/Faux justifié + QCM"
lot: 1
status: done
depends: [T07]
agent: builder
---

# T08 — Quiz Vrai/Faux justifié + QCM

## Objectif
S'entraîner au format des partiels avec correction expliquée.

## À lire d'abord
- `docs/00-besoin.md` (Règle bilingue)
- `docs/design/maquette.html` (écran 04)
- `docs/03-modele-contenu.md` (QuizItem)

## À faire
1. `src/features/quiz/QuizCard.tsx` (réutilisable) :
   - `true_false` : boutons VRAI / FAUX. Si l'élève choisit FAUX, champ facultatif « Ta justification » avant de valider (consigne des partiels).
   - `mcq` : options cochables (plusieurs bonnes réponses possibles) + « Valider ».
   - Énoncé dans `trainLang`, lien « voir en FR/EN » ; correction **dans les deux langues** ; si justification saisie, l'afficher à côté de la `justification` officielle.
   - Correction : bouton Source (citations du `src`), badge de niveau (`remember` → « Mémoire », `understand` → « Compréhension », `apply` → « Application », `analyze` → « Analyse »).
   - Bonne réponse : `flashOk` + `comboBurst(combo, xp)` (+10 XP, +5 par combo). Mauvaise : `flashKo` (vignette rouge + secousse), combo remis à 0.
   - Minuteur circulaire facultatif (réglage).
2. `QuizRunner` (`…/quiz`) : items mélangés, compteur `Q.03 / 10` (Unbounded + JetBrains Mono, voir maquette 04), écran final (score, liste des erreurs avec lien vers le passage du cours si possible, bouton « Refaire mes erreurs »).
3. Enregistrer chaque réponse via `recordAttempt`.
4. Brancher les blocs `checkpoint` du lecteur sur `QuizCard`.
5. Tests : logique de correction (mcq multi-réponses exacte), mélange stable avec graine.

## Critères d'acceptation
- [x] Les 10 items de REC1-05 jouables
- [x] « Refaire mes erreurs » ne repropose que les erreurs
- [x] Animations coupées en reduced-motion
- [x] `npm run check` vert

## Hors périmètre
Partiels chronométrés (T14).

## Journal
- 2026-11-04 : `src/features/quiz/` (QuizCard réutilisable, QuizRunner/QuizSession/QuizFinal, logique pure `quiz-logic`/`quiz-session`/`quiz-view` testée), `src/lib/shuffle.ts` (mélange avec graine), blocs `checkpoint` du lecteur jouables sur place (`Checkpoint.tsx`, langue de lecture prioritaire, sinon `trainLang`), lien « Revoir le passage du cours » (`lire?q=<quizId>`) depuis l'écran final.
- Minuteur facultatif : pref `quizTimer` (0/15/30/60 s, défaut 0) réglable dans Profil ; temps écoulé = faux.
- XP : +10 par bonne réponse, +5 dès le combo x2, affichage seulement (pas de magasin avant T12). Tests Vitest + e2e Playwright (parcours complet REC1-05, clavier, reduced-motion, checkpoint).
- Écarts : un seul « essai » par question ; pas de liste d'erreurs persistée (la manche d'erreurs vit en session).
