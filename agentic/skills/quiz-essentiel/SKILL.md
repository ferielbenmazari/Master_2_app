---
name: quiz-essentiel
description: PHASE 2 - une fois les cours d'une matière rédigés, ajoute à chaque chapitre 10 à 15 quiz au format exact du prof, fondés uniquement sur le cours du chapitre, avec checkpoints et vérification des réponses. Économe, sans sous-agents. Usage - /quiz-essentiel rec1 (tous les chapitres) ou /quiz-essentiel rec1 02
---

# /quiz-essentiel <courseId> [nn] — Phase 2 : les quiz

## Pré-condition
Tous les chapitres de la matière ayant des lignes `[x]` dans `PROGRAMME.md` ont leur cours (`story` non vide). Sinon : le dire et proposer `/cours-essentiel` pour les chapitres manquants. (Si `[nn]` est fourni, seul ce chapitre est requis.)

## Règles d'économie
Pas de sous-agent. Lire seulement : le chapitre JSON, `PROFIL-PROF.md` (sections 1 à 3, 7), `docs/06-qualite-contenu.md` §5, et les passages cités dans le chapitre. Un chapitre à la fois ; si plusieurs, enchaîner mais **commit + push après chacun**.

## Règle pédagogique (docs/06 §9.5)
Chaque question vise un `objective` du chapitre et, si une confusion classique existe, la nomme dans `trap`. Jamais de question sur un encadré `repere` ni sur le résultat d'un exercice du cours.

## Pour chaque chapitre
1. Quiz de **10 à 15 items** tirés **uniquement** du cours du chapitre (les `src` existants ; les compléments « Pour aller plus loin » au plus 1 question) :
   - **format du prof** (ISI1 : V/F « justifiez si et seulement si FAUX », énoncés longs et presque vrais ; REC1 : questions de la consigne — quand appliquer, pourquoi, menaces… ; sinon V/F + QCM) ;
   - priorité aux lignes ★ du PROGRAMME ; chaque ligne `[x]` du chapitre a au moins 1 question ;
   - niveaux : ≤ 30 % `remember`, ≥ 35 % `apply` + `analyze` ; distracteurs = vraies confusions (pièges du profil, `pitfall` du glossaire) ; justification bilingue même quand c'est VRAI ;
   - chaque item avec `src` (citation exacte) et `level` ;
   - **annales d'abord** : si un V/F ou une question d'annale (`tier: annale` dans `sources.json`) porte sur une notion du chapitre et que la réponse est établie par le cours, la reprendre avec sa tournure, avec deux `src` (l'annale + le passage du cours qui donne la réponse), id `<chapitre>-qz-annale-<k>`. Sinon ne pas l'utiliser ;
   - **citations utiles** : 6 à 25 mots, et chaque `src` doit **porter** l'affirmation ou la correction (pas de citation voisine ajoutée pour faire nombre). Jamais moins de 4 mots ;
   - **QCM** : la bonne réponse n'est la plus longue que dans ≤ 1/3 des QCM, et sa position varie ; **V/F** : 40-65 % de FAUX, et les mots absolus (« toujours », « jamais », « uniquement »…) aussi dans des énoncés VRAIS.
2. Insérer un `checkpoint` à la fin de chaque épisode (avant le `heading` suivant et en fin de chapitre), pointant vers un quiz de l'épisode.
3. `npm run validate:content` → 0 erreur, **0 avertissement de quiz** sur le chapitre (« question évidente », « réponse la plus longue », « % de FAUX », « citation de N mots »).
4. **Vérification des réponses** : pour chaque item, relire le passage cité ; la bonne réponse doit être indiscutable et chaque distracteur faux. Test de l'étudiant pressé : devinable sans le cours ? → réécrire.
5. `git add -A && git commit -m "content(<id>): quiz du chapitre <nn>" && git pull --rebase && git push`.

## Réponse
Par chapitre : nb de quiz, répartition V/F/QCM et niveaux, lignes ★ couvertes. Puis « tape /clear ».
