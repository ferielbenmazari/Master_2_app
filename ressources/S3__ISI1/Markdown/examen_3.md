# Ingénierie des Exigences (Session 2014)

**Enseignant :** Camille Salinesi  
**Durée :** 1h30  
**Consignes :** Répondre sur l'énoncé. Sans document.  

---

## A. Questions de cours (10 points)

*Répondez par VRAI ou FAUX, justifiez si (et seulement si) vous répondez FAUX.*

1. Toute exigence doit être numérotée au moyen d'un identifiant unique. À la fois pour des raisons de traçabilité, mais aussi de partage, de gestion de configuration, et de classification.
2. Les exigences définies dans le modèle de Kano comme étant de type « exciter » sont des exigences non dites qui correspondent aux innovations et créent de la différentiation.
3. La démarche « bottom up » / « top down » permet de garantir la conformité des exigences avec l'architecture.
4. La phase d'intégration du composant développé peut être source de nouvelles exigences.
5. Les cas d'utilisation d'un modèle de cas d'utilisation correspondent à des buts alternatifs.
6. Le cadre tridimensionnel de l'IE de Klaus Pohl indique que le processus d'ingénierie des exigences progresse - entre autres - selon l'axe de la spécification. Cela indique que les exigences sont au début non spécifiées, puis de plus en plus formalisées, jusqu'à éventuellement des exigences très formelles.
7. Les exigences fonctionnelles peuvent s'affiner en exigences non fonctionnelles.
8. On peut chercher à vérifier les exigences en organisant des revues. Cela permettra d'identifier les erreurs communes telles que ambiguïté, incohérence, sur- et sous-spécification, etc.
9. Les gabarits d'exigences peuvent être utilisés afin de garantir qu'aucune information n'est oubliée lors de la spécification des exigences.
10. Le but du « triage » est de regrouper les exigences en trois paquets : les plus importantes, les peu importantes, et les autres.
11. Selon le Standard IEEE 830, la section « exigences spécifiques » d'un cahier des charges est composée de trois sous-parties qui traitent respectivement des exigences fonctionnelles, exigences non fonctionnelles, et exigences d'interface.
12. Un modèle global d'échange des exigences s'attachera à décrire non seulement les exigences et leurs attributs, mais aussi les dépendances qui les lient entre elles et avec d'autres artefacts (moyens de vérification, produit, compromis, condition, risque, justifications, sources, etc.).
13. Selon les dernières recherches, il est tout à fait possible que les projets dans lesquels les développeurs sont des utilisateurs réussissent. Pour que cela ait lieu, il faut un minimum de contraintes de budget et de délai, et il faut que l'architecture du système soit extensible.
14. Les techniques de priorisation « top 10 » et « $100\$ » sont deux techniques de vote cumulatif. L'unique différence est relative aux critères employés : dans le $100\$, c'est la valeur, alors que dans le top 10, c'est la priorité.
15. Il est parfaitement acceptable d'employer dans un projet des termes homonymes, dès l'instant que tout cela est clairement défini dans le glossaire de projet.
16. Il ne faut jamais que les exigences d'un même cahier des charges soient spécifiées à différents niveaux d'abstraction : cela génère de la complexité inutile.
17. La compréhensibilité est un critère de qualité des exigences. Cela signifie que les exigences doivent être concises, en évitant les phrases complexes avec des propositions relatives ou des subordonnées. Au besoin, on préfèrera découper une exigence trop complexe en plusieurs exigences unitaires reliées entre elles.
18. La technique de la matrice d'Eisenhower permet de trier les exigences en combinant les critères d'importance et d'urgence.
19. Dans le modèle de Kano, les exigences de type « must have » sont celles qui génèrent de l'insatisfaction lorsqu'elles ne sont pas mises en œuvre, et qui génèrent de la satisfaction lorsqu'elles le sont.
20. Les systèmes d'édition collaborative de documents tels que les wikis ou Google Drive, mais aussi certains outils dédiés d'Ingénierie des Exigences, sont une bonne manière de « rendre les documents de spécification d'exigences faciles à modifier ».

---

## B. Spécification d'exigences (5 points)

Les exigences ci-dessous ont été spécifiées pour un système de vente en ligne de matériels électriques. Les utilisateurs visés sont des électriciens professionnels qui commandent les matériels dont ils ont besoin pour un chantier. Pour chacune des exigences, identifiez la ou les erreurs qu'elle contient ; proposez une version correcte.

| Identifiant | Exigence originale |
| :--- | :--- |
| **R1** | Les caractéristiques du chantier sont les suivantes : type de bâtiment, utilisation, et nombre de pièces. |
| **R2** | Le système doit permettre de créer une commande, de la modifier et de la supprimer. |
| **R3** | Le système peut permettre de choisir le matériel selon l'un des critères suivants : marque du matériel, prix, disponibilité. |
| **R4** | Toutes les commandes seront enregistrées dans un datawarehouse afin de permettre au directeur commercial de la société de surveiller l'évolution des ventes et de réaliser des prévisions. |
| **R5** | Le système doit être facile à utiliser. |

---

## C. Priorisation (3 points)

Appliquez la méthode AHP à la matrice de priorité paires à paires ci-contre. Vous ne calculerez pas l'indice de cohérence.

| | Exi 1 | Exi 2 | Exi 3 | Exi 4 |
| :--- | :---: | :---: | :---: | :---: |
| **Exi 1** | $1$ | $5$ | $2$ | |
| **Exi 2** | | $1$ | | |
| **Exi 3** | $1/3$ | | $1$ | $3$ |
| **Exi 4** | $1/5$ | | | $1$ |

---

## D. Réflexion (2 Points)

Dans son blog, Joseph Aracic indique :

> « Considérons qu'un analyste système travaille sur la rédaction de la spécification de son système, en réponse aux besoins formulés par son client dans un cahier des charges, et qu'à ce moment-là il désire ajouter à sa spécification une assertion particulière.  
> 
> Soit : *« un débit minimum de 25 images par seconde sera proposé 7 jours sur 7 »*.  
> 
> Si la réponse à la question *« Ceci participe t-il à la définition de mon système ? »* est *« a priori oui »*, l'analyste système doit tout d'abord identifier (de manière unique) son assertion comme étant une exigence et lui donner un titre qui soit aussi (de préférence) un identifiant unique.  
> 
> Cette recherche de titre, si elle est difficile indique le flou sémantique associé à l'assertion et il est fortement recommandé de procéder à une reformulation.  
> 
> Ensuite, l'analyste système doit considérer la question suivante : *« Est ce que le responsable de la vérification de mon système (très souvent c'est de la responsabilité de celui qui spécifie ce système) sera en mesure de vérifier cela sur le système ? »* »

**Questions :**  
Que pensez-vous de cette approche d'identification des exigences ? Quelles erreurs permet-elle d'éviter ? Quelles techniques/outils préconisez-vous d'employer en complément ?