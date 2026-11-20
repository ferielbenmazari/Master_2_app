This multiple choice questionnaire corresponds to Tutorial 0. Questions may be about the tutorial itself, but also about the lecture and the readings that were provided to you alongside the lectures. You have 3 tries maximum. 

### Question 1

Incomplet
Noté sur 1,00
Marquer la question

Which statements describe application engineering in a product line?

**Select all correct statements.**

* [ ] a. It removes the need to elicit the particular customer's requirements.
* [ ] b. It consists exclusively of writing all components from scratch.
* [ ] c. It defines every possible family variation independently of any application.
* [ ] d. It relates product-specific needs to the variability supported by the family.
* [ ] e. It uses domain assets to realise a particular application.



### Question 2



Incomplet
Noté sur 1,00
Marquer la question

Which artefacts can be engineered for reuse in a software product line?

**Select all correct statements.**

* [ ] a. Only artefacts belonging to one delivered product, excluding family assets.


* [ ] b. Reusable test artefacts applicable to supported variants.


* [ ] c. Family-level requirements with documented variability.


* [ ] d. Only executable binaries, because other artefacts cannot be reused.


* [ ] e. A reference architecture supporting the family’s options.





### Question 3



Incomplet
Noté sur 2,00
Marquer la question

A requirement is common to all products currently inside a defined family scope. A proposed new product would not satisfy it. Which conclusions are justified?

**Select all correct statements.**

* [ ] a. The team must assess whether to revise the scope or variability, or keep the product outside the family.


* [ ] b. Removing the requirement from one application automatically revises all domain artefacts.


* [ ] c. The requirement was necessarily classified incorrectly for the original scope.


* [ ] d. The new product can be included without reconsidering any family assumptions.


* [ ] e. A change in scope can change which requirements count as common.





### Question 4



Incomplet
Noté sur 2,00
Marquer la question

An application team discovers a requirement unsupported by current domain assets. Which statements are justified?

**Select all correct statements.**

* [ ] a. Application engineering may provide a change request to domain engineering.


* [ ] b. A product-specific solution may be retained without making it a reusable domain asset.


* [ ] c. The requirement must automatically become mandatory for every family member.


* [ ] d. The existence of feedback means the distinction between the two processes is meaningless.


* [ ] e. Promoting the solution to the domain may require reengineering it for reuse.





### Question 5



Incomplet
Noté sur 2,00
Marquer la question

A team copies a completed product into several repositories and maintains each copy independently. Which statements follow?

**Select all correct statements.**

* [ ] a. The number of repositories alone determines whether the team has a product line.


* [ ] b. Introducing governed shared assets and explicit variation could move the approach towards PLE.


* [ ] c. Independent copies can make propagation of shared fixes harder.


* [ ] d. The use of identical initial source code guarantees coordinated future evolution.


* [ ] e. Code copying demonstrates some reuse but does not by itself establish product line engineering.

### Question 6



Incomplet
Noté sur 2,00
Marquer la question

For selectable features A and B, interpret “A requires B” as A implies B, and “A excludes B” as prohibiting their joint selection. Consider each relation separately. Which statements hold?

**Select all correct statements.**

* [ ] a. Under A requires B, excluding A forces B to be excluded.


* [ ] b. Under A requires B, choosing B forces A.


* [ ] c. Under A requires B, choosing A without B violates the relation.


* [ ] d. Under A excludes B, both features must be absent.


* [ ] e. Under A excludes B, the forbidden joint selection is unchanged if the endpoints are exchanged.

### Question 7



Incomplet
Noté sur 1,00
Marquer la question

According to Tutorial 0, what is the main stated reason for choosing Software or System when creating a product line?

**Select the single correct statement.**

* ( ) a. To determine whether relationships can be drawn.


* ( ) b. To choose the requirements templates appropriate to the nature of the product line.


* ( ) c. To choose whether the project can contain more than one application.


* ( ) d. To turn autosave on or off.


* ( ) e. To decide whether the project is private or publicly reusable.

### Question 8



Incomplet
Noté sur 1,00
Marquer la question

Which diagram-editing actions are documented in Tutorial 0?

**Select all correct statements.**

* [ ] a. Rename the project to add an element to the active diagram.


* [ ] b. Download project to change the properties of a selected relationship.


* [ ] c. Drag an element from the palette into the editing area to add it.


* [ ] d. Right-click an element or relationship and choose Properties to edit its properties.


* [ ] e. Use Save project as to create a relationship between two existing elements.



### Question 9



Incomplet
Noté sur 2,00
Marquer la question

A family’s domain model explicitly makes Analytics optional. Both applications created so far select it. A reviewer argues that Analytics should be declared mandatory because it appears in every observed application. Which statements are justified?

**Select all correct statements.**

* [ ] a. The two application selections automatically override the domain model in VariaMos.


* [ ] b. Every feature appearing in two products must be mandatory.


* [ ] c. A no-Analytics product may remain valid if it satisfies all other family constraints.


* [ ] d. The observations do not by themselves establish that Analytics is mandatory in the intended family.


* [ ] e. The team should assess intended scope and needs before changing the domain model.

### Question 10



Incomplet
Noté sur 2,00
Marquer la question

A company deliberately engineers one text-editor family with a shared core and managed optional features. It needs SchoolEditor and LegalEditor as two products of that family. Using Tutorial 0, which actions fit this decision?

**Select all correct statements.**

* [ ] a. Represent the two distinct products only as adaptations of one application.


* [ ] b. Create SchoolEditor and LegalEditor as applications under that product line.


* [ ] c. Place reusable family models under Domain Engineering.


* [ ] d. Create one Text Editors product line in the project.


* [ ] e. Create a new product line for every optional feature.

### Question 11



Incomplet
Noté sur 2,00
Marquer la question

An invoicing family supports optional PDFExport. Customer Alpha does not want it; Customer Beta requires it. A student proposes deleting PDFExport from the family model to configure Alpha. Which statements are correct?

**Select all correct statements.**

* [ ] a. The proposal confuses a product-specific selection with a change to family scope.


* [ ] b. Creating an Alpha application node alone proves that PDFExport is deselected.


* [ ] c. Alpha’s decision belongs in the engineering of the Alpha application.


* [ ] d. The family should retain PDFExport as supported variability if both products remain in scope.


* [ ] e. PDFExport must become mandatory for every product because Beta needs it.


### Question 12



Incomplet
Noté sur 2,00
Marquer la question

One robot application must adapt its behaviour when deployed on a beach or on a city street. The team explicitly treats these as contexts of the same product. Which statements follow from Tutorial 0?

**Select all correct statements.**

* [ ] a. Each context must be a separate product line because the terrain differs.


* [ ] b. The two spaces automatically specify a safe transition policy.


* [ ] c. Beach and Street can be adaptation spaces under that robot application.


* [ ] d. Context-specific models can be created under the corresponding adaptation.


* [ ] e. Creating the two spaces establishes that the robot senses context changes correctly.