<!-- Page 1 -->
# TaskForge (archive du prof) — guide des 3 tutoriels

# TaskForge — Ingénierie d’une ligne de produits logiciels

**Trois tutoriels individuels de 2 heures · Master MIAGE · Novembre 2026**

Vous êtes ingénieur logiciel chez TaskForge, éditeur de gestionnaires de tâches. Vous devez construire une famille réutilisable, expliquer les variantes autorisées et livrer des applications qui fonctionnent. Votre réussite se mesure à la cohérence entre les exigences, le modèle, les configurations, le code et les tests.

Le code TaskForge fourni est un **code pédagogique original**, exécutable après génération ; il n’est pas une extraction de TodoMVC ni un logiciel industriel. Sa petite taille permet d’examiner toute la chaîne en six heures. JavaScript possède ici des **directives de prétraitement ajoutées par notre générateur** : `//#if` n’est pas une instruction du langage JavaScript.

## Commencer en cinq minutes

1. Décompressez l’archive étudiante dans un dossier personnel. Ouvrez `ATELIER.html` par double-clic dans un navigateur récent.
2. Ouvrez [FlamapyIDE](https://ide.flamapy.org/) dans un second onglet. Internet est nécessaire au chargement de l’outil et de ses composants. L’atelier local, lui, ne dépend d’aucun service externe.
3. Gardez ouverts ce guide, FlamapyIDE et l’atelier. Aucun terminal, aucune installation, aucun compte GitHub n’est requis.
4. Créez un dossier de rendu contenant `T1`, `T2`, `T3`. Téléchargez régulièrement vos fichiers ; un rechargement de l’atelier efface vos modifications non téléchargées.
5. Pour ouvrir le code, utilisez le champ « Gabarit de code » de l’atelier : il permet de le lire, le modifier et le télécharger sans éditeur supplémentaire.

**Pré-requis :** savoir lire une fonction JavaScript, une condition, un tableau, et comprendre obligatoire/optionnel/exclusion/implication. Vous n’avez pas à apprendre un framework ni à coder une application complète.

## Ce que font les deux outils

| Outil | Responsabilité |
|---|---|
| FlamapyIDE | Éditer le modèle UVL, afficher l’arbre, vérifier, configurer |
| ATELIER.html | Importer votre UVL, valider une configuration complète, retirer les blocs non sélectionnés et produire un HTML autonome |
| Analyseur local de secours | Énumérer les configurations de ce petit modèle ; comparer les résultats avec FlamapyIDE |

**FlamapyIDE ne génère pas lui-même l’application TaskForge.** Le passage modèle → code est assuré par le générateur fourni, que vous inspecterez. Il importe le même fichier UVL : les contraintes ne sont donc pas recopiées manuellement dans une seconde liste de règles.

## Prise en main de FlamapyIDE

La disposition exacte peut évoluer. Les intitulés ci-dessous correspondent à la documentation du projet ; cherchez l’opération équivalente si un libellé diffère.

1. Depuis l’accueil, créez un modèle ou utilisez **Open file** pour importer un `.uvl`.
2. Dans la vue **Source**, remplacez le texte par votre modèle. Gardez une indentation de quatre espaces ; évitez les tabulations et les noms contenant des espaces.
3. Vérifiez l’absence d’erreur de syntaxe. Passez à **Graph** pour lire les groupes et les dépendances.
4. Conservez le calcul **In-browser**. Dans les opérations, choisissez un solveur disponible : SAT convient aux tests de satisfiabilité, aux features mortes et obligatoires ; utilisez SAT ou BDD pour compter les configurations selon les opérations disponibles.
5. Lancez **Satisfiable**, **Number of configurations**, **Dead features**, **Core features**, **False optional features**. Consignez le résultat du panneau Output. Ne confondez pas estimation structurelle et dénombrement exact par solveur.
6. Pour configurer, utilisez le panneau **Configuration**. Distinguez un choix explicitement exclu d’un choix encore indécidé. Vérifiez les complétions ou configurations compatibles via les opérations proposées.
7. Exportez le modèle en **UVL**. Si l’export ne fonctionne pas, copiez le texte dans le champ UVL de l’atelier et cliquez sur « Télécharger le modèle ».

**Si l’analyse ou le configurateur restent indisponibles après cinq minutes :** poursuivez dans l’atelier local avec le même UVL et les boutons « Analyser » / « Calculer les complétions ». Indiquez dans votre rendu quel outil a produit chaque résultat. L’analyseur local est volontairement limité au sous-ensemble booléen décrit dans l’atelier, à 18 features et à l’énumération exhaustive. Il n’est pas une réimplémentation générale de Flamapy.

---

# Tutoriel 1 — Créer, vérifier et corriger un modèle

**Objectif :** passer d’exigences à un modèle de ligne de produits, puis diagnostiquer trois défauts indépendants.

**Fichiers :** `modeles/00_squelette.uvl`, puis les trois modèles A, B et C. N’ouvrez ces derniers qu’à l’étape de diagnostic.

| Temps | Étape |
|---|---|
| 0–10 min | Prise en main et lecture du cas |
| 10–30 min | Analyse des exigences |
| 30–60 min | Construction du modèle |
| 60–65 min | Pause |
| 65–85 min | Vérification du modèle construit |
| 85–110 min | Diagnostic et correction des modèles A, B, C |
| 110–120 min | Sauvegarde et justification |

## 1. Contrat de la version 1

| ID | Exigence |
|---|---|
| R01 | Tout produit gère les tâches : créer, renommer, terminer et supprimer. |
| R02 | Tout produit utilise exactement un stockage : Memory ou LocalStorage. |
| R03 | Memory conserve les tâches seulement durant la session de la page ; recharger les efface. |
| R04 | LocalStorage permet de retrouver les tâches après rechargement, si le navigateur autorise ce stockage. |
| R05 | Priorities ajoute une priorité normale ou haute. |
| R06 | DueDates ajoute une échéance. |
| R07 | Filters permet d’afficher toutes les tâches, celles à faire ou celles terminées. |
| R08 | CSVExport ajoute l’export CSV. |
| R09 | Statistics affiche un compteur sur les tâches actuellement filtrées ; son composant nécessite Filters. |
| R10 | Kiosk signale un usage sur poste partagé et impose Memory. |
| R11 | Priorities, DueDates, Filters, CSVExport, Statistics et Kiosk sont optionnels, sous réserve des contraintes R09 et R10. |

Ces exigences portent sur le périmètre du TP. Kiosk ne garantit ni la confidentialité de tout le poste ni l’effacement d’éventuels fichiers téléchargés.

**Travail :** créez une table avec ID d’exigence, feature(s), obligatoire/optionnel/alternative, contrainte et justification. Utilisez exactement les identifiants ci-dessus, ainsi que `TaskForge`, `TaskManagement` et `Storage`. La stabilité des identifiants permettra de relier modèle et code.

## 2. Construire le modèle UVL

Importez le squelette. Ajoutez Storage comme enfant obligatoire de TaskForge, puis son groupe alternatif. Ajoutez les six options. Écrivez deux implications dans la section constraints.

Exemple de syntaxe sur un autre domaine :

```uvl
features
    Lecteur
        mandatory
            Format
                alternative
                    Texte
                    HTML
        optional
            Images
constraints
    Images => HTML
```

Questions à résoudre : pourquoi Storage est-il obligatoire mais ses enfants ne sont-ils pas tous obligatoires ? Pourquoi `Statistics => Filters` n’est-il pas équivalent à `Filters => Statistics` ? Un enfant optionnel peut-il être sélectionné si son parent est absent ?

**Point de contrôle :** votre modèle possède 11 features en comptant la racine et les regroupements. Son arbre contient un groupe alternatif de deux enfants et six features optionnelles au niveau de la racine. Téléchargez `taskforge_v1.uvl`.

## 3. Vérifier le modèle

Avant de lancer les opérations, prédisez les réponses : au moins un produit existe-t-il ? CSVExport est-il réalisable ? Filters est-il présent dans tous les produits ? Quels éléments forment le socle ?

Lancez les cinq analyses de la prise en main. Notez résultats, outil et interprétation. Le modèle attendu doit admettre plusieurs produits, ne comporter aucune feature morte et ne pas rendre implicitement obligatoire une feature annoncée comme optionnelle.

Vérifiez aussi ces quatre sélections. Pour chacune, ajoutez racine et parents obligatoires et considérez les options non citées comme exclues :

| Sélection | Question |
|---|---|
| Memory, Kiosk, Filters | Est-elle valide ? |
| LocalStorage, Kiosk | Quelle contrainte décide ? |
| Memory, Statistics | Quelle dépendance manque ? |
| Memory, LocalStorage | Quel groupe décide ? |

Expliquez pourquoi une erreur de syntaxe et un modèle sans aucun produit sont deux problèmes différents.

## 4. Diagnostiquer trois modèles fautifs

Ouvrez successivement A, B et C ; chaque fichier repart du modèle de référence et introduit un défaut indépendant. **Ne cumulez pas les corrections d’un fichier sur l’autre.**

Pour chaque modèle :

1. Vérifiez la satisfiabilité avant d’interpréter les autres résultats.
2. Cherchez les features mortes, les features du socle et les faussement optionnelles si le modèle est satisfiable.
3. Relevez les contraintes impliquées et construisez une explication de deux à quatre phrases.
4. Corrigez en respectant R01–R11. Supprimer une vraie exigence pour faire passer le solveur n’est pas une correction acceptable.
5. Relancez les analyses et comparez au modèle de référence.

Une feature est morte si aucun produit valide ne la contient. Une feature optionnelle est faussement optionnelle si, dès que son parent est sélectionné, elle doit l’être aussi. Pour un modèle globalement incohérent, commencez par rétablir l’existence de produits : des listes de features calculées sur un ensemble vide ne constituent pas un diagnostic utile.

**Rendu T1 :** votre UVL, les trois fichiers corrigés, le tableau des exigences et un tableau « fichier / symptôme / cause / correction / résultat après correction ». Une page d’explications maximum.

---

# Tutoriel 2 — Retrouver la variabilité dans un code existant

**Objectif :** reconstruire un modèle à partir d’un produit à options de construction et établir une traçabilité qui permettra sa réutilisation.

Vous recevez un code existant plus récent que les exigences du T1. Il contient une fonctionnalité supplémentaire. Votre modèle doit représenter ce que la famille sait réellement construire, sans recopier aveuglément chaque détail technique comme une feature.

**Fichiers :** `code/taskforge_existant.js.txt`, `code/moteur.js`, les produits dans `produits_exemples/`.

| Temps | Étape |
|---|---|
| 0–15 min | Explorer deux produits existants |
| 15–40 min | Lire le code et identifier les points de variation |
| 40–65 min | Construire le modèle de la version 2 |
| 65–70 min | Pause |
| 70–95 min | Vérifier modèle, dépendances et configurations |
| 95–110 min | Produire la traçabilité et expliquer la réutilisation |
| 110–120 min | Préparer le passage au générateur |

## 1. Explorer la famille existante

Ouvrez `kiosque.html` et `pro.html`. Ajoutez deux tâches, terminez-en une, essayez les filtres et les exports disponibles, puis rechargez. Comparez les fonctionnalités visibles. Le nom du produit et la liste de ses features sont affichés en haut.

Consignez au moins trois différences. Distinguez : capacité de l’application, choix utilisateur pendant l’exécution, et donnée d’une tâche. Par exemple, « disposer de priorités » est une feature ; « cette tâche est de priorité haute » est une donnée.

## 2. Inspecter le code source

Dans l’atelier, importez `taskforge_existant.js.txt` dans « Gabarit de code ». Ne le lancez pas directement comme JavaScript : plusieurs implémentations alternatives y coexistent avant prétraitement.

Recherchez `//#if` et les contrats de construction en début de fichier. Complétez la matrice suivante, avec un exemple pour chaque option :

| Option de construction | Fonction ou bloc concerné | Comportement visible | Dépendance observée | Nature de la justification |
|---|---|---|---|---|
| Memory | persist() vide | Perte des tâches au rechargement | Alternative à LocalStorage | Architecture |
| … | … | … | … | Technique, commerciale ou politique produit |

Questions :

1. Quels blocs sont présents dans tous les produits ?
2. Pourquoi les deux fonctions persist() ne doivent-elles pas coexister dans un même produit ?
3. Quelle fonction appelle `visibleTasks()` ? Où cette fonction est-elle définie ?
4. Quelle option supplémentaire apparaît par rapport au T1 ?
5. La dépendance entre JSONExport et LocalStorage est-elle une nécessité du langage ou une règle de cette gamme ? Que faudrait-il changer pour la supprimer ?
6. Pourquoi le tableau `tasks`, la fonction `render` et chaque bouton individuel ne deviennent-ils pas automatiquement des features ?

**Attention :** une dépendance technique peut être établie par un appel de fonction. Une règle commerciale ne se déduit pas de cet appel ; ici elle est explicitée dans le contrat du code. Dans un vrai projet, il faudrait la confirmer avec une partie prenante.

## 3. Reconstruire le modèle v2

Partez de votre modèle v1. Ajoutez l’option découverte et la contrainte correspondant au contrat de construction. Gardez les autres règles et identifiants inchangés.

Vérifiez dans FlamapyIDE :

- syntaxe et satisfiabilité ;
- absence de features mortes ;
- possibilité de sélectionner chaque nouvelle option ;
- nombre exact de configurations ;
- compatibilité des anciens produits.

**Point de contrôle :** le modèle v2 contient 12 features. L’ajout de la fonctionnalité ne doit pas supprimer les anciens produits : ils restent représentables lorsque la nouvelle feature est exclue.

Expliquez pourquoi les deux produits observés ne suffisent pas à prouver que toutes les combinaisons imaginables sont autorisées. Votre reconstruction repose sur l’observation, les blocs conditionnels, les dépendances et le contrat, pas uniquement sur deux captures d’écran.

## 4. Du modèle au code réutilisable

Ouvrez `code/moteur.js` en l’important temporairement dans la zone de code. Repérez les trois fonctions `parse`, `preprocess` et `build`, puis réimportez le gabarit TaskForge.

Sans analyser chaque ligne du parseur, expliquez :

- ce qui est vérifié avant la production ;
- comment un bloc `//#if X` est conservé ou supprimé ;
- pourquoi une option du code absente du modèle provoque une erreur ;
- pourquoi ce mécanisme fixe la variabilité à la **construction** plutôt qu’en cours d’utilisation ;
- ce qu’un compilateur JavaScript vérifierait encore après le prétraitement.

Le générateur retire des blocs source, puis les insère dans une page HTML avec un petit manifeste de construction. Il ne prouve pas la correction de tout JavaScript arbitraire : vos tests restent nécessaires.

## 5. Première preuve de cohérence

Dans l’atelier, importez votre UVL v2 et `configurations/exemple_minimal.json`, puis le gabarit complet existant. Cliquez sur « Valider », puis « Générer ». Vérifiez que le produit minimal n’offre ni priorité ni export.

Retirez provisoirement JSONExport du modèle tout en conservant le gabarit : la génération doit refuser une option inconnue, même si cette option n’est pas sélectionnée. Rétablissez ensuite le modèle complet. Ce contrôle de couverture évite de laisser des options du code hors de la ligne de produits.

**Rendu T2 :** `taskforge_v2.uvl`, matrice option–code–dépendance–test, résultat du comptage et explication de la nouvelle feature. Conservez la configuration minimale et son HTML généré.

---

# Tutoriel 3 — Configurer, générer, tester et faire évoluer

**Objectif :** livrer trois applications à partir du même code réutilisable et assurer une évolution commune.

**Fichiers :** votre modèle v2, `code/taskforge_a_completer.js.txt`, `configurations/exemple_minimal.json`, `configurations/partielle.json`.

| Temps | Étape |
|---|---|
| 0–20 min | Configurations et complétion dans FlamapyIDE |
| 20–40 min | Compléter l’export CSV |
| 40–60 min | Générer les trois produits |
| 60–65 min | Pause |
| 65–85 min | Tester les comportements et le code produit |
| 85–105 min | Ajouter une feature et régénérer |
| 105–120 min | Test de non-régression et livraison |

## 1. Répondre à trois commandes

| Commande | Choix à satisfaire ; toutes les autres options sont exclues |
|---|---|
| Kiosque | Memory, Kiosk, Filters |
| Étudiant | LocalStorage, Priorities, DueDates |
| Pro | LocalStorage, Priorities, DueDates, Filters, Statistics, CSVExport, JSONExport |

Dans FlamapyIDE, sélectionnez les features, observez les dépendances et vérifiez la validité. Exportez le modèle UVL une dernière fois.

Le format d’export des configurations de FlamapyIDE peut varier ; **nous n’en dépendons pas**. Recopiez la sélection finale dans le format stable ci-dessous, avec racine et regroupements. Faites valider ce JSON par l’atelier utilisant le même UVL.

```json
{
  "name": "TaskForge Kiosque",
  "selected": ["TaskForge", "TaskManagement", "Storage", "Memory", "Kiosk", "Filters"]
}
```

Une configuration complète exclut tout ce qui n’est pas listé. Une configuration partielle laisse les éléments non cités indécidés.

**Complétion :** imposez Statistics et excluez LocalStorage. Quels autres choix deviennent nécessaires ? Plusieurs produits restent-ils possibles ? Utilisez les opérations de configuration de FlamapyIDE ; si nécessaire, reproduisez dans l’atelier avec `partielle.json`. Testez ensuite une demande contenant à la fois JSONExport et Kiosk et expliquez le refus. Téléchargez une complétion valide.

## 2. Compléter un composant réutilisable

Importez `taskforge_a_completer.js.txt` dans l’atelier. La fonction `exportCSV()` est volontairement incomplète. Complétez-la pour exporter les tâches avec quatre colonnes : title, done, priority, due.

Éléments déjà disponibles :

- `tasks` : tableau d’objets ;
- `csvCell(value)` : encodage des cellules, gestion des guillemets et précaution contre l’interprétation de formules ;
- `download(name, text, type)` : téléchargement d’un fichier ;
- valeurs manquantes : utilisez une chaîne vide pour priority et due.

Démarche : créer un tableau avec une ligne d’en-tête, ajouter une ligne par tâche, appliquer `csvCell` à chaque cellule, joindre les cellules par une virgule et les lignes par `\r\n`, puis télécharger avec le type `text/csv;charset=utf-8`.

Ne changez ni l’interface du composant ni les autres fonctions. Testez un titre contenant une virgule et des guillemets. Téléchargez votre gabarit corrigé avant de poursuivre.

## 3. Produire les applications

Pour chaque commande :

1. Chargez le même UVL v2 et le même gabarit corrigé.
2. Collez la configuration complète, puis validez-la.
3. Générez l’aperçu. Si le stockage local est refusé dans l’aperçu, c’est attendu : son cadre est isolé.
4. Cliquez sur « Générer et télécharger HTML ». Ouvrez le fichier dans son propre onglet.
5. Cliquez sur « Télécharger le dossier de construction JSON » : il contient le modèle, la configuration, le gabarit et le produit généré. Renommez ce fichier par produit.

Un produit livré fonctionne seul : ni l’atelier ni FlamapyIDE ne sont nécessaires à son exécution. Pour les tests de persistance, gardez un nom distinct par produit ; le stockage est indexé par ce nom. Sur certains navigateurs, le stockage des fichiers locaux est restreint : signalez l’échec et demandez à l’enseignant un navigateur autorisé ou une origine HTTP fournie. Ne remplacez pas silencieusement un test de persistance par un test en mémoire.

## 4. Vérifier le comportement ET le code

| Test | Résultat attendu |
|---|---|
| Créer, renommer, terminer puis supprimer une tâche | Fonctionne dans les trois produits |
| Créer une tâche composée d’espaces | Aucun ajout |
| Kiosque : ajouter puis recharger | Aucune tâche conservée |
| Étudiant et Pro : ajouter puis recharger le même fichier | Tâche conservée lorsque localStorage est autorisé |
| Étudiant : priorité et échéance | Valeurs affichées et conservées |
| Pro : terminer une tâche, filtrer | Liste et compteur cohérents |
| Pro : exporter CSV et JSON | Fichiers lisibles, données cohérentes |
| Pro : titre contenant virgule, guillemets, accents | CSV correctement encodé |
| Configuration Memory + LocalStorage | Production refusée |
| Configuration JSONExport + Kiosk | Production refusée |

Dans la zone « Code du produit généré », recherchez `function exportCSV`, `function exportJSON`, `function updateStatistics` et `localStorage.setItem` : ils doivent être absents des produits qui ne les sélectionnent pas. Le nom d’une feature dans un manifeste n’est pas la preuve de la présence de son implémentation. Comparez les blocs de fonctions.

**À expliquer :** cacher un bouton dans un produit contenant tout le code et retirer le composant au moment de la production correspondent à deux stratégies différentes. Dans ce TP, le code non sélectionné est effectivement retiré.

## 5. Évolution : suppression groupée des tâches terminées

Nouvelle demande : « proposer une option ClearCompleted permettant de supprimer toutes les tâches terminées d’un seul clic ».

1. Ajoutez `ClearCompleted` comme feature optionnelle à la racine dans FlamapyIDE, sans nouvelle contrainte métier.
2. Vérifiez le modèle et comparez le nombre de configurations avec v2. Justifiez l’évolution du nombre.
3. Ajoutez au gabarit, avant l’affectation `document.getElementById('add').onsubmit`, un bloc `//#if ClearCompleted` … `//#endif`.
4. Dans ce bloc, créez une fonction `clearCompleted` qui filtre `tasks` pour ne garder que les tâches non terminées, puis appelle `persist()` et `render()`.
5. Ajoutez un bouton via `toolbar.append(button('Supprimer les terminées', clearCompleted));`.
6. Sélectionnez cette option pour Étudiant et Pro ; laissez-la exclue pour Kiosque. Régénérez les trois produits à partir de la même version du gabarit.
7. Vérifiez que le bouton et la fonction sont absents du Kiosque, présents dans les deux autres, et que les tâches non terminées sont préservées. Pour les produits persistants, rechargez après suppression.

**Rendu T3 :** modèle v3, gabarit final, trois configurations, trois applications HTML, dossiers de construction, matrice des tests remplie. Ajoutez dix lignes sur la réutilisation : actifs communs, points de variation, moment de fixation des choix, traçabilité et limites.

## Si vous terminez en avance

Associez des coûts pédagogiques à trois options ; trouvez la configuration la moins coûteuse répondant à une demande partielle en comparant les configurations compatibles. Ce bonus ne suppose pas la prise en charge d’attributs numériques par l’atelier. Discutez aussi les limites d’un stockage local pour un produit réellement partagé.

## Ce qui sera évalué

| Critère | Points |
|---|---|
| Modèle T1 correct et justifié | 4 |
| Diagnostics et corrections | 4 |
| Reconstruction depuis le code et traçabilité | 4 |
| Configurations, génération et évolution réutilisable | 5 |
| Tests et explication des limites | 3 |

## Sources et périmètre

- Vos quatre tutoriels VARIAMOS, version 2.0 de novembre 2024 : progression modélisation, représentation exécutable, vérification, configuration.
- [FlamapyIDE : documentation et code](https://github.com/flamapy/flamapy-ide) ; [outil en ligne](https://ide.flamapy.org/).
- [Universal Variability Language : syntaxe et sémantique](https://universal-variability-language.github.io/).
- [TodoMVC / IndexedDB](https://github.com/philnash/todomvc-indexeddb) : piste de prolongement sur un dépôt tiers ; aucun code de ce dépôt n’est inclus dans ce kit.

Le kit traite le niveau booléen : obligatoire, optionnel, alternative, implication, vérification et configuration. Les attributs numériques, les cardinalités d’instances et la comparaison de performances entre solveurs ne font pas partie du tronc commun de six heures.


<!-- Page 2 -->
# TaskForge — modèles UVL fournis

## modeles/00_squelette.uvl

```uvl
features
    TaskForge
        mandatory
            TaskManagement

```

## modeles/A_morte.uvl

```uvl
features
    TaskForge
        mandatory
            TaskManagement
            Storage
                alternative
                    Memory
                    LocalStorage
        optional
            Priorities
            DueDates
            Filters
            CSVExport
            Statistics
            Kiosk
constraints
    Kiosk => Memory
    Statistics => Filters
    CSVExport => Kiosk
    CSVExport => LocalStorage

```

## modeles/B_fausse_optionnelle.uvl

```uvl
features
    TaskForge
        mandatory
            TaskManagement
            Storage
                alternative
                    Memory
                    LocalStorage
        optional
            Priorities
            DueDates
            Filters
            CSVExport
            Statistics
            Kiosk
constraints
    Kiosk => Memory
    Statistics => Filters
    TaskManagement => Filters

```

## modeles/C_incoherent.uvl

```uvl
features
    TaskForge
        mandatory
            TaskManagement
            Storage
                alternative
                    Memory
                    LocalStorage
        optional
            Priorities
            DueDates
            Filters
            CSVExport
            Statistics
            Kiosk
constraints
    Kiosk => Memory
    Statistics => Filters
    Memory
    LocalStorage

```

## Contrat de construction (en-tête de code/taskforge_existant.js.txt)

```
/* TaskForge: code pédagogique original, licence MIT, 2026.
   Ce fichier est un GABARIT, pas un script à exécuter directement.
   Les directives //#if sont interprétées par le générateur fourni.
   Elles représentent des options de construction (pas des options natives de JS).
   Lisez d'abord les préconditions, puis les zones conditionnelles.
*/
// Contrat de construction issu du produit existant :
// 1. Exactement un stockage : Memory ou LocalStorage.
// 2. Kiosk implique Memory (politique produit : aucun stockage persistant).
// 3. Statistics appelle visibleTasks(), fourni par Filters.
// 4. JSONExport implique LocalStorage (politique commerciale de cette version,
//    PAS une nécessité technique : une autre politique serait possible).

'use strict';
```
