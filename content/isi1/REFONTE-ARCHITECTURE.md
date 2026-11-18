# Refonte pédagogique ISI1 : diagnostic et architecture (version 2)

> **Statut : validé par l'utilisatrice le 2026-11-17**, avec les précisions ci-dessous (elles priment sur le reste du document).
>
> **Précisions de validation**
> 1. Les durées sont des **estimations, pas des objectifs** : on ne rallonge jamais une notion pour « utiliser » le temps.
> 2. **Niveau E** : supprimé ou gardé en référence complémentaire courte ; pas de fiche de 5 min systématique (chapitres 10-12 à trancher au moment de les traiter).
> 3. **Typologie** : seulement les distinctions réellement utiles pour éviter les confusions et réussir les exercices.
> 4. **Glinz** : méthode + exercices d'application ; **un exemple entièrement corrigé**, les autres présentés plus synthétiquement.
> 5. **Erreurs de classification (Glinz) ≠ défauts de rédaction (bruit, silence, surspécification, ambiguïté, terminologie incohérente)** : deux connaissances différentes, traitées séparément (ch. 3 et ch. 4) et nommées comme telles.
> 6. Format validé : sous-titres + encadrés « Définition à connaître » et « À retenir » (tâche T26, faite) ; abandon du style narratif (`docs/06` §10).
> La version 1 de ce document visait l'exhaustivité (13 chapitres, 20-25 min pour les chapitres centraux, ajout de matière). Elle est **abandonnée** : l'objectif n'est pas un cours plus complet, mais un cours **mieux sélectionné, mieux hiérarchisé, mieux structuré** pour le partiel.

> **Réalisation (2026-11-18)** : refonte appliquée aux 12 chapitres. Deux écarts par rapport au §3, demandés par l'utilisatrice (« moins narratif, plus synthétique, du plus important au moins important ») :
> 1. **« Documenter et gérer » passe en 5ᵉ position**, juste après « Une bonne exigence » : c'est l'ordre du plan du prof (Introduction, Documentation, Élucidation…) et ses notions (identifiant, traçabilité, glossaire, IEEE 830) sont parmi les plus présentes aux annales. Ordre final : fondamentaux, échecs, types, bonne exigence, documenter et gérer, contexte, élicitation, prioriser, modéliser, puis les trois fiches complémentaires.
> 2. **À l'intérieur de chaque chapitre, les parties vont du plus important au moins important** (ex. élicitation : Kano → familles de techniques → méthode de choix → bottom-up / top-down → sources).
> Fichiers : `10-priorisation-modeles-de-buts.json` devient `10-priorisation.json` (KAOS et soft goals partent dans le nouveau `13-modeliser.json`, avec les cas d'utilisation retirés du contexte ; Kano et son vocabulaire d'annale rejoignent l'élicitation). Les schémas du cours sont redessinés en Mermaid (cadre de Pohl, As-Is / To-Be, CHAOS, taxonomie de Glinz, structure ISO d'une exigence, StRS → SyRS → SRS, frontières, Kano, bottom-up / top-down, triage, AHP, cas d'utilisation, ET / OU, KAOS corrigé, spectre et sweet spot de Boehm, similarité, S, K ⊢ R, diagramme de problème). Fiches 10-12 : environ 5 minutes chacune.
> **i\* (2026-11-18, demande de l’utilisatrice : « le professeur nous a demandé de voir la méthode i\* », tombée en annale 2013 Q3)** : nouveau chapitre 10 « Modéliser les acteurs et leurs dépendances : i\* » (`14-istar.json`, 8 min), placé après « Modéliser » : acteurs intentionnels, modèles SD et SR, 4 types de dépendance, soft goals et *satisficing* (annale Q3, déplacée du chapitre « Modéliser »), méthode « construire un modèle i\* » + corrigé proposé sur les buts des parties prenantes du Deadbot, lien avec KAOS. Source : Yu 1997 (externe, extraits étendus) et le support « Four dark corners » (exigences « soft » de Yu). Les fiches complémentaires deviennent les chapitres 11 à 13.
> **Compléments (2026-11-18, après retour de l’utilisatrice)** : chapitres 1 à 4 réordonnés par priorité sans retrait de notion (le chapitre 3 passe de 17 à 13 min) ; 26 schémas au total (ajouts : arbre de décision de Glinz, coût de la qualité, modèle d’échange AFIS, 4 facettes, sources et puits, carte des 5 familles de techniques, modèle fautif de l’annale 2013 B). Méthode généralisée aux autres matières : `docs/06` §11, `/refondre-cours`, `/rediger-cours`.

**Codes des sources** : S1 introduction (slides du prof) · S2 certification (prof) · S3 ISO/IEC 29148 (brouillon 2009) · S4 CHAOS 1995 · S5 Glinz, *On NFRs* · S6 CHAOS Manifesto 2013 · S7, S12, S14 slides IREB du prof (contexte, élicitation, documentation) · S8, S20, S15 Pohl & Rupp chap. 2, 3, 4-5 · S13 Boehm (agilité) · S16 référentiels NL · S17 Zave & Jackson · S18 Problem Frames · A13, A14 annales · DB Deadbot · IA projet système à IA · EXT sources externes enregistrées.

---

## 1. Le principe directeur : un budget par notion

Chaque connaissance reçoit une place proportionnelle à son importance pour le partiel. Le niveau est fixé par la preuve (annales, insistance du prof), pas par la place qu'elle occupe dans les slides.

| Niveau | Critère | Traitement dans le cours | Exemples |
|---|---|---|---|
| **A** | Tombé aux annales ou demandé dans un projet | Définition encadrée + distinction + **méthode** + **exemple résolu** + piège d'examen | cadre 3D de Pohl, NFR et Glinz, qualités d'une exigence, Kano, cas d'utilisation, KAOS, AHP, identifiant unique |
| **B** | Mis en avant par le prof (objectifs, « terms to remember », take-away) | Définition + liste ou tableau + un exemple | frontières du système, 5 familles de techniques, typologie, erreurs types |
| **C** | Nécessaire pour comprendre A ou B | 2 à 4 lignes | ingénierie des exigences, vérification / validation, As-Is / To-Be |
| **D** | Culture générale : chiffres, organismes, historique, études de cas, auteurs | 1 à 3 lignes en encadré « repère », jamais en quiz, ou supprimé | CPRE, détail des pourcentages CHAOS, Hyatt / CONFIRM, livres |
| **E** | Support du prof sans aucun signal d'examen | Fiche courte (5 min) : définitions et une idée clé | agilité, référentiels NL, fondements théoriques |

**Règles de forme** (elles priment sur le style narratif actuel) :
- La définition vient **en premier**, dans un encadré identifiable.
- Les ensembles à mémoriser sont présentés **complets, au même endroit**, en liste numérotée ou en tableau.
- Une méthode = ses étapes + **un exemple résolu juste après** (pas renvoyé aux exercices).
- Chaque section se termine par « À retenir » (3 à 6 lignes).
- Pas d'accroche narrative, pas de fil rouge romancé, pas de citation d'auteur sans utilité.
- Les débats de chercheurs ne sont gardés que s'ils expliquent une notion, et en quelques lignes.

---

## 2. Diagnostic (revu)

Le problème des cours actuels n'est pas le manque de contenu. C'est la sélection et la mise en forme.

### 2.1 Le secondaire prend la place du fondamental

| Chapitre actuel | Trop de place (niveau D ou E) | Pas assez exploité (niveau A ou B) |
|---|---|---|
| 01 | Chiffres CHAOS sur 4 épisodes (environ 580 mots) ; anecdote des ponts ; Hyatt, CONFIRM, DMV | Le rapport CHAOS n'est jamais présenté (ce qu'il est, son objectif, ce qu'il faut en retenir) ; la typologie des exigences tient en environ 200 mots ; « exigence » est définie au 9ᵉ épisode |
| 02 | CPRE / IREB sur 2 épisodes (environ 325 mots) | La méthode de correction d'une exigence (A14 B, 5 points) est cachée sous le titre « Normes et certification » |
| 03 | Environ 950 mots de débat (tableau de six auteurs, « définitions ratées ») avant la définition de la NFR | La méthode de Glinz n'est appliquée à aucun exemple dans le cours ; la typologie du prof en est absente |
| 05 | Exemples de vision (Kennedy, iPad, livre.fr), droits et devoirs détaillés, douze techniques décrites une par une | Pas de tableau de synthèse des techniques ; Kano en un seul tableau |
| 06 | Trois sujets mélangés (rédiger, structurer, gérer) | Identifiant unique, traçabilité et glossaire (5 questions d'annales) noyés dans le reste |
| 08 | Trois cas industriels (environ 1 100 mots sur 2 287) | La technique de similarité tient en un épisode |
| 10 | Six encadrés de corrigés d'annales au milieu du cours | — |

### 2.2 Les blocs logiques sont coupés
- **Glinz** : le problème (pourquoi « non fonctionnel » classe mal), la solution (la taxonomie), la méthode (les quatre questions) et l'application (exercice à part) sont répartis sur cinq épisodes et une section d'exercices. On ne voit pas l'enchaînement « problème → classification → méthode → application ».
- **Qualités d'une exigence** : réparties entre les chapitres 01, 02 et 06, avec deux listes de neuf qualités jamais comparées (et l'une affichée à huit).
- **Typologie** : chapitres 01, 02 et 03.
- **Kano** : chapitres 05 et 10. **Cas d'utilisation et KAOS** (même exercice d'annale : corriger un modèle) : chapitres 04 et 10.

### 2.3 Les méthodes ne sont pas appliquées dans le cours
Les méthodes existent (classer selon Glinz, corriger une exigence, choisir une technique), mais l'exemple résolu est relégué dans les exercices. Le cours dit « quoi faire », sans montrer « comment le faire » sur un cas de partiel.

### 2.4 Le style narratif dilue la structure
Accroches (« Imagine la scène… », « Envie de lancer un débat… »), paragraphes de récit, définitions glissées au milieu d'un paragraphe. Le format de l'app (un seul niveau de titre, aucun encadré « définition ») empêche une vraie hiérarchie section / sous-section.

### 2.5 L'ordre des slides est conservé
Chaque chapitre suit le PDF dont il est issu. Les notions sont donc présentées dans l'ordre du prof en amphi, pas dans l'ordre où l'on apprend.

---

## 3. Architecture : 12 chapitres, environ 110 minutes (estimation, pas un objectif)

Aujourd'hui : 10 chapitres de 15 min (150 min, environ 20 300 mots). Proposé : **12 chapitres, environ 110 min (environ 15 000 mots, −26 %)**. Le temps gagné sur le secondaire est réinvesti dans les notions A : méthodes et exemples résolus.

| # | Chapitre | Durée | Niveau dominant | Ce qui change |
|---|---|---|---|---|
| 1 | Les fondamentaux de l'IE | 8 min | B-C | Définitions d'abord ; cadre 3D rapatrié ; CPRE réduit à 3 lignes |
| 2 | Pourquoi les projets échouent | 8 min | B | CHAOS présenté en une fiche ; erreurs types en un tableau |
| 3 | **Les types d'exigences : FR, NFR, contraintes (pilote)** | 15 min | A | Typologie complète et utilisable ; Glinz en un bloc problème → classification → méthode → application |
| 4 | Une bonne exigence : rédiger, évaluer, corriger | 15 min | A | Une liste de qualités de référence ; une boîte à outils de correction ; corrigé A14 B intégré |
| 5 | Le contexte du système | 8 min | B | Les 3 termes du prof en tête ; outils de documentation condensés |
| 6 | Éliciter les exigences | 12 min | A-B | Kano complet ; un tableau unique des techniques ; méthode de choix appliquée |
| 7 | Prioriser les exigences | 8 min | A (EXT) | AHP et triage, séparés des modèles de buts |
| 8 | Modéliser : cas d'utilisation et modèles de buts | 10 min | A | Les deux exercices de correction de modèle au même endroit |
| 9 | Documenter et gérer les exigences | 12 min | A | Recentré sur les 7 sujets d'annales (identifiant, traçabilité, glossaire, IEEE 830, modèle d'échange, outils, réflexion) |
| 10 | Exigences et méthodes agiles | ≤ 5 min | E | Référence complémentaire courte, ou suppression |
| 11 | Grands référentiels d'exigences en langage naturel | ≤ 5 min | E | Idem |
| 12 | Fondements théoriques : coins sombres et Problem Frames | ≤ 5 min | E | Idem |

Ordre : comprendre (1-2) → caractériser une exigence (3-4) → la découvrir (5-6) → décider et modéliser (7-8) → documenter et gérer (9) → lectures complémentaires (10-12). C'est le plan de cours annoncé par le prof (S1 : Introduction, Documentation, Élucidation, Négociation, Modèles, Gestion).

---

## 4. Sommaires détaillés

Légende : **Dév.** = développé (définition, méthode, exemple) · **Cond.** = condensé (quelques lignes) · **Suppr.** = supprimé ou une ligne en repère · **[⚠]** = absent des supports, signalé · **[EXT]** = complément extérieur étiqueté.

### Chapitre 1 — Les fondamentaux de l'IE (8 min)
1. **Qu'est-ce qu'une exigence ?** *Dév.*
   - Définition à connaître (IEEE 610.12), découpée en ses 4 composantes dans un tableau.
   - Demande, besoin, exigence : les 3 règles du prof.
   - Exigence ≠ solution : quoi / comment / pourquoi.
2. **Le cadre tridimensionnel de Pohl** *Dév. (A13 Q6, A14 Q6)*
   - Tableau des 3 axes (spécification : opaque → complète ; représentation : informelle → formelle ; accord : vues personnelles → vue commune).
   - Méthode : rattacher un mot de l'énoncé au bon axe, avec les deux énoncés d'annales corrigés.
3. **Le vocabulaire de base** *Cond.* : ingénierie des exigences (1 phrase, ISO) · partie prenante (définition ISO) · vérification ≠ validation (1 ligne chacune) · As-Is / To-Be (1 schéma) · MOA / MOE et « cahier des charges » (pas de traduction anglaise exacte).
4. **Pourquoi les exigences comptent** *Cond.* : les 4 dimensions du prof (management, business, légal, ingénierie), en une liste.
5. **Repère** *Suppr. → 3 lignes* : CPRE (certification de l'IREB, deux niveaux) ; ISO 29148 (la norme du cours, version 2009 fournie).
6. À retenir.

*Supprimé* : liste des autres certifications, livres, champs disciplinaires, organisation de l'IREB, définitions secondaires (Kotonya, Anton).

### Chapitre 2 — Pourquoi les projets échouent (8 min)
1. **Le rapport CHAOS en une fiche** *Dév.*
   - Ce que c'est : une enquête du Standish Group (1995) auprès de responsables informatiques sur leurs projets.
   - Son objectif, en 3 points : mesurer l'ampleur des échecs, en trouver les facteurs, identifier les ingrédients du succès.
   - Classification à connaître : les 3 types de résolution (réussi / en difficulté / annulé).
   - Les résultats en une ligne (16 % / 53 % / 31 %).
   - Tableau : les 3 premiers facteurs de succès, de difficulté et d'annulation.
   - Ce qu'il faut retenir : les exigences et l'implication des utilisateurs sont en tête des trois classements.
   - 2013 en 2 lignes (39 % de réussite ; petits projets et agilité).
2. **Les causes selon le prof** *Dév.* : les 4 causes ; les 6 mythes (pièges de V/F) ; les 3 confusions.
3. **Les erreurs types en IE** *Cond.* : un tableau de 7 lignes (erreur → cause → conséquence), chaque ligne renvoyant au chapitre qui y remédie. Les 5 défauts de rédaction sont seulement nommés ici, détaillés au ch. 4.
4. **Le coût des erreurs** *Cond.* : effet tunnel et effet levier (2 lignes) ; 50 à 70 % des budgets SI en maintenance (1 ligne).
5. **Le take-away du prof** : liste de 6 points.
6. À retenir.

*Supprimé* : anecdote des ponts, citations des focus groups, tableaux de dépassements, Hyatt / CONFIRM / DMV, listes complètes de 10 facteurs, frustration rôle par rôle, « décisions inappropriées », historique du cycle en V.

### Chapitre 3 — Les types d'exigences : FR, NFR, contraintes (pilote, 15 min)
1. **Les catégories d'exigences** *Dév.*
   - Un tableau de référence : catégorie | définition à connaître | question pour la reconnaître | exemple du cours | piège.
   - Catégories : fonctionnelle · non fonctionnelle (et l'attribut qualité) · contrainte (projet, technique, organisationnelle) · hypothèse · exigence de processus · exigence légale.
   - Une colonne de correspondance avec les types de l'ISO (fonctionnelle, performance, interface, contrainte de conception, non fonctionnelle, processus), utile parce que le projet IA demande des exigences « fonctionnelles, non fonctionnelles et d'interface ».
   - Une ligne [⚠] : exigences implicites, associées, induites, nommées par le prof mais non définies.
2. **Distinguer les catégories** *Dév.* : FR / NFR ; NFR / contrainte ; contrainte / exigence légale ; exigence / hypothèse. Un tableau « comment trancher » avec un exemple pour chaque paire.
3. **Pourquoi « non fonctionnel » classe mal : les 3 problèmes de Glinz** *Cond.*
   - Un tableau de 3 lignes : définition, classification, représentation. Pour chacune : en quoi elle consiste, et un exemple.
   - L'exemple clé : la même exigence de sécurité, selon sa formulation, est non fonctionnelle ou fonctionnelle.
4. **La classification de Glinz** *Dév.*
   - Définition à connaître : la préoccupation (*concern*).
   - Les 4 catégories (fonctionnelle, performance, qualité spécifique, contrainte), chacune avec sous-types et exemples.
   - Attribut = performance ou qualité spécifique ; **NFR = attribut ou contrainte**.
5. **Méthode : classer une exigence selon Glinz** *Dév.*
   - Les 4 questions dans l'ordre.
   - Dernière étape : la représentation (opérationnelle, quantitative, qualitative, déclarative) dit comment vérifier l'exigence (tableau de 4 lignes).
   - Erreurs de **classification** à éviter (à ne pas confondre avec les défauts de **rédaction** du ch. 4) : la règle « quoi = fonctionnel, comment = non fonctionnel » est trop grossière (exemple des détecteurs de physique) ; classer d'après la formulation au lieu de la préoccupation.
6. **Application type partiel** *Dév.* : **un exemple entièrement corrigé** (les 4 questions déroulées, puis la vérification selon la représentation), puis quelques exigences (Deadbot, projet IA, vente de matériel électrique) classées de façon synthétique (réponse + justification en une ligne).
7. **Utiliser la typologie** *Dév.*
   - Structurer un cahier des charges et vérifier qu'on n'a rien oublié (NFR, contraintes, exigences légales).
   - Relier une NFR aux FR : attribut qualité, ou raffinement en FR.
   - Rendre une NFR vérifiable (exemple « facile à utiliser », A14 R5).
   - Répondre aux V/F A13 Q7 et A14 Q7 : attention au sens de la flèche (NFR → FR étayé, FR → NFR non).
8. À retenir : un tableau unique (définitions, classifications, distinctions).

*Condensé à une ligne* : facettes de Glinz (seule la représentation sert à l'examen), représentation orientée aspects (« attacher la NFR aux éléments qu'elle concerne »). *Supprimé* : tableau des définitions de la littérature, « définitions ratées », discussion finale de l'article.

### Chapitre 4 — Une bonne exigence : rédiger, évaluer, corriger (15 min)
1. **L'exigence bien formée** *Dév.*
   - Définition (ISO, 3 conditions).
   - Gabarit : [condition] le système doit [verbe] [objet] [contrainte mesurable].
   - Tableau shall / should / will / may.
2. **Les 9 qualités d'une exigence (ISO)** *Dév.*
   - Tableau : qualité | question test | défaut quand elle manque | exemple.
   - Les 4 qualités d'un ensemble (complet, cohérent, abordable, borné).
   - Pohl & Rupp en une ligne : même base, avec « convenue » et « compréhensible » à la place de « abstraite » et « concise ».
3. **Les défauts de rédaction à repérer** *Dév.* : les 5 défauts du prof (bruit, silence, surspécification, ambiguïté, terminologie incohérente), avec leurs conséquences (A13 et A14 Q8). Ce sont des défauts d'**écriture** d'une exigence, différents des erreurs de **classification** de Glinz (ch. 3).
4. **La boîte à outils de correction** *Cond.*, un seul tableau-checklist : les 7 familles de mots à bannir (ISO) et les 5 pièges du langage naturel, avec leurs mots déclencheurs (Pohl & Rupp).
5. **Vérifier : la revue** *Cond.* : les 4 questions du prof ; « no need to overdo it » en une ligne.
6. **Méthode : corriger une exigence** *Dév.* : étapes, puis corrigé commenté de A14 B (R1 à R5), puis un exercice de transfert.
7. À retenir.

*Supprimé* : liste IEEE 830 des qualités, méthodes de vérification de l'ISO, « autres vérifications » (fusionnées avec la revue), gabarit de phrase détaillé en 5 étapes (réduit au gabarit du §1).

### Chapitre 5 — Le contexte du système (8 min)
1. **Les 3 termes à retenir** (le prof les met en avant) *Dév.* : contexte du système, frontière du système, frontière du contexte. Définitions, schéma, tableau de distinction.
2. **Les deux zones grises** *Dév.* : un tableau (où elle se situe, doit-elle être résolue ?).
3. **Les 4 facettes du contexte** *Cond.* : tableau (sujet, usage, IT, développement).
4. **Interfaces, sources et puits** *Cond.* : 3 lignes.
5. **Documenter le contexte** *Cond.* : diagrammes (renvoi au ch. 8) ; dictionnaire et modèle de domaine (2 lignes) ; checklist « Don't forget » compacte.
6. **Méthode : délimiter le système et son contexte**, appliquée au Deadbot.
7. À retenir.

*Supprimé* : 3 aspects par facette (une ligne), Ishikawa, détail du diagramme des parties prenantes, liste des mauvaises hypothèses.

### Chapitre 6 — Éliciter les exigences (12 min)
1. **Pourquoi les exigences ne sont pas données** *Cond.* : un paragraphe.
2. **Les 3 sources d'exigences** *Cond.* : liste ; ce qu'on risque à en oublier une.
3. **Le modèle de Kano** *Dév.*
   - Tableau : catégorie | définition | type de connaissance | effet sur la satisfaction | technique adaptée.
   - Évolution dans le temps.
   - Vocabulaire des annales (« must have », « exciter ») rapproché et signalé [⚠] ; pièges A13 Q2, A14 Q2 et Q19.
4. **Les 5 familles de techniques** *Dév.* : un tableau de synthèse unique (famille | but | techniques | quand l'utiliser | limite principale).
5. **Méthode : choisir et justifier une technique** *Dév.* : facteurs de choix (liste), niveau de détail, combinaison ; appliquée au projet IA.
6. **Compléter les exigences : bottom-up / top-down** *Cond.* : tableau à 2 colonnes (A14 Q3).
7. **Les parties prenantes en pratique** *Cond.* : checklist et droits / devoirs en 3 lignes.
8. À retenir.

*Supprimé* : cycle d'enquête, exemples de vision (la vision réduite à ses 3 questions en 2 lignes), personas, 6-3-5, cartes CRC, lignes de produits.

### Chapitre 7 — Prioriser les exigences (8 min, essentiellement [EXT])
1. **Pourquoi prioriser** *Cond.* : les conflits sont inévitables (ISO) ; priorité ≠ criticité (2 lignes).
2. **Le triage** *Dév.* : définition, les 3 groupes, piège A13 et A14 Q10.
3. **Les techniques** *Cond.* : un tableau (100 $, top 10, AHP, Kano), avec ce qui les distingue (A14 Q14).
4. **Méthode AHP** *Dév.* : réciprocité, normalisation, moyenne, classement ; corrigé de A14 C.
5. À retenir. [⚠] Matrice d'Eisenhower : aucune source.

### Chapitre 8 — Modéliser : cas d'utilisation et modèles de buts (10 min)
1. **Le diagramme de cas d'utilisation** *Dév.*
   - Définition (3 lignes).
   - Le Do / Don't du prof (tableau 4 × 4).
   - Cas complémentaires, pas alternatifs (A13 et A14 Q5).
2. **Méthode : corriger un diagramme de cas d'utilisation** *Dév.* : corrigé de A13 B. [⚠] Spécifier un cas d'utilisation : aucun gabarit dans les supports.
3. **Les modèles de buts** *Dév.* : raffinement ET / OU (S12, et sémantique [EXT]) ; OU ≠ XOR (A13 Q4). Les soft goals (A13 Q3) passent au chapitre i\*.
4. **Méthode : corriger un modèle KAOS** *Dév.* : corrigé de A13 C.
5. À retenir.

*Supprimé* : les 3 perspectives et les 4 types de diagrammes de Pohl & Rupp (une ligne au plus).

### Chapitre 9 — Documenter et gérer les exigences (12 min)
1. **Structurer le document** *Dév.* : plan IEEE 830 / SRS (Q11, avec la réserve sur « trois sous-parties ») ; 3 lignes sur StRS, SyRS, SRS.
2. **Le glossaire** *Dév.* : synonymes et homonymes (exemples du téléphone), 3 règles clés (A14 Q15).
3. **L'identifiant unique** *Dév.* : règles (jamais modifié, jamais réutilisé), à quoi il sert (A13 et A14 Q1).
4. **La traçabilité et les niveaux d'abstraction** *Dév.* : définition, vers le haut / vers le bas, Lastenheft → Pflichtenheft (A14 Q16).
5. **Le reste, en bref** *Cond.*
   - Attributs : tableau de 8 lignes d'une ligne chacune.
   - Modèle d'échange AFIS (A14 Q12) : 3 lignes.
   - 3 modes de documentation.
   - Mythes (pièges de V/F).
   - Dérive des exigences : 2 lignes.
   - Outils, « a fool with a tool », wikis (A14 Q20).
6. **Méthode : répondre à une question de réflexion** *Dév.* : corrigés de A13 D et A14 D.
7. À retenir.

*Supprimé* : usages du document, contenu minimal, RUP, structure externe / interne (une ligne), règles du glossaire au-delà de trois.

### Chapitres 10 à 12 — Références complémentaires (aucun signal d'examen ; suppression possible)
- **10. Agilité** : définitions (agile, plan-driven, 4 valeurs du manifeste) ; tableau du terrain de prédilection, la ligne « exigences » en avant ; exposition au risque (formule) et *sweet spot* en 3 lignes.
- **11. Référentiels NL** : pourquoi le langage naturel reste ; la similarité en 5 étapes ; rappel et précision (formules) ; les 3 cas industriels en un tableau.
- **12. Fondements** : machine / environnement, indicatif / optatif, relation S, K ⊢ R ; les 4 coins sombres en un tableau ; Problem Frames en 3 lignes.

---

## 5. Tes quatre exemples, traités

| Exemple | Aujourd'hui | Proposé |
|---|---|---|
| **CPRE** | 2 épisodes, environ 325 mots | 3 lignes en repère au ch. 1, jamais en quiz |
| **CHAOS** | Chiffres dispersés sur 4 épisodes, sans dire ce qu'est le rapport | Une fiche au ch. 2 : ce que c'est → objectif → 3 types de résolution → facteurs clés → ce qu'il faut retenir |
| **Typologie** | Environ 200 mots au ch. 01, des morceaux aux ch. 02 et 03 | Tableau de référence + tableau « comment distinguer » + section « utiliser la typologie » au ch. 3 |
| **Glinz** | Problème, solution, méthode et application séparés | Un seul bloc : pourquoi « non fonctionnel » classe mal → classification → méthode en 4 questions → 8 exigences classées pas à pas → usages en partiel |

---

## 6. Gabarits de présentation

**Notion fondamentale (niveau A ou B)**

```
## 3.4 La classification de Glinz
[Définition à connaître] Une exigence non fonctionnelle est un attribut d'un système ou une contrainte sur un système.
Comprendre : 2 à 4 lignes (à quoi ça sert, ce que ça change)
Classification : tableau complet (catégorie | définition | exemple)
Distinguer : la confusion à éviter, en 1 ou 2 lignes
[À retenir] 3 à 5 lignes
```

**Méthode**

```
## 3.5 Méthode : classer une exigence selon Glinz
Objectif : 1 ligne
Étapes : liste numérotée (quoi faire, et pourquoi en quelques mots)
Exemple résolu : appliqué à une exigence d'annale ou d'étude de cas
Erreurs fréquentes : 2 ou 3 lignes
```

---

## 7. Correspondance entre l'ancienne et la nouvelle structure

| Contenu actuel | Destination | Action |
|---|---|---|
| 01 : chiffres CHAOS, cas, anecdotes | 2 §1 | Réduits à une fiche ; cas et anecdotes supprimés |
| 01 : causes, mythes, confusions | 2 §2 | Conservés en listes |
| 01 : 5 défauts + méthode de diagnostic | 4 §3 et §6 | Déplacés, fusionnés avec la méthode de correction |
| 01 : définition d'une exigence, demande / besoin | 1 §1 | Avancées en tête |
| 01 : typologie | 3 §1-2 | Déplacée et développée |
| 02 : CPRE, statut de l'ISO | 1 §5 | Réduits à 3 lignes |
| 02 : exigence bien formée, 9 + 4 qualités, mots à bannir, méthode de correction | 4 | Déplacés ; une liste de référence |
| 02 : attributs ; StRS / SyRS / SRS | 9 §5 et §1 | Condensés |
| 03 entier | 3 | Restructuré en blocs ; débat supprimé ; méthode appliquée |
| 04 : contexte, frontières, zones grises, facettes | 5 | Conservés, réordonnés |
| 04 : cas d'utilisation et corrigé A13 B | 8 §1-2 | Déplacés près de KAOS |
| 04 et 05 : domaine, existant (doublons) | 5 §5 et 6 §4 | Fusionnés, condensés |
| 05 : cadre 3D | 1 §2 | Déplacé |
| 05 : Kano + 10 : vocabulaire Kano | 6 §3 | Fusionnés |
| 05 : douze techniques | 6 §4 | Un tableau de synthèse |
| 06 : gabarit de phrase, critères, revue, effets du langage | 4 | Déplacés, condensés |
| 06 : IEEE 830, glossaire, identifiant, traçabilité, modèle d'échange, réflexion | 9 | Recentrés sur les questions d'annales |
| 10 : triage, techniques, AHP | 7 | Conservés |
| 10 : KAOS, soft goals, corrigé A13 C | 8 §3-4 | Déplacés près des cas d'utilisation |
| 07, 08, 09 | 10, 11, 12 | Réduits à des fiches de 5 min |
| Six encadrés de corrigés dans le cours (10, 05, 03) | Exercices | Retirés du corps du cours |

Les identifiants techniques des chapitres dont le sujet reste le même sont conservés ; l'ordre d'affichage passe par `course.json.chapterOrder`. Les quiz des chapitres refondus seront réécrits après le cours.

---

## 8. Lacunes des sources (à signaler, jamais à combler par invention)

| Notion | État | Traitement |
|---|---|---|
| Exigences implicites, associées, induites | Slides de S1 en images, sans définition | Nommées, signalées |
| Négociation et modèles (parties du plan du prof) | Presque pas de supports | [EXT] étiqueté ; tes notes si tu en as |
| Triage, AHP, 100 $, top 10, KAOS OU / XOR, i\*, soft goals | Absents | [EXT] déjà enregistrées |
| Matrice d'Eisenhower ; développeurs = utilisateurs (A14 Q13) | Aucune source | Signalé |
| Spécifier un cas d'utilisation (A13 B c) | Aucun gabarit | À chercher ou signaler |
| « Must have », « exciter », « sous-spécification », NFR « critère de décision » | Termes des annales absents des supports | Rapprochements présentés comme tels |
| IEEE 830 « trois sous-parties » (A14 Q11) | Slide terminée par « … » | Corrigé « à confirmer » |

---

## 9. Points d'attention pour la rédaction
1. **Une seule liste de qualités à apprendre** : celle de l'ISO (la norme du cours). Pohl & Rupp en une ligne de différence.
2. **Dire ce que chaque classification classe** : nature de l'exigence (ch. 3), satisfaction (Kano, ch. 6), obligation (shall / should, ch. 4), défauts de rédaction (ch. 4), problèmes d'un projet (ch. 2).
3. **« Contrainte »** : une seule définition à retenir (celle du prof), avec une ligne de rapprochement avec l'ISO et Glinz.
4. **Corrigés d'annales non officiels** : marqués « proposés » ; trois restent à confirmer (2013 Q6, 2014 Q7, 2014 Q11).
5. **Citations** : les textes extraits de S1 et S2 sont abîmés et S5 est en deux colonnes ; vérifier sur le PDF.

---

## 10. Décisions (validées le 2026-11-17)
1. **Le principe du budget par notion** et la cible d'environ 110 min (contre 150 aujourd'hui).
2. **L'architecture en 12 chapitres**, dont trois fiches de 5 min pour les supports sans signal d'examen.
3. **Le format dans l'app** : recommandé, une petite tâche de code avant le pilote (sous-titres + encadrés « Définition à connaître » et « À retenir »). Sinon, titres numérotés et définitions en gras dans le format actuel.
4. **Les règles de forme du §1** inscrites dans `docs/06`, à la place des règles narratives actuelles (épisodes courts, accroches, fil rouge).
5. **Ordre des phases** : 3 (pilote), puis 1, 2 et 4 (le contenu de l'ancien chapitre 2 sur la qualité passe au chapitre 4, le plus rentable au partiel).
