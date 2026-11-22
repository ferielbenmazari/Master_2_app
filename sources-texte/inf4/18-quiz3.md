**Question 1**
Noté sur 1,00

Assume the base model has a solution. Which statements correctly describe a dead Boolean feature F?
**Select all correct statements.**

* a. No valid configuration selects F.
* b. Adding F=1 makes the model unsatisfiable.
* c. F may be drawn as optional despite being dead.
* d. F is absent from one observed product, so it is dead.
* e. F's label is missing from the diagram.

---

**Question 2**
Noté sur 1,00

Which statements distinguish satisfiability from enumerating all solutions?
**Select all correct statements.**

* a. One valid assignment establishes satisfiability.
* b. Enumerating all solutions requires covering the entire solution space.
* c. Finding one solution proves uniqueness.
* d. A satisfiable model must allow at least two products.
* e. An enumeration timeout proves unsatisfiability.

---

**Question 3**
Noté sur 2,00

The query findall(_, (program(L),label(L)), Ls), length(Ls,N) completes. Assume one answer per complete assignment. Which statements hold?
**Select all correct statements.**

* a. N counts the enumerated assignments.
* b. Its memory use is constant regardless of N.
* c. It omits storing each full assignment as the collected template.
* d. It avoids searching for every solution.
* e. It proves all counted assignments are distinct feature sets if attributes vary.

---

**Question 4**
Noté sur 2,00

A nonempty, exhaustively enumerated Boolean model has 12 distinct configurations. F is zero in all 12; G is zero in none. Which statements follow?
**Select all correct statements.**

* a. F is dead.
* b. G is core.
* c. F and G are both variable.
* d. A zero count for an integer attribute necessarily means it is a core feature.
* e. The result proves G is connected by a syntactically mandatory edge.

---

**Question 5**
Noté sur 2,00

A generated predicate expects program([A,B,C]). A user calls program([C,B,A]) while interpreting the caller's names as the original features. Which statements hold?
**Select all correct statements.**

* a. The caller can misinterpret which feature a position represents.
* b. The list order must be matched to the exported predicate.
* c. The program automatically sorts arguments by feature name.
* d. The solver necessarily raises a syntax error.
* e. Renaming the list variable L fixes the positional mismatch.

---

**Question 6**
Noté sur 2,00

For A,B in {0,1}, compare A+B≤1 and A×B=0. Which statements hold?
**Select all correct statements.**

* a. Both exclude A=B=1.
* b. Both permit A=B=0.
* c. They admit the same Boolean assignments.
* d. Both require exactly one selected feature.
* e. They admit A=B=1 if the features are optional.

---

**Question 7**
Noté sur 1,00

How does the tutorial add VoiceControl's Version attribute?
**Select the single correct statement.**

* a. Name a new root Version and delete VoiceControl.
* b. Open VoiceControl properties, add an attribute with the plus icon, name it Version and select Integer.
* c. Choose String and assume the solver interprets any word as an integer.
* d. Write Version only in the project title.
* e. Change an unrelated edge to Excludes.

---

**Question 8**
Noté sur 1,00

Which sequence obtains the SWI representation in the tutorial?
**Select the single correct statement.**

* a. Open the tools modal, choose Solver Specific Semantics, select swi and click Get swi Model.
* b. Generate SRS/SyRS from a requirements model.
* c. Rename the feature model to Prolog.
* d. Choose Related requirements on a security node.
* e. Download a screenshot and run it as source code.

---

**Question 9**
Noté sur 2,00

All Fi are Boolean. F1=1, F2=F1, F3=F2, F4≤F1, F5=F4 and F3+F4≤1. Which statements hold?
**Select all correct statements.**

* a. The only solution is F1=F2=F3=1 and F4=F5=0.
* b. F4 and F5 are dead.
* c. F4=1,F5=0 is valid.
* d. The model is void.
* e. F5 can be selected independently of F4.

---

**Question 10**
Noté sur 2,00

A query returns the first two solutions, both with Login=1, without exhausting the search. Which statement is justified?
**Select the single correct statement.**

* a. Login is definitely core.
* b. Login is definitely dead.
* c. Login is selectable, but its core status remains unproved.
* d. Exactly two products exist.
* e. Every unobserved feature must be absent.

---

**Question 11**
Noté sur 2,00

A satisfiable finite model is tested with F=1 and complete search returns false. Which statements follow?
**Select all correct statements.**

* a. No valid full assignment contains F.
* b. F is dead in this model.
* c. The base model has no products.
* d. The graphical model is automatically repaired.
* e. The result identifies a unique constraint to delete.

---

**Question 12**
Noté sur 2,00

All Fi are Boolean. F1=1, F2=F1, F3=F2, F4≤F1 and F5=F4. There is no exclusion. How many complete assignments exist?
**Select the single correct statement.**

* a. One.
* b. Two.
* c. Four.
* d. Eight.
* e. Zero.
