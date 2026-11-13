# PARCOURS — ISI1 · Ingénierie des exigences (C. Salinesi)

> Architecture pédagogique (docs/06 §9), refonte du 2026-11-13. Sources : supports du prof (`sources-texte/isi1/1…20`), annales 2013 et 2014 (`ressources/S3__ISI1/Markdown/examen_2.md`, `examen_3.md`), projets Deadbot et IA (`exam_1.md`, `examen_4.md`) ; sources externes citées pour les notions d'annale absentes des supports (`sources-texte/isi1/ext-*.md`).

## Objectif du module
Savoir pourquoi les exigences font échouer les projets, les éliciter, les écrire correctement, les documenter, les prioriser et les modéliser, puis vérifier leur qualité.

**Problématique centrale** : comment obtenir, écrire et faire valider des exigences sur lesquelles tout le monde est d'accord et qu'on peut vérifier ?

## Preuves concernant l'évaluation
- **A** — Annales 2013 et 2014 (1 h 30, sans document) : vrai/faux justifié (5 puis 10 points), correction d'un modèle de cas d'utilisation et d'un modèle KAOS (2013), correction d'exigences R1-R5 (2014), calcul AHP (2014), réflexion (2013, 2014). Énoncés répétés : identifiant unique, Kano, cas d'utilisation, cadre de Pohl, revues, triage.
- **B** — Insistance des supports du prof : « terms to remember » (contexte, frontières), objectifs du support 12 (Kano, cinq familles de techniques), Do/Don't des cas d'utilisation, take-away.
- **C** — Projets : Deadbot (questionnaire, Kano, triage, priorisation, cahier des charges), système à IA (technique d'élicitation justifiée, NFR de confiance et conformité).
- **Inconnu** — format de l'examen 2026 ; aucun corrigé officiel.

## Compétences
| # | Savoir-faire | Preuve | Chapitre |
|---|---|---|---|
| I1 | Juger un vrai/faux d'annale et justifier un FAUX (mot absolu, précision inversée) | A | tous |
| I2 | Corriger une exigence (caractéristiques ISO, termes à bannir, shall/may/will) | A | 2, 6 |
| I3 | Corriger un diagramme de cas d'utilisation et spécifier un cas | A | 4 |
| I4 | Corriger un modèle de buts KAOS (ET / OU, soft goals) | A | 10 |
| I5 | Appliquer l'AHP à une matrice de comparaisons par paires | A | 10 |
| I6 | Classer avec Kano, choisir et justifier des techniques d'élicitation | A/C | 5, 10 |
| I7 | Répondre à une réflexion (outils, documentation, vérifiabilité) | A | 6 |
| I8 | Situer contexte, frontières, zone grise | B | 4 |
| I9 | Classer une exigence (Glinz) et raffiner une NFR | A | 3 |

## Dépendances
pourquoi les exigences (1) → vocabulaire et exigence bien formée (2) → NFR (3) → contexte et cas d'utilisation (4) → élicitation et Kano (5) → documentation, qualité, revues (6) → priorisation et modèles de buts (10) → élargissements : agilité (7), grands référentiels (8), fondements (9).

## Architecture (ordre d'affichage via `course.json.chapterOrder`)
| Ordre | Fichier | Question directrice | Fonction |
|---|---|---|---|
| 1 | `01-pourquoi-les-exigences` | Pourquoi tant de projets échouent-ils, et en quoi les exigences changent-elles la donne ? | fondation |
| 2 | `02-normes-certification` | Qu'est-ce qui fait d'une phrase une bonne exigence, et comment corriger une exigence mal écrite ? | méthode centrale (I2) |
| 3 | `03-exigences-non-fonctionnelles` | Qu'est-ce qu'une NFR, comment la classer et la relier aux FR ? | méthode (I9) |
| 4 | `04-analyse-du-contexte` | Où s'arrête le système, et comment le représenter avec des cas d'utilisation ? | méthode centrale (I3, I8) |
| 5 | `05-elicitation` | Comment faire émerger les exigences, auprès de qui, avec quelle technique ? | méthode (I6) |
| 6 | `06-documenter-les-exigences` | Comment écrire, organiser et vérifier un document d'exigences ? | méthode centrale (I1, I7) |
| 7 | `10-priorisation-modeles-de-buts` | Comment décider quoi garder, dans quel ordre, et le modéliser ? | méthode centrale (I4, I5) |
| 8 | `07-agilite` | Agile ou plan-driven ? | élargissement (hors annales) |
| 9 | `08-grands-referentiels` | Comment outiller des milliers d'exigences en langage naturel ? | élargissement (hors annales) |
| 10 | `09-fondements-theoriques` | Que décrit vraiment une exigence ? | élargissement (hors annales) |

Partiels : `exams/annale-2013.json`, `exams/annale-2014.json` (corrigés proposés, 2014 Q13 omise faute de source).

## Points à confirmer avec les notes de cours
- Matrice d'Eisenhower (2014 Q18) : nom absent de toutes les sources disponibles.
- IEEE 830 « trois sous-parties » (2014 Q11) et FR → NFR (2014 Q7) : corrigés FAUX proposés, à confirmer.
- 2013 Q6 (Pohl) : corrigé VRAI proposé (l'ancien contenu disait FAUX).
