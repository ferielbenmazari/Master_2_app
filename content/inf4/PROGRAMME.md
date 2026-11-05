# PROGRAMME — INF4 · Product Line Engineering

> **À remplir par toi (5 min), c'est ce qui aligne l'app sur la classe.**
> `[x]` vu en classe · `[-]` pas vu (l'app ne le traitera pas) · `[ ]` je ne sais pas (traité, mais en priorité basse) · ajoute ★ si le prof a insisté.
> Ajoute en bas, section « Vu en classe mais absent », tout ce qui a été fait en cours et n'apparaît pas ici (notes, exemples, exercices du prof). Si tu as des notes ou photos, dépose-les dans `ressources/S3__INF4/NOTES/` : elles deviennent la source n°1.
> Les agents ne rédigent que les lignes `[x]` et `[ ]` + les ajouts, et chaque chapitre indique quelles lignes il couvre.

## Introduction et variabilité
_Source : `1__introduction.md`_

- [ ] Variabilité : communalité vs variabilité (jeu des gardes britanniques) → ch.01
- [ ] De l'artisanat à l'ingénierie et la personnalisation de masse → ch.01
- [ ] Mécanismes de réutilisation (1960-2000) → ch.01
- [ ] Framework PLE (domain vs application, problem vs solution space) → ch.01
- [ ] Bénéfices et coûts de la PLE → ch.01

## Principes des lignes de produits logiciels (Böckle)
_Source : `2__software_ple.md`_

- [ ] Principes de l'ingénierie des lignes de produits · produits personnalisés → ch.02
- [ ] Motivations · ingénierie des lignes de produits logiciels → ch.02

## Domain engineering : modèles de lignes de produits (slides)
_Source : `5__soft_ple_detailed.md + 6__ple.md`_

- [ ] Représentation extensive (matrice, breakdown structure) vs intensive · scalabilité → ch.03
- [ ] Feature models FODA : feature, mandatory/optional, XOR, group cardinalities → ch.03
- [ ] Sémantique d'un feature model (ensemble des produits valides, comptage) → ch.03
- [ ] Requires / mutex (cross-tree constraints) → ch.03

## Domain requirements engineering (Pohl ch.10)
_Source : `8__ple.md`_

- [ ] Activités et défis · exigences communes vs variables → ch.04
- [ ] Analyse de communalité (matrice applications-exigences, priorités, check-lists) → ch.04
- [ ] Analyse de variabilité → ch.04
- [ ] Points de variation, variants, dépendances de variabilité et de contrainte (OVM) → ch.04
- [ ] Exemple complet · différences avec un système unique → ch.04

## Application engineering (Pohl ch.15-17)
_Source : `3__application_engineering.md`_

- [ ] Application requirements engineering · communication de la variabilité · requirements deltas → ch.05
- [ ] Application design · binding of variants · configuration → ch.06
- [ ] Application realisation · configuration → ch.06
- [ ] Differences from single-system engineering → ch.05 (exigences ; design/réalisation/test → ch.06)

## Transformation, vérification, diagnostic
_Source : `7__ple.md`_

- [ ] Model-to-text transformation · transformation framework
- [ ] Feature models → constraint programming (optional, mandatory, requires, excludes, cardinalités, attributs)
- [ ] Exercices GNU Prolog (configurations, nombre de produits, problèmes du modèle)
- [ ] Vérification des PLM : pourquoi, difficulté (NP-complétude), critères structurels

## RED-PL (article)
_Source : `4__overview.md`_

- [ ] Problème (contexte Stago) · approche RED-PL : matching et arbitrage · étude de cas

## Exercice ILP
_Source : `EPI/5__configuration ILP(1).xlsx`_

- [ ] Configuration par programmation linéaire en nombres entiers

## Vu en classe mais absent
- 
