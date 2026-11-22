
Tutoriel 1 : Créer, vérifier et corriger un modèle

Objectif du tutoriel : passer d’exigences à un modèle de ligne de produits, puis diagnostiquer trois défauts indépendants.

Fichiers : modeles/00_squelette.uvl, puis les trois modèles A, B et C. N’ouvrez ces derniers qu’à l’étape de diagnostic.
 
1. Exigences de la version 1

Les exigences ci-dessous portent sur le périmètre du TP.

Travail à réaliser :

    Créez une table avec ID d’exigence, feature(s), obligatoire/optionnel/alternative, contrainte et justification. 
    Utilisez exactement les identifiants ci-dessus, ainsi que TaskForge, TaskManagement et Storage.
    La stabilité des identifiants permettra de relier modèle et code.

ID 	Exigence
R01 	Tout produit gère les tâches : créer, renommer, terminer et supprimer.
R02 	Tout produit utilise exactement un stockage : Memory ou LocalStorage.
R03 	Memory conserve les tâches seulement durant la session de la page ; recharger les efface.
R04 	LocalStorage permet de retrouver les tâches après rechargement, si le navigateur autorise ce stockage.
R05 	Priorities ajoute une priorité normale ou haute.
R06 	DueDates ajoute une échéance.
R07 	Filters permet d’afficher toutes les tâches, celles à faire ou celles terminées.
R08 	CSVExport ajoute l’export CSV.
R09 	Statistics affiche un compteur sur les tâches actuellement filtrées ; son composant nécessite Filters.
R10 	Kiosk signale un usage sur poste partagé et impose Memory.
R11 	Priorities, DueDates, Filters, CSVExport, Statistics et Kiosk sont optionnels, sous réserve des contraintes R09 et R10.

NB: Kiosk ne garantit ni la confidentialité de tout le poste ni l’effacement d’éventuels fichiers téléchargés.
 
2. Construire le modèle UVL

Importez le squelette. Ajoutez Storage comme enfant obligatoire de TaskForge, puis son groupe alternatif. Ajoutez les six options. Écrivez deux implications dans la section constraints.

Exemple de syntaxe sur un autre domaine :

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

Questions à résoudre :

    pourquoi Storage est-il obligatoire mais ses enfants ne sont-ils pas tous obligatoires ?
    Pourquoi Statistics => Filters n’est-il pas équivalent à Filters => Statistics ?
    Un enfant optionnel peut-il être sélectionné si son parent est absent ?

Point de contrôle : votre modèle possède 11 features en comptant la racine et les regroupements. Son arbre contient un groupe alternatif de deux enfants et six features optionnelles au niveau de la racine. Téléchargez taskforge_v1.uvl.
 
3. Vérifier le modèle

Avant de lancer les opérations, prédisez les réponses aux 4 questions suivantes: 

    au moins un produit existe-t-il ?
    CSVExport est-il réalisable ?
    Filters est-il présent dans tous les produits ?
    Quels éléments forment le socle ?

Travail à réaliser :

    Lancez les cinq analyses de la prise en main. Notez résultats, outil et interprétation. Le modèle attendu doit admettre plusieurs produits, ne comporter aucune feature morte et ne pas rendre implicitement obligatoire une feature annoncée comme optionnelle.
    Vérifiez aussi les quatre sélections dans le tableau ci-dessous. Pour chacune, ajoutez racine et parents obligatoires et considérez les options non citées comme exclues 
    Expliquez pourquoi une erreur de syntaxe et un modèle sans aucun produit sont deux problèmes différents.

Sélection 	Question
Memory, Kiosk, Filters 	Est-elle valide ?
LocalStorage, Kiosk 	Quelle contrainte décide ?
Memory, Statistics 	Quelle dépendance manque ?
Memory, LocalStorage 	Quel groupe décide ?
 
4. Diagnostiquer trois modèles fautifs

Ouvrez successivement A, B et C ; chaque fichier repart du modèle de référence et introduit un défaut indépendant. Ne cumulez pas les corrections d’un fichier sur l’autre.

Travail à réaliser : pour chaque modèle 

    Vérifiez la satisfiabilité avant d’interpréter les autres résultats.
    Cherchez les features mortes, les features du socle et les faussement optionnelles si le modèle est satisfiable.
    Relevez les contraintes impliquées et construisez une explication de deux à quatre phrases.
    Corrigez en respectant R01–R11. Supprimer une vraie exigence pour faire passer le solveur n’est pas une correction acceptable.
    Relancez les analyses et comparez au modèle de référence.

Une feature est morte si aucun produit valide ne la contient. Une feature optionnelle est faussement optionnelle si, dès que son parent est sélectionné, elle doit l’être aussi. Pour un modèle globalement incohérent, commencez par rétablir l’existence de produits : des listes de features calculées sur un ensemble vide ne constituent pas un diagnostic utile.

Rendu T1 : votre UVL, les trois fichiers corrigés, le tableau des exigences et un tableau « fichier / symptôme / cause / correction / résultat après correction ». Une page d’explications maximum.

