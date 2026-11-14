**Learning Objectives**

At the end of the course, the student knows how to do four things, each of which can be observed in the exam

> Situate: explain why the company needs a decision-making system, state its guiding principles (reliable, predictable, available, etc.) and explain why an analytical system imposes different design choices than a transactional system (denormalization, for example).
> 
> 

> Architect: Diagram a decision-making architecture, justify the role of each layer, relate guiding principles to architecture choices, and justify a simpler variant.
> 
> 

> Model: from one or more interviews, produce a dimensional model and make the link between the elements shared from one interview to the next.
> 
> 

> Evolve: when faced with a change (new data source, modified interface contract, new dimension, new indicator definition), measure the impact on the model and on the architecture, and choose the option that maximize preservation of the existing one.
> 
> 

---

**Course framework**

This course teaches you how to design a decision-making system at the Analysis & Design level.

> Format : 5 days spread over 3 months, i.e. 10 half-days. Work between sessions is necessary to assimilate the material.
> 
> 

> Audience: Intern students who know infrastructure and transactional DBMS (OLTP), not analytics (OLAP).
> 
> 

> Distribution: 1 half-day of context, 3 of architecture, 6 of dimensional modeling.
> 
>

---

**Class organization**

> Class hours :
> 
> 
> * Morning : 9:30 am - 12:30 pm
> 
> 
> * Afternoon : 2 pm - 5 pm.
> 
> 
> 
> 

> Calendar
> 
> 

| October 2026 | December 2026 | January 2027 |
| --- | --- | --- |
| 7th, morning | 9th, morning | 19th, morning |
| 8th, afternoon | 10th, morning | 20th, morning |
| 13th, morning | 16th, morning |  |
| 14th, afternoon | 17th, morning |  |

> Final exam date : February 22nd, 10am / Duration : 1h30
> 
>

---

**Séquencement des 10 demi-journées**

> Architecture precedes modelling; sessions 5 to 10 alternate concepts and exercises on paper and on the board, each taking up the notions of the previous ones.
> 
> 

| Séance | Contenu |
| --- | --- |
| 1 | Contexte d'entreprise, définitions, principes directeurs, OLTP contre OLAP |
| 2 à 4 | Architecture : couches, rôle de chacune, lien avec les principes, variante simplifiée |
| 5 | Grain, faits, dimensions : première étoile à partir d'une interview |
| 6 | Dimensions conformes, bus matrix, plusieurs interviews |
| 7 | SCD de type 2 et conservation de l'historique |
| 8 | Faits sans mesure (couverture, événements) |
| 9 | Évolution : interview « année +1 », nouvelle source, indicateur cousin, impact sur l'architecture. Annoncer ici le critère de notation « les rapports de l'année 1 gardent leur sens » |
| 10 | Cas complet au format d'examen, correction collective |

---

**Definition - Business Intelligence (BI)**

> "Business intelligence (BI) consists of strategies, methodologies, and technologies used by enterprises for data analysis and management of business information to inform business strategies and business operations."
> 
> 

| WHAT | WHY | HOW |
| --- | --- | --- |
| A set of strategies, methodologies, and technologies combined to analyze data and manage business information across the enterprise. | Inform strategic (long-term) and operational (day-to-day) decisions based on facts rather than intuition. | Define indicators (strategy), structure the analysis process (methodology), and equip it (technology). |

---

**The external environment**
Pressures on the company

**Enterprise**

* **Competitors**: prices, new entrants, substitutes


* **Market & economy**: demand, inflation, rates, raw materials


* **Customers**: service expectations, omnichannel, bargaining


* **State & regulation**: tax, GDPR, CSRD, industry standards


* **Suppliers & partners**: dependency, shortages, costs


* **Shareholders & lenders**: profitability, published results


* **Other**: technology, opinion, climate, geopolitics, talent



**IMPACT FOR BI**

> Faster decision process
> 
> 

> External data sources adoption
> 
> 

> Be accountable for the numbers to external actors
> 
> 

| External pressure makes managing by the numbers a necessity.

Reading grid: Porter's five forces + PESTEL

---
**The internal environment**
Pressures on departments

| Operations | Management control | Executive management | Support functions | Customer-facing |
| --- | --- | --- | --- | --- |
| Productivity, costs, quality, lead times

 | Budgets, forecasts, variances, closing

 | Strategy alignment, resource arbitration

 | Cost justification, service levels, compliance

 | Revenue targets, conversion, churn

 |
| *"Why did on-time delivery drop?"*

 | *"Where does the budget gap come from?"*

 | *"Are we on track with the plan?"*

 | *"What does absenteeism cost us?"*

 | *"Which deals will close this quarter?"*

 |

Customer-facing: revenue & growth, external view ↔ Support: cost, service & compliance
Sales wants discounts, finance defends margin
Operations wants stable plans, sales wants flexibility

**ACROSS ALL DEPARTMENTS**

* Goodhart's law


* Divergent definitions


* Reporting burden


* Interdependence



| BI provides a shared, consistent view without denying each department its specific needs.

---

**Balancing viewpoints**
The Balanced Scorecard (Kaplan & Norton, 1992)

|  |  |  |
| --- | --- | --- |
| Financial | How do shareholders see us? | Finance, management control

 |
| Customer | How do customers see us? | Customer-facing functions

 |
| Internal processes | What must we excel at? | Operations

 |
| Learning & growth | Can we keep improving? | Support functions (HR, IT)

 |

Driver ⬆️ Outcome

| Strategy defines what to measure; BI feeds balanced indicators consistently.

---

**Operating and managing are two distinct needs**

|  | OPERATIONS | MANAGEMENT |
| --- | --- | --- |
|  | Run the processes *e.g. ordering, invoicing,* | Understand, decide, track the effect of decisions |
| **Object** | The individual transaction | Aggregates: totals, rates, trends |
| **Time** | The current state<br>

<br>*e.g. stock at time T* | History<br>

<br>*e.g. compare with prior year, follow a trend* |
| **Scope** | One application & process pair | Cross-functional: combine multiple processes |
| **Questions / Queries** | Known in advance, repetitive | Unpredictable: today's question did not exist yesterday |
| **Usage** | Reads / writes, real time | Mostly reads |
| **Definitions** | Specific to each application | Shared across processes and stable over time |
| *Retail example* | *Ringing up a customer, shipping a parcel* | *A regional director compares sales per store with the prior year, like-for-like.* |

Note: "operational steering" is still steering.
A team lead tracking today's service rate is management, even at the operational level.
Here, the strategic / tactical / operational levels describe horizon, frequency and level of detail.

> Pain points arise when a company steers with systems built to operate.
> 
>

---

**The five pain points**
What users struggle with (2/2)

| 4 | 5 | COMMON THREAD |
| --- | --- | --- |
| Guided to what matters

 | Consistent results

 |  |
| Drowning in data: be alerted, not just look

 | Published figures must not shift

 | **Trust**

 |
| *"I need to be directed to what's important; the rest can wait."*

 | *"I want to stop arguing about who has the right figures. I need consistency!"*

 |  |
| Example: Banking / insurance

 | Example: HR / support

 | *Which one costs your company the most?*

 |


---

**Where the data lives**
Family 2: the layers between sources and users

| Source systems | Staging area | Data warehouse | Data marts |
| --- | --- | --- | --- |
| Business apps and files where data is created, each with its own view

 | Technical copy of source data before cleaning. No user access

 | Integrates, historizes and unifies sources with shared definitions<br>

<br>→ Single version of the truth

 | Subsets per domain (sales, finance, HR) tailored to its questions

 |

**Access rights & row-level security**
Rights by role: a sales rep sees sales, not salaries
Row-level security: each regional manager sees only their region

**Data governance & data owner**
Governance decides how data is defined, controlled and shared
Data owner: a business lead per domain, accountable for definitions and quality

Design of these layers: architecture session.

---

**What we measure**
Family 1: indicators and how they are sliced

**Indicator**
A figure describing a situation or a performance. Needs a definition, a calculation rule and a source.
*e.g. revenue, absenteeism rate*

**KPI**
An indicator tied to an objective and a target. Every KPI is an indicator, not the reverse.
*e.g. on-time delivery, target 95%*

**Measure**
The numeric value that gets aggregated: summed, averaged, counted.
*e.g. sales amount, quantity*

**Analysis axis (dimension)**
The angle used to view and filter a measure: time, product, customer, site.
*e.g. revenue by month and region*

**Granularity**
The level of detail stored or displayed. You cannot drill below the stored grain.
*e.g. transaction, day, month*

**Leading vs lagging**
Lagging records a result after the fact; leading signals it in advance.
*e.g. order intake vs quarterly margin*

---

**How users consume it**
Family 3: decision levels and formats (1/2)

DECISION LEVELS

| Operational | Tactical | Strategic |
| --- | --- | --- |
| Daily · detailed · short horizon

 | Monthly or quarterly · aggregated · medium horizon

 | Yearly · highly consolidated · long horizon

 |

**REPORTING VS ANALYSIS**

**Reporting**
Recurring, standardized answers to known questions. Fixed format, scheduled.

**Analysis**
Open exploration of new questions by combining axes and filters (pain point 3).

**REPORT VS DASHBOARD**

**Report**
Detailed and complete.

**Dashboard**
Synthetic, visual view of a few KPIs, read at a glance.

---

**How users consume it**
Family 3: navigating and timing (2/2)

**Drill-down**
From an aggregated figure to the detail behind it: region → stores → transactions. Drill-up is the reverse.

**Alert**
Automatic notification when an indicator crosses a threshold or leaves its trend. Being alerted, not just looking (pain point 4).

**Data freshness (latency)**
Delay between an event in a source and its availability in BI. A monthly closing does not need real time; a fraud alert does.

**YOU WILL HEAR THESE LATER**
Single version of the truth · master data (reference data) · data quality: architecture and governance sessions

---

**The analytics maturity ladder**
Four levels, four questions (Gartner)

Each level adds value and difficulty

| 1. DESCRIPTIVE | 2. DIAGNOSTIC | 3. PREDICTIVE | 4. PRESCRIPTIVE |
| --- | --- | --- | --- |
| **What happened?**

 | **Why did it happen?**

 | **What will happen?**

 | **What should we do?**

 |
| Reports, dashboards, KPIs: last month's sales

 | Drill-down, variance analysis: why margin fell

 | Models, machine learning: demand, churn risk

 | Optimization, simulation: replenishment, next best offer

 |

**VOCABULARY TRAP**
The levels describe the type of question, not the tool. A dashboard that drills down to causes is diagnostic; a spreadsheet forecast is still predictive.


---

**Agenda**

1. Decision-making under uncertainty: the raison d'être of BI


2. The business context and users' pain points


3. Definitions and vocabulary


4. From user needs to BI characteristics


5. The three guiding principles


6. Workshop: from user request to expected guarantees


7. Positioning Analysis & Design in a BI project


8. A living discipline: BI in the data ecosystem


---

**The five pain points**
What users struggle with

| 1 | Scattered data<br>

<br>Retail / multichannel distribution | Silos, local files, no overall view | *"There is a lot of data and plenty of possible sources: how do I access them?"* |
| --- | --- | --- | --- |
| 2 | Hard to find, query, compare<br>

<br>Finance / management control | Divergent figures → loss of trust | *"How can I trust them?"* |
| 3 | New questions, fast<br>

<br>Manufacturing / production | Weeks to answer vs. days to decide | *"I need to be able to find answers easily, in all their variety."* |
| 4 | Guided to what matters<br>

<br>Banking / insurance | Drowning in data: be alerted, not just look | *"I need to be directed to what's important; the rest can wait."* |
| 5 | Consistent results<br>

<br>HR / support function | Published figures must not shift | *"I want to stop arguing about who has the right figures. I need consistency!"* |

COMMON THREAD **Trust** *Which one costs your company the most?*

---

**From symptom to characteristic**
The reasoning, in four steps

| 1 | 2 | 3 | 4 |
| --- | --- | --- | --- |
| **User interview**<br>

<br>A symptom, not a solution

 | **Need**<br>

<br>What the user is really missing

 | **Characteristic**<br>

<br>What BI must guarantee

 | **BI component**<br>

<br>What makes it concrete

 |
| *"How can I trust them?"*

 | Documented, comparable figures

 | Documented, comparable indicators

 | Shared definitions, data dictionary, traceability

 |

*Example: pain point 2*

| A BI solution is designed **backwards**: from the user's frustration to the characteristic, then to the component.

---


**Five pain points, five characteristics**
From frustration to design

| Pain point & user quote | Expected characteristic | How BI delivers it | Principle |
| --- | --- | --- | --- |
| 1. Data scattered across sources<br>

<br>*"How do I access them?"*

 | Centralized,<br>

<br>unified data

 | Source integration, staging area, data warehouse, master data

 | Available and reliable

 |
| 2. Hard to find and compare, hence loss of trust<br>

<br>*"How can I trust them?"*

 | Documented,<br>

<br>comparable indicators

 | Shared definitions, data dictionary, traceability of each figure to its source

 | Reliable

 |
| 3. Answering a new question quickly<br>

<br>*"Find answers easily, in all their variety"*

 | Fast,<br>

<br>flexible access to data

 | Measures x analysis axes model, self-service, drill-down

 | Available

 |
| 4. Being guided to what matters<br>

<br>*"Direct me to what's important"*

 | Highlighting the situations that need attention

 | KPIs with targets, exception dashboards, alerts, then predictive scores

 | Reliable and available

 |
| 5. Need for consistent results<br>

<br>*"I need consistency!"*

 | Results that are stable over time

 | Historization, versioned calculation rules, controlled refresh

 | Predictable

 |

> TENSION TO NAME: PAIN POINT 3 vs PAIN POINT 5
> Explore freely and consistent results pull in opposite directions: unrestricted self-service multiplies definitions.
> Answer: a governed model with shared definitions (semantic layer, section 8).
> 
>

---

**The maturity ladder as a bridge**
From user needs to BI capabilities

| Level | Question | Pain points addressed | Departments pulling |
| --- | --- | --- | --- |
| **Prescriptive**

 | What should we do?

 | 4: directed to the right action

 | Executive mgmt, operations

 |
| **Predictive**

 | What will happen?

 | 4: anticipating what needs attention

 | Operations, customer-facing

 |
| **Diagnostic**

 | Why did it happen?

 | 3: exploring causes freely

 | Management control, operations

 |
| **Descriptive**

 | What happened?

 | 1, 2, 5 and threshold alerts (4)

 | Mgmt control, support, executive reporting

 |

| No skipping levels | Value vs difficulty |
| --- | --- |
| Each level depends on the one below. A model trained on scattered data gives confident but wrong answers.

 | Each step up brings more value, but needs more data, skills and organizational change.

 |

| BI first secures the descriptive foundation; higher levels are only as good as that foundation.

---

EXERCICE

**From five characteristics to three principles**
Reliable, predictable, available

1. Centralized, unified data


2. Documented, comparable indicators


3. Fast, flexible access


4. Highlighting what needs attention


5. Results stable over time



**RELIABLE**
Counter-example: Two different figures for the same indicator

**PREDICTABLE**
Counter-example: A result that changes from one day to the next

**AVAILABLE**
Counter-example: A dashboard unavailable on a Monday morning

*Illustrated in section 5*

| Five characteristics, three principles that every BI component must guarantee.

---
**Workshop**
Analysis grid: one row per frustration

| User quote | Pain point (1 to 5) or hidden requirement (security, adaptability...)

 | Expected characteristic

 | Principle / requirement (Kimball / Ross)

 | Maturity level

 |
| --- | --- | --- | --- | --- |
| A. Retail

 |  |  |  |  |
| B. Hospital

 |  |  |  |  |
| C. Logistics

 |  |  |  |  |
| D. Industrial group

 |  |  |  |  |

---
LINKED TO THE TAB BELOW (EXERCISSE FULLFILL THE TAB ACCORDIND TEXT AND LESSON)
**Extract A: Retail**
Regional sales manager

EXTRACT
**A**

*"Every Monday I ask three people for the weekend's sales: the store system, the e-commerce team and finance. I get three numbers. By the time we agree, it's Wednesday and the promotion is over.*

*And last month, the figure I presented to the board was changed afterwards without anyone telling me."*

---
$**Extract B: Hospital**
Head of nursing

EXTRACT
**B**

*"I have dozens of reports on bed occupancy, staff hours, absences. I don't have time to read them.*

*What I need is to know, before 8 a.m., which units will be short-staffed tonight. Today I find out when a nurse calls me."*

---

**Extract B: Hospital**
Head of nursing

EXTRACT
**B**

*"I have dozens of reports on bed occupancy, staff hours, absences. I don't have time to read them.*

*What I need is to know, before 8 a.m., which units will be short-staffed tonight. Today I find out when a nurse calls me."*

---

**Extract C: Logistics**
Operations director

EXTRACT
**C**

*"Our customer asked yesterday why deliveries to the south were late in March. Simple question, but IT told me it would take three weeks to build the report.*

*And I'm not sure the delivery data in the warehouse system matches the carriers' data anyway."*


