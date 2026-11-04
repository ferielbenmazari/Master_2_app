# Révision M2 · Arena

App de révision **bilingue FR/EN** pour le Master 2 MIAGE SBI (Paris 1) : cours racontés comme des histoires, fiches, flashcards à répétition espacée, Vrai/Faux justifiés, exercices et partiels corrigés, atelier d'anglais, et un mode jeu à plusieurs.
PWA gratuite, hors-ligne, PC + téléphone. Le contenu est pré-généré par des agents Claude à partir des cours de `ressources/`.

## Démarrer (Ubuntu)
```bash
nvm install --lts            # Node LTS (voir docs/05-deploiement.md)
npm install
npm run dev                  # → http://localhost:5173
```

## Le projet en 7 fichiers
| | |
|---|---|
| `docs/00-besoin.md` | ce qu'on construit et pourquoi |
| `docs/01-architecture.md` | stack, arborescence, stockage, multijoueur |
| `docs/02-design-system.md` + `docs/design/maquette.html` | le style « Arena Warm » (Style 3) |
| `docs/06-qualite-contenu.md` | **les garanties de qualité du contenu** (citations vérifiées, style des profs, difficulté) |
| `docs/03-modele-contenu.md` | le format du contenu (contrat agents ↔ app) |
| `docs/04-pipeline-contenu.md` | comment un cours devient du contenu |
| `backlog/README.md` | les tâches, dans l'ordre |

## Faire travailler les agents (Claude Code, à la racine du repo)

**Une seule fois (et après chaque modification de `agentic/`)** : `bash agentic/install.sh` → copie agents, skills et permissions dans `.claude/`. `agentic/` est la source versionnée ; `.claude/` est la copie utilisée par Claude Code.

| Commande | Effet | Modèle conseillé pour la session |
|---|---|---|
| `/next-task` | prend la prochaine tâche, la code (agent `builder`), la vérifie (agent `reviewer`), commite | Sonnet |
| `/ajouter-cours isi1` | sources classées → extraction PDF → carte des notions + profil du prof → chapitres (rédaction → vérification des faits → relecture pédagogique) → partiels | Sonnet (l'inventaire passe sur Haiku) |
| `/corriger-signalements` | traite les erreurs signalées depuis l'app (issues GitHub) | Sonnet |
| `/etat-projet` | avancement + prochaine action | Haiku |

Astuce : une session pour l'app (`/next-task` en boucle), une autre en parallèle pour le contenu (`/ajouter-cours`). Elles ne touchent pas les mêmes fichiers.

## Ajouter un cours en cours d'année
1. Déposer les fichiers dans `ressources/S3__<CODE>/` (PDF dans `EPI/`, Markdown dans `Markdown/`).
2. `/ajouter-cours <id>` → valider les sources et le plan, puis la carte des notions et le profil du prof → laisser tourner.
3. `git push` → l'app en ligne se met à jour toute seule.

## Mettre en ligne / prêter à un ami
Voir `docs/05-deploiement.md` (Cloudflare Pages, gratuit, compatible repo privé).
