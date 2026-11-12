---
name: cours-essentiel
description: PHASE 1 (prioritaire) - rédige le COURS d'un chapitre (histoire en épisodes, glossaire, points clés) aligné sur ce qui a été vu en classe (PROGRAMME.md), complété si besoin par les lectures du dossier de la matière, sans quiz. Économe, sans sous-agents. Usage - /cours-essentiel rec1 02
---

# /cours-essentiel <courseId> <nn> — Phase 1 : le cours d'abord

**Ordre imposé par l'utilisatrice** : d'abord des **cours de qualité, alignés sur la classe**, pour tous les chapitres de la matière ; **ensuite seulement** les quiz (`/quiz-essentiel`). Ce skill ne produit **aucun quiz**.

## Règles d'économie
- **Pas de sous-agent.** Tout dans cette session, modèle Sonnet.
- Lire **seulement** : `content/<id>/PROGRAMME.md`, la ligne du chapitre dans `PLAN.md`, `PROFIL-PROF.md` (sections 4 à 6), les sources du chapitre, `docs/06-qualite-contenu.md` §2, §2 bis et §6.
- Format : extrait de l'exemple seulement — `node -e "const c=require('./content/rec1/chapters/05-qualite-validite-ethique.json');console.log(JSON.stringify({story:c.story.slice(0,5),glossary:c.glossary.slice(0,1),keyPoints:c.keyPoints.slice(0,1)},null,1))"`.
- Sources lues par passages (`read_source` ou `npm run sources -- read`), pas en entier au-delà de ~400 lignes.
- Un chapitre par appel ; à la fin, dire de taper `/clear`.

## Conception (docs/06 §9, prioritaire)
Lire `content/<id>/PARCOURS.md`. Chapitre = question directrice + objectifs + épisodes qui expliquent (`explain`) + méthode (`method`) + corrigé commenté + synthèse. Le contexte va dans des encadrés `repere`. « Couvrir chaque ligne » ne veut pas dire « tout développer ».

## Étapes
0. **Une seule fois** : si le validateur refuse un chapitre dont `quiz` est vide, rendre `quiz` facultatif dans `src/content/schema.ts` (min 0 ; règle « ≥ 50 % de V/F » seulement si le quiz n'est pas vide ; avertissement « chapitre sans quiz »), tests à jour, `npm run check` vert, commit `chore: autoriser un chapitre sans quiz (phase cours)`.
1. **Périmètre = la classe.** Dans `PROGRAMME.md`, prendre les lignes du chapitre `[x]` (vu en classe, ★ = insisté) et `[ ]` (incertain, traité plus brièvement), ignorer `[-]`, et ajouter la section « Vu en classe mais absent ». Si `ressources/S3__<ID>/NOTES/` existe, ces notes disent **ce qui a été fait en classe et comment** : suivre leur ordre, leurs exemples, leur insistance.
2. **Qualité du cours** (c'est le livrable principal, prendre le temps) :
   - Couvrir **chaque** ligne retenue, en profondeur proportionnelle à son importance (★ = développé, avec exemple et piège d'examen).
   - Reprendre les **exemples, schémas, exercices et formulations du prof** (Jane & Joe, MemoriaTech, gardes britanniques…) plutôt qu'en inventer.
   - Épisodes de 3-4 min : accroche → notion `[[terme]]` → exemple du prof → piège d'examen → « à retenir ». Pas de `checkpoint` (ajoutés en phase 2).
   - Bilingue FR + EN (B2, termes exacts du cours).
3. **Compléments dans la thématique** (docs/06 §2 bis) : seulement si une notion vue en classe reste floue ou incomplète dans les supports. Les puiser **uniquement** dans les sources `lecture` puis `complement` du `sources.json` de la matière (jamais de connaissance générale non sourcée), les citer, et les mettre dans un `callout` `tip` commençant par « **Pour aller plus loin** — ». ≤ 20 % du chapitre, jamais à la place du contenu de cours.
4. **Rien sans citation** : chaque fait a son `src` (citation exacte vérifiée). Écrire `story`, `glossary`, `keyPoints` ; `quiz`, `flashcards`, `exercises`, `writing` = `[]` ; `status: "draft"`.
5. `npm run validate:content` → 0 erreur **et**, sur ce chapitre : 0 citation < 4 mots (viser 6-25 mots qui portent le fait), 0 paragraphe > 90 mots, chapitre ≤ 15 min (sinon le découper en deux fichiers), listes ≤ 7 items.
   - Sources **traduites** (Markdown dont `transcriptionOf` pointe vers un PDF anglais, ex. INF4) : les termes EN du `glossary` et de la version EN viennent du **PDF original** (`sources-texte/`), jamais d'une retraduction. Ne jamais citer une « Description et explication du schéma » (texte généré, pas les mots du prof).
6. **Relecture qualité (dans la session)** : relire chaque bloc face à sa citation (même sens, rien d'ajouté) ; vérifier que chaque ligne retenue du PROGRAMME est traitée ; couper le remplissage.
7. Dans `PROGRAMME.md` : ` → ch.<nn>` au bout de chaque ligne couverte ; ` → ⚠ absent des supports` si une ligne vue en classe n'a aucune source (ne rien inventer).
8. `git add -A && git commit -m "content(<id>): cours du chapitre <nn> — <titre>" && git pull --rebase && git push`.
9. Réponse courte : chapitre dispo, lignes couvertes / ⚠, compléments ajoutés (et d'où), « tape /clear puis /cours-essentiel <id> <suivant> » — ou, si tous les chapitres de la matière ont leur cours : « passe aux quiz : /quiz-essentiel <id> ».
