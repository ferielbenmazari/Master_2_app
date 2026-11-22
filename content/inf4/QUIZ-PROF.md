# INF4 — Quiz et tutoriels du prof : ce qu'il faut savoir faire, corrigés proposés

> **Statut : brouillon de travail du 2026-11-20, complété le 2026-11-22, à valider.** Source : `ressources/S3__INF4/epi/` (tutoriels T0 à T5, annexe SECRET, `9__applications.md`, quiz 0 (deux versions) à 5, archive et pages TaskForge, QCM d'auto-évaluation T1 à T3).
> - Les quiz du prof **n'ont aucun corrigé** dans les fichiers. Chaque réponse ci-dessous est **déduite** du tutoriel, du cours ou de la logique, et marquée « proposée ». Rien n'est officiel.
> - **quiz3, quiz4 et quiz5** ont été déposés le 2026-11-22 (corrigés proposés § 4.5 à 4.7) ; le quiz 0 a une **version 2** (§ 4.4) ; les QCM d'auto-évaluation TaskForge sont au § 4.8. Tous sont dans l'app (`content/inf4/exams/`), avec une raison par proposition et des renvois au cours.
> - Les questions et rendus de l'intranet ne sont pas dans les fichiers : à coller ici.
> - Les comptages ont été **vérifiés par énumération** (script maison, aucun code de l'archive n'a été exécuté).

## 1. Ce que dit le prof sur l'examen (`9__applications.md`)

- « The final exam will cover **all lecture, all tutorials and all recommended readings**. » Les tutoriels VariaMos font donc partie du programme.
- Les quiz portent sur « the tutorial, the lectures and the recommended readings ». Ils sont faits pour s'auto-tester, 3 essais, et l'examen reprendra probablement le même style.

## 2. Ce que les quiz testent : sept savoir-faire

| # | Savoir-faire | Exemples dans les quiz | Où l'apprendre |
|---|---|---|---|
| 1 | **Raisonner sur les implications** : A requires B n'implique ni « B ⇒ A » ni « ¬A ⇒ ¬B » ; transitivité ; excludes est symétrique et n'oblige pas à tout exclure | Q0-6, Q2-2, Q2-6 | chapitre « Les feature models » |
| 2 | **Compter les sélections d'un groupe** `[m..n]` parmi k enfants : somme des C(k,i) pour i de m à n ; `[1..k]` donne 2ᵏ − 1 | Q2-5 (6), Q2-9 (15) | idem + « Traduire un modèle en contraintes » |
| 3 | **Lire un fragment de modèle** : enfant obligatoire, parent optionnel (omettre le parent omet tout le sous-arbre), enfant ⇒ parent | Q2-1, Q2-10, Q2-11, Q2-12 | idem |
| 4 | **Distinguer le domaine et l'application** : le choix d'un client est une sélection (ingénierie d'application), pas un changement du périmètre de la famille ; retour d'une application vers le domaine ; copier-coller ≠ ligne de produits | Q0-1 à Q0-5, Q0-9 à Q0-12 | chapitres « Variabilité et ligne de produits » et « Exigences d'application » |
| 5 | **Lire et écrire une exigence de ligne** : ALL / SOME / THOSE, SHALL / SHOULD / COULD, condition, « eventually » (RELAX), vague ou mesurable | Q1-2 à Q1-5, Q1-9, Q1-11, Q1-12 | nouveau chapitre « Gabarit SECRET » |
| 6 | **Prudence épistémique** : ce qu'on observe (deux produits qui ont Analytics) ne prouve pas l'intention de la famille ; une phrase ambiguë se clarifie avec les parties prenantes, on ne la « choisit » pas | Q0-9, Q1-9, Q1-10 | idem |
| 7 | **Faits du tutoriel** : structure d'un projet VariaMos, types d'éléments, noms exacts (Includes, Bundle Range, Constraint, Domain Requirements - AC, Contribution…) | Q0-7, Q0-8, Q1-6 à Q1-8, Q2-7, Q2-8 | fiches courtes dans les chapitres concernés |

**Technique de réponse** (format « Select all correct statements », parfois notées sur 2) : traiter chaque proposition **séparément** ; chercher d'abord les mots absolus (« automatically », « necessarily », « must… every », « proves », « only ») : ils rendent presque toujours la proposition fausse ; une proposition qui dit « peut », « doit être évalué », « n'établit pas à elle seule » est souvent vraie.

## 3. Carte tutoriel ↔ quiz ↔ chapitre de l'app

| Tutoriel | Sujet | Quiz | Chapitre d'accueil (proposé) |
|---|---|---|---|
| T0 | Projets, lignes de produits, applications, adaptations dans VariaMos | quiz0 (12 q.) | « Variabilité et ligne de produits » (§ domaine / application / périmètre) + fiche VariaMos |
| T1 + annexe 1 | Exigences de domaine, gabarit SECRET, relations entre exigences, SRS | quiz1 (12 q.) | **nouveau** « Écrire une exigence de ligne : le gabarit SECRET » |
| T2 | Modèle de variabilité (feature model avec attributs) | quiz2 (12 q.) | « Les feature models » |
| T3 | Génération de code (SWI-Prolog), analyse par solveur | quiz3 (12 q.) | « Traduire un modèle en contraintes » |
| T4 | Vérification automatique (PLEIADES, requêtes JSON) | quiz4 (12 q.) | « Vérifier, diagnostiquer et corriger » |
| T5 | Configuration automatique, optimisation | quiz5 (12 q.) | **nouveau** « Configurer automatiquement un produit » |

## 4. Corrigés proposés des quiz

Légende : ✔ vraie · ✘ fausse. « T0 §1.2 » = Tutoriel 0, section 1.2.

### 4.1 quiz0 (Tutoriel 0 + cours)

| Q | Réponse | Pourquoi |
|---|---|---|
| 1 | **d, e** | L'ingénierie d'application relie les besoins d'un produit à la variabilité de la famille (d) et réalise l'application avec les actifs du domaine (e). (a) elle élicite bien les exigences du client ; (b) elle réutilise ; (c) c'est l'ingénierie de domaine. |
| 2 | **b, c, e** | On construit pour la réutilisation des tests, des exigences avec variabilité, une architecture de référence. (a) et (d) : faux, ce sont des actifs de famille, pas seulement un binaire ou un produit. |
| 3 | **a, e** | Un produit qui viole une exigence commune oblige à choisir : réviser le périmètre ou la variabilité, ou laisser le produit hors de la famille (a). Le périmètre détermine ce qui est commun (e). (b) rien n'est révisé « automatiquement » ; (c) l'exigence était correcte pour l'ancien périmètre ; (d) un produit qui ne respecte pas le commun ne s’intègre pas sans revoir les hypothèses de la famille. |
| 4 | **a, b, e** | Retour application → domaine par une demande de changement (a) ; une solution propre au produit peut rester spécifique (b) ; la promouvoir peut exiger de la refaire pour la réutilisation (e). (c) rien ne la rend obligatoire ; (d) le retour d'information n'abolit pas la distinction. |
| 5 | **b, c, e** | La copie est une forme de réutilisation (« copy & own »), mais elle ne suffit pas à faire une ligne de produits (e) ; chaque copie évolue seule, donc propager un correctif est plus dur (c) ; des actifs partagés gouvernés et une variabilité explicite rapprochent de la PLE (b). (a) le nombre de dépôts ne décide pas ; (d) un code initial identique ne garantit aucune évolution coordonnée. |
| 6 | **c, e** | A ⇒ B : choisir A sans B viole la relation (c). `excludes` interdit la sélection conjointe, et c'est **symétrique** (e). (a) ¬A ne dit rien sur B ; (b) c'est la réciproque ; (d) A et B peuvent être **tous deux absents** : seul le couple (1,1) est interdit. |
| 7 | **b** | T0 §1.2 : la différence entre Software et System porte « mainly on the type of templates used to specify the requirements ». |
| 8 | **c, d** | T0 §2.2.1 : glisser un élément de la palette ; §2.2.3 : clic droit puis Properties. Les autres associent une action de menu projet à un effet sans rapport. |
| 9 | **c, d, e** | Optionnel dans le domaine : un produit sans Analytics reste valide s'il respecte les autres contraintes (c). Deux observations n'établissent pas l'intention de la famille (d) ; on évalue le périmètre et les besoins avant de modifier le domaine (e). (a) les sélections d'une application ne modifient pas le modèle de domaine ; (b) apparaître dans deux produits ne rend pas une feature obligatoire. |
| 10 | **b, c, d** | Deux produits d'une même famille = deux **applications** sous la ligne « Text editors » (b, d) ; les modèles réutilisables vont sous Domain Engineering (c). (a) une *adaptation* est un contexte d'un même système, pas un produit (T0 §2.1.6) ; (e) une option n’est pas une ligne de produits : elle reste un choix dans la même famille. |
| 11 | **a, c, d** | Supprimer PDFExport pour configurer Alpha confond sélection de produit et périmètre de famille (a) ; la décision d'Alpha relève de l'application Alpha (c) ; la famille garde la variabilité tant que les deux produits restent dans le périmètre (d). (b) créer un nœud d'application ne configure rien ; (e) le besoin de Beta ne rend pas PDFExport obligatoire pour tous : c’est une sélection pour Beta. |
| 12 | **c, d** | T0 §2.1.6 et §2.1.9 : Beach et Street sont des espaces d'adaptation sous l'application robot (c), avec des modèles propres (d). (a) un terrain différent ne crée pas une ligne : c’est un contexte du même produit ; (b) et (e) : la création des espaces ne définit ni politique de transition ni correction de la détection du contexte. |

### 4.2 quiz1 (Tutoriel 1 + annexe SECRET)

| Q | Réponse | Pourquoi |
|---|---|---|
| 1 | **a** | « The editor shall provide the user with the ability to open a file » : capacité fonctionnelle. Les autres sont des contraintes : taille, utilisabilité, délai, contraste. |
| 2 | **c, e** | « All systems of the product line shall… » : exigence **commune** à toute la famille dans le périmètre. (a), (b), (d) ajoutent des conditions que la phrase ne contient pas. |
| 3 | **a, d** | « When a user requests export » est la **condition** (partie 1 du gabarit) ; « those systems that include Export » **délimite le sous-ensemble** de produits concernés. (b) shall n'impose pas d'inclure Export ; (c) la demande d’export ne crée pas la feature ; (e) un produit sans Export n’est pas visé par l’exigence, il ne la viole donc pas. |
| 4 | **b, c, d** | *Eventually* = un jour, sans borne : aucun délai maximal (b) ; s'il faut borner la perte de données, convenir d'un critère mesurable (c) ; une observation finie sans sauvegarde ne réfute pas « eventually » (d). (a) « jamais » est contraire à eventually ; (e) « dans les cinq secondes » ajoute une borne que « eventually » n’a pas. |
| 5 | **a, c** | Rendre « user-friendly » objectif : définir la population et des tâches représentatives (a), un seuil mesurable dans des conditions de test fixées (c). (b), (d), (e) ne changent pas le contenu. |
| 6 | **c, d** | Annexe 1 : la relation **Contribution** exprime que la valeur de A n'est réalisée que si B existe, alors que A peut être implémentée sans B. On documente de quoi dépend le bénéfice (c, d). (a), (b), (e) : mauvaise relation ou conclusion interdite par l'énoncé. |
| 7 | **a** | Le modèle « Domain Requirements - AC » sous Domain Engineering (T1 §3.1). |
| 8 | **d** | T1 §3.4 : « other non-functional requirement », type **Constraint** (CR3, 100 MB). |
| 9 | **a, b, c** | La phrase FR9 (« Those editors that have the autosave feature shall autosave… eventually ») ne force pas chaque éditeur à inclure autosave (c) ; si autosave doit être commun, il faut le dire (a) et clarifier (b). (d) une phrase plus récente ne prouve pas l'accord ; (e) les deux ne disent pas la même chose. |
| 10 | **b, c** | Des champs vides sont à compléter (b) ; un conflit doit être traité avec les parties prenantes (c). (a), (d) : titres de sections et génération Word ne prouvent ni complétude ni cohérence ; (e) cacher un conflit est une erreur. |
| 11 | **a, b, e** | Le critère introduit des seuils observables (e) ; protocole U et population P doivent être définis (b) ; les parties prenantes valident que ces mesures traduisent bien le besoin (a). (c) le tutoriel ne fixe pas 90 % ; (d) un seul test ne prouve pas toute l'utilisabilité. |
| 12 | **b, d, e** | Align est optionnel : un produit sans Align n'est pas exclu par cette règle (b). Avec Align + System, seul Centered satisfait la règle : Left la viole (d), Centered la satisfait (e). (a) Align est optionnel ; (c) la règle ne vise que les produits en System, elle n’impose pas System. |

### 4.3 quiz2 (Tutoriel 2)

| Q | Réponse | Pourquoi |
|---|---|---|
| 1 | **a** | *Mandatory* : si P est sélectionné, C l'est. (b) un parent optionnel absent supprime son sous-arbre. |
| 2 | **a, d** | *Includes* de A vers B = A requires B : A sans B viole la dépendance (d), A entraîne B (a). (b) réciproque fausse ; (c) une dépendance ne rend aucune des deux features obligatoire ; (e) requires n’est pas excludes : A et B peuvent être choisies ensemble. |
| 3 | **a, d** | Tout obligatoire n'admet que la sélection {1,2,3} : on **rejette** les sélections à 1 ou 2 enfants (a). Un groupe `[1..3]` exprime les effectifs permis (d). (c) la borne haute (3) n'est pas violée ; (e) renommer n'y change rien. |
| 4 | **a, b, d** | Un attribut utile a un domaine et des bornes d'acceptation (a), une unité et des conditions de mesure (d), et la valeur **cible** reste distincte de la preuve que l'implémentation l'atteint (b). (c) fixer une valeur dans le modèle ne garantit rien sur le code ; (e) un nombre sans unité ni conditions de mesure n’est pas vérifiable. |
| 5 | **c (Six)** | `[1..2]` parmi 3 : C(3,1) + C(3,2) = 3 + 3 = **6** (vérifié). |
| 6 | **d, e** | Transitivité : A ⇒ B et B ⇒ C donnent A ⇒ C (d). B sans A est valide si C est choisi (e). (a) C n'entraîne pas A ; (b) ¬A ne force rien ; (c) A, B, C ensemble sont permis. |
| 7 | **a, b, d** | T2 §3.4 : un **Bundle** de type **Range**, RangeMin 1 et RangeMax 3, relié au parent puis à chaque enfant. (c) RangeMin 3 et RangeMax 1 est incohérent ; (e) relier chaque enfant à la racine comme obligatoire imposerait les trois, pas « entre 1 et 3 ». |
| 8 | **c** | T2 §3.4 : tracer de Images vers Rtf format et choisir le type **Includes**. |
| 9 | **c (Fifteen)** | `[1..4]` parmi 4 valeurs distinctes : 2⁴ − 1 = **15** (vérifié). |
| 10 | **a, b, e** | Shop est optionnel : l'omettre avec tous ses descendants satisfait le fragment (e). Si Shop est choisi : Cart obligatoire et `[1..2]` paiements ; (a) un seul paiement, (b) les deux conviennent. (c) sans Cart, non ; (d) aucun paiement, non. |
| 11 | **b, d, e** | Web management requires Login ; Login a pour parent User, donc User est sélectionné (e) ; User model est obligatoire sous User (d) ; Login (b). Account et Demo data ne sont pas forcés. |
| 12 | **a, d, e** | Seul Alphabetic est choisi ; il faut `[1..2]` parmi Upper et Lower : Upper seul (a), Lower seul (d), les deux (e). « Aucun type » viole `[1..2]` (b) ; Roman appartient à Numeric (c). |

### 4.4 quiz0, version 2 (Tutoriel 0 + lecture d’introduction)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **a** | (a) C’est la définition du SEI : des systèmes qui partagent des features gérées et sont développés à partir d’actifs de base communs « in a prescribed way ». |
| 2 | **b** | (b) L’ingénierie de domaine analyse la famille, modélise toutes ses variations et construit les actifs réutilisables. |
| 3 | **a** | (a) Le point mort est le croisement des courbes de coût (investissement, coût par système), et son emplacement précis dépend de l’organisation et du marché. |
| 4 | **b, c** | (b) Les liens de traçabilité entre la plate-forme et les produits dérivés disent quels produits utilisent le composant. (c) Corriger une fois l’actif commun profite aux produits qui l’intègrent, après re-dérivation et tests. |
| 5 | **b** | (b) Domain engineering accueille les modèles réutilisables de la famille ; chaque application, l’ingénierie d’un produit. |
| 6 | **a, c** | (a) Configurer = sélectionner dans le modèle de variabilité ce que la famille prévoit. (c) Dériver = produire l’application (architecture, composants) à partir des actifs choisis. |
| 7 | **a, b, e** | (a) T0 § 2.1.8 : clic droit sur l’application, New model, puis choisir le modèle. (b) T0 § 2.1.7 : clic droit sur Domain engineering dans la ligne, New model. (e) T0 § 2.1.9 : clic droit sur l’adaptation dans l’application, New model. |
| 8 | **a** | (a) T0 § 2.1.5 : une nouvelle application est un nouveau produit de la ligne. |
| 9 | **a, e** | (a) La sélection n’est que la configuration ; un produit qui fonctionne demande du code et des tests. (e) Receipt et Payment sont tous deux choisis : Receipt ⇒ Payment est respectée. |
| 10 | **a, d, e** | (a) C’est le rôle de la traçabilité entre la plate-forme et les produits dérivés ; ici, il faut la tenir soi-même. (d) Même le commun se reteste, car la configuration de chaque application peut influencer le résultat. (e) On corrige une fois l’actif commun, puis on re-dérive et on teste les produits qui l’utilisent. |
| 11 | **d, e** | (d) Le retour de l’application vers le domaine peut faire évoluer les actifs de la ligne. (e) C’est l’évaluation du delta : ce que le client demande en plus de ce que la famille sait faire. |
| 12 | **b, d** | (b) À 5 produits : 120 000 + 5 × 20 000 = 220 000 € contre 5 × 50 000 = 250 000 €. À 4, il y a égalité. (d) 120 000 + 4 × 20 000 = 200 000 = 4 × 50 000 : c’est le point mort. |

### 4.5 quiz3 (Tutoriel 3)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **a, b, c** | (a) Définition : une feature morte n’apparaît dans aucun produit. (b) C’est la contrainte de vérification : forcer F à 1 ne laisse aucune solution. (c) C’est F4 dans le modèle d’amorce : optionnelle sur le dessin, morte à cause de F3 excludes F4. |
| 2 | **a, b** | (a) Satisfiable = il existe au moins une solution : une suffit. (b) `findall` doit parcourir toutes les solutions pour les compter. |
| 3 | **a, c** | (a) `length` donne le nombre d’éléments collectés : un par affectation. (c) Le gabarit `_` remplace `L` : on ne garde pas les affectations, d’où « very little space in memory ». |
| 4 | **a, b** | (a) Absente de toutes les solutions d’une énumération complète : morte. (b) Jamais à 0 : présente dans tous les produits, donc dans le noyau. |
| 5 | **a, b** | (a) La 1re position reste la 1re feature du programme : la valeur lue sous le nom C est celle de A. (b) Le tutoriel fixe la liste pour que le nom et l’ordre des variables correspondent exactement au prédicat. |
| 6 | **a, b, c** | (a) 1 + 1 = 2 > 1 et 1 × 1 = 1 ≠ 0. (b) 0 + 0 = 0 ≤ 1 et 0 × 0 = 0. (c) Toutes deux gardent (0,0), (0,1), (1,0) : le tutoriel change la ligne 13 et l’ensemble des solutions reste le même. |
| 7 | **b** | (b) Double-clic sur la feature, icône « + » noire au-dessus de Name, Name = Version, Domain = Integer. |
| 8 | **a** | (a) Icône « clé et tournevis », onglet Solver Specific Semantics, swi, Get swi Model. |
| 9 | **a, b** | (a) F1 = 1 impose F2 = F3 = 1 ; F3 + F4 ≤ 1 impose F4 = 0, et F5 = F4 = 0. (b) Elles valent 0 dans l’unique solution : c’est le modèle d’amorce du tutoriel. |
| 10 | **c** | (c) Une solution avec Login = 1 prouve qu’elle est sélectionnable ; le noyau exige de vérifier toutes les solutions. |
| 11 | **a, b** | (a) false avec F = 1 imposée : aucune solution ne contient F. (b) C’est la définition d’une feature morte, comme F4 dans le tutoriel. |
| 12 | **b** | (b) F1, F2, F3 sont forcées à 1 ; seule F4 est libre (0 ou 1), et F5 la suit : 2 affectations. |

### 4.6 quiz4 (Tutoriel 4)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **d** | (d) Fausse ligne = un seul produit : le test `nsolve` avec n = 2 n’en trouve qu’un. |
| 2 | **a, c** | (a) `sat` répond « insatisfiable » : aucune solution. (c) Vide = aucun produit configurable. |
| 3 | **b, c, d** | (b) Ajouter une contrainte à un ensemble sans solution ne peut pas en créer une. (c) TaskForge : pour un modèle globalement incohérent, commencer par rétablir l’existence de produits. (d) Sur un modèle vide, chaque feature paraît « morte » : ce diagnostic n’apprend rien. |
| 4 | **b** | (b) Le test dit « F morte » ; la cause se cherche ensuite (chaîne de contraintes, MUS) et la correction respecte les exigences. |
| 5 | **b, c, d** | (b) Un seul produit : le test « fausse ligne » échoue. (c) La fin de la recherche est confirmée : il n’y a pas de deuxième solution. (d) Un produit existe : le modèle n’est pas vide. |
| 6 | **a, d** | (a) La mort se teste sur le modèle seul : d’abord Reset model configuration state. (d) C’est exactement ce que dit le résultat : F est incompatible avec P. |
| 7 | **b** | (b) solver = minizinc (Gecode), operation = sat : la première requête du tutoriel. |
| 8 | **a, c, e** | (a) Une feature morte se teste en la forçant à 1 (sélectionnée). (c) On itère sur les features abstraites et concrètes (la racine se teste par « vide ? »). (e) On parcourt les éléments, c’est-à-dire les nœuds du graphe. |
| 9 | **a, c** | (a) Deux configurations valides différentes : au moins deux produits (pas une fausse ligne). (c) Les solveurs doivent donner le même verdict (SAT), pas le même témoin. |
| 10 | **a** | (a) Un témoin prouve la satisfiabilité ; la recherche interrompue ne dit rien d’un deuxième produit. |
| 11 | **a, b, c** | (a) {R,A,B} est une solution. (b) Exactement un produit : fausse ligne. (c) Absentes de la seule solution : aucun produit ne les contient. |
| 12 | **c** | (c) Sous le choix A, B est impossible ; sans choix, {R,B} existe : B n’est pas morte. |

### 4.7 quiz5 (Tutoriel 5)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **a, e** | (a) Compléter = garder les sélections et exclusions imposées. (e) Une complétion est une configuration complète valide du modèle. |
| 2 | **e** | (e) `optimize` : une cible (TotCost) et un sens (min ou max). |
| 3 | **a, d** | (a) Exemple du tutoriel : F5 et F2 sélectionnées, aucune solution. (d) Les solutions restantes satisfont le modèle et P : elles sont dans S. |
| 4 | **b, e** | (b) `"optimization_direction": "min"` : le produit le moins cher. (e) `"max"` : le produit le plus cher que la ligne peut produire. |
| 5 | **c, e** | (c) Imposer Security restreint les produits faisables : l’optimum peut changer. (e) On marque Security comme sélectionnée, puis on lance `optimize` en `min`. |
| 6 | **a, e** | (a) Le solveur en renvoie une ; d’autres peuvent avoir le même coût. (e) Optimal = meilleure valeur de l’objectif ; les deux l’atteignent. |
| 7 | **b, d** | (b) Comme au tutoriel 2 : attribut Cost de domaine Integer, valeur 5. (d) TotCost est la somme des feature × feature::Cost : on y ajoute le terme de Tabbing. |
| 8 | **a** | (a) « please reload your model before the next step and reinsert the arbitrary constraints ». |
| 9 | **a** | (a) Sans A : {R} et {R,B}. |
| 10 | **b, e** | (b) Recherche épuisée : il n’y en a pas d’autres (tutoriel 5 : « only 9 really exist »). (e) Le solveur renvoie autant de solutions qu’il en trouve, au plus n. |
| 11 | **a, c** | (a) A ⇒ B : A choisie impose B. (c) R, A et B : toutes les règles sont satisfaites. |
| 12 | **c, e** | (c) Q a 3 features, P une seule. (e) 100 > 30 : le produit le plus cher est P. |

### 4.8 QCM d’auto-évaluation TaskForge

#### T1 (modèle, vérification, diagnostic)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **a** | (a) Actifs communs et variabilité explicite : c’est la « famille réutilisable » que TaskForge construit. |
| 2 | **c, e** | (c) L’atelier valide la liste contre l’UVL avant de générer. (e) « Une configuration complète exclut tout ce qui n’est pas listé. » |
| 3 | **a, d** | (a) Contraposée : non Filters ⇒ non Statistics. (d) C’est le sens même de l’implication. |
| 4 | **b, d** | (b) Dès que P est sélectionné, C doit l’être : c’est la définition TaskForge. (d) P exclu entraîne C exclue : {R} ne contient pas C. |
| 5 | **e** | (e) Kiosk impose Memory, qui exclut LocalStorage : CSVExport est morte ; retirer les deux règles inventées la rétablit sans toucher à R01–R11. |
| 6 | **b, e** | (b) P est optionnel : l’omettre omet tout son sous-arbre. (e) P choisi, donc C obligatoire choisi aussi. |
| 7 | **c, d** | (c) C’est la solution de secours du guide si l’export ne fonctionne pas. (d) Le générateur importe le même fichier UVL que FlamapyIDE. |
| 8 | **a, e** | (a) « Relancez les analyses et comparez au modèle de référence. » (e) Chaque fichier repart du modèle de référence avec un défaut indépendant. |
| 9 | **e** | (e) Aucun produit sans F : F est présente partout, donc dans le noyau. |
| 10 | **a** | (a) Groupe alternatif : exactement un enfant dès que le parent est choisi (R02). |
| 11 | **c** | (c) C’est la contrainte de vérification : forcer F à 1 ; aucune solution = morte. |
| 12 | **b, c** | (b) Liste complète : ce qui n’est pas listé est exclu. (c) Un seul stockage (Memory), Kiosk => Memory respectée, Statistics absente. |

#### T2 (variabilité d’un code existant)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **c** | (c) Les différences sont un point de départ, à confirmer par le code et le contrat. |
| 2 | **e** | (e) C’est la traçabilité option → code → dépendance → test du rendu T2. |
| 3 | **c** | (c) Une règle de gamme se confirme par le contrat ou par une partie prenante. |
| 4 | **d, e** | (d) Dépendance technique établie par l’appel de fonction : Statistics => Filters. (e) Sans le bloc Filters, visibleTasks() n’existe pas dans le produit généré. |
| 5 | **a, b** | (a) Avec JSONExport exclue, les anciennes règles sont inchangées : les anciens produits restent représentables. (b) Avec LocalStorage (donc sans Kiosk), JSONExport est sélectionnable. |
| 6 | **d, e** | (d) Le code partagé appelle persist() sans savoir quel stockage est choisi. (e) Groupe alternatif : un seul bloc persist() dans chaque produit. |
| 7 | **b** | (b) Format stable `{"name", "selected"}`, validé par l’atelier avec le même UVL. |
| 8 | **a, b, e** | (a) Le T2 demande la « possibilité de sélectionner chaque nouvelle option ». (b) Le T2 demande le nombre exact de configurations (96). (e) Première vérification : syntaxe et satisfiabilité. |
| 9 | **c, d, e** | (c) JSONExport => LocalStorage est une règle de gamme explicitée dans le contrat. (d) Les blocs `//#if` délimitent les options. (e) Statistics appelle visibleTasks() de Filters : dépendance technique. |
| 10 | **e** | (e) Si chaque combinaison a une complétion valide, aucune règle ne lie A et B. |
| 11 | **a** | (a) Des identifiants stables relient exigences, modèle, configuration et code. |
| 12 | **b, c** | (b) Une configuration enregistrée permet de régénérer le produit et de tracer ses choix. (c) Un gabarit commun avec des blocs `//#if` : actifs communs et points de variation explicites. |

#### T3 (configurer, générer, tester, faire évoluer)

| Q | Réponse | Pourquoi (propositions justes) |
|---|---|---|
| 1 | **d** | (d) « Une configuration partielle laisse les éléments non cités indécidés. » |
| 2 | **b** | (b) Une commande (Kiosque, Étudiant, Pro) → une configuration validée → un produit généré. |
| 3 | **a, c** | (a) Storage est obligatoire avec une alternative ; LocalStorage exclue laisse Memory. (c) Statistics => Filters. |
| 4 | **b, e** | (b) Memory et LocalStorage sont alternatives : aucune configuration ne satisfait les deux demandes. (e) C’est la cause du refus. |
| 5 | **b, e** | (b) Filters indécidée peut devenir sélectionnée. (e) Statistics sans Filters viole la contrainte : aucune complétion. |
| 6 | **d** | (d) Enfant ⇒ parent : la liste viole le modèle. |
| 7 | **d** | (d) « Distinguez un choix explicitement exclu d’un choix encore indécidé. » |
| 8 | **b** | (b) L’atelier ne connaît que l’UVL qu’on lui importe : il faut lui donner la v3. |
| 9 | **e** | (e) Garder les non terminées, enregistrer (persist), réafficher (render). |
| 10 | **d** | (d) Seule la présence des fonctions et du bouton prouve l’inclusion. |
| 11 | **a, c, e** | (a) Test du TP : titre avec virgule, guillemets, accents → CSV correctement encodé. (c) Kiosque : rien n’est conservé ; Étudiant et Pro : la tâche est conservée. (e) « Créer une tâche composée d’espaces » → aucun ajout. |
| 12 | **a, b, c** | (a) On vérifie le comportement ET l’absence du code non sélectionné. (b) Même UVL, même gabarit, trois configurations : la chaîne réutilisable. (c) ClearCompleted ajoutée une fois, trois produits régénérés depuis la même version du gabarit. |

## 5. Exercices pratiques des tutoriels

### Tutoriel 2 — modèle ClothingStores (T2 §4)
**À produire** : l'arbre des 25 features du tableau (colonne *Parent*), avec relation obligatoire ou optionnelle selon le schéma du tutoriel, puis des **attributs de qualité** (par exemple un temps de réponse ou un coût, avec domaine et unité) et des features ou relations supplémentaires. Exporter le projet pour les TP suivants. **Relations lues sur le schéma (T2 p. 12)** : obligatoires sous la racine Basic views, Database management, Product ; optionnelles Contact us, Shipping, Demo data, Shop, Web management, User ; Product → List of products et Product model obligatoires, Comments, Sharing system, Rating optionnelles ; Shop → Cart obligatoire, [1..2] sur Online / Offline payment ; User → User model obligatoire, Login et Account optionnelles ; Web management → Basic views obligatoire, trois gestions optionnelles ; Includes : Web management → Login, Account → Login, User management → User model, Comment management → Comments, Product management → Product model. Corrigé complet : `exams/devoir-tutoriels-variamos.json`, question 1.

### Tutoriel 3 — SWI-Prolog (T3 §6, 9 étapes)
Modèle d'amorce (5 variables) : racine F1 = 1 ; F2 et F3 obligatoires, F4 optionnel avec F3 *excludes* F4, F5 obligatoire sous F4.
- Une solution : `L = [F4,F2,F3,F1,F5], program(L), label(L).` → F1, F2, F3 sélectionnées, F4 et F5 non.
- Toutes les solutions : `findall(L, label(L), Ls), length(Ls, N)` → **N = 1**, donc **« False » product line** (un seul produit).
- `F4 #= 1, program(L), label(L)` → faux : F4 est **morte** (et F5 avec elle, car obligatoire sous F4).
- `excludes` peut s'écrire `F3 + F4 #=< 1` ou `F3 * F4 #= 0` (la seconde reste valable avec des entiers) : mêmes solutions.
- **Noyau (core)** : les features à 1 dans toutes les solutions ; **variables** : celles qui valent 0 dans au moins une solution ; on les calcule en comptant les 0 par colonne après `transpose`. `findnsols(n, …)` échantillonne : résultat **approximatif**, sans certitude.

Exercice final (modèle de T2 sans attributs) : générer le code, trouver 1 solution, 30 solutions, le nombre total, tester 3 configurations, trouver noyau et features variables. **Résultats (modèle fourni, schéma T3 p. 22, où User est obligatoire ; vérifiés par énumération)** : **3840** solutions (8 × 4 × 4 × 30) ; noyau de 8 features (ClothingStores, Product, ListOfProducts, ProductModel, BasicWebViews, DBManagement, User, UserModel) ; 17 variables. Avec User optionnelle (schéma T2), 4096. Corrigé : `exams/devoir-tutoriels-variamos.json`, question 2.

### Tutoriel 4 — requêtes PLEIADES (T4 §4)
| Question | Requête JSON | Lecture |
|---|---|---|
| Le modèle est-il vide ? | `{"solver":"swi","operation":"sat"}` | SAT = non vide (*void* sinon) |
| Une configuration | `{"solver":"swi","operation":"solve"}` | visualisable sur le modèle |
| Fausse ligne de produits ? | `"operation":"nsolve","operation_n":2` | une seule solution = *false PL* |
| Features mortes | `"operation":"sat"` + `iterate_over` (éléments `ConcreteFeature` / `AbstractFeature`, `with_value`: 1) | une itération UNSAT = feature **morte** |
| Fausses optionnelles | même schéma avec `with_value`: 0 sur les features **optionnelles** | UNSAT = elle ne peut pas être absente : **faussement optionnelle** *(déduit de la définition du cours, S7 p. 55 ; le tutoriel ne le montre pas)* |

Solveurs : `minizinc` (Gecode), `swi`, `z3` (le plus rapide mais incomplet : peu d'attributs, peu d'énumération). Sur le modèle d'amorce, F4 et F5 sont mortes ; sur le grand modèle, aucune.

### Tutoriel 5 — configuration automatique (T5 §3)
Modèle de la partie 1 : Range (1..1) sous la racine vers F2, F3, F4 ; F3 → F7 optionnelle et F10 obligatoire ; F4 → F9 optionnelle et F8 obligatoire ; F1 optionnelle sous la racine → F5 optionnelle et F6 obligatoire ; F5 requires F9 ; F10 excludes F6. **9 produits** au total (le tutoriel le dit ; recompté).

| Étape | Résultat | Raisonnement |
|---|---|---|
| 2. Sélectionner F1 | **4** | F1 impose F6, donc F3 est exclu (F10 excludes F6). Avec F2 : F5 impossible (F5 exige F9, qui exige F4) → 1 produit. Avec F4 : (F5 = 0, F9 libre) 2 + (F5 = 1, F9 = 1) 1 → 3. Total 4. |
| 3. Désélectionner F1 | **5** | F2 : 1 ; F3 : F7 libre → 2 ; F4 : F9 libre → 2. Total 5 (4 + 5 = 9). |
| 4. F4 sélectionné, F3 et F1 exclus | **2** | F8 imposé ; seule F9 reste libre. |

Observations du tutoriel (toutes vérifiées) : avec F5 seule, **un** produit ; F5 et F2 sont incompatibles ; sans F4, **4** produits. **Trois tâches de configuration** : (1) trouver des configurations ; (2) compléter une configuration partielle ou signaler qu'elle est insoluble ; (3) calculer et ordonner selon une fonction d'optimisation. Les tâches 1 et 2 utilisent les **mêmes requêtes** : seul change le marquage « sélectionné / exclu ». `optimize` demande `optimization_target` et `optimization_direction` (`min` ou `max`). Leçon finale : le modèle de coût comptait mal le tabbing ; l'outil ne dispense pas du jugement humain.
Étapes 5 à 8 (somme des features concrètes du modèle ClothingStores, 20 features concrètes) : **maximum 20**, **minimum 5** (ListOfProducts, ProductModel, BasicWebViews, DBManagement, UserModel). L'expression du tutoriel cite ProductMgmt deux fois et des noms absents du schéma (ListOfProds, ProdModel, UsersHandling) : recopiée telle quelle, le maximum afficherait 21. Corrigé : `exams/devoir-tutoriels-variamos.json`, question 4.

### Devoirs corrigés dans l'app (2026-11-22)
Aucun corrigé officiel n'existera : l'app fournit les corrigés expliqués. Questions ouvertes avec corrigé et grille d'auto-évaluation : `exams/devoir-taskforge-t1.json`, `devoir-taskforge-t2.json`, `devoir-taskforge-t3.json` (toutes les questions des énoncés T1 à T3) et `devoir-tutoriels-variamos.json` (exercices finaux des tutoriels 2 à 5, questionnaires Google Forms non accessibles). Non corrigé : le bonus TaskForge « Si vous terminez en avance » (coûts au choix de l'étudiant, sans réponse unique).

## 6. Archive TaskForge (3 tutoriels en français, FlamapyIDE, format UVL)

> **Provenance confirmée le 2026-11-22** : la page de l'intranet (`25__enonce_taskforge.md`) présente le cas (« Appliquez ce que vous avez appris avec une étude de cas et l'outil FlamapyIDE et testez vous »). Kit « TaskForge educational kit contributors », licence MIT, daté du 17 novembre 2026, avec FlamapyIDE et UVL (pas VariaMos). Les concepts (vide, morte, faussement optionnelle, noyau, configuration partielle) recoupent T3 à T5 et le chapitre de vérification.

**Modèle v1** (11 éléments avec racine et regroupements) : `Storage` obligatoire avec alternative `Memory` / `LocalStorage` ; six optionnelles ; `Statistics ⇒ Filters`, `Kiosk ⇒ Memory`. **72 produits** (8 choix libres pour Priorities / DueDates / CSVExport × 3 couples valides pour Filters et Statistics × 3 couples valides pour le stockage et Kiosk). v2 (ajout de `JSONExport ⇒ LocalStorage`, 12 éléments) : **96**. v3 (ajout de `ClearCompleted` optionnelle sans contrainte) : **192**, soit le **double** (une option libre double le nombre de produits ; les anciens produits restent représentables avec la nouvelle feature exclue).

Vérifications de T1 §3 : `Memory, Kiosk, Filters` **valide** ; `LocalStorage, Kiosk` **invalide** (Kiosk ⇒ Memory) ; `Memory, Statistics` **invalide** (il manque Filters) ; `Memory, LocalStorage` **invalide** (le groupe alternatif n'autorise qu'un stockage).

Diagnostic des trois modèles fautifs (T1 §4) :
| Fichier | Symptôme | Cause | Correction |
|---|---|---|---|
| A | `CSVExport` morte (36 produits restent) | `CSVExport ⇒ Kiosk` (donc Memory) et `CSVExport ⇒ LocalStorage` : Memory et LocalStorage sont exclusifs | retirer ces deux contraintes : aucune n'est dans R01 à R11 (le modèle de référence n'en a pas) ; en retirer une seule suffit à ressusciter CSVExport, mais garde une règle inventée |
| B | `Filters` faussement optionnelle (toujours présente ; 48 produits) | `TaskManagement ⇒ Filters`, et `TaskManagement` est obligatoire | retirer cette contrainte (R07 dit que Filters est optionnel) |
| C | modèle **vide** (0 produit) | les contraintes `Memory` et `LocalStorage` imposent les deux, mais le groupe est alternatif | retirer **les deux** : n'en retirer qu'une forcerait un stockage et rendrait l'autre morte (R04 violée) |

Complétion de T3 §1 : `Statistics` imposé et `LocalStorage` exclu → **Memory** et **Filters** deviennent nécessaires, `JSONExport` est exclu ; Kiosk, Priorities, DueDates, CSVExport restent libres : **16 produits** (2⁴). Les trois commandes (Kiosque, Étudiant, Pro) sont **valides** ; `JSONExport + Kiosk` est **refusée** (JSONExport ⇒ LocalStorage et Kiosk ⇒ Memory).

## 7. Ce qui reste hors de portée aujourd'hui
- Corrigés **officiels** : il n'y en aura pas (dit le 2026-11-22). Les corrigés de l'app, fondés sur le cours et les tutoriels, font référence ; ils restent marqués « proposés ».
- « Rendus » de l'intranet : je ne peux pas les lire ; à coller.
- Chiffres du modèle ClothingStores : calculés le 2026-11-22 (voir § 5).
- ISO/IEC 24707:2018 (Common Logic) : le tutoriel T3 ne s'en sert que pour la syntaxe **CLIF** des contraintes textuelles (`(if (= Advanced 1) (>= VoiceControl::Version 2))`, préfixe, style LISP). La norme entière (78 pages) n'est pas traitée sauf si vous savez que le prof l'a demandée.
