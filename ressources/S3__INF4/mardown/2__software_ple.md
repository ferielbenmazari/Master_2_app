# Günter Böckle



## 1 Introduction à l'ingénierie des lignes de produits logiciels (Software Product Line Engineering)



Dans ce chapitre, vous apprendrez :

* Les principes clés de l'ingénierie des lignes de produits pour les produits de consommation mécaniques et électroniques.


* Les idées clés du paradigme de l'ingénierie des lignes de produits logiciels.


* Les motivations et les prérequis pour adapter ces principes à l'ingénierie logicielle.



### 1.1 Principes de l'ingénierie des lignes de produits



**Ligne de production**


La façon dont les biens sont produits a considérablement changé au fil du temps. Autrefois, les biens étaient fabriqués à la main pour des clients individuels. Peu à peu, le nombre de personnes pouvant se permettre d'acheter divers types de produits a augmenté. Dans le domaine de l'automobile, cela a conduit à l'invention de la chaîne de production par Ford, ce qui a permis une production pour un marché de masse beaucoup moins chère que la création de produits individuels sur une base artisanale. Cependant, la chaîne de production a réduit les possibilités de diversification.

**Logiciel individuel et standard**


Grosso modo, ces deux types de produits, individuels et produits en série, peuvent également être identifiés dans le domaine du logiciel : ils sont désignés comme logiciels individuels et logiciels standards. En général, chacun de ces types de produits a ses inconvénients. Les produits logiciels individuels sont plutôt chers, tandis que les produits logiciels standards manquent d'une diversification suffisante.

#### 1.1.1 Personnalisation de masse (Mass Customisation)



**Produits individualisés**


Les clients se sont contentés de produits de masse standardisés pendant un certain temps - mais tout le monde ne veut pas le même type de voiture pour n'importe quel usage. Certaines voitures sont utilisées pour voyager par une seule personne, d'autres par de grandes familles. Certaines voitures sont utilisées par des personnes vivant en ville, d'autres principalement à la campagne. Les gens veulent avoir une autre voiture ou une meilleure que celle de leurs voisins. Ainsi, l'industrie a été confrontée à une demande croissante de produits individualisés. Ce fut le début de la personnalisation de masse, ce qui signifiait prendre en compte les exigences des clients et leur donner ce qu'ils voulaient (voir Fig. 1-1).

Nous utilisons la définition suivante de la personnalisation de masse :
**Définition 1-1 : Personnalisation de masse**
La personnalisation de masse est la production à grande échelle de biens adaptés aux besoins individuels des clients.

**Exemple 1-1 : Personnalisation de masse dans la construction automobile [Davis 1987]**


Les quatre voitures au bas de la Fig. 1-1 sont un exemple de personnalisation de masse : différentes voitures qui répondent aux souhaits individuels des clients, chacune produite en grand nombre.

**Schéma : Fig. 1-1 : Produit unique pour tous vs. produits individuels**


*Ce que je comprends du schéma :* Le schéma illustre le contraste entre une approche classique et une approche par famille de produits.

* En haut, on voit un seul modèle de voiture (Modèle T, noire) pour tout le monde ("one product fits all"), ce qui face à des exigences divergentes ("diverging requirements" avec des flèches qui s'écartent) entraîne une baisse des ventes (graphique avec la ligne "sales" qui descend).


* En bas, on voit une variété de voitures (une petite, un pick-up, une avec des fleurs, une avec une remorque) construites via un "développement rapide par architecture de famille" ("fast development by family architecture"). Cette personnalisation répond aux attentes et entraîne une augmentation des ventes (graphique avec la ligne "sales" qui monte).



**Pas "un seul produit pour tous"**


Pour le client, la personnalisation de masse signifie la possibilité d'avoir un produit individualisé. Pour l'entreprise, la personnalisation de masse signifie des investissements technologiques plus importants, ce qui entraîne des prix plus élevés pour les produits individualisés et/ou des marges bénéficiaires plus faibles pour l'entreprise. Les deux effets sont indésirables. Ainsi, de nombreuses entreprises, en particulier dans l'industrie automobile, ont commencé à introduire des plates-formes communes pour leurs différents types de voitures en planifiant à l'avance quelles pièces seront utilisées dans différents types de voitures.

#### 1.1.2 Plates-formes



À l'origine, une plate-forme automobile ne se composait que de panneaux de plancher, d'un système de suspension et de bas de caisse. Plus tard, d'autres pièces ont été ajoutées à la plate-forme. La plate-forme a fourni une structure pour les composants majeurs déterminant la taille de la carrosserie ainsi que la taille et le type de moteur et de transmission. Les pièces composant la plate-forme étaient généralement le sous-système le plus cher en termes de coûts de conception et de préparation à la fabrication. L'utilisation de la plate-forme pour différents types de voitures a généralement conduit à une réduction des coûts de production pour un type de voiture particulier.

**Plate-forme : 35% de croissance des ventes**


L'approche par plate-forme a permis aux constructeurs automobiles d'offrir une plus grande variété de produits et de réduire les coûts en même temps. Le résultat a été que sur des périodes de trois ans, les entreprises utilisant la meilleure stratégie de plate-forme ont augmenté leurs ventes de 35%, tandis que celles qui partaient de zéro pour chaque nouvelle série de voitures ont subi une perte de ventes de 7%. Le même schéma a pu être observé dans l'industrie de l'appareil photo et bien d'autres.

**Exemple 1-2 : Du monde de la photographie**


En 1987, Fuji a sorti le Quicksnap, le premier appareil photo jetable. Cela a surpris Kodak, qui n'avait aucun produit sur un marché qui a ensuite augmenté de 50% par an. Cependant, Kodak a regagné des parts de marché et en 1994, il avait conquis 70% du marché américain. Comment Kodak a-t-il réussi ? D'abord, une série de modèles d'appareils photo clairement distinguables a été construite sur une plate-forme commune. Entre avril 1989 et juillet 1990, Kodak a reconstruit son modèle standard et créé trois modèles supplémentaires, tous avec des composants communs et le même processus de fabrication. Ainsi, Kodak a pu développer les appareils plus rapidement et à moindre coût.

**Exemple 1-3 : Notion de plate-forme dans les fournitures de bureau**


Les notes "Post-It" de 3M sont considérées comme une plate-forme à partir de laquelle de nombreux produits individuels ont été dérivés. Par exemple, des "Post-it" avec un logo d'entreprise, ou des marque-pages.

**Définition 1-2 : Plate-forme**


Une plate-forme est toute base de technologies sur laquelle d'autres technologies ou processus sont construits.

Le terme plate-forme est utilisé dans divers contextes. Une définition commune n'existe pas. Pour ce livre, nous utilisons la définition donnée dans la Définition 1-2, qui englobe toutes sortes d'artefacts réutilisables.

#### 1.1.3 Combiner le développement basé sur une plate-forme et la personnalisation de masse



La combinaison de la personnalisation de masse et d'une plate-forme commune nous permet de réutiliser une base de technologie commune et de sortir des produits en accord étroit avec les souhaits des clients. La combinaison systématique de ces deux éléments pour le développement de systèmes et de produits logiciels est le point central de ce livre, que nous appelons ingénierie des lignes de produits logiciels.

### 1.2 Ingénierie de produits personnalisés



#### 1.2.1 Création de la plate-forme



Dans l'ingénierie d'un système unique, les produits sont considérés comme des éléments indépendants. Développer quatre types de voitures par l'ingénierie des lignes de produits nécessite la création d'une plate-forme qui convient à toutes. Cette plate-forme comprend toutes les pièces communes (par exemple, une boîte de vitesses applicable à toutes les voitures) et détermine les spécificités qui distinguent les produits. En bref, créer la plate-forme implique de se préparer à la personnalisation de masse.

**Modularité en premier, différences ensuite**


La stratégie consiste d'abord à se concentrer sur ce qui est commun à tous les produits, puis sur ce qui est différent. Dans un premier temps, des artefacts sont fournis qui peuvent être réutilisés pour tous les produits. La flexibilité intégrée permet de réutiliser ces artefacts dans différentes applications.

#### 1.2.2 Introduction de la flexibilité



Pour faciliter la personnalisation de masse, les artefacts utilisés doivent être suffisamment adaptables pour s'intégrer dans les différents systèmes. Cela signifie que tout au long du processus, nous devons identifier où les produits diffèrent en termes de fonctionnalités, d'exigences ou d'architecture.

**Variabilité**


Différentes voitures d'une même ligne peuvent avoir des essuie-glaces différents. Nous concevons les voitures de manière à permettre une approche commune pour supporter ces différents moteurs. Cette flexibilité s'accompagne de contraintes (ex: pas de lave-glace arrière sur un cabriolet quand le toit est ouvert). Cette flexibilité est appelée "variabilité" dans le contexte des lignes de produits logiciels.

**Partager des plates-formes entre des lignes de produits**


Autrefois, la relation entre une plate-forme et une ligne de produits était simple. Mais rapidement, les plates-formes ont été partagées entre différentes lignes de produits. Il est donc devenu nécessaire de gérer soigneusement les informations de traçabilité entre une plate-forme et les produits qui en dérivent.

#### 1.2.3 Réorganisation de l'entreprise



Le passage à une approche par plate-forme a de profondes conséquences. Les produits ne peuvent plus être traités comme indépendants, ce qui doit se refléter dans la structure organisationnelle (ex: créer une unité responsable de la plate-forme). Cela conduit à la standardisation des procédures, des flux de travail et des technologies.

### 1.3 Motivations pour l'ingénierie des lignes de produits



#### 1.3.1 Réduction des coûts de développement



Une raison essentielle pour introduire l'ingénierie des lignes de produits est la réduction des coûts. L'entreprise doit faire un investissement initial pour créer la plate-forme, mais cela réduit ensuite les coûts par produit en réutilisant les artefacts.

**Schéma : Fig. 1-2 : Coûts de développement de n systèmes en tant que systèmes uniques par rapport à l'ingénierie de lignes de produits**


*Ce que je comprends du schéma :* Ce graphique montre un repère avec le nombre de systèmes différents en abscisse et les coûts cumulés en ordonnée.

* La ligne continue représente les systèmes uniques ("Single Systems") : elle part de zéro et monte rapidement de manière linéaire.


* La ligne pointillée représente la famille de systèmes ("System Family") : elle commence plus haut en raison de l'investissement initial ("Up-Front Investment") mais sa pente est plus faible.


* Les deux lignes se croisent au "Point mort" ("Break-Even Point"), qui se situe à environ 3 systèmes pour l'ingénierie logicielle. Après ce point, le coût par système devient inférieur pour l'approche par famille.



#### 1.3.2 Amélioration de la qualité



Les artefacts de la plate-forme sont testés dans de nombreux produits, ce qui augmente considérablement les chances de détecter les défauts et de les corriger, augmentant ainsi la qualité de tous les produits.

#### 1.3.3 Réduction du délai de mise sur le marché (Time to Market)



Le délai de mise sur le marché est initialement plus élevé, car les artefacts communs doivent d'abord être construits. Cependant, une fois cet obstacle franchi, le délai est considérablement raccourci grâce à la réutilisation.

**Schéma : Fig. 1-3 : Délai de mise sur le marché avec et sans ingénierie de lignes de produits**


*Ce que je comprends du schéma :* Ce graphique montre le temps de mise sur le marché ("Time to Market") en fonction du nombre de systèmes différents.

* Pour les systèmes uniques (ligne continue), le temps reste constant pour chaque nouveau produit.


* Pour la famille de systèmes (ligne pointillée), le temps est très élevé au début ("Time for Building Common Artefacts"), puis il chute de manière exponentielle en dessous de la ligne continue, signifiant des cycles de développement beaucoup plus courts grâce à la réutilisation.



#### 1.3.4 Motivations supplémentaires



* **Réduction de l'effort de maintenance :** Les corrections apportées à la plate-forme se propagent à tous les produits.


* **Gestion de l'évolution :** L'ajout d'artefacts à la plate-forme permet une évolution organisée de toute la gamme.


* **Gestion de la complexité :** La complexité croissante (illustrée par Windows NT avec 1,8 million de lignes de code en 1991, contre 45 millions pour Windows XP) est réduite par la structure de la plate-forme et la réutilisation, particulièrement crucial avec la migration matérielle vers logicielle.


* **Amélioration de l'estimation des coûts :** La plate-forme fournit une base solide pour estimer les coûts de production.


* **Avantages pour les clients :** Les clients obtiennent des produits adaptés, de meilleure qualité, à un prix raisonnable, avec une ergonomie et une prise en main ("look and feel") communes.



### 1.4 Ingénierie des lignes de produits logiciels



Le paysage a changé : la quantité de logiciels embarqués augmente, et la quantité de variabilité augmente encore plus vite.

**Définition 1-3 : Ingénierie des lignes de produits logiciels**


L'ingénierie des lignes de produits logiciels est un paradigme permettant de développer des applications logicielles (systèmes à forte composante logicielle et produits logiciels) en utilisant des plates-formes et la personnalisation de masse.

* **Variabilité gérée :** Il faut modéliser de manière commune les points communs et les différences.


* **Limiter les adaptations :** Il faut restreindre la variation à des endroits précis pour qu'elle reste gérable et ne corrompe pas la structure du logiciel.



#### 1.4.2 Plate-forme logicielle



Dans l'industrie, le mot plate-forme désigne souvent le matériel ou l'OS (ex: Symbian). Dans ce livre, la définition est différente :
**Définition 1-4 : Plate-forme logicielle**
Une plate-forme logicielle est un ensemble de sous-systèmes logiciels et d'interfaces qui forment une structure commune à partir de laquelle un ensemble de produits dérivés peut être développé et produit efficacement.

#### 1.4.3 Prérequis



* **Technologies habilitantes :** La programmation orientée objet, la technologie des composants et les techniques de liaison tardive (late-binding) permettent l'encapsulation et la flexibilité. Le middleware et la gestion de configuration sont également cruciaux.


* **Maturité des processus :** Des processus comme le CMMI, une bonne ingénierie des exigences et l'utilisation de techniques de modélisation (comme UML) sont nécessaires pour structurer le développement.


* **Caractéristiques du domaine et expertise :** Une connaissance approfondie du domaine (pour définir correctement les abstractions) et une stabilité du marché sont indispensables pour que l'investissement soit rentable.
  