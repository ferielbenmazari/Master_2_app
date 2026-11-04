---
id: T02
title: "Schéma du contenu, validateur (citations, couverture, difficulté) et loader"
lot: 0
status: done
depends: [T01]
agent: builder
---

# T02 — Schéma du contenu, validateur et loader

## Objectif
Garantir que tout contenu produit par les agents est valide, et y accéder simplement depuis l'app.

## À lire d'abord
- `docs/03-modele-contenu.md` (en entier, règles 1 à 12)
- `docs/06-qualite-contenu.md` (§2 citations, §3 notions, §5 difficulté, §6 longueurs)
- `content/rec1/chapters/05-qualite-validite-ethique.json` (doit passer à 100 %)
- `content/*/course.json`, `content/*/sources.json`, `content/rec1/notions.json`
- `tools/sources-mcp/reference/verify_quote.py` (**algorithme de référence** du vérificateur de citations, à porter en TS à l'identique)

## À faire
1. `src/content/schema.ts` : schémas **zod `.strict()`** traduisant exactement `docs/03` (y compris `SourceRef`, `Level`, `KeyPoint`, `notions`, `narrative`) + schémas de `sources.json` et `notions.json`. Exporter les types via `z.infer`.
2. `src/content/richtext.ts` : `parseTermRefs`, `parseCloze`, `findAllTermRefs`.
3. `tools/sources-mcp/lib/quote.ts` : `normalize()` et `verifyQuote(text, quote) → { ratio, found }` **portage exact** de `verify_quote.py` (mêmes résultats sur les tests). Cache des fichiers lus.
4. `scripts/validate-content.ts` (lecture disque, pas `import.meta.glob`) :
   - règles 1 à 11 de `docs/03` en **erreurs** (dont : citations introuvables, sourçage obligatoire manquant, fichier `ignore` cité) ;
   - règle 12 en **avertissements** : quotas de `level`, détecteur de questions évidentes (06 §5 : % de FAUX, mots absolus, bonne réponse la plus longue, position de la bonne réponse, réponse présente dans l'énoncé), longueurs (06 §6), couverture des notions (06 §3) ;
   - sortie lisible : `✖ content/isi1/chapters/03-x.json › quiz[2].src[0] : citation introuvable (ratio 0.41) dans ressources/…` ; résumé `✔ 4 matières · 1 chapitre · 123 citations vérifiées · couverture ★★★ 12/12 · 0 avertissement`. Code 1 si erreur.
5. `src/content/loader.ts` : `getCourses`, `getCourse`, `getChapterIndex`, `loadChapter` (lazy + cache), `loadAllChapters`, `getExamIndex`, `loadExam`, `getNotions`. **Les extraits sources (`src`) sont dans le JSON : l'app n'a pas besoin de lire `ressources/`.**
6. Tests Vitest : l'exemple REC1 passe (123 citations) ; une citation altérée (≥ 2 mots changés) échoue ; cas invalides de `docs/03` ; chaque avertissement a un test qui le déclenche.

## Critères d'acceptation
- [x] `npm run validate:content` : ✔ sur le contenu actuel, 123 citations de REC1-05 + 20 de notions.json vérifiées
- [x] `verifyQuote` donne les mêmes ratios que `verify_quote.py` sur 10 cas de test (dont 4 du fichier Python)
- [x] Chaque règle d'erreur et chaque avertissement a un test qui le déclenche
- [x] Aucun `any`
- [x] `npm run check` vert

## Hors périmètre
Affichage du contenu.

## Journal
- 2026-11-04 : `src/content/{schema,richtext,loader}.ts`, `tools/sources-mcp/lib/quote.ts` (portage exact, ratios comparés au Python exécuté en direct sur 14 cas), `scripts/validate-content.ts` + `scripts/lib/{validate,load-tree,format-report}.ts`. 65 tests Vitest.
- Contenu actuel : 0 erreur, 143 citations vérifiées (123 chapitre + 20 notions), 5 avertissements réels sur REC1-05 (liste de 9 items ; notions non couvertes : n-validity-threats, n-plagiarism, n-avoid-plagiarism, n-translation-rules).
- Choix : `getChapterIndex` déduit l'index du nom de fichier (sans titre, chapitres lazy) ; `getNotions` est asynchrone ; `tools` ajouté à tsconfig.node.json ; cardinalités (12-40 blocs, ≥ 50 % V/F, chaque kind writing) dans le schéma (erreur R1).
- Écart : verify_quote.py ne contient aucun cas de test propre ; les 14 cas couvrent ses 4 chemins (vide, sous-chaîne, fenêtre floue, absent).
