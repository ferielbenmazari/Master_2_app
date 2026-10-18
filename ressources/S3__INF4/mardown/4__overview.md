# RED-PL, a Method for Deriving Product Requirements from a Product Line Requirements Model

**Notice HAL :** `halshs-00177760`

**Référence de publication :** Conference on Advanced Information Systems Engineering (CAISE), Jun 2007, Trondheim, Norway. Springer Verlag, pp. 279-293, 2007.

**Soumis le :** 9 octobre 2007

**Auteurs :**

* **Olfa Djebbi** ¹, ² (`olfa.djebbi@malix.univ-paris1.fr`, `odjebbi@stago.fr`)
* **Camille Salinesi** ¹ (`Camille.Salinesi@univ-paris1.fr`)

**Affiliations :**

1. CRI, Université Paris 1 - Sorbonne, 90, rue de Tolbiac, 75013 Paris, France
2. Stago Instruments, 136 avenue Louis Roche, 92341 Gennevilliers, France

---

## Résumé / Abstract

La modélisation des lignes de produits logiciels (Software Product Lines - SPL) s'est avérée être une approche efficace de la réutilisation dans le développement logiciel. Plusieurs approches de variabilité ont été développées pour planifier la réutilisation des exigences, mais très peu d'entre elles abordent réellement la question de la dérivation des exigences produit. En effet, alors que les approches de modélisation mettent en avant la réutilisation des exigences, les techniques de dérivation associées se concentrent en réalité sur la dérivation et la réutilisation de données techniques produit.

Cet article présente une méthode visant à supporter la dérivation d'exigences. Son principe sous-jacent est de tirer parti des approches conçues pour réutiliser les exigences de lignes de produits et de les compléter par un processus de développement d'exigences par réutilisation pour des produits individuels. L'approche proposée fait correspondre les exigences produit des utilisateurs avec les modèles d'exigences de la ligne de produits et dérive une collection d'exigences qui est (i) cohérente, et (ii) optimale par rapport aux priorités des utilisateurs et aux contraintes de l'entreprise. Le processus méthodologique proposé a été validé dans un cadre industriel en considérant la phase d'ingénierie des exigences d'une ligne de produits d'automates d'analyse sanguine.

**Mots-clés :** Exigences, Dérivation, Ligne de Produits (*Requirements, Derivation, Product Line*).

---

## 1. Introduction

Comme le définit le *Software Engineering Institute* (SEI) : *« Une ligne de produits logiciels (Software Product Line - SPL) est un ensemble de systèmes à forte composante logicielle qui partagent un ensemble commun et géré de fonctionnalités satisfaisant les besoins spécifiques d'un segment de marché ou d'une mission particulière et qui sont développés à partir d'un ensemble commun d'actifs de base (core assets) d'une manière prescrite. »*

L'ingénierie de lignes de produits logiciels émerge rapidement comme un paradigme de développement logiciel viable et important permettant aux entreprises d'obtenir des améliorations d'un ordre de grandeur significatif en termes de délai de mise sur le marché (*time to market*), de coût, de productivité, de qualité et de flexibilité.

Ces nouveaux résultats peuvent être attribués à la réutilisation stratégique du logiciel. Les techniques de lignes de produits logiciels capitalisent explicitement sur les points communs (*commonalities*) et gèrent formellement les variations parmi les produits de la ligne de produits. Ainsi, l'effort principal pour concevoir un produit à partir de la ligne de produits est dû aux variations et à l'impact des choix effectués pour le produit requis.

Par rapport aux techniques conventionnelles, les entreprises qui gèrent une ligne de produits logiciels font état de succès dans lesquels elles ont réduit leur délai de mise sur le marché de nouveaux produits par des facteurs de 2 à 50, réduit les taux de défauts jusqu'à 96 % et multiplié la productivité par un facteur de 2 à 3 [1].

Comme le montre la **Fig. 1**, les produits logiciels sont développés, dans le contexte de l'ingénierie de lignes de produits, selon un processus en deux étapes : l'étape d'ingénierie du domaine (*domain engineering*) et l'étape d'ingénierie d'application (*application engineering* / *product engineering*) [2]. L'ingénierie du domaine implique la mise en œuvre des éléments communs entre les membres de la famille de produits à travers un ensemble d'artefacts logiciels partagés, tout en préservant la capacité de faire varier les produits. Lors de l'ingénierie d'application, les produits individuels sont dérivés de la famille de produits, c'est-à-dire construits en utilisant un sous-ensemble des artefacts logiciels partagés.

---

### SCHÉMA 1 : Figure 1

![Fig. 1. Requirements Engineering challenges in a Software Product Line context (SEI)]

#### Transcription textuelle du schéma Figure 1 :

* **Niveau Supérieur : Domain Engineering (Ingénierie du Domaine)**
* Chaîne de processus : `Domain Analysis` $\rightarrow$ `Domain Design` $\rightarrow$ `Domain Realization` $\rightarrow$ `Domain Testing`
* Réservoir d'actifs réutilisables du Domaine (`Domain`) : `Requirements` $\leftrightarrow$ `Architecture` $\leftrightarrow$ `Components` $\leftrightarrow$ `T` (Testing)


* **Niveau Inférieur : Product Engineering (Ingénierie des Produits)**
* Entrée : `New requirements` (Nouvelles exigences)
* Chaîne de processus : `Product Analysis` $\rightarrow$ `Product Design` $\rightarrow$ `Product Realization` $\rightarrow$ `Product Testing`
* Produits générés : `Product 1` ... `Product N`
* Artefacts d'un produit spécifique : `Requirements` $\leftrightarrow$ `Architecture` $\leftrightarrow$ `Components` $\leftrightarrow$ `T` (Testing)


* **Zone encadrée en rouge (pointillés)** :
* Elle entoure spécifiquement le bloc `Requirements` dans la phase `Domain Analysis` de l'Ingénierie du Domaine ainsi que le bloc `Product Analysis` / `Requirements` dans l'Ingénierie des Produits.



#### Description et compréhension du schéma Figure 1 :

Ce schéma (issu des travaux du SEI) illustre le cadre fondamental de l'ingénierie de lignes de produits logiciels. Il montre la séparation entre :

1. **L'Ingénierie du Domaine** : elle fabrique l'ensemble des artefacts logiciels génériques et réutilisables (exigences, architectures, composants, jeux de tests).
2. **L'Ingénierie des Produits** : elle réutilise ces actifs globaux pour dériver des produits particuliers (`Product 1` à `Product N`), en y intégrant de nouvelles exigences spécifiques (`New requirements`).

L'encadré en pointillés rouges souligne précisément le périmètre traité par l'article : **les défis de l'Ingénierie des Exigences (Requirements Engineering)** lors du passage du modèle d'exigences général de la ligne de produits à l'analyse et l'élaboration des exigences d'un produit individuel.

---

Dans ce contexte particulier, les processus d'Ingénierie des Exigences (RE) ont deux objectifs : définir et gérer les exigences au sein de la ligne de produits et coordonner les exigences pour les produits individuels. Pour atteindre ces derniers objectifs, les exigences produit doivent être élicitées en faisant correspondre les exigences de la ligne de produits avec les exigences initiales des clients (Fig. 1).

Certaines recommandations peuvent être trouvées pour gérer les exigences dans le contexte des SPL, mais elles nécessitent toujours d'être personnalisées [3] [4] [5] [6] [7]. Les approches existantes reposent sur un processus de modélisation de la variabilité des exigences suivi d'un processus de sélection d'exigences pour extraire une collection d'exigences spécifiant le produit unique à construire.

Notre expérience nous a montré que, comme l'ont souligné [8] [9], cette façon de travailler présente plusieurs limites :

* **Exigences orientées solution (*Solution-driven*)** : La sélection parmi des modèles d'exigences de lignes de produits prédéfinis, qui correspondent le plus souvent à des fonctionnalités déjà implémentées dans des produits existants, peut influencer les parties prenantes et biaiser leurs choix. Elles vont naturellement établir des liens entre leur problème et les solutions existantes, adopter des fonctionnalités ayant une valeur marginale, et oublier naturellement des exigences importantes qui ne sont pas présentes dans le modèle d'exigences de la PL. En conséquence, l'attention se porte sur les éléments de modèle qui implémentent la solution plutôt que sur l'expression des besoins réels.
* **Insatisfaction du client (*Customer dissatisfaction*)** : Les exigences du client peuvent être différentes de celles identifiées dans les modèles d'exigences de la PL. Sélectionner uniquement parmi des exigences existantes peut conduire à passer à côté d'exigences majeures.
* **Frein à l'innovation (*Innovation damping*)** : Le processus de RE est intrinsèquement caractérisé par des épisodes d'évolution guidés par l'intuition. Il favorise l'exploration opportuniste de l'espace conceptuel et promeut la pensée créative au sein des exigences système. Au contraire, sélectionner parmi des exigences prédéfinies restreint considérablement la créativité et la recherche de manières innovantes de traiter les problèmes, réduisant ainsi la valeur ajoutée des nouveaux produits à développer.
* **Manque de guidage (*Lack of guidance*)** : Les clients et les équipes marketing sont le plus souvent livrés à eux-mêmes pour éliciter les exigences des nouveaux produits. Les approches existantes fournissent peu de guidage (notation, processus, règles...) pour les assister dans l'élicitation d'exigences produit cohérentes, et les développeurs ne sont pas davantage guidés pour ajouter de nouvelles exigences au modèle d'exigences de la PL.
* **Formation du client (*Customer training*)** : Les interactions entre les clients et les modèles d'exigences variables impliquent que les utilisateurs fassent un effort supplémentaire pour comprendre les modèles de la PL et chercher leurs exigences au sein de ces modèles.
* **Surcharge du client (*Customer overwhelm*)** : Les clients ne devraient pas avoir à prendre en considération l'ensemble de la collection des exigences de la PL, car ils ne sont intéressés que par les exigences du produit courant. Submergés par une quantité massive de données, les clients perdent le fil de la mission initiale et sont naturellement amenés à s'interroger, commenter, voire spéculer sur des « exigences » qui ne correspondent pas à des besoins réels.

Ces limites engendrées par le traitement de sélection des exigences ont de nombreux impacts sur les processus et les artefacts du projet, à savoir :

* **Qualité des documents d'exigences** : Lorsque les parties prenantes sélectionnent des exigences à partir des modèles de la PL, les documents résultants consistent en une copie d'un extrait du modèle d'exigences de la PL. Quand, au contraire, les parties prenantes proposent de nouvelles exigences, les spécifier indépendamment du modèle d'exigences de la PL est inefficace. Nous pensons qu'il est nécessaire de guider la fusion entre les spécifications d'exigences de variabilité et la documentation des exigences pour les produits individuels. De plus, les spécifications des exigences produit peuvent être incohérentes puisque les méthodes de RE pour SPL ne proposent pas de processus pour vérifier la cohérence et la compatibilité des nouvelles exigences avec les anciennes.
* **Qualité du produit résultant** : Il est bien documenté que les résultats des projets ayant une mauvaise gestion des exigences mènent à une faible qualité de produit. Cela s'applique aux produits développés dans le contexte de PL comme pour tout autre type de produit, même si la réutilisation est facilitée.
* **Gestion de projet** : Former les clients à comprendre les modèles d'exigences de la PL et à discuter autour d'eux est une perte de temps et crée une ambiguïté entre les rôles des analystes et des clients qui mène inévitablement à des conflits. Cela, associé à une pauvre définition des exigences dans les phases précoces du projet, génère du retravail dans les phases ultérieures, des coûts supplémentaires, des dépassements de délais et une gestion de projet difficile.
* **Objectifs stratégiques de l'entreprise** : Stopper l'innovation et l'anticipation du marché avec de nouveaux produits peut nuire aux objectifs stratégiques de l'entreprise. En outre, l'application de méthodes conduisant à l'insatisfaction des clients peut même menacer la survie de l'entreprise.

Pour surmonter ces lacunes des méthodes existantes, nous pensons qu'il existe un besoin pour une approche de dérivation des exigences produit qui satisfasse les caractéristiques suivantes :

* **Orientée exigences** : Les clients doivent pouvoir exprimer leurs besoins réels, et le produit construit doit répondre à ces besoins.
* **Basée sur la ligne de produits** : Le produit développé doit tirer parti de la plateforme de la PL et réutiliser des exigences élaborées qui sont déjà liées, traçables et validées.
* **Unifiée dans tout le cycle de développement de la ligne de produits** : Elle doit fournir des moyens d'assurer la traçabilité avec les étapes de développement restantes tant pour la ligne de produits que pour le produit individuel en cours de développement.
* **Facile à appliquer**.
* **Supportée par un outil CASE intégré aux boîtes d'outils existantes** : Un support d'outil approprié est obligatoire pour faciliter la gestion automatisée des processus et des artefacts de la méthode, et ainsi favoriser son adoption large par la communauté des développeurs.
* **Passable à l'échelle (*Scalable*)** : La méthode doit permettre de modéliser des systèmes de grande échelle.

Cet article présente une méthode qui vise à supporter les exigences énumérées ci-dessus. L'étude a été entreprise avec la collaboration de l'association AFIS (Association Française d'Ingénierie Système, affiliée à l'INCOSE) et la méthode a été développée par application à une ligne de produits d'une entreprise française nommée Stago, une entreprise médicale qui produit des automates d'analyse sanguine [10]. L'expérience a consisté à introduire progressivement les principes de base de la gestion de PL tout en répondant aux problèmes pratiques rencontrés dans les phases de RE d'un projet de création d'un nouveau produit. La sélection de ces principes de base résulte d'une recherche bibliographique approfondie. Sur la base de cette expérience, nous avons développé une méthode, nommée **RED-PL** (*Requirements Elicitation & Derivation for Product Lines*), qui guide l'élicitation des exigences produit par dérivation à partir de la spécification d'exigences de la PL. L'approche prend en compte à la fois les contraintes environnementales et techniques de l'entreprise et les exigences spécifiques du produit telles qu'exprimées par les clients.

RED-PL s'appuie sur des notations d'exigences de PL déjà existantes. L'originalité de la méthode RED-PL est que (i) elle est orientée utilisateur et (ii) elle guide l'élicitation des exigences produit comme une activité de prise de décision. En effet, RED-PL permet aux utilisateurs d'exprimer leurs besoins en utilisant des techniques classiques d'ingénierie des exigences. Ensuite, des mécanismes sont utilisés pour convertir ces besoins et les faire correspondre avec la spécification des exigences de la PL. La négociation et l'arbitrage sont enfin supportés dans RED-PL pour éliciter des exigences produit optimales tout en maximisant la réutilisation.

L'article est organisé comme suit. La section 2 présente les défis auxquels Stago est confrontée et les problèmes rencontrés lors de l'exécution des activités de RE dans son contexte de gestion de SPL. La section 3 présente la méthode RED-PL qui a été développée pour répondre à ces défis. Le processus méthodologique est illustré à l'aide des données de Stago initialement utilisées pour le développer. La section 4 fournit un aperçu des méthodes existantes et discute de la façon dont elles traitent ces défis. Enfin, les conclusions sont données en section 5.

---

## 2. Énoncé du problème dans le contexte de Stago

Stago Instruments [10] est une entreprise qui produit des instruments d'analyse pour le diagnostic de l'hémostase. Ces instruments sont des systèmes embarqués et temps réel. Ils sont utilisés dans les hôpitaux et les laboratoires dans le cadre d'analyses de routine ou de recherches biologiques.

Les automates produits par l'entreprise s'intègrent dans une ligne de produits : ils partagent tous le même noyau central comportant les fonctionnalités principales d'analyse sanguine. Chaque automate possède également ses propres caractéristiques et diffère des autres. Ces parties variables peuvent être aussi simples que la couleur, le poids ou l'interface utilisateur de la machine ; ou plus avancées telles que les processus biologiques, la capacité en termes de nombre de tubes traités, ou les technologies mécaniques et électroniques.

En général, les instruments effectuent des tests sur les produits des patients (sang total, plasma) et renvoient des résultats qui sont ensuite interprétés par les médecins.

Pour effectuer des tests, les biologistes chargent des tubes de produits patients ainsi que des tubes de réactifs dans l'instrument. Lors du chargement, les tubes doivent être identifiés. Le biologiste doit ensuite choisir une méthodologie d'analyse et lancer les tests. Une méthodologie est une série d'étapes qui simulent les réactions du corps. Les méthodologies diffèrent selon les types de tests (TP, TCA, etc.), mais comprennent nécessairement une étape de mélange (*mix*) et une étape d'incubation (*incubation*). Elles peuvent également utiliser des étapes d'agitation (*mixing/agitate*) et de chauffage (*heating*). Les chercheurs peuvent composer leurs propres méthodologies.

Les instruments traitent les tubes, accomplissent les analyses selon les méthodologies spécifiées, prennent des mesures et renvoient les résultats au biologiste.

Les produits sont chargés par lot (*batch*). Néanmoins, l'instrument est capable d'interrompre les tests en cours afin de charger et traiter des tubes urgents. Avant de lancer les tests, les tubes doivent être traités pour séparer leurs constituants. Deux processus de séparation existent : la centrifugation et la micro-filtration. Tous les instruments sont capables de mettre en œuvre ces processus, cependant un seul d'entre eux est implémenté à la fois dans un instrument donné.

Il existe trois types de mesures : chronométrique, colorimétrique et immunologique. Les instruments peuvent implémenter plusieurs techniques de mesure, mais un instrument qui implémente la micro-filtration ne doit pas implémenter la mesure photométrique.

Les résultats de tests sont fournis aux biologistes en unité brute (Sec, D.O/min, $\Delta D.O$), ainsi qu'en unité calculée (INR, $\mu g/ml$, UI/ml). Pour établir des correspondances entre les unités, l'instrument doit supporter des étalonnages (*calibrations*). En outre, l'instrument peut afficher les résultats à l'écran, les imprimer et/ou les transférer vers l'hôte de l'hôpital ou du laboratoire et les insérer dans l'historique du dossier patient.

Lors des projets, les équipes de Stago gèrent en parallèle la documentation des exigences pour la ligne de produits (exigences communes) et pour les produits individuels (exigences variables).

---

### SCHÉMA 2 : Figure 2

![Fig. 2. Requirements model of Stago's product line]

#### Transcription textuelle de la structure du diagramme de fonctionnalités (Feature Tree - Figure 2) :

* **Racine** : `Diagnose thrombosis/haemostasis`
* **Décomposition principale** :
* `Identify failing factor`
* `Interpret results`
* `Analyze`
* `Avoid contamination`
* `Clean`
* `Evacuate waste`


* `Ensure traceability`
* Option 1 : `By id`
* Option 2 : `By printing on tubes`
* Option 3 : `By RFID`




* **Sous-arbre `Analyze**` :
* `Set products to analyze and reagents`
* `Load reagents`
* `Recuperate products`
* `Identify products`
* `By RFID`
* `By barcode`
* `By identificator`
* `Manual`
* `By extern system`




* `Load products`
* `For urgent test`
* `By batch`
* `By test type`
* `By patient`
* `FIFO`




* `Separate constituents` *(Optionnel - cercle vide)*
* Cardinalité `<1..*>` *(Choix alternatif/multiple)* :
* `Centrifuge`
* `Micro filter`








* `Measure reaction`
* Cardinalité `<1..*>` *(Choix alternatif/multiple)* :
* `Chronometric`
* `Photometric`
* `Immunologic`
* `Colorimetric`






* `Set up analysis methodology`
* `Mix`
* `Agitate`
* `Heat`
* `Incubate`
* `Obtain analysis results`
* `Calibrate`
* `In the patient case history`
* `In the screen`
* `By listing`
* `FIFO`
* `By patient`
* `By test type`








* **Réseau de contraintes explicites (lignes pointillées)** :
* `mutex` (Exclusion mutuelle) : reliant la fonctionnalité `Micro filter` (sous `Separate constituents`) à la fonctionnalité `Photometric` (sous `Measure reaction`).
* `requires` (Dépendance/Implication) : reliant la fonctionnalité `By RFID` (sous `Identify products`) à la fonctionnalité `By RFID` (sous `Ensure traceability`).





#### Description et compréhension du schéma Figure 2 :

Ce schéma est une représentation sous forme d'Arbre de Fonctionnalités (*Feature Model*) du modèle d'exigences de la ligne de produits d'automates de Stago.

1. **Hiérarchie et sous-ensembles** : Il montre comment le but global (`Diagnose thrombosis/haemostasis`) est décomposé en sous-fonctions principales.
2. **Types de variabilité** :
* *Obligatoire (Mandatory)* : fonctionnalités incluses dans tous les produits.
* *Optionnel (Optional)* : indiqué par un cercle vide au-dessus du nœud (ex: `Separate constituents`).
* *Alternative / Choix multiple* : indiqué par des arcs avec cardinalité (ex: `<1..*>` sous `Separate constituents` et `Measure reaction`).


3. **Contraintes inter-branches** :
* Le lien `mutex` exprime l'impossibilité physique ou technique de combiner le filtre micro-filtration avec la mesure photométrique dans la même machine.
* Le lien `requires` exprime une dépendance fonctionnelle : si le système identifie les produits par puce RFID, il doit également assurer la traçabilité globale via RFID.



---

La **Fig. 2** présente un modèle qui a été développé pour documenter les exigences les plus importantes de la ligne de produits d'instruments Stago. Les exigences de la PL sont modélisées en utilisant une notation orientée fonctionnalités (*Feature-oriented*).

La figure montre un arbre dans lequel les nœuds sont les fonctionnalités qui correspondent aux exigences de la PL et les liens décrivent la décomposition des fonctionnalités. Il existe trois types d'exigences : obligatoires (ex. *'Load products'*), optionnelles (ex. *'Separate constituents'*) et alternatives (ex. *'Centrifuge'* et *'Micro-filter'*). Une exigence obligatoire est commune à la PL et doit être incluse dans chaque produit de la PL. Une exigence optionnelle peut, ou non, être choisie pour le produit considéré. Les exigences alternatives sont des collections d'exigences parmi lesquelles certaines peuvent être sélectionnées et d'autres non. Une cardinalité UML est associée à la collection pour indiquer le nombre minimum et maximum d'exigences à choisir. Des liens de dépendance supplémentaires entre les exigences, à savoir les relations *'requires'* et *'mutex'*, peuvent être définis pour spécifier des contraintes additionnelles dans la sélection des exigences.

Puisque les utilisateurs sont libres dans leur façon d'exprimer leurs exigences, il arrive que certaines exigences existent déjà dans la documentation des exigences de la PL, mais sous une forme différente. Les utilisateurs insistent également sur certaines exigences et ignorent leurs impacts sur d'autres, ou sur le déroulement du projet lui-même. Les utilisateurs oublient aussi souvent des exigences importantes et ignorent les opportunités offertes par la ligne de produits.

Dans ce contexte, Stago a soulevé des questions de priorité, à savoir :

1. Comment assurer la satisfaction des besoins réels de l'utilisateur ?
2. Comment dériver une collection optimale et cohérente d'exigences produit qui répond aux besoins des utilisateurs et qui coûte peu à l'entreprise ?

L'approche RED-PL a été développée et expérimentée sur un projet Stago pour répondre à ces questions.

---

## 3. L'approche RED-PL

Contrairement à l'approche traditionnelle de « Sélection », la dérivation des exigences pour les PL doit prendre en compte les besoins originaux des parties prenantes. Comme le montre la **Fig. 3**, RED-PL consiste en :

* Éliciter les exigences des utilisateurs,
* Apparier (*matching*) les exigences des utilisateurs avec les exigences de la PL. Cette activité conduit à établir l'ensemble des exigences que la PL englobe et qui satisfont les besoins des utilisateurs. Elles correspondent à un ensemble de produits possibles à construire.
* Dériver l'ensemble optimal d'exigences produit, en tenant compte des contraintes des utilisateurs et de l'entreprise.

Ces processus sont respectivement décrits dans les trois sous-sections suivantes.

---

### SCHÉMA 3 : Figure 3

![Fig. 3. Processes of the RED-PL approach]

#### Transcription textuelle du schéma Figure 3 :

* **Acteurs / Rôles** : `Domain Engineer`, `Product Requirements Engineer`, `User`, `Company`.
* **Entité centrale** : `Product Line` (Base de données d'actifs) / Ensemble de produits dérivés (`Product 1`, `Product 2`, `Product N`).
* **Flux d'activités** :
1. `User` $\rightarrow$ `Requirements Elicitation + Constraints` $\rightarrow$ `Product Requirements Engineer`
2. `Company` $\rightarrow$ `Constraints` $\rightarrow$ `Product Requirements Engineer`
3. `Product Requirements Engineer` $\rightarrow$ `Match requirements + Generate products` $\rightarrow$ Sélection dans `Product Line` $\rightarrow$ Produits candidats (`Product 1..N`)
4. `Product Requirements Engineer` $\leftrightarrow$ `User` : `Arbitrate` (Arbitrage)
5. `Arbitrate` $\rightarrow$ Définition du produit final retenu $\rightarrow$ `Capitalize` (Capitalisation) par le `Domain Engineer` dans la `Product Line`.



#### Description et compréhension du schéma Figure 3 :

Ce schéma synthétise l'architecture méthodologique de RED-PL. Il illustre le flux de travail interactif :

1. **Élicitation libre** : L'utilisateur (`User`) exprime ses besoins et l'entreprise (`Company`) fixe ses contraintes de gestion (coût, délai, budget).
2. **Matching (Appariement)** : L'Ingénieur des Exigences Produit effectue le traitement d'appariement avec le référentiel de la Ligne de Produits (`Product Line`) pour identifier la sous-partie des exigences applicables et générer l'espace des produits possibles.
3. **Arbitrage (Arbitration)** : Une négociation assistée par modèle d'optimisation (ILP) arbitre les choix ambigus ou optionnels en direct avec l'utilisateur.
4. **Capitalisation** : Les exigences nouvellement créées pour le produit spécifique sont réinjectées par l'Ingénieur du Domaine pour enrichir le patrimoine global de la Ligne de Produits.

---

### 3.1 Le processus d'appariement (*matching process*)

Le processus d'appariement est un processus itératif qui consiste à interpréter les exigences des utilisateurs en termes d'exigences de la PL. Il résulte en une collection d'exigences qui seront implémentées dans le produit (nommées « exigences produit »).

Le processus d'appariement vise à :

1. Éliciter de nouvelles exigences utilisateurs,
2. Éviter d'oublier des exigences possibles,
3. Affiner progressivement les exigences produit finales,
4. Mettre à jour les actifs de la PL.

Dans le processus d'appariement, les besoins des utilisateurs peuvent être élicités en utilisant des méthodes classiques. Ensuite, des règles doivent être appliquées pour construire une collection valide (c'est-à-dire non ambiguë, cohérente, traçable et vérifiable) d'exigences produit. Une fois cela accompli, les exigences des utilisateurs peuvent être recherchées et marquées dans le modèle de la PL.

Si les exigences des utilisateurs ne peuvent pas être trouvées dans le modèle d'exigences de la PL, alors soit :

* (i) Ce sont de nouvelles exigences et elles doivent être ajoutées au modèle de la PL ainsi que les liens entre elles et par rapport aux anciennes exigences,
* (ii) Ce sont les mêmes exigences exprimées différemment, et un consensus doit alors être établi sur la formulation de l'exigence.

L'appariement des exigences est guidé en utilisant des techniques d'analyse de similitude. Deux types de techniques d'analyse de similitude peuvent être utilisés : de niveau de surface (*surface level*) et de niveau profond (*deep level*). Les premières techniques sont basées sur la similitude lexicale où deux exigences sont considérées comme similaires lorsqu'elles utilisent le même terme ou les mêmes structures linguistiques. Inversement, les techniques de niveau profond utilisent une proximité structurelle et sémantique. Ces techniques nécessitent des outils plus sophistiqués tels que des dictionnaires et des analyseurs linguistiques. Notre approche d'analyse de similitude utilise également le raffinement, comme le suggère la modélisation par buts (*goal modeling*), pour améliorer progressivement la qualité de l'appariement et se concentrer sur les exigences considérées comme les plus importantes [11].

Notre approche exploite les 30 métriques de similitude génériques adaptées aux ratios de Dice, Jaccard et Cosine. Comme montré ci-dessous, la similitude peut être calculée automatiquement en appliquant un ratio pondéré entre le nombre de similitudes trouvées entre deux exigences et le nombre d'éléments qui définissent ces exigences.

$$\text{Ratio de Dice adapté :} \quad S(A, B) = \frac{\sum \text{MAX SIM}(\text{Termes}_i, \text{Termes}_j)}{\sum \text{MAX SIM}(\text{Termes}_i, \text{Termes}_j) + \dots}$$

*(Formule 1 : Ratio de Dice adapté)*

Après l'étude de similitude, les exigences marquées et toutes les exigences associées peuvent être extraites du modèle de la PL. Cette collection d'exigences doit correspondre à un fragment du modèle d'exigences de la PL, c'est-à-dire un sous-arbre d'exigences qui satisfont les exigences des utilisateurs. Cependant, le modèle d'exigences de la PL contient également des exigences qui ne sont pas encore marquées. Ces exigences peuvent être soit :

* (i) Non désirées, elles doivent alors être explicitement marquées comme telles,
* (ii) Obligatoires, elles doivent alors être incluses dans la collection des exigences produit,
* (iii) Variables (optionnelles / alternatives).

Tant que l'arbre contient des exigences optionnelles et alternatives non marquées, une décision doit être prise sur les exigences PL supplémentaires à sélectionner pour le produit. Des arbitrages doivent donc être étudiés et discutés avec les utilisateurs, comme expliqué dans la sous-section suivante.

---

### 3.2 Le processus d'arbitrage (*arbitration process*)

La sortie du processus d'appariement consiste en un modèle d'exigences de PL composé d'exigences obligatoires, optionnelles et alternatives désirées ou non désirées. Le fragment de modèle composé des exigences désirées représente un ensemble de versions (*releases*) possibles car il peut également contenir des exigences optionnelles et alternatives.

Seules les exigences optionnelles et alternatives désirées sont considérées par la suite pour exprimer les préférences, car les exigences obligatoires doivent de toute façon être incluses dans la collection d'exigences produit.

Les préférences peuvent être exprimées par les utilisateurs sous la forme de poids associés aux exigences optionnelles et alternatives. Un poids de 0 signifie que l'exigence ne doit pas être sélectionnée, un poids de 1 signifie qu'elle doit être incluse dans la collection d'exigences produit. La somme des poids d'un groupe d'exigences alternatives doit être égale à 1. Implicitement, chaque exigence obligatoire a une valeur de poids égale à 1.

Les utilisateurs peuvent indiquer leurs contraintes sur chaque exigence en termes de coûts et de bénéfices. De même, les managers peuvent préciser leurs contraintes de développement sur chaque exigence en termes de ressources humaines, de revenus, de coûts et de temps d'implémentation/intégration. Bien que nous sachions qu'elles sont importantes, d'autres contraintes telles que les compétences des équipes de développement, les transferts d'équipes, le report d'échéances, les ressources externes, ont été volontairement ignorées car elles étaient trop difficiles à évaluer et nous ne savions pas si elles influenceraient réellement l'arbitrage de manière significative.

Une fois les exigences, priorités et contraintes complètement définies, elles sont formalisées en utilisant une notation de Programmation Linéaire en Nombres Entiers (ILP - *Integer Linear Programming*). L'approche d'Akkar [12] a été sélectionnée et adaptée pour résoudre le problème considéré. La version adaptée permet de définir le sous-ensemble d'exigences qui compose la version optimale tout en réalisant une analyse d'impact (*what-if analysis*) sur un tableau de bord. L'approche ILP génère une collection d'exigences qui satisfait les valeurs des contraintes, et qui est optimale par rapport au critère d'optimisation.

Ce qui suit présente notre proposition pour modéliser les dépendances d'exigences de la PL en utilisant l'approche d'Akkar. Dans l'approche d'Akkar, une exigence $x_a \in \{0, 1\}$ avec $x_a = 1$ si $X_a$ est sélectionnée, et $x_a = 0$ sinon. Cinq types de dépendances peuvent être considérés : composition, nécessite (*requires*), composition optionnelle, exclusion, et alternative. Alors que les quatre premières dépendances étaient déjà considérées dans l'approche d'Akkar sous les noms 'combinaison', 'implication' et 'exclusion', le cinquième type a dû être créé pour traiter la sémantique spécifique des notations de modélisation d'exigences de PL.

* **Requires (Nécessite)** : Si l'exigence $X_b$ est sélectionnée, alors l'exigence $X_a$ doit être sélectionnée aussi. Dans le modèle ILP, il doit être garanti que : $x_b = 1 \Rightarrow x_a = 1$. Le modèle ILP est étendu par l'inégalité linéaire :

$$x_b \le x_a \quad \text{($X_a$ ne peut pas être implémenté sans implémenter $X_b$)}$$



Dans l'approche initiale d'Akkar, la dépendance correspondante était 'implication'. En termes de modélisation d'exigences de PL, les dépendances « requires » peuvent être trouvées à partir des relations alternatives, optionnelles et requires.
* **Composition** : Si deux exigences $X_a$ et $X_b$ ne peuvent pas être implémentées séparément, alors il doit être garanti que :

$$X_a = X_b$$



Les dépendances de composition peuvent être trouvées dans les modèles d'exigences de PL à partir des relations de composition. Dans les termes d'Akkar, cela correspond à la dépendance de combinaison.
* **Exclusion** : Si $R_a$ et $R_b$ ne peuvent pas être toutes les deux sélectionnées, alors dans le modèle ILP l'inégalité suivante doit être vérifiée :

$$x_a + x_b \le 1$$



Dans la modélisation de PL, les dépendances d'exclusion se retrouvent à partir des relations « mutex ».
* **Alternative** : En ingénierie de PL, une exigence peut être réalisée par une ou plusieurs exigences parmi un ensemble. Cela est partiellement assuré par la relation d'implication d'une exigence $X_a$ vers ses sous-exigences $X_b \dots X_k$, mais doit être plus détaillée pour modéliser la relation entre les sous-exigences elles-mêmes. Ainsi, la dépendance alternative (qui n'existe pas dans le modèle d'Akkar) est définie dans le modèle ILP par l'inégalité suivante :

$$x_a \cdot Card_{min} \le x_b + \dots + x_k \le Card_{max}$$



Le tableau suivant résume les formules mathématiques utilisées pour développer le modèle ILP.

---

#### Tableau 1. Récapitulation des dépendances d'exigences et de leur représentation dans le modèle ILP

| Relation de dépendance | Explication | Formule mathématique |
| --- | --- | --- |
| **Composition**<br>

<br>$R_a \leftrightarrow R_b$ | Si une exigence est sélectionnée alors toutes les exigences obligatoires la composant doivent être sélectionnées :<br>

<br>$R_a = 1 \Rightarrow R_b = 1$<br>

<br>$R_a = 0 \Rightarrow R_b = 0$<br>

<br>$R_b = 1 \Rightarrow R_a = 1$<br>

<br>$R_b = 0 \Rightarrow R_a = 0$ | $R_a = R_b$<br>

<br>*(Combinaison)* |
| **Option**<br>

<br>$R_a \rightarrow R_b$ (optionnel) | Si une exigence est sélectionnée alors ses sous-exigences optionnelles peuvent être sélectionnées :<br>

<br>$R_a = 1 \Rightarrow R_b \in \{0, 1\}$<br>

<br>$R_b = 1 \Rightarrow R_a = 1$<br>

<br>$R_a = 0 \Rightarrow R_b = 0$<br>

<br>$R_b = 0 \Rightarrow R_a \in \{0, 1\}$ | $R_b \le R_a$<br>

<br>*(Implication)* |
| **Alternative**<br>

<br>$R_a \rightarrow \{R_b, R_c, R_d\}$ | Si une exigence est sélectionnée alors les sous-exigences alternatives doivent être sélectionnées en respectant la cardinalité spécifiée :<br>

<br>$R_a \in \{0, 1\}$ et $R_a = 1 \Rightarrow R_b + R_c + R_d \ge Card_{min}$ et $R_b + R_c + R_d \le Card_{max}$<br>

<br>et $R_a = 0 \Rightarrow R_{b,c,d} = 0$<br>

<br>$R_{b,c,d} = 1 \Rightarrow R_a = 1$<br>

<br>$R_{b,c,d} = 0 \Rightarrow R_a \in \{0, 1\}$ | $R_{b..d} \le R_a$ *(Implication)*<br>

<br>$R_a \cdot Card_{min} \le R_b + \dots + R_d \le Card_{max}$ *(Alternative)* |
| **Requires**<br>

<br>$R_a \xrightarrow{\text{requires}} R_b$ | Si une exigence est sélectionnée alors toutes les exigences requises doivent être sélectionnées :<br>

<br>$R_a = 1 \Rightarrow R_b = 1$<br>

<br>$R_b = 1 \Rightarrow R_a \in \{0, 1\}$<br>

<br>$R_a = 0 \Rightarrow R_b \in \{0, 1\}$<br>

<br>$R_b = 0 \Rightarrow R_a = 0$ | $R_a \le R_b$<br>

<br>*(Implication)* |
| **Mutex**<br>

<br>$R_a \xleftrightarrow{\text{mutex}} R_b$ | Si une exigence est sélectionnée alors toutes les exigences en exclusion mutuelle avec elle ne doivent pas être sélectionnées :<br>

<br>$R_a = 1 \Rightarrow R_b = 0$<br>

<br>$R_b = 1 \Rightarrow R_a = 0$<br>

<br>$R_b = 0 \Rightarrow R_a \in \{0, 1\}$<br>

<br>$R_a = 0 \Rightarrow R_b \in \{0, 1\}$ | $R_a + R_b \le 1$<br>

<br>*(Exclusion)* |

---

L'approche de modélisation ILP présentée dans la section précédente a été testée dans un projet Stago avec des résultats satisfaisants. L'expérience est rapportée dans la section suivante.

---

### 3.3 L'étude de cas (*The case study*)

Une fois les exigences utilisateurs élicitées, elles ont été appariées avec les exigences de la PL comme recommandé dans le processus d'appariement de RED-PL. La collection d'exigences résultante est un sous-ensemble du modèle d'exigences de la PL. Le processus d'appariement a révélé que les utilisateurs n'étaient décidés ni sur la technique de mesure ni sur la capacité de l'instrument à intégrer la séparation des constituants en interne. Des décisions devaient être prises pour générer la collection optimale d'exigences pour un produit complet. Le processus d'arbitrage présenté dans la section 3.2 a donc été utilisé pour résoudre ce problème.

Tout d'abord, le modèle d'exigences de la PL a été analysé et un modèle ILP a été développé comme défini dans la section 3.1. Toutes les contraintes ont été enregistrées dans une feuille de calcul Microsoft Excel, et analysées avec le solveur Microsoft Excel (**Fig. 4**).

Deux critères ont été utilisés pour guider l'arbitrage, à savoir le coût et le revenu. Le revenu a été évalué en interrogeant les commerciaux sur la valeur perçue des fonctionnalités implémentant les exigences. Les évaluations de coûts ont été faites par l'équipe d'ingénierie à qui il a été demandé de prendre en compte les coûts de développement et d'intégration, le besoin en ressources (matérielles et humaines), les coûts de gestion, les coûts de test, le coût de maintenance et les coûts d'installation. Ces évaluations sont une activité ordinaire des commerciaux et des ingénieurs, par exemple dans le cadre de l'analyse des risques lors de l'élaboration de la faisabilité du projet. Plusieurs méthodes peuvent être utilisées pour cela. Notre approche ne se focalise pas sur une méthode particulière car elle considère ces évaluations comme une donnée d'entrée.

Pour des raisons de confidentialité, le revenu et le coût sont définis dans la figure suivante sous forme de valeurs relatives plutôt que sous la forme de valeurs absolues réelles.

---

### SCHÉMA 4 : Figure 4

![Fig. 4. Screenshot of Stago ILP problem after solving]

#### Transcription textuelle du tableau et des paramètres Excel (Figure 4) :

**Tableau des exigences, coûts et revenus :**

| ID | Exigence | Cost (Coût) | Revenue (Revenu) |
| --- | --- | --- | --- |
| $R_1$ | Recuperate product | 31 | 27 |
| $R_2$ | Identify product | 4 | 10 |
| $R_3$ | Load product | 6 | 8 |
| $R_4$ | Separate constituents | 10 | 7 |
| $R_5$ | Centrifuge | 9 | 4 |
| $R_6$ | Microfilter | 10 | 3 |
| $R_7$ | Measure reaction | 25 | 29 |
| $R_8$ | Chronometric | 19 | 10 |
| $R_9$ | Photometric | 18 | 17 |
| $R_{10}$ | Immunologic | 8 | 8 |
| $R_{11}$ | Colorimetric | 4 | 4 |
| **Total** |  | **144** |  |

**Variables de décision et résultats de l'optimisation :**

* **Decision Variables (Variables de décision) [R1..R11]** : `[1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]`
*(Correspond à la sélection de R1, R2, R3, R7, R8, R9, R11)*.
* **Goal (Objectif - Revenu maximal)** : Total Revenue = **93**
* **Cost details (Détail des coûts - Coût minimal)** : Total Cost = **97**

**Fenêtre des paramètres du Solveur Excel (Solver Parameters) :**

* Cellule cible définie pour être maximisée (Revenu).
* Cellules variables : la plage binaire $[R_1 \dots R_{11}]$.
* Contraintes saisies :
* `Total cost <= 97`
* `R1 mandatory (= 1)`
* `R2 subfeature R1 (= 1)`
* `R3 subfeature R1 (= 1)`
* `R4 optional of R1`
* `R5 optional of R4`
* `R6 optional of R4`
* `R5, R6 alternatives`
* `R7 mandatory (= 1)`
* `R8 subfeature R7`
* `R9 subfeature R7`
* `R8, R9 alternatives`
* `R10 subfeature R9`
* `R11 subfeature R9`
* `R10, R11 alternatives`



#### Description et compréhension du schéma Figure 4 :

Cette capture d'écran montre l'implémentation concrète de l'arbitrage RED-PL sous forme d'un problème de programmation linéaire résolu par le Solveur d'Excel.

1. **Données d'entrée** : Chaque fonctionnalité est caractérisée par son coût technique et son revenu commercial estimé.
2. **Définition de l'objectif** : Le système cherche à maximiser le revenu global (`Maximal revenue = 93`).
3. **Résolution sous contraintes** : Sous la contrainte d'un coût maximal autorisé (fixé ici à 97), le solveur binaire active les exigences optimales (`R1, R2, R3, R7, R8, R9, R11` reçoivent la valeur `1`, les autres `0`).
4. **Interprétation fonctionnelle** : Le produit optimal dérivé conserve les fonctions de base obligatoires ainsi que les mesures chronométrique, photométrique et colorimétrique, mais abandonne le module optionnel de séparation des constituants (`R4, R5, R6`), permettant de respecter le budget imposé tout en maximisant la rentabilité commerciale.

---

Deux objectifs ont été considérés pour l'optimisation : soit minimiser le coût en considérant un revenu minimal, soit maximiser le revenu en tenant compte d'une limitation globale des coûts. Les équipes commerciales et d'ingénierie ont convenu de se concentrer sur le second objectif, qui est plus proche de leurs préoccupations quotidiennes. La collection d'exigences générée par le solveur en utilisant ces paramètres a été jugée réaliste dans le sens où les produits résultants correspondaient à des produits déjà développés chez Stago. De plus, le produit répondait bien aux besoins exprimés par les utilisateurs au début du projet et correspondait à des produits déjà identifiés comme étant à faible coût. Il a toutefois été difficile d'évaluer si le produit généré correspondait réellement à un produit absolument optimal ou non.

Certaines difficultés ont également été observées lors de l'application de la méthode. Tout d'abord, le processus d'appariement était difficile à gérer en raison d'un manque de précision dans la formulation des exigences des utilisateurs. La difficulté n'était pas seulement due à la terminologie, mais aussi à un décalage conceptuel entre les exigences des utilisateurs et les exigences de la PL (niveaux d'abstraction différents, vues différentes). En outre, la technique ILP semblait ne pas être passable à l'échelle (*scalable*) pour les grands systèmes, et elle est limitée aux requêtes d'optimisation. Nous pensons que cette approche peut être remplacée par une technique plus adéquate, flexible et passable à l'échelle telle que la Programmation par Contraintes (*Constraint Programming*). D'autres applications à d'autres projets industriels sont prévues pour améliorer la méthode et favoriser sa répétabilité.

---

## 4. Travaux connexes (*Related works*)

De nombreuses méthodes s'intéressant à la construction d'actifs de SPL sont disponibles dans la littérature [13] [14] [15] [16] [17] [18]. Les méthodologies de dérivation de produits sont au contraire plutôt rares [4] [19] [20]. De plus, alors que la dérivation affecte l'ensemble des artefacts de la ligne de produits, des exigences jusqu'au code, les questions de dérivation sont principalement abordées en termes de conception et d'implémentation [4] [6].

Au niveau de l'ingénierie des exigences, la manière de créer les bons actifs d'exigences de la PL et les dépendances entre eux pour développer les bons produits a été largement étudiée [7] [21] [22] [23] [24] [25], mais la compréhension du processus de dérivation lui-même a reçu peu d'attention.

Dans les approches existantes, la dérivation de l'architecture produit, du code ou des artefacts de test à partir des spécifications du produit et de la PL est effectuée en utilisant les techniques suivantes :

* **Transformation de modèles** : Les modèles statiques et dynamiques sont instanciés pour les produits à partir des modèles de PL, en utilisant un langage de transformation de modèles [4] [26] [27] [28].
* **Patrons de conception (*Design patterns*)** : Par exemple la méthode introduite par Jézéquel qui consiste à utiliser le patron 'Abstract Factory' comme interface pour créer des objets de chaque produit dans la ligne de produits [29] [30].
* **Delimitation de la variabilité (*Variability bounding*)** : Les approches génératives (ex. l'approche *Generative Programming* [19]) suggèrent une dérivation automatique par génération de code. Sélectionner les fonctionnalités produit désirées est suffisant pour permettre l'assemblage des composants réutilisables élémentaires de la SPL correspondants et générer le code de l'application. D'autres approches introduisent des techniques de programmation orientée aspect pour assembler les composants en tissant (*weaving*) les fonctionnalités [31] [32].

La plupart du temps, les méthodes de dérivation considèrent comme donnée d'entrée une collection d'exigences de PL sélectionnées à partir du modèle d'exigences de la SPL. Cependant, l'expérience industrielle suggère que le simple fait d'avoir les bons actifs ne suffit pas à faciliter leur sélection et leur assemblage. Ainsi, certains travaux ont tenté de proposer des directives pour sélectionner le bon ensemble d'actifs, mais ils restent réduits à des niveaux techniques.

Notamment, les actifs spécifiques nécessaires pourraient être spécifiés dans un plan de production (*production plan*) qui décrit comment les actifs de base sont utilisés pour développer des produits [33]. Hunt considère les composants logiciels et étudie les procédures d'organisation optimales pour faciliter leur recherche et leur sélection [34]. [35] discute de l'automatisation de la sélection de composants en utilisant des techniques d'intelligence artificielle. [3] [5] fournissent un cadre de terminologie et de concepts concernant la dérivation de produits ainsi qu'un processus générique de dérivation logicielle. Il est organisé en phases itératives afin de déterminer la configuration finale du produit dérivé. Une fois de plus, le processus de dérivation a par défaut comme entrée un sous-ensemble d'exigences qui proviennent des clients, de la législation, du matériel et de l'organisation de la famille de produits. Les détails sur la façon dont ces exigences sont agrégées ne sont pas fournis. [4] établit également un cadre de dérivation. Il indique que la dérivation des exigences produit se fait à travers un processus décisionnel, mais il n'inclut pas plus de détails sur ce processus.

Néanmoins, une étape nécessaire dans la dérivation de produit consiste à déterminer l'ensemble des exigences à utiliser afin de construire le produit particulier parmi tous les produits possibles de la ligne de produits. Cela nécessite une description des besoins des clients qui permette de les distinguer des autres dans la SPL. Cette description fournit un ensemble d'exigences produit. Quelqu'un doit ensuite trouver et sélectionner les actifs nécessaires pour répondre aux exigences produit. Comme présentés dans les approches existantes, c'est souvent le développeur du produit qui prend ces décisions au fur et à mesure que le produit est assemblé. Le rôle de l'utilisateur est délaissé et maltraité.

Alors que l'attention portée par le cadrage (*scoping*) développe des mécanismes gérant la dérivation technique, nous sommes intéressés par l'instruction de processus de dérivation d'exigences qui trouvent leur origine dans les besoins des utilisateurs, et impliquent les choix des utilisateurs lors de la prise de décisions ; ce qui n'est généralement pas disponible dans les approches générales de dérivation.

---

## 5. Conclusions et travaux futurs

Un ajout majeur aux approches de réutilisation existantes depuis les années 1990 est constitué par les lignes de produits logiciels, qui sont devenues la notion incontournable pour résoudre les problèmes de coût, de qualité et de délai de mise sur le marché associés au développement d'applications logicielles apparentées.

Au cours des dernières années, l'ingénierie du domaine a reçu une attention substantielle de la part de la communauté du génie logiciel. La plupart des recherches échouent cependant à fournir des processus de dérivation détaillés, notamment pour dériver des exigences, ce qui s'est limité à la sélection d'un sous-ensemble d'exigences.

L'idée derrière l'approche proposée est que l'utilisateur, la partie prenante principale à laquelle le produit final est destiné, doit être impliqué dans la spécification des exigences produit, de sorte que les efforts consacrés à la construction des exigences réutilisables dans l'ingénierie du domaine soient surpassés par les bénéfices tirés de la dérivation des produits individuels adéquats satisfaisant leur mission.

RED-PL comprend deux processus que sont le processus d'appariement (*matching*) et le processus d'arbitrage (*arbitration*). Le premier établit l'ensemble des exigences possibles qui répondent aux besoins des utilisateurs. Le second arbitre ces exigences afin de dériver un ensemble cohérent d'exigences qui soit optimal pour un ensemble défini de contraintes de l'utilisateur et de l'entreprise (ex. revenu, coût, ressources, temps, etc.).

Nous avons pensé ces processus (notamment le modèle mathématique) sur la base de modèles de fonctionnalités (*feature models*). Mais il est évident qu'ils peuvent être appliqués pour différents langages de modélisation de PL (Cas d'utilisation, buts, UML, aspects). Cela s'explique par le fait que ces types de dépendances représentent des concepts fondamentaux qui sont implémentés par tous les langages de variabilité existants. Seule la représentation visuelle est différente selon les constructeurs du langage (cas d'utilisation, classes, etc.) et les stéréotypes. En outre, la viabilité de l'approche a été testée sur des projets réels développant des automates d'analyse sanguine au sein de l'entreprise française Stago. Les résultats obtenus ont été vérifiés et appréciés.

Les recherches futures se concentreront sur le raffinement des processus de l'approche. Nous visons à définir des processus d'appariement et d'arbitrage d'exigences variables en corrélation avec l'architecture physique variable de la PL. Cela est particulièrement pertinent dans le contexte de Stago car l'entreprise produit des instruments où les exigences techniques impactent lourdement la décision sur les exigences fonctionnelles selon les coûts et revenus des technologies.

Nous avons l'intention ensuite d'implémenter un support d'outil qui s'interface avec les outils de modélisation existants et permette ces processus d'appariement et d'arbitrage.

De plus, la répétabilité de l'approche sera étudiée. L'objectif est de définir un processus systématique permettant de modéliser des PL et de dériver des produits adaptés aux différents contextes d'entreprises. Nous sommes confiants dans le fait que si la Programmation Linéaire en Nombres Entiers n'est pas passable à l'échelle pour les grands systèmes, elle peut être remplacée par une autre méthode d'Aide à la Décision Multicritère (MCDM) plus adéquate.

---

## Références bibliographiques

1. SEI Product Line Hall of Fame web page: `[http://www.sei.cmu.edu/productlines/plp_hof.html](http://www.sei.cmu.edu/productlines/plp_hof.html)`
2. Linden F.: *Software Product Families in Europe: The Esaps & Café Projects*. (2002)
3. Deelstra S., Sinnema M., Bosch J.: *Product derivation in software product families: a case study*. The Journal of Systems and Software (2004) 183-204
4. Haugen Ø., Møller-Pedersen B., Oldevik J., Solberg A.: *An MDA®-based framework for model-driven product derivation*. Software Engineering and Applications, USA (2004)
5. Sinnema M., Deelstra S., Nijhuis J., Bosch J.: *COVAMOF: A Framework for Modeling Variability in Software Product Families*. The 2nd Software Product Line Conference (2004)
6. Lee J., Kang K. C.: *A Feature-Oriented Approach to Developing Dynamically Reconfigurable Products in Product Line Engineering*. SPLC. (2006)
7. Halmans G., Pohl K.: *Communicating the variability of a software-product family to customers*. Proceedings of the Software and Systems Modeling, volume 2, Springer (2003)
8. Maiden N., Gizikis A., Robertson S.: *Provoking Creativity: Imagine What Your Requirements Could Be Like*. IEEE Software, Vol. 22, No. 5 (2004) 68-75
9. Michael G., Kang K. C.: *Issues in Requirements Elicitation*. Technical Report. (1992)
10. Diagnostica Stago Web page: `www.stago.fr`
11. Salinesi C., Etien A., Zoukar I.: *A Systematic Approach to Express IS Evolution Requirements Using Gap Modelling and Similarity Modelling Techniques*. CAiSE Conference, Springer Verlag, Riga, Latvia (2004)
12. van den Akker M., Brinkkemper S., Diepen G., Versendaal J.: *Flexible Release Planning Using Integer Linear Programming*. Proceedings of REFSQ (2005) 257-272
13. Gomaa H.: *Designing Software Product Lines with UML: From Use Cases to Pattern-based Software Architectures*. Addison Wesley Object Technology Series (2004)
14. Bayer J., Flege O., Knauber P., Laqua R., Muthig D., Schmid K., Widen T., DeBaud J.-M.: *Pulse: a methodology to develop software product lines*. In Proceedings of the SSR (1999)
15. Clements P., Northrop L. M.: *Software Product Lines: Practices and Patterns*. Addison Wesley Professional (2001)
16. Bosch J., Florijn G., Greefhorst D., Kuusela J., Obbink H., Pohl K.: *Variability Issues in Software Product Lines*. The International Workshop on Product Family Engineering (2001)
17. Dobrica L., Niemelä E.: *UML Notation Extensions for Product Line Architectures Modeling*. Australasian Workshop on Software and System Architectures, Australia (2004)
18. Robak S., Franczyk B., Politowicz K.: *Extending the UML for modelling variability for system families*. International Conference on Algorithmic Mathematics and Computer Science (2002) 295-308
19. Czarnecki K., Eisenecker U.W.: *Generative Programming: Methods, Tools, and Applications*. Addison Wesley (2000)
20. Sinnema M., Deelstra S., Hoekstra P.: *The COVAMOF Derivation Process*. Proceedings of the 9th International Conference on Software Reuse (2006)
21. Thompson J., Heimdahl M.: *Structuring Product Family Requirements for n-Dimensional and Hierarchical Product Lines*. Requirements Engineering Journal, vol-8, Issue 1 (2002)
22. Streitferdt D.: *Family-Oriented Requirements Engineering*. PhD Thesis, Technical University Ilmenau (2003)
23. Kang K., Lee K., Lee J.: *Concepts and Guidelines of Feature Modeling for Product Line Software Engineering*. Proceedings of the 7th International Conference on Software Reuse: Methods, Techniques, and Tools (2002) 62-77
24. Gibson J. P.: *Feature Requirements Models: Understanding Interactions*. In Feature Interactions, in Telecommunications IV, Montreal, Canada, IOS Press (1997)
25. Buhne S., Lauenroth K., Pohl K.: *Modelling requirements variability across product lines*. In 14th IEEE International Conference on Requirements Engineering (2005)
26. Perez Garcia J., A. Laguna M., Gonzalez-Carvajal Y. C., Gonzalez-Baixauli B.: *Requirements variability support through MDD and graph transformation*. International Workshop on Graph and Model Transformation, Tallinn, Estonia (2006) 171-183
27. Ziadi T.: *Manipulation de Lignes de Produits en UML*. PhD thesis, Université de Rennes 1, équipe IRISA-TRISKELL, directeur Jean-Marc Jézéquel (2004)
28. Ziadi T., Hélouët L., Jézéquel J-M.: *Towards a uml profile for software product Lines*. In the Fifth International Workshop on Product Family Engineering. Springer Verlag (2003)
29. Jézéquel J-M.: *Reifying configuration management for object-oriented software*. Proceedings of the 21th international conference on Software engineering (1998) 250-259
30. Jézéquel J-M.: *Reifying variants in configuration management*. ACM Transaction on Software Engineering and Methodology (1999) 294-305
31. Jansen A., Smedinga R., van Gurp J., Bosch J.: *First class feature abstractions for product derivation*. Special issue on Early Aspects: Aspect-oriented Requirements Engineering and Architecture Design, IEE Proceedings Software (2004) 197-207
32. Mezini M., Ostermann K.: *Variability Management with Feature Oriented Programming and Aspects*. Foundations of Software Engineering, ACM SIGSOFT (2004)
33. Chastek G., McGregor J. D.: *Guidelines for developing a product line production plan*. Software Engineering Institute, Technical Report CMU/SEI-2002-TR-006 (2002)
34. Hunt J.M.: *Organizing the asset base for product derivation*. In 10th SPLC (2006)
35. Asikainen T., Männistö T., Soininen T.: *Using a configurator for modelling and configuring software product lines based on feature models*. Software Variability Management for Product Derivation - Towards Tool Support at International Workshop of SPLC (2004)