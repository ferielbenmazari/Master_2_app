### Question 1

Pas encore répondu

Noté sur 1,00

Marquer la question

A selected parent P has mandatory child C. Which statement follows from the mandatory relationship?

**Select the single correct statement.**

* a. C must be selected whenever P is selected.
* b. C must occur in every product even if P is optional and absent.
* c. The relationship defines how many users may execute C.
* d. C must be omitted whenever P is selected.
* e. Selecting P leaves selection of C unconstrained.

### Question 2



Pas encore répondu

Noté sur 1,00

Marquer la question

For two features A and B, the tutorial’s Includes relationship from A to B means A requires B. Which statements hold?

**Select all correct statements.**

* a. Selecting A entails selecting B.


* b. Selecting B necessarily entails selecting A.


* c. The dependency makes both features mandatory in every product.


* d. Selecting A while omitting B violates the dependency.


* e. A and B cannot be selected together.


### Question 3



Pas encore répondu

Noté sur 2,00

Marquer la question

A requirement permits between one and three child features under selected P. A modeller instead makes all three children mandatory under P. With no other constraints, which statements hold?

**Select all correct statements.**

* a. The model rejects some selections permitted by the requirement.


* b. The mandatory-child model and the requirement admit the same selections.


* c. The mandatory-child model violates the upper bound of the requirement.


* d. A [1..3] group would express the stated permitted counts.


* e. The difference can be fixed by renaming the features alone.


Retour

### Question 4



Pas encore répondu

Noté sur 2,00

Marquer la question

A modeller adds a response-time attribute to a feature as part of the tutorial’s proposed quality extensions. Which practices help make this attribute useful?

**Select all correct statements.**

* a. Define an allowed domain and any acceptance bound.


* b. Keep the target value distinct from evidence that an implementation meets it.


* c. Assume that setting a value forces generated code to meet it.


* d. Specify a unit and the conditions under which the time is measured.


* e. Use arbitrary numbers without units because the field is numeric.

Retour

### Question 5



Pas encore répondu

Noté sur 2,00

Marquer la question

A selected parent has exactly three child features A, B and C in a [1..2] group. There are no other constraints or attributes. How many distinct child-selection sets are allowed?

**Select the single correct statement.**

* a. Seven.


* b. Eight.


* c. Six.


* d. Three.


* e. Two.


Retour

Retour

### Question 6



Pas encore répondu

Noté sur 2,00

Marquer la question

A requires B and B requires C. Assume no other constraints. Which statements follow?

**Select all correct statements.**

* a. Selecting C entails selecting A.


* b. Omitting A forces B and C to be omitted.


* c. The dependencies prohibit selecting A, B and C together.


* d. Selecting A entails selecting C.


* e. Selecting B without A can be valid if C is selected.

Retour

### Question 7



Pas encore répondu

Noté sur 1,00

Marquer la question

Which operations implement the tutorial’s List group with one to three list types?

**Select all correct statements.**

* a. Connect the parent to the bundle and the bundle to each child.


* b. Add a Bundle and set Type to Range.


* c. Set RangeMin to 3 and RangeMax to 1.


* d. Set RangeMin to 1 and RangeMax to 3.


* e. Connect each child directly to the root as globally mandatory.


### Question 8



Pas encore répondu

Noté sur 1,00

Marquer la question

Which action matches the tutorial’s dependency “Images requires Rtf format”?

**Select the single correct statement.**

* a. Make Images a mandatory child of the root solely to express the dependency.


* b. Put Images and Rtf in a [1..1] bundle.


* c. Draw from Images to Rtf format and set the relationship type to Includes.


* d. Draw from Rtf format to Images and select Includes.


* e. Rename Images to Rtf without connecting them.

### Question 9



Pas encore répondu

Noté sur 2,00

Marquer la question

Text alignment is selected. Its Align attribute is a set of distinct values from {Left,Right,Center,Justify}, with [1..4]. Ignore all other choices. How many distinct sets of supported alignment modes exist?

**Select the single correct statement.**

* a. Four.


* b. One.


* c. Fifteen.


* d. Twenty-four.


* e. Sixteen.

### Question 10



Pas encore répondu

Noté sur 2,00

Marquer la question

Use this local fragment of ClothingStores: Shop is optional under the root; Cart is mandatory under Shop; selected Shop requires [1..2] of Online payment and Offline payment. Ignore all other constraints. Which statements hold?

**Select all correct statements.**

* a. Shop with Cart and Online payment alone satisfies this fragment.


* b. Shop with Cart and both payment methods satisfies this fragment.


* c. Shop without Cart satisfies the fragment if both payment methods are selected.


* d. Shop with Cart but neither payment method satisfies the fragment.


* e. Omitting Shop and all its descendants satisfies this fragment.


### Question 11



Pas encore répondu

Noté sur 2,00

Marquer la question

Use this local model: Web management requires Login; Login is a child of User; User model is mandatory under User. Child selection entails parent selection. Which features are necessarily selected if Web management is selected?

**Select all correct statements.**

* a. Account, solely because it is another child of User.


* b. Login.


* c. Demo data, solely because it shares the root.


* d. User model.


* e. User.

### Question 12



Pas encore répondu

Noté sur 2,00

Marquer la question

List is selected. Its children Alphabetic, Numeric and Vignette form [1..3]. Alphabetic, when selected, must support [1..2] of Upper and Lower. Numeric and Vignette are omitted. Which selections for Alphabetic’s supported types are valid?

**Select all correct statements.**

* a. Upper only.


* b. No type.


* c. Roman only.


* d. Lower only.


* e. Upper and Lower.
