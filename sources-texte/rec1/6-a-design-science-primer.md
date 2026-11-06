<!-- Page 1 -->
A Design Science Primer
Paul Johannesson
Erik Perjons

Published under the
Creative Commons Attribution-NonCommerciai-ShareAiike 3.0
Unported License

<!-- Page 2 -->
A Design Science Primer, 1st edition
by Paul Johannessen and Erik Perjons
First published 2012
ISBN-13: 978-1477593943
ISBN-10: 1477593942

Printed by CreateSpace

Creative Commons Attribution-NonCommerciai-ShareAiike 3.0
Unported License:
Users are free to use, copy, share, distribute, display, and reference this book
under the following conditions:
ATTRIBUTION: Whole or partial use of this book should be attributed (refer-
enced or cited) according to standard academic practices.
NON-COMMERCIAL: This book may not be used for commercial purposes.
SHARE ALIKE: Users may alter, transform, or build upon this book, but must
distribute the resulting work under the same or similar license as this one.
For any reuse or distribution, the license terms of this work must be clearly
specified.

Your fair use and other rights are in no way affected by the above.

Copyright © 2012 by Paul Johannessen and Erik Perjons

<!-- Page 3 -->
Preface

This book is an introduction to design science. It is intended to sup-
port both researchers and students in structuring, undertaking and
presenting design science work. The level of text is basic and does
not presume any prior knowledge of design science.
     Chapter 1 provides an overview of design science and outlines its
relationships with empirical research. Chapter 2 discusses the vari-
ous types and forms of knowledge that can be used and produced by
design science. Chapter 3 gives a brief overview of common empiri-
cal research strategies and methods. Chapter 4 introduces a method
that aims at supporting researchers in doing design science as well
as presenting design science results. The method consists of five
activities, which are described in detail in Chapters 5 to 9. Chapter
10 discusses how to communicate design science results. Chapter 11
compares the proposed design science method with methods for
systems development and shows how they can be combined. Finally,
Chapter 12 discusses how design science relates to research para-
digms, in particular positivism and interpretivism. There is also an
appendix that suggests a design science structure for bachelor and
master theses. The main text is interspersed with a number of boxes
that reflect on various themes in design science; initially the reader
may wish to skip these and refer to them later on subsequent read-
ing.

<!-- Page 4 -->
    The book offers novel instruments for visualizing design science
results, both in the form of process diagrams and through a canvas
format.
    The authors would like to thank Birger Andersson, Ilia Bider,
Shengnan Han, Martin Henkel and Benkt Wangler for discussions
and constructive feedback on earlier versions of this text
    The pdf version of the text is designed for eye-friendly viewing
on tablets as well as eco-friendly printing on paper, for which it is
suggested to print two pages per sheet. Files for download and other
documentation can be found at:
http: //designscienceprimer.wordpress.com/

Paul Johannesson, pajo@dsv.su.se

Erik Perjons, perjons@dsv.su.se

                                   ii

<!-- Page 5 -->
Table of Contents

 !Introduction ....................................................................................... 1

 2 Knowledge Types and Forms ........................................................... 12

 3 Research Strategies and Methods ................................................... 25

 4 A Design Science Method ................................................................. 33

 5 Explicate Problem .................................... ,....................................... 51

 6 Outline Artefact and Define Requirements .................................... 63

 7 Design and Develop Artefact ........................................................... 77

 8 Demonstrate Artefact ...................................................................... 85

 9 Evaluate Artefact .............................................................................. 89

 10 Communicate Artefact Knowledge .............................................. 100

 11 The Design Science Method and Systems Development ............ 105

 12 Research Paradigms ..................................................................... 115

 References ........................................................................................ 126

 Appendix ........................................................................................... 131

                                                  iii

<!-- Page 6 -->

<!-- Page 7 -->
1 Introduction

Empirical research aims at describing, explaining and predicting the
world. For example, the Linnaean taxonomy describes and classifies
the kingdoms of animals and plants into classes, orders, families,
genera, and species. Newton's laws are able to explain the motion of
planets, the trajectories of missiles and the reasons for tides. Mete-
orology predicts rainfall, storms and other weather phenomena. The
goal of empirical research, at least in the natural sciences, is to faith-
fully describe and explain the world as it exists regardless of human
interests and biases. The world is out there, and can be explained by
science so that people have a common understanding of it, irrespec-
tive of their backgrounds, traditions and values.
     In contrast to empirical research, design research is not content
only to describe, explain and predict. It also wants to change the
world, to improve it and to create new worlds. Design research does
this by developing artefacts that can help people fulfil their needs,
overcome their problems, and grasp new opportunities. In this en-
deavour, design research not only creates novel artefacts but also
knowledge about them, their use, and their environment.
    This book is about a special strand of design research, called de-
sign science, which has its origins in the areas of information sys-
tems and IT. Design science in these areas aims to create innovation
in the form of ideas, models, methods and systems that support peo-
ple in developing, using and maintaining IT solutions. This book fo-
cuses on design science as applied to information systems and IT,

<!-- Page 8 -->
but it also includes examples from and outlooks over other fields of
human practice. As design science aims to create artefacts that ad-
dress problems experienced by people, the rest of this chapter will
introduce and relate the notions of people, practices, problems and
artefacts.

1.1 People, Practices and Problems
A practice is a set of human activities performed regularly and seen
as meaningfully related to each other by the people participating in
them. An example is the practice of dentists, who engage in cleaning
teeth, drilling teeth, pulling out teeth, taking X-rays, and many other
activities. When people engage in practices, they will typically need
to handle natural as well as man-made objects. For example, dentists
and dental nurses will repair teeth and make use of pliers, drills, X-
ray machines, etc. Another example of a practice is cooking, where
people cut fruit, fry meat, boil vegetables, marinate fish, and so on,
while using stoves, refrigerators, pans, graters, and other kitchen
utensils.
    Practices can be more or less structured or formalized. Some
practices take place within organisations, e.g. the production of cars
in factories or the management of customer complaints in call cen-
ters. Other practices occur in informal settings, for example, kids
playing balls in a backyard or people having dinner together. There
are also practices in which people can engage as individuals, e.g.
brushing their teeth or tying their shoelaces.
    When people engage in practices, they may experience problems,
practical problems. A practical problem is an undesirable state of
affairs, or more precisely, a gap between the current state and a de-
sirable state, as perceived by the participants in a practice. The de-
sirable state is seen as better than the current one, because it will
allow people to be more successful when engaging in the practice. An
example of a practical problem in the practice of dentistry is that, for
some people, their dental fillings may fall out after some time. There
is a current state in which some dental fillings tend to fall out, and

<!-- Page 9 -->
there is a more desirable state in which dental fillings always stay
put. The practical problem perceived by dentists is the gap between
these two states.
     A problem is not always an obstacle to overcome, but can also be
a puzzling question or an unexpected circumstance that could pro-
vide an opportunity for improvement. Thus, there are two kinds of
problems. First, there are problems in which the current state is
viewed as truly unsatisfying and the desirable state is seen as neu-
tral, e.g., having a toothache or a flat tire. Secondly, there are prob-
lems where the current state is seen as neutral and the desirable
state is regarded as a potentially huge and surprising improvement.
Often such problems are not perceived until some innovation arises
and captures people's imagination, and they realise that their cur-
rent practice can be improved. An example could be the invention of
X-rays, which gave doctors the means to overcome the problem of
not being able to view the inside of the human body. Summarising,
the term "problem" is used here to denote troublesome situations as
well as promising opportunities. (It could be argued that "challenge"
and "practical challenge" would be better choices of word than
"problem" and "practical problem", but this book sticks with the
well-established latter terms).

1.2 Artefacts as Solutions to Problems in Practices
When facing a practical problem, people may react to it in different
ways. One option is to adopt a stoic attitude and just accept the prob-
lem as a fact of life without trying to do anything about it. The other
extreme would be to view the problem as being so serious that the
entire practice should be abandoned, or at least part of it. An exam-
ple could be bloodletting, which was an established practice in medi-
cine for centuries but ceased when evidence mounted regarding its
adverse health effects. However, the most common reaction to a
practical problem is to try to find some, often partial, solution to it.
    In many cases, practical problems can be solved by means of ar-
tefacts. An artefact is defined here as an object made by humans with

<!-- Page 10 -->
the intention to be used for addressing a practical problem. Some
artefacts are physical objects, like hammers, cars and hip replace-
ments. Other artefacts take the form of drawings or blueprints, e.g.
an architect's plan for a building. Methods and guidelines can also be
artefacts, e.g. a method for designing databases. Common to all these
artefacts is that they support people when they encounter problems
in some practice.
    There exists a plethora of artefacts in the IT and information sys-
tems area, ranging from algorithms, logic programs and formal sys-
tems over software architectures, information models and design
guidelines to demonstrators, prototypes and production systems. In
the early years of IT, most artefacts were developed for military and
business practices. However, in recent times some of the most inno-
vative IT artefacts have been designed for everyday practices, like
keeping in touch with friends, sharing and organising photos, or
playing games.
    The relationships between people, practices, problems and arte-
facts are summarized in figure 1.1. People engage in practices in
which they may perceive problems that can be addressed by means
of artefacts. Thus, artefacts do not exist in isolation but are always
embedded in a larger context

               Practice

                                   Artefact
                                         ~ddresses
                         use              ,    ~
                                  perceives
                      Person                      Problem

            Figure 1.1 People, Practices, Problems and Artefacts

<!-- Page 11 -->
1.3 The Anatomy of Artefacts
Every artefact has an inside, an outside, and an interface between the
inside and outside. More precisely, every artefact has an inner con-
struction, is situated in an environment, and offers a function for its
intended practice. The intended practice is here defined as the prac-
tice that holds the practical problem, which the artefact is to address.
     The construction of an artefact is about its inner workings, the
components it consists of, how these are related, and how they in-
teract with each other. An artefact is always constructed from small-
er parts that are assembled in such a way that they can interact with
each other and produce some behaviour. An example could be a
clock constructed from cogwheels, watch-hands, and other mechani-
cal parts. Another example is a truck, which is made of a chassis, an
engine, wheels and other parts.
     The environment of an artefact is about the external surround-
ings and conditions in which it will operate. The environment of an
artefact always includes its intended practice as well as the people
and other objects participating in that practice. The environment
may also include other practices that are affected by the use of the
artefact. Furthermore, the environment may contain various objects
that are not related to any specific practice. As an example, the envi-
ronment of a truck includes the goods transportation practice in
which it is used. If the truck passes through areas where kids are
playing, the practice of children playing also becomes a part of the
truck's environment. Finally, the environment contains the physical
surroundings of the truck, including streets and air.
     The function of an artefact is the intended result of using it in its
intended practice, i.e. those benefits the artefact is expected to bring
to its users. For example, the function of a clock is to tell the time, the
function of a lawn-mover is to cut grass, and the function of a truck is
to move goods.
     When an artefact is used in a practice, it will have certain effects
on its environment, i.e. it will change it in intended as well as unin-
tended ways. The intended changes correspond to the function of the

<!-- Page 12 -->
artefact. For example, the intended effect of using a truck is that
some goods are moved from one place to another, which is the same
as the function of the truck Using an artefact may also have unin-
tended effects, often called side effects. These effects may concern not
only the intended practice of the artefact but also other practices,
sometimes with adverse consequences for them. For example, a
truck passing through an area where children play may pose such a
safety hazard that the play has to stop. Side effects may also be
harmful for other valuable resources even if these are not directly
used in any specific practice. Emissions from truck driving pollute
the air, which indirectly may harm many practices.
    Figure 1.2 illustrates how an artefact is situated in an environ-
ment, which may include several practices. The artefact offers its
function to the intended practice, but it may have side effects for this
as well as other practices. Thus, an artefact may have many stake-
holders, i.e. people in practices that are affected by it.
                                                                  Intended Practice
                                                                  The practice in
                      Function
                                                                  which there is a
   What the artefact can do
                                                                  practical problem
 for its users, what benefits
                                                                  that the artefact is
          it can bring to them
                                                                  intended to address

                                                                     Side Effects
                                                                     Unintended
               Environment                                           effects caused by
                                                                     the use of the
 External surroundings and
    conditions in which the                                          artefact
       artefact will be used

                               Construction         Other Practices
                     The components of the          Practices that the artefact
                           artefact and their       may unintentionally affect
              relationships and interactions

                  Figure 1.2 Construction, Function and Environment

<!-- Page 13 -->
A common guiding principle in artefact design is to hide the con-
struction of an artefact from its future users and instead focus on its
function. A user should not need to care about the internal structure
of the artefact but only about its function, i.e. how it can serve the
user. Ideally, the user should not even be aware of the construction.
An example is a clock, which someone can use without knowing
whether it is constructed using mechanical parts or electronic com-
ponents. In the history of IT, the idea of hiding the internals of an
artefact has been applied repeatedly with labels like encapsulation,
object-orientation, information hiding, and service oriented architec-
tures.
     When designing an artefact, a designer often starts by creating a
specification that defines the functional requirements for the arte-
fact, i.e. which functions the artefact should offer. Two requirements
for a watch are that it should be usable as a stopwatch and as an
alarm clock. Typically, requirements are gathered from and validat-
ed by people within the intended practice. The requirements can be
expressed as a list of functions of the artefact with no reference to its
construction. Instead, the construction can be developed later when
the designer has a more complete understanding of the require-
ments. However, it is also common that function and construction
are elaborated in an iterative way.
     The distinction between construction, function, and environment
is sometimes reflected in the professional roles of designers. For
example, in the house construction industry, a construction engineer
will focus on the internal structure of buildings, including selection
of building materials, layout of plumbing, strength calculations, etc.
An architect, on the other hand, will focus on the environment and
function of buildings in order to cater for external constraints as well
as the needs and requirements of the users. Similarly, in the IT and
information systems industry, enterprise architects address business
requirements as well as legal, cultural and other environmental fac-
tors, while programmers and software engineers focus on the con-
struction of software within the systems to be built.

<!-- Page 14 -->
1.4 Design Science - the Study of Artefacts
Artefacts are studied in different fields of science, including formal
sciences, behavioural sciences and social sciences. For example, a
study in theoretical computer science (formal science) could deter-
mine the complexity properties of a new algorithm for traversing a
social graph. A study in psychology (behavioural science) could in-
vestigate how photo sharing on social networks influences stress
levels. A study in business administration (social science) could ex-
amine how the adoption of ERP systems in companies affects their
internal communication.
    Artefacts are also studied within design science, where they are
investigated as solutions to practical problems that people experi-
ence in practices. More precisely:

      Design science is the scientific study and creation of arte-
      facts as they are developed and used by people with the
      goal of solving practical problems of general interest

    The starting point for a design researcher is that something is
not quite right with the world, and it has to be changed. A new arte-
fact should be introduced into the world to make it different, to make
it better. The design researcher does not only think and theorize
about the existing world. She models, makes and builds in order to
create new worlds. She produces both a novel artefact and
knowledge about it and its effects on the environment. In particular,
she needs to formulate problem statements, determine stakeholder
goals and requirements, and evaluate proposed artefacts. In other
words, artefacts as well as contextual knowledge are research out-
comes for design science.
    In this book, design science will be viewed mainly from an IT and
information systems perspective. However, the principles underly-
ing design science are applicable to many other areas, see the box on
medical science below.

<!-- Page 15 -->
Medical Science and Design Science
Encyclopaedia Britannica defines medicine as "the practice concerned
with the maintenance of health and the prevention, alleviation, or cure
of disease". Early medical practices incorporated plants, animal parts
and minerals as instruments for healing. They were often used in magi-
cal rituals overseen by priests or shamans. Medicine thereby became
closely related to spiritual systems like animism, shamanism, spiritual-
ism and divination. Today, these relationships have largely been broken,
and medical practices are instead supported by medical science.
   Medical science is in many ways akin to design science. There is a
practice, the medical practice that aims at healing people. There are
practical problems that have to do with the effectiveness, safety and
cost of engaging in this practice. There are artefacts that address practi-
cal problems and support the practice, such as pharmaceutical drugs,
medical devices and therapies. A large part of medical science is devot-
ed to studying, in a scientific way, how such artefacts can help solve
practical problems in medical practice. Thus, many of the notions and
principles behind design science are also relevant for medical science.

1.5 Design and Design Science
Design science may appear highly similar to design, as both focus on
the development of artefacts. Both of them also aim at novelty, i.e.
they are to produce or investigate original artefacts that differ from
existing ones. However, their purposes are different with respect to
generalizability and knowledge contribution. While design is a pro-
cess for developing a working solution to a problem that may be
relevant only for a single actor, design science aims at producing and
communicating knowledge that is of general interest. Results from
design work are sometimes relevant only for a local practice, i.e. a
practice in which just one single individual, organization or group
engages. In contrast, design science should produce results that are
relevant for a global practice, i.e. a community of local practices.
    The different purposes of design and design science give rise to
three additional requirements on design science work. Firstly, the

<!-- Page 16 -->
purpose of creating new knowledge of general interest requires de-
sign science projects to make use of rigorous research methods. Sec-
ondly, the knowledge produced has to be related to an already exist-
ing knowledge base in order to ensure that proposed results are
both well founded and original Thirdly, the new results should be
communicated to both practitioners and researchers.
    As an example of the specific requirements on design science,
consider a project for designing a new electronic health record sys-
tem. In order to count as design science, the project first has to
choose an overall research strategy for investigating the problem
situation and eliciting stakeholder requirements. This strategy will
include research methods for data generation, e.g. questionnaires for
large groups of health care professionals and deep interviews with
selected physicians and health care managers. The strategy will also
include methods for analysing the generated data. Furthermore, the
project has to relate the produced results to existing knowledge
within various subareas of health informatics and information sys-
tems. This knowledge will include not only established theories and
models but also relevant artefacts, in particular other electronic
health record systems. Only by relating the project results to existing
knowledge, does it become possible to assess their originality and
validity. The project must also evaluate the artefact produced using
adequate research strategies and methods. Finally, the project has to
disseminate its results to both health care professionals and academ-
ics through publications in journals and conferences as well as
presentations at health care fairs, professional conferences, and oth-
er similar events.

Must an artefact in design science aim at changing the real world?
Short answer: Yes
Long answer: In design science, an artefact is an object made by humans
with the intention to be used for addressing a practical problem. In oth-
er words, some stakeholders must have formulated a goal of the arte-

<!-- Page 17 -->
fact, and this goal has to be related to a practical problem. The stake-
holders want to address, or ideally solve, the problem by using the arte-
fact. The stakeholders are not disinterested observers who desire im-
proved knowledge for its own sake, but people engaged in a practice
that has encountered a problem. They want to employ the artefact in
order to change the world so that the problem is solved or at least miti-
gated. Thus, theories or descriptive models do not count as design sci-
ence artefacts, as they aim at explanation and description but not
change and problem solving.

Further Reading
One of the earliest and most influential texts on the relationship be-
tween design and science is The Sciences of the Artificial by Herbert
Simon (Simon, 1996). An early paper on design science was written
by March and Smith (1995). Another highly influential paper was
written by Hevner et al. (2004). Osterle et al. (2010) discuss the im-
portance and relevance of design science. Vaishnavi and Kuechler
(2004) have designed a web site for design science that includes a
large bibliography. The notion of practice is discussed in depth by
Cetina et al. (2001). Practice research and its relationships to design
science are investigated by Goldkuhl (2012).

<!-- Page 18 -->
2 Knowledge Types and Forms

Scientific research produces different kinds of knowledge and there
have been numerous attempts to classify these; one of the earliest
being Kant's distinctions between apriori vs. aposteriori and analytic
vs. synthetic knowledge. In this chapter, knowledge is classified into
six types depending on its contents and uses. The classification
builds on a broad view of knowledge as expressed in the following
definition from Wikipedia; "Knowledge is a familiarity with someone
or something, which can include facts, information, descriptions,
or skills acquired through experience or education. It can refer to the
theoretical or practical understanding of a subject. It can be implicit
(as with practical skill or expertise) or explicit (as with the theoreti-
cal understanding of a subject); it can be more or less formal or sys-
tematic" (Wikipedia contributors, "Knowledge", 2012).
     Another aspect of knowledge is the form in which it can be mate-
rialized. This is particularly relevant for design science, as the
knowledge it produces is not always explicit but sometimes embed-
ded in artefacts. After having introduced knowledge types in Section
2.1 and knowledge forms in Section 2.2, the chapter concludes with a
classification of artefact types.

<!-- Page 19 -->
2.1 Knowledge Types

Definitional Knowledge
Definitional knowledge consists of concepts, constructs, terminolo-
gies, definitions, vocabularies, classifications, taxonomies and other
kinds of conceptual knowledge. It may be formal and precise, such as
the basic concepts of relational database theory, which includes rela-
tions, attributes, functional dependencies, and multi-valued depend-
encies. Definitional knowledge may also include vague and informal
concepts like the HCI notions of usability, affordance, and situated-
ness. Definitional knowledge does not include statements about real-
ity that are claimed to be true. Instead, it is used as a basis for all
other types of knowledge in the sense that it provides basic concepts
required to express that knowledge. J. G. Bennett (1985) succinctly
phrased this as; 'We do not know structures, but we know because
of structures".
     Examples of definitional knowledge:
   -   A right triangle is a triangle in which one angle is a right an-
       gle
   -   A unicorn is a mythical creature depicted as a white horse
       with a large, pointed, spiraling horn projecting from its fore-
       head
   -   A black hole is a region of space from which nothing can es-
       cape
   -   A relation in relational database theory is in third normal
       form if all of its attributes are dependent on the key, the
       whole key and nothing but the key
These statements only define certain concepts but do not claim that
right triangles, unicorns, black holes, or third normal forms really
exist; such claims are made by descriptive knowledge.

<!-- Page 20 -->
Descriptive Knowledge
Descriptive knowledge describes and analyses an existing or past
reality. This type of knowledge typically describes, summarises, gen-
eralises and classifies observations of phenomena or events. For
example, descriptive knowledge can claim that a majority of the ERP
users in a company are dissatisfied. In addition, it may describe indi-
vidual entities and events, for example, that the company Ericsson
has invested in a new global ERP system. It may also describe rela-
tionships among entities, thereby providing an analysis of these, for
example, the modular composition of an ERP system. In contrast to
definitional knowledge, descriptive knowledge does include state-
ments that are claimed to be true. In other words, descriptive
knowledge claims to describe the world "as is".
    Examples of descriptive knowledge:
   -   The height of the Eiffel tower is 300 meters
   -   All swans are white
   -   All large companies in Europe use ERP systems
Descriptive knowledge does not claim to provide explanations or
predictions; it only describes.

Explanatory Knowledge
Explanatory knowledge provides answers to how and why ques-
tions, explaining how objects behave and why events occur. Explana-
tory knowledge goes beyond descriptive knowledge, as it not only
describes and analyses but also explains in order to offer under-
standing. Explanations often take the form of cause-effect chains,
showing how events and outcomes are causally related to underlying
mechanisms and factors. For example, the increased acceptance of
Internet banking among the public can partially be explained by im-
provements in security infrastructures.
    High-level explanatory knowledge aims to show how the world
can be viewed in a certain way, sometimes with the intent to chal-
lenge conventional assumptions and bring about an altered under-

<!-- Page 21 -->
standing based on novel theoretical perspectives. Some theories that
have been used for this purpose are structuration theory, action-
network theory, and critical theory. For example, critical theory can
be used to explain why information systems introduced for improv-
ing productivity, often evolve into instruments for monitoring and
control.
    Explanatory knowledge on a lower level provides explanations
for particular situations, e.g. through case studies, where it explains
why and how specific events unfold. For example, the introduction of
a reward system in an organization can be a major cause for the em-
ployees' acceptance of a new ERP system.
    Examples of explanatory knowledge:
       Humans are descended from other animals through a pro-
       cess of natural evolution
       The earthquake in Japan 2011 was a consequence of dis-
       placements of tectonic plates
       The failure to introduce social software into the company
       was caused by its authoritarian organisational culture
Explanatory knowledge only explains events after they have hap-
pened and cannot be used for predicting future events.

Predictive Knowledge
Predictive knowledge offers black-box predictions, i.e. it predicts
outcomes based on underlying factors but without explaining causal
or other relationships between them. The goal of predictive
knowledge is accurate prediction, not understanding.
    High-level predictive knowledge with a broad generality is not
common in the IT and information systems area; one of the few ex-
amples is the COCOMO model, (Boehm, 1981), which provides cost
estimation for software development. Just as for explanatory
knowledge, predictive knowledge can also exist on a lower level
where it predicts outcomes in specific situations.

<!-- Page 22 -->
   Examples of predictive knowledge:
       Physicians with unwashed hands treating patients may result
       in diseases
       Heavy exposure to sunlight may result in skin diseases
These examples only predict certain outcomes and do not explain
them. Today there are explanations for these predictions but these
were not known when this knowledge was discovered.

Explanatory and Predictive Knowledge
Explanatory and predictive knowledge offers both explanations and
predictions. It predicts outcomes and explains how these are related,
often through causal relationships, to underlying mechanisms and
factors. This kind of knowledge is considered the most common in
natural science. It is much less common in the IT area, but there are
examples such as the Technology Acceptance Model (TAM), (Ven-
katesh and Davis, 2000), and DeLane and McLean's model of infor-
mation success, (DeLane and McLean, 2003). Explanatory and pre-
dictive knowledge can also be incorporated into more comprehen-
sive theories, like general systems theory and the soft systems ap-
proach (Checkland, 1999).
    Examples of explanatory and predictive knowledge:
       Microorganisms can survive in dirt and infect people that
       come into contact with them
       Exposure to the ultraviolet radiation of sunlight may cause a
       burn of the skin, which may result in skin diseases
These statements both predict possible outcomes and explain them
by describing the underlying mechanisms causing them.

Prescriptive Knowledge
Prescriptive knowledge consists of methods and prescriptive models
that help solve practical problems. Prescriptive models can be seen
as blueprints for developing artefacts, while methods are guidelines
and procedures that help people to work in systematic ways when

<!-- Page 23 -->
solving problems. Methods often, but not always, prescribe how to
construct artefacts.
     Methods and prescriptive models can be viewed as comprising
two parts. The first is the model or method itself, and the second is a
statement about some desirable effect of using the model or method.
This statement is not a subjective judgement that some effect is de-
sirable in an absolute way. Instead, it is a predictive statement imply-
ing that if a method or prescriptive model is used in a certain prac-
tice, this will contribute to effects desired by some stakeholders. In
this sense, prescription can be seen as a special case of prediction.
     Typical examples of methods are systems and software devel-
opment methods like RUP (Kroll and Kruchten, 2003), or agile meth-
ods like XP and SCRUM (Cohn, 2009). Examples of prescriptive mod-
els are conceptual reference models like SCOR (Bolstorff and Rosen-
baum, 2007), or architectural models like OSI (Day and Zimmerman,
1983).
     Examples of prescriptive knowledge:
    -   Wash your hands before going to surgery!
    -   Apply sun lotion before sun bathing!

Is there a difference between models in social science and design
science?
Short answer: Yes
Long answer: Social science produces models that describe and predict
phenomena and behaviour in a domain, i.e. descriptive and predictive
models. In contrast, design science produces models that can be used as
blueprints for developing artefacts, i.e. prescriptive models.

2.2 Knowledge Forms
While knowledge types describe how knowledge can be used,
knowledge forms specify how it can be materialized, i.e. where it
exists and in which shape. Knowledge forms are important for de-
sign science work, as it creates not only knowledge explicitly codi-

<!-- Page 24 -->
fied in documents but also embedded in artefacts. The following sub-
sections will introduce the three main knowledge forms and their
roles in design science.

Explicit Knowledge
Explicit knowledge is articulated, expressed and recorded in media
such as text, numbers, codes, formulas, musical notations, and video
tracks. Typical containers of explicit knowledge are encyclopaedias,
textbooks, and manuals. A main strength of explicit knowledge is
that it can be easily transferred between individuals, as it is stored in
media that can be moved and decoded in a convenient way. Howev-
er, not all knowledge can be articulated in an explicit way, e.g. practi-
cal skills, intuitions and experiences. Reading a manual on how to
ride a bicycle will not help much in learning that skill.

Embodied Knowledge
Embodied knowledge is situated in the minds of people and is typi-
cally difficult to formulate in an explicit way. For example, although
almost everyone is able to read facial expressions correctly and ef-
fortlessly, no one would be able to articulate fully how this is done.
Other examples of embodied knowledge are tying a shoelace, speak-
ing English, or using a video recorder.
    Sometimes, efforts are made to transform embodied knowledge
into explicit knowledge, for example, by companies who want to
retain the knowledge of employees who are going to quit. The goal of
such a transformation is that people without expert background
should be able to replicate the performance of those who possess
relevant, embodied knowledge. However, the person using
knowledge in an explicit form will typically lack the ability of the
skilled practitioner to innovate and adapt to new circumstances. In
this sense, the extracted, explicit knowledge is inferior to the embod-
ied knowledge.

<!-- Page 25 -->
Embedded Knowledge
Embedded knowledge resides not in humans but in entities, like
physical objects, processes, routines, or structures. As an example,
consider a bread maker, i.e. a home appliance for making bread.
When loaded with the right ingredients, such a machine is able to
produce a loaf of bread by mixing those ingredients, kneading the
resulting dough, and then baking it; someone studying how the ma-
chine works can learn about bread making. Thus, the machine can be
seen as embedding the prescriptive knowledge of how to make
bread; it embeds a recipe, a method. Furthermore, by studying the
construction of the machine, someone can learn about the architec-
ture of bread making machines in general. It may even be possible to
create a (prescriptive) model for building new bread makers. In this
way, the machine also embeds a model.
    In general, an object can embed both models and methods. Just
as for embodied knowledge, such embedded models and methods
can sometimes be made explicit. However, this requires a transfor-
mation that typically loses some of the embedded knowledge, i.e. the
extracted models or methods are poorer than the ones embedded in
the object. (The process of discovering the principles behind an arte-
fact through an analysis of its functionality and construction is com-
monly known as reverse engineering, which has a long tradition with-
in military as well as industrial practices.)

2.3 Knowledge in Craft and Science
In traditional crafts, representing and transferring design knowledge
is most commonly done by embedding it within objects. This is not
due to laziness of the designer, but because objects are able to em-
bed design knowledge with all its richness and nuance. An appren-
tice carefully studying an artefact designed by her master will gain a
deep and intuitive understanding of the principles used in creating it.
In this way, the design knowledge embodied in the master becomes
embodied in the apprentice, using the artefact with its embedded
knowledge as an intermediary.

<!-- Page 26 -->
    Representing and transferring knowledge by embedding it in ar-
tefacts can offer substantial benefits with respect to richness and
intuition, but there are also several disadvantages. First, acquiring
knowledge by directly studying artefacts can be time-consuming.
This is evidenced by the many years it typically takes a craft appren-
tice to become a master. Secondly, the knowledge someone actually
acquires by studying an artefact is highly dependent on that person's
background, interests and capabilities. Some people may learn effec-
tively from examining an artefact, while others may fail to do so.
Thirdly, it is difficult to analyse, criticize and evaluate knowledge
embedded in an object. Analysis, criticism and evaluation are usually
more effective and meaningful when the knowledge is explicit.
    One of the main purposes of design science is to support design-
ers and researchers in making design knowledge explicit, thereby
moving design from craft to science. Design science offers this sup-
port by clarifying principles behind design and by providing meth-
ods for creating artefacts as well as explicit knowledge about them.
However, it should be acknowledged that not all the knowledge em-
bedded in an artefact can be made explicit and, therefore, the arte-
fact itself is a vital result of any design science project. As stated by
Robin Mathew, "Design is where science and art break even".

2.4 Artefact Types
Based on the knowledge types and forms introduced, it is possible to
distinguish between different artefact types. Within the IT area, it
has become common to identify four such types: constructs, models,
methods, and instantiations.
    Constructs are terms, notations, definitions, and concepts that are
needed for formulating problems and their possible solutions. Con-
structs do not make any statements about the world, but they make
it possible to speak about it, so it can be understood and changed.
Thus, constructs are definitional knowledge. Some examples are the
concepts of class in UML, method in Java, functional dependency in
relational database theory, and affordance in HCI. Constructs are the

<!-- Page 27 -->
smallest conceptual atoms with which to understand and communi-
cate about various phenomena.
    Models are used to depict or represent other objects. A model can
represent an existing situation, which can be used for describing and
analyzing problem situations. Such a descriptive model may work as a
pedagogical tool for representing a current situation and explaining
why it is challenging. However, models can also be used to describe
potential solutions to practical problems, e.g. a drawing for a new
type of vehicle or a proposal for an architecture of a mobile operat-
ing system. Such prescriptive models work as descriptions of possible
future solutions and help to build artefacts that can solve practical
problems. There are also predictive models that can be used to fore-
cast the behavior of objects and systems. Thus, models can express
descriptive as well as predictive and prescriptive knowledge. In de-
sign science, the focus is on prescriptive models. Typical examples
are business process models, systems architectures, domain ontolo-
gies, and user models.

Is a model a theory?
Short answer: No
Long answer: A theory aims to explain by showing how phenomena and
behaviour in a domain are related to each other, typically through cause
and effect relationships. In contrast, a model aims at representation, as
it represents all or part of a system. It is possible to distinguish between
three kinds of models: descriptive, predictive, and prescriptive (or nor-
mative) models. A descriptive model describes some existing system but
without offering any explanations. A predictive model allows forecasts
of events, e.g. weather forecasts. A prescriptive model, e.g. a drawing
for a new building, can be used for guiding actions, thereby helping
people to fulfil their goals.

Caveat: Even if models are not theories in themselves, descriptive and
predictive models can still be a part of theories. For example, a concep-
tual model in the context of agency theory could include and relate con-
structs like principal, agent, risk, goal, contract, and monitoring (Eisen-

<!-- Page 28 -->
hardt, 1989). Such a model provides a conceptual basis for agency theo-
ry but does not count as a theory in itself. To do so, it has to be com-
plemented with explanatory propositions like "As the principal and the
agent have different goals, the agent does not always act in the interest
of the principal" or predictive statements like (/Monitoring may improve
the efficacy of behaviour-based contracts". Simplifying, theory = de-
scriptive model + explanations + predictions.

     Methods express prescriptive knowledge by defining guidelines
and processes for how to solve problems and achieve goals. In par-
ticular, they can prescribe how to create artefacts. Methods can be
highly formalized like algorithms, but they can also be informal such
as rules of thumb or best practices. Some examples are methods for
database design, change management initiatives, or web service de-
velopment.
     Instantiations are working systems that can be used in a practice.
Instantiations can always embed knowledge, e.g. a database can em-
bed a database model. Some examples of instantiations are a Java
program realising a search algorithm, a database for electronic med-
ical records, or a new planet in the computer game Entropia.

What do instantiations instantiate?
Short answer: A model of a working system
Long answer: In this book, an instantiation has been defined as a work-
ing system that can be used in a practice. However, the term "instantia-
tion", which has become well established in the design science commu-
nity, indicates that the system should be an instantiation of some other
artefact. So, the question arises -what kind of artefact is instantiated?
The candidates are the three types of abstract design science artefacts:
construct, model and method. Constructs are out, because instantiating
a construct will give rise to something that is much too small to be a
working system. Models, such as blueprints and architectures can clear-
ly be the basis for a working system, so models can be instantiated. The
remaining question is whether methods can also be instantiated. Apply-
ing a method for developing a system should obviously result in a work-

<!-- Page 29 -->
ing system. However, this system is not an instantiation of the method.
Rather, the instantiation of the method consists of the actual actions
and events that occurred during the system's development. Thus, a
method instantiation would not count as an instantiation when the lat-
ter is defined as a working system.
   It could now be argued that our definition of instantiation is too nar-
row and that method applications should also be included in it. One
argument in favour of this view is that methods are so complex and
situation dependent that they cannot be fully specified in words. In-
stead, some of the knowledge has to be embedded in particular method
applications. Such knowledge can then be communicated, for example,
through video recordings. Although in principle this argument has much
merit, it is in practice quite difficult to transfer knowledge through
method applications, because in the IT area, these typically span over
extended periods of time. Watching videos of many hours of meetings
and discussions is not an attractive option. Thus, our definition of in-
stantiations as working systems is not very restrictive in practice. How-
ever, it could be speculated that in other areas, such as physiotherapy,
method applications would be useful design artefacts. Watching a one-
minute video on an innovative physiotherapy exercise could be a highly
effective instrument for knowledge transfer.

Must an instantiation always be an IT system?

Short answer: No
Long answer: An instantiation has been defined as a working system
that can be used in practice. Clearly, such a system can be an IT system,
like a hardware device, a computer program, or a combination thereof.
However, there is no reason to make a restriction to only IT systems. An
instantiation could also include other components, such as an IT system
in an organisation together with new work processes and business
rules. Another example could be a digital art installation that consists of
sculptures, people and IT artefacts. In general, an instantiation can con-
tain any physical, informational, biological or social components as long
as they comprise a working system.

<!-- Page 30 -->
Caveat: Although an instantiation can be more than IT, much work on
instantiations within design science has actually focused on IT systems.
One probable reason for this is that it is complex to construct and eval-
uate artefacts that contain not only IT but also physical, human or social
components.

Further Reading
The knowledge types introduced in this paper builds on the work
performed by Gregor (2006). Knowledge forms are discussed by
Madhavan and Grover (1998). The artefact types of design science
are introduced and described by March and Smith (1995) and He-
vner et al. (2004).

<!-- Page 31 -->
3 Research Strategies and Methods

The purpose of research is to create reliable and useful knowledge
based on empirical evidence as well as logical arguments. The evi-
dence and the arguments need to be presented in a clear way to oth-
er researchers, so that they can review them and determine whether
they hold up to the standards of academic research. In order to sup-
port researchers in creating, structuring and presenting their results,
many scientific communities have evolved and established a number
of research strategies and methods. This chapter offers an overview
of a number of well-established research strategies and methods for
empirical research, particularly within the social sciences. These
strategies and methods are useful also when doing design science, in
particular when investigating practical problems, defining require-
ments and evaluating artefacts.

3.1 Data Generation and Analysis Methods
An early activity in any empirical research study is to collect data
about the phenomenon under investigation. For this purpose, data
generation methods are used. The data collected may be numeric
(often called quantitative data), e.g., number of lines of code, number

<!-- Page 32 -->
of software installations, and the visitor frequency of a web site. Oth-
er kinds of data include text, sound, images, video, etc. (often called
qualitative data). Five of the most widely used data generation
methods are: interviews, group discussions, questionnaires, observa-
tion studies, and document studies.
Interviews
An interview is a communication session between a researcher and a
respondent, where the researcher controls the agenda by asking
questions of the respondent. An interview can be structured mean-
ing that it strictly follows a predefined protocol. Alternatively, it can
be semi-structured or unstructured, providing opportunities for di-
gressing from a protocol and allowing the respondent to take initia-
tives. An example of an interview is a researcher evaluating a new
MMORPG by asking a player of the game about her view of its graph-
ical interface.
Group discussions
A group discussion is a communication session in which a researcher
and a group of respondents interact under the guidance of the re-
searcher and the participants influence each other in order to gener-
ate information. An example of a group discussion is a group of busi-
ness intelligence experts together with a researcher, defining major
steps in a method for identifying key performance indicators for
measuring organisational performance.
Questionnaires
A questionnaire is a written document consisting of questions dis-
tributed to a number of respondents. A questionnaire can include
questions with predefined answers, as well as open questions where
the respondent can answer more freely. An example of a question-
naire is different stakeholders in an organisation filling in a form on
how they prioritise among a number of requirements for a planned
CRM system.

<!-- Page 33 -->
Observation studies
In an observation study, objects are observed in their natural envi-
ronments. The researcher often tries to be as invisible as possible in
order not to interfere with the natural dynamics of the situation un-
der investigation. An example of an observation study is a researcher
gathering information on the learnability of a mobile app by actually
observing people using it.
Document studies
A document study is a special kind of observation study where exist-
ing documents are examined, including policy documents, user man-
uals, video recordings, system specifications, system logs and web-
sites. An example of a document study is a researcher identifying
problems experienced during a systems development project by
reading relevant meeting notes.
When data have been generated, they need to be analysed. For this
purpose, there exist both quantitative and qualitative data analysis
methods. Quantitative data analysis focuses on numeric (quantita-
tive) data and uses mathematical approaches, in particular statistical
ones, in order to investigate, interpret and structure data. Qualitative
data analysis is about interpreting data of any form (both qualitative
and quantitative) by discovering themes and patterns in them,
thereby using the personal skills and understanding of the research-
er who undertakes the analysis. Examples of qualitative analysis
methods are content analysis and narrative analysis.

3.2 Research Strategies
Data generation and analysis methods are never used in isolation but
always in the context of a research strategy, i.e. an overall approach
to answering a research question. In addition to data generation and
analysis methods, a research strategy includes the general set-up of
the context in which the research is undertaken. Some well-
established research strategies are surveys, experiments, case stud-
ies, action research, grounded theory and ethnography.

<!-- Page 34 -->
Surveys
A survey starts by generating data from a large group of objects
(people, organisations, systems, etc.) often through use of question-
naires or document studies. The data are then analysed, typically by
a quantitative method, in order to find generalisations. An example
of a survey is an investigation aiming at identifying problems that
public organisations experience when introducing workflow sys-
tems. The main data generation method of the survey is question-
naires distributed among a sample of managers and users of work-
flow systems.
Experiments
In an experiment, a researcher creates an artificial environment that
will make it possible to isolate and study a small number of objects,
thereby preventing other objects from influencing those under in-
vestigation. The researcher will then observe (a data generation
method) the behaviour and relationships of the objects in the envi-
ronment and analyse the generated data (using a data analysis
method), often with the purpose of establishing cause and effect re-
lationships. An example of an experiment is a researcher investigat-
ing causes of failures in an embedded system by sending the system
several commands in parallel.
Case studies
A case study investigates in detail one specific case of the general
phenomenon under investigation, e.g. one organisation, one systems
development project, or one mobile application. The purpose of a
case study is to paint a rich picture of a single object or situation as a
basis for obtaining a deep and comprehensive understanding of
some general phenomenon. An example of a case study is a re-
searcher studying organisational change as a result of introducing a
business process system in an organisation. To understand the
change, the researcher follows the organization for a long period of
time. She makes use of observations, document studies (analysing
system logs), and interviews. Thereby, she can identify discrepancies

<!-- Page 35 -->
between the actual execution of business processes (using analyses
of the system logs and observations) and user perceptions of the
execution.
Action research
In action research, a researcher introduces some change into a real
environment. For example, a researcher may actively introduce a
new method or system in an organization together with its employ-
ees. She then studies and reflects on the effects of this change using
any data generation and data analysis methods. An example of action
research is a researcher introducing a method for identifying innova-
tive e-services in an organisation. The researcher and the employees
of the organization can apply the method together, and the research-
er will collect data about the application. She can also perform an
evaluation of the method, for example, by interviewing the employ-
ees.
Grounded theory
In grounded theory, a researcher generates theory or hypotheses
from data. She gathers data from a practice and identifies patterns or
structures in the collected data, which will become the base for cre-
ating the theory or hypotheses. A main thrust in grounded theory is
that the researcher should try to avoid applying her pre-
understanding or theoretical knowledge about the data. Instead, the
data should "speak for itself' to the researcher and be the sole, or at
least primary, basis for creating the theory.
Ethnography
In ethnographic studies, the purpose is to understand the culture
and perspectives of some group of people, e.g., systems administra-
tors in a large company. The researcher is not a detached observer
but tries to become a part of the studied group by participating in
their daily activities. Thereby, she gains a deep and comprehensive
understanding of how some groups view their practice. An example
of an ethnographic study is a researcher working as an employee

<!-- Page 36 -->
during a time period in order to understand why a group of employ-
ees refrain from using a decision support system.

Can social science be used when doing design science?
Short answer: Yes
Long answer: Social science offers models and theories as well as re-
search strategies and methods, which can be used when doing design
science. Social science models and theories are often key components
of the knowledge base used when developing artefacts. As an example,
agency theory is essential when developing auditing systems. Further-
more, research strategies and methods in social science are applicable
in all the activities of the design science method. For example, inter-
views and observation can be used for requirements definition, and
both experiments and case studies can be applied for evaluation.

                                                    Survey
                                     Research       Experiment
                                     strategy       Case study
                                 '---......-------' Action research
                                          I
                                       u+s
                                    Research
                                     method

                                        ~
                          I                           I
    Questionnaire
    Interview         Data                         Data
    Observation     generation                    analysis
                     method                       method
    Documents
                                                     ~
             Content analysis
                                        I                             I
                                   Qualitative               Quantitative   Statistical
            Narrative analysis                                              methods
                                    analysis                  analysis
                          ...
                                    method                    method

             Figure 3.1 Research strategies and research methods

Figure 3.1 shows the relationships between research strategies, data
generation methods, and data analysis methods. It also reads from

<!-- Page 37 -->
top to bottom, as a simple guide to the initial decisions in a research
project. First, the researcher will select one or more research strate-
gies to be applied. For each research strategy, she will select one or
more data generation methods to use as well as one or more data
analysis methods. In practice, these decisions will not be as serial as
suggested here but will rather develop in iterations during the entire
research project.
    A concrete example can be a researcher who intends to develop a
method for designing business process models. The purpose here is
to develop an artefact (a method). In order to gather requirements
for the method, she chooses a survey as one of the research strate-
gies in the project, where she tries to get suggestions for require-
ments from experts in business process management. For gathering
information from the experts, she chooses to use interviews (a data
generation method) and she analyses the gathered interview data
using a qualitative method. In addition to the requirements elicita-
tion, she also decides to evaluate the method. For this purpose, she
chooses an experiment as the research strategy. She sets up a situa-
tion where students, as well as experienced process designers, are to
use the method. She observes (a data generation method) the behav-
iour of these people when using the method and logs their results
(another data generation method), which she later analyses using
statistical (quantitative) methods.

Is a theory an artefact?
Short answer: No
Long answer: The answer may seem to be yes, as a theory is clearly cre-
ated by humans. However, to count as an artefact in design science, an
object should not only be man-made but also constructed with the in-
tention to be used for addressing a practical problem. Thus, a theory is
not an artefact, as it is not intended to address practical problems but
to explain and predict phenomena and behaviours in some domain. A
definition by Bhattacherjee (2012) states: "A theory is a set of systemat-
ically interrelated constructs and propositions that are advanced to

<!-- Page 38 -->
explain and predict a certain phenomenon or behavior within certain
boundary conditions and assumptions. Essentially~ a theory is a system-
atic aggregation of theoretical propositions. While propositions connect
two or three constructs at most~ theories represent a system of multiple
constructs and propositions/}
Caveat: Even if a theory cannot be used to directly address a practical
problem 1 it can help to design artefacts that do address such problems.
In the words of Kurt Lewin 1 often recognized as the founder of social
psychology: "There is nothing so practical as a good theory~~. In fact1
design science requires that the design of artefacts always be based on
a knowledge basel which preferably includes theories.

Further Reading
There are many books on research methodology both for natural and
social science. This chapter closely follows the structure of research
strategies and methods proposed by Denscombe (2010) and it is also
close to the structure suggested by Bhattacherjee (2012).

<!-- Page 39 -->
4 A Design Science Method

Design science projects can be large undertakings, involving many
people and being carried out over an extended period of time. There-
fore, researchers can benefit from design science methods that sup-
port them in structuring their work and ensuring the quality of their
results. Such methods can also support design researchers in pre-
senting their work in a logical and easily understandable way. In this
section, we introduce a generic design science method that can be
adapted to the needs of specific research projects. The method pro-
posed here is not another research strategy or method, such as those
introduced in Chapter 3; rather it is a holistic approach to problem
solving by means of artefacts, offering a framework of activities to be
performed and questions to be answered.

4.1 Activities in Design Science
The design science method introduced here includes five main activi-
ties that range from problem investigation and requirements defini-
tion, through artefact development to demonstration and evaluation.
These activities are outlined below and elaborated in detail in Chap-
ters 5 to 9.

<!-- Page 40 -->
Explicate Problem
The Explicate Problem activity is about investigating and analysing a
practical problem. It is to be precisely formulated and motivated by
showing that it is significant for some practice. The problem should
be of general interest, i.e., significant not only for one local practice.
Furthermore, underlying causes to the problem may be identified
and analysed.
Outline Artefact and Define Requirements
The Outline Artefact and Define Requirements activity is to outline a
solution to the explicated problem in the form of an artefact. Re-
quirements are to be determined, which can be seen as a transfor-
mation of the problem into demands on the proposed artefact. The
requirements will be defined primarily for functionality but also for
construction and environment.
Design and Develop Artefact
The Design and Develop Artefact activity aims to create an artefact
that addresses the explicated problem and fulfils the defined re-
quirements. Designing an artefact includes determining its function-
ality as well as its construction.
Demonstrate Artefact
The Demonstrate Artefact activity uses the developed artefact in an
illustrative or real-life case, sometimes called a "proof of concept",
thereby proving the feasibility of the artefact. The demonstration
shall show that the artefact actually can solve an instance of the
problem addressed.
Evaluate Artefact
The Evaluate Artefact activity is to determine how well the artefact
fulfils the requirements and to what extent it can solve, or alleviate,
the practical problem that motivated the research.
An overview of the proposed design science method is shown in fig-
ure 4.1, which also indicates the results from each activity. The

<!-- Page 41 -->
method, as described here, may look highly sequential. However, a
design science project is always carried out in an iterative way, mov-
ing back and forth between all the activities of problem explication,
requirements definition, development and evaluation. This way of
working is fully in line with the proposed design science method, as
it does not prescribe a sequential work ordering. The arrows in fig-
ure 4.1 should not be interpreted as temporal orderings but as input-
output relationships. In other words, the activities are not to be seen
as temporal groupings of work to be performed in sequence but in-
stead as logical groupings of work. These issues are further elaborat-
ed in Chapter 11.

Is design science the same as action research?

Short answer: No
Long answer: The purpose and activities of design science are close to
those of action research. Both aim to change and improve human prac-
tices and thus can be viewed as practice research, as pointed out by
Goldkuhl {2012). Furthermore, both include problem solving and evalu-
ation. However, there are also differences. Design science addresses
practical problems through the design and positioning of artefacts,
while action research does not require an artefact to be part of the solu-
tion addressing the practical problems. Instead, action research ad-
dresses problems through psychological, social and organizational
change. Furthermore, design science does not require a practical prob-
lem from a specific organisation as the starting point for the research,
while this is required in action research. Finally, action research is a
single research strategy, while design science can make use of many
different research strategies, e.g. one for problem explication, another
for requirements definition and a third for evaluation.
Caveat: It could be argued, however, that if an artefact is proposed as a
solution in an action research project, action research becomes very
similar to design science. Clearly, action research is a highly relevant
research strategy for many design science projects, and there are also
design science methods based on action research, e.g. (Sein et al. 2011).

<!-- Page 42 -->
     :n
     'Q
                Initial
     §       problem
                     .....   Explicate   -----,

     "....
     ~
                             Problem

     0                                             Outline
     i!i                                           Artefact
                                                     and
     I·
     ~
                                              L.
                                                    Define
                                                   Require-
                                                              -----,

                                                    ments
w    :;                                                                 Design

"'   "t:l
     ~
                                                                   L.     and
                                                                        Develop
                                                                                   ---,

     ~-                                                                 Artefact
                                                                                            Demon-

     -·
     ~
     ~
     ~
                                                                                      L..    strate
                                                                                            Artefact
                                                                                                       -----,

                                                                                                                                 Evaluated
     ~
     :;
     8.
                                                                                                                ...   Evaluate
                                                                                                                      Artefact          --
                                                                                                                                 artefact

<!-- Page 43 -->
4.2 Research Strategies and Methods in Design Science
The purpose of design science is not only to create artefacts but also
to answer questions about them and their environments. In order to
ensure that the answers express valid and reliable knowledge, the
use of research strategies and methods are vital. Within design sci-
ence, it is possible to use any research strategy or method to answer
questions about artefacts. In other words, no research strategies or
methods can be excluded in advance for a design science project, as
any of them may be valuable depending on the project's characteris-
tics and goals.
     In large design science projects, it is even common to use several
research strategies and methods, because different design science
activities may require different approaches. For example, a survey
can be an appropriate instrument for eliciting requirements, while
an experiment can be the best choice for evaluation. Figure 4.2 out-
lines commonly used research strategies for design science activi-
ties; it should be seen as merely indicative, as any research strategy
can be used in any activity.
     For problem explication, surveys are effective instruments, as
they can be used to quickly gather opinions and perceptions about a
problem situation from a large number of stakeholders. However,
the results from surveys are often superficial, as stakeholders may
not be prepared to spend much time and effort on describing and
analysing the problem under consideration. A deeper understanding
about a problem and its context can be achieved through a case
study, where researchers investigate the problem for an extended
period of time, using interviews, observation and document studies.
However, results from case studies may be difficult to generalise if
they are based only on one local practice.

<!-- Page 44 -->
     :!!
     ~
     ~                    Survey                   Survey                                             Experiment             Experiment
     .t.,
     ~                    Case study               Case study                                         Case study             Case study
                          Action research          Action research         Creative method            Action research        Action research
     ~
     :g
     Dt
     ~
     ca.       Initial                      Explicated
     ~      problem                         problem
     ~

     ~               --     Explicate
                            Problem
                                        1-----1
                                                         ;
     ~                                                Outline
     ~                                                Artefact
                                                                     Require-
                                                                     ments
     N
     ::r                                      L+        and      1---;
w    ~                                                 Define
                                                                                 ;
co   ;t
     Q                                                Require-
     ~                                                 ments
                                                                              Design
     CCI
                                                                                          Artefact
     ~·                                                                         and
     s·
     g:.
                                                                      4o
                                                                              Develop
                                                                              Artefact
                                                                                         ----,
                                                                                                           •         Demon-
                                                                                                                     strated
     ~
                                                                                                        Demon-       artefact
     i                                                                                       t....,      strate    1---;
                                                                                                                                   t
     "'
     ~·                                                                                                 Artefact
                                                                                                                                               Evaluated
     ~

     ~·
     ~
                                                                                                                        L+      Evaluate
                                                                                                                                Artefact              --
                                                                                                                                               artefact

     ~
     g:.
     8.

<!-- Page 45 -->
     For requirements definition, surveys are also effective instru-
ments. However, it may be hard for stakeholders to suggest relevant
requirements when the artefact to be designed is highly innovative
or complex. In such cases, action research and case studies may be
better alternatives, as they allow a researcher to identify require-
ments herself, without having to rely on stakeholders to be inventive
and committed. A drawback is that requirements definition may be-
come heavily dependent on the competence and experience of the
researcher.
     For design and development, research strategies are often less
important, as the primary goal of this activity is to produce an arte-
fact and to a lesser extent, the knowledge about it. Instead, creative
methods are more relevant, e.g., brainstorming, participative model-
ling, empathetic thinking and lateral thinking.
     Demonstration is about using an artefact in a specific case to
show its feasibility. Thus, the most obvious research strategies to
apply are action research and case studies, which will typically in-
clude interviews and observations of people in their use of the arte-
fact.
     For evaluating an artefact, experiments are popular instruments,
as they allow a researcher to achieve high internal validity by care-
fully controlling the conditions under which an experiment is under-
taken. On the other hand, external validity can suffer, because the
artificial setting of the experiment can be decidedly different from
the practice in which the artefact is to be used. An alternative is to
use case studies or action research, where the artefact is used and
evaluated in a local practice.

4.3 Relating to a Knowledge Base
The results from a design science project should be original and well
founded. Therefore, it is required to relate both design science activi-
ties and their results to an existing knowledge base. Such a
knowledge base may include models and theories from several fields
of science. In the IT and information systems area, theories from

<!-- Page 46 -->
social and behavioural sciences are particularly relevant but also
models from formal sciences. Furthermore, a knowledge base will
typically include information about artefacts similar to the one under
consideration.
    Relevant knowledge may be found in academic publications, in-
cluding textbooks and research papers in journals and conferences.
A good starting point for identifying these kinds of publications is
Google Scholar. Other sources of knowledge include magazine arti-
cles, white papers, fair trade presentations and artefact manuals.

4.4 Typical Cases of Design Science Projects
Many design science projects do not undertake in depth all of the
five activities of the design science method. Instead, they may focus
on one or two of the activities, while the others are treated more
lightly. Based on their focus, it is possible to distinguish between at
least five typical cases of design science projects.

Problem focused design science
Some design science projects focus on problem explication. They
carefully investigate a problem situation and divide it into sub-
problems, and may also carry out a root cause analysis. They thereby
employ research strategies and methods in a rigorous way and typi-
cally include comprehensive empirical studies. These projects also
define requirements on an artefact based on more or less careful
investigations. The design of the artefact is only outlined and neither
demonstration nor evaluation is carried out. Projects of this kind
often have a strong social science flavour and the design element is
downplayed. However, they can provide essential problem under-
standing upon which subsequent design science projects can build.

Requirements focused design science
Other design science projects focus on requirements definition.
These projects start with an existing problem that is simply accepted
as is, or slightly explicated. Careful and rigorous investigations are

<!-- Page 47 -->
carried out in order to collect requirements, which will involve liter-
ature studies, as well as interaction with relevant stakeholders. The
design of the artefact is only outlined and neither demonstration nor
evaluation is carried out.

Requirements and development focused design science
Many design science projects focus on a combination of require-
ments definition and artefact development. Such projects will not
perform any problem explication but move directly to requirements
definition, which is carried out in a rigorous way. The artefact is then
developed using research as well as creative methods. The viability
of the artefact is demonstrated or a lightweight evaluation is per-
formed.

Development and evaluation focused design science
It is also common that design science projects focus on development
and evaluation. Such projects will neither perform problem explica-
tion nor requirements definition but start from an existing require-
ments specification. The focus will be the design and development of
an artefact using both research and creative methods. There will also
be a demonstration and a thorough evaluation by means of experi-
ments, case studies, or other research strategies.

Evaluation focused design science
Some design science projects focus on the evaluation activity. Thus,
no artefact is developed, nor even outlined and therefore, it could be
questioned whether such a project should count as design science,
see the box below for a discussion. Evaluation projects often include
careful requirements definition, which results in a requirements
specification used as a basis for the evaluation. The evaluation is
carried out in a rigorous way using adequate research strategies and
methods.

<!-- Page 48 -->
Can an evaluation study be design science?
Short answer: Yes
Long answer: Consider a study that does not design and develop a new
artefact but only evaluates an existing one. Can such a study count as
design science? At first glance the answer seems to be no, as design
science is about the development of novel artefacts. However, an eval-
uation study can be part of a larger design science undertaking, which
may extend over a long time involving a number of research groups and
individuals. One study may explicate a problem and suggest an artefact
that can help to solve it; another study may define requirements on the
artefact; a third study may develop the artefact; and yet another study
may evaluate it. All of the studies are part of the same design science
undertaking, although the same people do not necessarily carry them
out. In this sense, the studies can all be viewed as design science contri-
butions.
   The question about evaluation studies can be generalised to problem
explication studies, requirements definition studies and artefact de-
signs. Using the same argument as above, all such studies can count as
design science. Even if none of them covers all the design science activi-
ties, together they extend the knowledge about an artefact and its con-
text.
Caveat: Even if very narrow studies can still count as design science,
they may not meet the requirements for a bachelor, master or PhD the-
sis within certain study programs.

4.5 Visualizing the Design Science Method
The proposed design science method can be visualized using IDEFOJ
which is a technique for describing systems as a number of interre-
lated activities, graphically represented as boxes, see figure 4.3. Each
activity can be decomposed into sub-activities, which themselves can
be decomposed into further sub-activities~ and so on. Furthermore,
channels conveying data or objects are related to each activity.

<!-- Page 49 -->
                                       Controls

                                   r
               Activity
  Input                                                        Output
          ..       Sub-          Sub-                Sub-
                  activity      activity            activity

                                       Resou rces

                             Figure 4.3 IDEFO diagram

Four kinds of channels are used in IDEFO: input, output, control and
resources. Inputs are transformed or consumed by an activity to
produce outputs. Controls (e.g., blueprints, rules, guidelines, meth-
ods and instruments) govern an activity to produce correct outputs,
while resources are the means (e.g., generic and domain knowledge)
that support an activity. Channels are represented graphically as
arrows; input arrows point to the left side of a box; output arrows
leave the right side of a box; control arrows point to the top side of a
box; and resource arrows point to the bottom of a box.
    In the design science method, the channels can be defined as fol-
lows:
   -       Input (arrow from left) -describes what Imowledge or object
           is the input to an activity
   -       Output (arrow to right)- describes what knowledge or object
           is the output from an activity
   -       Controls (arrow from above) - describe what knowledge is
           used for governing an activity, including research strategies,
           research methods, and creative methods
   -       Resources (arrow from below)- describe what knowledge is
           used as the basis of an activity, i.e. the knowledge base in-
           cluding models and theories

<!-- Page 50 -->
     IJ)
    "0

    -
     0
    .s::.
     Q)
    ~
     Q)
     >
    ·~
     ~
    (.)
                                                                     Q)
     IJ)
    "0                                                                ~
    -
     0                                                               co
    .s::.                                                            Q)
     Q)
                                                                     0>
    ~                                                                "0
                                                                     Q)
    "0
     c::                                                             ~
     ctS                                                             0
     IJ)                                                             c::
    .!!?                                                             ~
     0>
    2
     ctS
     .._
    U5
    .s::.
     u
     (ij
     Q)
     IJ)
     Q)
    a:::

                     2ctS E
                          Q)
                     u -
                     =Cl..O
                         .0
                     X .._
                     wa...

               :§ E
               ·~Q)
               c:-
               -~
                    0..

            Figure 4.4 IDEFO diagram for the Design Science Method

Figure 4.4 displays the design science method as an IDEFO diagram.
When applying the method in a design science project, the diagram

<!-- Page 51 -->
may be used as a template and filled in with the specifics of the pro-
ject. This will result in a convenient overview of the project, which
can be used for documentation and communication.

Must a design science project always create a new artefact?
Short answer: No

Long answer: The purpose of a design science project is to address a
practical problem by means of an artefact. The project may develop a
new artefact from scratch or refine an existing one. The project can
even repurpose an existing artefact, i.e. use it for a new purpose with-
out changing it. An existing artefact is used to solve another problem
than that for which it was originally designed and developed. For exam-
ple, the anticoagulant chemical Warfarin was introduced as a rat poison
but later repurposed as a blood thinning medicine. Gunpowder started
out as a medical elixir in China centuries before it was repurposed for
powering fireworks and firearms. Thus, a design science project does
not have to create a new artefact as it may transform an existing one
into something entirely different through repurposing. In terms of the
design science method suggested in this book, such a project would skip
the activity Design and Develop, while the other activities would still be
addressed.

4.6 The Design Science Canvas
Through the IDEFO representation of the design science method, it is
possible to obtain a comprehensive, yet compact overview of a de-
sign science project. However, it is sometimes desirable to get an
even more compact description and for this purpose, the Design Sci-
ence Canvas can be used. The Canvas offers a concise, easily under-
standable and visually appealing overview of the key components of
a design science project. The Canvas consists of a rectangle divided
into a number of fields that describe the artefact under considera-
tion, the problem it addresses, the knowledge base used, the re-
quirements on the artefact, the research strategies and methods
used in the project, and the results of the project.

<!-- Page 52 -->
             Problem                                              Artefact                                            Knowledge Base
             Describe a practical problem to be addressed.        State the type of artefact: Construct, Model,       Describe the knowledge base that is used as
             Formulate it in a precise and concise way.           Method, or Instantiation. Describe the artefact     a foundation for the work. The knowledge
             Motivate the problem by explaining why it is of      and how it is to be used in its intended            base may include theories and models as well
             general interest, significant, challenging and       practice. Explain why and how it can address        as existing artefacts. Explain how the
             possibly original. Specify the stakeholders of       the problem.                                        knowledge base has been utilized.
             the problem.
      :t'!
      lQ
      §      Practice                                             Requirements                                        Constructs
      fl'l
      ~
             Describe the practice in which the practical         Describe requirements on the artefact. Include      Define, describe and explain the most
      0,     problem exists, in particular its purpose, main      requirements pertaining to function as well as      important constructs that are used in the work.
             activities and participants.                         construction and environment. Justify the
      ;I                                                          requirements by relating them to stakeholder
      fl'l
                                                                  interests.
      ~
c§;   Vi
      ~·
      ~
             Explicate Problem               Define Requirements           Develop Artefact               Demonstrate Artefact            Evaluate Artefact

      ~·
             What is the problem             What artefact can be a        Create an artefact that        How can the artefact be         How well does the artefact
             experienced by some             solution for the problem      addresses the explicated       used to address the             solve the explicated problem
      ~      stakeholders of a               and which requirements        problem and fu lfils the       explicated problem in           and fulfil the defined
      g      practice and why is it
             important? Describe and
                                             are important for the
                                             stakeholders? Describe
                                                                           defined requirements.
                                                                           Describe and justify the
                                                                                                          one case? Describe and
                                                                                                          justify the methods used
                                                                                                                                          requirements? Describe
                                                                                                                                          and justify the methods
      :::.
             justify the methods used.                                     methods used.                  in this task.                   used.
      ~                                      the methods used.

      "'     Construction                            Function                               Usability
                                                                                                                                     Effects
                                                                                                                                     Discuss the effects of the arte-
             Describe the internal structure of      Describe the functions offered by      Discuss the usability of the
                                                                                                                                     fact, direct and indirect as well as
             the artefact, i.e. its components       the artefact. Explain how the          artefact and how it can be
                                                                                                                                     intended and unintended. Identify
             and their relationships and             construction of the artefact gives     improved, in particular processes
                                                                                                                                     practices and resources that can
             interactions. Discuss design            rise to the functions. Discuss         and guidelines that can make it
                                                                                                                                     be affected by the artefact and
             rationale.                              how the functions contribute to        easier to use the artefact.
                                                                                                                                     discuss them with respect to
                                                     fulfilling the requirements.
                                                                                                                                     ethical and societal aspects.

<!-- Page 53 -->
     A template for the Design Science Canvas with descriptions of the
fields is presented in figure 4.5. A more detailed version of the Can-
vas can be found at eoo.el/TKDSS. The top part of the Canvas (blue
in the figure) defines the artefact under consideration, the problem
being addressed and the knowledge base used in the work. The mid-
dle part (yellow in the figure) describes the activities of the design
science method, corresponding to Chapters 5 to 9. The bottom part
(red in the figure) shows the results of a design science project in
terms of the construction, function, usability and effects of the arte-
fact.
     The Design Science Canvas may be used in several different situ-
ations. It can be used as a first sketch in order to improve communi-
cation and common understanding between members of a new de-
sign science project. It can also be used as a monitoring tool for con-
tinuously recording changes to the plans for a project. Furthermore,
the Canvas can help to present the overall setup of a project to
stakeholders and other interested parties. A similar use is to include
the Canvas in the final project report as part of an executive sum-
mary. In general, the Canvas is useful whenever there is a need to get
a compact and easily understandable overview of a design science
project.

Can the Design Science Canvas help to structure thesis work?

Short answer: Yes
Long answer: The Design Science Canvas can serve as a communication
tool for the participants in a thesis work, including authors, employers,
supervisors, examiners, fellow students, and other interested parties. In
the initial stage, a draft of the Canvas can function as a plan for the the-
sis project, particularly by outlining those parts of the design science
method that are in focus. Later on, the Canvas can be regularly updated
to reflect the progress of the work, thereby becoming more and more
detailed. The Canvas can also help to structure the thesis text, as the
Canvas fields can work as summaries of key parts of the thesis. Thus, the

<!-- Page 54 -->
Canvas can be used to structure the thesis project, as well as the thesis
text and it can support communication among the stakeholders of the
project.

4. 7 Running Example
In order to illustrate the use of the design science method, a fictitious
running example is presented in Chapters 5 to 9. In recent years, a
number of publishing houses have experienced decreasing sales of
books, as reading books in general is in decline, at least when com-
pared to other kinds of media consumption. In particular, young
people seem to be less and less interested in book reading. At the
same time, the Internet and mobile technologies offer many oppor-
tunities for enriching the book reading experience but these have not
been fully exploited as yet. Publishing houses believe that they need
to make a joint effort to address the problem and grasp the new op-
portunities. They also realise that the problem is complex and in
need of research if it is to be adequately addressed. The publishing
houses, together with a number of university researchers, have
therefore decided to launch a design science project to address this
problem by designing a novel artefact that will increase interest in
book reading. The project is called DIGIREAD and is further de-
scribed in Chapters 5 to 9.

What are the similarities and differences between the scientific
method and the design science method?
According to the Oxford English Dictionary, the scientific method is .. a
method or procedure that has characterized natural science since the
17th century, consisting in systematic observation, measurement, and
experiment, and the formulation, testing, and modification of hypothe-
ses ... One common version of the scientific method is the hypothetico-
deductive method, which is typically divided into four steps:
1 Ask a question. The researcher observes some phenomenon that is
novel, surprising, or interesting for some other reason. She attempts to

<!-- Page 55 -->
capture the relevant aspects of the phenomenon by asking a question
about it.
2 Form a hypothesis. The researcher comes up with and formulates a
hypothesis that is able to answer the question. This hypothesis often
includes a causal mechanism or a predictive model. The hypothesis may
also be made up of a set of smaller, interrelated hypotheses.
3 Deduce predictions from the hypothesis. Assuming the hypothesis is
true, the researcher identifies some consequences that must then hold,
i.e. she makes a number of predictions.
4 Check the predictions. The researcher performs observations to de-
termine whether the predictions are correct or not; if correct, the hy-
pothesis is strengthened, otherwise it is weakened.
The design science method is aligned with the scientific method. Its first
activity, Explicate Problem, is similar to Ask a question of the scientific
method, as both investigate a situation that is experienced as challeng-
ing. The difference is that in the scientific method, a question is asked,
while a practical problem is examined in design science. Step 2, Form a
hypothesis, is similar to activities 2 and 3 of the design science method,
which first identify requirements on an artefact and then design and
develop it. However, in the scientific method an answer is formulated in
the form of a hypothesis, while design science produces an artefact.
Steps 3 and 4 of the scientific method correspond to Evaluate Artefact
of the design science method, as both intend to show that the results
produced are satisfactory. Summarizing, steps 1 and 2 of the scientific
method, as well as activities 1 to 3 of the design science method, are
about discovery and invention, i.e. creating a new hypothesis or arte-
fact. Steps 3 and 4 of the scientific method, as well as activities 4 and 5
of the design science method, are about justification, i.e. ensuring that
the created hypothesis or artefact is adequate.

Further Reading
The design science method of this chapter is close to the one pro-
posed by Peffers et al. (2007), though we have omitted the commu-
nication activity and emphasized requirements elicitation. Other

<!-- Page 56 -->
similar methods have been proposed by March and Smith (1995)
and Vaishnavi and Kuechler (2004).

                             so

<!-- Page 57 -->
5 Explicate Problem

The first activity of the design science method is Explicate Problem.
The goal of this activity is to formulate precisely the initial problem,
motivate its importance, and investigate its underlying causes. In
other words, it addresses the question:

      What is the problem experienced by some stakeholders of
      a practice and why is it important?

The answer to this question primarily consists of descriptive
knowledge about the characteristics and environment of the prob-
lem. Sometimes, the answer will also include explanatory knowledge
about problem causes.
    As discussed in Chapter 1, a problem is an undesirable state of
affairs, or more precisely, a gap between the current state and a de-
sirable state. For example, suppose that several customers complain
about the long delivery times of a company. The customers expect
the time from order placement to product delivery to be less than
one week (desirable state) instead of the current three weeks (cur-
rent state). Thus, this is the gap, which constitutes the problem.
    The gap between the desirable and the current state is not al-
ways made explicit when a problem is discussed. Often, the gap is so

<!-- Page 58 -->
obvious that knowledge of the current state is sufficient to conclude
that a problem exists. For example, if many customers of a company
complain about delivery times, its management will realise that cus-
tomers are dissatisfied and that there exists a problem to be ad-
dressed. In this case, the desirable state is not explicitly stated. In
other cases, a problem may become apparent only when someone
suggests a more desirable state of affairs. For example, suppose that
no customer has complained about the delivery times, but a competi-
tor states in a marketing campaign that its delivery time is only three
days from order placement. If the management interprets this as a
threat, there will be a problem, although the current state was not
viewed as undesirable in itself.
    Not only threats but also opportunities can be viewed as prob-
lems. An example is an organization that receives information from
its ERP vendor that mobile phones can be integrated with its ERP
system. Thereby, the employees can access the system from any-
where, which will increase their productivity. Therefore, the prob-
lem is that the organisation currently does not work as productively
as possible, because its employees do not benefit from this oppor-
tunity of mobile technology.
    The activity Explicate Problem can be structured and visualized
using the IDEFO technique, see figure 5.1. The input is an initial prob-
lem that can be vaguely formulated. The output is an explicated
problem, which is precisely defined, well-motivated and put into a
context. The resources used by the activity consist of knowledge in
the research literature and other written sources, as well as infor-
mation from relevant stakeholders. The controls are primarily re-
search strategies and methods but may also include other practice-
based approaches to problem elicitation and representation.

<!-- Page 59 -->
                                                  Research strategies
                                Controls          Research methods
                               described
                                 in 5.3
                                                                                 Output
                                                                                described
                                                                                before 5.1

       Initial   Explicate Problem                                            Explicated
    problem                                                                   problem
                                                                                      .-
                    Define                Motivate           Find root
                   precisely              problem             causes

                          Sub-activities ......
                           described                                              ~
                             in 5.1               Previous research       Resources
                                                  Stakeholder interests   described
                                                  and views                 in 5.2

                          Figure 5.1 Explicate Problem

5.1 Sub-activities of Explicate Problem
When the initial practical problem is obscurely expressed or incom-
pletely understood, there is a need to investigate it, so that research-
ers can suggest an appropriate solution. However, in some cases, the
initial problem is already understood and clearly articulated, mean-
ing that the Explicate Problem activity will be small. Problem expli-
cation consists of three main sub-activities: making the problem def-
inition as precise as possible, motivating the problem and finding
root causes.

Define precisely
A problem should be defined as precisely as possible so that differ-
ent people understand it in the same way. A problem definition is
made more precise by reducing the number of ways in which it can
be understood and interpreted. For example, a problem definition
such as "non-integrated IT systems result in long delivery times for
organisations" is vague and may be interpreted in many different
ways. It can be made more precise by being reformulated as "the lack
of integration of IT systems supporting the order management pro-

<!-- Page 60 -->
cess and the delivery process, results in long delivery times for or-
ganisations". The second definition has fewer possible interpreta-
tions than the first one. In general, precise problem definitions are to
be preferred over less precise ones, as they support people better to
develop a common view of a problem. However, highly precise prob-
lem definitions can sometimes be difficult to quickly grasp and un-
derstand.

Motivate Problem
A problem should always be well motivated so that people can agree
it is worthwhile to address. The problem should be significant for
some practice, i.e., viewed as important by stakeholders who want to
find a solution to it Furthermore, the problem should be of general
interest, i.e., it should not matter only to a single local practice. The
problem should also be challenging, in the sense that a solution to it
does not already exist. Sometimes a problem can be original, which
is particularly common when technological innovations have created
new opportunities. The motivation of a problem may also include its
ethical and societal consequences.

Find Root Causes
In an early stage, a problem often expresses some symptom of un-
derlying causes that are as yet unknown. In order to address the
problem effectively, a so-called root cause analysis can be per-
formed, where the underlying causes are identified, analysed and
represented. By addressing these causes, better results can be
achieved than by only treating the symptoms of the problem. For
example, an initial problem may be expressed as "the company has
delivery times that are too long". A root cause analysis may indicate
that the main reason for this problem is the lack of integration be-
tween the IT systems managing the order management process and
the delivery process. Consequently, time-consuming manual admin-
istrative work has to compensate for the lack of systems integration.
Thus, the underlying problem can be defined as "non-integrated IT

<!-- Page 61 -->
systems result in long delivery times for the organisation". The focus
may then shift from the initial problem to this underlying problem.
     One widespread tool for representing problem causes is the Ishi-
kawa diagram (also called cause-effect diagram or fish bone dia-
gram), see figure 5.2 for an example. An Ishikawa diagram is a graph-
ical tool used to investigate and represent potential causes of a prob-
lem. It consists of a main horizontal line representing the problem
and associated slanting lines representing direct problem causes,
which in their turn may be related to additional lines representing
indirect problem causes. The causes can also be classified into differ-
ent categories, as indicated in figure 5.2.

                      Figure 5.2 Ishikawa diagram

5.2 Resources for Explicate Problem
The results of the activity should be based on and compared with
existing related work Therefore, the researcher needs to investigate
what previous research has addressed similar problems and existing
solutions. Not just research literature can be used but also other
sources, e.g., newspaper articles and white papers.

<!-- Page 62 -->
    In some cases, a researcher can base a problem explication solely
on literature, but usually she also needs to directly study partici-
pants and stakeholders of relevant practices. Stakeholders in the
practices may themselves express views and opinions about a prob-
lem, which then are to be interpreted by the researcher. She can also
gain a better understanding of the practices by observing partici-
pants in their daily activity. Furthermore, the researcher will often
need to study different groups of stakeholders, e.g. managers, em-
ployees and customers, as they may have different views and
knowledge about various aspects of the problem. By combining con-
tributions from different stakeholder groups, the researcher can
achieve a deeper and more complete explication of the problem.

5.3 Strategies and Methods for Explicate Problem

Research Strategies for Explicate Problem

Surveys
Surveys can be used for eliciting problem statements from a large
group of stakeholders. Thereby, they provide an overview of prob-
lems experienced by, for example, managers, employees, end-users
and customers. In many cases, different stakeholders have different
views of the problem at hand, and a survey can make these differ-
ences explicit. However, a survey is typically not an effective instru-
ment for eliciting a deep and elaborated problem analysis from
stakeholders.
Case studies
Case studies can provide a deep understanding of the practice in
which the initial problem emerged. This establishes a firm grasp of
the root causes to the problem as well as the stakeholders' views on
the problem. However, case studies are complex undertakings that
heavily rely on the skills and experiences of the researcher perform-
ing them. This dependency on the individual researcher may be a

<!-- Page 63 -->
drawback, as she may have interests and preconceptions that can
bias the research work.
Action research
Action research requires an active engagement of researchers in a
practice. The competence and experiences of the researchers may
offer fresh perspectives on the problem that are not obvious to the
stakeholders of the practice. Furthermore, new and more important
problems can emerge when the researchers are discussing opportu-
nities and presenting solutions to the stakeholders. However, the
dependency on the researchers is strong due to their active partici-
pation in the practice. Therefore, there is a risk that their interests
and preconceptions will have too much influence on the problem
explication.
Grounded Theory
Grounded theory is a research strategy in which pure empirical facts
have a strong impact on the explication of a problem. The research-
ers start by gathering facts about the domain under consideration.
Based on these facts, they suggest a first problem explication, which
is tested against further empirical facts from the domain, resulting in
a refined problem explication. The iterations between fact gathering
and problem explication refinement continue until further empirical
facts have no effect on the problem explication. An advantage of
grounded theory is the lack of any restriction by any specific theoret-
ical view that may limit the researchers. However, this is also a dis-
advantage, as a theoretical lens can support the researchers in find-
ing new perspectives on the problem.
Ethnography
The research strategy ethnography allows a researcher to under-
stand the culture of a practice in depth. Thereby, she is able to see
the problem not only as an outsider but also from the stakeholders'
point of view. Furthermore, based on her competence and experi-
ence, the researcher may understand the structures behind the
stakeholders' views and actions, which they themselves might not

<!-- Page 64 -->
recognise. This knowledge can allow the researcher to arrive at a
deep and rich problem explication. However, because ethnographical
studies are time-consuming, she may only be able to understand a
limited number of stakeholders, while other stakeholders may not be
considered. The outcome of this research strategy also heavily relies
on the competence and experience of the researcher.

Research Methods for Explicate Problems

Interviews
Interviews allow a researcher to engage in a dialogue with a re-
spondent in order to explicate a problem in an interactive and crea-
tive way. This is possible because the researcher, based on the re-
spondent's initial answers, can ask follow up questions. A drawback
of interviews is the dependency on the perspective and interests of
the respondent, but this problem can be mitigated by interviewing
several respondents.
Group discussions
A group discussion is a research method where several respondents
in conversations may inspire each other to identify and define prob-
lems in a domain. However, there is a risk that dominant individuals
in such a discussion have too great an impact so that other opinions
are not voiced. Therefore, it may be necessary for a skilled modera-
tor to manage a group discussion.
Questionnaires
A questionnaire is a form that contains predefined written questions.
A main benefit of using questionnaires for data generation is that
they can easily, and with low cost, be distributed to a large number
of respondents. A drawback is that a researcher and a respondent
cannot discuss a problem situation informally and creatively. Anoth-
er drawback is that respondents can interpret the written questions
of a questionnaire in different ways.

<!-- Page 65 -->
Observation studies
In an observation study, researchers can observe the behaviour of
people in a practice. A benefit of the method is that researchers,
based on their competence and experience, can identify problems
and circumstances that are not apparent to the people under obser-
vation. A drawback is that the method requires highly skilled re-
searchers to interpret the actions and interactions of the people in-
vestigated. There is also a risk that the interests and preconceptions
of the researchers may influence their interpretations in unwanted
ways.
Document studies
A document study is a form of an observation study but the focus is
on written documents, not actions. Written documents can expose
contradictions in a practice and, therefore, be a valuable source for
identifying and defining problems. However, the method requires
skilled researchers for interpreting the documents. There is also a
risk that some documents only show the official view of some actor
and may hide existing problems.

5.4 Guidelines for Explicate Problem
The results of the problem explication will govern the rest of the
research process. Therefore, a thorough problem explication will be
valuable for all the other design science activities. The following
guidelines can be used to support problem explication.
       Position the problem! Clarify in which practice the problem
       appears.
       Formulate the problem precisely! Describe the problem in a
       precise but also concise, easily understandable manner.
       Motivate the problem! Explain why the problem is important
       and for whom.
       Ensure the problem is of general interest! Make clear that the
       problem is of interest not only to a local practice.

<!-- Page 66 -->
       Ensure the problem is solvable! Define and analyze the prob-
       lem so that it becomes small enough to be solved.
   -   Specify the sources of the problem! Describe the literature and
       the stakeholders that have previously identified, studied and
       experienced the problem.
       Describe how you have explicated the problem! Explain what
       you have done to explicate the problem, in particular how
       you have reviewed the stakeholders and research literature.

5.5 Running Example
The first activity for DIGIREAD, presented in Section 4.7 as a running
example, was to explicate the problem. There were three sub-
activities: defining the problem precisely, motivating the problem
and finding the root causes.
    The first sub-activity was to define the problem precisely in or-
der to reduce the number of ways in which it might be understood
and interpreted. The initial problem was formulated: book reading is
in decline. In order to formulate this still more precisely, a thorough
empirical survey could then have been carried out. However, in this
case, the sub-activity was based on public statistics showing that
people between the ages of 15 - 25 in particular spend less time
reading books today compared to people of the same age either 5 or
10 years ago. A more precise problem was therefore formulated as:
book reading is in decline among people between the ages of 15- 25.
    The second sub-activity was to motivate the problem so that the
stakeholders can agree it is worthwhile to address it. For the pub-
lishing houses, this is clearly a major problem as it threatens future
sales.
    The third sub-activity was to find the root causes of the problem
so that better results could be achieved than by simply treating the
symptoms of the problem. In this case a thorough investigation was
carried out by the researchers, and a survey was chosen as the re-
search strategy. The survey targeted young people who had given up
book reading in favour of social media interaction, web browsing,

<!-- Page 67 -->
watching television or other kinds of media consumption. Five hun-
dred randomly selected persons between the age of 15 - 25 were
asked about their media preferences. The ten per cent least commit-
ted to book reading was then selected for a second questionnaire.
This questionnaire consisted mainly of open questions, where the
respondents were encouraged to explain why they had abandoned
reading books. The answers were analysed using content analysis,
and a number of root causes were identified. Finally, media theory,
in particular critical media theory, was used to identify further caus-
es for the current decline in reading. The most important causes
identified were the following:
         Paper books are awkward to handle
         It is wearisome to read long texts
         Books are not interactive
         Books and book contents cannot easily be shared
         Book contents are not easily combined
         Many people see publishing houses as promoting their own
         interests
The Explicate Problem activity is summarized in figure 5.3.
                                             Controls:               Output (root
                                             Survey on media         causes)·
                                             consumption             -Paper books
                                             Open questionnaire      awkward to
                                             Content analysis        handle
                                         1                           - Weariso me to
                                                                     read long texts
         Input:     Explicate Problem                                - Books not
 Boo k reading                                                       interactive
     n decline                                                       - Book~n at
                        Define        Motivate           Find root   easily sha red
                       precisely      problem             causes     - Book co ntents
                                                                     not mashable
                                                                     - Publishi ng
                                                                     houses
                                             Resources:              experien ced as
                                             Media theory            self fulfilli ng
                                             Critical media theory   . ..

                  Figure 5.3 Explicate Problem in the running example

<!-- Page 68 -->
Further Reading
A classic text on problem analysis and solving was written by Polya
(1973), although it is quite mathematically oriented. Ritchey (2007)
gives an easily accessible introduction to wicked problems. Ishikawa
diagrams are described on the web page Cause and Effect Analysis
(2012).

<!-- Page 69 -->
6 Outline Artefact
    and Define Requirements

The second activity of the method is Outline Artefact and Define Re-
quirements. The goal is to identify and outline an artefact that can
address the explicated problem and to define requirements. In other
words, the activity addresses the question:

      What artefact can be a solution for the explicated problem
      and which requirements on this artefact are important for
      the stakeholders?

Answering this question can be viewed as an extended problem ex-
plication. In other words, in this activity, researchers will continue to
explicate further the problem, but they will do so using the proposed
solution outline as a pair of glasses for guiding their problem exami-
nation. Thus, the question is to be answered by descriptive
knowledge that specifies which requirements on the artefact are
important for the stakeholders.
    The requirements will primarily address the function and con-
struction of the artefact but also the relationships to its environment.
Functional requirements depend on the problem to be addressed, as

<!-- Page 70 -->
well as the needs and wants of the stakeholders. Some examples of
functional requirements for an electronic health record system could
be to provide storage of X-rays, to enable doctors to enter infor-
mation that will be unavailable to patients, or to allow patients to
enter information on their self-medication. As can be seen from this
example, functional requirements are often very specific to the situa-
tion at hand. In contrast requirements pertaining to construction
and environment are often more generic. Examples on construction
requirements for the health record system could be that it should
have a coherent and modular design. Examples on environment re-
quirements could be that the system should be available on different
platforms and be easy to adapt to changes. Non-functional require-
ments is a term encompassing both construction requirements and
environment requirements.
                                                 Research strategies
                                Controls         Research methods
                               described
                                 in 6.3
           ~
     nput                                                                       Outp ut
 described in                                                                  described
  Chapter 5                                  r                                 before 6.1

   Explicated     Outline Artefact and Define Requirements Artefact outline
     problem                                                                and requi rements

                                                         Define
                      Outline artefact
                                                      requirements

                            Sub-activities
                             described
                               in 6.1            Previous research       Resources
                                                 Stakeholder interests   described
                                                 and views                 in 6.2

                Figure 6.1 Outline Artefact and Define Requirements
    The activity Outline Artefact and Define Requirements can be
structured and visualized using the IDEFO technique, see figure 6.1.
The input is an explicated problem provided by the previous activity.
The output is an artefact outline and a set of requirements. The re-
sources used by the activity consist of knowledge in the research
literature and other written sources, as well as assertions from

<!-- Page 71 -->
stakeholders. The controls are primarily research strategies and
methods but may also include practice-based approaches to re-
quirements elicitation and analysis.

6.1 Sub-activities of Outline Artefact and Define Re-
quirements
The activity includes two main sub-activities: outline artefact and
define requirements.

Outline Artefact
The sub-activity outline artefact starts by choosing which artefact
type should be designed in order to solve the problem, i.e. choosing
whether the solution should be a construct, a model, a method or an
instantiation. This choice is sometimes simple due to the characteris-
tics of the explicated problem. In other cases, it can be more difficult
to choose the artefact type to be designed. For example, if IT systems
need to be integrated to make a process more efficient, a solution
can be a method for integrating IT systems, a model of an integration
architecture, or an instantiation in the form of an integration tool.
When the artefact type has been chosen, the artefact is to be de-
scribed on an overview level.

Define Requirements
The second sub-activity is to define the requirements on the outlined
artefact. The requirements to include depend on the characteristics
of the problem, the outlined solution, technological opportunities,
previous research including documented solutions to similar prob-
lems, and stakeholder interests and opinions.

Should requirements be formulated in terms of a solution?
Short answer: No
Long answer: Consider the following two requirements for an electronic
health record system:

<!-- Page 72 -->
1 Physicians should be able to search for health records based on any
patient characteristic
2 Physicians should be able to search for health records based on any
patient characteristic using a relational database management system
Which requirement is to be preferred? The second one is more specific
and, therefore, may seem to be preferable. However, this requirement
restricts the designer to one single solution, a relational database man-
agement system, even if this would not be the best way of providing
search capabilities to physicians. In general, including solutions in re-
quirements formulations restricts the designer in devising the best pos-
sible solution. Therefore, requirements should not be expressed in
terms of specific solutions.

6.2 Resources for Outline Artefact and Define Require-
ments
The results of the activity should always be based on and related to
existing work. The researcher needs to report on previous research
that has been carried out to solve similar problems, what artefacts
have been designed and developed in that research, and what re-
quirements have been addressed. Even if no other artefact has been
designed previously to solve the same problem, or focus on the same
requirements as in the current work, the researcher should still
specify whether similar solutions exist and in what ways they differ
from the proposed artefact. Thereby, the requirements will be given
a context that supports both researchers and practitioners in as-
sessing the originality and significance of the artefact.
    Another basis for the activity consists of the interests and opin-
ions of stakeholders. An investigation to determine these may in-
clude many different groups of stakeholders in one or several local
practices. The stakeholders may hold differing opinions about the
requirements, including their relative importance. Therefore, it is
often worthwhile to ask the stakeholders to rank suggested re-
quirements with regard to importance.

<!-- Page 73 -->
6.3 Research Strategies and Methods for Outline Arte-
fact and Define Requirements

Research Strategies for Outline Artefact and Define Requirements

Surveys
Surveys can be used for eliciting requirements directly from stake-
holders. They offer a relatively low-cost approach, in terms of time
as well as other resources, to identifying requirements. Therefore,
surveys make it possible to investigate the needs and wants of many
people and different kinds of stakeholders, such as managers, em-
ployees, end-users, and customers. This comprehensive coverage
increases the likelihood of finding all potentially relevant require-
ments and ensures that all stakeholder groups' voices are heard.
However, there is a risk that surveys will result in incomplete re-
quirements when stakeholders are not prepared to spend a suffi-
cient amount of time and effort on providing information. Further-
more, the stakeholders may miss identifying requirements because
they have limited knowledge or are biased in various ways. In other
words, surveys as an instrument for requirements elicitation are
dependent on the commitment, knowledge and interests of the
stakeholders.
Case studies
Case studies can overcome some of the limitations of surveys for
requirements elicitation. In particular, case studies offer opportuni-
ties for investigating stakeholder needs and requirements as well as
their practice in greater depth over an extended period of time. Fur-
thermore, a researcher can identify requirements even if a stake-
holder does not explicitly state them. The deeper understanding
provided by a case study and the reduced dependency on stakehold-
ers can result in more complete and relevant requirements. Howev-
er, case studies are time-consuming, their outcomes depend heavily
on the competence of the researcher and they can also be biased by
her interests and preconceptions. Furthermore, a case study is al-

<!-- Page 74 -->
ways carried out in a single local practice, which can limit the gener-
alisability of the results.
Action research
The advantages and disadvantages of action research for require-
ments elicitation are similar to those of case studies. However, the
dependence on the researcher is even greater in action research than
in case studies, as she is to actively participate and intervene in a
practice. There is a risk that she forces her own views on the stake-
holders and comes up with requirements that are not particularly
relevant for them. On the other hand, the researcher may be essen-
tial for suggesting requirements when her knowledge exceeds that of
the stakeholders. This is often the case when a novel artefact is to be
designed and introduced in a practice, and its stakeholders have only
a limited understanding of the potential of the new artefact. The re-
searcher can then inform and guide the stakeholders so that they
become able to identify and articulate relevant requirements.
Theoretical analysis
In some situations, it may not be feasible to carry out empirical stud-
ies for eliciting requirements, and instead theoretical analysis has to
be used. Such situations primarily occur when the artefact to be de-
signed is truly novel, and it is still unclear how to use it in practice. A
theoretical analysis may then suggest preliminary requirements
based on possible usage scenarios. An obvious drawback of this ap-
proach is that it may become highly speculative and dependent on
the competence, imagination and preconceptions of the researcher.
Thus, the requirements identified through a theoretical analysis are
usually not well-founded, but they can still function as a first step
towards designing a highly novel artefact.

Research Methods for Outline Artefact and Define Requirements

Interviews
Interviews may be the most common method for gathering require-
ments. Interviews usually take a direct approach to requirements

<!-- Page 75 -->
elicitation by asking stakeholders about features that they would like
to see included in the outlined artefact and which explicit require-
ments they suggest. Interviews can be highly efficient and result in a
large number of requirements in a short time. However, they may
easily become stale and stifle creativity, which is obviously counter-
productive for identifying requirements. To some extent, this prob-
lem can be reduced by using unstructured interviews that encourage
the respondent to take more initiative. Another issue is that an inter-
view may only be effective if the respondent is competent and ap-
plies sufficient time and effort, which may not always be the case. In
addition to directly asking for requirements, interviews can be used
for increasing the understanding of the respondent's practice as well
as her attitude to the artefact under consideration.
Group discussions
Group discussions can overcome some of the disadvantages of inter-
views for direct requirements elicitation. When people meet, discuss
and brainstorm in groups, the chances increase that more imagina-
tive and creative requirements will be suggested. This is especially
so if people with different backgrounds and competences are includ-
ed in the same group; they will be able to surprise, inspire and en-
courage each other to come up with novel requirements. However,
as always in group discussions, there is a risk that one or a few per-
sons will dominate, which may reduce the willingness of others to
offer suggestions for requirements. A moderator who makes sure
that everyone gets a chance to contribute can mitigate this to some
extent.
Questionnaires
Questionnaires have the same advantages and disadvantages as in-
terviews but often to an even higher degree. Questionnaires are in-
expensive to distribute, which makes it possible to get suggestions
for requirements from many stakeholders. However, filling in a ques-
tionnaire does not invite much creativity, meaning that innovative
requirements rarely can be expected. On the other hand, question-

<!-- Page 76 -->
naires can be effective for ranking the importance of requirements
that have already been identified through other methods.
Observation studies
Observation studies can be used for getting a better understanding
of the practice in which an artefact will be used, which can provide
clues for additional requirements. In this way, observation is used as
a means for a researcher to generate requirements herself. Observa-
tion studies are effective when it cannot be expected that the stake-
holders themselves are able to generate all relevant requirements,
typically because they have a limited understanding of the outlined
artefact. The value of the requirements produced through observa-
tion studies relies heavily on the competence of the researcher.
Document studies
Document studies can complement other methods for requirements
elicitation, or be an alternative when access to stakeholders is lim-
ited. Document studies can improve the understanding of the prac-
tice under consideration, which may provide clues for requirements,
analogously to observation studies.

6.4 Guidelines for Outline Artefact and Define Require-
ments
   -    Specify what artefact to build! Specify the artefact type (con-
        struct, model, method, instantiation) and its general charac-
        teristics.
        Formulate each requirement clearly! Describe each require-
        ment in a precise, concise and easily understandable way.
   -    justify each requirement! For each requirement, explain why
        it is needed and relate it to the problem.
        Be realistic but also original! Ensure that it is realistic to de-
        velop an artefact fulfilling the requirements but also try to be
        original.

<!-- Page 77 -->
   -   Specify the sources of the requirements! Describe the litera-
       ture and the stakeholders that have contributed to defining
       the requirements.
       Describe how you have defined the requirements! Explain
       what you have done to define the requirements, in particular
       how you have reviewed the stakeholders and research litera-
       ture.

6.5 Properties for Generic Requirements
Most requirements on an artefact are situation specific, in particular
those concerning its function. However, there are also a number of
generic requirements that are relevant for almost any artefact, e.g.
that it should be easy to use or have a modular design. This section
introduces a set of properties that are useful when defining such
generic requirements. Based on the distinction between construction
and environment, the properties are divided into internal properties
that describe the inner structure of the artefact, and external proper-
ties that describe the relationship between the artefact and its envi-
ronment. Furthermore, the external properties are divided into us-
age properties that describe how the artefact works and is perceived
in use situations; management properties that describe how the ar-
tefact is managed over time; and generic external properties that
mainly describe how the artefact is structurally related to its envi-
ronment.
     The suggested properties can be used as inspiration for formu-
lating generic requirements in an early stage of a design science pro-
ject. They can also be used as validation support of already formulat-
ed requirements. Thereby important but missed requirements can
be identified.

Internal Properties
Internal properties describe the inner structure of an artefact.
       Coherence - the degree to which the parts of an artefact are
       logically, orderly and consistently related. Coherence is low if

<!-- Page 78 -->
        an artefact includes parts that, in some sense, do not fit in
        with the rest of the artefact.
        Consistence (only for models) -the degree to which a model
        is free from conflicts.
        Modularity - the degree to which an artefact is divided into
        components that may be separated and recombined. Com-
        mon requirements related to modularity are low coupling,
        that modules are not overly related with each other; high co-
        hesion, that modules are highly related internally; and high
        composability, that modules can be easily replaced and re-
        combined.
        Conciseness - the absence of redundant components in an ar-
        tefact, i.e. components the functions of which can be derived
        from other components.
        Elegance - the degree to which an artefact is pleasing and
        graceful in appearance or style.

External Properties
External properties describe the relationships of an artefact to its
environment, for example to users or other artefacts.
Usage
Usage properties describe how the artefact works and is perceived in
use situations.
        Comprehensibility - the ease with which an artefact can be
        understood or comprehended by a user (also called under-
        standability).
        Leamability - the ease with which a user can learn to use an
        artefact.
        Usability - the ease with which a user can use an artefact to
        achieve a particular goal.
        Customisability - the degree to which an artefact can be
        adapted to the specific needs of a local practice or user.

<!-- Page 79 -->
   -      Suitability - the degree to which an artefact is tailored to a
          specific practice, focusing only on its essential aspects (also
          called inherence or precision).
   -      Accessibility - the degree to which an artefact is accessible by
          as many users as possible.
          Traceability (only for methods) -the ability to verify the his-
          tory of using a method by means of documentation.
Management
Management properties describe how an artefact is managed over
time.
   -      Maintainability- the ease with which an artefact can be main-
          tained in order to correct defects, meet new requirements,
          make future maintenance easier, or cope with a changed en-
          vironment.
          Flexibility - the ease with which an artefact can be adapted
          when external changes occur (similar to maintainability; re-
          lated notions are configurability, evolvability and extensibil-
          ity).
   -      Accountability - the ease with which an actor can be made ac-
          countable for the workings of an artefact (a similar notion is
          auditability).
Generic
Generic properties mainly describe how the artefact is structurally
related to its environment.
   -      Expressiveness (only for constructs and models) -the degree
          to which a set of constructs or a model is capable of repre-
          senting the entities of interest in a domain.
          Correctness (only for models) -the degree to which a model
          corresponds to the domain it represents (also called accu-
          rateness).
          Generality - the degree to which an artefact is relevant not
          only for a local, but also for a global practice.

<!-- Page 80 -->
       Interoperability (only for instantiations) - the ability of an ar-
       tefact to work together with other artefacts, in particular to
       exchange data (related notions are openness, compatibility
       and standards compliance).
   -   Autonomy (only for instantiations)- the capacity of the arte-
       fact to function without the involvement of another system.
       Proximity (only for models) -the degree to which independ-
       ent aspects of a domain are captured by different constructs,
       and related aspects are represented by related constructs.
       Effectiveness - the degree to which an artefact is able to
       achieve its goals (a special case is completeness).
       Efficiency - the degree to which an artefact is effective with-
       out wasting time, effort or expense.
       Robustness (only for instantiations) - the ability of an artefact
       to cope with failures, errors and other problems during exe-
       cution (related notions are degradability, survivability and
       safety).

6.6 Running Example
The second DIGIREAD activity was to outline an artefact and define
the requirements. First the artefact was outlined. This meant decid-
ing artefact type and the basic characteristics of the artefact. The
research project came to the conclusion that a possible solution to
the problem could be the introduction of a novel service that pro-
vides interactive and collaborative book reading using multimedia.
Thus, the artefact was an instantiation in the form of a service, which
will provide interactive and collaborative book reading using multi-
media.
     In order to define the requirements of the artefact, a survey of
user needs was initiated. A focus group was set up to generate data,
which included frequent book readers as well as non-readers. A usa-
bility and a social media expert also participated. The group met
twice and produced an extensive list of possible requirements, most
of which pertained to the functionality of the service. Emerging theo-

<!-- Page 81 -->
ries about social media were also investigated to help refine the
identified requirements. Existing services for book sharing were
studied, e.g. Amazon and Rethink Books. In order to prioritize the
requirements, a questionnaire was distributed to the same people
who had participated in the problem explication study. Examples of
the most highly prioritized requirements for the service were:
       It should be possible to share book snippets over various
       channels (functional requirement)
       The owner of a book should be able to lend it to others using
       the service (functional requirement)
       It should be possible to read the first chapters of books for
       free (functional requirement)
       It should be possible to write and share book reviews inde-
       pendently of any book seller (functional requirement)
       The service should support searching and discovering books
       based on reviews (functional requirement)
       It should be possible to include other media, such as audio
       and video, in the text flow (functional requirement)
       It should be possible to move seamlessly between devices
        (environmental requirement, usability and interoperability)
       The service should integrate with social media services such
       as Facebook, Twitter and Google+ (environment require-
       ment, interoperability)
       The service should be independent of platform and easy to
       adapt to mobile platforms such as Android and iOS (envi-
       ronment requirement, interoperability)
       The service should be easy to use (environment requirement,
       usability)
The Outline Artefact and Define Requirements activity is summa-
rized in figure 6.2.

<!-- Page 82 -->
                                                Controls:                Output'
                                                Survey on user needs     A service is to be
                                                Focus group              develope d
                                                Questionnaire            (instantiation)
         Input:                                                          Require ments:
   E xplicated                          '                                -Book snippets
  problem in      Outline Artefact and Define Requirements               shall be sharable
  the form of                                                            over various
 root causes
             ..                                         Define
                                                                         channels
                                                                         - Book'Owners
                     Outline artefact                                    shall be able to
                                                     requirements
                                                                         lend their books
                                                                         -First ch apters of
                                            ~                            books shall be
                                                Resources:               available for free
                                                Social media theory      ...
                                                Existing services like
                                                Amazon and Rethmk
                                                Books
       Figure 6.2 Outline Artefact and Define Requirements in the example

Further Reading
Requirements elicitation has for a long time been studied in the area
of requirements engineering. An established textbook in the area
was written by Sommerville and Sawyer (1997). A recent textbook
on requirements engineering was written by Pohl (2010).

<!-- Page 83 -->
7 Design and Develop Artefact

The third activity of the method is Design and Develop Artefact, the
goal of which is to create an artefact fulfilling the requirements de-
rived from the previous activity. This includes designing both the
functionality and construction of the artefact. In other words, the
activity can be described as:

      Create an artefact that addresses the explicated problem
      and fulfils the defined requirements

The result of this activity will primarily be prescriptive knowledge,
which can be embedded in the created artefact, see Section 2.2. Fur-
thermore, the activity will produce descriptive knowledge about the
design decisions taken and their rationale.
    The activity Design and Develop can be structured and visualized
using the IDEFO technique, see figure 7.1. The input is an artefact
outline and a set of requirements as provided by the previous activi-
ty. The output is an artefact fulfilling these requirements and
knowledge about it. The resources used by the activity consist of
knowledge from the research literature and other written sources as
well as knowledge embedded in artefacts and assertions from rele-
vant stakeholders. The controls can include research strategies and

<!-- Page 84 -->
methods, and may also include any practice-based development ap-
proaches.
                                                      Research strategies
                                 Controls             Research methods
                                described             Creative methods
                                  in 7.3
              ~
       Input                                                                         Outp Ut
    described in                                                                    described
     Chap ter 6                                                                     before 7.1

  Artefact outline   Design and Develop Artefact                                 Artefact
and requ irements                                                                Artefact knowledge

                                                            Search and
                           Generate
                                                              select
                      I                       I
                             Sub-activities       ~
                              described                                             ~
                                in 7.1                Previous research     Resources
                                                      Existing artefacts    described
                                                      Stakeholder ideas       in 7.2

                     Figure 7.1 Artefact Design and Development

7.1 Sub-activities of Design and Develop Artefact
The activity Design and Develop Artefact includes two sub-activities.
The first, Generate, produces new possible solutions, while the se-
cond one, Search and select, evaluates and selects from the generat-
ed solutions. Thus, Design and Develop Artefact can be viewed as a
search process through a solution space (Simon, 1996). According to
this view, the designer starts with setting up a solution space con-
sisting of possible solutions and then pruning it. In practice, the sub-
activities are carried out in parallel and iteratively.

Generate
Generating innovative and useful design solutions is to some extent
always dependent on luck However, as Louis Pasteur observed in
1854, "Chance only favours the prepared mind". The mind can be-
come prepared through exploratory studies of potential users of the
artefact in their practices, using action research, and ethnography as
well as naturalistic observation.

<!-- Page 85 -->
     There also exist several practice based approaches for solution
generation. One of them is empathetic thinking in which a designer
tries "to see the world through the eyes of others, understand the
world through their experiences, and feel the world through their
emotions" (Brown, 2009). Empathetic thinking can help to expand
the designer's mind, thereby supporting the creation of novel solu-
tions. Another approach for generating solutions is de Bono's lateral
thinking (de Bono, 1973), who suggests a non-traditional way of rea-
soning. Instead of focusing on logical step-by-step arguments, de
Bono suggests a spectrum of practices for generating fresh ideas
including random generation, provocative generation such as wish-
ful thinking and exaggeration, challenge generation where anything
can be questioned, and disproval of generally accepted truths.
     One established instrument for generating ideas in groups is
brainstorming, where the participants aim to produce as many ideas
as possible, attempt to withhold criticism, encourage new and unu-
sual ideas, and try to integrate and improve ideas that have been
proposed. Brainstorming is a generic instrument for idea generation
that has been applied in many areas. For example, a goal of a brain-
storming session could be to identify important activities in a meth-
od for managing risks in agile software development projects. First,
the group could identify possible activities by trying to suggest and
write down as many as possible without any criticism. The next step
could be to eliminate duplicated activities or organise smaller activi-
ties into larger ones. Finally, the group can prioritise among the sug-
gested activities in order to select the most useful ones, thereby
moving to the search and select sub-activity.
     In the area of IT and information systems, there are also several
other more specialized instruments, like participative modelling,
walk-throughs and pair design. Participative modelling resembles to
some extent brainstorming but uses specific techniques for express-
ing ideas, such as goal, process and conceptual models. It also makes
use of certain tools for visualization and cooperative model devel-
opment, e.g. whiteboards, plastic sheets and post-its. A walk-through

<!-- Page 86 -->
is a kind of peer review, where a designer leads members of a devel-
opment team and other stakeholders through an artefact, for exam-
ple a method. The participants may ask questions, point out prob-
lems, suggest alternative solutions, or provide feedback in any other
form. Pair design, based on the agile practice of pair programming, is
a way of working where two designers work together and simulta-
neously develop an artefact. Typically, one designer makes a design
decision, e.g. introduces an activity into a method, and the other de-
signer immediately reviews it and suggests possible improvements
or potential problems. The instruments introduced here are certain-
ly not exhaustive but they provide a representative sample of tech-
niques used for supporting cooperative design work.

Search and Select
When a number of solutions have been generated, the designer
makes a first design decision, thereby pruning away parts of the so-
lution space. She continues and makes additional design decisions,
which further narrows the space. The process goes on and can be
viewed as a systematic exploration of the solution space. At each
step the designer is guided in her decision making by some criteria
and the requirements on the artefact. The guidance can sometimes
take the form of a goodness or utility function, which can be used to
determine which design decisions to make. Some authors have even
argued that the search process can be more or less automated using
AI techniques (Simon, 1996). Though this has not proved feasible,
the view of design as a search process is useful in supporting the
communication, documentation, planning and structuring of design
work.
    Generating solutions requires another kind of thinking than that
needed for selecting from given solutions. The difference is some-
times expressed in the notions of convergent and divergent thinking.
Convergent thinking in design aims at deciding among existing alter-
natives (sub-activity Search and select), while divergent thinking is
about generating new alternatives from which to choose (sub-

<!-- Page 87 -->
activity Generate). In other words, divergent thinking creates choices
in a solution space and is highly innovative and imaginative, while
convergent thinking makes choices, which can be more analytic and
rational.

7.2 Resources for Design and Develop Artefact
Designing and developing an artefact is a combination of reusing and
adapting components from existing solutions, inventing new compo-
nents, and combining them in an innovative way. Therefore, related
solutions need to be analysed by studying previous work, both in
research literature and artefacts used in practice. Even if the artefact
to be designed is highly original, the researcher should relate and
compare it to existing solutions.
    Another basis for this activity consists of ideas and opinions gen-
erated by stakeholders. While stakeholder input is almost always
essential for defining requirements, its value for design and devel-
opment is sometimes limited. Stakeholders may not be able to con-
tribute if the artefact being designed has a highly complex construc-
tion. However, if the artefact has a simpler structure, experienced
users may provide significant contributions, as witnessed by the
phenomenon of Open innovation (Chesbrough, 2005).
    Regardless of the resources used in creating a design, it is valua-
ble to document the design rationale, i.e. a listing of and argumenta-
tion about the decisions made during the design process. A design
rationale should contain the reasons and justifications behind design
decisions, alternative decisions considered, and the arguments lead-
ing to the decisions. A design rationale can support communication
during a single project, but it is also useful for facilitating reuse be-
tween different projects. In fact, a design rationale can be one of the
most valuable outcomes of a design science project, as it will record
the reasoning behind design decisions including potential pitfalls.
This knowledge can be of great value to subsequent projects, in par-
ticular it may help them avoid dead ends and other kinds of prob-
lems.

<!-- Page 88 -->
7.3 Research Strategies and Methods for Design and
Develop Artefact
Design and Develop Artefact differs from the other design science
activities in that it does not primarily aim to answer questions by
producing descriptive or explanatory knowledge. Instead, its main
purpose is to produce prescriptive knowledge by creating an arte-
fact. Therefore, research strategies and methods are less important
here than in the other activities. However, this does not imply that
research methods are without value for developing an artefact. On
the contrary, interviews, observation studies and other data genera-
tion methods can be highly effective in producing ideas for design
solutions. The point is rather that it is not critical that research
methods are used for coming up with possible solutions; any ap-
proach for generating solutions is admissible as long as it works.

7.4 Guidelines for Design and Develop Artefact
       Clearly describe each component of the artefact! Describe
       both the functionality and construction of each artefact com-
       ponent.
   -   justify each component of the artefact! Explain the purpose of
       each artefact component, in particular which requirement(s)
       it addresses.
       Describe the use of the artefact! Describe how the artefact and
       its components are intended to be used in its intended prac-
       tice.
       Clarify the originality! Describe in what respects the artefact
       is different from existing ones with respect to both function-
       ality and construction.
   -   Specify the sources of the artefact design! Describe the litera-
       ture and the stakeholders that have contributed to compo-
       nents of the artefact and/ or inspired the design of new com-
       ponents.

<!-- Page 89 -->
       Describe how you have designed and developed the artefact!
       Explain what you have done to design and develop the arte-
       fact, in particular how you have reviewed the stakeholders,
       existing solutions, and research literature.

7.5 Running Example
The third activity in DIGIREAD was to design and develop the arte-
fact. This activity consisted of generating and selecting solutions.
     The project first generated alternative solutions towards provid-
ing interactive and collaborative book reading using multimedia.
This was done by designing a set of service functions, their user in-
terface (UI) representations in the form of UI components and an
overall architecture of the service. This was carried out by a small
group of software engineers and the same usability expert who par-
ticipated in the requirements definition activity. The group made
frequent use of pair design to generate the service functions, the UI
components and the architecture, and was closely intertwined with
the requirements definition activity. As a knowledge base for the
activity, the group made use of software engineering techniques and
principles for service oriented architectures.
     The second sub-activity was to select one of the alternative solu-
tions generated, for further development. i.e., the service functions
and user interface components. This was supported by peer reviews
in the form of walk-throughs. The group decided to design a layered
architecture for the service. The reason for this choice was improved
flexibility and maintainability, though performance could suffer. The
Design and Develop activity is summarized in figure 7.2.

<!-- Page 90 -->
                                            Con tro Is:
                                            Pair design
                                            Peer reviews

                                        ,                          Output:
         Input:                                                    Prototype and
 Requ irements     Design and Develop Artifact                     architecture of
    0 n artifact                                                   service
               .                                                          ..
                                                   Search and
                        Generate
                                                     select
                   I                I
                                        ~
                                            Resources:
                                            Software Engineering
                                            Service Oriented
                                            Architecture

        Figure 7.2 Design and Develop Artefact in the running example

Further Reading
Many good books exist on the art of designing artefacts, e.g. those
written by Brown (2009) and Cross (2011), while a classical text is
(Simon, 1996). The relationships between design, explanation and
exploration are discussed by Gibbons and Bunderson (2005).

<!-- Page 91 -->
8 Demonstrate Artefact

The fourth activity of the method is Demonstrate Artefact, which
aims to demonstrate the use of the artefact in one case, thereby
proving its feasibility. In other words, the activity addresses the
question:

      How can the developed artefact be used to address the ex-
      plicated problem in one case?

The answer to this question will primarily consist of descriptive
knowledge describing how the artefact works in one case, but also
explanatory knowledge explaining why the artefact works.
    A demonstration shows that the artefact in fact can solve some
aspects of a problem in one illustrative or real-life case. A demon-
stration can be seen as a weak form of evaluation; if the artefact can
solve some aspects of a problem in one case it might be able to do so
in other cases as well. Furthermore, a demonstration can also help
communicate the idea behind the artefact to an audience in a vivid
and convincing way.
    The activity Demonstrate Artefact can be structured and visual-
ized using the IDEFO technique, see figure 8.1. The input is an arte-
fact provided by the previous activity. The output is a demonstrated

<!-- Page 92 -->
artefact including information on the workings of the artefact in one
case. The resources used by the activity consist of domain specific
knowledge about the artefact and its environment. The controls will
vary from case to case.
                                                    Research strategies
                                   Controls         Research methods
                                  described
                                    in 8.3
             ~
      nput                                                                         Outp ut
  desc ribed in                                                                   described
   Chapter 7                                    r                                 before 8.1

                       Demonstrate Artefact                                      Demon strated
      Artefact                                                                   artefact
                  ..
                  p

                            Choose or
                                                                                      ..
                                                         Apply artefact
                           design case

                               Sub-activities
                                described                                         ~
                                  in 8.1            Knowledge on the      Resources
                                                    case where the        described
                                                    artefact is applied     in8.2

                           Figure 8.1 Artefact Demonstration

8.1 Sub-activities of Demonstrate Artefact
The first sub-activity is to choose or construct a case on which to
apply the artefact This case can be a fictitious one developed by the
researchers who designed the artefact, a well-documented case from
literature, a real life case, or a combination of these. Cases from real
life typically provide better external validity, but fictitious cases can
sometimes be preferable as they can be designed to demonstrate the
viability of the artefact under extreme conditions. The second sub-
activity is to apply the artefact to the chosen case, which includes
documenting the outcome of the application.

8.2 Resources for Demonstrate Artefact
The resource needed for this activity is primarily knowledge regard-
ing the case in which to apply the artefact

<!-- Page 93 -->
8.3 Research Strategies and Methods for Demonstrate
Artefact
A research strategy is decided depending on the case chosen and the
characteristics of the artefact. Clearly, action research and case study
are natural choices when a real life case is used. Experiments are
useful for fictitious as well as literature cases.

8.4 Guidelines for Demonstrate Artefact
   -   justify the choice of case! Explain why the chosen case is rep-
       resentative of the problem and challenging enough to offer
       an adequate test bed.
       Make clear how much of the artefact is tested! Describe the
       components and aspects of the artefact that are actually used
       in the demonstration.

8.5 Running Example
The demonstration of the designed and developed service for inter-
active and collaborative book reading in the DIGIREAD project con-
sisted of two sub-activities: choose or design a case and apply the
artefact to the case.
     The researchers decided to design a case in the form of an exper-
iment. The case design included a number of tasks to be carried out
by users, including writing reviews, sharing book snippets via Twit-
ter, discovering new books based on reviews, and switching between
reading and listening to the same text.
     Ten presumptive users then carried out the experiment over the
course of a day. The users were given access to a prototype of the
service, which provided more than 90% of the required functionality
and included approximately 100 books. The users carried out the
tasks described above and the researchers then logged all service
interactions and analysed them using quantitative methods. The
experiment functioned as a proof-of-concept showing that the ser-

<!-- Page 94 -->
vice could actually be used as intended. The Demonstrate Artefact
activity is summarized in figure 8.2.
                                          Controls:
                                          Experiment
                                          Observations
                                          Questionnaire
                                     ,                          Output:
         Input:                                                 Proof of
    p rototype     Demonstrate Artefact                         concept
    0 f service                                                 of service
              ..        Choose or
                                              Apply artifact
                       design case

                                      ~

                                          Resources:
                                          Knowledge about the
                                          designed case

           Figure 8.2 Demonstrate Artefact in the running example

<!-- Page 95 -->
9 Evaluate Artefact

The fifth activity is Evaluate Artefact, which aims to determine how
well the artefact is able to solve the explicated problem and to what
extent it fulfils the requirements. In other words, the activity ad-
dresses the question:

      How well does the artefact solve the explicated problem
      and fulfil the defined requirements?

The answer to this question will primarily consist of descriptive
knowledge, but may also include explanatory knowledge explaining
why the artefact is able to solve the problem.
    The activity Evaluate Artefact can be structured and visualized
using the IDEFO technique, see figure 5.1. The input is an artefact
provided by the previous activity. The output is an evaluated artefact
including information on how well the artefact works and why. The
resources used depend on the evaluation strategy and can include
experts as well as sites for case studies or action research. The con-
trols can include any research strategy or method that can be used
for evaluation.

<!-- Page 96 -->
                                               Research strategies
                              Controls         Research methods
                             described
                               in 9.3
     Input                                                                      Outp ut
  described in                                                                 described
   Chap ter 8                              •                                   before 9.1

Demonstrated     Evaluate Artefact                                            Evaluated
     artefact                                                                 artefact
                       Choose
                                                     Carry out
                                                                                   ..
                      eval uation
                                                     evaluation
                       strategy

                          Sub-activities   ~
                           described                                      ~
                             in 9.1                               Resources
                                               Experts
                                                                  described
                                               Evaluation sites
                                                                    in 9.2

                         Figure 9.1 Evaluate Artefact

9.1 Sub-activities of Evaluate Artefact
The activity Evaluate Artefact includes two sub-activities. The first,
Choose evaluation strategy, determines how the evaluation is to be
caiTied out, while the second, Carry out evaluation, actually per-
forms the evaluation.

Choose evaluation strategy
There are two main strategies: ex ante and ex post evaluation. Ex
ante evaluation means that the artefact is evaluated without being
used, while ex post evaluation requires the artefact to be employed.
    An ex ante evaluation often makes use of interviews, where ex-
perts express their views on an artefact. The experts base these
views on their general knowledge as well as experience of similar
artefacts and their applications. For some requirements, e.g., modu-
larity and coherence, an ex ante evaluation can provide both valid
and reliable results. For other requirements, e.g., usability and effec-
tiveness, the views of the experts can be rather speculative. In gen-
eral, the main drawback of an ex ante evaluation is its heavy reliance

<!-- Page 97 -->
on the subjective judgments of experts, while the main benefit is its
low cost.
     An ex ante evaluation sometimes consists of arguments provided
by the researchers who developed the artefact. In this case, they
evaluate it by reasoning and arguing that it fulfils the defined re-
quirements and can solve the explicated problem. This form of eval-
uation is sometimes called informed argument. A common line of
reasoning using informed argument is to claim that the artefact ful-
fils a requirement because it has a certain construction. For example,
it can be argued that a new MMORPG is easy to learn because its in-
terface is similar to that of World of Warcraft. Informed argument is
obviously a weak form of evaluation, as it may easily be biased by
the backgrounds and interests of the researchers. However, in-
formed argument is inexpensive and is often used when evaluating
highly innovative and still immature artefacts. Researchers may use
informed arguments at informal presentations or research work-
shops. Based on feedback from other researchers, the artefact can
then be refined before a stronger form of evaluation is carried out.
     While ex ante evaluations are often weak, ex post evaluations can
be considerably stronger. Such evaluations require that an artefact is
actually put into operation before being evaluated. In contrast to ex
ante evaluations, an ex post evaluation can preferably be employed
to evaluate the usability of an artefact including its comprehensibil-
ity and learnability. Ex post evaluations are also appropriate for in-
vestigating the effects an artefact may have on its environment, e.g.
how a new ERP system may influence the power relationships in a
workplace.
     A main benefit of ex post evaluations is, as mentioned above, that
they can be employed to evaluate the usability and effects of arte-
facts. Their main drawback is the low internal validity when an arte-
fact is employed in a complex environment, such as an organisation.
In such a case, it can be next to impossible to distinguish the influ-
ences of the artefact from those of contingent factors. For example,
the alleged effects of an ERP system on power relationships may

<!-- Page 98 -->
instead be due to an economic crisis, other change projects, new em-
ployees, or other factors.

Carry out evaluation
The evaluation is to be carried out and documented according to the
requirements of the selected research strategies and methods. In
particular, the validity and reliability of the evaluation are to be dis-
cussed.

9.2 Resources for Evaluate Artefact
For ex ante evaluations, the most important resource is a number of
experts who should have competence as well as the time and will-
ingness to evaluate the artefact. Obviously, these requirements may
need a trade-off, as the most qualified experts typically are the busi-
est ones. Ex post evaluations often require one or several sites where
the artefact can be employed. Getting access to such sites can be
challenging, for example when a new IT system is to be evaluated in
an organisation.

9.3 Research Strategies and Research Methods for Eval-
uate Artefact
Research Strategies for Evaluate Artefact

Surveys
Surveys can be used for gathering feedback on an artefact from a
large number of stakeholders and experts. Therefore, the results of a
survey have fair chances of being generalizable, provided that sam-
pling and data analysis have been carried out in a rigorous way.
However, a drawback of surveys is that they often only result in shal-
low responses from respondents, as they may not be prepared to
spend much time and effort on answering survey questions.

<!-- Page 99 -->
Experiments
Experiments are popular instruments for evaluating an artefact, as
they allow a researcher to achieve high internal validity by carefully
controlling the conditions under which an experiment is carried out.
On the other hand, external validity can suffer, since the artificial
setting of the experiment can be decidedly different from the prac-
tice in which the artefact is to be used.
Case studies
Case studies allow a researcher to make a deep evaluation of an arte-
fact and understand the reasons for its success or failure, at least in
one case. This understanding can aid the researcher in coming up
with improved redesigns of the artefact, which can be used in an
iterative development process. However, case studies require much
effort and their outcomes depend heavily on the competence and
experience of the researcher. They can also be biased by her inter-
ests and preconceptions. Furthermore, carrying out a case study on
only a single site can limit the generalizability of the results.
Ethnography
The research strategy ethnography allows a researcher to under-
stand not only how a practice influences the use of an artefact, but
also how the artefact may change the practice. Therefore, the re-
searcher may identify interplays between artefact and practice that
might not be apparent to its participants. A drawback of ethnogra-
phy is that it is time-consuming and requires highly qualified re-
searchers to be effective.
Theoretical Analysis
Theoretical analysis can be used to verify that an artefact fulfils re-
quirements on internal properties, like coherence and consistence.
Theoretical analysis, in the guise of informed arguments, can also be
used to show that less formal requirements are fulfilled. Informed
arguments typically start from the construction of an artefact and
then argue that these ensure that some requirement is satisfied.

<!-- Page 100 -->
Research Methods for Evaluate Artefact

Interviews
Interviews are effective instruments for gathering stakeholder opin-
ions and perceptions about the use and value of an artefact. Inter-
views also allow a researcher to delve deeper into stakeholder
views, as she can ask follow-up questions when needed. However,
results from interviews are always dependent on the perspective
and competence of the respondent, which must be taken into ac-
count when interpreting interview answers. Furthermore, respond-
ents usually want to be nice and polite when meeting a researcher in
person and assessing her results, meaning that they may withhold
criticism and express more positive views than they actually hold.
Questionnaires
Questionnaires can be highly efficient for gathering the opinions and
perceptions of many stakeholders about an artefact. However, the
answers are often superficial and do not allow a researcher to gain a
deep insight into the views of individual respondents.
Observation studies
While interviews and questionnaires are effective tools for under-
standing the subjective views and perceptions of stakeholders, ob-
servations offer researchers an instrument for a more objective
evaluation. For example, an interview can reveal whether or not
some respondents perceive a new information service as easily
learnable. However, perceived learnability should not uncritically be
equated with learnability. Observations may very well show that the
service is not easily learnable even though the respondents perceive
it so, or vice versa.

<!-- Page 101 -->
9.4 Guidelines for Evaluate Artefact
    -   Evaluate every requirement! Every requirement identified in
        the activity Outline Artefact and Define Requirements shall
        be evaluated.
        Evaluate how the artefact can solve the problem! Investigate
        not only how well the artefact fulfils the requirements but al-
        so to what extent it can address the problem.
        Describe how you have evaluated the artefact! Explain what
        you have done to evaluate the artefact, in particular how you
        have studied stakeholders using the artefact.

9.5 Ethical Consequences
Evaluation of an artefact's effects, as discussed so far, has focused
solely on the intended effects of using the artefact. However, unin-
tended effects also need to be considered, in particular when investi-
gating the ethical consequences of an artefact and its use. Ethical
investigations can be carried out in many different ways and can be
based on both utilitarian and deontological theories. Even if there is
no single best way to investigate the ethical aspects of artefact use, it
is still meaningful to ask for practical guidelines that can assist in
this task. The remainder of this section outlines a deontologically
based approach that can support a designer in identifying the ethical
consequences of artefact use.
    The first step of the approach aims at finding individuals and
groups of people that can be affected by the use of an artefact. This
can be done by first identifying all the practices that are influenced
by the artefact. This would not only include the intended practice,
see section 1.3, but also other practices, where the use of the artefact
may cause various side effects. Within each practice, individuals and
groups that can be affected are identified.
    The next step is to investigate, for each individual and group, in
which respects it can be affected. This can certainly be done in many
different ways, where one is to consider basic human rights and de-

<!-- Page 102 -->
termine how they can be influenced by the artefact use. A recent
proposal for the most fundamental human rights has been formulat-
ed by Martha Nussbaum in the form of a list of central human capa-
bilities. Nussbaum's capability approach is based on the view that
ethical values should focus on human functioning, i.e. what people do
or are able to do. This is in contrast to utilitarian approaches that
focus on human preferences, i.e. what people prefer to do. Nussbaum
argues that the latter are unstable and easily distorted, implying that
human functioning is a safer ground for ethical values. Nussbaum
(2007) offers a tentative list of central human capabilities.
     "1. Life. Being able to live to the end of a human life of normal
length; not dying prematurely, or before one's life is so reduced as to
be not worth living.
     2. Bodily Health. Being able to have good health, including repro-
ductive health; to be adequately nourished; to have adequate shelter.
     3. Bodily Integrity. Being able to move freely from place to place;
to be secure against violent assault, including sexual assault and do-
mestic violence; having opportunities for sexual satisfaction and for
choice in matters of reproduction.
     4. Senses, Imagination, and Thought. Being able to use the senses,
to imagine, think, and reason-and to do these things in a "truly hu-
man" way, a way informed and cultivated by an adequate education,
including, but by no means limited to, literacy and basic mathemati-
cal and scientific training. Being able to use imagination and thought
in connection with experiencing and producing works and events of
one's own choice, religious, literary, musical, and so forth. Being able
to use one's mind in ways protected by guarantees of freedom of
expression with respect to both political and artistic speech, and
freedom of religious exercise. Being able to have pleasurable experi-
ences and to avoid nonbeneficial pain.
     5. Emotions. Being able to have attachments to things and people
outside ourselves; to love those who love and care for us, to grieve at
their absence; in general, to love, to grieve, to experience longing,
gratitude, and justified anger. Not having one's emotional develop-

<!-- Page 103 -->
ment blighted by fear and anxiety. (Supporting this capability means
supporting forms of human association that can be shown to be cru-
cial in their development.)
     6. Practical Reason. Being able to form a conception of the good
and to engage in critical reflection about the planning of one's life.
(This entails protection for the liberty of conscience and religious
observance.)
     7. Affiliation. A. Being able to live with and toward others, to rec-
ognize and show concern for other human beings, to engage in vari-
ous forms of social interaction; to be able to imagine the situation of
another. (Protecting this capability means protecting institutions
that constitute and nourish such forms of affiliation, and also pro-
tecting the freedom of assembly and political speech.) B. Having the
social bases of self-respect and nonhumiliation; being able to be
treated as a dignified being whose worth is equal to that of others.
This entails provisions of nondiscrimination on the basis of race, sex,
sexual orientation, ethnicity, caste, religion, national origin.
     8. Other Species. Being able to live with concern for and in rela-
tion to animals, plants, and the world of nature.
     9. Play. Being able to laugh, to play, to enjoy recreational activi-
ties.
     10. Control over One's Environment. A. Political. Being able to
participate effectively in political choices that govern one's life; hav-
ing the right of political participation, protections of free speech and
association. B. Material. Being able to hold property (both land and
movable goods), and having property rights on an equal basis with
others; having the right to seek employment on an equal basis with
others; having the freedom from unwarranted search and seizure. In
work, being able to work as a human being, exercising practical rea-
son and entering into meaningful relationships of mutual recognition
with other workers."
     In order to identify and document the ethical consequences of ar-
tefact use, a designer can fill in a table like the one in figure 9.2. For

<!-- Page 104 -->
each group or individual and each capability, the designer is to de-
tennine the effects of the use of the artefact.
     Capabilities            Group!   Group 2   Group 3   .......
     Life

     Bodily health

     Bodily integrity

     Senses and thought

     Emotions

     Practical reason

     Affiliation

     Other species

     Play

     Environment control

             Figure 9.2 Capability based template for ethical analysis

9.6 Running Example
The fifth DIGIREAD activity was to evaluate the designed and devel-
oped artefact. An ex ante evaluation strategy was chosen, i.e. the ar-
tefact was evaluated without being used.
    The ex ante evaluation of the artefact was then carried out, in
which experts with different competences participated. Three ex-
perts were interviewed, one from the area of social media, one from
usability and one from software engineering. A semi-structured in-
terview of about 45 minutes was carried out with each expert. The
interviews were video recorded and then independently analysed by
two members of the research team. The evaluation was based on the
defined requirements of the artefact. The main outcome of the eval-
uation was a concern about usability, as the proposed artefact could
be highly complex.
    In addition to the expert interviews, the researchers also provid-
ed informed arguments as a part of the evaluation. These arguments
primarily showed that the construction of the artefact ensured that

<!-- Page 105 -->
the functional requirements were at least partially fulfilled. Fur-
thermore, it was argued that the proposed architecture should pro-
vide adequate interoperability. The Evaluate Artefact activity is
summarized in figure 9.3.
                                             Controls:
                                             Ex ante evaluation
                                             strategy
                                             Semi-structured
                                             interviews of experts
                                             Informed argument
                                        ,,                           Output:
                                                                     Evaluated
        Input:                                                       artefact with
   p rototype      Evaluate Artefact                                 concerns
   0 f service                                                       about usability
             ..
             ~            Choose                                            ..
                                                   Carry out
                         evaluation
                                                   evaluation
                          strategy

                                        ~

                                             Resources:
                                             Experts in social
                                             media. usability and
                                             software engmeenng

                  Figure 9.3 Evaluate Artefact in the running example

Further Reading
A great deal of literature exists on evaluation in various domains. For
Human Computer Interaction a comprehensive introduction in the
fonn of a presentation is given by Dix (2009). The evaluation of
models and methods in infonnation systems is discussed by Moody
(2003; 2005). Clements et al. (2001) investigate the evaluation of
software architectures. Pries-Heje et al. (2008) discuss the distinc-
tion between ex ante and ex post evaluations in design science re-
search. The box above on design theory is based on the work by
Walls et al. (2004) and Gregor and Jones (2007).

<!-- Page 106 -->
10 Communicate Artefact Knowledge

Design science results are typically to be communicated to research
as well as practitioner communities, which may include both tech-
nology-oriented and management-oriented audiences. Furthermore,
some design science results can be of such a broad interest that they
are worthwhile to communicate to the general public.
     Communicating results to researchers requires attention to rig-
our so that they can evaluate the results and build on them in future
work. In particular, the knowledge base should be carefully de-
scribed as well as its relationship to the results produced. The choice
of research strategies and methods should be well justified. The ap-
plication of the chosen research strategies and methods should also
be described in detail including discussions on validity and reliabil-
ity.
     These concerns about methodology and related research are less
relevant for communication to practitioners. The focus is then rather
on problem and practice as well as concrete outcomes in terms of
construction, function, usability and effects.
     Technology-oriented audiences benefit from extensive details on
the construction of an artefact, i.e. its components and their relation-

<!-- Page 107 -->
ships. This allows practitioners to construct and implement the arte-
fact in a practice, and researchers to further develop the artefact
     Management-oriented audiences are primarily interested in the
problem the artefact addresses, what benefits it can bring to a prac-
tice, how easy it is to use, and its overall effects, e.g. on efficiency and
agility in an organisational setting. Knowledge about these aspects
will enable managers to determine whether or how to apply the arte-
fact. The construction of the artefact is less relevant, though manag-
ers will still need a basic knowledge of the inner workings of the
artefact in order to appreciate its significance and understand its
application. When communicating to the public, the main focus is
often on the effects of a novel artefact, including its ethical and socie-
tal consequences. The interests of different audiences are graphically
illustrated in figure 10.1.
     Practitioners                                                          Researchers

                 Problem                     Artefact              Knowledge Base

                 Practice                  Requirements              Constructs

                               Define       Develop
                            Requirements    Artefact

                              Engineers                 Managers

                Figure 10.1 Different interests for different audiences

When disseminating design science results, the researcher has to
select the right communication channels depending on the target
For research communities, results are primarily communicated

<!-- Page 108 -->
through academic journals, conferences and workshops. Workshops
often accept immature work and provide a forum for feedback and
discussion about preliminary results, while journals mainly publish
mature work that includes careful evaluation. For practitioner com-
munities, research results can be communicated through trade fairs,
white papers, magazine articles, blogs, etc. Regardless of the target of
the communication, it is valuable to present results in a clear and
easily understandable structure. For example that provided by the
design science method as depicted by the IDEFO diagrams and the
design science canvas. This structure is in many respects also similar
to the IMRAD (Introduction, Methods, Results And Discussion) struc-
ture, which is frequently used for organising empirical research pa-
pers.

Is design theory the same as design science?
Short answer: No
Long answer: In this book, design science has been presented as a
knowledge building endeavour, which can be carried out according to
the design science method presented in Chapters 4 to 9. In contrast, a
design theory focuses on the results of the design science activities and
shows how these can be structured. A design theory consists of a num-
ber of interrelated components that describe abstract artefacts like
models and methods (each component is here exemplified using Codd's
relational database theory):
Purpose and scope. The set of requirements or goals that specifies the
type of artefact to which the theory applies and in conjunction also de-
fines its scope and boundaries. (Improved database technology is need-
ed for increasing productivity as existing approaches of managing data
persistence are failing.)
Constructs. Representations of the entities of interest in the theory.
These entities can be physical as well as abstract. (Attribute, tuple, n-ary
relation, domain of values.)
Principle of form and function. The abstract blueprint or architecture
that describes an artefact. For a model, its components and their rela-
tionships and functions would be described. For a method, its steps and

<!-- Page 109 -->
their order and purpose would be given. (A relation is defined over a
domain of values and includes attributes and tuples.)
Artefact mutability. The changes in state of the artefact anticipated in
the theory, that is the degree of artefact change encompassed by the
theory. (The relational model allows for easy adaptation and change to
base tables, while user views appear unchanged.)
Testable propositions. Testable propositions about instantiations of the
artefact under consideration. Typically, these propositions state that if a
model or method is instantiated then it will work, or it will have certain
characteristics. (A relational database can perform as well as a non-
relational database.)
Justificatory knowledge. The underlying knowledge or theories that
provide a basis and justification for the design. (Set theory and behav-
ioural science about human cognitive processes.)
Principles of implementation. Processes for implementing, i.e. instanti-
ating, the artefact to which the theory applies (model or method) in
specific situations. (Guidelines on how to create a relational database
through normalization procedures.)
Expository instantiation. An implementation of the artefact that can
assist in representing the theory both as an expository device and for
purposes of testing. An instantiation can support communication about
the artefact of a design theory. (A working relational database with ta-
bles filled with data.)
While the design science method focuses on organising research activi-
ties, a design theory aims at structuring the knowledge about an arte-
fact. However, they are closely related in the sense that applying the
design science method should result in a design theory. The Explicate
Problem and Define Requirements activities should result in defining the
purpose and scope of the design theory. The Design and Develop activi-
ty should identify the constructs and specify the form and function of
the artefact. Testable propositions should be deduced by the Evaluate
Artefact activity, and an expository instantiation should be shown by
the Demonstrate Artefact activity. Justificatory knowledge is to be ad-
dressed by all the activities of the design science method. Artefact mu-

<!-- Page 110 -->
tability and principles of implementation can also be addressed by sev-
eral activities.

Further Reading
An established and easy to read textbook on scientific communica-
tion was written by Booth et al. (2008). Sorensen (2005) has written
an entertaining paper on how to and how not to write scientific arti-
cles. Dixit (2011) has provided a concise introduction to the IMRAD
format.

<!-- Page 111 -->
11 The Design Science Method and
   Systems Development

A quick look at the design science method may suggest that it is
nothing more than yet another version of the traditional waterfall
model for software development The waterfall model is a sequential
design process, where progress is viewed as a steady flow down-
wards in a number of consecutive phases, see figure 11.1.
  Require-
   ments
   spec.
             1   Design

                           rL     Con-
                                struction

                                            rL    Testing

                                                            1   Instal-
                                                                 lation

                                                                          rt    Main-
                                                                               tenance

                          Figure 11.1 The Waterfall Model

    The results produced in one phase are handed over as input to
the next phase, meaning that a phase can only be started if the previ-
ous phase has been fully completed. The phases in different versions

<!-- Page 112 -->
of the waterfall model may vary, but typically include requirements
specification, design, construction, testing, installation, and mainte-
nance.
     The waterfall model has been heavily criticized for being inade-
quate for guiding large software projects in unstable environments.
In an early stage of the software development process it is often im-
possible to define precise and complete requirements. In such situa-
tions, rapid prototyping is an essential tool for eliciting requirements
from stakeholders. By creating and testing prototypes of the soft-
ware to be developed, stakeholders will improve their understand-
ing and be able to articulate more exact and relevant requirements.
Thus, there may be many short iterations between specification of
requirements, design, construction, and testing. For example, based
on some stakeholders' requirements, a first draft of a prototype is
designed, constructed and tested. The results of the test will spur
new or refined requirements, which will be the start of a new itera-
tion with a refined design of the prototype, followed by additional
tests. The result of the tests will give rise to new and refined re-
quirements, which start another iteration, and so on, see figure 11.2.
Furthermore, the environment may change during the development
process, e.g. due to technological developments or government regu-
lations, which implies that there may be a need to iterate all the way
back to requirements specification. Thus, the development process is
highly iterative as it needs to obtain complex requirements and
manage a changing environment.

<!-- Page 113 -->
  Require-
   ments
   spec.
             1   Design

                          rt     Con-
                               struction

                                           1     Testing

                                                      1    Instal-

                                                    I
                                                           lation

                                                                     ll    Main-
                                                                          tenance

             Figure 11.2 A Waterfall Model with a simple iteration

11.1 Temporal and Logical Groupings of Work
As the design science method may look very much like a sequential
design process, see figure 4.1, it could be argued that it suffers from
the same wealmesses as the waterfall model. In other words, it could
be claimed that the design science method does not cater for vague
requirements, changing environments, shifting stakeholder interests,
unclear problem situations, etc. If this were true, the method would
clearly not be of much interest. However, the method does not pre-
scribe a sequential way of working. The activities are not to be seen
as temporal groupings of work to be performed in sequence, but
instead as logical groupings of work Thus, the arrows in figure 4.1
should not be interpreted as temporal orderings but as input-output
relationships. These interpretations can be made clearer by placing
them in the context of the RUP (Rational Unified Process) frame-
work
    RUP is structured in two dimensions, phases and disciplines, that
capture the serial and iterative aspects of software development~
respectively, see figure 11.3. The phases represent the sequential
stages that a project traverses over time, while the disciplines corre-
spond to the logical activities that are carried out during a project.
RUP identifies four phases: inception, elaboration, construction~ and
transition. The inception phase aims at achieving consensus among
the stakeholders about the objectives of the project; the elaboration

<!-- Page 114 -->
phase specifies requirements in detail and outlines an architecture
for the system to be built; the construction phase focuses on devel-
oping the system so that it is ready for deployment; and the transi-
tion phase delivers the system into production.
                          Phases

  Disciplines             Inception    Elaboration   Construction     Transition

  Business Modeling       I
  Requirements                ~

  Design

  Implementation

  Testing
                               ~~

                                                         :.J
                                                                --   r--

                                                               ~- - r----
                                                                             -
  Deployment                                                                 .J

  Configuration                                                              _j

  Project Management      I                                                  J

  Environment                 ~

                   Figure 11.3 Disciplines and phases in RUP

While the phases capture the serial aspects of a project in RUP, the
disciplines address the iterative aspects. During each phase, the
software developers will alternate between (almost) all of the disci-
plines. For example, during the inception phase the developers will
typically address a subset of the requirements, carry out some busi-
ness modeling, return to the requirements and revise them, suggest
an initial design, once again revise the requirements, do some coding
and preliminary tests, and then improve the design. Furthermore,
the inception phase can be broken down into several iterations, each
of which only addresses a small portion of the system to be built,
thereby making RUP even more iterative. thereby making RUP even
more iterative. Similarly, all the other phases will also include sever-
al disciplines.
    The relationships between phases and disciplines are shown in
figure 11.3, which is sometimes called a "hump chart''. The humps

<!-- Page 115 -->
for each discipline display how much effort that is spent on that dis-
cipline in the various phases. For example, the diagram shows that
most of the work on requirements is carried out in the inception and
elaboration phases, but it continues all the way into the transition
phase. The sizes and placements of the humps may certainly vary
from project to project and can be tailored as required.
    Figure 11.4 shows a version of the hump chart, which is close to
a waterfall model requiring that~ for example, all work on business
modeling and requirements be completed before any work on design
can be started.

                          Phases

Disciplines               Inception               Elaboration             Construction            Transitio n

 Business Modeling        I           ..tol

 Requirements             I        __..,j

 Design                                                     .......
 Implementation                                                                      .....
Testing                                                                      I       ......
 Deployment                                                                                            .........
 Configuration            r                                                                                   J

 Project Management       I                                                                                   J

 Environment              I
                                              I                       I                       I

                      Figure 11.4 A Waterfall version of RUP

Another version of the hump chart is given in figure 11.5 requiring                                1

that all disciplines are given equal attention in all phases. This kind
of diagram would reflect an extremely agile development process.

<!-- Page 116 -->
                             Phases

   Disciplines               Inception   l    Elaboration   IConstruction I Transition
   Business Modeling         I
                                                                                    ....
   Requi rements             I
   Design                    I
   Implementation            I                                                      J

   Testing                   I
                                                                                    _j
   Deployment                I
   Configuration             I
   Project Management        I                                                      J

   Environment               I                                                      J
                                         I                  I             I

                        Figure 11.5 An Agile version of RUP

Returning to the design science method, its activities are analogous
to the disciplines of RUP, not the phases. In other words, the activi-
ties are not to be sequentially ordered in time but can be performed
in parallel and in any order. The activities only tell what tasks need
to be done in the method, what input they consume, and what output
they produce. The activities are logical groupings, not temporal ones.

Design and Appropriation
People often adapt and use artefacts in ways that their designers never
intended. For example, email was designed to support communication
between people, but it is nowadays regularly used by people to send
reminders to themselves or to store safety copies of documents. Dix
(2007) describes this process of technology adaptation as follows:
   "These improvisations and adaptations around technology are not a
sign of failure, things the designer forgot, but show that the technology
has been domesticated, that the users understand and are comfortable
enough with the technology to use it in their own ways. At this point we

<!-- Page 117 -->
know the technology has become the users' own not simply what the
designer gave to them. This is appropriation."
   Designers should be aware that the artefacts they create may be ap-
propriated in unanticipated ways. They could even try to design in order
to facilitate appropriation. Dix {2007) suggests a number of guidelines
for this, three of which are:
   Allow interpretation - "Don't make everything in the system or prod-
uct have a fixed meaning, but include elements where users can add
their own meanings."
   Provide visibility- "Make the functioning of the system obvious to
the users so that they can know the likely effects of actions and so make
the system do what they would like."
   Support not control - "As a designer you want to do things right, to
make them as efficient and optimal as possible. However, if you opti-
mise for one task you typically make others more difficult. In some situ-
ations, such as very repetitive tasks, then designing explicitly for the
task may be the correct thing to do, perhaps taking the user step by
step through the activities. However, more often the tasks description is
incomplete and approximate, in particular ignoring exceptions. Instead
of designing a system to do the task you can instead design a system so
that the task can be done."

11.2 Differences between DS and Systems Development
Comparing the activities of the design science method to the disci-
plines of RUP, they look quite similar. Explicate Problem is similar to
Business Modelling, Outline Artefact and Define Requirements is
similar to Requirements, and so on. This observation holds not only
for RUP but also for many other systems development methods.
Thus, some new questions arise: Is the design science method not
redundant? Could it not be replaced by some systems development
method? Why introduce a new kind of process when RUP is there?
The answers to these questions depend on the different purposes of
design and design science, which were already introduced in Chapter
1.
   The purpose of design is to create an artefact that fulfils the
needs and requirements of some stakeholders, possibly only for a

<!-- Page 118 -->
local practice. Design science, in contrast, aims at producing and
communicating new knowledge that is relevant for a global practice.
These differences in purpose give rise to three additional require-
ments on design science.
    First, the purpose of creating new and generalizable knowledge
requires design science projects to make use of rigorous research
strategies and methods. Such methods are essential for creating re-
sults that can be critically discussed, evaluated, and validated. A pos-
sible objection to this line of reasoning is that many systems devel-
opment methods already include tools and techniques that are quite
similar to research methods, e.g. techniques for interviews or partic-
ipative requirements elicitation. It is true that some of these tools
and techniques are closely aligned with established research meth-
ods, but not always as they only aim at producing effective solutions,
not knowledge for global practices. Thus, the design researcher
needs to determine whether the tools and techniques offered by a
systems development method are indeed sufficient for the purpose
of producing knowledge, or whether additional research methods
are required.
    The second additional requirement on design science states that
the results produced must be related to an existing knowledge base,
thereby ensuring that they are both well founded and original. It is
not sufficient just to produce some knowledge; it also has to be inte-
grated with previous knowledge in the area and shown to provide
novel insights.
    Thirdly, the new knowledge should be communicated to both
practitioners and researchers. This requirement on communication
does not exist in most systems development methods, where instead
there are activities devoted to deployment and maintenance.
    In a project for developing an IT system, the design science
method can be used in tandem with any systems development meth-
od. A typical scenario could look as follows. First, a systems devel-
opment method is chosen. Second, the relevant parts (disciplines,
workflows, tasks or whatever they may be called) of the chosen

<!-- Page 119 -->
method are mapped to the activities of the design science method.
Third~ the tools and techniques used by the method are inspected in
order to determine how closely they match adequate research meth-
ods. Fourth~ the tools and techniques are adapted or complemented
so that sufficiently rigorous research methods are used. Fifth~ the
work of the project is carried out in accordance with the chosen sys-
tems development method as well as the selected research methods.
In parallel, the project will include work to relate the results to an
existing knowledge base. Finally, the results will be communicated to
relevant audiences. Thus, the project will primarily be governed by
the chosen systems development method, but there will also be
modified or additional activities for validating and communicating
the knowledge produced.

Can companies use design science in their product development?
Short answer: Yes
Long answer: When companies need reliable knowledge about their
customers, they can benefit from using design science. For example, if a
company wants solid knowledge about the requirements of their cus-
tomers, it can make use of research methods for requirements defini-
tion, including interviews and questionnaires. likewise~ if a company
wants to understand how their customers perceive its products~ re-
search methods for evaluation can be relevant.
   Some companies are well known for using research methods in their
product development. One example is Google that regularly tests and
evaluates its service offerings by means of advanced quantitative data
analysis methods. Before a product launch, Google rolls out the new
service to a limited number of users, collects data by recording their
interactions with the service~ and evaluates the records in order to im-
prove it.
Caveat: The goal of companies is not to produce knowledge but to cre-
ate value for their shareholders and other stakeholders. Thus, scientifi-
cally founded knowledge is never an end in itself for a company but only
a means to other goals. In many cases, it is still worthwhile to use re-

<!-- Page 120 -->
search methods to obtain reliable knowledge that can be used as a basis
for decision making. However~ research methods come with a cost~ in
particular in terms of time. For example~ carefully evaluating a product
before launching it takes valuable time~ which may result in a competi-
tor being first to market. Therefore1 companies often deliberately
choose to refrain from scientific investigations in order to improve
speed and flexibility.

Further Reading
A textbook on methodologies for information systems development
was written by Avison and Fitzgerald (2006). Kroll and Kruchten
(2003) have written an easily readable introduction to RUP. Basic
principles behind agile development were proposed by Beck and
Beedle (2012).

<!-- Page 121 -->
12 Research Paradigms

A research paradigm is a set of commonly held beliefs and assump-
tions within a research community about ontological, epistemologi-
cal, and methodological concerns. Such a paradigm constitutes a
mental model that influences and structures how the members of a
research community perceive their field of study. A research para-
digm answers ontological questions about the nature of reality, what
entities exist, and how these are related and interact with each other.
A research paradigm also addresses epistemological questions about
the ways in which people can know about reality, i.e. how they can
gain knowledge about the world. Finally, a research paradigm an-
swers methodological questions about legitimate ways of investigat-
ing reality and how to confirm that the knowledge generated is valid.
Summarizing, ontology asks "What is in the world?"; epistemology
asks "What can we know about the world and how should we obtain
that knowledge?"; and methodology asks "Which procedures can be
used to obtain knowledge?".
    The two most established research paradigms in the area of in-
formation systems are positivism and interpretivism. This chapter
introduces these paradigms and discusses their relationship to de-

<!-- Page 122 -->
sign science, see also figure 12.1, which relates research paradigms
to empirical research strategies and methods.
                                                             Survey
                                      Research               Experiment
                                      strategy               Case study
                     influences    ' - - - - - r - - - - - ' Action research

      Research
      paradigm
                     intluen~
    Positivism                        Research
    lnterpretivism                     method

                                            ~
    Questionnaire
                            I                               I
    Interview           Data                            Data
    Observation       generation                       analysis
    Documents          method                          method

                                                            ~
                                            I                                  I
               Cantent analysis                                                     Statistical
                                      Qualitative                    Quantitative
              Narrative analysis                                                    methods
                                       analysis                       analysis
                            ...
                                       method                         method

                         Figure 12.1 Research paradigms

12.1 Positivism
Positivism originated with the 19th century sociologist and philoso-
pher Auguste Comte, who attempted to establish sociology as a sci-
ence by applying a natural science view on social phenomena. Comte
introduced positivism as a reaction to theological and metaphysical
world views that embraced authority, divine revelation and tradition
as legitimate knowledge sources. In contrast, positivism only accepts
knowledge that is based on sense, experience and positive verifica-
tion.
    Ontologically, positivism assumes a reality that exists inde-
pendently of human actions and experiences. As for natural science,
the goal of social science should be to identify regularities among
phenomena in the world and explain them through cause and effect
relationships. Preferably, these regularities and explanations can and

<!-- Page 123 -->
should be independent of context, i.e. they should be general and not
depend on time, place or people.
    Epistemologically, positivism claims that objective knowledge
about the social world is obtainable, but only through observation
and experimentation. Social inquiry should be objective, and a re-
searcher should assume the role of a disinterested observer who is
separate from the subjects being investigated. In other words, the
researcher should keep at arm's length from the phenomena she
studies in order to ensure that her background and interests do not
bias her findings.
    Methodologically, positivist researchers strive for an objective
and value-free investigation where they distance themselves from
the entities being studied. Preferred instruments for collecting re-
search evidence are large quantitative studies including interviews
and questionnaires. Experiments are also highly valued research
strategies, as they can provide objective knowledge.
    Positivism as described above may seem natural and com-
monsensical. However, this is exactly the problem with the positivist
paradigm according to interpretivism. While positivism may be ap-
propriate for natural science, interpretivists argue that it fails to cap-
ture essential aspects of the social world, in particular the subjective
construction of social phenomena.

12.2 lnterpretivism
Interpretivism emerged as a reaction to positivism at the beginning
of the 20th century. One of its forerunners was the German sociolo-
gist Max Weber, who claimed that the social world, including social
actions, can only be understood through grasping the subjective
meanings and purposes that people attach to their actions.
    Ontologically, interpretivism argues that in contrast to the natu-
ral world, the social world does not exist "out there", independent of
human actions and intentions. Instead, the social world is construct-
ed by people who carry out social actions and give meanings to them.
For example, housing contracts are created through social actions

<!-- Page 124 -->
involving two or more individuals, a national government, and pos-
sibly other actors. The meaning of such a contract is not given in
advance but is determined by the actors who enter it. Furthermore,
the meaning of the contract may change during its lifetime as negoti-
ated by the actors involved. It may also be the case that the actors do
not fully agree on the meaning of the contract but make their own
different interpretations. In extreme cases, such disagreements may
result in court trials where a third party, the court, decides how the
contract is to be interpreted. This example illustrates that even such
a straightforward social phenomenon as a housing contract is not
part of a stable, objectively existing reality. Instead, it is constructed
and continuously modified through the actions and interpretations
of the actors who have an interest in it.
    Any social phenomenon emerges as a result of the interactions
and lived experiences of humans. This holds true for memberships in
clubs, employment contracts, marriages, money, debts, holidays,
religions, etc. All of these phenomena are created by people and their
meaning depends on the actions, intentions and understanding of
the individuals who participate in them. Thus, the social reality is
much more elusive and fluid than the physical one, as it depends on
people with all their whims, prejudices and other subjectivities.
    The ontological differences between the natural and the social
world have epistemological consequences. As social phenomena are
grounded in the actions, experiences and subjective meanings of
people, only superficial knowledge can be obtained by studying peo-
ple like objects. Instead, a researcher should view people as subjects
who actively create the social world. The researcher can only achieve
a deep understanding of a social phenomenon by actively participat-
ing in that phenomenon together with the people who actually cre-
ate it. She should not be a detached observer but rather try to be-
come a member of the culture or group being studied by participat-
ing in their daily practices. In short, she needs to enter the shoes of
the other. This is in stark contrast to the positivist ideal of separating
the researcher from her object of study. Such a separation is self-

<!-- Page 125 -->
defeating according to interpretivism, as the subjective knower is a
part and source of the social reality she knows.
    Methodologically, interpretivist researchers prefer case studies,
action research and ethnography, as these research strategies allow
them to arrive at an empathetic or participatory understanding of
social phenomena. The researchers can get close to the people who
participate in the phenomena being studied and thereby come to
understand their views and interpretations. However, this kind of
methodology has been criticized for producing subjective research
results, i.e. results that are highly dependent on the skills and expe-
riences of the individual researcher. There is a risk that two re-
searchers with different backgrounds and interests may arrive at
very different results. One answer to this criticism is that an inter-
pretivist researcher should always acknowledge her subjectivity and
explicitly discuss how it could affect the validity of her results.

Positivism and lnterpretivism in the Movies- Tim Burton's The
Nightmare Before Christmas
As the arguments of interpretivism may seem somewhat abstruse on a
first encounter, it can be helpful to make them concrete by putting
them into some familiar context. One such context is provided by the
1993 stop motion movie The Nightmare Before Christmas produced by
Tim Burton. The movie illustrates how difficult it is to understand and
interpret the habits and symbols of foreign cultures.
   The main character of the movie is Jack Skellington, the Pumpkin King
of Halloween Town, a place inhabited by ghouls, ghosts, vampires,
witches and other monsters. One day Jack stumbles upon a tree, which
is a portal to Christmas Town. He enters the tree and finds himself tele-
ported to a friendly and joyful world, completely different from his own
Halloween Town. The following video track records his impressions:
http:ilgoo.gl/yCV88.
   The video shows how hard it is for Jack to make any sense of the
people, activities and things he discovers in Christmas Town, as they are
so unrelated to his own experiences. Still, Jack wants to bring the

<!-- Page 126 -->
Christmas spirit to his own people, and he calls for a town meeting
when he returns to Halloween Town http://goo.gl/zkSQt.
   In the meeting, Jack presents his findings on Christmas to the Hallow-
een Town residents. They may understand some basic facts about the
holiday, but as Jack complains in the end of the scene "they don't un-
derstand that special kind of feeling in Christmasland". The problem is
that the town people immediately try to interpret Christmas in their
own cultural terms. For Halloween Town residents, a present in a box is
a pox. A Christmas sock contains a rotten foot. Toys bite, snap and ex-
plode. Without even thinking about it, the Halloween Town people as-
sume that their own views and experiences can be used to understand
the world of Christmas. However, as any interpretivist would be happy
to point out to them, this does not work. Gift giving, present wrapping
and other Christmas habits are social phenomena that are created and
given meanings by those who participate in them. They cannot be un-
derstood by outsiders who just observe them in a casual and disinter-
ested manner. But understanding is what Jack seeks, as he calls out in
the next video "What does it mean?": http://goo.gl/r3GcP.
   Jack seeks meaning in two ways. He first tries the positivist road with
observation and analysis. He puts toys into vials, inspects rag dolls, and
learns Christmas rhymes by heart. In some deleted scenes, Jack also
dissects a teddy bear with a scalpel, dissolves candy in test tubes, and
formulates equations about Christmas notions: goo.gl/j8Xxk. However,
Jack soon realizes that these kinds of investigations will not grant him
any understanding of Christmas, "something's there I cannot see". So he
then switches to an interpretivist mode, summarized in the phrase 11Just
because I cannot see it doesn't mean I can't believe it". Christmas is not
understood by observing Christmas objects. Christmas is understood by
believing it. Christmas is understood by making it. And the people of
Halloween Town start making Christmas: http://goo.gi/7YVFe.
   They become participants of the Christmas tradition by believing it,
by making it, by living it. No longer are they passive observers, but in-
stead active creators. So through their lived experiences they come to
understand Christmas. Or do they? Of course they do not, and their
failure to understand drives the rest of the movie forward to its tragic
end. Someone may argue that this lack of understanding is a general
rule and that people are so caught up in their own culture that they

<!-- Page 127 -->
always interpret other cultures in terms of their own. They cannot step
outside and truly understand a foreign culture, or at least their under-
standing is so limited and subjective that it cannot be trusted. Is this a
fair conclusion? The movie offers an answer, but it would be a spoiler to
give it here ...

12.3 The Roles of Positivism and lnterpretivism
While the differences between positivism and interpretivism may
seem deep and substantive, it has been argued that many of the al-
leged differences are spurious, in particular the ontological ones
(Weber, 2004). Furthermore, some of the positions ascribed to posi-
tivists are outdated and not supported by anyone today. Positivists
would nowadays certainly agree that some parts of reality are social-
ly constructed, including most of the research objects in the infor-
mation systems area. Historically, however, some researchers have
assumed that many complex social phenomena are immutable and
independent of time, place and person. For example, phenomena like
childhood, gender and honour have been treated as stable, well es-
tablished, and independent of culture and time. Clearly, this is not
the case - just compare the gender stereotypes of today's Scandina-
via with those of 19th century Prussia. Researchers who have as-
sumed that social phenomena are culturally independent have in
practice ascribed their own conceptions to people in other cultures,
who have actually held widely different views. As interpretivists
have pointed out, this is a sure recipe for bad research.
    Epistemologically, interpretivists do understand and even ap-
preciate the positivist ambition for objectivity. However, they con-
tend that objective research results are only attainable if the re-
searcher restricts herself to surface level phenomena in the social
world, such as correlations between income and education level In
order to obtain deeper knowledge, the researcher needs to engage
closer with people to understand their views and interpretations.
Obviously, this compromises objectivity, but the interpretivist sees
this as a price well worth paying for the insights gained. A positivist

<!-- Page 128 -->
may be less inclined to make this trade off and might argue that
many results obtained through interpretivist investigations are so
subjective that they are next to useless. Furthermore, the positivist
may claim that typically positivist research strategies also can pro-
vide deep knowledge on social phenomena, e.g. ingeniously designed
experiments such as versions of the prisoner's dilemma or the ulti-
matumgame.
    Another epistemological issue is the social construction of
knowledge. Positivists would here acknowledge that any construct,
framework, model or theory is socially constructed, whether its sub-
ject matter is socially constructed or not. Thus, research results are
always influenced by the culture, experience and history of the re-
searcher. This recognition is a corner stone in Kuhn's account of how
researchers develop theories not only in the social but also in the
physical and life sciences (Kuhn, 2012). Thus, the ephemeral and
culturally dependent nature of knowledge is acknowledged by posi-
tivist and interpretivist researchers alike.
    As discussed earlier, positivists tend to prefer research strategies
like experiments, surveys and field studies, while interpretivists fo-
cus on case studies, action research and ethnographic studies. The
pros and cons of these research strategies follow the same line of
reasoning as in the previous section. Simplifying somewhat, the posi-
tivist ones provide reliable but shallow knowledge, while the inter-
pretivist ones offer deep but unreliable knowledge. In order to over-
come the weaknesses of the respective research strategies, it has
been suggested to combine them. The interpretivist ones should
then be used for generating and suggesting research results, while
the positivist ones should be used for verifying these results.

Critical Theory and Design Science
Most social sciences have as their goal solely to explain and understand
social and cultural phenomena. Critical theories, by contrast, have also
added the practical and ethical goal of seeking human emancipation. As
expressed by Horkheimer (1975), research should 1iberate human be-

<!-- Page 129 -->
ings from the circumstances that enslave them~~. Critical theories are not
only concerned with how things are but also how they might be or
should be. Critical theories are critical in the sense that they question
hidden assumptions and purposes in academic theories as well as in
political ideologies and cultural practices. By exposing these assump-
tions, critical theories can make people aware of the oppressing effects
of established theories, ideologies and practices. Such an awareness is
the first step towards change that can set people free.
   As critical theories aim to decrease domination and increase freedom
in all their forms, they have been applied in many contexts, including
inquires on race, gender, ethnicity and identity. In an analysis of gender
within some tradition or practice, a critical theory may ask questions
about the equal status of women, whether they are demeaned or ideal-
ized, and whether they are ignored or patronized. The answers to these
questions can help people start to understand if and how women are
subordinated in the tradition.
   According to critical theory, two of the most common forms of domi-
nation in modern society are alienation and reification. Alienation is
about the psychological effects of exploitation and the division of la-
bour, where an individual is disconnected from the tools of production
as well as her fellow workers. In other words, people lose control of
their lives and selves by not being able to control their work. Reification
is about transforming social relations into things, or more precisely so-
cial relations become mediated and expressed by things, in particular
commodities and markets. For example, the patriarchal relation be-
tween a farmer and his farmhand is replaced by an impersonal relation
based on money and market valuations.
   Critical theories and design science share the conception that describ-
ing and explaining the world is not sufficient; it also needs to be
changed. Critical theories bring about this change by raising people's
awareness of patterns of domination, thereby spurring them to action.
Design science causes changes by developing and introducing new arte-
facts. However, critical theories and design science differ widely with
respect to their goals. While critical theories aim at liberating people
from oppressing structures, design science projects have the more lim-
ited purpose of satisfying stakeholder needs and wants. In other words,
critical theories attempt to realize the universal values of liberty and

<!-- Page 130 -->
autonomy, while design science projects are governed by the particular
interests of stakeholders of a practice.
   These differences in goals may even give rise to conflicts. An example
could be a design science project, where a new ERP system is to be de-
signed and introduced in a company. One group of stakeholders, the
management, claims that the goal of the new system is to improve effi-
ciency and productivity by eliminating routine work activities. However,
a critical theorist could argue that the hidden motive of management is
to better monitor, control and evaluate employees, which would con-
tribute to their alienation and reduce their autonomy. The critical theo-
rist could even claim that the design science researchers are manage-
ment lackeys who help strengthen controlling and oppressive structures
in the company. This example illustrates that a design science research-
er needs to take a broad outlook during problem explication and re-
quirements definition. She has to acknowledge the viewpoints of multi-
ple stakeholders, and probe into the problem situation using different
research methods, in order to get a rich and unbiased understanding.

12.4 Research Paradigms and Design Science
In design science, just as in empirical research, both the positivist
and interpretivist paradigm can be applied. It is even possible, in-
deed common, to make use of both paradigms in the same design
science project. During problem explication and requirements defini-
tion, a researcher may choose an interpretivist stance in order to
obtain a deep understanding of the needs and wants of stakeholders.
This understanding will help her to design and develop an artefact
that is highly relevant for the stakeholders of a practice. For evalua-
tion, however, she may value rigour more highly and decide to use
positivist methods like extensive surveys and experiments in order
to arrive at objectively valid results. Still, interpretivist methods may
also be appropriate for evaluation, especially if there is a need to
understand the subjective experiences of users. In summary, a de-
sign science project can use and benefit from positivist as well as
interpretivist strategies and methods, depending on the goal and
context of the project.

<!-- Page 131 -->
What design science is and is not
Design science is not design- the purposes of design and design science
differ with respect to generalizability and knowledge contribution, as
pointed out in Section 1.5.
Design science is not a research strategy - instead, different research
strategies can be used in design science projects, as pointed out in Sec-
tion 4.2.
Design science is not action research -design science always creates or
positions an artefact, which is not required in action research, see Sec-
tion 4.1.
Design science is not a research paradigm- a design science project can
benefit from both positivist and interpretivist approaches, as discussed
in Section 12.4.
So, what is design science? The definition from Section 1.4 states that
design science is the scientific study and creation of artefacts as they
are developed and used by people with the goal of solving practical
problems. Thus, design science is a way of studying artefacts. Design
science takes a problem solving stance, starting from problems experi-
enced by people in practices and then trying to solve them. It does so by
creating, positioning and repurposing artefacts that can function as so-
lutions to the problems. In this work, design science will include empiri-
cal studies like problem explication and evaluation, but this is not the
whole story. In addition, design science includes problem solving in the
form of artefact design.

Further Reading
Oates (2005) discusses research paradigms in the context of infor-
mation systems and computing. An introduction to interpretivism is
given by Burr (2003). Vaishnavi and Kuechler (2004) discuss re-
search paradigms and their relevance to design science. Baskerville
(2008) discusses what design science is not.

<!-- Page 132 -->
References

Avison, D. and Fitzgerald, G. (2006). Information Systems Development:
Methodologies, Techniques & Tools. 4th ed. McGraw-Hill.
Baskerville, R. (2008). What design science is not European journal ofIn-
formation Systems, 17 (5), p.441-443.
Beck, K and Beedle, M. (2001). The Agile Manifesto. [Online]. Available at:
http:/fagilemanifesto.org/ [Accessed: 16 July 2012].
Bennett, J. G. (1985). Dramatic Universe: Man and His Nature v. 3. New ed.
Claymont Communications, U.S.
Bhattacherjee, A. (2012). Social Science Research: Principles, Methods, and
Practices. 2nd ed. CreateSpace.
Boehm, B. W. (1981). Software Engineering Economics. 1st ed. Prentice Hall.
Bolstorff, P. and Rosenbaum, R. G. (2007). Supply Chain Excellence: A Hand-
book for Dramatic Improvement Using the Scor Model. AMACOM Div Ameri-
can Mgmt Assn.
Booth, W. C., Colomb, G. G. and Williams, J. M. (2008). The Craft of Research.
Third ed. University Of Chicago Press.
de Bono, E. (1973). Lateral Thinking: Creativity Step by Step. Harper Colo-
phon.

<!-- Page 133 -->
Brown, T. (2009). Change by Design: How Design Thinking Transforms Or-
ganizations and Inspires Innovation. Harper Business.
Burr, V. (2003). Social Constructionism. 2nd ed. Routledge.
Cause and Effect Analysis (Fishbone Diagrams)- Problem Solving Tools from
MindTools.com. [Online]. Available at:
http:/ jwww.mindtools.comjpagesfarticlejnewTMC_03.htm [Accessed: 30
June 2012].
Cetina, K. K., Schatzki, T. R. and Savigny, E. von (eds.). (2001). The Practice
Turn in Contemporary Theory. Routledge.
Checkland, P. (1999). Systems Thinking, Systems Practice: Includes a 30-Year
Retrospective. 1st ed. Wiley.
Chesbrough, H. W. (2005). Open Innovation: The New Imperative for Creat-
ing And Profiting from Technology. First Trade Papered. Harvard Business
Review Press.
Clements, P., Kazman, R. and Klein, M. (2001). Evaluating Software Architec-
tures: Methods and Case Studies. 1st ed. Addison-Wesley Professional.
Cohn, M. (2009). Succeeding with Agile: Software Development Using Serum.
1st ed. Addison-Wesley Professional.
Cross, N. (2011). Design Thinking: Understanding How Designers Think and
Work. Berg Publishers.
Day, J. D. and Zimmermann, H. (1983). The OS! reference model. Proceed-
ings of the IEEE, 71 (12), p.1334- 1340.
Delone, W. H. and McLean, E. R. (2003). The DeLone and McLean Model of
Information Systems Success: A Ten-Year Update. journal of Management
Information Systems, 19 (4), p.9-30.
Denscombe, M. (2010). The Good Research Guide: for small-scale social re-
search projects. 4th ed. Open University Press.
Dix, A. (2007). Designing for appropriation. In: Proceedings of the 21st Brit-
ish HCI Group Annual Conference on People and Computers: HCI...but not as
we know it- Volume 2, BCS-HCI '07, 2007, Swinton, UK, UK: British Com-
puter Society, p.27-30.

<!-- Page 134 -->
Dix, A. (2009). HCI 3e- Ch 9: Evaluation techniques. Technology. [Online].
Available at: http:/fwww.slideshare.netfalanjohndix/hci-3e-ch-9-
evaluation-techniques [Accessed: 1 July 2012].
Dixit, A. (2011). The 'IMRAD' format: a concise and clear way to present a
scientific study. Indian journal of Medical Specialities. [Online]. Available at:
http:/fwww.ijms.infarticles/2/2/the-imrad-format-a-concise-and-clear-
way-to-present-a-scientific-study.html [Accessed: 1 July 2012].
Eisenhardt, K M. (1989). Agency theory: An assessment and review. The
AcademyofManagementReview, 14 (1), p.57-74.
Gibbons, A. S. and Bunderson, C. V. (2005). Explore, Explain, Design. In:
Encyclopedia ofSocial Management, Elsevier, p.927-938.
Goldkuhl, G. (2012). From Action Research to Practice Research. Austral-
asian journal of Information Systems, 17 (2).
Gregor, S. (2006). The nature of theory in information systems. MIS Quar-
terly, 30 (3), p.611-642.
Gregor, S. and Jones, D. (2007). The Anatomy of a Design Science Theory.
journal of the Association for Information Systems, 8 (5), p.312-3 3 5.
Hevner, A. R., March, S. T., Park, J. and Ram, S. (2004). Design science in
information systems research. MIS Quarterly, 28 (1), p.75-105
Horkheimer, M. (1975). Critical Theory: Selected Essays. 1st ed. Continuum
Publishing Corporation.
Kroll, P. and Kruchten, P. (2003). The Rational Unified Process Made Easy: A
Practitioner's Guide to the RUP: A Practitioner's Guide to the RUP. 1st ed.
Addison-Wesley Professional.
Kuhn, T. S. (2012). The Structure ofScientific Revolutions: 50th Anniversary
Edition. Fourth ed. University Of Chicago Press.
Madhavan, R. and Grover, R. (1998). From Embedded Knowledge to Embod-
ied Knowledge: New Product Development as Knowledge Management
journal of marketing: A quarterly publication of the american marketing
association, 62 (4), p.1-12.
March, S. T. and Smith, G. F. (1995). Design and natural science research on
information technology. Decision Support Systems, 15 (4), p.251-266.

<!-- Page 135 -->
Moody, D. (2003). The Method Evaluation Model: A Theoretical Model for
Validating Information Systems Design Methods. ECIS 2003 Proceedings.
Moody, D. L. (2005). Theoretical and practical issues in evaluating the quali-
ty of conceptual models: current state and future directions. Data & Know-
ledge Engineering, 55 (3), p.243-276.
Nussbaum, M. C. (2007). Frontiers of]ustice: Disability, Nationality, Species
Membership (Tanner Lectures of Human Values. Belknap Press of Harvard
University Press.
Oates, B. J. (2005). Researching Information Systems and Computing. 1st ed.
Sage Publications Ltd.
Osterle, H., Becker, J., Frank, U., Hess, T., Karagiannis, D., Krcmar, H., Loos, P.,
Mertens, P., Oberweis, A. and Sinz, E. J. (2010). Memorandum on design-
oriented information systems research. European journal of Information
Systems, 20 (1), p.7-10.
Peffers, K., Tuunanen, T., Rothenberger, M.A. and Chatterjee, S. (2007). A
Design Science Research Methodology for Information Systems Research.
journal ofManagement Information Systems, 24 (3), p.45-77.
Pohl, K. (2010). Requirements Engineering: Fundamentals, Principles, and
Techniques. 1st ed. Springer Publishing Company, Incorporated.
Polya, G. (1973). How to Solve it. 2nd ed. Open University Press.
Pries-Heje, J., Baskerville, R. and Venable, J. (2008). Strategies for Design
Science Research Evaluation. ECIS 2008 Proceedings.
Ritchey, T. (2007). Wicked Problems- Structuring Social Messes with Mor-
phological Ana{ysis. [Online]. Available at:
http:/fwww.swemorph.comfpdfjwp.pdf [Accessed: 30 June 2012].
Sein, M., Henfridsson, 0., Purao, S., Rossi, M. and Lindgren, R. (2011). Action
Design Research. Management Information Systems Quarter{)!, 35 (1), p.37-
56.
Simon, H. A. (1996). The Sciences of the Artificial- 3rd Edition. third ed. The
MIT Press.
Sommerville, I. and Sawyer, P. (1997). Requirements Engineering: A Good
Practice Guide. 1st ed. New York, NY, USA: John Wiley & Sons, Inc.

<!-- Page 136 -->
Sorensen, C. (2002). This is Not an Article. [Online]. Available at:
http:/ jmobility.lse.ac.ukfdownloadfSorensen2005b.pdf [Accessed: 27 July
2012].
Vaishnavi, V. and Kuechler, W. (2004). Design Science Research in Infor-
mation Systems. [Online]. Available at: http:/Jwww.desrist.orgfdesrist/
[Accessed: 27 July 2012].
Venkatesh, V. and Davis, F. D. (2000). A Theoretical Extension of the Tech-
nology Acceptance Model: Four Longitudinal Field Studies. Manage. Sci., 46
(2), p.186-204.
Walls, J. G., Widmeyer, G. R. and El Sawy, 0. A. (2004). Assessing Infor-
mation System Design Theory in Perspective: How Useful Was our 1992
Initial Rendition? journal ofInformation Technology Theory and Application,
6 (2), p.43-58.
Weber, R. (2004). Editor's comments: the rhetoric of positivism versus in-
terpretivism: a personal view. MIS Quarterly, 28 (1), p.iii-xii.
Wikipedia contributors. (2012). Knowledge. Wikipedia, the free encyclope-
dia, Wikimedia Foundation, Inc. [Online]. Available at:
http: f f en.wikipedia.orgjw/index.php?title=Knowledge&oldid=502162616
[Accessed: 15 July 2012].

<!-- Page 137 -->
Appendix

Template for a Design Science Thesis

This appendix provides a template that can be used for structuring a
design science thesis at bachelor, master or PhD level. The first parts
of the template address the general background and methodology. It
then moves on to the five design science activities and ends with a
part on discussion and conclusions. In some sense, a design science
thesis can be viewed as including five mini theses, one for each de-
sign science activity. Thus, the template includes five parts, Part IV to
Part VIII, corresponding to these activities, where each part address-
es its own research question. However, in many theses, some part
can be omitted andfor two parts can be merged into a single chapter.
For example, Part IV and part V can be merged into a chapter "Prob-
lem and Requirements"; Part VI can form a separate chapter "Devel-
opment"; Part VII can be omitted; and Part VIII can form a chapter
entitled "Evaluation". In this case, Part IV to Part VIII will be ad-
dressed in only three chapters. Other parts can also be merged into
one chapter, and sometimes one part can give rise to several chap-
ters.

<!-- Page 138 -->
Abstract
The abstract is to summarize the main points of the thesis. It should
briefly describe the background, practical problem to be addressed,
goal, choice of methods, application of methods, results, and conclu-
sions. The abstract should be self-contained so that it can be read
independently from the rest of the thesis. The abstract should be
concise but yet detailed enough that a reader can decide whether the
paper is of interest to her.

Part !-Introduction

Background
The background section is to provide concise information required
for understanding the problem and the goal of the thesis. The back-
ground typically includes a description of the practice in which the
problem arises.
Problem
The problem section is to describe the practical problem that moti-
vates the thesis. A practical problem is often a situation that involves
or causes significant difficulties, disadvantages or risks to people or
organizations, such as people being exposed to health hazards, busi-
nesses losing money or citizens receiving poor service from govern-
ment agencies. A practical problem can also be about new possibili-
ties, e.g. how tablets could be used in health care. A problem should
be of general interest. The problem should be described in such a
way that the reader becomes convinced that it is important to ad-
dress it. An example of a problem is "Many elderly experience diffi-
culties in using high-speed scanning systems for self-service in gro-
cery stores and refrain from using them."

<!-- Page 139 -->
Goal
The goal section is to formulate the goal of the thesis. A goal can be
formulated as a question, e.g. "How can an architecture for high-
speed scanning systems for self-service in grocery stores be de-
signed so that the systems are suitable for the elderly?" A goal can
also be more directly formulated, e.g. "The goal is to design an archi-
tecture for high-speed scanning systems for self-service in grocery
stores that are suitable for the elderly." The goal should relate to the
problem, i.e. the problem should be addressed by achieving the goal.
A goal should be of general interest, i.e. it should be interesting not
only for a local practice. The section should make clear what type of
artefact is to be developed, such as a model or a method.

Part II Extended Background
This part should include two sub-parts, The first sub-part should
include a description of what knowledge from the knowledge base
that has been used as a basis for the research carried out. The se-
cond sub-part should include a description and discussion of re-
search that is related to the research presented in the thesis. Differ-
ences between the work of the thesis and related work should be
described. Part II should give the reader basic background infor-
mation for understanding the research presented in the thesis as
well as a base for validating the originality of the presented research.

Part Ill Method
This part is to first explain why design science is an appropriate ap-
proach for the thesis. It should then provide a description of the
methods used, particularly the research strategies and research
methods chosen. If creative methods or systems development meth-
ods have been used, these should also be described. All choices shall
be justified, and the advantages and disadvantages of the choices
shall be described. The part is also to discuss alternatives and why
these were not used. Relevant ethical considerations are to be made.

<!-- Page 140 -->
Part IV Explicate Problem
This part is to precisely formulate the initial problem that was intro-
duced in Part I, explain its significance and possibly analyze its un-
derlying causes. This part can sometimes be omitted if the initial
problem is sufficiently well described and analyzed in Part I. Howev-
er, there are also theses in which problem explication is a large and
important part.
Research question
This section is to formulate the research question that forms the
basis of the problem explication. This can be expressed as a variation
of the following question: "What is the problem experienced by some
stakeholders of a practice and why is it important?"
Method Application
If the problem explication was based on a literature study, this sec-
tion should specify the databases and search queries that were used.
If an empirical study was undertaken, the section should describe
how the chosen research strategies and methods were applied. For
example, if interviews were used for data generation, the design of
the interview questions should be discussed as well as the set-up of
the interview situation. Furthermore, the section is to show that the
method application is effective, i.e. that it helps answer the research
question of this part.
Results and analysis
This section is to describe and analyze the results of the problem
explication. Conclusions are drawn that form the basis for answering
the research question of this part. The certainty of the conclusions is
to be discussed, for example in terms of validity, reliability, and
transferability.

Part V: Outline Artefact and Define Requirements
This part is to outline a solution to the explicated problem in the
form of an artefact and identify the requirements for this artefact.

<!-- Page 141 -->
Research question
This section shall formulate the research question that forms the
basis for the requirements definition. This can be expressed as a
variation on the following question: "What artefact can be a solution
for the explicated problem and which requirements on this artefact
are important for the stakeholders?"
Method Application
See Part IV above.
Results and analysis
See Part IV above.

Part VI Design and Develop Artefact
This section is to describe both the developed artefact and the pro-
cess followed in its development. If the thesis only evaluates an arte-
fact, this part only includes a description of it.
Development process
This section is to describe how the development of the artefact was
carried out, particularly the methods used. The use of systems de-
velopment methods, creative methods as well as research strategies
and research methods is to be described here. Design decisions and
the reasons for these (design rationale) are to be discussed.
Artefact Description
This section is to describe the developed artefact. The functionality
and construction of the artefact should be described.

Part VII Demonstration
This part is to show how the developed artefact can be used in one
case. The part is omitted if no demonstration was carried out.
Research question
This section shall formulate the research question that forms the
basis for the demonstration. This can be expressed as a variation on

<!-- Page 142 -->
the following question: "How can the developed artefact be used to
address the explicated problem in one case?"
Method Application
This section is to describe how the chosen research strategies and
research methods were applied. Furthermore, the section is to show
that the method application is effective, i.e. that it helps answer the
research question of this part.
Results and analysis
See Part IV.

Part VIII Evaluation
This part is to evaluate the developed artefact, addressing both the
defined requirements and the explicated problem.
Research question
This section is to formulate the research question that forms the
basis for the evaluation. This can be expressed as a variation on the
following question: "How well does the artefact solve the explicated
problem and fulfil the defined requirements?"
Method Application
If an empirical study was undertaken, the section should describe
how the chosen research strategies and methods were applied. Fur-
thermore, the section is to show that the method application is effec-
tive, i.e. that it helps answer the research question of this part.
Results and analysis
See Part IV.

Part IX Discussion
This section is to summarize the findings and conclusions of the pre-
ceding parts. A discussion of future research is also to be included in
this part. Significance and originality is to be discussed. Ethical and
societal implications of using the artefact should be discussed.

<!-- Page 143 -->
References
The reference list should be formatted according to some established
reference system.

Appendices
Not mandatory. An appendix includes material that supports the
thesis, but for some reason it is not appropriate to be included in the
main text. An appendix may include questionnaire forms and raw
data.
