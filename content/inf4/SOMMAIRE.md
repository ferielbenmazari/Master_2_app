# Sommaire détaillé — INF4 · Ingénierie des lignes de produits

> Généré le 2026-11-20 à partir des chapitres (`content/inf4/chapters/`) : c'est le sommaire que l'app affiche (onglet « Sommaire »). Parties « n. », sous-parties « n.m », 3ᵉ niveau « n.m.k ». 13 chapitres. Les durées sont des estimations (≈ 180 mots par minute).

## Chapitre 1 — Variabilité et ligne de produits : les notions de base
*≈ 9 min · 20 quiz · 20 flashcards · 4 exercices*

- **1. Communalité, variabilité, dépendances**
  - 1.1 Les trois notions
  - 1.2 Méthode : décrire les trois en même temps
    - 1.2.1 Exemple corrigé : les gardes britanniques
  - 1.3 Transfert : la sandwicherie
- **2. Domaine et application : le framework PLE**
  - 2.1 Les deux ingénieries
  - 2.2 Le schéma : domaine / application, problème / solution
  - 2.3 Les trois activités essentielles du SEI
  - 2.4 Ligne de produits et périmètre
  - 2.5 Le retour de l’application vers le domaine
    - 2.5.1 Exemple corrigé : où se décide quoi ? (quiz 0)
- **3. Un projet VariaMos : où placer quoi (tutoriel 0)**
  - 3.1 La structure d’un projet
  - 3.2 Software ou System, et les gestes de l’éditeur
    - 3.2.1 Exemple corrigé : l’éditeur de texte et le robot
- **4. Six mécanismes de réutilisation**
  - 4.1 La liste et chaque mécanisme
  - 4.2 Ce que la ligne de produits apporte en plus
- **5. Contexte : pourquoi une ligne, ce qu’elle coûte**
  - 5.1 Du sur-mesure à la personnalisation de masse
  - 5.2 Bénéfices annoncés et exemples industriels
  - 5.3 La courbe d’investissement

## Chapitre 2 — Les principes des lignes de produits logiciels
*≈ 9 min · 13 quiz · 10 flashcards · 2 exercices*

- **1. La personnalisation de masse**
  - 1.1 Définition : la personnalisation de masse
  - 1.2 Le schéma de Böckle : « one product fits all » ou une gamme
  - 1.3 Le prix à payer pour l’entreprise
- **2. La plate-forme**
  - 2.1 Définition : la plate-forme
  - 2.2 Les chiffres du livre : +35 % contre −7 %
  - 2.3 Un autre exemple du prof : Fuji et Kodak
  - 2.4 Un terme sans définition commune
- **3. Ligne de produits = plate-forme + personnalisation de masse**
  - 3.1 Combiner une plate-forme commune et la personnalisation de masse
- **4. Et pour le logiciel : plate-forme logicielle et prérequis**
  - 4.1 Définitions : ligne de produits logiciels et plate-forme logicielle
  - 4.2 Les deux exigences du paradigme
  - 4.3 « Plate-forme » : le sens du livre
  - 4.4 Les prérequis
- **5. Produire une ligne : d’abord le commun, ensuite les différences**
  - 5.1 Définition : la variabilité
  - 5.2 Système unique ou ligne : créer d’abord la plate-forme
  - 5.3 La stratégie : le commun d’abord
  - 5.4 Variabilité et contraintes
  - 5.5 Deux conséquences : traçabilité et organisation
- **6. Coûts, bénéfices et motivations**
  - 6.1 Définition : le point mort
  - 6.2 Les coûts
  - 6.3 La qualité
  - 6.4 Le time to market
  - 6.5 Les autres motivations
- **7. Repère : du sur-mesure à la série (Ford)**
  - 7.1 Du sur-mesure à la série : Ford
  - 7.2 Le logiciel : individuel ou standard

## Chapitre 3 — Les feature models : lire, donner la sémantique, compter
*≈ 8 min · 20 quiz · 24 flashcards · 4 exercices*

- **1. La notation FODA complète**
  - 1.1 Feature, feature model, sémantique
  - 1.2 Le tableau de la notation
  - 1.3 Premier exemple : la voiture (FODA, 1990)
- **2. Méthode : donner la sémantique et compter les produits**
  - 2.1 Les étapes
    - 2.1.1 Échauffement : le modèle fil rouge, de 4 à 11 produits
  - 2.2 Exemple entièrement corrigé : l’exercice du prof (8192 → 46)
    - 2.2.1 Ce qui est toujours là, ce qui est libre
    - 2.2.2 Le décompte par cas
- **3. Raisonner juste sur un modèle : implications, groupes et fragments**
  - 3.1 Ce que chaque relation permet de conclure
  - 3.2 Méthode : compter les sélections permises d’un groupe
  - 3.3 Lire un fragment de modèle
  - 3.4 Attributs, features abstraites, cas ClothingStores
- **4. Représentation extensive ou intensive ; PLM et PM**
  - 4.1 La représentation extensive : matrice et breakdown structure
  - 4.2 Le problème de passage à l’échelle
  - 4.3 La représentation intensive : PLM (domaine) et PM (produit)
- **5. Les autres langages de modèles de ligne de produits**
  - 5.1 Les quatre langages du cours
  - 5.2 DOPLER en bref
  - 5.3 Les modèles par contraintes en bref
- **6. Dialectes et limites des feature models**
  - 6.1 Les dialectes
  - 6.2 Les limites : l’exemple du système de freinage
  - 6.3 La question de discussion du prof

## Chapitre 4 — Ingénierie des exigences de domaine et modèle OVM
*≈ 15 min · 15 quiz · 15 flashcards · 3 exercices*

- **1. L’OVM : points de variation, variants, dépendances**
  - 1.1 Définitions : OVM, point de variation, variant
  - 1.2 Les deux familles de dépendances et le dernier mot de la gestion de produit
  - 1.3 Méthode : construire un OVM à partir de plusieurs applications
- **2. Analyse de communalité : la matrice applications-exigences**
  - 2.1 Définition et matrice applications-exigences (tableau 10-1)
  - 2.2 Affiner : priorité (Kano) et liste de contrôle
- **3. Analyse de variabilité : où les applications divergent**
  - 3.1 Définition et outils de l’analyse de variabilité
  - 3.2 Exemples du livre (10-5 et 10-6)
- **4. Exemple complet : trois systèmes de sécurité domestique**
  - 4.1 Les trois applications et la communalité (Fig. 10-8)
  - 4.2 Points de variation, contrainte requires et documentation XML
- **5. Commun d’abord, variable ensuite**
  - 5.1 Partie commune, partie variable, évolution et sources (Fig. 10-4)
- **6. Le cadre : activités et dimensions**
- **7. Qui écrit les exigences d’une famille : les flux avec la gestion de produit**
  - 7.1 Définition et flux avec la gestion de produit
  - 7.2 Vers la conception de domaine et vers l’application

## Chapitre 5 — Écrire une exigence de ligne : le gabarit SECRET
*≈ 7 min · 13 quiz · 11 flashcards · 3 exercices*

- **1. Le gabarit SECRET : une exigence de ligne en 11 parties**
  - 1.1 Définition du gabarit SECRET
  - 1.2 Les 11 parties
  - 1.3 La forme d’une phrase et sa méthode d’écriture
    - 1.3.1 Exemple corrigé : FR1 et FR9
- **2. Étendue et priorité : deux axes à ne pas confondre**
  - 2.1 ALL, SOME, THOSE : l’étendue donne la variabilité
  - 2.2 shall, should, could, will : la priorité ne décide pas qui est concerné
  - 2.3 La condition (partie 1) et le sous-ensemble (partie 2)
  - 2.4 Exemple corrigé : « autosave » dans l’introduction et dans FR9
  - 2.5 Du gabarit au feature model
- **3. Écrire une exigence qui se vérifie**
  - 3.1 Types d’exigences dans VariaMos
  - 3.2 Fonctionnelle ou non ? Le test de la capacité
  - 3.3 Rendre une exigence de qualité vérifiable
    - 3.3.1 Exemple corrigé
  - 3.4 La partie 11 : « eventually »
- **4. Relier les exigences entre elles : dix relations**
  - 4.1 Les dix relations en cinq familles
  - 4.2 Contribution, Dependency et requires : trois questions différentes
    - 4.2.1 Exemple corrigé (quiz 1, question 6)
- **5. Du modèle d’exigences au document**
  - 5.1 Les propriétés d’une exigence
  - 5.2 Le SRS généré et la revue
  - 5.3 L’ontologie SCORE

## Chapitre 6 — Éliciter et spécifier les exigences d’une ligne : trois stratégies
*≈ 6 min · 13 quiz · 10 flashcards · 3 exercices*

- **1. Les trois stratégies en un coup d’œil**
  - 1.1 Pourquoi des stratégies propres aux lignes de produits
  - 1.2 Le tableau des trois stratégies
- **2. La stratégie dirigée par les exigences et le gabarit**
  - 2.1 Les cinq étapes
  - 2.2 Le gabarit de phrase (Mazo et al., 2020)
  - 2.3 La fiche d’exigence adaptée de l’IEEE 830
  - 2.4 Le piège du vocabulaire des documents
- **3. Méthode : construire le modèle de variabilité à partir d’exigences**
  - 3.1 Les étapes
  - 3.2 Exemple entièrement corrigé : les magasins d’électroménager (S6, p. 68-69)
    - 3.2.1 Des exigences aux features
    - 3.2.2 La solution du prof
    - 3.2.3 Pour aller plus loin : compter et discuter
  - 3.3 Autre exemple du cours : UNIX, de la documentation au modèle
- **4. La stratégie du produit de référence (bas / haut de gamme)**
  - 4.1 Les trois étapes
  - 4.2 Le déroulé produit par produit : UNIX
  - 4.3 La question du prof : l’influence du premier produit
- **5. La stratégie multi-points de vue**
  - 5.1 Les quatre étapes
  - 5.2 L’OVM comme langage pivot, et ses limites

## Chapitre 7 — Traduire un modèle en contraintes : générer et compter les produits
*≈ 6 min · 14 quiz · 13 flashcards · 2 exercices*

- **1. Les règles de traduction : feature model → contraintes**
  - 1.1 Le principe : une variable par feature, la racine à 1
  - 1.2 Le tableau des règles (et leur équivalent en ILP)
  - 1.3 Cardinalités individuelles et attributs
- **2. Méthode : traduire, générer et compter avec GNU Prolog**
  - 2.1 Les étapes
  - 2.2 Exemple entièrement corrigé : l’exercice F1…F12 (S7, p. 13 à 18)
    - 2.2.1 Le programme, relation par relation
    - 2.2.2 Générer, donner la sémantique, compter
    - 2.2.3 Le problème du modèle : F8 est morte
  - 2.3 Transfert : le Movement Control System en contraintes de haut niveau
- **3. Tutoriel 3 : analyser un modèle avec SWI-Prolog**
  - 3.1 La sémantique d’un modèle : ses affectations satisfaisantes
  - 3.2 Le programme du tutoriel, ligne à ligne
  - 3.3 Trois requêtes sur le modèle d’amorce
  - 3.4 Deux écritures de excludes
  - 3.5 Noyau et features variables
  - 3.6 Contraintes textuelles : CLIF
- **4. Pourquoi transformer un modèle, et comment**
  - 4.1 Pourquoi transformer un PLM
  - 4.2 La transformation de modèles et son cadre

## Chapitre 8 — Vérifier, diagnostiquer et corriger un modèle de ligne de produits
*≈ 8 min · 18 quiz · 18 flashcards · 3 exercices*

- **1. Ce qu’on vérifie : la typologie et les défauts**
  - 1.1 Vérifier un PLM
  - 1.2 La typologie des critères
  - 1.3 Les défauts et leur contrainte de vérification
- **2. Méthode : vérifier un PLM avec un solveur**
  - 2.1 Les étapes
  - 2.2 Exemple corrigé : « le modèle est-il vide ? a-t-il des features mortes ? » (S7, p. 49 à 57)
    - 2.2.1 Le modèle et son programme
    - 2.2.2 Le modèle évolué est vide
    - 2.2.3 Trouver les features mortes
- **3. Tutoriel 4 : vérifier avec des requêtes JSON (PLEIADES)**
  - 3.1 Pourquoi un langage de requêtes
  - 3.2 Le schéma d’une requête
  - 3.3 Quelle requête pour quel défaut
  - 3.4 Exemple corrigé : le modèle d’amorce (F4 et F5 mortes)
  - 3.5 Choisir le solveur
  - 3.6 Erreur de syntaxe ou modèle vide ?
- **4. Méthode : diagnostiquer et corriger**
  - 4.1 Diagnostiquer à la main : la chaîne de contraintes
  - 4.2 Les corrections essayées, avant et après
  - 4.3 Le MUS : effacer ou relâcher
  - 4.4 Exercice corrigé : pourquoi F5 est morte, et deux corrections
  - 4.5 Transfert : airbags latéraux et rétroviseurs (Renault)
- **5. La vérification de conformité**
  - 5.1 Définition et méthode
  - 5.2 Deux règles d’exemple
- **6. Pourquoi vérifier est difficile**
  - 6.1 Trois raisons
  - 6.2 Le quiz de complexité du prof

## Chapitre 9 — Configurer, générer et faire évoluer un produit
*≈ 4 min · 12 quiz · 10 flashcards · 3 exercices*

- **1. Configurer : trois tâches**
  - 1.1 Les trois tâches de configuration
  - 1.2 Configuration complète ou partielle
  - 1.3 Exemple corrigé : le modèle du tutoriel 5
  - 1.4 Deuxième exemple : compléter une demande TaskForge
- **2. Optimiser une configuration**
  - 2.1 Définir le coût, puis optimiser
    - 2.1.1 Exemple corrigé : le navigateur du tutoriel 5
  - 2.2 Les limites : l’outil ne remplace pas le jugement
  - 2.3 Le lien avec le tableur ILP du prof et RED-PL
- **3. Générer un produit et faire évoluer la ligne**
  - 3.1 Du modèle au produit : valider, puis générer
  - 3.2 Le contrôle de couverture
  - 3.3 L’effet d’une évolution sur le nombre de configurations

## Chapitre 10 — Exigences d’application : deltas, variants et catégories
*≈ 13 min · 15 quiz · 11 flashcards · 2 exercices*

- **1. Dériver les exigences d’une application**
  - 1.1 Le but : réutiliser au maximum
  - 1.2 Qui parle à qui ?
  - 1.3 Deux catégories d’applications
  - 1.4 Les flux du sous-processus (Fig. 15-2)
  - 1.5 La remontée vers le domaine
- **2. Trois activités, deux types d’exigences**
  - 2.1 Exigences de partie prenante et exigences d’application
  - 2.2 Trois issues pour une exigence de partie prenante
  - 2.3 Les trois activités essentielles
- **3. Évaluer un delta : ce que le client demande en plus**
  - 3.1 Définition : le delta d’exigences
  - 3.2 Mesurer un delta
  - 3.3 Les cas fréquents sur les dépendances
  - 3.4 Trois exemples du livre
  - 3.5 L’impact sur les artefacts d’exigences
- **4. Le coût d’un delta : catégories A à D et décision**
  - 4.1 L’impact sur l’architecture
  - 4.2 Les exemples du livre
  - 4.3 Les quatre options de la partie prenante
  - 4.4 Chercher un compromis : l’exemple 15-9
- **5. Communiquer la variabilité au client**
  - 5.1 Partir des points de variation
  - 5.2 Exemple 15-1
  - 5.3 Aller plus loin : les liens de traçabilité
  - 5.4 Le résultat : une classification des exigences
- **6. Documenter, et ce qui change par rapport à un système unique**
  - 6.1 Définition et contenu de la spécification des exigences d’application
  - 6.2 Pourquoi tracer
  - 6.3 Différences avec un système unique

## Chapitre 11 — RED-PL : dériver les exigences d'un produit
*≈ 11 min · 15 quiz · 18 flashcards · 4 exercices*

- **1. Pourquoi sélectionner ne suffit pas : six limites**
  - 1.1 Le constat : cocher ne suffit pas
  - 1.2 Les six limites de la sélection
  - 1.3 Ce qu’elles ont en commun
- **2. Le terrain : le modèle d’exigences de la ligne (cas Stago)**
  - 2.1 Repère : l’entreprise Stago
  - 2.2 Le modèle d’exigences : un feature model
  - 2.3 Exemple Stago : séparation et mutex
  - 2.4 Le problème des utilisateurs
- **3. Deux processus : matching et arbitrage**
  - 3.1 Définition : RED-PL
  - 3.2 De la sélection à la dérivation
  - 3.3 Une approche orientée utilisateur
  - 3.4 La capitalisation
- **4. Méthode : traiter les besoins d’un utilisateur au matching**
  - 4.1 Le matching : un processus itératif
  - 4.2 Similitude de surface et similitude profonde
  - 4.3 Repère : les métriques de similitude
- **5. L’arbitrage en ILP : cinq dépendances, cinq inégalités**
  - 5.1 Définition : la programmation linéaire en nombres entiers
  - 5.2 L’entrée de l’arbitrage : les poids
  - 5.3 Coûts, bénéfices et contraintes
  - 5.4 Le tableau : dépendances et inégalités
  - 5.5 Les cinq types de dépendances
  - 5.6 Méthode : traduire une dépendance en inégalité
- **6. Méthode : poser et lire un arbitrage (cas Stago)**
  - 6.1 Ce que le matching a révélé chez Stago
  - 6.2 Deux objectifs possibles et le résultat
  - 6.3 Le verdict
- **7. Limites et ouverture vers la programmation par contraintes**
  - 7.1 Les difficultés observées
  - 7.2 Repère : les travaux connexes
  - 7.3 Le lien avec la programmation par contraintes

## Chapitre 12 — Conception et réalisation d’une application
*≈ 10 min · 19 quiz · 20 flashcards · 4 exercices*

- **1. Du client au produit : les trois sous-processus**
  - 1.1 Trois sous-processus, une même question
- **2. Conception : spécialiser l'architecture de référence**
  - 2.1 Définitions : architecture d’application et architecture de référence
  - 2.2 Le rôle de l’architecte d’application
  - 2.3 Lier les variants
  - 2.4 Les variants propres à l’application
  - 2.5 Déterminer la configuration
  - 2.6 Le retour vers le domaine : l’application comme banc d’essai
- **3. Le coût d’un variant : catégories A à D, vues de la conception**
  - 3.1 Les quatre catégories, vues de la conception
  - 3.2 Les facteurs de coût
  - 3.3 Méthode : classer le coût d’un variant
- **4. Réalisation : configurer et assembler**
  - 4.1 Ce que fournit la réalisation
  - 4.2 La cohérence des paramètres
  - 4.3 Les composants spécifiques
  - 4.4 Construire l’application
  - 4.5 Méthode : configurer et assembler
- **5. Retrouver la variabilité dans un code existant (TP TaskForge)**
  - 5.1 Variabilité fixée à la construction
  - 5.2 Méthode : reconstruire un modèle à partir d’un code
  - 5.3 Exemple corrigé : le contrat TaskForge et sa matrice
- **6. Ce qui change par rapport à un système unique**
  - 6.1 Conception et réalisation : les différences

## Chapitre 13 — Tester une application sans tout retester
*≈ 7 min · 18 quiz · 18 flashcards · 4 exercices*

- **1. Tester une application sans tout retester**
  - 1.1 Tester sans tout retester : l’idée directrice
  - 1.2 La stratégie CRS : parties communes et variables
  - 1.3 Exemple du livre : trois variants d’authentification
  - 1.4 Retrouver les tests réutilisables : la traçabilité
  - 1.5 Méthode : réutiliser un test de domaine
- **2. Ce qu'un système unique ne teste pas : la liaison de la variabilité**
  - 2.1 Trois défauts de liaison
  - 2.2 Les deux tests propres à la variabilité
  - 2.3 Le test d’absence de variant
  - 2.4 Le test de dépendances d’application
  - 2.5 Méthode : chercher un défaut de liaison
- **3. Trois niveaux de test, quatre catégories d'exigences**
  - 3.1 Les trois niveaux de test
  - 3.2 Les quatre catégories d’exigences
  - 3.3 Méthode : choisir le test d’une exigence
- **4. Planifier, spécifier, exécuter**
  - 4.1 Les trois activités : planifier, spécifier, exécuter
  - 4.2 Différences avec un système unique
- **5. Tester le comportement ET le code produit (TP TaskForge)**
  - 5.1 Deux familles de vérifications
  - 5.2 Le manifeste ne prouve rien ; limites du générateur
  - 5.3 Lien avec les quatre catégories d’exigences

