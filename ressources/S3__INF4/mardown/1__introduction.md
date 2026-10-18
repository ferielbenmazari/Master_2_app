# Variabilité et Ingénierie des Lignes de Produits Logiciels (PLE)

**Auteurs :** Prof. Camille Salinesi, Camilo Correa Restrepo, Prof. Raul Mazo Pena.
**Institution :** Université Paris 1 Panthéon Sorbonne, Centre de Recherche en Informatique (CRI).

## 1. Introduction et Organisation

* **Objectif du cours :** Aider à intégrer l'ingénierie des lignes de produits (Product Line Engineering - PLE) dans les pratiques de développement et de recherche.


* **Domaines d'application :** Systèmes critiques, drones, armée, transport, etc..


* **Plan :** 1. Introduction, 2. Artisanat (Craft), 3. Ingénierie, 4. Réutilisation et lignes de produits, 5. Bénéfices de la PLE.



## 2. Qu'est-ce que la variabilité ?

Pour illustrer la variabilité, le document propose un jeu d'observation basé sur des gardes britanniques.

> 📊 **[Schéma] Jeu des Gardes Britanniques**
> **Description :** Deux dessins de gardes britanniques côte à côte. Ils portent le même uniforme rouge, le même pantalon noir et font le même mouvement de marche. Cependant, des options sous-jacentes sont listées : "taille du chapeau", "nez", "moustache", "bouton", "gants", "rayures", "ombre".
> **Compréhension du schéma :** Ce schéma sert de métaphore pour les produits d'une même ligne. Il permet de distinguer ce qui est commun à tous les produits et ce qui varie d'un produit à l'autre.
> 
> 

* **Points communs (Commonality) :** Les personnes et les choses ont des caractéristiques communes (ex: ce sont des gardes britanniques, ils ont une veste, un chapeau, deux yeux, la jambe droite levée).


* **Variabilité (Variability) :** Ils se distinguent par des caractéristiques variables (ex: taille du chapeau, type de moustache, couleur des rayures).


* **Dépendances (Dependencies) :** Les caractéristiques peuvent être liées (ex: un grand chapeau projette une grande ombre).



Pour approfondir, le document propose l'exemple d'un magasin de sandwichs.

> 📊 **[Schéma] Magasin de sandwichs (Declarative Sandwiches, Inc.)**
> **Description :** Un menu de composition de sandwichs avec des cases à cocher pour le type de pain, la viande, les légumes et les sauces.
> **Compréhension du schéma :** Il illustre "l'Espace du Problème" (analyser les types de sandwichs, identifier les points communs et les différences) et la "Conception" (les recettes et procédures pour chaque combinaison). Cela montre comment un système déclaratif gère une immense variété de produits finis à partir d'ingrédients de base.
> 
> 

## 3. De l'artisanat à l'ingénierie et la personnalisation de masse

Le document retrace l'évolution de la production :

* **L'artisanat (Craft) :** Outils primitifs taillés à la main, occupation spécialisée.


* **Les lignes de production :** Utilisées à Venise au 12ème siècle (chantiers navals avec rôles spécialisés), puis popularisées par la ligne de production de la Ford T (1908-1927).


* *Le problème des lignes de production classiques :* Elles n'ont pas la capacité de livrer des produits individualisés (sur-mesure) comme l'industrie du logiciel en a l'habitude.




* **L'ingénierie logicielle :** Née à la conférence de Garmisch en 1968 pour "industrialiser la production de logiciels". Dijkstra (1969) et Parnas (1976) ont introduit l'idée que les programmes devraient être conçus comme des "familles" partageant des propriétés communes étendues.



> 📊 **[Schéma] Personnalisation de masse et "Softwarisation"**
> **Description :** Un diagramme séparant "Problem Space" (Espace du Problème) et "Solution Space" (Espace de la Solution). Il montre un flux entre le "Domain Engineering" (Ingénierie du domaine), le "Product Engineering" (Ingénierie du produit) et l'"Adaptation Engineering".
> **Compréhension du schéma :** Le logiciel étant partout, il doit être produit en masse MAIS personnalisé. L'ingénierie du domaine crée les actifs de base réutilisables, et l'ingénierie du produit les assemble pour configurer un produit spécifique répondant à un besoin précis. Les systèmes de demain seront des systèmes cyber-physiques adaptatifs.
> 
> 

## 4. Les mécanismes de réutilisation (1960 - 2000)

Le cours détaille différentes méthodes historiques de réutilisation des logiciels.

1. Réutilisation par Duplication (Copy/Paste)

* **Schéma :** Des flux parallèles (Projet 1, Projet 2... Projet N) où les exigences, le design et le code sont simplement copiés/collés d'un projet à l'autre.


* **Avantages :** Simple, pas d'effets collatéraux.


* **Inconvénients :** Très difficile à faire évoluer, maintenance cauchemardesque, réutilisation purement opportuniste.



2. Réutilisation basée sur les Deltas ($\Delta$)

* **Schéma :** Un produit de référence sert de base (Baseline 1), puis des modifications ($\Delta$) sont appliquées pour créer les Baselines 2 et 3.


* **Avantages :** Efficace pour des modifications simples sur des bases stables.


* **Inconvénients :** Pas de gouvernance globale. Si on corrige un bug dans la base, il est difficile de le propager. Explosion de la complexité avec le nombre de variantes. (L'accident de la fusée Ariane 5 est cité comme exemple de réutilisation de code sans test approprié dans un nouveau contexte).



3. Gestion de Configuration

* **Schéma :** Un arbre de développement montrant un système divisé en modules, sous-modules, gérés par des fichiers (Makefiles) et des versions.


* **Bilan :** Utile pour un seul produit évolutif, mais gestion difficile de la compatibilité et des aspects transversaux pour toute une famille de produits.



4. Réutilisation basée sur les Composants

* **Schéma :** Modèle UML montrant un composant "Checkout" lié à un composant "CardProcessing", et une architecture de découverte de microservices.


* **Bilan :** Sépare bien les responsabilités (boîte noire), mais il n'y a pas de vision stratégique d'assemblage (les règles d'assemblage se perdent, pas de garantie sur les effets de bord).



**Conclusion sur les Lignes de Produits (PL) :** Contrairement aux méthodes précédentes, la ligne de produits offre une vue intégrée, conçoit explicitement pour la réutilisation, gère la qualité au niveau de la famille globale et prescrit comment assembler stratégiquement les composants.

## 5. Le Framework de l'Ingénierie des Lignes de Produits (PLE)

Le cours entre dans le cœur technique de la méthode.

> 📊 **[Schéma] Framework PLE (Problem Definition vs Problem Solution)**
> **Description :** Un vaste diagramme matriciel séparant le haut (Domain Engineering) du bas (Product Engineering), et la gauche (Problem Definition) de la droite (Problem Solution). Le processus central est le "Configuration Process". On y voit des composants génériques de voitures se transformer en voitures assemblées sur une chaîne.
> **Compréhension du schéma :** C'est le cœur de la PLE.
> 
> 
> 1. En haut (Domaine) : On analyse le marché, on modélise TOUTES les variations possibles (Variability Model) et on code les composants réutilisables (Components Model).
> 2. En bas (Produit) : Un client veut une application spécifique. On sélectionne ses exigences dans le modèle de variabilité (Configuration), ce qui dérive automatiquement l'architecture et rassemble les composants pour créer le produit fini.
> 
> 
> 
> 

Le SEI (Software Engineering Institute) résume cela en trois activités essentielles qui doivent interagir de manière itérative : Développement des actifs de base (Core Asset Development), Développement des produits (Product Development), et la Gestion (Management).

## 6. Bénéfices et Coûts (Pourquoi la PLE ?)

Les résultats observés dans l'industrie sont majeurs :

* **Productivité :** Améliorée jusqu'à 10x.


* **Qualité :** Augmentée jusqu'à 10x.


* **Coûts :** Diminués de 60%.


* **Temps de mise sur le marché (Time to market) :** Réduit de 98%.



> 📊 **[Schémas] Courbes d'investissement et de rentabilité**
> **Description :** Plusieurs graphiques sont montrés.
> 1. "Time to market" chute de manière exponentielle à mesure que le nombre de produits créés augmente.
> 
> 
> 2. "Investment curves" montre que le développement classique a un coût linéaire par produit. L'approche ligne de produit a un coût initial ("Big bang") beaucoup plus élevé (pour créer la base), mais le coût marginal par produit supplémentaire est presque plat. Les deux lignes se croisent au point de rentabilité ("Break even").
> **Compréhension des schémas :** L'ingénierie des lignes de produits demande un lourd investissement de départ pour concevoir l'architecture générique et les composants réutilisables. Cependant, dès qu'un certain nombre de produits (souvent 3 ou 4) sont développés, l'approche devient massivement rentable et infiniment plus rapide que de tout redévelopper à chaque fois.
> 
> 
> 
> 

**Exemples industriels cités :**

* **CelsiusTech :** Systèmes navals complexes. 70%+ de réutilisation, le ratio coût matériel/logiciel s'est inversé.


* **Hewlett Packard :** Imprimantes. Temps de développement réduit de 67%, avec 5x plus de produits sortis.


* **Baxter :** Secteur médical. Réduction massive des erreurs et gains financiers directs grâce à la vérification de l'ingénierie de domaine.



**Tableau des coûts vs bénéfices (Résumé) :**
La PLE oblige à un surcoût initial de conception, d'analyse des variations, de formation du personnel et de mise en place d'outils robustes. En échange, elle offre la réutilisation massive des exigences, de l'architecture, du code et des tests, permettant de cibler de nouveaux marchés en quelques mois au lieu de quelques années.
