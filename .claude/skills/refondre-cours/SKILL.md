---
name: refondre-cours
description: Refond un cours EXISTANT au format structuré, orienté sommaire et réussite au partiel (méthode validée sur ISI1) - diagnostic, sommaire priorisé à faire valider, réécriture chapitre par chapitre (notions à connaître, du plus important au moins important, rien qui peut tomber n'est supprimé), schémas du cours redessinés, contrôles à l'écran. Usage - /refondre-cours inf4 (toute la matière) ou /refondre-cours inf4 05 (un chapitre, sommaire déjà validé)
---

# /refondre-cours <courseId> [chapitre]

**But** : que l'étudiante révise vite et réussisse le partiel. Un chapitre refondu = les notions à connaître, triées par chances de tomber, bien présentées (définition, tableau, méthode, exemple corrigé, schéma), reliées entre elles. Pas un cours plus long : un cours mieux sélectionné, mieux hiérarchisé, mieux structuré.

Règle d'or de l'utilisatrice : **on synthétise tout ce qui peut tomber, on ne le supprime jamais ; on supprime seulement le parasite.**

## 0. Lire (obligatoire, une fois par session)
- `docs/06-qualite-contenu.md` **§9, §10 et §11** (la méthode ; §11 prime) et §2 (citations).
- Le modèle ISI1 : `content/isi1/REFONTE-ARCHITECTURE.md` (forme du document de sommaire) et un chapitre refondu, par ex. `node tools/cours/outline.mjs isi1 05 --blocs`, puis un extrait du JSON (`content/isi1/chapters/05-elicitation.json`).
- La matière : `content/<id>/course.json`, `PROFIL-PROF.md` (formats d'examen, pièges, exemples fétiches), `notions.json` (importance et preuve), `PROGRAMME.md` (vu en classe : `[x]`, `[ ]`, `[-]`), `PARCOURS.md` s'il existe, les annales (`content/<id>/exams/` et `ressources/S3__<ID>/Markdown/`), les notes de cours si présentes (`ressources/S3__<ID>/NOTES/`, source n°1).

## 1. Diagnostic (toute la matière)
`node tools/cours/outline.mjs <id>` puis, pour chaque chapitre, `node tools/cours/outline.mjs <id> <nn>`. Noter dans un tableau :
- le **secondaire trop développé** (chiffres, historique, cas industriels, débats, organismes, auteurs) ;
- les notions **A/B sous-exploitées** (tombées aux annales, demandées en projet, « terms to remember ») ;
- les **blocs logiques coupés** (une même notion répartie sur plusieurs chapitres) ;
- les **méthodes sans exemple corrigé**, les corrigés d'annales noyés dans le récit ;
- le **narratif** (accroches, fil rouge, « Imagine… ») ;
- les **schémas des supports absents** de l'app (chercher « Figure », les slides-schémas, les tableaux du prof).

## 2. Sommaire priorisé — à faire valider AVANT de réécrire
Écrire `content/<id>/REFONTE-ARCHITECTURE.md` (modèle : celui d'ISI1), court et lisible :
1. **Niveaux A à E** (docs/06 §9.1) : pour chaque notion, sa preuve (annale + question, projet, insistance du prof, simple slide).
2. **Architecture** : la liste des chapitres dans l'ordre (progression logique, souvent le plan du prof), avec durée estimée et niveau dominant. Les lectures sans signal d'examen deviennent des fiches de 5 min en fin de parcours.
3. **Sommaire de chaque chapitre** : parties et sous-parties **dans l'ordre de priorité au partiel**, chacune marquée *Dév.* (A/B), *Cond.* (C), *Repère* (D) ; les annales rattachées ; les **schémas du cours à redessiner**.
4. **Ce qui disparaît** (parasites) et ce qui est seulement condensé. Vérifier ligne à ligne qu'**aucune notion qui peut tomber** n'est dans « supprimé ».
5. **Lacunes** des sources (⚠ notions d'annale sans support) et correspondance ancien → nouveau.

Montrer à l'utilisatrice **le sommaire seul** (chapitres → parties), avec 3 à 5 lignes de justification, et **attendre sa validation**. Si elle a déjà validé la méthode, proposer de commencer par un **pilote** (le chapitre le plus rentable au partiel), puis enchaîner.

## 3. Réécrire, chapitre par chapitre (pilote d'abord)
**Technique conseillée** : écrire un script de construction dans le scratchpad (Python ou Node) qui assemble le JSON à partir de petits constructeurs de blocs et réutilise les citations, quiz, flashcards et exercices déjà vérifiés de l'ancien chapitre. Garder une copie de l'ancien contenu (`git show HEAD:<fichier>`) avant de l'écraser. Citations existantes : `node tools/cours/citations.mjs <id> "<extrait>"`. Nouvelles citations : MCP `m2-sources` (`search_sources`, `verify_quote`).

Pour chaque partie, dans l'ordre du sommaire validé (docs/06 §11.2) :
`heading` numéroté → `definition` (src obligatoire) → tableau ou liste **complète** (nombre annoncé) → si compétence : `method` + **exemple corrigé** juste après → `exam` (annale : énoncé + corrigé proposé) → `retenir` (aucun fait nouveau) → `checkpoint`.
- **Liens entre notions** : « Le lien avec… » (`callout tip`), `synthesis.links`, renvois par **titre** de chapitre.
- **Schémas** : redessiner en `diagram` chaque schéma du cours qui porte une notion A/B ; ajouter un arbre de décision pour une méthode, un « avant / après » pour un corrigé, une carte mentale pour une famille, un `xychart-beta` pour une courbe (valeurs « illustratives »). Libellés en anglais, légende FR/EN « … (redessiné) ».
- **Méta-données** : `question`, 3 à 5 `objectives`, `examFocus` (`documented` = preuve, `probable` = estimation), `prerequisites`, `next`, `synthesis` (mustKnow, mustDo, distinctions, links), `estimatedMinutes` réaliste (≈ mots / 180).
- **Items** : quiz 10 à 15 au format du prof (sinon `/quiz-essentiel` ensuite), flashcards (★★★ sous 2 angles), ≥ 1 exercice `analyze` et ≥ 1 `examStyle` quand il y a des annales, `writing` (les 4 kinds). Quiz uniquement sur ce qui est dans le chapitre ; rien sur un `repere`.
- **Longueur** : 5 à 12 min ; fiche complémentaire ≤ 5 min. Resserrer (cellules, doublons, parasites) avant de découper.

## 4. Contrôles (docs/06 §11.3 et §11.4)
1. `npm run validate:content` : 0 erreur, **0 avertissement** sur le chapitre, couverture ★★★ / ★★ intacte (`outline.mjs` affiche la couverture du chapitre).
2. `npm run check` vert (inclut le test qui refuse tout schéma Mermaid invalide).
3. Rendu à l'écran : `npm run build`, puis `npx vite preview --port 4179 --strictPort` **en arrière-plan** (jamais un second `npm run dev`), puis `node tools/cours/capture-schemas.mjs <id> <chapterId…> --out <scratchpad>/captures` ; **regarder** les images (lisibles en largeur téléphone ? couleurs des courbes distinctes ?). Arrêter le serveur de prévisualisation ensuite.
4. Relire le sommaire du chapitre (`outline.mjs`) : il doit se lire comme un plan de révision, du plus important au moins important.

## 5. Aligner la matière
`course.json.chapterOrder` **et** le champ `order` de chaque chapitre ; `notions.json` (`chapter` des notions déplacées) ; `PARCOURS.md` (architecture) ; `PROGRAMME.md` (` → ch.<nn>`) ; section « Réalisation » du document de sommaire ; fiche du backlog (critères cochés, 2 à 5 lignes de journal).

## 6. Commit
Un commit par chapitre ou par lot cohérent : `content(<id>): chapitre <nn> refondu (…)`, puis `git pull --rebase && git push` (CLAUDE.md).

## Réponse à l'utilisatrice
Court : le sommaire final (chapitres → parties), mots avant / après, schémas ajoutés, notions condensées (aucune supprimée si elle peut tomber), points à confirmer dans ses notes. Proposer la suite (chapitre suivant, quiz, autre matière).

## Garde-fous
- Zéro invention (docs/06 §2) ; ne jamais modifier `ressources/`.
- Doute sur les chances qu'une notion tombe → la garder, condensée.
- Les corrigés d'annales restent « proposés » tant qu'ils ne sont pas officiels.
- Un chapitre est `draft` tant que fact-checker et relecteur ne sont pas passés.
