# UNIVERSITÉ PARIS 1 PANTHÉON SORBONNE

**(Software) Product Line Engineering**
*Camille Salinesi*
*Camilo Correa Restrepo*

---

# 1. Analysis

A. ...

B. ...

C. Transformation, verification, diagnosis and fixing processes

---

# 3. What is model-to-text transformation?

Model transformation aims to provide a mean to specify the way to produce target models from a number of source models.

Formally, a simple model transformation has to define the way for generating a model Mb, conforming to a metamodel MMb, from a model Ma conforming to a metamodel MMa.

### Description et interprétation du schéma :

Le schéma illustre la transformation d'un modèle graphique vers du texte (`Model2Text`) :

* **Partie gauche (Source) :**
* **MMa (Métamodèle source) - *MiniUML Metamodel*** :
* Contient une classe abstraite ou de base `NamedElement` avec un attribut `name: String`.
* La classe `Class` hérite de `NamedElement` et possède une auto-association `superClass` (cardinalité `0..1`).
* La classe `Relationship` hérite de `NamedElement`, possède des attributs `minCard: Integer`, `maxCard: Integer`, et pointe vers `Class` via le rôle `type` (cardinalité `0..1`).
* La classe `Attribute` contient un attribut `type: Type` et est reliée à `Class` par une composition (une classe contient `*` attributs).
* `Type` est une énumération (`<<enumeration>>`) contenant `String`, `Boolean`, etc.


* **Ma (Modèle source) - *MiniUML Model*** :
* Un exemple d'instance de modèle MiniUML montrant deux classes : `Person` et `Student` (qui hérite de `Person` et possède l'attribut `regNo: String`).




* **Centre (Moteur de transformation) :**
* Une flèche marquée `Model2Text` symbolisant la transformation automatique.


* **Partie droite (Cible) :**
* **MMb (Métamodèle cible) - *MiniJava Grammar*** :
* Définit la grammaire formelle du langage cible MiniJava :
* `ClassDec ::= Modifier class Identifier extends Identifier ClassBody`
* `AttributeDec ::= Modifier Type Identifier;`
* `MethodDec ::= Modifier ReturnType Identifier "(" ParamList ")" "{" MethodBody "}"`
* `Identifier ::= [a-z A-Z 0-9]+;`




* **Mb (Code cible généré) - *MiniJava Code*** :
```java
class Student extends Person {
    private String regNo;
    public void setRegNo() {}
    public String getRegNo() {}
}

```





---

# 4. Transformation framework

### Description et interprétation du schéma :

Le schéma représente la structure globale d'un cadre de transformation de modèles :

* **Model A** (modèle source) réside en bas à gauche et est lu (**Read**) par le **Transformation Engine** (Moteur de transformation).
* **Model A** se conforme à (**Conforms to**) **Metamodel A** (en haut à gauche).
* **Metamodel A** et **Metamodel B** envoient des requêtes/spécifications (**Request**) au bloc supérieur : *"Mapping and transformation rules from concepts of Metamodel A to concepts of Metamodel B"* (Règles de mise en correspondance et de transformation des concepts du Métamodèle A vers le Métamodèle B).
* Le **Transformation Engine** exécute (**Executes**) ces règles de transformation.
* Le **Transformation Engine** écrit (**Write**) le résultat sous forme de **Model B** (en bas à droite).
* **Model B** se conforme à (**Conforms to**) **Metamodel B** (en haut à droite).

---

# 5. Why to transform a PLM?

Graphical representation of models makes it impossible to directly reason on them. Because of this, models are usually transformed to executable code in order to reason on them.

In the case of PLMs:

* Batory, D.S., 2005.
* Benavides et al. 2005, 2007, 2010
* Van Deursen, A., Klint, P., 2002
* Karataş et al. 2010
* Mazo et al. 2011

---

# 6. Transforming FMs to constraint programming: the optional concept

### Description et interprétation du schéma :

Un Feature Model (FM) montrant une relation optionnelle entre une fonctionnalité parente `F1` et une fonctionnalité fille `F2` (représentée par une ligne reliant F1 à F2 avec un cercle vide au niveau de F2).

### Règles de transformation selon le domaine des variables :

* Si $\{F1, F2\} \in \{\text{true}, \text{false}\}$ :
* $\neg F2 \vee F1$ (soit $F2 \Rightarrow F1$)


* Si $\{F1, F2\} \in \{0, 1\}$ :
* $F1 \ge F2$


* Si $\{F1, F2\} \in \mathbb{N}^+ \cup \{0\}$ :
* $F2 \ge 1 \Rightarrow F1 \ge 1$



---

# 7. Transforming FMs to constraint programming: the mandatory concept

### Description et interprétation du schéma :

Un Feature Model montrant une relation obligatoire (mandatory) entre un parent `F1` et un enfant `F2` (représentée par un cercle plein au niveau de F2).

### Règles de transformation selon le domaine des variables :

* Si $\{F1, F2\} \in \{\text{true}, \text{false}\}$ :
* $(\neg F1 \vee F2) \wedge (F1 \vee \neg F2)$ (soit $F1 \Leftrightarrow F2$)


* Si $\{F1, F2\} \in \{0, 1\}$ :
* $F1 = F2$


* Si $\{F1, F2\} \in \mathbb{N}^+ \cup \{0\}$ :
* $F2 \ge 1 \Leftrightarrow F1 \ge 1$



---

# 8. Transforming FMs to constraint programming: the requires concept

### Description et interprétation du schéma :

Un Feature Model montrant une contrainte d'exigence (cross-tree constraint) entre deux fonctionnalités `F1` et `F2`, où `F1` nécessite `F2` (représentée par une flèche pointillée de F1 vers F2).

### Règles de transformation selon le domaine des variables :

* Si $\{F1, F2\} \in \{\text{true}, \text{false}\}$ :
* $F1 \Rightarrow F2$
* $\neg F1 \vee F2$


* Si $\{F1, F2\} \in \{0, 1\}$ :
* $(1 - F1 + F2) > 0$
* $F2 \ge F1$


* Si $\{F1, F2\} \in \mathbb{N}^+ \cup \{0\}$ :
* $F1 \ge 1 \Rightarrow F2 \ge 1$



---

# 9. Transforming FMs to constraint programming: the excludes concept

### Description et interprétation du schéma :

Un Feature Model montrant une contrainte d'exclusion mutuelle entre deux fonctionnalités `F1` et `F2` (représentée par une ligne pointillée bidirectionnelle avec la mention *excludes*).

### Règles de transformation selon le domaine des variables :

* Si $\{F1, F2\} \in \{\text{true}, \text{false}\}$ :
* $(F1 \wedge \neg F2) \vee (\neg F1 \wedge F2) \vee (\neg F1 \wedge \neg F2)$
* $\neg(F1 \wedge F2)$
* $\neg F1 \vee \neg F2$


* Si $\{F1, F2\} \in \{0, 1\}$ :
* $F1 + F2 \le 1$


* Si $\{F1, F2\} \in \mathbb{N}^+ \cup \{0\}$ :
* $F1 * F2 = 0$



---

# 10. Transforming FMs to constraint programming: Group cardinality with <m..n> boundaries

### Description et interprétation du schéma :

Une cardinalité de groupe reliée à un parent `F0` délimitant un sous-ensemble de sous-fonctionnalités `F1, F2, ..., Fn` avec un arc annoté `<m..n>`.

### Règles de transformation selon le domaine des variables :

* Si $\{F0, F1, F2, \dots, Fn\} \in \{0, 1\}$ :
* $F0 \ge F1 \wedge F0 \ge F2 \wedge \dots \wedge F0 \ge Fn$
* $F0 \Rightarrow (m \le F1 + F2 + \dots + Fn \le n)$
* Ou plus simplement : $m * F0 \le F1 + F2 + \dots + Fn \le n * F0$


* Si $\{F0, F1, F2, \dots, Fn\} \in \mathbb{N} \cup \{0\}$ :
* $(F0 > 0) \Leftrightarrow \text{BoolF0} \wedge (F1 > 0) \Leftrightarrow \text{BoolF1} \wedge \dots \wedge (Fn > 0) \Leftrightarrow \text{BoolFn}$
* $m * \text{BoolF0} \le \text{BoolF1} + \text{BoolF2} + \dots + \text{BoolFn} \le n * \text{BoolF0}$



---

# 11. Transforming FMs to constraint programming: individual cardinalities

### Description et interprétation du schéma :

Représentation des cardinalités individuelles sur les entités/composants :

* Cas 1 : $A$ connecté à $B$ avec une cardinalité $[m..n]$.
* Cas 2 : $A$ relié à plusieurs instances $B_1, \dots, B_n$ sous la contrainte d'intervalle $[m..n]$.

### Règles de transformation :

Si $\{A, B_1, \dots, B_n\} \in \{0, 1\}$ :

* $A \ge B_1 \wedge \dots \wedge A \ge B_n \wedge (A \Rightarrow (m \le B_1 + \dots + B_n \le n))$
* Ou simplement : $A \Leftrightarrow (m \le B_1 + \dots + B_n \le n)$

### Exercices présentés :

* **Exercise 1:** Enchaînement de cardinalités individuelles : $A \xrightarrow{[m..n]} B \xrightarrow{[p..q]} \dots$
* **Exercise 2:** Cardinalités imbriquées : $A \xrightarrow{[m..n]} [p..q] B$

---

# 12. Transforming FMs to constraint programming: feature attributes

### Description et interprétation du schéma :

Fonctionnalité `F1` associée à des attributs : `Att1: {value1}`, `Att2: {value2, value3}`.

### Formalisation :

* $F1 \in \{\text{true}, \text{false}\}$
* $Att1 \in \{\text{value1}, \dots\} \wedge (F1 \Leftrightarrow (Att1 > 0))$
* **Example :**
* $Att2 \in \{0, 2, 4, 16, 32\} \wedge (F1 \Leftrightarrow (Att2 > 0))$



---

# 13. Exercise : with GNU Prolog

Let's transform the following model into a constraint program in GNU Prolog, and:

1. What is the resulting code?
2. How to generate some configurations automatically?
3. Which is the semantics of the model?
4. How many products in the model?
5. Are there some problems in the model? Which ones?

### Description et interprétation du schéma :

Arbre de fonctionnalités (Feature Model) :

* Racine : `F1`
* Sous-fonctionnalités directes de `F1` :
* `F2` (obligatoire / mandatory)
* `F3` (obligatoire / mandatory)
* `F4` (obligatoire / mandatory)


* Sous-fonctionnalités de `F3` :
* `F5` (optionnelle - cercle vide)
* `F7` (obligatoire - ligne directe)
* `F6` (optionnelle - cercle vide)


* Sous-fonctionnalités de `F7` :
* Cardinalité de groupe `<1..2>` reliant `F8`, `F9`, `F10`.


* Sous-fonctionnalités de `F4` :
* Arc reliant `F11` et `F12`.


* Contraintes transversales (Cross-tree constraints) :
* Flèche pointillée `F8 ---> F2` annotée **mutex** (exclusion mutuelle).
* Flèche pointillée `F6 ---> F12` annotée **requires** (exigence).
* Contrainte logique explicite en bas du schéma : $F9 \Rightarrow \neg((F5 \wedge F6) \vee F11)$



---

# 14. 1. What is the resulting code?

Match the colors

Fichier : `productLine.pl`

```prolog
productline(L):-
    % L is the list of variables of the model
    L = [F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12],
    % this function defines the domain L; all variables can be 0 or 1
    fd_domain(L, 0, 1),
    F1 #= 1,
    F1 #= F2,
    F1 #= F3,
    F1 #= F4,
    F3 #= F7,
    F3 #>= F5,
    F3 #>= F6,
    F7 #=< F8+F9+F10,
    F8+F9+F10 #=< F7*2,
    F4 #>= F11,
    F4 #>= F12,
    F4 #= F11+F12,
    F2+F8 #=< 1,
    F6 #==> F12,
    F9 #==> #\((F5 #/\ F6) #\/ F11),
    % to finish the constraint program and give a value to each variable
    fd_labeling(L).

```

---

# 15. 2. How to generate some configurations automatically?

* **Step 1:** create a file and call it `productLine.pl` in a plain text editor (the extension should be `.pl`)
* **Step 2:** start GNU Prolog (`gprolog`) with double click on the executable file (Win) or executing the `gprolog` command in your terminal. Then, compile the `productLine.pl` file with `consult`:

```text
Rauls-Air:~ raul$ gprolog
GNU Prolog 1.4.4 (64 bits)
Compiled Apr 23 2013, 17:26:17 with /opt/local/bin/gcc-apple-4.2
By Daniel Diaz
Copyright (C) 1999-2013 Daniel Diaz

| ?- consult('productline.pl').
compiling /Users/raul/productline.pl for byte code...
/Users/raul/productline.pl compiled, 24 lines read (3125 bytes written, 23 ms)

(2 ms) yes

```

* **Step 3:** call your program with `productline(L).` as follows:

```text
| ?- productline(L).
L = [1,1,1,1,0,0,1,0,0,1,0,1] ?

```

* **Step 4:** with `;` you can generate more and more solutions:

```text
L = [1,1,1,1,0,0,1,0,0,1,0,1] ? ;
L = [1,1,1,1,0,0,1,0,0,1,1,0] ? ;
L = [1,1,1,1,0,0,1,0,1,0,0,1] ? ;

```

---

# 16. 3. Which is the semantics of the model?

There are two ways to generate all the solutions (products) or the semantics of the model:

**First way to do it: generating one by one with `;` as presented here:**

```text
| ?- productline(L).
L = [1,1,1,1,0,0,1,0,0,1,0,1] ? ;
L = [1,1,1,1,0,0,1,0,0,1,1,0] ? ;
L = [1,1,1,1,0,0,1,0,1,0,0,1] ? ;
L = [1,1,1,1,0,0,1,0,1,1,0,1] ? ;
L = [1,1,1,1,0,1,1,0,0,1,0,1] ? ;
L = [1,1,1,1,0,1,1,0,1,0,0,1] ? ;
L = [1,1,1,1,0,1,1,0,1,1,0,1] ? ;
L = [1,1,1,1,1,0,1,0,0,1,0,1] ? ;
L = [1,1,1,1,1,0,1,0,0,1,1,0] ? ;
L = [1,1,1,1,1,0,1,0,1,0,0,1] ? ;
L = [1,1,1,1,1,0,1,0,1,1,0,1] ? ;
L = [1,1,1,1,1,1,1,0,0,1,0,1]
(3 ms) yes

```

**Second way to do it: with the `findall` function:**

```text
| ?- findall(L, productline(L), Semantics).

Semantics = [[1,1,1,1,0,0,1,0,0,1,0,1], [1,1,1,1,0,0,1,0,0,1,1,0], [1,1,1,1,0,0,1,0,1,0,0,1], [1,1,1,1,0,0,1,0,1,1,0,1], [1,1,1,1,0,1,1,0,0,1,0,1], [1,1,1,1,0,1,1,0,1,0,0,1], [1,1,1,1,0,1,1,0,1,1,0,1], [1,1,1,1,1,0,1,0,0,1,0,1], [1,1,1,1,1,0,1,0,0,1,1,0], [1,1,1,1,1,0,1,0,1,0,0,1], [1,1,1,1,1,0,1,0,1,1,0,1], [1,1,1,1,1,1,1,0,0,1,0,1]]

(1 ms) yes

```

---

# 17. 4. How many products in the model?

There are two ways to know the number of products in the product line:

**First way to do it:** counting the generated product. Thus, if you count the products just in front you get 12 products.

**Second way to do it:** you generate all the solutions with `findall` and you put the answer into a list variable (for instance, called `Semantics`), and then you count the number of elements in the resulting list (i.e., `Semantics`) with the `length` function:

```text
| ?- findall(L, productline(L), Semantics), length(Semantics, NumberOfProducts).

NumberOfProducts = 12
Semantics = [[1,1,1,1,0,0,1,0,0,1,0,1], [1,1,1,1,0,0,1,0,0,1,1,0], [1,1,1,1,0,0,1,0,1,0,0,1], [1,1,1,1,0,0,1,0,1,1,0,1], [1,1,1,1,0,1,1,0,0,1,0,1], [1,1,1,1,0,1,1,0,1,0,0,1], [1,1,1,1,0,1,1,0,1,1,0,1], [1,1,1,1,1,0,1,0,0,1,0,1], [1,1,1,1,1,0,1,0,0,1,1,0], [1,1,1,1,1,0,1,0,1,0,0,1], [1,1,1,1,1,0,1,0,1,1,0,1], [1,1,1,1,1,1,1,0,0,1,0,1]]

yes

```

---

# 18. 5. There are some problems in the model? Which ones?

Yes, there are!

For instance, you have maybe noticed that the feature `F8` is never selected, in any configuration, right?

Why, because `F2` is full mandatory and the `F8` is optional, so, `F8` has no chances to be selected, never!

So, `F8` is called a **dead feature** because is represented in the product line model but in reality, it is a dead variable because it cannot be used in any product!

This explanation is enough for now, it was just good to introduce the next subject of the course: **Verification of product line models!**

---

# 19. Exercise: represent the following PLM as a high-level (solver-independent) constraint program

### Description et interprétation du schéma :

Modèle de ligne de produits de contrôle de mouvement (*Movement Control System*) :

* **Movement Control System** (Racine)
* $\xrightarrow{[1..1]}$ **SpeedSensor**
* $\xrightarrow{[0..4]}$ **PositionSensor** (avec une flèche orientée de `SpeedSensor` vers `PositionSensor`)
* $\xrightarrow{[1..2]}$ **Processor**
* $\xrightarrow{[1..2]}$ **Internal Memory**
* Attribut : `Size: {128, 512, 1024}`







---

# 20. Solution: PLM represented with a high level constraint language

### Déclaration des variables et domaines :

```text
[MovementControlSystem, SpeedSensor, PositionSensor, PositionSensor1, PositionSensor2, PositionSensor3, PositionSensor4, Processor, Processor1, Processor2, InternalMemory1, InternalMemory2, Size] ^

[MovementControlSystem, SpeedSensor, PositionSensor, PositionSensor1, PositionSensor2, PositionSensor3, PositionSensor4, Processor, Processor1, Processor2, InternalMemory1, InternalMemory2] ∈ {0, 1} ^

Size ∈ {0, 128, 512, 1024}

```

### Contraintes d'implication d'instances :

```text
PositionSensor1 => PositionSensor ^
PositionSensor2 => PositionSensor ^
PositionSensor3 => PositionSensor ^
PositionSensor4 => PositionSensor ^
Processor1 => Processor ^
Processor2 => Processor ^
InternalMemory1 => InternalMemory ^
InternalMemory2 => InternalMemory ^

```

### Contraintes de cardinalité :

```text
PositionSensor => (0 <= PositionSensor1 + PositionSensor2 + PositionSensor3 + PositionSensor4 <= 4) ^
Processor => (1 <= Processor1 + Processor2 <= 2) ^
InternalMemory => (1 <= InternalMemory1 + InternalMemory2 <= 2)

```

### Structure hiérarchique et contraintes métier :

```text
MovementControlSystem ^
(MovementControlSystem <=> SpeedSensor) ^
(MovementControlSystem <=> Processor) ^
(Processor <=> InternalMemory) ^
(MovementControlSystem -> PositionSensor >= 0) ^
(PositionSensor -> MovementControlSystem) ^
(InternalMemory <=> Size > 0) ^
(SpeedSensor => PositionSensor)

```

---

# 21. Exercise: Represent and execute some configurations of this model in GNU Prolog... How many products in the model?...

### Description et interprétation du schéma :

Un Feature Model abstrait avec la structure suivante :

* **Root** (Racine)
* Branche droite : `F1` (obligatoire). `F1` a pour enfants `F6` (obligatoire) et `F5` (optionnelle).
* Branche gauche : Nœud de cardinalité de groupe `[1, 1]` distribuant vers `F3`, `F4`, `F2`.
* Enfant de `F3` : `F7` (optionnelle).
* Enfants de `F4` : `F8` (obligatoire) et `F9` (optionnelle).


* Contraintes transversales :
* `F8` **excludes** `F3`
* `F8` **requires** `F7`
* `F9` **excludes** `F3`
* `F9` **requires** `F5`
* `F1` pointe vers `F5` (dépendance de lien optionnel/exigence)



---

# 22. Exercise: Represent and execute some configurations of this model in GNU Prolog... How many products in the model?...

### Description et interprétation du schéma :

Un autre Feature Model complexe :

* **Root** $\rightarrow$ `F1` (obligatoire)
* `F1` a pour sous-éléments :
* `F4` (obligatoire)
* `F3` (obligatoire)
* `F2` (optionnelle)
* Un sous-groupe à cardinalité `[1, 3]` composé de `F7`, `F6`, `F5`.


* `F7` possède une cardinalité `[1, 1]` vers `F9` et `F8`.
* Contraintes transversales :
* `F4` **requires** `F7`
* `F3` **excludes** `F5`
* `F2` **excludes** `F8`



---

# 23. Verification

Verification, at the domain engineering level, consists of finding defects in the product line model.

---

# 24. Why verification of PLMs is important?

* The success of this development paradigm highly depends on the quality of the PLMs.
* Defects that are not identified or not corrected will
* inevitably spread to the products created from the product line or
* affect the evolution of the product line
which can drastically diminish the benefits of the product line strategy *(Von der Maßen & Lichter 2004, Benavides 2007)*.



---

# 25. Why verification is difficult?

* Product line modeling is an error-prone activity *(Von der Maßen et al. 2004, Batory et al. 2005)*.
* Product line verification is an NP-complete problem *(Yan et al. 2009)*.
* A product line specification represents not one, but a collection of products that is defined implicitly and that may include contradictory requirements *(Lauenroth et al. 2010)*.

### Calculs de complexité théorique (Quiz NP-complétude) :

Fonction de complexité : $2^n \cdot n^2$

* Taille d'entrée maximale traitable : $n = 30$
* Nombre de pas de temps : $2^{30} \cdot 30^2 = 966\,367\,641\,600$ pas de temps.
* Si le système est 10 fois plus rapide ($\frac{2^n \cdot n^2}{10}$) :
* Taille maximale traitable : $n \approx 33$ ($\frac{2^{33} \cdot 33^2}{10} \approx 935\,44\dots$)


* Si le système est 100 fois plus rapide ($\frac{2^n \cdot n^2}{100}$) :
* La taille augmente très faiblement en raison de la croissance exponentielle (Lois de la NP-complétude).



---

# 26. Generic verification of product line models

* Generic and adaptable
* Conformance checking
* Generic semantics-related verification

---

# 27. Dependencies among common product line model elements

### Description et interprétation du schéma :

Diagramme de classe UML représentant le métamodèle générique de ligne de produits et les relations entre ses éléments :

* `Product LineModel` :
* Contient `has_root` ($1..*$) vers `root`.
* Contient `has_reusableElement` ($1..*$) vers `reusableElement`.


* `root` hérite de (`is_a`) `artefact`.
* `reusableElement` :
* Est spécialisé en `artefact` ou en `dependency`.
* Est relié (`belongs_to`) à $0..*$ `property` (`Name: {unique}`, `Type`, `Value`).


* `dependency` :
* Relie (`relates`) $1..*$ dépendances à $2..*$ `artefact`.
* Est spécialisée en `optional`.


* `optional` est regroupé (`groups`) par $2..*$ dans `groupCardinality` ($0..1$, avec des attributs `Min`, `Max`).
* `individualCardinality` (`Min`, `Max`) est associée (`is_associated_to`, $0..1 \to 1$) à un `artefact` (`Name: {unique}`).

### Critères de vérification structurelle identifiés :

1. Root uniqueness/multiplicity
2. Reusable elements uniqueness/multiplicity
3. Dependency completeness
4. Non-overlap of the artefact in a same model
5. Properties belonging to a single reusable element
6. Association of individual cardinalities to artefacts
7. Non-overlap of the properties that belong to the same reusable element
8. Optional dependencies in group cardinality

---

# 28. Dependencies among common PLM elements

*(Même métamodèle UML que la diapositive 27, accompagné des prédicats et fonctions formelles)*

### Predicates:

* `has_root(M, R)` : returns true if the artefact R is a root of the product line model M, and false otherwise.
* `has_reusableElement(M, R)` : returns true if there is a reusable element R in M, and false otherwise.
* `belongs_to(R, P)` : returns true if P is a property of R, and false otherwise.
* `is_a(A, B)` : returns true if B is a subclass of A, and false otherwise.
* `relates(D, [A1, A2])` : evaluates if there is a list of artefacts $[A_1, A_2, \dots, A_i]$ that are related to a dependency D.
* `is_associated_to(A, IC)` : evaluates if there is an individual cardinality IC associated to an artefact A.
* `groups(GC, [O1, O2])` : returns true if the optional dependencies O1 and O2 belong to the group cardinality GC.
* `isOptional(M, A)` : returns true if the artefact A is modeled as optional in the model M, and false otherwise.
* `oneProduct(M)` : returns true if a given PLM M allows the configuration of at least one product, and false otherwise.
* `oneProductWithConstraint(M, C)` : returns true if M allows the configuration of at least one product that respects a constraint C.
* `find(M, n)` : returns true if n different products can be derived from a PLM M, and false otherwise.

### Functions:

`isPLMofOptional(O)`, `semanticOf(M)`, `eraseOneDependency(M, D)`, `isPLMofDependency(D)`

---

# 29. The case of Feature Models

### Description et interprétation du schéma :

Mise en correspondance entre deux métamodèles :

1. **Generic Metamodel** (haut) : Métamodèle générique (`Product LineModel`, `root`, `reusableElement`, `artefact`, `property`, `dependency`, `optional`, `groupCardinality`, `individualCardinality`).
2. **Feature Model Metamodel** (bas) :
* `Feature Model` hérite de la structure globale.
* Contient $1$ `root` (qui est une `feature`).
* Contient $2..*$ `feature` (possédant `Name: {unique}`, et $0..1$ `featureCardinality` avec `Min`, `Max`).
* `feature` peut posséder $0..*$ `attribute` (`Name: {unique}`, `Domain`).
* `feature` est reliée via $1..*$ `dependency` (`from 0..*`, `to 0..*`).
* Spécialisation des dépendances `{complete, disjoint}` : `optional`, `mandatory`, `requires`, `excludes`.
* `groupCardinality` ($0..1$) regroupe $2..*$ dépendances de type `optional`.



---

# 30. Conformance checking

* Consistency verification
* Conformance checking

> In conformance checking *"it is checked that a model satisfies the constraints captured in the meta-model, i.e., that the model is indeed a valid instance of the meta-model"* *(Paige et al. 2007)*.

---

# 31. Typology of verification criteria

### Arbre de classification de la justesse d'un PLM (PLM Correctness) :

* **PLM Correctness**
* **1. Conformance checking criteria**
* Root uniqueness/multiplicity
* Reusable elements uniqueness/multiplicity
* Dependency completeness
* Properties belonging to a single reusable element
* Association of individual cardinalities to artefacts
* Optional dependencies in group cardinalities
* Non-overlap of the artefacts
* Non-overlap of the properties that belong to the same reusable element


* **2. Semantics-related criteria**
* **2.1 Expressiveness**
* Non-void
* Non-false


* **2.2 Error-free**
* Attainable domains
* Non-dead artefacts
* Non-false optional artefacts


* **2.3 Redundancy-free**
* Non-redundant dependencies







---

# 32. Process

### Description et interprétation du schéma :

Exemple d'un Feature Model de système d'exploitation UNIX et d'une configuration générée :

* **Modèle UNIX :**
* Racine : `UNIX`
* Sous-fonctionnalités : `Process` (optionnelle), `Shell` (obligatoire), `Kernel` (obligatoire), `FileSystem` (obligatoire), `UserInterface` (optionnelle).
* Sous `Process` : `Allocating Memory` (obligatoire), `AccomplishingDataTransfer` (obligatoire).
* Sous `Kernel` : Cardinalité de groupe `<0..1>` (ou `<0..2>`) sur `Cdrom_atech`, `Pcmcia_support`, `Support_usb`.
* Sous `UserInterface` : `Graphical` (avec attributs `WidthResolution`, `HeightResolution`).
* Contrainte complexe : `Graphical relation([WidthResolution, HeightResolution], {[800, 600], [1024, 768], [1366, 768]})`


* **Instance de produit configurée (en bas) :**
* Sélection de : `UNIX`, `Process`, `Shell`, `Kernel`, `FileSystem`, `UserInterface`, `Support_usb`, `Allocating Memory`, `AccomplishingDataTransfer`, `Graphical` (avec `WidthResolution: 1024`, `HeightResolution: 768`).



---

# 33. FM meta-model <== Conformance checking ==> FM

### Description et interprétation du schéma :

Illustration du processus de contrôle de conformité (**Conformance checking**) s'assurant qu'un modèle concret (en bas : Feature Model UNIX / MacOS X) respecte strictement l'ensemble des règles, cardinalités et contraintes structurelles définies dans le métamodèle FM (en haut).

---

# 34. FM Meta-model -> CLP representation of the meta-model

### Représentation en Programmation Par Contraintes (CLP / Prolog) du métamodèle :

```prolog
feature(IdFeature, Name, LIdAttributes).
attribute(IdAttribute, Name, Domain).
root(IdFeature).
featureCardinality(IdFeature, Min, Max).
dependency(IdDependency, IdFeature1, IdFeature2, DependencyType).
groupCardinality(LIdDependencies, Min, Max).

```

---

# 35. Feature Model Conforms to CLP representation

### Exemple de conversion d'un Feature Model (UNIX / MacOS X) en faits Prolog :

```prolog
(1) root(fea1).
(2) feature(fea1, 'UNIX', []).
(3) root(fea2).
(4) feature(fea2, 'MacOSX', []).
(5) feature(fea3, 'UserInterface', []).
(6) feature(fea4, 'Graphical', [att1, att2]).
(7) attribute(att2, 'HeightResolution', [600, 768]).
(8) dependency(dep1, fea1, fea3, optional).
(9) dependency(dep2, fea2, fea3, requires).
(10) dependency...

```

---

# 36. Conformance rules - Example 1

### Root uniqueness/multiplicity

**Formalisation :**


$$\forall M, R \cdot \text{productLineModel}(M) \wedge \text{root}(R) \wedge \text{has\_root}(M, R)$$

> In our feature-based formalism, product line models and product models should have one and only one root.

**Implémentation Prolog :**

```prolog
(1) conformance_1(LRootId) :-
(2)     findall(FeatureId, root(FeatureId), LRootId),
(3)     length(LRootId, N),
(4)     N \== 1.

```

---

# 37. Conformance rules - Example 2

### Optional dependencies in group cardinalities

**Formalisation :**


$$\forall G, \exists X_1, X_2 \cdot \text{groupCardinality}(G) \wedge \text{optional}(X_1) \wedge \text{optional}(X_2) \wedge X_1 \neq X_2 \wedge \text{isPLMofOptional}(X_1) = \text{isPLMofOptional}(X_2) \wedge \text{groups}(G, [X_1, X_2])$$

> Features intervening in a group cardinality dependency should not be mandatory features.

**Implémentation Prolog :**

```prolog
(1) conformance_2(DepId, FeatureId) :-
(2)     groupCardinality(LDepId, _, _),
(3)     member(DepId, LDepId),
(4)     dependency(DepId, _, FeatureId, mandatory).

```

---

# 38. Conformance Checker of Feature Models

Built in GNU Prolog 1.3

### Exécution sur la console GNU Prolog :

```text
| ?- consult('C:/Users/Raul/Documents/My Dropbox/doctorat/CocheEcologico_94_fm.pl').
compiling ...
(16 ms) yes

| ?- load_fm('CocheEcologico_94_fm.pl').
... (15 ms) yes

| ?- do_all.
*** testing rule 1
in 0 msec
*** testing rule 2
inconsistency_2(17, 61, Blanco)
inconsistency_2(19, 59, Negro)
inconsistency_2(59, 69, Negro)
inconsistency_2(103, 109, Pasajeros)
inconsistency_2(101, 107, Piloto_y_copiloto)
inconsistency_2(31, 35, Transparentes)
in 31 msec
*** testing rule 3
in 0 msec
*** testing rule 4
in 0 msec
*** testing rule 5
in 0 msec
*** testing rule 6
in 0 msec
*** testing rule 7
in 0 msec
*** testing rule 8

```

---

# 39. Conformance checking. Validation of our approach with 49 FMs up to 10000 features

### Description et interprétation des graphiques :

7 graphiques de dispersion (Temps d'exécution en ms vs Nombre de fonctionnalités jusqu'à $10\,000$ sur échelle logarithmique) :

1. **Rule 1 :** *Some feature-based product line models should not have more than one root* (Temps quasiment instantané $< 35\text{ ms}$).
2. **Rule 2 :** *Features intervening in a group cardinality relationship should not be mandatory features* (Exécution $< 20\text{ ms}$).
3. **Rule 3 :** *A feature should not have two attributes with the same name* (Exécution $< 35\text{ ms}$).
4. **Rule 4 :** *Two features should not have the same name* (Exécution $< 35\text{ ms}$).
5. **Rule 5 :** *One feature must not be optional and mandatory at the same time* (Augmentation légère pour $10\,000$ features, temps max $\approx 65\text{ ms}$).
6. **Rule 6 :** *Two features cannot be required and mutually excluded at the same time* (Passage à $\approx 140\text{ ms}$ pour $10\,000$ features).
7. **Rule 7 :** *Each dependency relates two or several different features* (Exécution $< 35\text{ ms}$).

---

# 40. Semantics-related verification

Semantics-related verification is about the identification of non-structural defects on product line models.

---

# 41. Semantics-related verification (Typologie ciblée)

L'accent est mis sur les critères sémantiques :

* **2.1 Expressiveness :**
* Non-void
* Non-false


* **2.2 Error-free :**
* Attainable domains
* Non-dead artefacts
* Non-false optional artefacts


* **2.3 Redundancy-free :**
* Non-redundant dependencies



---

# 42. Semantics-related verification - Example: Non-void product line models

### Description et interprétation du schéma :

Un Feature Model UNIX sur lequel une contrainte d'exclusion mutuelle réciproque entre `Kernel` et `FileSystem` (flèche rouge bidirectionnelle) a été ajoutée.

* Comme `Kernel` et `FileSystem` sont tous deux obligatoires sous la racine `UNIX`, ils doivent obligatoirement être présents.
* Cependant, la contrainte d'exclusion interdit leur présence simultanée.
* La fonction `getOneSolution(M)` renvoie `"false"`.
* **Conclusion :** Le modèle est **vide (Void model)**, aucun produit ne peut être généré.

---

# 43. Semantics-related verification - Example: Non-void product line models

A void PLM is defined as a model that does not permit the configuration of any product.

**Formalisation :**


$$\text{nonVoidPLM}(M) \Leftrightarrow \text{productLineModel}(M) \wedge \text{find}(M, 1)$$

**Algorithme :**

```text
nonVoidPLM (PLM M) {
    Answer = getOneSolution (M);
    If (Answer == "false") {
        Write ("Void PLM");
    }
    Else {
        Write (Answer);
    }
}

```

---

# 44. Semantics-related verification - Example: Non-dead features

### Description et interprétation du schéma :

Dans le modèle UNIX présenté, `UserInterface` est une fonctionnalité optionnelle. Cependant, en raison de contraintes combinées, il est impossible de construire une configuration valide incluant `UserInterface`. `UserInterface` est donc identifiée comme une **feature morte (dead feature)**.

---

# 45. Semantics-related verification - Example: Non-dead features

An artefact is dead if it cannot appear in any product of the product line.

**Formalisation :**


$$\forall M, \forall R, \forall A \cdot \text{productLineModel}(M) \wedge \text{reusableElement}(R) \wedge \text{has\_reusableElement}(M, R) \wedge \text{is\_a}(R, A) \wedge \text{artefact}(A) \Rightarrow \text{oneProductWithConstraint}(M, 'A > 0')$$

**Algorithme :**

```text
DeadArtefacts (PLM M) {
    DeadArtefactsList = all artefacts of M;
    For (each variable V in DeadArtefactsList) {
        Product = oneProductWithConstraint(M, "V > 0");
        If (Product == "false") {
            Write ("The artefact " + V + " is dead");
        }
        Else {
            Erase V and all the other non-zero variables in Product, from DeadArtefactsList;
        }
    }
}

```

---

# 46. Semantics-related verification. Example: Non-dead features

### Trace d'exécution de l'algorithme :

0. If the model is not void:
1. `deadArtefactsList = [UNIX, Process, Shell, Kernel, AllocatingMemory, AccomplishingDataTransfer, FileSystem, UserInterface, Graphical, Cdrom_atech, Pcmcia_support, Support_usb].`
2. `oneProductWithConstraint(M, 'Kernel > 0')`
3. $P1 = [\text{UNIX}=1, \text{Process}=1, \text{Shell}=1, \text{Kernel}=1, \text{AllocatingMemory}=1, \text{AccomplishingDataTransfer}=1, \text{FileSystem}=1, \text{UserInterface}=0, \text{Graphical}=0, \text{Cdrom\_atech}=1, \text{Pcmcia\_support}=1, \text{Support\_usb}=0]$
4. `deadArtefactsList = [UserInterface, Graphical, Support_usb].`
5. `oneProductWithConstraint(M, 'UserInterface > 0')` $\rightarrow$ `"false"`
* **Result :** `UserInterface` is a dead feature.



---

# 47. Multi-model verification - The case of Dopler variability models

### Description et interprétation du schéma :

Le schéma illustre la vérification multi-modèles DOPLER reliant l'espace problème au domaine solution :

* **Decision model (Espace problème) :**
* Décision `scope` (ex: "assemble yourself", "complete suite").
* Décision `glossary` (boolean).
* Décision `tools` (ex: "CW", "DK", "PK").
* Décision `width` (number).
* Décision `resolution` (ex: "800x600").


* **Asset model (Espace solution) :**
* Composants logiciels : `Core Plugin`, `Glossary Plugin`, `CW Plugin`, `Resolution width` (Setting).
* Dépendances inter-composants : `<<excludes>>`, `<<requires>>`, `<<contributes to>>`.


* **Règles de liaison :**
* Chaque Asset possède une condition d'inclusion (**Inclusion Condition**) basée sur les décisions (ex: `scope == "assemble yourself"`, `glossary == true`, `contains(tools, "CW")`).
* Des conditions de visibilité et de validité interconnectent les décisions et les composants.



---

# 48. Domain-specific verification - Example: Non-void (DOPLER) product line models

A void PLM is defined as a model that does not permit the configuration of any product.

**Formalisation :**


$$\text{nonVoidPLM}(M) \Leftrightarrow \text{productLineModel}(M) \wedge \text{find}(M, 1)$$

**Algorithme :**

```text
nonVoidPLM (PLM M) {
    Answer = getOneSolution (M);
    If (Answer == "false") {
        Write ("Void PLM");
    }
    Else {
        Write (Answer);
    }
}

```

---

# 49. Exercise: How to proceed to know if the models is void or not, and how to find the dead feature(s) if any?

### Description et interprétation du schéma :

Même modèle abstrait avec les entités `Root`, `F1` à `F9` :

* La racine `Root` contient un sous-groupe cardinalité `[1, 1]` vers `F3`, `F4`, `F2`.
* `F1` est obligatoire. `F6` est obligatoire sous `F1`. `F5` est optionnelle sous `F1`.
* `F8` exige `F7` et exclut `F3`.
* `F9` exige `F5` et exclut `F3`.
* `F1` exige `F5`.

---

# 50. The first step to verify PLMs with a solver is to transform them into the language of the solver

### Table de correspondance (Mazo 2011) :

| Concept | Représentation en Programmation Par Contraintes (CP) |
| --- | --- |
| **Root** | $Root = 1$ |
| **Mandatory** | $Father \Leftrightarrow Child$ |
| **Optional** | $Father \ge Child$ |
| **Requires** | $Requiring \Rightarrow Required$<br>

<br>*Alternativement :* $(1 - Requiring) + Required > 0$ |
| **Exclusion** | $Excluding * Excluded = 0$<br>

<br>*Alternativement :* $(1 - Excluding) \vee (1 - Excluded) > 0$ |
| **Group cardinality** | $M * Father \le Child_1 + \dots + Child_N \le N * Father$ |

---

# 51. The first step to verify PLMs with GNU Prolog is to transform them into the GNU Prolog language

### Code Prolog pour les contraintes de base et de présence obligatoire :

```prolog
% Create a fact that represents the PLM
pl(L):-
    % Create the list of variables of the PLM
    L = [Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    % Give a domain to the variables
    fd_domain(L, 0, 1),
    % Root
    Root #= 1,
    % Mandatory
    Root #= F1,
    F4 #= F8,
    F1 #= F6,

```

---

# 52. The first step to verify PLMs with GNU Prolog is to transform them into the GNU Prolog language

### Code Prolog pour les contraintes optionnelles et de dépendance (Requires) :

```prolog
    % Optional
    F1 #>= F5,
    F4 #>= F9,
    F3 #>= F7,

    % Requires (Méthode arithmétique)
    (1-F8)+F7 #> 0,
    (1-F5)+F9 #> 0,

    % Another way to represent the requires
    F8 #==> F7,
    F5 #==> F9,

```

---

# 53. The first step to verify PLMs with GNU Prolog is to transform them into the GNU Prolog language

### Code Prolog pour les contraintes d'exclusion et cardinalité de groupe :

```prolog
    % Excludes (Méthode arithmétique)
    (1-F3)+(1-F8) #> 0,
    (1-F5)+(1-F3) #> 0,

    % Another way to represent the exclusions
    F3 * F8 #= 0,
    F3 * F5 #= 0,

    % Groupal Cardinality
    Root #= F2 + F3 + F4

```

---

# 54. To verify a PLM with the help of a solver we need it as a Constraint program and some times we also need a "verification constraint"

### Description et interprétation du schéma :

Pour vérifier la propriété "F5 est-elle une fonctionnalité morte ?", on injecte la contrainte de vérification `F5 = 1` dans le Solveur avec l'ensemble du programme de contraintes.

* Si le solveur indique **Satisfiable**, alors `F5` n'est pas morte.
* Si le solveur indique **There is no solution** (Incapacité à satisfaire le système), alors **`F5` est une feature morte**.

---

# 55. All the "verification constraint" for the different verification criteria

| Defect | Verification constraint |
| --- | --- |
| **Void model** | It is not required since the constraint program is already Unsatisfiable. |
| **False PLM** | It is not required. This defect is solved if the defects regarding dead and false optional elements are fixed. |
| **Dead elements** | A verification constraint must be created to force that the potential dead element to analyze belongs to at least one product of the PL. For instance, to analyze whether F5 is dead or not, we add the verification constraint: `F5 #= 1` |
| **False optional element** | A verification constraint must be created to force that the optional elements take the 0 value (i.e., are not selected). For instance, to analyze whether the optional feature F5 is really optional, the verif. constraint is: `F5 #= 0` |
| **Redundancies** | The verification constraint must represent the negation of the potential redundant dependency to be analyzed. For instance, to analyze whether the exclusion dependency between F3 and F8 is redundant or not, the verification constraint is: `1-(F3*F8 #= 0)` |

---

# 56. Homework: verify if this evolved model is void or not

### Description et interprétation du schéma :

Modèle de Feature Model évolué dans lequel la fonctionnalité `F5` est désormais **obligatoire** sous `F1` (marquée par un cercle plein sous `F1`).

---

# 57. Now we have the PLM in GNU Prolog.

```prolog
pl(L):-
    L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    fd_domain(L, 0, 1),
    % Root
    Root #= 1,
    % Mandatory
    Root #= F1,
    F1 #= F6,
    F4 #= F8,
    F1 #= F5,
    % Optional
    F4 #>= F9,
    F3 #>= F7,
    % Requires
    F8 #==> F7,
    F5 #==> F9,
    % Excludes
    F3 * F8 #= 0,
    F3 * F5 #= 0,
    % Group cardinality
    Root #= F2 + F3 + F4,
    fd_labeling(L).

```

### Exécution Solver :

* Commande : `consult('nameOfTheFile.pl').` puis `pl(L).`
* Résultat Solver : **There is no solution** $\rightarrow$ **The PLM is void**.

---

# 58. Typology of verification criteria (Résumé formel complet)

### 1. Conformance checking criteria

* **Root uniqueness/multiplicity:**

$$\forall M, R \cdot \text{productLineModel}(M) \wedge \text{root}(R) \wedge \text{has\_root}(M, R)$$


* **Reusable elements uniqueness/multiplicity:**

$$\forall M, R \cdot \text{productLineModel}(M) \wedge \text{reusableElement}(R) \wedge \text{has\_reusableElement}(M, R)$$


* **Non-overlap of the properties that belong to the same reusable element:**

$$\forall M, \forall R, \forall P_1, \forall P_2 \cdot \text{productLineModel}(M) \wedge \text{reusableElement}(R) \wedge \text{property}(P_1) \wedge \text{property}(P_2) \wedge \text{has\_reusableElement}(M, R) \wedge \text{belongs\_to}(R, P_1) \wedge \text{belongs\_to}(R, P_2) \Rightarrow P_1.\text{Name} \neq P_2.\text{Name}$$


* **Non-overlap of the artefact in a same model:**

$$\forall M, \forall R_1, \forall R_2, \forall A_1, \forall A_2 \cdot \text{productLineModel}(M) \wedge \dots \Rightarrow (A_1 \neq A_2) \wedge (A_1.\text{Name} \neq A_2.\text{Name})$$


* **Dependency completeness:**

$$\dots \text{relates}(D, [A_1, A_2])$$


* **Properties belonging to a single reusable element:**

$$\forall P, \forall R_1, \forall R_2 \cdot \text{property}(P) \wedge \text{reusableElement}(R_1) \wedge \text{reusableElement}(R_2) \wedge \text{belongs\_to}(R_1, P) \wedge \text{belongs\_to}(R_2, P) \Rightarrow R_1 = R_2$$


* **Optional dependencies in group cardinalities:**

$$\forall G, \exists X_1, \exists X_2 \cdot \text{groupCardinality}(G) \dots$$


* **Association of individual cardinalities to artefacts:**

$$\forall C, \forall A_1, \forall A_2 \cdot \text{individualCardinality}(C) \wedge \text{is\_associated\_to}(A_1, C) \wedge \text{is\_associated\_to}(A_2, C) \Rightarrow A_1 = A_2$$



### 2. Semantics-related criteria

* **2.1 Expressiveness:**
* Non-void : $\text{nonVoidPLM}(M) \Leftrightarrow \text{find}(M, 1)$
* Non-false : $\text{nonFalsePLM}(M) \Leftrightarrow \text{productLineModel}(M) \wedge \text{find}(M, 2)$


* **2.2 Error-free:**
* Attainable domains : $\text{oneProductWithConstraint}(M, 'A \in A.\text{Domain}')$
* Non-dead artefacts : $\text{oneProductWithConstraint}(M, 'A > 0')$
* Non-false optional artefacts : $\text{isOptional}(M, A) \Rightarrow \text{oneProductWithConstraint}(M, 'A = 0')$


* **2.3 Redundancy-free:**
* Non-redundant dependencies :

$$\text{redundancyDependency}(D) \Leftrightarrow \text{dependency}(D) \wedge (\text{semanticOf}(\text{isPLMofDependency}(D)) = \text{semanticOf}(\text{eraseOneDependency}(\text{isPLMofDependency}(D), D)))$$





---

# 59. Semantics-related verification. Validation with 43 FMs up to 2000 features

### Description et interprétation des graphiques :

6 graphiques mesurant le temps d'exécution en ms selon le nombre de fonctionnalités ($N^\circ \text{ Features}$ jusqu'à 2000) dans VariaMos :

1. **Not Void FMs :** Temps quasi-nul ($< 20\text{ ms}$).
2. **False FMs :** Temps quasi-nul ($< 1\text{ ms}$).
3. **Non Attainable Domains :** Croissance jusqu'à $20\,000\text{ ms}$ pour 2000 features.
4. **Dead Features :** Croissance jusqu'à $\approx 9\,000\text{ ms}$ pour 2000 features.
5. **Redundant Relationships :** Temps très faible ($\approx 30\text{ ms}$ pour 2000 features).
6. **False Optional Features :** Croissance jusqu'à $\approx 9\,000\text{ ms}$ pour 2000 features.

---

# 60. Scalability: VariaMos vs. FaMa

### Description et interprétation des graphiques comparatifs :

Deux graphiques en échelle logarithmique ($\log_{10}$ du nombre de features de 9 à 900) comparant les performances entre l'outil **VariaMos** (losanges bleus) et **FaMa** (carrés rouges) :

* **Void Feature Model :** VariaMos maintient un temps d'exécution constant et extrêmement bas (proche de $0\text{ ms}$), tandis que FaMa montre une augmentation exponentielle atteignant $> 400\text{ ms}$.
* **Dead Features / False Optional Features / Wrong Cardinalities :** VariaMos reste extrêmement performant ($< 100\text{ ms}$), tandis que FaMa atteint plus de $2\,500\,000\text{ ms}$ pour 900 features.

---

# 61. Diagnosis & fixing

Find the source of defects in the PLMs and fix these defects.

---

# 62. Let's diagnose, by manual inspection, why the model is void

### Description et interprétation du schéma :

Présentation du modèle problématique avec la racine `Root`, le groupe `[1, 1]`, et les sous-éléments `F1` à `F9`.

---

# 63. Let's diagnose, by manual inspection, why the model is void

### Description et interprétation du schéma :

Mise en évidence des chemins de sous-graphes en conflit :

* Chemin 1 : `Root` $\to$ `F1` $\to$ `F5` $\to$ `F9`.
* Chemin 2 : `Root` $\to$ groupe `[1,1]` $\to$ `F4` $\to$ `F8` $\to$ `F7`.
* Le conflit provient du fait que le choix du groupe impose un élément unique parmi {F2, F3, F4}, déclenchant des exclusions croisées avec les éléments obligatoires sous F1.

---

# 64. Let's try to fix the defect which make the model void: Erasing some constraints (e.g., the exclusions)?

### Description et interprétation du schéma :

Tentative de correction en supprimant les contraintes d'exclusion : `F8 excludes F3` et `F9 excludes F3`.

---

# 65. However, erasing these two constraints is not enough.

```prolog
pl(L):-
    L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    fd_domain(L, 0, 1),
    Root #= 1,
    Root #= F1,
    F1 #= F6,
    F4 #= F8,
    F1 #= F5,
    F4 #>= F9,
    F3 #>= F7,
    F8 #==> F7,
    F5 #==> F9,
    % Exclusions retirées
    Root #= F2 + F3 + F4,
    fd_labeling(L).

```

* **Résultat Solver :** **There is no solution** $\rightarrow$ **The PLM is void**.

---

# 66. Let's try to fix the defect which make the model void by relaxing the cardinality [1..1] to [1..3], and then diagnosing it again

### Description et interprétation du schéma :

Modification de la cardinalité de groupe sous `Root` : passage de `[1, 1]` à `[1, 3]`.

---

# 67. And then: consult ('nameOfTheFile.pl').

```prolog
pl(L):-
    L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    fd_domain(L, 0, 1),
    Root #= 1,
    Root #= F1,
    F1 #= F6,
    F4 #= F8,
    F1 #= F5,
    F4 #>= F9,
    F3 #>= F7,
    F8 #==> F7,
    F5 #==> F9,
    F3 * F8 #= 0,
    F3 * F5 #= 0,
    % Relaxation de la cardinalité de groupe
    Root #=< F2 + F3 + F4,
    F2 + F3 + F4 #=< Root * 3,
    fd_labeling(L).

```

* **Résultat Solver :**
* `pl(L).` $\rightarrow$ **There is one solution** $\rightarrow$ **The PLM is NOT void**.
* `;` $\rightarrow$ **There is another solution** $\rightarrow$ **The PLM is NOT false**.



---

# 68. Let's show a sub-set of constraints (MUS) that can be used to fix the model (erasing but also relaxing them)

### Description et interprétation du schéma :

Mise en évidence du sous-ensemble minimal d'insatisfiabilité (**MUS - Minimal Unsatisfiable Subset**) englobant le groupe `[1..1]`, `F3`, `F4`, `F8`, `F7`, et la contrainte `requires`.

---

# 69. Exercise: Try to fix the defect which make the model void: erasing a MUS (e.g., one requires)

### Description et interprétation du schéma :

Tentative de suppression de la dépendance `F8 requires F7`.

---

# 70. Prolog execution for erasing a MUS

```prolog
pl(L):-
    L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    fd_domain(L, 0, 1),
    Root #= 1,
    Root #= F1,
    F1 #= F6,
    F4 #= F8,
    F1 #= F5,
    F4 #>= F9,
    F3 #>= F7,
    % F8 #==> F7 retiré
    F5 #==> F9,
    F3 * F8 #= 0,
    F3 * F5 #= 0,
    Root #= F2 + F3 + F4,
    fd_labeling(L).

```

* **Résultat Solver :**
* `pl(L).` $\rightarrow$ **There is one solution** : `S = [1,1,0,0,1,1,1,0,1,1]` $\rightarrow$ **The PLM is NOT void**.
* `;` $\rightarrow$ **There is NO more solutions** $\rightarrow$ **The PLM is false** (Un seul produit possible, donc la solution n'est pas bonne en PLE).



---

# 71. Let's fix the defect which make the model void (using another MUS) : Relaxing a dependency

### Description et interprétation du schéma :

Relaxation de la dépendance obligatoire `F1 -> F5` en une dépendance optionnelle `F1 #>= F5`.

---

# 72. Prolog code & Solver execution

```prolog
pl(L):-
    L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    fd_domain(L, 0, 1),
    Root #= 1,
    Root #= F1,
    F1 #= F6,
    F4 #= F8,
    F1 #>= F5, % Relaxé en optionnel
    F4 #>= F9,
    F3 #>= F7,
    F8 #==> F7,
    F5 #==> F9,
    F3 * F8 #= 0,
    F3 * F5 #= 0,
    Root #= F2 + F3 + F4,
    fd_labeling(L).

```

* **Résultat Solver :**
* `pl(L).` $\rightarrow$ **There is one solution** $\rightarrow$ **The PLM is NOT void**.
* `;` $\rightarrow$ **There is another solution** $\rightarrow$ **The PLM is NOT false**.



---

# 73. Now, let's verify if F5 is a dead feature

### Description et interprétation du schéma :

Analyse du modèle révisé avec `F5` repassée en optionnelle sous `F1`.

---

# 74. Verification constraint for dead feature (F5 #= 1)

```prolog
pl(L):-
    L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
    fd_domain(L, 0, 1),
    F5 #= 1, % Verification constraint
    Root #= 1,
    Root #= F1,
    F1 #= F6,
    F4 #= F8,
    F1 #>= F5,
    F4 #>= F9,
    F3 #>= F7,
    F8 #==> F7,
    F5 #==> F9,
    F3 * F8 #= 0,
    F3 * F5 #= 0,
    Root #= F2 + F3 + F4,
    fd_labeling(L).

```

* **Résultat Solver :** **There is no solution** $\rightarrow$ **F5 is a dead feature**.

---

# 75. Exercise: diagnose, by manual inspection, why F5 is a dead feature? Why F4, F8 and F9 are also dead?

### Description et interprétation du schéma :

Schéma complet pour l'analyse manuelle des propagations de contraintes bloquant `F5`, `F4`, `F8` et `F9`.

---

# 76. Exercise: propose two solutions to fix the "F5 dead feature" error

### Description et interprétation du schéma :

Schéma du Feature Model support de l'exercice.

---

# 77. Exercise: Diagnose and fix the rest of defects in this model

### Description et interprétation du schéma :

Schéma du Feature Model support de l'exercice global.

---

# 78. Why are side airbags incompatible with exterior rear-view mirrors in this Renault product line model excerpt?

### Description et interprétation du schéma :

Graphe de dépendances complexe issu d'une ligne de produits automobile Renault :

* Recherche de chemin d'incompatibilité entre **Airbags latéraux** et **Rétro électriques**.
* Chaîne de dépendances mise en surbrillance :
* `Rétro électriques` $\to$ `LV elec` (Lève-vitres électriques) $\to$ `Airbags av` (Airbags avant) $\to$ `Airbags lat` (Airbags latéraux).



---

# 79. MENC Method to Diagnose InConsistent PLMs

### Description et interprétation du schéma :

4 sous-figures (a, b, c, d) illustrant la réduction du graphe de contraintes pour le diagnostic de modèles inconsistants :

* Variables : $L \in \{10, 11, 12, 13, 14\}$, $M \in \{3, 5, 7, 9\}$, $N \in \{2, 4, 6, 8\}$, $O \in \{1, 2, 3, 5, 8\}$.
* Contraintes :
* $C_1 : L > M$
* $C_2 : O + M \le N$
* $C_3 : L - N > 5$
* $C_4 : N < 4$


* Étapes de numérotation et de réduction des dépendances entre nœuds pour isoler les conflits.

---

# 80. MEDIC - Results of the experimentation of Medic-PLM

### Description et interprétation des schémas :

Deux schémas du Feature Model du châssis SUV (`SUV chassis`) :

* Racine : `SUV chassis` ($C_0: \text{root}=\text{true}$)
* Éléments principaux : `F1`, `F2`, `back door`, `F4`, `F5`, `F6`, `F7`, `back windshield`, `antifog`, `wiper`, `circuits`, `type 1`, `type 2`, `F10` à `F29`.
* Mise en évidence en rouge des éléments impliqués dans le conflit détecté par MEDIC-PLM (`back door`, `back windshield`, `antifog`, `wiper`, `circuits`, `type 1`, `type 2` et les contraintes $C_{10}, C_{12}, C_{15}, C_{26}, C_{33}, C_{38}$).

---

# 81. MEDIC - Results of the experimentation of Medic-PLM

### Tableau de résultats d'expérimentation :

| Model ID | Vars | Cons | Vertices | Edges | ACCURACY | Time (s) ROOT | Time (s) MAX | Time (s) MIN | Time (s) RAND | |CL| ROOT | #C ROOT | |CL| MAX | #C MAX | |CL| MIN | #C MIN | |CL| RAND | #C RAND |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **FM1** | 11 | 13 | 24 | 30 | S | 0.23 | 0.44 | 0.26 | 0.24 | 6 | 4 | 6 | 4 | 6 | 4 | 6 | 4 |
| **FM2** | 5 | 6 | 11 | 12 | S | 0.41 | 0.43 | 0.82 | 0.20 | 7 | 4 | 7 | 4 | 6 | 4 | 7 | 4 |
| **FM3** | 5 | 7 | 12 | 13 | S | 0.33 | 0.51 | 0.47 | 0.25 | 11 | 6 | 11 | 6 | 11 | 6 | 9 | 5 |
| **FM4** | 5 | 7 | 12 | 13 | S | 0.39 | 0.45 | 1.10 | 0.25 | 9 | 5 | 9 | 5 | 12 | 7 | 9 | 5 |
| **FM5** | 10 | 12 | 22 | 25 | S | 0.60 | 0.78 | 1.18 | 1.28 | 14 | 8 | 14 | 8 | 12 | 7 | 14 | 8 |
| **FM6** | 10 | 13 | 23 | 26 | S | 0.39 | 1.85 | 1.95 | 0.57 | 11 | 6 | 11 | 6 | 14 | 6 | 11 | 6 |
| **FM7** | 10 | 13 | 23 | 26 | S | 0.51 | 0.74 | 1.65 | 0.61 | 13 | 7 | 13 | 7 | 13 | 7 | 13 | 7 |
| **FM8** | 10 | 14 | 24 | 31 | S | 0.53 | 0.63 | 1.54 | 1.41 | 13 | 7 | 13 | 7 | 13 | 7 | 13 | 7 |
| **FM9** | 15 | 19 | 34 | 39 | S | 0.54 | 1.92 | 1.15 | 0.76 | 7 | 4 | 7 | 4 | 7 | 4 | 7 | 4 |
| **FM10** | 15 | 19 | 34 | 43 | S | 0.49 | 0.53 | 0.83 | 1.01 | 34 | 21 | 34 | 21 | 18 | 34 | 34 | 21 |
| **FM11** | 15 | 20 | 35 | 42 | S | 0.49 | 0.57 | 0.47 | 1.42 | 18 | 10 | 18 | 10 | 4 | 6 | 6 | 4 |
| **FM12** | 15 | 21 | 36 | 43 | S | 0.52 | 0.66 | 1.10 | 1.11 | 12 | 7 | 12 | 7 | 11 | 7 | 12 | 7 |
| **FM13** | 15 | 20 | 35 | 44 | S | 0.81 | 2.18 | 0.95 | 1.51 | 20 | 11 | 12 | 7 | 12 | 7 | 12 | 7 |
| **FM14** | 15 | 21 | 36 | 43 | S | 0.60 | 1.04 | 0.80 | 0.76 | 9 | 5 | 9 | 5 | 12 | 21 | 9 | 5 |
| **FM15** | 15 | 20 | 35 | 45 | S | 0.79 | 0.76 | 1.44 | 1.23 | 23 | 13 | 11 | 6 | 27 | 15 | 13 | 7 |
| **FM16** | 15 | 20 | 35 | 45 | S | 0.81 | 2.16 | 1.18 | 0.99 | 31 | 18 | 25 | 14 | 27 | 15 | 24 | 13 |
| **FM17** | 30 | 34 | 64 | 82 | S | 1.84 | 2.67 | 1.39 | 2.13 | 9 | 5 | 9 | 5 | 8 | 5 | 8 | 5 |
| **FM18** | 30 | 37 | 67 | 82 | S | 1.94 | 1.49 | 1.29 | 1.56 | 9 | 5 | 9 | 5 | 5 | 5 | 9 | 5 |
| **FM19** | 30 | 39 | 69 | 82 | S | 2.66 | 3.49 | 3.45 | 3.01 | 23 | 13 | 19 | 11 | 19 | 11 | 19 | 11 |
| **FM20** | 30 | 39 | 69 | 84 | S | 1.45 | 1.07 | 1.55 | 1.72 | 15 | 8 | 14 | 8 | 14 | 8 | 14 | 8 |
| **FM21** | 30 | 41 | 71 | 84 | S | 0.66 | 0.64 | 2.09 | 0.99 | 27 | 15 | 27 | 15 | 13 | 8 | 13 | 8 |
| **FM22** | 30 | 40 | 70 | 86 | S | 1.39 | 1.92 | 1.10 | 1.29 | 7 | 4 | 7 | 4 | 7 | 4 | 7 | 4 |
| **FM23** | 30 | 40 | 70 | 86 | S | 2.23 | 2.43 | 5.09 | 3.19 | 43 | 30 | 47 | 28 | 18 | 10 | 53 | 32 |
| **Ren1** | 32 | 41 | 73 | 78 | S | 0.18 | 0.18 | 0.18 | 0.24 | 5 | 3 | 5 | 3 | 3 | 2 | 3 | 2 |
| **Ren2** | 139 | 149 | 288 | 327 | S | 1.00 | 1.04 | 1.03 | 1.01 | 5 | 3 | 5 | 3 | 3 | 2 | 5 | 3 |
| **Ren3** | 139 | 153 | 292 | 331 | S | 4.38 | 4.40 | 4.34 | 4.26 | 5 | 3 | 5 | 3 | 3 | 2 | 5 | 3 |
| **Ren4** | 146 | 177 | 323 | 430 | S | 2.14 | 2.19 | 2.32 | 2.35 | 36 | 22 | 36 | 22 | 35 | 22 | 38 | 24 |
| **Ren5** | 146 | 178 | 324 | 431 | S | 3.62 | 3.74 | 3.91 | 4.03 | 107 | 62 | 107 | 62 | 109 | 63 | 100 | 60 |
| **Ren6** | 268 | 334 | 602 | 829 | S | 0.58 | 0.67 | 0.68 | 1.45 | 5 | 3 | 5 | 3 | 5 | 3 | 5 | 3 |

### Description et interprétation des nuages de points (Scatter-plots) :

1. **Runtime vs Number of vertices :** Montre la relation entre le temps d'exécution en secondes et le nombre de sommets du graphe ($0 \to 800$).
2. **Runtime vs Quality of the solution :** Montre la variation du temps en fonction de la qualité de la solution trouvée.
3. **Runtime vs Number of visited vertices :** Analyse du temps par rapport au nombre de sommets visités ($0 \to 300$).

---

# 82. Domain analysis (research opportunities)

1. How to automatically discover (and guide the specification of) domain requirements and constraints?
2. How to connect domain requirements and their formal representations?
3. How to automatically transform natural language requirements into formal conceptual models (which languages?)?
4. How to make evolve domain requirements maintaining the consistency of the entire product line?
5. How to specify, represent and reason on domain non-functional requirements?
6. How to deal with automatic diagnosis and correction of product line models (from the problem and solution space perspectives)?