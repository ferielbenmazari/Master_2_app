                                               Information and Software Technology 47 (2005) 903–912
                                                                                                                  www.elsevier.com/locate/infsof




                                Problem frames and software engineering
                                                               Michael Jackson
                                                The Open University, Milton Keynes, MK7 6AA, England



Abstract

   A general account is given of the problem frames approach to the development of software-intensive systems, assuming that the reader is
already familiar with its basic ideas. The approach is considered in the light of the long-standing aspiration of software developers to merit a
place among practitioners of the established branches of engineering. Some of its principles are examined, and some comments offered on the
range of its applicability. A view of the approach is suggested by an important account of engineering in the aeronautical industry: in
particular, the problem classes captured by elementary problem frames are likened to those solved in established engineering branches by
normal, rather than radical, design. The relative lack of specialisation in software development is identified as an important factor holding
back the evolution of normal design practice in some areas.
q 2005 Elsevier B.V. All rights reserved.

Keywords: Problem frame; Software; Problems



1. Introduction                                                                 The participants assumed implicitly that the phrase
                                                                             software engineering was to be narrowly interpreted, to
   It is widely held that software development should aspire                 mean the engineering of the software itself—that is, of the
to deserve recognition as an engineering discipline.1 This                   structure and content of program texts—and that it was
view motivated the two NATO Software Engineering                             primarily concerned with the processes of software design,
conferences of 1968 and 1969, and is clearly stated in the                   programming and testing, and with program execution. The
report [25] of the first conference:                                         alternative broader interpretation of the phrase, to mean the
                                                                             engineering of change in the world by devising and
The phrase ‘software engineering’ was deliberately chosen                    installing software-intensive systems, was not seriously
as being provocative, in implying the need for software                      considered. Surprisingly, the conference participants
manufacture to be based on the types of theoretical                          devoted little of their discussion to exploring and discussing
foundations and practical disciplines, that are traditional in               the established practices in the engineering branches they
the established branches of engineering.                                     hoped to emulate. (An exception was the talk by W.D.
                                                                             McIlroy at the first conference, in which he advocated the
   The report reflected what was clearly the consensus of                    development and use of mass-produced software com-
the participants: software is, or should become, one more                    ponents, citing as possible examples trigonometric func-
class of engineering product, to be set alongside such                       tions and input–output routines.) Instead they focused on the
established engineering products as bridges, motor cars,                     processes, products and challenges they recognised in their
chemical plants and aeroplanes. The consensus was                            own practice of software development, without comparing
unchanged 1 year later at the second conference in 1969,                     them with those of other disciplines.
and has been widely accepted ever since.                                        A very interesting paper by Maibaum [24] discusses
                                                                             some aspects of the relationship between software engin-
                                                                             eering and the established branches, drawing heavily on
   E-mail address: m.jackson@open.ac.uk.                                     Vincenti’s illuminating book What Engineers Know and
  1
   In this paper we will use the terms software development and software     How They Know It [31]. Vincenti writes chiefly about
engineering interchangeably.                                                 aeronautical engineering in the first half of the 20th century
0950-5849/$ - see front matter q 2005 Elsevier B.V. All rights reserved.     when the field was being established by researchers and
doi:10.1016/j.infsof.2005.08.004                                             practitioners. He gives illuminating detail of five case
904                                M. Jackson / Information and Software Technology 47 (2005) 903–912

studies including the problems of aerofoil design, a series of                            a             Problem        b
                                                                            Machine                                            Requirement
wind-tunnel experiments on propellers, the invention and                                                 World
development of flush riveting, the concept of a control
volume as a theoretical tool in fluid dynamics, and the                                 Fig. 1. Generalised problem diagram.
process by which the initially vague notion of ‘flying
qualities’ became more exact and amenable to quantitative              world or by the machine and shared at input–output ports or
analysis and design. He also discusses the nature and                  registers of the machine. (It is often convenient to raise the
anatomy of engineering knowledge, and the processes by                 level of abstraction here—for example, by regarding an
which it evolves and increases over time.                              extremely reliable input–output device, such as an attached
   The present paper, too, draws on Vincenti’s book as a               printer, as an integral part of the machine: the phenomena a
source of well-founded observations about engineering                  would then include print events.) The machine and the
practice. Its purpose is to discuss some principles and                problem world are both physical, conforming to their
aspects of the problem frames approach (which we will refer            characterisation in Rogers’s definition; their interactions at
to as ‘PF’) to software development, and to relate them to             a are unmediated and therefore also physical. The
the practice that Vincenti describes. The problem frames               requirement is shown by a dashed oval, indicating its
approach is not a development method. It is, rather, a                 intangible quality. The requirement is not a tangible part of
perspective and a conceptual framework, embodying a                    the problem: it is a predicate or condition on the problem
certain way of looking at an important group of problem                world that the machine is required to bring about. The link
classes and of structuring the intellectual processes of               between the requirement and the problem world is
developing good solutions. It is intended to be usable in              represented by a dashed line. This link denotes references
several ways: constructively, to guide development;                    by the requirement to physical phenomena b of the problem
analytically, to help understanding of completed develop-              world. These are the phenomena that the customer for the
ments; and methodologically, to help understanding of                  system would observe to determine whether the requirement
existing and proposed approaches to software engineering.              is satisfied. In general, the phenomena b, which we may call
                                                                       the requirement phenomena, are distinct—and sometimes
                                                                       disjoint—from the phenomena a. We may call the latter the
2. The machine and the problem world                                   specification phenomena: they are the phenomena in terms
                                                                       of which the external behaviour of the machine—that is, of
   The PF view of software development takes as its starting           the software—must eventually be specified.
point the alternative broader interpretation of the phrase                 The generalised problem diagram of Fig. 1 emphasises
software engineering, corresponding closely to Rogers’s                the physical phenomena of the requirement, the problem
definition [30] of engineering, quoted and amplified by                world and the specification: the machine and problem
Vincenti:                                                              world, their interaction, and the requirement, are all to be
                                                                       understood in terms of physical phenomena rather than in
Engineering refers to the practice of organising the design            terms of purely mathematical abstractions. That is not to say
and construction [and, I would add, the operation] of any              that PF eschews abstraction, but rather that it insists that
artifice which transforms the physical world around us to              abstractions must be firmly grounded in observable physical
meet some recognised need.                                             reality. For example, if we consider the striking of a key by a
                                                                       computer user to be a shared phenomenon at the
   This definition succinctly captures the PF view. The                specification interface, we are abstracting from the causal
development task is to design and construct an artifice. In PF         chain that runs from depression of the keytop to assigning
we call this artifice the machine, constructed by building             the corresponding encoded value to a machine register. This
software that is then executed on a general-purpose                    causal chain may be very complex, involving interpretation
computer, specialising the computer to serve a particular              of the key codes and execution of a debouncing algorithm;
purpose. That purpose is to meet a recognised need, which              but we choose to regard the key depression and the
we call the requirement. Satisfying the requirement involves           assignment as a single shared event. Such abstractions are
transforming the physical world around us: in PF, the part of          inevitable in any treatment of physical phenomena. What
the world to be transformed, in which the requirement is               we insist on is that any abstraction can be unambiguously
located, is called the problem world. Using Polya’s term, we           explained in terms of phenomena that we can observe in the
may say that the principal parts [27] of a software                    physical world.
development problem are the machine, the problem world,                    Clearly this stipulation excludes certain problem classes.
and the requirement. Their relationships are shown in the              For example, PF makes no claim to offer guidance in the
generalised problem diagram in Fig. 1.                                 problems of factorising a large integer, finding the shortest
   The machine interacts with the problem world at an                  path in a graph, or beating the world champion at chess or
interface of shared phenomena a. Typically, these phenom-              go. Nor can such problems be brought within the scope of
ena are events and states, controlled either by the problem            PF by a gratuitous reification—for example, by stipulating
                                   M. Jackson / Information and Software Technology 47 (2005) 903–912                             905

a physical representation of the integer or graph or                   it derives a reduced problem in which the phenomena b and
chessboard in a disk file. In some problems, such as the               the problem world do not appear at all. A problem of
construction of a single-person computer game, the physical            engineering in the world has been reduced to the problem of
problem world may contain nothing other than the operator              building a machine with a specified external behaviour.
or user, and the problem world phenomena (other than the               When the problem world is more complex, and is structured
specification phenomena) are purely imaginary. The PF                  as an interacting set of problem domains, the problem can be
approach may then need at least some modification to                   partially reduced in each of a series of steps, successively
accommodate the absence of an objective reality to which               removing domains that are farthest from the machine. (Hall
problem world descriptions can be referred. This kind of               and Rapanotti have pointed out the connection between
problem is discussed in [1]. However, it is important to               problem reduction and the weakest-environment calculus
recognise that problem worlds involving the behaviour of               [21].) Eventually, of course, once this reduction process is
people interacting with the system are fully appropriate to            complete, a programming process will create a program
PF: an interesting extension [2] of the approach allows the            whose execution will satisfy S.
knowledge they acquire and use in their activities to be                   Software development has traditionally dealt chiefly in
brought within the PF scope.                                           what are, in this sense, reduced problems: the problem was
                                                                       seen solely as satisfying a given specification—often
                                                                       informal and sometimes unwritten—rather than including
3. Problem reduction                                                   the process of deriving the specification. Early computers
                                                                       were connected very loosely and asynchronously, by data on
  Because PF is concerned with engineering in the world, it            punched card or paper or magnetic tape, to their problem
demands a clear distinction among three descriptions:                  worlds: it seemed natural to start at the point where the data
                                                                       was presented to the computer. Most software, apart from
† the requirement R, describing the customer’s require-                the compiler, the operating system kernel, and the software
  ment—how the world is desired to be—in terms of the                  to manage input–output and system resources, consisted of
  requirement phenomena b;                                             batch programs performing mathematical computations or
† the specification S, describing, in terms of the                     data processing tasks. Programs for mathematical compu-
  specification phenomena a, the machine behaviour that                tations were often written by people already fully familiar
  must result from execution of the software to be                     with the task to be performed, who saw no need for a written
  developed;                                                           specification. Data processing tasks were often simply
† the world properties W, describing the given properties              specified as reproducing, sometimes with little or no change,
  of the problem world that hold independently of the                  the behaviour of an existing manual or punch-card system.
  machine’s behaviour and that govern the possible                     In general, the production, content and format of program
  relationships between the specification and requirement              specifications were not considered to be a significant part of
  phenomena.                                                           the software development task.
                                                                           This view was memorably expressed by Dijkstra [7]:
   To show that the machine will indeed satisfy the
requirement it is then necessary to show that:                         The choice of functional specifications—and of the notation
                                                                       to write them down in—may be far from obvious, but their
S; WjR
                                                                       role is clear: it is to act as a logical ‘firewall’ between two
   In other words, if a machine satisfying S is installed in a         different concerns. The one is the ‘pleasantness problem,’,
problem world satisfying W, then the requirement R will be             i.e. the question of whether an engine meeting the
satisfied. (A deeper and more detailed discussion of this              specification is the engine we would like to have; the
entailment can be found in [10,12].) The gap between what              other one is the ‘correctness problem,’, i.e. the question of
is desired at the interface b and what can be directly                 how to design an engine meeting the specification.the two
monitored and controlled by the machine at interface a is              problems are most effectively tackled by.psychology and
bridged by the given properties of the problem world.                  experimentation for the pleasantness problem and symbol
Showing, formally or informally, that this relationship holds          manipulation for the correctness problem.
among the three descriptions may be called the basic
problem concern.                                                          Dijkstra was concerned to maintain the mathematical
   PF does not mandate a sequence of development tasks.                purity of computer science, and rejected the notion of
But in concept we can imagine a development process that               software engineering in any sense. He dubbed software
begins by capturing the customer’s requirement R, and                  engineering ‘the doomed discipline’, and claimed that its
proceeds, using the given properties W, to devise a machine            goal was self-contradictory because computers were purely
behaviour specification S. We may call such a process full             symbol manipulation machines. The ‘pleasantness
problem reduction: starting from a problem involving the               problem’—that is, obtaining the functional specification—
phenomena a and b and the problem world properties,                    was for others to address. Computer scientists and software
906                                M. Jackson / Information and Software Technology 47 (2005) 903–912

developers should restrict their attention to the ‘correctness         of the development project in hand, these descriptions are
problem’, and should address it by formal mathematical                 standard reference material.
techniques.                                                               Vincenti writes of the indicative problem world proper-
   This narrow view of the software development task has               ties to be considered by the aeronautical engineer:
had an enduring effect. Although lip service is almost
universally paid to the need to analyse and describe the               Descriptive knowledge is knowledge of how things are.
problem world, the reality is that most descriptions—                  Descriptive data needed by [aeronautical] designers include
certainly most formal descriptions—constructed in software             physical constants (acceleration of gravity, for example) as
projects are descriptions of the machine rather than of the            well as properties of substances (failing strength of
world. What may have begun as an effort to describe the                materials, coefficients of viscosity of fluids, etc.) and of
world slips quickly into a focus on an object or database              physical processes (rate of chemical reactions and so forth).
structure that is intended to represent it in the machine. The         Occasionally they deal with operational conditions in the
PF emphasis on the explicit investigation, description and             physical world (frequency and strength of atmospheric gusts
use of the given problem world properties can be seen as an            for aircraft fatigue-loading calculations). As we have seen
attempt to exert a countervailing intellectual influence. PF           with flying qualities, they also encompass information on
views the process of problem reduction as an integral and              human beings (maximum forces exerted by pilots [on an
central part of the software engineering discipline.                   aircraft’s manual controls]).

                                                                           Certainly, some of this descriptive knowledge—strength
4. Reduced problems in engineering                                     of materials and rate of chemical reactions—is clearly about
                                                                       the substrate of the engineering artifice itself rather than its
   It may perhaps seem that in spite of Rogers’s definition            problem world or operating environment. Frequency and
the PF emphasis on the problem world is at odds with                   strength of gusts, however, and forces exerted by pilots, are
established engineering practice. At first sight, engineering          certainly properties of the problem world. But they do
practice seems to focus very directly on the product, or               not require to be established afresh on each occasion. In
artifice, to be designed and constructed, leaving the world            respect of these properties the engineers need only address the
around it very much in the background. Automobile                      reduced problem, reduced in the light of standard knowledge
engineers appear to think much more about cars than                    of the properties of the problem world or environment.
about roads or drivers, so justifying an analogous emphasis
in software engineering on the machine rather than the
problem world.                                                         5. Normal and radical design
   A distinction should be made here between what we may
call local and ubiquitous problems. In a local problem the                Vincenti draws on his own experience of aeronautical
problem world is unique to a particular place, and the                 engineering and on the work of the philosopher Michael
engineer must examine that problem world in all its                    Polanyi [26] and the historian Edward Constant [6] to
particularity. Consider, for example, the building of a road           explain the central importance of normal—as opposed to
or rail bridge over a navigable river. The bridge designer             radical—design for established engineers. Normal design is
must obviously carry out an explicit and detailed                      what allows them to succeed where they do and as often as
investigation and analysis of the given properties of the              they do. Of an engineer practising normal design he writes:
particular problem world: the character of the ground on
which the bridge supports will be erected; the river currents;         The engineer engaged in such design knows at the outset
the sizes and speeds of vessels navigating the river; the local        how the device in question works, what are its customary
winds; the density, nature and flow patterns of the planned            features, and that, if properly designed along such lines, it
traffic; and the seasonal variations in temperature and other          has a good likelihood of accomplishing the desired task.
atmospheric conditions.
   In a ubiquitous problem, by contrast, the engineering               Every device possesses an operational principle, and, once
product is intended to be used anywhere that the operational           the device has become an object of normal, everyday
environment exhibits certain broad characteristics that are            design, a normal configuration. Engineers doing normal
essentially independent of the specific operational locality.          design bring these concepts to their task usually without
Automobile engineering is concerned with wheeled vehicles              thinking about them.
that travel on terra firma; aeronautical engineering is
concerned with vehicles that travel in the earth’s atmos-                 In short, it is usually otiose, or even harmful, to rework
phere. The problem world properties of interest are then               from basic principles a problem whose requirements, design
location-independent properties, and do not demand a fresh             and solution have been firmly established by long and
explicit description of roadways or of the atmosphere for              successful experience. Vincenti gives the example of
each new car or aircraft design. Rather than ad hoc products           automobile design:
                                    M. Jackson / Information and Software Technology 47 (2005) 903–912                           907

Automobile designers of today usually (but not invariably)              † In a WorkPieces problem a User edits a WorkPiece such
assume without much thinking about it that their vehicle                  as a text or graphic document. The requirement is that
should have four (as against possibly three) wheels and a                 the edit commands issued by the User should effect
front-mounted, liquid-cooled engine.                                      appropriate corresponding changes in the WorkPiece.
                                                                        † In a Required Behaviour problem the Control Machine is
   Vincenti lays some stress on the hierarchical structure of             required to impose a particular behaviour on a
engineering products in the established branches. He                      Controlled Domain.
distinguishes between devices and systems. Devices are                  † In an Information Display problem the Information
‘single, relatively compact entities’, while systems are                  Machine is required to monitor the state and behaviour
‘assemblies of devices brought together for a collective                  of a Real World and to display information about it on a
purpose.’ The distinction is, of course, relative. The struts of          Display.
an aircraft’s landing gear are a device—a part of the landing
gear viewed as a system. The landing gear, viewed as a                     Problem frames do not aim to capture classes of
device, is a part of the aircraft regarded as a system. The             problems of realistic size and complexity. Most of them
aircraft itself can be viewed as a device forming a part of the         capture simple subproblems that can appear only as
airline system, or even of a national or global system of air           ingredients or aspects of realistic problems. For example,
transport.                                                              the WorkPieces frame captures problems of simple
   Although the distinction between devices and systems is              document editing. The subsequent use of the document,
relative in this sense, it is also closely associated with the          and even the user’s ability to inspect different parts of the
distinction between normal and radical design. Normal                   document while it is being edited, are ignored: the solution
design can be applied only to a device, to a ‘single,                   to a WorkPieces problem is not useful in isolation.
relatively compact entity’. Radical design is always                       Each problem frame constitutes what we might call a
necessary for a system, where there is no history of                    problem pattern. The very well-known work on object-
successful development of closely fitting precedents.                   oriented design patterns [9,3] has some obvious similarities,
Radical design may also be necessary when a new kind of                 and is clearly concerned with the identification of devices
device is required. Then the engineer’s ambitions must be               that, once identified, can become the objects of normal
dramatically lowered:                                                   design. But design patterns are firmly located within the
                                                                        machine: all parts of each pattern are represented in
.how the device should be arranged or even how it works                 programming terms. The work on analysis patterns [8] is
is largely unknown. The designer has never seen such a                  an interesting treatment of some problem fragments in an
device before and has no presumption of success. The                    object-oriented setting.
problem is to design something that will function well                     A problem pattern stipulates:
enough to warrant further development.
                                                                        † a decomposition of the problem world into a particular
   In effect, only normal design can realistically hope to                set of physical problem domains interacting with each
produce a reliable product with no major defects or failures.             other and with the machine in a particular topology;
Though less conspicuous than radical design, normal design              † a characterisation of each problem domain according to
makes up by far the bulk of day-to-day engineering                        its physical properties—causal, lexical or biddable—as
enterprise. Unfortunately, this is not true of software                   they affect the problem (the Controlled Domain is
engineering.                                                              causal, the WorkPiece is lexical, and the User is
                                                                          biddable);
                                                                        † a characterisation of each interface according to the
                                                                          types of the subsets of the phenomena—events, states,
6. Elementary problem frames                                              symbols—that are shared at the interface and to the
                                                                          assignment of control of each subset to one of the sharing
   Elementary problem frames can be regarded as defining                  domains;
problem classes in software engineering that are currently              † the nature of the requirement and of its link—none,
the object of normal design. Their machines, set firmly in                reference only, or constraining—to each problem
the context of the problem worlds that provide their purpose,             domain.
play the role that Vincenti’s well-understood devices play in
the established engineering branches. Particular elementary                Problems that fit different elementary frames specialise
problem frames, specialised from the universal problem                  the basic problem concern in different ways, giving rise to
diagram of Fig. 1, capture classes of software development              frame concerns of different forms. The specialisation arises
problems whose software solutions take the form of                      because the given properties W of each problem domain d
individual programs or, at most, very small systems of                  must be separately described, and these descriptions must
programs. For example:                                                  be combined with each other and with the specification
908                                M. Jackson / Information and Software Technology 47 (2005) 903–912

S and requirement R in a way that respects the connectivity            problem domains. Breakage and reliability do not arise for
of the frame diagram and the control of shared phenomena.              lexical domains; information deficit does not arise for
    The frame concern of a problem class can be regarded as            biddable domains. However, the importance of a particular
loosely analogous to the operational principle of a device             concern can not be finally determined by considering
class in normal design—how the characteristic parts of the             abstract characteristics either of domains or of problem
device fulfil their special function in combining to an overall        frames. It must be ultimately determined by the knowledge,
operation which achieves the device’s purpose. Vincenti                experience and judgement embodied in a particular class of
cites Sir George Cayley’s famous statement of 1809 [5] in              normal design task, applied to the particular problem world
which he characterised the principle of the fixed-wing                 of the case in hand. The engineer practising normal design
aircraft: ‘to make a surface support a given weight by the             knows in advance what concerns will merit most of his
application of power to the resistance of air.’ The surface            attention.
provides the lift because the applied power drives the                    Many of the failures documented in P.G. Neumann’s
surface against the resistance of the air.                             Risks forum [29] can be attributed to the absence of
    In addition to the frame concern each problem frame                established normal design practice for at least the failing
raises a number of specific concerns that must be addressed            part of the system. With hindsight the mistake or neglect
if the solution is to be acceptable. For example:                      that led to the failure is conspicuous, and we may often
                                                                       wonder why the developers did not see it. The reason is that
† Initialisation. The machine necessarily begins operation             they were doing radical design, not normal design, and their
  in its initial state, and at that moment the problem world           knowledge, experience and judgement were not specifically
  is also in one of some set of states. If the developer has           honed for the particular design task they were doing. In
  not considered the problem world state that in fact holds            Vincenti’s words, they ‘had no presumption of success.’
  initially in a particular case, the specified machine                Depending on the circumstances, blame for the failure may
  behaviour is unlikely to satisfy the requirement, at least           be laid at the developers’ door for ignoring existing normal
  for some initial period of operation and possibly for the            design practice; or at the customer’s door for stipulating
  whole lifetime of the system.                                        requirements that went too far beyond what can be reliably
† Breakage. A causal domain may be damaged if certain                  delivered by current practice; or, more generally, at the
  sequences of operations are performed on it. For                     software development community’s door for failing to
  example, some component of a Controlled Domain                       evolve a normal design practice when enough knowledge
  may be damaged if certain operation sequences are                    and experience existed to do so.
  performed by the machine. The developer must identify
  such sequences, and ensure that the machine always
  avoids them.                                                         7. Instantiating elementary frames
† Reliability. A causal problem domain typically satisfies
  its properties description with high—but never with                      In an established branch such as aeronautical engineering
  perfect—reliability. If the reliability is too low in                [6], the task of normal design is ‘the improvement of the
  relation to the criticality of the system it is necessary            accepted tradition or its application under new or more
  to detect, or even to anticipate, failures and to prevent,           stringent conditions’. Relatively small design changes give
  mitigate or compensate their effects.                                quantitative increments in cost, performance or economy,
† Information deficit. In an Information Display problem               while retaining the customary configuration of parts and the
  the information directly and currently available to the              accepted operating principle. Examples in software engin-
  machine at the time it must produce each display output              eering are most readily found in the improvement of what
  may be inadequate. It may have been available at an                  we may call internal software components—components all
  earlier time; or it may be information that must be                  of whose interactions are with other formally specified
  accumulated from the beginning of execution; or it may               software components, within the machine. The classic
  be deducible only by elaborate calculation or estimation             handbook for a large variety of such software devices is
  from the information available earlier. The developer                Knuth’s magnum opus The Art of Computer Programming
  must then find some effective way of overcoming this                 [17–19], where detailed discussions are given of the
  information deficit.                                                 construction and performance of algorithms for sorting,
                                                                       tree traversal, garbage collection and many other purposes.
   In general, different problem frames raise different                Some examples can be cited closer to the problem world.
specific concerns. Information deficit does not arise in               Spell checkers, for instance, appear to have become the
WorkPiece problems. Information Display problems do not                object of normal design, to judge by their greatly improved
raise reliability concerns. Breakage is not a concern in               speed and reliability.
WorkPieces problems. To a significant extent the set of                    In the design of solutions for problems fitting
concerns that must be addressed, and the detail of each                elementary problem frames the need for incremental
concern, depend on the characteristics of the frame’s                  quantitative improvement may be present, but is usually
                                           M. Jackson / Information and Software Technology 47 (2005) 903–912                                909


                               Real
                                                                                    also what arrangement of parts will best allow it to work in
                               World                                                that way.
    Info’n                                                  Display                    Consider, for example, an Information Display problem
   Machine                                                  Real World
                                                                                    in which the requirement is to maintain a Display showing
                              Display                                               information about a Real World. Fig. 2 shows the problem
                                                                                    frame diagram:
             Fig. 2. Information display problem diagram.                              The requirement is that the visible phenomena of the
                                                                                    Display should correspond in a certain way to the state of
dominated by the need to instantiate known solutions for                            the Real World. If the particular problem in hand presents a
the detailed properties of specific problem domains.                                significant information deficit problem (as most Information
Instances of the WorkPieces frame, for example, will                                Display problems do), the standard solution is to decompose
differ not only in response time and speed of saving the                            the problem into two subproblems communicating by a
document being edited, but more importantly in the                                  Model domain, as shown in Fig. 3.
different lexical structures and operations of the Work-                               The Model domain is an invented lexical domain, often a
Pieces they are required to handle. Similarly, instances of                         database on disk. One subproblem constructs and maintains
the Required Behaviour frame will differ in the structural                          the Model, satisfying the requirement that the Model should
and dynamic properties of the Controlled Domain. These                              correspond in a certain way to the Real World; the other
differences provide the core subject matter for software                            subproblem maintains the Display, using the Model and
development methods. For example, a model-based                                     satisfying the requirement that the display should corre-
method such as Z [13] or VDM [15] is very appropriate                               spond in a certain way to the Model. If we can express the
to instantiating the common data structures that charac-                            requirements Display N Model and Model N Real World as
terise a set of WorkPieces together with the repertoire of                          relations, it seems clearly desirable that their relational
editing operations which can be applied to them.                                    composition should be equal to the original requirement
Similarly, problems fitting the Transformation frame, in                            Display N Real World.
which the task is to produce sequential output streams                                 Introducing the Model domain is an unavoidable, and
from sequential input streams, can often be appropriately                           necessarily universal, practice in software development.
solved by the JSP design method [4,14]: the sequential                              Decomposing the problem into the two subproblems shown,
structures of the streams are described in regular                                  however, is not standard practice: essentially it is a
expressions which are then combined to give the required                            separation into two concurrent processes. They will
program structure.                                                                  subsequently need to be composed. In normal design of a
                                                                                    composite device, the technique and mechanism of
                                                                                    composition is standardised. Here, for example, a standard
                                                                                    technique of mutual exclusion, applied to critical regions of
8. Composite elementary problems                                                    appropriately chosen granularity, may be sufficient.

    A problem fitting an elementary frame will sometimes be
soluble by a simple machine, whose specification can be a                           9. Decomposing realistic problems
single text. But sometimes a specific concern will demand a
decomposition into two or more subproblems. For well-                                  If problems fitting elementary problem frames are
understood elementary problem frames this decomposition                             devices in Vincenti’s terms, then realistic problems are
will be highly standardised. This standardised decompo-                             usually systems—‘assemblies of devices brought together
sition is another aspect of what Vincenti calls ‘a given                            for a collective purpose’—and consequently the object of
operational principle and normal configuration’: it is                              radical design. To repeat Vincenti’s words, “The designer
understood not only how the device should work but                                  has never seen such a device before and has no presumption

                                                       Real
                                                       World
                                 Model                                       Model
                                 Builder                                    Real World

                                                       Model

                                                                                               Model

                                                                           Model                                Display
                                                                           User                                 Model

                                                                                              Display



                                                               Fig. 3. A standard decomposition.
910                                M. Jackson / Information and Software Technology 47 (2005) 903–912

of success. The problem is to design something that will               behaviour specification and problem world description.
function well enough to warrant further development.” The              Until this point, the identification and treatment of the
need for radical design springs from either or both of two             decomposed subproblems should—in principle—take no
sources. Some of the devices making up the system may be               account of the eventual need to make them work together.
currently unfamiliar, themselves demanding radical design;                 This principle stands in opposition to the most commonly
and the particular combination of devices may be novel,                used techniques, in which consideration of the composition
posing unfamiliar problems of interaction.                             concerns is integrated at the outset into the treatment of the
    The PF approach aims to contain and minimise the                   subproblems. A seeming advantage of these traditional
radical aspects of development in any particular case by               techniques is that composition can become a relatively
application of two interlocking principles. The first principle        trivial mechanical matter of matching actual to formal
is that a realistic problem should be decomposed, so far as            parameters or output stream to input stream definitions. In
possible, into subproblems that fit known elementary                   practice, however, the widespread emphasis on integration
problem frames. That is: all those parts or aspects of the             testing indicates that the common technique is hard to carry
system that can be properly regarded as familiar devices               through successfully. An important advantage of the PF
should be identified, and developed by the applicable                  technique of deferring the composition concerns is that the
techniques of normal design. What makes PF distinctive                 subproblems are then seen in their purest forms, in which
here is the granularity and compactness of the parts into              they correspond exactly to known devices, not yet
which the problem is decomposed. Elementary problem                    complicated by their eventual interactions. Further, the
frames capture closed systems, which, even if not                      composition concerns can be dealt with later as an explicit
realistically useful in isolation, are complete in themselves.         task of composing known devices into a system. If the
Each subproblem has its own machine, its own problem                   deferred composition concerns then prove to demand
world, and its own requirement, and has no external                    substantial reworking of the subproblems to be composed,
connections.                                                           this is not a disadvantage of the separation: it is rather an
    This decomposition rule has important consequences for             indication that dealing simultaneously with the subproblems
the granularity of the decomposition. Some commonly used               and their composition concerns would have been very
development techniques, by contrast, decompose problems                difficult.
into open parts, usually of smaller granularity. This is true,
for example, of decomposition into programming objects
(which offer and invoke methods); of dataflow decompo-                 10. Composition concerns
sition into sequential processes (which assume stream or
database communication with other processes); and of                      Composition concerns arise when subproblems have
requirements decomposition into use cases (each detailing              parts of their problem worlds in common. Examples of
one episode of user interaction within a larger, usually               composition concerns are:
unspecified, context). Each of these techniques has its place;
but from a PF point of view none is satisfactory as the chief          † Interference. Two subproblems interfere if one causes
form of problem decomposition.                                           change in a problem domain and the other inspects the
    The second principle, flowing from the first, is that                same domain: for example, the Model Builder machine
subproblem composition is a major development topic in                   changes the Model domain while the Model User
its own right, demanding explicit and separate consider-                 machine inspects it. The Model User subproblem has a
ation. Because the devices identified in the decomposition               domain properties description of the Model, and it is
are closed systems, and to a large extent standardised, their            necessary to ensure that the Model conforms to this
normal development pays—and should pay—no attention                      description during each inspection. A suitable granular-
to the need to combine them with other devices into a                    ity must be chosen for mutual exclusion of atomic
realistic system. But eventually, of course, the decomposed              changes and inspections.
subproblems must be recombined or composed. Compo-                     † Scheduling. A scheduling concern arises when inter-
sition brings its own concerns: the composition of the                   ference can not be dealt with by atomicity of changes
subproblem requirements must be shown to approximate                     and inspections. Suppose, for example, that in a library
closely enough to the original problem requirement; the                  system one subproblem deals with membership and
subproblem machines must be configured for some kind of                  another deals with borrowing and returning books. In the
parallel execution, cooperating to whatever extent is                    books subproblem membership is treated as static,
necessary; conflicts between subproblems must be                         although in reality it is constantly changing as people
resolved.                                                                join and leave the library. Questions then arise about
    In the PF approach, the central principle to be applied              book loans towards the end of a membership period. Can
here is that treatment of the composition concerns should be             a member whose membership has only one week to run
deferred until each subproblem has been identified and                   borrow a book for two weeks? What if a borrower
analysed to the point of obtaining a satisfactory machine                resigns from membership before returning the book?
                                   M. Jackson / Information and Software Technology 47 (2005) 903–912                            911

† Conflict. The requirements of two subproblems that                   a standard decomposition into sequential processes is
  cause change in the same domain may sometimes                        expected, and the architectural decision has been made to
  conflict. For example, in a lift control problem the                 implement composition of the resulting machines by the
  subproblem requirement of providing lift service may                 pipe-and-filter architecture. Another example draws on the
  conflict with the subproblem of ensuring safe operation              well-known MVC pattern [20].
  in the presence of mechanical and electrical faults: lift               Both of these approaches can be regarded as enlarging
  service may demand movement of the lift car to service a             the set of devices that can be the object of normal design by
  request, while safety demands that it be locked by the               defining specialised composite elementary problem frames.
  emergency brake at its current position in the shaft.                A different approach is reported in [22], where the task of
  Clearly two conflicting requirements can not both be                 composing conflicting requirements is addressed. In this
  satisfied: one must be given precedence.                             approach an additional machine—which may be viewed as
                                                                       an architectural connector—is introduced between the
   The interference concern can be regarded as an                      conflicting machines and their common problem domains,
implementation matter. The properties description of the               and arbitrates in cases of conflict. In [22] the approach is
Model domain as seen by the Model User machine has                     examined in several different cases of real and potential
already been given. To address the concern it is necessary             conflict, and offers, at least in part, the possibility of
only to ensure that this description holds at the relevant             application in the composition of many different realistic
times. But the scheduling and conflict concerns, by contrast,          problems.
raise requirements issues that were not visible when the
subproblems were considered in isolation.
                                                                       12. Specialisation and the growth of knowledge

11. Implementing composition                                               It is apparent from Vincenti’s account that an important
                                                                       part of the success of the established branches of
    In the PF approach architecture can be seen as the                 engineering can be attributed to specialisation. Vincenti
composition and implementation of the subproblem                       takes it entirely for granted that aeronautical engineers do
machines in a realistic problem. Because a full-scale                  not work on problems in other branches: they do not
realistic problem is likely to be the object of radical design,        design bridges or chemical plants or even motor cars. The
there are several approaches that can be valuable in different         specialisation goes deeper, to much lower levels. For
cases.                                                                 example, W.F. Durand and E.P. Lesley devoted their work
    Two reported approaches aim to bring more realistic                from 1916 to 1926 on the design of propellers [31]. One
problem classes within the ambit of normal design. The first           whole chapter of Vincenti’s book is devoted to the
is reported in [11], where the machine of a subproblem is              development by the aircraft companies of flush riveting, in
assumed to be specialised in a standard way that implements            which the aerodynamic properties of wings and fuselages
a particular scheduling and prioritisation scheme. The                 are improved by the use of rivets whose head do not
problem is to satisfy customer orders in a warehouse.                  protrude above the surface of the skin.
Investigation of the requirement shows the potential for                   Even a cursory inspection of the literature of an
interference between orders for the same product, leading to           established branch of engineering reveals a similar level
duplicate allocation of the same stock. It also shows the              of specialisation. Whereas much software engineering
need for a fair scheduling, ensuring that an order placed              literature (like the present paper, it might be said) tends to
earlier will be allocated scarce stock in preference to a later        focus on general concerns or on methods or approaches
competing order. The solution proposed is to use a                     proposed for universal or nearly universal application, the
specialised machine rather than the generic general-purpose            literature of established engineering tends rather to focus on
computer usually assumed in an elementary problem frame.               highly specialised applications and problems. For example,
The specialised machine has built-in behavioural properties            one issue of The Journal of Structural Engineering [16]
one-at-a-time and first-come-first-served, each capable of             contains papers on such topics as ‘Performance Evaluation
being instantiated for the problem in hand. In effect, aspects         of Controlled Steel Frames under Multilevel Seismic
of the requirement are being delegated to the implemen-                Loads’, ‘Stress Concentration Factors of Doubler Plate
tation. Some part of the requirement need not be stated in             Reinforced Tubular T Joints’, ‘Reliability Assessment of
explicit detail because it is implicit in the choice of the            Highway Truss Sign Supports’, and ‘Wind Sensitivity of
specialised machine.                                                   Recycled Plastic Soundwalls’. This kind of specialisation
    The second of these approaches is reported in [28], where          seems an essential foundation for the incremental growth of
the idea of an architectural frame or AFrame is introduced             knowledge in the established branches of engineering.
as an elaboration of the problem frame diagram to                          Specialisation is essential to the growth of knowledge
accommodate an early architectural decision. One of their              because it allows experience to be accumulated effectively
examples is a Transformation problem frame in which                    and systematically. The accumulation of experience
912                                        M. Jackson / Information and Software Technology 47 (2005) 903–912

and knowledge demands a conceptual structure within which                      [10] Carl A Gunter, Elsa L Gunter, Michael Jackson and Pamela Zave; A
it can be evaluated and stored, and from which it can be                            Reference Model for Requirements and Specifications; Proceedings of
                                                                                    ICRE 2000, Chicago Ill, USA; reprinted in IEEE Software Volume 17
reliably and easily retrieved when it is relevant. Excessively
                                                                                    Number 3, pages 37-43, May/June 2000.
narrow specialisation results, perhaps, in a smaller contri-                   [11] Jon G Hall, Michael Jackson, Robin Laney, Bashar Nuseibeh and
bution to knowledge than would otherwise have been possible,                        Lucia Rapanotti; Relating Software Requirements and Architectures
but in a contribution nonetheless. Absence of specialisation                        Using Problem Frames; Proceedings of the 2002 International
often results in no contribution at all: the knowledge gained is                    Conference on Requirements Engineering (RE’02), Essen, 2002.
too vaguely expressed, and is added to a largely unstructured                  [12] Jon G Hall and Lucia Rapanotti; A Reference Model for Requirements
                                                                                    Engineering; in Proceedings of the 11th Joint International
corpus of software engineering knowledge in general rather
                                                                                    Conference of Requirements Engineering (RE’03), 2003.
than to a specific place or places in a detailed structure. The                [13] Ian Hayes (ed); Specification Case Studies; Prentice-Hall Inter-
existence of a structured corpus of knowledge offers no                             national, 1987.
guarantee that the knowledge will be used—that is, retrieved                   [14] M A Jackson; Constructive Methods of Program Design; in
and applied when it should. The notorious failure of the                            Proceedings of the 1st Conference of the European Cooperation in
Tacoma Narrows Bridge in 1940 was due to wind-induced                               Informatics, pages 236-262; G Goos & J Hartmanis eds; Springer-
                                                                                    Verlag LNCS 44, 1976; reprinted in [4] pages 46-62.
oscillation of a kind that had been observed repeatedly in                     [15] Cliff Jones; Systematic Software Development Using VDM; Prentice-
suspension bridges and recorded from as early as 1836 [23].                         Hall International, 2nd Edition 1990.
But the absence of such a knowledge structure virtually                        [16] The Journal of Structural Engineering November 2002; Volume 128,
guarantees that it will not be used.                                                Issue 11.
                                                                               [17] Donald E Knuth; The Art of Computer Programming; Volume 1:
                                                                                    Fundamental Algorithms; Addison-Wesley, 1968.
                                                                               [18] Donald E Knuth; The Art of Computer Programming; Volume 2:
Acknowledgements                                                                    Seminumerical Algorithms; Addison-Wesley, 1969.
                                                                               [19] Donald E Knuth; The Art of Computer Programming; Volume 3:
   Tom Maibaum brought Vincenti’s book to my attention (he                          Sorting and Searching; Addison-Wesley, 1972.
acknowledges his debt to William Newman, who brought it to                     [20] G E Krasner and S T Pope; A cookbook for using the Model-View-
his). Work with colleagues at the Open University, at the                           Controller user interface paradigm in Smalltalk-80; Journal of Object-
                                                                                    Oriented Programming Volume 1 Number 3, pages 26-49,
University of Newcastle, at the University of Leicester and at
                                                                                    August/September 1988.
MIT has provided much enjoyment, illuminated many aspects                      [21] Luming Lai and J W Sanders; A Weakest-Environment Calculus for
of PF, and revealed many needs and opportunities for its                            Communicating Processes; Technical Report PRG-TR-12-95, Oxford
further development and application.                                                University Computing Laboratory, 1995.
                                                                               [22] Robin Laney, Leonor Barroca, Michael Jackson and Bashar Nuseibeh;
                                                                                    Composing Requirements Using Problem Frames; in Proceedings of
                                                                                    the 2004 International Conference on Requirements Engineering
References
                                                                                    RE’04, IEEE CS Press, 2004.
                                                                               [23] Matthys Levy and Mario Salvadori; Why Buildings Fall Down: How
 [1] Ian K Bray, Karl Cox, The simulator; another, elementary problem               Structures Fail; W W Norton, 1994.
     frame? in Proceedings of the 9th International Workshop on
                                                                               [24] Tom S E Maibaum; What we teach software engineers in the
     Requirements Engineering: Foundation For Software Quality
                                                                                    university: do we take engineering seriously? Proceedings of the 6th
     (REFSQ03), 2003.
                                                                                    European conference held jointly with the 5th ACM SIGSOFT
 [2] John Brier, Lucia Rapanotti, Jon G Hall, Problem frames for socio-
                                                                                    international symposium on Foundations of software engineering,
     technical systems: predictability and change, in Proceedings of the 1st
                                                                                    Zurich, Switzerland, September 22-25, 1997.
     International Workshop on Advances and Applications of Problem
                                                                               [25] Peter Naur and Brian Randell eds; Software Engineering: Report on a
     Frames, 2004.
                                                                                    conference sponsored by the NATO SCIENCE COMMITTEE,
 [3] Frank Buschmann, Regine Meunier, Hans Rohnert, Peter Sommerlad
                                                                                    Garmisch, Germany, 7th to 11th October 1968; NATO, January 1969.
     and Michael Stahl; Pattern-Oriented Software Architecture: A System
     of Patterns; John Wiley 1996.                                             [26] Michael Polanyi; Personal Knowledge: Towards a Post-Critical
 [4] J R Cameron; JSP & JSD: The Jackson Approach to Software                       Philosophy; Routledge and Kegan Paul, London, 1958.
     Development; IEEE Computer Society Press, 2nd Edition 1989.               [27] G Polya; How To Solve It; Princeton University Press, 2nd Edition
 [5] Sir George Cayley, Bart; On Aerial Navigation; Nicholson’s Journal,            1957.
     issues of November 1809, February 1810, March 1810.                       [28] Lucia Rapanotti, Jon G. Hall, Michael Jackson and Bashar Nuseibeh;
 [6] E W Constant; The Origins of the Turbojet Revolution; John Hopkins             Architecture-driven Problem Decomposition; in Proceedings of the
     University Press, Baltimore 1980.                                              2004 International Conference on Requirements Engineering RE’04,
 [7] E W Dijkstra; On the Cruelty of Really Teaching Computer Science;              Kyoto, IEEE CS Press, 2004.
     Communications of the ACM Volume 32 Number 12, December                   [29] http://www.catless.ncl.ac.uk/Risks.
     1989.                                                                     [30] G F C Rogers; The Nature of Engineering: A Philosophy of
 [8] Martin Fowler; Analysis Patterns: Reusable Object Models; Addison-             Technology; Palgrave Macmillan, 1983.
     Wesley 1996.                                                              [31] Walter G Vincenti; What Engineers Know and How They
 [9] Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides;                  Know It: Analytical Studies from Aeronautical History; The
     Design Patterns: Elements of Object-Oriented Software; Addison-                Johns Hopkins University Press, Baltimore, paperback edition,
     Wesley, 1994.                                                                  1993.
