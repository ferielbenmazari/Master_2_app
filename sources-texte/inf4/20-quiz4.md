**Question 1**
Noté sur 1,00

Using the tutorial's terminology, what is a false product line?
**Select the single correct statement.**

* a. Any model with a textual constraint.
* b. Any model containing an optional feature.
* c. A model with no satisfying assignment.
* d. A model allowing exactly one product configuration.
* e. A model whose name contains a typo.

---

**Question 2**
Noté sur 1,00

Which statements describe a void model?
**Select all correct statements.**

* a. A complete satisfiability check returns UNSAT.
* b. One optional feature is omitted in one configuration.
* c. It has no satisfying configuration.
* d. The results panel has been cleared.
* e. It has exactly one configuration.

---

**Question 3**
Noté sur 2,00

A base model is UNSAT before any feature is forced. Which statements are justified?
**Select all correct statements.**

* a. Each failed test proves a separate independent modelling mistake.
* b. Every added feature-selection test also remains UNSAT.
* c. The base contradiction should be investigated before using these tests to distinguish feature behaviours.
* d. A base satisfiability check is needed before interpreting feature tests as isolated defects.
* e. The root is the unique cause of inconsistency.

---

**Question 4**
Noté sur 2,00

A solver reports that forcing feature F makes the model UNSAT. Which statement is justified?
**Select the single correct statement.**

* a. The solver has automatically changed the requirement.
* b. The test detects incompatibility, but explaining and repairing it requires further analysis.
* c. Delete every constraint mentioning F.
* d. F must be renamed to make it selectable.
* e. The last added constraint is necessarily the sole cause.

---

**Question 5**
Noté sur 2,00

A finite unconfigured model is exhaustively searched after requesting at most two distinct products; exactly one exists and completion is confirmed. Which statements hold?
**Select all correct statements.**

* a. One displayed result always proves uniqueness even after timeout.
* b. It is a false product line under the tutorial's definition.
* c. No second product exists under the analysed constraints.
* d. The model is satisfiable.
* e. The model is void.

---

**Question 6**
Noté sur 2,00

M is satisfiable. Under partial choices P, M AND P AND F=1 is UNSAT. Which conclusions are justified?
**Select all correct statements.**

* a. A global dead-feature test must remove unrelated partial choices.
* b. P must be deleted automatically by the solver.
* c. F is necessarily dead in unconfigured M.
* d. F cannot be selected while preserving P.
* e. M itself is necessarily void.

---

**Question 7**
Noté sur 1,00

Which JSON query requests a satisfiability check using MiniZinc as in the tutorial?
**Select the single correct statement.**

* a. `{"solver":"minizinc","operation":"reset"}`
* b. `{"solver":"minizinc","operation":"sat"}`
* c. `{"solver":"minizinc","operation":"nsolve","operation_n":2}`
* d. `{"solver":"minizinc","operation":"optimize"}`
* e. `{"solver":"sat","operation":"minizinc"}`

---

**Question 8**
Noté sur 2,00

Which fields express the tutorial's Boolean dead-feature iteration?
**Select all correct statements.**

* a. `"with_value": 1`
* b. `"with_value": 0 as the test for deadness.`
* c. `"object_type": ["AbstractFeature","ConcreteFeature"]`
* d. `"operation": "rename"`
* e. `"model_object": "element"`

---

**Question 9**
Noté sur 2,00

Solver A returns {R,X}; solver B returns {R,Y}. Both are checked against the same model and are valid. Which statements hold?
**Select all correct statements.**

* a. The two distinct witnesses establish at least two products.
* b. One solver must be defective because its witness differs.
* c. Different first solutions are compatible with correct solvers.
* d. The solver returning fewer features necessarily optimized size.
* e. There are exactly two products.

---

**Question 10**
Noté sur 2,00

An nsolve request for two products returns one witness before a reported timeout. Which statement is justified?
**Select the single correct statement.**

* a. The model is satisfiable, but uniqueness is not established.
* b. No products exist.
* c. Exactly one product exists.
* d. The witness is necessarily optimal.
* e. Every missing feature is dead.

---

**Question 11**
Noté sur 2,00

A Boolean model has exactly the solution {R,A,B}; features C and D are never selected. Which statements hold?
**Select all correct statements.**

* a. The model is satisfiable.
* b. It is a false product line under the tutorial's definition.
* c. C and D are dead.
* d. The model is void.
* e. A is dead because there is only one product.

---

**Question 12**
Noté sur 2,00

An unconfigured model permits {R,A} and {R,B}. A user has selected A, then tests B=1 and gets UNSAT. Which statement is correct?
**Select the single correct statement.**

* a. Clear Query Results alone logically removes A.
* b. The unconfigured model is void.
* c. B is incompatible with the current A selection; reset choices before assessing global deadness.
* d. The result means that B is mandatory.
* e. B is globally dead.

