**Question 1**
Noté sur 1,00

What is a partial configuration in the kit?
*Select the single correct statement.*

* a. It is invalid until all optional features are selected.
* b. Every unmentioned feature is excluded.
* c. Exactly half the features are selected.
* d. Some features are selected or excluded and others remain undecided.
* e. It is malformed JSON.

---

**Question 2**
Noté sur 1,00

Which activity is application engineering in this workflow?
*Select the single correct statement.*

* a. Draw an unrelated logo.
* b. Derive one customer product from shared assets and a valid configuration.
* c. Define the entire domain’s market requirements.
* d. Build the reusable asset base before selecting any product.
* e. Copy source without recording variability decisions.

---

**Question 3**
Noté sur 2,00

In the displayed v2 model, Statistics is required and LocalStorage excluded. Which features must be selected?

**Reference model: TaskForge v2**

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
            JSONExport
constraints
    Kiosk => Memory
    Statistics => Filters
    JSONExport => LocalStorage

```

*Select all correct statements.*

* a. Memory.
* b. CSVExport.
* c. Filters.
* d. JSONExport.
* e. Kiosk.

---

**Question 4**
Noté sur 2,00

A customer requires JSONExport and Kiosk under the displayed model. Which statements hold?

**Reference model: TaskForge v2**

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
            JSONExport
constraints
    Kiosk => Memory
    Statistics => Filters
    JSONExport => LocalStorage

```

*Select all correct statements.*

* a. Adding Filters resolves the conflict.
* b. There is no valid completion.
* c. The solver should silently drop a requirement.
* d. Renaming the product resolves it.
* e. JSONExport forces LocalStorage and Kiosk forces Memory.

---

**Question 5**
Noté sur 2,00

Request A selects Statistics and leaves Filters undecided. Request B selects Statistics and excludes Filters. Under Statistics => Filters, which statements hold?
*Select all correct statements.*

* a. A requires excluding Statistics.
* b. A can be completed by selecting Filters.
* c. The solver should always overwrite explicit exclusions.
* d. A and B mean the same thing.
* e. B is inconsistent.

---

**Question 6**
Noté sur 2,00

A complete list selects LocalStorage but omits its parent Storage. How should the workshop respond?
*Select the single correct statement.*

* a. Silently delete LocalStorage.
* b. Treat Storage as undecided.
* c. Accept because parents are not features.
* d. Reject the list because a selected child requires its parent.
* e. Interpret LocalStorage as the product name.

---

**Question 7**
Noté sur 1,00

What practice is essential when using the FlamapyIDE configurator?
*Select the single correct statement.*

* a. Treat layout movement as a selection change.
* b. Assume the first graph screenshot reveals every dependency.
* c. Assume all visually unselected features are excluded in every mode.
* d. Distinguish selected, excluded and undecided states.
* e. Use product names without inspecting choices.

---

**Question 8**
Noté sur 1,00

ClearCompleted is added in FlamapyIDE but the workshop still has v2. What should happen before generation?
*Select the single correct statement.*

* a. Remove the new code and claim delivery.
* b. Transfer the updated UVL and revalidate the complete selection.
* c. Change only the title.
* d. Expect automatic cross-tab synchronisation.
* e. Disable validation.

---

**Question 9**
Noté sur 2,00

Which implementation matches ClearCompleted?
*Select the single correct statement.*

* a. Only call render().
* b. Remove DOM elements without updating tasks.
* c. Keep only tasks satisfying t.done.
* d. Empty the entire array.
* e. Keep tasks satisfying !t.done, then persist() and render().

---

**Question 10**
Noté sur 2,00

Kiosque source mentions CSVExport in a comment but has no exporter function, button or implementation. What is appropriate?
*Select the single correct statement.*

* a. The browser compiles the comment into an exporter.
* b. Ignore implementation and check only names.
* c. Any occurrence proves the full component exists.
* d. The comment alone does not prove component inclusion.
* e. The comment makes the configuration invalid.

---

**Question 11**
Noté sur 2,00

Which tests target meaningful distinct risks?
*Select all correct statements.*

* a. Commas and quotations in titles test CSV escaping.
* b. Wallpaper changes test the Statistics dependency.
* c. Reloading after creation tests persistence in that context.
* d. Counting indentation tests JSON output.
* e. Whitespace-only titles test input validation.

---

**Question 12**
Noté sur 2,00

Which evidence demonstrates product-line production?
*Select all correct statements.*

* a. Tests of selected behaviour and excluded components.
* b. Three functioning products linked to one template, model and configurations.
* c. A shared evolution followed by regeneration and regression checks.
* d. Three diverged files with no common asset base.
* e. Only a diagram with no generated application.