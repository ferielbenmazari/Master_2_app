# CLAUDE.md — Révision M2 (« Arena Warm »)

App web (PWA) de révision **bilingue FR/EN** pour le Master 2 MIAGE SBI. 3 utilisateurs, 0 € d'usage, contenu pré-généré par des agents.

## À lire avant toute tâche
1. `docs/00-besoin.md` — ce qu'on construit et pourquoi
2. `docs/01-architecture.md` — stack figée, arborescence, stockage
3. `docs/02-design-system.md` + `docs/design/maquette.html` — le look (tokens = source de vérité)
4. `docs/03-modele-contenu.md` — contrat du contenu (exemple : `content/rec1/chapters/05-qualite-validite-ethique.json`)
5. `docs/06-qualite-contenu.md` — **obligatoire pour tout travail de contenu** : chaque fait est cité et vérifié, style des profs, difficulté calibrée
6. La fiche de la tâche dans `backlog/`

## Comment on travaille
- Outillage agentic : la source est `agentic/` (agents, skills, settings, `mcp.json`). Si `.claude/agents` est absent ou périmé : `bash agentic/install.sh`. Toute modification d'agent/skill se fait dans `agentic/` puis on relance l'install.
- **Une tâche du backlog à la fois.** Commande : `/next-task` (app) ou `/ajouter-cours <id>` (contenu). État global : `/etat-projet`.
- Rester **dans le périmètre** de la tâche. Une idée hors périmètre → l'ajouter en fin de `backlog/IDEES.md`, ne pas la coder.
- **Ne jamais modifier `ressources/`** (sources des profs, lecture seule).
- **Contenu : zéro invention.** Aucune information de cours sans citation vérifiable (`src`). Les sources s'interrogent via le serveur MCP `m2-sources` (ou `npm run sources -- …`), qui ne renvoie par défaut que les supports de cours et les annales.
- **Pas de nouvelle dépendance** hors de la liste de `docs/01-architecture.md` sans ADR (`docs/adr/NNN-titre.md`).
- Avant chaque commit : **`npm run check` doit être vert**. Sinon on corrige, on ne contourne pas (pas de `// @ts-ignore`, pas de test désactivé).
- Commits : `feat(T07): quiz vrai/faux` · `fix(T07): …` · `content(isi1): chapitre 03` · `docs: …`. Un commit par tâche terminée minimum, **poussé sur `main` aussitôt** (`git pull --rebase && git push`). Ne jamais `push --force`.
- Fin de tâche : passer `status: done` dans la fiche, cocher les critères, ajouter 2-5 lignes dans la section « Journal » de la fiche (ce qui a été fait, écarts éventuels).

## Conventions de code
- TypeScript **strict**, composants fonctionnels, un composant par fichier, `PascalCase.tsx`; utilitaires `kebab-case.ts`.
- Styles : classes Tailwind + variables CSS de `src/styles/tokens.css`. **Aucune couleur en dur** dans les composants.
- Textes d'interface en **français** (constantes dans `src/i18n/ui.ts`) ; le contenu de cours vient toujours des JSON (`{fr, en}`).
- Mobile-first ; cibles tactiles ≥ 44 px ; focus visible ; `prefers-reduced-motion` respecté ; éléments décoratifs `aria-hidden`.
- Accès au contenu uniquement via `src/content/loader.ts`. Accès au stockage uniquement via `src/store/*`.
- Tests : toute logique pure (`lib/`, `store/`, `content/`) a des tests Vitest à côté (`*.test.ts`).

## Commandes
`npm run dev` · `npm run build` · `npm run check` · `npm run validate:content` · `npm run test` · `npm run e2e`

## Contexte utilisatrice
Étudiante en alternance, révise sur PC (Ubuntu) et téléphone, contrôles ISI1, REC1, INF4 la semaine du 9 novembre 2026 → **le jalon MVP (T01→T11 + T20, C00→C05) est prioritaire sur tout le reste.** Exigence n°1 : le contenu doit être 100 % fidèle au cours et au style des profs ; la forme doit donner envie de continuer.
