# PLAN — ISI7 · Systèmes décisionnels (R. Bijaoui) — reconstitué, non officiel

> **Ce plan est une reconstruction, pas le plan du professeur.** Le prof ne transmet pas ses diapositives complètes. Nous n'avons que deux sources partielles ; ce document dit, pour chaque chapitre, ce qui est **confirmé** par elles, ce qui est **fortement probable**, et ce qui est un **complément** apporté par des sources externes citées. Statut : `proposé — à valider par l'utilisatrice` (étapes 1 et 3 du pipeline `docs/04`).
> Examen : **22 février 2027, 10 h, durée 1 h 30** (diapositives). Contenu rédigé le 2026-11-14.

## 1. Les deux sources et leurs limites

| Source | Nature | Ce qu'elle contient | Limites |
|---|---|---|---|
| `ressources/S3__ISI7/markdown/isi7.md` | Transcription **partielle** des diapositives du prof (anglais) | Objectifs d'apprentissage, cadre du cours, calendrier, **séquencement des 10 demi-journées**, définition de la BI, pressions externes/internes, Balanced Scorecard, opérer/piloter, cinq pain points, vocabulaire (3 familles), échelle de maturité, agenda, principes fiable/prévisible/disponible, grille d'atelier, extraits A, B, C | Contenu de la section 1 de l'agenda (« décider dans l'incertitude ») absent ; **extrait D absent** (la grille annonce une ligne D) ; aucun contenu des séances 2 à 10 hormis une ligne de séquencement chacune |
| `ressources/S3__ISI7/cours_14092026.md` | Compte rendu automatique de la séance du **14 octobre 2026** (le nom de fichier dit 14092026) : « Summary » généré + « Transcript » | Format de l'examen, phases d'un projet BI, rôles, change management, évolution des technologies (ELT, self-service, couche sémantique, Big Data, lac, lakehouse, streaming, analytique augmentée), data mesh, ontologies, graphes de connaissances, RGPD, RSE, BI frugale, messages clés | Le *Summary* est un résumé machine ; la *Transcript* est bruitée et mêle FR/EN (« anthologies » = ontologies, « data mounts » = data marts, « BA system » = BI system…) |

## 2. Étape 1 — ce que disent (ou ne disent pas) les sources

**Explicite** (cité tel quel dans les chapitres) : objectifs *Situate / Architect / Model / Evolve* ; répartition 1 demi-journée de contexte, 3 d'architecture, 6 de modélisation ; BI = stratégies + méthodologies + technologies (QUOI / POURQUOI / COMMENT) ; sept pressions externes, cinq fonctions internes, BSC (quatre perspectives) ; tableau opérer/piloter (6 critères) ; cinq pain points, chaîne symptôme → besoin → caractéristique → composant, trois principes (fiable, prévisible, disponible), tension pain points 3/5 ; six termes de la famille 1, niveaux de décision, reporting/analyse, rapport/tableau de bord, drill-down, alerte, fraîcheur ; quatre couches (sources, transit, entrepôt, data marts), sécurité par rôle et par ligne, gouvernance, *data owner* ; échelle de maturité (quatre niveaux, piège « type de question, pas outil », pas de saut de niveau) ; grille d'atelier ; cinq phases de projet, deux spécifications, rôles, coût d'une erreur, cinq points du changement, mesure d'adoption ; ELT/ETL, self-service, couche sémantique, Big Data (3 V), lac, lakehouse, streaming, analytique augmentée, data mesh, ontologie, graphe de connaissances, RGPD, RSE, BI frugale ; ordre des séances 5 à 10 ; critère « les rapports de l'année 1 gardent leur sens ».

**Implicite / déduit** (signalé « notre lecture » dans les chapitres) : correspondance couche → principe ; classement des extraits A, B, C dans la grille (aucun corrigé n'est donné) ; sens de « indicateur cousin » ; réponse du prof aux quatre changements de l'objectif « Évoluer ».

**Absent** (complété par des sources externes, ou marqué « absent ») : tout le contenu technique des séances 2 à 10 (architecture, modèle dimensionnel, SCD, faits sans mesure, évolution) ; la formulation exacte de PESTEL ; le texte original de Gartner pour l'échelle de maturité ; la **variante simplifiée** du prof ; l'extrait D.

## 3. Étape 2 — chapitres et niveau de confiance

Légende : **C** = confirmé par les sources du prof · **P** = fortement probable (annoncé, contenu reconstitué) · **K** = complément externe cité (jamais présenté comme dit par le prof).

| # | Fichier | Séance(s) | Confiance | Sources principales |
|---|---|---|---|---|
| 01 | `01-piloter-par-les-chiffres` | 1 | **C** | diapositives ; K : Porter (HBS), Kaplan & Norton 1992, Strathern 1997 |
| 02 | `02-operer-ou-piloter` | 1 | **C** | diapositives ; K : Chaudhuri & Dayal 1997, Kimball & Ross |
| 03 | `03-pain-points-principes` | 1 | **C** | diapositives + oral ; K : Kimball & Ross (7 exigences) |
| 04 | `04-vocabulaire-decisionnel` | 1 | **C** | diapositives |
| 05 | `05-echelle-de-maturite` | 1 | **C** | diapositives + oral |
| 06 | `06-atelier-diagnostic` | 1 | **C** (extraits) / **P** (corrigés) | diapositives (grille, extraits A-C) ; extrait D et corrigés = les nôtres |
| 07 | `07-projet-bi` | 1 (14/10) | **C** | compte rendu |
| 08 | `08-pile-technologique` | 1 (14/10) | **C** | compte rendu ; K : NIST, Armbrust 2021, dbt |
| 09 | `09-data-mesh-ontologies` | 1 (14/10) | **C** | compte rendu ; K : Dehghani, Gruber, Hogan |
| 10 | `10-reglementation-durabilite-sobriete` | 1 (14/10) | **C** | compte rendu ; K : RGPD (reproduction), Commission européenne |
| 11 | `11-couches-architecture` | 2-4 | **P** | séquencement + objectif + diapositive des couches ; K : Kimball & Ross |
| 12 | `12-choisir-justifier-architecture` | 2-4 | **P** (annonce) / **K** (contenu) | objectif « Architecturer » ; K : Kimball & Ross, Armbrust |
| 13 | `13-premiere-etoile` | 5 | **P** | séquencement ; K : Kimball Group, Kimball & Ross |
| 14 | `14-dimensions-conformes-bus` | 6 | **P** | séquencement ; K : Kimball Group |
| 15 | `15-historiser-scd2` | 7 | **P** | séquencement ; K : Kimball Group |
| 16 | `16-faits-sans-mesure` | 8 | **P** | séquencement ; K : Kimball Group |
| 17 | `17-evolution-cas-complet` | 9-10 | **P** | séquencement + objectif « Évoluer » ; K : Kimball Group, Kimball & Ross |

**Logique** : contexte (1-6) → conduite et écosystème (7-10) → architecture (11-12, car « l'architecture précède la modélisation ») → modélisation (13-17, chaque séance reprenant les précédentes). Poids par rapport à l'examen annoncé : sections 1 et 2 = **majeure partie** (chapitres 1 à 6, et 7 à 10 en probable), architecture = **une partie**, séances 5 à 10 = **partie courte**. Les chapitres 11 à 17 portent donc moins de questions de partiel mais sont indispensables pour l'objectif « Modéliser » et « Évoluer ».

## 4. Ressources de révision

- **17 chapitres** : récit en épisodes, glossaire bilingue, points clés, flashcards, quiz (10-13 par chapitre, ≥ 50 % de vrai/faux), exercices corrigés (2-3), atelier d'anglais, synthèse.
- **4 partiels blancs** (`exams/blanc-01` à `blanc-04`, 1 h 30, 20 points, corrigé détaillé et barème) : 1 = format annoncé (définitions, interview, architecture, modèle) ; 2 = QCM, deux interviews, variante simplifiée, bus matrix ; 3 = cas complet type séance 10 ; 4 = réflexion multi-chapitres et calculs (SCD de type 2, couverture).
- `notions.json` (136 notions, importance ★ à ★★★) et `PROFIL-PROF.md`.

## 5. Sources externes consultées (`sources-texte/isi7/ext-*.md`)

Extraits copiés tels quels, avec référence, URL et date de consultation (2026-11-14), déclarés `complement` dans `sources.json` ; ils ne définissent jamais seuls un terme du glossaire.

| Fichier | Référence |
|---|---|
| `ext-kimball-ross-2013-ch1` | Kimball & Ross, *The Data Warehouse Toolkit* 3ᵉ éd., chap. 1 (extrait éditeur Wiley) |
| `ext-kimball-2013-techniques` | Kimball Group, *Dimensional Modeling Techniques* |
| `ext-chaudhuri-dayal-1997` | Chaudhuri & Dayal, *An Overview of Data Warehousing and OLAP Technology*, SIGMOD Record 1997 |
| `ext-armbrust-2021-lakehouse` | Armbrust et al., *Lakehouse*, CIDR 2021 (auteurs Databricks : article de position) |
| `ext-dehghani-2020-data-mesh` | Dehghani, *Data Mesh Principles and Logical Architecture*, 2020 |
| `ext-gruber-1993-ontology` | Gruber, *A Translation Approach to Portable Ontology Specifications*, 1993 |
| `ext-hogan-2021-knowledge-graphs` | Hogan et al., *Knowledge Graphs*, ACM Computing Surveys 2021 |
| `ext-gdpr-2016-679` | Règlement (UE) 2016/679, art. 4, 5, 15, 17 — **reproduction non officielle** (EUR-Lex inaccessible par le client HTTP) |
| `ext-ec-csrd-2026` | Commission européenne, page « Corporate sustainability reporting » (12/11/2026) |
| `ext-kaplan-norton-1992-bsc` | Kaplan & Norton, HBR 1992 (copie numérisée, OCR) |
| `ext-strathern-1997-goodhart` | Strathern, *European Review* 1997 (formulation de la loi de Goodhart) |
| `ext-hbs-porter-five-forces` | Harvard Business School, ISC, *The Five Forces* |
| `ext-nist-sp1500-1-big-data` | NIST SP 1500-1r2 |
| `ext-dbt-semantic-layer` | dbt Labs, documentation (source éditeur) |

**Tentatives sans succès** (rien n'a été cité de ces sources) : Gartner (pages du glossaire en 403 : l'échelle de maturité n'est donc attribuée à Gartner que *par la diapositive*), EUR-Lex (page de protection), version HBS du BSC (404), CIPD pour PESTEL (403).

## 6. Points à confirmer avec tes notes de cours

1. Contenu réel des séances 2 à 10 (nos chapitres 11 à 17 suivent le séquencement, pas ses diapositives) — en particulier la **variante simplifiée** d'architecture et la définition d'« indicateur cousin ».
2. Corrigés de l'atelier (extraits A, B, C) : proposés, non officiels ; l'extrait D n'est pas dans les sources.
3. Lettres de PESTEL (non détaillées dans les diapositives transcrites).
4. Périmètre actuel de la CSRD après le paquet « Omnibus I » : la page de la Commission est citée, aucun seuil n'est affirmé.
5. Poids exact à l'examen des séances 7 à 10 de l'introduction (projet, technologies, mesh, réglementation) : « sections 1 et 2 = majeure partie » ne dit pas si elles en font partie.
6. Format exact du partiel : aucune annale ; les 4 partiels blancs sont inventés.

## 7. Rapport de relecture

- Validateur de contenu : 0 erreur, 0 avertissement ; chaque citation est retrouvée mécaniquement dans son fichier ; couverture des notions ★★★ et ★★ à 100 %.
- Agents `fact-checker` et `content-reviewer` **non lancés** : chapitres et partiels en `draft`. À faire avant le badge « Vérifié ».
