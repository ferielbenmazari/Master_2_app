<!-- Source externe (hors supports du cours ISI1), ajoutée le 2026-11-13 (docs/06 §9.6).
Référence : E. S. K. Yu, « Towards Modelling and Reasoning Support for Early-Phase Requirements Engineering », Proc. 3rd IEEE International Symposium on Requirements Engineering (RE'97), 1997, p. 226-235.
URL : https://ftp.cs.toronto.edu/pub/eric/RE97.pdf (page de l'auteur) — consulté le 2026-11-13. Extraits copiés tels quels (pdftotext). -->

# Yu (1997) — extraits sur le framework i*

## Abstract
Towards Modelling and Reasoning Support for
Early-Phase Requirements Engineering
Eric S. K. Yu
Faculty of Information Studies, University of Toronto
Toronto, Ontario, Canada M5S 3G6
  
Abstract
Requirements are usually understood as stating what
a system is supposed to do, as opposed to how it should
do it. However, understanding the organizational context and rationales (the “Whys”) that lead up to systems
requirements can be just as important for the ongoing success of the system. Requirements modelling techniques
can be used to help deal with the knowledge and reasoning needed in this earlier phase of requirements engineering. However, most existing requirements techniques are
intended more for the later phase of requirements engineering, which focuses on completeness, consistency, and
automated verification of requirements. In contrast, the
early phase aims to model and analyze stakeholder interests and how they might be addressed, or compromised, by
various system-and-environment alternatives. This paper
argues, therefore, that a different kind of modelling and
reasoning 
support is needed for the early phase. An outframework is given as an example of a step
line of the
in this direction. Meeting scheduling is used as a domain
example.
1
would be adequately specified and constrained, often in a
contractual setting.
Considerably less attention has been given to supporting the activities that precede the formulation of the initial
requirements. These “early-phase” requirements engineering activities include those that consider how the intended
system would meet organizational goals, why the system is
needed, what alternatives might exist, what the implications
of the alternatives are for various stakeholders, and how the

## 2.1 Strategic Dependency model — softgoal dependency
kinds of relationships between depender and dependee, involving different types of freedom and constraint. The
meeting initiator’s dependency on participant’s attendance
at the meeting (*,+,+-/. 0213-,-+4.,5768!:9 "<; ) is a goal dependency. It is up to the participant how to attain that goal. An
agreement on a proposed date *,5,=>-,- " -/. +76 " 9?! ; is modelled as a resource dependency. This means that the participant is expected only to give an agreement. If there is
no agreement, it is the initiator who has to find other dates
(do problem solving). For an important participant, the
initiator critically depends on that participant’s presence.
The initiator wants the latter’s attendance to be assured
(*21 1@,=-/0BA*,+,+-.,0213 -,-/+4.,5768!:9 "<;C ). This is modelled
as a softgoal dependency. It is up to the depender to decide
what measures are enough for him to be assured, e.g., a telephone confirmation. These types of relationships cannot be
expressed or distinguished in non-intentional models that
are used in most existing requirements modelling frameworks.
Figure 2 shows an SD model of the meeting scheduling setting with a computer-based meeting scheduler. The

## Softgoals and satisficing
reasoning needed.

One approach is to introduce weaker constructs, such
as softgoals, which requires judgemental inputs from time
to time in the reasoning process, but which can be structured and managed nonetheless within the overall knowledge base [7] [39]. The notion of softgoal draws on the
concept of satisficing [33], which refers to finding solutions that are “good enough”.
Incorporating intentionality. One of the key needs in
