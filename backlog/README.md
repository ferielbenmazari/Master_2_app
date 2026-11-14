# Backlog

Une fiche = une tâche autonome. Frontmatter : `id`, `title`, `lot`, `status` (`todo` → `doing` → `done`), `depends`, `agent`.

## Ordre et jalons

> **En ce moment : suivre `backlog/SPRINT.md`** (ordre de passage avant/après les contrôles). Le tableau ci-dessous reste la carte d'ensemble.

| Lot | Tâches | Résultat |
|---|---|---|
| 0 — Socle | T01 init · T02 schéma + validateur de citations · T03 kit UI Arena Warm · T04 coquille · T05 stockage | App navigable, contenu validé |
| Outillage contenu | **C00 index des sources + MCP** (juste après T02) | Les agents de contenu peuvent démarrer |
| 1 — Lire & mémoriser | T06 Base/matière · T07 lecteur (sources visibles) · T08 quiz · T09 flashcards · T10 fiche/glossaire · **T11 PWA + mise en ligne** · T22 flashcards du glossaire · T20 Express 5 min | **★ MVP pour les contrôles du 9 novembre** |
| 2 — Pratiquer | T23 smoke tous chapitres · T24 dette de revue · T12 tableau de bord · T13 exercices · T14 partiels · T15 atelier anglais · T21 signaler une erreur | Révision complète + boucle qualité |
| 3 — Arène | T16 spike réseau · T17 Quiz Battle · T18 passe-téléphone | Mode à plusieurs |
| 4 — Finitions | T19 | Le « wahou » |
| Contenu | C01-C03 ISI1 · **C07 quiz ISI1** · C04 REC1 · C05 INF4 · C08 qualité des citations · C09 termes EN INF4 · C06 ISI5 · **C15 ISI7** | Dès que C00 est fait, en parallèle |

```
T01 ─┬─ T02 ─┬─ C00 ──────────────────────────────────────────────> contenu (C01…C06)
     │       └──────────┐
     └─ T03 ────────────┴─ T04 ── T05 ── T06 ── T07 ─┬─ T08 ─┬─ T09 ─┬─ T20 ── T11 ★ ─┬─ T12
                                                     └─ T10 ─┴───────┘                 ├─ T13 ── T14
                                                                                       ├─ T15 ── T19
                                                                                       ├─ T16 ── T17 ── T18
                                                                                       └─ T21
C00 ──> C01 ── C02 ── C03        C00 ──> C04        C00 ──> C05 ── C06
```

## Lancer
- App : `/next-task` (ou `/next-task T07`)
- Contenu : `/ajouter-cours isi1` (après C00)
- Erreurs signalées : `/corriger-signalements`
- Où en est-on : `/etat-projet`
