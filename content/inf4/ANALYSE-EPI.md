# Analyse globale du dossier EPI (INF4) — 2026-11-20

> **Périmètre** : les 24 éléments de `ressources/S3__INF4/epi/`, tous donnés par le prof. Les éléments « difficilement accessibles » (intranet : questions, rendus, quiz 3 à 5) ne sont pas analysés : voir « Limites ». Cette analyse remplace l'hypothèse « aucune annale » de `PROFIL-PROF.md` §1 : le prof a donné des quiz, un barème de TP et une consigne sur l'examen.
> Les numéros de chapitre sont ceux de l'**ordre d'affichage** proposé (`REFONTE-ARCHITECTURE.md` §8.2) : 5 = gabarit SECRET, 6 = trois stratégies, 7 = contraintes, 8 = vérification, 9 = configuration, 10 = exigences d'application, 11 = RED-PL, 12 = conception et réalisation, 13 = test.
> Tout est indexé (`sources.json`, 28 fichiers lisibles, 1 080 passages) et citable avec `m2-sources`.

## 1. Inventaire : ce que contient chaque fichier et ce qu'il apporte

| # | Fichier | Nature | Apport pour le partiel | Chapitre d'accueil |
|---|---|---|---|---|
| 1 | Introduction to PLE (slides, cours 1) | cours | triptyque communalité / variabilité / dépendances, six mécanismes de réutilisation, framework PLE, coûts | 1 et 2 |
| 2 | Böckle et al., ch. 1 | lecture | définitions 1-1 à 1-4, motivations, point de rentabilité | 1 et 2 |
| 3 | Pohl et al., partie IV, ch. 15-18 | lecture | exigences d'application, deltas, catégories A à D, liaison des variants, tests | 10, 12, 13 |
| 4 | RED-PL (CAiSE 2007) | lecture | six limites, matching / arbitrage, ILP | 11 |
| 5 | Tableur « Product Line configuration using ILP » | exercice | configuration par coût et revenu (MAX, MIN, sans F9), même logique que T5 | 9 (lié à 11) |
| 6 | Slides « (Software) PLE » (domaine, partie 1) | cours | feature models, exercice 8192 → 46, trois stratégies, exercice des magasins | 3 et 6 |
| 7 | Slides « Domain engineering for reuse, part 2 » | cours | traduction en contraintes, vérification, diagnostic, exercices F5 et MUS | 7, 8 |
| 8 | Pohl et al., ch. 10 | lecture | OVM, analyse de communalité et de variabilité | 4 |
| 9 | `applications.md` | **consigne** | « The final exam will cover all lecture, all tutorials and all recommended readings » ; quiz à faire après chaque tutoriel, 3 essais | tous |
| 10 | Tutorial 0 | tutoriel | projet, lignes, applications, adaptations ; Software vs System | 1 |
| 11 | quiz0 | **quiz du prof** | 12 questions : ingénierie d'application, périmètre, retour au domaine, copie ≠ ligne, requires / excludes, structure VariaMos | 1 |
| 12-13 | Tutorial 1 + annexe SECRET | tutoriel | gabarit SECRET (11 parties), types d'exigences, 15 propriétés, dix relations, SRS, ontologie de 30 critères de sécurité | 5 (nouveau, SECRET) |
| 14 | quiz1 | **quiz du prof** | 12 questions : fonctionnel, ALL / SOME / THOSE, condition, *eventually*, mesurable, contribution, conflit | 5 |
| 15 | Tutorial 2 | tutoriel | feature model avec attributs : mandatory, optional, includes, Bundle Range, attributs, ClothingStores (25 features) | 3 |
| 16 | quiz2 | **quiz du prof** | 12 questions : implication, comptage de groupes, fragments de modèle | 3 |
| 17 | Tutorial 3 | tutoriel | modèle → SWI-Prolog, `findall`, faux produit, mort, noyau, `findnsols`, CLIF, attributs entiers | 7 |
| 18 | quiz3 | quiz | **vide (0 octet)** | 7 |
| 19 | Tutorial 4 | tutoriel | requêtes JSON PLEIADES : `sat`, `solve`, `nsolve`, `optimize`, `iterate_over` ; solveurs minizinc / swi / z3 | 8 |
| 20 | quiz4 | quiz | **vide** | 8 |
| 21 | Tutorial 5 | tutoriel | trois tâches de configuration, configuration partielle, comptage, optimisation de coût | 9 (nouveau, configuration) |
| 22 | quiz5 | quiz | **vide** | 9 |
| 23 | ISO/IEC 24707:2018 | norme (donnée par le prof) | CLIF : syntaxe LISP, notation préfixe ; le tutoriel 3 s'en sert pour les contraintes textuelles | 7 (une section courte) |
| 24 | TaskForge (zip) | **TP noté du prof** | UVL, modèle v1 à v3, trois modèles fautifs, rétro-ingénierie d'un code, génération par préprocesseur, évolution ; **barème sur 20** | 3, 8, 12, 13 (exemple filé) |

## 2. Les signaux d'examen, du plus fort au plus faible

1. **Consigne du prof (#9)** : l'examen couvre tout, tutoriels compris. Aucune notion des tutoriels n'est donc facultative.
2. **Barème TaskForge (#24, sur 20)** : modèle construit à partir des exigences et justifié 4 · diagnostics et corrections 4 · reconstruction depuis un code et traçabilité 4 · configurations, génération et évolution réutilisable 5 · tests et explication des limites 3. Ce sont les **cinq compétences** que le prof dit évaluer.
3. **Quiz 0 à 2 (#11, 14, 16)** : 36 questions, toujours des scénarios courts à choisir « all correct statements » (1 ou 2 points). Les corrigés manquent ; les réponses sont déduites (`QUIZ-PROF.md`).
4. **Exercices des slides (#6, 7)** : énoncés et corrigés fournis (46 produits, Prolog, modèle vide, F5 morte, magasins). Déjà traités dans les chapitres refondus.
5. **Lectures** (#2, 3, 4, 8) : listes numérotées, définitions numérotées, catégories A à D, tables.

## 3. Ce que montre la lecture croisée

- **Les tutoriels reprennent le cours avec un autre outil.** Même sémantique, autre notation : les relations FODA (chapitre 3) = les éléments VariaMos (T2) = les contraintes Prolog (chapitre 7, T3) = les requêtes JSON (T4). Une notion, quatre habillages : le cours doit les relier au lieu de les répéter.
- **Trois sujets sont totalement nouveaux** : le **gabarit SECRET** et les relations entre exigences (T1), la **configuration automatique** (T5), le **TP TaskForge** (variabilité de construction, traçabilité, évolution).
- **Deux thèmes traversent tout** : (a) *raisonner juste sur des implications et des cardinalités* (quiz 0, 2, TaskForge T1) ; (b) *distinguer ce qui relève de la famille (domaine, périmètre, modèle) de ce qui relève d'un produit (sélection, application, donnée)* (quiz 0, 1, TaskForge T2). Ce sont les deux fils conducteurs du cours refondu.
- **Le tableur ILP (#5) et le tutoriel 5 (#21) traitent la même idée** : une configuration est une solution d'un système de contraintes, choisie selon un coût et un revenu. Ils sont réunis dans un chapitre.
- **Le TP TaskForge est la seule application « de bout en bout »** : exigences → modèle → vérification → code → configuration → produit → test → évolution. Il sert d'exemple filé pour relier les chapitres 3, 8, 12 et 13.

## 4. Les cinq compétences à maîtriser (ce que le prof dit évaluer, plus les quiz)

| # | Compétence | Ce qu'il faut savoir faire | Chapitres |
|---|---|---|---|
| C1 | **Construire un modèle à partir d'exigences** | mot-clé → relation (obligatoire, optionnelle, alternative, `[m..n]`, requires, excludes) ; justifier chaque choix ; ne pas transformer chaque détail en feature | 5, 6, 3 |
| C2 | **Raisonner sur un modèle** | sémantique, comptage de produits et de sélections d'un groupe, implications (pas de réciproque, transitivité), lire un fragment | 3, 7 |
| C3 | **Vérifier, diagnostiquer, corriger** | vide, faux, mort, faussement optionnel, noyau ; requête ou contrainte de vérification ; corriger sans supprimer une vraie exigence | 8 |
| C4 | **Configurer, générer, faire évoluer** | configuration complète / partielle, complétion, optimisation ; liaison des variants à la construction ; effet d'une évolution sur le nombre de produits ; régression | 9, 12, 13 |
| C5 | **Écrire, tracer, tester** | exigence au gabarit SECRET, traçabilité exigence → feature → code → test, quels tests pour quelle exigence, limites de la vérification | 5, 12, 13 |

## 5. Limites de cette analyse (à lever par vous)

- **quiz3, quiz4, quiz5** : vides ; les prévisions du chapitre correspondant s'appuient sur le tutoriel seul.
- **Intranet** : questions, quiz supplémentaires et rendus non accessibles. Les corrigés de l'app resteront « proposés » tant que vous n'avez pas confronté les réponses à la correction de la plateforme (la page « Revue » d'un quiz affiche en général les bonnes réponses : en coller une rendrait les corrigés officiels).
- **Format et date du partiel** : inconnus. Le cours refondu est construit pour résister aux deux formats les plus probables (QCM à réponses multiples sur scénarios ; exercices à rédiger de type slides ou TaskForge).
- **ISO 24707** : 78 pages ; seule la syntaxe CLIF utilisée par le tutoriel 3 est retenue (niveau D). Si le prof l'a signalée comme lecture, dites-le-moi.
