---
name: next-task
description: Prend la prochaine tâche T** du backlog (ou celle passée en argument), la fait implémenter par l'agent builder, vérifier par l'agent reviewer, puis met à jour la fiche et commite. Usage - /next-task ou /next-task T07 (ou C00)
---

# /next-task — construire l'app tâche par tâche

## 1. Choisir la tâche
- Si un identifiant est fourni (`T07`), prendre `backlog/T07-*.md`.
- Sinon, si `backlog/SPRINT.md` existe : prendre la **première** tâche de la colonne/ligne APP du sprint en cours (Sprint 1, puis Sprint 2) dont la fiche a `agent: builder`, `status: todo` et toutes ses `depends:` à `done`.
- Sinon : parmi les fiches `backlog/*.md` avec `agent: builder` et `status: todo` dont toutes les tâches de `depends:` sont `done`, le plus petit numéro T**.
- Annoncer à l'utilisatrice en une phrase : quelle tâche, quel objectif.
- S'il n'y en a aucune : dire ce qui bloque (dépendances) et s'arrêter.

## 2. Construire
Lancer l'agent **builder** avec : « Implémente la tâche T07 (backlog/T07-….md). Suis ta méthode et rends ton rapport. »

## 3. Vérifier
Lancer l'agent **reviewer** avec : « Vérifie la tâche T07. Rapport du builder : <coller le rapport>. »
- **ACCEPTÉ** → étape 4.
- **À REPRENDRE** → relancer builder avec la liste de problèmes. **Maximum 2 allers-retours** ; au-delà, s'arrêter et exposer le blocage à l'utilisatrice (ne pas boucler).

## 4. Clore
1. Dans la fiche : `status: done`, cocher les critères `- [x]`, compléter « Journal » (date, résumé, écarts).
2. `npm run check` une dernière fois.
3. `git add -A && git commit -m "feat(T07): <titre court>"` (ou `fix`/`chore` selon la nature), puis `git pull --rebase && git push` (l'utilisatrice veut que chaque tâche terminée soit poussée).
4. Résumé à l'utilisatrice en 3 lignes max : ce qui marche maintenant, comment le voir (`npm run dev` → quelle page), tâche suivante.

## Garde-fous
- Ne jamais traiter deux tâches dans le même passage.
- Pousser uniquement sur `main`, uniquement après `npm run check` vert. Jamais de `--force`. Si le push échoue (conflit, réseau), s'arrêter et expliquer.
- Si la tâche demande une décision produit non tranchée dans `docs/`, poser la question au lieu de choisir.
