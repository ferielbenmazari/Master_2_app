# Slide 1 : Page de garde

**Titre :** (Software) Product Line Engineering

**Auteurs :** Camille SALINESI, Camilo CORREA RESTREPO

**Institution :** UNIVERSITÉ PARIS 1 PANTHÉON SORBONNE

**Numéro de page :** 1

---

# Slide 2 : Objectif et calendrier du cours / Cadre global PLE

**Texte de la diapositive :**
Objectif et calendrier du cours : Vous aider à intégrer le *Product Line Engineering* (PLE) :

* dans votre pratique de développement &
* dans votre agenda de recherche

**Présence de schéma :** Oui, la diapositive présente le cadre général d'ingénierie des lignes de produits (*Product Line Engineering Framework*).

**Description du schéma :**
Le schéma est structuré en trois grands blocs horizontaux et deux espaces verticaux :

1. **SCOPING (Cadrage) - Colonne de gauche :**
* *Objectives and Market Analysis* (Analyse des objectifs et du marché) $\rightarrow$ *Rentability and Investment Analysis* (Analyse de rentabilité et d'investissement) $\rightarrow$ *Internal Analysis* (Analyse interne) $\rightarrow$ *Product Catalog/Portfolio* (Catalogue/Portefeuille de produits) $\rightarrow$ *Evolution* (Évolution).


2. **DOMAIN ENGINEERING (Ingénierie du Domaine) - Bloc supérieur :**
* **PROBLEM SPACE (Espace Problème / Analyse du domaine) :**
* *Domain Requirements Engineering* (Ingénierie des exigences du domaine).
* *Reference Domain Architecture Definition* (Définition de l'architecture de référence du domaine).
* *Variability Model* (Modèle de variabilité) : représenté sous forme d'arbre hiérarchique avec des variantes.


* **SOLUTION SPACE (Espace Solution / Implémentation du domaine) :**
* *Requirements Engineering of Domain Reusable Components* (Ingénierie des exigences des composants réutilisables).
* *Architecting of Components* (Architecturation des composants).
* *Implementation* (Implémentation).
* *Unit Testing* (Tests unitaires).
* *Binding Components to Variability Elements* (Liaison des composants aux éléments de variabilité).
* *Components Model / Domain Reusable Components* (Modèle de composants réutilisables du domaine).


* **Gestion centrale :** *Organizational and Technical Management* (Gestion organisationnelle et technique) liée par *Binding*, *Configuration* et *Capitalization (optional)*.


3. **APPLICATION ENGINEERING (Ingénierie d'Application) - Bloc inférieur :**
* **PROBLEM SPACE (Configuration et gestion de la personnalisation) :**
* *Application Requirements Engineering* (Ingénierie des exigences d'application).
* *Architecting* (Architecturation).
* *Customisation* (Personnalisation).
* *Configured products* (Produits configurés).


* **SOLUTION SPACE (Processus de dérivation) :**
* *Requirements Engineering of Derivation Process* (Ingénierie des exigences du processus de dérivation).
* *Architecting in Derivation Process* (Architecturation dans le processus de dérivation).
* *Implementation in Derivation Process* (Implémentation dans le processus de dérivation).
* *Integration Testing* (Tests d'intégration).
* *Derivation artifacts* (Artefacts de dérivation).
* *PRODUCTS* (Produits finaux).





**Compréhension / Analyse du schéma :**
Ce schéma définit le méta-processus global du PLE. Il sépare clairement le niveau *Domaine* (qui produit des ressources réutilisables génériques pour toute une famille de produits) du niveau *Application* (qui dérive un produit spécifique à partir des ressources du domaine). Chaque niveau est articulé entre l'Espace Problème (exigences, modèles de variabilité) et l'Espace Solution (composants, architectures, code exécutable).

---

# Slide 3 : Plan de la section

**Texte de la diapositive :**
In this part:

Domain engineering = Engineering for reuse

1. **Analysis**
* A. Some languages to specify PLMs
* a. Feature Models
* b. OVM
* c. DOPLER
* d. Constraint-based product line models


* B. Strategies to specify the requirements of a PL
* a. Requirements-driven strategy
* b. Low-end vs. high-end product strategy (reference-product strategy)
* c. Multiviewpoint strategy


* C. Verification, diagnosis and fixing processes


2. **Design**
3. **Implementation**

---

# Slide 4 : Titre de sous-partie - Analysis / Languages

**Texte de la diapositive :**

1. Analysis
A. Some languages to specify PLMs
a. Feature Models
b. OVM
c. DOPLER
d. Constraint-based product line models

---

# Slide 5 : Domain Engineering: it's all about the family

**Texte de la diapositive :**
Domain Engineering: it's all about the family

Three main activities:

1. **Analysis:** Identify the variability present in the product line
2. **Design:** Develop an architecture and production plan
3. **Implementation:** Develop all features with composability in mind

**Présence de schéma :** Oui, un schéma illustre le flux d'ingénierie du domaine.

**Description du schéma :**

* Un nuage orange intitulé *Problem Domain* mène via une flèche rouge à la phase **Analysis**.
* Phase **Design** : représentée par un arbre hiérarchique avec des blocs de couleurs différentes (vert, bleu, jaune, violet).
* Phase **Implementation** : représentée par des blocs rectangulaires indépendants et réutilisables arrangés par paires de couleurs.

**Compréhension / Analyse du schéma :**
L'analyse extrait la variabilité du domaine de problème. Le design structure cette variabilité dans une architecture modulaire. L'implémentation concrétise ces caractéristiques sous forme de modules de code indépendants et composables pour assembler n'importe quel produit de la famille.

---

# Slide 6 : Représentation extensive - Matrice

**Texte de la diapositive :**
Extensive representation: Matrix representation

| Components | Basic | Medium | Enriched |
| --- | --- | --- | --- |
| Chronometric reaction measure | 1 | 1 | 2 |
| Photometric reaction measure | 0 | 0 | 1 |
| Barcode productID | 0 | 1 | 1 |
| RFID product ID | 0 | 0 | 1 |
| Manual product ID | 1 | 1 | 1 |
| External system PID | 0 | 1 | 1 |

**Présence de schéma :** Oui, trois photographies d'automates d'analyses médicales de laboratoire sont affichées au-dessus du tableau (un modèle simple, un modèle intermédiaire et un modèle complet).

**Compréhension / Analyse du schéma :**
Ce tableau représente une approche "extensive" où chaque produit (Basic, Medium, Enriched) est décrit explicitement en énumérant la quantité exacte de chaque composant qu'il contient. Cette représentation est simple mais devient rapidement lourde et incomplète pour un grand nombre de variantes.

---

# Slide 7 : Représentation extensive - Breakdown Structure

**Texte de la diapositive :**
Extensive representation: breakdown structure

**Présence de schéma :** Oui, trois arbres de décomposition structurale (*breakdown structures*) correspondant aux trois produits :

* **Basic :**
* 1 Chronometric reaction measure
* 1 Manual product ID


* **Medium :**
* 1 Chronometric reaction measure
* 1 Manual product ID
* 1 Barcode productID
* 1 External system PID


* **Advanced :**
* 2 Chronometric reaction measure
* 1 Photometric reaction measure
* 1 Manual product ID
* 1 Barcode productID
* 2 RFID product ID
* 1 External system PID



**Compréhension / Analyse du schéma :**
Chaque produit est modélisé par son propre arbre d'éléments. Cela montre la redondance : les éléments communs (comme *Manual product ID*) sont répétés séparément dans chaque arbre de produit sans formaliser la variabilité au niveau de la ligne complète.

---

# Slide 8 : Benefits of Domain Engineering

**Texte de la diapositive :**
Benefits

1. **Big picture:** clear vision of what is expected
2. **Completeness:** coverage of functional & physical variants
3. **Consistency:** avoid duplication of requirements by defining common & specific requirements
4. **Easy to maintain:**
* At system level
* At feature level



---

# Slide 9 : Scalability issue

**Texte de la diapositive :**
Scalability issue

How to deal with common components?

How to identify/represent the cross-tree constraints?

How to easily incorporate new components?

How to create new products with the existing components?

How do you specify a product line of $10^{21}$ products with 1000 components ?

**Présence de schéma :** Une forme d'explosion bleue recouvre partiellement les arbres de la slide précédente.

**Compréhension / Analyse du schéma :**
L'image symbolise l'explosion combinatoire. La représentation extensive (lister chaque produit individuellement) échoue face à un grand nombre de combinaisons possibles ($10^{21}$). Il devient nécessaire de passer à une représentation "intensive".

---

# Slide 10 : Intensive vs Extensive representation

**Texte de la diapositive :**
Product Line Models (PLMs): Intensive representation

Product Models (PMs): Extensive representation

* **At the domain level (Intensive) :**
* Feature Models (Kang et al. 1990, Czarnecki et al. 2005, Schobbens et al. 2007, Michel et al. 2011)
* OVM (Pohl et al. 2005)
* DOPLER (Dhungana et al. 2006, 2010)
* Constraint-based (Salinesi et al. 2010, 2011)
* Exemple formel : `domain([A, B, C], 0, 1), B <= A, C <= A, A <= B + C <= A*2`


* **At the product level (Extensive) :**
* $P1 = \{A, B, C\}$
* $P2 = \{A, B\}$
* $P3 = \{A, C\}$
* Variables associées : $Decision A = true, B = 4, C = 9.8, Asset1 = 1, Asset2 = 1$



**Présence de schéma :** Oui, un schéma structure l'écart entre le niveau domaine et le niveau produit.

**Description du schéma :**

* **Niveau Domaine :** Représentation synthétique avec des n\oe uds (*Feature A*, *VP A*, *Decision A*) et des liens d'exigences/contraintes.
* **Niveau Produit :** Dérivation d'instances spécifiques représentées par des sous-ensembles de caractéristiques ($P1, P2, P3$).

**Compréhension / Analyse du schéma :**
La représentation *intensive* définit les règles, contraintes et choix possibles du domaine en une seule structure compacte. La représentation *extensive* est le résultat de la résolution de cette structure pour un produit spécifique.

---

# Slide 11 : Feature Models: First example of FODA

**Texte de la diapositive :**
Feature Models: First example of FODA (Feature-Oriented Domain Analysis)

* **Model :**
* Root: `Car`
* Mandatory features: `Transmission`, `Horsepower`
* Optional feature: `Air conditioning`
* Alternative features: `Manual`, `Automatic`


* **Rationale :** Manual more fuel efficient
* **Composition rule :** Air conditioning requires Horsepower > 100
* **Semantics :**
* $C1 = \{\text{Car}, \text{Transmission}, \text{Manual}, \text{Horsepower}\}$
* $C2 = \{\text{Car}, \text{Transmission}, \text{Automatic}, \text{Horsepower}\}$
* $C3 = \{\text{Car}, \text{Transmission}, \text{Manual}, \text{Horsepower} > 100, \text{Air conditioning}\}$
* $C4 = \{\text{Car}, \text{Transmission}, \text{Automatic}, \text{Horsepower} > 100, \text{Air conditioning}\}$



**Référence :** Kang K., Cohen S., Hess J., Novak W., Peterson S. Feature-Oriented Domain Analysis (FODA) Feasibility Study, Technical Report CMU/SEI-90-TR-21, Software Engineering Institute, Carnegie Mellon University, November 1990.

**Présence de schéma :** Oui, le diagramme FODA classique d'une automobile.

**Description du schéma :**

* `Car` (Racine) a 3 fils : `Transmission` (obligatoire, disque noir), `Horsepower` (obligatoire, disque noir), `Air conditioning` (optionnel, disque blanc).
* `Transmission` est relié à `Manual` et `Automatic` par un arc représentatif d'une alternative XOR.

**Compréhension / Analyse du schéma :**
Ce diagramme définit la structure FODA originale : hiérarchie de fonctionnalités avec des relations obligatoires/optionnelles/alternatives et des contraintes transversales (*requires*). La sémantique d'un modèle de fonctionnalités correspond à l'ensemble des configurations valides de produits qu'il autorise ($C1, C2, C3, C4$).

---

# Slide 12 : Definition of a Feature

**Texte de la diapositive :**
A feature is an essential abstraction of a functionality or product characteristic relevant to stakeholders (Czarnecki & Eisenecker, 2000).

* Features may be:
* abstract vs concrete
* common vs variable


* Feature VS {Classes, Functions, Aspects...}: external characteristics VS Internal details
* User-oriented needs VS developer, solution and quality concerns
* Intentions VS prescribed solutions

**Présence d'image :** Image d'illustration du Schtroumpf à lunettes tenant une coccinelle.

---

# Slide 13 : FODA diagram representation

**Texte de la diapositive :**
It can also be represented as a FODA diagram

* **Root:** main concept of the PL
* **Nodes:** features
* concrete: F2, F5, F6, F8, F9, F10, F11, F12
* abstract: F3, F4, F7


* **Tree:** "composed of" relationships (refinement / decomposition)

**Présence de schéma :** Diagramme de fonctionnalités hiérarchique.

**Description du schéma :**

* Racine $F1$ se décompose en $F2$, $F3$, $F4$.
* $F3$ se décompose en $F5$ (cercle blanc = optionnel), $F6$ (cercle blanc = optionnel) et $F7$.
* $F7$ se décompose en $F8, F9, F10$.
* $F4$ se décompose en $F11, F12$.

**Compréhension / Analyse du schéma :**
Illustre l'organisation arborescente d'un modèle FODA avec la distinction entre caractéristiques abstraites (n\oe uds internes servant d'organisation) et caractéristiques concrètes (feuilles correspondant à des éléments d'implémentation).

---

# Slide 14 : FODA diagram - Mandatory & Optional

**Texte de la diapositive :**
FODA diagram

* Mandatory features (reliés par un trait simple sans cercle à leur parent)
* Optional features (marqués d'un petit cercle blanc au sommet de la fonctionnalité)

**Présence de schéma :** Même arbre que la slide 13 avec les éléments $F5$ et $F6$ portant le symbole optionnel.

---

# Slide 15 : FODA diagram - Semantics (1)

**Texte de la diapositive :**
FODA diagram - Semantics

Modèle restreint aux n\oe uds $F1, F2, F3, F4, F5, F6, F7$.

Ensemble de produits valides générés :


$$\Big\{ \{F1, F2, F3, F4, F7\}, \{F1, F2, F3, F4, F5, F7\}, \{F1, F2, F3, F4, F6, F7\}, \{F1, F2, F3, F4, F5, F6, F7\} \Big\}$$

---

# Slide 16 : FODA diagram - Alternatives (XOR)

**Texte de la diapositive :**
FODA diagram

* Mandatory features
* Optional features
* Alternatives (XOR)

**Présence de schéma :** Un arc reliant les arêtes issues de $F4$ vers $F11$ et $F12$.

**Compréhension / Analyse du schéma :**
L'arc XOR entre $F11$ et $F12$ signifie que si $F4$ est sélectionné, il faut choisir soit $F11$, soit $F12$, mais jamais les deux en même temps, ni aucun des deux.

---

# Slide 17 : FODA diagram - Semantics (2)

**Texte de la diapositive :**
FODA diagram - Semantics

Calcul des combinaisons avec la contrainte XOR sur $F11/F12$ :

* Combinaisons exclues : celles sans $F11$ ni $F12$, et celles contenant à la fois $F11$ et $F12$.
* Combinaisons valides conservées : 8 configurations au total (4 incluant $F11$, 4 incluant $F12$).

---

# Slide 18 : FODA diagram - Group cardinalities

**Texte de la diapositive :**
FODA diagram

* Mandatory features
* Optional features
* Alternatives (XOR)
* Group cardinalities

**Présence de schéma :** Ajout d'un arc sous le n\oe ud $F7$ étiqueté `1..1` englobant ses trois fils $F8, F9, F10$.

**Compréhension / Analyse du schéma :**
La cardinalité de groupe `1..1` sous $F7$ impose la sélection d'exactement une sous-caractéristique parmi le groupe $\{F8, F9, F10\}$.

---

# Slide 19 : FODA diagram - Semantics (3)

**Texte de la diapositive :**
FODA diagram - Semantics

L'application de la cardinalité `1..1` sur $\{F8, F9, F10\}$ produit 24 configurations valides possibles (8 contenant $F8$, 8 contenant $F9$, 8 contenant $F10$).

---

# Slide 20 : FODA diagram - Dependencies

**Texte de la diapositive :**
FODA diagram

* Mandatory features
* Optional features
* Alternatives (XOR)
* Group cardinalities
* Dependencies
* Requires
* Mutex



**Présence de schéma :** Ajout de flèches en pointillés entre fonctionnalités non parentes :

* Flèche `requires` de $F6$ vers $F12$.
* Flèche `mutex` (exclusion mutuelle) entre $F2$ et $F8$.

**Compréhension / Analyse du schéma :**
Les contraintes transversales (*cross-tree constraints*) restreignent les choix autorisés au-delà de la simple hiérarchie arborescente :

* `requires` : La présence de $F6$ implique obligatoirement la présence de $F12$.
* `mutex` : $F2$ et $F8$ ne peuvent jamais être présents dans le même produit.

---

# Slide 21 à 23 : FODA diagram - Semantics filtering (Dependencies)

**Texte de la diapositive :**
Semantics / FODA diagram

Filtrage de l'ensemble des produits valides :

* Suppression des configurations contenant la paire invalide $\{F2, F8\}$ (effet de la contrainte `mutex`).
* Suppression des configurations contenant $F6$ mais n'incluant pas $F12$ (effet de la contrainte `requires`).

---

# Slide 24 : FODA model - Complex constraints

**Texte de la diapositive :**
FODA model

* Mandatory features
* Optional features
* Alternatives (XOR)
* Group cardinalities
* Dependencies (Requires, Mutex)
* Constraints: $F9 \Rightarrow \text{NOT}(F5 \land F6)$

**Présence de schéma :** Le diagramme affiche la formule logique $F9 \Rightarrow \text{NOT}(F5 \land F6)$ au bas du modèle.

**Compréhension / Analyse du schéma :**
Si la fonctionnalité $F9$ est sélectionnée, alors le produit ne peut pas contenir simultanément $F5$ et $F6$.

---

# Slide 25 : FODA model - Semantics filtering (Complex constraint)

**Texte de la diapositive :**
Semantics FODA model

Application de la règle $F9 \Rightarrow \text{NOT}(F5 \land F6)$ entraînant la suppression des configurations où $F9$, $F5$ et $F6$ apparaissent ensemble.

---

# Slide 26 : Exercise: Manual Analysis of FODA model

**Texte de la diapositive :**
Exercise: Manual Analysis of FODA model

1. Construct at least 12 unique products from this model
2. What is the space of possible combinations with these features?
3. How many are actually allowed by the model?

**Présence de schéma :** Diagramme FODA d'exercice à évaluer.

**Description du schéma :**

* Racine $F1$ avec 5 fils : $F2$ (obligatoire), $F3$ (optionnel), $F4$ (optionnel), $F5$ (obligatoire), $F7$ (optionnel).
* Sous $F2$ : $F8$ (optionnel), $F9$ (obligatoire), $F10$ (optionnel).
* Sous $F9$ : cardinalité de groupe `1..1` sur $F13, F14, F15$.
* Sous $F4$ : alternative XOR entre $F11$ et $F12$.
* Dépendances :
* $F15 \xrightarrow{\text{requires}} F11$
* $F10 \xleftrightarrow{\text{mutex}} F3$
* $F12 \xleftrightarrow{\text{mutex}} F7$


* Contraintes logiques supplémentaires :
* $F14 \Rightarrow \text{NOT}(F8 \land F10)$
* $F13 \Rightarrow F8 \land \text{NOT}(F7)$



---

# Slide 27 : Exercise: Manual Analysis Solution

**Texte de la diapositive :**
Exercise: Manual Analysis of FODA model

* **What is the space of possible combinations with these features?**
* Answer: $2^{13} = 8192$ combinations (sur les 13 caractéristiques sélectionnables).


* **How many are actually allowed by the model?**
* Answer: 46 produits valides.


* **Why?** (Résultat du filtrage par la structure hiérarchique, les cardinalités, les relations `mutex`/`requires` et les contraintes booléennes complexes).

---

# Slide 28 : Feature modelling dialects: FORE

**Texte de la diapositive :**
Feature modelling dialects: FORE

* **Optional :** F2 is optional regarding F1 (liaison trait continu vers rectangle).
* **Mandatory :** F2 is mandatory regarding F1 (liaison trait continu vers rectangle).
* **Requires :** F2 is required by F1 (flèche en pointillés $F1 \rightarrow F2$).
* **Excludes :** F2 is excluded by F1, and vice versa (double flèche en pointillés $F1 \leftrightarrow F2$).
* **Group cardinality :** between $m$ and $n$ leaf features should be selected in a product if F0 is selected in the same product, and vice versa (arc étiqueté $<m..n>$ englobant $F1, F2$).

---

# Slide 29 : Concepts included into the FODA dialect

**Texte de la diapositive :**
Concepts included into the FODA dialect

* **Individual Cardinalities :** Number of times a feature can occur in a configuration (ex: $F1 [3..4] [6] [8] [16] F2$).
* **Attributes :** specific measurable characteristics of a feature, with a name, a domain and a value at a given configuration time (ex: `Att1: {Domain}`, `Att2: {Domain}`).
* **Complex constraints :** Boolean, Arithmetic, Symbolic (`all_different(...)`, `relation(...)`, Equality, Inequality...).

**Références bibliographiques citées sur la diapositive :**

* Cardinalities (Riebisch et al. 2002, Czarnecki et al. 2005)
* Attributes (Streitferdt et al. 2003, Benavides et al. 2005c, White et al. 2009)
* Complex constraints (Benavides et al. 2005, Batory 2005, Salinesi et al. 2011)
* Evolution in (Schobbens et al. 2007)

---

# Slide 30 : Support for Feature Versions (TurtleBot)

**Texte de la diapositive :**
Requirements for version-aware feature modeling:

* **Requirement 1:** Support for feature versions as units of configuration.
* **Requirement 2:** Specification of the relation of versions in logical development lines (i.e., predecessor and successor versions including branching).
* **Requirement 3:** Expression of dependencies on and incompatibilities with version ranges.
* **Requirement 4:** Support for users in selecting suitable combinations of versions from a selection of features.

**Version-Aware Constraints :**

1. Autonomous $\rightarrow$ Detection
2. Keyboard v Gamepad $\rightarrow$ Webservice
3. Infrared $[\ge 2.0]$ v Ultrasound $\rightarrow$ Detection $[\ge 1.1]$
4. TurtleBot $[\ge 2.0] \rightarrow$ Engine $[\ge \text{Kobuki } 1.0]$
5. TurtleBot $[1.0-1.1] \rightarrow$ Engine $[\text{Create } 1.2]$
6. TurtleBot $[\ge 2.0] \rightarrow \text{Webservice } [\ge 1.1]$

Processus : *Encode* $\rightarrow$ *Constraint Satisfaction Problem (CSP) Solver* $\rightarrow$ *Solve* $\rightarrow$ *Select & Scoring to find the "best" configuration*.

**Présence de schéma :** Diagramme montrant l'arbre de caractéristiques de TurtleBot avec des sous-triangles représentant les versions ($1.0, 1.1, 2.0$, etc.) et des photos du robot physique assemblé.

---

# Slide 31 : FROG: Feature Relations Graphs

**Texte de la diapositive :**
FROG: Feature Relations Graphs (A Visualisation Paradigm for Feature Constraints in PLs)

* Name of the FM: FRoGs: Electric Parking Brake
* Feature List: PBSManual, PBSAutomatic, PBSAssistance, ClutchPedal, GBAutomatic, GBManual, AuxiliaryBrakeRelease, PullerCable, ElectricActuator, Calipser, Traditional, TemporaryMonitor, PermanentMonitor, DCMotor, PairEActuator, TiltSensor, EffortSensor, ClutchPosition, DoorPosition, VSpeed.
* **FROG Legend :**
* **Stakeholder perspectives:** Customer, Environment, Functions, Design, Behaviour, Components
* **Relation types:** Formalized, Inferred, Undefined
* **Zones:** Requires, Encourages, Independent, Discourages, Excludes
* Confidence: 5%



**Présence de schéma :** Représentation circulaire interactive montrant les contraintes logiques entre caractéristiques sous forme de secteurs colorés et d'arcs d'interaction.

---

# Slide 32 à 36 : Some problems of the FMs (Braking System)

**Texte de la diapositive (Slide 32-36) :**
Some problems of the FMs

**Présence de schéma :** Modèle de caractéristiques d'un système de freinage automobile (*Braking System*) annoté au fil des diapositives.

**Description de la structure du schéma :**

* `Braking System` (Racine)
* `Main (hydraulic) Brake` (obligatoire)
* `Electronic Stability Control` (cardinalité $[0..2]$) $\xrightarrow{\text{includes}}$ `Anti blocking` (cardinalité $[0..2]$)


* `Parking Brake` (obligatoire)
* Relie via un arc XOR : `Automatic Parking Brake` et `Manual Parking Brake`.
* `Automatic Parking Brake` possède une cardinalité de groupe $<1..2>$ vers :
* `Puller Cable Solution` (cardinalité $[0..2]$)
* `Caliper Actuator Solution` (cardinalité $[0..2]$)







**Problèmes et annotations mis en évidence :**

* **Slide 33 :** Flèche pointant `Automatic Parking Brake` comme étant une décision (*decision*).
* **Slide 34 :**
* Flèche pointant vers la séparation des freins comme une décomposition (*decomposition*).
* Flèche pointant vers Automatic/Manual comme un sous-typage (*subtyping*).


* **Slide 35 & 36 :** Les cardinalités $[0..2]$ et la cardinalité de groupe $<1..2>$ sont surlignées en rouge pour montrer le manque de clarté sémantique des Feature Models classiques lorsqu'il s'agit de mélanger cardinalités d'instances, sous-typage et décomposition.

---

# Slide 37 : Tableau comparatif des dialectes de Features (Basic concepts)

**Texte de la diapositive :**
Other feature dialects (basic concepts)

| Dialect | Type | Mandatory features | Optional features | OR | XOR | Particularities |
| --- | --- | --- | --- | --- | --- | --- |
| **FODA** | Arbre | Oui | Oui | Non | Non | Structure de base |
| **FORM** | Graphe | Oui | Oui | Non | Non | Relations d'implémentation, de spécialisation/généralisation |
| **FOPLE** | Graphe | Oui | Oui | Non | Non | Processus (orienté MPP) |
| **FeatuRSEB** | Arbre | Oui | Oui | Oui | Oui | Processus (Use Cases) |
| **GP** | Arbre | Oui | Oui | Oui | Oui | Processus (génération) |
| **Bosch** | Arbre | Oui | Oui | Oui | Oui | Feature externe |
| **FORE** | Graphe | Oui | Oui | Oui | Oui | Relations obligatoires et optionnelles, cardinalités |

---

# Slide 38 : Tableau comparatif des cardinalités dans les dialectes

**Texte de la diapositive :**
Other feature dialects (cardinalities)

| Cardinalities | FODA & FORM | Bosch | GP | FeatuRSEB |
| --- | --- | --- | --- | --- |
| **0..1** | Nom feature | Nom feature | Nom feature (XOR) | Nom VP (XOR) |
| **1** | Nom feature | Nom feature | Nom feature (XOR) | Nom VP (XOR) |
| **0..N** | Nom feature | Nom feature | Nom feature (OR) | Nom VP (OR) |
| **1..N** | Nom feature | Nom feature | Nom feature (OR) | Nom VP (OR) |
| **N** | Nom feature | Nom feature | Nom feature | Nom feature |

---

# Slide 39 : Discussion (FODA dialects)

**Texte de la diapositive :**
Discussion (FODA dialects)

* Is there any concept, construct or relation type you think is missing from these types of models? Why?
* Do you believe these concepts are sufficient to express any product line? Why or why not?
* These models are by far the most popular model type used in industry, why do you think that is?

---

# Slide 40 : Orthogonal Variability Model (OVM)

**Texte de la diapositive :**
Orthogonal Variability Model (OVM)

**Présence de schéma :** Légende formelle de la notation OVM.

**Description du schéma :**

* **Mandatory :** Triangle (Variation Point) relié par un trait continu à un rectangle (Variant).
* **Optional :** Triangle relié par un trait en pointillés à un rectangle.
* **Alternative :** Triangle relié à plusieurs rectangles par des traits pointillés embrassés par un arc étiqueté `[min, max]`.
* **Constraint dependencies :**
* `Requires` : Flèche unidirectionnelle en pointillés ($\rightarrow$).
* `Excludes` : Flèche bidirectionnelle en pointillés ($\leftrightarrow$).



**Compréhension / Analyse du schéma :**
L'OVM sépare complètement le modèle de variabilité de l'architecture fonctionnelle. Les points de variation (VP, triangles) définissent *où* se trouve la variabilité, et les variantes (V, rectangles) définissent les choix possibles.

---

# Slide 41 : Example of OVM: Auxiliary Variation Point

**Texte de la diapositive :**
Example of OVM: Using an auxiliary variation point to express constraints

* **Système ouverture porte** ($1/1$) : `SOPA`, `SOPB`, `SOPC`
* **AuxiliaryVP** ($1/3$) : `AuxV1`, `AuxV2`, `AuxV3`
* **Lève Vitre Avant** ($1/1$) : `LVAVMA`, `LVAVEL`, `LVAVAP`, `LVAVIP`, `LVCIPE`

**Contraintes :**

* `SOPC` $\xrightarrow{\text{requires}}$ `AuxiliaryVP`
* `AuxV1` $\xrightarrow{\text{requires}}$ `LVAVAP`
* `AuxV2` $\xrightarrow{\text{requires}}$ `LVAVIP`
* `AuxV3` $\xrightarrow{\text{requires}}$ `LVCIPE`

**Définitions des acronymes :**

* SOPA, SOPB, SOPC : trois types de systèmes d'ouverture de porte.
* LVAVMA : lève-vitre avant manuel.
* LVAVEL : lève-vitre avant électrique.
* LVAVAP : lève-vitre avant anti-pincement.
* LVAVIP : lève-vitre avant électrique à impulsion.
* LVCIPE : lève-vitre avant électrique à impulsion côté conducteur et électrique côté passager.

---

# Slide 42 : OVM - Traçabilité avec l'implémentation

**Texte de la diapositive :**
Example of OVM: variants know their implementations (Pohl et al. 2010)

**Présence de schéma :** Diagramme séparé en deux blocs : **Design** (gauche) et **Variability Diagram** (droite).

**Description du schéma :**

* **Espace Design (Composants) :**
* *User Control Manager*, *Lock Control*, *Authentication Manager*, *Authentication Plug-in*, *Electronic Door Lock Plug-in*.


* **Espace Variabilité (OVM) :**
* VP *Door Lock* $\rightarrow$ Variant *Electronic*.
* VP *Authentication* $\rightarrow$ Variant *Yes*.


* **Traçabilité :** Des flèches relient directement les variantes OVM aux composants logiciels correspondants dans le modèle de design (*Electronic* pointe vers *Electronic Door Lock Plug-in* ; *Yes* pointe vers *Authentication Plug-in*).

---

# Slide 43 : Limites d'OVM - Modèles complexes

**Texte de la diapositive :**
With the OVM language you do not always get well-structured models (Dumitrescu et al. 2013)

**Présence de schéma :** Un modèle OVM très dense et intriqué divisé en 5 niveaux de points de vue :

1. **Customer visible variability :** `ParkingBrakeService`, `HillStartAssistance`.
2. **Context viewpoint :** `GearBox`, `RegulationZone`, `VehicleTrailer`, `VehicleProperties`.
3. **Design alternatives viewpoint :** `ArchitectureDesignAlternatives`, `ForceDistributionDesignAlternatives`.
4. **System internal behavior viewpoint :** `SoftwareAllocationDesignAlternatives`, `TiltAngleFunctionAllocation`, `ForceMonitorOnEngineStop`, `BrakeBehaviorThresholds`, `BrakingStrategy`.
5. **Physical architecture viewpoint :** `ElectricalActionComponents`, `InputInformation`.

**Compréhension / Analyse du schéma :**
Montre que la prolifération des contraintes `requires` et `excludes` croisées entre différents niveaux d'abstraction rend les grands modèles OVM très difficiles à lire, valider et maintenir.

---

# Slide 44 : The DOPLER language

**Texte de la diapositive :**
The DOPLER language

**Présence de schéma :** Méta-modèle UML de DOPLER.

**Description du schéma :**

* **Classes principales :**
* `decision` (Attributs : Name, Question, Description, domain-specific-attributes).
* `asset` (Attributs : Name, Description).


* **Relations :**
* Une `asset` dépend d'une `decision` via une *Inclusion condition*.
* Autoréférences : Dépendances hiérarchiques et logiques sur `decision` ; dépendances fonctionnelles et structurelles sur `asset`.


* **Spécialisations de `decision` :** `boolean decision`, `integer decision`, `string decision`, `enumeration decision`.

---

# Slide 45 : DOPLER Decisions

**Texte de la diapositive :**
DOPLER Decisions

* Decisions can be of four types: Boolean, Integer, String or Enumeration.
* DOPLER decision and its decision options can be seen as variables.
* Expected value is used as a cardinality over decision options.
* Exemple : `Which tools? (name: tools; expected val 1:3): {"CW", "DK", "PK"}`

---

# Slide 46 : DOPLER decision relationships

**Texte de la diapositive :**
DOPLER decision relationships

**Présence de schéma :** Diagramme montrant trois décisions interconnectées :

1. `Which tools?` (enumeration)
2. `Default resolution?` (enumeration)
3. `Width?` (number)

**Relations illustrées :**

* **Visibility condition (flèche en pointillés) :** `contains(tools, "CW")` rend visible la décision `Default resolution?`.
* **Validity condition (flèche pointillée fine) :** `width >= 800 && width <= 1680` restreint le domaine de `Width?`.
* **Decision effect (flèche pleine) :** `if (resolution == "800x600") then width = 800` définit une valeur automatique.

---

# Slide 47 : DOPLER Assets

**Texte de la diapositive :**
DOPLER Assets

* Assets are related by means of functional and structural dependencies (`<<requires>>`, `<<excludes>>`).
* Exemple :
* `Plugin Core Plugin` (inclusion condition: `true`)
* `Plugin Glossary Plugin` (inclusion condition: `glossary == true`) relié par `<<requires>>` à `Core Plugin`.



---

# Slide 48 : DOPLER inclusion conditions

**Texte de la diapositive :**
DOPLER inclusion conditions

* DOPLER asset can be seen as boolean variables.
* Decisions and assets are linked with inclusion conditions defining traceability from the solution space to the problem space.
* Exemple : Décision `Include glossary?` $\xrightarrow{\text{Inclusion Condition: } glossary == true}$ Asset `Glossary Plugin`.

---

# Slide 49 : DOPLER variability model (Vue intégrée)

**Texte de la diapositive :**
DOPLER variability model

* **Decision model (Problem space) :** contient les questions/décisions (`scope`, `glossary`, `tools`, `resolution`, `width`).
* **Asset model (Solution space) :** contient les composants/plugins (`Core Plugin`, `Glossary Plugin`, `CW Plugin`, `Resolution width Setting`).
* **Inclusion Conditions (Flèches mixtes) :** relient les décisions du problème aux composants de la solution.

---

# Slide 50 à 52 : Captures d'écran de l'outil DOPLER (Eclipse Platform)

**Texte de la diapositive :**
Interface utilisateur de l'outil DOPLER sous Eclipse :

* **Slide 50 :** Édition de la décision `scope` (*What do you want to buy?*), cardinalité $1:1$, options *assemble tools yourself* / *completely configured tool suite*.
* **Slide 51 :** Édition de la décision `DOPLER_tools` (*Which of the following DOPLER tools do you want?*), condition de visibilité `scope == ("assemble tools yourself")`.
* **Slide 52 :** Édition de l'asset `Configuration Wizard Default-Documentation Generator-Plug-in`, condition d'inclusion `contains(CW_extensions, ("Default Documentation Generator"))`.

---

# Slide 53 : DOPLER variability model - Synthèse

**Texte de la diapositive :**
DOPLER variability model summary

Note : "But Decision Model is more a process model than a variability model!"

---

# Slide 54 : Constraint-based product line language

**Texte de la diapositive :**
Constraint-based product line language (Mazo et al. 2012, basé sur Salinesi et al. 2011)

**Présence de schéma :** Méta-modèle UML formel de programmation par contraintes.

**Description du schéma :**

* **N\oe ud central :** `Constraint` relié à `Variable`, `Domain`, `Operator`, `Valuation` et `Reified constraint`.
* **Héritage des contraintes :**
* **Boolean :** `Equivalence`, `Implication`, `NOT`, `OR`, `XOR`, `AND`.
* **Arithmetic :** `Equality`, `Disequality`, `Inequality` (`Superior`, `Superior or equal`, `Inferior`, `Inferior or equal`).
* **Symbolic :** `element(...)`, `element_var(...)`, `all_different(...)`, `at_most(...)`, `at_least(...)`, `exactly(...)`, `relation(...)`.



---

# Slide 55 à 57 : PLM as a Constraint Program (Exemple automobile)

**Texte de la diapositive :**
Example of PLM as a constraint program

**Présence de schéma :**

* **Espace Problème :** N\oe uds $A, B, C$ reliés par `constraint1`, `constraint2`, `constraint3`.
* **Espace Solution :** Composants physiques (`Engine`, `Body`, `Transmission`).
* **Context (Slide 56 & 57) :** Graphique des courbes de couple et de puissance du moteur (*Engine Power and Torque Curves* : Couple en NM vs Puissance en kW selon le régime en RPM) alimentant la variable $A$.
* **Programme de contraintes formel (Slide 57) :**
* `domain([A, B], [0, 1])`
* `domain([C], [1, 2])`
* `Constraint1 : B <= A`
* `Constraint2 : at_least([A, B], 1)`
* `Constraint3 : A <= B + C <= A * 2`



---

# Slide 58 : Constraint-based representation (UNIX Example)

**Texte de la diapositive :**
Exemple de code de contraintes appliqué au domaine UNIX (déclaration de variables, domaines booléens/énumérés, contraintes de dépendance R1, R2, etc.).

**Remarque :** "However, the constraint-based representation can be difficult to build (for certain people), understand (for certain people) and to use with stakeholders !"

---

# Slide 59 : Titre de sous-partie - Requirements Elicitation Strategies

**Texte de la diapositive :**

1. Analysis
B. Strategies to elicit the requirements of a PL
a. Requirements-driven strategy
b. Low-end vs. high-end product strategy (reference-product strategy)
c. Multiviewpoint strategy

---

# Slide 60 : Requirements-driven strategy

**Texte de la diapositive :**
Requirements-driven strategy

1. Start collecting and analysing the available documentation of the domain
2. Identify commonality (mandatory) (no conditions) $\rightarrow$ mandatory requirements
3. Identify variability (optionality) keywords $\rightarrow$ optional requirements
4. Identify keywords representing dependencies $\rightarrow$ constraints
5. Complete with the documentation about the implementation assets and write the requirements corresponding with a template

**Présence d'images :** Couverture du livre *Living Documentation* (Cyrille Martraire) et photo d'une réunion d'équipe analysant des documents imprimés.

---

# Slide 61 : Example of available documentation (UNIX)

**Texte de la diapositive :**
Document source d'exemple :

* UNIX a un KERNEL.
* Fonctions obligatoires du KERNEL : ALLOCATING THE MACHINE'S MEMORY, SCHEDULING, ACCOMPLISHING THE TRANSFER OF DATA.
* UNIX peut avoir plusieurs PROCESSES.
* UNIX offre une vue logique du FILE SYSTEM.
* KERNEL statique ou dynamique (modules SUPPORT_USB, CDROM_ATECH, PCMCIA_SUPPORT).
* SHELL comme interpréteur de commandes.
* Interface GRAPHICAL caractérisée par WIDTH RESOLUTION et HEIGHT RESOLUTION (couples [800,600], [1024,768], [1366,768]).

---

# Slide 62 : Requirement Specification Template (IEEE 830 adapted)

**Texte de la diapositive :**

| Champ | Description |
| --- | --- |
| **<id>** | Requirement descriptive name |
| **Version** | <version number> (version creation date) |
| **Description** | <use a template to specify the domain requirement in semi-structured natural language, e.g., Mazo et al. 2020> |
| **Function/module** | <functionality or module to which the requirement belongs> |
| **Type** | <indicate here: FR, NFR, legal requirement, change requirement, technical requirement, etc.> |
| **Variability** | <specify if the requirement is optional or mandatory and the alternatives that should be supported by this requirement> |
| **Priority** | <Priority in line\ of product requirement the> |
| **Delivery date** | <indicate here the expected/needed delivery date> |
| **Stability** | <risk of requirement evolution> |
| **Source** | <role and name of contributors> |

---

# Slide 63 : Visual Grammar Template (Mazo et al., 2020)

**Texte de la diapositive :**
Template to the requirements specification of systems and families of (self) adaptive systems (Mazo et al., 2020)

**Présence de schéma :** Diagramme de syntaxe visuelle sous forme de graphe d'états pour la génération de phrases d'exigences en langage naturel structuré.

**Description du schéma :**
Permet de composer des phrases d'exigences selon la grammaire :

* `[IF/WHILE/DURING/IN CASE/AFTER/BEFORE/AS SOON AS]` $\rightarrow$ `Condition/Activation state/Included feature`
* `THEN` $\rightarrow$ `ALL / SOME / THOSE SYSTEMS OF THE <Product line name>`
* `[SHALL / SHOULD / COULD]` $\rightarrow$ `PROVIDE <Who?> / WITH THE ABILITY TO / BE ABLE TO`
* `[Process verb]` $\rightarrow$ `A/AN / THE / EACH / BETWEEN <A> AND <B> / ALL THE <Objects>`
* Conditions optionnelles (`IF AND ONLY IF`), contraintes temporelles (`BEFORE/AFTER/DURING`, `WITHIN`, `UNTIL`, `AT LEAST`), etc.

---

# Slide 64 : Example of Requirement Specification

**Texte de la diapositive :**

| Champ | Valeur |
| --- | --- |
| **FR P8.R5** | Configure a text for comparison with another element |
| **Version** | 0.7 (01/01/2020) |
| **Description** | In case the action of comparing text is included, those systems of the automation framework product line that only include the option to enter text shall provide the tester with the ability to configure a text for comparison with another element. |
| **Function/module** | Requirements specification module |
| **Type** | FR |
| **Variability** | Conditionally mandatory. |
| **Priority** | Essential requirement. |
| **Delivery date** | 01/05/2020 |
| **Stability** | High |
| **Source** | Project leader, Raúl Mazo |

---

# Slide 65 : Terminology Issue in Requirements Elicitation

**Texte de la diapositive :**
Terminology issue

Reprise du texte UNIX avec surlignage des termes clés.

Question fondamentale : "What if the document (stakeholder descriptions) doesn't use the << right >> keywords ?"

---

# Slide 66 : Domain Requirements Model (UNIX Feature Model)

**Texte de la diapositive :**
And then, we design the domain requirements model...

**Présence de schéma :** Modèle de caractéristiques complet généré pour UNIX.

**Description du schéma :**

* Racine : `UNIX`
* Fils directs : `Kernel` (obligatoire), `Shell` (obligatoire), `FileSystem` (obligatoire), `UserInterface` (optionnel), `Process` (cardinalité $[0..*]$).
* Sous `Kernel` : `Scheduling`, `ExecutingInstructions`, `InterpretingInstructions`, `AccomplishingTheTransferOfData`, `AllocatingTheMachine'sMemory`, et un groupe $<0..3>$ contenant `Support_usb`, `Cdrom_atech`, `Pcmacia_support`.
* Sous `UserInterface` : `Graphical` (avec attributs `WidthResolution`, `HeightResolution`).
* Contrainte formelle : `Graphical` $\rightarrow$ `relation([WidthResolution, HeightResolution], {[800,600], [1024,768], [1366,768]})`.

---

# Slide 67 : Design of Reusable Domain Components

**Texte de la diapositive :**
Then, we design, bind and implement the domain reusable components...

**Présence de schéma :** Diagramme faisant le lien entre une exigence (`Accomplishing The Transfer Of Data`) et :

1. Un diagramme de composants UML (`DataTransfer` contenant `SimpleDataTransfer` et `CompositeDataTransfer` implémentant `<<interface>> DataTransfer`).
2. Des diagrammes de séquences (MSC) : `msc REQUEST`, `msc ACCEPT`, `msc REJECT`, `msc CLOSE`, `msc DATA`.
3. Un automate à états (*Statechart*) décrivant le comportement dynamique (`Iddle` $\rightarrow$ `REQUEST` $\rightarrow$ `Connecting` $\rightarrow$ `Connected` $\rightarrow$ `DATA` / `CLOSE`).

---

# Slide 68 : Exercise - Appliance Store Product Line

**Texte de la diapositive :**
Exercise: Create the variability model (e.g., feature model) based on the following requirements and constraint of an appliance store product line.

* **R1:** SOME SYSTEMS OF THE appliance store PRODUCT LINE SHOULD PROVIDE the clients WITH THE ABILITY TO manage the products sold in the stores.
* **R2:** SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY TO validate themselves in the corresponding system.
* **R3:** ALL the SYSTEMS OF THE appliance store PRODUCT LINE SHALL PROVIDE the clients WITH THE ABILITY TO manage the payments of the products sold in the stores.
* **R4:** SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY TO pay by card.
* **R5:** SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY TO pay cash.
* **C1:** The client should be validated into each store system before managing the products of the corresponding store.

---

# Slide 69 : Solution to Exercise

**Texte de la diapositive :**
Solution to the exercise

**Présence de schéma :** Modèle de variabilité sous forme de graphe d'ovales.

**Description du schéma :**

* Racine : `ApplianceStore`
* `ProductManagement` (relié par flèche `optional` vers `ApplianceStore`)
* `Validation` (relié par flèche `optional` vers `ApplianceStore`)
* `Payment` (relié par flèche `mandatory` vers `ApplianceStore`)
* `CardPayment` (relié par flèche `optional` vers `Payment`)
* `CashPayment` (relié par flèche `optional` vers `Payment`)
* Dépendance transversale : `ProductManagement` $\xrightarrow{\text{require}}$ `Validation` (traduction de la contrainte C1).

---

# Slide 70 : Titre de sous-partie - Strategy b

**Texte de la diapositive :**

1. Analysis
A. ...
B. Strategies to elicitate the requirements of a PL
a. Requirements-driven strategy
b. Low-end vs. high-end product strategy (reference-product strategy)
c. Multiviewpoint strategy

---

# Slide 71 : Low-end vs. High-end Strategy

**Texte de la diapositive :**
Low-end vs. high-end product strategy (or even, reference-product strategy)

1. **Select a low-end and a high-end product:**
* Compare the properties (material, dimensions, ...), capacities (functions) and the qualities (performance, security, ...) of these products and complete these characteristics with all the possibilities in the middle.


2. **Specify the resulting variation points and the corresponding variants:**
* Define if they correspond to the scope of the product line. All that is in the scope will be part of the requirements of the product line.


3. **Complete with the "convenient" characteristics:**
* According to the objectives and marketing strategy of the product line.



**Présence d'images :** Photographies montrant une petite voiture rouge d'entrée de gamme (Tata Nano) opposée à un modèle haut de gamme.

---

# Slide 72 à 76 : Reference-Product Strategy Steps (Exemple UNIX)

**Texte de la diapositive :**
Low-end vs. high-end product strategy (reference-product strategy)

* **Step 1 (Slide 73) : Select reference product $\rightarrow$ Create breakdown structure tree.**
* Arbre produit initial (RedHat) : `UNIX` $\rightarrow$ `Process`, `Shell`, `Kernel` (`AllocatingMemory`, `AccomplishingDataTransfer`, `Cdrom_atech`), `FileSystem`, `UserInterface` (`Graphical` : `WidthResolution`, `HeightResolution`).


* **Step 2 (Slide 74) : Select 2nd product (SUSE) $\rightarrow$ Identify & integrate variations & constraints.**
* Ajout des éléments optionnels et cardinalités : `Kernel` hérite d'une branche optionnelle `<0..1>` intégrant `Support_usb`.


* **Step 3 (Slide 75 & 76) : Select 3rd product (Ubuntu, Kubuntu, aLinux) $\rightarrow$ Repeat activities.**
* Résultat final (Slide 76) : Diagramme de caractéristiques complet enrichi des éléments `Pcmacia_support` et de la contrainte d'attributs graphiques.



---

# Slide 77 : Discussion sur la stratégie de produit de référence

**Texte de la diapositive :**
Discussion (Low-end vs. high-end product strategy)

* Domain missed opportunities?
* What is the influence of the choice of the first (/2nd / 3rd / etc) product?

---

# Slide 78 : Titre de sous-partie - Strategy c

**Texte de la diapositive :**

1. Analysis
A. ...
B. Strategies to elicitate the requirements of a PL
a. Requirements-driven strategy
b. Low-end vs. high-end product strategy (reference-product strategy)
c. Multiviewpoint strategy

---

# Slide 79 : Multi-viewpoint strategy

**Texte de la diapositive :**
Multi-viewpoints strategy

1. Identify viewpoints
2. Specify viewpoints (with/without variability)
3. Identify dependencies
4. Integrate

**Présence de schéma :** Matrice d'architecture d'entreprise (type Zachman).

**Description du schéma :**

* **Perspectives (Lignes) :** Planner, Owner, Designer, Builder.
* **Views (Colonnes) :** Functional View, Information View, Organizational View, Infrastructure View.
* L'intersection définit l'ensemble des artefacts de travail (*Work-Products*).

---

# Slide 80 : Producing an OVM from multiple viewpoints

**Texte de la diapositive :**
Producing an OVM from multiple viewpoints

**Présence de schéma :** Trois modèles combinés (a, b, c).

**Description du schéma :**

* **(a) Feature Tree :** `Sensor` $\rightarrow$ `AutoTestSensor`, `SpeedSensor`, `PositionSensor` (cardinalité $[1, 4]$).
* **(b) Use Case Diagram :** Acteur `Purchaser` interragissant avec `VehicleLocatorSystem` (qui contient `Sensor` avec cas d'utilisation étendus `AutoTestSensor`, `SpeedSensor` et le point d'extension `Feedback [1, 3]` vers `Audio` et `Vibration`).
* **(c) Resulting OVM :**
* VP `Sensor` $\rightarrow$ Variants `SpeedSensor` (optionnel), `PositionSensor` (optionnel avec arc d'alternative $[0,1]$).
* VP `SensorTest` $\rightarrow$ Variants `ConsistencyCheck` (optionnel), `ResponseTimeCheck` (optionnel), `FunctionalityCheck` (obligatoire).
* Flèches de dépendances reliant les variantes entre elles.



---

# Slide 81 : Multi-viewpoint OVM Issues

**Texte de la diapositive :**
Granularity & language problems!

OVM (or your pivot language) is maybe not rich enough to allow representing individual cardinalities, attributes and other constraints!

---

# Slide 82 : Integration using OVM as a Pivot Language

**Texte de la diapositive :**
Integration using OVM as a pivot language

**Présence de schéma :** Schéma OVM multi-couches de la slide 43 rappelant l'intégration des points de vue *Customer*, *Context*, *Design*, *Behavior* et *Components*.

---

# Slide 83 : Integration of Different Views (Medical Example)

**Texte de la diapositive :**
Integration of different views (Diagnostiquer thrombose/ hémophilie)

**Présence de schéma :**

* **Haut gauche (Feature Model) :** Arbre de caractéristiques `Analyser le plasma` (`Utiliser méthodologie`, `Charger les produits`, `Mesurer`, `Identifier les tubes`).
* **Haut droite (Use Case Diagram) :** Acteur réalisant `Diagnostiquer_thrombose_hémophilie` avec relations `<<includes>>` vers `Analyser_le_plasma`, `Définir_méthodologie`, `Charger_les_produits`, `Mesurer_le_plasma`, `Transférer_résultats`, `Imprimer_résultats`, `Identifier_les_tubes`.
* **Bas droite (OVM unifié) :** Modèle OVM résolvant la variabilité croisée des deux diagrammes avec les VP `Utiliser méthodologie`, `Charger les produits`, `Identifier les tubes` et `Type mesure`.

---

# Slide 84 : Limits of Multi-View Integration

**Texte de la diapositive :**
Granularity & language problems!

How this model mixes all kinds of concepts and variability constraints?

What is the semantic of the resulting model?

---

# Slide 85 : References and Recommended Readings

**Texte de la diapositive :**
References and recommended readings

* **Czarnecki, Krzysztof, Paul Grünbacher, Rick Rabiser, Klaus Schmid, and Andrzej Wąsowski.** "Cool features and tough decisions: a comparison of variability modeling approaches." In *Proceedings of the sixth international workshop on variability modeling of software-intensive systems*, pp. 173-182. ACM, 2012.
* **Cordy, Maxime, Pierre-Yves Schobbens, Patrick Heymans, and Axel Legay.** "Beyond boolean product-line model checking: dealing with feature attributes and multi-features." In *Proceedings of the 2013 International Conference on Software Engineering*, pp. 472-481. IEEE Press, 2013.
* **Dhungana, Deepak, Paul Grünbacher, and Rick Rabiser.** "The DOPLER meta-tool for decision-oriented variability modeling: a multiple case study." *Automated Software Engineering* 18, no. 1 (2011): 77-114.
* **Dumitrescu Cosmin, Dauron Alain, Salinesi Camille, Mazo Raúl.** "La Réutilisation en Ingénierie de Systèmes à Base de Modèles: Processus et Activités IS pour l'Adoption d'une Approche Lignes de Produits." *Génie Logiciel* N° 105, pp. 52-59, Paris-France, Juin 2013.
* **Nair, D.K.** *Variability-Modelling Practices in Industrial Software Product Lines: A Qualitative Study* (Master's thesis, University of Waterloo), 2013.
* **Bühne, Stan, Kim Lauenroth, and Klaus Pohl.** "Why is it not sufficient to model requirements variability with feature models." In *Proceedings of Workshop: Automotive Requirements Engineering*, pp. 5-12, 2004.
* **Mazo Raúl.** "Avantages et limites des modèles de caractéristiques dans la modélisation des exigences de variabilité." Journal *Génie Logiciel*, No. 111, Paris-France, pp. 42-48, Dec. 2014.
* **Mazo Raúl, Salinesi Camille, Diaz Daniel, Djebbi Olfa, Lora-Michiels Alberto.** "Constraints: the Heart of Domain and Application Engineering in the Product Lines Engineering Strategy." *International Journal of Information System Modeling and Design* IJISMD, pp. 33-68, Vol. 3, No. 2, April-June 2012.
* **Dumitrescu Cosmin, Tessier Patrick, Salinesi Camille, Gérard Sebastien, Dauron Alain, Mazo Raúl.** "Capturing Variability in Model-based Systems Engineering Process." *Complex Systems Design & Management (CSD&M) Conference*, Springer Press, Paris-France, pp. 125-140, 2013.
* **Birk, A., Heller, G., John, I., Schmid, K., von der Maßen, T. and Muller, K.** "Product line engineering, the state of the practice." *IEEE software*, 20(6), pp.52-60, 2003.
* **Galster, M., Weyns, D., Tofan, D., Michalik, B. and Avgeriou, P.** "Variability in software systems-a systematic literature review." *IEEE Transactions on Software Engineering*, 40(3), pp.282-306, 2014.
* **Mazo Raúl.** *Guía para la adopción industrial de líneas de productos de software.* Editorial Eafit, ISBN 978-958-720-506-0, Medellín-Colombia, 2018.