<!-- Source externe (hors supports du cours ISI1), ajoutée le 2026-11-13 pour les notions d'annale absentes des supports (docs/06 §9.6).
Référence : A. van Lamsweerde, « Goal-Oriented Requirements Engineering: A Guided Tour », Proc. 5th IEEE International Symposium on Requirements Engineering (RE'01), 2001, p. 249-262, DOI 10.1109/ISRE.2001.948567.
URL : https://webperso.info.ucl.ac.be/~avl/files/RE01.pdf (page de l'auteur) — consulté le 2026-11-13. Extraits copiés tels quels (pdftotext). -->

# van Lamsweerde (2001) — extraits

## 2. What are goals?
What are goals?
A goal is an objective the system under consideration should
achieve. Goal formulations thus refer to intended properties
to be ensured; they are optative statements as opposed to
indicative ones, and bounded by the subject matter [Jac95,
Zav97a].
Goals may be formulated at different levels of abstraction,
ranging from high-level, strategic concerns (such as “serve
more passengers” for a train transportation system or “provide ubiquitous cash service” for an ATM network system)
to low-level, technical concerns (such as “acceleration command delivered on time” for a train transportation system or
“card kept after 3 wrong password entries” for an ATM system).
Goals also cover different types of concerns: functional concerns associated with the services to be provided, and nonfunctional concerns associated with quality of service --such
as safety, security, accuracy, performance, and so forth.

## 2. Goals and agents
[Fea87, Yue87, Fic92]; henceforth we will call them agents.
Unlike requirements, a goal may in general require the cooperation of a hybrid combination of multiple agents to achieve
it [Dar93]. In a train transportation system, for example, the
high-level goal of safe transportation will typically require
the cooperation of on board train controllers, the train tracking system, station computers, the communication infrastructure, passengers, and so forth. In an ATM system, the
goal of providing cash to eligible users will require the cooperation of the ATM software, sensors/actuators, the customer, etc. One of the important outcomes of the RE process
is the decision on what parts of the system will be automated
and what parts will not. A goal under responsibility of a single agent in the software-to-be becomes a requirement
whereas a goal under responsibility of a single agent in the
environment of the software-to-be becomes an assumption
[Lam98b, Lam98c]. Unlike requirements, assumptions cannot be enforced by the software-to-be; they will hopefully be
satisfied thanks to organizational norms and regulations,
physical laws, etc.
Why are goals needed?
There are many reasons why goals are so important in the
RE process.
• Achieving requirements completeness is a major RE concern.. Goals provide a precise criterion for sufficient completeness of a requirements specification; the specification
is complete with respect to a set of goals if all the goals
can be proved to be achieved from the specification and
the properties known about the domain considered
[Yue87].

## Soft goals
means the case as it should hopefully be clear now from the
discussion above.

Another distinction often made in the literature is between
soft goals, whose satisfaction cannot be established in a
clear-cut sense [Myl92], and (hard) goals whose satisfaction
can be established through verification techniques [Dar93,
Dar96]. Soft goals are especially useful for comparing alternative goal refinements and chosing one that contributes the
“best” to them, see below.
Another classification axis is based on types of temporal
behaviour prescribed by the goal. [Dar93]. Achieve (resp.

## 4. Goal refinement links (AND/OR)
Intelligence [Nil71], AND/OR graphs may be used to capture goal refinement links [Dar91, Dar93]. AND-refinement
links relate a goal to a set of subgoals (called refinement);
this means that satisfying all subgoals in the refinement is
sufficient for satisfying the parent goal. OR-refinement links
relate a goal to an alternative set of refinements; this means
that satisfying one of the refinements is sufficient for satisfying the parent goal. In this framework, a conflict link
between two goals is introduced when the satisfaction of
one of them may prevent the other from being satisfied.
Those link types are used to capture alternative goal refinements and potential conflicts, and to prove the correctness of
goal refinements (see Section 5).
Weaker versions of those link types have been introduced to
relate soft goals [Rob89, Myl92, Chu00] as the latter can
rarely be said to be satisfied in a clear-cut sense. Instead of
goal satisfaction, goal satisficing is introduced to express
that subgoals are expected to achieve the parent goal within
acceptable limits, rather than absolutely. A subgoal is then
said to contribute partially to the parent goal, regardless of
other subgoals; it may contribute positively or negatively.
The semantic rules are now as follows. If a goal is ANDdecomposed into subgoals and all subgoals are satisficed,
then the parent goal is satisficeable; but if a subgoal is denied
then the parent goal is deniable. If a goal contributes negatively to another goal and the former is satisficed, then the
latter is deniable. These rules are used for qualitative reasoning about goal satisficing (see Section 5).
Beside inter-goal links, goals are in general also linked to
other elements of requirements models. KAOS introduces
AND/OR operationalization links to relate goals to the operations which ensure them through corresponding required
pre-, post-, and trigger conditions [Lam98c, Lam00c] (the
older notion of operationalization [Dar91, Dar93] was
revised and simplified from practical experience). Others
have used similar links between goals and operations, e.g.,
