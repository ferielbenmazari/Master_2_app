<!-- Source: ressources/S3__ISI1/EPI/20_Eliciting requirements.pdf | pdftotext -layout | 16 pages -->

<!-- Page 1 -->

3        Eliciting Requirements

A core activity of requirements engineering is the elicitation of requirements for
the system to be developed. The basis for requirements elicitation is the
knowledge that has been gained during requirements engineering about the system
context of the system to be developed, which comprises the requirements sources
that are to be analyzed and queried.

3.1     Requirements Sources

Three types of requirements sources

There are three different kinds of requirements sources:

      Stakeholders (see section 1.1.2) are people or organizations that (directly or
      indirectly) influence the requirements of a system. Examples of stakeholders
      are users of the system, operators of the system, developers, architects,
      customers, and testers.
      Documents often contain important information that can provide
      requirements. Examples of documents are universal documents, such as
      standards and legal documents, as well as domain- or organization-specific
      documents, such as requirements documents and error reports of legacy
      systems.
      Systems in operation can be legacy or predecessor systems as well as
      competing systems. By giving the stakeholders a chance to try the system out,
      they can gain an impression of the current system and can request extensions
      or changes based on their impressions.

<!-- Page 2 -->

3.1.1 Stakeholders and Their Significance

Significance of stakeholders

Identifying the relevant stakeholders is a central task of requirements engineering
[Glinz and Wieringa 2007]. For the requirements engineer, stakeholders are
important sources of requirements for the system (see section 1.1.2). It is the task
of the requirements engineer to gather, document, and consolidate the partially
conflicting goals and requirements of different stakeholders [Potts et al. 1994]
(see chapter 8).

Consequences of unconsidered stakeholders

    If stakeholders are not identified or not considered, it may result in significant
negative repercussions for the project progress because requirements may remain
undetected. At the latest, these overlooked requirements will enter the picture in
the form of change requests during system operation. Fixing these issues
retroactively causes high additional costs. Therefore, it is essential to identify all
stakeholders and integrate them into the elicitation procedures.

Stakeholder lists provide overview.

    An auxiliary technique for stakeholder identification is maintaining checklists.
This allows for systematic and targeted elicitation of relevant stakeholders. If the
stakeholder list is updated too late or incompletely, the result may be that
important aspects of the system remain undetected, that the project goal is missed,
or that significant additional costs arise from fixing issues. The starting point for
stakeholder elicitation is often suggestions of relevant stakeholders that are made
by management or by domain experts, for example. On the basis of these
suggestions, relevant stakeholders can be identified.

3.1.2 Handling Stakeholders in the Project

Managing stakeholders

It can often be observed in practice that a lot of stakeholders are involved in
complex and “difficult” projects. Due to limited resources, the stakeholders that

<!-- Page 3 -->

are the most suitable for requirements elicitation must be carefully selected. To
document the stakeholders in the development process, it makes sense to use
tables and spreadsheets that contain (at least) the following data: name, function
(role), additional personal and contact data, temporal and spatial availability
during the project progress, relevance of the stakeholder, area and extent of
expertise of the stakeholder, and the stakeholder’s goals and interests regarding
the project.

Making collaborators out of the affected

     Handling stakeholders also means continuously exchanging information:
Periodic status updates and continuous involvement of the stakeholders assist the
requirements engineer in turning people previously simply affected by the project
(i.e., principally affected stakeholders) into collaborators (i.e., well-integrated,
jointly responsible stakeholders).

Individual “contracts” with the stakeholders

     Stakeholders that are not given enough attention by the requirements engineer
might be overly critical toward the project. In addition, some stakeholders may
show a lack of motivation because they are sufficiently satisfied with the legacy
system, are afraid of change, or are negatively biased due to previous projects.
It’s the requirements engineer’s task to support the project manager in convincing
all stakeholders of the benefit of the project. To avoid misunderstandings and
disputes regarding competence, it is useful to formally agree on the tasks,
responsibilities, and managerial authority as well as to determine individual
goals, communication paths, and feedback loops that can be used by the
stakeholders. Depending on the culture of the organization, this agreement and
determination can be done verbally (i.e., by “shaking hands”) or, more formally,
by means of written documentation. The individual agreements should be signed
off by the managers.

Obligations and privileges of the stakeholders

    A number of obligations and privileges result from the agreement with the
stakeholders.
The requirements engineer

<!-- Page 4 -->

      speaks the language of the stakeholders,
      becomes thoroughly familiar with the application domain,
      creates a requirements document,
      is able to get work results across (e.g., by means of diagrams and graphs),
      maintains a respectful relationship with any stakeholder,
      presents her ideas and alternatives as well as their realizations,
      allows stakeholders to demand properties that make the system user-friendly
      and simple,
      ensures that the system satisfies the functional and qualitative demands of the
      stakeholders.

The stakeholders

      introduce the requirements engineer to the application domain,
      supply the requirements engineer with requirements,
      document requirements assiduously,
      make timely decisions,
      respect the requirements engineer’s estimates of costs and feasibility,
      prioritize requirements,
      inspect the requirements that the requirements engineer documents, such as
      prototypes, etc.,
      communicate changes in requirements immediately,
      adhere to the predetermined change process,
      respect the requirements engineering process that has been instated.

Elicitation techniques determine communication and process.

In addition, the requirements engineer plans and organizes the communication
paths as well as drafts a structured schedule for the requirements engineering
activities that are to be performed in collaboration with the stakeholders. This
organization and the type of communication are significantly influenced by the
elicitation techniques that can be used during requirements engineering.

3.2     Requirements Categorization According to the Kano
        Model

<!-- Page 5 -->

Influence of the requirements on satisfaction

Knowing the importance of a requirement for the satisfaction of the stakeholders
is very helpful for requirements elicitation. Along with the respective properties
of a product that determine the satisfaction, the satisfaction is classified into the
following three categories [Kano et al. 1984]:

     Dissatisfiers are properties of the system that are self-evident and taken for
     granted (subconscious knowledge).
     Satisfiers are explicitly demanded system properties (conscious knowledge).
     Delighters are system properties that the stakeholder does not know or
     expect and discovers only while using the system—a pleasant and useful
     surprise (unconscious knowledge).

As time goes by, delighters turn into satisfiers and dissatisfiers as the user
becomes accustomed to the properties of the system. When eliciting requirements,
all three categories must be considered.

<!-- Page 6 -->

Figure 3-1 Graphical representation of the Kano model

Dissatisfiers

Dissatisfiers (subconscious requirements) must be fulfilled by the system in any
case. Otherwise, stakeholders will be disappointed and dissatisfied. Completely
fulfilled dissatisfiers do not generate a positive disposition but merely help to
avoid massive discontent. Dissatisfiers are dominantly influenced by existing
systems. Therefore, observation and document-centric techniques are especially
well suited for the elicitation of these factors.

Satisfiers

    Satisfiers (conscious requirements) are properties that are consciously known
to the stakeholders and explicitly demanded. When these properties are fulfilled,
stakeholders are content and satisfied, which is desirable. If some demanded
properties are missing, the stakeholders probably will not accept the product.
Their satisfaction decreases with each missing satisfier. Satisfiers can be elicited
well using survey techniques.

Delighters

    Delighters (unconscious requirements) are properties of a system whose
value is recognized only when the stakeholder can try out the system for herself or
the requirements engineer proposes them. Creativity techniques are best suited to
elicit delighters.

3.3     Elicitation Techniques

Requirements elicitation: no universal method

The main goal of all elicitation techniques is in supporting the requirements
engineer in ascertaining the knowledge and requirements of the stakeholders. How
and when a technique can be applied depends on the given conditions. Applying
the technique consciously and in a fashion appropriate to the situation at hand
allows for tailoring the requirements elicitation process which takes into account
project constraints so that requirements may be elicited as completely and

<!-- Page 7 -->

comprehensibly as possible.

3.3.1    Types of Elicitation Techniques

Influencing factors regarding the choice of elicitation techniques

Elicitation techniques serve the purpose of identifying the conscious, unconscious,
and subconscious stakeholder requirements. However, there is no universal
method to elicit these requirements [Hickey and Davis 2003]. Every project has
individual constraints and individual characteristics and is by and large unique,
but there are always elicitation techniques that are compatible with the project.
The most important influencing factors when choosing the appropriate elicitation
techniques are as follows:

     the distinction between conscious, unconscious, and subconscious
     requirements that are to be elicited
     the time and budget constraints, as well as the availability of the stakeholders
     the experience of the requirements engineer with a particular elicitation
     technique
     the chances and risks of the project

Risk factors

The first important step when choosing a suitable elicitation technique is to
perform an analysis of constraints critical to the project, i.e., identifying so-called
risk factors. Mostly, these result from human, organizational, and professional
influences, as illustrated in the following passages.

Human influences

    During the requirements elicitation phase, which is heavily influenced by the
stakeholders, good communication is essential. In order to assure high-quality
communication between the requirements engineer and stakeholders, it is
important to determine the type of requirement, the desired level of detail, and the
experience of the requirements engineer and the interviewees with different
elicitation techniques.
    Social, group-dynamic, and cognitive capabilities of the stakeholders also

<!-- Page 8 -->

influence the choice of suitable elicitation techniques significantly. Another
influence factor is whether the elicited knowledge is explicit (consciously known)
by each individual stakeholder or if it is implicit or unconscious (i.e., covert).

Organizational influences

    Organizational risk factors the project faces need to be investigated as well.
Among other things, this comprises the distinction between fixed price contracts
and service contracts, whether the system to be built is a new development or an
extension of a legacy system, and spatial and temporal availability of the
stakeholders.

Operational influences of the content

   In addition, it is necessary to consider the operational content of the
requirements. If the system is very complex, it is advisable to employ a structuring
approach during elicitation in order to deconstruct the operational contents into
understandable parts.

Combine techniques with regard to your particular situation to
lower risks.

    Another influencing factor on the choice of elicitation techniques is the desired
level of detail of the requirements. Abstract requirements can be elicited rather
well using creativity techniques. With the stakeholders, a vision of the system or
its important properties can be created or collected. Inquisitive (survey)
techniques or observational techniques can aid in eliciting requirements of a
medium level of detail [Robertson 2002]. Finely detailed requirements can be
elicited well by making use of document-centric techniques, i.e., techniques that
use existing documents because information up to an arbitrary level of detail can
be extracted from these.
    It is advisable to combine different techniques because this minimizes many of
the risks inherent to the project. Weaknesses and pitfalls of a particular technique
can be balanced out through the use of another technique whose strong points lie
where the first technique may have deficits.

3.3.2    Survey Techniques

<!-- Page 9 -->

Eliciting explicit knowledge

Survey techniques aim at eliciting as precise and unbiased statements as possible
from stakeholders regarding their requirements. All survey techniques assume that
the respondent is capable of explicitly expressing his or her knowledge and that he
or she is committed to investing time and effort for the elicitation. Survey
techniques are usually driven by the requirements engineer because she asks the
questions. This, however, might result in the fact that stakeholder concerns are
forgotten, superseded, or disregarded.

Interview

     During an interview, the requirements engineer asks predetermined questions
     to one or more stakeholders and documents the answers. Questions that arise
     during the conversation can be discussed immediately, and the requirements
     engineer may uncover subconscious requirements through clever questions.
     Interviews can be employed during the entire development phase of the
     system. An experienced interviewer individually controls the course of the
     conversation, completely commits herself to each stakeholder, inquires about
     specific aspects, and thus ensures the completeness of the answers. The most
     prominent disadvantage of this elicitation technique is that it is very time-
     consuming.

Questionnaire

     Questionnaire: Making use of open and/or closed questions (e.g., multiple
     choice questions) is another way of eliciting requirements from stakeholders.
     If there are a large number of participants that must be surveyed, an online
     questionnaire is a viable option. Questionnaires can elicit a magnitude of
     information in a short amount of time and at low costs. As long as answers
     are predetermined, even stakeholders that are not able to explicitly express
     their knowledge can deliver an assessment. A disadvantage of using a
     questionnaire is that it can be only employed to gather requirements the
     requirements engineer already knows or conjectures. Creating a proper
     questionnaire is often tricky and time-consuming and requires thorough
     knowledge of the domain in question and the psychological guidelines for
     creating questionnaires. In addition, as opposed to interviews, questionnaires
     do not provide immediate feedback between the surveyor and the surveyed,

<!-- Page 10 -->

    so it becomes apparent that questions were forgotten or badly formulated
    only once the questionnaires have been evaluated.

3.3.3   Creativity Techniques

Establishing innovations

Creativity techniques serve the purpose of developing innovative requirements,
delineating an initial vision of the system, and eliciting excitement factors.
Creativity techniques are usually not well suited for establishing fine-grained
requirements about the system behavior. The following creativity techniques are
commonly used [Maiden and Gizikis 2001]:

Brainstorming

    During brainstorming, ideas are collected within a certain time frame,
    usually in groups of 5 to 10 people. The ideas are documented by a
    moderator without discussing, judging, or commenting on them at first.
    Participants use ideas of other participants to develop new original ideas or
    to modify existing ideas. After that, the collected ideas are subjected to a
    thorough analysis. This technique is especially effective when a large number
    of people of different stakeholder groups are involved. Among the
    advantages of this technique is that a large number of ideas can be collected
    in a short amount of time and multiple people can expand on these ideas
    collaboratively. The unbiased collection of these ideas allows new solutions
    to pop up. Brainstorming is usually less effective when the dynamics of the
    group are muddled or when participants with very varied levels of
    dominance are involved. For such situations, other creativity techniques may
    be better suited, e.g., the 6-3-5 method (six participants, three ideas each,
    fivefold hand-off of the ideas) [Rohrbach 1969] or the brainwriting method.

Brainstorming paradox

    Brainstorming paradox is a modification of regular brainstorming in that
    events that must not occur are collected. Afterward, the group develops
    measures to prevent the events collected earlier from happening. Through
    this process, participants often realize which actions may entail negative

<!-- Page 11 -->

    results. With this method, risks can be identified early on and
    countermeasures can be developed. Advantages and disadvantages of this
    technique are identical to those of classic brainstorming.

Change of perspective

    Change of perspective: Among the techniques that employ a change of
    perspective (adopting different extreme standpoints), the most common
    technique is the so-called Six Thinking Hats [DeBono 2006]. Each of the six
    hats represents a particular perspective that is in turn adopted by each of the
    participants. The resulting solutions approach the problem from different
    standpoints. That way, even stakeholders that are very convinced of their
    own opinion are persuaded to adopt a different standpoint. This technique is
    extraordinarily beneficial when stakeholders can only express their
    knowledge in a biased manner or are harshly constricted to their opinions.
    On the other hand, this technique cannot be applied if the requirements
    require a fine-grained level of detail because this would render the technique
    very laborious.

Analogy technique

    Analogy techniques (bionics/bisociations): In bionics, problems that the
    project faces are mapped to an analogous situation occurring in nature, and
    the solutions nature provides are sought and then mapped back to the project.
    In bisociation, the analogies need not originate in nature. These techniques
    assume that each participant is capable of analogous thinking, that a lot of
    time is available, and that the participants have an in-depth knowledge of the
    domain with which an analogy will be drawn. Analogy techniques can be
    applied covertly or in the open. When this technique is applied covertly, the
    participants are only told the analogy. The requirements engineer is then
    responsible for mapping the results onto the real problem space. When this
    technique is applied in the open, the stakeholders know the real problem
    space as well as the analogy.

3.3.4   Document-centric Techniques

Document-centric techniques reuse solutions and experiences made with existing

<!-- Page 12 -->

systems. When a legacy system is replaced, this technique ensures that the entire
functionality of the legacy system can be identified. Document-centric techniques
should be combined with other elicitation techniques so that the validity of the
elicited requirements can be determined and new requirements for the new system
can be identified.

System archaeology

    System archaeology is a technique that extracts information required to build
    a new system from the documentation or implementation (code) of a legacy
    system or a competitor’s system. The technique is often applied when
    explicit knowledge about the system logic has been lost partially or entirely.
    By analyzing existing code, the requirements engineer ensures that none of the
    functionalities of the legacy system will be overlooked and the system logic
    of the legacy system is elicited anew. This method leads to a large amount of
    very detailed requirements and is very laborious. However, system
    archaeology is the only technique that can ensure that all functionalities of the
    legacy system will be implemented in the new system. When it becomes
    obviously apparent that the legacy system and the new system differ in
    functionality, additional elicitation techniques, e.g., creativity techniques,
    must be applied early on.

Perspective-based reading

    Perspective-based reading (see section 7.5.4) is applied when documents
    need to be read with a particular perspective in mind, e.g., the perspective of
    the implementer or the tester. Aspects that are contained in the document but
    do not pertain to the current perspective are ignored. This allows for an
    analysis that is strictly focused on particular parts of the existing
    documentation. This way, detailed, technology-related or implementation-
    related aspects can be separated from essential operational aspects that are
    relevant for the successor system.

Reuse

    Reuse: Requirements that have been previously compiled and brought up to a
    certain quality standard can be reused. In order to do that, the requirements
    are stored in a database, for instance, and kept available at the required level

<!-- Page 13 -->

     of detail for reuse. Through reuse, the costs involved with the elicitation
     procedures can be significantly reduced.

3.3.5    Observation Techniques

Question observations and optimize processes.

When domain specialists are unable to spend the time needed to share their
expertise with the requirements engineer, or are unable to express and denote their
knowledge, observation techniques are helpful. During observation, the
requirements engineer observes the stakeholders while they go about their work.
The requirements engineer documents all steps and thus elicits the processes the
system must support as well as potential mistakes, risks, and open questions. All
those are potential requirements that need to be formulated. The stakeholders can
actively demonstrate their knowledge in using the application or can remain
passive, with the requirements engineer merely observing. The requirements
engineer ought to question the observed processes so that the situation as it should
be can be established. Otherwise, she is at risk of documenting outdated
technological decisions and suboptimal processes (i.e., the situation as is and not
as it should be). As the requirements engineer is an external observer, her chances
of identifying inefficient processes are good and she can then suggest better
solutions. She is farther removed from the processes than the stakeholders, who
frequently repeat work steps without questioning them critically. Observation
techniques are well suited to elicit detailed requirements and dissatisfiers because
the requirements engineer can recognize dissatisfiers thought of as self-evident or
only subconsciously known by the stakeholders. In addition, the requirements
engineer becomes very familiar with the domain language, which simplifies
further elicitation. Satisfiers can only be observed if they have been implemented
in the legacy system or are actively employed in the current processes. As a result,
this technique is not suited for the development of new processes. During system
development, field observations and apprenticing are especially well suited as
elicitation techniques.

Field observation

     Field observation: The requirements engineer is on location with the
     specialist or the users of the system and observes and documents the

<!-- Page 14 -->

    processes and operational procedures that they carry out. Using these
    observations, she formulates the requirements. Often, this can be further
    aided by audio and video recordings. This technique is well suited for
    operational procedures that are difficult to express verbally, but it can only
    be applied if the procedures are visible physically.

Apprenticing

    With apprenticing, the requirements engineer must actively learn and
    perform the procedures of the stakeholders. Just like an apprentice, the
    requirements engineer is encouraged to question unclear and complex
    operational procedures so that she may gather domain experience. Thereby,
    she can experience requirements that the stakeholders take for granted and
    therefore cannot elucidate. Another advantage is that the typical balance of
    power between the requirements engineer and the respective specialist is
    reversed because the stakeholder now adopts the role of the “master” that has
    the knowledge the apprentice is yet lacking.

3.3.6   Support Techniques

Support techniques serve as an addition to the elicitation techniques and try to
balance out the weaknesses and pitfalls of the chosen elicitation technique.

Mind mapping

    In mind mapping, a graphical representation of the refined relationships and
    interdependencies between terms is created. Mind mapping is often used as a
    supporting technique for brainstorming or brainstorming paradox.

Workshops

    During a joint meeting, the requirements engineer and the stakeholders
    elaborate the goals (or details of a certain functionality) of the system. For
    example, the necessary user interfaces of the system can be designed in a
    workshop [Gottesdiener 2002].

CRC cards

<!-- Page 15 -->

      With the CRC technique (CRC stands for Class Responsibility
      Collaboration), context aspects and their respective attributes and properties
      are denoted on index cards. Requirements are then formulated using these
      cards.

Audio and video recordings

      Audio and video recordings are very well suited to elicit requirements when
      stakeholders are not always available, when budget is tight, or when the
      system is highly critical. Especially during field observations, audio and
      video recordings can help capture fast-paced processes. The disadvantage of
      this technique is that stakeholders often feel supervised when they are being
      recorded and as a result might deliver biased statements or, in extreme cases,
      might even refuse to cooperate.

Modeling action sequences

      Use case modeling: Use cases document the external view of the system to
      be developed. A use case has a trigger event, which triggers the use case and
      an expected result, or outcome of the use case. Every use case is a
      functionality that must be supported by the system to be developed (see
      section 6.3).

Prototypes for illustration

      Prototypes are well suited to question established requirements and to elicit
      requirements in situations where stakeholders have only a vague
      understanding of what is to be developed. Potential consequences of new or
      changed requirements can be identified easier. For example, user interface
      prototypes are frequently used in practice to find additional functional
      requirements.

3.4     Summary

Requirements elicitation is a core activity in requirements engineering. Aside
from documents and legacy systems, stakeholders are the main sources for
requirements. It is important to initially agree upon mutual rights and

<!-- Page 16 -->

responsibilities of the stakeholders and the requirements engineer in order to
facilitate communication and cooperation and to successfully integrate the
stakeholders into the elicitation process. The choice of the right elicitation
technique for the respective project is made by the requirements engineer based
on the given cultural, organizational, and domain-specific constraints.
