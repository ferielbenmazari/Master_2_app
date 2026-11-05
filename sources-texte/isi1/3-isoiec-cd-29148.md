                                       ISO/IEC JTC1/SC7
                                       Software and Systems Engineering
                                       Secretariat: CANADA (SCC)




                                                                      ISO/IEC JTC1/SC7 N4447
                                                                                              2009-08-05



Document Type          Combined CD Registration and CD Ballot
                       Combined CD Registration and CD Ballot, WD 29148, Software
Title
                       and systems engineering — Life cycle processes — Requirements
                       engineering
Source                 WG27

Project                29148

Status                 WD

References             N4154, N4446, Resolution 1137

Action ID              ACT

Due Date               2009-11-05

Start Date             2009-08-05

Distribution           SC7 AG

Medium                 PDF

No. of Pages           80

Note                         Please vote using the ISO Electronic Balloting Facilities
                                                 (Resolution 937)




                             Address reply to: ISO/IEC JTC1/SC7 Secretariat
               École de technologie supérieure – Departement of Software and IT Engineering
                       1100 Notre Dame Ouest, Montréal, Québec Canada H3C 1K3
                                          secretariat@jtc1-sc7.org

                                            www.jtc1-sc7.org
© ISO/IEC 2009 – All rights reserved




                                                                 ISO/IEC TC JTC 1/SC 7 N            XXXX
                                                                                                Date: 2009-06-20


                                                                                            ISO/IEC CD 29148

                                                                          ISO/IEC TC JTC 1/SC 7/WG 7 N1242

                                                                                                 Secretariat: SCC




Software and systems engineering — Life cycle processes —
Requirements engineering
Élément introductif — Élément central — Élément complémentaire




                                                     Warning

This document is not an ISO International Standard. It is distributed for review and comment. It is subject to
change without notice and may not be referred to as an International Standard.

Recipients of this draft are invited to submit, with their comments, notification of any relevant patent rights of
which they are aware and to provide supporting documentation.




Document type: International Standard
Document subtype:
Document stage: (30) Committee
Document language: E

STD Version 2.1c2
ISO/IEC CD 29148




                                               Copyright notice
     This ISO document is a working draft or committee draft and is copyright-protected by ISO. While the
     reproduction of working drafts or committee drafts in any form for use by participants in the ISO standards
     development process is permitted without prior permission from ISO, neither this document nor any extract
     from it may be reproduced, stored or transmitted in any form for any other purpose without prior written
     permission from ISO.

     Requests for permission to reproduce this document for the purpose of selling it should be addressed as
     shown below or to ISO's member body in the country of the requester:
     [Indicate the full address, telephone number, fax number, telex number, and electronic mail address, as
     appropriate, of the Copyright Manger of the ISO member body responsible for the secretariat of the TC or
     SC within the framework of which the working document has been prepared.]

     Reproduction for sales purposes may be subject to royalty payments or a licensing agreement.

     Violators may be prosecuted.




ii                                                                                 © ISO/IEC 2009 – All rights reserved
                                                                                                                                         ISO/IEC CD 29148




Contents                                                                                                                                                         Page


Foreword ............................................................................................................................................................. v
Introduction ........................................................................................................................................................ vi
1           Scope ...................................................................................................................................................... 1
1.1         Purpose .................................................................................................................................................. 1
1.2         Field of application ................................................................................................................................ 1
2           Conformance ......................................................................................................................................... 1
2.1         Intended Usage ...................................................................................................................................... 1
2.2         Conformance to processes .................................................................................................................. 2
2.3         Conformance to information item content.......................................................................................... 2
2.4         Full conformance ................................................................................................................................... 2
3           Normative references ............................................................................................................................ 2
4           Terms and definitions ........................................................................................................................... 2
4.1         Definitions .............................................................................................................................................. 2
4.2         Symbols and abbreviations .................................................................................................................. 5
5           Concepts ................................................................................................................................................ 6
5.1         Introduction ............................................................................................................................................ 6
5.2         Requirements fundamentals ................................................................................................................ 6
5.2.1       Stakeholders .......................................................................................................................................... 6
5.2.2       Transformation of needs into requirements ....................................................................................... 6
5.2.3       Well-formed requirements .................................................................................................................... 7
5.2.4       Characteristics of individual requirements ........................................................................................ 8
5.2.5       Characteristics of a set of requirements............................................................................................. 8
5.2.6       Requirement language guidelines ....................................................................................................... 9
5.2.7       Requirements attributes ..................................................................................................................... 10
5.3         Practical considerations ..................................................................................................................... 11
5.3.1       Iteration and recursion of processes ................................................................................................ 11
5.3.2       Iteration and recursion in requirements engineering ...................................................................... 12
6           Processes ............................................................................................................................................. 13
6.1         Overview ............................................................................................................................................... 13
6.2         Stakeholder requirements definition process .................................................................................. 14
6.2.1       Purpose ................................................................................................................................................ 14
6.2.2       Outcomes ............................................................................................................................................. 14
6.2.3       Activities and tasks ............................................................................................................................. 14
6.3         Requirements analysis process ........................................................................................................ 20
6.3.1       Purpose ................................................................................................................................................ 20
6.3.2       Outcomes ............................................................................................................................................. 21
6.3.3       Activities and tasks ............................................................................................................................. 21
6.4         Requirements engineering activities in other technical processes ............................................... 25
6.4.1       Requirements in architectural design ............................................................................................... 25
6.4.2       Requirements in verification .............................................................................................................. 26
6.4.3       Requirements in validation................................................................................................................. 28
6.5         Requirements management ............................................................................................................... 28
6.5.1       Change management .......................................................................................................................... 29
6.5.2       Measuring requirements ..................................................................................................................... 29
7           Information items ................................................................................................................................ 30
7.1         Introduction .......................................................................................................................................... 30
7.2         General ................................................................................................................................................. 31
7.2.1       Stakeholder requirement specification (StRS) ................................................................................. 31



© ISO/IEC 2009 – All rights reserved                                                                                                                                   iii
ISO/IEC CD 29148



7.2.2       System requirements specification .................................................................................................. 31
7.2.3       Software requirements specification ................................................................................................ 33
7.3         Stakeholder requirements specification (StRS) document ............................................................ 33
7.3.1       Introduction (section 1 of the StRS) ................................................................................................. 34
7.3.2       Business management requirements (section 2 of the StRS) ....................................................... 34
7.3.3       Business operational requirements (section 3 of the StRS) .......................................................... 35
7.4         System requirements specification (SyRS) document ................................................................... 37
7.4.1       Introduction (section 1 of the SyRS)................................................................................................ 37
7.4.2       General system description (section 2 of the SyRS) ..................................................................... 38
7.4.3       System capabilities, conditions, and constraints (section 3 of the SyRS) .................................. 38
7.4.4       System interfaces (section 4 of the of the SyRS) ........................................................................... 40
7.5         Software requirements specification (SRS) document................................................................... 41
7.5.1       Introduction (section 1 of the SRS).................................................................................................. 41
7.5.2       Overall description (section 2 of the SRS) ...................................................................................... 42
7.5.3       Specific requirements (section 3 of the SRS) ................................................................................. 45
7.5.4       Supporting information ...................................................................................................................... 50
Annex A (informative) Operational Concept ................................................................................................ 51
A.1    Overview .............................................................................................................................................. 51
A.2    Operational concept document (OpsCon) document ..................................................................... 51
A.2.1 Scope (Section 1 of the OpsCon) ...................................................................................................... 51
A.2.2 Referenced documents (Section 2 of the OpsCon) ......................................................................... 52
A.2.3 Current system or situation (Section 3 of the OpsCon) ................................................................. 52
A.2.4 Justification for and nature of changes (Section 4 of the OpsCon) .............................................. 55
A.2.5 Concepts for the proposed system (Section 5 of the OpsCon) ..................................................... 56
A.2.6 Operational scenarios (Section 6 of the OpsCon) ........................................................................... 59
A.2.7 Summary of impacts (Section 7 of the OpsCon) ............................................................................. 59
A.2.8 Analysis of the proposed system (Section 8 of the OpsCon) ........................................................ 60
A.2.9 Notes (Section 9 on the OpsCon)...................................................................................................... 61
A.2.10 Appendices (Appendices of the OpsCon) ........................................................................................ 61
A.2.11 Glossary (Glossary of the OpsCon) .................................................................................................. 61
Annex B (Informative) Software Requirement Specification Templates .................................................. 62
B.1   Template of SRS Section 3 organized by mode: Version 1 ............................................................ 62
B.2   Template of SRS Section 3 organized by mode: Version 2 ............................................................ 62
B.3   Template of SRS Section 3 organized by user class ...................................................................... 63
B.4   Template of SRS Section 3 organized by object ............................................................................. 64
B.5   Template of SRS Section 3 organized by feature ............................................................................ 64
B.6   Template of SRS Section 3 organized by stimulus ......................................................................... 65
B.7   Template of SRS Section 3 organized by functional hierarchy ..................................................... 66
B.8   Template of SRS Section 3 showing multiple organizations ......................................................... 68
Annex C (Informative) Process Mapping from ISO/IEC 15288 and ISO/IEC 12207 .................................. 69
C.1   Stakeholder requirements definition process ................................................................................. 69
C.2   Requirements analysis Process........................................................................................................ 71
C.3   Other technical requirements-related processes ............................................................................ 72
Bibliography ..................................................................................................................................................... 74




iv                                                                                                                      © ISO/IEC 2009 – All rights reserved
                                                                                                ISO/IEC CD 29148




Foreword
ISO (the International Organization for Standardization) is a worldwide federation of national standards bodies
(ISO member bodies). The work of preparing International Standards is normally carried out through ISO
technical committees. Each member body interested in a subject for which a technical committee has been
established has the right to be represented on that committee. International organizations, governmental and
non-governmental, in liaison with ISO, also take part in the work. ISO collaborates closely with the
International Electrotechnical Commission (IEC) on all matters of electrotechnical standardization.

International Standards are drafted in accordance with the rules given in the ISO/IEC Directives, Part 2.

The main task of technical committees is to prepare International Standards. Draft International Standards
adopted by the technical committees are circulated to the member bodies for voting. Publication as an
International Standard requires approval by at least 75 % of the member bodies casting a vote.

Attention is drawn to the possibility that some of the elements of this document may be the subject of patent
rights. ISO shall not be held responsible for identifying any or all such patent rights.

ISO/IEC 29148 was prepared by Technical Committee ISO/TC JTC 1, Information Technology Standards,
Subcommittee SC 7, Software and Systems Engineering.

This second/third/... edition cancels and replaces the first/second/... edition (), [clause(s) / clause(s) / table(s) /
figure(s) / annex(es)] of which [has / have] been technically revised.




© ISO/IEC 2009 – All rights reserved                                                                                 v
ISO/IEC CD 29148




Introduction
This International Standard provides a unified treatment of the processes and products involved in
engineering requirements throughout the life cycle of systems and software. This International Standard is the
result of harmonization of the following sources:

     ISO/IEC 12207: 2008, Systems and Software Engineering – Life Cycle Processes

     ISO/IEC 14143-1, Implementation Note for IEEE Adoption of ISO/IEC14143-1:1998 Information
     Technology – Software Measurement – Functional Size Measurement Part 1: Definition of Concepts

     ISO/IEC 15288: 2008, Systems and Software Engineering – System life cycle processes

     ISO/IEC 15289, Systems and Software Engineering – Content of systems and software life cycle process
     information products (Documentation)

     ISO/IEC TR 19759, Software Engineering – Guide to the Software Engineering Body of Knowledge -
     SWEBOK

     IEEE Std 830, IEEE Recommended Practice for Software Requirements Specifications

     IEEE Std 1233, IEEE Guide for Developing System Requirements Specifications

     IEEE Std 1362, IEEE Guide for Information Technology – System Definition – Concept of Operations
     (ConOps) Document

     ISO/IEC 24748 (draft), Guide to life cycle management

     ISO/IEC 24765 (draft), Systems and software engineering -- Vocabulary




vi                                                                              © ISO/IEC 2009 – All rights reserved
COMMITTEE DRAFT                                                                         ISO/IEC CD 29148




Software and systems engineering — Life cycle processes —
Requirements engineering



1    Scope

 1.1 Purpose

This International Standard provides:

    normative processes and exemplary guidance on implementing the requirements-related processes
     described in ISO/IEC 12207: 2008 and ISO/IEC 15288: 2008, and

     normative specification of the contents of the information items produced through the implementation of
     these processes.

 1.2 Field of application

This International Standard is applicable to

    those who use or plan to use ISO/IEC 15288 and ISO/IEC 12207 on projects dealing with man-made
     systems, software-intensive systems, software and hardware products, and services related to those
     systems and products, regardless of project scope, product(s), methodology, size or complexity,

    anyone performing requirements engineering activities to aid in ensuring that their application of the
     requirements engineering processes conforms to ISO/IEC 15288:2008 and/or ISO/IEC 12207:2008,

    those who use or plan to use ISO/IEC 15289:xxxx on projects dealing with man-made systems, software-
     intensive systems, software and hardware products, and services related to those systems and products,
     regardless of project scope, product(s), methodology, size or complexity, and

    anyone performing requirements engineering activities to aid in ensuring that the information items
     developed during the application of requirements engineering processes, conforms to ISO/IEC
     15289:xxxx.


2    Conformance

 2.1 Intended Usage

This International Standard provides guidance for the execution of the ISO/IEC 15288 and ISO/IEC 12207
processes that deal with requirements engineering. This International Standard also provides normative
definition of the content and recommendations for the format of the documentation, or information products,
that result from the implementation of these processes. Users of this International Standard can claim
conformance to the process provisions or to the documentation provisions, or both.




© ISO/IEC 2009 – All rights reserved                                                                       1
ISO/IEC CD 29148



 2.2 Conformance to processes

A claim of conformance to the process provisions of this International Standard is equivalent to claiming
conformance to the requirements-engineering-related processes from ISO/IEC 15288 and ISO/IEC 12207
cited in clause 6 of this International Standard.

 2.3 Conformance to information item content

A claim of conformance to the documentation provisions of this International Standard means that the user
demonstrates that information products produced during the requirements engineering activities conform to
the content requirements defined in clause 7 of this International Standard.

 2.4 Full conformance

A claim of full conformance to this International Standard is equivalent to claiming conformance to the
requirements-engineering-related processes of ISO/IEC 15288 and ISO/IEC 12207 cited in clause 6 and to
the content requirements of the information products in clause 7 of this International Standard.


3   Normative references
The following referenced documents are indispensable for the application of this document. For dated
references, only the edition cited applies. For undated references, the latest edition of the referenced
document, (including any amendments) applies.

ISO/IEC 12207:2008, Systems and software engineering – Software life cycle processes

ISO/IEC 15288:2008, Systems and software engineering – System life cycle processes

ISO/IEC 15289, Systems and software engineering – Content of systems and software life cycle process
information products (Documentation)


4   Terms and definitions

 4.1 Definitions

For the purposes of this document, the terms and definitions given in ISO/IEC 15288, ISO/IEC 12207 and the
following apply.

4.1.1.
acquirer
stakeholder that acquires or procures a product or service from a supplier

NOTE      Other terms commonly used for an acquirer are buyer, customer, owner, and purchaser.

4.1.2
attribute
inherent property or characteristic of an entity that can be distinguished quantitatively or qualitatively by
human or automated means

4.1.3
black box
a system or element whose inputs, outputs, and general function are known but whose contents or
implementation are unknown or irrelevant




2                                                                                   © ISO/IEC 2009 – All rights reserved
                                                                                                  ISO/IEC CD 29148



4.1.4
baseline
A specification or product that has been formally reviewed and agreed upon, that thereafter serves as the
basis for further development, and that can be changed only through formal change control procedures

4.1.5
concept of operations
ConOps
A verbal and graphic statement, in broad outline, of an enterprise’s assumptions or intent in regard to an operation or
series of operations

[ANSI/AIAA G-043-200X – Guide for the Preparation of Operational Concept Documents]

NOTE         The concept of operations frequently is embodied in long-range strategic plans and annual operational plans.
In the latter case, the concept of operations in the plan covers a series of connected operations to be carried out
simultaneously or in succession. The concept is designed to give an overall picture of the enterprise operations. See also
operational concept

4.1.6
condition
measurable qualitative or quantitative attributes that are stipulated for a requirement

4.1.7
constraint
a statement that expresses measurable bounds for an element or function of the system

4.1.8
customer
organization or person that receives a product or service

NOTE         Customers are a subset of stakeholders.

4.1.9
derived requirement
A lower-level requirement that is determined to be necessary for a top-level requirement to be met

4.1.10
developer
organization that performs development tasks (including requirements analysis, design, testing through
acceptance) during a life cycle process

4.1.11
document
uniquely identified unit of information for human use, such as a report, specification, manual or book in printed
or electronic form

[ISO/IEC 15289:xxxx]

4.1.12
emergent property
a requirement of a system which depends for its satisfaction on how several system elements inter-operate

4.1.13
human systems integration
an interdisciplinary technical and management process for integrating human considerations with and across
all system elements, an essential enabler to systems engineering practice

[INCOSE SEHbk 3.1]




© ISO/IEC 2009 – All rights reserved                                                                                    3
ISO/IEC CD 29148



4.1.14
level of abstraction
a view of an object at a specific level of detail

4.1.15
operational concept
OpsCon
a verbal and graphic statement of an enterprise’s assumptions or intent in regard to an operation or series of
operations of a system or a related set of systems

[ANSI/AIAA G-043-200X – Guide for the Preparation of Operational Concept Documents]

NOTE        The operational concept is frequently developed as part of a system development or acquisition program. The
operational concept is designed to give an overall picture of the operations using one or more specific systems, or set of
related systems, in the enterprise’s operational environment from the users’ and operators’ perspective. See also concept
of operations.

4.1.16
operator
entity that performs the operations of a system

4.1.17
requirement
a statement that identifies a product or process operational, functional, or design characteristic or constraint,
which is unambiguous, testable or measurable, and necessary for product or process acceptability (by
consumers or internal quality assurance guidelines)

[ISO/IEC 26702:2007]

4.1.18
requirements elicitation
the process through which the acquirer (customers or users) and the suppliers (contractor) of a system
discover, review, articulate, understand, and document the user's needs and the constraints on the system
and the development activity.

4.1.19
requirement engineering
the subset of systems engineering concerned with discovering, developing, analyzing, validating,
communicating and managing requirements.

4.1.20
requirements traceability matrix
a table that links requirements to their origin and traces them throughout the project life cycle

4.1.21
software requirements specification
SRS
documentation of the essential requirements (functions, performance, design constraints, and attributes) of the
software and its external interfaces

4.1.22
specification.
a document that fully describes a design element or its interfaces in terms of requirements (functional,
performance, constraints, and design characteristics) and the qualification conditions and procedures for each
requirement

4.1.23
system requirements specification
SyRS
a structured collection of information that embodies the requirements of the system



4                                                                                        © ISO/IEC 2009 – All rights reserved
                                                                                                      ISO/IEC CD 29148



4.1.24
stakeholder
an individual or organization having a right, share, claim, or interest in a system or in its possession of
characteristics that meet their needs and expectations

NOTE        Stakeholders include, but are not limited to end users, end user organizations, supporters, developers,
producers, trainers, maintainers, disposers, acquirers, supplier organizations and regulatory bodies.

4.1.25
stakeholder need
a functional or operational capability, or product feature, determined to be necessary for the stakeholder's
operational environment

4.1.26
supplier
organization or individual that enters into an agreement with the acquirer for the supply of a product or service

4.1.27
traceability
the identification and documentation of derivation paths (upward) and allocation or flowdown paths
(downward) of work products in the work product hierarchy

4.1.28
trade-off
decision-making actions that select from various requirements and alternative solutions on the basis of net
benefit to the stakeholders

4.1.29
user
an individual or group that benefits from a system during its utilization

NOTE        The role of user and operator may be vested, simultaneously or sequentially, in the same individual or
organization.

4.1.30
validation
confirmation, through the provision of objective evidence, that the requirements for a specific intended use or
application have been fulfilled

NOTE        Validation in a system life cycle context it the set of activities ensuring and gaining confidence that a system is
able to accomplish its intended use, goals, and objectives.

4.1.31
verification
confirmation, through the provision of objective evidence, that specified requirements have been fulfilled

NOTE        Verification in a system life cycle context is a set of activities that compares a product of the system life cycle
against the required characteristics for that product. This may include, but is not limited to, specified requirements, design
description and the system itself.


 4.2 Symbols and abbreviations

BRS             Business Requirements Specification (Also defined as Stakeholder Requirements Specification)
ConOps          Concept of Operations
FSM             Functional Size Measurement
HIS             Human Systems Integration
OpsCon          Operational Concept
RTM             Requirements Traceability Matrix




© ISO/IEC 2009 – All rights reserved                                                                                         5
ISO/IEC CD 29148



SRS           Software Requirements Specification
StRS          Stakeholder Requirements Specification
SyRS          System Requirements Specification
TBD           To Be Determined
TBR           To be Resolved, To be Revised
TBS           To be Supplied, To be Specified.

5   Concepts

 5.1 Introduction

This clause presents concepts that apply to requirements themselves, and to the information items generated
during the process of documenting requirements. The concepts apply to the properties of requirements at all
levels of the system-of-interest. The concepts also apply to the processes used in the elicitation, analysis,
allocation, documentation and management of requirements.

 5.2 Requirements fundamentals

Requirements engineering is fundamentally interdisciplinary and it is necessary to mediate between the
domains of the customer/user and developer. A complete definition of requirements engineering is that it is a
subset of systems engineering concerned with discovering, developing, analyzing, validating, communicating
and managing requirements. The product of requirements engineering is a hierarchy of requirements that
enables an agreed understanding between stakeholders, that is validated against real-world needs, that can
be implemented, and that provides a precise means of verifying designs and accepting solutions.

5.2.1   Stakeholders

There are often many people involved, each of whom has a stake in the system. A stakeholder is a party
having a right, share, or claim in a system or in its possession of characteristics that meet that party’s needs
and expectations. The set of stakeholders will vary across different projects, but it always includes users,
operators and customers (who need not be the same). These need not be homogeneous groups because
there may be many users and many customers, each with different concerns. There may also be other
stakeholders who are external to the user’s or customer’s organization, such as regulatory authorities, whose
requirements need to be carefully analyzed. The organization developing the system or software is also a
stakeholder because it has a legitimate interest in profiting from the system.

5.2.2   Transformation of needs into requirements

An initial presentation of stakeholders’ intention is not necessarily a requirement since it has not been defined,
analyzed, nor ensured to be feasible. This intention is distinguished from a requirement as being (stakeholder)
needs, goals or objectives. The distinction between requirements and needs is relative to which system is
concerned; a requirement for a system may be allocated to a software element of the system, viewed as
needs by the developer of the element, and further elaborated as the software requirement for the element.
An important aspect of requirements engineering is converting these needs, goals, or objectives into clear,
concise and verifiable requirements on the system-of-interest. In summary, the key purpose of the
requirements engineering activity is to translate all stakeholder needs into a integrated and coherent set of
well-formed requirements.
In practice it is almost always impractical to implement requirements engineering as a linear, deterministic
process where system requirements are elicited from the stakeholders, defined, documented, baselined, and
allocated, followed by iterative and recursive application of the processes for lower levels of the system
hierarchy until the necessary documentation, can be handed over to the system development team. A sound
and standard requirements process model is required to ensure that the final product meets stakeholder
needs and expectations. Even if there is pressure from various sources to finalize the requirements, it is
important to clarify within a project what the requirements are and what shall be done to address them.
This International Standard serves as a basis for a common set of best practices for requirements engineering
to apply to the systems and software technical processes in order to achieve the ultimate goal of delivering the
product.


6                                                                                  © ISO/IEC 2009 – All rights reserved
                                                                                               ISO/IEC CD 29148



5.2.3    Well-formed requirements

It is important to build well-formed requirements statements. This will contribute to the early validation to
stakeholders that the requirements accurately capture their needs.

A well-formed requirement is a statement of system or system element characteristics that:

-     Can be verified,

-     Must be met or possessed by a system to solve a stakeholder problem or to achieve a stakeholder
      objective, and

-     Is qualified by measurable conditions and bounded by constraints.

This definition provides a means for distinguishing between requirements and the attributes of those
requirements (conditions and constraints).

The following provides guidance on writing well-formed requirements. A requirement is a statement which
translates or expresses a need and its associated constraints and conditions. This statement is written in a
language which can take the form of a natural language. If expressed in the form of a natural language, the
statement should comprise a subject, a verb and a complement. A requirement must state the subject of the
requirement (e.g., the system, the software, etc.) and what shall be done (e.g., operate at a power level,
provide a field for). Figure 1 shows example syntax for requirements.
It is important to agree in advance on the specific keywords and terms that signal the presence of a
requirement. A common approach is to stipulate the following:

-     Requirements are mandatory binding provisions and use 'shall'.

-     Statements of fact, futurity, or a declaration of purpose are non-mandatory, no-binding provisions and use
      'will'. “Will” can also be used to establish context or limitations of use. However, 'will' can be construed as
      legally binding, so it is best to avoid using it for requirements.

-     Preferences or goals are desired, non-mandatory, non-binding provisions and use 'should'.

-     Suggestions or allowances are non-mandatory, non-binding provisions and use 'may'.

-     Non-requirements, such as descriptive text, are permitted to use verbs such as ‘are’, ‘is’, ‘was’ and ‘must’.

Whatever keywords and terms are used should be formally defined and applied consistently throughout all
requirements on the system/software development project

                                  [Conditions] [Subject] [Action] [Object] [Constraint]
    EXAMPLE: When signal x is received [Conditions], the system [Subject] shall set [Action] the signal x
    received bit [Object] within 2 seconds [Constraint].
                                                           Or
                                             [Condition] – [Action] – [Value]
    EXAMPLE: At sea state 1 [Condition], the minimum keep out range shall be no less than [Action] 7.8
    nautical miles – [Value].


                                       Figure 1 — Examples of Requirement Syntax

Conditions are measurable qualitative or quantitative attributes that are stipulated for a requirement. They
further qualify a requirement that is needed, and provide attributes that permit a requirement to be formulated
and stated in a manner that can be validated and verified. Conditions may limit the options open to a designer.
It is important to define the need without imposing unnecessary bounds on the solution space.




© ISO/IEC 2009 – All rights reserved                                                                               7
ISO/IEC CD 29148



Constraints are limitations or implied requirements that constrain the design solution or implementation of the
systems engineering process, are not changeable by the performing activity, and are generally non-allocable.
Constraints may apply across all requirements, may be specified in a relationship to a specific requirement or
set of requirements, or may be identified as stand-alone requirements (i.e., not bounding any specific
requirement).
Constraints can include:
-   Interfaces to already existing systems (e.g., format, protocol, or content) where the interface cannot be
    changed,

-   Physical size limitations (e.g., a controller must fit within a limited space in an airplane wing),

-   Laws of nature,

-   Laws of a particular country,

-   Available time or budget,

-   Priority (e.g., mandatory or optional),

-   Pre-existing technology platform.

5.2.4   Characteristics of individual requirements

Each requirement should possess the following characteristics:
-   Necessary. The requirement defines an essential capability characteristic, constraint, and/or quality
    factor. If it is removed or deleted, a deficiency will exist, which cannot be fulfilled by other capabilities of
    the product or process.

-   Abstract. Each requirement should be implementation independent. The requirement states what is
    required, not how the requirement should be met.

-   Unambiguous. Each requirement should be stated in such a way so that it can be interpreted in only one
    way. Each requirement is stated simply and is easy to understand.

-   Consistent. The requirement is free of conflicts with other requirements.

-   Complete. The stated requirement is complete, measurable and does not need further amplification. The
    stated requirement will provide sufficient capability or characteristics.

-   Concise. The requirement statement includes only one requirement with no use of conjunctions.

-   Feasible. The requirement must be technically feasible and fit within budget, schedule, available
    technology, and other constraints.

-   Traceable. Each requirement should be traced upwards to specific documented stakeholder statement(s)
    of need, higher tier requirement, or other source (e.g., a trade or design study). Each requirement should
    also be traced downwards to the specific requirements in the lower tier requirements specification or other
    system definition artifacts. That is, all parent-child relationships should be identified in tracing such that all
    requirements trace to their source and use.

-   Verifiable. Each requirement should have the means to prove that the system satisfies the specified
    requirement. An attribute of being verifiable is that the requirement is measurable.

5.2.5   Characteristics of a set of requirements

There are certain characteristics that need to be considered for the set of requirements rather than for any
individual requirement. This will ensure that the set of requirements collectively provide for a feasible solution



8                                                                                     © ISO/IEC 2009 – All rights reserved
                                                                                           ISO/IEC CD 29148



that meets the stakeholder intentions and constraints. Each set of requirements should possess the following
characteristics:

-   Complete. The set of requirements contain everything pertinent to the definition of system or system
    element being specified. The set of requirements does not need further amplification and contains no To
    Be Defined (TBD), To Be Specified (TBS), or To Be Resolved (TBR) clauses. Resolution of the TBx
    designations may be iterative. The final set of requirements can be judged complete when no TBx are
    present.

-   Consistent. The set of requirements does not have individual requirements which are contradictory.
    Requirements are not duplicated. The same term is used for the same item in all requirements.

-   Affordable. The complete set of requirements can be satisfied by a solution that is obtainable within
    lifecycle cost, schedule, and technical constraints.

-   Bounded. The set of requirements maintains the identified scope for the intended solution without
    increasing beyond what is needed to satisfy user needs.

Careful checking of the requirements set for these characteristics is critical to avoiding requirements changes
and growth (“requirements creep”) during development that will impact the cost, schedule or quality of the
system.

5.2.6    Requirement language guidelines

When writing textual requirements, the following considerations will help ensure that good requirements
characteristics are employed.
Requirements should state 'what' is needed, not 'how". Requirements should state what is needed for the
"system of interest", and not include design decisions for it. However, as requirements are allocated and
decomposed through the levels of the system, there will be recognition of design decisions / solution
architectures defined at a higher level. This is part of the iterative and recursive application of the
requirements analysis and architectural design processes. Avoid including design and implementation
decisions as part of the requirements statements. While such information may still be important, the
information should be documented and communicated in some other form of documentation, such as a
requirement attribute (e.g., rationale) in order to aid in design and implementation. Additionally, including
design solutions in the requirements may risk the possibility that potential design solutions may be overlooked
or eliminated. Examples include stating requirements that express an exact commercial system set or a
system that can be bought rather than made, state tolerances for items deep within the conceptual system, or
establish constraints that are not necessarily reflective of the parent requirement.
Avoid terms that are vague and general. They result in requirements that are often difficult or even impossible
to verify or may allow for multiple interpretations. The following are types of unbounded or ambiguous terms
often used that should be avoided:

-   Superlatives (such as "best", "most")

-   Subjective language (such as "user friendly", "easy to use", "cost effective")

-   Vague pronouns (such as "it", "this", "that")

-   Ambiguous adverbs and adjectives (such as "almost always", "significant", "minimal")

-   Open-ended, non-verifiable terms (such as "provide support", "but not limited to", "as a minimum")

-   Comparative phrases (such as "better than", "higher quality")

-   Loopholes (such as "if possible", "as appropriate", "as applicable")




© ISO/IEC 2009 – All rights reserved                                                                          9
ISO/IEC CD 29148



Document and validate all assumptions made regarding a requirement. The assumptions and other supporting
information may be included in a rationale statement/attribute associated with a requirement or in an
accompanying document. Also, include definitions as declarative statements, not requirements.

5.2.7    Requirements attributes

To support requirements analysis, well-formed requirements should be categorized. Categorization is usually
achieved by attributes associated with the requirement in databases or other requirements tools. Some
important examples of these attributes are described in more detail below.
-    Identification. Each requirement should be uniquely identified (i.e., number, name tag, mnemonic,
     buttons, hypertext). Identification can reflect linkages and relationships, if needed, or they can be separate
     from identification. Unique identifiers aid in requirements tracing. Once assigned, the identification must
     be unique - it is never changed (even if the identified requirement changes) nor is it reused (even if the
     identified requirement is deleted).

-    Priority. The priority of each requirement should be identified. This may be established through a
     consensus process among potential customers. As appropriate, a scale such as 1:5 or a simple scheme
     such as High, Medium, or Low, could be used for identifying the priority of each requirement. The priority
     is not intended to imply that some requirements are not necessary, but it may indicate what requirements
     are candidate for the trade space when decisions regarding alternative are necessary.

-    Criticality. The criticality of each requirement should be defined. Some requirements could have a low
     priority from one of the stakeholder's perspective, but nevertheless be essential for the success of the
     system. For example, a requirement to measure external ambient temperature could be essential to
     provide support to other requirements such as the maintenance of internal cabin temperature. This
     relationship should be identified so that if the primary requirement is removed, the supporting requirement
     can also be eliminated.

-    Risk. Risk analysis techniques can be used to determine a grading for system requirements. In terms of
     their consequences or degree of risk avoidance, major risks are related to potential financial loss, potential
     missed business opportunity, loss of confidence by customers, environmental impact, safety and health
     issues, and national standards or laws.

NOTE        Additional guidance on risk analysis can be found in ISO/IEC 16085, Risk Management.

-    Source. Each requirement should be further classified by a label that indicates the originator. There may
     be multiple sources that can all be considered creators of the requirement. It is useful to identify the
     creator(s) of each requirement so that if requirements are unclear, conflict, or need to be modified or
     deleted, it will be possible to identify the organization(s) to be consulted. The concept of ownership is
     related to source. Ownership applies to the origin of a requirement. Source requirements indicate where
     the requirement came from. For stakeholder requirements, the stakeholder who issues the requirement
     gains ownership. As requirements are further devolved through allocation and derivation, the responsibility
     to meet the requirement is passed to the appropriate realization element.

-    Rationale. The rationale for establishing each requirement should be captured. The rationale provides
     the reason that the requirement is needed and points to any supporting analysis, trade study, modeling,
     simulation, or other substantive objective evidence.

-    Difficulty. The assumed difficulty for each requirement should be noted (Easy / Nominal / Difficult). This
     provides additional context in terms of requirements breadth and affordability. It also helps with cost
     modeling.

-    Type. Requirements vary in intent and in the kinds of properties they represent. This aids collecting
     requirements into groups for analysis and allocation. Examples of types include:

     •    Functional. Functional requirements describe the system or system element functions or tasks that
          must be performed.




10                                                                                    © ISO/IEC 2009 – All rights reserved
                                                                                                  ISO/IEC CD 29148



     •     Performance. A requirement that defines the extent or how well, and under what conditions, a
           function or task is to be performed. These are quantitative requirements of system performance and
           are verifiable individually. Note that there may be more than one performance requirement associated
           with a single function, functional requirement, or task.

     •     Interface. Interface requirements are the definition of how the system is required to interact with
           external systems (external interface), or how system elements within the system, including human
           elements, interact with each other (internal interface).

     •     Design Constraints. A requirement that limits the options open to a designer of a solution by
           imposing immovable boundaries and limits (e.g. the system shall incorporate a legacy or provided
           system element, or certain data must be maintained in an on-line repository).

     •     Non-Functional. These specify requirements under which the system is required to operate or exist
           or system properties. They define how a system is supposed to be. Physical requirements, quality
           requirements and human factor requirements are examples in this type.

           -    Quality Requirements – Include a number of the 'ilities' in requirements to include, for example,
                transportability, survivability, flexibility, portability, reusability, reliability, maintainability, and
                security.

           NOTE      Additional guidance on software quality requirements can be found in the ISO/IEC SQuaRE standards,
           especially ISO/IEC 25030 and in ISO 9126-1.

           -    Human Factors Requirements – State required usability characteristics for system interfaces
                with human users. These include characteristics such as shapes, colours, ergonomic position for
                controls and displays and information arrangement.

     •     Process requirements. These are stakeholder, usually customer or user, requirements imposed
           through the contract or statement of work. Process requirements include: compliance with national,
           state or local laws, including environmental laws; administrative requirements such as physical
           security; customer/contractor relationship requirements; and specific work directives. Process
           requirements may also be imposed on a program by corporate policy or practice. System or system
           element implementation process requirements, such as mandating a particular design methodology,
           are usually captured in project agreement documentation such as contracts, statements of work, and
           quality plans.

 5.3 Practical considerations

5.3.1     Iteration and recursion of processes

Two forms of process application – iterative and recursive – are essential and useful for executing the
requirements of this International Standard.

5.3.1.1        Iterative application of processes

When the application of the same process or set of processes is repeated on the same level of the system,
the application is referred to as iterative. Iteration is not only appropriate but also expected. New information is
created by the application of a process or set of processes. Typically this information takes the form of
questions with respect to requirements, analysed risks or opportunities. Such questions should be resolved
before completing the activities of a process or set of processes. When re-application of activities or
processes can resolve the questions, then it is useful to do so. Iteration can be required to ensure that
information with admissible quality is used prior to applying the next process or set of activities to a system-of-
interest. In this case iteration adds value to the system to which the processes are being used. The iterative
application of processes is illustrated in Figure 2.




© ISO/IEC 2009 – All rights reserved                                                                                  11
ISO/IEC CD 29148



                              Stakeholder Requirements
                                  Definition Process                       Applied to
                                                 Outcomes flow to
                                 Requirements Analysis                     Applied to         System
                                        Process
                                                 Outcomes used for         Applied to
                                   Architecture Design
                                         Process                                           Value added to
                                                                                         system by iterative
                                                                                         application of same
                                                                                              processes


                                    Figure 2 — Iterative application of processes

5.3.1.2     Recursive application of processes

When the same set of processes or the same set of process activities are applied to successive levels of
system elements within the system structure, the application form is referred to as recursive. The outcomes
from one application are used as inputs to the next lower (or higher) system in the system structure to arrive at
a more detailed or mature set of outcomes. Such an approach adds value to successive systems in the
system structure. Figure 3 illustrates the recursive application of processes to systems from the top down.




                              Stakeholder Requirements
                                  Definition Process                      Applied to
                                               Outcomes flow to
                               Requirements Analysis                                      System-of-
                                                                          Applied to
                                      Process                                               interest
                                               Outcomes used for          Applied to
                                  Architecture Design
                                        Process
                                                                                           Value added to
                                                                                        system-of-interest by
                     Outcomes flow to systems of the system-of-interest                     definition of its
                                                                                         lower level systems
                              Stakeholder Requirements
                                  Definition Process                      Applied to
                                               Outcomes flow to
                               Requirements Analysis                      Applied to         System
                                      Process
                                               Outcomes used for          Applied to
                                  Architecture Design
                                        Process

                                  Figure 3 — Recursive application of processes

5.3.2     Iteration and recursion in requirements engineering

Since different groups of system stakeholders often view the system from differing levels of abstraction, it is
necessary to define and document requirements statements at lower, more detailed levels of abstraction than
just the overall system. This is accomplished by allocating or distributing the system requirements to the
system elements. The activity of allocating requirements to system elements is part of the architectural design
process and proceeds in parallel with the definition of the system architecture. There may be multiple
iterations between the requirements analysis and architectural design processes to resolve trade-offs between
the requirements and architecture (see Figure 2).




12                                                                                                © ISO/IEC 2009 – All rights reserved
                                                                                          ISO/IEC CD 29148



One of the main objectives of architectural design is to determine how to partition the system; that is, how to
identify which requirements should be allocated to which system elements. As system elements are defined,
additional derived requirements statements are required to define relationships between the architectural
elements of the system, to provide necessary clarity in the context of the lower levels of abstraction of the
system elements, or to specify design constraints or performance levels on system elements. This is
accomplished through recursive application of the requirements analysis process (see Figure 3).

In addition, some requirements cannot be derived until some portion of the architecture or design evolves.
Some requirements depend on how several system elements inter-operate. For example, the information
throughput of a system is dependent on the interaction of the system hardware, software, personnel actions
and environment. Recursive and iterative application of the requirements analysis and architectural design
processes are used to capture these requirements.

Even where requirements engineering is well resourced, the level of analysis will seldom be uniformly applied.
For example, early in the analysis process experienced engineers are often able to identify where existing or
off-the-shelf solutions can be adapted to the implementation of system elements. The requirements allocated
to these may need less analysis, while others, for which a solution is less obvious, may need to be subjected
to further, more detailed analysis. Critical requirements, such as those concerned with public safety, must
always be analyzed rigorously.

Overall project timescales can sometimes dictate moving into design phase before all requirements are
properly known. If this occurs then a sensitivity analysis of the solution to requirement change should be
carried out, and a plan established to collect the rest of the requirements. If "assumed" values for
requirements are made, these should be clearly noted with ‘TBR’ and plans put in place to review and resolve
the values.


6    Processes

 6.1 Overview

The requirements related processes, activities, and tasks are found in the technical processes of ISO/IEC
15288:2008, System life cycle processes, and ISO/IEC 12207:2008, Software life cycle processes. The
principal processes are 1) Stakeholder Requirements Definition Process, and 2) Requirements Analysis
Process (ISO/IEC 15288), or System Requirements Analysis Process (ISO/IEC 12207). In this International
Standard, these two processes are elaborated upon, in order to provide the user with additional planning and
implementation guidance.

These two processes result in a baseline set of functional and performance requirements which flow into the
architectural design process where the requirements are allocated, decomposed and traced to system
elements. There are also other technical and project processes that have requirements-related activities or
tasks. As noted previously, requirements engineering processes are applied both iteratively and recursively,
based on the project's system life cycle model definition as described in ISO/IEC 24748, Guide to life cycle
management. Iteration often occurs between the requirements analysis and architectural design processes.
The architectural design process also includes allocation of requirements that initiates the recursive
application of the requirements processes.

There are minor differences between the system and software activities. However, the activities are generally
the same. For the purposes of this International Standard, the clauses are generally titled after the systems
engineering activities.

NOTE         Throughout clause 6, original ISO/IEC 15288:2008 tasks relevant to this International Standard, are
highlighted in a box, to show the reader the original text being elaborated.

The relationships between the processes in the two standards are shown in Annex C along with the mapping
to the relevant section in this International Standard. Tables C-1 and C-2 identify the two principal technical
processes and their applicable activities in requirements engineering. Table C-3 identifies other technical
activities related to requirements engineering.




© ISO/IEC 2009 – All rights reserved                                                                         13
ISO/IEC CD 29148



 6.2 Stakeholder requirements definition process

6.2.1     Purpose

The purpose of the Stakeholder Requirements Definition Process is to define the requirements for a system
that can provide the services needed by users and other stakeholders in a defined environment.

It identifies stakeholders, or stakeholder classes, involved with the system throughout its life cycle, and their
needs, expectations, and desires. It analyzes and transforms these into a common set of stakeholder
requirements that express the intended interaction the system will have with its operational environment and
that are the reference against which each resulting operational service is validated.

6.2.2     Outcomes

As a result of the successful implementation of the Stakeholder Requirements Definition Process:

a) The required characteristics and context of use of services and operational concepts are specified.

b) The constraints on a system solution are defined.

c)   Traceability of stakeholder requirements to stakeholders and their needs is achieved.

d) The stakeholder requirements are defined.

e) Stakeholder requirements for validation are identified.

6.2.3     Activities and tasks

The project shall implement the following activities and tasks in accordance with applicable organization
policies and procedures with respect to the Stakeholder Requirements Definition Process.

6.2.3.1      Elicit stakeholder requirements.

This activity consists of the following tasks:

        1)      Identify the individual stakeholders or stakeholder classes who have a legitimate interest in
             the system throughout its life cycle.

        NOTE This includes, but is not limited to, users, operators, supporters, developers, producers, trainers,
        maintainers, disposers, acquirer and supplier organizations, parties responsible for external interfacing entities or
        enabling systems, regulatory bodies and members of society. Where direct communication is not practicable
        (e.g. for consumer products and services), representatives or designated proxy stakeholders are selected.

                                                                                    [ISO/IEC 15288:2008, 6.4.1.3 a) 1)]



Requirements elicited from a stakeholder will be dependent on the role, responsibility, and position of the
stakeholder in the organization. Identify stakeholders who have strong influence on business decisions such
as goals, strategies, operations, and the target system.




14                                                                                           © ISO/IEC 2009 – All rights reserved
                                                                                                   ISO/IEC CD 29148



       2)    Elicit stakeholder requirements from the identified stakeholders.

       NOTE Stakeholder requirements describe the needs, wants, desires, expectations and perceived constraints of
       identified stakeholders. They are expressed in terms of a model that may be textual or formal, that concentrates
       on system purpose and behaviour, and that is described in the context of the operational environment and
       conditions. A product quality model and quality requirements, such as found in ISO/IEC 9126-1 and ISO/IEC
       25030, may be useful for aiding this activity. Stakeholder requirements include the needs and requirements
       imposed by society, the constraints imposed by an acquiring organization and the capabilities and operational
       characteristics of users and operator staff. It is useful to cite sources, including solicitation documents or
       agreements, and, where possible, their justification and rationale, and the assumptions of stakeholders and the
       value they place on the satisfaction of their requirements. For key stakeholder needs, the measures of
       effectiveness are defined so that operational performance can be measured and assessed. If significant risks are
       likely to arise from issues (i.e. needs, wants, constraints, limits, concerns, barriers, factors or considerations)
       relating to people (users and other stakeholders) and their involvement in or interaction with a system at any time
       in the life cycle of that system, recommendations for identifying and treating human-system issues can be found in
       ISO PAS 18152, A specification for the process assessment of human-system issues.

                                                                                  [ISO/IEC 15288:2008, 6.4.1.3 a) 2)]



In a typical system, there will be many sources of requirements and it is essential that all potential sources are
identified and evaluated for their impact on the system. Some of the common sources of requirements and
issues that need to be dealt with are:

-   Goals – The term ‘Goal’ (sometimes called ‘business concern’ or ‘critical success factor’) refers to the
    overall, high-level objectives of the system. Goals provide the motivation for a system but are often
    vaguely formulated. It is important to assess the value (relative to priority) and cost of goals.

-   Mission profile and operational scenarios – How will the system perform its mission? How will the system
    contribute to business or organizational operations? Are there any special scenarios that need to be
    accounted for?      Scenarios can be used to define operational concepts and to bound the range of
    anticipated uses of system products, the intended operational environment and interfacing systems,
    platforms or products. Scenarios help identify requirements that might otherwise be overlooked. Social
    and organizational influences also emerge from using scenarios.

-   Operational environment – Requirements will be derived from the environment in which the system or
    software product will operate. Will it operate in hot or cold conditions, externally, or other equally restrictive
    conditions? What are the characteristics, timing and quantity (workload) of interactions with the system
    environment? Are there any timing constraints in a real-time system or interoperability constraints in a
    business environment such as constraints in operational hours? These can greatly affect system
    feasibility and cost, and restrict design choices.

-   Operational deployment – When will the system be used? Will it be deployed during the initial, middle, or
    wrap up phases of a need?

-   Performance – What are the critical system parameters to accomplish the mission?

-   Effectiveness – How effective/efficient must the system be in performing its mission? What are the
    applicable measures of merit and effectiveness? Does the system have to be available to perform its
    missions a minimum amount of time, such as 90-percent of the time?

-   Operational life cycle – How long will the system’s life time be? 20 years? 30 years? How many hours per
    year must the system operate?

-   Organizational environment – Many systems are required to support an organization's process and this
    may be conditioned by the structure, culture and internal politics of the organization. In general, new
    software systems should not force unplanned change to the business process.




© ISO/IEC 2009 – All rights reserved                                                                                    15
ISO/IEC CD 29148



Requirements elicitation is an iterative activity. Consider several different techniques for identifying
requirements during the elicitation task to better accommodate the diverse set of requirements sources,
including:

-    Structured workshops with brainstorming

-    Interviews, questionnaires

-    Observation of environment or work patterns (e.g., time and motion studies)

-    Technical documentation review

-    Market analysis or competitive system assessment

-    Simulations, prototyping, modeling

-    Benchmarking processes and systems

-    Organizational analysis techniques (e.g., SWOT analysis, product portfolio)

System stakeholders will be authoritative sources for requirements of the system that represent their interests
or area(s) of expertise. However, they usually are not familiar with how to transform their expertise into well
formed requirements statements. In addition to these human sources of requirements, important system
requirements often derive from other devices or systems in the environment that require some services of the
system or act to constrain the system, or even from fundamental characteristics of the application domain.
There may also be safety or other regulatory constraints that drive system requirements.

A description of the user community may provide common understanding across the effort and to validate the
appropriateness of scenarios. A user description may cover the demographic group(s) to which a product will
be marketed or the specific personnel categories that will be assigned to employ the system or otherwise
benefit from its operation.

During elicitation, it is important to collect the information to create well-formed stakeholder requirements
statements. Ensuring well-formed requirements during stakeholder requirements elicitation can provide early
validation by those stakeholders that the statements accurately capture their needs. Apply the characteristics
and guidelines for building well-formed requirements statements provided in clause 5.1.

6.2.3.2    Define stakeholder requirements.

This activity consists of the following tasks:

       1) Define the constraints on a system solution that are unavoidable consequences of existing
       agreements, management decisions and technical decisions.

      NOTE These may result from 1) instances or areas of stakeholder-defined solution 2) implementation decisions
      made at higher levels of system hierarchical structure 3) required use of defined enabling systems, resources and
      staff.

                                                                               [ISO/IEC 15288:2008, 6.4.1.3 b) 1)]


Constraints are one type of requirement. They may be imposed by:
-    External or organization stakeholders and may include engineering plans, technical performance
     measures, technical maturity, regulations, or life cycle costs.

-    External, interacting, or enabling systems.




16                                                                                     © ISO/IEC 2009 – All rights reserved
                                                                                                    ISO/IEC CD 29148



-   Activities from other life cycle phases and technical activities such as Transition, Operation, and
    Maintenance.

-   Measures of effectiveness and suitability that reflect overall customer/user satisfaction (e.g. performance,
    safety, reliability, availability, maintainability, and workload requirements).

Examples of constraints include: 1) the budget limit required by top management is a constraint for
succeeding requirement processes, and 2) the maintenance strategy developed for the system may impose
conditions or constraints on requirements (repair times and/or spares levels may drive reliability values), or
may define capability requirements directly (e.g. built-in-test functionality to support maintenance fault
isolation).

       2) Define a representative set of activity sequences to identify all required services that correspond
       to anticipated operational and support scenarios and environments.

       NOTE Scenarios are used to analyze the operation of the system in its intended environment in order to identify
       requirements that may not have been formally specified by any of the stakeholders, e.g. legal, regulatory and
       social obligations. The context of use of the system is identified and analyzed. Include in the context analysis the
       activities that users perform to achieve system objectives, the relevant characteristics of the end-users of the
       system (e.g. expected training, degree of fatigue), the physical environment (e.g. available light, temperature) and
       any equipment to be used (e.g. protective or communication equipment). The social and organizational influences
       on users that could affect system use or constrain its design are analyzed when applicable.

                                                                                  [ISO/IEC 15288:2008, 6.4.1.3 b) 2)]


Use scenarios to define the concept documents – bound the range of anticipated uses of system products, the
intended operational environment and interfacing systems, platforms or products. Scenarios help identify
requirements that might otherwise be overlooked. Social and organizational influences also emerge from
using scenarios.
Scenarios may help to establish critical and desired system performance thresholds and objectives for system
performance parameters that are critical for system success. They may also establish those that are desired
but may be subject to compromise in order to meet the critical parameters. Different level of abstraction or
presentation mechanisms will often be necessary to address the full range of stakeholders, including the
customer, user, and supplier.

       3)    Identify the interaction between users and the system.

       NOTE Usability requirements are determined, establishing, as a minimum, the most effective, efficient, and
       reliable human performance and human-system interaction. The interaction should take into account human
       capabilities and skills limitations. Where possible, applicable standards, e.g. ISO 9241, and accepted professional
       practices are used in order to define:
             i)    Physical, mental, and learned capabilities;
             ii)   Work place, environment and facilities, including other equipment in the context of use;
             iii) Normal, unusual, and emergency conditions;
             iv) Operator and user recruitment, training and culture;
       If usability is important, usability requirements should be planned, specified, and implemented through the life
       cycle processes, and the following standards or technical reports may be applicable:
        ISO 9241-11:1998, Ergonomic requirements for office work with visual display terminals (VDTs)
         — Part 11: Guidance on usability;
        ISO 13407:1999, Ergonomics — Ergonomics of human-system interaction — Human-centred
         design process for interactive systems.
                                                                                  [ISO/IEC 15288:2008, 6.4.1.3 b) 3)]




© ISO/IEC 2009 – All rights reserved                                                                                     17
ISO/IEC CD 29148



Consideration of human systems integration (HSI) is an important concept within systems engineering. HSI
focuses on the human, an integral element of every system, over the system life cycle. It promotes a total
system approach which includes humans, technology (hardware and software), the operational context and
the necessary interfaces among the system elements to make them work in harmony. HSI brings human-
cantered disciplines (such as manpower, personnel, training, human factors, environment, health, safety,
habitability, and survivability) into the systems engineering process to improve the overall system design and
performance. Incorporation of HSI considerations into requirements is contingent upon a clear understanding
of the missions, functions, operational scenarios and tasks, user population, and quality characteristic
considerations. Requirements in the areas of user tasks and performance, manpower, and training can only
be defined through decomposition of the goals or missions of the system down to the level of task analyses to
define characteristics of the user interface or front end analyses to determine training impacts.

NOTE      ISO 9241-11:1998 has been replaced by ISO 9241-210, Ergonomics of human-system interaction - part 210:
Human-cantered design for interactive systems.


      4) Specify health, safety, security, environment and other stakeholder requirements and functions
      that relate to critical qualities.

      NOTE Identify safety risk and, if warranted, specify requirements and functions to provide safety. This includes
      risks associated with methods of operations and support, health and safety, threats to property and environmental
      influences. Use applicable standards, e.g. IEC 61508, and accepted professional practices. Identify security risk
      and, if warranted, specify all applicable areas of system security, including physical, procedural, communications,
      computers, programs, data and emissions. Identify functions that could impact the security of the system,
      including access and damage to protected personnel, properties and information, compromise of sensitive
      information, and denial of approved access to property and information. Specify the required security functions,
      including mitigation and containment, referencing applicable standards and accepted professional practices where
      mandatory or relevant.
                                                                                 [ISO/IEC 15288:2008, 6.4.1.3 b) 4)]



Critical qualities are aspects of the system that are essential to ensure the integrity of the system and its
operating environment.

6.2.3.3     Analyze and maintain stakeholder requirements.

This activity consists of the following tasks:

      1)    Analyze the complete set of elicited requirements.

      NOTE Analysis includes identifying and prioritizing the conflicting, missing, incomplete, ambiguous, inconsistent,
      incongruous or unverifiable requirements.
                                                                                    [ISO/IEC 15288:2008, 6.4.1.3 c) 1)]



Requirements should be analyzed for the characteristics defined in clauses 5.2.4 and 5.2.5. Requirements
should be prioritized and may be classified as described in clause 5.2.7. The use of checklists or standard
templates helps in the review process.

       2)   Resolve requirements problems.
      NOTE This includes requirements that cannot be realized or are impractical to achieve.
                                                                                    [ISO/IEC 15288:2008, 6.4.1.3 c) 2)]



It is important to continue to perform requirements negotiation during the analysis and allocation of
requirements, because conflicts will occur. Negotiation might be needed among stakeholders requiring
mutually incompatible features, or due to conflicts between desired performance requirements, constraints,



18                                                                                       © ISO/IEC 2009 – All rights reserved
                                                                                                  ISO/IEC CD 29148



available budget, and delivery schedule. In most cases, it is necessary to consult with the stakeholder(s) to
reach a consensus on an appropriate tradeoff. It is often important for contractual reasons that such decisions
are traceable to the stakeholder. Various analysis methods and conflict resolution techniques may be
applicable to facilitate the resolution and are dependent on the specific situation.

Some organizations consider requirements negotiation to be part of requirements validation. The specific
process subcategory is not important as long as the conflict resolution occurs as early as possible in the
requirements analysis task.

       3) Feed back the analyzed requirements to applicable stakeholders to ensure that the needs and
       expectations have been adequately captured and expressed.

       NOTE Explain and obtain agreement to the proposals to resolve conflicting, impractical and unrealisable stakeholder
       requirements.
                                                                                    [ISO/IEC 15288:2008, 6.4.1.3 c) 3)]



       4)    Establish with stakeholders that their requirements are expressed correctly.
       NOTE This includes confirming that stakeholder requirements are comprehensible to originators and that the
       resolution of conflict in the requirements has not corrupted or compromised stakeholder intentions.
                                                                                    [ISO/IEC 15288:2008, 6.4.1.3 c) 4)]



It is normal for there to be one or more formally scheduled points in the requirements engineering process
where the requirements are validated. The objective is to identify any problems before resources are
committed to implementing a system solution for the requirements. Requirements validation is concerned with
the process of examining the requirements document to ensure that it defines the right system (i.e. the system
that the stakeholder expects.) The most common activities in requirements validation are conducting
requirements reviews and prototyping.

Conducting requirements reviews is perhaps the most common means of validation of the requirements
document(s). A group of reviewers is constituted with a brief to look for errors, mistaken assumptions, lack of
clarity, verifiability issues and deviation from standard practice. The composition of the group that conducts
the review is important (at least one representative of the customer should be included for a customer-driven
project, for example) and it may help to provide guidance on what to look for in the form of checklists.

Reviews may be conducted at any level of abstraction in the set of requirements. Examples include a review
of the operational concept, concept of operations, completed system requirements definition document, the
completed software requirements specification document, or the baseline specification for a new release of an
existing product. Various types of reviews may be applicable throughout the development and maintenance of
the requirements, including technical reviews, inspections, and walk-throughs.

NOTE         Additional guidance on reviews can be found in IEEE Std 1028, Software reviews.


       5) Record the stakeholder requirements in a form suitable for requirements management through the
       life cycle and beyond.
       NOTE These records establish the stakeholder requirements baseline, and retain changes of need and their origin
       throughout the system life cycle. They are the basis for traceability to the system requirements and form a source of
       knowledge for requirements for subsequent system entities.
                                                                                    [ISO/IEC 15288:2008, 6.4.1.3 c) 5)]



Consideration should be given to using requirements management tools, especially for more complex projects.
These tools generally consist of a database with capabilities to trace linkages between requirements to show




© ISO/IEC 2009 – All rights reserved                                                                                  19
ISO/IEC CD 29148



relationships. A requirements management tool is intended to facilitate and support the systematic managing
of requirements throughout the project life cycle.

NOTE        Additional information and guidelines on requirements management tools can be found in ISO/IEC 24766:xxxx
– Guide for Requirement Engineering Tool Capabilities.

The requirements database must first be populated with the source documentation of the stakeholder needs,
project constraints (such as from business policies/rules or regulatory requirements), and any other conditions
that provide the basis for the total set of system requirements that will govern its design. Both the source and
rationale for each requirement needs to be captured.

Requirements documents that may be output as part of the Stakeholder Requirements Process include:
-    Stakeholder Requirements Specification. This document describes a business motivation to develop
     the system and business processes and policies/rules under which the system is used and documents the
     top level requirements that address the business needs from the stakeholder perspective..

-    Concept of Operations. This document describes the view from the organization regarding the intent
     and assumptions for operation(s). It captures a broad picture of the organizational level purpose.

-    Operational Concept. This document communicates the users' needs, with respect to the system of
     interest. It may include a description of both current and future systems including operational policies and
     constraints, modes of operation, operational environment, user classes and interactions, interfaces to
     external systems or procedures, capabilities/functions, performance characteristics, operational scenarios,
     and states or modes identified for the system.

Additional information on these requirements-related documents can be found in Clause 7 and Annex A.

The requirements database should also include any requirements categorization, including the priority and
criticality of the requirements. Additional information on requirements categorization can be found in Clause
5.2.7.

        6)   Maintain stakeholder requirements traceability to the sources of stakeholder need.
        NOTE The stakeholder requirements are reviewed at key decision times in the life cycle to ensure that account is
        taken of any changes of need.

                                                                                   [ISO/IEC 15288:2008, 6.4.1.3 c) 6)]



An initial requirements traceability matrix should be established and maintained to document how the formal
requirements are intended to meet the stakeholder objectives and achieve stakeholder agreement.
Stakeholder requirements need to be captured, traced, and maintained throughout the system life cycle and
beyond, and placed under configuration control. Use of a requirements management tool can facilitate this
process. More discussion on the application of traceability can be found in clause 6.3.3.2 of this International
Standard under task 3.

NOTE        Additional guidance on placing information under configuration control can be found in ISO/IEC 15288, clause
6.3.5, Configuration management process.


 6.3 Requirements analysis process

6.3.1    Purpose

The purpose of the Requirements Analysis Process is to transform the stakeholder, requirement-driven view
of desired services into a technical view of a required product that could deliver those services.

This process builds a representation of a future system that will meet stakeholder requirements and that, as
far as constraints permit, does not imply any specific implementation. It results in measurable system



20                                                                                     © ISO/IEC 2009 – All rights reserved
                                                                                                   ISO/IEC CD 29148



requirements that specify, from the supplier’s perspective, what characteristics it is to possess and with what
magnitude in order to satisfy stakeholder requirements.

6.3.2     Outcomes

As a result of the successful implementation of the Requirements Analysis Process:

a) The required characteristics, attributes, and functional and performance requirements for a product
   solution are specified.
b) Constraints that will affect the architectural design of a system and the means to realize it are specified.
c)   The integrity and traceability of system requirements to stakeholder requirements is achieved.
d) A basis for verifying that the system requirements are satisfied is defined.

6.3.3     Activities and tasks

The project shall implement the following activities and tasks in accordance with applicable organization
policies and procedures with respect to the Requirements Analysis Process.

6.3.3.1      Define system requirements.

This activity consists of the following tasks:

        1)   Define the functional boundary of the system in terms of the behavior and properties to be provided.

        NOTE This includes the system’s stimuli and its responses to user and environment behavior, and an analysis and
        description of the required interactions between the system and its operational environment in terms of interface
        constraints, such as mechanical, electrical, mass, thermal, data, and procedural flows. This establishes the expected
        system behavior, expressed in quantitative terms, at its boundary.

                                                                                     [ISO/IEC 15288:2008, 6.4.2.3 a) 1)]




        2)   Define each function that the system is required to perform.
        NOTE 1 This includes how well the system, including its operators, is required to perform that function, the
        conditions under which the system is to be capable of performing the function, the conditions under which the system
        is to commence performing that function and the conditions under which the system is to cease performing that
        function.
        NOTE 2 Conditions for the performance of functions may incorporate reference to required states and modes of
        operation of the system. System requirements depend heavily on abstract representations of proposed system
        characteristics and may employ multiple modeling techniques and perspectives to give a sufficiently complete
        description of the desired system requirements.
                                                                                     [ISO/IEC 15288:2008, 6.4.2.3 a) 2)]




© ISO/IEC 2009 – All rights reserved                                                                                   21
ISO/IEC CD 29148



       3) Define necessary implementation constraints that are introduced by stakeholder requirements or are
       unavoidable solution limitations.
      NOTE This includes the implementation decisions that are allocated from design at higher levels in the structure of
      the system.
                                                                                   [ISO/IEC 15288:2008, 6.4.2.3 a) 3)]




       4) Define technical and quality in use measures that enable the assessment of technical
       achievement.
      NOTE This includes defining critical performance parameters associated with each effectiveness measure
      identified in the stakeholder requirements. The critical performance measures are analyzed and reviewed to
      ensure stakeholder requirements are met and to ensure identification of project cost, schedule or performance risk
      associated with any non-compliance. ISO/IEC 15939 provides a process to identify, define and use appropriate
      measures. The ISO/IEC 9126 series of standards provides relevant quality measures.
                                                                                [ISO/IEC 15288:2008, 6.4.2.3 a) 4)]



Technical measures are used to provide insight into the progress of the system or system elements in
achieving the technical parameters specified in the requirements. These include Measures of Performance
(MOP) and Technical Performance Measures (TPM). See ISO/IEC 26702 and ISO/IEC TR 19760 for more
information on these. The quality in use measures are used to determine whether a product meets the needs
of specified users to achieve specified goals with effectiveness, productivity, safety and satisfaction in a
specified context of use in a realistic system environment.

       5) Specify system requirements and functions, as justified by risk identification or criticality of the
       system, that relate to critical qualities, such as health, safety, security, reliability, availability and
       supportability.
      NOTE This includes analysis and definition of safety considerations, including those relating to methods of
      operation and maintenance, environmental influences and personnel injury. It also includes each safety related
      function and its associated safety integrity, expressed in terms of the necessary risk reduction, is specified and
      allocated to designated safety-related systems. Applicable standards are used concerning functional safety, e.g.
      IEC 61508, and environmental protection, e.g. ISO 14001. Analyze security considerations including those related
      to compromise and protection of sensitive information, data and material. The security-related risks are defined,
      including, but not limited to, administrative, personnel, physical, computer, communication, network, emission and
      environment factors using, as appropriate, applicable security standards.
                                                                                [ISO/IEC 15288:2008, 6.4.2.3 a) 5)]



Review all requirements for the characteristics of a good requirement and good set of requirements as
described in sub-clauses 5.2.4 and 5.2.5.

Again, both the source and rationale for each requirement needs to be captured. The traceability should be
updated and maintained to document how the formal system requirements, including derived requirements,
are intended to meet the stakeholder requirements and objectives and achieve stakeholder agreement.

Specifications are collections of requirements. They describe essential technical requirements for products,
materials, and the criteria for determining whether those requirements are met. Requirements specifications
that are important as part of the Requirements Analysis Process may include:
-    System Requirements Specification. This specification identifies the technical specifications for the
     selected system of interest and usability for the envisaged human-system interaction. It defines the high-
     level system requirements from the domain perspective, along with background information about the
     overall objectives for the system, its target environment and a statement of the constraints, assumptions




22                                                                                      © ISO/IEC 2009 – All rights reserved
                                                                                                 ISO/IEC CD 29148



    and non-functional requirements. It may include conceptual models designed to illustrate the system
    context, usage scenarios, the principal domain entities, data, information and workflows.

-   Software Requirements Specification. This specification identifies the software requirements derived
    from the system requirements, and which have been allocated to software. It indicates the precedence
    and criticality of requirements. The SRS defines all of the required capabilities of the specified software
    product to which it applies, as well as documenting the conditions and constraints under which the
    software must perform, and the intended verification approaches for the requirements.

Clauses 7.4 and 7.5 contain detailed specification content for the system and software requirements
documents.
The benefits of documenting both the system requirements and the software requirements include:

-   It establishes the basis for agreement between the customers and contractors or suppliers (in market
    driven projects, these roles may be played by marketing and development divisions) on what the product
    is to do.

-   It forces a rigorous assessment of requirements before design can begin and reduces later redesign.

-   It provides a realistic basis for estimating product costs, risks and schedules.

-   Organizations can use the specifications to develop validation and verification plans.

-   It provides an informed basis for deploying a product to new users or new operational environments.

-   It provides a basis for product enhancement.

6.3.3.2     Analyze and maintain system requirements.

This activity consists of the following tasks:

       1) Analyze the integrity of the system requirements to ensure that each requirement, pairs of
       requirements or sets of requirements possess overall integrity.

       NOTE Each system requirement statement is checked to establish that it is unique, complete, unambiguous,
       consistent with all other requirements, implementable and verifiable. Deficiencies, conflicts and weaknesses are
       identified and resolved within the complete set of system requirements. The resulting system requirements are
       analyzed to confirm that they are complete, consistent, achievable (given current technologies or knowledge of
       technological advances) and expressed at an appropriate level of detail. Refer to ISO/IEC 26702:2007, IEEE
       Standard for Application and Management of the Systems Engineering Process for additional detailed guidance
       regarding the attributes and qualities of good requirements.
                                                                                [ISO/IEC 15288:2008, 6.4.2.3 b) 1)]



The classifications in clause 5.2.7 may help with this task. The "plan verification" process of ISO/IEC 15288,
should be used for the definition, planning, and execution of requirements verification (ISO/IEC 15288:2008,
clause 6.4.6.3 a).

       2) Feed back the analyzed requirements to applicable stakeholders to ensure that the specified
       system requirements adequately reflect the stakeholder requirements to address the needs and
       expectations.
       NOTE Confirmation is made that they are a necessary and sufficient response to stakeholder requirements and a
       necessary and sufficient input to other processes, in particular architectural design.
                                                                                [ISO/IEC 15288:2008, 6.4.2.3 b) 2)]




© ISO/IEC 2009 – All rights reserved                                                                                 23
ISO/IEC CD 29148



Requirements validation ensures that stakeholder requirements have been correctly transformed into system
requirements. Various techniques may be used, including stakeholder reviews, prototyping, modeling and
simulation, conceptual modeling, and formal modeling. Reviews are discussed in clause 6.2.3.3 of this
International Standard under task 4.

Stakeholder reviews and surveys are a common technique that can be implemented easily. The stakeholder
reviews involve conducting a review of the requirements with a group that includes the key stakeholders to
determine that the system requirements are complete, correct, and consistent reflecting the intent of the
stakeholder requirements. Checklists are often developed to aid the reviews to ensure that all applicable
categories of requirements have been considered and documented.

Prototyping is commonly employed for validating the interpretation of the system requirements, and identifying
any omitted requirements. The advantage of prototypes is that they can make it easier to interpret the
assumptions and give useful feedback on why they are wrong. For example, the dynamic behaviour of a user
interface can be better understood through an animated prototype than through textual description or
graphical models. There are also some disadvantages, however. These include the cost of developing
prototypes, potential erroneous assumptions and unwarranted expectations, and the danger of users’
attention being distracted from the core underlying functionality by quality problems with the prototype.

Modeling and simulation can be used to assist the stakeholder validation of the requirements. The advantage
of modeling and simulations is that they can demonstrate interactions and allow for sensitivity analysis when
the results are not what the stakeholder expected.

Conceptual modeling is another technique. The purpose is to aid understanding of the problem rather than to
initiate design of the solution. Hence, conceptual models comprise models of entities from the problem domain
configured to reflect their real-world relationships and dependencies. There are several kinds of models that
can be developed. These include data and control flows, state models, event traces, user interactions, object
models, system context models, and many others. The factors that influence the choice of model include:

-    The nature of the problem: - Some types of application demand that certain aspects be analyzed
     particularly rigorously. For example, control flow and state models are likely to be more important for real-
     time systems than for an information system.

-    Expertise: - It is often more productive to adopt a modeling notation or method that the development team
     has experience with. However, it may be appropriate or necessary to adopt a notation that is better
     supported by tools, imposed as a process requirement, or simply ‘better’

-    The process requirements of the customer: - Customers may impose a particular notation or method. This
     can conflict with the previous factor.

-    The availability of methods and tools: - Notations or methods that are poorly supported by training and
     tools may not reach widespread acceptance even if they are better suited to particular types of problem.

Formal modeling that uses notations based upon discrete mathematics and that is tractable to logical
reasoning has made an impact in some specialized domains. Formal modeling may be imposed by customers
or standards or may offer compelling advantages to the analysis of certain critical functions or elements.

       3)   Demonstrate traceability between the system requirements and the stakeholder requirements.
      NOTE Maintain mutual traceability between the system requirements and the stakeholder requirements, i.e. all
      achievable stakeholder requirements are met by one or more system requirements, and all system requirements
      meet or contribute to meeting at least one stakeholder requirement. The system requirements are held in an
      appropriate data repository that permits traceability to stakeholder needs and architectural design.
                                                                            [ISO/IEC 15288:2008, 6.4.2.3 b) 3)]


Requirements tracing is concerned with recovering the source of requirements and predicting the effects of
requirements. The traceability should include interface requirements. Tracing is fundamental to performing
coverage analysis (to ensure that all stakeholder requirements are met in the design and that each low-level



24                                                                                  © ISO/IEC 2009 – All rights reserved
                                                                                            ISO/IEC CD 29148



requirement is justified); compliance analysis (to document that stakeholder requirements have been
satisfied); and impact analysis when requirements change. A requirement should be traceable down to lower-
level requirements (e.g., stakeholder to system to element and ultimately to hardware and software
requirements), design, system elements, and verification/test entities that satisfy it, along with any supporting
models and analysis (for example, from a system requirement into the software or hardware requirements that
have been elaborated from it and on into the software code modules or hardware drawings that implement it).
A requirement should also be traceable upwards to the requirements and stakeholders that motivated it (from
a software requirement back to the system requirement(s) that it helps satisfy, for example). In the case of
requirements derived from trade or design studies, those derived requirements should be traceable back to
the study from which they derive, and the study should be traceable back to the high-level requirements by
which it was informed. Bi-directional traceability is a technique that can be used to:
-     improve the integrity and accuracy of all requirements, from the system level all the way down to the
      lowest level system element;

-     allow tracking of the requirements development and allocation with related measures such as
      requirements coverage, compliance , and complexity;

-     provide a means of documenting and reviewing the relationships between layers of requirements that
      capture certain aspects of the design; and

-     support easier maintenance and change implementation of the system in the future.

        4) Maintain throughout the system life cycle the set of system requirements together with the
           associated rationale, decisions and assumptions.

                                                                            [ISO/IEC 15288:2008, 6.4.2.3 b) 4)]


This information must be configuration controlled. The ancillary information recorded along with the
requirements may include additional information such as a summary rationale for each requirement and a
change history, along with the requirements categorization information described in clause 5.2.7. Once again,
use of a requirements management tool facilitates a cumbersome and complex project of maintaining
requirements traceability and configuration control.

 6.4 Requirements engineering activities in other technical processes

6.4.1     Requirements in architectural design

The purpose of the Architectural Design Process is to synthesize a solution that satisfies system requirements.

6.4.1.1     Define the architecture

This activity consists of the following tasks:

    2) Partition the system functions identified in requirements analysis and allocate them to elements of
    system architecture. Generate derived requirements as needed for the allocations.
                                                                            [ISO/IEC 15288:2008, 6.4.3.3 a) 2)]




    3) Define and document the interfaces between system elements and at the system boundary with external
    systems.
                                                                       [ISO/IEC 15288:2008, 6.4.3.3 a) 3)]




© ISO/IEC 2009 – All rights reserved                                                                          25
ISO/IEC CD 29148



An architectural design solution is defined in terms of the requirements for the set of system elements from
which the system is configured. Establish and maintain the traceability between requirements and the
architectural design, including the system elements and interfaces. Define Verification and Validation Criteria
for the system elements. Identify interface requirements through appropriate interface specification such as
an Interface Control Document. The interface requirements are incorporated into the architectural design
solution. These documents are shared by the programs involved with the interactions between systems.

6.4.1.2      Analyze and evaluate the architecture

This activity consists of the following tasks:

    2) Determine which system requirements are allocated to operators.
    NOTE 1 This determination takes account of the context of use factors and considers, as a minimum, the following
    factors for the most effective, efficient and reliable human-machine interaction:
        i) Limitations of human capabilities;
        ii) Human actions critical to safety and how the consequences of error are addressed;
        iii) Integration of human performance into systems and their operation.
                                                                            [ISO/IEC 15288:2008, 6.4.3.3 b) 2)]



NOTE         Additional guidance on architectural design can be found in ISO/IEC 15288, clause 6.4.3, Architectural design
process.

6.4.2     Requirements in verification

The purpose of the Verification Process is to confirm that the specified design requirements are fulfilled by the
system.

6.4.2.1      Plan verification

This activity consists of the following tasks:

    2) Define a verification plan based on system requirements.
    NOTE The plans account for the sequence of configurations defined in the integration strategy and, where appropriate,
    take account of disassembly strategies for fault diagnosis. The schedule typically defines risk-managed verification
    steps that progressively build confidence in compliance of the fully configured product.
                                                                                  [ISO/IEC 15288:2008, 6.4.6.3 a) 2)]



This activity is facilitated by initially associating a verification method as requirements are created. Verification
methods may be documented in a verification statement. A verification method defines how (including success
criteria and closure approach), where and when each requirement's compliance will be proven for customer
acceptance. A verification method is associated with each requirement to define activities that yield objective
information to prove satisfaction of the requirement. A good verification method definition addresses some or
all of the following content considerations:

-     How – Identify which verification method will be applied (see list below)

-     Who – Identify the organization/person with the lead responsibility for performing the verification, such as
      a contractor, subcontractor, vendor, IPT, or supplier

-     When – Designate a time in the program plan when the verification is to be done. This should be an
      event-based, and not a calendar date, accomplishment.

-     Where - Specify any unique venue and environment needed for the verification activity




26                                                                                        © ISO/IEC 2009 – All rights reserved
                                                                                                      ISO/IEC CD 29148



There are four standard verification methods to use to obtain the objective evidence that the requirements
have been fulfilled: inspection, analysis or simulation, demonstration, and test.

Inspection - an examination of the item against applicable documentation to confirm compliance with
requirements. Inspection is used to verify properties best determined by examination and observation (e.g., -
paint colour, weight, etc.).

     Good practice: Include identification of the document(s)/drawing(s) to use to make the comparison
     between what is required versus what is being inspected.

Analysis (including modelling and simulation) - use of analytical data or simulations under defined
conditions to show theoretical compliance. Used where testing to realistic conditions cannot be achieved or is
not cost-effective. Analysis (including simulation) may be used when such means establish that the
appropriate requirement, specification, or derived requirement is met by the proposed solution.

     Good practice: Identify the generic name of the analysis (like Failure Modes Effects Analysis),
     analytical/computer tools, and/or numeric methods; the source of input data; and how raw data will be
     analyzed. Ensure agreement with the customer that the analysis methods and tools, including simulations,
     are acceptable for the provision of objective proof or requirements compliance.

Demonstration - a qualitative exhibition of functional performance, usually accomplished with no or minimal
instrumentation. Demonstration (a set of test activities with system stimuli selected by the system developer)
may be used to show that system or subsystem response to stimuli is suitable or to show that operators can
perform their allocated functions when using the system. Demonstration may be appropriate when
requirements or specifications are given in statistical terms (e.g., mean time to repair, average power
consumption, etc.).

     Good practice: State who the witnesses will be for the purpose of collecting the evidence of success, what
     general steps will be followed, and what special resources are needed, such as instrumentation, special
     test equipment or facilities, simulators, specific data gathering, or rigorous analysis of demonstration
     results.

Test - an action by which the operability, supportability, or performance capability of an item is quantitatively
verified when subjected to controlled conditions that are real or simulated. These verifications often use
special test equipment or instrumentation to obtain very accurate quantitative data for analysis.

          Good practice: State who the witnesses will be for the purpose of collecting the evidence of success.
          Identify the test facility, test equipment, any unique resource needs and environmental conditions,
          required qualifications and test personnel, general steps that will be followed, specific data to be
          collected, and methods for analyzing the results.

This information is included and documented in an updated Requirements Traceability Matrix (RTM).

6.4.2.2     Perform verification

This activity consists of the following tasks:

  2) Conduct verification to demonstrate compliance to the specified design requirements.
  NOTE Non-compliance identifies the existence of random faults and/or design errors, and corrective actions are
  initiated as appropriate. Verification is undertaken in a manner, consistent with organizational constraints, such that
  uncertainty in the replication of verification actions, conditions and outcomes is minimized. Approved records of
  verification actions and outcomes are made.
                                                                                    [ISO/IEC 15288:2008, 6.4.6.3 b) 2)]



The Requirements Traceability Matrix (RTM) is frequently used as a single point of accountability for tracing a
requirement back to the source of the requirement and forward through the life cycle to assess that the
requirement has been met. In an RTM, verification methods and information are associated with the



© ISO/IEC 2009 – All rights reserved                                                                                        27
ISO/IEC CD 29148



requirements to indicate how the system or system element will be verified to show it meets the requirements.
As the system moves through the life cycle phases, traceability of the requirements to the work products
should be added. It is important to include unique identifiers for each requirement in the RTM.

NOTE         Additional guidance on validation can be found in ISO/IEC 15288, clause 6.4.6, Verification process

6.4.3     Requirements in validation

The purpose of the Validation Process is to provide objective evidence that the services provided by a system
when in use comply with stakeholders’ requirements, achieving its intended use in its intended operational
environment.

6.4.3.1     Perform validation

This activity consists of the following task:

  2) Conduct validation to demonstrate conformance of services to stakeholder requirements.
  NOTE Validation is undertaken in a manner, consistent with organizational constraints, such that uncertainty in the
  replication of validation actions, conditions and outcomes is minimized. Objectively record and approve validation
  actions and results. Validation may also be conducted to confirm that the system not only satisfies all operational,
  functional and usability requirements, but also satisfies the often less formally expressed, but sometimes overriding,
  attitudes, experience and subjective tests that comprise customer satisfaction.
                                                                                  [ISO/IEC 15288:2008, 6.4.8.3 a) 2)]



System validation is subject to approval by the project authority and key stakeholders. This process is invoked
during the Stakeholders Requirements Definition Process to confirm that the requirements properly reflect the
stakeholder needs and to establish validation criteria, i.e. that the right system has been built. Results are
documented in an updated Requirements Traceability Matrix (RTM)

NOTE         Additional guidance on validation can be found in ISO/IEC 15288, clause 6.4.8, Validation process.


 6.5 Requirements management

Requirements management encompasses those tasks that record and maintain the evolving requirements
and associated context and historical information from the requirements engineering activities. Requirements
management also establishes procedures for defining, controlling, and publishing the baseline requirements
for all levels of the system-of-interest. Effective requirements management occurs within the context of an
organization's project and technical processes as defined in ISO/IEC 15288 and ISO/IEC 12207.

Requirements are rarely static. Although it is desirable to freeze a set of requirements permanently, it is rarely
possible. Requirements that are likely to evolve should be identified and communicated to both customers and
the technical community. A core subset of requirements may be frozen early. The impact of proposed new
requirements must be evaluated to ensure that the initial intent of the requirements baseline is maintained or
that changes to the intent are understood and accepted by the customer.
In almost all cases, requirements understanding continues to evolve as design and development proceeds.
This often leads to the revision of requirements late in the life cycle. Perhaps the most crucial point of
understanding about requirements engineering is that a significant proportion of the requirements will change.
This is sometimes due to errors in the analysis, but it is frequently an inevitable consequence of change in the
environment, such as changes in the customer’s operating or business environment, or in the market into
which the system must be sold.

However, care must be exercised in making requirements changes during design and development. While
some may be unavoidable, excessive uncontrolled changes can result in "requirements creep" that can result
in cost overruns, schedule delays, design errors, buyer dissatisfaction, or even cancellation of the project.




28                                                                                        © ISO/IEC 2009 – All rights reserved
                                                                                               ISO/IEC CD 29148



6.5.1    Change management

Whatever the cause of requirements changes, it is important to recognize the inevitability of change and adopt
measures to mitigate the effects of change. Change has to be managed by ensuring that proposed changes
go through a defined impact assessment, review, and approval process, and by applying careful requirements
tracing and version management. Hence, the requirements engineering process is not merely a front-end task
to system or software development, but spans the whole development life cycle. In a typical project the
activities of the requirements management evolve over time from elicitation to change management.

Commonly used baselines are the functional, allocated, developmental, and product baselines. The baselines
to be used for a given project, along with their associated levels of authority needed for change approval, are
typically identified in the project's configuration management plan. These baselines are described as follows:

-   Functional baseline corresponds to the reviewed system requirements.

-   Allocated baseline corresponds to the reviewed system element specifications including the interface
    requirements specification.

-   Developmental baseline represents the evolving system and system element configurations at selected
    times during the life cycle. Change authority for this baseline typically rests primarily with the supplier
    organization.

-   Product baseline corresponds to the completed system.

Requirements should be formally configuration managed, in accordance with project and organization
configuration management processes. The requirements information should be managed in accordance with
the organization's information management process.

NOTE         Clause 6.3.5 of ISO/IEC 15288 and ISO/IEC 12207 has additional information on configuration management.

NOTE         Clause 6.3.6 of ISO/IEC 15288 and ISO/IEC 12207 has additional detail on information management.

6.5.2    Measuring requirements

Measuring requirements is useful in both the process and product contexts. Requirements volatility is one of
the measures most often used for insight about a set of requirements. In the process context, requirements
volatility can be an indicator that an organization's requirements engineering process is not capable of
converging a collection of requirements into a well-formed set. In the product context, a high volatility value is
an early indicator of risk to a development effort. The high volatility value can indicate that the system
stakeholders are unable to reach consensus on the system requirements, which places significant risk on the
success of subsequent activities in the development effort. Other useful requirements measures include
requirements trends, requirements change rate and backlog, requirements verification, requirements
validation and TBD and TBR closure progress per plan. ISO/IEC 15939 provides more guidance on the
measurement process.

Software requirements are used in software Functional Size Measurement (FSM) methods to assist with many
aspects of managing software projects. FSM methods are organized into two parts: uses for project
management and uses for forecasting and performance management. If FSM methods are to provide high
fidelity results, it is very important to achieve an accurate and complete allocation and derivation of a system's
software requirements from the system requirements. ISO/IEC 14143-1 provides details of FSM concepts and
their uses.

NOTE         Clause 6.3.7 of ISO/IEC 15288 and ISO/IEC 12207 provides additional information on measurement process.




© ISO/IEC 2009 – All rights reserved                                                                              29
ISO/IEC CD 29148



7      Information items

 7.1 Introduction

This clause defines the required content of the stakeholder requirements specification (StRS), the system
requirements specification (SyRS), and the software requirements specification (SRS). This clause also
provides a recommended format for the StRS, SyRS and SRS by way of the order and numbering method
presented in defining the required content.

NOTE: ISO/IEC 15289, Systems and Software Engineering – Content of systems and software life cycle process
information products, provides guidance on identifying and planning the specific information items to be produced during
systems and software life cycles.




    External Environment         Enterprise Environment
    market trends                policies & procedures                         Business Operation
    laws & regulations           standards & specifications      business operational
    legal liabilities            guidelines                        processes                System Operation
    social responsibilities      domain technologies               constraints                       IT System
    technology base              local culture                     policies
                                                                                           Software
    labor pool                                                     rules
                                                                                         Requirement
    competing products                                             modes
                                                                   quality            System
    standards & specifications                     Business                                            Software
                                                                        Business Requirement
    public culture                                Management
                                                                       Operational
                                                  Requirement
                                                                       Requirement




                      Figure 4 — Typical Requirement Types According to System Scope

As described in Clause 5.3, requirements processes and their resultant specifications depend on the system
scope on which the requirements are to be defined. Requirements for an Information Technology (IT) system
to be developed or changed are subject to enterprise level requirements for the business or organizational
operation. The requirements for the IT system are allocated and derived to subsystems/segments and lower-
tier hardware/software elements progressively. A typical view for the structure of multiple system scopes and
corresponding requirements types is illustrated in Figure 4.

NOTE         Figure 4 adapted from INCOSE System Engineering Handbook: Appendix I Requirements Definition Process.

NOTE       This International Standard uses the term business as corresponding term organization which is provided in
ISO/IEC 15288 and 15289 since business is more familiar in requirements engineering context. Users of this standard
may replace each occurrence of the term business to the term organization or organizational depending on the users’
environment.

The three specifications, StRS, SyRS, and SRS, are intended to represent different types of requirement
information items. The StRS, SyRS and SRS correspond to the requirement types in Figure 4 as Business
Management Requirements and Business Operational Requirements, System Requirements, and Software
Requirements, respectively. These specification types can be applied to multiple specifications (instances)
iteratively or recursively. For example, SyRS can be used for system or system elements. The SyRS can also
be used to specify software requirements where the system is only comprised of software. The SRS can be
used for lower-tire software requirements that are software specific elements of a system or system element.
An example of the sequence of requirements processes and specifications is illustrated in Figure 5.




30                                                                                     © ISO/IEC 2009 – All rights reserved
                                                                                                         ISO/IEC CD 29148



 External Environment         Enterprise Environment

    top level needs                      business
                              Req.                                            Business Operation
                                         management
                            Process      requirement
                          (enterprise)                                                System Operation
                                         StRS
                                                                business
                                                   Req.         Operational                         IT System
                                                                requirement
                                                  Process                                                Subsystem A
                                         needs
                                                 (business)                                    Req.
                                                                StRS                         Process       SyRS
                                                                         Req.                (system)
                                                              needs    Process
                                                                       (system)                          Subsystem B
                                                                                     SyRS
                                                                                               Req.             Software
                                                                                   needs      Process       SRS
                                                                                            (software)




           Figure 5 — Example of the Sequence of Requirements Processes and Specifications

 7.2 General

7.2.1    Stakeholder requirement specification (StRS)

The StRS describes the business motivation for why the system is being developed or changed. The StRS
describes how the enterprise is pursuing new business or changing the current business in order to fit a new
business environment, and how to utilize the system as a means to contribute to the business. The description
includes, at the enterprise level; business environment, goal and objective, business model, and information
environment, and at the business operation level; business operation model, business operation modes,
business operational quality, organizational formation, and concept of the proposed system.

The information items of the StRS should be specified by the stakeholders. The stakeholder/customer should
be responsible for the content of the specification. The StRS serves as the basis of the stakeholder's active
participation in the requirement processes.

NOTE: ISO/IEC 15289 provides guidance to include business, organizational, and user (stakeholder) requirements in the
system requirements specification. This international standard includes these requirements in the StRS since thy contents
should be specified from the stakeholder's perspective. They may be succeeded in SyRS by addressing technical concern.

NOTE        The StRS is known as Business Requirement Specification (BRS) in many industries. Users of this
International Standard may replace SyRS with BRS depending on the users' environment.

The StRS provides a representation of the ConOps and OpsCon in the form of information items. The
business management requirements and business operational requirements in the StRS provides the
information items corresponding to the ConOps and OpsCon, respectively. Annex A provides more detailed
information on the contents of the OpsCon.

7.2.2    System requirements specification

The purpose of the system requirements specification (SyRS) is to provide a "black-box" description of what
the system should do, in terms of the system's interactions or interfaces with its external environment. The
SyRS should completely describe all inputs, outputs, and required relationships between inputs and outputs. A
SyRS has traditionally been viewed as a document that communicates the requirements of the customer to
the technical community who will specify and build the system. The collection of requirements that constitutes
the specification and its representation acts as the bridge between the two groups and must be
understandable by both the customer and the technical community. One of the most difficult tasks in the



© ISO/IEC 2009 – All rights reserved                                                                                       31
ISO/IEC CD 29148



creation of a system is that of communicating to all of the subgroups within both groups, especially in one
document. This type of communication generally requires different formalisms and languages.

The SyRS presents the results of the definition of need, the operational concept, and the system analysis
tasks. As such, it is a description of what the system's customers expect it to do for them, the system's
expected environment, the system's usage profile, its performance parameters, and its expected quality and
effectiveness. An example outline of a SyRS is shown in Figure 6.
                        1. Introduction
                                1.1 System purpose
                                1.2 System scope
                                1.3 Definitions, acronyms, and abbreviations
                                1.4 References
                                1.5 System overview
                        2. General System Description
                                2.1 System context
                                2.2 System modes and states
                                2.3 Major system capabilities
                                2.4 Major system conditions
                                2.5 Major system constraints
                                2.6 User characteristics
                                2.7 Assumptions and dependencies
                                2.8 Operational scenarios
                        3. System capabilities, Conditions, and Constraints
                                3.1 Physical
                                         3.1.1 Construction
                                         3.1.2 Durability
                                         3.1.3 Adaptability
                                         3.1.4 Environmental conditions
                                3.2 System performance characteristics
                                3.3 System security
                                3.4 Information management
                                3.5 System Operations
                                         3.5.1 System human factors
                                         3.5.2 System maintainability
                                         3.5.3 System reliability
                                3.6 Policy and regulation
                                3.7 System life cycle sustainment
                        4. System Interfaces

                                    Figure 6 — Example SyRS Outline

This International Standard suggests a distinction between this structured collection of information and the
way in which it is presented to its various audiences. The presentation of the SyRS should take a form that is
appropriate for its intended use. This can be a paper document, models, prototypes, other non-paper
document representations, or any combination. All of these representations can be derived from this one
SyRS to meet the needs of a specific audience. However, care should be taken to ensure that each of these
presentations is traceable to a common source of system requirements information. The audience should be
made aware that this structured collection of information remains the one definitive source for resolving
ambiguities in the particular presentation chosen.




32                                                                              © ISO/IEC 2009 – All rights reserved
                                                                                             ISO/IEC CD 29148



This International Standard also makes a clear distinction between the system requirements (what the system
must do) contained in the SyRS and process requirements (how to construct the system) that should be
contained in contract documents such as a Statement of Work.

7.2.3    Software requirements specification

The software requirements specification (SRS) is a specification for a particular software product, program, or
set of programs that performs certain functions in a specific environment. The SRS may be written by one or
more representatives of the supplier, one or more representatives of the customer, or by both.

It is important to consider the part that the SRS plays in the total project plan. The software may contain
essentially all the functionality of the project or it may be part of a larger system. In the latter case typically
there will be a requirement specification that will state the interfaces between the system and its software
portion, and will place external performance and functionality requirements upon the software portion. Of
course the SRS should then agree with and expand upon these system requirements.
The specific requirements clause of the SRS should be organized such that a consensus of the system
stakeholders agrees that the organization method aids understanding of the requirements. There is no one
optimal organization for all systems. Each of the organizational descriptions references one or more SRS
templates in Annex B which provide different outlines for organizing the specific requirements.

An example outline for an SRS is in Figure 7

                              1. Introduction
                                      1.1 Purpose
                                      1.2 Scope
                                      1.3 Definitions, acronyms, and abbreviations
                                      1.4 References
                                      1.5 Overview
                              2. Overall Description
                                      2.1 Product perspective
                                      2.2 Product functions
                                      2.3 User characteristics
                                      2.7 Assumptions and dependencies
                              3. Specific Requirements
                                      3.1 External interfaces
                                      3.2 Functions
                                      3.3 Performance requirements
                                      3.4 Logical database requirements
                                      3.5 Design constraints
                                      3.6 Software system attributes

                                       Figure 7 — Example SRS Document Outline

7.3 Stakeholder requirements specification (StRS) document

This clause defines the normative content of the stakeholder requirements specification (StRS), and supplies
a recommended format for the StRS by way of the parenthetical numbering of StRS sections in the clause
headings.

The StRS shall include the following front matter:

a)   A Table of Contents

b)   A List of Figures



© ISO/IEC 2009 – All rights reserved                                                                            33
ISO/IEC CD 29148



c)   A List of Tables

7.3.1     Introduction (section 1 of the StRS)

The business objective clause of the StRS shall describe at the enterprise level the reason and background
for which the enterprise is pursuing new business or changing the current business in order to fit a new
management environment. In this context it should be described how the proposed system will contribute.

7.3.1.1      Business scope (section 1.1 of the StRS)

The business scope clause of the StRS shall
a)   Identify the business domain by name.

b)   Define the range of business activities included in the business domain. The scope is defined in terms of
     internal divisions or external business partners directly conducting the business processes. In addition to
     these, any stakeholders related to the business activities should be identified as external environmental
     entities for the scope; for example customers of the business concerned or authorities if the business will
     be under some legal regulations.

c)   Describe the scope of the system being developed or changed. The description includes assumptions on
     which business activities are supported by the system.

7.3.1.2      Definitions, acronyms, and abbreviations (section 1.2 of the StRS)

The definitions, acronyms, and abbreviations clause of the StRS shall provide definitions for any words or
phrases in the StRS that have special meaning beyond normal dictionary definitions.

The definitions, acronyms, and abbreviations clause of the StRS shall spell out or define all acronyms and
abbreviations used in the StRS

7.3.1.3      References (section 1 3 of the StRS)

The references clause of the StRS shall list all external documents and other references cited in the text of the
StRS.

7.3.1.4      Business overview (section 1.4 of the StRS)

The business overview clause of the StRS shall describe major organizations and external entities of the
business domain and how they are interrelated. A diagrammatic description is recommended.

7.3.2     Business management requirements (section 2 of the StRS)

7.3.2.1      Business environment (section 2.1 of the StRS)

The business environment clause of the StRS shall define external and internal environmental factors that
should be taken into consideration in understanding the new or existing business and eliciting the stakeholder
requirements to the system to be developed or changed. The environmental factors should include possible
influences to the business and consequently the system from external conditions like market trends, laws and
regulations, social responsibilities, and technology base.

7.3.2.2      Goal and Objective (section 2.2 of the StRS)

The goal and objective clause of the StRS shall define enterprise level decisions on desired results to be
achieved by the new business and consequently the system to be developed or changed. Specifically, the
goals and objectives are expressed as follows:




34                                                                                © ISO/IEC 2009 – All rights reserved
                                                                                              ISO/IEC CD 29148



a)   Goal - tends to be longer term, and defined qualitatively rather than quantitatively. It should be narrow -
     focused enough that objectives can be defined for it.

b)   Objective - is a step along the way towards a goal. It must have an end date, and criteria to determine
     whether it has been reached or not. Objectives provide the basis for measuring whether progress is being
     made towards goals.

NOTE         Expressions above are extracted from Business Motivation Model (BMM) Specification by OMG.

7.3.2.3     Business model (section 2.3 of the StRS)

The business model clause of the StRS shall describe methods by which the business goal is expected to be
achieved. The description should be concentrated on the methods supported by the system to be developed
or changed with the items such as product and services, geographies and locales, distribution channels,
business alliance and partnership, and finance and revenue model.

NOTE      Detailed discussions and definitions of the business model elements can be found in Business Motivation
Model (BMM) Specification by OMG.

7.3.2.4     Information environment (section 2.4 of the StRS)

The information environment clause of the StRS shall describe the over-all strategy for the enterprise-level
decisions on common bases for multiple information systems. It should include the following items:

a)   a) project portfolio – when multiple system development projects are running or planed to pursue the
     same business goal, the priority, relative positioning, and possible constraints come from the portfolio
     management strategy.

b)   b) long term system plan – when common system infrastructure or architecture has been decided or
     planed, it should be described as constraints on possible design decisions.

c)   c) enterprise database configuration – an enterprise-level database configuration plan and possible
     constraints on availability and accessibility of enterprise global data should be specified.

7.3.3     Business operational requirements (section 3 of the StRS)

7.3.3.1     Business operations (section 3.1 of the StRS)

7.3.3.1.1     Business process (section 3.1.1 of the StRS)

The business process clause of the StRS shall provide a description of the procedures of business activities
and possible system interfaces within the processes. The purpose of this information item is to represent how
and in which context the system supports the business activities. In general, business processes make a
hierarchical structure with decomposition and classification. Each business process shall be uniquely named
and numbered in the hierarchy. The description of the individual business process is recommended to be in a
diagrammatic form representing a sequence of activities.

7.3.3.1.2     Business operational policies and rules (section 3.1.2 of the StRS)

The business operational policies and rules clause of the StRS shall describe logical propositions applied in
conducting the business processes. The proposition will be a condition to start, branch and terminate the
sequence of the business process, criteria for judgment in the business processes, or formula to evaluate a
quantity, which likely be succeeded in functional requirements in the SyRS and SRS. The policies and rules
shall be uniquely named and numbered, and shall be referenced in the description of business processes in
clause 7.3.3.1.1.




© ISO/IEC 2009 – All rights reserved                                                                          35
ISO/IEC CD 29148



7.3.3.1.3    Business operational constraints (section 3.1.3 of the StRS)

The business operational constraints clause of the StRS shall describe conditions to be imposed in conducting
the business process. The condition may be on a performance constraint (e.g. the process must be finished
within a day after the triggering event occurs), or may be from a management requisite such as "every
occurrence of the process must be monitored and recorded".

7.3.3.2     Business operation modes (section 3.2 of the StRS)

The business operation modes clause of the StRS shall describe methods to conduct the business operation
in an unsteady state, for example, a state when business operations might be extremely busy due to some
intensive occurrence of events. An unsteady state of business operation includes a manual operation mode
when the proposed system is not available due to some unexpected situation like an accident or natural
disaster.

7.3.3.3     Business operational quality (section 3.3 of the StRS)

The business operational quality clause of the StRS shall define the level of quality required for the business
operation. For example, a business process may address required urgency with a higher priority than the
reliability of the business process.

7.3.3.4     Organizational formation (section 3.4 of the StRS)

The organizational formation clause of the StRS shall define which division is responsible for the business
operation, which is responsible for the requirements to the system, and which is for the system operation. It
may need to organize new divisions, or change the duties and authorizations of current divisions.

7.3.3.5     Concept of proposed system (section 3.5 of the StRS)

7.3.3.5.1    Operational concept (section 3.5.1 of the StRS)

The operational concept clause of the StRS shall describe the proposed system in a high-level manner,
indicating the operational features that are to be provided without specifying design details. The information
items shall include the following:

a)   a) Operational policies and constraints

b)   b) Description of the proposed system

c)   c) Modes of system operation

d)   d) User classes and other involved personnel

e)   e) Support environment

NOTE        Detailed information items of OpsCon are guided in Annex A.

7.3.3.5.2    Operational scenario (section 3.5.2 of the StRS)

The operational scenario clause of the StRS shall describe examples of how users/operators will interact with
the system. A scenario shall be described for an activity or a series of activities of business processes that is
supported by the system. The scenario shall be uniquely named and numbered, and shall be referenced in the
description of the business processes in 7.3.3.1.1.




36                                                                                © ISO/IEC 2009 – All rights reserved
                                                                                                  ISO/IEC CD 29148



 7.4 System requirements specification (SyRS) document

This clause defines the normative content of a system requirements specification (SyRS), and supplies a
recommended format for the SyRS by way of the parenthetical numbering of SyRS sections in the clause
headings.

NOTE         This SyRS outline can be used, with tailoring, for subordinate specifications for system elements, even those
that include software.

The SyRS shall include the following front matter:

a) A Table of Contents

b) A List of Figures

c) A List of Tables

7.4.1     Introduction (section 1 of the SyRS)

7.4.1.1     System purpose (section 1.1 of the SyRS)

The system purpose clause of the SyRS shall define the reason(s) for which the system is being developed or
modified.

7.4.1.2     System scope (section 1.2 of the SyRS)

The system scope clause of the SyRS shall
a)   Identify the system to be produced by name.

b)   Refer to and state the results of the earlier finalized needs analysis, in the form of a brief but formal
     expression of the customer's problem(s). Explain what the system will and will not do to satisfy those
     needs.

c)   Describe the application of the system being specified. As a portion of this, it should describe all relevant
     top level benefits, objectives, and goals as precisely as possible.

7.4.1.3     Definitions, acronyms, and abbreviations (section 1.3 of the SyRS)

The definitions, acronyms, and abbreviations clause of the SyRS shall provide definitions for any words or
phrases in the SyRS that have special meaning beyond normal dictionary definitions.

The definitions, acronyms, and abbreviations clause of the SyRS shall spell out or define all acronyms and
abbreviations used in the SyRS.

7.4.1.4     References (section 1 4 of the SyRS)

The references clause of the SyRS shall list all external documents and other references cited in the text of
the SyRS.

7.4.1.5     System overview (section 1.5 of the SyRS)

The system overview clause of the SyRS shall describe at a general level the major elements of the system,
to include human elements, and how they interact.




© ISO/IEC 2009 – All rights reserved                                                                                  37
ISO/IEC CD 29148



7.4.2     General system description (section 2 of the SyRS)

7.4.2.1     System context (section 2.1 of the SyRS)

The system context clause of the SyRS shall include appropriate diagrams and narrative to provide an
overview of the context of the system, defining all significant interfaces crossing the system's boundaries.

7.4.2.2     System modes and states (section 2.2 of the SyRS)

If the system can exist in various modes or states, the system modes and states clause of the SyRS shall
define these and, as appropriate, use diagrams.

7.4.2.3     Major system capabilities (section 2.3 of the SyRS)

The major system capabilities clause of the SyRS shall provide diagrams and accompanying narrative to
show major capability groupings of the requirements.

7.4.2.4     Major system conditions (section 2.4 of the SyRS)

The major system conditions clause of the SyRS shall define the physical and logical conditions under which
the system is required to operate.

7.4.2.5     Major system constraints (section 2.5 of the SyRS)

The major system constraints clause of the SyRS shall define any constraints under which the system must
operate, and any constraints on the system design.

7.4.2.6     User characteristics (section 2.6 of the SyRS)

The user characteristics clause of the SyRS shall identify each type of user of the system (by function,
location, type of device), the number in each group, and the nature of their use of the system.

NOTE         Where appropriate, the user characteristics clause of the SyRS and SRS should be consistent.

7.4.2.7     Assumptions and dependencies (section 2.7 of the SyRS)

The assumptions and dependencies clause of the SyRS shall list any assumptions and dependencies
applicable to the system requirements that should be taken into account in the allocation and derivation of
lower-level system requirements.

7.4.2.8     Operational scenarios (section 2.8 of the SyRS)

The operational scenarios clause of the SyRS shall provide descriptive examples of how the system will be
used.

7.4.3     System capabilities, conditions, and constraints (section 3 of the SyRS)

NOTE: System behaviour, exception handling, manufacturability, and deployment shall be covered as
applicable under each capability, condition and constraint.

7.4.3.1     Physical (section 3.1 of the SyRS)

7.4.3.1.1     Construction (section 3.1.1 of the SyRS)

The construction clause of the SyRS shall include the environmental (mechanical, electrical, chemical)
characteristics of where the system will be installed. For example, the weight limits of the system, moments of



38                                                                                      © ISO/IEC 2009 – All rights reserved
                                                                                          ISO/IEC CD 29148



inertia, dimensional and volume limitations, crew space, operator station layout, ingress, egress, and access
for maintenance should be specified here.

The construction clause of the SyRS shall include requirements for materials to be used in the item or service
covered by this specification.

The construction clause of the SyRS shall include requirements covering nameplates and system markings,
interchangeability of equipment, and workmanship.

7.4.3.1.2     Durability (section 3.1.2 of the SyRS)

The durability clause of the SyRS shall define all durability requirements of the assembled, completed system.

7.4.3.1.3     Adaptability (section 3.1.3 of the SyRS)

The adaptability clause of the SyRS shall define requirements for growth, expansion, capability, and
contraction. For example, if the system will require future network bandwidth, the applicable hardware should
be specified with extra card slots to accommodate new network cards as demand increases.

7.4.3.1.4     Environmental conditions (section 3.1.4 of the SyRS)

The environmental conditions clause of the SyRS shall include environmental conditions to be encountered by
the system. The following areas shall be addressed: natural environment (wind, rain, temperature); induced
environment (motion, shock, noise); and electromagnetic signal environment.

7.4.3.2     System performance characteristics (section 3.2 of the SyRS)

The system performance characteristics clause of the SyRS shall define the critical performance conditions
and their associated capabilities by including such considerations as
a)   Dynamic actions or changes that occur (e.g., rates, velocities, movements, and noise levels).

b)   Quantitative criteria covering endurance capabilities of the equipment required to meet the user needs
     under stipulated environmental and other conditions, including minimum total life expectancy. Indicate
     required operational session duration and planned utilization rate.

c)   Performance requirements for the operational phases and modes.

7.4.3.3     System security (section 3.3 of the SyRS)

The system security clause of the SyRS shall define the system security requirements related to both the
facility that houses the system and operational security requirements of the system itself. One example of
security requirements might be to specify the security and privacy requirements, including access limitations to
the system, such as existence of log-on procedures and passwords, and of data protection and recovery
methods. This could include the factors that would protect the system from accidental or malicious access,
use, modification, destruction, or disclosure. Especially in safety-critical embedded systems this might
incorporate a distributed log or history of data sets, the assignment of certain functions to different single
systems, or the restriction of communications between some areas of the system.

7.4.3.4     Information management (section 3.4 of the SyRS)

The information management clause of the SyRS shall define the requirements for the system's management
of information that it receives, generates, or exports. Examples include types and amounts of information the
system is required to receive and store, any proprietary or other protections levied on the information the
system deals with, and what backup and archiving requirements exist for the information.




© ISO/IEC 2009 – All rights reserved                                                                         39
ISO/IEC CD 29148



7.4.3.5     System operations (section 3.5 of the SyRS)

7.4.3.5.1     System human integration (section 3.5.1 of the SyRS)

The system human integration clause of the SyRS shall reference applicable documents and specify any
special or unique requirements, e.g., constraints on allocation of functions to personnel and communications
and personnel/equipment interactions.

The system human integration clause of the SyRS shall define any specific areas, stations, or equipment that
would require concentrated human engineering attention due to the sensitivity of the operation or criticality of
the task (i.e., those areas where the effects of human error would be particularly serious).

NOTE        ISO 18529, Ergonomics — Ergonomics of human-system interaction — Human-centred lifecycle process
descriptions, contains a formalized model that can be used in the specification, assessment and improvement of the
human-cantered processes in system development and operation.

7.4.3.5.2     System maintainability (section 3.5.2 of the SyRS)

The system maintainability clause of the SyRS shall specify the quantitative maintainability requirements that
apply to maintenance in the planned maintenance and support environment. Examples are as follows:
a)   Time (e.g., mean and maximum downtime, reaction time, turnaround time, mean and maximum times to
     repair, mean time between maintenance actions)

b)   Rate (e.g., maintenance staff hours per specific maintenance action, operational ready rate, maintenance
     time per operating hour, frequency of preventative maintenance)

c)   Maintenance complexity (e.g., number of people and skill levels, variety of support equipment)

d)   Maintenance action indices (e.g., maintenance costs per operating hour, staff hours per overhaul)

7.4.3.5.3     System reliability (section 3.5.3 of the SyRS)

The system reliability clause of the SyRS shall specify the system reliability requirements in quantitative terms,
including the conditions under which the reliability requirements are to be met. This clause may also include
the reliability apportionment model to support allocation of reliability values assigned to system functions for
their share in achieving desired system reliability.

7.4.3.6     Policy and regulation (section 3.6 of the SyRS)

The policy and regulation clause of the SyRS shall detail any relevant organizational policies that will affect
the operation or performance of the system as well as any relevant external regulatory requirements, or
constraints imposed by normal business practices. Examples of requirements include multilingual support,
labour policies, protection of personnel information, and reports to a regulatory agency.
The policy and regulation clause of the SyRS shall specify and health and safety criteria, including those basic
to the design of the system, with respect to equipment characteristics, methods of operation, and
environmental influences such as toxic systems and electromagnetic radiation.

7.4.3.7     System life cycle sustainment (section 3.7 of the SyRS)

The system life cycle sustainment clause of the SyRS shall outline quality activities, such as review, and
measurement collection and analysis, to help realize a quality system.

7.4.4     System interfaces (section 4 of the of the SyRS)

The system interfaces clause of the SyRS shall specify requirements for interfaces among different elements
and their external capabilities, including all its users, both human and other systems. The characteristics of
interfaces to systems under development, or future systems, shall be included.



40                                                                                 © ISO/IEC 2009 – All rights reserved
                                                                                            ISO/IEC CD 29148



The system interfaces clause of the SyRS shall define any interdependencies or constraints associated with
the interfaces should also be identified (e.g., communication protocols, special devices, standards, fixed
formats). Each interface may represent a bidirectional flow of information. A graphic representation of the
interfaces shall be used when appropriate for the sake of clarity.

 7.5 Software requirements specification (SRS) document

This clause defines the normative content of the software requirements specification (SRS), and supplies a
recommended format for the SRS by way of the parenthetical numbering of SRS sections in the clause
headings.

The SRS shall include the following informational matter:

a) A Table of Contents

b) Index

7.5.1     Introduction (section 1 of the SRS)

The introduction of the SRS shall contain the following subsections:
a)   Purpose;

b)   Scope;

c)   Definitions, acronyms, and abbreviations;

d)   References;

e)   Overview.

7.5.1.1     Purpose (section 1.1 of the SRS)

The purpose clause of the SRS shall
a)   Delineate the purpose of the SRS;

b)   Specify the intended audience for the SRS.

7.5.1.2     Scope (section 1.2 of the SRS)

The scope clause of the SRS shall
a)   Identify the software product(s) to be produced by name (e.g., Host DBMS, Report Generator, etc.);

b)   Explain what the software product(s) will, and, if necessary, will not do;

c)   Describe the application of the software being specified, including relevant benefits, objectives, and goals;

d)   Be consistent with similar statements in higher-level specifications (e.g., the system requirements
     specification), if they exist.

7.5.1.3     Definitions, acronyms, and abbreviations (section 1.3 of the SRS)

The definitions, acronyms, and abbreviations clause of the SRS shall provide the definitions of all terms,
acronyms, and abbreviations required to properly interpret the SRS. This information may be provided by
reference to one or more appendixes in the SRS or by reference to other documents.




© ISO/IEC 2009 – All rights reserved                                                                           41
ISO/IEC CD 29148



7.5.1.4     References (section 1.4 of the SRS)

The references clause of the SRS shall
a)   Provide a complete list of all documents referenced elsewhere in the SRS;

b)   Identify each document by title, report number (if applicable), date, and publishing organization;

c)   Specify the sources from which the references can be obtained.

This information may be provided by reference to an appendix or to another document.

7.5.1.5     Overview (section 1.5 of the SRS)

The overview clause of the SRS shall
a)   Describe what the rest of the SRS contains;

b)   Explain how the SRS is organized.

7.5.2     Overall description (section 2 of the SRS)

This section of the SRS describes the general factors that affect the product and its requirements. This section
does not state specific requirements. Instead, it provides a background for those requirements, which are
defined in detail in Section 3 of the SRS, and makes them easier to understand. This section usually consists
of six subsections, as follows:
a)   Product perspective;

b)   Product functions;

c)   User characteristics;

d)   Constraints;

e)   Assumptions and dependencies;

f)   Apportioning of requirements.

7.5.2.1     Product perspective (section 2.1 of the SRS)

The product perspective clause of the SRS shall define the system's relationship to other related products.
If the product is independent and totally self-contained, the product perspective clause of the SRS shall state
that fact.
If the SRS defines a product that is an element of a larger system, then the product perspective clause of the
SRS shall relate the requirements of that larger system to the functionality of the product covered by the SRS.
If the SRS defines a product that is an element of a larger system, then the product perspective clause of the
SRS shall identify the interfaces between the product covered by the SRS and the larger system of which the
product is an element.
A block diagram showing the major elements of the larger system, interconnections, and external interfaces
can be helpful.
The product perspective clause of the SRS shall describe how the software operates within the following
constraints:
a)   System interfaces;

b)   User interfaces;




42                                                                                 © ISO/IEC 2009 – All rights reserved
                                                                                                      ISO/IEC CD 29148



c)   Hardware interfaces;

d)   Software interfaces;

e)   Communications interfaces;

f)   Memory;

g)   Operations;

h)   Site adaptation requirements.

7.5.2.1.1     System interfaces (section 2.1.1 of the SRS)

The system interfaces clause of the SRS shall list each system interface and identify the functionality of the
software to accomplish the system requirement and the interface description to match the system.

7.5.2.1.2     User interfaces (section 2.1.2 of the SRS)

The user interfaces clause of the SRS shall specify the following:
a)   The logical characteristics of each interface between the software product and its users. This includes
     those configuration characteristics (e.g., required screen formats, page or window layouts, content of any
     reports or menus, or availability of programmable function keys) necessary to accomplish the software
     requirements.

b)   All the aspects of optimizing the interface with the person who must use maintain, or provide other
     support to the system. This may simply comprise a list of do's and don'ts on how the system will appear
     to the user. One example may be a requirement for the option of long or short error messages This may
     also be specified in the Software System Attributes under a section titled Ease of Use.

NOTE        A style guide for the user interface can provide consistent rules for organization, coding, and interaction of the
user with the system.

7.5.2.1.3     Hardware interfaces (section 2.1.3 of the SRS)

The hardware interfaces clause of the SRS shall specify the logical characteristics of each interface between
the software product and the hardware elements of the system. This includes configuration characteristics
(number of ports, instruction sets, etc.). It also covers such matters as what devices are to be supported, how
they are to be supported, and protocols. For example, terminal support may specify full-screen support as
opposed to line-by-line support.

7.5.2.1.4     Software interfaces (section 2.1.4 of the SRS)

The software interfaces clause of the SRS shall specify the use of other required software products (e.g., a
data management system, an operating system, or a mathematical package), and interfaces with other
application systems (e.g., the linkage between an accounts receivable system and a general ledger system).
For each required software product, the software interfaces clause of the SRS shall specify:
a)   Name;

b)   Mnemonic;

c)   Specification number;

d)   Version number;

e)   Source.




© ISO/IEC 2009 – All rights reserved                                                                                      43
ISO/IEC CD 29148



For each interface the software interfaces clause of the SRS shall specify:
a)   Discussion of the purpose of the interfacing software as related to this software product.

b)   Definition of the interface in terms of message content and format. It is not necessary to detail any well-
     documented interface, but a reference to the document defining the interface is required.

7.5.2.1.5    Communications interfaces (section 2.1.5 of the SRS)

The communications interfaces clause of the SRS shall specify the various interfaces to communications such
as local network protocols.

7.5.2.1.6    Memory constraints (section 2.1.6 of the SRS)

The memory constraints clause of the SRS shall specify any applicable characteristics and limits on primary
and secondary memory.

7.5.2.1.7    Operations (section 2.1.7 of the SRS)

The operations clause of the SRS shall specify the normal and special operations required by the user such
as
a)   The various modes of operations in the user organization (e.g., user-initiated operations);

b)   Periods of interactive operations and periods of unattended operations;

c)   Data processing support functions;

d)   Backup and recovery operations.

NOTE: This is sometimes specified as part of the User Interfaces section.

7.5.2.1.8    Site adaptation requirements (section 2.1.8 of the SRS)

The site adaptation requirements clause of the SRS shall
a)   Define the requirements for any data or initialization sequences that are specific to a given site, mission,
     or operational mode (e.g., grid values, safety limits, etc.);

b)   Specify the site or mission-related features that should be modified to adapt the software to a particular
     installation.

7.5.2.2     Product functions (section 2.2 of the SRS)

The product functions clause of the SRS shall provide a summary of the major functions that the software will
perform. For example, an SRS for an accounting program may use this part to address customer account
maintenance, customer statement, and invoice preparation without mentioning the vast amount of detail that
each of those functions requires.
Sometimes the function summary that is necessary for this part can be taken directly from the section of the
higher-level specification (if one exists) that allocates particular functions to the software product.
Note that for the sake of clarity
a)   The product functions clause of the SRS shall organize the functions in a way that makes the list of
     functions understandable to the customer or to anyone else reading the document for the first time.

b)   Textual or graphical methods can be used to show the different functions and their relationships. Such a
     diagram is not intended to show a design of a product, but simply shows the logical relationships among
     variables.




44                                                                                 © ISO/IEC 2009 – All rights reserved
                                                                                                 ISO/IEC CD 29148



7.5.2.3     User characteristics (section 2.3 of the SRS)

The user characteristics clause of the SRS shall describe those general characteristics of the intended users
of the product including educational level, experience, and technical expertise. The user characteristics clause
of the SRS should not be used to state specific requirements, but rather should provide the reasons why
certain specific requirements are later specified in Section 3 of the SRS.

NOTE         Where appropriate, the user characteristics clause of the SyRS and SRS should be consistent.

7.5.2.4     Constraints (section 2.4 of the SRS)

The constraints clause of the SRS shall provide a general description of any other items that will limit the
developer's options, including
a)   Regulatory policies;

b)   Hardware limitations (e.g., signal timing requirements);

c)   Interfaces to other applications;

d)   Parallel operation;

e)   Audit functions;

f)   Control functions;

g)   Higher-order language requirements;

h)   Signal handshake protocols (e.g., XON-XOFF, ACK-NACK);

i)   Reliability requirements;

j)   Criticality of the application;

k)   Safety and security considerations.

7.5.2.5     Assumptions and dependencies (section 2.5 of the SRS)

The assumptions and dependencies clause of the SRS shall list each of the factors that affect the
requirements stated in the SRS. These factors are not design constraints on the software but any changes to
these factors can affect the requirements in the SRS. For example, an assumption may be that a specific
operating system will be available on the hardware designated for the software product. If, in fact, the
operating system is not available, the SRS would then have to change accordingly.

7.5.2.6     Apportioning of requirements (section 2.6 of the SRS)

The apportioning of requirements clause of the SRS shall identify requirements that may be delayed until
future versions of the system.

7.5.3     Specific requirements (section 3 of the SRS)

The specific requirements clause of the SRS shall contain all of the software requirements to a level of detail
sufficient to enable designers to design a system to satisfy those requirements.
The specific requirements clause of the SRS shall contain all of the software requirements to a level of detail
sufficient to enable testers to test that the system satisfies those requirements.
Every stated requirement in the specific requirements clause of the SRS shall be externally perceivable by
users, operators, or other external systems.




© ISO/IEC 2009 – All rights reserved                                                                          45
ISO/IEC CD 29148



The specific requirements clause of the SRS shall at a minimum contain a description of every input (stimulus)
into the system, every output (response) from the system, and all functions performed by the system in
response to an input or in support of an output.
The requirements stated in the specific requirements clause of the SRS shall comply with the following
principles:
a)   Specific requirements shall be stated in conformance with all the characteristics described in clause 5.2.

b)   Specific requirements shall be cross-referenced to earlier documents that relate.

c)   Each requirement shall be uniquely identifiable.

d)   Priority shall be given to organizing the requirements for readability.

Before examining specific ways of organizing the requirements, it is helpful to understand the various items
that comprise requirements as described in 7.5.3.1 through 7.5.3.7.

7.5.3.1    External interfaces

The external interfaces clause of the SRS shall contain a detailed definition of all inputs into and outputs from
the software system. The description should complement the interface descriptions in 7.5.2.1.3 and 7.5.2.1.4,
and should not repeat information there.
Each interface defined in the external interfaces clause of the SRS shall include the following content:
a)   Name of item;

b)   Description of purpose;

c)   Source of input or destination of output;

d)   Valid range, accuracy, and/or tolerance;

e)   Units of measure;

f)   Timing;

g)   Relationships to other inputs/outputs;

h)   Screen formats/organization;

i)   Window formats/organization;

j)   Data formats;

k)   Command formats;

l)   Endmessages.

7.5.3.2    Functions

The functions clause of the SRS shall contain the requirements statements that define the fundamental
actions that must take place in the software in accepting and processing the inputs and in processing and
generating the outputs, including
a)   Validity checks on the inputs

b)   Exact sequence of operations

c)   Responses to abnormal situations, including



46                                                                                 © ISO/IEC 2009 – All rights reserved
                                                                                         ISO/IEC CD 29148



     1)        Overflow

     2)        Communication facilities

     3)        Error handling and recovery

d) Effect of parameters

e) Relationship of outputs to inputs, including

     1)        Input/output sequences

     2)        Formulas for input to output conversion

It may be appropriate to partition the functional requirements into subfunctions or subprocesses. This does
not imply that the software design will also be partitioned that way.

7.5.3.3     Performance requirements

The performance requirements clause of the SRS shall contain the requirements statements that specify both
the static and the dynamic numerical requirements placed on the software or on human interaction with the
software as a whole.
Static numerical requirements may include the following:
a)   The number of terminals to be supported;

b)   The number of simultaneous users to be supported;

c)   Amount and type of information to be handled.

Static numerical requirements are sometimes identified under a separate section entitled Capacity.

Dynamic numerical requirements may include, for example, the numbers of transactions and tasks and the
amount of data to be processed within certain time periods for both normal and peak workload conditions.

The requirements statements in the performance requirements clause of the SRS shall be stated in
measurable terms.
For example,
                95% of the transactions shall be processed in less than 1 second.
rather than,
                An operator shall not have to wait for the transaction to complete.
NOTE: Numerical limits applied to one specific function are normally specified as part of the processing
subparagraph description of that function.

7.5.3.4     Logical database requirements

The logical database requirements clause of the SRS shall specify the logical requirements for any
information that is to be placed into a database, including:
a)   Types of information used by various functions;

b)   Frequency of use;

c)   Accessing capabilities;

d)   Data entities and their relationships;



© ISO/IEC 2009 – All rights reserved                                                                          47
ISO/IEC CD 29148



e)   Integrity constraints;

f)   Data retention requirements.

7.5.3.5     Design constraints

The design constraints clause of the SRS shall specify constraints on the system design imposed by external
standards, regulatory requirements, or project limitations.

7.5.3.5.1    Standards compliance

The standards compliance clause of the SRS shall specify the requirements derived from existing standards
or regulations, including:
a)   Report format;

b)   Data naming;

c)   Accounting procedures;

d)   Audit tracing.

For example, this could specify the requirement for software to trace processing activity. Such traces are
needed for some applications to meet minimum regulatory or financial standards. An audit trace requirement
may, for example, state that all changes to a payroll database must be recorded in a trace file with before and
after values.

7.5.3.6     Software system attributes

The software system attributes clause of the SRS shall specify the required attributes of the software product.
Sections 7.4.3.6.1 through 7.4.3.6.5 provide a partial list of examples.

7.5.3.6.1    Reliability

The reliability clause of the SRS shall specify the factors required to establish the required reliability of the
software system at time of delivery.

7.5.3.6.2    Availability

The availability clause of the SRS shall specify the factors required to guarantee a defined availability level for
the entire system such as checkpoint, recovery, and restart.

7.5.3.6.3    Security

The security clause of the SRS shall specify the requirements to protect the software from accidental or
malicious access, use, modification, destruction, or disclosure.
a)   Specific requirements in this area could include the need to

b)   Utilize certain cryptographic techniques;

c)   Keep specific log or history data sets;

d)   Assign certain functions to different modules;

e)   Restrict communications between some areas of the program;

f)   Check data integrity for critical variables.



48                                                                                  © ISO/IEC 2009 – All rights reserved
                                                                                           ISO/IEC CD 29148



7.5.3.6.4     Maintainability

The maintainability clause of the SRS shall specify attributes of software that relate to the ease of
maintenance of the software itself. These may include requirements for certain modularity, interfaces, or
complexity limitation.
Requirements should not be placed here just because they are thought to be good design practices.

7.5.3.6.5     Portability

The portability clause of the SRS shall specify attributes of software that relate to the ease of porting the
software to other host machines and/or operating systems, including:
a)   Percentage of elements with host-dependent code;

b)   Percentage of code that is host dependent;

c)   Use of a proven portable language;

d)   Use of a particular compiler or language subset;

e)   Use of a particular operating system.

7.5.3.7     Organizing the specific requirements

The specific requirements clause of the SRS shall be organized such that a consensus of the system
stakeholders agrees that the organization method aids understanding of the requirements. There is no one
optimal organization for all systems. Different classes of systems lend themselves to different organizations of
requirements in Section 3 of the SRS. Some of these organizations are described in 7.5.3.7.1 through
7.5.3.7.7. Each of the organizational descriptions references one or more SRS templates in Annex B which
provide different outlines for organizing the specific requirements.

7.5.3.7.1     System mode

Some systems behave quite differently depending on the mode of operation. For example, a control system
may have different sets of functions depending on its mode: training, normal, or emergency. When organizing
this section by mode, the outline in clause B.1 or B.2 should be used. The choice depends on whether
interfaces and performance are dependent on mode.

7.5.3.7.2     User class

Some systems provide different sets of functions to different classes of users. For example, an elevator
control system presents different capabilities to passengers, maintenance workers, and fire-fighters. When
organizing this section by user class, the outline in clause B.3 should be used.

7.5.3.7.3     Objects

Objects are real-world entities that have a counterpart within the system. For example, in a patient monitoring
system, objects include patients, sensors, nurses, rooms, physicians, medicines, etc. Associated with each
object is a set of attributes (of that object) and functions (performed by that object). These functions are also
called services, methods, or processes. When organizing this section by object, the outline in clause B.4
should be used. Note that sets of objects may share attributes and services. These are grouped together as
classes.

7.5.3.7.4     Feature

A feature is an externally desired service by the system that may require a sequence of inputs to effect the
desired result. For example, in a telephone system, features include local call, call forwarding, and conference




© ISO/IEC 2009 – All rights reserved                                                                          49
ISO/IEC CD 29148



call. Each feature is generally described in a sequence of stimulus-response pairs. When organizing this
section by feature, the outline in clause B.5 should be used.

7.5.3.7.5     Stimulus

Some systems can be best organized by describing their functions in terms of stimuli. For example, the
functions of an automatic aircraft landing system may be organized into sections for loss of power, wind shear,
sudden change in roll, vertical velocity excessive, etc. When organizing this section by stimulus, the outline in
clause B.6 should be used.

7.5.3.7.6     Response

Some systems can be best organized by describing all the functions in support of the generation of a
response. For example, the functions of a personnel system may be organized into sections corresponding to
all functions associated with generating paychecks, all functions associated with generating a current list of
employees, etc. The outline in clause B.6 (with all occurrences of stimulus replaced with response) should be
used.

7.5.3.7.7     Functional hierarchy

When none of the above organizational schemes prove helpful, the overall functionality can be organized into
a hierarchy of functions organized by common inputs, common outputs, or common internal data access. Data
flow diagrams and data dictionaries can be used to show the relationships between and among the functions
and data. When organizing this section by functional hierarchy, the outline in clause B.7 should be used.

7.5.3.7.7.1       Other considerations for functional hierarchy organization

Whenever a new SRS is contemplated, more than one of the organizational techniques given in clause
7.5.3.7.7 may be appropriate. In such cases, organize the specific requirements for multiple hierarchies
tailored to the specific needs of the system under specification. For example, see clause B.8 for an
organization combining user class and feature. Any additional requirements may be put in a separate section
at the end of the SRS.
There are many notations, methods, and automated support tools available to aid in the documentation of
requirements. For the most part, their usefulness is a function of organization. For example, when organizing
by mode, finite state machines or state charts may prove helpful; when organizing by object, object-oriented
analysis may prove helpful; when organizing by feature, stimulus-response sequences may prove helpful; and
when organizing by functional hierarchy, data flow diagrams and data dictionaries may prove helpful.
In any of the outlines given in Annex B, those sections called "Functional Requirement n" may be described in
native language (e.g., English), in pseudocode, in a system definition language, or in four subsections titled:
Introduction, Inputs, Processing, and Outputs.

7.5.4     Supporting information

The SRS shall contain additional supporting information in Appendices (as applicable).

The appendices are not always considered part of the actual SRS and are not always necessary. They may
include
     a. Sample input/output formats, descriptions of cost analysis studies, or results of user surveys;
     b. Supporting or background information that can help the readers of the SRS;
     c.   A description of the problems to be solved by the software;
     d. Special packaging instructions for the code and the media to meet security, export, initial loading, or
        other requirements.

When appendices are included, the SRS shall explicitly state whether or not the appendixes are to be
considered part of the requirements.



50                                                                                © ISO/IEC 2009 – All rights reserved
                                                                                             ISO/IEC CD 29148



                                                  Annex A
                                               (informative)

                                         Operational Concept



A.1 Overview
An Operational Concept describes what the system will do (not how it will do it) and why (rationale). A OpsCon
is a user-oriented document that describes system characteristics of the to-be-delivered system from the
user's viewpoint. The OpsCon document is used to communicate overall quantitative and qualitative system
characteristics to the user, buyer, developer and other organizational elements.

Users of this International Standard should consider producing a separate OpsCon and SyRS documents.
The OpsCon document can then focus on all necessary requirements engineering tasks specifically from the
user's point of view, and can use vocabulary and illustration tools that are familiar to the user's experience and
knowledge base. The benefits include: definition of the issues, constraints and opportunities related to human
involvement with the system (including: system performance and usability criteria, comfort, safety, health and
motivation; work system and legislative issues, maintenance and support requirements); production of an
estimate of what has not been specified; clarification of the constraints, opportunities and degree of flexibility
required of the system; setting of priorities for the requirements.
A separate OpsCon document enables the engineering team during development of the SyRS to focus more
on the technical community and the vocabulary and knowledge base of the system developers, testers and
maintainers.


A.2 Operational concept document (OpsCon) document
This clause describes each of the essential elements of a OpsCon document. Each version of a OpsCon
document based on this guide should contain a title and a revision notice that uniquely identifies the document.
Revision information may include the project name, version number of the document, date of release,
approval signatures, a list of clauses that have been changed in the current version of the document, and a list
of version numbers and dates of release of all previous versions of the document. The approved OpsCon
document should be placed under configuration control.
NOTE        Extracted from IEEE 1362-1998; IEEE Guide for Information Technology – System Definition – Concept of
Operations (ConOps) Document, Clause 4. In this International Standard, concept of operation (ConOps) is replaced by
operational concept (OpsCon).

The preface of a OpsCon document provides information that the writer wants the reader to know prior to
reading the document. The preface should include the purpose of the document, the scope of activities that
resulted in its development, who wrote the document and why, the intended audience for the document, and
the expected evolution of the document.
A table of contents, a list of figures, and a list of tables should be included in every OpsCon document.

A.2.1 Scope (Section 1 of the OpsCon)

Section 1 provides an overview of the OpsCon document and the system to which it applies.

A.2.1.1     Identification (Section 1.1 of the OpsCon)

This clause contains the identifying number, title, and abbreviation (if applicable) of the system or subsystem
to which this OpsCon applies. If related OpsCon documents for an overall system have been developed in a
hierarchical or network manner, the position of this document relative to other OpsCon documents should be
described.



© ISO/IEC 2009 – All rights reserved                                                                             51
ISO/IEC CD 29148



A.2.1.2   Document overview (Section 1.2 of the OpsCon)

This clause summarizes and expands on the purposes of motivations for the OpsCon document. The intended
audience for the document should also be mentioned. In addition, this clause describes any security or privacy
considerations associated with use of the OpsCon. This clause also outlines the remaining parts of this guide.
The purposes of a OpsCon document will, in most cases, be:
To communicate the user’s needs for and expectations of the proposed system to the buyer and/or developer;
or
To communicate the buyer’s or developer’s understanding of the users’ need and how the system shall
operate to fulfil those needs.
However, a OpsCon document might also serve other purposes, such as building consensus among several
user groups, among several buyer organizations, and/or among several developers.
The audience of a OpsCon document can be a variety of people.
Users might read it to determine whether their needs and desires have been correctly specified by their
representative or to verify the developers understanding of their needs.
Buyers might read it to acquire knowledge of the user s needs and/or developer’s understanding of those
needs.
Developers will typically use the OpsCon document as a basis for system development activities, and to
familiarize new team members with the problem domain and the system to which the OpsCon applies.

A.2.1.3   System overview (Section 1.3 of the OpsCon)

This clause briefly states the purpose of the proposed system or subsystem to which the OpsCon applies. It
describes the general nature of the system, and identifies the project sponsors, user agencies, development
organizations, support agencies, certifiers or certifying bodies, and the operating centres or sites that will run
the system. It also identifies other documents relevant to the present or proposed system. A graphical
overview of the system is strongly recommended. This can be in the form of a context diagram, a top-level
object diagram, or some other type of diagram that depicts the system and its environment. Documents that
might be cited include, but are not limited to: the project authorization, relevant technical documentation,
significant correspondence, documents concerning related projects, risk analysis reports, and feasibility
studies.

A.2.2 Referenced documents (Section 2 of the OpsCon)

This Section lists the document number, title, revision, and date of all documents referenced in the OpsCon
document. This Section should also identify the source for all documents not available through normal
channels.

A.2.3 Current system or situation (Section 3 of the OpsCon)

Section 3 describes the system or situation (either automated or manual) as it currently exists. If there is no
current system on which to base changes, this clause describes the situation that motivates development of
the proposed system. In this case, the following clauses will be tailored as appropriate to describe the
motivating situation. This clause also provides readers with an introduction to the problem domain. This
enables readers to better understand the reasons for the desired changes and improvements.

A.2.3.1   Background, objectives, and scope (Section 3.1 of the OpsCon)

This clause provides an overview of the current system or situation, including as applicable, background,
mission, objectives, and scope. In addition to providing the background for the current system, this clause
should provide a brief summary of the motivation for the current system. Examples of motivations for a system
might include automation of certain tasks or countering of certain threat situations. The goals for the current
system should also be defined, together with the strategies, solutions, tactics, methods, and techniques used
to accomplish them. The modes of operation, classes of users, and interfaces to the operational environment
define the scope of the proposed system, which are summarized in this clause and defined in greater detail in
subsequent clauses.




52                                                                                 © ISO/IEC 2009 – All rights reserved
                                                                                              ISO/IEC CD 29148



A.2.3.2     Operational policies and constraints (Section 3.2 of the OpsCon document)

This clause describes any operational policies and constraints that apply to the current system or situation.
Operational policies are predetermined management decisions regarding the operations of the current system,
normally in the form of general statements or understandings that guide decision making activities. Policies
limit decision-making freedom but do allow for some discretion. Operational constraints are limitations placed
on the operations of the current system. Examples of operational constraints include the following:
A constraint on the hours of operation of the system, perhaps limited by access to secure terminals
A constraint on the number of personnel available to operate the system
A constraint on the computer hardware (for example, must operate on computer X)
A constraint on the operational facilities, such as office space

A.2.3.3     Description of the current system or situation (Section 3.3 of the OpsCon)

This clause will contain the major portion of the description of the current system. It provides a description of
the current system or situation, including the following, as appropriate:
a) The operational environment and its characteristics;
b) Major system elements and the interconnection among those elements;
c) Interfaces to external systems or procedures;
d) Capabilities, functions, and features of the current system;
e) Charts and accompanying descriptions depicting inputs, outputs, data flows, control flows, and manual and
automated processes sufficient to understand the current system or situation from the user’s point of view;
f) Cost of system operations;
g) Operational risk factors;
h) Performance characteristics, such as speed, throughput, volume, frequency;
i) Quality attributes, such as: availability, correctness, efficiency, expandability, flexibility, interoperability,
maintain-ability, portability, reliability, reusability, supportability, survivability, and usability; and
j) Provisions for safety, security, privacy, integrity, and continuity of operations in emergencies.
Since the purpose of this clause is to describe the current system and how it operates, it is appropriate to use
any tools and/or techniques that serve this purpose. It is important that the description of the system be simple
enough and clear enough that all intended readers of the document can fully understand it. It is also important
to keep in mind that the OpsCon document shall be written using the users’ terminology. In most cases, this
means avoidance of terminology specific to computers (i.e., ‘computer jargon’).
Graphical tools should be used wherever possible, especially since OpsCon documents should be
understandable by several different types of readers. Useful graphical tools include, but are not limited to,
work breakdown structures (WBS), N2 charts, sequence or activity charts, functional flow block diagrams,
structure charts, allocation charts, data flow diagrams (DFD), object diagrams, context diagrams, storyboards,
and entity-relationship diagrams.
The description of the operational environment should identify, as applicable, the facilities, equipment,
computing hardware, software, personnel, and operational procedures used to operate the existing system.
This description should be as detailed as necessary to give the readers an understanding of the numbers,
versions, capacity, etc., of the operational equipment being used. For example, if the current system contains
a database, the capacity of the storage unit(s) should be specified, provided the information exerts an
influence on the users’ operational capabilities. Likewise, if the system uses communication links, the
capacities of those links should be specified if they exert influence on factors such as user capabilities,
response time, or throughput.
Those aspects of safety, security, and privacy that exert influence on the operation or operational environment
of the current system should be described.
The author(s) of a OpsCon document should organize the information in this clause as appropriate to the
system or situation, as long as a clear description of the existing system is achieved. If parts of the



© ISO/IEC 2009 – All rights reserved                                                                             53
ISO/IEC CD 29148



descriptions are voluminous, they can be included in an appendix or incorporated by reference. An example of
material that might be included in an appendix would be a data dictionary. An example of material to be
included by reference might be a detailed manual of operational policies and procedures for the current
system.

A.2.3.4     Modes of operation for the current system or situation (Section 3.4 in the OpsCon)

This clause describes the various modes of operation for the current system or situation (e.g., operational,
degraded, maintenance, training, emergency, alternate-site, peacetime, wartime, ground-based, flight, active,
and idle modes). All of the modes that apply to all classes of users should be included. Important modes to
include are degraded, backup, and emergency modes, if such exist. This is especially true if these modes
involve different geographical sites and equipment that have significant impacts on the operational aspects of
the system.
This clause can be further divided into lower-level clauses, one for each mode described. System processes,
procedures, and capabilities or functions should be related to each mode, as appropriate, perhaps using a
cross reference matrix.

A.2.3.5     User classes and other involved personnel (Section 3.5 of the OpsCon)

A user class is distinguished by the ways in which users interact with the system. Factors that distinguish a
user class include common responsibilities, skill levels, work activities, and modes of interaction with the
system. Different user classes may have distinct operational scenarios for their interactions with the system. In
this context, a user is anyone who interacts with the existing system, including operational users, data entry
personnel, system operators, operational support personnel, software maintainers, and trainers.
This clause can be organized further, as follows, if it is helpful in communicating the content.

A.2.3.5.1     Organizational structure (Section 3.5.1 of the OpsCon)

This clause describes the existing organizational structures of the various user groups and user classes that
are involved with the current system. Organizational charts are useful graphic tools for this purpose.

A.2.3.5.2     Profiles of user classes (Section 3.5.2 of the OpsCon)

This clause provides a profile of each user class for the current system. If some users play several roles, each
role should be identified as a separate user class.
Each user class for the current system, including operators and maintainers, should be described in a
separate clause. Each of these should provide a description of the user class, including responsibilities,
education, background, skill level, activities, and modes of interaction with the current system.

A.2.3.5.3     Interactions among user classes (Section 3.5.3 of the OpsCon)

This clause describes interactions among the various user classes involved with the current system. In
particular, interactions among user groups, operators, and maintainers should be described. Interactions that
occur among the users of the system, and between users and non-users, both within the organization and
across organizational boundaries, if they are relevant to the operation of the existing system, should be
described. Informal as well as formal interactions should be included.

A.2.3.5.4     Other involved personnel (Section 3.5.4 of the OpsCon)

This clause describes other personnel who will not directly interact with the system, but who have an influence
on, and are influenced by, the present system. Examples include executive managers, policy makers, and the
user’s clients. Although these individuals do not have hands-on interaction with the system, they may
significantly influence, and be influenced by, the new or modified system.

A.2.3.6     Support environment (Section 3.6 of the OpsCon)

This clause describes the support concepts and support environment for the current system, including the
support agency or agencies; facilities; equipment; support software; repair or replacement criteria;
maintenance levels and cycles; and storage, distribution, and supply methods.




54                                                                                  © ISO/IEC 2009 – All rights reserved
                                                                                            ISO/IEC CD 29148



A.2.4 Justification for and nature of changes (Section 4 of the OpsCon)

Section 4 of the OpsCon document describes the shortcomings of the current system or situation that motivate
development of a new system or modification of an existing system. This clause provides a transition from
Section 3 of the OpsCon, which describes the current system or situation, to Section 5 of the OpsCon, which
describes the proposed system. If there is no current system on which to base changes, this clause should so
indicate and provide justification for the features of the new system.

A.2.4.1     Justification for changes (Section 4.1 of the OpsCon)

This clause should:
a) Briefly summarize new or modified aspects of the user needs, missions, objectives, environments,
interfaces, personnel, or other factors that require a new or modified system;
b) Summarize the deficiencies or limitations of the current system or situation that make it unable to respond
to new or changed factors; and
c) Provide justification for a new or modified system.
1) If the proposed system is to meet a new opportunity, describe the reasons why a new system should be
developed to meet this opportunity.
2) If the proposed system improves a current operation, describe the rationale behind the decision to modify
the existing system (e.g., to reduce life cycle costs or improve personnel efficiency).
3) If the proposed system implements a new functional capability, explain why this function is necessary.

A.2.4.2     Description of desired changes (Section 4.2 of the OpsCon)

This clause summarizes new or modified capabilities, functions, processes, interfaces, and other changes
needed to respond to the factors identified in 4.1. Changes should be based on the current system described
in Section 3 of the OpsCon document. If there is no existing system on which to base changes, this clause
should summarize the capabilities to be provided by a new system. This description should include the
following, as appropriate:
Capability changes. Description of the functions and features to be added, deleted, and modified in order for
the new or modified system to meet its objectives and requirements.
System processing changes. Description of the changes in the process or processes of transforming data that
will result in new output with the same data, the same output with new data, or both.
Interface changes. Description of changes in the system that will cause changes in the interfaces and
changes in the interfaces that will cause changes in the system.
Personnel changes. Description of changes in personnel caused by new requirements, changes in user
classes, or both.
Environment changes. Description of changes in the operational environment that will cause changes in the
system functions, processes, interfaces, or personnel and/or changes that should be made in the environment
because of changes in the system functions, processes, interfaces, or personnel.
Operational changes. Description of changes to the user’s operational policies, procedures, methods, or daily
work routines caused by the above changes.
Support changes. Description of changes in the support requirements caused by changes in the system
functions, processes, interfaces, or personnel and/or changes in the system functions, processes, interfaces,
or personnel caused by changes in the support environment.
Other changes. Description of other changes that will impact the users, but that do not fit under any of the
above categories.

A.2.4.3     Priorities among changes (Section 4.3 of the OpsCon)

This clause identifies priorities among the desired changes and new features. Each change should be
classified as essential, desirable, or optional. Desirable and optional changes should be prioritized within their




© ISO/IEC 2009 – All rights reserved                                                                           55
ISO/IEC CD 29148



classes. If there is no existing system on which to base changes, this clause should classify and prioritize the
features of the proposed system.
Essential features. Features that shall be provided by the new or modified system. The impacts that would
result if the features were not implemented should be explained for each essential feature.
Desirable features. Features that should be provided by the new or modified system. Desirable features
should be prioritized. Reasons why the features are desirable should be explained for each desirable feature.
Optional features. Features that might be provided by the new or modified system. Optional features should
be prioritized. Reasons why the features are optional should be explained for each optional feature.
Classifying the desired changes and new features into essential, desirable, and optional categories is
important to guide the decision making process during development of the proposed system. This information
is also helpful in cases of budget or schedule cuts or overruns, since it permits determination of which features
must be finished, and which ones can be delayed or omitted.

A.2.4.4   Changes considered but not included (Section 4.4 of the OpsCon)

This clause identifies changes and new features considered but not included in 4.2 of the OpsCon document,
and the rationale for not including them. By describing changes and features considered but not included in
the proposed system, the authors document the results of their analysis activities. This information can be
useful to other personnel involved with system development, whether it be users, buyers, or developers
should they want to know if a certain change or feature was considered, and if so, why it was not included. In
software especially, there are few, if any, outward signs of what has been changed, improved or is still unsafe
or unsecure (e.g., in certain scenarios or workarounds).

A.2.4.5   Assumptions and constraints (Section 4.5 of the OpsCon)

This clause describes any assumptions or constraints applicable to the changes and new features identified in
this clause. This should include all assumptions and constraints that will affect users during development and
operation of the new or modified system. An assumption is a condition that is taken to be true. An example of
an assumption is that the system workload will double over the next two years, thus a new system with higher
performance is required. A constraint is an externally imposed limitation placed on the new or modified system
or the processes used to develop or modify the system. Examples of constraints include external interface
requirements, and limits on schedule and budget.

A.2.5 Concepts for the proposed system (Section 5 of the OpsCon)

This clause describes the proposed system that results from the desired changes specified in Section 4 of the
OpsCon document. This clause describes the proposed system in a high-level manner, indicating the
operational features that are to be provided without specifying design details. Methods of description to be
used and the level of detail in the description will depend on the situation. The level of detail should be
sufficient to fully explain how the proposed system is envisioned to operate in fulfilling users’ needs and
buyer’s requirements. In some cases, it may be necessary to provide some level of design detail in the
OpsCon. The OpsCon should not contain design specifications, but it may contain some examples of typical
design strategies, for the purpose of clarifying operational details of the proposed system. In the event that
actual design constraints need to be included in the description of the proposed system, they shall be explicitly
identified as required to avoid possible misunderstandings.
NOTE If some of the features of the proposed system are the same as the features of the original system,
then the comment ‘No change’ should appear after the clause number and name.

A.2.5.1   Background, objectives, and scope (Section 5.1 of the OpsCon)

This clause provides an overview of the new or modified system, including, as applicable, background,
mission, objectives, and scope. In addition to providing the background for the proposed system, this clause
should provide a brief summary of the motivation for the system. Examples of motivations for a system might
include automation of certain tasks or taking advantage of new opportunities. The goals for the new or
modified system should also be defined, together with the strategies, solutions, tactics, methods, and
techniques proposed to achieve those goals. The modes of operation, classes of users, and interfaces to the
operational environment define the scope of the proposed system, which are summarized in this clause and
defined in greater detail in subsequent clauses.



56                                                                                © ISO/IEC 2009 – All rights reserved
                                                                                              ISO/IEC CD 29148



A.2.5.2     Operational policies and constraints (Section 5.2 of the OpsCon)

This clause describes operational policies and constraints that apply to the proposed system. Operational
policies are predetermined management decisions regarding the operation of the new or modified system,
normally in the form of general statements or understandings that guide decision-making activities. Policies
limit decision-making freedom, but do allow for some discretion. Operational constraints are limitations placed
on the operations of the proposed system. Examples of operational constraints include the following:
A constraint on the hours of operations of the system, perhaps limited by access to secure terminals;
A limiting constraint on the number of personnel available to operate the system;
A limiting constraint on the computer hardware (e.g., must operate on computer X); and
A limiting constraint on the operational facilities, such as office space.

A.2.5.3     Description of the proposed system (Section 5.3 of the OpsCon)

This clause will contain the major portion of the description of the proposed system. It provides a description of
the proposed system, including the following, as appropriate:
a) The operational environment and its characteristics;
b) Major system elements and the interconnections among these elements;
c) Interfaces to external systems or procedures;
d) Capabilities or functions of the proposed system;
e) Charts and accompanying descriptions depicting inputs, outputs, data flow, and manual and automated
processes sufficient to understand the proposed system or situation from the user’s point of view;
f) Cost of systems operations;
g) Operational risk factors;
h) Performance characteristics, such as speed, throughput, volume, frequency;
i) Quality attributes, such as: reliability, availability, correctness, efficiency, expandability, flexibility,
interoperability, maintainability, portability, reusability, supportability, survivability, and usability; and
j) Provisions for safety, security, privacy, integrity, and continuity of operations in emergencies.
Since the purpose of this clause is to describe the proposed system and how it should operate, it is
appropriate to use any tools and/or techniques that serve that purpose. It is important that the description of
the system be simple enough and clear enough that all intended readers of the document can fully understand
it. It is important to keep in mind that the OpsCon shall be written in the user’s language. In most cases, this
means avoidance of terminology specific to computers - in other words, ‘computer jargon.’
Graphics and pictorial tools should be used wherever possible, especially since OpsCon documents should be
understandable be several different types of readers. Useful graphical tools include, but are not limited to,
WBS, N2 charts, sequence or activity charts, functional flow block diagrams, structure charts, allocation charts,
DFDs, object diagrams, storyboards, and entity relationship diagrams.
The description of the operational environment should identify, as applicable, the facilities, equipment,
computing hardware, software, personnel, and operational procedures needed to operate the proposed
system. This description should be as detailed as necessary to give the readers an understanding of the
numbers, versions, capacity, etc., of the operational equipment to be used. For example, if the proposed
system contains a database, the capacity of the storage units should be specified, provided that information
influences the users’ operational capabilities. Likewise, if the system uses communication links, then the
capacities of those links should be specified if they exert influence on user capabilities or response time.
Those aspects of safety, security, and privacy that exert influence on the operation or operational environment
of the proposed system should be described.
The author(s) of a OpsCon should organize the information in this clause as appropriate to the system or
situation, as long as a clear description of the proposed system is achieved. If parts of the description are
voluminous, they can be included in an appendix or incorporated by reference. An example of material that




© ISO/IEC 2009 – All rights reserved                                                                           57
ISO/IEC CD 29148



might be included in an appendix would be a data dictionary. An example of material to be included by
reference might be a detailed manual of operation policies and procedures for the proposed system.

A.2.5.4     Modes of operation (Section 5.4 of the OpsCon)

This clause describes the various modes of operation for the proposes system (for example, regular,
degraded, maintenance, training, emergency, alternate-site, peacetime, wartime, ground-based, flight, active,
and idle modes). Include all of the modes that apply to all user classes. Important modes to include are
degraded, backup, and emergency modes, if such exist. This is especially true if these modes involve different
geographical sites and equipment that have significant impacts on the system.
This clause can be further divided into lower-level clauses, one for each mode described. System processes,
procedures, and capabilities or functions should be related to each mode.

A.2.5.5     User classes and other involved personnel (Section 5.5 of the OpsCon)

A user class is distinguished by the ways in which the users interact with the system. Factors that distinguish a
user class include responsibilities, skill level, work activities, and mode of interaction with the system. Different
user classes may have distinct operational scenarios for their interactions with the system. In this context, a
user is anyone who will interact with the proposed system, including operational users, data entry personnel,
system operators, operational support personnel, software maintainers, and trainers. This clause can be
further divided into lower-level clauses if it is helpful in communicating the content.

A.2.5.5.1     Organizational structure (Section 5.5.1 of the OpsCon)

This clause describes the organizational structures of the various user groups and user classes that will be
involved with the proposed system. Organizational charts are useful graphic tools for this purpose.

A.2.5.5.2     Profiles of user classes (Section 5.5.2 of the OpsCon)

This clause provides a profile of each user class for the proposed system. If some users play several roles,
each role should be identified as a separate user class.
Each user class for the proposed system, including operators, maintainers and trainers, should be described
in a separate clause. Each clause should provide a description of the user class, including responsibilities,
education, background, skill level, activities, and envisioned modes of interaction with the proposed system.

A.2.5.5.3     Interactions among user classes (Section 5.5.3 of the OpsCon)


This clause describes interactions among the various user classes that may be involved with the proposed
system. In particular, interaction among user groups, operators, and maintainers should be described.
Interactions that will occur among the users of the proposed system, and between users and non-users, both
within the organization and across interfacing organizations, if they are relevant to the operation of the
proposed system, should be described. Informal as well as formal interactions should be included.

A.2.5.5.4     Other involved personnel (Section 5.5.4 of the OpsCon)

This clause describes other personnel who will not directly interact with the system, but who have an influence
on, and are influenced by, the present system. Examples include executive managers, policy makers, and the
user’s clients. Although these individuals do not have hands-on interaction with the system, they may
significantly influence and be influenced by, the new or modified system.

A.2.5.6     Support environment (Section 5.6 of the OpsCon)

This clause describes the support concepts and support environment for the proposed system, including the
support agency or agencies; facilities; equipment; support software; repair or replacement criteria;
maintenance levels and cycles; and storage, distribution, and supply methods.




58                                                                                   © ISO/IEC 2009 – All rights reserved
                                                                                             ISO/IEC CD 29148



A.2.6 Operational scenarios (Section 6 of the OpsCon)

A scenario is a step-by-step description of how the proposed system should operate and interact with its users
and its external interfaces under a given set of circumstances. Scenarios should be described in a manner
that will allow readers to walk through them and gain an understanding of how all the various parts of the
proposed system function and interact. The scenarios tie together all parts of the system, the users, and other
entities by describing how they interact. Scenarios may also be used to describe what the system should not
do.
Scenarios should be organized into clauses and clauses, each describing an operational sequence that
illustrates the roles of the system, its interactions with users, and interactions with other systems. Operational
scenarios should be described for all operational modes and all classes of users identified for the proposed
system. Each scenario should include events, actions, stimuli, information, and interactions as appropriate to
provide a comprehensive understanding of the operational aspects of the proposed system. Prototypes,
storyboards, and other media, such as video or hypermedia presentations, may be used to provide part of this
information.
In most cases, it will be necessary to develop several variations of each scenario, including one for normal
operation, one for stress load handling, one for exception handling, one for degraded mode operation, etc.
Scenarios play several important roles. The first is to bind together all of the individual parts of a system into a
comprehensible whole. Scenarios help the readers of a OpsCon document understand how all the pieces
interact to provide operational capabilities. The second role of scenarios is to provide readers with operational
details for the proposed system; this enables them to understand the users’ roles, how the system should
operate, and the various operational features to be provided.
Scenarios can also support the development of simulation models that help in the definition and allocation of
derived requirements, identification, and preparation of prototypes to address key issues. In addition,
scenarios can serve as the basis for the first draft of the users’ manual, and as the basis for developing
acceptance test plans. The scenarios are also useful for the buyer and the developer to verify that the system
design will satisfy the users’ needs and expectations.
Scenarios can be presented in several different ways. One approach is to specify scenarios for each major
processing function of the proposed system. Using this approach, this clause would contain one clause for
each process. Each clause would then contain several more lower-level clauses, one for each scenario
supported by that process. An alternative approach is to develop thread-based scenarios, where each
scenario follows one type of transaction type through the proposed system. In this case, each clause would
contain one scenario for each interaction type, plus scenarios for degraded, stress loaded, and back-up
modes of operation. Other alternatives include following the information flow through the system for each user
capability, following the control flows, or focusing on the objects and events in the system.
Scenarios are an important element of a OpsCon, and should therefore receive substantial emphasis. The
number of scenarios and level of detail specified will be proportional to the perceived risk and the criticality of
the project.

A.2.7 Summary of impacts (Section 7 of the OpsCon)

This clause describes the operational impacts of the proposed system on the users, the developers, and the
support and maintenance organizations. It also describes the temporary impacts on users, buyers, developers,
and the support and maintenance organizations during the period of time when the new system is being
developed, installed, or trained on.
This information is provided in order to allow all affected organizations to prepare for the changes that will be
brought about by the new system and to allow for planning of the impacts on the buyer agency or agencies,
user groups, and the support maintenance organizations during the development of, and transition to the new
system.

A.2.7.1     Operational impacts (Section 7.1 of the OpsCon)

This clause should be further divided into lower-level clauses to describe the anticipated operational impacts
on the user, development, and support or maintenance agency or agencies during operation of the proposed
system. These impacts may include the following:
- Interfaces with primary or alternate computer operating centres;



© ISO/IEC 2009 – All rights reserved                                                                             59
ISO/IEC CD 29148



- Changes in procedure;
- Use of new data sources;
- Changes in quantity, type, and timing of data to be input into the system;
- Changes in data retention requirements;
- New modes of operation based on emergency, disaster, or accident conditions;
- New methods for providing input data if the required data are not readily available;
- Changes in operational budget; and
- Changes in operational risks.

A.2.7.2   Organizational impacts (Section 7.2 of the OpsCon)

This clause should be further divided into lower-level clauses to describe the anticipated operational impacts
on the user, development, and support or maintenance agency or agencies during operation of the proposed
system. These impacts may include the following:
- Modification of responsibilities; responsibilities;
- Addition or elimination of job positions; positions;
- Training or retraining users; users;
- Changes in numbers, skill levels, position identifiers, or locations of personnel; personnel; and
- Numbers and skill levels of personnel needed for contingency operation at one or more alternate sites
following an emergency, disaster, or accident.

A.2.7.3   Impacts during development (Section 7.3 of the OpsCon)

This clause should be further divided into lower-level clauses that describe the anticipated impacts on the user,
development, and support or maintenance agency or agencies during the development project for the
proposed system. These impacts may include the following:
- Involvement in studies, meetings, and discussions prior to award of the contract;
- User and support involvement in reviews and demonstrations, evaluation of initial operating capabilities and
evolving versions of the system, development or modification of databases, and required training;
- Parallel operation of the new and existing systems; and
- Operational impacts during system testing of the proposed system.

A.2.8 Analysis of the proposed system (Section 8 of the OpsCon)

This clause provides an analysis of the benefits, limitations, advantages, disadvantages, and alternatives and
trade-offs considered for the proposed system.

A.2.8.1   Summary of improvements (Section 8.1 of the OpsCon)

This clause provides a qualitative (and to the extent possible, quantitative) summary of the benefits to be
provided by the proposed system. This summary should include the below items, as applicable. In each case,
the benefits should be related to deficiencies identified in 4.1 of the OpsCon.
- New capabilities. Additional new features or functionality.
- Enhanced capabilities. Upgrades to existing capabilities.
- Deleted capabilities. Unused, obsolete, confusing, or dangerous capabilities removed.
- Improved performance. Better response time, reduced storage requirements, improved quality, etc.




60                                                                                  © ISO/IEC 2009 – All rights reserved
                                                                                           ISO/IEC CD 29148



A.2.8.2     Disadvantages and limitations (Section 8.2 of the OpsCon)

This clause provides a qualitative (and to the extent possible, quantitative) summary of the disadvantages
and/or limitations of the proposed system. Disadvantages might include the need to retrain personnel,
rearrange work spaces, or change to a new style of user interface; limitations might include features desired
by users but not included, degradation of existing capabilities to gain new capabilities, or greater-than-desired
response time for certain complex operations.

A.2.8.3     Alternatives and trade-offs considered (Section 8.3 of the OpsCon)

This clause should describe major alternatives considered, the trade-offs among them, and rationale for the
decisions reached. In the context of a OpsCon document, alternatives are operational alternatives and not
design alternatives, except to the extent that designs alternatives may be limited by the operational
capabilities desired in the new system. This information can be useful to determine, now and at later times,
whether a given approach was analyzed and evaluated, or why a particular approach or solution was rejected.
This information would probably be lost if not recorded.

A.2.9 Notes (Section 9 on the OpsCon)

This clause should contain any additional information that will aid understanding of a particular OpsCon
document. This clause should include an alphabetical listing of all acronyms and abbreviations, along with
their meanings as used in this document, and a list of any terms and definitions needed to understand the
document.

A.2.10 Appendices (Appendices of the OpsCon)

To facilitate ease of use and maintenance of the OpsCon document, some information may be placed in
appendices to the document. Charts and classified data are typical examples. Each appendix should be
referenced in the main body of the document where that information would normally have been provided.
Appendices may be bound as separate documents for easier handling.

A.2.11 Glossary (Glossary of the OpsCon)

The inclusion of a clear and concise definition of terms used in the OpsCon document (but that may be
unfamiliar to readers of the OpsCon document) is very important. A glossary should be maintained and
updated during the processes of concept analysis and development of the OpsCon document. To avoid
unnecessary work due to misinterpretations, all definitions should be reviewed and agreed upon by all
involved parties.




© ISO/IEC 2009 – All rights reserved                                                                          61
ISO/IEC CD 29148



                                                  Annex B
                                               (Informative)

                    Software Requirement Specification Templates



B.1 Template of SRS Section 3 organized by mode: Version 1
     3. Specific requirements
     3.1 External interface requirements
         3.1.1 User interfaces
         3.1.2 Hardware interfaces
         3.1.3 Software interfaces
         3.1.4 Communications interfaces
     3.2 Functional requirements
         3.2.1 Mode 1
             3.2.1.1 Functional requirement 1.1
             .
             .
             .
             3.2.1.n Functional requirement 1.n
         3.2.2 Mode 2
         .
         .
         .
         3.2.m Mode m
             3.2.m.1 Functional requirement m.1
             .
             .
             .
             3.2.m.n Functional requirement m.n
     3.3 Performance requirements
     3.4 Design constraints
     3.5 Software system attributes
     3.6 Other requirements


B.2 Template of SRS Section 3 organized by mode: Version 2
     3. Specific requirements
     3.1. Functional requirements
         3.1.1 Mode 1
               3.1.1.1 External interfaces
                        3.1.1.1.1 User interfaces



62                                                             © ISO/IEC 2009 – All rights reserved
                                                                 ISO/IEC CD 29148



                           3.1.1.1.2 Hardware interfaces
                           3.1.1.1.3 Software interfaces
                           3.1.1.1.4 Communications interfaces
                 3.1.1.2 Functional requirements
                           3.1.1.2.1 Functional requirement 1
                           .
                           .
                           .
                           3.1.1.2.n Functional requirement n
                 3.1.1.3 Performance
          3.1.2 Mode 2
          .
          .
          .
          3.1.m Mode m
     3.2 Design constraints
     3.3 Software system attributes
     3.4 Other requirements


B.3 Template of SRS Section 3 organized by user class
     3. Specific requirements
     3.1 External interface requirements
          3.1.1 User interfaces
          3.1.2 Hardware interfaces
          3.1.3 Software interfaces
          3.1.4 Communications interfaces
     3.2 Functional requirements
          3.2.1 User class 1
                 3.2.1.1 Functional requirement 1.1
                 .
                 .
                 .
                 3.2.1.n Functional requirement 1.n
          3.2.2 User class 2
          .
          .
          .
          3.2.m User class m
                   3.2.m.1 Functional requirement m.1
                   .
                   .
                   .
                   3.2.m.n Functional requirement m.n
     3.3 Performance requirements



© ISO/IEC 2009 – All rights reserved                                          63
ISO/IEC CD 29148



     3.4 Design constraints
     3.5 Software system attributes
     3.6 Other requirements


B.4 Template of SRS Section 3 organized by object
     3. Specific requirements
     3.1 External interface requirements
         3.1.1 User interfaces
         3.1.2 Hardware interfaces
         3.1.3 Software interfaces
         3.1.4 Communications interfaces
     3.2 Classes/Objects
         3.2.1 Class/Object 1
               3.2.1.1 Attributes (direct or inherited)
                       3.2.1.1.1 Attribute 1
                       .
                       .
                       .
                       3.2.1.1.n Attribute n
               3.2.1.2 Functions (services, methods, direct or inherited)
                       3.2.1.2.1 Functional requirement 1.1
                       .
                       .
                       .
                       3.2.1.2.m Functional requirement 1.m
               3.2.1.3 Messages (communications received or sent)
         3.2.2 Class/Object 2
         .
         .
         .
         3.2.p Class/Object p
     3.3 Performance requirements
     3.4 Design constraints
     3.5 Software system attributes
     3.6 Other requirements


B.5 Template of SRS Section 3 organized by feature
     3. Specific requirements
     3.1 External interface requirements
         3.1.1 User interfaces
         3.1.2 Hardware interfaces
         3.1.3 Software interfaces


64                                                                          © ISO/IEC 2009 – All rights reserved
                                                                ISO/IEC CD 29148



          3.1.4 Communications interfaces
     3.2 System features
          3.2.1 System Feature 1
                 3.2.1.1 Introduction/Purpose of feature
                 3.2.1.2 Stimulus/Response sequence
                 3.2.1.3 Associated functional requirements
                           3.2.1.3.1 Functional requirement 1
                           .
                           .
                           .
                           3.2.1.3.n Functional requirement n
          3.2.2 System feature 2
          .
          .
          .
          3.2.m System feature m
          .
          .
          .
     3.3 Performance requirements
     3.4 Design constraints
     3.5 Software system attributes
     3.6 Other requirements


B.6 Template of SRS Section 3 organized by stimulus
     3. Specific requirements
     3.1 External interface requirements
          3.1.1 User interfaces
          3.1.2 Hardware interfaces
          3.1.3 Software interfaces
          3.1.4 Communications interfaces
     3.2 Functional requirements
          3.2.1 Stimulus 1
                 3.2.1.1 Functional requirement 1.1
                 .
                 .
                 .
                 3.2.1.n Functional requirement 1.n
          3.2.2 Stimulus 2
          .
          .
          .
          3.2.m Stimulus m
                   3.2.m.1 Functional requirement m.1



© ISO/IEC 2009 – All rights reserved                                         65
ISO/IEC CD 29148



                .
                .
                .
                3.2.m.n Functional requirement m.n
     3.3 Performance requirements
     3.4 Design constraints
     3.5 Software system attributes
     3.6 Other requirements


B.7 Template of SRS Section 3 organized by functional hierarchy
     3. Specific requirements
     3.1 External interface requirements
         3.1.1 User interfaces
         3.1.2 Hardware interfaces
         3.1.3 Software interfaces
         3.1.4 Communications interfaces
     3.2 Functional requirements
         3.2.1 Information flows
          3.2.1.1 Data flow diagram 1
                  3.2.1.1.1 Data entities
                  3.2.1.1.2 Pertinent processes
                  3.2.1.1.3 Topology
          3.2.1.2 Data flow diagram 2
                  3.2.1.2.1 Data entities
                  3.2.1.2.2 Pertinent processes
                  3.2.1.2.3 Topology
          .
          .
          .
          3.2.1.n Data flow diagram n
                  3.2.1.n.1 Data entities
                  3.2.1.n.2 Pertinent processes
                  3.2.1.n.3 Topology
         3.2.2 Process descriptions
          3.2.2.1 Process 1
                  3.2.2.1.1 Input data entities
                  3.2.2.1.2 Algorithm or formula of process
                  3.2.2.1.3 Affected data entities
          3.2.2.2 Process 2
                  3.2.2.2.1 Input data entities
                  3.2.2.2.2 Algorithm or formula of process




66                                                            © ISO/IEC 2009 – All rights reserved
                                                                  ISO/IEC CD 29148



                      3.2.2.2.3 Affected data entities
            .
            .
            .
            3.2.2.m Process m
                      3.2.2.m.1 Input data entities
                      3.2.2.m.2 Algorithm or formula of process
                      3.2.2.m.3 Affected data entities
          3.2.3 Data construct specifications
            3.2.3.1 Construct 1
                      3.2.3.1.1 Record type
                      3.2.3.1.2 Constituent fields
            3.2.3.2 Construct 2
                      3.2.3.2.1 Record type
                      3.2.3.2.2 Constituent fields
            .
            .
            .
            3.2.3.p Construct p
                      3.2.3.p.1 Record type
                      3.2.3.p.2 Constituent fields
          3.2.4 Data dictionary
            3.2.4.1 Data element 1
                      3.2.4.1.1 Name
                      3.2.4.1.2 Representation
                      3.2.4.1.3 Units/Format
                      3.2.4.1.4 Precision/Accuracy
                      3.2.4.1.5 Range
            3.2.4.2 Data element 2
                      3.2.4.2.1 Name
                      3.2.4.2.2 Representation
                      3.2.4.2.3 Units/Format
                      3.2.4.2.4 Precision/Accuracy
                      3.2.4.2.5 Range
            .
            .
            .
            3.2.4.q Data element q
                      3.2.4.q.1 Name
                      3.2.4.q.2 Representation
                      3.2.4.q.3 Units/Format
                      3.2.4.q.4 Precision/Accuracy
                      3.2.4.q.5 Range



© ISO/IEC 2009 – All rights reserved                                           67
ISO/IEC CD 29148



     3.3 Performance requirements
     3.4 Design constraints
     3.5 Software system attributes
     3.6 Other requirements


B.8 Template of SRS Section 3 showing multiple organizations
3. Specific requirements
3.1 External interface requirements
     3.1.1 User interfaces
     3.1.2 Hardware interfaces
     3.1.3 Software interfaces
     3.1.4 Communications interfaces
3.2 Functional requirements
     3.2.1 User class 1
         3.2.1.1 Feature 1.1
                 3.2.1.1.1 Introduction/Purpose of feature
                 3.2.1.1.2 Stimulus/Response sequence
                 3.2.1.1.3 Associated functional requirements
         3.2.1.2 Feature 1.2
                 3.2.1.2.1 Introduction/Purpose of feature
                 3.2.1.2.2 Stimulus/Response sequence
                 3.2.1.2.3 Associated functional requirements
         .
         .
         .
         3.2.1.m Feature 1.m
                 3.2.1.m.1 Introduction/Purpose of feature
                 3.2.1.m.2 Stimulus/Response sequence
                 3.2.1.m.3 Associated functional requirements
         3.2.2 User class 2
         .
         .
         .
         3.2.n User class n
         .
         .
         .
3.3 Performance requirements
3.4 Design constraints
3.5 Software system attributes
3.6 Other requirements




68                                                              © ISO/IEC 2009 – All rights reserved
                                                                                   ISO/IEC CD 29148



                                             Annex C
                                          (Informative)

               Process Mapping from ISO/IEC 15288 and ISO/IEC 12207



C.1 Stakeholder requirements definition process
Table C-1 identifies the activities involved in the stakeholder requirements definition process and the
applicable subclause in Clause 6 with additional application guidance. The detailed processes between
ISO/IEC 15288 and ISO/IEC 12207 have some different headings and language, but have been aligned to
match the equivalent processes.




© ISO/IEC 2009 – All rights reserved                                                                69
ISO/IEC CD 29148



ISO/IEC 15288 Section                                   ISO/IEC 12207 Section                                         ISO/IEC
                                                                                                                       29148
6.4.1 Stakeholder Requirements Definition               6.4.1   Stakeholder Requirements Definition                      6.2
Process                                                 Process

a) Elicit stakeholder requirements. This activity       6.4.1.3.1 Stakeholder identification. This activity            6.2.3.1
consists of the following tasks:                        consists of the following task:

1) Identify the individual stakeholders or              1) The project shall identify the individual                   6.2.3.1
stakeholder classes who have a legitimate interest      stakeholders or stakeholder classes who have a
in the system throughout its life cycle.                legitimate interest in the system throughout its life
                                                        cycle.

2) Elicit stakeholder requirements from the             6.4.1.3.2 Requirements identification.             This        6.2.3.1
identified stakeholders.                                activity consists of the following tasks:
                                                        1) The project shall elicit stakeholder requirements.

b) Define stakeholder requirements. This activity                                                                      6.2.3.2
consists of the following tasks:

1) Define the constraints on a system solution that     2) The project shall define the constraints on a               6.2.3.2
are unavoidable consequences of existing                system solution that are unavoidable consequences
agreements, management decisions and technical          of existing agreements, management decisions and
                                                        technical decisions.
decisions.

2) Define a representative set of activity sequences    3) The project shall define a representative set of            6.2.3.2
to identify all required services that correspond to    activity sequences to identify all required services
anticipated operational and support scenarios and       that correspond to anticipated operational and
                                                        support scenarios and environments.
environments.

3) Identify the interaction between users and the       4) The project shall identify the interaction between          6.2.3.2
system.                                                 users and the system, taking into the account
                                                        human capabilities and skills limitations.

4) Specify health, safety, security, environment and    5) The project shall specify health, safety, security,         6.2.3.2
other stakeholder requirements and functions that       environment and other stakeholder requirements
relate to critical qualities.                           and functions that relate to critical qualities and
                                                        shall address possible adverse effects of use of the
                                                        system on human health and safety.

c) Analyze and maintain stakeholder                     6.4.1.3.3 Requirements evaluation. This activity               6.2.3.3
requirements. This activity consists of the following   consists of the following task:
tasks:

1) Analyze the complete set of elicited                 1) The project shall analyze the complete set of               6.2.3.3
requirements.                                           elicited requirements.

2) Resolve requirements problems.                       6.4.1.3.4 Requirements agreement. This activity                6.2.3.3
                                                        consists of the following tasks:
                                                        1) The project shall resolve requirements problems.

3) Feed back the analyzed requirements to               2) The project shall feed back the analyzed                    6.2.3.3
applicable stakeholders to ensure that the needs        requirements to applicable stakeholders to ensure
and expectations have been adequately captured          that the needs and expectations have been
                                                        adequately captured and expressed.
and expressed.

4) Establish with stakeholders that their               3) The project shall establish with stakeholders that          6.2.3.3
requirements are expressed correctly.                   their requirements are expressed correctly.

5) Record the stakeholder requirements in a form        6.4.1.3.5 Requirement recording. This activity                 6.2.3.3
suitable for requirements management through the        consists of the following tasks:
life cycle and beyond.                                  1)    The project shall record the stakeholder
                                                        requirements in a form suitable for requirements
                                                        management through the life cycle and beyond.




70                                                                                           © ISO/IEC 2009 – All rights reserved
                                                                                                           ISO/IEC CD 29148



ISO/IEC 15288 Section                                     ISO/IEC 12207 Section                                     ISO/IEC
                                                                                                                     29148
6) Maintain stakeholder requirements traceability to      2) The project shall maintain stakeholder                   6.2.3.3
the sources of stakeholder need.                          requirements traceability to the sources of
                                                          stakeholder need.

     Table C-A.1 — A.A.Mapping of 15288, 12207, and 29148 clauses on Stakeholder Requirements
                                         Definition Process


C.2 Requirements analysis Process
Table C-2 identifies the activities involved in the requirements analysis process and the applicable subclause
in Clause 6 with additional application guidance.


ISO/IEC 15288                                             ISO/IEC 12207                                             ISO/IEC
                                                                                                                     29148
6.4.2 Requirements Analysis Process                       6.4.2 System Requirements Analysis Process                    6.3
a) Define system requirements. This activity              6.4.2.3.1 Requirements specification. This activity      6.3.3.1 1), 2),
consists of the following tasks:                          consists of the following tasks:                         3), 4), and 5)
1) Define the functional boundary of the system in        1) The specific intended use of the system to be
terms of the behaviour and properties to be
                                                          developed shall be analyzed to specify system
provided.
                                                          requirements.       The     system     requirements
2) Define each function that the system is required       specification shall describe: functions and
to perform.
                                                          capabilities of the system; business, organizational
3) Define necessary implementation constraints that       and user requirements; safety, security, human-
are introduced by stakeholder requirements or are         factors    engineering    (ergonomics),   interface,
unavoidable solution limitations.
                                                          operations, and maintenance requirements; design
4) Define technical and quality in use measures           constraints and qualification requirements. The
that enable the assessment of technical
                                                          system requirements specification shall be
achievement.
                                                          documented.
5) Specify system requirements and functions,
as justified by risk identification or criticality of
the system, that relate to critical qualities, such as
health, safety, security, reliability, availability and
supportability.
b) Analyze and maintain system requirements.              6.4.2.3.2 Requirements evaluation. This activity           6.3.3.2 1)
This activity consists of the following tasks:            consists of the following tasks:
1)    Analyze the integrity of the system                 1) The system requirements shall be evaluated
requirements to ensure that each requirement,             considering the criteria listed below. The results of
pairs of requirements or sets of requirements             evaluations shall be documented.
possess overall integrity.
                                                          a) Traceability to acquisition needs;
                                                          b) Consistency with acquisition needs;
                                                          c) Testability;
                                                          d) Feasibility of system architectural design;
                                                          e) Feasibility of operation and maintenance.
2) Feed back the analyzed requirements to applicable                                                                 6.3.3.2 2)
stakeholders to ensure that the specified system
requirements adequately reflect the stakeholder
requirements to address the needs and expectations.

3) Demonstrate traceability between the system            Note: [see 6.4.2.3.2 a) above]                             6.3.3.2 3)
requirements and the stakeholder requirements.




© ISO/IEC 2009 – All rights reserved                                                                                          71
ISO/IEC CD 29148




ISO/IEC 15288                                           ISO/IEC 12207                                                 ISO/IEC
                                                                                                                       29148
4) Maintain throughout the system life cycle the set                                                                  6.3.3.2 4)
of system requirements together with the
associated rationale, decisions and assumptions.

     Table C-A.2 — Mapping of 15288, 12207, and 29148 clauses on Requirements Analysis Process


C.3 Other technical requirements-related processes
Table C-3 identifies requirements activities in other technical processes and the applicable subclause in
Clause 6 with additional application guidance.

ISO/IEC 15288                                           ISO/IEC 12207                                               ISO/IEC
                                                                                                                     29148
6.4.3 Architectural Design Process                      6.4.3 System Architectural Design Process                6.4.1.1
a) Define the architecture. This activity consists of   6.4.3.3.1 Establishing architecture. This activity
the following tasks:                                    consists of the following task:
2) Partition the system functions identified in         6.4.3.3.1.1 A top-level architecture of the system
requirements analysis and allocate them to              shall be established. The architecture shall identify
elements of system architecture. Generate derived       items of hardware, software, and manual
requirements as needed for the allocations.             operations. It shall be ensured that all the system
3) Define and document the interfaces between           requirements are allocated among the items.
                                                        Hardware configuration items, software
system elements and at the system boundary with
                                                        configuration items, and manual operations shall
external systems.                                       be subsequently identified from these items. The
                                                        system architecture and the system requirements
                                                        allocated to the items shall be documented.
b) Analyze and evaluate the architecture. This          6.4.3.3.2 Architectural evaluation. This activity        6.4.1.2
activity consists of the following tasks:               consists of the following task:
2) Determine which system requirements are              6.4.3.3.2.1 The system architecture and the
allocated to operators.                                 requirements for the items shall be evaluated
                                                        considering the criteria listed below. The results of
                                                        the evaluations shall be documented.
                                                        a) Traceability to the system requirements.
                                                        b) Consistency with the system requirements.
                                                        d) Feasibility of the software items fulfilling their
                                                        allocated requirements.
6.4.6 Verification Process                              6.4.6 System Qualification Testing Process               6.4.2.1
a) Plan verification. This activity consists of the     6.4.6.3.1 Qualification testing. This activity
following tasks:                                        consists of the following tasks:
2) Define a verification plan based on system           6.4.6.3.1.1 System qualification testing shall be
requirements.                                           conducted in accordance with the qualification
                                                        requirements specified for the system. It shall be
                                                        ensured that the implementation of each system
                                                        requirement is tested for compliance and that the
                                                        system is ready for delivery. The qualification
                                                        testing results shall be documented.
b) Perform verification. This activity consists of      6.4.6.3.1.2 The system shall be evaluated                6.4.2.2
the following tasks:                                    considering the criteria listed below. The results of
2) Conduct verification to demonstrate compliance       the evaluations shall be documented.
to the specified design requirements.                   a) Test coverage of system requirements;
                                                        b) Conformance to expected results;
                                                        c) Feasibility of operation and maintenance.




72                                                                                           © ISO/IEC 2009 – All rights reserved
                                                                                ISO/IEC CD 29148



ISO/IEC 15288                                          ISO/IEC 12207                      ISO/IEC
                                                                                           29148
6.4.8 Validation Process                                                                6.4.3.1
b) Perform validation. This activity consists of the
following tasks:
2) Conduct validation to demonstrate conformance
of services to stakeholder requirements.

        Table C-A.3 — Mapping of 15288, 12207, and 29148 clauses on Other Technical Processes




© ISO/IEC 2009 – All rights reserved                                                              73
ISO/IEC CD 29148



                                            Bibliography


Bibliography
[1] ISO/IEC 9126-1, Software engineering – Product Quality – Part 1 Quality model

[2] ISO 9241-210, Ergonomics of human-system interaction - Part 210: Human-centered design for
    interactive systems

[3] ISO/IEC 12207:2008, Systems and software engineering – Software life cycle processes

[4] ISO/IEC 14143-1, Information Technology – Software Measurement – Functional Size Measurement -
    Part 1: Definition of Concepts

[5] ISO/IEC 15288:2008, Systems and software engineering – System life cycle processes

[6] ISO/IEC 15289, Systems and software engineering – Content of systems and software life cycle process
    information products (Documentation)

[7] ISO/IEC 16085, Systems and software engineering – Life cycle processes - Risk Management

[8] ISO/IEC TR 19759, Software engineering – Guide to the Software Engineering Body of Knowledge -
    SWEBOK

[9] ISO/IEC TR 19760, Systems engineering – A guide for the application of ISO/IEC 15288 (System life
    cycle processes

[10] ISO/IEC 24748-1 (draft), Systems and software engineering - Guide for life cycle management

[11] ISO/IEC 24765 (draft), Systems and software engineering – Vocabulary

[12] ISO/IEC TR 24766, Information Technology – Guide for Requirement Engineering Tool Capabilities

[13] ISO/IEC 25030, Software engineering; Software product Quality Requirements and Evaluation (SQuaRE)
     – Quality Requirements

[14] ISO/IEC 26702, Systems engineering – Application and management of the systems engineering process

[15] I ANSI/AIAA G-043-1992, Guide for the Preparation of Operational Concept Documents, American
     Institute of Aeronautics and Astronautics, January 1993

[16] IEEE Std 830, IEEE Recommended Practice for Software Requirements Specifications

[17] IEEE Std 1233, IEEE Guide for Developing System Requirements Specifications

[18] IEEE Std 1362, IEEE Guide for Information Technology – System Definition – Concept of Operations
     (ConOps) Document

[19] Systems Engineering Handbook, Version 3.1, International Council on Systems Engineering, August 2007




74                                                                            © ISO/IEC 2009 – All rights reserved
