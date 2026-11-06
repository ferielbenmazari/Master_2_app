# PROFIL-PROF — ISI1 Ingénierie des exigences (C. Salinesi)

> Version complétée par `course-analyst` à partir des **4 annales** (`ressources/S3__ISI1/Markdown/exam_1.md`, `examen_2.md`, `examen_3.md`, `examen_4.md`) **et** des supports de cours (`sources-texte/isi1/`). À valider par l'utilisatrice.
> Les citations entre « » ou en anglais sont copiées des annales ou des supports. Pour les supports 1 et 2, l'extraction PDF rend « ti » par « = » (« Introduc=on ») : les citations françaises de ces deux supports sont données **avec la graphie corrigée** ; les citations vérifiées mot à mot sont dans `notions.json`.
> Règle : tout ce qui est marqué *à confirmer* est une **lecture** (déduction à partir d'un schéma ou d'un rapprochement) — ne pas l'énoncer comme un fait du cours. Ce qui est marqué **ABSENT DES SUPPORTS** ne peut être appuyé que par l'annale elle-même.
> Il n'existe **aucun corrigé officiel** des annales : les « réponses attendues » ci-dessous sont déduites des supports.

## 1. Formats d'évaluation

| Format | Poids observé | Détail |
|---|---|---|
| **Vrai/Faux justifié** | 5/20 (2013, 10 questions) → 10/20 (2014, 20 questions) | « Répondez par VRAI ou FAUX, justifiez si (et seulement si) vous répondez FAUX. » Sans document. |
| **Trouver les erreurs d'un modèle** puis proposer une version correcte | 5 pts (2013, B et C) | Cas d'utilisation (« Identifier explicitement les erreurs faites dans ce modèle (en les entourant lorsque c'est possible), et expliquez-les à droite. » / « Proposez une version correcte. » / « Spécifiez un cas d'utilisation de votre choix. »), modèle KAOS de buts (« Proposez un modèle correct. »). |
| **Spécification d'exigences fautives** | 5 pts (2014, B) | Tableau R1…R5 : « identifiez la ou les erreurs qu'elle contient ; proposez une version correcte ». Ex. « Le système doit être facile à utiliser. » |
| **Calcul de priorisation** | 3 pts (2014, C) | « Appliquez la méthode AHP à la matrice de priorité paires à paires… Vous ne calculerez pas l'indice de cohérence. » (matrice incomplète à compléter par réciprocité) |
| **Réflexion argumentée** | 5 pts (2013, D) puis 2 pts (2014, D) | Cas d'entreprise (Excel/Word, wiki, Quality Center) ou citation d'un blog : « Que pensez-vous… ? Quelles erreurs permet-elle d'éviter ? Quelles techniques/outils préconisez-vous ? » |
| **Étude de cas / projet** | contrôle continu | Deadbot MemoriaTech (cas d'utilisation → questionnaire → triage Kano → priorisation → cahier des charges) ; système IA (élicitation, cahier des charges « vision », gouvernance, NFR de confiance/transparence/conformité). Livrable : « un fichier Word ou PDF unique » (Deadbot) ; présentation de « 3-4 slides » + document d'accompagnement (projet IA). |

Durée type : 1h30, sans document, réponses sur l'énoncé. Barèmes : 2013 = 5 + 5 + 5 + 5 ; 2014 = 10 + 5 + 3 + 2.
Les supports ne contiennent **aucun** exercice ni QCM : le seul « format » du prof, c'est celui des annales.

## 2. Tournures typiques (à imiter)
- « Il est nécessaire de… À la fois pour des raisons de traçabilité, mais aussi de partage, de gestion de configuration, et de classification. »
- « Les exigences définies dans le modèle de Kano comme étant de type « … » sont… »
- « Le cadre tridimensionnel de l'IE de Klaus Pohl indique que… »
- « Selon le Standard IEEE 830, la section « exigences spécifiques »… »
- « Il est parfaitement acceptable de… dès l'instant que… »
- « Il ne faut jamais que… : cela génère de la complexité inutile. »
- « Selon les dernières recherches, il est tout à fait possible que… »
- « On peut chercher à vérifier les exigences en organisant des revues. Cela permettra d'identifier les erreurs communes telles que… »
- « Toute exigence doit être numérotée au moyen d'un identifiant unique. »
- « Le but du « triage » est de regrouper les exigences en trois paquets : les plus importantes, les peu importantes, et les autres. »
Les énoncés sont **longs, précis et presque vrais** : l'erreur est souvent dans une seule précision (un mot, un chiffre, une liste incomplète ou en trop, un terme absolu).
Les énoncés **répétés d'une année à l'autre** (Q1 identifiant unique, Q2 Kano, Q5 cas d'utilisation, Q6 cadre de Pohl, Q8 revues, Q10 triage) sont reformulés légèrement : « Il est nécessaire de… » (2013) devient « Toute exigence doit… » (2014) ; « complémentaires » (2013) devient « alternatifs » (2014). Ce sont les sujets les plus probables.

## 3. Pièges récurrents (annales rapprochées des supports)

| Piège | Ce que disent les supports | Statut |
|---|---|---|
| **Kano « must have » ≠ source de satisfaction** (2014 Q19) | Support 20 : « Completely fulfilled dissatisfiers do not generate a positive disposition but merely help to avoid massive discontent. » ; les dissatisfiers sont « self-evident and taken for granted (subconscious knowledge) ». → l'énoncé 2014 Q19 (« génèrent de la satisfaction lorsqu'elles le sont ») est **faux**. | Mapping « must have » = dissatisfier : **à confirmer** — les annales disent *must have* / *exciter*, les supports disent *dissatisfier* / *satisfier* / *delighter*. |
| **Kano « exciter »** (2014 Q2) | Support 20 : « Delighters are system properties that the stakeholder does not know or expect » ; « As time goes by, delighters turn into satisfiers and dissatisfiers ». « Créent de la différentiation » n'est pas dans les supports. | Mapping « exciter » = delighter : **à confirmer**. |
| **KAOS : OR ≠ XOR ; AND = raffinement complet** (2013 Q4, C) | Support 12 : seulement « AND/OR goal refinement — ex KAOS, Objectiver ». Pas de sémantique OR/XOR. | **ABSENT DES SUPPORTS** (sémantique). |
| **i\* / soft goals** (2013 Q3) | Aucune occurrence dans les supports. | **ABSENT DES SUPPORTS**. |
| **Cas d'utilisation = buts complémentaires, pas alternatifs** (2013 Q5, 2014 Q5) | Support 7, slide « Use Case Diagrams » : *Do* « Complementary cases (nominal) » ; *Don't* « CRUD », « Manage », « Mix up levels of details », « Alternative cases (non nominal cases, exceptions, etc) ». → « alternatifs » (2014) est faux ; « complémentaires » (2013) est cohérent, mais la précision « décomposition AND dans les termes de KAOS » n'est pas dans les supports. | Partiel. |
| **Cadre 3D de Pohl** (2013 Q6, 2014 Q6) | Support 12, slide « The 3 dimensions of RE » : trois axes **Specification** (de *opaque* à *complete*), **Agreement** (de *personal views* à *common view*), **Representation** (*informal*, *semi-formal*, *formal*). → 2013 (« complétude, accord, formalisation ») est cohérent avec le schéma ; 2014 (« axe de la spécification… de plus en plus formalisées ») mélange l'axe *specification* et l'axe *representation*. | Lecture du schéma : **à confirmer** (le texte de la slide est fragmentaire). |
| **Triage** (2013 Q10, 2014 Q10) | Aucune occurrence. | **ABSENT DES SUPPORTS**. |
| **AHP** (2013 Q9, 2014 C) | Aucune occurrence ; « cohérence » ≠ priorisation (c'est l'indice de cohérence, que l'annale 2014 dispense de calculer). | **ABSENT DES SUPPORTS**. |
| **Top 10 / 100 $ ; Eisenhower** (2014 Q14, Q18) | Aucune occurrence. | **ABSENT DES SUPPORTS**. |
| **Identifiant unique** (2013 Q1, 2014 Q1) | ISO 29148 §5.2.7 : « Each requirement should be uniquely identified » ; « it is never changed … nor is it reused » ; « Unique identifiers aid in requirements tracing. » Les raisons « partage, gestion de configuration, classification » ne sont pas dans les supports. Noter « should » (ISO) vs « nécessaire / doit » (annales). | Partiel. |
| **NFR : critère de décision / s'affiner en FR / attribut qualité** (2013 Q7) ; **FR qui s'affinent en NFR** (2014 Q7) | Support 1 : NFR « associée à une exigence fonctionnelle … spécifiée sous forme d'attribut » ; « Les autres NFR se décomposent en FR ». Glinz (support 5) : la même exigence peut être non fonctionnelle ou fonctionnelle selon sa représentation. Le sens FR → NFR (2014) n'est pas étayé. « Critère de décision » : rien. | (b), (c) étayés ; (a) **ABSENT**. |
| **Revues** (2013 Q8, 2014 Q8) | Support 14 : « Organize a review » avec complétude, cohérence, modifiabilité, compréhensibilité. Support 1 : cinq défauts — bruit, silence, surspécification, ambiguïté, terminologie incohérente. Le terme « sous-spécification » n'existe pas (le plus proche : « silence »). | Partiel. |
| **Gabarits « garantir qu'aucune information n'est oubliée »** (2014 Q9) | Support 14 : une structure de référence aide à « Finding the blanks and filling the gaps » (trouver les trous) ; mot absolu « garantir » à traiter comme alerte. | Partiel. |
| **IEEE 830, section « exigences spécifiques »** (2014 Q11) | Support 14 : « 3 Specific requirements : functional requirements, non-functional requirements, interface requirements, … » — la liste se termine par des points de suspension. L'ISO 29148 (§7.5.3) découpe autrement (interfaces externes, fonctions, performance, base de données, contraintes de conception, attributs). « Trois sous-parties » : à vérifier. | Ambigu. |
| **Modèle d'échange** (2014 Q12) | Support 14 : « Requirements exchange models » + schéma de référentiel (AFIS) avec exigence, source, justification, condition, vérification, produit, compromis, risque. | Étayé. |
| **Homonymes + glossaire** (2014 Q15) | Support 14 : « Designation clash due to homonyms » parmi les « Inconsistencies and conflicts risks » ; bonne pratique : « choose a term for an object, and stick to it ». → « parfaitement acceptable » est suspect (mot absolu). | Étayé par rapprochement. |
| **Niveaux d'abstraction jamais mélangés** (2014 Q16) | Aucune règle explicite. ISO : « level of abstraction : a view of an object at a specific level of detail » ; exigences définies à plusieurs niveaux et tracées (§5.3.2). « Jamais » = alerte. | **ABSENT DES SUPPORTS** (la règle). |
| **Compréhensibilité** (2014 Q17) | Support 14 : « Comprehensibility — Is the requirements document easy to interpret? » ; lecture 15 : « Formulate only one requirement per sentence ». ISO : « Concise … no use of conjunctions ». | Étayé. |
| **Bottom-up / top-down « garantit la conformité avec l'architecture »** (2014 Q3) | Supports 12 et 14 : bottom-up = « pourquoi ? » (remettre en cause l'existant), top-down = « comment ? » (analogie, recombiner) — pour **compléter** les exigences, pas pour la conformité à l'architecture ; « garantir » = alerte. | Énoncé non étayé. |
| **Intégration source de nouvelles exigences** (2014 Q4) ; **développeurs = utilisateurs** (2014 Q13) | Aucune source dans les supports. | **ABSENT DES SUPPORTS**. |
| **Vérifier une exigence** (2014 D, blog) | ISO : « Verifiable … means to prove that the system satisfies the specified requirement … measurable » ; ISO « what, not how ». | Étayé. |
| **Mots qui doivent alerter** | « parfaitement », « jamais », « garantir », « unique différence », « toute exigence », « tout à fait possible ». | Constat sur les annales. |

## 4. Notions sur lesquelles le prof insiste

**Marques d'insistance explicites dans les supports** (le prof est l'auteur des supports 1, 2, 7, 12, 14) :
- **Objectifs de chapitre** — support 12 : « At the end of this chapter, you should … 2.1 Master and using the content and significance of the Kano model … 3.3 Master and use the following types of elicitation techniques and examples for each: survey techniques, creativity techniques, document-centered techniques, observation techniques and supporting techniques » ; support 7 : « Know system context, system boundary and context boundary ».
- **« Terms and definitions to remember »** — support 7 : « System Context • System Boundary • Context Boundary ». Support 14 : « Terms : Requirements Document, Requirements Specification ». Support 12 : « Terms : none ».
- **But de la séance** — support 1 : connaître la justification de l'IE ; connaître la terminologie et les cadres de travail ; savoir reconnaître les erreurs et situations à problème.
- **Take-away / « Takeaway »** — support 1 : « Les projets dépassent encore et toujours dans une large majorité les coûts et les délais … Principalement en raison d'une mauvaise ingénierie des exigences » ; support 7 : « Start by understanding the context » ; support 12 : citation de Fred Brooks (« The hardest single part of building a software system is deciding precisely what to build ») ; support 14 : « Design your requirements documentation! ». Support 14 : « No need to overdo it! ».
- **Slides répétées dans plusieurs supports du prof** (indice fort) : certification/IREB (1, 2, 7, 12, 14) ; coût de la qualité vs non-qualité (1, 14) ; dérive des exigences (1, 14) ; mythes (1, 14) ; outils (1, 14) ; Brooks (1, 12) ; As-Is / To-Be (1, 12) ; dictionnaire du domaine, modèle de domaine, ontologies, analyse de l'existant, analyse coûts/performances, *quick and dirty ethnography* (7, 12) ; bottom-up / top-down (12, 14).
- **« Don't forget »** (support 7), **« Do / Don't »** des cas d'utilisation (support 7).
- **Structure du cours** (support 1) : « Introduction • Documentation des Exigences • Elucidation • Négociation • Modèles • Gestion ».

**Notions des annales** : identifiant unique et **traçabilité** · modèle de **Kano** · **KAOS** et **i\*** · **cas d'utilisation** · **cadre tridimensionnel de Pohl** · **priorisation** (AHP, top 10, 100 $, Eisenhower) et **triage** · **qualité des exigences** et revues · **gabarits** · **IEEE 830** · **modèle d'échange** · top-down / bottom-up · **NFR** · outils (Excel, Word, wiki, Quality Center) · **élicitation** (brainstorming, focus groups, interviews, ateliers, fouille de documents, *quick & dirty ethnography*, maquettes, questionnaires) · **éthique, RGPD, gouvernance** pour les systèmes à IA.

**Présentes dans les annales ET dans les supports** (à traiter à fond) : Kano, cadre de Pohl, cas d'utilisation (Do/Don't), identifiant unique/traçabilité, revues et critères de qualité d'un document, glossaire/homonymes, IEEE 830 et modèle d'échange, techniques d'élicitation de la liste du projet IA (sauf *focus group* défini nulle part), NFR/attribut qualité.
**Présentes uniquement dans les annales** (aucune matière à cours — voir `PLAN.md`) : AHP, triage, top 10, 100 $, Eisenhower, i\*, sémantique KAOS OR/XOR, éthique/RGPD.
**Présentes uniquement dans les supports** (jamais tombées en annale) : ISO 29148 détaillée, agilité (Boehm), grands référentiels NL (Natt och Dag & Gervasi), Zave & Jackson, Problem Frames.

## 5. Exemples et cas fétiches (à réutiliser comme fil rouge)

**Cas des annales**
- **Deadbot de MemoriaTech** (parties prenantes : entreprise, familles, développeurs, associations de protection des données, psychologues du deuil ; NFR : vie privée, limites techniques, éthique).
- **Vente en ligne de matériel électrique** pour électriciens professionnels (exigences R1-R5 fautives).
- **Compte en ligne / banque** (cas d'utilisation fautif : « Accéder au Solde », « Ouverture du compte », « Clôture »).
- **Location de VOD** (modèle KAOS fautif).
- **Débit de 25 images/s 7 j/7** (identification et vérifiabilité d'une exigence).
- Les **10 systèmes IA** de l'examen 4 (coaching santé, finances, voyage, shopping, smart home, reconnaissance de plantes, vie numérique, fake news, billetterie, sommeil).

**Exemples tirés des supports**
- Support 1 : *Electronic Land Registry* (Lauesen, REFSQ'12) ; retour d'expérience *Vinci Consulting* ; citations « Ce n'est pas ce que je voulais… », « Je vous avais dit que je voulais ça ! » ; « A fool with a tool is still just a fool » ; exemples d'exigence : contrainte « le système doit fonctionner avec la technologie O », fonction « le système doit identifier les anciens clients », qualité « la capacité d'enregistrement … 120 % supérieure », légale « le système doit protéger les données clients ».
- Support 4 : *Hyatt Hotels* (succès), *American Airlines CONFIRM* (échec, 165 M$), *California DMV* (annulé).
- Support 7 : projet de **jeu vidéo** (diagramme de parties prenantes d'Alexander), modèle de domaine **Order / Order line / Item / Stock**.
- Support 12 : discours de **Kennedy** (« We choose to go to the Moon… ») comme *vision statement* ; **iPad** comme *product vision* ; **livre.fr** (vision en 3 questions : où allons-nous, comment, pourquoi réussira-t-on) ; **Santa syndrom**.
- Support 14 : synonymes / homonymes d'un **téléphone mobile** (« base screen » = « idle screen », « ring tone » …) ; dérive des exigences.
- Support 13 : projet **CCPDS-R** (Royce), conflit **Microsoft / Netscape**, dépassement de 3 Md$ de la **FAA**, société d'**e-services** (profil de risque).
- Support 16 : **Telelogic**, **Baan**, **Sony Ericsson** (3 cas industriels).
- Support 17 : **tourniquet** (*gate complex*), **ascenseur**, retrait d'espèces et solde de compte, inscription étudiants / cours.
- Support 18 : problèmes **WorkPieces**, **Required Behaviour**, **Information Display**.

## 6. Vocabulaire exact

**FR du prof** : *exigence, élicitation (« élucidation » dans le programme du support 1), cahier des charges, partie prenante, but, raffinement, priorisation, triage, traçabilité, gabarit, glossaire, revue, spécification, vérifiable, modèle d'échange, identifiant unique, gestion de configuration, attribut qualité, exigences « implicites / associées / induites / de processus / légales », MOA / MOE, frontière du système, frontière du contexte, zone grise*.
**EN des supports** : *requirement, elicitation, stakeholder, goal, goal refinement (AND/OR), prioritization (« Priorisation » dans le support 12), traceability, template, review, specification, requirements document, system context, system boundary, context boundary, grey zone, facets (Subject, Usage, IT, Development), dissatisfier / satisfier / delighter, survey / creativity / document-centric / observation / support techniques, As-Is / To-Be, requirements drift, domain dictionary, domain model, ontology, legacy analysis, system archaeology, quick and dirty ethnography, glossary, synonym, homonym, well-formed requirement, shall / should / will / may, TBD / TBS / TBR*.
**Termes des annales absents des supports** (à utiliser avec prudence, toujours en citant l'annale) : *must have, exciter, triage, AHP, top 10, 100 $, matrice d'Eisenhower, soft goals, i\*, sur-/sous-spécification, quick & dirty ethnography (écrit « quick and dirty » dans les supports), focus group (cité, jamais défini)*.
**À ne pas utiliser** : « cahier des charges » traduit littéralement en anglais (support 1 : « il n'y a pas de bonne traduction du terme « cahier des charges » en anglais » → *requirements document* / *requirements specification*) ; « besoin fonctionnel » (support 1 : ne couvre pas la même chose pour les francophones et le reste du monde) ; *system* pour désigner la partie logicielle (Zave & Jackson réservent *machine* au logiciel à construire ; *system* englobe aussi les composants manuels) ; *non-functional* comme catégorie exclusive (Glinz : *attribute* ou *constraint*).
Remarque d'orthographe des supports : « Priorisation » (support 12, FR dans un texte EN), « cheklist », « Brainstoming », « poeple » sont des fautes des slides — ne pas les reproduire dans les corrigés.

## 7. Ce qui rapporte des points
- V/F : la **justification** d'un FAUX doit corriger précisément l'erreur (pas de justification si VRAI). Chercher le **mot absolu** ou la **précision en trop / manquante**.
- Modèles : **identifier explicitement** chaque erreur (entourer), l'expliquer à droite, puis **redessiner** correctement. Pour un cas d'utilisation : acteurs, buts, éviter CRUD et « Manage », ne pas mélanger les niveaux de détail, cas nominaux complémentaires (support 7).
- Exigences : nommer le **défaut de qualité** — non concise (plusieurs exigences, conjonctions), ambiguë/subjective (« facile à utiliser »), non vérifiable/non mesurable, solution imposée (« quoi, pas comment »), modale incorrecte (*shall* / *may*), hors système — puis réécrire au format « Le système doit… » vérifiable (ISO §5.2.3 : sujet, verbe, complément ; conditions mesurables).
- AHP : compléter la matrice par réciprocité (l'annale 2014 montre 1/3 et 1/5 sous la diagonale), puis normaliser, moyenne des lignes, classement — **procédure à reprendre d'un cours que les supports ne contiennent pas** ; ne pas calculer l'indice de cohérence si l'énoncé le dit.
- Réflexion : avis argumenté + erreurs évitées + techniques/outils complémentaires. Supports utiles : modes de documentation (oral / Excel-Word / référentiel), outils d'IE, qualité d'un document (complétude, cohérence, modifiabilité, compréhensibilité), vérifiabilité (ISO).
- Projets : exigences **numérotées individuellement** ; justification des techniques d'élicitation (avantages / inconvénients — support 20), sources citées, exigences éthiques et légales non omises.
