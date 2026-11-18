---
name: rediger-cours
description: Rédige le cours d'une NOUVELLE matière (ou d'un chapitre manquant) directement au format structuré, orienté sommaire et réussite au partiel - sommaire priorisé validé d'abord, puis chapitres courts (notions à connaître, définitions, tableaux, méthodes + exemples corrigés, schémas du cours redessinés, liens entre notions), sans narratif. Remplace /cours-essentiel. Usage - /rediger-cours isi5 (sommaire puis chapitres) ou /rediger-cours isi5 03
---

# /rediger-cours <courseId> [chapitre]

**But** : dès la première version, un cours qui fait gagner du temps de révision et vise le partiel. Même méthode que `/refondre-cours`, mais on part des sources au lieu d'un ancien chapitre. La méthode de référence est `docs/06-qualite-contenu.md` **§11** (elle prime sur §6 et §9.2) ; ce skill en donne les étapes.

## 0. Pré-requis
- `content/<id>/sources.json` validé, texte des PDF extrait (`sources-texte/<id>/`), `notions.json` et `PROFIL-PROF.md` produits. Sinon : `/ajouter-cours <id>` étapes 1 à 3 (content-extractor, puis course-analyst), avec validation de l'utilisatrice.
- `content/<id>/PROGRAMME.md` rempli (vu en classe). Notes de cours (`ressources/S3__<ID>/NOTES/`) = source n°1 pour l'ordre et l'insistance.
- Lire : docs/06 §2, §9, §10, §11 ; un chapitre modèle (`node tools/cours/outline.mjs isi1 05 --blocs` et un extrait de `content/isi1/chapters/05-elicitation.json`) ; `PROFIL-PROF.md` ; les annales.

## 1. Sommaire priorisé (une fois par matière) — à faire valider
Si `content/<id>/SOMMAIRE.md` n'existe pas, l'écrire (même forme que `content/isi1/REFONTE-ARCHITECTURE.md`, sans la partie « diagnostic ») :
1. **Chaque notion classée A à E** avec sa preuve (annale + question, projet, insistance, simple slide) ; les notions vues en classe sans support → ⚠.
2. **Chapitres** dans un ordre logique (plan du prof), 5 à 12 min chacun ; les lectures sans signal d'examen en fiches de 5 min à la fin.
3. **Pour chaque chapitre** : parties et sous-parties **du plus important au moins important**, marquées *Dév.* / *Cond.* / *Repère* ; annales rattachées ; **schémas des supports** à redessiner.
4. Ce qui ne sera pas développé (parasites) ; **aucune notion qui peut tomber n'est écartée** : au pire, une ligne ou une case de tableau.

Montrer **le sommaire seul** à l'utilisatrice et **attendre sa validation**. Mettre `course.json.chapterOrder` à jour.

## 2. Écrire un chapitre (un par appel en mode économe)
**Citation d'abord** : pour chaque fait, trouver le passage (MCP `m2-sources` : `search_sources`, `read_source`), copier la citation exacte (6 à 25 mots qui portent le fait), puis rédiger. Rien sans `src`. Notion d'examen absente des supports : source externe fiable selon docs/06 §9.6, annoncée comme telle.

Vocabulaire du prof (docs/06 §11.2) : chaque terme employé par le prof (annales, titres de slides) reçoit une définition rapide sourcée et ses correspondances avec les autres classifications (tableau « axes »), même si les slides ne le définissent pas.

Structure de chaque partie (docs/06 §11.2) : `heading` numéroté, avec des **sous-parties** `subheading` « n.m » nommées par leur notion (3ᵉ niveau « n.m.k » : `level: 3`, si naturel) → `definition` → tableau ou liste **complète** → (`method` + **exemple corrigé**) → `exam` (annale, corrigé proposé) → `retenir` → `checkpoint`.
- **Liens** entre notions (« Le lien avec… », `synthesis.links`), renvois par titre de chapitre.
- **Schémas** : redessiner en `diagram` les schémas du cours qui portent une notion A/B (au moins un par chapitre dès que le cours en a) ; méthodes en arbre de décision, corrigés en « avant / après », familles en carte mentale, courbes en `xychart-beta`. Libellés en anglais, légende FR/EN.
- **Méta-données** : `question`, 3 à 5 `objectives`, `examFocus`, `prerequisites`, `next`, `synthesis`, `estimatedMinutes` (≈ mots / 180).
- **Style** : phrases directes, tutoiement possible, aucune accroche ni fil rouge romancé ; bilingue FR + EN B2 avec les termes exacts du cours.
- **Items** : en mode économe, `quiz` peut attendre `/quiz-essentiel` (phase 2) ; sinon quiz 10 à 15 au format du prof, flashcards, exercices (≥ 1 `analyze`, `examStyle` si annales), `writing` (4 kinds). `status: "draft"`.

## 3. Contrôles (docs/06 §11.3, pièges §11.4)
1. `npm run validate:content` : 0 erreur, 0 avertissement sur le chapitre ; `node tools/cours/outline.mjs <id> <nn>` : parties dans l'ordre de priorité, couverture des notions ★★★ / ★★ du chapitre.
2. `npm run check` vert (le test des schémas Mermaid en fait partie).
3. Schémas à l'écran : `npm run build`, `npx vite preview --port 4179 --strictPort` en arrière-plan (**jamais un second `npm run dev`**), `node tools/cours/capture-schemas.mjs <id> <chapterId> --out <scratchpad>/captures`, regarder les images, arrêter la prévisualisation.
4. Relecture : chaque bloc face à sa citation (même sens, rien d'ajouté), chaque ligne retenue du PROGRAMME traitée, aucun parasite.

## 4. Aligner et commiter
`PROGRAMME.md` (` → ch.<nn>` ou ` → ⚠ absent des supports`), `notions.json` (`chapter`), `course.json` (`chapterOrder`, `order`), fiche du backlog. Commit `content(<id>): chapitre <nn> — <titre>` puis `git pull --rebase && git push`.

## Réponse
Court : sommaire du chapitre, minutes de lecture, schémas, lignes du PROGRAMME couvertes / ⚠, points à confirmer. Suite : « /rediger-cours <id> <suivant> », ou « /quiz-essentiel <id> » quand tous les chapitres ont leur cours.
