---
name: quiz-essentiel
description: PHASE 2 - une fois les cours d'une matière rédigés, ajoute à chaque chapitre 10 à 15 quiz au format exact du prof, fondés uniquement sur le cours du chapitre, avec checkpoints et vérification des réponses. Économe, sans sous-agents. Usage - /quiz-essentiel rec1 (tous les chapitres) ou /quiz-essentiel rec1 02
---

# /quiz-essentiel <courseId> [nn] — Phase 2 : les quiz

## Pré-condition
Tous les chapitres de la matière ayant des lignes `[x]` dans `PROGRAMME.md` ont leur cours (`story` non vide). Sinon : le dire et proposer `/cours-essentiel` pour les chapitres manquants. (Si `[nn]` est fourni, seul ce chapitre est requis.)

## Règles d'économie
Pas de sous-agent. Lire seulement : le chapitre JSON, `PROFIL-PROF.md` (sections 1 à 3, 7), `docs/06-qualite-contenu.md` §5, et les passages cités dans le chapitre. Un chapitre à la fois ; si plusieurs, enchaîner mais **commit + push après chacun**.

## Pour chaque chapitre
1. Quiz de **10 à 15 items** tirés **uniquement** du cours du chapitre (les `src` existants ; les compléments « Pour aller plus loin » au plus 1 question) :
   - **format du prof** (ISI1 : V/F « justifiez si et seulement si FAUX », énoncés longs et presque vrais ; REC1 : questions de la consigne — quand appliquer, pourquoi, menaces… ; sinon V/F + QCM) ;
   - priorité aux lignes ★ du PROGRAMME ; chaque ligne `[x]` du chapitre a au moins 1 question ;
   - niveaux : ≤ 30 % `remember`, ≥ 35 % `apply` + `analyze` ; distracteurs = vraies confusions (pièges du profil, `pitfall` du glossaire) ; justification bilingue même quand c'est VRAI ;
   - chaque item avec `src` (citation exacte) et `level`.
2. Insérer un `checkpoint` à la fin de chaque épisode (avant le `heading` suivant et en fin de chapitre), pointant vers un quiz de l'épisode.
3. `npm run validate:content` → 0 erreur, traiter les avertissements « question évidente ».
4. **Vérification des réponses** : pour chaque item, relire le passage cité ; la bonne réponse doit être indiscutable et chaque distracteur faux. Test de l'étudiant pressé : devinable sans le cours ? → réécrire.
5. `git add -A && git commit -m "content(<id>): quiz du chapitre <nn>" && git pull --rebase && git push`.

## Réponse
Par chapitre : nb de quiz, répartition V/F/QCM et niveaux, lignes ★ couvertes. Puis « tape /clear ».
