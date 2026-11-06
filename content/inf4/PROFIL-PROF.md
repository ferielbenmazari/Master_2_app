# PROFIL-PROF — INF4 (Software) Product Line Engineering (C. Salinesi, C. Correa Restrepo)

> Produit par `course-analyst` le 2026-11-06 à partir des 7 PDF originaux extraits dans `sources-texte/inf4/` (le PDF fait foi) et des transcriptions M5 (anglais des slides 6). **Il n'existe aucune annale ni consigne d'évaluation dans les ressources INF4** : tout ce qui suit est dérivé des exercices, questions de discussion et slides-listes des supports. Les tournures entre « » sont copiées des supports (référence [fichier, page]) ; ce qui est une déduction est marqué *à confirmer*.
> Fichiers : **S1** = `1-introduction-to-ple.md`, **S2** = Böckle (`2-software-…`), **S3** = livre, partie IV (`3-book-chapter-…`), **S4** = RED-PL (`4-redpl-caise07.md`), **S6** = slides « (Software) PLE » (`6-redpl-caise07.md`), **S7** = slides transformation / vérification (`7-domain-…`), **S8** = Pohl ch.10 (`8-chapitre-livre-…`).

## 1. Formats d'évaluation
- **Aucune annale, aucun barème, aucune consigne d'examen dans les supports.** Format réel du contrôle : *à confirmer* auprès de l'enseignant (les partiels blancs seront donc construits sur les formats d'exercice ci-dessous — `exams/blanc-01.json`).
- Formats d'exercice **effectivement présents** dans les slides :
  1. **Analyse manuelle d'un feature model** : construire des produits, compter l'espace des combinaisons (2^13) et les produits réellement permis (46), expliquer pourquoi [S6 p. 26-27].
  2. **Construire un modèle de variabilité à partir d'exigences rédigées au gabarit** (R1-R5 + contrainte C1, ligne de magasins d'électroménager) [S6 p. 68-69].
  3. **Traduire un feature model en programme par contraintes (GNU Prolog)**, générer les configurations, la sémantique, compter les produits, repérer les défauts [S7 p. 13-18] ; représenter un PLM en contraintes de haut niveau [S7 p. 19-22] ; exercices sur les cardinalités individuelles [S7 p. 11].
  4. **Vérifier / diagnostiquer / corriger un PLM** : vide ? feature morte ? corrections par effacement ou relâchement d'un MUS [S7 p. 49, 56, 62-77].
  5. **Quiz de définitions à apparier** (design / engineering / craft / art) [S1 p. 9].
  6. **Questions de discussion ouvertes** (limites des feature models, dialectes, influence du premier produit choisi) [S6 p. 39, 77].
  7. **Jeux d'ouverture** (gardes britanniques, sandwicherie) : décrire en même temps (« AT THE SAME TIME ») communalité, variabilité et dépendances [S1 p. 5-8].
- Pour l'article RED-PL (ch.08) et le livre de Pohl et al. (ch.04-06) : aucun exercice dans les supports ; questions d'examen probables = définitions, listes numérotées, catégories A-D, formules ILP (*à confirmer*).

## 2. Tournures typiques des énoncés (copiées telles quelles)
- « Construct at least 12 unique products from this model » [S6 p. 26]
- « What is the space of possible combinations with these features? » [S6 p. 27]
- « How many are actually allowed by the model? » [S6 p. 27] — suivi de « Why? » [S6 p. 27]
- « Create the variability model (e.g., feature model) based on the following requirements and constraint of an appliance store product line. » [S6 p. 68]
- « Let’s transform the following model into a constraint program in GNU Prolog » [S7 p. 13]
- « How to generate some configurations automatically? » [S7 p. 13]
- « How many products in the model? » [S7 p. 13]
- « Are there some problems in the model? Which ones? » [S7 p. 18]
- « Exercise: represent the following PLM as a high-level (solver-independent) constraint program » [S7 p. 19]
- « Exercise: How to proceed to know if the models is void or not, and how to find the dead feature(s) if any? » [S7 p. 49]
- « Let’s diagnose, by manual inspection, why the model is void » [S7 p. 62]
- « Exercise: try to fix the defect which make the model void: erasing a MUS (e.g., one requires) » [S7 p. 69]
- « Exercise: diagnose, by manual inspection, why F5 is a dead feature? Why F4, F8 and F9 are also dead? » [S7 p. 75]
- « Exercise: propose two solutions to fix the "F5 dead feature" error » [S7 p. 76]
- « Homework: verify if this evolved model is void or not » [S7 p. 56]
- « Can you distinguish the following definitions? » [S1 p. 9] ; « Match the following terms with their definitions » [S1 p. 9]
- « Do you believe these concepts are sufficient to express any product line? Why or why not? » [S6 p. 39]
- « What is the influence of the choice of the first (/2nd / 3rd / etc) product ? » [S6 p. 77]
- « Find a way to describe both AT THE SAME TIME ! » [S1 p. 5] ; « How would you approach this task? » [S1 p. 8]
- Objectifs de chapitre en « How to… » (livre) : « How to identify deltas between stakeholder requirements and product line requirements. » [S3 ch.15] ; « How to bind variability in the reference architecture. » [S3 ch.16] ; « How to reuse domain test artefacts for a particular application. » [S3 ch.18]
- Gabarit de rédaction d'exigence (S6 p. 64) : « [Condition or event], ALL|SOME SYSTEMS OF THE <Product line name> <Priority> ... » ; l'exercice emploie les modaux SHALL, SHOULD et COULD dans ce gabarit (R1-R5, p. 68).

## 3. Pièges récurrents
Tous dérivés des supports (références) ; l'importance d'examen de chacun est *à confirmer*.
- **Extensive vs intensive** : le cours 1 écrit « Extensive specification » / « Intensive specification » [S1 p. 18], les slides écrivent « Extensive representation » / « Intensive representation » [S6 p. 6, 10]. Ne pas mélanger niveau domaine (PLM, intensif) et niveau produit (PM, extensif) [S6 p. 10].
- **Variabilité (cadrage) vs variabilité de la solution** : la flexibilité est « called “variability” in the software product-line context » [S2 §1.2.2] ; la variabilité gérée se modélise *en commun* pour exigences, architecture, composants, tests [S2 §1.4.1].
- **Un point de variation n'est pas créé pour chaque différence** : « However, not for every difference a variation point is defined. » [S8 §10.7].
- **Variabilité externe vs interne** : seule la part offerte au client est « external variability » ; la décision finale revient à la gestion de produit [S8 §10.8, §10.8.4].
- **Fonctions CP des relations** (S7 p. 6-9, 50) : *optional* = F1 ≥ F2 (parent ≥ enfant) ; *mandatory* = F1 = F2 ; *requires* = F1 ⇒ F2 donc F2 ≥ F1 ; *excludes* = F1 + F2 ≤ 1 ; inversion fréquente du sens des inégalités.
- **Sens de l'inégalité en ILP** : texte « If requirement xb is selected, then requirement xa must be selected too » ⇒ xb ≤ xa [S4 §3.2], tableau 1 : Ra requires Rb ⇒ Ra ≤ Rb — le nom des variables change entre le texte et le tableau.
- **Cardinalités** : `[m..n]` = feature cardinality, `<m..n>` = group cardinality [S6 p. 32] ; en CP la cardinalité de groupe donne m·F0 ≤ ΣFi ≤ n·F0 [S7 p. 10, 50].
- **Défauts d'un PLM** : *void* (aucun produit) ≠ *false* (un seul produit : `find(M,2)` échoue) ≠ *dead* (jamais sélectionnable : contrainte de vérification `F5 #= 1` sans solution) ≠ *false optional* (optionnelle mais toujours présente : `F5 #= 0` sans solution) ≠ *redundant* (négation de la dépendance) [S7 p. 55, 58]. La vérification **réussit quand elle trouve un défaut** (absence de solution avec la contrainte de vérification).
- **Effacer ne suffit pas** : effacer les exclusions ne rend pas le modèle non vide [S7 p. 65] ; effacer un MUS peut donner un modèle *faux* « not good in PLE » [S7 p. 70].
- **Réutilisation sans test** : Ariane 5 — « Code reuse in a different context without testing » [S1 p. 19] ; écho dans le livre : tests du domaine rejoués même pour le code commun [S3 §18.4.1, §18.5.1].
- **Catégories A-D** : un delta de type « nouveau point de variation » ou « adaptation des dépendances de contrainte » ne tombe jamais en catégorie A ; un delta de catégorie D est rejeté « unless the option exists to realise the desired application in a separate development project » [S3 §15.4.4, tableau 15-1].
- **Chiffres divergents entre supports** : bénéfices « time to market −98 % » [S1 p. 34] vs « factors of 2 to 50 » [S4 §1] ; point de rentabilité « around three systems » [S2 §1.3.1] vs « between three and four systems » (Weiss & Lai, cité par S2). Citer la source du chiffre.
- **Pièges de vocabulaire** : voir §6.

## 4. Notions sur lesquelles le prof insiste
Critères observés : slide ou schéma répété, exercice corrigé, objectif de chapitre, liste numérotée.
- **Triptyque communalité / variabilité / dépendances** (jeu des gardes + slide « Summary ») [S1 p. 5-7].
- **Six mécanismes de réutilisation**, chacun comparé à la ligne de produits sur une slide « X VS PL » : duplication, Δ, gestion de configuration, composants [S1 p. 16-23].
- **Domaine vs application, espace du problème vs espace de la solution** : schéma repris sur 4 slides du cours 1 ; plan de S6 répété à chaque intercalaire.
- **Feature models** : ~13 slides de diagrammes FODA, chacune suivie de sa « Semantics » ; exercice 2^13 → 46 [S6 p. 13-27].
- **Plan en 3 stratégies d'élicitation des exigences d'une PL** (dirigée par les exigences, bas/haut de gamme, multi-points de vue) [S6 p. 59-84].
- **Transformation FM → contraintes** : une slide par relation + tableau récapitulatif p. 50 + code Prolog [S7 p. 6-12, 50-53].
- **Typologie des critères de vérification** : répétée sur 3 slides [S7 p. 31, 41, 58].
- **Livre de Pohl et al.** : chaque chapitre annonce « In this chapter you will learn » (objectifs), numérote les définitions (15-1, 15-2, 18-1, 18-2…) et se termine par « Differences from Single-System Engineering » [S3, S8].
- **Deltas et catégories A-D** (tableau 15-1 + exemple 15-8) [S3 §15.4.4].
- **RED-PL** : six limites de la sélection, deux processus (matching, arbitration), cinq types de dépendances → ILP [S4 §1, §3].

## 5. Exemples et cas fétiches du prof (à réutiliser en priorité)
- **Gardes britanniques** (chapeau, moustache, ombre) [S1 p. 5-7] et **sandwicherie** [S1 p. 8].
- **Ford Model T**, chantiers de **Venise**, **Ariane 4/5**, **CelsiusTech**, **Hewlett Packard**, **Motorola FLEXworks**, **Baxter** [S1 p. 11, 19, 26-27].
- **Plates-formes automobiles**, **Kodak vs Fuji**, **Post-it 3M**, **Windows NT/XP** (SLOC) [S2].
- **Voiture** (Car, Transmission, Manual/Automatic, Horsepower, Air conditioning) [S6 p. 11] ; **système de freinage** [S6 p. 32] ; **analyseurs sanguins Stago** (Basic / Medium / Enriched ; RFID, barcode) [S6 p. 6-9 ; S4 §2] ; **UNIX** (Kernel, Shell, FileSystem, UserInterface) [S6 p. 61-77, S7 p. 32+] ; **TurtleBot** [S6 p. 30] ; **magasins d'électroménager** [S6 p. 68] ; **Movement Control System** [S7 p. 19] ; **airbags / rétroviseurs Renault** [S7 p. 78].
- **Domotique et sécurité domestique** (trois applications, vidéosurveillance, désactivation d'alarme) [S8 §10.9], **serrures à badge / empreinte / iris, portes coulissantes** [S3 ch.16-18].

## 6. Vocabulaire exact FR/EN employé par le prof (et termes à éviter)
Termes EN tels qu'écrits dans les PDF (le PDF fait foi). Le FR n'est pas imposé par les supports (cours en anglais) : usage libre mais cohérent.

| Concept | Terme EN exact (PDF) | À éviter / remarque |
|---|---|---|
| communalité / variabilité / dépendances | Commonality, Variability, Dependencies [S1] | — |
| personnalisation de masse | mass customization [S1], mass customisation [S2] | les deux orthographes existent (selon le support) |
| duplication | Duplication-based reuse, « Duplication (aka « copy & own ») » [S1 p. 16-18] | « copy/paste reuse » n'est pas le nom du mécanisme |
| deltas | Δ based reuse [S1 p. 18-20] | « delta-based reuse » |
| mécanismes | Six reuse mechanisms [S1 p. 16] | « four ways » |
| spécification extensive / intensive | Extensive / Intensive specification [S1 p. 18] ; Extensive / Intensive representation [S6] | — |
| modèle de ligne de produits | Product Line Model (PLM) ; Product Model (PM) [S6 p. 10] | — |
| feature model | Feature Model, FODA, Mandatory / Optional features, Alternatives (XOR), Group cardinalities, Requires, Mutex [S6] ; « Excludes » dans FORE [S6 p. 28] | — |
| modèle de variabilité orthogonale | orthogonal variability model (OVM) ; variation point, variant, variability dependency, constraint dependency, alternative choice [S8] | — |
| exigences | stakeholder requirements, application requirements, requirements delta, application requirements specification [S3 ch.15] | — |
| catégories d'adaptation | « four categories of architectural adaptation », Category A-D [S3 §15.4.4] | — |
| liaison | binding of variants, reference architecture, application architecture, texture [S3 ch.16] | — |
| tests | variant absence test, application dependency test, application commonality test, application variant test, application modification test, application extension test [S3 ch.18] | — |
| défauts de PLM | void PLM, False PLM, dead feature / dead artefact, False optional element, redundant dependency, verification constraint [S7 p. 42-55] | « false model » |
| sous-ensemble de contraintes | MUS (« sub-set of constraints (MUS) ») [S7 p. 68] | le PDF ne développe pas le sigle |
| diagnostic | MEDIC-PLM (MEthod to Diagnose InConsistent PLMs) [S7 p. 79-80] | « MENC » |
| RED-PL | Requirements Elicitation & Derivation for Product Lines ; matching process, arbitration process, similarity analysis (surface / deep level), what-if analysis, Integer Linear Programming (ILP), Akkar approach [S4] | — |

## 7. Ce qui rapporte des points
Aucun barème dans les supports : **tout ce qui suit est une déduction, à confirmer.**
- **Montrer la sémantique** : lister les produits d'un feature model ou donner l'ensemble `{[F1,F2,…],…}` comme dans les slides ; donner le **nombre** et justifier (« Why? ») [S6 p. 15-27].
- **Écrire les contraintes correspondant à chaque relation** (optional, mandatory, requires, excludes, cardinalités) avec les bonnes inégalités [S7 p. 6-12, 50].
- **Nommer le défaut** (void / false / dead / false optional / redondant) et **la contrainte de vérification** utilisée, puis proposer une correction justifiée (effacer ou relâcher un MUS) [S7 p. 55, 62-77].
- **Distinguer niveau domaine / niveau application** pour toute activité (exigences, conception, réalisation, test) et citer la différence avec l'ingénierie d'un système unique [S3 §15.6, §16.5, §17.5, §18.7 ; S8 §10.10].
- **Utiliser le vocabulaire exact** (§6) et les exemples du prof (§5).
