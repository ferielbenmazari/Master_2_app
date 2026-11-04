---
id: C00
title: "Index des sources + serveur MCP m2-sources"
lot: contenu
status: todo
depends: [T02]
agent: builder
---

# C00 — Index des sources + serveur MCP `m2-sources`

## Objectif
Donner aux agents de contenu un accès **fiable et filtré** aux sources : chercher, lire un passage, vérifier une citation, mesurer la couverture — en ignorant par défaut les articles parasites.

## À lire d'abord
- `docs/04-pipeline-contenu.md` (section « serveur MCP », format de `sources.json`, outils et CLI)
- `docs/06-qualite-contenu.md` (§2 niveaux de confiance, §3 couverture)
- `content/*/sources.json`, `content/rec1/notions.json`
- `tools/sources-mcp/lib/quote.ts` (créé en T02, à réutiliser tel quel)

## À faire
1. Installer `@modelcontextprotocol/sdk` (dev). Arborescence `tools/sources-mcp/` : `lib/` (logique pure, testée), `server.ts` (MCP stdio), `cli.ts`.
2. `lib/manifest.ts` : lit et valide (`zod`) `content/<id>/sources.json` ; résout le fichier texte (`text`).
3. `lib/chunk.ts` : découpe chaque texte en passages (titres Markdown `#…`, `### Slide N`, marqueurs `<!-- Page N -->`, sauts `\f`) → `{ id, file, tier, loc, fromLine, toLine, text }` ; passages de 40 à 400 mots (fusion/découpe).
4. `lib/search.ts` : BM25 maison (sans dépendance), tokenisation insensible aux accents, FR+EN, petit dictionnaire de mots vides ; index sérialisé dans `.cache/sources-index-<id>.json` (gitignoré) reconstruit si un fichier a changé (mtime).
5. `lib/coverage.ts` : pour chaque notion de `notions.json`, chapitres/blocs/quiz/flashcards qui la référencent → statut couvert/partiel/absent selon les règles de `06` §3.
6. `server.ts` : outils `list_sources`, `search_sources` (défaut `tiers: ["cours","annale"]`, `k: 8`), `read_source` (≤ 300 lignes), `verify_quote`, `coverage` — schémas d'entrée stricts, erreurs lisibles, sorties JSON compactes.
7. `cli.ts` + script `npm run sources -- <index|search|read|verify|coverage> …` (même lib).
8. `.mcp.json` à la racine : copié depuis `agentic/mcp.json` par `bash agentic/install.sh` ; vérifier qu'il démarre `npx tsx tools/sources-mcp/server.ts`.
9. Tests : découpage d'un Markdown de slides et d'un texte pdftotext ; recherche « internal validity » sur REC1 → passage « Validation of results » en tête ; un fichier `complement` n'apparaît pas sans `tiers` explicite ; `verify_quote` identique au validateur.

## Critères d'acceptation
- [ ] Dans Claude Code, `/mcp` montre `m2-sources` connecté avec 5 outils
- [ ] `npm run sources -- search rec1 "threats to validity"` renvoie le bon passage en premier, avec `loc`
- [ ] `npm run sources -- coverage rec1` affiche 12/12 notions du chapitre 05 couvertes
- [ ] Les fichiers `ignore` ne sont jamais renvoyés ; `complement` seulement sur demande
- [ ] `npm run check` vert

## Hors périmètre
Recherche sémantique par embeddings (inutile ici, coûteuse) ; lecture directe des PDF (passer par `sources-texte/`).

## Journal
<!-- rempli à la fin : date, résumé, écarts -->
