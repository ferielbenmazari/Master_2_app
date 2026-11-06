# 01 — Architecture

## Principe directeur

```
 ressources/ (PDF, MD des profs)          ← jamais modifié
        │  agents Claude Code (une fois, hors app)
        ▼
 sources-texte/<cours>/*.md               ← texte extrait des PDF (si pas de MD)
        │  agents content-author / content-reviewer
        ▼
 content/<cours>/…json                    ← contenu bilingue, validé par schéma
        │  import.meta.glob (build Vite)
        ▼
 App React statique (PWA)                 ← lit le contenu, stocke la progression en local
```

**L'app ne génère rien.** Elle affiche du contenu déjà prêt et mémorise la progression. C'est ce qui la rend gratuite, rapide, hors-ligne et fiable.

## Stack (figée — ne pas ajouter de dépendance sans ADR dans `docs/adr/`)

| Besoin | Choix | Pourquoi |
|---|---|---|
| Build | **Vite** (version stable courante) + **TypeScript strict** | Standard, rapide, très bien connu des modèles |
| UI | **React 19** | Écosystème, fiabilité |
| Routing | **react-router 7** en `HashRouter` | Marche sur n'importe quel hébergement statique |
| Style | **Tailwind CSS v4** + variables CSS (tokens) | Tokens du design system dans `src/styles/tokens.css` |
| Animations | **motion** (ex-Framer Motion) + CSS | Transitions, flip de cartes, micro-interactions |
| Icônes | **lucide-react** | Icônes au trait, aucune emoji dans l'UI |
| Confettis | **canvas-confetti** | Feedback de réussite |
| Polices | **@fontsource** (Unbounded, Manrope, JetBrains Mono) | Auto-hébergées → hors-ligne |
| Contenu | JSON + **zod** | Validation au build et en CI |
| Markdown inline | **marked** (+ rendu des `[[termes]]` maison) | Léger |
| Diagrammes | **mermaid** chargé à la demande (lazy) | Schémas des cours |
| Stockage | **Dexie** (IndexedDB) | Progression locale robuste |
| Répétition espacée | **ts-fsrs** | Algorithme FSRS, état de l'art |
| PWA | **vite-plugin-pwa** | Installable, hors-ligne, précache du contenu |
| Multijoueur | **peerjs** (WebRTC) + **qrcode** | Pas de serveur à nous ; signalisation publique gratuite |
| Tests | **Vitest** + **@testing-library/react** + **fake-indexeddb** ; **Playwright** pour le smoke e2e | |
| Outillage contenu | **@modelcontextprotocol/sdk** (serveur MCP `m2-sources`, `tools/sources-mcp/`) ; recherche plein texte maison (BM25, sans dépendance) | Les agents trouvent et citent les sources ; voir `06-qualite-contenu.md` |
| Qualité | ESLint + Prettier ; **tsx** pour exécuter les scripts TS (`scripts/`) | |

## Arborescence cible

```
.
├── CLAUDE.md                  # règles pour les agents
├── docs/                      # besoin, archi, design, modèle de contenu, ADR
├── backlog/                   # tâches T** (app) et C** (contenu)
├── .claude/agents|skills      # outillage agentic
├── ressources/                # sources des profs (lecture seule)
├── sources-texte/             # texte extrait des PDF (généré, versionné)
├── tools/sources-mcp/         # serveur MCP + CLI d'accès aux sources
├── .mcp.json                  # déclare le serveur m2-sources à Claude Code
├── content/
│   └── <courseId>/
│       ├── course.json
│       ├── sources.json            # manifeste des sources (niveaux de confiance)
│       ├── notions.json            # carte des notions à couvrir
│       ├── PROFIL-PROF.md          # style d'examen et attentes du prof
│       ├── PLAN.md
│       ├── chapters/<nn>-<slug>.json
│       └── exams/<slug>.json
├── scripts/validate-content.ts
├── src/
│   ├── main.tsx, App.tsx, routes.tsx
│   ├── styles/ (tokens.css, global.css)
│   ├── content/ (schema.ts, loader.ts, richtext.ts)
│   ├── store/ (db.ts, progress.ts, prefs.ts, fsrs.ts)
│   ├── components/ui/          # kit visuel (Panel, Button, Tag, XpBar, Ambient…)
│   ├── components/content/     # Story, TermChip, Bilingual, Diagram…
│   ├── features/<mode>/        # reader, flashcards, quiz, exercises, exams, writing, game, dashboard
│   └── lib/ (text-normalize.ts, shuffle.ts…)
└── tests/e2e/
```

## Chargement du contenu (évolutivité)

- `src/content/loader.ts` utilise `import.meta.glob('/content/*/course.json', { eager: true })` pour la liste des matières et `import.meta.glob('/content/*/chapters/*.json')` (lazy) pour les chapitres.
- **Ajouter une matière = ajouter un dossier dans `content/`.** Aucune liste codée en dur.
- Un chapitre est trié par son champ `order`. Un chapitre `status: "draft"` est affiché avec un badge « brouillon ».

## Données locales (Dexie)

Préférences (pseudo, avatar, thème, mode langue, langue d'entraînement) : `localStorage` clé `m2rev:prefs`, via `src/store/prefs.ts` (lecture/écriture dans `try/catch`, valeurs par défaut si indisponible).
Brouillons d'exercices (T13) : `localStorage` clés `m2rev:draft:<exerciseId>`, via `src/store/drafts.ts` ; hors export JSON, effacés par `resetAll`.

| Table Dexie | Clé | Contenu |
|---|---|---|
| `cards` | `cardId` | état FSRS sérialisé (`due`, `stability`, `difficulty`, `reps`, `lapses`, `state`, `last_review`) |
| `attempts` | auto | `{ itemId, kind, correct, score?, at }` pour quiz, exercices, écriture, partiels |
| `reading` | `chapterId` | `{ progress: 0..1, finishedAt? }` |
| `activity` | `date (YYYY-MM-DD)` | nombre d'actions → série de jours |

Export : un fichier `revision-m2-<pseudo>-<date>.json` contenant les préférences et toutes les tables. Import : remplace après confirmation. Un champ `schemaVersion` permet les migrations.

## Multijoueur (Lot 3) — simple

- **Hôte** : crée `new Peer('m2rev-' + CODE)` où `CODE` = 4 caractères lisibles (ex. `K7PX`). Affiche le code + un QR vers `https://<site>/#/jeu/rejoindre/K7PX`.
- **Invités** : se connectent à l'hôte. **L'hôte est l'arbitre** : il tire les questions (depuis `quiz` des chapitres choisis), envoie `question`, reçoit `answer`, diffuse `scores`.
- Messages typés (union TS) : `hello | lobby | start | question | answer | reveal | scores | end`.
- **Transport derrière une interface** `GameTransport` → si PeerJS échoue sur certains partages de connexion (NAT), on pourra brancher un autre transport sans toucher au jeu. La tâche T16 (spike) vérifie ça en conditions réelles **avant** de construire le jeu.
- **Repli 100 % hors-ligne** : mode passe-téléphone (même logique de jeu, transport local).

## Hébergement

Repo privé → **Cloudflare Pages** (gratuit, branche `main` déployée à chaque push). Détails : `05-deploiement.md`.

## Décisions (ADR)

Toute décision qui change ce document → fichier `docs/adr/NNN-titre.md` (contexte, décision, conséquences) et mise à jour de ce document.
