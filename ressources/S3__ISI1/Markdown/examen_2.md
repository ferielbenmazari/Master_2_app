# Master MIAGE ISI1 - Ingénierie des Exigences

**Enseignant :** Camille Salinesi  
**Date :** Jeudi 31 Janvier 2013  
**Consignes :** Répondre sur l'énoncé du sujet / Sans document  

---

## A. Questions de cours (5 points)

*Répondez par VRAI ou FAUX, justifiez si (et seulement si) vous répondez FAUX.*

1. Il est nécessaire de numéroter les exigences au moyen d'un identifiant unique. À la fois pour des raisons de traçabilité, mais aussi de partage, de gestion de configuration, et de classification.
2. Les exigences définies dans le modèle de Kano comme étant de type « must have » sont des exigences implicites.
3. Les « soft goals » du formalisme $i^*$ sont des buts qui ne peuvent jamais être satisfaits puisqu'on n'a pas de critère mesurable.
4. Dans le formalisme KAOS, le lien de décomposition OR est formellement équivalent au XOR : le but affiné est satisfait si et seulement si l'un des buts de plus bas niveau est satisfait.
5. Les cas d'utilisation d'un modèle de cas d'utilisation correspondent à des buts complémentaires, c'est-à-dire qui affinent un même but par une décomposition AND dans les termes du formalisme KAOS.
6. Le cadre tridimensionnel de l'IE de Klaus Pohl indique que le processus d'ingénierie des exigences progresse selon trois axes : la complétude, l'accord et la formalisation.
7. Les exigences non fonctionnelles peuvent : (a) servir de critère de décision pour choisir les exigences fonctionnelles, (b) s'affiner en exigences fonctionnelles, etc., (c) servir d'attribut qualité associé à une ou plusieurs exigences fonctionnelles.
8. On peut chercher à vérifier les exigences en organisant des revues. Cela permettra d'identifier les erreurs communes telles que : ambiguïté, incohérence, sur- et sous-spécification, etc.
9. La technique AHP permet d'améliorer la cohérence des exigences.
10. Le but du « triage » est de regrouper les exigences en trois paquets : les plus importantes, les peu importantes, et les autres.

---

## B. Modélisation de Cas d'Utilisation (5 points)

Le modèle de cas d'utilisation ci-dessous présente les besoins pour un système de tenue de compte dans une société de type banque en ligne.

```
+-------------------------------------------------------------+
| System: Compte en Ligne                                     |
|                                                             |
|   (Client) ------ ( Accéder au Solde du compte )            |
|               \                                             |
|                -- ( Modifier le Solde du compte )           |
|                                                             |
|                   ( Ouverture du compte ) ------ (Opérateur |
|                                                   Banque    |
|                   ( Clôture ) ------------------  en ligne) |
+-------------------------------------------------------------+
```

* **a-** Identifier explicitement les erreurs faites dans ce modèle (en les entourant lorsque c'est possible), et expliquez-les à droite.
* **b-** Proposez une version correcte.
* **c-** Spécifiez un cas d'utilisation de votre choix.

---

## C. Modélisation de buts (5 points)

Le modèle KAOS ci-dessous présente la décomposition des buts pour un système de location de cassettes vidéo (Système location VOD).

```
                      [ Système location VOD ]
                             /   |   \
                            /    |    \
            [ téléchargement ] [ nouveau film ] [ authentifier ]
               /         \            |               |
  [ en visionnage   [ enregistrer   [AND]          [  ^  ]
    temps réel ]       le .avi ]    /   \         /   |   \
                                   /     \       /    |    \
                     [ Par les abonnés   [ À partir [Créer [Saisir [Saisir le
                       En leur offrant     de sites  un     Le     mot de
                       des avantages ]     tiers ]   compte] login] passe]
```

* **a-** Identifiez explicitement les erreurs faites dans ce modèle (en les entourant lorsque c'est possible), et expliquez-les à droite.
* **b-** Proposez un modèle correct.

---

## D. Réflexion (5 Points)

Récemment employé dans une société afin d'améliorer la maturité des pratiques en matière d'ingénierie des exigences, vous constatez que les principaux outils employés pour spécifier les exigences sont Excel (pour lister les exigences individuellement) et Word (pour rédiger les cahiers des charges).

En outre, deux projets ont - chose exceptionnelle - déjà pris les devants, l'un en mettant en place un wiki pour étendre la collecte des besoins à un plus grand nombre de parties prenantes, l'autre en recensant systématiquement les exigences dans le contexte de l'activité de test, avec l'outil Quality Center.

**Question :** Que pensez-vous de ce constat, quelles sont vos préconisations ?