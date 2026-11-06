# PLAN — INF4 (Software) Product Line Engineering

> 8 Markdown déjà disponibles (`ressources/S3__INF4/mardown/`, noter la faute « mardown »), en majorité déjà en français, sauf `3__application_engineering.md` (anglais, 128 Ko → **découper en 2 chapitres**).
> `5__soft_ple_detailed.md` et `6__ple.md` décrivent les mêmes slides → fusionner, ne pas dupliquer.

## Doublons
- `EPI/6__REDPL_CAiSE07.pdf` a la même taille que `S3__ISI1/EPI/9_Domain engineering (by reuse).pdf` → nom trompeur, c'est le support « Domain engineering by reuse ».
- `EPI/7_…` = `S3__ISI1/EPI/10_…` ; `EPI/8_…` = `S3__ISI1/EPI/11_…`

## Chapitres

| # | Fichier | Titre de travail | Source (mardown/) | État |
|---|---|---|---|---|
| 01 | `01-variabilite.json` | Du sur-mesure à la ligne de produits : la variabilité | 1__introduction.md | à faire |
| 02 | `02-principes-spl.json` | Les principes des lignes de produits logiciels | 2__software_ple.md | cours rédigé (draft) |
| 03 | `03-cadre-ple.json` | Le cadre PLE : domaine vs application, problème vs solution | 5__soft_ple_detailed.md + 6__ple.md | cours rédigé (draft) |
| 04 | `04-exigences-de-domaine.json` | Ingénierie des exigences de domaine & modèle OVM | 8__ple.md | cours rédigé (draft) |
| 05 | `05-ingenierie-application-1.json` | Ingénierie d'application (1/2) : exigences et variantes | 3__application_engineering.md (1re moitié) | cours rédigé (draft) |
| 06 | `06-ingenierie-application-2.json` | Ingénierie d'application (2/2) : architecture, réalisation, tests | 3__application_engineering.md (2e moitié) | draft |
| 07 | `07-transformation-verification.json` | Transformation de modèles, vérification et diagnostic | 7__ple.md | cours rédigé (draft) |
| 08 | `08-red-pl.json` | RED-PL : dériver les exigences produit | 4__overview.md | cours rédigé (draft) |

Ressource d'exercice : `EPI/5__configuration ILP(1).xlsx` (configuration par programmation linéaire en nombres entiers) → exercices du chapitre 07 ou 08.

## Partiels
Pas d'annale → `exams/blanc-01.json` (mock).

## Écarts détectés (termes EN : texte / glossaire actuel → PDF original)
> Établi le 2026-11-06 par `course-analyst` (notions.json) en cherchant chaque `glossary[].en` et chaque terme `**gras**` de la version EN dans `sources-texte/inf4/*.md`. Le PDF fait foi. À traiter par le `fact-checker` (C09). Les termes absents de la liste ont été retrouvés tels quels (ou ne sont que des tournures pédagogiques sans valeur de terme).

### Ch.01 — `01-variabilite.json`
- glossaire `copy/paste reuse` → **Duplication-based reuse** (PDF S1 p. 16-18 : « Duplication (aka « copy & own ») ») ; « Copy/paste » n'y est qu'une étiquette de schéma.
- glossaire `delta-based reuse` → **Δ based reuse** (S1 p. 18-20).
- gras `1. Duplication (copy/paste)` → « Duplication (aka « copy & own ») » ; `2. Deltas (Δ)` → « Δ based reuse » ; `3. Configuration management` → « Evolution - Configuration management » ; `4. Component-based reuse` (le PDF écrit « Componenent-based reuse », coquille : garder *Component-based reuse*).
- structure : le texte annonce **« four ways to reuse »** alors que le PDF présente **« Six reuse mechanisms »** (aussi *Aspects*, *Product lines*) — S1 p. 16.
- `mass customization` (graphie du cours 1) ≠ `mass customisation` (Böckle, ch.02) : les deux sont corrects selon le support cité.

### Ch.02 — `02-principes-spl.json`
- gras `Other motivations` → **Additional Motivations** (Böckle §1.3.4).
- (rien d'autre : platform, software platform, mass customisation, break-even point, software product line engineering sont conformes).

### Ch.03 — `03-cadre-ple.json`
- gras `rationale`, `composition rule` (exemple voiture), « Manual more fuel efficient », « Air conditioning requires Horsepower > 100 »: **absents du texte extrait du PDF** (étiquettes dans l'image) ; ils ne viennent que de la description de schéma de la transcription (M5 p. 11) → non vérifiables, à marquer `narrative` ou à retirer (C09 étape 3).
- glossaire `alternative (XOR)` → **Alternatives (XOR)** (S6 p. 16, 18) ; `feature model semantics` → **Semantics** (titre de slide) ; `cross-tree constraint (requires / mutex)` → « cross-tree constraints » (S6 p. 9) et « Requires », « Mutex » (p. 20) / « Excludes » (dialecte FORE p. 28).
- `extensive representation` / `intensive representation` sont **corrects pour S6** (p. 6-10) ; S1 p. 18 écrit **Extensive specification / Intensive specification** : citer le bon support (C09 cite à tort cet écart pour le ch.03).
- **Contenus des slides S6 non traités par le texte actuel** : stratégies d'élicitation (requirements-driven, low-end vs high-end / reference-product, multiviewpoint), gabarit d'exigence, exercice appliance store ; DOPLER détaillé (décisions, actifs, conditions d'inclusion).

### Ch.04 — `04-exigences-de-domaine.json`
- Glossaire conforme au PDF S8 (variation point, variant, variability dependency, constraint dependency, application–requirements matrix, strategic commonalities, Kano classification, Orthogonal Variability Model).
- gras `maximise commonality` → « as much commonality as possible » (S8 §10.6) ; `five activities` : le PDF liste Elicitation, Documentation, Negotiation, Validation and verification, Management.

### Ch.05 — `05-ingenierie-application-1.json`
- glossaire `architectural adaptation categories (A-D)` → **four categories of architectural adaptation** (« Category A – No adaptation effort » … « Category D – Too high adaptation effort », S3 §15.4.4).
- gras `four options` : terme de l'auteur ; le PDF dit « decision options » (3 issues §15.2) puis 4 alternatives au §15.4.4 (sans le mot « options »).

### Ch.06 — `06-ingenierie-application-2.json`
- Glossaire conforme au PDF (binding of variants, test bed, variant absence test, application dependency / commonality / variant test). Les gras `Binding variants`, `Three levels`, `System-level coverage` sont des intitulés pédagogiques : le PDF dit « Binding of Variants », « Application Test Coverage ».

### Ch.07 — `07-transformation-verification.json`
- glossaire `false model` (et gras `False model`) → **False PLM** (S7 p. 55, 70) / critère « Non-false » ; `false optional feature` → **False optional element** (tableau p. 55), « Non-false optional artefacts » (p. 41, 58) et « False Optional Features » (p. 59) ; `dead feature` conforme (« dead artefact » aussi).
- glossaire `MUS (minimal unsatisfiable subset)` : le PDF écrit seulement **MUS** (« a sub-set of constraints (MUS) », p. 68) ; l'expansion n'apparaît que dans la description de schéma de la transcription → retirer l'expansion ou la marquer non sourcée.
- gras `MENC` → **MEDIC-PLM** (« MEthod to Diagnose InConsistent PLMs », S7 p. 79-81) ; la précision « par réduction du graphe de contraintes » ne vient pas du PDF.
- gras `Model2Text` + l'exemple MiniUML (`Person`, `Student`) : issus de la description de schéma de la transcription (M5/M7), absents du texte extrait du PDF (S7 p. 3 : « model-to-text transformation », Ma/Mb, MMa/MMb) → non vérifiables.
- gras `FM metamodel`, `generic product line metamodel`, `Prolog facts` → PDF : « FM meta-model », « Generic Metamodel », « CLP representation of the meta-model ».
- gras `electric rear-view mirrors` : l'énoncé PDF p. 78 dit « exterior rear-view mirrors » (l'étiquette du schéma est « Rétro électriques »).

### Ch.08 — `08-red-pl.json`
- glossaire `solution-driven requirements` → « Requirements are solution-driven » (S4 §1) ; `maximize revenue under a global cost limit` conforme à « maximize revenue taking into account a global cost limitation ».
- `Akkar approach` : orthographe du texte de l'article (« The Akkar approach [12] ») alors que la référence [12] est *van den Akker et al.* — garder « Akkar » dans la citation, signaler l'auteur réel.
- Le PDF parle de « Constraint Programming » en perspective (cohérent avec le glossaire) ; « Multi Criteria Decision Making method » est aussi cité en conclusion.

## Rapport de relecture
(à compléter)
