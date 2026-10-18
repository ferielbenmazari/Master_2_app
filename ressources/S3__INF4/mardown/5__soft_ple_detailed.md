# (Software) Product Line Engineering

**Auteurs :** Camille SALINESI, Camilo CORREA RESTREPO

**Institution :** UNIVERSITÉ PARIS 1 PANTHÉON SORBONNE

**Page :** 1

---

# Objectif and schedule of the course

**Help you integrate Product Line Engineering (PLE):**

* ✓ in your development practice &
* ✓ in your research agenda

### Description et explication du schéma : Cadre général de l'ingénierie de lignes de produits (PLE)

Le schéma structure l'ingénierie de lignes de produits selon deux axes majeurs :

1. **Verticalement :** La séparation entre **Domain Engineering** (Ingénierie de domaine / pour la réutilisation) et **Application Engineering** (Ingénierie d'application / avec réutilisation).
2. **Horizontalement :** La séparation entre **Problem Space** (Espace du problème / Analyse & Exigences) et **Solution Space** (Espace de la solution / Architecture, Composants & Implémentation).

#### Composants détaillés du schéma :

* **SCOPING (Cadrage - Colonne de gauche) :**
* **Evolution**
* **Product Catalog / Portfolio**
* **Internal Analysis**
* **Rentability and Investment Analysis**
* **Objectives and Market Analysis**


* **DOMAIN ENGINEERING (Bande supérieure) :**
* **Problem Space (Domain Analysis) :**
* *Domain Requirements Engineering* (Ingénierie des exigences du domaine) $\rightarrow$ *Reference Domain Architecture Definition*.
* *Variability Model* (Modèle de variabilité) : Représentation abstraite des caractéristiques et des contraintes du domaine.


* **Solution Space (Domain Implementation) :**
* *Requirements Engineering of Domain Reusable Components* $\rightarrow$ *Architecting of Components* $\rightarrow$ *Implementation* $\rightarrow$ *Unit Testing* $\rightarrow$ *Binding Components to Variability Elements*.
* *Components Model* : Regroupe les composants réutilisables du domaine (*Domain Reusable Components*) tels que `GAT-One`, `GAT-Core`, `SAT-Core`, `GAT-Derivation`.


* **Bloc central d'interface :** *Organizational and Technical Management* (Gestion organisationnelle et technique) assurant la liaison (*Binding*), la configuration (*Configuration*), l'implémentation du domaine (*Domain implementation*) et la capitalisation optionnelle (*Capitalization*).


* **APPLICATION ENGINEERING (Bande inférieure) :**
* **Problem Space (Configuration and Customisation Management) :**
* *Application Requirements Engineering* $\rightarrow$ *Architecting* $\rightarrow$ *Customisation* $\rightarrow$ *Configured products*.


* **Solution Space (Derivation Process) :**
* *Derivation artifacts* $\rightarrow$ *Requirements Engineering of Derivation Process* $\rightarrow$ *Architecting in Derivation Process* $\rightarrow$ *Implementation in Derivation Process* $\rightarrow$ *Integration Testing* $\rightarrow$ **PRODUCTS** (Produits spécifiques dérivés).





**Compréhension du schéma :** Ce schéma définit la vue d'ensemble du processus PLE. Le domaine crée des artefacts réutilisables basés sur l'analyse du marché et la variabilité du domaine, tandis que l'ingénierie d'application dérive des produits spécifiques en configurant et assemblant ces artefacts selon les besoins spécifiques des clients.

**Page :** 2

---

# Plan de la partie : Domain engineering = Engineering for reuse

1. **Analysis**
* **A. Some languages to specify PLMs**
* a. Feature Models
* b. OVM
* c. DOPLER
* d. Constraint-based product line models


* **B. Strategies to specify the requirements of a PL**
* a. Requirements-driven strategy
* b. Low-end vs. high-end product strategy (reference-product strategy)
* c. Multiviewpoint strategy


* **C. Verification, diagnosis and fixing processes**


2. **Design**
3. **Implementation**

**Page :** 3

---

# 1. Analysis

### A. Some languages to specify PLMs

* a. Feature Models
* b. OVM
* c. DOPLER
* d. Constraint-based product line models

**Page :** 4

---

# Domain Engineering: it's all about the family

### Description et explication du schéma : Les trois étapes clés du Domain Engineering

* **Problem Domain (Nuage d'analyse / Espace du problème)** $\rightarrow$ Flèche rouge $\rightarrow$ **Design (Arbre hiérarchique / Architecture)** $\rightarrow$ Flèche rouge $\rightarrow$ **Implementation (Composants logiciels modulaires et composables)**.
* **Compréhension du schéma :** Le schéma illustre le flux de transformation dans l'ingénierie de domaine : on part de la compréhension abstraite du problème du domaine, on la structure sous forme d'architecture globale, puis on la concrétise en briques virtuelles réutilisables et composables.

### Three main activities:

1. **Analysis :** Identify the variability present in the product line
2. **Design :** Develop an architecture and production plan
3. **Implementation :** Develop all features with composability in mind

**Page :** 5

---

# Extensive representation: Matrix representation

*(Illustration avec trois photographies d'appareils de mesure et de diagnostic médical automatisé)*

### Représentation matricielle des composants et configurations :

| Components | Basic | Medium | Enriched |
| --- | --- | --- | --- |
| Chronometric reaction measure | 1 | 1 | 2 |
| Photometric reaction measure | 0 | 0 | 1 |
| Barcode productID | 0 | 1 | 1 |
| RFID product ID | 0 | 0 | 1 |
| Manual product ID | 1 | 1 | 1 |
| External system PID | 0 | 1 | 1 |

**Compréhension du tableau :** Chaque colonne représente une variante de produit spécifique (Basic, Medium, Enriched) et chaque ligne liste la quantité exacte de chaque composant présent dans ce produit. C'est une forme d'énumération explicite/extensive.

**Page :** 6

---

# Extensive representation: breakdown structure

### Structure d'arborescence (Breakdown Structure) :

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
* 1 External system PID
* 2 RFID product ID



**Compréhension :** Il s'agit d'une décomposition explicite produit par produit. Chaque produit est défini individuellement par la liste exhaustive de ses fonctionnalités et composants.

**Page :** 7

---

# Benefits

1. **Big picture :** clear vision of what is expected
2. **Completeness :** coverage of functional & physical variants
3. **Consistency :** avoid duplication of requirements by defining common & specific requirements
4. **Easy to maintain :**
* At system level
* At feature level



**Page :** 8

---

# Scalability issue

*(Schéma d'une bulle d'explosion masquant la structure d'arborescence précédente)*

### Problématiques soulevées :

* "How to deal with common components?"
* "How to identify/represent the cross-tree constraints?"
* "How to easily incorporate new components?"
* "How to create new products with the existing components?"
* **"How do you specify a product line of $10^{21}$ products with 1000 components ?"**

**Compréhension :** La représentation extensive (matrice ou énumération par produit) devient totalement inexploitable face à l'explosion combinatoire. Il est impossible d'énumérer un par un $10^{21}$ produits.

**Page :** 9

---

# Product Line Models (PLMs): Intensive representation vs Product Models (PMs): Extensive representation

### Comparaison structurelle entre le niveau Domaine (PLMs) et le niveau Produit (PMs) :

#### At the domain level (PLMs - Intensive representation) :

* **Feature Models (Kang et al. 1990, Czarnecki et al. 2005, Schobbens et al. 2007, Michel et al. 2011) :**
* Arbre de caractéristiques : `Feature A` avec cardinalité groupe `<1,2>`, sous-caractéristiques `Feature B (att 1)`, `Feature C (att 1, att 2)`.


* **OVM (Pohl et al. 2005) :**
* Points de variation et variantes : `VP A [1,2]`, variantes `B`, `C`.


* **DOPLER (Dhungana et al. 2006, 2010) :**
* Modèle de décision : `Decision A ? (Name: A, expected value 1:2: {B, C})` relié aux artefacts `Asset1`, `Asset2`.


* **Constraint-based (Salinesi et al. 2010, 2011) :**
* Modèle logique par contraintes : `domain([A, B, C], 0, 1)`, `B <= A`, `C <= A`, `A <= B + C <= A * 2`.



#### At the product level (PMs - Extensive representation) :

* Représentation explicite des instances dérivées :
* `Decision A = true, B = 4, C = 9.8, Asset1 = 1, Asset2 = 1`
* Configurations spécifiques : $P1 = \{A, B, C\}$, $P2 = \{A, B\}$, $P3 = \{A, C\}$.



**Compréhension :** La représentation intensive définit le domaine sous forme de règles, contraintes et modèles génériques permettant de générer implicitement tous les produits valides sans les énumérer.

**Page :** 10

---

# Feature Models: First example of FODA (Feature-Oriented Domain Analysis)

### Schéma du modèle FODA pour une automobile :

* **Racine :** `Car`
* **Features obligatoires (Mandatory) :** `Transmission`, `Horsepower`
* **Features alternatives (XOR) sous Transmission :** `Manual`, `Automatic`
* **Feature optionnelle (Optional) :** `Air conditioning`
* **Règle de composition (Composition rule) :** `Air conditioning requires Horsepower > 100`
* **Justification (Rationale) :** `Manual more fuel efficient`

### Sémantique (Espace des configurations valides générées) :

* $C1 = \{\text{Car}, \text{Transmission}, \text{Manual}, \text{Horsepower}\}$
* $C2 = \{\text{Car}, \text{Transmission}, \text{Automatic}, \text{Horsepower}\}$
* $C3 = \{\text{Car}, \text{Transmission}, \text{Manual}, \text{Horsepower} > 100, \text{Air conditioning}\}$
* $C4 = \{\text{Car}, \text{Transmission}, \text{Automatic}, \text{Horsepower} > 100, \text{Air conditioning}\}$

**Référence :** Kang K., Cohen S., Hess J., Novak W., Peterson S. *Feature-Oriented Domain Analysis (FODA) Feasibility Study*, Technical Report CMU/SEI-90-TR-21, Software Engineering Institute, Carnegie Mellon University, November 1990.

**Page :** 11

---

# What is a feature?

*(Illustration : Le Grand Schtroumpf)*

### Définition :

A feature is an essential abstraction of a functionality or product characteristic relevant to stakeholders (Czarnecki & Eisenecker, 2000).

* **Features may be :**
* ☑ abstract vs concrete
* ☑ common vs variable


* **Feature VS {Classes, Functions, Aspects...} :**
* External characteristics VS Internal details


* **User-oriented needs VS developer, solution and quality concerns**
* **Intentions VS prescribed solutions**

**Page :** 12

---

# It can also be represented as a FODA diagram

### Description du schéma FODA :

* **Root (Racine) :** `F1` (concept principal de la ligne de produits).
* **Nodes (Nœuds / Caractéristiques) :**
* Concrete (Concrètes) : `F2`, `F5`, `F6`, `F8`, `F9`, `F10`, `F11`, `F12`.
* Abstract (Abstraites) : `F3`, `F4`, `F7`.


* **Tree (Arbre) :** Relations « est composé de » (raffinement / décomposition).
* **Structure :**
* `F1` se décompose en `F2` (obligatoire), `F3` (obligatoire), `F4` (obligatoire).
* `F3` se décompose en `F5` (optionnelle - cercle vide), `F6` (optionnelle - cercle vide), `F7` (obligatoire).
* `F4` se décompose en `F11`, `F12`.
* `F7` se décompose en `F8`, `F9`, `F10`.



**Page :** 13

---

# FODA diagram - Mandatory vs Optional

### Schéma FODA illustrant :

* **Mandatory features :** Reliées par une ligne directe sans cercle au bout (`F2`, `F3`, `F4`, `F7`).
* **Optional features :** Marquées par un cercle vide sur le sommet du nœud enfant (`F5`, `F6`).

**Page :** 14

---

# FODA diagram - Semantics (Exemple 1)

### Schéma simplifié :

* Racine : `F1`
* Enfants obligatoires : `F2`, `F3`, `F4`
* Enfants de `F3` : `F5` (optionnel), `F6` (optionnel), `F7` (obligatoire)

### Sémantique (Ensemble des produits valides) :

$$\begin{{aligned} \{ & \{F1, F2, F3, F4, F7\}, \\ & \{F1, F2, F3, F4, F5, F7\}, \\ & \{F1, F2, F3, F4, F6, F7\}, \\ & \{F1, F2, F3, F4, F5, F6, F7\} \} \end{aligned}$$

**Compréhension :** `F1`, `F2`, `F3`, `F4` et `F7` doivent figurer dans tous les produits. `F5` et `F6` peuvent être absentes ou présentes indépendamment, donnant $2^2 = 4$ combinaisons.

**Page :** 15

---

# FODA diagram - Alternatives (XOR)

### Schéma FODA intégrant une relation XOR :

* Un arc reliant les branches `F11` et `F12` sous le parent `F4`.
* **Légende :**
* Mandatory features
* Optional features
* **Alternatives (XOR)** : Exactement une feature parmi le groupe doit être sélectionnée.



**Page :** 16

---

# FODA diagram - Semantics (Exemple avec XOR)

### Analyse sémantique de la contrainte XOR entre F11 et F12 :

* Les combinaisons ne contenant aucun des deux (`F11` ni `F12`) ou contenant les deux simultanément (`F11` et `F12`) sont supprimées/barrées.

### Ensemble des 8 produits valides :

$$\begin{{aligned} \{ & \{F1, F2, F3, F4, F7, F11\}, \\ & \{F1, F2, F3, F4, F5, F7, F11\}, \\ & \{F1, F2, F3, F4, F6, F7, F11\}, \\ & \{F1, F2, F3, F4, F5, F6, F7, F11\}, \\ & \{F1, F2, F3, F4, F7, F12\}, \\ & \{F1, F2, F3, F4, F5, F7, F12\}, \\ & \{F1, F2, F3, F4, F6, F7, F12\}, \\ & \{F1, F2, F3, F4, F5, F6, F7, F12\} \} \end{aligned}$$

**Page :** 17

---

# FODA diagram - Group Cardinalities

### Schéma FODA intégrant une cardinalité de groupe :

* Sous `F7`, un arc étiqueté `<1..1>` relie les branches `F8`, `F9`, et `F10`.
* **Légende :**
* Mandatory features
* Optional features
* Alternatives (XOR)
* **Group cardinalities :** Nombre min/max de caractéristiques sélectionnables dans le groupe.



**Page :** 18

---

# FODA diagram - Semantics (Exemple avec cardinalité de groupe <1..1>)

### Ensemble des 24 produits valides :

* **8 configurations avec F8 :**
* `[F1, F2, F3, F4, F7, F8, F12]`
* `[F1, F2, F3, F4, F7, F8, F11]`
* `[F1, F2, F3, F4, F6, F7, F8, F12]`
* `[F1, F2, F3, F4, F6, F7, F8, F11]`
* `[F1, F2, F3, F4, F5, F7, F8, F12]`
* `[F1, F2, F3, F4, F5, F7, F8, F11]`
* `[F1, F2, F3, F4, F5, F6, F7, F8, F12]`
* `[F1, F2, F3, F4, F5, F6, F7, F8, F11]`


* **8 configurations avec F9 :**
* `[F1, F2, F3, F4, F7, F9, F12]`
* `[F1, F2, F3, F4, F7, F9, F11]`
* `[F1, F2, F3, F4, F6, F7, F9, F12]`
* `[F1, F2, F3, F4, F6, F7, F9, F11]`
* `[F1, F2, F3, F4, F5, F7, F9, F12]`
* `[F1, F2, F3, F4, F5, F7, F9, F11]`
* `[F1, F2, F3, F4, F5, F6, F7, F9, F12]`
* `[F1, F2, F3, F4, F5, F6, F7, F9, F11]`


* **8 configurations avec F10 :**
* `[F1, F2, F3, F4, F7, F10, F12]`
* `[F1, F2, F3, F4, F7, F10, F11]`
* `[F1, F2, F3, F4, F6, F7, F10, F12]`
* `[F1, F2, F3, F4, F6, F7, F10, F11]`
* `[F1, F2, F3, F4, F5, F7, F10, F12]`
* `[F1, F2, F3, F4, F5, F7, F10, F11]`
* `[F1, F2, F3, F4, F5, F6, F7, F10, F12]`
* `[F1, F2, F3, F4, F5, F6, F7, F10, F11]`



**Page :** 19

---

# FODA diagram - Dependencies (Requires & Mutex)

### Schéma avec contraintes inter-branches (Cross-tree constraints) :

* **Requires :** Flèche pointillée orientée de `F6` vers `F12` (`F6 requires F12`).
* **Mutex (Exclusion mutuelle) :** Fleche double pointillée entre `F2` et `F8` (`F2 mutex F8`).

**Page :** 20

---

# FODA diagram - Semantics (Impact de Mutex)

### Effet de `F2 mutex F8` :

* Toutes les configurations contenant simultanément `F2` et `F8` sont éliminées/invalides.

**Page :** 21

---

# FODA diagram - Semantics (Impact de Requires)

### Effet de `F6 requires F12` :

* Toute configuration contenant `F6` doit impérativement contenir `F12`. Les configurations ayant `F6` avec `F11` sont éliminées.

**Page :** 22 & 23

---

# FODA model - Complex Cross-tree Constraints

### Schéma complet avec équation booléenne :

* Ajout d'une contrainte logique textuelle :

$$\mathbf{F9 \implies \neg (F5 \land F6)}$$



**Compréhension :** Si la feature `F9` est sélectionnée, alors il est interdit de sélectionner simultanément `F5` et `F6`.

**Page :** 24 & 25

---

# Exercise: Manual Analysis of FODA model

### Schéma du modèle pour l'exercice :

* **Racine :** `F1`
* **Sous-arbres :**
* `F2` (optionnel) $\rightarrow$ sous-features `F8` (optionnel), `F9` (obligatoire), `F10` (optionnel).
* Sous `F9` : Groupe avec cardinalité `<1..1>` sur `F13`, `F14`, `F15`.
* `F3` (optionnel).
* `F4` (optionnel) $\rightarrow$ groupe XOR entre `F11` et `F12`.
* `F5` (obligatoire).
* `F7` (optionnel).


* **Dépendances :**
* `F10 mutex F3`
* `F12 mutex F7`
* `F15 requires F11`


* **Contraintes logiques :**
* $F14 \implies \neg (F8 \land F10)$
* $F13 \implies F8 \land \neg F7$



### Questions :

1. Construct at least 12 unique products from this model.
2. What is the space of possible combinations with these features?
3. How many are actually allowed by the model?

**Page :** 26

---

# Exercise: Manual Analysis of FODA model (Solution)

### Réponses aux questions :

* **What is the space of possible combinations with these features?**
* **Answer :** $2^{13} = 8192$ combinations.


* **How many are actually allowed by the model?**
* **Answer :** **46** products.


* **Why?**
* Les contraintes de structure (parent/enfant, obligatoire/optionnel), les cardinalités de groupe (XOR, $<1..1>$), les dépendances (`requires`, `mutex`) et les contraintes booléennes complexes réduisent drastiquement l'espace des solutions de 8192 à seulement 46 produits valides.



**Page :** 27

---

# Feature modelling dialects: FORE

### Comparaison des notations dans le dialecte FORE :

* **Optional :** `F2` est optionnel par rapport à `F1` (ligne avec cercle vide).
* **Mandatory :** `F2` est obligatoire par rapport à `F1` (ligne continue avec cercle plein).
* **Requires :** `F1` $\rightarrow$ `F2` (flèche orientée).
* **Excludes :** `F1` $\leftrightarrow$ `F2` (flèche bidirectionnelle).
* **Group cardinality :** Arc reliant les branches sous `F0` avec l'étiquette `<m..n>`. Si `F0` est sélectionné, entre $m$ et $n$ features enfants doivent être sélectionnées.

**Page :** 28

---

# Concepts included into the FODA dialect

1. **Individual Cardinalities :** Number of times a feature can occur in a configuration (ex: `F1 [3..4] [6] [8] [16] F2`).
2. **Attributes :** Specific measurable characteristics of a feature, with a name, a domain and a value at a given configuration time (ex: `Att1: {Domain}`, `Att2: {Domain}`).
3. **Complex constraints :** Boolean, Arithmetic, Symbolic (`all_different(...)`, `relation(...)`, Equality, Inequality...).

**Références :**

* Cardinalities (Riebisch et al. 2002, Czarnecki et al. 2005)
* Attributes (Streitferdt et al. 2003, Benavides et al. 2005c, White et al. 2009)
* Complex constraints (Benavides et al. 2005, Batory 2005, Salinesi et al. 2011)
* Evolution (Schobbens et al. 2007)

**Page :** 29

---

# Feature versioning & CSP derivation example (TurtleBot)

### Description du processus de résolution par CSP :

Le schéma montre l'intégration des versions de composants dans un Feature Model de robot TurtleBot. Le modèle avec versions est encodé sous forme de CSP (Constraint Satisfaction Problem) puis résolu pour calculer la meilleure configuration physique.

### Exigences pour la modélisation de lignes de produits avec gestion des versions :

* **Requirement 1 :** Support for feature versions as units of configuration.
* **Requirement 2 :** Specification of the relation of versions in logical development lines (i.e., predecessor and successor versions including branching).
* **Requirement 3 :** Expression of dependencies on and incompatibilities with version ranges.
* **Requirement 4 :** Support for users in selecting suitable combinations of versions from a selection of features.

### Contraintes prenant en compte les versions (Version-Aware Constraints) :

1. `Autonomous -> Detection`
2. `Keyboard v Gamepad -> Webservice`
3. `Infrared [>= 2.0] v Ultrasound -> Detection [>= 1.1]`
4. `TurtleBot [>= 2.0] -> Engine [>= Kobuki 1.0]`
5. `TurtleBot [1.0-1.1] -> Engine [Create 1.2]`
6. `TurtleBot [>= 2.0] -> Webservice [>= 1.1]`

**Page :** 30

---

# FROG: Feature Relations Graphs (A Visualisation Paradigm for Feature Constraints in PLs)

### Description de l'interface graphique FROG :

FROG est un paradigme visuel sous forme de graphe circulaire concentrique pour visualiser les relations et contraintes entre caractéristiques dans une ligne de produits (exemple : frein de stationnement électrique `Electric Parking Brake`).

#### Composants de l'interface :

* **Liste de caractéristiques (Feature List à gauche) :** `PBSManual`, `PBSAutomatic`, `PBSAssistance`, `ClutchPedal`, `GBAutomatic`, `GBManual`, `AuxiliaryBrakeRelease`, `PullerCable`, `ElectricActuator`, `Calipser`, `Traditional`, `TemporaryMonitor`, `PermanentMonitor`, `DCMotor`, `PairEActuator`, `TiltSensor`, `EffortSensor`, `ClutchPosition`, `DoorPosition`, `VSpeed`.
* **Graphe circulaire central (FRoG) :** Place la caractéristique sélectionnée (`PBSAutomatic`) au centre et distribue les autres sur des cercles de couleur selon leur type de relation.
* **Légende FROG (À droite) :**
* *Perspectives des parties prenantes :* Customer, Environment, Functions, Design, Behaviour, Components.
* *Types de relations :* Formalized (avec symbole), Inferred, Undefined.
* *Zones de contraintes :* Requires (Vert), Encourages (Vert clair), Independent (Gris), Discourages (Orange), Excludes (Rouge).
* *Indicateur de confiance :* Confidence 5%.



**Page :** 31

---

# Some problems of Feature Models (FMs)

### Schéma de départ : Système de freinage (Braking System)

* **Braking System**
* $\rightarrow$ `Main (hydraulic) Brake` [Mandatory]
* $\rightarrow$ `Electronic Stability Control` `[0..2]`
* $\rightarrow$ `Anti blocking` `[0..2]`
* Relation : `Electronic Stability Control includes Anti blocking`


* $\rightarrow$ `Parking Brake` [Mandatory]
* Groupe XOR : `Automatic Parking Brake` vs `Manual Parking Brake`
* Sous `Automatic Parking Brake` : Groupe avec cardinalité `<1..2>` :
* `Puller Cable Solution` `[0..2]`
* `Caliper Actuator Solution` `[0..2]`







### Problèmes identifiés dans les pages 32 à 36 :

1. **Confusion décision/caractéristique :** Mélange entre structures physiques et décisions de configuration (ex: choix entre automatique et manuel).
2. **Décomposition vs Sous-typage :** Ambiguïté entre relation de composition ("partie de") et spécialisation ("est un").
3. **Redondance et cardinalités :** Conflits ou ambiguïtés sémantiques entre cardinalités d'éléments (`[0..2]`), cardinalités de groupes (`<1..2>`) et contraintes `includes`/`excludes`.

**Pages :** 32, 33, 34, 35, 36

---

# Other feature dialects (basic concepts)

| Type | Structure | Mandatory features | Optional features | OR | XOR | Particularities |
| --- | --- | --- | --- | --- | --- | --- |
| **FODA** | Arbre | Rond plein | Rond vide | - | - | Version originale pionnière |
| **FORM** | Graphe | Rond plein | Rond vide | - | - | Relations d'implémentation, de spécialisation / généralisation |
| **FOPLE** | Graphe | Rond plein | Rond vide | - | - | Processus (orienté MPP) |
| **FeatuRSEB** | Arbre | Rond plein | Rond vide | Arc | Arc | Processus orienté Cas d'Utilisation (UC) |
| **GP** | Arbre | Rond plein | Rond vide | Arc | Arc | Processus orienté génération de code |
| **Bosch** | Arbre | Rond plein | Rond vide | Arc | Arc | Introduction du concept de Feature externe |
| **FORE** | Graphe | Ligne continue | Ligne pointillée | Arc | Arc | Relations obligatoires et optionnelles, cardinalités |

**Page :** 37

---

# Other feature dialects (cardinalities)

| Cardinalities | FODA & FORM | Bosch | GP | FeatuRSEB |
| --- | --- | --- | --- | --- |
| **0..1** | Nom feature | Nom feature | Nom feature (XOR) | Nom VP (XOR) |
| **1** | Nom feature | Nom feature | Nom feature (XOR) | Nom VP (XOR) |
| **0..N** | Nom feature | Nom feature | Nom feature (OR) | Nom VP (OR) |
| **1..N** | Nom feature | Nom feature | Nom feature (OR) | Nom VP (OR) |
| **N** | Nom feature | Nom feature | Nom feature | Nom feature |

**Page :** 38

---

# Discussion (FODA dialects)

* Is there any concept, construct or relation type you think is missing from these types of models? Why?
* Do you believe these concepts are sufficient to express any product line? Why or why not?
* These models are by far the most popular model type used in industry, why do you think that is?

**Page :** 39

---

# Orthogonal Variability Model (OVM)

### Description du schéma des concepts OVM :

* **Variation Point (VP / Point de Variation) :** Représenté par un **triangle** contenant un nom.
* **Variant (V / Variante) :** Représenté par un **rectangle** contenant un nom.
* **Types de liaisons VP-V :**
* **Mandatory (Obligatoire) :** Ligne continue terminée par un cercle noir plein entre le triangle et le rectangle.
* **Optional (Optionnelle) :** Ligne pointillée terminée par un cercle blanc vide.
* **Alternative :** Arc reliant les lignes pointillées avec l'indication de cardinalité `[min, max]`.


* **Constraint dependencies (Dépendances de contraintes) :**
* **Requires :** Flèche pointillée simple orientée ($\dashrightarrow$).
* **Excludes :** Flèche pointillée double ($\mathrel{\dashleftarrow\dashrightarrow}$).



**Page :** 40

---

# Example of OVM: Using an auxiliary variation point to express constraints

### Description du schéma OVM :

* **Points de Variation (Triangles) :**
* `Système ouverture porte` (Cardinalité : $1/1$) $\rightarrow$ Variantes : `SOPA`, `SOPB`, `SOPC`.
* `AuxiliaryVP` (Cardinalité : $1/3$) $\rightarrow$ Variantes : `AuxV1`, `AuxV2`, `AuxV3`.
* `Leve Vitre Avant` (Cardinalité : $1/1$) $\rightarrow$ Variantes : `LVAVMA`, `LVAVEL`, `LVAVAP`, `LVAVIP`, `LVCIPE`.


* **Contraintes inter-variantes (`<requires>`) :**
* `SOPC` $\xrightarrow{\text{requires}}$ `AuxiliaryVP`
* `AuxV1` $\xrightarrow{\text{requires}}$ `LVAVMA`
* `AuxV2` $\xrightarrow{\text{requires}}$ `LVAVEL`
* `AuxV3` $\xrightarrow{\text{requires}}$ `LVCIPE`



### Définition des variantes :

* **SOPA, SOPB, SOPC :** Trois types de systèmes d'ouverture de porte.
* **LVAVMA :** Lève-vitre avant manuel.
* **LVAVEL :** Lève-vitre avant électrique.
* **LVAVAP :** Lève-vitre avant anti-pincement.
* **LVAVIP :** Lève-vitre avant à impulsion électrique.
* **LVCIPE :** Lève-vitre avant électrique séquentiel/impulsion côté conducteur et électrique côté passager.

**Page :** 41

---

# Example of OVM: variants know their implementations (Pohl et al. 2010)

### Description du schéma de traçabilité Design / OVM :

* **Partie Gauche (Design - Diagramme de composants architecturel) :**
* Composants : `User Control Manager`, `Lock Control`, `Authentication Manager`, `Authentication Plug-in`, `Electronic Door Lock Plug-in`.


* **Partie Droite (Variability Diagram - Modèle OVM) :**
* VP `Door Lock` $\rightarrow$ Variante `Electronic`.
* VP `Authentication` $\rightarrow$ Variante `Yes`.


* **Lien de traçabilité :** La variante `Electronic` pointe directement vers le composant logiciel `Electronic Door Lock Plug-in`. La variante `Yes` pointe vers le sous-système d'authentification (`Authentication Manager` + `Authentication Plug-in`).

**Page :** 42

---

# With the OVM language you do not always get well-structured models (Dumitrescu et al. 2013)

### Description du schéma d'architecture complexe multi-vues :

Le schéma montre l'application de l'OVM sur un système automobile réel découpé en 5 niveaux de vue :

1. **Customer visible variability :** Variabilité visible par le client au niveau du véhicule (VP `ParkingBrakeService` 1/1, VP `HillStartAssistance` 0/1).
2. **Stakeholders / Environment & Context :** Contexte du système (VP `GearBox` 1/1, VP `RegulationZone` 1/3, VP `VehicleTrailer` 1/1, VP `VehicleProperties`).
3. **Functions :** Fonctions système internes (VP `BrakeLock` 1/2, VP `ClutchPedal`, VP `BrakeRelease` 1/2, VP `RedundancyFunctions`, VP `HSADisableFunction` 1/1).
4. **Design & Allocation Alternatives :** Décisions de conception technique (VP `ArchitectureDesignAlternatives` 1/1, VP `Aux` 2/2, VP `ForceDistributionDesignAlternatives` 1/1, VP `SoftwareAllocationDesignAlternatives` 1/1, VP `TiltAngleFunctionAllocation` 0/1).
5. **Internal Behavior & Components :** Composants physiques, états et transitions (VP `ForceMonitorOnEngineStop` 1/1, VP `BrakeBehaviorThresholds`, VP `BrakingStrategy`, VP `ElectricalActionComponents` 1/1, VP `InputInformation`).

**Compréhension :** Sans règles strictes de structuration, un modèle OVM industriel devient très vite un "écheveau" extrêmement complexe de dépendances croisées difficiles à maintenir.

**Page :** 43

---

# The DOPLER language

### Description du méta-modèle DOPLER :

* **Classe `decision` :**
* Attributs : `Name`, `Question`, `Description`, `[domain-specific-attributes]`.
* Auto-association : `Hierarchical and logical dependencies` ($1 \rightarrow *$).
* Sous-classes : `boolean decision`, `integer decision`, `string decision`, `enumeration decision`.


* **Classe `asset` :**
* Attributs : `Name`, `Description`.
* Auto-association : `Functional and structural dependencies` ($1 \rightarrow *$).


* **Relation entre `asset` et `decision` :** `Inclusion condition` (Condition d'inclusion qui lie un artefact à une décision).

**Page :** 44

---

# DOPLER Decisions

* Decisions can be of four types: **Boolean, Integer, String or Enumeration**.
* DOPLER decision and its decision options can be seen as variables.
* Expected value is used as a cardinality over decision options.

#### Exemple :

```text
(? Which tools?
   (name: tools; expected val 1:3):
   {"CW", "DK", "PK"})

```

**Page :** 45

---

# DOPLER decision relationships

### Description du schéma des relations entre décisions :

* **Décisions représentées :**
* `Which tools? (name: tools; expected val 1:3): {"CW", "DK", "PK"}`
* `Default resolution? (name: resolution; expected val 1:1): {"800x600", ...}`
* `Width? (name: width; expected val: number)`


* **Types de relations illustrées :**
* **Visibility Condition (Flèche pointillée simple) :** `contains(tools, "CW")` entre *Which tools?* et *Default resolution?*.
* **Decision Effect (Flèche en ligne continue) :** `if (resolution=="800x600") then width=800` entre *Default resolution?* et *Width?*.
* **Validity Condition (Ligne en pointillés légers / contrainte) :** `width>=800 && width<=1680` appliquée sur *Width?*.



**Page :** 46

---

# DOPLER Assets

### Structure des artefacts :

* **Asset 1 :** `Plugin`
* `-name: string = Core Plugin`
* `-inclusion condition: string = true`
* `-description: string = ...`
* `-location: string = svn://...`


* **Asset 2 :** `Plugin`
* `-name: string = Glossary Plugin`
* `-inclusion condition: string = glossary == true`
* `-description: string = ...`
* `-location: string = svn://...`


* **Relation :** Asset 2 `<<requires>>` Asset 1.
* Assets are related by means of functional and structural dependencies (`Requires`, `Excludes`).

**Page :** 47

---

# DOPLER inclusion conditions

* DOPLER assets can be seen as boolean variables.
* Decisions and assets are linked with inclusion conditions defining traceability from the solution space to the problem space.

### Schéma de traçabilité :

* **Décision (Problem Space) :** `Include glossary? (name: glossary; expected val: bool)`
* $\downarrow$ *Lien de condition d'inclusion*
* **Artefact (Solution Space) :** `Plugin -name: string = Glossary Plugin, -inclusion condition: string = glossary == true`

**Page :** 48

---

# DOPLER variability model (Vue complète)

### Schéma de correspondance Espace du Problème / Espace de la Solution :

#### Decision Model (Problem Space) :

* `What to buy? (name: scope; expected val 1:1): {"assemble yourself", "complete suite"}`
* `Include glossary? (name: glossary; expected val: bool)` $\leftarrow$ Condition de visibilité : `isTaken(scope)`
* `Which tools? (name: tools; expected val 1:3): {"CW", "DK", "PK"}` $\leftarrow$ Condition de visibilité : `scope=="assemble yourself"`
* `Default resolution? (name: resolution; expected val 1:1): {"800x600", ...}` $\leftarrow$ Condition de visibilité : `contains(tools, "CW")`
* `Width? (name: width; expected val: number)` $\leftarrow$ Effet de décision : `if (resolution=="800x600") then width=800`, Contrainte : `width>=800 && width<=1680`

#### Asset Model (Solution Space) :

* `Plugin` : Core Plugin (`inclusion condition = true`)
* `Plugin` : Glossary Plugin (`inclusion condition = glossary == true`) $\xrightarrow{\ll\text{requires}\gg}$ Core Plugin
* `Plugin` : CW Plugin (`inclusion condition = contains(tools, "CW")`) $\xrightarrow{\ll\text{requires}\gg}$ Core Plugin
* `Setting` : Resolution width (`inclusion condition = isTaken(width)`, `width_value = width`) $\xrightarrow{\ll\text{contributes to}\gg}$ CW Plugin

**Page :** 49

---

# DOPLER Tool Screenshots (Eclipse Platform)

### Capture d'écran 1 (Page 50) : Édition du modèle de décision `scope`

* **Name :** `scope`
* **Question :** `What do you want to buy?`
* **Visibility condition :** `true`
* **Validity condition :** `true`
* **Possible Values (Cardinality 1:1) :**
* `assemble tools yourself` : "you can select tools and extensions manually and step-by-step"
* `completely configured tool suite` : "you can choose from a set of preconfigured tool suites"



### Capture d'écran 2 (Page 51) : Édition de la décision `DOPLER_tools`

* **Name :** `DOPLER_tools`
* **Question :** `Which of the following DOPLER tools do you want?`
* **Visibility condition :** `scope==("assemble tools yourself")`
* **Possible Values (Cardinality 0:3) :** `ConfigurationWizard`, `DecisionKing`, `ProjectKing`.

### Capture d'écran 3 (Page 52) : Édition des Artefacts (Plugins)

* **Details of Asset :** `Configuration Wizard Default-Documentation Generator-Plug-in`
* **IncludedIF :** `contains(CW_extensions, ("Default Documentation Generator"))`
* **ID :** `at.jku.ase.cw.docgenerator`
* **Version :** `1.0.0.20080211`

**Pages :** 50, 51, 52

---

# DOPLER variability model (Critique)

* **Remarque critique :** "But Decision Model is more a process model than a variability model!"

**Page :** 53

---

# Constraint-based product line language

### Méta-modèle basé sur la programmation par contraintes (Mazo et al. 2012, basés sur Salinesi et al. 2011) :

#### Types de contraintes :

* **Symbolic :** `element(...)`, `element_var(...)`, `all_different(...)`, `at_most(...)`, `at_least(...)`, `exactly(...)`, `relation(...)`.
* **Arithmetic :** Superior, Superior or equal, Inferior, Inferior or equal, Equality, Disequality, Inequality.
* **Boolean :** Equivalence, Implication, NOT, OR, XOR, AND.

#### Structure du domaine et des variables :

* **Domain :**
* *Domain with global order :* Integer, Value intervals.
* *Domain without global order :* Enumeration, Boolean.


* **Variable :** Appartient à un domaine (`Belongs to`), possède un état d'évaluation (`valuated: boolean`), est évaluée par une `Valuation` qui contient une `Value` et des attributs.
* **Constraint :** S'applique aux variables (`Applies to`), est composée d'opérateurs (`Operator`), et peut être réifiée (`Reified constraint`).

**Page :** 54

---

# Example of PLM as a constraint program

### Description des schémas (Pages 55, 56, 57) :

* **Problem space :** Modélisé par des variables $A$, $B$, $C$ reliées par des contraintes logiques/mathématiques (`constraint1`, `constraint2`, `constraint3`).
* **Context (Graphique de performance moteur) :** Courbes de couple (Torque - NM) et de puissance (Power - kW) en fonction du régime moteur (Speed - RPM de 1000 à 6000).
* **Solution space :** Composants physiques réels associés aux variables :
* $A \leftrightarrow$ Engine (Moteur)
* $B \leftrightarrow$ Body (Carrosserie)
* $C \leftrightarrow$ Transmission (Transmission)



#### Spécification formelle des contraintes (Page 57) :

* **Variables et domaines :**

$$\text{domain}([A, B], [0, 1])$$


$$\text{domain}([C], [1, 2])$$


* **Contraintes :**
* **Constraint 1 :** $B \le A$
* **Constraint 2 :** $\text{at\_least}([A, B], 1)$
* **Constraint 3 :** $A \le B + C \le A \times 2$



**Pages :** 55, 56, 57

---

# Example of PLM as a constraint program (GNU/Prolog format)

```prolog
[UNIX, Kernel, Scheduling, ExecutingInstructions, InterpretingInstructions,
 AccomplishingTheTransferOfData, AllocatingTheMachinesMemory, Shell, FileSystem,
 UserInterface, Graphical, Process] :: {0, 1}^12

[WidthResolution] :: {0, 800, 1024, 1366}
[HeightResolution] :: {0, 600, 768}
[Support_usb, Cdrom_atech, Pcmacia_support] :: {0, 1, 2}
[BoolSupport_usb, BoolCdrom_atech, BoolPcmacia_support] :: {0, 1}

UNIX #= 1
UNIX #= Kernel
Kernel #= AllocatingTheMachinesMemory
Kernel #= Scheduling
Scheduling #= Process
Kernel #= AccomplishingTheTransferOfData
Shell #= InterpretingInstructions
Kernel #= Shell
Support_usb #<=> BoolSupport_usb
Cdrom_atech #<=> BoolCdrom_atech
Pcmacia_support #<=> BoolPcmacia_support
UNIX #= FileSystem
UNIX #= UserInterface
UserInterface #= Graphical

fd_relation([[800,600], [1024,768], [1366,768]], [WidthResolution, HeightResolution])
Graphical = 1 #=> (WidthResolution #> 0 #/\ HeightResolution #> 0)
Graphical = 0 #=> (WidthResolution = 0 #/\ HeightResolution = 0)

```

* **Remarque d'usabilité :** "However, the constraint-based representation can be difficult to build (for certain people), understand (for certain people) and to use with stakeholders !"

**Page :** 58

---

# 1. Analysis

### B. Strategies to elicit the requirements of a PL

* a. Requirements-driven strategy
* b. Low-end vs. high-end product strategy (reference-product strategy)
* c. Multiviewpoint strategy

**Page :** 59

---

# Requirements-driven strategy

*(Illustration : Couverture du livre "Living Documentation" par Cyrille Martraire & réunion d'équipe)*

### Étapes de la stratégie basée sur les exigences :

1. **Start collecting and analysing the available documentation of the domain**
2. **Identify commonality (mandatory) (no conditions)** $\rightarrow$ mandatory requirements
3. **Identify variability (optionality) keywords** $\rightarrow$ optional requirements
4. **Identify keywords representing dependencies** $\rightarrow$ optional requirements + constraints
5. **Complete with the documentation about the implementation assets and write the requirements corresponding with a template**

**Page :** 60

---

# Example of available documentation

> "• UNIX has one KERNEL.
> Some of the mandatory functions of the KERNEL are:
> • ALLOCATING THE MACHINE'S MEMORY to each PROCESS
> • SCHEDULING the PROCESSES
> • ACCOMPLISHING THE TRANSFER OF DATA from one part of the machine to another
> UNIX can have several PROCESSES (or none) for each user. The collection of PROCESSES varies even when the UNIX product is full-configured. For the sake of presentation, this thesis will consider only five processes.
> UNIX offers a logical view of the FILE SYSTEM. A FILE SYSTEM is a logical method for organising and storing large amounts of information in a way that makes its management easy.
> The KERNEL is composed of static or dynamic software modules. If the kernel was compiled for a specific hardware platform and cannot be changed, it is called a static Kernel. If the Kernel has the ability to dynamically load modules so that it can 'adapt' to a platform, it is called a dynamic Kernel. For instance, the modules SUPPORT_USB, CDROM_ATECH, and PCMCIA_SUPPORT cannot be charged, can be charged in a static way or can be charged in a dynamic way.
> The SHELL is a command interpreter; it takes each command and passes it to the KERNEL to be acted upon.
> The GRAPHICAL interface is characterized by a WIDTH RESOLUTION and a HEIGHT RESOLUTION that can have the following couples of values [800,600], [1024,768] and [1366,768]."

**Page :** 61

---

# Domain Requirement Table Template (adapted from IEEE 830, 1998)

| Champ | Spécification / Description |
| --- | --- |
| **`<id>`** | Requirement descriptive name |
| **Version** | `<version number>` (version creation date) |
| **Description** | `<use a template to specify the domain requirement in semi-structured natural language, e.g., Mazo et al. 2020>` |
| **Function/module** | `<functionality or module to which the requirement belongs>` |
| **Type** | `<indicate here: FR, NFR, legal requirement, change requirement, technical requirement, etc.>` |
| **Variability** | `<specify if the requirement is optional or mandatory and the alternatives that should be supported by this requirement>` |
| **Priority** | `<Priority in line of product requirement the>` |
| **Delivery date** | `<indicate here the expected/needed delivery date>` |
| **Stability** | `<risk of requirement evolution>` |
| **Source** | `<role and name of contributors>` |

**Page :** 62

---

# Template to the requirements specification of systems and families of (self) adaptive systems (Mazo et al., 2020)

### Grammaire / Diagramme de flux du template d'exigences :

* **Conditions préalables (Optionnel) :**
* `[ IF <Condition event or> THEN ]` **OU**
* `[ WHILE / DURING <Activation state> ]` **OU**
* `[ IN CASE <Included feature> IS INCLUDED ]` **OU**
* `[ AFTER / BEFORE / AS SOON AS <Behavior> ]`


* **Cible du système :**
* `ALL SYSTEMS OF THE <Product line name>` **OU**
* `SOME SYSTEMS OF THE <Product line name>` **OU**
* `THOSE SYSTEMS OF THE <Product line name> <Restriction>` **OU**
* `THE <System name or part>`


* **Verbe modal / Priorité :**
* `SHALL` (Obligatoire) / `SHOULD` (Recommandé) / `COULD` (Optionnel)


* **Action :**
* `PROVIDE <Who?> WITH THE ABILITY TO <Process verb>` **OU**
* `BE ABLE TO <Process verb>` **OU**
* `<Process verb>`


* **Objet & Cible :**
* `[ FROM <System device external name or> TOWARDS <System device external name or> ]`
* `A/AN` / `THE` / `EACH` / `<x>` / `BETWEEN <A> AND <B>` / `ALL THE <Objects>`


* **Contraintes de bornes / Temps / Fréquence :**
* *Quantité :* `AS MANY/FEW <Object> AS POSSIBLE`
* *Événement :* `BEFORE/AFTER/DURING <Event>` / `AS EARLY/LATE AS POSSIBLE` / `UNTIL <Event>`
* *Temps :* `WITHIN <Time interval> <Time unit>`
* *Condition :* `IF AND ONLY IF <Condition>`
* *Fréquence/Quantité :* `AT LEAST <Quantity> <Frequency>` / `EVENTUALLY` / `AS CLOSE AS POSSIBLE TO <Quantity> <Frequency>`



**Page :** 63

---

# Requirement Specification Example

| Champ | Valeur spécifiée |
| --- | --- |
| **FR P8.R5** | Configure a text for comparison with another element |
| **Version** | 0.7 (01/01/2020) |
| **Description** | In case the action of comparing text is included, those systems of the automation framework product line that only include the option to enter text shall provide the tester with the ability to configure a text for comparison with another element. |
| **Function/module** | Requirements specification module |
| **Type** | FR (Functional Requirement) |
| **Variability** | Conditionally mandatory. |
| **Priority** | Essential requirement. |
| **Delivery date** | 01/05/2020 |
| **Stability** | High |
| **Source** | Project leader, Raúl Mazo |

**Page :** 64

---

# Terminology issue

* **Problématique soulevée :** "What if the document (stakeholder descriptions) doesn't use the << right >> keywords ?"

**Page :** 65

---

# And then, we design the domain requirements model...

### Schéma du modèle de caractéristiques pour UNIX :

* **Racine :** `UNIX`
* **Features principales :**
* `Kernel` (Obligatoire)
* `Shell` (Obligatoire)
* `FileSystem` (Obligatoire)
* `UserInterface` (Optionnelle) $\rightarrow$ `Graphical` (Obligatoire) avec attributs `WidthResolution`, `HeightResolution`.
* `Process` `[0..*]` (Optionnelle).


* **Sous-features du KERNEL :**
* `Scheduling` (Obligatoire)
* `ExecutingInstructions` (Obligatoire)
* `InterpretingInstructions` (Obligatoire, reliée à `Shell`)
* `AccomplishingTheTransferOfData` (Obligatoire)
* `AllocatingTheMachine'sMemory` (Obligatoire, reliée à `Process`)
* Groupe de cardinalité `<0..3>` pour : `Support_usb` (Optionnel), `Cdrom_atech` (Optionnel), `Pcmacia_support` (Optionnel).


* **Contrainte d'attribut :**

$$\text{Graphical} \rightarrow \text{relation}([\text{WidthResolution}, \text{HeightResolution}], \{[800, 600], [1024,768], [1366,768]\})$$



**Page :** 66

---

# Then, we design, bind and implement the domain reusable components...

### Description du schéma d'alignement Exigences / Architecture / Diagrammes UML :

* **Feature :** `Accomplishing The Transfer OfData`
* $\downarrow$ *Mappage vers l'architecture de composants*
* **Composant UML (`DataTransfer`) :** Contient l'interface `<<interface>> DataTransfer`, le composant simple `SimpleDataTransfer` et le composant composé `CompositeDataTransfer`.
* **Diagrammes MSC (Message Sequence Charts) :** `msc REQUEST`, `msc CLOSE`, `msc ACCEPT`, `msc REJECT`, `msc DATA`.
* **Automate à états (State Machine) :** États `Idle`, `REQUEST`, `Connecting`, `ACCEPT`, `REJECT`, `Connected`, `DATA`, `CLOSE`.

**Page :** 67

---

# Exercise: Appliance Store Product Line

### Exigences et contraintes fournies :

* **R1 :** SOME SYSTEMS OF THE appliance store PRODUCT LINE SHOULD PROVIDE the clients WITH THE ABILITY TO manage the products sold in the stores.
* **R2 :** SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY TO validate themselves in the corresponding system.
* **R3 :** ALL the SYSTEMS OF THE appliance store PRODUCT LINE SHALL PROVIDE the clients WITH THE ABILITY TO manage the payments of the products sold in the stores.
* **R4 :** SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY TO pay by card.
* **R5 :** SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY TO pay cash.
* **C1 :** The client should be validated into each store system before managing the products of the corresponding store.

**Page :** 68

---

# Solution to the exercise

### Description du modèle de variabilité de la solution :

* **Racine :** `ApplianceStore`
* **Features directes :**
* `ProductManagement` (Optionnelle)
* `Validation` (Optionnelle)
* `Payment` (Obligatoire / Mandatory)


* **Sous-features de Payment :**
* `CardPayment` (Optionnelle)
* `CashPayment` (Optionnelle)


* **Contrainte (`require`) :**
* `ProductManagement` $\xrightarrow{\text{require}}$ `Validation` (Traduite directement à partir de la contrainte C1).



**Page :** 69

---

# Low-end vs. high-end product strategy (or reference-product strategy)

*(Illustrations : Photos de voitures citadines rouges - Tata Nano, etc.)*

### Démarche méthodologique (Page 71) :

1. **Select a low-end and a high-end product :**
* Compare the properties (material, dimensions...), capacities (functions) and the qualities (performance, security...) of these products and complete these characteristics with all the possibilities in the middle.


2. **Specify the resulting variation points and the corresponding variants and define if they correspond to the scope of the product line :**
* All that is in the scope will be part of the requirements of the product line.


3. **Complete with the "convenient" characteristics according to the objectives, marketing strategy of the product line.**

**Pages :** 70, 71

---

# Low-end vs. high-end product strategy (Étapes détaillées)

### Processus itératif (Pages 72 à 76) :

1. **Select reference product (ex: RedHat) :**
* Create breakdown structure tree : `UNIX` $\rightarrow$ `Process`, `Shell`, `Kernel`, `FileSystem`, `UserInterface`, etc.


2. **Select 2nd product / variant (ex: SUSE) :**
* Identify & integrate variations (ex: ajout de `Support_usb` en option `<0..1>`).
* Identify & integrate constraints.


3. **Select 3rd product (ex: Ubuntu, Kubuntu, aLinux...) :**
* Repeat step 2 and so on and so forth (intégration de `Pcmacia_support`, contraintes graphiques, etc.).



### Problématique clé (Page 77) :

* **"Domain missed opportunities ?"**
* **"What is the influence of the choice of the first (/2nd / 3rd / etc) product ?"**

**Pages :** 72, 73, 74, 75, 76, 77

---

# Multi-viewpoints strategy

*(Illustrations : Image de jumelles & matrice de perspectives)*

### Étapes :

1. **Identify viewpoints**
2. **Specify viewpoints (with/without variability)**
3. **Identify dependencies**
4. **Integrate**

### Matrice des artefacts de travail (Work Products Grid) :

| Perspectives / Views | Functional View | Information View | Organizational View | Infrastructure View |
| --- | --- | --- | --- | --- |
| **Planner** | Work Product | Work Product | Work Product | Work Product |
| **Owner** | Work Product | Work Product | Work Product | Work Product |
| **Designer** | Work Product | Work Product | Work Product | Work Product |
| **Builder** | Work Product | Work Product | Work Product | Work Product |

**Page :** 79

---

# Producing an OVM from multiple viewpoints

### Description du schéma d'intégration de vues (Page 80) :

* **(a) Vue Feature Model :** `Sensor` avec cardinalité groupe $[1,4]$ ($\rightarrow$ `AutoTestSensor`, `SpeedSensor`, `PositionSensor`).
* **(b) Vue Cas d'Utilisation UML :** Acteur `Purchaser` interagissant avec `VehicleLocatorSystem`, étendu par `Sensor` (`AutoTestSensor`, `SpeedSensor`) et `Feedback` $[1,3]$ (`Audio`, `Vibration`).
* **(c) Modèle OVM résultant :**
* VP `Sensor` (avec variantes `SpeedSensor`, `PositionSensor`) $\rightarrow$ relié au VP `SensorTest` (variantes `ConsistencyCheck`, `ResponseTimeCheck`, `FunctionalityCheck`).



### Problèmes soulevés (Page 81) :

* **"Granularity & language problems !"**
* **"OVM (or your pivot language) is maybe not rich enough to allow representing individual cardinalities, attributes and other constraints !"**

**Pages :** 80, 81

---

# Integration using OVM as a pivot language

### Vue d'ensemble OVM multi-perspectives (Page 82) :

Illustration du regroupement global des vues (Customer visible, Context, Functions, Design Alternatives, Internal Behavior/Components) dans un seul pivot OVM.

**Page :** 82

---

# Integration of different views (Exemple Médical)

### Description du schéma d'intégration (Pages 83 & 84) :

* **Cas d'utilisation UML :** `Diagnostiqueur thrombose/hémophilie`, cas d'utilisation `Analyser le plasma` (`<<includes>> Définir méthodologie`, `Charger les produits`, `Mesurer le plasma`, `Identifier les tubes`, `Transférer résultats`, `Imprimer résultats`).
* **Arbre de variabilité associé :**
* `Diagnostiquer thrombose/ hémophilie` $\rightarrow$ `Spécifier le facteur défaillant`, `Analyser le plasma`.
* `Utiliser méthodologie` $\rightarrow$ `Paramétrable` vs `Figée` $[1,2]$.
* `Charger les produits` $\rightarrow$ `Continu`, `Urgent`, `Aléatoire`, `Tubes de la concurrence`.
* `Mesurer` $\rightarrow$ `Type mesure` (`Immuno.`, `Colori.`, `Chrono.` $[1,3]$).
* `Identifier les tubes` $\rightarrow$ `Automatique`, `Manuelle` $[1,2]$.


* **Contraintes :** `Tubes de la concurrence exclur Urgent`, `Automatique requiert Colori.`.

### Critiques sur la sémantique (Page 84) :

* **"Granularity & language problems !"**
* **"How this model mixes all kinds of concepts and variability constraints ?"**
* **"What is the semantic of the resulting model ?"**

**Pages :** 83, 84

---

# References and recommended readings

1. **Czarnecki, Krzysztof, Paul Grünbacher, Rick Rabiser, Klaus Schmid, and Andrzej Wąsowski.** "Cool features and tough decisions: a comparison of variability modeling approaches." In *Proceedings of the sixth international workshop on variability modeling of software-intensive systems*, pp. 173-182. ACM, 2012.
2. **Cordy, Maxime, Pierre-Yves Schobbens, Patrick Heymans, and Axel Legay.** "Beyond boolean product-line model checking: dealing with feature attributes and multi-features." In *Proceedings of the 2013 International Conference on Software Engineering*, pp. 472-481. IEEE Press, 2013.
3. **Dhungana, Deepak, Paul Grünbacher, and Rick Rabiser.** "The DOPLER meta-tool for decision-oriented variability modeling: a multiple case study." *Automated Software Engineering* 18, no. 1 (2011): 77-114.
4. **Dumitrescu Cosmin, Dauron Alain, Salinesi Camille, Mazo Raúl.** "La Réutilisation en Ingénierie de Systèmes à Base de Modèles: Processus et Activités IS pour l'Adoption d'une Approche Lignes de Produits." *Génie Logiciel* N° 105, pp. 52-59, Paris-France, Juin 2013.
5. **Nair, D.K.** *Variability-Modelling Practices in Industrial Software Product Lines: A Qualitative Study*. Master's thesis, University of Waterloo, 2013.
6. **Bühne, Stan, Kim Lauenroth, and Klaus Pohl.** "Why is it not sufficient to model requirements variability with feature models." In *Proceedings of Workshop: Automotive Requirements Engineering*, pp. 5-12, 2004.
7. **Mazo Raúl.** "Avantages et limites des modèles de caractéristiques dans la modélisation des exigences de variabilité." Journal *Génie Logiciel*, No. 111, Paris-France, pp. 42-48, Dec. 2014.
8. **Mazo Raúl, Salinesi Camille, Diaz Daniel, Djebbi Olfa, Lora-Michiels Alberto.** "Constraints: the Heart of Domain and Application Engineering in the Product Lines Engineering Strategy." *International Journal of Information System Modeling and Design* (IJISMD), Vol. 3, No. 2, pp. 33-68, April-June 2012.
9. **Dumitrescu Cosmin, Tessier Patrick, Salinesi Camille, Gérard Sebastien, Dauron Alain, Mazo Raúl.** "Capturing Variability in Model-based Systems Engineering Process." *Complex Systems Design & Management* (CSD&M) Conference, Springer Press, Paris-France, pp. 125-140, 2013.
10. **Birk, A., Heller, G., John, I., Schmid, K., von der Maßen, T. and Muller, K.** "Product line engineering, the state of the practice." *IEEE Software*, 20(6), pp. 52-60, 2003.
11. **Galster, M., Weyns, D., Tofan, D., Michalik, B. and Avgeriou, P.** "Variability in software systems-a systematic literature review." *IEEE Transactions on Software Engineering*, 40(3), pp. 282-306, 2014.
12. **Mazo Raúl.** *Guía para la adopción industrial de líneas de productos de software*. Editorial Eafit, ISBN 978-958-720-506-0, Medellín-Colombia, 2018.

**Page :** 85