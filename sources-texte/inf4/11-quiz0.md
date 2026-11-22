This multiple choice questionnaire corresponds to Tutorial 0. Questions may be about the tutorial itself, but also about the lecture and the readings that were provided to you alongside the lectures. You have 3 tries maximum. 

## QUIZ O - Version 1


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

---


## QUIZ O - Version 2

**Question 1**
Noté sur 1,00

Which statement characterises a software product line?
**Select the single correct statement.**

* a. A family developed from managed core assets through a prescribed reuse process.


* b. A repository containing any software developed by one organisation.


* c. A sequence of releases of one product, irrespective of how they are engineered.


* d. A collection of programs written in the same programming language.


* e. A list of independently developed products sold under the same brand.



---

**Question 2**
Noté sur 1,00 *(Note : le début de la ligne est légèrement rogné sur la capture mais lisible)*

Which activity directly serves domain engineering?
**Select the single correct statement.**

* a. Renaming one customer-specific application model.


* b. Defining reusable requirements and planned variation for a family.


* c. Selecting an existing supported option for one named customer.


* d. Recording only the requirements unique to one delivery.


* e. Installing an already configured product for one customer.



---

**Question 3**
[Illisible : la mention du nombre de points est masquée par une infobulle « Visual Studio Code », seule la fin « ... sur 2,00 » est visible]

Which statement is justified by the introductory reading's discussion of product line economics?
**Select the single correct statement.**

* a. The break-even point depends on investment, per-product costs and organisational context.


* b. The first product must always be cheaper under PLE than under independent development.


* c. Reuse eliminates the need for any initial platform investment.


* d. Every organisation recovers its platform investment at exactly its third product.


* e. The number of products is irrelevant once a common platform exists.



---

**Question 4**
Noté sur 2,00

A shared component is corrected in a product line platform. Which conclusions are justified?
**Select all correct statements.**

* a. Shared assets prevent defects from affecting multiple products.


* b. Traceability helps identify the products potentially affected by the change.


* c. Products using it may benefit from the correction.


* d. The correction proves that every supported combination is now correct.


* e. Product-level testing becomes unnecessary because the component is shared.



---

**Question 5**
Noté sur 2,00

Which statement correctly interprets the Domain Engineering and application model spaces described in Tutorial 0?
**Select the single correct statement.**

* a. A model’s name alone determines whether its contents satisfy family constraints.


* b. The spaces distinguish family-level engineering from the engineering of particular products.


* c. A model stored under Domain Engineering is automatically correct for all products.


* d. An application model replaces the need for a family variability definition.


* e. Creating an application model automatically copies and configures every domain model.



---

**Question 6**
Noté sur 2,00

Using the course distinction between configuration and derivation, which statements hold?
**Select all correct statements.**

* a. Selecting supported features for an application is a configuration activity.


* b. Choosing features and producing code are necessarily the same operation.


* c. Producing the application implementation from selected assets belongs to derivation.


* d. A valid feature selection alone proves that the implementation satisfies every requirement.


* e. Creating an empty application node proves that product derivation is complete.



---

**Question 7**
Noté sur 1,00

In Tutorial 0, which actions create models at the stated level?
**Select all correct statements.**

* a. For an application model, right-click the intended application and select New model.


* b. For a domain model, right-click Domain engineering and select New model.


* c. For a domain model, use Download project and choose its destination folder.


* d. For an adaptation model, rename the enclosing product line.


* e. For an adaptation model, right-click the intended adaptation and select New model.



---

**Question 8**
Noté sur 1,00

In the workspace described in Tutorial 0, which action creates a new product within an existing product line?
**Select the single correct statement.**

* a. Right-click Application engineering in the product line and select New application.


* b. Right-click an application and select New adaptation.


* c. Right-click the project and select New product line.


* d. Select Download project and supply a new application name.


* e. Right-click Domain engineering and select New model.



---

**Question 9**
Noté sur 2,00

A booking family offers Payment and Receipt, with Receipt requiring Payment. A student creates an application, selects both, and draws the corresponding requires relation in an appropriate model. No implementation or tests have been produced. Which statements are correct?
**Select all correct statements.**

* a. Implementation and testing evidence are still needed to establish a working product.


* b. The requires relation means Payment cannot be selected without Receipt.


* c. The selection proves that all unstated stakeholder requirements are satisfied.


* d. The application node proves that executable derivation has already occurred.


* e. The selection satisfies the stated requires relation.



---

**Question 10**
Noté sur 2,00

Three applications use a shared authentication component; a fourth does not. The component is corrected. The family and applications are organised in VariaMos, but no automatic traceability or propagation is assumed. Which statements are justified?
**Select all correct statements.**

* a. Asset-to-product trace information can identify the three potentially affected applications.


* b. The fourth application necessarily uses the correction because it shares the family name.


* c. Renaming the domain model propagates the corrected executable to deployed products.


* d. The team should assess and test the correction in affected product configurations.


* e. The correction can be managed as a shared asset change rather than four unrelated edits.

**Question 11**
Noté sur 2,00

A library-software family supports loans and reservations. A new customer requests an unsupported inter-library transfer feature. An application is created for that customer in VariaMos. Which statements are justified?
**Select all correct statements.**

* a. The request must be accepted with no impact analysis because PLE supports variability.


* b. Creating the application automatically adds Transfer to all existing products.


* c. Adding an element named Transfer proves that its implementation exists.


* d. A potentially reusable solution can be proposed for inclusion in domain assets.


* e. The team should analyse the gap between the request and supported domain assets.



---

**Question 12**
Noté sur 2,00

A fictitious platform costs EUR 120,000 to build. Each product then costs EUR 20,000 to derive. Independent development costs EUR 50,000 per product. Ignore all other costs. The team organises the family in VariaMos. Which statements are correct?
**Select all correct statements.**

* a. The result establishes a universal five-product threshold for PLE.


* b. PLE first becomes strictly cheaper at five products.


* c. At three products, PLE costs EUR 150,000.


* d. At four products, both strategies cost EUR 200,000.


* e. Creating four application nodes proves the organisation has incurred exactly EUR 200,000.



