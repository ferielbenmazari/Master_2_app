---
name: ajouter-cours
description: Pipeline qualité complet pour ajouter ou compléter une matière - sources classées, extraction PDF, carte des notions et profil du prof, puis chapitres rédigés, vérifiés (fact-checker) et relus (pédagogie, style du prof), partiels corrigés, validation et commit. Usage - /ajouter-cours isi1 [nn]
---

# /ajouter-cours <courseId> [nn]

Références obligatoires : `docs/06-qualite-contenu.md` (qualité) et `docs/04-pipeline-contenu.md` (étapes).
Agents : content-extractor → course-analyst → (content-author → fact-checker → content-reviewer) × chapitres.

## 0. Préparer
- Vérifier que le serveur MCP `m2-sources` répond (`list_sources`). Sinon, utiliser `npm run sources -- …` et le signaler.
- Si `content/<id>/course.json` n'existe pas : le créer (modèle `content/rec1/course.json`) en demandant titre FR/EN, prof, couleur (lime | coral | cyan | gold | orange), icône lucide, date de contrôle.

## 1. Sources (si `sources.json` absent ou `status` « proposé »)
Agent **content-extractor** (inventaire). Montrer à l'utilisatrice : nombre de fichiers par niveau, doublons écartés, fichiers classés `complement`. **Attendre sa validation**, puis passer `status` à `validé`.

## 2. Extraction
Agent **content-extractor** (extraction) pour les sources sans texte. `npm run sources -- index <id>`. Commit `content(<id>): sources et extraction`.

## 3. Analyse (si `notions.json` absent ou partiel)
Agent **course-analyst**. Montrer : notions par importance et par chapitre, les ★★★, formats d'examen, incertitudes. **Attendre la validation.** Commit `content(<id>): carte des notions et profil du prof`.

## 4. Chapitres — un à la fois, dans l'ordre de priorité
Pour chaque ligne « à faire » du PLAN (ou seulement `[nn]`) :
1. **content-author** : « Rédige le chapitre <nn> de <id>. »
2. **fact-checker** : « Vérifie content/<id>/chapters/<fichier>. »
3. **content-reviewer** : « Relis content/<id>/chapters/<fichier>. »
4. Si le reviewer n'a pas pu passer en `reviewed` : un seul aller-retour supplémentaire (author ou fact-checker selon le problème), puis s'arrêter et exposer le blocage.
5. `npm run validate:content` + `npm run sources -- coverage <id>`, PLAN → « fait », commit `content(<id>): chapitre <nn> — <titre>`, puis `git pull --rebase && git push`.
6. Une ligne à l'utilisatrice : chapitre dispo, nb de corrections du fact-checker, couverture.

## 5. Partiels
Pour chaque ligne Partiels du PLAN : author (mode partiel) → fact-checker → reviewer → validate → commit `content(<id>): partiel <slug>`.

## 6. Bilan
Tableau : chapitres `reviewed` / restants, couverture ★★★ et ★★, notions introuvables dans les sources, corrections du fact-checker (total), prochaine étape.

## Garde-fous
- Jamais deux chapitres dans le même appel d'agent.
- Ne jamais passer outre une erreur de citation.
- Contrôle proche (`examDate` < 7 jours) : proposer de traiter d'abord les chapitres couvrant le plus de notions ★★★.
