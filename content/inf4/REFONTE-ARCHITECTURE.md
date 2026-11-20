# Refonte INF4 : diagnostic et sommaire priorisé

> **Statut : accepté sans objection le 2026-11-18** (l'utilisatrice a répondu « continue » ; RED-PL placé par défaut après les exigences d'application, à revoir si elle préfère le garder en dernier). Chaque partie a des sous-parties « n.m » (sommaire détaillé, T28). Méthode : celle d'ISI1 (`content/isi1/REFONTE-ARCHITECTURE.md`), validée le 2026-11-17 : sommaire d'abord, du plus important au moins important, rien qui peut tomber n'est supprimé, schémas du cours redessinés, aucun narratif.

**Codes des sources** : S1 cours 1 « Variability and SPLE » (slides) · S2 Böckle, ch. 1 (lecture) · S3 Pohl et al., partie IV, ch. 15-18 (lecture) · S4 article RED-PL (CAiSE 2007) · S6 slides « (Software) PLE » (domain engineering, partie 1) · S7 slides « Domain engineering for reuse, part 2 » (transformation, vérification) · S8 Pohl et al., ch. 10 (lecture) · XLS tableur « configuration ILP » (non citable).

---

## 0. Ce qui est particulier à INF4

1. **Aucune annale, aucune consigne d'examen** dans les ressources (`PROFIL-PROF.md` §1). La meilleure preuve disponible est l'**exercice du prof** (énoncé et solution dans les slides). On l'appelle **A\*** : traité comme un niveau A (méthode + exemple corrigé + piège), mais tout `examFocus` reste `probable`, jamais `documented`.
2. **`PROGRAMME.md` n'est pas rempli** (toutes les lignes en `[ ]`) : tout est traité, la priorité vient des supports. À compléter si possible (ce qui a été vu en classe, ce sur quoi le prof a insisté).
3. **Pas de notes de cours** (`ressources/S3__INF4/NOTES/` absent).
4. Le plan du prof (S6 p. 3) donne l'ossature de l'ingénierie de domaine : *1. Analysis — A. Languages to specify PLMs (feature models, OVM, DOPLER, constraint-based) ; B. Strategies to specify the requirements of a PL ; C. Verification, diagnosis and fixing*. Le cours 1 (S1 p. 6) annonce trois parties : introduction à la variabilité, processus de domaine, ingénierie d'application.

---

## 1. Niveaux de preuve

| Niveau | Critère (INF4) | Traitement | Notions |
|---|---|---|---|
| **A\*** | Exercice du prof avec énoncé dans les slides | Définition + tableau complet + **méthode** + **exemple entièrement corrigé** + piège | lire un feature model et compter ses produits (S6 p. 26-27) ; construire un modèle de variabilité à partir d'exigences (S6 p. 68-69) ; traduire un FM en contraintes et l'exécuter en GNU Prolog (S7 p. 13-22) ; vérifier un PLM (vide, features mortes) puis le diagnostiquer et le corriger (S7 p. 49-77) ; décrire en même temps communalité, variabilité, dépendances (S1 p. 5-8) ; apparier artisanat / ingénierie / art / design (S1 p. 9) |
| **B** | Insistance : slide répétée, définition numérotée du livre, objectif « How to… », terme de glossaire, liste numérotée | Définition + tableau ou liste complète + un exemple | framework PLE ; six mécanismes de réutilisation ; extensive / intensive ; OVM ; variabilité externe ; matrice applications-exigences ; trois stratégies ; typologie des critères de vérification ; deltas et catégories A-D ; liaison des variants ; tests 18-1 et 18-2 ; couverture en 4 catégories ; RED-PL (6 limites, 2 processus, ILP) |
| **C** | Fondement nécessaire | 2 à 4 lignes | activités de l'ingénierie des exigences, transformation de modèles, conformité, niveaux et activités de test, « Differences from single-system engineering » |
| **D** | Chiffres, historique, cas industriels, outils, auteurs | 1 à 3 lignes en `repere`, jamais en quiz | Venise, Ford, Garmisch, Ariane 5, CelsiusTech, Motorola, HP, Baxter, Kodak / Post-it, 10× / −98 %, VariaMos / FaMa, MEDIC-PLM, TurtleBot, FRoG |
| **E** | Support sans aucun signal | Référence courte | pistes de recherche (S7 p. 82), travaux voisins de RED-PL |

---

## 2. Diagnostic des 10 chapitres actuels (17 100 mots, ≈ 95 min, 8 schémas)

### 2.1 Forme
- **Aucun encadré « Définition à connaître », aucun « À retenir »**, titres non numérotés et souvent en accroche (« Pourquoi s'embêter ? », « Le mur de l'explosion combinatoire », « Ford, la chaîne… et l'impasse »), 10 à 29 paragraphes par chapitre, peu de tableaux. Restes de narratif au ch. 01 (« Imagine deux dessins côte à côte… »).
- **5 chapitres sans aucun schéma** (01, 02, 07, 09, 06/10) alors que les slides sont faites de diagrammes (framework PLE, FODA, typologie de vérification, OVM, courbes d'investissement).

### 2.2 Le secondaire prend la place du fondamental
| Chapitre | Trop développé (C / D) | Sous-exploité (A\* / B) |
|---|---|---|
| 01 | Artisanat → chaîne → sur-mesure (190 mots) ; exemples industriels | Les 3 définitions-clés de Böckle sont au ch. 02 ; framework PLE sans schéma |
| 02 | Ford et la chaîne (déjà au 01), « 35 % contre −7 % » en titre de partie | Six mécanismes de réutilisation et leur « X VS PL » : au 01, en paragraphes, sans tableau complet |
| 03 | Explosion combinatoire en partie entière | Pas de tableau unique de la notation FODA (relation → sémantique) ; la méthode de comptage n'est pas posée avant l'exercice 8192 → 46 |
| 04 | Contexte (flux, 5 activités, 3 dimensions) en tête : 620 mots avant la première notion à apprendre | OVM en un seul bloc de 445 mots ; exemple sécurité domestique raconté, pas présenté comme corrigé de la méthode |
| 07 | Model2Text / MiniUML (non vérifiable), quiz de complexité | Deux savoir-faire (traduire / vérifier-corriger) dans un chapitre de 15 min ; corrigés des exercices F5 et MUS en liste |
| 06 | Conception en un bloc de 812 mots | — |

### 2.3 Les blocs logiques sont coupés
- **Catégories d'adaptation A à D** : expliquées deux fois (ch. 05 : 481 mots, ch. 06 : 462 mots). Le livre les définit une fois (S3 §15.4.4) et les réutilise (§16.4 : « see Section 15.4.4 »).
- **Personnalisation de masse, chaîne de production, bénéfices / motivations** : ch. 01 et ch. 02.
- **« Commonality first » (ch. 02) et « as much commonality as possible » (ch. 04)** : même principe, jamais relié.
- **Une même relation, quatre notations** jamais mises côte à côte : FODA (ch. 03), OVM (ch. 04), contraintes CP (ch. 07), inégalités ILP (ch. 08). C'est pourtant ce qui permet de passer d'un exercice à l'autre.
- **DOPLER et modèles par contraintes** : une ligne au ch. 03 ; le langage par contraintes n'est pas relié à la transformation du ch. 07.

### 2.4 Méthodes sans exemple corrigé juste après
Construire un modèle à partir d'exigences (ch. 09 : méthode, mais solution p. 69 non redessinée), vérifier un PLM (ch. 07 : méthode, exemple dispersé), choisir le test d'une exigence (ch. 10), analyser un delta (ch. 05 : exemple 15-8 noyé dans le récit).

### 2.5 Schémas du cours absents de l'app
Framework PLE (S1, 4 slides) · framework SEI (S1 p. 25) · courbes d'investissement (S1 p. 29) et point de rentabilité (S2 Fig. 1-2) · PLM vs PM (S6 p. 10) · notation FODA et modèle de l'exercice (S6 p. 13-27) · OVM (S6 p. 41, S8 Fig. 10-10) · solution « magasins d'électroménager » (S6 p. 69) · cadre de transformation (S7 p. 4) · modèle F1…F12 de l'exercice Prolog (S7 p. 13) · typologie des critères de vérification (S7 p. 31) · modèle vide F1…F9 avant / après correction (S7 p. 62-72) · Table 15-1 (deltas × catégories) · lock control (S3 Fig. 16-3) · liaison de la variabilité dans les tests (S3 Fig. 18-3) · modèle d'exigences Stago (S4 Fig. 2).

---

## 3. Architecture : 11 chapitres, ≈ 90 min (estimation, pas un objectif)

Même durée qu'aujourd'hui, **autrement répartie** : le contexte (ch. 1, 2, 4, 8, 10) perd environ un tiers ; les chapitres d'exercices (3, 5, 6, 7) gagnent méthodes, corrigés et schémas. Un seul découpage (l'ancien ch. 07, deux savoir-faire distincts) ; un seul déplacement (RED-PL rejoint les exigences d'application).

| # | Chapitre | Durée | Niveau | Ce qui change |
|---|---|---|---|---|
| | **Partie 1 — Introduction** | | | |
| 1 | Variabilité et ligne de produits : les notions de base | 7 min | B | Définitions de Böckle rapatriées ; méthode « décrire en même temps » corrigée sur les gardes ; framework PLE redessiné |
| 2 | Pourquoi une ligne de produits : réutilisation, coûts, bénéfices | 6 min | B-C | Six mécanismes en un tableau « X VS PL » ; courbes en schéma ; historique et chiffres en repères |
| | **Partie 2 — Ingénierie de domaine : modéliser** | | | |
| 3 | **Les feature models : lire, donner la sémantique, compter (pilote)** | 11 min | A\* | Tableau unique de la notation ; méthode de comptage puis corrigé 8192 → 46 ; autres langages en bref |
| 4 | Exigences de domaine et modèle OVM | 9 min | B | OVM d'abord ; méthode « de la matrice à l'OVM » corrigée sur la sécurité domestique ; contexte condensé |
| 5 | Éliciter et spécifier les exigences d'une ligne : trois stratégies | 7 min | A\*-B | Tableau des 3 stratégies ; gabarit ; corrigé « électroménager » redessiné |
| | **Partie 3 — Ingénierie de domaine : transformer et vérifier** | | | |
| 6 | Traduire un modèle en contraintes : générer et compter les produits | 9 min | A\* | Table des règles FM → CP (et leur équivalent ILP) ; corrigé GNU Prolog complet |
| 7 | Vérifier, diagnostiquer et corriger un modèle de ligne de produits *(nouveau)* | 11 min | A\* | Typologie en arbre ; table défaut → contrainte de vérification ; corrigés « modèle vide » et « F5 morte » avant / après |
| | **Partie 4 — Ingénierie d'application** | | | |
| 8 | Exigences d'application : deltas et catégories A à D | 8 min | B | A-D expliquées ici seulement ; méthode « analyser un delta » corrigée sur l'exemple 15-8 |
| 9 | RED-PL : dériver les exigences d'un produit | 9 min | B | Placé juste après les exigences d'application (même activité) ; ILP relié aux règles CP du ch. 6 |
| 10 | Conception et réalisation d'une application | 6 min | B-C | A-D seulement rappelées ; liaison des variants et configuration en tête |
| 11 | Tester une application | 6 min | B | Tests 18-1 / 18-2 et couverture en 4 catégories en tête ; méthode « quel test pour quelle exigence » |

Ordre : comprendre la variabilité (1-2) → la modéliser (3-5) → raisonner sur le modèle (6-7) → dériver un produit (8-11). C'est le plan du prof (S1 p. 6 ; S6 p. 3), avec le livre de Pohl et RED-PL dans la partie « application ».

---

## 4. Sommaires détaillés

Légende : **Dév.** = développé (définition, tableau complet, méthode, exemple corrigé) · **Cond.** = condensé (quelques lignes, une case de tableau) · **Repère** = 1 à 3 lignes, jamais en quiz · **[⚠]** lacune des sources · ✎ schéma du cours à redessiner.

### Chapitre 1 — Variabilité et ligne de produits : les notions de base (7 min)
1. **Communalité, variabilité, dépendances** *Dév.* — définitions (S1 p. 6-7) ; tableau des 3 notions (définition | question pour la reconnaître | exemple des gardes) ; **méthode « décrire les trois en même temps »** + exemple corrigé (gardes britanniques, « big hat projects big shadow ») ; transfert synthétique (sandwicherie). Énoncé probable : « Find a way to describe both AT THE SAME TIME ».
2. **Le framework PLE : domaine / application, problème / solution** *Dév.* — définitions *domain engineering* (for reuse) et *application engineering* (with reuse) ; tableau 2 × 2 (où se place une activité) ; ✎ framework PLE ; Cond. : framework SEI (3 activités essentielles, « Leadership is required ») ✎, 3 activités de l'ingénierie de domaine (analyse, conception, implémentation).
3. **Les définitions à connaître (Böckle)** *Dév.* — tableau : personnalisation de masse (déf. 1-1), plate-forme (1-2), ingénierie des lignes de produits logicielles (1-3), plate-forme logicielle (1-4), actifs de base (*core assets*), définition SEI ; la formule « plate-forme + personnalisation de masse = SPLE ».
4. **Artisanat, ingénierie, art, design** *Cond.* — tableau des 4 définitions ; l'exercice d'appariement du prof (S1 p. 9) corrigé dans les exercices.
5. **Repère** : Garmisch 1968, familles de programmes (Dijkstra, Parnas), Neighbors / Draco, *softwarisation* (Broy).

### Chapitre 2 — Pourquoi une ligne de produits : réutilisation, coûts, bénéfices (6 min)
1. **Les six mécanismes de réutilisation** *Dév.* — tableau complet (6 lignes) : mécanisme | principe | atouts | limites | ce que la ligne de produits fait mieux (« X VS PL », S1 p. 16-23) ; noms exacts (*Duplication / copy & own*, *Δ based*, *configuration management*, *component-based*, aspects, lignes de produits) ; piège : réutiliser sans retester (Ariane 5, en repère). Le lien avec la représentation extensive / intensive (chapitre « Les feature models »).
2. **Le coût : courbes d'investissement et point de rentabilité** *Dév.* — big bang vs incrémental ✎ (courbe illustrative) ; point de rentabilité vers trois systèmes (S2 Fig. 1-2 ✎) ; délai de mise sur le marché (Fig. 1-3) ; piège : non rentable pour un seul produit ; les chiffres divergent selon les supports (citer la source).
3. **Les motivations et les bénéfices** *Cond.* — liste des 3 motivations principales et des motivations additionnelles (S2 §1.3) ; coûts et bénéfices selon trois points de vue (exigences, composants, outils et processus) en un tableau de 3 lignes ; bénéfices chiffrés (10×, −98 %…) en repère.
4. **Produire une ligne : d'abord le commun, ensuite les différences** *Cond.* — logiciel individuel vs standard ; « commonality first, differences later » ; flexibilité = variabilité ; variabilité gérée ; réorganisation de l'entreprise.
5. **Les prérequis** *Cond.* — technologies habilitantes, maturité des processus, expertise et stabilité du domaine.
6. **Repère** : Venise, Ford Model T, Kodak / Fuji, Post-it, Windows NT, +35 % / −7 %, CelsiusTech, Motorola, HP, Baxter.

### Chapitre 3 — Les feature models : lire, donner la sémantique, compter (pilote, 11 min)
*(2 lignes de fondement en tête : un PLM décrit la famille par des règles, pas par la liste de ses produits.)*
1. **La notation FODA complète** *Dév.* — définition de la *feature* ; tableau de référence : relation | notation | ce qu'elle impose | sémantique d'un exemple du cours (racine, *mandatory*, *optional*, *alternatives (XOR)*, cardinalité de groupe `<m..n>`, cardinalité individuelle `[m..n]`, *requires*, *mutex*, contraintes complexes, attributs) ; ✎ notation FODA ; ✎ exemple de la voiture.
2. **Méthode : donner la sémantique et compter les produits** *Dév.* — étapes (racine, obligatoires, produit des choix indépendants, retrait des combinaisons interdites par requires / mutex / contraintes, justification) ; **exemple entièrement corrigé : l'exercice du prof (S6 p. 26-27)**, ✎ modèle F1…F15, espace 2¹³, 46 produits autorisés, « Why? » ; une sémantique courte corrigée (S6 p. 15) en échauffement.
3. **Représentation extensive vs intensive ; PLM vs PM** *Dév.* — tableau (matrice, *breakdown structure* | modèles) ; bénéfices de l'extensive (liste) et son problème de passage à l'échelle ; ✎ PLM / PM (S6 p. 10) ; piège : *specification* (S1) vs *representation* (S6).
4. **Les autres langages de PLM** *Cond.* — tableau des 4 langages du plan du prof : feature models, OVM (renvoi au chapitre « Exigences de domaine et modèle OVM »), DOPLER (décisions, actifs, conditions d'inclusion, critique), modèles par contraintes (renvoi au chapitre « Traduire un modèle en contraintes »).
5. **Dialectes et limites des feature models** *Cond.* — dialectes en une ligne (FORE : *excludes*) ; limites sur le système de freinage ; question de discussion S6 p. 39 avec réponse proposée.
6. **Repère** : TurtleBot (versions), FRoG.

### Chapitre 4 — Exigences de domaine et modèle OVM (9 min)
1. **L'OVM : points de variation, variants, dépendances** *Dév.* — définitions (S8) ; tableau de notation (point de variation, variant, dépendance de variabilité obligatoire / optionnelle, choix alternatif `[min..max]`, dépendances de contrainte *requires* / *excludes* entre variants et points de variation) ; ✎ Fig. 10-9 et 10-10 ; point de variation auxiliaire (S6 p. 41) *Cond.* ; tableau « Le lien avec les feature models » (même relation, deux notations).
2. **Variabilité externe vs interne** *Dév.* — définition ; variabilité visible du client (S6 p. 43) ; les 4 décisions de la gestion de produit *Cond.*
3. **Analyse de communalité** *Dév.* — « as much commonality as possible » (lien avec « commonality first ») ; matrice applications-exigences (Table 10-1) ; analyse par priorités (Kano, exigences de haute priorité, communalités stratégiques) ; check-lists.
4. **Analyse de variabilité et définition des exigences variables** *Dév.* — « not for every difference a variation point is defined » ; les 4 étapes (Fig. 10-4 ✎) ; sujet de variabilité.
5. **Méthode : de la matrice à l'OVM** *Dév.* — étapes + **exemple corrigé : les trois systèmes de sécurité domestique** (Fig. 10-8 → points de variation → OVM).
6. **Le cadre** *Cond.* — buts, liens avec la gestion de produit et la conception (Fig. 10-2 ✎), 5 activités, 3 dimensions, 3 activités propres ; différences avec un système unique.
7. **Repère** : *twin peaks*, feuille de route produit.

### Chapitre 5 — Éliciter et spécifier les exigences d'une ligne : trois stratégies (7 min)
1. **Les trois stratégies** *Dév.* — tableau : stratégie | point de départ | étapes | résultat | limite (dirigée par les exigences, produit bas / haut de gamme ou de référence, multi-points de vue) ; ✎ carte des stratégies.
2. **Stratégie dirigée par les exigences : le gabarit** *Dév.* — gabarit « [Condition or event], ALL | SOME SYSTEMS OF THE <PL> <Priority>… », « THOSE SYSTEMS… », SHALL / SHOULD / COULD ; tableau adapté d'IEEE 830 *Cond.* ; problème de terminologie *Cond.*
3. **Méthode : construire le modèle de variabilité à partir d'exigences** *Dév.* — étapes (mot-clé → relation) + **exemple corrigé : magasins d'électroménager R1-R5 + C1** (✎ solution S6 p. 69).
4. **Stratégie du produit de référence (bas / haut de gamme)** *Dév.* — étapes ; question « What is the influence of the choice of the first product? » avec réponse proposée.
5. **Stratégie multi-points de vue** *Cond.* — 4 étapes ; l'OVM comme langage pivot ; intégration des vues.

### Chapitre 6 — Traduire un modèle en contraintes : générer et compter les produits (9 min)
1. **Les règles de traduction FM → contraintes** *Dév.* — tableau (S7 p. 6-12, 50) : relation | contrainte en 0/1 | piège de sens — *optional* F1 ≥ F2, *mandatory* F1 = F2, *requires* F1 ⇒ F2, *excludes* F1 + F2 ≤ 1, groupe `<m..n>` m·F0 ≤ ΣFi ≤ n·F0, cardinalités individuelles, attributs ; racine = 1 ; colonne « équivalent ILP (RED-PL) » en lien.
2. **Méthode : traduire, générer, compter avec GNU Prolog** *Dév.* — étapes + **exemple entièrement corrigé : l'exercice F1…F12 (S7 p. 13-18)** ✎ — code, configurations, sémantique (`findall`), 12 produits, défaut détecté (F8) ; transfert synthétique : *Movement Control System* en contraintes de haut niveau (S7 p. 19-22).
3. **Pourquoi transformer, et comment** *Cond.* — « Graphical representation of models makes it impossible to… » ; transformation modèle-vers-texte ; cadre de transformation ✎ (Ma / Mb, MMa / MMb).

### Chapitre 7 — Vérifier, diagnostiquer et corriger un modèle de ligne de produits (nouveau, 11 min)
1. **Ce qu'on vérifie : typologie et défauts** *Dév.* — ✎ typologie (S7 p. 31) : conformité / critères sémantiques (expressivité : non vide, non faux ; sans erreur : pas de feature morte, pas de fausse optionnelle, domaines atteignables ; sans redondance) ; tableau défaut | définition | contrainte de vérification | ce qui signale le défaut (S7 p. 55) ; piège : la vérification trouve le défaut quand le solveur n'a **pas** de solution.
2. **Méthode : vérifier un PLM avec un solveur** *Dév.* — ✎ arbre de décision ; exemple corrigé : « le modèle est-il vide ? quelles features sont mortes ? » (S7 p. 49-57).
3. **Méthode : diagnostiquer et corriger (MUS)** *Dév.* — **exemple corrigé avant / après** ✎ (S7 p. 62-72) : effacer les exclusions (insuffisant), relâcher `[1..1]` en `[1..3]`, effacer un MUS (modèle faux, « not good in PLE »), relâcher une dépendance ; F5 morte : pourquoi F4, F8, F9 aussi, et deux corrections (S7 p. 73-76) ; transfert : airbags latéraux et rétroviseurs Renault (S7 p. 78).
4. **Vérification de conformité** *Cond.* — définition ; 2 règles (unicité de la racine, dépendances optionnelles dans un groupe) ; métamodèle générique en une ligne.
5. **Pourquoi vérifier, pourquoi c'est difficile** *Cond.* — 3 raisons (NP-complétude) ; le quiz de complexité du prof.
6. **Repère** : MEDIC-PLM, vérification multi-modèles DOPLER, VariaMos / FaMa, pistes de recherche.

### Chapitre 8 — Exigences d'application : deltas et catégories A à D (8 min)
1. **Exigences des parties prenantes, exigences d'application, trois activités** *Dév.* — définitions 15-1 et 15-2 ; communiquer, évaluer les deltas, documenter ; deux catégories d'applications ; ✎ Fig. 15-2.
2. **Deltas et catégories d'adaptation A à D** *Dév.* — définitions (delta d'exigences, delta du modèle de variabilité : 2 types) ; tableau A-D ; Table 15-1 (types de delta × catégories) ✎ ; les 4 décisions possibles ; pièges (une catégorie D est rejetée sauf projet séparé ; un nouveau point de variation n'est jamais en A).
3. **Méthode : analyser un delta** *Dév.* — ✎ arbre de décision + **exemple corrigé 15-8** (4 deltas).
4. **Communiquer la variabilité au client** *Cond.* — points de variation et variants (exemple 15-1, ✎ Fig. 15-4) ; deux classes d'exigences en résultat.
5. **Documenter ; différences avec un système unique** *Cond.* — spécification des exigences d'application (4 parties), modèle de variabilité d'application, traçabilité.

### Chapitre 9 — RED-PL : dériver les exigences d'un produit (9 min)
1. **Pourquoi sélectionner ne suffit pas** *Dév.* — les 6 limites (liste complète) ; les 6 caractéristiques attendues *Cond.*
2. **Les deux processus : matching et arbitrage** *Dév.* — définitions ; ✎ Fig. 3 ; méthode « traiter un besoin au matching » + exemple corrigé ; analyse de similitude (surface / profonde) et exigences marquées *Cond.* ; capitalisation *Cond.*
3. **L'arbitrage en ILP** *Dév.* — tableau des 5 dépendances → inégalités (Table 1) ; piège : le sens de l'inégalité et les noms de variables qui changent entre le texte et le tableau ; « Le lien avec » les règles CP du chapitre « Traduire un modèle en contraintes » ; poids et contraintes.
4. **Méthode : poser et lire un arbitrage** *Dév.* — **exemple corrigé : cas Stago** (✎ modèle d'exigences Fig. 2) ; exercice du tableur ILP du prof.
5. **Limites et perspective** *Cond.* — limites du matching et de l'ILP ; programmation par contraintes. **Repère** : approche d'Akkar / *what-if*, résultats rapportés (×2 à ×50), travaux voisins.

### Chapitre 10 — Conception et réalisation d'une application (6 min)
1. **Architecture de référence, architecture d'application, liaison des variants** *Dév.* — définitions ; lier les variants ; déterminer la configuration (exemple 16-5) ; ✎ Fig. 16-3 (*lock control*) ; sélection cohérente des variants matériels *Cond.*
2. **Réalisation : configurer et assembler** *Dév.* — interfaces réutilisées, points de variation internes liés par paramètres ; cohérence des paramètres ; composants propres à l'application ; construire l'application.
3. **Le coût d'un variant** *Cond.* — rappel A-D (renvoi au chapitre « Exigences d'application »), facteurs de coût, que faire si c'est trop cher.
4. **Retour vers le domaine ; différences avec un système unique** *Cond.* — banc d'essai ; tableau conception / réalisation.

### Chapitre 11 — Tester une application (6 min)
1. **Les tests liés à la variabilité** *Dév.* — définitions 18-1 (*variant absence test*, 3 niveaux) et 18-2 (*application dependency test*) ; ce que chacun détecte.
2. **Couverture : quatre catégories d'exigences** *Dév.* — tableau catégorie → test (commun → *commonality test* ; variable → *variant test* ; adapté → *modification test* ; nouveau → *extension test*) ; **méthode « quel test pour quelle exigence » + exemple corrigé** ; ✎ arbre de décision.
3. **Réutiliser les tests du domaine** *Dév.* — lier la variabilité dans les tests (✎ Fig. 18-3), traçabilité exigences-tests, lecture des deltas.
4. **Niveaux, activités, différences** *Cond.* — 3 niveaux, 3 activités, différences avec un système unique ; tableau final « différences avec un système unique » pour les quatre sous-processus d'application (exigences, conception, réalisation, test).

---

## 5. Ce qui disparaît, ce qui est condensé

**Supprimé (parasites)** : accroches et titres-accroches ; « Imagine… » ; doublons (Ford et personnalisation de masse en double, A-D expliquées deux fois, bénéfices vs motivations) ; paraphrase des slides ; contenus **non vérifiables** déjà signalés par C09 (exemple Model2Text / MiniUML, sigle « MENC », expansion de MUS, étiquettes *rationale* / *composition rule* de la voiture) : retirés ou présentés sans fait nouveau.

**Condensé, pas supprimé** (une ligne, une case de tableau, un repère) : historique, chiffres et cas industriels ; DOPLER ; dialectes ; conformité ; contexte de Pohl (flux, activités, dimensions) ; documentation des exigences d'application ; niveaux et activités de test ; Akkar / *what-if* ; MEDIC-PLM ; Renault (gardé comme exercice de transfert).

Vérification ligne à ligne : aucune notion ★★ ou ★★★ de `notions.json` n'est dans « supprimé ». Promotions : l'appariement artisanat / ingénierie / art / design (★ → exercice) et la correction de F5 morte (★ → corrigé A\*), parce que ce sont des exercices du prof.

---

## 6. Lacunes et correspondance

### 6.1 Lacunes des sources
| Point | État | Traitement |
|---|---|---|
| Format du contrôle INF4 | Aucune annale, aucune consigne | `examFocus` toujours `probable` ; **à confirmer par toi** |
| `PROGRAMME.md` | Non rempli | Tout traité ; à compléter si tu peux |
| Tableur ILP du prof | Non citable | Contraintes recopiées en clair, citation du Tableau 1 de RED-PL (comme aujourd'hui) |
| RED-PL Fig. 4 | Transcription ≠ image du PDF | L'image fait foi (déjà noté dans `sources.json`) |
| Catégories de coût Bluetooth (C), portes / iris (B) | Déduites, pas données par le livre | Signalé « déduit » |
| Exercice 8192 → 46 | La solution des slides donne le résultat, pas le détail du calcul | Détail du comptage marqué « corrigé proposé » |

### 6.2 Ancien → nouveau
| Contenu actuel | Destination | Action |
|---|---|---|
| 01 : gardes, sandwichs, communalité / variabilité / dépendances | 1 §1 | Méthode + corrigé |
| 01 : framework PLE, SEI | 1 §2 | Schémas redessinés |
| 01 : artisanat → sur-mesure | 1 §4 et 2 §6 | Définitions gardées, historique en repère |
| 01 : six mécanismes, bénéfices, courbe d'investissement | 2 §1-3 | Tableau, courbe, repère |
| 02 : définitions 1-1 à 1-4 | 1 §3 | Avancées |
| 02 : motivations, point de rentabilité, prérequis | 2 §2-5 | Condensés |
| 03 : extensive / intensive, FODA, exercice 46, dialectes | 3 | Réordonné, notation en un tableau |
| 04 | 4 | OVM en tête, contexte en fin |
| 09 | 5 | Corrigé redessiné |
| 07 : transformation, CP, exercice Prolog | 6 | Recentré |
| 07 : vérification, diagnostic | 7 (`11-verification-diagnostic.json`, nouveau) | Découpé |
| 05 | 8 | A-D ici seulement |
| 08 | 9 | Déplacé après les exigences d'application |
| 06 | 10 | A-D réduites à un rappel |
| 10 | 11 | Réordonné |

Les identifiants des chapitres sont conservés (l'ordre passe par `course.json.chapterOrder` et le champ `order`) ; seul `inf4-11-verification-diagnostic` est nouveau. Les quiz, flashcards et exercices déjà vérifiés sont réutilisés ; les items de vérification passent au chapitre 7 (ids renommés, `notions.json` mis à jour).

---

## 7. Réalisation
- **2026-11-18, pilote : chapitre 3 « Les feature models : lire, donner la sémantique, compter »** (`03-cadre-ple.json`, 12 min, 2 180 mots, 5 parties et 15 sous-parties, dont un 3ᵉ niveau). Tableau unique de la notation FODA (9 éléments) ; méthode de comptage + échauffement sur le modèle fil rouge (4 → 8 → 24, puis 16 → 12 → 11, décomptes proposés) ; **corrigé complet de l'exercice du prof par cas : 9 (F13) + 25 (F14) + 12 (F15) = 46**, vérifié par énumération des 8192 combinaisons ; extensive / intensive et PLM / PM ; les 4 langages sur le même PLM (slide 10) ; DOPLER et contraintes en bref ; dialectes, limites, question de discussion (réponse proposée). 4 schémas redessinés (notation sur le modèle fil rouge, voiture, modèle de l'exercice, PLM → PM), contrôlés à l'écran. 18 quiz (3 nouveaux), 18 flashcards (3 nouvelles), exercices et anglais repris.
- **Écart de source** : une transcription (`5__soft_ple_detailed.md`) dit F2 optionnelle dans l'exercice, l'autre (`6__ple.md`) obligatoire ; seule « obligatoire » redonne les 46 produits du prof (optionnelle : 56). Signalé dans le corrigé.
- **2026-11-18, chapitres 6 et 7** : l'ancien chapitre « Transformation, vérification et diagnostic » (2 640 mots) est découpé.
  - **6. « Traduire un modèle en contraintes : générer et compter les produits »** (`07-transformation-verification.json`, 6 min) : tableau des règles avec leur équivalent ILP (RED-PL), cardinalités individuelles et attributs, méthode GNU Prolog et corrigé de l'exercice F1…F12 relation par relation (12 produits, F8 morte, vérifié par énumération), transfert Movement Control System, cadre de transformation. 2 schémas. Exemple Model2Text / MiniUML retiré (description de schéma non vérifiable dans le PDF).
  - **7. « Vérifier, diagnostiquer et corriger un modèle de ligne de produits »** (`11-verification-diagnostic.json`, nouveau, 10 min) : typologie en arbre, tableau défaut → contrainte de vérification, méthode en arbre de décision, exemple « vide ? mortes ? », chaîne d'implications du modèle vide, corrections avant / après, MUS, **exercice F5 morte corrigé (pourquoi F4, F8, F9 aussi ; deux corrections : effacer « F8 requires F7 » → 6 produits, aucune morte ; effacer « F5 requires F9 » → F5 seule revit)**, Renault en transfert, conformité, difficulté. 3 schémas. « MENC » remplacé par MEDIC-PLM (PDF).
  - **Écarts relevés en vérifiant par énumération** : relâcher la cardinalité [1..1] → [1..3] ne rend le modèle non vide qu'après l'effacement des exclusions (le code de la slide 67 les affiche encore) ; la description du schéma (transcription) dit « F9 requires F5 », le code du PDF dit `F5 #==> F9` : le chapitre suit le code, qui redonne tous les résultats du solveur des slides.
  - Ordre : le chapitre 7 suit le chapitre 6 (`course.json`) ; notions de vérification réaffectées au chapitre 11.
- **2026-11-18, chapitre 5 « Éliciter et spécifier les exigences d’une ligne : trois stratégies »** (`09-strategies-exigences-pl.json`, 9 min, 5 parties) : tableau des 3 stratégies avec la limite soulevée par le prof ; stratégie dirigée par les exigences (5 étapes reliées au triptyque communalité / variabilité / dépendances), gabarit de Mazo et al. en tableau, **ALL / SOME = variabilité ≠ SHALL / SHOULD / COULD = priorité** (piège), fiche IEEE 830 adaptée, piège des mots-clés ; méthode + corrigé des magasins d’électroménager (exigence → mot-clé → feature, solution redessinée, 12 produits et remarque proposée sur Payment) ; UNIX de la documentation au modèle ; produit de référence (3 étapes, déroulé RedHat → SUSE → Ubuntu, lien avec la représentation extensive, réponse proposée sur l’influence du premier produit) ; multi-points de vue (4 étapes, OVM pivot, limites). 2 schémas, 13 quiz (3 nouveaux), 10 flashcards.


---

## 8. Mise à jour du 2026-11-20 : tutoriels VariaMos, quiz du prof, archive TaskForge

> **Statut : proposé, à valider.** Nouvelles ressources déposées dans `ressources/S3__INF4/epi/` : tutoriels T0 à T5 (PDF), annexe SECRET, `9__applications.md`, quiz 0 à 2 (quiz 3 à 5 vides), ISO/IEC 24707, archive TaskForge. Corrigés et savoir-faire : `content/inf4/QUIZ-PROF.md`.

### 8.1 Ce qui change dans les niveaux de preuve
- **Preuve nouvelle** : `9__applications.md` : « The final exam will cover all lecture, all tutorials and all recommended readings ». Les tutoriels passent de « repère » (VariaMos) à **niveau A\*** ; les notions posées dans un quiz du prof sont **A documenté** (le quiz est le meilleur indice du format d'examen : questions à choix multiples « Select all correct statements », scénarios, justifications).
- **Ce qui manque au cours actuel** (aucune occurrence dans les 11 chapitres) : gabarit **SECRET** en 11 parties, types d'exigences (fonctionnelle, sécurité, autres non fonctionnelles, contraintes), **dix relations entre exigences** (rationalisation, évolution, raffinement, généralisation, recouvrement, dépendance, contribution, opérationnalisation, conflits, interactivité), ontologie SCORE (30 critères de sécurité), génération du SRS ; **Bundle / Range**, attributs, abstract features, cardinalités individuelles dans VariaMos ; **requêtes JSON PLEIADES** (`sat`, `solve`, `nsolve`, `optimize`, `iterate_over`) ; **configuration automatique** (trois tâches, configuration partielle, optimisation) ; syntaxe **CLIF** ; noyau (*core*) et features variables.
- **Déjà couvert, à relier** : sémantique des relations (chapitres « Les feature models » et « Traduire un modèle en contraintes »), défauts d'un modèle (« Vérifier, diagnostiquer et corriger »), gabarit « ALL / SOME… » de Mazo et al. (chapitre « Trois stratégies »), copie / duplication (chapitre « Pourquoi une ligne de produits »), retour application → domaine (chapitre « Conception et réalisation »).

### 8.2 Architecture proposée : 13 chapitres au lieu de 11 (deux nouveaux)

| # | Chapitre | Statut | Ce qui s'ajoute (tutoriel / quiz) |
|---|---|---|---|
| 1 | Variabilité et ligne de produits : notions de base | à refondre | **T0 / quiz0** : domaine vs application vs adaptation dans VariaMos ; périmètre et ce qui est « commun » ; copie ≠ ligne ; retour application → domaine ; fiche « prise en main » (Software / System, palette, propriétés) |
| 2 | Pourquoi une ligne de produits | à refondre | inchangé (condensé) |
| 3 | Les feature models | refondu, **à compléter** | **T2 / quiz2** : notation VariaMos (Includes, Bundle Range, attributs, abstract features, cardinalité individuelle) ; **méthode de comptage d'un groupe `[m..n]`** (6 et 15) ; pièges d'implication (réciproque, contraposée, transitivité) ; lecture d'un fragment |
| 4 | Exigences de domaine et modèle OVM | à refondre | inchangé |
| 5 | **Écrire une exigence de ligne : le gabarit SECRET** | **nouveau** | **T1 + annexe / quiz1** : 11 parties du gabarit, ALL / SOME / THOSE, SHALL / SHOULD / COULD, types d'exigences, 15 propriétés, dix relations, SRS ; pièges : *eventually*, « user-friendly » rendu mesurable, conflit, phrase ambiguë |
| 6 | Éliciter une ligne : trois stratégies | refondu, **allégé** | le tableau du gabarit renvoie au chapitre 5 |
| 7 | Traduire un modèle en contraintes | refondu, **à compléter** | **T3 / quiz3** : traduction SWI-Prolog, `findall`, `findnsols`, noyau et variables, `F3 * F4 #= 0`, CLIF, attributs |
| 8 | Vérifier, diagnostiquer et corriger | refondu, **à compléter** | **T4 / quiz4** : requêtes JSON, solveurs, `iterate_over` ↔ mortes / fausses optionnelles, `nsolve 2` ↔ fausse ligne |
| 9 | **Configurer automatiquement un produit** | **nouveau** | **T5 / quiz5** : trois tâches, configuration partielle et complétion, comptage avec sélection / exclusion, optimisation (`optimize`, min / max), limites du modèle de coût ; lien avec l'ILP du chapitre RED-PL |
| 10 | Exigences d'application : deltas, catégories A à D | à refondre | inchangé |
| 11 | RED-PL | à refondre | inchangé |
| 12 | Conception et réalisation d'une application | à refondre | inchangé |
| 13 | Tester une application | à refondre | inchangé |

Chaque chapitre « tutoriel » suit le gabarit §11.2 : définition → tableau → méthode + **exemple corrigé** → pièges → retenir. Les **questions du prof** deviennent des items `mcq` à réponses multiples (`correct: number[]`, déjà prévu par le modèle de contenu), marqués « question du prof (tutoriel n) », avec corrigé **proposé** et la raison de chaque proposition fausse.

### 8.3 Ce qui est condensé, pas supprimé
Historique, chiffres et cas industriels (inchangé) ; mode d'emploi pas à pas de VariaMos (clics, menus) réduit à un tableau de 6 lignes, sauf les faits testés (structure du projet, Software / System, types d'éléments) ; archive TaskForge : un **encadré** dans les chapitres 8 et 9 (mêmes notions : vide, morte, faussement optionnelle, noyau, configuration partielle ; format UVL) en attendant de savoir si le prof l'a donnée ; ISO 24707 : une ligne sur CLIF.

### 8.4 Ordre de travail proposé (le plus rentable d'abord)
1. Sources : extraire les 6 tutoriels et l'annexe dans `sources-texte/inf4/`, les déclarer dans `sources.json` (citations vérifiables).
2. **Chapitre 5 (SECRET)** puis **chapitre 3 (compléments quiz2)** : ils portent les deux quiz que nous avons.
3. Chapitre 1 (quiz0), puis chapitres 7 et 8 et **chapitre 9 (T3 à T5)**, dès que vous redéposez quiz 3 à 5.
4. Les chapitres 2, 4, 10, 11, 12, 13 restants (refonte du plan du 2026-11-18).
5. Les 36 questions du prof (et celles des quiz 3 à 5) dans les chapitres ; partiel blanc dans le format du prof.

### 8.5 À confirmer par vous
1. quiz3 / quiz4 / quiz5 (vides), questions et rendus de l'intranet : à redéposer ou à coller.
2. Format et date du partiel INF4 (aucune annale) ; ce que le prof a dit sur l'examen en classe.
3. L'archive TaskForge vient-elle du prof (outil FlamapyIDE, pas VariaMos) ?
4. L'ISO 24707 est-elle une lecture recommandée ?
5. Validation de l'architecture §8.2 (deux chapitres nouveaux, SECRET avant les stratégies).

### 8.6 Audit de couverture du 2026-11-20 (script, lecture seule)

**Notions** (`notions.json`, 253 : 67 ★★★, 92 ★★, 94 ★) croisées avec les blocs et items des 11 chapitres actuels :
- les **159 notions ★★ et ★★★ sont toutes citées** ; 0 notion enseignée hors de son chapitre d'attache ;
- **41 notions ★ jamais citées** (historique, cas industriels, organisation du cours, pistes de recherche) : prévues en repère ; à retrouver ou à écarter à la refonte des chapitres 1, 2, 4, 8, 11. Deux ont disparu des chapitres déjà refondus alors que le plan les gardait : *OVM : point de variation auxiliaire*, *problème de terminologie* ;
- **1 notion enseignée dans deux chapitres** : *feature morte* (utilisée dans l'exemple Prolog du chapitre « Traduire », définie dans « Vérifier ») ; voulu, à garder avec un renvoi.

**Quiz du prof** (36 questions) croisés avec le texte du cours actuel (mots-clés, donc approximatif) :
- **absent des 11 chapitres** : distinction fonctionnel / non fonctionnel, gabarit SECRET (11 parties) et énoncés RELAX (*eventually*), relations entre exigences (contribution, opérationnalisation…), modèle « Domain Requirements - AC » et SRS, espaces d'adaptation, structure d'un projet VariaMos, Bundle / Range, **réciproque, contraposée et transitivité** d'un *requires* (aucun des 4 chapitres refondus ne les nomme), comptage des sélections d'un groupe `[m..n]` ;
- **seulement par fragments** : périmètre (*scope*) de la famille, retour application → domaine (notion ★ « jamais citée » promue A par les quiz 0-4 et 0-11), « observé ≠ voulu » ;
- **couvert** : ingénierie d'application, architecture de référence, tests du domaine, duplication, sémantique obligatoire / optionnel / requires / excludes, cardinalités.
→ le plan §8.2 (chapitres 1, 3, 5 enrichis ou créés) vise exactement ces trous ; **aucun n'est encore écrit**.
