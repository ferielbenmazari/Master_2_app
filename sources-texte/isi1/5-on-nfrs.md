                                 On Non-Functional Requirements


                                            Martin Glinz
                      Department of Informatics, University of Zurich, Switzerland
                                          glinz@ifi.uzh.ch


                      Abstract                              requirements concerning the functionality of a system
                                                            and other requirements.
   Although the term ‘non-functional requirement’ has          There is a rather broad consensus about how to de-
been in use for more than 20 years, there is still no       fine the term ‘functional requirements’. The existing
consensus in the requirements engineering community         definitions follow two threads that coincide to a large
what non-functional requirements are and how we             extent. In the first thread, the emphasis is on functions:
should elicit, document, and validate them. On the          a functional requirement specifies “a function that a
other hand, there is a unanimous consensus that non-        system (...) must be able to perform” [6], “what the
functional requirements are important and can be            product must do” [18], “what the system should do”
critical for the success of a project.                      [20]. The second thread emphasizes behavior: func-
   This paper surveys the existing definitions of the       tional requirements “describe the behavioral aspects of
term, highlights and discusses the problems with the        a system” [1]; behavioral requirements are “those re-
current definitions, and contributes concepts for over-     quirements that specify the inputs (stimuli) to the sys-
coming these problems.                                      tem, the outputs (responses) from the system, and be-
                                                            havioral relationships between them; also called func-
                                                            tional or operational requirements.” [3].
1. Introduction
                                                               Wiegers as well as Jacobson, Rumbaugh and Booch
   If you want to trigger a hot debate among a group of     try a synthesis: “A statement of a piece of required
requirements engineering people, just let them talk         functionality or a behavior that a system will exhibit
about non-functional requirements. Although this term       under specific conditions.” [21]; “A requirement that
has been in use for more than two decades, there is still   specifies an action that a system must be able to per-
no consensus about the nature of non-functional re-         form, without considering physical constraints; a re-
quirements and how to document them in requirements         quirement that specifies input/output behavior of a
specifications.                                             system.” [10].
   This paper is an attempt to work out and discuss the        There is only one semantic difference that may arise
problems that we have with the notion of non-func-          between the different definitions: timing requirements
tional requirements and to contribute concepts for          may be viewed as behavioral, while they are not func-
overcoming these problems. The focus is on system (or       tional. However, most publications in RE consider
product) requirements; the role of non-functional re-       timing requirements to be performance requirements
quirements in the software process is not discussed         which in turn are classified as non-functional require-
[16].                                                       ments.
   The paper is organized as follows. Section 2 sur-           On the other hand, there is no such consensus for
veys typical definitions for the terms ‘functional re-      non-functional requirements. Table 1 gives an over-
quirement’ and ‘non-functional requirement’. The            view of selected definitions from the literature or the
problems with these definitions are discussed in Sec-       web, which – in my opinion – are representative of the
tion 3. Section 4 presents concepts about how these         definitions that exist.
problems can be overcome or at least alleviated. The
paper ends with a discussion of these concepts.             3. Where is the problem?
2. Defining the term                                           The problems that we currently have with the notion
                                                            of non-functional requirements can be divided into
  In every current requirements classification (for ex-     definition problems, classification problems and repre-
ample [7], [11], [12]), we find a distinction between       sentation problems.

Proceedings of the 15th IEEE International Requirements Engineering Conference, Delhi, India.
Table 1. Definitions of the term non-functional requirement(s) (listed in alphabetical order of sources)
Source                   Definition
Antón [1]                Describe the nonbehavioral aspects of a system, capturing the properties and constraints under
                         which a system must operate.
Davis [3]                The required overall attributes of the system, including portability, reliability, efficiency, human
                         engineering, testability, understandability, and modifiability.
IEEE 610.12 [6]          Term is not defined. The standard distinguishes design requirements, implementation requirements,
                         interface requirements, performance requirements, and physical requirements.
IEEE 830-1998 [7]        Term is not defined. The standard defines the categories functionality, external interfaces,
                         performance, attributes (portability, security, etc.), and design constraints. Project requirements
                         (such as schedule, cost, or development requirements) are explicitly excluded.
Jacobson, Booch and      A requirement that specifies system properties, such as environmental and implementation
Rumbaugh [10]            constraints, performance, platform dependencies, maintainability, extensibility, and reliability. A
                         requirement that specifies physical constraints on a functional requirement.
Kotonya and Sommerville Requirements which are not specifically concerned with the functionality of a system. They place
[11]                     restrictions on the product being developed and the development process, and they specify external
                         constraints that the product must meet.
Mylopoulos, Chung and    “... global requirements on its development or operational cost, performance, reliability,
Nixon [16]               maintainability, portability, robustness, and the like. (...) There is not a formal definition or a
                         complete list of nonfunctional requirements.”
Ncube [17]               The behavioral properties that the specified functions must have, such as performance, usability.
Robertson and Robertson A property, or quality, that the product must have, such as an appearance, or a speed or accuracy
[18]                     property.
SCREEN Glossary [19]     A requirement on a service that does not have a bearing on its functionality, but describes attributes,
                         constraints, performance considerations, design, quality of service, environmental considerations,
                         failure and recovery.
Wiegers [21]             A description of a property or characteristic that a software system must exhibit or a constraint that
                         it must respect, other than an observable system behavior.
Wikipedia: Non-Func-     Requirements which specify criteria that can be used to judge the operation of a system, rather than
tional Requirements [22] specific behaviors.
Wikipedia: Requirements Requirements which impose constraints on the design or implementation (such as performance
Analysis [23]            requirements, quality standards, or design constraints).


3.1. Definition problems                                           ance and constraints. On the other hand, in the defini-
                                                                   tion by Davis [3], every non-functional requirement is
   When analyzing the definitions in Table 1, we find              an attribute of the system.
not only terminological, but also major conceptual
discrepancies. Basically, all definitions build on the                 Every requirement (including all functional ones)
following terms: property or characteristic, attribute,            can be regarded as a quality, because, according to ISO
quality, constraint, and performance. However, there is            9000:2000 [8], quality is the “degree to which a set of
no consensus about the concepts that these terms de-               inherent characteristics fulfils requirements”. Simi-
note. There are also cases where the meaning is not                larly, every requirement can be regarded as a con-
clear, because terms are used without a definition or a            straint, because it constrains the space of potential
clarifying example.                                                solutions to those that meet this requirement.
   Property and characteristic seem to be used in their                Hence, in all definitions that mention the term qual-
general meaning, i.e. they denote something that the               ity, its meaning is restricted to a set of specific qualities
system must have, which typically includes specific                other than functionality: usability, reliability, security,
qualities such as usability or reliability, but excludes           etc.
any functional quality. There is no consensus whether                  Correspondingly, it is clear that constraint in the
constraints also are properties: Jacobson, Booch and               context of non-functional requirements must have a
Rumbaugh [10] include them, others, e.g. Wiegers [21]              restricted meaning. However, there is no consensus
and Antón [1] exclude them.                                        among the existing definitions what precisely this re-
   Attribute is a term that is used both with a broad and          striction should be. For example, IEEE 830-1998 [7] or
a narrow meaning. In IEEE 830-1998 [7], attributes are             Jacobson, Booch and Rumbaugh [10] restrict the
a collection of specific qualities, excluding perform-             meaning of constraint to design constraints and physi-
cal constraints. Others, for example the definition in      non-functional requirements. Davis [3] regards them as
the Wikipedia article on requirements analysis [23], do     qualities and uses Boehm’s quality tree [2] as a sub-
not treat constraints as a sub-category of non-func-        classification for non-functional requirements. The
tional requirements, but consider every non-functional      IEEE standard 830-1998 on Software Requirements
requirement to be a constraint. Davis [3] does not          Specifications [7] sub-classifies non-functional re-
mention constraints at all when discussing non-func-        quirements into external interface requirements, per-
tional requirements. Robertson and Robertson [18]           formance requirements, attributes and design con-
have a rather specific view of constraints: they con-       straints, where the attributes are a set of qualities such
sider operational, cultural, and legal constraints to be    as reliability, availability, security, etc. The IEEE
non-functional properties, whereas design constraints       Standard Glossary of Software Engineering Terminol-
are regarded as a concept that is different from both       ogy [6] distinguishes functional requirements on the
functional and non-functional requirements.                 one hand and design requirements, implementation
   Performance is treated as a quality or attribute in      requirements, interface requirements, performance re-
many definitions. Others, e.g. IEEE 830-1998 [7] and        quirements, and physical requirements on the other.
Wikipedia [23] consider it as a separate category.          Sommerville [20] uses a sub-classification into product
   Another discrepancy exists in the scope of non-          requirements, organizational requirements and external
functional requirements. Some definitions emphasize         requirements.
that non-functional requirements have, by definition, a         More classification problems arise due to mixing
global scope: “global requirements” (Mylopoulos,            three concepts that should better be separated. These
Chung and Nixon [16]), “overall attributes” (Davis          are the concepts of kind (should a given requirement be
[3]). Accordingly, proponents of this global view           regarded as a function, a quality, a constraint, etc.),
separate functional and non-functional requirements         representation (see below), and satisfaction (hard vs.
completely. For example, in the Volere template [18]        soft requirements). For an in-depth discussion of this
they are documented in two separate top-level sections.     problem, see [5].
On the other hand, Jacobson, Booch and Rumbaugh
[10] emphasize that there are both local non-functional     3.3. Representation problems
requirements (e.g. most performance requirements) and
global requirements such as security or reliability.            As long as we regard any requirement that describes
   Most definitions refer to system requirements (also      a function or behavior as a functional requirement, the
called product requirements) only and exclude project       notion of non-functional requirements is represen-
and process requirements either explicitly [7] or im-       tation-dependent. Consider the following example: A
plicitly. However, in the definition by Kotonya and         particular security requirement could be expressed as
Sommerville [11], project requirements are considered       “The system shall prevent any unauthorized access to
to be non-functional requirements.                          the customer data”, which, according to all definitions
   Finally, the variety and divergence of concepts used     given in Table 1 is a non-functional requirement. If we
in the definitions of non-functional requirements also      represent this requirement in a more concrete form, for
lead to definitions containing elements that are obvi-      example as “The probability for successful access to
ously misconceived. For example, the SCREEN glos-           the customer data by an unauthorized person shall be
sary [19] lists failure and recovery as non-functional      smaller than 10-5”, this is still a non-functional re-
properties, while behavior in the case of failure and       quirement. However, if we refine the original require-
recovery from failures are clearly functional issues.       ment to “The database shall grant access to the cus-
Ncube [17] even defines non-functional requirements         tomer data only to those users that have been author-
as “the behavioral properties...”. Although this is more    ized by their user name and password”, we have a
likely a severe typo than a misconception, the fact that    functional requirement, albeit it is still a security re-
this error went unnoticed in a PhD thesis illustrates the   quirement. In a nutshell, the kind of a requirement
fuzziness of the current notions of non-functional re-      depends on the way we represent it.
quirements and the need for a clear and concise defini-         A second representational problem is the lack of
tion. The worst example is the definition in the Wiki-      consensus where to document non-functional require-
pedia article on non-functional requirements [22],          ments. As discussed above, some authors recommend
which is so vague that it could mean almost anything.       the documentation of functional and non-functional
                                                            requirements in separate chapters of the software re-
                                                            quirements specification. The Volere template [18] is a
3.2. Classification problems
                                                            prominent example for this documentation style. In
   When analyzing the definitions given in Table 1, we      IEEE 830-1998 [7], seven of the eight proposed SRS
also find rather divergent concepts for sub-classifying     templates also separate the functional requirements
completely from the non-functional ones. On the other       requirement’ and ‘non-functional requirement’ is too
hand, when documenting requirements in a use-case-          radical. When practicing requirements engineering,
oriented style according to the Rational Unified Proc-      there is a need to distinguish functional concerns from
ess [10], non-functional requirements are attached to       other, “non-functional” concerns and there is also a
use case as far as possible. Only the remaining (global)    need for a sub-classification of the “non-functional”
non-functional requirements are documented sepa-            concerns in a clear and comprehensible way. In the
rately as so-called supplementary requirements.             next section, such a definition is presented.
   However, there are also cases where a non-func-
tional requirement affects neither a single functional      Table 2. Representation determines verification [5]
requirement nor the system as a whole. Instead, it per-     Representation Type of verification
tains to a specific set of functional requirements. For     Operational    Review, test or formal verification
example, some subset of the set of all use cases may
                                                            Quantitative   Measurement (at least on an ordinal scale)
need secure communication, while the other use cases
                                                            Qualitative    No direct verification. May be done by
do not. Such a case cannot be documented adequately                        subjective stakeholder judgment of de-
with classic requirements specification templates and                      ployed system, by prototypes or indirectly
must be handled by setting explicit traceability links.                    by goal refinement or derived metrics
As we will see in the next chapter, aspect-orientation      Declarative    Review
provides a solution for this problem.
                                                            4.2. A definition based on concerns
4. Elements of a solution
                                                               We define a taxonomy of terms that is based on the
4.1. A faceted classification                               concept of concerns, which makes it independent of
    In [5], I have proposed that the classification prob-   the chosen representation. We assume a requirements
lems, and – in a radical sense – also the definition        engineering context, where system is the entity whose
problems be overcome by introducing a faceted classi-       requirements have to be specified.
fication for requirements (Fig. 1) where the terms             Furthermore, the taxonomy concentrates on system
‘functional requirement’ and ‘non-functional require-       requirements. As project and process requirements are
ment’ no longer appear.                                     conceptually different from system requirements, they
    Separating the concepts of kind, representation,        should be distinguished at the root level and not in a
satisfaction, and role has several advantages, for          sub-category such as non-functional requirements.
example: (i) It is the representation of a requirement      DEFINITION. A concern is a matter of interest in a sys-
(not its kind!) that determines the way in which we can     tem. A concern is a functional or behavioral concern if
verify that the system satisfies a requirement (Table 2).   its matter of interest is primarily the expected behavior
(ii) Decoupling the kind and satisfaction facets reflects   of a system or system component in terms of its reac-
the fact that functional requirements are not always        tion to given input stimuli and the functions and data
hard and non-functional requirements not always soft.       required for processing the stimuli and producing the
(iii) The role facet allows a clear distinction of (pre-    reaction. A concern is a performance concern if its
scriptive) system requirements and (normative or            matter of interest is timing, speed, volume or through-
assumptive) domain requirements.                            put. A concern is a quality concern if its matter of in-
                                                            terest is a quality of the kind enumerated in ISO/IEC
                                                            9126 [9].
                                                            DEFINITION. The set of all requirements of a system is
                                                            partitioned into functional requirements, performance
                                                            requirements, specific quality requirements, and con-
                                                            straints.
                                                               A functional requirement is a requirement that per-
                                                            tains to a functional concern.
                                                               A performance requirement is a requirement that
                                                            pertains to a performance concern.
Figure 1. A faceted classification of requirements             A specific quality requirement is a requirement that
          (from [5])                                        pertains to a quality concern other than the quality of
                                                            meeting the functional requirements.
   However, when using this classification it turned           A constraint is a requirement that constrains the
out that the idea of getting rid of the terms ‘functional   solution space beyond what is necessary for meeting
the given functional, performance, and specific quality               the system does  functional requirement; How the
requirements.                                                         system behaves  non-functional requirement’ [4] is
    An attribute is a performance requirement or a spe-               too coarse and leads to mis-classifications when attrib-
cific quality requirement.                                            utes and constraints are represented functionally or
   The taxonomy defined above is visualized in Figure                 when they are very important1.
2. In my opinion, this structure is sufficient and useful                Table 3 gives the classification rules for the taxon-
both for theoretical and practical work. For persons                  omy laid out in Figure 2.
who do not want to dispose of the term ‘non-functional
requirement’, we can define this term additionally as                 Table 3. Classification rules
follows.                                                              No1 Question                                     Result
DEFINITION. A non-functional requirement is an attrib-                     Was this requirement stated because we
                                                                           need to specify...
ute of or a constraint on a system.
                                                                        1 ... some of the system’s behavior, data, Functional
                                                                           input, or reaction to input stimuli – re-
                         Requirement
                                                                           gardless of the way how this is done?
                                                                        2 ... restrictions about timing, processing Performance
    Project              System                   Process                  or reaction speed, data volume, or
    requirement          requirement              requirement              throughput?
                                                                        3 ... a specific quality that the system or a Specific
Functional                Attribute                   Constraint           component shall have?                       quality
requirement                                                             4 ... any other restriction about what the     Constraint
                Performance     Specific quality                           system shall do, how it shall do it, or any
                                                                           prescribed solution or solution element?
                requirement     requirement                           1
                                                                        Questions must be applied in this order
Functionality   Time and        “-ilities”:           Physical
and behavior:   space bounds:   Reliability           Legal           4.3. Aspect-oriented representation
Functions       Timing          Usability             Cultural
Data            Speed           Security              Environmental       As soon as we structure the functional requirements
Stimuli         Volume          Availability          Design&Im-
                                                                      specification systematically (by using a text template
Reactions       Throughput      Portability           plementation
Behavior                        Maintainability       Interface       or by modeling requirements), the question about
                                ...                   ...             structuring the non-functional requirements comes up.
                                                                      Structuring attributes and constraints into sub-kinds
Figure 2. A concern-based taxonomy of require-                        according to a documentation template is helpful here,
          ments                                                       but clearly this is not enough; in particular when we
                                                                      have attributes and constraints that are neither com-
Performance is a category of its own in our taxonomy                  pletely local nor fully global, but pertain to some spe-
(as well as in the IEEE standards [6] [7]) because per-               cific parts of the system.
formance requirements are typically treated separately                    An aspect-oriented representation of requirements,
in practice. This is probably due to the fact that meas-              in particular of attributes and constraints, helps over-
uring performance is not difficult a priori, while meas-              come this problem. A multi-dimensional separation of
uring other attributes is: there is a broad consensus to              concerns [15] allows every concern to be modeled
measure performance in terms of time, volume, and                     separately. Thus, all concerns are treated equally,
volume per unit of time. For any other attribute, there               which looks clean and elegant from an academic view-
are no such generally agreed measures, which means                    point. However, in practice, there is almost always a
that the task of eliciting specific qualities always im-              dominant concern, which is typically a functional one.
plies finding an agreement among the stakeholders                     This concern is crosscut by other concerns, both func-
how to measure these qualities.                                       tional and non-functional ones.
   Interfaces, which are a separate category in the                       In my research group, we have developed an aspect-
IEEE standards [6] [7], no longer appear in the termi-                oriented-extension for a hierarchical modeling lan-
nology defined above. An interface requirement is
classified according to the concern it pertains to as                 1
                                                                        For example, in particle physics, the detectors of contemporary
functional, performance, specific quality, or constraint.             accelerators produce enormous amounts of data in real time. When
   Due to the systematic construction of our taxonomy,                asked a ‘what shall the system do’ question about the data processing
the task of classifying a given requirement becomes                   software for such a detector, one of the first answers a physicist typi-
easier and less ambiguous. The often heard rule ‘What                 cally would give would be that the system must be able to cope with
                                                                      the data volume. However, this is a performance requirement.
guage [13], [14] where we identify a dominant func-            [4]  X. Franch (1998). Systematic Formulation of Non-
tional concern and decompose the system model hier-                 Functional Characteristics of Software. Proc. 3rd Int'l
archically according to the structure of this concern.              Conf. Requirements Engineering (ICRE’98). 174-181.
All other concerns are modeled as aspects of this pri-         [5] M. Glinz (2005). Rethinking the Notion of Non-Func-
                                                                    tional Requirements. Proc. Third World Congress for
mary model. Aspect composition is supported by for-
                                                                    Software Quality (3WCSQ 2005), Munich, Germany,
mal model weaving semantics.                                        Vol. II. 55-64.
    Thus we can document attributes and constraints as         [6] IEEE (1990). Standard Glossary of Software Engineer-
separate entities, but, at the same time, attach them               ing Terminology. IEEE Standard 610.12-1990.
systematically to those elements in the primary model          [7] IEEE (1998). IEEE Recommended Practice for Soft-
hierarchy where they apply. Global attributes and con-              ware Requirements Specifications. IEEE Std. 830-1998.
straints are attached to the root of the decomposition         [8] ISO 9000 (2000). Quality Management Systems – Fun-
hierarchy, while an attribute or constraint that restricts          damentals and Vocabulary. International Organization
only some parts of the model is attached exactly to                 for Standardization.
                                                               [9] ISO/IEC 9126-1 (2001). Software Engineering – Prod-
these parts by modeling join relationship from the as-              uct Quality – Part 1: Quality Model. International Or-
pect to the affected parts of the primary model.                    ganization for Standardization.
                                                               [10] I. Jacobson, G. Booch, and J. Rumbaugh (1999). The
5. Discussion                                                       Unified Software Development Process. Reading,
                                                                    Mass.: Addison Wesley.
   The analysis of the definitions given in Table 1 re-        [11] G. Kotonya, I. Sommerville (1998). Requirements Engi-
veals the deficiencies of the current terminology. The              neering: Processes and Techniques. John Wiley & Sons.
new definitions proposed in this paper                         [12] A. van Lamsweerde (2001). Goal-Oriented Require-
• are more systematically constructed than any exist-               ments Engineering: A Guided Tour. Proc. 5th Interna-
  ing definitions that I am aware of,                               tional Symposium on Requirements Engineering
• are representation-independent; i.e. the kind of a                (RE’01), Toronto. 249-261.
                                                               [13] S. Meier, T. Reinhard, C. Seybold, and M. Glinz
  requirement is always the same, regardless of its rep-
                                                                    (2006). Aspect-Oriented Modeling with Integrated Ob-
  resentation,                                                      ject Models. Proc. Modellierung 2006, Innsbruck,
• make it easier to classify a given requirement: with              Austria. 129-144.
  the classification criteria given in Table 3, the clas-      [14] S. Meier, T. Reinhard, R. Stoiber, M. Glinz (2007).
  sification is much less ambiguous than with tradi-                Modeling and Evolving Crosscutting Concerns in
  tional definitions,                                               ADORA. Proc. Early Aspects at ICSE: Workshop in As-
• better support the evolution of a requirements speci-             pect-Oriented Requirements Engineering and Archi-
  fication, because the classification of a requirement             tecture Design.
  remains invariant under refinement and change as             [15] A. Moreira, A. Rashid, and J. Araújo (2005). Multi-
                                                                    Dimensional Separation of Concerns in Requirements
  long as the concern to which the requirements per-
                                                                    Engineering. Proc. 13th IEEE International Require-
  tains remains the same.                                           ments Engineering Conference (RE’05). 285-296.
   With an aspect-oriented documentation of attributes         [16] J. Mylopoulos, L. Chung, B. Nixon (1992). Represent-
and constraints, the documentation and traceability                 ing and Using Nonfunctional Requirements: A Process-
problems of non-functional requirements are allevi-                 Oriented Approach. IEEE Transactions on Software
ated.                                                               Engineering 18, 6 (June 1992). 483-497.
   As this is mainly theoretical work, the validation of       [17] C. Ncube (2000). A Requirements Engineering Method
the theoretical soundness and usefulness of these ideas             for COTS-Based Systems Development. PhD Thesis,
will be the extent to which other researchers find these            City University London.
                                                               [18] S. Robertson and J. Robertson (1999). Mastering the
ideas useful and adopt or build upon them.
                                                                    Requirements Process. ACM Press.
   The systematic exploration of the practical useful-         [19] SCREEN (1999). Glossary of EU SCREEN Project.
ness is a topic for further investigation.                          http://cordis.europa.eu/infowin/acts/rus/projects/screen/
                                                                    glossary/glossary.htm (visited 2007-07-05)
References                                                     [20] I. Sommerville (2004). Software Engineering, Seventh
                                                                    Edition. Pearson Education.
[1]   A. Antón (1997). Goal Identification and Refinement in   [21] K. Wiegers (2003). Software Requirements, 2nd edition.
      the Specification of Information Systems. PhD Thesis,         Microsoft Press.
      Georgia Institute of Technology.                         [22] Wikipedia: Non-Functional Requirements
[2]   B. Boehm et al. (1976). Quantitative Evaluation of            http://en.wikipedia.org/wiki/Non-functional_requirements
      Software Quality. Proc. 2nd IEEE International Con-           (visited 2007-07-05)
      ference on Software Engineering. 592-605.                [23] Wikipedia: Requirements Analysis http://en.wikipedia.org
[3]   A. Davis (1993). Software Requirements: Objects, Func-        /wiki/Requirements_analysis (visited 2007-07-05)
      tions and States. Prentice Hall.
