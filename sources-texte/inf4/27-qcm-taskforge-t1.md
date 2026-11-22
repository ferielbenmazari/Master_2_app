**Question 1**
Noté sur 1,00

Which statement best describes a software product line?
*Select the single correct statement.*

* a. A family derived from shared assets with explicitly managed variability.


* b. A feature diagram with no implementation assets.


* c. A copy of one application for every customer, with no common maintenance strategy.


* d. Several unrelated applications sold by one company.


* e. A product in which every feature must always be enabled.



---

**Question 2**
Noté sur 1,00

In the kit, a complete configuration lists selected features. Which statements are correct?
*Select all correct statements.*

* a. Unlisted features remain undecided.


* b. Every optional feature must be listed.


* c. The list must satisfy the model.


* d. The product name replaces the feature list.


* e. Unlisted features are excluded.



---

**Question 3**
Noté sur 2,00

The constraint is Statistics => Filters. Which claims follow from this constraint alone?
*Select all correct statements.*

* a. Excluding Filters requires excluding Statistics.


* b. Excluding Statistics requires excluding Filters.


* c. Both features must always have equal values.


* d. Selecting Statistics requires Filters.


* e. Selecting Filters requires Statistics.



---

**Question 4**
Noté sur 2,00

R has optional P; P has optional C; the constraint is P => C. P can be excluded. Which statements are correct?
*Select all correct statements.*

* a. The model must be void.


* b. C is false optional relative to P.


* c. The optional edge guarantees C can be excluded when P is selected.


* d. C need not be core in the whole model.


* e. C is present in every valid product.



---

**Question 5**
Noté sur 2,00

Model A adds two unsupported rules: CSVExport => Kiosk and CSVExport => LocalStorage. The original contract permits export with either storage. What is the appropriate repair?
*Select the single correct statement.*

* a. Delete the advertised CSVExport feature.


* b. Remove the storage alternative.


* c. Make CSVExport mandatory.


* d. Delete Statistics => Filters.


* e. Remove both unsupported rules while preserving the original constraints.



---

**Question 6**
Noté sur 2,00

Root R has optional P; P has mandatory C. R is selected and no other constraints apply. Which selections are valid?
*Select all correct statements.*

* a. P selected and C undecided in a complete configuration.


* b. P and C both excluded.


* c. P excluded and C selected.


* d. P selected and C excluded.


* e. P and C both selected.



---

**Question 7**
Noté sur 1,00

Which actions preserve the model for the local generator?
*Select all correct statements.*

* a. Rename a PNG file to .uvl.


* b. Save only a product name.


* c. Copy the UVL text into the workshop and download it.


* d. Export UVL and import it in the workshop.


* e. Save only a graph screenshot.



---

**Question 8**
Noté sur 1,00

How should the supplied A, B and C models be examined?
*Select all correct statements.*

* a. Rerun the analyses after each correction.


* b. Reuse an old result for the newly loaded file.


* c. Combine all their added rules first.


* d. Stop once the graph looks plausible.


* e. Analyse each faulty file independently.



---

**Question 9**
Noté sur 2,00

A model is satisfiable, but adding the assumption F=false makes it unsatisfiable. What follows?
*Select the single correct statement.*

* a. The original model is void.


* b. F must have a mandatory edge.


* c. F is dead.


* d. F must have a visible widget.


* e. F is core.



---

**Question 10**
Noté sur 2,00

A configuration selects Storage but neither of its alternative children Memory and LocalStorage. Why is it invalid?
*Select the single correct statement.*

* a. Exactly one child is required under the selected parent.


* b. Storage is optional in TaskForge v1.


* c. CSVExport is missing.


* d. Both children are independently mandatory.


* e. All optional features must be selected.

**Question 11**
Noté sur 2,00

Which experiment proves that F is dead in a satisfiable feature model?
*Select the single correct statement.*

* a. Observe that F is a leaf.


* b. Hide its UI button.


* c. Require F and show that no valid completion exists.


* d. Find one product excluding F.


* e. Count mentions of F in a document.



---

**Question 12**
Noté sur 2,00

In this v1 model the complete selected list is TaskForge, TaskManagement, Storage, Memory, Kiosk, Filters. Which statements are true?

**Reference model: TaskForge v1**

```text
features
    TaskForge
        mandatory
            TaskManagement
            Storage
                alternative
                    Memory
                    LocalStorage
        optional
            Priorities
            DueDates
            Filters
            CSVExport
            Statistics
            Kiosk
constraints
    Kiosk => Memory
    Statistics => Filters
```

*Select all correct statements.*

* a. Filters forces Statistics.
* b. Statistics is excluded.
* c. It is valid.
* d. Priorities must be added.
* e. LocalStorage remains undecided.

```