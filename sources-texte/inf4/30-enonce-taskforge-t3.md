
Tutoriel 3: Configurer, générer, tester et faire évoluer

Objectif de la séance: livrer trois applications à partir du même code réutilisable et assurer une évolution commune.

Fichiers : votre modèle v2, code/taskforge_a_completer.js.txt, configurations/exemple_minimal.json, configurations/partielle.json.

1. Répondre à trois commandes

Commande 	Choix à satisfaire ; toutes les autres options sont exclues
Kiosque 	Memory, Kiosk, Filters
Étudiant 	LocalStorage, Priorities, DueDates
Pro 	LocalStorage, Priorities, DueDates, Filters, Statistics, CSVExport, JSONExport

Dans FlamapyIDE, sélectionnez les features, observez les dépendances et vérifiez la validité. Exportez le modèle UVL une dernière fois.

Le format d’export des configurations de FlamapyIDE peut varier ; nous n’en dépendons pas. Recopiez la sélection finale dans le format stable ci-dessous, avec racine et regroupements. Faites valider ce JSON par l’atelier utilisant le même UVL.

{
  "name": "TaskForge Kiosque",
  "selected": ["TaskForge", "TaskManagement", "Storage", "Memory", "Kiosk", "Filters"]
}

Une configuration complète exclut tout ce qui n’est pas listé. Une configuration partielle laisse les éléments non cités indécidés.

Travail à réaliser :

    Imposez Statistics et excluez LocalStorage. Quels autres choix deviennent nécessaires ? Plusieurs produits restent-ils possibles ? Utilisez les opérations de configuration de FlamapyIDE ; si nécessaire, reproduisez dans l’atelier avec partielle.json.
    Testez ensuite une demande contenant à la fois JSONExport et Kiosk et expliquez le refus.
    Téléchargez une complétion valide.

2. Compléter un composant réutilisable

Travail à réaliser :

    Importez taskforge_a_completer.js.txt dans l’atelier.
    La fonction exportCSV() est volontairement incomplète. Complétez-la pour exporter les tâches avec quatre colonnes : title, done, priority, due.

Éléments déjà disponibles :

    tasks : tableau d’objets ;
    csvCell(value) : encodage des cellules, gestion des guillemets et précaution contre l’interprétation de formules ;
    download(name, text, type) : téléchargement d’un fichier ;
    valeurs manquantes : utilisez une chaîne vide pour priority et due.

Démarche : créer un tableau avec une ligne d’en-tête, ajouter une ligne par tâche, appliquer csvCell à chaque cellule, joindre les cellules par une virgule et les lignes par \r\n, puis télécharger avec le type text/csv;charset=utf-8.

Ne changez ni l’interface du composant ni les autres fonctions. Testez un titre contenant une virgule et des guillemets. Téléchargez votre gabarit corrigé avant de poursuivre.

3. Produire les applications

Travail à réaliser : pour chaque commande 

    Chargez le même UVL v2 et le même gabarit corrigé.
    Collez la configuration complète, puis validez-la.
    Générez l’aperçu. Si le stockage local est refusé dans l’aperçu, c’est attendu : son cadre est isolé.
    Cliquez sur « Générer et télécharger HTML ». Ouvrez le fichier dans son propre onglet.
    Cliquez sur « Télécharger le dossier de construction JSON » : il contient le modèle, la configuration, le gabarit et le produit généré. Renommez ce fichier par produit.

Un produit livré fonctionne seul : ni l’atelier ni FlamapyIDE ne sont nécessaires à son exécution. Pour les tests de persistance, gardez un nom distinct par produit ; le stockage est indexé par ce nom. Sur certains navigateurs, le stockage des fichiers locaux est restreint : signalez l’échec et demandez à l’enseignant un navigateur autorisé ou une origine HTTP fournie. Ne remplacez pas silencieusement un test de persistance par un test en mémoire.

4. Vérifier le comportement ET le code

Travail à réaliser:

    Dans la zone « Code du produit généré », recherchez function exportCSV, function exportJSON, function updateStatistics et localStorage.setItem : ils doivent être absents des produits qui ne les sélectionnent pas. Le nom d’une feature dans un manifeste n’est pas la preuve de la présence de son implémentation.
    Comparez les blocs de fonctions.
    Expliquez comment cacher un bouton dans un produit contenant tout le code et retirer le composant au moment de la production correspondent à deux stratégies différentes. Dans ce TP, le code non sélectionné est effectivement retiré.

Test 	Résultat attendu
Créer, renommer, terminer puis supprimer une tâche 	Fonctionne dans les trois produits
Créer une tâche composée d’espaces 	Aucun ajout
Kiosque : ajouter puis recharger 	Aucune tâche conservée
Étudiant et Pro : ajouter puis recharger le même fichier 	Tâche conservée lorsque localStorage est autorisé
Étudiant : priorité et échéance 	Valeurs affichées et conservées
Pro : terminer une tâche, filtrer 	Liste et compteur cohérents
Pro : exporter CSV et JSON 	Fichiers lisibles, données cohérentes
Pro : titre contenant virgule, guillemets, accents 	CSV correctement encodé
Configuration Memory + LocalStorage 	Production refusée
Configuration JSONExport + Kiosk 	Production refusée

5. Évolution : suppression groupée des tâches terminées

Une nouvelle demande arrive : « proposer une option ClearCompleted permettant de supprimer toutes les tâches terminées d’un seul clic ».

Travail à réaliser :

    Ajoutez ClearCompleted comme feature optionnelle à la racine dans FlamapyIDE, sans nouvelle contrainte métier.
    Vérifiez le modèle et comparez le nombre de configurations avec v2. Justifiez l’évolution du nombre.
    Ajoutez au gabarit, avant l’affectation document.getElementById('add').onsubmit, un bloc //#if ClearCompleted … //#endif.
    Dans ce bloc, créez une fonction clearCompleted qui filtre tasks pour ne garder que les tâches non terminées, puis appelle persist() et render().
    Ajoutez un bouton via toolbar.append(button('Supprimer les terminées', clearCompleted));.
    Sélectionnez cette option pour Étudiant et Pro ; laissez-la exclue pour Kiosque. Régénérez les trois produits à partir de la même version du gabarit.
    Vérifiez que le bouton et la fonction sont absents du Kiosque, présents dans les deux autres, et que les tâches non terminées sont préservées. Pour les produits persistants, rechargez après suppression.

Rendu T3 : modèle v3, gabarit final, trois configurations, trois applications HTML, dossiers de construction, matrice des tests remplie. Ajoutez dix lignes sur la réutilisation : actifs communs, points de variation, moment de fixation des choix, traçabilité et limites.
