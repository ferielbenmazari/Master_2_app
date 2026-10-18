# Chapitre 10 : Domain Requirements Engineering (Ingénierie des Exigences de Domaine)

**Auteurs :** Stan Bühne, Klaus Pohl

**Source :** Chapitre 10 du livre *Software Product Line Engineering: Foundations, Principles and Techniques*

---

## Sommaire et Objectifs du Chapitre

Dans ce chapitre, vous apprendrez :

* Les défis de l'ingénierie des exigences de domaine (*Domain Requirements Engineering*).
* Les interrelations entre le sous-processus d'ingénierie des exigences de domaine et les sous-processus de gestion de produit (*Product Management*), de conception de domaine (*Domain Design*) et d'ingénierie des exigences d'application (*Application Requirements Engineering*).
* Comment identifier les exigences communes et variables d'une ligne de produits logiciels.
* Comment documenter les communalités et la variabilité identifiées dans les différents artefacts d'exigences à l'aide du modèle de variabilité orthogonale (*Orthogonal Variability Model - OVM*).
* De plus, un exemple complet illustre la définition de la variabilité dans les artefacts d'exigences pour une ligne de produits logiciels (*Software Product Line - SPL*).

---

## 10.1 Introduction

> **Notes de marge :**
> * Objectifs de l'ingénierie des exigences de domaine
> * Sous-processus associés
> 
> 

Les objectifs principaux de l'ingénierie des exigences de domaine sont le développement d'exigences de domaine communes et variables, ainsi que leur documentation précise.

L'ingénierie des exigences de domaine est un processus continu visant à définir de manière proactive les exigences pour toutes les applications prévisibles devant être développées au sein de la ligne de produits logiciels. Un enjeu particulier pour l'ingénierie des exigences de domaine est d'identifier et de documenter explicitement la variabilité externe. Les sous-processus et artefacts étroitement liés au sous-processus d'ingénierie des exigences de domaine sont mis en évidence dans la **Figure 10-1**.

---

### **Schéma / Figure 10-1 : Sous-processus et artefacts liés à l'ingénierie des exigences de domaine**

```
+---------------------------------------------------------------------------------------------------+
| DOMAIN ENGINEERING                                                                                |
|                                                                                                   |
|  [Product Management] <------------------------------------------------------------------------+  |
|          |                                                                                     |  |
|          v                                                                                     |  |
|  [Domain Requirements] ---> [Domain Design] -------> [Domain Realisation] ---> [Domain Testing]-+  |
|        Engineering               |                           |                      |             |
|             |                    |                           |                      |             |
|             v                    v                           v                      v             |
|  +---------------------------------------------------------------------------------------------+  |
|  | DOMAIN ARTEFACTS INCL. VARIABILITY MODEL                                                    |  |
|  |   [Requirements]   --->  [Architecture]   --->   [Components]    --->     [Tests]           |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+
              |                        |                      |                       |              
              v                        v                      v                       v              
+---------------------------------------------------------------------------------------------------+
| APPLICATION ENGINEERING                                                                           |
|                                                                                                   |
|  [Application Requirements] -> [Application Design] -> [Application Realisation] -> [App. Testing]|
|        Engineering                   |                          |                      |          |
|             |                        |                          |                      |          |
|             v                        v                          v                      v          |
|  +---------------------------------------------------------------------------------------------+  |
|  | APPLICATION N - ARTEFACTS INCL. VARIABILITY MODEL                                           |  |
|  | APPLICATION 1 - ARTEFACTS INCL. VARIABILITY MODEL                                           |  |
|  |   [Requirements]   --->  [Architecture]   --->   [Components]    --->     [Tests]           |  |
|  +---------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------+

```

#### **Description et Analyse du Schéma (Fig. 10-1) :**

Le schéma est structuré en deux grandes strates horizontales :

1. **Niveau Ingénierie de Domaine (*Domain Engineering*) - Partie supérieure :**
* **Flux de sous-processus :** Il débute par la *Gestion de Produit (Product Management)*, qui alimente l'*Ingénierie des Exigences de Domaine (Domain Requirements Engineering)*. Ce dernier transmet ses résultats à la *Conception de Domaine (Domain Design)*, suivie de la *Réalisation de Domaine (Domain Realisation)*, puis des *Tests de Domaine (Domain Testing)*. Une boucle de rétroaction remonte des tests de domaine vers la gestion de produit.
* **Artefacts de Domaine :** Chaque sous-processus produit des artefacts spécifiques regroupés sous le modèle de variabilité (*Domain Artefacts incl. Variability Model*) : les exigences (*Requirements*), l'architecture (*Architecture*), les composants (*Components*) et les tests (*Tests*).


2. **Niveau Ingénierie d'Application (*Application Engineering*) - Partie inférieure :**
* **Périmètre de Réutilisation :** Des flèches verticales descendantes larges relient la couche d'artefacts du domaine aux sous-processus d'ingénierie d'application.
* **Sous-processus applicatifs :** L'*Ingénierie des Exigences d'Application*, la *Conception d'Application*, la *Réalisation d'Application* et les *Tests d'Application*.
* **Artefacts applicatifs :** Ces étapes génèrent des jeux d'artefacts spécifiques pour chaque application individuelle (de l'Application 1 à l'Application N), incluant leurs propres exigences, architecture, composants et tests dérivés du domaine.



---

L'ingénierie des exigences de domaine doit respecter la spécification des fonctionnalités majeures de la ligne de produits fournie par la gestion de produit. Sur la base de ces fonctionnalités, elle crée des exigences détaillées, communes et variables, suffisantes pour guider la conception du domaine (et par conséquent la réalisation ainsi que les tests). De plus, l'ingénierie des exigences de domaine fournit les données d'entrée pour le sous-processus d'ingénierie des exigences d'application, qui est chargé de créer les artefacts d'exigences spécifiques à chaque application.

---

### **Schéma / Figure 10-2 : Flux d'informations entre l'ingénierie des exigences de domaine et les autres sous-processus**

> **Notes de marge :**
> * Flux d'artefacts
> * Feuille de route produit, produits existants
> * Fonctionnalités additionnelles/modifiées
> * Exigences et variabilité
> 
> 

```
                           +------------------------------------+
                           |         Product Management         |
                           +------------------------------------+
                               ^                            |
   (2) Suggestions de          |                            | (1) Feuille de route produit
   fonctionnalités nouvelles/  |                            |     Liste des artefacts
   modifiées                   |                            v     existants
                           +------------------------------------+
                           |    Domain Requirements Engineering |
                           +------------------------------------+
                               / |                        ^ \
                              /  |                        |  \
   (3) Modèle de variabilité /   | (5) Identique            |   \ (4) Demandes d'exigences
   & Artefacts d'exigences  /    |     à (3)                | (6)|     détaillées et révisées
   communes et variables   v     v                          |    v
                   +---------------+              +--------------------+
                   | Domain Design |              |    Application     |
                   +---------------+              |    Requirements    |
                                                  |    Engineering     |
                                                  +--------------------+
                                                  * Demandes d'exigences additionnelles/modifiées
                                                  * Artefacts d'exigences à inclure dans le domaine

```

#### **Description et Analyse du Schéma (Fig. 10-2) :**

Le diagramme détaille les flux d'informations numérotés de (1) à (6) centrés sur l'Ingénierie des Exigences de Domaine :

1. **Product Management -> Domain Requirements Engineering (1) :** Transmission de la *Feuille de route produit (Product roadmap)* et de la *Liste des artefacts existants*.
2. **Domain Requirements Engineering -> Product Management (2) :** Proposition de *Suggestions pour des fonctionnalités additionnelles ou modifiées*.
3. **Domain Requirements Engineering -> Domain Design (3) :** Envoi du *Modèle de variabilité* et des *Artefacts d'exigences communes et variables*.
4. **Domain Design -> Domain Requirements Engineering (4) :** Remontée des *Demandes d'exigences détaillées ou révisées*.
5. **Domain Requirements Engineering -> Application Requirements Engineering (5) :** Transmission des mêmes éléments qu'en (3) (*Modèle de variabilité* et *artefacts d'exigences communes et variables*).
6. **Application Requirements Engineering -> Domain Requirements Engineering (6) :** Remontée des *Demandes d'exigences additionnelles ou modifiées* et des *Artefacts d'exigences applicatives à intégrer dans les artefacts de domaine*.

---

### 10.1.1 Interrelation avec la Gestion de Produit (*Product Management*)

La donnée d'entrée clé pour le processus d'ingénierie des exigences de domaine est la feuille de route produit (*product roadmap*) issue de la gestion de produit (flèche **1** sur la Fig. 10-2). Cette feuille de route comprend un ensemble initial d'applications prévues pour la ligne de produits, ainsi que leurs communalités et variabilités envisagées. Elle définit en outre la ligne de produits par rapport aux applications projetées et établit un calendrier de commercialisation. De plus, la gestion de produit identifie les artefacts existants développés lors de projets antérieurs qui doivent être pris en compte lors de la définition des exigences de domaine.

Le sous-processus d'ingénierie des exigences de domaine fournit à la gestion de produit des suggestions de fonctionnalités additionnelles, modifiées ou affinées (flèche **2** sur la Fig. 10-2), basées sur l'analyse des produits existants, les besoins des parties prenantes, les lois, les contraintes et d'autres sources d'exigences.

### 10.1.2 Interrelation avec la Conception de Domaine (*Domain Design*)

Les résultats de l'ingénierie des exigences de domaine fournis à la conception de domaine englobent toutes les exigences de domaine définies (communes et variables) ainsi que la définition de la variabilité dans le modèle de variabilité orthogonale (*Orthogonal Variability Model - OVM*) (flèche **3** sur la Fig. 10-2). Le modèle de variabilité définit au minimum la variabilité externe, mais peut également spécifier une partie de la variabilité interne de la ligne de produits.

> **Notes de marge :**
> * Processus hautement interactif
> 
> 

L'interrelation entre l'ingénierie des exigences de domaine et la conception de domaine peut être caractérisée par le modèle *Twin Peaks* de [Nuseibeh 2001] présenté dans la **Figure 10-3**.

---

### **Schéma / Figure 10-3 : Le modèle Twin Peaks décrivant l'interrelation entre exigences et architecture (adapté de [Nuseibeh 2001])**

```
 Grossier / Élevé ^  PERSPECTIVE PROBLÈME                PERSPECTIVE SOLUTION
                  |       / \                                   / \
                  |      /   \                                 /   \
  Niveau          |     /     \  ============================>/     \
  de Détail       |    / Exigences \ <=======================/ Architecture \
                  |   /             \                       /               \
                  |  /               \ ===================>/                 \
                  v /                 \                   /                   \
        Détaillé   +-------------------+                 +---------------------+
                     Indépendant           Dépendance de         Dépendant
                                           Réalisation ------>

```

#### **Description et Analyse du Schéma (Fig. 10-3) :**

* **Axes du modèle :**
* **Axe vertical (Niveau de détail) :** Va du niveau *Grossier/Général (Coarse)* au niveau *Détaillé (Detailed)*.
* **Axe horizontal (Dépendance de réalisation) :** Va d'une position *Indépendante (Problem View / Requirements)* à une position *Dépendante (Solution View / Architecture)*.


* **Composants visuels :** Deux pyramides côte à côte représentant respectivement la *Perspective Problème (Requirements)* et la *Perspective Solution (Architecture)*.
* **Dynamique en spirale :** Une flèche en spirale serpente en alternance entre la pyramide des exigences et celle de l'architecture tout en descendant progressivement. Cela illustre que la définition des exigences et la conception de l'architecture s'influencent mutuellement à des niveaux de détail croissants : l'architecture de référence prend forme progressivement tandis que le besoin d'exigences plus détaillées émerge. Si certaines exigences s'avèrent trop ambitieuses du point de vue de la conception, cela génère des demandes de modification (flèche **4** sur la Fig. 10-2).

---

### 10.1.3 Interrelation avec l'Ingénierie des Exigences d'Application (*Application Requirements Engineering*)

> **Notes de marge :**
> * Exigences réutilisables
> * Exigences de domaine futures
> 
> 

L'ingénierie des exigences de domaine fournit les artefacts d'exigences communes et variables prédéfinis ainsi que le modèle de variabilité orthogonale au sous-processus d'ingénierie des exigences d'application (flèche **5** sur la Fig. 10-2). Par conséquent, le modèle de variabilité orthogonale facilite la communication de la variabilité de la ligne de produits et prend en charge la réutilisation des artefacts d'exigences de domaine.

L'ingénierie des exigences d'application fournit un retour d'information à l'ingénierie des exigences de domaine sous forme de demandes d'exigences additionnelles ou modifiées (premier point de la flèche **6** sur la Fig. 10-2) ainsi que d'artefacts d'exigences applicatives pouvant être incorporés dans les artefacts du domaine (second point de la flèche **6** sur la Fig. 10-2). Ce retour d'information peut conduire à une adaptation des artefacts de domaine et donc à l'évolution de la ligne de produits logiciels. La décision d'intégrer ou non ce retour d'information appartient aux gestionnaires de produits et aux autres parties prenantes. L'intégration d'artefacts applicatifs spécifiques dans le domaine exige que les ingénieurs d'exigences et architectes de domaine réingénient ces artefacts pour les rendre réutilisables.

---

## 10.2 Activités Traditionnelles d'Ingénierie des Exigences

> **Notes de marge :**
> * Besoins utilisateurs, exigences, contraintes
> * Spécification des exigences
> * Accord sur les exigences
> * Assurance qualité
> * Maintenance continue
> 
> 

Avant de détailler l'ingénierie des exigences pour les lignes de produits, voici un aperçu des cinq activités majeures de l'ingénierie des exigences pour un système unique (*single-system engineering*) [Pohl 1996; Pohl 1997] :

1. **Élicitation (*Elicitation*) :** L'objectif est de comprendre les besoins et contraintes des utilisateurs pour le système. Le processus d'élicitation découvre les besoins, exigences et contraintes à partir de différentes sources (parties prenantes, experts métiers, documentation utilisateur, législation, normes). L'élicitation implique également le développement d'exigences nouvelles et innovantes [Carroll 1995; Gougen et Linde 1993; Hay et v. Halle 2002; Pohl 1997; Weinberg 1988].
2. **Documentation :** L'objectif est l'enregistrement bien structuré des exigences élicitées avec toutes les informations nécessaires. La spécification finale constitue le socle des phases de développement ultérieures ou des modifications futures [Alexander et Stevens 2003; Kovitz 1999]. Il est souvent nécessaire d'utiliser différents formats de représentation selon les parties prenantes [Pohl 1994].
3. **Négociation (*Negotiation*) :** L'objectif est d'obtenir un consensus suffisant entre les différentes parties prenantes concernant les exigences élicitées et/ou documentées. Une spécification bénéficiant d'un accord solide garantit la stabilité du projet [Wiegers 1999].
4. **Validation et Vérification :** L'objectif est de prouver que les exigences du système sont claires, complètes, correctes et compréhensibles. La *validation* s'assure que ce sont les *bonnes* exigences qui sont documentées. La *vérification* s'assure que les exigences documentées sont *correctement définies* [Thayer et Dorfman 1997; Sommerville et Sawyer 1997].
5. **Gestion (*Management*) :** L'objectif est de maintenir les exigences de manière continue tout au long du cycle de vie du développement et du système, garantissant une spécification à jour à tout moment. Cela repose sur la traçabilité entre exigences, depuis leurs sources jusqu'à leur réalisation [Thayer et Dorfman 1997; Hull et al. 2002].

> **Notes de marge :**
> * Compréhension des exigences système
> * Représentation des exigences
> * Accord sur les exigences
> 
> 

Les objectifs du processus d'ingénierie des exigences se caractérisent selon les trois dimensions de [Pohl 1994] :

* **Spécification :** Caractérise le niveau de compréhension atteint sur les exigences du système (passe d'une compréhension faible initiale à une compréhension aussi complète que possible).
* **Représentation :** Traite des formats utilisés pour documenter les exigences (passe de représentations informelles comme des croquis ou de la langue naturelle à une spécification précise utilisant des langages de modélisation formels).
* **Accord :** Traite de la réconciliation des opinions conflictuelles (intègre progressivement les points de vue divergents des parties prenantes jusqu'à l'obtention d'un consensus).

---

## 10.3 Défis de l'Ingénierie des Exigences de Domaine

L'ingénierie des exigences de domaine doit prendre en compte la variabilité de la ligne de produits, ce qui implique des tâches supplémentaires pour l'ingénieur d'exigences.

> **Notes de marge :**
> * Définition précise de la variabilité
> 
> 

### 10.3.1 Activités Spécifiques

La documentation explicite des exigences communes et variables appropriées est essentielle pour permettre la réutilisation planifiée des exigences lors de l'ingénierie d'application. La variabilité requise doit être documentée dans le modèle de variabilité orthogonale (*OVM*).

> **Notes de marge :**
> * Analyse de communalité
> * Analyse de variabilité
> * Modélisation de la variabilité
> * Analyse de communalité et de variabilité
> 
> 

Trois activités clés sont développées :

* **Analyse de communalité (*Commonality analysis*) :** Identifier les exigences communes à toutes les applications de la ligne de produits logiciels (Section 10.6).
* **Analyse de variabilité (*Variability analysis*) :** Identifier les exigences qui diffèrent entre les applications et déterminer précisément ces différences (Section 10.7).
* **Modélisation de la variabilité (*Variability modelling*) :** Modéliser les points de variation, les variants et leurs relations (Section 10.8).

Ces trois activités sont étroitement liées [Weiss et Lai 1999].

> **Notes de marge :**
> * Artefacts d'exigences cohérents
> 
> 

### 10.3.2 Variabilité dans les Différentes Vues

En plus de l'identification et de la modélisation de la variabilité, l'ingénierie des exigences de domaine doit établir la cohérence entre les différents artefacts d'exigences et leurs documentations (objectifs, fonctionnalités, scénarios, cas d'utilisation, modèles de données, modèles comportementaux, modèles fonctionnels et exigences textuelles).

---

## 10.4 Vue d'ensemble des Étapes Majeures

> **Notes de marge :**
> * Exigences communes
> * Exigences variables
> * Points de variation et variants
> * Analyse de communalité d'abord
> 
> 

Les artefacts d'exigences créés en ingénierie de domaine englobent des parties communes et variables.

### 10.4.1 Définition des Exigences Communes

Avant de définir une exigence comme commune, une analyse de communalité doit être effectuée (Section 10.6). La définition des exigences communes comporte deux étapes de base :

1. Identifier un ensemble d'exigences communes.
2. Documenter les exigences communes en détail dans un format de représentation adapté à la vue considérée (fonctionnalités, cas d'utilisation, etc.).

> **Notes de marge :**
> * Étapes de base
> * Itération des étapes
> * Haute qualité
> * Évolution de la communalité et de la variabilité au fil du temps
> 
> 

Ces étapes sont exécutées de manière itérative. Deux points importants doivent être pris en compte :

* **Qualité élevée :** Les exigences communes constituent le socle de toutes les applications de la ligne de produits. Des revues régulières garantissent leur cohérence et leur compréhension.
* **Évolution :** Une exigence commune peut devenir variable au fil du temps en raison de l'évolution de la ligne de produits. Documenter les justifications (*rationales*) et hypothèses permet d'éviter des transformations injustifiées vers de la variabilité inutile.

---

### 10.4.2 Définition des Exigences Variables

> **Notes de marge :**
> * Modélisation de la variabilité
> * Étapes de base
> 
> 

La définition des exigences variables implique la modélisation de la variabilité dans le modèle de variabilité et la documentation détaillée des exigences variables.

---

### **Schéma / Figure 10-4 : Étapes pour la modélisation des exigences variables**

```
 (1) Identifier un ensemble initial d'exigences variables
                      |
                      +------------------------------------------+
                      v                                          v
 (2) Développer le modèle de variabilité                 (3) Documenter en détail
     orthogonale (OVM)                                       les exigences identifiées
     +-----------------------------------+                   +-----------------------------------+
     | Point de Variation 1              |                   | Artefact d'Exigences 1            |
     |   |- Variant 1.1                  |                   |   |- Partie Invariante (Commune)  |
     |   |- Variant 1.2                  |                   |   |- Partie Variable (V1.1, V1.2)  |
     | Point de Variation 2              |                   | Artefact d'Exigences 2            |
     |   |- Variant 2.1                  |                   |   |- Partie Invariante (Commune)  |
     |   |- Variant 2.2                  |                   |   |- Partie Variable (V2.1..V2.3) |
     |   |- Variant 2.3                  |                   +-----------------------------------+
     +-----------------------------------+                                 |
                      |                                                    |
                      +---------------------> (4) <------------------------+
                                 Associer les exigences aux
                                   variants dans l'OVM

```

#### **Description et Analyse du Schéma (Fig. 10-4) :**

Le schéma décompose le processus de modélisation de la variabilité en 4 étapes interconnectées :

1. **Étape (1) - Identification :** Identifier un ensemble initial d'exigences variables.
2. **Étape (2) - Développer l'OVM :** Structurer les points de variation (*Variation Points*) et leurs variants associés dans le modèle OVM.
3. **Étape (3) - Documenter en détail :** Rédiger les artefacts d'exigences (cas d'utilisation, scénarios, classes) en séparant la partie invariante (commune) de la partie variable.
4. **Étape (4) - Associer :** Relier chaque élément variable de l'artefact d'exigences au variant correspondant dans l'OVM. Les étapes (3) et (4) sont répétées pour toutes les vues requises.

---

## 10.5 Sources d'Exigences

> **Notes de marge :**
> * Parties prenantes, produits existants, etc.
> * Utilisation des applications existantes
> 
> 

L'ingénierie des exigences de domaine intègre différentes sources (parties prenantes, produits existants, rapports de défaillance, produits concurrents) pour affiner les fonctionnalités définies par la gestion de produit. Le développement d'une ligne de produits part rarement de zéro ; l'analyse des applications existantes (propres ou concurrentes) constitue une source primaire indispensable.

---

## 10.6 Analyse de Communalité

> **Notes de marge :**
> * Le plus de communalité possible
> * Exploration des applications
> * Contenu de la matrice
> 
> 

L'objectif est de maximiser la communalité afin de réduire la variabilité au strict minimum requis [Ardis et Weiss 1997]. L'identification des exigences communes débute par l'exploration simultanée de toutes les applications prévues. Un outil simple pour réaliser cette analyse est la **matrice applications-exigences**.

---

### 10.6.1 Matrice Applications-Exigences

La matrice applications-exigences donne une première approximation de la communalité et de la variabilité.

#### **Tableau 10-1 : Structure d'une matrice applications-exigences pour quatre applications**

| Exigences | App. 1 | App. 2 | App. 3 | App. 4 |
| --- | --- | --- | --- | --- |
| **R1** | obligatoire | obligatoire | obligatoire | obligatoire |
| **R2** |  |  | obligatoire | obligatoire |
| **R3** |  | obligatoire |  |  |

* **Analyse du Tableau 10-1 :** L'exigence `R1` est obligatoire (*mandatory*) pour l'ensemble des quatre applications (`App. 1` à `App. 4`) : elle est donc candidate pour devenir une exigence commune de la ligne de produits. L'exigence `R2` n'est requise que pour `App. 3` et `App. 4`, et `R3` uniquement pour `App. 2` : elles ne sont donc pas retenues comme exigences communes.

---

### 10.6.2 Analyse Basée sur la Priorité

> **Notes de marge :**
> * Exigences priorisées
> * Exigences de base
> * Exigences à haute priorité
> * Communalité stratégique
> 
> 

Une analyse plus fine s'appuie sur la classification de Kano [Kano et al. 1996] :

* **Exigences de base (*Basic requirements*) :** Exigences essentielles que chaque application du domaine doit remplir (**Exemple 10-1**).
* **Exigences à haute priorité (*High-priority requirements*) :** Exigences ayant une priorité élevée pour un grand groupe de clients et qui ne sont rejetées par aucun autre (**Exemple 10-2**).
* **Communalités stratégiques (*Strategic commonalities*) :** Besoins futurs prévisibles sur le cycle de vie de la ligne de produits, implémentés directement comme communalités pour se démarquer de la concurrence (**Exemple 10-3**).

> **Exemple 10-1 : Le contrôle du chauffage comme exigence de base**
> La classification Kano révèle que l'exigence *"Le système d'automatisation domestique doit être capable de contrôler le chauffage de la maison"* est une exigence de base. Elle est donc une bonne candidate pour être incluse dans l'ensemble des exigences communes.

> **Exemple 10-2 : Le contrôle d'accès comme exigence à haute priorité**
> L'exigence *"Le système d'automatisation domestique doit être capable de contrôler l'accès à la maison"* est évaluée avec une priorité élevée par la plupart des clients, sans évaluation négative par les autres. Elle est donc acceptée comme exigence commune.

> **Exemple 10-3 : La communication sans fil comme communalité stratégique**
> L'exigence *"Le système d'automatisation domestique doit communiquer via un réseau sans fil"* deviendra un besoin fondamental dans un avenir proche. Elle est donc définie comme une communalité de la ligne de produits.

---

### 10.6.3 Analyse Basée sur des Listes de Contrôle

> **Notes de marge :**
> * Catégories d'exigences
> 
> 

Outre les besoins de base, priorités élevées et communalités stratégiques, une liste de contrôle d'exigences communes examine :

* Les exigences imposées par les lois et normes nationales ou internationales.
* Les exigences prescrites par les normes de l'organisation.
* Les exigences qui ne diffèrent que marginalement.
* Les exigences qui ne sont pas en conflit les unes avec les autres.
* Les exigences nécessaires au support technique (gestion des erreurs, maintenance, communication).

---

## 10.7 Analyse de Variabilité

> **Notes de marge :**
> * Définir les points de variation et les variants
> 
> 

L'objectif de l'analyse de variabilité est d'identifier les exigences variables et de définir les points de variation (*variation points*) et variants associés. Des exigences divergentes entre applications indiquent la nécessité d'introduire un point de variation, sous réserve d'une évaluation attentive de son impact sur l'architecture de référence.

> **Exemple 10-4 : Variabilité dans le système de sécurité domestique due à des besoins clients différents**
> Les exigences différentes des clients concernant le système de sécurité entraînent l'introduction d'un point de variation *« sécurité domestique par »* avec les variants *« détection de mouvement »* et *« surveillance par caméra »*. Chaque application peut ainsi être personnalisée.

---

### 10.7.1 Analyse de Variabilité avec la Matrice Applications-Exigences

> **Notes de marge :**
> * Examen des exigences de haut niveau
> * Ensemble initial d'exigences variables
> 
> 

Les exigences qui ne sont obligatoires que pour une seule application ou un sous-ensemble restreint d'applications constituent des candidates directes au statut d'exigences variables.

---

### 10.7.2 Analyse de Variabilité Basée sur la Priorité

> **Notes de marge :**
> * Priorités différentes
> * Priorités conflictuelles
> * Exigences à haute priorité conflictuelles
> 
> 

* **Priorités divergentes :** Exigences ayant une priorité forte pour certains clients et faible pour d'autres (**Exemple 10-5**).
* **Évaluations contradictoires :** Exigences évaluées positivement par un groupe et négativement par un autre (**Exemple 10-6**).
* **Exigences à haute priorité en conflit :** Conflits sémantiques ou incompatibilités techniques entre exigences fortement souhaitées.

> **Exemple 10-5 : Variabilité due à des priorisations différentes**
> Une étude montre que l'exigence *"Le système doit informer automatiquement la police en cas d'intrusion"* est jugée très importante par un groupe de clients, mais de moindre importance pour un autre. L'ingénieur en exigences la définit donc comme une exigence variable.

> **Exemple 10-6 : Conflits dans les exigences de sécurité domestique**
> L'exigence *"Le système de sécurité doit être équipé d'un système de stockage vidéo enregistrant toutes les données de surveillance"* est appréciée par un groupe de clients. Cependant, l'exigence *"Le système ne doit pas enregistrer de données personnelles"* est également prioritaire pour de nombreux clients. L'ingénieur décide donc de définir le stockage vidéo comme une exigence variable.

---

### 10.7.3 Analyse de Variabilité Basée sur des Listes de Contrôle

> **Notes de marge :**
> * Candidates pour la variabilité des exigences
> 
> 

Chaque différence de structure, de fonctionnalité, de comportement ou de qualité est candidate à la variabilité. Une liste de contrôle vérifie :

* Les différences de fonctionnalités.
* Les différents attributs de qualité (sûreté, sécurité, fiabilité).
* Les différentes exigences d'interface avec des systèmes existants (*legacy systems*).
* Les différentes exigences d'interface utilisateur (UI).
* Les différentes contraintes de conception (bases de données, réseaux, composants COTS, systèmes d'exploitation).

---

## 10.8 Définition de la Variabilité des Exigences

> **Notes de marge :**
> * Modèle de variabilité orthogonale
> * Définition de la variabilité
> * Sujets de variabilité associés
> 
> 

Pour définir la variabilité des exigences de domaine, l'ingénieur doit :

1. Définir soigneusement le bon jeu de points de variation et de variants.
2. Déterminer leurs dépendances.
3. Définir avec les gestionnaires de produits la part de variabilité offerte aux clients en tant que variabilité externe.

---

### 10.8.1 Points de Variation et Variants

L'identification du sujet de variabilité (*variability subject*) commun permet de définir le point de variation approprié.

> **Exemple 10-7 : Recherche de variants corrélés**
> L'application `App. 1` possède l'exigence *"La porte d'entrée doit être sécurisée par un digicode"*, tandis que `App. 2` exige *"Le système doit fournir une autorisation par empreinte digitale"*. Ces exigences se rapportent au même sujet de variabilité : le mécanisme d'identification. On définit donc le point de variation *« mécanisme d'identification du verrou de porte »* avec les deux variants associés.

> **Notes de marge :**
> * Variants additionnels
> 
> 

Des variants additionnels (facteurs de satisfaction ou *"delighters"*) peuvent être ajoutés pour se différencier de la concurrence ou augmenter la satisfaction client.

---

### 10.8.2 Dépendances de Variabilité

> **Notes de marge :**
> * Choix obligatoire, optionnel et alternatif
> * Implication des architectes logiciels dans la définition de la variabilité
> 
> 

Les dépendances de variabilité (obligatoire, optionnel, choix alternatif `[min..max]`) fixent les combinaisons autorisées. Les architectes logiciels doivent obligatoirement être impliqués lors de cette étape en raison de l'impact majeur de la variabilité sur l'architecture de référence.

> **Exemple 10-8 : Identification de la dépendance de variabilité appropriée**
> Une brochure produit indique que le système est toujours livré avec la fonctionnalité *"alarme acoustique"*. Le client peut ajouter en option la fonctionnalité *"information police"*. Le modèle de variabilité contient donc le point de variation *"activation de l'alarme"* avec le variant obligatoire *"alarme acoustique"* et le variant optionnel *"information police"*.

---

### 10.8.3 Dépendances de Contrainte

> **Notes de marge :**
> * Restriction des combinaisons admissibles
> 
> 

Les dépendances de contrainte (`requires` et `excludes`) restreignent ou imposent des liaisons de variants entre eux, ou entre variants et points de variation lors de l'ingénierie d'application.

---

### 10.8.4 Adaptation de la Variabilité selon les Décisions de la Gestion de Produit

> **Notes de marge :**
> * Décisions finales par la gestion de produit
> * Adaptation des artefacts d'exigences
> 
> 

La gestion de produit prend les décisions finales concernant :

* La validation, l'ajout ou la suppression de points de variation ou de variants.
* La correction ou la modification des contraintes et dépendances.
* La classification des points de variation en variabilité externe ou interne.

---

## 10.9 Exemple

> **Notes de marge :**
> * Trois applications exemples
> 
> 

Cette section illustre l'identification et la documentation d'exigences variables à travers trois applications prévisibles d'un système de sécurité domestique.

---

### **Spécification d'Exigences - Application 1 (Figure 10-5)**

> **Notes de marge :**
> * Première application exemple
> 
> 

#### **Goals (Objectifs)**

* `G1`: Protection against burglary. (Protection contre le cambriolage.)
* `G2`: Catching the thief. (Capture du voleur.)
* `G...`: ...
* `G5`: Video surveillance of the house. (Vidéosurveillance de la maison.)

#### **Desired Features (Fonctionnalités souhaitées)**

* `F1`: Video surveillance. (Vidéosurveillance.)
* `Fn`: ...
* `F2.2`: Inform police via phone line. (Informer la police par ligne téléphonique.)

#### **Requirements (Exigences)**

* `R1`: The time between the detection of an open window and the recording of the video surveillance shall be less than 2 sec. (Le délai entre la détection d'une fenêtre ouverte et l'enregistrement vidéo doit être inférieur à 2 s.)
* `R2`: The alarm signal shall be deactivated by the police, by the owner, or automatically after 20 minutes. (Le signal d'alarme doit être désactivé par la police, par le propriétaire ou automatiquement après 20 min.)
* `R2.1`: The alarm signal shall start immediately after the detection of the open window or door. (Le signal d'alarme doit déclencher immédiatement après la détection d'une porte ou fenêtre ouverte.)
* `R11`: The camera shall have enough storage for 5 minutes' video stream to be stored as alarm buffer. (La caméra doit disposer de suffisamment de stockage pour tamponner 5 min de flux vidéo.)
* `R11.1`: The recording is only initiated if motion is detected. (L'enregistrement n'est initié que si un mouvement est détecté.)
* `R28`: The system shall be able to generate user-specific reports that document the system events. (Le système doit pouvoir générer des rapports d'événements spécifiques à l'utilisateur.)
* `R77`: The stored video streams of the video surveillance system shall be safe against misuse and tampering. (Les flux vidéo stockés doivent être protégés contre les abus et altérations.)
* `R78`: The time period between motion detection and start of recording shall be less than 0.5 seconds. (Le délai entre la détection de mouvement et le début d'enregistrement doit être inférieur à 0,5 s.)
* `R78.1`: The password shall consist of at least 10 characters and include special characters (such as numbers). The password shall be changed every 3 months, and an old password cannot be used again. (Le mot de passe doit comporter au moins 10 caractères incluant des caractères spéciaux. Il doit être changé tous les 3 mois sans réutilisation.)

---

### **Spécification d'Exigences - Application 2 (Figure 10-6)**

> **Notes de marge :**
> * Deuxième application exemple
> 
> 

#### **Goals (Objectifs)**

* `G1`: Protection against burglary in the office. (Protection contre le cambriolage dans le bureau.)
* `G...`: ...
* `G4`: Meet clauses of the insurance agency. (Respecter les clauses de la compagnie d'assurance.)
* `G5`: Determent of thieves through alarm signal. (Dissuasion des voleurs par signal d'alarme.)

#### **Desired Features (Fonctionnalités souhaitées)**

* `F1`: Video surveillance. (Vidéosurveillance.)
* `F1.1`: Alarm activation. (Activation de l'alarme.)
* `F2`: Alarm signal. (Signal d'alarme.)
* `F2.1`: Motion detection. (Détection de mouvement.)
* `F2.4`: Automatic deactivation of alarm. (Désactivation automatique de l'alarme.)
* `F3`: Alarm call. (Appel d'alarme.)
* `F3.1`: Call by SMS (short message standard). (Appel par SMS.)
* `F3.2`: Call by internet message. (Appel par message Internet.)

#### **Requirements (Exigences)**

* `R1`: The recording of the video surveillance system shall start no later than 1 second after the detection of the open door or window. (L'enregistrement vidéo doit démarrer au plus tard 1 s après détection.)
* `R2`: The police shall be informed about the burglary via radio transmission. (La police doit être informée du cambriolage par transmission radio.)
* `R3`: The alarm shall be activated in case of burglary. (L'alarme doit s'activer en cas de cambriolage.)
* `R3.1`: The alarm signal shall only start if the police do not arrive within 5 minutes of alarm detection. (Le signal d'alarme ne déclenche que si la police n'arrive pas dans les 5 min.)
* `R3.2`: The alarm (signal) shall only be deactivated by the police or by the owner, via password and TAN (transaction number). (L'alarme ne peut être désactivée que par la police ou le propriétaire via mot de passe et code TAN.)
* `R10`: The time period between motion detection and start of recording shall be less than 2.5 seconds. (Le délai entre détection et enregistrement doit être inférieur à 2,5 s.)
* `R13`: The camera shall have enough storage for 5 minutes' video stream to be stored as alarm buffer. (La caméra doit avoir un tampon de stockage vidéo de 5 min.)
* `R68`: The stored video streams of the video surveillance system shall be safe against misuse and tampering. (Les flux vidéo stockés doivent être sécurisés contre les altérations.)
* `R68.1`: The length of the password shall be at least 5 characters. The password shall only be changed if necessary. (Le mot de passe doit faire au moins 5 caractères et n'est changé que si nécessaire.)

---

### **Spécification d'Exigences - Application 3 (Figure 10-7)**

> **Notes de marge :**
> * Troisième application exemple
> 
> 

#### **Goals (Objectifs)**

* `G1`: Safety against thieves. (Sécurité contre les voleurs.)
* `G...`: ...
* `G5`: Video surveillance of the flat. (Vidéosurveillance de l'appartement.)

#### **Desired Features (Fonctionnalités souhaitées)**

* `F1`: Video surveillance. (Vidéosurveillance.)
* `F1.1`: Activation by motion detection. (Activation par détection de mouvement.)
* `F...`: ...
* `F2.2`: Door and window sensor. (Capteur de porte et fenêtre.)
* `F2.3`: Manual deactivation of alarm (by owner, or police). (Désactivation manuelle de l'alarme par le propriétaire ou la police.)

#### **Requirements (Exigences)**

* `R1`: The police shall be informed immediately after the detection of an open window or door. (La police doit être informée immédiatement après détection.)
* `R1.1`: The police shall be informed via internet message or SMS. (La police doit être informée via message Internet ou SMS.)
* `R2`: The alarm signal shall start immediately after the detection of the open window or door. (Le signal d'alarme doit démarrer immédiatement après détection.)
* `R2.1`: The alarm signal shall be deactivated by the police, by the owner, or automatically after 20 minutes. (L'alarme doit être désactivée par la police, le propriétaire ou automatiquement après 20 min.)
* `R9`: The video surveillance shall be active as soon as activated by the user. (La vidéosurveillance doit être active dès son activation par l'utilisateur.)
* `R9.1`: A recording is only initiated if motion is detected. (L'enregistrement n'est initié que si un mouvement est détecté.)
* `R9.2`: The camera shall have enough storage for 5 minutes' video stream to be stored as alarm buffer. (La caméra doit disposer d'un stockage tampon de 5 min.)
* `R10`: The time period between motion detection and start of recording shall be less than 0.5 seconds. (Le délai détection-enregistrement doit être inférieur à 0,5 s.)
* `R11`: The video recording shall continue for 2 minutes after the last motion was detected. (L'enregistrement se poursuit 2 min après le dernier mouvement.)
* `R79`: The stored video streams of the video surveillance system shall be safe against misuse and tampering. (Les flux vidéo stockés doivent être sécurisés contre les altérations.)

---

### 10.9.1 Analyse de Communalité

> **Notes de marge :**
> * Matrice d'exigences
> * Analyse détaillée
> 
> 

---

#### **Schéma / Figure 10-8 : Matrice Applications-Exigences de l'Exemple**

Les éléments surlignés en gris dans la matrice originale indiquent les candidats à la variabilité.

| Exigences (*Requirements*) | App. 1 | App. 2 | App. 3 | Statut d'Analyse |
| --- | --- | --- | --- | --- |
| **La police doit être informée immédiatement après la détection d'une ouverture** |  |  | obligatoire | Spécifique (App. 3) |
| **La police doit être informée par message Internet ou SMS** |  |  | obligatoire | Spécifique (App. 3) |
| **Le signal d'alarme doit démarrer immédiatement après la détection** | obligatoire |  | obligatoire | Variable |
| **Le signal d'alarme ne déclenche que si la police n'arrive pas dans les 5 min** |  | obligatoire |  | Spécifique (App. 2) |
| **[VARIABLE] Le signal d'alarme doit être désactivé par la police, le propriétaire, ou automatiquement après 20 min** | **obligatoire** |  | **obligatoire** | **Candidate à la variabilité** |
| **La vidéosurveillance est active dès son activation par l'utilisateur** |  |  | obligatoire | Spécifique (App. 3) |
| *...* | *...* | *...* | *...* | *...* |
| **Un enregistrement n'est initié que si un mouvement est détecté** | obligatoire |  | obligatoire | Variable |
| **La caméra doit avoir un stockage de 5 min de flux vidéo en tampon** | **obligatoire** | **obligatoire** | **obligatoire** | **COMMUNALITÉ STRICTE** |
| **[VARIABLE] Délai entre détection et enregistrement < 0,5 seconde** | **obligatoire** |  | **obligatoire** | **Candidate à la variabilité** |
| **[VARIABLE] Délai entre détection et enregistrement < 2,5 secondes** |  | **obligatoire** |  | **Candidate à la variabilité** |
| **L'enregistrement vidéo se poursuit 2 min après le dernier mouvement** |  |  | obligatoire | Spécifique (App. 3) |
| **Les flux vidéo stockés doivent être sécurisés contre les altérations** | **obligatoire** | **obligatoire** | **obligatoire** | **COMMUNALITÉ STRICTE** |

---

> **Exemple 10-9 : Identification d'objectifs similaires**
> * App. 1, `G1`: *"protection contre le cambriolage"*
> * App. 2, `G1`: *"protection contre le cambriolage dans le bureau"*
> * App. 3, `G1`: *"sécurité contre les voleurs"*
> 
> 
> Ces trois objectifs sont synthétisés sous un unique objectif commun : **« protéger contre le cambriolage »**.

---

### 10.9.2 Analyse de Variabilité

> **Notes de marge :**
> * Identification des exigences variables
> * Détermination du sujet de variabilité
> 
> 

L'analyse de la matrice (Fig. 10-8) fait ressortir les exigences variables (lignes grises) et les variantes d'exigences internes :

> **Exemple 10-10 : Aspects variables au sein d'une exigence**
> L'exigence de désactivation de l'alarme contient trois variants :
> * Variant 1 : *« ...désactivé par la police »*
> * Variant 2 : *« ...désactivé par le propriétaire »*
> * Variant 3 : *« ...désactivé automatiquement après 20 min »*
> 
> 

> **Exemple 10-11 : Variants entre différentes applications**
> Pour la qualité d'authentification par mot de passe :
> * Variant 1 (*« haute qualité de mot de passe »* - Req-78.1, App. 1) : 10 caractères minimum, caractères spéciaux, changement tous les 3 mois.
> * Variant 2 (*« faible qualité de mot de passe »* - Req-68.1, App. 2) : 5 caractères minimum, changement uniquement si nécessaire.
> 
> 

---

### 10.9.3 Définition des Points de Variation et Variants

> **Exemple 10-12 : Définition d'un point de variation pour un ensemble de variants**
> En faisant abstraction des exigences de désactivation d'alarme, nous définissons le point de variation *« désactivation de l'alarme »* (`alarm deactivation`) avec deux variants :
> * Variant 1 : *« désactivation manuelle par une personne authentifiée »*
> * Variant 2 : *« désactivation automatique après 20 minutes »*
> 
> 

---

### 10.9.4 Définition des Dépendances de Variabilité

> **Notes de marge :**
> * Contrainte de variant à point de variation
> 
> 

---

### **Schéma / Figure 10-9 : Exemple d'un point de variation avec un choix alternatif entre deux variants**

```
                   +-----------------------+
                   |  VP Alarm Deactivation|  <-- Triangle VP
                   +-----------------------+
                               / \
                              /   \  <-- Arc indiquant le choix alternatif [1..1]
                             /     \
                            v       v
                     +--------+   +-----------+
                     | V      |   | V         |
                     | Manual |   | Automatic |
                     +--------+   +-----------+

```

#### **Description et Analyse du Schéma (Fig. 10-9) :**

* **Composants :**
* Le triangle sommital représente le point de variation **`VP Alarm Deactivation`**.
* Deux rectangles avec le symbole **`V`** représentent les variants : **`Manual`** (désactivation manuelle) et **`Automatic`** (désactivation automatique).
* Les lignes discontinues reliant le point de variation aux deux variants sont jointes par un arc de cercle, symbolisant un **choix alternatif obligatoire (`alternative choice` de cardinalité [1..1])**. Une application donnée doit obligatoirement sélectionner soit le mode manuel, soit le mode automatique, mais jamais les deux.



---

> **Exemple 10-13 : Définition des dépendances de variabilité**
> Les variants *« manuel »* et *« automatique »* sont reliés au point de variation *« désactivation de l'alarme »* par des dépendances optionnelles regroupées sous un choix alternatif [1..1].

---

### 10.9.5 Définition des Dépendances de Contrainte

---

### **Schéma / Figure 10-10 : Dépendance "Requires" entre un variant et un point de variation**

```
   +-----------------------+                       +-------------------------------+
   |   VP Alarm Activation |                       |  VP Video Surveillance Quality|
   +-----------------------+                       +-------------------------------+
     /         |         \                                    /    |    \
    /          |          \                                  /     |     \  (Arc de choix
   v           v           v                                v      v      v  alternatif)
+----------+ +--------+ +--------------+  requires_v_vp   +-----+ +----+ +----+
| V        | | V      | | V            | ...............> | V   | | V  | | V  |
| Acoustic | | Police | | Video        | (Flèche pointillée| High| | Mid| | Low|
| Signal   | | Info   | | Surveillance |  de contrainte)  +-----+ +----+ +----+
+----------+ +--------+ +--------------+
 R2, App.1    R1, App.3   R3, App.2                        R10,App.3 R1,App.2 R1,App.1
 R2, App.2    R2, App.2   R2.1, App.1
 R9, App.3

```

#### **Description et Analyse du Schéma (Fig. 10-10) :**

* **Structure :**
* À gauche : Point de variation `VP Alarm Activation` contenant 3 variants (`Acoustic Signal`, `Police Information`, `Video Surveillance`).
* À droite : Point de variation `VP Video Surveillance Quality` contenant 3 variants exclusifs (`High Quality t<=0.1s`, `Mid Quality t<=1s`, `Low Quality t>2s`).


* **Relation de contrainte inter-éléments :** Une flèche pointillée orientée `requires_v_vp` relie le variant `Video Surveillance` (à gauche) au point de variation `VP Video Surveillance Quality` (à droite).
* **Signification sémantique :** Dès lors qu'une application choisit le variant *« Video Surveillance »*, elle a l'obligation (*requires*) de sélectionner l'un des variants de qualité du point de variation *« Video Surveillance Quality »*.

---

> **Exemple 10-14 : Utilisation de la dépendance de contrainte « Requires »**
> La dépendance `requires_v_vp` entre le variant *« vidéosurveillance »* et le point de variation *« qualité de la vidéosurveillance »* impose le choix d'un niveau de performance vidéo dès que la vidéosurveillance est activée.

---

### 10.9.6 Documentation des Exigences de Domaine

> **Notes de marge :**
> * Variants dans un scénario de cas d'utilisation
> * Identification et définition de la communalité et de la variabilité
> 
> 

Les artefacts textuels (scénarios, cas d'utilisation) sont enrichis par des balises XML pour marquer la variabilité.

---

### **Schéma / Figure 10-11 : Exemple d'une description de scénario textuel variable**

```xml
<variation point name = "alarm system">
<optional-variant name = "video surveillance">
Use Case Name: activate video surveillance
Precondition: system online
<variation point name = "alarm activation">
<alternative-variant name = "authentication first">
USER                                    SYSTEM
1. select video surveillance
2.                                       request authentication
3. authenticate
4.                                       provide access
5. request activation of surveillance
6.                                       confirm activation
7. logout
</alternative-variant>

<alternative-variant name = "access first">
USER                                    SYSTEM
1. select video surveillance
2.                                       provide access
3. request activation of surveillance
4.                                       request authentication
5. authenticate
6.                                       confirm activation
7. logout
</alternative-variant>
</variation point>

```

#### **Description et Analyse du Schéma (Fig. 10-11) :**

Ce document illustre la structuration XML d'un scénario de cas d'utilisation variable :

* Balise externe `<variation point name="alarm system">` englobant le variant optionnel `<optional-variant name="video surveillance">`.
* À l'intérieur du cas d'utilisation *"activate video surveillance"*, un point de variation interne `<variation point name="alarm activation">` définit deux déroulements alternatifs sous forme de balises `<alternative-variant>` :
1. `authentication first` : L'utilisateur doit s'authentifier à l'étape 3 avant d'obtenir l'accès à l'étape 4 et d'activer la surveillance à l'étape 5.
2. `access first` : L'accès est accordé à l'étape 2, la demande d'activation se fait à l'étape 3, et l'authentification intervient en étape 5.



---

## 10.10 Différences par rapport à l'Ingénierie d'un Système Unique

L'objectif principal de l'ingénierie des exigences de domaine est le développement prospectif d'artefacts d'exigences communs et variables pour l'ensemble de la ligne de produits afin de permettre une réutilisation à grande échelle lors de l'ingénierie d'application.

En conséquence, les activités d'ingénierie des exigences (élicitation, documentation, négociation, validation/vérification) ne traitent pas d'une application isolée, mais des exigences de toutes les applications prévisibles de la ligne de produits. L'ingénieur doit impliquer un panel élargi de parties prenantes et de sources pour identifier l'intégralité des communalités et variabilités requises.

---

## 10.11 Résumé

> **Notes de marge :**
> * Identification de la communalité et de la variabilité
> * Définition de la variabilité
> 
> 

* **Analyse :** Parallèlement à l'élicitation, le sous-processus d'ingénierie des exigences de domaine doit identifier quelles exigences sont communes à toutes les applications et lesquelles diffèrent. La matrice applications-exigences, l'analyse par priorité (méthode Kano) et les listes de contrôle guident cette étape.
* **Modélisation :** La variabilité est formalisée dans le modèle de variabilité orthogonale (*OVM*) via la définition de points de variation, de variants, de dépendances de variabilité et de dépendances de contrainte.
* **Collaboration :** Les architectes logiciels doivent obligatoirement participer à la définition de la variabilité en raison de son impact sur l'architecture de référence. La variabilité externe est quant à elle arrêtée en concertation avec la gestion de produit.