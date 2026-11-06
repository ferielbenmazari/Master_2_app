# PLAN — ISI1 Ingénierie des exigences

> Statut : **validé par l'utilisatrice (2026-11-04)**.
> ISI1 n'a pas de cours en Markdown → **extraction PDF obligatoire** (tâche C01) vers `sources-texte/isi1/`.

## Doublons écartés
- `EPI/19_IREB CPRE (3 - Eliciting requirements).pdf` = `12_…` (même taille) → garder 12.
- `EPI/9_Domain engineering (by reuse).pdf`, `10_…Part2.pdf`, `11_chapitre livre - Domain Engineering.pdf` = fichiers de INF4 → traités dans INF4, ici simple renvoi.
- `21_Klaus_Pohl_Chris_Rupp…(1).pdf` et `15_Requirements_Engineering (Pohl - Rupp) chap 4-5.pdf` : tailles proches → comparer à l'extraction, garder le plus complet.

## Chapitres proposés

| # | Fichier | Titre de travail | Sources (ressources/S3__ISI1/EPI/) | État |
|---|---|---|---|---|
| 01 | `01-pourquoi-les-exigences.json` | Pourquoi les projets échouent (et ce que l'IE y peut) | 1_IE Introduction · 4_chaos-report · 6_ChaosManifesto2013 | à faire |
| 02 | `02-normes-certification.json` | Normes et certification (ISO/IEC 29148, IREB CPRE) | 2_Certification · 3_ISOIEC CD 29148 | à faire |
| 03 | `03-exigences-non-fonctionnelles.json` | Exigences non fonctionnelles | 5_on NFRs | à faire |
| 04 | `04-analyse-du-contexte.json` | Analyser le contexte du système | 7_IREB CPRE (2) · 8_RE fundamentals - context analysis | à faire |
| 05 | `05-elicitation.json` | Éliciter les exigences | 12_IREB CPRE (3) · 20_Eliciting requirements | à faire |
| 06 | `06-documenter-les-exigences.json` | Documenter les exigences | 14_IREB CPRE (4) · 15_Pohl-Rupp chap 4-5 · 21_Pohl-Rupp | cours rédigé (draft) |
| 07 | `07-agilite.json` | Exigences et méthodes agiles | 13_agile methods | cours rédigé (draft) |
| 08 | `08-grands-referentiels.json` | Gérer de grands référentiels d'exigences en langage naturel | 16_managing large repositories of NL requirements | cours rédigé |
| 09 | `09-fondements-theoriques.json` | Les « 4 coins sombres » et les Problem Frames | 17_four dark corners · 18_Problem Frames | cours rédigé (draft) |

## Notions des annales à couvrir (contrôle de couverture)
Identifiant unique & traçabilité · modèle de **Kano** (must-have, exciters) · **i*** (soft goals) · **KAOS** (AND/OR, raffinement) · **cas d'utilisation** (erreurs de modélisation) · **cadre tridimensionnel de Pohl** (spécification, représentation, accord) · **AHP** · **triage** · revues · approche top-down / bottom-up · NFR qui s'affinent · outils (Excel, Word, wiki, Quality Center).
→ Si une notion est absente des sources extraites, la noter ci-dessous au lieu de l'inventer.

## Absent des supports (relevé par course-analyst, étape 3)

Recherche plein texte dans les 13 supports `cours` + 3 `lecture` extraits (`sources-texte/isi1/`) : **aucune occurrence** de AHP, triage, top 10 / 100 $, matrice d'Eisenhower, i\* / soft goals, RGPD / éthique. Ces notions n'existent que dans les annales (`notions.json`, chapitre **« 10 » provisoire**, `src` = annales uniquement) — **ne pas inventer de définition** :

| Notion (id) | Annale | Ce que les supports contiennent quand même |
|---|---|---|
| `n-ahp` | 2013 Q9 ; 2014 C | rien (l'attribut « priorité » de l'ISO ≠ AHP) |
| `n-triage` | 2013 Q10 ; 2014 Q10 ; Deadbot | rien |
| `n-top10-vs-100-dollars` | 2014 Q14 | rien |
| `n-matrice-eisenhower` | 2014 Q18 | rien |
| `n-priorisation-exigences` | Deadbot (activité 4) | attribut *Priority* (ISO §5.2.7), mot « Priorisation » dans le cycle d'enquête (support 12) |
| `n-istar-soft-goals` | 2013 Q3 | rien |
| `n-kaos-or-xor` | 2013 Q4 et C | seulement « AND/OR goal refinement ex KAOS, Objectiver » (12) → notion `n-raffinement-buts-and-or` (ch. 05) |
| `n-nfr-critere-decision` | 2013 Q7 (a) | rien (b et c sont étayés par les supports 1 et 5) |
| `n-kano-vocabulaire-annales` | 2013 Q2 ; 2014 Q2, Q19 | le modèle de Kano existe (support 20) mais avec dissatisfier / satisfier / delighter ; « must have » et « exciter » n'apparaissent pas |
| `n-developpeurs-utilisateurs` | 2014 Q13 | rien |
| `n-integration-nouvelles-exigences` | 2014 Q4 | rien (rapprochement possible : « emergent property », ISO §4.1.12) |
| `n-ethique-rgpd-gouvernance-ia`, `n-nfr-confiance-transparence` | projet IA ; Deadbot | rien |
| `n-enquete-population-repondants` | Deadbot (livrable 2) | questionnaire (support 20) mais pas le plan d'enquête |

**Partiellement présents** (notion dans `notions.json` avec chapitre du plan, mais l'énoncé d'annale va plus loin que les supports) :
- `n-niveau-abstraction` (2014 Q16) : la règle « jamais de niveaux d'abstraction différents » n'existe pas ;
- `n-defauts-qualite-exigences` (2013-2014 Q8) : « sous-spécification » absent (le plus proche : « silence ») ;
- `n-bottom-up-top-down` (2014 Q3) : les supports parlent de compléter les exigences, pas de conformité à l'architecture ;
- `n-focus-group` : cité (supports 12 et 14), jamais défini ;
- `n-ieee-830` (2014 Q11) : la slide du support 14 liste « functional / non-functional / interface requirements, … » (points de suspension) ;
- `n-cadre-3d-pohl` : seulement le schéma de la slide « The 3 dimensions of RE » (support 12) ; l'extraction texte est fragmentaire.

**Chapitre 10 provisoire** : l'orchestrateur doit décider s'il crée un chapitre « Priorisation et modèles de buts (annales) » ou s'il traite ces notions dans des exercices d'annale uniquement (sans cours). Notions concernées : voir `notions.json` → `"chapter": "10"` (14 notions).

**Qualité des sources** : les supports 1 et 2 sont des slides au texte abîmé (`ti` → `=`, `tt` → `c`) ; les supports 5, 13, 17 (partiel), 18 sont en deux colonnes (citations courtes, une seule ligne ou colonne à la fois) ; le schéma des slides (cadre de Pohl, KAOS, Kano) n'est pas extrait.

## Partiels
| Fichier | Source | Type |
|---|---|---|
| `exams/2013-janvier.json` | Markdown/examen_2.md | past |
| `exams/2014-session.json` | Markdown/examen_3.md | past |
| `exams/etude-de-cas-deadbot.json` | Markdown/exam_1.md | past (étude de cas) |
| `exams/etude-de-cas-systeme-ia.json` | Markdown/examen_4.md | past (projet / cahier des charges) |
| `exams/blanc-01.json` | généré | mock |

## Rapport de relecture
(à compléter par content-reviewer)
