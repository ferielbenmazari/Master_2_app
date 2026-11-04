# 04 — Pipeline de contenu (ajouter un cours)

> Commande : **`/ajouter-cours <courseId>`** dans Claude Code, à la racine du repo.
> Règles de qualité : **`06-qualite-contenu.md`** (obligatoire).

## Vue d'ensemble

| # | Étape | Agent (modèle) | Produit | Contrôle |
|---|---|---|---|---|
| 1 | Inventaire | `content-extractor` (Haiku) | `sources.json` (niveaux de confiance) + `PLAN.md` | **validation utilisatrice** |
| 2 | Extraction | `content-extractor` (Haiku) | `sources-texte/<id>/*.md` (texte des PDF) | `npm run sources -- index` |
| 3 | Analyse du cours | `course-analyst` (Sonnet) | `notions.json` + `PROFIL-PROF.md` | **validation utilisatrice** |
| 4 | Rédaction (1 chapitre / appel) | `content-author` (Sonnet) | `chapters/<nn>-<slug>.json` `draft` | `validate:content` vert |
| 5 | Vérification des faits | `fact-checker` (Sonnet) | corrections + rapport | 0 fait non confirmé |
| 6 | Relecture pédagogique | `content-reviewer` (Sonnet) | corrections → `reviewed` | alertes traitées |
| 7 | Partiels | `content-author` → `fact-checker` → `content-reviewer` | `exams/*.json` | idem |
| 8 | Commit | orchestrateur (`/ajouter-cours`) | `content(<id>): …` | `npm run check` vert |

Les étapes 1 et 3 s'arrêtent pour **validation par l'utilisatrice** : c'est là qu'on rattrape un mauvais découpage ou une notion oubliée, avant d'avoir écrit 10 chapitres.

## L'accès aux sources : serveur MCP `m2-sources`

Pourquoi : le dossier `ressources/` contient beaucoup d'articles « parasites » (lectures complémentaires, doublons, exemples de mémoires). Les agents ne doivent pas s'y perdre ni y piocher une définition qui n'est pas celle du prof.

**Manifeste** `content/<id>/sources.json` (écrit à l'étape 1, validé par l'utilisatrice) :
```json
{
  "courseId": "isi1",
  "sources": [
    { "file": "ressources/S3__ISI1/EPI/1_IE Introduction.pdf", "text": "sources-texte/isi1/01-ie-introduction.md",
      "tier": "cours", "title": "Introduction à l'IE", "chapters": ["01"] },
    { "file": "ressources/S3__ISI1/Markdown/examen_3.md", "text": "ressources/S3__ISI1/Markdown/examen_3.md",
      "tier": "annale", "title": "Session 2014" },
    { "file": "ressources/S3__ISI1/EPI/19_IREB CPRE (3 - Eliciting requirements).pdf", "tier": "ignore", "reason": "doublon de 12" }
  ]
}
```
`tier` ∈ `cours | annale | lecture | complement | ignore` (définitions : 06 §2). `text` = fichier texte réellement lu et cité.

**Outils exposés** (`tools/sources-mcp/server.ts`, déclaré dans `.mcp.json`) :
| Outil | Rôle |
|---|---|
| `list_sources(courseId, tiers?)` | liste les sources (par défaut `cours` + `annale`) |
| `search_sources(courseId, query, tiers?, k?)` | recherche plein texte (BM25) dans les passages ; renvoie `{file, loc, tier, score, text}` ; **par défaut `cours` + `annale` uniquement** |
| `read_source(file, loc? | fromLine?, toLine?)` | lit un passage précis (≤ 300 lignes) |
| `verify_quote(file, quote)` | `{ found, ratio, bestMatch, loc }` — même algorithme que le validateur |
| `coverage(courseId)` | notions ★★★/★★/★ couvertes ou non par les chapitres |

**Secours sans MCP** (même bibliothèque `tools/sources-mcp/lib/`) : `npm run sources -- search isi1 "Kano exciter"`, `npm run sources -- read <file> 120 180`, `npm run sources -- verify <file> "<quote>"`, `npm run sources -- coverage isi1`.

Découpage en passages : par titre Markdown (`#`, `##`, `### Slide N`) ou par page (`<!-- Page N -->`, saut de page `\f` de pdftotext) ; `loc` = titre ou « p. N ».

## Détail des étapes

### 1. Inventaire — `content-extractor`
`ls` + `md5sum` du dossier `ressources/S3__<ID>/`, doublons → `ignore`, classement par niveau, découpage en chapitres dans `PLAN.md` (modèle : `content/rec1/PLAN.md`). **S'arrêter pour validation.**

### 2. Extraction — `content-extractor`
`pdftotext -layout` pour chaque source `cours`/`annale`/`lecture` sans texte ; nettoyage minimal (en-têtes/pieds répétés) **sans résumer ni traduire** ; marquer les pages `<!-- Page N -->`. Les PDF qui ont déjà une transcription Markdown sont **aussi** extraits (pour recouper les notions ★★★). Puis `npm run sources -- index <id>`.

### 3. Analyse — `course-analyst`
Lit **toutes** les sources `cours` et `annale` (via `search_sources`/`read_source`), produit `notions.json` (chaque notion avec `src` vérifiées) et `PROFIL-PROF.md` (7 sections imposées, 06 §4). **S'arrêter pour validation.**

### 4. Rédaction — `content-author`
Un chapitre par appel. Entrées : ligne du PLAN, notions du chapitre, PROFIL-PROF, exemple de référence `content/rec1/chapters/05-qualite-validite-ethique.json`, glossaires déjà écrits. **Méthode « citation d'abord »** : pour chaque fait, chercher le passage (`search_sources`), copier la citation, *puis* rédiger. Écrire par étapes, `validate:content` à la fin.

### 5. Vérification des faits — `fact-checker`
Adversarial, sans contexte d'auteur. Pour **chaque** item sourcé : la citation existe (`verify_quote`) ET le contenu FR et EN dit la même chose que la citation (ni plus, ni moins, ni déformé). Contrôle aussi : bonnes réponses des quiz, corrigés d'exercices, calculs. Recoupe les notions ★★★ avec le texte du PDF original. Corrige ou supprime ; rapport dans `PLAN.md`.

### 6. Relecture pédagogique — `content-reviewer`
Grille : style du prof (PROFIL-PROF), difficulté (quotas, détecteur d'évidence, test de l'étudiant pressé), attention (épisodes, longueurs, exemples du prof), couverture des notions, anglais (B2, termes du cours). Traite toutes les alertes du validateur. → `status: "reviewed"`.

### 7. Partiels
Annales → `Exam` `kind: "past"` (énoncé fidèle, corrigé `proposed` sourcé). Partiel blanc `kind: "mock"` : **même structure, barème, durée et répartition de `level` que les annales** ; sans annale, calqué sur les consignes d'évaluation du prof.

## Modèles et coût
Abonnement Claude (Pro/Max) : pas de coût à l'usage, seule la limite d'usage compte. Sonnet pour tout ce qui demande du jugement (analyse, rédaction, vérification), Haiku pour l'inventaire et l'extraction. Ne jamais utiliser Haiku pour rédiger ou vérifier.
