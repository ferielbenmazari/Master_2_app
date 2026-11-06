---
name: etat-projet
description: Fait le point sur l'avancement - tâches du backlog par statut, contenu disponible par matière, prochaine action conseillée. Lecture seule. Usage - /etat-projet
---

# /etat-projet

1. Lire le frontmatter (`id`, `title`, `status`, `lot`, `depends`) de toutes les fiches `backlog/T*.md` et `backlog/C*.md`.
2. Pour chaque `content/*/` : par chapitre, `status`, nombre de questions de `quiz`, de `flashcards` et d'`exercises` (un `node -e` sur les JSON suffit) ; nombre de partiels.
2 bis. `npm run validate:content | tail -1` : erreurs, avertissements, couverture ★★★.
2 ter. Si `backlog/SPRINT.md` existe : quelles lignes du sprint en cours sont faites.
3. `git log --oneline -10`.
4. Répondre avec :
   - une barre de progression texte par lot (`Lot 1 ▓▓▓▓░░ 4/6`) ;
   - le tableau du contenu par matière ;
   - la **prochaine action conseillée** : la prochaine ligne non faite de `SPRINT.md` (APP et CONTENU), sinon la tâche débloquée de plus petit numéro, ou le chapitre prioritaire si un contrôle approche (dates dans `course.json.examDate`) ;
   - les actions qui attendent **l'utilisatrice** (sources à valider, `PROGRAMME.md` non coché, `examDate` manquante).
Ne rien modifier.
