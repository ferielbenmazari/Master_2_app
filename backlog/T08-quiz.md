---
id: T08
title: "Quiz Vrai/Faux justifié + QCM"
lot: 1
status: todo
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
- [ ] Les 10 items de REC1-05 jouables
- [ ] « Refaire mes erreurs » ne repropose que les erreurs
- [ ] Animations coupées en reduced-motion
- [ ] `npm run check` vert

## Hors périmètre
Partiels chronométrés (T14).

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
