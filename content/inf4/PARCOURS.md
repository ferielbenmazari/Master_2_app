# PARCOURS — INF4 · Ingénierie des lignes de produits (C. Salinesi, C. Correa Restrepo)

> Partiel prévu le **7 décembre 2026**, sans annale ; peu de temps de révision. Ce document dit **quoi réviser dans quel ordre**. Sources : `ANALYSE-EPI.md` (dossier du prof), `content/isi1/PROFIL-PROF.md` (même professeur, annales 2013 et 2014), chapitres refondus.

## Ce qu'on sait de l'examen
- **Consigne du prof** : « The final exam will cover all lecture, all tutorials and all recommended readings. » (`9__applications.md`)
- **Barème du TP TaskForge (sur 20)** : modèle construit et justifié 4 · diagnostics et corrections 4 · reconstruction depuis un code et traçabilité 4 · configurations, génération et évolution 5 · tests et limites 3.
- **Quiz du prof** : QCM « Select all correct statements », scénarios courts, 1 ou 2 points (36 questions dans l'app, corrigés *proposés*).
- **Format probable, déduit d'ISI1 (même professeur)** — *à confirmer* : 1 h 30 sans document ; **vrai/faux justifié** (« justifiez si, et seulement si, vous répondez FAUX ») ; correction d'un modèle ou d'exigences fautives ; un calcul ; une réflexion argumentée. Les énoncés sont **longs, précis et presque vrais** : l'erreur tient à un mot, un chiffre, une liste incomplète ou en trop, un terme absolu (toujours, jamais, uniquement, automatiquement). Les sujets **reviennent d'une année sur l'autre, reformulés**.

## Les cinq compétences
| # | Compétence | Chapitres |
|---|---|---|
| C1 | Construire un modèle à partir d'exigences et le justifier | 5, 6, 3 |
| C2 | Raisonner sur un modèle : sémantique, comptage, implications | 3, 7 |
| C3 | Vérifier, diagnostiquer, corriger | 8 |
| C4 | Configurer, générer, faire évoluer | 9, 12 |
| C5 | Écrire, tracer, tester | 5, 12, 13 |

## Trois niveaux, selon le temps (lecture ≈ 144 min ; compte le double avec les exercices)
| Niveau | Chapitres | Lecture | À faire en plus |
|---|---|---|---|
| **1 · Essentiel** (preuve A : quiz du prof, TaskForge, exercices du prof) | 3 Feature models · 5 SECRET · 7 Contraintes · 8 Vérifier · 9 Configurer · 1 Notions de base | ≈ 70 min | quiz du prof 0 à 2 ; exercices corrigés (46 produits, F1…F12, F5 morte, T5 : 9 / 4 / 5 / 2, TaskForge : 72 → 96 → 192) ; partiel blanc |
| **2 · Solide** | 6 Stratégies · 10 Exigences d'application · 12 Conception et réalisation · 13 Tester | ≈ 45 min | exercice des magasins ; catégories A à D ; tests 18-1 et 18-2 |
| **3 · Complet** | 2 Principes · 4 OVM · 11 RED-PL | ≈ 30 min | « À retenir » et flashcards ★★★ |

**Si tu n'as que 3 heures** : niveau 1, uniquement les parties « À retenir », les quiz du prof et le partiel blanc 1. **6 heures** : niveau 1 en entier + blanc 1 + « À retenir » du niveau 2. **10 heures** : tout, avec les deux blancs. Chaque jour, **5 minutes d'Express** (flashcards et quiz entrelacés).

## Calendrier type (≈ 40 min par jour, du 21 novembre au 6 décembre)
| Jour | Travail |
|---|---|
| 1-2 | Feature models (notation, comptage, 46 produits) ; raisonner (implications, groupes) ; quiz du prof 2 |
| 3-4 | Gabarit SECRET ; quiz du prof 1 |
| 5 | Contraintes (F1…F12) |
| 6-7 | Vérifier (requêtes JSON, défauts) ; diagnostiquer (MUS, F5 morte) |
| 8 | Configurer (T5, TaskForge) |
| 9 | Notions de base ; quiz du prof 0 |
| 10 | **Partiel blanc 1** (1 h 30) puis correction |
| 11-13 | Exigences d'application (A à D) ; Conception et réalisation ; Tester ; Stratégies |
| 14 | RED-PL ; OVM ; Principes (« À retenir ») |
| 15 | Flashcards ★★★ ; pièges ci-dessous |
| 16 | **Partiel blanc 2** (1 h 30) puis points faibles |

## Les pièges qui reviennent (une phrase presque vraie, une erreur)
- **requires** : A ⇒ B ; pas de réciproque ; B absent ⇒ A absent ; transitif ; **excludes** : symétrique, « aucune des deux » permis.
- **Groupe [m..n]** : somme des C(k, i) ; [1..2] parmi 3 = 6 ; [1..4] parmi 4 = 15 ; ne pas oublier la borne haute ni la sélection vide.
- **ALL / SOME / THOSE** (étendue, donc variabilité) ≠ **shall / should / could** (priorité) ≠ **condition** de la partie 1.
- **Contribution** (valeur) ≠ **Dependency** (réalisation) ≠ **requires** (sélection d'un produit).
- **Domaine vs application** : un choix de client est une **sélection**, pas un changement de périmètre ; observer deux produits ne prouve pas l'intention de la famille.
- **Défauts d'un modèle** : *void* (aucun produit) ≠ *false* (un seul) ≠ *dead* (jamais sélectionnable) ≠ *false optional* ≠ *redundant* ; vérifier = chercher l'absence de solution ; **effacer ne suffit pas**.
- **Requêtes** : `sat` = non vide ; `nsolve` 2 = fausse ligne ? ; `iterate_over` = mortes ; operation_n est un **maximum** ; « Solution 0 » ≠ zéro solution.
- **Configuration** : complète (reste exclu) ≠ partielle (reste indécidé) ; une option libre double le nombre de produits.
- **Catégories A à D** : un nouveau point de variation n'est jamais en A ; une catégorie D est rejetée sauf projet séparé ; une grosse adaptation coûte presque autant qu'un composant neuf.
- **Extensive vs intensive**, **variabilité externe vs interne**, **réutilisation sans test (Ariane 5)**.
- **Chiffres divergents** entre supports (−98 % vs « 2 à 50 ») : citer la source.

## Comment répondre à un vrai/faux justifié
1. Lire l'énoncé **mot à mot** ; entourer les mots absolus et les chiffres.
2. Se demander : *quelle précision serait fausse ?* (liste incomplète, relation inversée, étendue confondue avec priorité).
3. VRAI : ne rien justifier. FAUX : **une phrase** qui rétablit le fait, avec le terme exact du cours.
4. Compter : poser la méthode (cas, C(k, i)) avant le résultat.

## Lacunes
Quiz 3 à 5 vides, intranet inaccessible, format réel et barème de l'examen inconnus : `examFocus` reste **probable**. Les chapitres 2, 4, 10 et 11 sont encore dans l'ancien format (contenu correct, forme à refondre).
