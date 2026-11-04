# PROFIL-PROF — ISI1 Ingénierie des exigences (C. Salinesi)

> Première version rédigée par l'architecte à partir des **4 annales** (`ressources/S3__ISI1/Markdown/exam_1.md`, `examen_2.md`, `examen_3.md`, `examen_4.md`).
> **À compléter par `course-analyst`** avec les supports de cours (sections 4, 5 et 6), puis à valider par l'utilisatrice.
> Les citations entre « » sont copiées des annales. Tout ce qui est marqué *à confirmer* vient de connaissances générales et **ne doit pas** être utilisé dans le contenu tant qu'un support du cours ne l'a pas confirmé.

## 1. Formats d'évaluation

| Format | Poids observé | Détail |
|---|---|---|
| **Vrai/Faux justifié** | 5/20 (2013, 10 questions) → 10/20 (2014, 20 questions) | « Répondez par VRAI ou FAUX, justifiez si (et seulement si) vous répondez FAUX. » Sans document. |
| **Trouver les erreurs d'un modèle** puis proposer une version correcte | 5 pts | Cas d'utilisation (« Identifier explicitement les erreurs faites dans ce modèle… Proposez une version correcte. Spécifiez un cas d'utilisation de votre choix. »), modèle KAOS de buts. |
| **Spécification d'exigences fautives** | 5 pts | Tableau R1…R5 : « identifiez la ou les erreurs qu'elle contient ; proposez une version correcte ». Ex. « Le système doit être facile à utiliser. » |
| **Calcul de priorisation** | 3 pts | « Appliquez la méthode AHP à la matrice de priorité paires à paires… Vous ne calculerez pas l'indice de cohérence. » (matrice incomplète à compléter par réciprocité) |
| **Réflexion argumentée** | 2-5 pts | Cas d'entreprise (Excel/Word, wiki, Quality Center) ou citation d'un blog : « Que pensez-vous… ? Quelles erreurs permet-elle d'éviter ? Quelles techniques/outils préconisez-vous ? » |
| **Étude de cas / projet** | contrôle continu | Deadbot MemoriaTech (cas d'utilisation → questionnaire → triage Kano → priorisation → cahier des charges) ; système IA (élicitation, cahier des charges « vision », gouvernance, NFR de confiance/transparence/conformité). |

Durée type : 1h30, sans document, réponses sur l'énoncé.

## 2. Tournures typiques (à imiter)
- « Il est nécessaire de… À la fois pour des raisons de traçabilité, mais aussi de partage, de gestion de configuration, et de classification. »
- « Les exigences définies dans le modèle de Kano comme étant de type « … » sont… »
- « Le cadre tridimensionnel de l'IE de Klaus Pohl indique que… »
- « Selon le Standard IEEE 830, la section « exigences spécifiques »… »
- « Il est parfaitement acceptable de… dès l'instant que… »
- « Il ne faut jamais que… : cela génère de la complexité inutile. »
- « Selon les dernières recherches, il est tout à fait possible que… »
Les énoncés sont **longs, précis et presque vrais** : l'erreur est souvent dans une seule précision (un mot, un chiffre, une liste incomplète ou en trop).

## 3. Pièges récurrents (repérés dans les annales)
- **Kano** *(définitions à confirmer dans les supports)* : « must have » = implicites, génèrent de l'insatisfaction **s'ils manquent** mais **pas** de satisfaction s'ils sont présents ; « exciters » = non dits, innovation, différenciation.
- **KAOS** : OR ≠ XOR ; AND = raffinement complet.
- **Cas d'utilisation** : ce sont des buts **complémentaires / alternatifs ?** (piège posé deux années de suite, formulé différemment).
- **Cadre 3D de Pohl** : les trois axes et ce qu'ils signifient (*à confirmer dans les supports* ; l'annale 2013 propose « complétude, accord, formalisation », l'annale 2014 cite l'axe « spécification ») — piège sur le nom ou le sens d'un axe.
- **Triage** : regroupement en paquets — piège sur le critère.
- **Techniques de priorisation** : « top 10 » vs « 100 $ » (vote cumulatif ou non, critère) ; matrice d'Eisenhower (importance × urgence) ; AHP (cohérence ≠ priorisation).
- **Qualité des exigences** : compréhensibilité, gabarits, revues (ambiguïté, incohérence, sur/sous-spécification), niveaux d'abstraction mélangés, homonymes et glossaire.
- **NFR** : peuvent servir de critère de choix, s'affiner, se « fonctionnaliser » — piège sur le sens du raffinement (FR → NFR ?).
- **Mots qui doivent alerter** : « parfaitement », « jamais », « garantir », « unique différence », « toute exigence ».

## 4. Notions sur lesquelles le prof insiste (d'après les annales — à compléter avec les supports)
Identifiant unique et **traçabilité** · modèle de **Kano** · **KAOS** et **i*** (soft goals) · **cas d'utilisation** · **cadre tridimensionnel de Pohl** · **priorisation** (AHP, top 10, 100 $, Eisenhower) et **triage** · **qualité des exigences** et revues · **gabarits** · **IEEE 830** (structure d'un cahier des charges) · **modèle d'échange** des exigences (dépendances, attributs) · top-down / bottom-up et architecture · **NFR** · outils (Excel, Word, wiki, Google Drive, Quality Center, outils d'IE) · **élicitation** (brainstorming, focus groups, interviews, ateliers, fouille de documents, *quick & dirty ethnography*, maquettes, questionnaires) · **éthique, RGPD, gouvernance** pour les systèmes à IA.

## 5. Exemples et cas fétiches (à réutiliser comme fil rouge)
- **Deadbot de MemoriaTech** (parties prenantes : entreprise, familles, développeurs, associations de protection des données, psychologues du deuil ; NFR : vie privée, limites techniques, éthique).
- **Vente en ligne de matériel électrique** pour électriciens professionnels (exigences R1-R5 fautives).
- **Compte en ligne / banque** (cas d'utilisation fautif).
- **Location de VOD** (modèle KAOS fautif).
- **Débit de 25 images/s 7 j/7** (identification et vérifiabilité d'une exigence).
- Les **10 systèmes IA** de l'examen 4 (coaching santé, finances, voyage, shopping, smart home, reconnaissance de plantes, vie numérique, fake news, billetterie, sommeil).

## 6. Vocabulaire exact
FR du prof : *exigence, élicitation, cahier des charges, partie prenante, but, raffinement, priorisation, triage, traçabilité, gabarit, glossaire, revue, spécification, vérifiable*. EN du cours : *requirement, elicitation, stakeholder, goal, refinement, prioritization, traceability, template, review, specification*. (À compléter avec les supports IREB.)

## 7. Ce qui rapporte des points
- V/F : la **justification** d'un FAUX doit corriger précisément l'erreur (pas de justification si VRAI).
- Modèles : **identifier explicitement** chaque erreur, l'expliquer, puis **redessiner** correctement.
- Exigences : nommer le **défaut de qualité** (ambiguë, non vérifiable, composée, solution imposée, hors système…) et réécrire au format « Le système doit… » vérifiable.
- AHP : compléter la matrice par réciprocité, normaliser, moyenne des lignes, classement (*procédure exacte à reprendre du support de cours*).
- Réflexion : avis argumenté + erreurs évitées + techniques/outils complémentaires.
- Projets : exigences **numérotées individuellement** ; justification des techniques, sources citées.
