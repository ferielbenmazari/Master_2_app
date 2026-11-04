---
name: etat-projet
description: Fait le point sur l'avancement - tâches du backlog par statut, contenu disponible par matière, prochaine action conseillée. Lecture seule. Usage - /etat-projet
---

# /etat-projet

1. Lire le frontmatter (`id`, `title`, `status`, `lot`, `depends`) de toutes les fiches `backlog/T*.md` et `backlog/C*.md`.
2. Pour chaque `content/*/` : nombre de chapitres (`draft` / `reviewed`), nombre de partiels, tableau du PLAN.md.
3. `git log --oneline -10`.
4. Répondre avec :
   - une barre de progression texte par lot (`Lot 1 ▓▓▓▓░░ 4/6`) ;
   - le tableau du contenu par matière ;
   - la **prochaine action conseillée** (la tâche débloquée de plus petit numéro, ou le chapitre prioritaire si un contrôle approche — dates dans `course.json.examDate`).
Ne rien modifier.
