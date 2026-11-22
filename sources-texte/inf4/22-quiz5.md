**Question 1**
Noté sur 1,00

Which statements describe completion of a partial configuration?
**Select all correct statements.**

* a. It must preserve the decisions imposed in the partial configuration.
* b. It can silently ignore an inconvenient user selection.
* c. It always exists for any set of user selections.
* d. It necessarily maximizes feature count.
* e. It must satisfy the model constraints.

---

**Question 2**
Noté sur 1,00

Which statement distinguishes an optimal configuration from an arbitrary valid configuration?
**Select the single correct statement.**

* a. It ignores all user choices to reduce cost.
* b. It is simply the first result of solve.
* c. It includes every optional feature.
* d. It is guaranteed best under every stakeholder criterion.
* e. It achieves the best value of a defined objective among feasible configurations.

---

**Question 3**
Noté sur 2,00

Let S be the configurations satisfying a model. New hard choices P are added without altering the model. Which statements hold?
**Select all correct statements.**

* a. The feasible set may become empty.
* b. Adding hard choices can create a solution outside S.
* c. Every added choice must reduce the solution count strictly.
* d. The feasible configurations become a subset of S.
* e. The number of solutions must increase.

---

**Question 4**
Noté sur 2,00

TotCost is correctly defined. Which statements hold?
**Select all correct statements.**

* a. A minimum-cost configuration necessarily has no features.
* b. Minimizing TotCost seeks a least-cost feasible configuration.
* c. Maximizing TotCost means maximizing the number of features.
* d. Changing the direction changes which constraints define feasibility.
* e. Maximizing TotCost seeks a greatest-cost feasible configuration.

---

**Question 5**
Noté sur 2,00

A customer requires Security=1. The team also wants minimum TotCost. Which statements hold?
**Select all correct statements.**

* a. Minimization automatically enforces every unrecorded customer preference.
* b. The optimizer may drop Security solely to lower cost while still satisfying the request.
* c. The cheapest unconstrained product may differ from the cheapest product satisfying this need.
* d. The objective eliminates the need for a variability model.
* e. Security=1 should remain a feasibility constraint while cost is minimized.

---

**Question 6**
Noté sur 2,00

Two different feasible configurations both achieve the proven minimum cost 20. Which statements hold?
**Select all correct statements.**

* a. A single returned optimum does not imply that it is unique.
* b. One must violate a constraint because their costs match.
* c. The solver must pick the one preferred by all stakeholders.
* d. The optimization problem is unsatisfiable.
* e. Both are optimal for that objective.

---

**Question 7**
Noté sur 1,00

Which steps incorporate Tabbing's cost of 5 into the tutorial's optimization?
**Select all correct statements.**

* a. Change operation from optimize to sat to add the charge.
* b. Add an Integer Cost attribute to Tabbing and set it to 5.
* c. Only write 5 in the project name.
* d. Add Tabbing×Tabbing::Cost to the TotCost expression.
* e. Remove the Tabbing feature so its real cost disappears.

---

**Question 8**
Noté sur 1,00

For the November 2024 version in Tutorial 5, what precaution is documented before the next optimization after attributes have been configured?
**Select the single correct statement.**

* a. Reload the model and reinsert the additional constraints.
* b. Only clear the Results history; that resets every attribute.
* c. Delete the objective permanently.
* d. Assume Reset model configuration state resets all attributes.
* e. Rename every feature to remove previous values.

---

**Question 9**
Noté sur 2,00

The complete products are {R}, {R,A}, {R,B}, {R,A,B}. The user deselects A. How many completions remain?
**Select the single correct statement.**

* a. Two.
* b. Four.
* c. One.
* d. Three.
* e. Zero.

---

**Question 10**
Noté sur 2,00

An nsolve request for ten configurations terminates normally after exhausting the search and returns nine distinct full assignments. Which statements hold?
**Select all correct statements.**

* a. The ninth solution must have the lowest cost.
* b. Exactly nine full assignments satisfy the current model and choices.
* c. Ten solutions exist because ten were requested.
* d. Nine is necessarily the count before any partial choices were imposed.
* e. Requesting ten did not force the system to invent a tenth.

---

**Question 11**
Noté sur 2,00

R=1; A and B are optional children; A requires B. The user selects A. Which statements hold?
**Select all correct statements.**

* a. Every completion selects B.
* b. The solver can omit A and still preserve the request.
* c. The selection R=1,A=1,B=1 is a valid completion under these rules.
* d. B=0 is a valid completion.
* e. Selecting A makes R absent.

---

**Question 12**
Noté sur 2,00

Only two products are feasible: P selects one feature costing 100; Q selects three features each costing 10. Which statements hold?
**Select all correct statements.**

* a. Minimizing cost selects P.
* b. Both objectives must select the same product.
* c. Maximizing the number of distinct selected features selects Q.
* d. P has three selected features because its cost has three digits.
* e. Maximizing total cost selects P.
