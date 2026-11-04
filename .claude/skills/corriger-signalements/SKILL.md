---
name: corriger-signalements
description: Traite les erreurs signalées depuis l'app (issues GitHub étiquetées « signalement ») - vérifie contre les sources avec le fact-checker, corrige le contenu, commente et ferme l'issue. Usage - /corriger-signalements
---

# /corriger-signalements

1. `gh issue list --label signalement --state open --json number,title,body` (si `gh` n'est pas connecté : demander à l'utilisatrice `gh auth login`).
2. Pour chaque issue : extraire `itemId`, chapitre, commentaire. Lancer **fact-checker** : « Signalement #N sur <itemId> dans <fichier> : <commentaire>. Vérifie contre les sources et corrige si nécessaire. »
3. Si corrigé : `npm run validate:content`, commit `fix(content): <itemId> (#N)`, `gh issue comment N` avec avant → après + source, `gh issue close N`.
4. Si le signalement est infondé : commenter avec la citation du cours qui confirme, fermer avec l'étiquette `conforme-au-cours`.
5. Bilan : issues traitées, corrections, rejets.
