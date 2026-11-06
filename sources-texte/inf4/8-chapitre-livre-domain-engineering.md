<!-- Page 1 -->
Stan Bühne
Klaus Pohl                                                           10
                                                 Domain
                                           Requirements
                                            Engineering

In this chapter you will learn:
   o The challenges of domain requirements engineering.
   o About the interrelations between the domain requirements engineering sub-
       process and the product management, domain design, and application
       requirements engineering sub-processes.
   o How to identify common and variable product line requirements.
   o How to document the identified commonalities and the variability in the
       various requirements artefacts using the orthogonal variability model.
In addition, a comprehensive example illustrates the definition of variability in
requirements artefacts for a software product line.

<!-- Page 2 -->
                        10.1    Introduction
      Goals of domain   The main goals of domain requirements engineering are the development of
        requirements    common and variable domain requirements and their precise documentation.
          engineering   Domain requirements engineering is a continuous process of proactively
                        defining the requirements for all foreseeable applications to be developed in
                        the software product line. A particular issue for domain requirements engin-
                        eering is to identify and explicitly document the external variability. The
                        sub-processes and artefacts closely related to the domain requirements
                        engineering sub-process are highlighted in Fig. 10-1.

                            Fig. 10-1: Sub-processes and artefacts related to domain requirements engineering

              Related   Domain requirements engineering has to adhere to the specification of the
        sub-processes   product line’s major features provided by product management. Based on
                        these features, it creates detailed common and variable requirements suffi-
                        cient to guide domain design (and thereby also realisation as well as testing).
                        In addition, domain requirements engineering provides the input for the
                        application requirements engineering sub-process, which is concerned with
                        creating application-specific requirements artefacts.

<!-- Page 3 -->
10.1 Introduction                                                                                                                  195

                   Suggestions for additional /                       Requests for detailed and
                    altered features                                    for revised requirements
                                     2               Domain                             4
    Product                                                                                          Domain
                                                   Requirements
   Management                                                                                        Design
                     1                             Engineering           3
                 Product roadmap                                   Variability model
                 List of existing artefacts                        Common and variable
                                                                     requirements artefacts
                                     same as (3)    5          Requests for additional / altered
                                                           6     requirements
                                                                Requirements artefacts to be
                                                                 included in the domain artefacts
                                                    Application
                                                   Requirements
                                                   Engineering

Fig. 10-2: Information flows between domain requirements engineering and other sub-
           processes

In the remainder of this section, we elaborate on the interrelations between                                  Artefact
the sub-processes highlighted in Fig. 10-1. The basic information flows                                       flows
between these sub-processes are depicted in Fig. 10-2.

10.1.1 Interrelation with Product Management
The key input for the domain requirements engineering process is the prod-                                    Product roadmap,
uct roadmap from product management (first bullet c in Fig. 10-2). This                                       existing products
roadmap includes an initial set of intended products for the product line as
well as their intended commonalities and variability. It further defines the
product line with respect to the envisaged applications and a schedule for
bringing out marketable products. In addition, product management identi-
fies existing artefacts that have been developed in previous projects and
which should be considered when defining the domain requirements (second
bullet of c in Fig. 10-2).
The domain requirements engineering sub-process provides suggestions on                                       Additional/altered
additional and altered features as well as feature refinements (d in Fig.                                     features
10-2) to product management, based on the analysis of existing products,
stakeholder needs, laws, constraints, and other requirement sources.

10.1.2 Interrelation with Domain Design
The output of domain requirements engineering provided to domain design                                       Requirements and
encompasses all defined domain requirements including commonality and                                         variability
variability as well as the definition of the product line variability in the
orthogonal variability model (e in Fig. 10-2). The variability model defines
at least the external variability but may also specify part of the internal vari-
ability of the product line.

<!-- Page 4 -->
      Highly interactive   The interrelation between domain requirements engineering and domain
                process    design can be characterised by the twin peaks model of [Nuseibeh 2001]
                           presented in Fig. 10-3. The figure expresses the interrelation by a spiral
                           alternating between requirements (problem view) and architecture (solution
                           view) that at the same time progresses from coarse to detailed. While the
                           reference architecture increasingly takes shape, the need for more detailed
                           requirements arises as well. In addition, existing requirements may for
                           example turn out as too ambitious from the viewpoint of domain design,
                           which leads to change requests (f in Fig. 10-2).

                                   Coarse      Problem                                             Solution
                                               View                                                   View

                                 Level of
                                  Detail

                                                      Requirements                      Architecture
                                  Detailed

                                              Independent                Realisation                   Dependent
                                                                         Dependence

                           Fig. 10-3: The twin peaks model describes the interrelation of requirements and architecture
                                      (adapted from [Nuseibeh 2001])

                           10.1.3 Interrelation with Application Requirements Engineering
              Reusable     Domain requirements engineering provides the predefined common and
          requirements     variable requirements artefacts as well as the orthogonal variability model to
                           application requirements engineering (g in Fig. 10-2). Consequently the
                           orthogonal variability model supports the communication of the product line
                           variability and thus the reuse of domain requirements artefacts. We elaborate
                           on the reuse of domain requirements artefacts in Chapter 15.
         Future domain     Application requirements engineering provides feedback to domain require-
          requirements     ments engineering in terms of requests for additional and altered require-
                           ments (first bullet of h in Fig. 10-2) as well as application requirements
                           artefacts which may be incorporated in the domain artefacts (second bullet of
                           h in Fig. 10-2). This feedback may lead to an adaptation of the domain arte-
                           facts and thus to an evolution of the software product line. The decision on
                           whether the feedback from application engineering is incorporated in the
                           domain artefacts is made by product managers and other stakeholders who
                           decide on the evolution of the product line. However, the feedback can also
                           lead to an application-specific adaptation of the product line’s capabilities,
                           i.e. it can lead to an application-specific change. The integration of applica-

<!-- Page 5 -->
10.2 Traditional Requirements Engineering Activities                                               197

tion-specific artefacts in the domain artefacts means that domain require-
ments engineers, domain architects, etc., must reengineer the application
artefacts and prepare them for reuse.

10.2    Traditional Requirements Engineering Activities
Before we elaborate on the details of requirements engineering for software
product lines, we give a brief overview of the major requirements engineer-
ing activities in single-system engineering [Pohl 1996; Pohl 1997].
   Elicitation: The goal of requirements elicitation is to understand the       User needs, require-
    users’ needs and constraints for the system. The elicitation process un-     ments, constraints
    covers needs, requirements, and constraints from different sources, such
    as stakeholders (e.g. customers or domain experts), user documentation,
    legislation, and standards. Elicitation also involves the development of
    new and innovative requirements for the intended product (see e.g.
    [Carroll 1995; Gougen and Linde 1993; Hay and v. Halle 2002; Pohl
    1997; Weinberg 1988]).
   Documentation: The goal of the requirements documentation activity is        Requirements
    the well-structured recording of the elicited requirements with all neces-   specification
    sary information. The final requirements specification is the foundation
    for later development phases or changes in the product [Alexander and
    Stevens 2003; Kovitz 1999]. To address different stakeholders such as
    customers and designers, it is often necessary to document requirements
    using different representation formats (see e.g. [Pohl 1994]).
   Negotiation: The goal of requirements negotiation is to achieve a suffi-     Agreement about
    cient consensus among different stakeholders with respect to elicited        requirements
    and/or documented requirements. The requirements specification is
    more stable during further development phases, if sufficient agreement
    is obtained. Without an agreement on the requirements, the project is
    likely to fail, for instance by running out of time (see e.g. [Wiegers
    1999]).
   Validation and verification: The goal of requirements validation/veri-       Quality
    fication is to prove that the system requirements are clear, complete,       assurance
    correct, and understandable. Validation ensures that the right require-
    ments are documented. Verification ensures that the documented re-
    quirements are correctly defined (see e.g. [Thayer and Dorfman 1997;
    Sommerville and Sawyer 1997]).
   Management: The goal of requirements management is to maintain the           Continuous
    requirements continuously throughout the development and system life         maintenance
    cycle and thus to ensure that a consistent and up-to-date requirements

<!-- Page 6 -->
                              specification is available at all times. This is supported by recording
                              trace information between requirements, from requirements to their
                              sources, and from requirements to their realisation. It is the responsibil-
                              ity of requirements management to enforce adherence to the defined
                              requirements engineering process. An up-to-date requirements specifi-
                              cation is a prerequisite for later releases, failure fixes, and requirements
                              reuse (see e.g. [Thayer and Dorfman 1997; Hull et al. 2002]).
                          The goals of the requirements engineering process can be characterised
                          based on the three dimensions of requirements engineering [Pohl 1994]:
    Understanding of        Specification: This dimension characterises the achieved level of under-
 system requirements         standing about the requirements for the system under consideration.
                             Initially, the understanding is usually weak. The goal is to achieve as
                             complete an understanding as possible of the system requirements.
      Representation of     Representation: This dimension deals with different kinds of representa-
          requirements       tions used to document requirements. At the beginning of the require-
                             ments engineering process, typically informal representations such as
                             sketches or natural language statements are used. The goal is to arrive at
                             a precise requirements specification documented using as formal a
                             requirements modelling language as possible.
      Agreement about       Agreement: This dimension deals with the reconciliation of conflicting
         requirements        opinions. Typically, at the beginning of the requirements engineering
                             process, the individual stakeholders (managers, users, domain experts,
                             etc.) have their own view of the goals and requirements of the system.
                             The agreement dimension characterises the gradual integration of the
                             different views by uncovering and negotiating conflicts. The goal is to
                             arrive at a sufficient agreement on the requirements for the system.

                          10.3    Challenges of Domain Requirements Engineering
                          Domain requirements engineering has to take into account the variability of
                          the product line. This implies additional tasks for the requirements engineer.
                          In this section we present the tasks that are unique to requirements engineer-
                          ing in software product lines.

                          10.3.1 Specific Activities
 Precise definition of    The explicit documentation of the proper common and variable requirements
          variability     is essential for enabling the planned reuse of requirements in application
                          engineering. The required variability has to be documented in the orthogonal
                          variability model in order enable its communication to other sub-processes,

<!-- Page 7 -->
10.4 Overview of Major Steps                                                                          199

such as domain design or domain testing. In this chapter, we elaborate on the
three following activities:
   Commonality analysis: The goal of commonality analysis is to identify          Common
    which requirements are common to all applications of the software              requirements
    product line (Section 10.6).
   Variability analysis: The goal of variability analysis is to identify which    Variable
    requirements differ among the applications, and to determine the differ-       requirements
    ences precisely (Section 10.7).
   Variability modelling: This activity is concerned with modelling vari-         Variation points
    ation points, variants, and their relationships. It is closely related to      and variants
    modelling variable requirements (Section 10.8).
The three activities are closely related to each other. This holds in particular   Commonality and
for the commonality and variability analysis (for additional reading on            variability analysis
commonality and variability analysis, see e.g. [Weiss and Lai 1999]).

10.3.2 Variability in Different Views
In addition to the identification and modelling of variability, domain             Consistent
requirements engineering has to establish consistency across the different         requirements
requirements artefacts and their documentations. The incorporation of differ-      artefacts
ent views facilitates the communication of the commonality and variability
of the product line to different stakeholders. Examples of requirements arte-
facts are goals, features, scenarios, use cases, data models, behavioural
models, functional models, and textual requirements (see Chapter 5 for a
more detailed elaboration on the different requirements artefacts).

10.4    Overview of Major Steps
The requirements artefacts developed in domain requirements engineering
encompass common and variable parts. The representation formats typically
used for documenting common as well as variable requirements are
explained in Chapter 5. In the following, we briefly characterise the basic
steps for defining common and variable requirements.

10.4.1 Defining Common Requirements
Before any requirements can be defined as a commonality of the product             Commonality
line, a commonality analysis has to be performed in order to determine             analysis first
which requirements are actually common to all applications; see Section
10.6. Defining common requirements consists of two basic steps:

<!-- Page 8 -->
                Basic     1. Identify a set of common requirements.
                steps     2. Document the common requirements in detail in a representation format
                             (features, use cases, etc.) that is suitable for the considered view.
          Iteration of   The steps are performed iteratively in the course of detailing and revising the
             the steps   domain requirements. Moreover, common and variable requirements are
                         closely related and are therefore typically modelled together within the same
                         artefacts.
                         There are at least two other important issues that have to be considered in
                         defining common requirements:
                High       Common requirements are the basis for all product line applications.
              quality       The work of different stakeholders depends on the quality of these
                            requirements. Typically, much effort has to be put into keeping the
                            requirements artefacts up to date, consistent across different views
                            (Section 10.3.2), and to ensure a high quality (e.g. comprehensibility).
                            Reviews help to ensure a high quality for common requirements.
            Change of      Common requirements may change to variable requirements. For
    commonality and         example, the evolution of the product line can cause a common
 variability over time      requirement to become variable as a consequence of introducing new
                            variability. Documenting the rationales and assumptions on why a
                            requirement is common helps to understand why a requirement is com-
                            mon and thus avoid unnecessary changes of common requirements into
                            variable requirements. It thus prevents ending up with a fully variable,
                            yet overly complex requirements specification.

                         10.4.2 Defining Variable Requirements
           Modelling     Variable requirements are identified during variability analysis. Defining
           variability   variable requirements involves modelling the variability of the product line
                         in the variability model and documenting variable requirements in a suitable
                         notation. Figure 10-4 illustrates the basic steps for modelling variable
                         requirements. The four steps are:
                Basic     1. Identify an initial set of variable requirements.
                steps     2. Develop the orthogonal variability model.
                          3. Document the requirements in detail in a suitable notation.
                          4. Relate each variable elements of the developed requirements artefact
                             (e.g. use cases, scenarios, or classes) to the corresponding variants in
                             the orthogonal variability model.
                         Steps 3 and 4 are repeated until all required views have been considered.

<!-- Page 9 -->
10.6 Commonality Analysis                                                                                                  201

  (1) Identify an initial set of variable requirements

  (2) Develop the orthogonal                                              (3) Document the identified
      variability model (OVM)                                                 requirements in detail

                     VP                         (4) Assign requirements
                                                    to variants in the
                Variation                           OVM
                 Point 1

       V                     V                                                       Invariant Part
       Variant 1.1           Variant 1.2                                         (Common Requirements)

                                                                             V1.1
                                                                                      Variable Part
                     VP                                                      V1.2

                 Variation                                                           Invariant Part
                  Point 2                                                        (Common Requirements)

                                                                             V2.1
  V              V                 V
                                                                             V2.2     Variable Part
  Variant 2.1    Variant 2.2      Variant 2.3
                                                                             V2.3

                            Fig. 10-4: Steps for modelling variable requirements

10.5       Requirements Sources
Domain requirements engineering incorporates different requirements                                      Stakeholders, existing
sources such as stakeholders, existing products, failure reports, or competi-                            products, etc.
tors’ products to define the common and variable requirements for the prod-
uct line. These sources are used to detail the features defined by product
management.
To identify the domain requirements and their variability, domain require-                               Use of existing
ments engineers can often make use of existing applications (see e.g.                                    applications
[Fantechi et al. 2003]). The development of a software product line rarely
starts from scratch as product line engineering requires sophisticated domain
experience (Section 1.4). Consequently different applications already exist
that serve the markets and customer groups envisaged by the product line.
These existing applications may be own applications or competitors’ appli-
cations. When performing the commonality and variability analysis as
explained in the following sections, requirements engineers should use,
among other requirements sources, the existing applications in their domain.

10.6       Commonality Analysis
Along with the elicitation of requirements for the intended software product
line applications, the commonality of the applications has to be defined.

<!-- Page 10 -->
As much commonality     It is important to have as much commonality as possible, and thereby to
          as possible   reduce the amount of variability to the required minimum [Ardis and Weiss
                        1997]. Common requirements form the basis of every software product line
                        application. The higher the amount of commonality, the less effort has to be
                        spent in design for flexibility. Nevertheless, the amount of variable require-
                        ments should at least allow the development of individual applications that
                        satisfy the goals and needs of the envisioned customers and/or market seg-
                        ments.
       Exploration of   The identification of common requirements starts with the simultaneous
         applications   exploration of the requirements for all foreseen applications of the software
                        product line. Requirements that are identical for all these applications are
                        good candidates for common requirements. There are different ways of
                        identifying common requirements. A simple way to perform commonality
                        analysis is to use an application–requirements matrix.

                        10.6.1 Application–Requirements Matrix
          Contents of   The application–requirements matrix (see Table 10-1 for an example) gives
           the matrix   an approximation of the commonality (and also of the variability) for a given
                        set of software product line application requirements. The application–
                        requirements matrix details the product roadmap, which typically defines
                        common and variable features at a higher level of abstraction. The left
                        column of the matrix lists the requirements of the considered applications.
                        The applications themselves are listed in the top row. In the body of the
                        matrix it is marked for which application a certain requirement is mandatory.

                             Table 10-1: Structure of an application–requirements matrix for four applications

                           Application
                                                App. 1           App. 2            App. 3           App. 4
                          Requirements

                                R1            mandatory        mandatory         mandatory        mandatory
                                R2                 -                 -           mandatory        mandatory
                                R3                 -           mandatory              -                -
                                …                 …                 …                …                …

                        In the application–requirements matrix presented in Table 10-1 the require-
                        ment ‘R1’ is mandatory for all applications and is thus a candidate to be
                        defined as a common product line requirement. Requirement ‘R2’ is not
                        available in ‘App. 1’ and ‘App. 2’. Hence, it is not identified as a common
                        requirement for the product line. The same holds for requirement ‘R3’.

<!-- Page 11 -->
10.6 Commonality Analysis                                                                        203

10.6.2 Priority-Based Analysis
A more sophisticated analysis of commonality can be obtained by applying         Prioritised
the priority-based analysis scheme. Priority-based commonality analysis is       requirements
based on set of requirements in which each requirement is rated by different
stakeholders according to a certain scheme such as the classification pro-
posed by Kano [Kano et al. 1996] (see Chapter 9 for more details on the
Kano classification).
Common requirements encompass at least the set of all basic requirements         Basic
that every application for the envisioned domain must fulfil. Example 10-1       requirements
describes such a basic requirement.
Another indicator for commonality is a requirement having a high priority        High-priority
for a large group of customers, and the other customers do not reject it. This   requirements
case is illustrated in Example 10-2.
Furthermore, it is useful to define all requirements that might be of interest   Strategic
to many customers in the future as common requirements. We refer to this         commonality
kind of requirements as strategic commonalities. Strategic commonalities are
foreseeable basic needs that will appear in the product line’s lifetime, and
thus should be implemented as commonalities to attain a stable set of com-
mon artefacts. Such kinds of commonalities may be important to differenti-
ate from competitors’ products (Example 10-3).

   Example 10-1: Heating Control as a Basic Requirement
   The Kano classification reveals that the requirement “The home
   automation system shall be able to control the heating of the home” is
   a basic requirement. Hence, it is a good candidate to be included into
   the set of common requirements.

   Example 10-2: Access Control as a High-Priority Requirement
   The requirement “The home automation system shall be able to con-
   trol access to the home” is rated with a high priority by most custom-
   ers. There are no customers who rate this requirement negatively.
   Thus it is likely to be accepted as a common requirement.

   Example 10-3: Wireless Communication as a Strategic Commonality
   The requirement “The home automation system shall communicate
   via a wireless network” is going to become a basic need in the near
   future. Hence, it is defined as a commonality of the product line.

<!-- Page 12 -->
                        10.6.3 Checklist-Based Analysis
       Requirements     A more general approach than the priority-based identification of common
          categories    requirements is the use of checklists. Each item on the checklist represents a
                        category of requirements that should be considered as candidates for com-
                        mon requirements. The basic needs, high-priority requirements, and strategic
                        commonalities described in Section 10.6.2 are examples of such categories.
                        In addition the following general categories should be considered:
                           Requirements that are prescribed by national or international laws and
                            standards.
                           Requirements that are prescribed by organisational standards.
                           Requirements that only differ marginally.
                           Requirements that do not conflict with each other.
                           Requirements that are necessary for the technical support, like error
                            handling, maintenance, communication, etc.

                        10.7    Variability Analysis
   Defining variation   The goal of variability analysis is to identify requirements variability and to
  points and variants   define the variation points and their variants related to these requirements. In
                        software product line engineering, there is no strict need to harmonise differ-
                        ent requirements that for example originate from contrasting customer needs
                        or from the necessity to support different legacy systems. Rather, require-
                        ments that differ from each other indicate a need to introduce variation
                        points and variants. However, not for every difference a variation point is
                        defined. Whether a variation point should be introduced needs careful con-
                        sideration by the stakeholders involved, as the variation point may, for
                        instance, have significant influence on the reference architecture. The
                        following example illustrates the introduction of a variation point due to
                        different customer needs:

                           Example 10-4: Variability in the Home Security System due to
                           Different Customer Needs
                           The different requirements of customers with regard to the security
                           system lead to the introduction of a variation point ‘home security by’
                           with the variants ‘motion detection’ and ‘camera surveillance’. Each
                           application of the product line can be customised to provide either
                           motion detection or camera surveillance.

<!-- Page 13 -->
10.7 Variability Analysis                                                                              205

To extract the necessary variability information, the requirements analyst has     Examination of high-
to examine the requirements for all product line applications. The identifica-     level requirements
tion of variability starts with the analysis of high-level requirements. The
analysis reveals those requirements that are unique to a subset of the appli-
cations and those that have different characteristics in different applications.
As a result of variability analysis, variation points and variants are defined.

10.7.1 Variability Analysis with the Application–Requirements
        Matrix
Variability analysis is based on the same techniques as commonality analy-         Initial set of variable
sis. The application–requirements matrix helps to identify variable require-       requirements
ments. Requirements that are only mandatory for one or a small set of
applications are definitively candidates for variable requirements.

10.7.2 Priority-Based Variability Analysis
Requirements that have a high priority for some customers but a low priority       Different
for other customers are candidates for variable requirements. Example 10-5         priorities
illustrates the identification of a requirement with different prioritisations.

   Example 10-5: Variability due to Different Prioritisations
   A study reveals that the requirement “The system shall automatically
   inform the police in case of intrusion” is rated high by a significant
   group of customers but is of less importance for another group of
   customers. Hence, the requirements engineer defines this requirement
   as a variable requirement of the software product line.

Similarly, requirements that are rated positively by one group of customers        Conflicting
but are rated negatively by another group of customers can lead to the intro-      priorities
duction of variability.

   Example 10-6: Conflicts in Home Security Requirements
   The requirement “the security system shall be equipped with a video
   storage system that records all surveillance video data” is appreciated
   by a significant group of customers. Yet the requirement “The system
   shall not record personal data” also has a high priority for many cus-
   tomers. Hence, the requirements engineer decides to define video
   storage as a variable requirement.

In addition, there may be requirements with high ratings, possibly from dif-       Conflicting high-
ferent customer groups, which cannot be realised within the same application       priority requirements
as they are in conflict with each other. This may be due to a real, semantic

<!-- Page 14 -->
                            conflict or due to technical incompatibility. This situation is illustrated in
                            Example 10-6.

                            10.7.3 Checklist-Based Variability Analysis
         Candidates for     In general each difference in structure, functionality, behaviour, or quality
          requirements      between different applications is a candidate for requirements variability. A
             variability    checklist helps in identifying requirements variability. Apart from the cate-
                            gories defined in Section 10.7.2, a checklist may contain, for example, the
                            following items:
                              Differences in functionality.
                              Different quality attributes, e.g. with respect to safety, security, or
                               dependability.
                              Different interface requirements, in order to allow the exchange of
                               information with different legacy systems (e.g. legacy heating control).
                              Different requirements with respect to the system’s user interface.
                              Different design constraints, such as different databases, network types,
                               COTS components, or operating systems.

                            10.8    Defining Requirements Variability
            Orthogonal      Defining the variability of domain requirements is a prerequisite for the suf-
       variability model    ficient understanding of, and the communication about, the variability of a
                            product line. In Chapter 4, we introduce an orthogonal variability model for
                            defining variability in different development artefacts. In Chapter 5, we out-
                            line how variability in various requirements artefacts should be documented
                            using the orthogonal variability model.
               Defining     To define the requirements variability of the indented software product line,
              variability   the domain requirements engineer has to:
                              Carefully define the right set of variation points and variants.
                              Determine their dependencies.
                              Define together with product managers which part of the product line
                               variability is offered to the customer as external variability.

                            10.8.1 Variation Points and Variants
      Related variability   Initially it is often not clear which variant has to be related to which vari-
                subjects    ation point. The documented requirements often do not state this explicitly.
                            However, by considering the common variability subject of the variants,
                            appropriate variation points can typically be identified. Example 10-7 illus-
                            trates this:

<!-- Page 15 -->
10.8 Defining Requirements Variability                                                                207

   Example 10-7: Finding Correlated Variants
   Application ‘App. 1’ has the requirement “The front door shall be
   secured with a keypad.” whereas ‘App. 2’ has the requirement “The
   system shall provide fingerprint-based authorisation.” These require-
   ments refer to the same variability subject, namely the identification
   mechanism used. Hence, the variation point ‘door lock identification
   mechanism’ is defined with the two variants stated above. These vari-
   ants are associated with the corresponding requirements artefacts.

After the variation point and the initial variants have been defined, additional   Additional
variants have to be identified. Reasons for introducing additional variants        variants
can be the provision of an additional benefit for the customers or the differ-
entiation of the software product line from competitors’ products. Especially
variants leading to high customer satisfaction should be taken into account in
this step (we introduced the term “delighters” for requirements that lead to
high customer satisfaction, see Chapter 9). The identification of additional
variants can also be performed before the definition of the variation point.
However, identifying additional variants after the definition of the variation
point is usually better, since the variation point and the variants, which have
already been identified, support the identification of additional variants.

10.8.2 Variability Dependencies
The types of the variability dependencies between a variation point and its        Mandatory, optional,
variants and the defined alternative choices (Section 4.6) determine the           and alternative choice
permissible combinations of variants for each product line application. For
some variants the appropriate variability dependency and/or alternative
choice may be clear from the available requirements sources, such as
product brochures (Example 10-7). If such information is not available
directly, the requirements engineer has to involve the relevant stakeholders
to identify the proper variability dependencies and alternative choices.
Again, by defining the variability dependencies, the requirements engineer         Software architects
should consider the fact that the variability can have a strong influence on       involved in variability
the reference architecture. For example, designing a reference architecture        definition
which supports a wide range of optional variants that differ significantly in
quality may be impossible. Consequently, among other stakeholders, archi-
tects should be involved in the definition of variability dependencies. Or,
more generally, software architects must be involved in the definition of
requirements variability.

<!-- Page 16 -->
                      Example 10-8: Identifying the Proper Variability Dependency
                      A product brochure for the home security system states that the sys-
                      tem is always delivered with the feature “acoustic alarm”. In addition,
                      the customer may choose the “police information” feature, which
                      enables the system to inform the police in the case of an attempted
                      burglary. The variability model of the home security product line
                      contains the variation point “alarm activation” with the mandatory
                      variant “acoustic alarm” and the optional variant “police information”.

      First example         Goals
                            Goals
        application         G1:
                            G1:          Protection
                                          Protection against
                                                         against burglary.
                                                                    burglary.
                            G2:
                            G2:          Catching
                                          Catching the the thief.
                                                             thief.
                            G...:
                            G...:        ...
                                          ...
                            G5:
                            G5:          Video
                                          Video surveillance
                                                   surveillance of   of the
                                                                         the house.
                                                                               house.
                            Desired
                            Desired Features
                                    Features
                            F1:
                            F1:          Video
                                          Video surveillance.
                                                   surveillance.
                            Fn:
                            Fn:          ...
                                          ...
                            F2.2:
                            F2.2:        Inform
                                          Inform police
                                                    police viavia phone
                                                                  phone line.line.
                            Requirements
                            Requirements
                            R1:
                            R1:          The
                                          The time
                                                time between
                                                        between the  the detection
                                                                          detection of  of an
                                                                                            an open
                                                                                                open window
                                                                                                       window and and the
                                                                                                                        the
                                         recording
                                          recording of  of the
                                                            the video
                                                                 video surveillance
                                                                          surveillance shall
                                                                                           shall be
                                                                                                 be less
                                                                                                     less than
                                                                                                           than 22 sec.
                                                                                                                   sec.
                            R2:
                            R2:          The
                                          The alarm
                                                alarm signal
                                                          signal shall
                                                                   shall be be deactivated
                                                                                 deactivated by by the
                                                                                                    the police,
                                                                                                         police, by by the
                                                                                                                        the
                                         owner,
                                          owner, or or automatically
                                                        automatically after after 20
                                                                                   20 minutes.
                                                                                        minutes.
                            R2.1:
                            R2.1:        The
                                          The alarm
                                                alarm signal
                                                          signal shall
                                                                   shall start
                                                                            start immediately
                                                                                   immediately afterafter the
                                                                                                           the detection
                                                                                                               detection
                                         of
                                          of the
                                              the open
                                                   open window
                                                          window or    or door.
                                                                           door.
                            R11:
                            R11:         The
                                          The camera
                                                camera shallshall have
                                                                    have enough
                                                                            enough storage
                                                                                       storage for
                                                                                                 for 55 minutes’
                                                                                                        minutes’ video
                                                                                                                     video
                                         stream
                                          stream to to be
                                                       be stored
                                                            stored as as alarm
                                                                         alarm buffer.
                                                                                  buffer.
                            R11.1:
                            R11.1:       The
                                          The recording
                                                recording isis only
                                                                 only initiated
                                                                         initiated ifif motion
                                                                                        motion isis detected.
                                                                                                    detected.
                            R28:
                            R28:         The
                                          The system
                                                system shall
                                                           shall be
                                                                  be able
                                                                       able toto generate
                                                                                 generate user-specific
                                                                                             user-specific reports
                                                                                                             reports that
                                                                                                                       that
                                         document
                                          document the  the system
                                                              system events.
                                                                        events.
                            R77:
                            R77:         The
                                          The stored
                                                 stored video
                                                           video streams
                                                                    streams of   of the
                                                                                     the video
                                                                                          video surveillance
                                                                                                  surveillance system
                                                                                                                   system
                                         shall
                                          shall be
                                                 be safe
                                                     safe against
                                                            against misuse
                                                                       misuse and and tampering.
                                                                                       tampering.
                            R78:
                            R78:         The
                                          The time
                                                 time period
                                                         period between
                                                                     between motionmotion detection
                                                                                              detection andand start
                                                                                                                 start ofof
                                         recording
                                          recording shall
                                                        shall be
                                                               be less
                                                                    less than
                                                                          than 0.5
                                                                                 0.5 seconds.
                                                                                      seconds.
                            R78.1
                            R78.1        The
                                          The password
                                                 password shall shall consist
                                                                         consist of of atat least
                                                                                             least 10
                                                                                                    10 characters
                                                                                                        characters and and
                                         include
                                          include special
                                                     special characters
                                                                characters (such(such asas numbers).
                                                                                            numbers). TheThe password
                                                                                                               password
                                         shall
                                          shall bebe changed
                                                       changed every  every 33 months,
                                                                                   months, and and anan old
                                                                                                         old password
                                                                                                               password
                                         cannot
                                          cannot be be used
                                                        used again.
                                                               again.

                      Fig. 10-5: Example excerpt of a requirements specification for the first application

<!-- Page 17 -->
10.9 Example                                                                                        209

10.8.3 Constraint Dependencies
By defining constraint dependencies (“requires” and “excludes”, see Section       Restricting admissible
4.6.5 for the definitions) the domain requirements engineer restricts and/or      combinations
enforces the binding of variation points during application engineering. The
requirements engineer has thus to determine the essential influences among
the variants that exist at the requirements level. In other words, the domain
requirements engineer must elicit and document the variant to variant, vari-
ant to variation point, and variation point to variation point “requires” and
“excludes” dependencies stemming from domain requirements artefacts.

10.8.4 Adaptation of Product Line Variability Based on Product
       Management Decisions
The final decisions on the variability in domain requirements artefacts are       Final decisions by
made by product management. In other words, product management decides:           product management
  If a variation point identified and defined in the domain requirements
   engineering sub-process should be part of the product line or not, or
   even if a new variation point should be added.
  If the variants identified and defined in the domain requirements engin-
   eering sub-process should be part of the product line or not, or even if a
   new variant should be added.
  If the variability constraints and dependencies defined in the domain
   requirement engineering sub-process are correct, or if they have to be
   adapted and how.
  Whether a variation point is categorised as external product line vari-
   ability or as internal product line variability.
Domain requirements engineers have to adapt the requirements artefacts            Adaptation of
affected by changes or adaptations of the variability definitions in the ortho-   requirements
gonal variability model made by product management.                               artefacts

10.9    Example
In this section, we provide an example of how to identify and document            Three example
variable requirements for a software product line. We first provide a simple      applications
outline of the requirements for the first three foreseeable applications. Sub-
sequently, we demonstrate the major steps performed during commonality
analysis, variability analysis, and during the documentation of common and
variable requirements artefacts. Figures 10-5 to 10-7 present excerpts of the
requirements for each of the three software product line applications.

<!-- Page 18 -->
      Second example              Goals
                                  Goals
          application             G1:
                                  G1:          Protection
                                                Protection against
                                                               against burglary
                                                                          burglary in in the
                                                                                          the office.
                                                                                               office.
                                  G…
                                  G…           ...
                                                ...
                                  G4:
                                  G4:          Meet
                                                Meet clauses
                                                        clauses of of the
                                                                       the insurance
                                                                            insurance agency.
                                                                                          agency.
                                  G5:
                                  G5:          Determent
                                                Determent of   of thieves
                                                                   thieves through
                                                                              through alarm
                                                                                          alarm signal.
                                                                                                   signal.
                                  Desired
                                  Desired Features
                                          Features
                                  F1:
                                  F1:          Video
                                                Video surveillance.
                                                         surveillance.
                                  F1.1:
                                  F1.1:        Alarm
                                                Alarm activation.
                                                          activation.
                                  F2:
                                  F2:          Alarm
                                                Alarm signal.
                                                          signal.
                                  F2.1:
                                  F2.1:        Motion
                                                Motion detection.
                                                           detection.
                                  F2.4:
                                  F2.4:        Automatic
                                                Automatic deactivation
                                                               deactivation of    of alarm.
                                                                                     alarm.
                                  F3:
                                  F3:          Alarm
                                                Alarm call.
                                                          call.
                                  F3.1:
                                  F3.1:        Call
                                                Call by
                                                      by SMS
                                                           SMS (short
                                                                   (short message
                                                                            message standard).
                                                                                        standard).
                                  F3.2:
                                  F3.2:        Call
                                                Call by
                                                      by internet
                                                           internet message.
                                                                       message.
                                  Requirements
                                  Requirements
                                  R1:
                                  R1:          The
                                                The recording
                                                      recording of   of the
                                                                         the video
                                                                              video surveillance
                                                                                       surveillance systemsystem shall
                                                                                                                    shall start
                                                                                                                           start no
                                                                                                                                 no
                                               later
                                                later than
                                                        than 11 second
                                                                  second after
                                                                             after the
                                                                                     the detection
                                                                                           detection of    of the
                                                                                                               the open
                                                                                                                    open door
                                                                                                                           door oror
                                               window.
                                                window.
                                  R2:
                                  R2:          The
                                                The police
                                                       police shall
                                                                 shall bebe informed
                                                                              informed aboutabout the  the burglary
                                                                                                             burglary viavia radio
                                                                                                                              radio
                                               transmission.
                                                transmission.
                                  R3:
                                  R3:          The
                                                The alarm
                                                      alarm shall
                                                               shall bebe activated
                                                                           activated in in case
                                                                                            case ofof burglary.
                                                                                                        burglary.
                                  R3.1:
                                  R3.1:        The
                                                The alarm
                                                      alarm signal
                                                                signal shall
                                                                          shall only
                                                                                  only start
                                                                                         start ifif the
                                                                                                     the police
                                                                                                           police dodo not
                                                                                                                        not arrive
                                                                                                                             arrive
                                               within
                                                within 55 minutes
                                                             minutes of of alarm
                                                                            alarm detection.
                                                                                     detection.
                                  R3.2:
                                  R3.2:        The
                                                The alarm
                                                      alarm (signal)
                                                               (signal) shall
                                                                           shall only
                                                                                   only bebe deactivated
                                                                                              deactivated by     by the
                                                                                                                     the police
                                                                                                                         police oror
                                               by
                                                by the
                                                    the owner,
                                                         owner, via via password
                                                                         password and  and TAN
                                                                                             TAN (transaction
                                                                                                      (transaction number).
                                                                                                                       number).
                                  R10:
                                  R10:         The
                                                The time
                                                       time period
                                                                period between
                                                                           between motion
                                                                                        motion detection
                                                                                                      detection and and start
                                                                                                                          start ofof
                                               recording
                                                recording shall
                                                              shall bebe less
                                                                          less than
                                                                                than 2.5
                                                                                       2.5 seconds.
                                                                                            seconds.
                                  R13:
                                  R13:         The
                                                The camera
                                                      camera shallshall have
                                                                          have enough
                                                                                  enough storage
                                                                                             storage for  for 55 minutes’
                                                                                                                  minutes’ video
                                                                                                                             video
                                               stream
                                                stream to to be
                                                              be stored
                                                                  stored asas alarm
                                                                               alarm buffer.
                                                                                        buffer.
                                  R68:
                                  R68:         The
                                                The stored
                                                       stored video
                                                                 video streams
                                                                          streams of  of the
                                                                                           the video
                                                                                                 video surveillance
                                                                                                           surveillance system
                                                                                                                            system
                                               shall
                                                shall be
                                                       be safe
                                                            safe against
                                                                  against misuse
                                                                             misuse andand tampering.
                                                                                             tampering.
                                  R68.1:
                                  R68.1:       The
                                                The length
                                                      length of of the
                                                                    the password
                                                                         password shallshall be
                                                                                              be at at least
                                                                                                        least 55 characters.
                                                                                                                  characters. The
                                                                                                                               The
                                               password
                                                password shallshall only
                                                                     only be be changed
                                                                                 changed ifif necessary.
                                                                                               necessary.

                          Fig. 10-6: Example excerpt of a requirements specification for the second application

                        10.9.1 Commonality Analysis
        Requirements    The identification of common requirements is done top down from abstract
              matrix    requirements artefacts to detailed ones. We use the application–requirements
                        matrix to document in which applications the requirements are mandatory. In
                        Fig. 10-8 a set of common requirements is identified in the application–

<!-- Page 19 -->
10.9 Example                                                                                                                  211

requirements matrix. Those requirements that are mandatory for all applica-
tions constitute the commonality of the product line.
In a next step, the matrix is analysed for further commonalities between the                                  Detailed
applications. The requirements are analysed, for example, with regard to:                                     analysis
     The same content, represented in different words.
     Requirements that will become common in the near future.
     Requirements that only differ slightly from each other.
     Requirements that should be common from a strategic point of view.

            Goals
            Goals
                                                                                                              Third example
            G1:
            G1:          Safety
                          Safety against
                                    against thieves.
                                               thieves.                                                       application
            G…:
            G…:          ...
                          ...
            G5:
            G5:          Video
                          Video surveillance
                                    surveillance of  of the
                                                         the flat.
                                                              flat.
            Desired
            Desired Features
                    Features
            F1:
            F1:          Video
                          Video surveillance.
                                    surveillance.
            F1.1:
            F1.1:        Activation
                          Activation by   by motion
                                               motion detection.
                                                         detection.
            F...:
            F...:        ……
            F2.2:
            F2.2:        Door
                          Door andand window
                                        window sensor.
                                                    sensor.
            F2.3:
            F2.3:        Manual
                          Manual deactivation
                                      deactivation of  of alarm
                                                           alarm (by(by owner,
                                                                         owner, or or police).
                                                                                      police).
            Requirements
            Requirements
            R1:
            R1:          The
                          The police
                                police shall
                                           shall be
                                                  be informed
                                                      informed immediately
                                                                    immediately afterafter the
                                                                                            the detection
                                                                                                detection
                         of
                          of an
                              an open
                                  open window
                                          window or   or door.
                                                          door.
            R1.1:
            R1.1:        The
                          The police
                                police shall
                                           shall be
                                                 be informed
                                                     informed via  via internet
                                                                        internet message
                                                                                   message or or SMS.
                                                                                                 SMS.
            R2:
            R2:          The
                          The alarm
                                 alarm signal
                                           signal shall
                                                   shall start
                                                            start immediately
                                                                   immediately afterafter the
                                                                                           the detection
                                                                                                detection
                         of
                          of the
                              the open
                                   open window
                                            window or  or door.
                                                           door.
            R2.1:
            R2.1:        The
                          The alarm
                                 alarm signal
                                           signal shall
                                                   shall be be deactivated
                                                                deactivated by  by the
                                                                                     the police,
                                                                                          police, byby the
                                                                                                        the
                         owner,
                          owner, or  or automatically
                                         automatically afterafter 20
                                                                   20 minutes.
                                                                        minutes.
            R9:
            R9:          The
                          The video
                                video surveillance
                                          surveillance shall
                                                           shall be
                                                                  be active
                                                                       active as
                                                                              as soon
                                                                                   soon as
                                                                                         as activated
                                                                                             activated byby
                         the
                          the user.
                               user.
            R9.1:
            R9.1:        AA recording
                              recording is  is only
                                               only initiated
                                                      initiated ifif motion
                                                                     motion is is detected.
                                                                                  detected.
            R9.2:
            R9.2:        The
                          The camera
                                camera shall shall have
                                                    have enough
                                                            enough storage
                                                                       storage for
                                                                                 for 55 minutes’
                                                                                        minutes’ video
                                                                                                     video
                         stream
                          stream to  to be
                                        be stored
                                             stored as
                                                     as alarm
                                                         alarm buffer.
                                                                  buffer.
            R10:
            R10:         The
                          The timetime period
                                           period between
                                                     between motionmotion detection
                                                                             detection and  and start
                                                                                                  start of
                                                                                                         of
                         recording
                          recording shallshall be
                                                be less
                                                    less than
                                                          than 0.5
                                                                0.5 seconds.
                                                                      seconds.
            R11:
            R11:         The
                          The video
                                 video recording
                                           recording shall
                                                         shall continue
                                                                 continue forfor 22 minutes
                                                                                      minutes after
                                                                                                 after the
                                                                                                        the
                         last
                          last motion
                                motion was  was detected.
                                                 detected.
            R79:
            R79:         The
                          The stored
                                 stored video
                                            video streams
                                                    streams of  of the
                                                                     the video
                                                                          video surveillance
                                                                                   surveillance system
                                                                                                   system
                         shall
                          shall be
                                 be safe
                                      safe against
                                             against misuse
                                                       misuse andand tampering.
                                                                       tampering.

     Fig. 10-7: Example excerpt of a requirements specification for the third application

<!-- Page 20 -->
        Application–                       Requirements                             App. 1       App. 2       App. 3
 requirements matrix
                       The police shall be informed immediately after the                                 mandatory
                       detection of an open window or door.
                       The police shall be informed via internet message or
                                                                                                          mandatory
                       SMS
                       The alarm signal shall start immediately after the
                                                                            mandatory                     mandatory
                       detection of the open window or door

                       The alarm signal shall only start if the police does                  mandatory
                       not arrive within 5 minutes after alarm detection

                       The alarm signal shall be deactivated by the police, mandatory                     mandatory
                       by the owner, or automatically after 20 minutes
                       The video surveillance is active as soon as activated
                                                                                                          mandatory
                       by the user
                       …                                                        …            …            …

                                                                                mandatory                 mandatory
                       A recording is only initiated if a motion is detected.
                       The camera shall have storage for 5 minutes' video
                                                                          mandatory          mandatory    mandatory
                       stream to be stored as alarm buffer

                       The time period between motion detection and start mandatory                       mandatory
                       of recording shall be less than 0.5 seconds

                       The time period between motion detection and start                    mandatory
                       of recording shall be less than 2.5 seconds
                       The video recording shall continue 2 minutes after
                                                                                                          mandatory
                       the last motion was detected

                       The stored video streams of video surveillance mandatory              mandatory    mandatory
                       system shall be safe against misuse and tampering

                               Fig. 10-8: Using the application requirements-matrix to identify variability

                           Example 10-9: Identifying Similar Goals
                           Application 1, G1: “protection against burglary”
                           Application 2, G1: “protection against burglary in the office”
                           Application 3, G1: “protection against thieves”
                           The three goals of the different applications can be described by one
                           common goal: “protect against burglary”.

<!-- Page 21 -->
10.9 Example                                                                                             213

In Example 10-9 we illustrate three different goal descriptions that can be
summarised by a single goal “protection against burglary”.

10.9.2 Variability Analysis
The application–requirements matrix presented in Fig. 10-8 is used to iden-        Identifying variable
tify an initial set of variable aspects among the requirements of different        requirements
applications. The candidates for variable requirements, which we focus on in
the following, are highlighted in Fig. 10-8 by grey bars. The requirement
“the alarm signal shall be deactivated…” is variable because it is only man-
datory for applications “App. 1” and “App. 3”. In addition, the requirement
itself contains variable aspects; see Examples 10-10 and 10-11.

   Example 10-10: Variable Aspects Within a Requirement
   The requirement differentiates among the following variants: ‘The
   alarm signal shall be …’
   Variant 1: “…deactivated by the police”
   Variant 2: “…deactivated by the owner”
   Variant 3: “…deactivated automatically after 20 min.”

   Example 10-11: Variants Among Different Applications
   For the authentication variant ‘password authentication’ the security
   requirements differ among the applications. App. 1 requires a high
   password quality, whereas App. 2 requires a low password quality.
   Variant 1 ‘high password quality’: Req-78.1, App. 1: “The password
   shall consist of at least 10 characters and include special characters
   (such as numbers). The password shall be changed every 3 months,
   and an old password cannot be used again.”
   Variant 2 ‘low password quality’: Req-68.1, App. 2: “The password
   shall be at least 5 characters long. The password shall only be changed
   if necessary.”

10.9.3 Defining Variation Points and Variants
The correct definition of variation points is essential, since a variation point   Determining the
provides the central location for binding the variability during application       variability subject
engineering. Typically, the variation subject is a good indicator for a vari-
ation point and its name. In Example 10-12, we define the variability subject
by abstracting from related variants.

<!-- Page 22 -->
                            Example 10-12: Defining a Variation Point for a Set of Variants
                            By abstracting from the requirements “the alarm signal shall be deac-
                            tivated…” we define the variation point ‘alarm deactivation’. More-
                            over, we define only two variants as manual deactivation can be done
                            by any person authenticated by the system.
                            Hence, for the variation point ‘alarm deactivation’ the following vari-
                            ants are available:
                            Variant 1: “…manual deactivation by an authenticated person”
                            Variant 2: “…automatic deactivation after 20 minutes”

                         10.9.4 Defining Variability Dependencies
                         After determining the variation point and its variants, the required variability
                         dependencies have to be defined. We illustrate this step in Fig. 10-9 for the
                         variation point ‘alarm deactivation’ from Example 10-12.

                                                                         VP

                                                                      Alarm
                                                                    Deactivation

                                                            V                 V

                                                                Manual        Automatic

                             Fig. 10-9: Example of a variation point with a an alternative choice of two variants

                            Example 10-13: Definition of Variability Dependencies
                            The variants ‘manual’ and ‘automatic’ shall be optional variants for
                            deactivating the alarm. Exactly one of them must be selected for an
                            application. Hence, we relate them to the variation point ‘alarm deac-
                            tivation’ using optional variability dependencies and group the
                            dependencies by an alternative choice with a range of [1..1]. As this is
                            the default range we do not show it in Fig. 10-9.

                         10.9.5 Defining Constraint Dependencies
  Variant to variation   In Example 10-14, we illustrate the use of a constraint dependency between
     point constraint    a variant and a variation point. If the variant at the source end of the con-
                         straint dependency (‘video surveillance’) is selected, the variation point at
                         the target end (‘video surveillance quality’) has to be bound by selecting the
                         desired variants. The selection thus has to take into account the defined vari-
                         ability dependencies and alternative choices.

<!-- Page 23 -->
10.10 Differences from Single-System Engineering                                                                            215

                             VP                                                VP
                          Alarm                                              Video
                         Activation                                        Surveillance
                                            requires_v_vp                    Quality

            V             V             V                   V              V               V
            Acoustic        Police        Video             High Quality   Mid Quality    Low Quality
              Signal     Information   Surveillance            t<=0.1          t<1           t>2

            R2, App. 1   R1, App. 3    R3, App. 2           R10, App. 3    R1, App. 2     R1, App. 1
            R2, App. 2   R2, App. 2    R2.1, App. 1
            R9, App. 3

       Fig. 10-10: “Requires” dependency between a variant and a variation point

   Example 10-14: Use of the “Requires” Constraint Dependency
   The ‘requires_v_vp’ dependency between the variant ‘video surveil-
   lance’ and the variation point ‘video surveillance quality’ (Fig. 10-10)
   means that the video surveillance system is available in different
   quality variants, such as required by the individual applications.

10.9.6 Documenting Domain Requirements
Commonality and variability have to be defined in the various requirements                              Variants in a
artefacts and related to the corresponding concepts (variants and/or variation                          use case scenario
points) in the orthogonal variability model. Figure 10-11 illustrates an
excerpt of a variable use case scenario, which is enriched by XML tags.
These XML tags structure the textual scenario in different elements. Due to
the definition of the elements in the scenario the variable parts (e.g. steps,
preconditions, etc.) of the use case scenario can be related to the corres-
ponding variants in the variability model.

10.10 Differences from Single-System Engineering
The main goal of domain requirements engineering is the prospective devel-                              Identifying and
opment of common and variable requirements artefacts for the product line                               defining commonality
in order to enable large-scale reuse in application engineering. Consequently,                          and variability
the requirements engineering activities (elicitation, documentation, negoti-
ation, and validation/verification) do not deal with a single application but
with the requirements of all envisioned product line applications. The
requirements engineer has to involve a potentially large number of different
stakeholders (product managers, architects, customer groups, maintenance
staff, etc.) and different requirements sources (legacy systems, country laws,
etc.) to be able to identify all relevant common and variable requirements.

<!-- Page 24 -->
                                         <variation
                                         <variation point
                                                     point name
                                                           name == "alarm
                                                                    "alarm system">
                                                                             system">
                                         <optional-variant
                                         <optional-variant name
                                                             name == "video
                                                                      "video surveillance">
                                                                              surveillance">
                                         Use
                                         Use Case
                                               Case Name:
                                                     Name: activate
                                                             activate video
                                                                       video surveillance
                                                                              surveillance
                                         Precondition:
                                         Precondition: system
                                                         system online
                                                                 online
                                         <variation
                                         <variation point
                                                     point name
                                                           name == "alarm
                                                                    "alarm activation">
                                                                             activation">
                                         <alternative-variant
                                         <alternative-variant name == "authentication
                                                               name      "authentication first"
                                                                                           first" >>
                                         USER
                                         USER                                                       SYSTEM
                                                                                                     SYSTEM
                                         1.
                                         1.        select
                                                    select video
                                                           video surveillance
                                                                  surveillance
                                         2.
                                         2.                                                         request
                                                                                                     request authentication
                                                                                                             authentication
                                         3.
                                         3.        authenticate
                                                    authenticate
                                         4.
                                         4.                                                         provide  access
                                                                                                     provide access
                                         5.
                                         5.        request
                                                    request activation
                                                             activation of
                                                                         of surveillance
                                                                            surveillance
                                         6.
                                         6.                                                         confirm
                                                                                                     confirm activation
                                                                                                             activation
                                         7.
                                         7.        logout
                                                    logout
                                         </alternative-variant>
                                         </alternative-variant>
                                         <alternative-variant
                                         <alternative-variant name
                                                               name == "access
                                                                         "access first">
                                                                                   first">
                                         USER
                                         USER                                                       SYSTEM
                                                                                                     SYSTEM
                                         1.
                                         1.        select
                                                    select video
                                                           video surveillance
                                                                  surveillance
                                         2.
                                         2.                                                         provide
                                                                                                     provide access
                                                                                                             access
                                         3.
                                         3.        request
                                                    request activation
                                                             activation of
                                                                         of surveillance
                                                                            surveillance
                                         4.
                                         4.                                                         request
                                                                                                     request authentication
                                                                                                             authentication
                                         5.
                                         5.        authenticate
                                                    authenticate
                                         6.
                                         6.                                                         confirm
                                                                                                     confirm activation
                                                                                                             activation
                                         7.
                                         7.        logout
                                                    logout
                                         </alternative-variant>
                                         </alternative-variant>
                                         </variation
                                         </variation point>
                                                      point>

                                         …
                                         …

                                        Fig. 10-11: Example of a variable, textual scenario description

                           10.11 Summary
       Identification of   Along with the elicitation of requirements from different sources, the domain
      commonality and      requirements engineering sub-process has to identify which requirements are
             variability   common to all applications, and which requirements differ among the appli-
                           cations. Hence, also during domain requirements engineering a commonality
                           and variability analysis is performed. The application–requirements matrix
                           provides a synopsis of the high-level requirements for several applications
                           and can thus be used to support the identification of commonality and vari-
                           ability. A more sophisticated analysis can be performed on a set of priori-
                           tised requirements. In addition, checklists can be used to guide the identifi-
                           cation of common and variable requirements.
          Definition of    To support efficient communication and to enforce consistency of the vari-
           variability     ability of the software product line, the variability is defined in the orthogo-
                           nal variability model. Variability modelling involves the identification and
                           definition of variation points, variants, variability dependencies, and con-
                           straint dependencies. Variation points and variants are identified by abstrac-
                           ting from variable requirements and/or by grouping similar requirements
                           artefacts. Architects have to be involved in the definition of product line
                           variability as the variability has a strong influence on the reference archi-
                           tecture. External variability is defined together with product management.
