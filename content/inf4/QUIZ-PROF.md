# INF4 — Quiz et tutoriels du prof : ce qu'il faut savoir faire, corrigés proposés

> **Statut : brouillon de travail du 2026-11-20, à valider.** Source : `ressources/S3__INF4/epi/` (tutoriels T0 à T5, annexe SECRET, `9__applications.md`, quiz 0 à 2, archive TaskForge).
> - Les quiz du prof **n'ont aucun corrigé** dans les fichiers. Chaque réponse ci-dessous est **déduite** du tutoriel, du cours ou de la logique, et marquée « proposée ». Rien n'est officiel.
> - **quiz3, quiz4 et quiz5 sont vides (0 octet)** : à redéposer. Les sections qui les concernent sont une **prévision** à partir des tutoriels T3, T4, T5.
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
| T3 | Génération de code (SWI-Prolog), analyse par solveur | quiz3 (vide) | « Traduire un modèle en contraintes » |
| T4 | Vérification automatique (PLEIADES, requêtes JSON) | quiz4 (vide) | « Vérifier, diagnostiquer et corriger » |
| T5 | Configuration automatique, optimisation | quiz5 (vide) | **nouveau** « Configurer automatiquement un produit » |

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

## 5. Exercices pratiques des tutoriels

### Tutoriel 2 — modèle ClothingStores (T2 §4)
**À produire** : l'arbre des 25 features du tableau (colonne *Parent*), avec relation obligatoire ou optionnelle selon le schéma du tutoriel, puis des **attributs de qualité** (par exemple un temps de réponse ou un coût, avec domaine et unité) et des features ou relations supplémentaires. Exporter le projet pour les TP suivants. **À confirmer** : les relations exactes se lisent sur l'image T2 p. 10-11.

### Tutoriel 3 — SWI-Prolog (T3 §6, 9 étapes)
Modèle d'amorce (5 variables) : racine F1 = 1 ; F2 et F3 obligatoires, F4 optionnel avec F3 *excludes* F4, F5 obligatoire sous F4.
- Une solution : `L = [F4,F2,F3,F1,F5], program(L), label(L).` → F1, F2, F3 sélectionnées, F4 et F5 non.
- Toutes les solutions : `findall(L, label(L), Ls), length(Ls, N)` → **N = 1**, donc **« False » product line** (un seul produit).
- `F4 #= 1, program(L), label(L)` → faux : F4 est **morte** (et F5 avec elle, car obligatoire sous F4).
- `excludes` peut s'écrire `F3 + F4 #=< 1` ou `F3 * F4 #= 0` (la seconde reste valable avec des entiers) : mêmes solutions.
- **Noyau (core)** : les features à 1 dans toutes les solutions ; **variables** : celles qui valent 0 dans au moins une solution ; on les calcule en comptant les 0 par colonne après `transpose`. `findnsols(n, …)` échantillonne : résultat **approximatif**, sans certitude.

Exercice final (modèle de T2 sans attributs) : générer le code, trouver 1 solution, 30 solutions, le nombre total, tester 3 configurations, trouver noyau et features variables. **Le nombre exact dépend du modèle final de T2 (image) : à calculer avec vous.**

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
Étapes 5 à 8 (somme des features concrètes du modèle ClothingStores) : le **nombre exact** dépend du modèle complet de T4, à calculer avec vous.

## 6. Archive TaskForge (3 tutoriels en français, FlamapyIDE, format UVL)

> **Provenance à confirmer** : kit « TaskForge educational kit contributors », licence MIT, daté du 17 novembre 2026. Il utilise FlamapyIDE et UVL, **pas VariaMos** : à vérifier si le prof l'a bien donné. Les concepts (vide, morte, faussement optionnelle, noyau, configuration partielle) recoupent T3 à T5 et le chapitre de vérification.

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
- Corrections des quiz 3, 4, 5 et des questions de l'intranet : **fichiers à redéposer** (ou texte collé).
- « Rendus » de l'intranet : je ne peux pas les lire ; à coller.
- Chiffres du modèle ClothingStores (T2, T3 étape 6, T5 étapes 6 à 8) : à calculer à partir des images du PDF.
- ISO/IEC 24707:2018 (Common Logic) : le tutoriel T3 ne s'en sert que pour la syntaxe **CLIF** des contraintes textuelles (`(if (= Advanced 1) (>= VoiceControl::Version 2))`, préfixe, style LISP). La norme entière (78 pages) n'est pas traitée sauf si vous savez que le prof l'a demandée.
