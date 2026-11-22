
Tutoriel 2 : Retrouver la variabilité dans un code existant

Objectif  de la séance: reconstruire un modèle à partir d’un produit à options de construction et établir une traçabilité qui permettra sa réutilisation.

Vous recevez un code existant plus récent que les exigences du T1. Il contient une fonctionnalité supplémentaire. Votre modèle doit représenter ce que la famille sait réellement construire, sans recopier aveuglément chaque détail technique comme une feature.

Fichiers : code/taskforge_existant.js.txt, code/moteur.js, les produits dans produits_exemples/.
 
1. Explorer la famille existante

Travail à réaliser: 

    Ouvrez kiosque.html et pro.html.
    Ajoutez deux tâches, terminez-en une, essayez les filtres et les exports disponibles, puis rechargez. Comparez les fonctionnalités visibles. Le nom du produit et la liste de ses features sont affichés en haut.
    Consignez au moins trois différences. Distinguez : capacité de l’application, choix utilisateur pendant l’exécution, et donnée d’une tâche. Par exemple, « disposer de priorités » est une feature ; « cette tâche est de priorité haute » est une donnée.

2. Inspecter le code source

Dans l’atelier, importez taskforge_existant.js.txt dans « Gabarit de code ». Ne le lancez pas directement comme JavaScript : plusieurs implémentations alternatives y coexistent avant prétraitement.

Recherchez //#if et les contrats de construction en début de fichier. Complétez la matrice suivante, avec un exemple pour chaque option :
Option de construction 	Fonction ou bloc concerné 	Comportement visible 	Dépendance observée 	Nature de la justification
Memory 	persist() vide 	Perte des tâches au rechargement 	Alternative à LocalStorage 	Architecture
… 	… 	… 	… 	Technique, commerciale ou politique produit

Questions :

    Quels blocs sont présents dans tous les produits ?
    Pourquoi les deux fonctions persist() ne doivent-elles pas coexister dans un même produit ?
    Quelle fonction appelle visibleTasks() ? Où cette fonction est-elle définie ?
    Quelle option supplémentaire apparaît par rapport au T1 ?
    La dépendance entre JSONExport et LocalStorage est-elle une nécessité du langage ou une règle de cette gamme ? Que faudrait-il changer pour la supprimer ?
    Pourquoi le tableau tasks, la fonction render et chaque bouton individuel ne deviennent-ils pas automatiquement des features ?

Attention : une dépendance technique peut être établie par un appel de fonction. Une règle commerciale ne se déduit pas de cet appel ; ici elle est explicitée dans le contrat du code. Dans un vrai projet, il faudrait la confirmer avec une partie prenante.

3. Reconstruire le modèle v2

Partez de votre modèle v1. Ajoutez l’option découverte et la contrainte correspondant au contrat de construction. Gardez les autres règles et identifiants inchangés.

Vérifiez dans FlamapyIDE :

    syntaxe et satisfiabilité ;
    absence de features mortes ;
    possibilité de sélectionner chaque nouvelle option ;
    nombre exact de configurations ;
    compatibilité des anciens produits.

Point de contrôle : le modèle v2 contient 12 features. L’ajout de la fonctionnalité ne doit pas supprimer les anciens produits : ils restent représentables lorsque la nouvelle feature est exclue.

Travail à réaliser: expliquez pourquoi les deux produits observés ne suffisent pas à prouver que toutes les combinaisons imaginables sont autorisées. Votre reconstruction repose sur l’observation, les blocs conditionnels, les dépendances et le contrat, pas uniquement sur deux captures d’écran.

4. Du modèle au code réutilisable

Ouvrez code/moteur.js en l’important temporairement dans la zone de code. Repérez les trois fonctions parse, preprocess et build, puis réimportez le gabarit TaskForge.

Travail à réaliser: sans analyser chaque ligne du parseur, expliquez 

    ce qui est vérifié avant la production ;
    comment un bloc //#if X est conservé ou supprimé ;
    pourquoi une option du code absente du modèle provoque une erreur ;
    pourquoi ce mécanisme fixe la variabilité à la construction plutôt qu’en cours d’utilisation ;
    ce qu’un compilateur JavaScript vérifierait encore après le prétraitement.

Le générateur retire des blocs source, puis les insère dans une page HTML avec un petit manifeste de construction. Il ne prouve pas la correction de tout JavaScript arbitraire : vos tests restent nécessaires.

5. Première preuve de cohérence

Travail à réaliser:

    Dans l’atelier, importez votre UVL v2 et configurations/exemple_minimal.json, puis le gabarit complet existant.
    Cliquez sur « Valider », puis « Générer ».
    Vérifiez que le produit minimal n’offre ni priorité ni export.
    Retirez provisoirement JSONExport du modèle tout en conservant le gabarit : la génération doit refuser une option inconnue, même si cette option n’est pas sélectionnée.
    Rétablissez ensuite le modèle complet. Ce contrôle de couverture évite de laisser des options du code hors de la ligne de produits.

Rendu T2 : taskforge_v2.uvl, matrice option–code–dépendance–test, résultat du comptage et explication de la nouvelle feature. Conservez la configuration minimale et son HTML généré.


