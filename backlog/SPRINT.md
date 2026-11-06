# SPRINT — ordre de passage (prioritaire sur l'ordre numérique)

> Rédigé le 2026-11-06 après la revue complète du repo. `/next-task` et `/etat-projet` suivent **cette liste** tant qu'elle contient des lignes non faites.
> Contexte : contrôles ISI1, REC1, INF4 la semaine du 9 novembre. Objectif du week-end : **l'app en ligne sur les 3 téléphones, avec des quiz et des flashcards pour les 22 chapitres.**

## Sprint 1 — avant les contrôles (7-8 novembre)

Deux sessions Claude Code en parallèle (elles ne touchent pas les mêmes fichiers).

| # | Session APP (`/next-task`, Sonnet) | Session CONTENU (Sonnet) | Toi |
|---|---|---|---|
| 1 | **T11** mise en ligne + PWA | ~~C07 quiz ISI1 ch. 02 → 09~~ ✔ fait le 06/11 · **C07 suite** : V/F des annales sur 01-05 et 07-09 (`/quiz-essentiel isi1 <nn>` en mode ajout) | Créer le compte Cloudflare Pages (10 min, `docs/05-deploiement.md`) |
| 2 | **T22** flashcards tirées du glossaire | **C07** fin : les 3 alertes de quiz INF4-04 et INF4-05 | Donner les **dates des contrôles** → `examDate` des `course.json` |
| 3 | **T20** session Express 5 min | — | Cocher `PROGRAMME.md` d'ISI1 (5 min) : `[x]` vu, `[-]` pas vu |

Ordre APP : T11 → T22 → T20. (T11 ne dépend plus de T20 : on met en ligne d'abord.)

## Sprint 2 — après les contrôles

| # | Tâche | Pourquoi |
|---|---|---|
| 1 | **T23** smoke e2e : tous les chapitres s'ouvrent | aujourd'hui seul REC1-05 est testé de bout en bout |
| 2 | **C08** qualité des citations et lisibilité | 164 citations trop courtes, 74 paragraphes trop longs, texte PDF ISI1 abîmé (`s=ll`, `informaMon`) |
| 3 | **C09** INF4 : termes anglais du cours original | les Markdown INF4 sont des traductions : certains termes EN sont retraduits |
| 4 | **C01** fin : `notions.json` ISI1 + INF4, profil du prof INF4 | rend la couverture ★★★ mesurable |
| 5 | **T24** dette de revue (réserves T04-T08 d'`IDEES.md`) | manche de quiz perdue en quittant la page, safe-area iPhone… |
| 6 | **T21** signaler · **T12** tableau de bord · **T13/T14** exercices et partiels | boucle qualité, puis révision complète |
| 7 | Passe `fact-checker` + `content-reviewer` chapitre par chapitre → `reviewed` | seul REC1-05 porte le badge « Vérifié » |

Puis l'ordre normal du backlog (T15 → T19, C03, C06).
