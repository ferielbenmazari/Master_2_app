# PARCOURS — ISI1 · Ingénierie des exigences (C. Salinesi)

> Architecture pédagogique (docs/06 §9 et §10), refonte du 2026-11-13, restructurée le 2026-11-18. Sources : supports du prof (`sources-texte/isi1/1…20`), annales 2013 et 2014 (`ressources/S3__ISI1/Markdown/examen_2.md`, `examen_3.md`), projets Deadbot et IA (`exam_1.md`, `examen_4.md`) ; sources externes citées pour les notions d'annale absentes des supports (`sources-texte/isi1/ext-*.md`).

## Objectif du module
Savoir pourquoi les exigences font échouer les projets, les éliciter, les écrire correctement, les documenter, les prioriser et les modéliser, puis vérifier leur qualité.

**Problématique centrale** : comment obtenir, écrire et faire valider des exigences sur lesquelles tout le monde est d'accord et qu'on peut vérifier ?

## Preuves concernant l'évaluation
- **A** — Annales 2013 et 2014 (1 h 30, sans document) : vrai/faux justifié (5 puis 10 points), correction d'un modèle de cas d'utilisation et d'un modèle KAOS (2013), correction d'exigences R1-R5 (2014), calcul AHP (2014), réflexion (2013, 2014). Énoncés répétés : identifiant unique, Kano, cas d'utilisation, cadre de Pohl, revues, triage.
- **B** — Insistance des supports du prof : « terms to remember » (contexte, frontières), objectifs du support 12 (Kano, cinq familles de techniques), Do/Don't des cas d'utilisation, take-away.
- **C** — Projets : Deadbot (questionnaire, Kano, triage, priorisation, cahier des charges), système à IA (technique d'élicitation justifiée, NFR de confiance et conformité).
- **Inconnu** — format de l'examen 2026 ; aucun corrigé officiel.

## Compétences
| # | Savoir-faire | Preuve | Chapitre (ordre d'affichage) |
|---|---|---|---|
| I1 | Juger un vrai/faux d'annale et justifier un FAUX (mot absolu, précision inversée) | A | tous |
| I2 | Corriger une exigence (qualités ISO, mots à bannir, shall/may/will) | A | 4 |
| I3 | Corriger un diagramme de cas d'utilisation et spécifier un cas | A | 9 |
| I4 | Corriger un modèle de buts KAOS (ET / OU, soft goals) | A | 9 |
| I5 | Appliquer l'AHP à une matrice de comparaisons par paires | A | 8 |
| I6 | Classer avec Kano, choisir et justifier des techniques d'élicitation | A/C | 7 |
| I7 | Répondre à une réflexion (outils, documentation, vérifiabilité) | A | 5 |
| I8 | Situer contexte, frontières, zone grise | B | 6 |
| I9 | Classer une exigence (Glinz) et raffiner une NFR | A | 3 |

## Architecture (refonte structurée terminée le 2026-11-18, voir `REFONTE-ARCHITECTURE.md`)
Ordre : comprendre (1-2) → caractériser une exigence (3-4) → documenter et gérer (5) → la découvrir (6-7) → décider et modéliser (8-10, dont i*) → préparer le partiel (11) → lectures complémentaires (12-14). C'est le plan du prof (Introduction, Documentation, Élucidation, Négociation, Modèles, Gestion). À l'intérieur de chaque chapitre, les parties vont du plus important au moins important pour le partiel.

| Ordre | Fichier | Question directrice | Niveau |
|---|---|---|---|
| 1 | `11-fondamentaux` | Qu'est-ce qu'une exigence, et avec quels cadres raisonne-t-on ? | B-C |
| 2 | `01-pourquoi-les-exigences` | Pourquoi les projets échouent-ils ? | B |
| 3 | `03-exigences-non-fonctionnelles` | Comment reconnaître et classer FR, NFR et contraintes ? | A (I9) |
| 4 | `12-bonne-exigence` | Qu'est-ce qu'une bonne exigence, et comment corriger une exigence fautive ? | A (I2) |
| 5 | `06-documenter-les-exigences` | Comment garder un ensemble d'exigences identifiable, traçable, compris et modifiable ? | A (I7) |
| 6 | `04-analyse-du-contexte` | Où s'arrête le système, et qu'est-ce qui l'influence ? | B (I8) |
| 7 | `05-elicitation` | Quel type d'exigence cherche-t-on (Kano), et avec quelle technique ? | A-B (I6) |
| 8 | `10-priorisation` | Comment décider quelles exigences garder, et dans quel ordre ? | A (I5) |
| 9 | `13-modeliser` | Comment représenter fonctions et buts, et corriger un modèle fautif ? | A (I3, I4) |
| 10 | `14-istar` | Comment modéliser ce que chaque acteur attend des autres (i*) ? | A (demande du prof, A13 Q3) |
| 11 | `15-preparer-partiel` | Comment ne rater aucune bonne réponse, même quand le prof emploie un mot non vu ? | A (annales 2013, 2014) |
| 12 | `07-agilite` | Agile ou plan-driven ? | E (fiche courte) |
| 13 | `08-grands-referentiels` | Comment outiller des milliers d'exigences en langage naturel ? | E (fiche courte) |
| 14 | `09-fondements-theoriques` | Que décrit vraiment une exigence ? | E (fiche courte) |

Partiels : `exams/annale-2013.json`, `exams/annale-2014.json` (corrigés proposés, 2014 Q13 omise faute de source).

## Points à confirmer avec les notes de cours
- Matrice d'Eisenhower (2014 Q18) : nom absent de toutes les sources disponibles.
- IEEE 830 « trois sous-parties » (2014 Q11) et FR → NFR (2014 Q7) : corrigés FAUX proposés, à confirmer.
- 2013 Q6 (Pohl) : corrigé VRAI proposé (l'ancien contenu disait FAUX).
