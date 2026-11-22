
Appliquez ce que vous avez appris avec une étude de cas et l'outil FlamapyIDE et testez vous
Cas étudié

Vous êtes ingénieur logiciel chez TaskForge, éditeur de gestionnaires de tâches. Vous devez construire une famille réutilisable, expliquer les variantes autorisées et livrer des applications qui fonctionnent. Votre réussite se mesure à la cohérence entre les exigences, le modèle, les configurations, le code et les tests.

Le code TaskForge fourni est un code pédagogique original créé par vibe coding, exécutable après génération ; il n’est pas une extraction de TodoMVC ni un logiciel industriel. Sa petite taille permet d’examiner toute la chaîne dans la durée des 3 tutoriels.

JavaScript possède ici des directives de prétraitement ajoutées par notre générateur : //#if n’est pas une instruction du langage JavaScript.

A faire avant de démarrer le premier tutoriel :

    Décompressez l’archive étudiante dans le zip ci-dessoous dans un dossier personnel. Ouvrez ATELIER.html par double-clic dans un navigateur récent.
    Ouvrez FlamapyIDE dans un second onglet. Internet est nécessaire au chargement de l’outil et de ses composants. L’atelier local, lui, ne dépend d’aucun service externe.
    Gardez ouverts ce guide, FlamapyIDE et l’atelier. Aucun terminal, aucune installation, aucun compte GitHub n’est requis.
    Créez un dossier de rendu contenant T1, T2, T3. Téléchargez régulièrement vos fichiers ; un rechargement de l’atelier efface vos modifications non téléchargées.
    Pour ouvrir le code, utilisez le champ « Gabarit de code » de l’atelier : il permet de le lire, le modifier et le télécharger sans éditeur supplémentaire.

Pré-requis : savoir lire une fonction JavaScript, une condition, un tableau, et comprendre obligatoire/optionnel/exclusion/implication. Vous n’avez pas à apprendre un framework ni à coder une application complète.

Ce que font les outils :

Outil 	Fonctionalités
FlamapyIDE 	Éditer le modèle UVL, afficher l’arbre, vérifier, configurer
ATELIER.html 	Importer votre UVL, valider une configuration complète, retirer les blocs non sélectionnés et produire un HTML autonome
Analyseur local de secours 	Énumérer les configurations de ce petit modèle ; comparer les résultats avec FlamapyIDE

FlamapyIDE ne génère pas lui-même l’application TaskForge. Le passage modèle → code est assuré par le générateur fourni, que vous inspecterez. Il importe le même fichier UVL : les contraintes ne sont donc pas recopiées manuellement dans une seconde liste de règles.
 
Prise en main de FlamapyIDE

La disposition exacte peut évoluer. Les intitulés ci-dessous correspondent à la documentation du projet ; cherchez l’opération équivalente si un libellé diffère.

    Depuis l’accueil, créez un modèle ou utilisez Open file pour importer un .uvl.
    Dans la vue Source, remplacez le texte par votre modèle. Gardez une indentation de quatre espaces ; évitez les tabulations et les noms contenant des espaces.
    Vérifiez l’absence d’erreur de syntaxe. Passez à Graph pour lire les groupes et les dépendances.
    Conservez le calcul In-browser. Dans les opérations, choisissez un solveur disponible : SAT convient aux tests de satisfiabilité, aux features mortes et obligatoires ; utilisez SAT ou BDD pour compter les configurations selon les opérations disponibles.
    Lancez Satisfiable, Number of configurations, Dead features, Core features, False optional features. Consignez le résultat du panneau Output. Ne confondez pas estimation structurelle et dénombrement exact par solveur.
    Pour configurer, utilisez le panneau Configuration. Distinguez un choix explicitement exclu d’un choix encore indécidé. Vérifiez les complétions ou configurations compatibles via les opérations proposées.
    Exportez le modèle en UVL. Si l’export ne fonctionne pas, copiez le texte dans le champ UVL de l’atelier et cliquez sur « Télécharger le modèle ».

Si l’analyse ou le configurateur restent indisponibles après cinq minutes :

    poursuivez dans l’atelier local avec le même UVL et les boutons « Analyser » / « Calculer les complétions ».
    Indiquez dans votre rendu quel outil a produit chaque résultat.
    L’analyseur local est volontairement limité au sous-ensemble booléen décrit dans l’atelier, à 18 features et à l’énumération exhaustive. Il n’est pas une réimplémentation générale de Flamapy.

    TaskForge Etudiants Fichier ZIP


