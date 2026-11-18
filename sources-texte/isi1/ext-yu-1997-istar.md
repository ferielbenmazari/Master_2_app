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

<!-- Extraits ajoutés le 2026-11-18 (demande de l'utilisatrice : le prof d'ISI1 a demandé d'étudier i*). Même PDF, texte brut pdftotext copié tel quel ; les noms d'éléments en police spéciale sont illisibles dans l'extraction (suites de symboles), les libellés des figures sont lisibles. -->

## 2. The i* modelling framework — intentional actor, SD and SR models (p. 2)

The i* modelling framework for earlyphase requirements engineering


The
framework  was developed for modelling and
reasoning about organizational environments and their information systems [39]. It consists of two main modelling
components. The Strategic Dependency (SD) model is used
to describe the dependency relationships among various actors in an organizational context. The Strategic Rationale
(SR) model is used to describe stakeholder interests and
concerns, and how they might be addressed by various
configurations of systems and environments. The framework builds on a knowledge representation approach to
information system development [27]. This
section offers

an overview of some of the features of , using primarily
a graphical representation. A more formal
presentation of

the framework appears in [39]. The framework has also
been applied to business process modelling and redesign
[41] and to software process modelling [38].


is that of the intentional acThe central concept in
tor [36]. Organizational actors are viewed as having intentional properties such as goals, beliefs, abilities, and
commitments. Actors depend on each other for goals to
be achieved, tasks to be performed, and resources to be
furnished. By depending on others, an actor may be able
to achieve goals that are difficult or impossible to achieve
on its own. On the other hand, an actor becomes vulnerable if the depended-on actors do not deliver. Actors are
strategic in the sense that they are concerned about opportunities and vulnerabilities, and seek rearrangements of their
environments that would better serve their interests. 

## 2.1 Strategic Dependency model — the “whys” (p. 2)
2.1 Modelling the embedding of systems in organizational environments – the Strategic Dependency model
Consider a computer-based meeting scheduler for supporting the setting up of meetings . The requirements
might state that for each meeting request, the meeting


The name i* refers to the notion of distributed intentionality which
underlies
the framework.

An early version of the framework was presented in [36].
The example used in this paper is a simplified version of the one
provided in [34].

For example, the requirements engineer, before proceeding to refine the initial requirements, might do well to inquire:



Why is it necessary to schedule meetings ahead of
time?



Why does the meeting initiator need to ask participants
for exclusion dates and preferred dates?



Why is a computer-based meeting scheduler desired?
And whose interests does it serve?



Is confirmation via the computer-based scheduler sufficient? If not, why not?
Are important participants treated differently? If so,
why?

Most requirements models are ill-equipped to help answer such questions. They tend to focus on the “what”
rather than the “why”. Having answers to these “why”
questions are important not only to help develop successful
systems in the first instance, but also to facilitate the development of cooperation with other systems (e.g., project
management systems and other team coordination “groupware” for which meeting information may be relevant), as
well as the ongoing evolution of these systems.
To provide a deeper level of understanding about how the
proposed meeting scheduler might be embedded in the organizational environment, the Strategic Dependency model
focuses on the intentional relationships among organizational actors. By noting the dependencies that actors have
on one another, one can obtain a better understanding of
the “whys”.
Consider first the organizational configuration before the
proposed system is introduced (Figure 1). The meeting initiator depends on meeting participants ! to attend meeting
" . If some participant does not attend the meeting, the
meeting initiator may fail to achieve some goal (not made

Meeting
Initiator

Attends
Meeting(p,m)

D
&

'
X

D

Proposed
Date(m)


## Figure 1 — SD model without computer-based scheduler (legend and labels, p. 3)

D
D

Depender Dependee

O

D

D

Resource Dependency

D

D

Task Dependency

D

D

Goal Dependency

D

D

Softgoal Dependency

Open (uncommitted)

D

D
Preferred
Dates(p)

D

LEGEND

D

Exclusion
Dates(p)

D

Many requirements engineering frameworks and techniques have been developed to help refine this kind of requirements statements to achieve better precision, completeness, and consistency. However, to develop systems
that will truly meet the real needs of an organization, one
often needs to have a deeper understanding of how the
system is embedded in the organizational environment.

%

D

D

scheduler should try to determine a meeting date and location so that most of the intended participants will participate effectively. The system would find dates and locations
that are as convenient as possible. The meeting initiator
would ask all potential participants for information about
their availability to meet during a date range, based on their
personal agendas. This includes an exclusion set – dates
on which a participant cannot attend the meeting, and a
preference set – dates preferred by the participant for the
meeting. The meeting scheduler comes up with a proposed
date. The date must not be one of the exclusion dates, and
should ideally belong to as many preference sets as possible. Participants would agree to a meeting date once an
acceptable date has been found.

Agreement
(m,p)
Attends
Meeting(ip,m)
Assured
(Attends
Meeting(ip,m))

$

(D

D

Meeting
Participant

#

ISA

Important
Participant

D

)X Critical

Figure 1: Strategic Dependency model for meeting
scheduling, without computer-based scheduler
explicit in the SD model), or at least not succeed to the
degree desired. This is the reason for wanting to schedule
the meeting in advance. To schedule meetings, the initiator

## 2.1 Dependency types (p. 3)
availability – in terms of a set of exclusion dates and preferred dates. (For simplicity, we do not separately consider
time of day or location.) To arrive at an agreeable date, participants depend on the initiator for date proposals. Once
proposed, the initiator depends on participants to indicate
whether they agree with the date. For important participants, the meeting initiator depends critically (marked with
an “X” in the graphical notation) on their attendance, and
thus also on their assurance that they will attend.
Dependency types are used to differentiate among the
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
meeting initiator delegates much of the work of meeting
scheduling to the meeting scheduler. The initiator no
longer needs to be bothered with collecting availability information from participants, or to obtain agreements about
proposed dates from them. The meeting scheduler also
determines what are the acceptable dates, given the avail-

Attends
Meeting(p,m)

Meeting

## Figure 2 — SD model with computer-based scheduler (legend and labels, p. 3)
Meeting
Scheduler

D

D
X

Enter
DateRange
(m)

F

Proposed
Date(m)

D

D
Attends
Meeting(ip,m)

D

Agreement
(m,p)

H
Assured
(Attends
Meeting(ip,m))

LEGEND



Enter
AvailDates
(m)

D
D

G

D

D

D

D
Meeting
Initiator

MeetingBe
Scheduled(m)

or impacted by different system-and-environment configurations – existing or proposed.

DD

D

D
I
D

D

Meeting
Participant

EISA
Important
Participant

Depender Dependee

J

O

D

D

Resource Dependency

D

D

Task Dependency

D

D

Goal Dependency

D

D

Softgoal Dependency

Open (uncommitted)

X

Critical

Figure 2: Strategic Dependency model for meeting

## 2.1 SD model with the scheduler — delegation, task dependency, opportunity and vulnerability (p. 3-4)
scheduling with computer-based scheduler
ability information. The meeting initiator does not care
how the scheduler does this, as longer as the acceptable
dates are found. This is reflected in the goal dependency of
3-,-/+K4.,5,L- MONP-/0 @Q,-0 from the initiator to the scheduler.
The scheduler expects the meeting initiator to enter the date
range by following a specific procedure. This is modelled
via a task dependency.
Note that it is still the meeting initiator who depends
on participants to attend the meeting. It is the meeting
initiator (not the meeting scheduler) who has a stake in
having participants attend the meeting. Assurance from
important participants that they will attend the meeting is
therefore not delegated to the scheduler, but retained as a
dependency from meeting initiator to important participant.
The SD model models the meeting scheduling process in
terms of intentional relationships among agents, instead of
the flow of entities among activities. This allows analysis
of opportunity and vulnerability. For example, the ability
of a computer-based meeting scheduler to achieve the goal
of 3-,-+4.,5,L>-,MONP-0,@Q-/0 represents an opportunity for the
meeting initiator not to have to achieve this goal himself.
On the other hand, the meeting initiator would become vulnerable to the failure of the meeting scheduler in achieving
this goal.


## 2.2 Strategic Rationale model (p. 4)
2.2 Modelling stakeholder interests and rationales – the Strategic Rationale model
The Strategic Dependency model provides one level of
abstraction for describing organizational environments and
their embedded information systems. It shows external
(but nevertheless intentional) relationships among actors,
while hiding the intentional constructs within each actor.
As illustrated in the preceding section, the SD model can
be useful in helping understand organizational and systems
configurations as they exist, or as proposed new configurations.
During early-phase RE, however, one would also like to
have more explicit representation and reasoning about actors’ interests, and how these interests might be addressed

In the framework, the Strategic Rationale model provides a more detailed level of modelling by looking “inside” actors to model internal intentional relationships. Intentional elements (goals, tasks, resources, and softgoals)
appear in the SR model not only as external dependencies,
but also as internal elements linked by means-ends relationships and task-decompositions (Figure 3). The SR model
in Figure 3 thus elaborates on the relationships between the
meeting initiator and meeting participant as depicted in the
SD model of Figure 1.
For example, for the meeting initiator, an internal goal
is that of 3>-,-/+4. 5,L-,MONP-/0,@Q-/0 . This goal can be met
(represented via a means-ends link) by scheduling meetings in a certain way, consisting of (represented via taskdecomposition links): obtaining availability dates from participants, finding a suitable date (and time) slot, proposing
a meeting date, and obtaining agreement from the participants.
These elements of the MNP-/0,@>Q,-/3-,-+4.,5 task are represented as subgoals, subtasks, or resources depending on
the type of freedom of choice as to how to accomplish them
(analogous to the SD model). Thus RK4.,0M/@K4+S/TQ -,M,Q,U/+ ,
being a subgoal, indicates that it can be achieved in different ways. On the other hand, V/T +S24.,* WS24QYXOS/+-O1 and
V/T,+S4.,*,5,=>-,- " -/. + refer to specific ways of accomplishing these tasks. Similarly, 3>-,-/+4. 5,L-,MONP-/0,@ Q,-/0 , being
represented as a goal, indicates that the meeting initiator
believes that there can be more than one way to achieve it
(to be discussed in section 2.4, Figure 4).
3-,-/+K4.,5,L- MONP-/0 @Q/-0 is itself an element of the
higher-level task of organizing a meeting. Other subgoals
under that task might include equipment be ordered, or that
reminders be sent (not shown). This task has two additional elements which specify that the organizing of meetings should be done quickly and not involve inordinate
amounts of effort. These qualitative criteria are modelled
as softgoals. These would be used to evaluate (and also
to help identify) alternative means for achieving ends. In
this example, we note that the existing way of scheduling
meetings
is viewed as contributing negatively towards the
Z
@4/N\[ and ]U^,_,`,`U=,+ softgoals.

On the side of the meeting participants, they are expected to do their part in arranging the meeting, and then
to attend the meeting. For the participant, arranging the
meeting consists primarily of arriving at an agreeable date.
This requires them to supply availability information to the
meeting initiator, and then to agree to the proposed dates.
Participants want selected meeting times to be convenient,
and want meeting arranging activities not to present too
many interruptions.
The SR model thus provides a way of modelling stakeholder interests, and how they might be met, and the stakeholders evaluation of various alternatives with respect to
their interests. Task-decomposition links provide a hierarchical description of intentional elements that make up a
routine. The means-ends links in the SR provides understanding about why an actor would engage in some tasks,

Meeting
Participant


## 2.2 Means-ends links and softgoals — evaluating alternatives (p. 4-5)
pursue a goal, need a resource, or want a softgoal. From the
softgoals, one can tell why one alternative may be chosen
over others. For example, availability information in the
form of exclusion sets and preferred sets are collected so
as to minimize the number of rounds and thus to minimize
interruption to participants.

2.3 Supporting analysis during early-phase RE
While requirements analysis traditionally aims to identify and eliminate incompleteness, inconsistencies, and ambiguities in requirements specifications, the emphasis in
early-phase RE is instead on helping stakeholders gain better understanding of the various possibilities for using information systems in their organization, and of the implications of different alternatives. The

## 2.3 Workability and viability (p. 5)
early-phase RE is instead on helping stakeholders gain better understanding of the various possibilities for using information systems in their organization, and of the implications of different alternatives. The
models offer a
number of levels of analysis, in terms of ability, workability, viability and believability. These are detailed in [39]
and briefly outlined here.
When a meeting initiator has a routine to organize a
meeting, we say that he is able to organize a meeting. An
actor who is able to organize one type of meeting (say, a
project group meeting) is not necessarily able to organize
another type of meeting (e.g., the annual general meeting
for the corporation). One needs to know what subtask,
subgoals, resources are required, and what softgoals are
pertinent.
Given a routine, one can analyze it for workability and
viability. Organizing meeting is workable if there is a
workable routine for doing so. To determine workability,
one needs to look at the workability of each element – for
example, that the meeting initiator can obtaining availability information from participants, can find agreeable dates,
and can obtain agreements from participants. If the work-

ability of an element cannot be judged primitively by the
actor, then it needs to be further reduced. If the subgoal
R4.,0>M/@4+STQ,-,M,Q U/+ is not primitively workable, it will
need to be elaborated in terms of a particular way for achieving it. For example, one possible means for achieving it
is to do an intersection of the availability information from
all participants. If this task is judged to be workable, then
the RK4.,0M/@K4+S/TQ -,M,Q,U/+ goal node would be workable. A
task can be workable by way of external dependencies on
other actors. The workability of V/T,+S4.,*,WS4QYXS/+>-O1 and
V/T,+S4.,*,5,=>-,- " -/. + are evaluated in terms of the workability of the commitment of meeting participants to provides
availability information and agreement. A more detailed
characterization of these concepts are given in [39].
A routine that is workable is not necessarily viable. Although computing intersection of time slots by hand is possible, it is slow and error-prone. Potentially good slots may
be missed. When softgoals are not satisficed, the routine
is not viable. Note that a routine which is not viable from
one actor’s perspective may be viable from another actor’s
perspective. For example, the existing way of arranging
for meetings may be viable for participants, if the resulting
meeting dates are convenient, and the meeting arrangement
efforts do not involve too much interruption of work.
The assessment of workability and viability is based on
many beliefs and assumptions. These can be provided as

## 2.4 New configurations — task dependency on participants (p. 6)
Using a meeting scheduler, however, requires partici-

pants to enter availability information in a particular format. This is modelled as a task dependency on participants
(an SD link). A routine that provides for this is sought in
the participant. Again, rules may be used to assist in this
search.
When new configurations are proposed, they may bring
in additional issues. The new alternatives may have associated softgoals. The discovery of these softgoals can
also be assisted with means-ends rules. For example, using computer-based meeting scheduling may be discovered to be negative in terms of medium richness and userfriendliness. These in turn have implications for the effort
involved for the participant, and the quality of the proposed
dates. These newly raised issues also need to be addressed.
Once new routines have been identified, they are analyzed
for workability and viability. Further routines are searched
for until workable and viable ones are found.

3

## 3. Early-phase needs — intentional dependencies, multi-lateral relationships (p. 7)
be given the responsibility to fill in the details and to realize
the system.
One consequence of the early/late phase distinction is
that intentionality is harder to extract and incorporate into
a model in the early phase than in the late phase. Stakeholder interests and concerns are 
typically not readily accessible. The approach adopted in
is to introduce the
notion of intentional dependencies to provide a level of abstraction that hides the internal intentional contents of an
actor. The Strategic Dependency model provides a useful
characterization of the relationships among actors that is at
an intentional level (as opposed to non-intentional activities
and flows), without requiring the modeller to know much
about the actors’ internal intentional dispositions. Only
when one needs to reason about alternative configurations
would one need to make explicit the goals and criteria for
such deliberations (in the Strategic Rationale model). Even
here, the model of internal intentionality is not assumed
to be complete. The model typically contains only those
concerns that are voiced by the stakeholders in order for
them to achieve the changes they desire.
Multi-lateral intentional relationships. In modelling
the embedding of a system in organizational environments,
it is necessary to describe dependencies that the system
has on its environment (human agents and possibly other

systems), as well as the latter’s dependencies on the system. When the system does not live up to the expectations
of agents in its environment, the latter may fail to achieve
certain goals. The reverse can also happen. During earlyphase RE, one needs to reason about opportunities and
vulnerabilities from both perspectives. Both the system
and its environment are usually open to redesign, within
limits. When opportunities or vulnerabilities are discovered, further changes can be introduced on either side to
take advantage of them or to mitigate against them. A
modelling framework for the early-phase thus needs to be
able to express multi-lateral intentional relationships and to
support reasoning about their consequences.

## Figure 3 — SR model before the computer-based scheduler (labels and legend, p. 4)
Meeting
Initiator

D

Attends
Meeting

bD

Attend
Meeting
Convenient
+ (Meeting,Date)

Organize
Meeting

Schedule
Meeting

Obtain
AvailDates
Find
Suitable
Slot

Obtain
Agreement

Merge
AvailDates

Exclusions
D Dates
cD

aD

Preferred
D
Dates

D

−

Arrange
Meeting

Quality
Low
(ProposedDate)
Effort
Agreeable
+
+
+
(Meeting,Date)

Low
Effort
−

Proposed
Date

bD

Find
Agreeable
Date

User
Friendly Min
−
Interruption
−

LEGEND
Goal
Task
Resource
Soft−Goal

D

MeetingBe
Scheduled

Quick

Participate
InMeeting

Agreement D

AgreeTo
Date

Task−Decompo−
sition link
Means−ends link

+
−

Contribution to
softgoals
Actor
Actor Boundary

Figure 3: A Strategic Rationale model for meeting scheduling, before considering computer-based meeting scheduler
