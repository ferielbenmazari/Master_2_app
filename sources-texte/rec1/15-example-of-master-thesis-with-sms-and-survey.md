<!-- Page 1 -->
Master of Science in Software Engineering
October 2020
 Customer communication challenges in
    Agile Requirements Engineering
                            Abhinav Ram Kola
  Faculty of Computing, Blekinge Institute of Technology, 371 79 Karlskrona, Sweden

<!-- Page 2 -->
This thesis is submitted to the Faculty of Computing at Blekinge Institute of Technology in
partial fulﬁlment of the requirements for the degree of Master of Science in Software Engineering.
The thesis is equivalent to 20 weeks of full time studies.
The authors declare that they are the sole authors of this thesis and that they have not used
any sources other than those listed in the bibliography and identiﬁed as references. They further
declare that they have not submitted this thesis at any other institution to obtain a degree.
Contact Information:
Author(s):
Abhinav Ram Kola
E-mail: abko18@student.bth.se
University advisor:
Davide Fucci
Department of Software Engineering
Faculty of Computing                               Internet : www.bth.se
Blekinge Institute of Technology                   Phone    : +46 455 38 50 00
SE–371 79 Karlskrona, Sweden                       Fax      : +46 455 38 50 57

<!-- Page 3 -->
                                                                     Abstract
Context and background: Requirements engineering(RE) is a ﬁrst and a very
important phase in any software development which helps in building a suitable
and customer satisfactory product. In the past few years, the use of Agile software
development has become popular in the industry. Customer communication plays
an important role in any software development life cycle. Customers state the re-
quirements needed to develop a product in the Requirements Engineering phase. A
project is likely to fail due to problems in customer communication during the RE
phase.
Objective: This thesis aims to study the Customer communication challenges in
Agile requirements engineering, prioritize these challenges, and also ﬁnd out the mit-
igation strategies to overcome these challenges.
Research Method: A systematic mapping study is conducted to ﬁnd out the
customer communication challenges. Based on the data collected from the system-
atic mapping study, a survey is conducted to ﬁnd out the mitigation strategies to
overcome the customer communication challenges faced in the RE phase and also
prioritize these challenges.
Results: Based on the data collected from the systematic mapping study, a to-
tal of 18 customer communication challenges are identiﬁed. In the second step, a
survey is conducted based on the identiﬁed challenges. The prioritization of these
challenges is done by calculating the risk analysis of the challenges from the survey
data. And ﬁnally, mitigation strategies are mentioned to overcome all the identiﬁed
18 challenges.
Keywords
Requirements engineering, Agile, customer collaboration, Agile requirement engi-
neering, customer communication, systematic mapping study, Survey.

<!-- Page 4 -->
                                                 Acknowledgments
Working on this thesis has been a wonderful experience ﬁlled with intense leaning.
This thesis could not have been possible without the guidance and support from the
people mentioned below.
   I would like to express my deepest gratitude to my thesis supervisor, Dr. Davide
Fucci who constantly motivated and supported me from start to end of the thesis.
He was very patient with me and constantly cleared all the doubts raised by me.
Without his supervision, this thesis would not have been completed to which I am
very grateful and I learned a lot under his skilled guidance.
    I am always grateful to my parents, Hari Mohan Babu and Neela Ramani and
my brother Kaushal Ram for their unconditional love, help and support that made
me who I am. I would also like to thank my friends for their constant support and
motivation. I would like to dedicate my success to all these people without whom
this thesis could not have been completed. Thank you, everyone!
                                        ii

<!-- Page 5 -->
                                                                     Contents
Abstract                                                                              i
Acknowledgments                                                                      ii
1 Introduction                                                                       2
  1.1 Aims and Objectives . . . . . . . . . . . . . . . . . . . . . . . . . . .      3
       1.1.1 Aim: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    3
       1.1.2 Objectives: . . . . . . . . . . . . . . . . . . . . . . . . . . . .     3
  1.2 Research Questions . . . . . . . . . . . . . . . . . . . . . . . . . . . .     3
  1.3 Thesis Outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   4
2 Background                                                                         5
  2.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     5
      2.1.1 Agile . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    5
      2.1.2 Requirements engineering . . . . . . . . . . . . . . . . . . . .         7
      2.1.3 Requirements engineering process in Agile . . . . . . . . . . .          7
3 Related Work                                                                        9
  3.1 Research Gap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     10
4 Research Method                                                                    11
  4.1 Research Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    12
  4.2 Systematic Mapping Study . . . . . . . . . . . . . . . . . . . . . . . .       13
      4.2.1 SMS design and planning . . . . . . . . . . . . . . . . . . . .          13
      4.2.2 Deﬁnition of research questions: . . . . . . . . . . . . . . . . .       14
      4.2.3 Conduct search: . . . . . . . . . . . . . . . . . . . . . . . . . .      14
      4.2.4 Screening of papers: . . . . . . . . . . . . . . . . . . . . . . .       15
      4.2.5 Data extraction and mapping process: . . . . . . . . . . . . .           17
  4.3 Survey . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   19
      4.3.1 Survey design . . . . . . . . . . . . . . . . . . . . . . . . . . .      19
      4.3.2 Deﬁning research objectives . . . . . . . . . . . . . . . . . . .        20
      4.3.3 Identifying target audience and sampling data . . . . . . . . .          20
      4.3.4 Designing survey instrument . . . . . . . . . . . . . . . . . . .        20
      4.3.5 Survey instrument evaluation . . . . . . . . . . . . . . . . . .         21
      4.3.6 Analyzing survey data . . . . . . . . . . . . . . . . . . . . . .        22
      4.3.7 Documenting and reporting . . . . . . . . . . . . . . . . . . .          22
                                          iii

<!-- Page 6 -->
5 SMS Results and Analysis                                                           23
  5.1 Results of systematic mapping study . . . . . . . . . . . . . . . . . .        23
      5.1.1 List of studies . . . . . . . . . . . . . . . . . . . . . . . . . . .    24
      5.1.2 Frequency of published articles: . . . . . . . . . . . . . . . . .       27
6 Survey results                                                                     32
  6.1 Survey results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   32
      6.1.1 Demographics . . . . . . . . . . . . . . . . . . . . . . . . . . .       32
      6.1.2 Challenges: . . . . . . . . . . . . . . . . . . . . . . . . . . . .      35
      6.1.3 Mitigation . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     45
7 Discussion                                                                         60
      7.0.1 Limitations of the study . . . . . . . . . . . . . . . . . . . . .       64
8 Threats to validity                                                                65
  8.1 SMS validity threats . . . . . . . . . . . . . . . . . . . . . . . . . . .     65
      8.1.1 Internal validity . . . . . . . . . . . . . . . . . . . . . . . . . .    65
  8.2 Survey validity threats . . . . . . . . . . . . . . . . . . . . . . . . . .    65
      8.2.1 Internal validity . . . . . . . . . . . . . . . . . . . . . . . . . .    66
      8.2.2 External Validity . . . . . . . . . . . . . . . . . . . . . . . . .      66
      8.2.3 Construct Validity . . . . . . . . . . . . . . . . . . . . . . . .       66
      8.2.4 Conclusion Validity . . . . . . . . . . . . . . . . . . . . . . . .      66
9 Conclusion & future work                                                           68
  9.1 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   68
  9.2 Future work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    69
References                                                                           70
A Survey Guide                                                                       74
  A.1 Survey Invitation . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    74
  A.2 Survey Questionnaire . . . . . . . . . . . . . . . . . . . . . . . . . . .     75
      A.2.1 Demographics . . . . . . . . . . . . . . . . . . . . . . . . . . .       75
      A.2.2 Challenges . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     77
      A.2.3 Mitigation strategies . . . . . . . . . . . . . . . . . . . . . . .      79
                                          iv

<!-- Page 7 -->
                                                         List of Figures
1.1   Thesis roadmap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      4
2.1   Agile manifesto . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     5
2.2   Agile principles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    7
4.1   Research Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    12
4.2   SMS design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     13
4.3   Flow of systematic mapping study . . . . . . . . . . . . . . . . . . . .       16
4.4   Survey Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    19
5.1   Published articles . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   27
5.2   Primary studies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    27
6.1  Q1. Role of the respondent . . . . . . . . . . . . . . . . . . . . . . . .      32
6.2  Q2. Experience of the respondent . . . . . . . . . . . . . . . . . . . .        33
6.3  Q3. Size of organization . . . . . . . . . . . . . . . . . . . . . . . . .      33
6.4  Q4. Sourcing strategy of organization . . . . . . . . . . . . . . . . . .       34
6.5  Q5. Agile method . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      35
6.6  Q6.How many times have these selected challenges occurred in your
     project? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    36
6.7 Q7.What is the impact of the below-mentioned challenges on your
     projects? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     37
6.8 Bar graph of occurrence of challenges . . . . . . . . . . . . . . . . .          40
6.9 Bar graph of impact of challenges . . . . . . . . . . . . . . . . . . . .        42
6.10 Barplot with trend line chart of prioritized challenges . . . . . . . . .       44
6.11 Thematic map for challenge 1,2 & 3 . . . . . . . . . . . . . . . . . . .        46
6.12 Thematic map for challenge 4, 5 & 6 . . . . . . . . . . . . . . . . . .         48
6.13 Thematic map for challenge 6, 7 & 8 . . . . . . . . . . . . . . . . . .         50
6.14 Thematic map for challenge 10 & 11 . . . . . . . . . . . . . . . . . .          52
6.15 Thematic map for challenge 12 & 13 . . . . . . . . . . . . . . . . . .          54
6.16 Thematic map for challenge 14 & 15 . . . . . . . . . . . . . . . . . .          56
6.17 Thematic map for challenge 16, 17 & 18 . . . . . . . . . . . . . . . .          57
                                         v

<!-- Page 8 -->
                                                            List of Tables
3.1   Customer communication challenges found from previous studies . . .             10
4.1   SPIDER search . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       14
4.2   Search string formulation . . . . . . . . . . . . . . . . . . . . . . . .       15
4.3   Final search string . . . . . . . . . . . . . . . . . . . . . . . . . . . .     15
4.4   Data extraction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     17
4.5   Demographics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        21
4.6   Challenges . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      21
4.7   Mitigation strategies . . . . . . . . . . . . . . . . . . . . . . . . . . .     21
5.1   SMS papers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      23
5.2   Primary and secondary papers . . . . . . . . . . . . . . . . . . . . . .        23
5.3   Final set of papers . . . . . . . . . . . . . . . . . . . . . . . . . . . .     24
5.4   List of studies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   25
5.5   List of studies from secondary studies . . . . . . . . . . . . . . . . . .      26
5.6   Final list of studies . . . . . . . . . . . . . . . . . . . . . . . . . . . .   29
5.7   Customer communication challenges . . . . . . . . . . . . . . . . . . .         31
6.1   Occurrence of challenges . . . . . . . . . . . . . . . . . . . . . . . . .      38
6.2   Analysed occurrence of challenges . . . . . . . . . . . . . . . . . . . .       39
6.3   Impact of challenges . . . . . . . . . . . . . . . . . . . . . . . . . . .      40
6.4   Analysed impact of challenges . . . . . . . . . . . . . . . . . . . . . .       41
6.5   Prioritized challenges . . . . . . . . . . . . . . . . . . . . . . . . . . .    43
6.6   Prioritized challenges . . . . . . . . . . . . . . . . . . . . . . . . . . .    44
6.7   Themes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      45
                                         1

<!-- Page 9 -->
Chapter 1
                                                             Introduction
Requirements engineering(RE) is the important phase in any software development
life cycle. The software development life cycle starts with requirements gathering.
Requirements engineering is used for identifying stakeholders, their needs and docu-
menting requirements that help in delivering a satisfactory ﬁnal product[31].
    Day by day Agile software development is gaining popularity in the world. The
evolution from the traditional methods to Agile methods have changed the require-
ments engineering extremely. In traditional requirement engineering approach, the
RE phase occurs only once at the beginning of development process and any changes
in requirements in later stages can be very expensive to implement. But in Agile
software development the requirements engineering phase occurs at all stages of the
development. Changes in the requirements can be made at any stage of the Ag-
ile software development. For this reason Agile software development became very
popular in RE ﬁeld[13].
    Agile manifesto states "Customer collaboration over contract negotiation" and
"Individuals and interactions over processes and tools" [15], which means customer
collaboration and individual interactions are given priority than contract negotiation
and processes.
   In Agile software development customer plays an important role in every stage of
development process which leads to the delivery of a customer satisfactory product.
In Agile, customer communication occurs multiple times rather than a single meeting
to provide and update requirements at any stage of development cycle. Customer
communication plays a key role in Agile software development but it has its own
challenges[17].
    Customer communication is the key in requirements gathering. Many risks arise
in a project due to problems in customer communication during requirements engi-
neering phase. Problems in Requirements engineering leads to failure of many soft-
ware projects[23]. Although there are researches on challenges in RE[14][20][7][18],
but there are not many researches focusing specially on customer communication
and possible mitigation strategies to overcome customer communication challenges
which is the aim of this thesis.
                                          2

<!-- Page 10 -->
1.1. Aims and Objectives                                                              3
1.1     Aims and Objectives
1.1.1    Aim:
The aim of this thesis is to investigate, prioritize and mitigate the challenges that
arise during customer communication in an Agile Requirements engineering process.
1.1.2    Objectives:
The objectives of this thesis are:
  1. To understand the challenges faced during Agile Requirements engineering
     phase and study the challenges related to customer communication.
  2. To identify the factors and prioritize these challenges to identify the most im-
     portant challenges.
  3. To identify solutions to overcome these challenges that are faced to reduce the
     risks in the project.
To do this, two research methods are considered, which are systematic mapping study
and survey. From the systematic mapping study, a list of customer communication
challenges faced in Agile requirements engineering are identiﬁed. Based on the data
collected from systematic mapping study a survey will be conducted to ﬁnd out the
mitigation strategies to the identiﬁed customer communication challenges faced in
Agile RE and also prioritization of these challenges is done.
1.2     Research Questions
Research questions are formulated based on the aims and objectives mentioned in
section 1.1.
RQ1: What are the customer communication challenges faced in Require-
ment engineering process in Agile software development?
Motivation: Customer communication plays an important role in Requirements
phase of any software development life cycle. Problems in customer communication
in RE phase can lead to many risks in the software project. So, it is important to
identify the challenges related to customer communication in Agile RE.
RQ2: How are the customer communication challenge prioritized?
Motivation: Based on the challenges gathered from RQ1, the prioritization of the
challenges is done based on the frequency of occurrence of these challenges in a project
and impact of these challenges on the project. This prioritization helps identify the
important challenges that needs more eﬀort and attention that helps reduce risks in
the project.
RQ3: What are the mitigation strategies that can be proposed for these
challenges?
Motivation:From RQ1, the customer communication challenges in Agile RE phase
are collected. To overcome these challenges proper mitigation strategies are found
that reduces the risks in the project.

<!-- Page 11 -->
4                                                           Chapter 1. Introduction
1.3     Thesis Outline
This thesis report is structured into six sections. In Section 1, introduction is de-
scribed that gives a description about the research topic , aims & objectives, the
research questions and the research gap of the thesis. In Section 2, background and
related work is described. Section 3 mentions the research methodologies used in the
study. Section 4 discusses the results and analysis of the thesis. Section 5 discusses
the information collected from the Section 4. Section 6 mentions the conclusion of
the thesis and also addresses the future work that can be done as an extension to
this research. The thesis outline is mentioned in the ﬁgure 1.1.
                            Figure 1.1: Thesis roadmap

<!-- Page 12 -->
Chapter 2
                                                               Background
2.1     Background
This section gives an insight of terminologies and the concepts that are related to
this thesis. The ﬁrst step is to know what is Agile and why Agile is used. Next step
is to know how requirements engineering takes place in Agile software development.
2.1.1    Agile
Agile software development has become extensively increasing in software systems
for the past decade leaving the traditional life cycle models behind[2]. Agile method-
ology strives in delivering the product faster by giving a high priority to customer
satisfaction. Agile is a continuously iterative process where there is a continuous
communication between the customers and the developers in each step of the soft-
ware development life cycle. Agile is open to changes in requirements at any phase
of life cycle. This led to the increase in use of Agile in software systems. Agile
software development consists of a set of practises and frameworks that are based
of 4 values and 12 principles[15]. Agile manifesto and principles are implemented
with the purpose of continuous delivery of a better software that provides priority to
customer satisfaction.
Agile Manifesto
"We are uncovering better ways of developing software by doing it and helping others
do it"[15]. The Agile manifesto consists of four values to which are:
                          Agile Manifesto [15]
      1. Individuals and interactions over processes and tools.
      2. Working software over comprehensive documentation.
      3. Customer collaboration over contract negotiation.
      4. Responding to change over following a plan.
                            Figure 2.1: Agile manifesto
                                          5

<!-- Page 13 -->
6                                                            Chapter 2. Background
    • Communication: The ﬁrst item mentioned in the manifesto states that in-
      dividuals and interactions are given importance than the process and tools.
      The customers need to explain the product that is needed by them clearly
      to the team that delivers the product. The priority is given to people and
      communication between them.
    • Customer collaboration: The third item mentioned in the manifesto states
      customer collaboration is given more importance to contract negotiation. Agile
      is an iterative process that provides continuous delivery to the customer. Unlike
      traditional methods of signing the contract at early stages which is diﬃcult to
      change, the Agile allows opportunities for changes that the customer requests.
      Customer is involved and given control at every stage of the life cycle.
    • Change in Plan : From the fourth item mentioned in the manifesto, re-
      sponding to change is given more importance to following a ﬁxed plan. Agile
      methodology accommodates changes in plans and changes in requirements at
      any stage of life cycle. Unlike traditional methods the requirements are not
      gathered only at the start of life cycle but also at every stage of development
      life cycle. There is no ﬁxed plan and changes can be made at any point as per
      customers choice.
    From the ﬁgure 2.1, the listed three red colour items are considered and described
as these three items are related to this thesis.
Agile principles
The 4 Agile manifestos and 12 Agile principles are the foundation of Agile software
development process. These help in developing and delivering a desirable software
that the customer is satisﬁed with. This happens when the product delivered is
valuable to the customer. Based on the Agile manifesto the 12 Agile principles are
declared. These are:

<!-- Page 14 -->
2.1. Background                                                                                                  7
                                   Agile Principles[15]
        • Our highest priority is to satisfy the customer through early and continuous delivery of valuable
          software.
        • Deliver working software frequently, from a couple of weeks to a couple of months, with a preference
          to the shorter timescale.
        • Business people and developers must work together daily throughout the project.
        • Build projects around motivated individuals. Give them the environment and support they need, and
          trust them to get the job done.
        • The most eﬃcient and eﬀective method of conveying information to and within a development team
          is face-to-face conversation.
        • Welcome changing requirements, even late in development. Agile processes harness change for the
          customer’s competitive advantage.
        • Working software is the primary measure of progress.
        • Agile processes promote sustainable development. The sponsors, developers, and users should be able
          to maintain a constant pace indeﬁnitely.
        • Continuous attention to technical excellence and good design enhances agility.
        • Simplicity–the art of maximizing the amount of work not done–is essential.
        • The best architectures, requirements, and designs emerge from self-organizing teams.
        • At regular intervals, the team reﬂects on how to become more eﬀective, then tunes and adjusts its
          behavior accordingly.
                                     Figure 2.2: Agile principles
2.1.2      Requirements engineering
Requirements engineering is the process of deﬁning , collecting and maintenance of
the requirements. Bashar et al[31] deﬁnes requirements engineering as "Requirements
engineering (RE) is the process of discovering the purpose, by identifying stakehold-
ers and their needs, and documenting these in a form that is amenable to analysis,
communication, and subsequent implementation".
2.1.3      Requirements engineering process in Agile
The requirements engineering process in Agile software development is very dynamic
and ﬂexible in way of work[9]. The requirements engineering occurs diﬀerently in tra-
ditional and Agile software development. The main diﬀerence is that the requirement
engineering processes is focused on gathering all the requirements and documenting
them before the design phase in the traditional model, while in Agile requirements
engineering encourages change in requirements at any stage even at late stage in
the software development life-cycle[12]. Customer collaboration has changed a lot
in Agile requirements engineering. Customer was only involved in the early stage
of traditional software development to gather requirements and was not involved in

<!-- Page 15 -->
8                                                           Chapter 2. Background
the later phases. In Agile, the requirements engineering process is an iterative pro-
cess and not a sequential process where the development occurs in a short cycles[9].
Requirements engineering process in Agile occurs at all stages so the customer is
involved at all the phases of the development life cycle and performed multiple tasks
to make changes and update the requirements[17]. Initially, the requirements are
gathered from the customer and are prioritized based on the needs and wish of the
customers. These gathered requirements are discussed in couple of weeks or every
sprint based on agile frameworks used. Later the changes in requirements , re- pri-
oritization of these requirements and also the scope of the next iteration is deﬁned.

<!-- Page 16 -->
Chapter 3
                                                            Related Work
An empirical research conducted by Gizzatullina et al.[17] discusses the challenges in
Agile requirements engineering. This study is one of the reason that led to the mo-
tivation in conducting this thesis. Gizzatullina et al.[17] conducted semi structured
interviews to ﬁnd out few challenges in Agile Requirements Engineering. The future
work mentions to ﬁnd out mitigation strategies for these challenges.
    Naming the Pain in Requirements Engineering (NaPiRE) initiative which consists
of globally curated family of surveys conducted on the status and problems faced in
practical RE which was proposed by Daniel Mendez and Stefan Wagner. A global
family of survey was conducted by Mendez et al.[14] with the help of researchers from
diﬀerent geographic locations. This research was conducted to ﬁnd out the causes
and problems faced by practitioners in Requirements Engineering phase and also the
factors in RE phase that lead to failure of the project. This research identiﬁes few
of the challenges in RE phase which led to the motivation to conduct this research
to ﬁnd out the possible mitigation strategies to overcome the challenges related to
customer communication in RE phase.
    Inayat et al.[20] conducted a systematic literature review to analyze the impact
of Agile on Requirements Engineering. This review reveals the practises of Agile RE
and also the challenges phased in Agile Requirements Engineering. The ﬁndings of
this review helps this research in identifying the challenges in Agile RE. This research
intends to ﬁnd out the mitigation strategies for these challenges.
   Cao et al.[7] conducted an empirical study to ﬁnd out the Agile practices, its
beneﬁts and their challenges. The ﬁndings of this research helps this research to ﬁnd
out the mitigation strategies for these challenges.
    Heikki et al.[18] has conducted a mapping study to get a better understanding
of Requirements engineering and problems in RE of Agile software development.
This paper gives an insight in conducting this thesis. The future work states that
the methods provided to solve the challenges are weak and needs further research
which this thesis is going to provide. This study was conducted 6 years ago, as
Requirements engineering in ASD is a constantly improving and changing ﬁeld new
research must be conducted in ﬁnding out more recent problems and solutions of
these problems. Table 3.1 mentions few customer communication challenges found
from the mentioned studies. In this thesis more customer communication challenges
                                           9

<!-- Page 17 -->
10                                                          Chapter 3. Related Work
 Reference                      Customer Communication challenges
 Gizzatullina et al.[17]        Unwanted communication, Back to waterfall, New cus-
                                tomer on role, Disagreement by customer.
 Inayat et al.[20]              Rare customer involvement, Communication issues.
 Heikki et al.[18]              Problems with client or customer representatives.
 Mendez et al.[14]              Communication ﬂaws between project team and cus-
                                tomer, Under speciﬁed requirements by customer, Stake-
                                holders with diﬃculties in separating requirements from
                                known solution designs, insuﬃcient support by customer,
                                Weak access to customer needs and/or business informa-
                                tion.
     Table 3.1: Customer communication challenges found from previous studies
in Agile RE are mapped and mitigation strategies are provided to overcome these
challenges and also these challenges are prioritized.
3.1      Research Gap
There are many research studies dedicated to challenges in Requirements Engineer-
ing, but there isn’t much research that focuses only on customer communication in
Agile RE. This thesis solely focuses on challenges related to customer communication
in Agile RE phase.
Research like [20][7] focus on problems in requirement engineering, this thesis focuses
only on the challenges faced due to customer communication in Agile requirement
engineering. NaPiRE initiative conducted by Mendez et al[14] also provides few
problems in Requirements engineering but does not focus solely on customer com-
munication and does not provide mitigation for these challenges . The problems men-
tioned in the researches are not similar, each research discusses diﬀerent challenges
in requirements engineering. According to recent study conducted by Gizzatullina
[17] on challenges in Agile RE, the study mentions in future work to ﬁnd the mitiga-
tion strategies to the challenges. The research gap that this thesis ﬁlls is to identify
all the challenges focusing solely on customer communication in Agile Requirements
engineering and provide mitigation strategies to overcome these challenges.

<!-- Page 18 -->
Chapter 4
                                                   Research Method
In this section the research method and research questions are deﬁned to achieve the
aims and objectives of the thesis. The research method selection and motivation for
selecting the method is deﬁned. The process involved to conduct each method is
discussed in detail.
   There are three most commonly used empirical research methods according to
Wohlin [44]. These empirical methods are survey, case study and experiments. From
these mentioned empirical research methods, surveys are considered for this thesis.
The reason for not considering other two research methods are :
   • An experiment is not selected because , according to Wohlin et al.[44], an ex-
     periment is conducted in a controlled environment. According to this research
     there is no need for a controlled environment to achieve the aims of this study.
   • A case study is not selected because, according to Benbasat et al.[3] a case
     study is used to explore a phenomenon in a real time context by gathering
     information from a small sample of people or organization. This thesis aims to
     ﬁnd out the mitigation strategies for the customer communication challenges
     faced by many organizations covering a huge sample and not limiting it to a
     particular organization. To achieve this survey methodology is chosen.
    Secondary research is conducted for research synthesis that is done by collecting
data from the previously published studies[39]. The secondary research method that
is considered in this thesis is Systematic mapping study. The other popular secondary
research is systematic literature review. The reasons for not considering systematic
literature review is:
   • Systematic literature review is not considered because it takes up more time
     and high eﬀort to perform and analyze. Systematic mapping study covers more
     article and can structure larger ﬁeld that systematic literature review.
                                         11

<!-- Page 19 -->
12                                                   Chapter 4. Research Method
4.1      Research Design
To understand, identify and solve the challenges faced in the Agile Requirements
engineering, the following methods are proposed for the above research questions.
     • Systematic mapping study (RQ1)
     • Survey (RQ2 & RQ3)
To answer the RQ1 a systematic mapping study is chosen and to answer RQ2 and
RQ3 a survey is chosen. This is a mixed method approach where both quantitative
and qualitative data is obtained as results. The ﬁgure 4.1 gives the summary of the
research methods.
                            Figure 4.1: Research Design
From the systematic mapping study we list the customer communication challenges
faced in Agile requirements engineering. Based on the results collected from sys-
tematic mapping study we conduct a survey to ﬁnd out the mitigation strategies to
overcome these challenges and also prioritize these challenges.

<!-- Page 20 -->
4.2. Systematic Mapping Study                                                    13
4.2     Systematic Mapping Study
In this thesis a Systematic mapping study is conducted to answer RQ1 to ﬁnd out
the possible challenges related to customer communication in Agile requirements
engineering phase. A systematic mapping study is chosen to give an overview of
the research, the type of research and the results focusing on a particular research
topic. There are researches that mentions the challenges in Agile RE, in which
diﬀerent researches mentioned diﬀerent challenges. This study identiﬁes and maps
all customer communication challenges in Agile RE from previous studies.
Systematic mapping study is conducted by the following steps[32]:
4.2.1    SMS design and planning
                              Figure 4.2: SMS design

<!-- Page 21 -->
14                                                       Chapter 4. Research Method
4.2.2     Deﬁnition of research questions:
In this step it is decided to address which questions will be answered in Systematic
mapping study. The goal of the research is deﬁned in this step, which is to ﬁnd out
the customer communication challenges faced in RE phase (RQ1).
4.2.3     Conduct search:
In this step data collection takes place by collecting relevant articles using keywords
on academic databases. For searching relevant articles keywords like"Requirements
engineering","communication challenges","customer collaboration challenges" and"customer
communication challenges in requirement engineering" are considered. The search
strings are constructed using Boolean operators like OR & AND. A search strategy
tool SPIDER is used to design a search string.
Motivation for SPIDER:
Building a search string is the key and important step in conducting any systematic
mapping study. Building an initial key string is a diﬃcult and crucial step and many
risks can arise if the key string is not properly formulated. To formulate this search
string SPIDER search strategy is used by following its guidelines. SPIDER stands
for Sample, Phenomenon of interest, Design, Evaluation, Research gaps [8]. There
are other search strategy tools like SPICE, ECLIPSE and PICO, but these tools have
limitations like they cannot fully meets all the requirements of qualitative research for
speciﬁc researcher group and these tools cannot be suitable for diﬀerent qualitative
research questions. To overcome these limitations SPIDER tool was developed which
is a better strategy for qualitative research.
 SPIDER        Search term
 S             "Requirement* engineering" OR "Stakeholder* need*" OR "Requirement*
               elicitation" OR "Customer requirement*" OR "Customer need*"
 P of I        "Agile software development" OR "Scrum"
 D             "survey" OR "case study" OR "interviews" OR "focus groups" OR "observa-
               tions"
 E             "Customer communication challenge*" OR "Customer communication issue*"
               OR "Customer collaboration problem*"
 R             "mixed method*" OR "Qualitative method*" OR "Quantitative method*"
                              Table 4.1: SPIDER search
The databases used to ﬁnd the relevant articles are Scopus, ACM Digital library,
ScienceDirect and Springer.
    The table 4.2 describes the keywords and operators used in formulating the search
string.

<!-- Page 22 -->
4.2. Systematic Mapping Study                                                      15
                                 Search String formulation
 Keyword       Keywords                                                   Operators used
 sets
 Set 1         ( "Requirement* Engineering" OR "Stakeholder*              AND
               need*" OR "Requirement* elicitation" OR "Customer
               requirement*" OR "Customer need*" )
 Set 2         (“communication challenge*" OR "communication is-          AND
               sue*" OR "communication problem*" )
 Set 3         ("Agile software development")                             AND
                        Table 4.2: Search string formulation
                                      Final search string
 Search string             Description
 Taking set 1, set 2 and   ( "Requirement* Engineering" OR "Stakeholder* need*" OR "Re-
 Set 3 together (Set 1     quirement* elicitation" OR "Customer requirement*" OR "Cus-
 AND Set 2 AND Set         tomer need*" ) AND (“communication challenge*" OR "communi-
 3)                        cation issue*" OR "collaboration problem*" ) AND ( "Agile soft-
                           ware development")
                           Table 4.3: Final search string
The table 4.3 shows the search string that is used in the database to search for
data required for this research.
4.2.4    Screening of papers:
In this step the inclusion and exclusion criteria is taken into consideration. After
applying the search string in databases and gathering the articles, the next step is
to apply the inclusion/exclusion criteria to ﬁlter the papers that are relevant to the
aim and objectives of this thesis.
Inclusion Criteria:
   • Books, and peer reviewed articles like journals, conference papers that are
     related to the aim and objectives of this thesis are taken into consideration.
     The papers that report this data are taken into consideration.
   • Based on reading the title, keyword and abstract of the papers, the papers
     related to Agile requirements engineering are considered.
   • Articles from years 2001-2020 are considered because agile came into existence
     from 2000.
   • Articles which are accessible are considered.
   • Papers that are written only in English are considered.

<!-- Page 23 -->
16                                                      Chapter 4. Research Method
Exclusion Criteria:
     • Research that do not report any results or ﬁndings which are present only in
       form of PowerPoint presentations or abstracts are excluded.
     • Papers that are not related to Agile requirements engineering are excluded.
     • Papers that are not related to software engineering domain are excluded.
     • Studies that are not in English language are excluded.
     • Papers which have no accessibility are excluded.
     • Articles that are not peer reviewed like magazines, lecture notes, index pages
       are excluded.
     • Duplicate papers found in diﬀerent databases are excluded.
                    Figure 4.3: Flow of systematic mapping study
    The ﬁgure 4.3 shows the ﬂow of process that takes place in a systematic mapping
study. First, a set of papers is found from apply search string in databases. Second,
the initial collected set of papers in taken and inclusion/exclusion criteria is applied
to ﬁlter the studies. This is done by excluding papers of other languages that En-
glish, ﬁltering by time period of the studies, studies that are open source etc. After
this the papers are ﬁltered by reading the title, abstract and keywords of the papers
and even reading the whole paper sometimes to collect the papers that are relevant

<!-- Page 24 -->
4.2. Systematic Mapping Study                                                       17
to answer RQ1.
    After collecting the articles from the databases and applying Inclusion/ Exclu-
sion criteria, the papers are separated into primary studies and secondary studies.
Primary studies are the studies that are self conducted studies for gathering in-
formation. These primary studies include surveys, case studies, experiments etc.
Secondary studies are conducted to gather information for the previous studies.
    The other method of information gathering used in this thesis is by identifying
the primary studies from the secondary studies that are found from the database
search. The ﬁrst step is by going through all the references in the selected papers
to identify the primary studies. The next step is to read the title, abstract and
keywords of the primary studies that are collected from the reference list. Next the
papers that are not related to the customer communication challenges in Agile RE
are excluded. The duplicate articles that are found are also excluded. The ﬁnal set
of papers are considered after reading the studies that shows the results related to
customer communication challenges.
4.2.5    Data extraction and mapping process:
The data extraction is done to extract the required data from the papers to answer
the research question . Based on the classifying scheme of papers into categories data
is extracted and the results are mapped. The research articles collected are based on
following the checklist mentioned below in table 4.4.
 Property                 Description
 Title                    Articles are selected with the title relevant to challenges
                          in Agile requirements engineering.
 Abstract                 Articles are considered by reading the abstract and
                          checking if it is relevant to this thesis.
 Author                   Name of the author.
 Year of publication      Papers between the years 2000-2020 are considered.
 Language                 Articles only in the language English are considered.
 Article Type             Books, Journals, Conference papers that are related to
                          aim and objectives of this thesis are taken into consider-
                          ation.
 Research    methodol-    Articles with empirical research methods are considered.
 ogy
 Subject                  Articles related to Agile requirements engineering are
                          considered.
 Focus                    Customer communication challenges that occur during
                          requirements engineering phase in Agile.
 Target audience          Articles that are intended for researchers, practitioners,
                          industries are considered.
                            Table 4.4: Data extraction

<!-- Page 25 -->
18                                                       Chapter 4. Research Method
Above table 4.4 reports the data extraction which is collected in excel sheet. The
citations of papers are collected in excel after applying the search string on databases.
After the inclusion/exclusion the papers are marked green which are relevant to the
thesis and the discarded papers are marked red as shown in the above table 4.4.

<!-- Page 26 -->
4.3. Survey                                                                      19
4.3     Survey
A survey is proposed for answering RQ2 and RQ3 to ﬁnd out the mitigation strategies
to overcome the customer communication challenges and to prioritize these challenges
based on the impact and frequency of occurrence in the project . A survey is chosen
because it has a wider reach to the population as a result of which it gathers large
amounts of signiﬁcant data. A survey is used for describing, comparing and explain-
ing knowledge, behaviour and attributes by collecting useful information or data. To
conduct this survey based research few steps are considered. These are[30]:
4.3.1    Survey design
                            Figure 4.4: Survey Design

<!-- Page 27 -->
20                                                      Chapter 4. Research Method
4.3.2     Deﬁning research objectives
This is the ﬁrst step for conducting a survey in which the goal and objectives of
conducting this survey is deﬁned. The questions in this online questionnaire would
address the following:
     • To prioritize the challenges found from RQ1.
     • To ﬁnd out mitigation strategies to the customer communication challenges.
4.3.3     Identifying target audience and sampling data
The target audience are the intended population of respondents that are expected
the best to answer the survey. In this survey the target audience considered are the
members of an Agile team. The team members include Developers, Scrum master,
Product owner, tester, Architect owner, Technical & domain expert and integrator
that have previously worked on projects using Agile principles and methodologies.
These target audience are reached through Linkedin, social media and through per-
sonal contacts working in companies.
4.3.4     Designing survey instrument
In this step the survey questionnaire is designed. The survey questions are designed
based on the challenges collected from the systematic mapping study. For conduct-
ing this survey an online questionnaire is chosen that is created using Google Forms.
This survey consists of close-ended questions where the respondents are asked to
choose one of the options and open-ended questions where the answers may be a
sentence, paragraph or even more.
   The survey that is used in this thesis consists a total of 34 questions. The total
time taken to answer this survey is approximately 15 minutes. These questions are
used to collect the data that is categorized into three types as mentioned in the below
tables.
Demographics:
The table 4.5 displays the questions related to the demographics. This data is col-
lected to ﬁnd out the experience of the respondent in Agile, the Agile methodology
used, the type and size of the organization of the respondent, etc. The close ended
questions are answered in the form of multiple choice questions(MCQs) and the open
ended questions are answered in the form of short answer.
Challenges:
The table 4.6 mentions the questions that are used to collect the data related to
the challenges, impact of the challenges on the project and the number of times of
the occurrence of the challenges. The data collected from these questions is used to
answer RQ2 which is prioritization of the challenges.

<!-- Page 28 -->
4.3. Survey                                                                       21
 Q.no    Questions                                            Question Type
 1.      What is the name of your organization?               Open-ended(Short
                                                              ans)
 2.      What is your current role in the organization?       Close-ended(MCQs)
 3.      Please mention your working experience in an Ag-     Open-ended(Short
         ile environment?                                     ans)
 4.      Mention the size of your organization?               Close-ended(MCQs)
 5.      Specify the Agile method used in your project?       Close-ended(MCQs)
 6.      Mention which type of domain you are working?        Open-ended(Short
                                                              ans)
                             Table 4.5: Demographics
 Q.no    Questions                                            Question Type
 1.      What is the impact of the below-mentioned chal-      Close-ended(MCQs)
         lenges on your projects?
 2.      How many times have these selected challenges oc-    Close-ended(MCQs)
         curred in your project?
                               Table 4.6: Challenges
Mitigation strategies:
The table 4.7 mentions the questions that are related to mitigation strategies. These
questions are used to gather the data that helps in ﬁnding the mitigation strategies
to overcome the mentioned challenges. This set of questions help in answering the
RQ3. Addition to the main aim of RQ3, these question are also used to collect
information such as the aﬀects that are caused by these challenges on the projects.
 Q.no    Questions                                            Question Type
 1.      How do these selected challenges aﬀect your last     Open-ended(Long an-
         completed project based on your experience?          swer)
 2.      What are the measures that you have taken to         Open-ended(Long an-
         overcome the above-selected challenges that you      swer)
         faced in the last completed project?
 3.      What other possible mitigation strategies can you    Open-ended(Long an-
         suggest for the above-selected challenges?           swer)
 4.      What mitigation strategies can you suggest that      Open-ended(Long an-
         can help overcome other non selected challenges?     swer)
                          Table 4.7: Mitigation strategies
4.3.5    Survey instrument evaluation
In this step the evaluation of the sample plan of the survey is done. The method
selected for evaluation is pilot surveys where a mock survey is conducted to evaluate
the questionnaire and make changes or additions if required. The mock survey was
answered by my colleagues and peers who have previous knowledge about Agile

<!-- Page 29 -->
22                                                      Chapter 4. Research Method
software development. Based on the survey answers and feedback, few changes were
made in terms of elaborating the options and minor changes in the questions. The
pilot implementation of this questionnaire is reported in the Appendix section of this
thesis.
4.3.6    Analyzing survey data
In this step the data collected from the survey is analysed. To analyze this data both
quantitative and qualitative analysis is done. Quantitative analysis is preformed
on closed ended questions of the survey to answer RQ2 by performing descriptive
statistics. Qualitative analysis is performed on open ended questions of the survey
to answer RQ3 by performing thematic analysis. To perform this, Thematic coding
is selected to analyze the data as it is ﬂexible. To perform this analysis Nvivo tool is
used to perform Qualitative data analysis(QDA).The data is then represented using
graphical representations such as histograms or bar graphs.
Motivation for Thematic analysis:
Thematic analysis is selected in this thesis to analyse the responses that are gathered
from the survey to answer RQ3. Thematic analysis is one of the most popular
qualitative data analysis method[40][16]. Braun & clark[6] deﬁned thematic analysis
as “a method for identifying, analysing and reporting patterns or themes within
data”. Thematic analysis is method that helps in making structures and meanings of
the structures from the collected data from the respondent. Thematic analysis is not
time consuming and is easily utilized by anyone with or without any basic knowledge
about it. This method is used when there is a large amount of data, an option is
provided to summarize the key points and features which is generally accepted by
the practitioner’s and researchers.
Motivation for NVivo:
To perform the thematic analysis on the survey responses, Nvivo tool was used in this
thesis. Nvivo is a widely used computer assisted qualitative data analysis software
(CAQDAS) that is used to analyse qualitative and also mixed methods. This tool
helps in analyzing an unstructured set of data that is collected from surveys, focus
groups, interviews etc.
4.3.7    Documenting and reporting
The ﬁnal step for conducting a survey research is documenting and reporting. Docu-
menting is done from the start of the survey that helps researcher in keeping track of
the process and make changes if any mistakes are done. Reporting is done at the end
after collecting the analyzed results. In this it is decided what data can be included
and what data can be left out.
    Ethical Aspects: While conducting a survey based research, ethical aspects must
be considered by following GDPR regulations. In this survey the personal informa-
tion of the respondent is not mandatory and will not be presented.

<!-- Page 30 -->
Chapter 5
                                   SMS Results and Analysis
5.1     Results of systematic mapping study
On applying he search string on four diﬀerent databases, the total number of studies
found are:
 Database                 Results
 Scopus                   84 papers
 ScienceDirect            55 papers
 ACM Digital Library      20 papers
 SpringerLink             46 papers
 Total                    205
                               Table 5.1: SMS papers
   From the papers collected on applying the search string on databases, inclusion
and exclusion criteria is applied as mentioned in section 3.3.4 to ﬁlter the papers and
get relevant studies. After applying the inclusion and exclusion on these papers the
results are as follows:
 Database                 Results              Primary      Secondary
                                               studies      studies
 Scopus                   9 papers             6 papers     3 papers
 ScienceDirect            7 papers             4 papers     3 papers
 ACM Digital Library      5 papers             4 papers     1 paper
 SpringerLink             3 papers             2 papers     1 paper
 Total                    24                   16           8
                     Table 5.2: Primary and secondary papers
    A total of 24 papers are found on a total out of which 16 papers are primary
studies and 8 papers are secondary studies.From the identiﬁed 8 secondary studies,
a total of 6 primary studies were found that are related to the aim and objectives of
this thesis. The total number of primary studies which are gathered from SMS to
answer RQ1 are 22 papers which are shown in the table 5.3.
                                          23

<!-- Page 31 -->
24                                              Chapter 5. SMS Results and Analysis
 Database                  Primary studies        Primary studies        Final
                           from database          collected    from      set      of
                           search                 the     secondary      primary
                                                  studies                studies
 Scopus                    6 papers               2 papers               8 papers
 ScienceDirect             4 papers               2 papers               6 papers
 ACM Digital Library       4 papers               1 papers               5 papers
 SpringerLink              2 papers               1 paper                3 papers
 Total                     16                     6                      22
                             Table 5.3: Final set of papers
5.1.1       List of studies
The table 5.4 displays the articles collected from Scopus, ScienceDirect, Springer
link and ACM digital library databases. These are the primary studies that are used
to ﬁnd out the customer communication challenges in Agile requirements engineering.
 Ref no.        Name of the study                                  Author’s name
 S1.[1]         Quality requirements challenges in the con-        Wasim Alsaqaf, Maya
                text of large-scale distributed Agile: An em-      Daneva, and Roel
                pirical study.                                     Wieringa.
 S2. [42]       An Empirical Study on Using Agile Methods          VN Vithana, David
                in Global Software Development                     Asirvatham,       and
                                                                   MGM Johar.
 S3.[36]        Prioritizing challenges of Agile process in dis-   Mohammad
                tributed software development environment          Shameem,       Rakesh
                using analytic hierarchy process.                  Ranjan        Kumar,
                                                                   Chiranjeev    Kumar,
                                                                   BibhasChandra, and
                                                                   Arif Ali Khan.
 S4.[43]        Requirements Engineering Practice and              Stefan Wagner, Daniel
                Problems in Agile Projects: Results from an        Méndez     Fernández,
                International Survey.                              Michael Felderer, and
                                                                   Marcos Kali-nowski.
 S5.[37]        Taxonomical classiﬁcation of barriers for          Mohammad
                scaling Agile methods in global software de-       Shameem,       Rakesh
                velopment environment using fuzzy analytic         Ranjan Kumar, Mo-
                hierarchy process.                                 hammad       Nadeem,
                                                                   andArif Ali Khan.
 S6.[26]        Waste identiﬁcation as the means for improv-       Mikko Korkala and
                ing communication in globally distributed          Frank Maurer.
                Agile software development

<!-- Page 32 -->
5.1. Results of systematic mapping study                                       25
 Ref no      Name of the study                              Authors name
 S7. [21]    A case study of Agile software development     Gibrail Islam and Tim
             for safety-Critical systems projects.          Storer.
 S8. [19]    Understanding information needs of Agile       Anne Hess, Philipp
             teams to improve requirements communica-       Diebold, and Norbert
             tion.                                          Seyﬀ.
 S9. [5]     Are you biting oﬀ more than you can chew?      Elizabeth Bjarnason
             A case study on causes and eﬀects of over-     , Krzysztof Wnuk,
             scoping in large-scale software engineering.   Björn Regnell.
 S10. [11]   Software product line scoping and require-     Ivonei Freitas da
             ments engineering in a small and medium-       Silvaa, Paulo Anselmo
             sized enterprise: An industrial case study.    da Mota Silveira Ne-
                                                            toc, Pádraig O’Leary,
                                                            Eduardo       Santana
                                                            de Almeida, Silvio
                                                            Romero de Lemos
                                                            Meira.
 S11. [41]   Best Managerial Practices in Agile Develop-    Manasvi Talluri and
             ment.                                          Hisham M Haddad.
 S12. [17]   Empirical Study of Customer Communica-         Ilyuza Gizzatullina.
             tion Problem in Agile Requirements Engi-
             neering.
 S13.[22]    Problems in Agile trenches                     Mira Kajko-Mattsson.
 S14. [27]   Evaluating eXtreme Scenario-based Design       Jason Chong Lee ,
             in a Distributed Agile Team.                   Tejinder K. Judge , D.
                                                            Scott McCrickard.
 S15. [25]   Using Distributed Agile Patterns for Sup-      Maryam Kausar and
             porting the Requirements Engineering Pro-      Adil Al-Yasiri.
             cess.
 S16. [29]   Why the Development Outcome Does Not           Timo OA Lehtinen,
             Meet the Product Owners’ Expectations?         Risto Virtanen, Ville
                                                            T Heikkilä, and Juha
                                                            Itkonen.
                           Table 5.4: List of studies

<!-- Page 33 -->
26                                           Chapter 5. SMS Results and Analysis
   The table 5.5 mentions the studies that are obtained on gathering primary studies
from the secondary studies gathered from the databases.
 Ref no.      Name of the study                                Authors name
 S17[34]      ’Desperately’ Seeking Research on Agile Re-      Knut H Rolland.
              quirements in the Context of Large-Scale Ag-
              ile Projects.
 S18[4]       A Case Study on Beneﬁts and Side-Eﬀects of       Elizabeth Bjarnason,
              Agile Practices in Large-Scale Requirements      Krzysztof Wnuk, and
              Engineering.                                     Björn Regnell.
 S19[33]      Agile requirements engineering practices and     Balasubramaniam
              challenges: an empirical study.                  Ramesh,          Lan
                                                               Cao, and Richard
                                                               Baskerville.
 S20[24]      Agile Requirements Engineering with Proto-       Marja Käpyaho and
              typing: A Case Study.                            Marjo Kauppinen.
 S21[28]      Distributed Agile: project management in a       Seiyoung Lee and
              global environment.                              Hwan-Seung Yong.
 S22[38]      Categorization of risk factors for distributed   Suprika V Shrivastava
              Agile projects.                                  and Urvashi Rathod.
                 Table 5.5: List of studies from secondary studies

<!-- Page 34 -->
5.1. Results of systematic mapping study                                            27
5.1.2    Frequency of published articles:
The ﬁgure 3 displays the frequency of articles that are published over time. The
articles that are published in year 2019 and 2014 are highest compared to others
with 3 articles. Two articles were publishes in each year of 2020, 2018, 2017. In years
2015,2012,2011 and 2008 least articles were published compared to other years with
1 article in each.
                            Figure 5.1: Published articles
Figure 4 displays the frequency of primary articles that are extracted from the sec-
ondary studies like SLR and SMS obtained from the database search.
                             Figure 5.2: Primary studies

<!-- Page 35 -->
28                                        Chapter 5. SMS Results and Analysis
  The below table 5.6 gives information about the primary studies found from the
mapping study:
     Ref    Article      Research          Year   Keywords
     no.    Type         Method
     S1.    Journal      Case Study        2019   Agile large-scale distributed projects,
                                                  Requirements engineering.
     S2.    Conference   Survey            2018   Agile software development, global
            paper                                 software development; challenges.
     S3.    Journal      Case Study        2018   Agile development, challenges, dis-
                                                  tributed software development.
     S4.    Journal      Survey            2017   Requirements Engineering,         Agile
                                                  Projects.
     S5.    Journal      Survey            2020   Global software development, Agile de-
                                                  velopment, Scaling barriers.
     S6.    Journal      Case Study        2014   Distributed Agile software develop-
                                                  ment, Lean software development,
                                                  Communication.
     S7.    Journal      Case Study        2020   Agile software development, Chal-
                                                  lenges.
     S8.    Journal      Case Study        2019   Requirements speciﬁcation, Require-
                                                  ments communication, Agile teams, In-
                                                  formation needs.
     S9.    Journal      Case Study        2012   Requirements scoping,Software release
                                                  planning, Agile requirements engineer-
                                                  ing.
     S10.   Journal      Case Study        2014   Requirements engineering, Agile meth-
                                                  ods, Software product line scoping.
     S11.   Conference   Case Study        2014   Agile development, Agile methods,
            paper                                 Best Agile practices, Agile challenges,
                                                  Software development.
     S12.   Conference   Case Study        2019   Agile software development, require-
            paper                                 ments engineering, customer collabora-
                                                  tion.
     S13.   Conference   Case Study        2008   Agile, Documentation, oral communi-
            paper                                 cation, product related problems, pro-
                                                  cess related problems, communication
                                                  owner, communication complexity.
     S14.   Book         Case Study        2011   Usability, Agile, distributed develop-
                                                  ment, extreme scenario-based design.
     S15.   Book         Case Study        2017   Distributed Agile patterns, Global soft-
                                                  ware engineering, Requirements engi-
                                                  neering.
     S16.   Conference   Case Study        2015   Scrum, Product owner, Root cause
            paper                                 analysis, Requirements engineering,
                                                  Global software development.

<!-- Page 36 -->
5.1. Results of systematic mapping study                                        29
 Ref    Article      Research           Year     Keywords
 no.    Type         Method
 S17.   Conference   Case Study         2015     Requirements Engineering, Agile Re-
        paper                                    quirements, Agile Software Develop-
                                                 ment.
 S18.   Conference   Case Study         2011     Requirements engineering, Agile.
        paper
 S19.   Journal      Multi-Case         2010     Requirements engineering, Agile soft-
                     Study                       ware development, requirements engi-
                                                 neering risks, Agile practices.
 S20.   Conference   Case Study         2015     agility, requirements engineering, pro-
        paper                                    totyping, RE process.
 S21.   Journal      Case Study         2010     Agile methods, Scrum, Distributed
                                                 software development, Software global-
                                                 ization.
 S22.   Journal      Case Study         2015     Distributed Agile Development (DAD),
                                                 Agile software development (ASD),
                                                 Distributed Software Development
                                                 (DSD), Risk factor classiﬁcation,
                                                 Risk management in distributed Agile
                                                 development.
                         Table 5.6: Final list of studies

<!-- Page 37 -->
30                                           Chapter 5. SMS Results and Analysis
RQ1: What are the customer communication challenges faced
in Requirement engineering process in Agile software develop-
ment?
The answer of this research question is the customer communication challenges that
are faced in requirements engineering phase of Agile software development. The
answer is obtained by the articles found from the systematic mapping study.The
answer that is gained from this research question is used to formulate questions for
the survey. A total of 18 customer communication challenges are identiﬁed from the
systematic literature review. These challenges are group based on 10 factors from
the previous literature as mentioned. The identiﬁed challenges found repeated in
diﬀerent studies is mentioned with the study number. The below table 5.7 displays
the list of challenges found from the systematic mapping study.
 FACTORS          CHALLENGES                                              STUDIES
                  CH1. The non-availability of customers for requirements S1
                  negotiation, clariﬁcation and feedback.
                                                                          S3,S4,S5,S6,S8,
                  CH2. Lack of customer involvement.                      S10,S11,S12,S18
 Human Factors
                  CH3. Too big number of customers that lead to too           S12
                  diverse and controversial requirements.
                  CH 4. Lack of trust between stakeholders.                   S3, S19, S22
                  CH5. Communication challenge between teams and              S2, S7, S14
 Distance         customers due to temporal distance.
                  CH6. Lack of communication infrastructure due to            S22,S7
                  spacial distance.
 Culture
                  CH7. Communication issues between stakeholders with         S7, S22, S12
 and language
                  diﬀerent cultures and language.

<!-- Page 38 -->
5.1. Results of systematic mapping study                                     31
 FACTORS            CHALLENGES                                              STUDIES
                    CH8. Misunderstanding of knowledge during
 Knowledge                                                                  S13
                    customer communication.
                    CH9. Communication challenges due to overscoping
 Overscoping                                                                S9, S17, S18
                    of requirements.
                    CH10. Insuﬃcient communication with customers due
 Documentation                                                              S8
                    to lack of documentation.
                    CH11. Under speciﬁed requirements that are too
                    abstract and allow various interpretations.             S4, S3, S11
 Misunderstanding   CH12. Misunderstanding of requirements
                    communication due to diﬀerence in cultural values and   S1, S13, S21, S15
                    languages.
                    CH13. Inappropriate selection of communication
 Technology                                                                 S5
                    technologies.
                    CH14. Lack of communication training.
                    CH15. New person on role at customers side.             S3
                    CH16. Increased communication costs.                    S12
 Others             CH17. Weak relationship between customer and project    S21
                    lead.                                                   S4
                    CH18. Communication lapse due to sudden change          S8
                    in requirements.
                 Table 5.7: Customer communication challenges

<!-- Page 39 -->
Chapter 6
                                                          Survey results
6.1     Survey results
This section discusses the results of the survey that is conducted to answer RQ2 and
RQ3. An online questionnaire was designed for the survey by using google forms.
Google forms is an open source survey administration application. This survey was
answered by various practitioner’s who are experienced in Agile methodologies and
are working in an Agile environment. A total of 96 responses are gathered from
the survey tool from which a total of 76 responses are considered by leaving out
20 incomplete responses. The survey responses data is read manually till the data
is completely familiarised. These 20 incomplete responses are removed because the
respondents only answered the close ended questions leaving out the open ended
questions.The 76 responses are considered in this thesis because the respondents
answered completely both the open ended and close ended questions that are asked
in the survey questionnaire and the responses are relevant to achieve the aim of the
survey.
6.1.1    Demographics
The question 1 focuses on the role of the respondent in an Agile team. This question
is an close-ended question which can be answered by selecting an option in the drop
down box. Out of the respondents a total of 15 are Developers, 12 are Testers, 11 are
Technical and domain experts, 7 are Product owners, 5 are Integrator, 4 are scrum
masters, 2 are Architect owners and the rest 20 others.
                      Figure 6.1: Q1. Role of the respondent
                                         32

<!-- Page 40 -->
6.1. Survey results                                                               33
    The question 2 mentions the working experience of the respondent in an Agile
environment. Out of the respondents 53% have 0-1 years of experience, 24% have
2-5 years of experience and 18% have 6-10 years of experience and 5% of respondents
have more than 10 years of experience. .
                   Figure 6.2: Q2. Experience of the respondent
The question 3 mentions the size of the organization where the respondents work.
This question in a close-ended question that is answered by selecting option in MCQs.
Out of the responses a total of 39% respondents works at large organization with
number of employees more than 250, 29% work at small organization with number
of employees between 10-49 and 21% of respondents work at a medium size organi-
zation with number of employees between 50-249 employees and 11% of respondents
work in a micro organization with number of employees fewer than 9.
                        Figure 6.3: Q3. Size of organization

<!-- Page 41 -->
34                                                      Chapter 6. Survey results
    The question 4 mentions the sourcing strategy used by the organization of the
respondent. This question is asked to know the location of work of the respondents
so that we can know how the respondents managed the work based on diﬀerent
time zones and distance. This question is a close-ended question with a drop-down
box. Out of the responses 51% respondents organization uses an Onshore in-sourcing
strategy which is working in a same country and for same company, 24% respondents
organization uses an Oﬀshore in-sourcing strategy which is working in a diﬀerent
country and for same company, 13% respondents organization uses an Oﬀshore out-
sourcing strategy which is working in diﬀerent country and for diﬀerent company
and 12% of respondents organization uses an Onshore outsourcing strategy which is
working in a same country and for a diﬀerent company .
                Figure 6.4: Q4. Sourcing strategy of organization
The question 5 focuses on the Agile methodology that is used by the respondents
in their projects. The question is a close ended question which is answered by se-
lecting the desired option from the checkboxes. Out of the responses 19 respondents
are working using scrum methodology, 11 Feature driven development(FDD), 7 re-
spondents are working using kanban methodology, 7 respondents are working using
Dynamic Systems Development method (DSDSM), 6 respondents are working using
Extreme programming (XP) and 4 of respondents are working using Crystal.

<!-- Page 42 -->
6.1. Survey results                                                                35
                           Figure 6.5: Q5. Agile method
6.1.2    Challenges:
The question 6 focuses on frequency of occurrence of challenges. This question is
asked to gather data about the number of times the customer communication chal-
lenges occur in a project. This question is an close ended question which is to be
answered by selecting option from the likert scale that ranges from low, medium and
high. The table 6.1 and ﬁgure 6.6 mentions the results that are collected from the
survey for this question.
   The question 7 focus on the impact that these customer communication challenges
cause in a project. This question is an close ended question which is to be answered
by selecting option from the likert scale that ranges from very low, low, medium, high
and very high. The table 6.3 and ﬁgure 6.7 mentions the results that are collected
from the survey for this question.

<!-- Page 43 -->
                                                                                         36
                                                                                         Chapter 6. Survey results
Figure 6.6: Q6.How many times have these selected challenges occurred in your project?

<!-- Page 44 -->
                                                                                        6.1. Survey results
Figure 6.7: Q7.What is the impact of the below-mentioned challenges on your projects?
                                                                                        37

<!-- Page 45 -->
38                                                         Chapter 6. Survey results
Analysis for RQ2
In this section the analysis of survey data is done for answering RQ2. The method
used to analyze this data is descriptive statistics. First the analysis was performed
on Question 6 of the survey which is the occurrence of the challenges in the project.
The below table 6.1 mentions the data collected from the survey responses. The
respondents were asked to answer the question by choosing between the three options
for each of the challenge. The option scale has 3 options which are low, medium and
high. The option scale can be in both in qualitative and quantitative form. To
perform the risk analysis calculations the option scale which is in qualitative form in
changed into quantitative form to perform risk analysis calculations[10]. The option
scale has diﬀerent levels with diﬀerent value for each scale, like one scale has more
value than other scale. To change this qualitative scale to a quantitative, the option
scale is given a numerical values based on the values of the scale[10]. These options
are given weights in an ascending order scale which ranges from 0.1 to 0.3 in which
0.1 is low, 0.2 is medium and 0.3 is high based on the values of the scale.
                    Challenge No.       Low    Medium       High
                    CH1                 28     37           10
                    CH2                 34     32           9
                    CH3                 39     20           14
                    CH4                 44     26           4
                    CH5                 37     32           5
                    CH6                 40     26           8
                    CH7                 45     23           6
                    CH8                 32     32           11
                    CH9                 36     31           8
                    CH10                38     31           6
                    CH11                45     24           7
                    CH12                50     20           5
                    CH13                41     26           4
                    CH14                41     20           10
                    CH15                48     20           3
                    CH16                39     28           3
                    CH17                36     26           9
                    CH18                36     22           12
                         Table 6.1: Occurrence of challenges
    The occurrence of challenges is calculated for each challenge. This is done by
giving a total score to each of the challenge that is calculated by multiplying the
number of responses to the given weights of scale. After ﬁnding the weights of each
scale the median is calculated for each challenge which helps in ranking of these
challenges which comes is done by considering the ordinal scale type. The median
value of each challenge are mentioned in table 6.2.

<!-- Page 46 -->
6.1. Survey results                                                                  39
 Challenge                                   Low     Medium       High         Median
 1. The non-availability of customers        2.8     7.4          3            3
 for requirements negotiation, clariﬁca-
 tion and feedback.
 2. Lack of customer involvement.            3.4     6.4          2.7          3.4
 3. Too big number of customers that         3.9     4            4.2          4
 lead to too diverse and controversial re-
 quirements.
 4. Lack of trust between stakeholders.      4.4     5.2          1.2          4.4
 5. Communication challenge between          3.7     6.4          1.5          3.7
 teams and customers due to temporal
 distance.
 6. Lack of communication infrastruc-        4       5.2          2.4          4
 ture due to spacial distance.
 7.    Communication issues between          4.5     4.6          1.8          4.5
 stakeholders with diﬀerent cultures and
 language.
 8. Misunderstanding of knowledge dur-       3.2     6.4          3.3          3.3
 ing customer communication.
 9. Communication challenges due to          3.6     6.2          2.4          3.6
 overscoping of requirements.
 10. Insuﬃcient communication with           3.8     6.2          1.8          3.8
 customers due to lack of documenta-
 tion.
 11. Under speciﬁed requirements that        4.5     4.8          2.1          4.5
 are too abstract and allow various in-
 terpretations.
 12. Misunderstanding of requirements        5       4            1.5          4
 communication due to diﬀerence in cul-
 tural values and languages.
 13. Inappropriate selection of commu-       4.1     5.2          1.2          4.1
 nication technologies.
 14. Lack of communication training.         4.1     4            3            4
 15. New person on role at cus-              4.8     4            0.9          4
 tomers side.
 16. Increased communication costs.          3.9     5.6          0.9          3.9
 17. Weak relationship between cus-          3.6     5.2          2.7          3.6
 tomer and project lead.
 18. Communication lapse due to sud-         3.6     4.4          3.6          3.6
 den change in requirements.
                       Table 6.2: Analysed occurrence of challenges
   After ﬁnding the median values for each challenge, the challenges are sorted in
descending order from highest value to lowest value. The below ﬁgure 6.8 displays
the sorted occurrence calculated for each challenge that is represented in the form of
a bar graph.

<!-- Page 47 -->
40                                                         Chapter 6. Survey results
                 Figure 6.8: Bar graph of occurrence of challenges
    Second the analysis was performed on Question 7 of the survey which is the
impact of the challenges on the project. The below table 6.3 mentions the data
collected from the survey responses. The option scale has 5 options which are very
low, low, medium, high and very high. The weights are assigned a quantitative value
same as the above occurrence of challenges. These options are given weights in an
ascending order scale which ranges from 0.1 to 0.5 in which 0.1 is very low, 0.2 is low
and 0.3 is medium, 0.4 is high and 0.5 is very high.
      Challenge No.      Very Low      Low     Medium       High     Very high
      CH1                2             9       29          17        14
      CH2                6             11      23          22        11
      CH3                7             15      25          13        10
      CH4                11            17      20          13        6
      CH5                9             14      24          12        12
      CH6                11            16      21          12        12
      CH7                12            18      18          12        9
      CH8                8             11      22          15        15
      CH9                7             19      16          17        12
      CH10               10            14      17          18        13
      CH11               14            16      18          11        12
      CH12               17            25      14          9         4
      CH13               18            13      25          9         2
      CH14               11            18      25          9         4
      CH15               11            23      22          9         4
      CH16               17            20      17          11        2
      CH17               11            16      21          13        7
      CH18               10            12      23          13        7
                           Table 6.3: Impact of challenges

<!-- Page 48 -->
6.1. Survey results                                                            41
 Challenge                           Very low   Low   Medium High        Very high Median
 1. The non-availability of cus-     0.2        1.8   8.7          6.8   7          6.8
 tomers for requirements negoti-
 ation, clariﬁcation and feedback.
 2. Lack of customer involvement.    0.6        2.2   6.9          8.8   5.5        5.5
 3. Too big number of customers      0.7        3     7.5          5.2   5          5
 that lead to too diverse and con-
 troversial requirements.
 4. Lack of trust between stake-     1.1        3.4   6            5.2   3          3.4
 holders.
 5. Communication challenge be-      0.9        2.8   7.2          4.8   6          4.8
 tween teams and customers due
 to temporal distance.
 6. Lack of communication infras-    1.1        3.2   6.3          4.8   6          4.8
 tructure due to spacial distance.
 7. Communication issues be-         1.2        3.6   5.4          4.8   4.5        4.5
 tween stakeholders with diﬀerent
 cultures and language.
 8. Misunderstanding of knowl-       0.8        2.2   6.6          6     7.5        6
 edge during customer communi-
 cation.
 9. Communication challenges         0.7        3.8   4.8          6.8   6          4.8
 due to overscoping of require-
 ments.
 10. Insuﬃcient communication        1          2.8   5.1          7.2   6.5        5.1
 with customers due to lack of
 documentation.
 11. Under speciﬁed requirements     1.4        3.2   5.4          4.4   6          4.4
 that are too abstract and allow
 various interpretations.
 12. Misunderstanding of require-    1.7        5     4.2          3.6   2          3.6
 ments communication due to dif-
 ference in cultural values and
 languages.
 13. Inappropriate selection of      1.8        2.6   7.5          3.6   1          2.6
 communication technologies.
 14.     Lack of communication       1.1        3.6   7.5          3.6   2          3.6
 training.
 15. New person on role at           1.1        4.6   6.6          3.6   2          3.6
 customers side.
 16.    Increased communication      1.7        4     5.1          4.4   1          4
 costs.
 17. Weak relationship between       1.1        3.2   6.3          5.2   3.5        3.5
 customer and project lead.
 18. Communication lapse due to      1          2.4   6.9          5.2   3.5        3.5
 sudden change in requirements.
                        Table 6.4: Analysed impact of challenges

<!-- Page 49 -->
42                                                         Chapter 6. Survey results
    The impact of challenges is calculated for each challenge. This is done by giving
a total score to each of the challenge that is calculated by multiplying the number
of responses to the given weights of scale. After ﬁnding the weights of each scale the
median is calculated for each challenge which helps in ranking of these challenges
which comes is done by considering the ordinal scale type. The median value of each
challenge are mentioned in table 6.4.
   After ﬁnding the median values for each challenge, the challenges are sorted in
descending order from highest value to lowest value. The below ﬁgure 6.9 displays
the sorted impact calculated for each challenge that is represented in the form of a
bar graph.
                   Figure 6.9: Bar graph of impact of challenges
RQ2: How are the customer communication challenge priori-
tized?
The answer of this research question is calculated from the data collected from the
survey. Prioritizing the challenges helps to identify the challenges that causes more
eﬀect on the Agile project that needs more attention to avoid them. This prioritiza-
tion of challenges is done by ﬁnding out the challenges that causes high amount of
risk to the project. This is done by calculating the risk analysis.
    The degree of risk is calculated by multiplying the probability of occurrence of
the challenge and the impact caused by the challenge[35].
                            Risk = Impact ∗ P robability
From table 6.2 and 6.4, the values of probability of occurrence and impact for each
challenge is calculated. From using the above formula for risk analysis, the values of
each challenge is calculated as shown in table 6.5. The challenges are sorted based on
the total weight of each challenge. The higher the weight of a challenge the higher

<!-- Page 50 -->
6.1. Survey results                                                           43
the risk of the challenge on the project. By sorting the challenges on descending
order he priority of the challenges in shown in table 6.6.
   Challenge                                   Occurrence   Impact   Total
   1. The non-availability of customers        3            6.8      20.4
   for requirements negotiation, clariﬁca-
   tion and feedback.
   7.    Communication issues between          4.5          4.5      20.25
   stakeholders with diﬀerent cultures and
   language.
   3. Too big number of customers that         4            5        20
   lead to too diverse and controversial re-
   quirements.
   11. Under speciﬁed requirements that        4.5          4.4      19.8
   are too abstract and allow various in-
   terpretations.
   8. Misunderstanding of knowledge dur-       3.3          6        19.8
   ing customer communication.
   10. Insuﬃcient communication with           3.8          5.1      19.38
   customers due to lack of documenta-
   tion.
   6. Lack of communication infrastruc-        4            4.8      19.2
   ture due to spacial distance.
   2. Lack of customer involvement.            3.4          5.5      18.7
   5. Communication challenge between          3.7          4.8      17.76
   teams and customers due to temporal
   distance.
   9. Communication challenges due to          3.6          4.8      17.28
   overscoping of requirements.
   16. Increased communication costs.          3.9          4        15.6
   4. Lack of trust between stakeholders.      4.4          3.4      14.96
   12. Misunderstanding of requirements        4            3.6      14.4
   communication due to diﬀerence in cul-
   tural values and languages.
   14. Lack of communication training.         4            3.6      14.4
   15. New person on role at cus-              4            3.6      14.4
   tomers side.
   17. Weak relationship between cus-          3.6          3.5      12.6
   tomer and project lead.
   18. Communication lapse due to sud-         3.6          3.5      12.6
   den change in requirements.
   13. Inappropriate selection of commu-       4.1          2.6      10.66
   nication technologies.
                              Table 6.5: Prioritized challenges

<!-- Page 51 -->
44                                                                         Chapter 6. Survey results
   In the above table 6.5, the challenges are arranged in the order of highest risk to
lowest risk by prioritizing them. The below ﬁgure 6.10 displays the bar graph with
trend line of the challenges after prioritizing them.
        Figure 6.10: Barplot with trend line chart of prioritized challenges
 CH      Challenge                                                                                           Priority
 no
 CH1     The non-availability of customers for requirements negotiation, clariﬁcation and feedback.          1
 CH7     Communication issues between stakeholders with diﬀerent cultures and language.                      2
 CH3     Too big number of customers that lead to too diverse and controversial requirements.                3
 CH11    Under speciﬁed requirements that are too abstract and allow various interpretations.                4
 CH8     Misunderstanding of knowledge during customer communication.                                        5
 CH10    Insuﬃcient communication with customers due to lack of documentation.                               6
 CH6     Lack of communication infrastructure due to spacial distance.                                       7
 CH2     Lack of customer involvement.                                                                       8
 CH5     Communication challenge between teams and customers due to temporal distance.                       9
 CH9     Communication challenges due to overscoping of requirements.                                        10
 CH16    Increased communication costs.                                                                      11
 CH4     Lack of trust between stakeholders.                                                                 12
 CH12    Misunderstanding of requirements communication due to diﬀerence in cultural values and languages.   13
 CH14    Lack of communication training.                                                                     14
 CH15    New person on role at customers side.                                                               15
 CH17    Weak relationship between customer and project lead.                                                16
 CH18    Communication lapse due to sudden change in requirements.                                           17
 CH13    Inappropriate selection of communication technologies.                                              18
                               Table 6.6: Prioritized challenges
   The above table 6.6 displays the challenges is the prioritized order, where chal-
lenge 1 is given highest priority and the least priority is given to challenge 13 based
on the responses gathered from the survey.

<!-- Page 52 -->
6.1. Survey results                                                                  45
6.1.3    Mitigation
The question 8 focuses on the mitigation strategies for the challenges that are selected
by the respondents in the previous question 6. This question gathers data about the
solutions to overcome the challenges. This question is an open ended question and
is answered in the form of a short or long answer.
Analysis for RQ3: To analyse the open ended question, thematic analysis was
performed. This is conducted by following steps:
   • Familiarizing with data: The ﬁrst step of thematic analysis is by getting
     familiar with the data collected from the survey. The survey data is read
     repeatedly until we get familiarized with the survey data. In this process the
     incomplete and irrelevant data is identiﬁed and removed.
   • Generating codes: In this step the initial codes are generated after getting
     familiarized with the data. The codes are used to identify the interesting
     themes from the data. These themes are generated by using tool and manually.
     Some codes are auto-generated using the Nvivo tool and the rest are generated
     manually. A total of 176 categories of codes were identiﬁed that are relevant
     to the data.
   • Identifying themes: The codes that are identiﬁed and grouped in the previ-
     ous step are now put into the themes that are generated based on the respective
     challenges in the study. Initially few themes are auto generated from the tool
     and if there are any codes left they are listed, compared and manually assigned
     to the a theme. Repeated veriﬁcation was done on the generated themes and
     their respective categories of codes in order to avoid redundancies making the
     data more reliable and understanding. The list themes are presented as in table
     6.7.
     Reference     Theme                      Reference    Theme
     no.                                      no.
     1.            Communication              15.          Customer
     2.            End user                   16.          Training
     3.            Flew teams                 17.          Contract
     4.            customer relationship      18.          Estimation
     5.            Meetings                   19.          Experienced person
     6.            People                     20.          Documentation
     7.            Tools                      21.          Feedback
     8.            Communication skills       22.          Requirements
     9.            Communication tools        23.          Review
     10.           Translate                  24.          Details
     11.           Experienced person         25.          Details
     12.           Language                   26.          Learning
     13.           Technology                 27.          System
     14.           Flexible                   28.          Changes
                                     Table 6.7: Themes

<!-- Page 53 -->
46                                                       Chapter 6. Survey results
     • Constructing Thematic maps: Construction of the thematic maps is done
       for each challenge individually and later based on the map we make deductive
       conclusions. All the generated maps can be found in the next section above
       the respective challenges from ﬁgure 6.11 to 6.17.
     • Results from the Survey: The results from the survey are analysed and
       displayed below for answering the RQ3 to ﬁnd out the mitigation strategies to
       overcome the challenges.
RQ3: What are the mitigation strategies that can be proposed
for these challenges?
The answer of this question is gathered after analyzing the data that is collected
from the survey. This answer provides solutions to overcome the challenges faced by
customer communication during Agile requirements engineering. This study identi-
ﬁed a total of 18 challenges from systematic mapping study and intends to propose
mitigation strategies for these challenges from this answer.
                  Figure 6.11: Thematic map for challenge 1,2 & 3
    From the above ﬁgure 6.11 the mitigation for the challenges 1,2 and 3 are men-
tioned below.

<!-- Page 54 -->
6.1. Survey results                                                               47
   • Challenge 1: The non-availability of customers for requirements ne-
     gotiation, clariﬁcation and feedback.
     According to the ﬁgure for challenge 1 there are seven mitigation strategies
     proposed. There are three categories of themes for challenge 1 which are com-
     munication, end user and Flew teams. From the communication code the mit-
     igation strategies mentioned are "Challenge 1 can be overcome by conducting
     more research on customer communication part " , three respondents men-
     tioned "This challenge can be overcome by using appropriate technology and
     better communication tools". From the second code, End user the mitigation
     strategies mentioned are " Federal product owners recruit end user represen-
     tatives from multiple oﬃces and roles. These end user representatives provide
     context, feedback and early testing directly to contracted delivery teams." and
     "Challenge no. 1 can also be solved by hiring an on-site customer representa-
     tive". The third code, Flew delivery teams the mitigation strategies mentioned
     are " on one of my projects the government ﬂew in end user representatives to
     work daily with the delivery team for 30 days at a time. More recently the gov-
     ernment did the reverse, and ﬂew delivery teams out to observe end users using
     their software. The later model (ﬂying the developers to the users) seemed to
     work best. Now major feature releases always include an site visit by the de-
     livery team, usually in combination with a limited release with testing by end
     user representatives."
   • Challenge 2 : Lack of customer involvement.
     According to the ﬁgure for challenge 2 there are eleven mitigation strategies
     proposed. There are three categories of themes for challenge 2 which are com-
     munication, company/customer relationship and Meetings. From the ﬁrst code
     which is communication the mitigation strategies mentioned are "This chal-
     lenge can be overcome by using better communication mediums, communication
     tools and communication knowledge", other respondent mentioned"I strongly
     recommend communication’s workshops. They are really useful to overcome this
     challenge". From the second code which is company/customer relationship the
     mitigation strategies mentioned are "Challenge no. 2 can also be resolved by
     improving the customer and company relationship" other respondent mentioned
     "According to me challenge no.2 can be solved by giving the customers the priv-
     ilege to provide a representative among themselves who will be with the teams
     as the work progresses and give adequate feedback to others oﬀsite.". One re-
     spondent mentioned "Challenge 2 is overcome by involving stakeholders from
     day 1" and "Challenge 2 can be resolved by having a customers care service".
     Finally for the third code which is meetings the mitigation strategies mentioned
     by respondents are "Challenge 2 is overcome by routinary meetings and feed-
     back with the customer" and three respondents mentioned "Challenge no. 2 is
     overcome by frequent "pinging" of the customer(s) to involve them more. This
     challenge is overcome by having more frequent meetings, direct and constant
     contact with customers".

<!-- Page 55 -->
48                                                         Chapter 6. Survey results
     • Challenge 3: Too big number of customers that lead to too diverse
       and controversial requirements.
       According to the ﬁgure for challenge 3 there are ten mitigation strategies pro-
       posed. There are two categories of themes for challenge 3 which are communi-
       cation and people. From the ﬁrst code which is communication the mitigation
       strategies proposed by the respondents are "Challenge no.3 is overcome by im-
       mediate communication with the customers for clariﬁcation", other respondent
       mentioned "Challenge number 3 is overcome by patiently dealing and consider-
       ing the constructive ideas." Other respondent mentioned "This challenge can
       be overcome by having a rapport talk prior to development". From the second
       code which is people the mitigation strategies mentioned are : three respon-
       dents mentioned "This challenge is overcome by asking for more help and hiring
       more staﬀ", two respondents mentioned "I overcame this challenge by adopting
       the use of division of labour. I assigned diﬀerent levels of the project to as
       many subordinates to reduce the time constraint" and "having more meetings
       with less people" and two respondents mentioned "Rejection of clients with
       whom the attempts to establish a project were diﬃcult to implement and by
       cutting down the middle people".
                  Figure 6.12: Thematic map for challenge 4, 5 & 6
    From the above ﬁgure 6.12 the mitigation for the challenges 4,5 and 6 are men-
tioned below.

<!-- Page 56 -->
6.1. Survey results                                                              49
   • Challenge 4: Lack of trust between stakeholders.
     According to the ﬁgure for challenge 4 there are ﬁve mitigation strategies pro-
     posed. There are two categories of themes for challenge 4 which are communi-
     cation and people. From the ﬁrst code which is communication the mitigation
     strategies proposed by the respondents are "Challenge 4 can be overcome by
     having better backlog and better communication with the client", one respondent
     mentioned "This is solved by more research on our customer communication
     part" and other respondent mentions "This challenge is overcome by using
     better IT tools". For the second code which is people the mitigation strate-
     gies proposed by respondents are "Challenge 4 can be mitigated by selecting a
     few stakeholders and not including a large number to avoid any mistrust" and
     other respondent mentioned "This challenge can be solved by having more team
     buildings and lunch".
   • Challenge 5: Communication challenge between teams and customers
     due to temporal distance.
     According to the ﬁgure for challenge 5 there are ten mitigation strategies pro-
     posed. There are two categories of themes for challenge 5 which are people and
     tools. From the ﬁrst code which is people the mitigation strategies proposed by
     the respondents are "Challenge 5 could be resolved with a continuous contact
     with the teams in order to reinforce the communication", one respondent men-
     tioned "Challenge 5 is overcome by co sitting the teams in a common place",
     two respondents mentioned "Challenge no.5 can be be resolved by having an on-
     site customer representative" and other respondent mentioned "This challenge
     is overcome by communication between in-house staﬀ to onsite staﬀ". From the
     second code which is tools the mitigation strategies proposed by respondents
     are "Challenge no.5 was overcome by providing a free call mobile and texting to
     both team members and all the customers involved to eﬀectively communicate
     and interact on the progress of the project" and other respondents mentioned
     "Challenge no. 5 It’s best to use project schedule to have a better communi-
     cation between teams. I used Gantt Project software. It’s also good to have a
     coordinator from client side" and "Challenge no.5 can also be resolved by using
     modern communication tools".
   • Challenge 6: Lack of communication infrastructure due to spacial
     distance.
     According to the ﬁgure for challenge 6 there are ten mitigation strategies pro-
     posed. There are three categories of themes for challenge 6 which are commu-
     nication, ﬂew teams and user. From the ﬁrst code which is communication the
     mitigation strategies proposed by the respondents are "Challenge 6 is overcome
     by creating the communication infrastructure needed and by using online meet-
     ings" and other three respondents mentioned "This challenge can be overcome
     by using better communication tools on regular basis". The second code which
     is ﬂew delivery teams the mitigation strategies proposed by respondents are
     "Challenge no 6 is overcome by ﬂying the delivery teams to the customers".
     The third code which is user the mitigation strategies proposed by the respon-
     dents are "This challenge is overcome by having an end user representative

<!-- Page 57 -->
50                                                         Chapter 6. Survey results
       who provide context, feedback and early testing directly to contracted delivery
       teams".
                  Figure 6.13: Thematic map for challenge 6, 7 & 8
    From the above ﬁgure 6.13 the mitigation for the challenges 7,8 and 9 are men-
tioned below.
     • Challenge 7: Communication issues between stakeholders with dif-
       ferent cultures and language.
       According to the ﬁgure for challenge 7 there are ten mitigation strategies pro-
       posed. There are three categories of themes for challenge 7 which are commu-
       nication skills, communication tools and translate . From the ﬁrst code which
       is communication skills the mitigation strategies proposed by the respondents
       are "7 we have improved our communication skills.", one respondent mentioned
       "challenge no 7 is overcome by involving all the departments in the problems
       and by introducing new methods to communicate between diﬀerent parts" and
       other respondent mentioned "To overcome this challenge is try to know, talk
       about it with them and respect it". The second code which is communication
       tools the mitigation strategies proposed by the respondents are "Challenge 7
       is overcome by using better communication tools and diﬀerent languages". The
       third code which is translate, the mitigation strategies proposed by respondents
       are "Challenge no.7 can be resolved by giving people good translators".

<!-- Page 58 -->
6.1. Survey results                                                               51
   • Challenge 8: Under speciﬁed requirements that are too abstract and
     allow various interpretations.
     According to the ﬁgure for challenge 8 there are twelve mitigation strategies
     proposed. There are four categories of themes for challenge 8 which are commu-
     nication tools, customer, meetings and training. From the ﬁrst code which is
     communication tools, the mitigation strategies proposed by the respondents are
     "Challenge no. 8 is overcome by using better communication tools". The sec-
     ond code which is customer, the mitigation strategies proposed by respondents
     are "To overcome challenge 8, I asked a old and trusted customer to became
     our training help" and other respondent mentioned "Challenge 8 can also be
     overcome by more frequent screening of the "product", involving the customers
     week to week". The third code which is meetings, the mitigation strategies
     proposed are "challenge 8 is overcome by setting up extra meetings with cus-
     tomers", one respondent mentioned "Challenge 8 is overcome by having more
     face-to-face meetings and a "no dumb questions" series" and other respondent
     mentioned "To avoid misunderstandings, we have a previous meeting with the
     client to clarify what our service will be based on". The fourth code which is
     training, the mitigation strategies proposed by the respondents are "Challenge
     8 can be overcome through proper instructions and better helpline" and ﬁve re-
     spondents mentioned "Challenge no. 8 is overcome by training the customers
     and the employees who talk to the customer".
   • Challenge 9: Misunderstanding of requirements communication due
     to diﬀerence in cultural values and languages.
     According to the ﬁgure for challenge 9 there are four mitigation strategies pro-
     posed. There are three categories of themes for challenge 9 which are contract,
     estimation and experienced partner. From the ﬁrst code which is contract,
     the mitigation strategies proposed by the respondents are "Challenge no. 9 is
     overcome by explaining client the range of work with a care to the details. It
     should be done before signing the contract with subcontractor". The second code
     which is estimation, the mitigation strategies proposed by the respondents are
     "Challenge 9 is overcome by providing a second estimation session". The third
     code is experienced partner, the mitigation strategies proposed by the respon-
     dents are "trying to get more experienced personnel in the team to make better
     estimations is key to resolve challenge 9" and other respondent mentioned "To
     overcome this challenge we should have better communication with out client
     and we should specify everything on the beginning. We should have a specialist
     who know how to speak with client".

<!-- Page 59 -->
52                                                         Chapter 6. Survey results
                  Figure 6.14: Thematic map for challenge 10 & 11
    From the above ﬁgure 6.14 the mitigation for the challenges 10 and 11 are men-
tioned below.
     • Challenge 10: Misunderstanding of knowledge during customer com-
       munication.
       According to the ﬁgure for challenge 10 there are eight mitigation strategies
       proposed. There are three categories of themes for challenge 10 which are
       documentation, feedback training and tools. From the ﬁrst code which is doc-
       umentation the mitigation strategies proposed by the respondents are "To over-
       come challenge 10, We could write much better documentation. Not necessarily
       more, but tighter, more concise and more useful documents", one respondent
       mentioned "Challenge no.10 can also be resolved by checking the documentation
       periodically", one respondent mentioned "Challenge 10 is solved by trying to
       communicate with the person responsible for providing the documents, as well
       as giving a warning that such situations should not occur in the future" and
       other respondent mentioned "Challenge. 10 - Everything should be documented
       from the start to ﬁnish". From the second code which is feedback training,
       the mitigation strategies proposed by the respondents are "Challenge no 10 is
       solved by waiting to gather all of the problems before asking customers whether
       our method of resolving them" and other respondent mentioned "Challenge
       no.10 is overcome by providing training to the customers making them submit
       valid information about themselves".

<!-- Page 60 -->
6.1. Survey results                                                               53
     The third code which is tools, the mitigation strategies proposed by the re-
     spondents are "I was able to overcome this challenges by adopting the use of
     calls and emails for clarity purpose and sending of some necessary documents"
     and other respondent mentioned "Challenge no. 10 is solved if provided more
     tools to help simplify documentation".
   • Challenge 11: Communication challenges due to overscoping of re-
     quirements. According to the ﬁgure for challenge 11 there are twelve miti-
     gation strategies proposed. There are six categories of themes for challenge 11
     which are client, customer, details, meetings, requirements and review. From
     the ﬁrst code which is client the mitigation strategy proposed by the respondent
     is "Challenge no. 11 can be overcome by agreeing the details with the client".
     The second code which is customer, the mitigation strategies proposed by the
     respondents are "challenge 11 is overcome by asking customers for extra expla-
     nation, clariﬁcation and by anticipating the needs of the customer", one respon-
     dent mentioned "To overcome challenge 11: I asked a old and trusted customer
     to read all the documentations to avoid requirements that could allow various
     interpretation". The third code which is details, the mitigation strategies pro-
     posed by the respondents are "For challenge 11 - Spend more time estimating
     and detail requirements in depth" and one respondent mentioned "Challenge
     11 is overcome by requesting speciﬁc details to the customer". The fourth code
     which is meetings, the mitigation strategies proposed by the respondents are
     "Challenge no. 11 is overcome by constant communication to meet the speciﬁ-
     cations. We had several meetings (both, internal and with customer) to clarify
     what customer wanted". The ﬁfth code which is requirements, the mitigation
     strategies proposed by the respondents are "Challenge no 11 is overcome by
     communicating with Engineering Manager and Documentation head on iden-
     tifying the key requirements" and other respondent mentioned "Challenge no
     11 can also be resolved by verifying the key requirements prior to documenta-
     tion requirement". The sixth code which is review, the mitigation strategies
     proposed by the respondents are "To overcome challenge 11- Try to review the
     questions with the company ﬁrst and then with the participants that I want to
     involve with"

<!-- Page 61 -->
54                                                         Chapter 6. Survey results
                  Figure 6.15: Thematic map for challenge 12 & 13
    From the above ﬁgure 6.15 the mitigation for the challenges 12 and 13 are men-
tioned below.
     • Challenge 12: Insuﬃcient communication with customers due to lack
       of documentation.
       According to the ﬁgure for challenge 12 there are eleven mitigation strate-
       gies proposed. There are four categories of themes for challenge 12 which are
       language, learning, tools and translator. From the ﬁrst code which is lan-
       guage the mitigation strategies proposed by the respondents are "Challenge
       12 is overcome with sharpening the Language Skills". The second code which
       is learning, the mitigation strategy proposed by the respondent is "Challenge
       no. 12 can also be resolved if people get to learn and understand other people’s
       culture. Thereby, leading to know each other better". The third code which
       is tools, the mitigation strategy proposed by the respondent is "Challenge 12
       is solved by providing better information and use of tools that facilitate com-
       munication". The fourth code which is translator, the mitigation strategies
       proposed by the respondents are "The answer to solve challenge number 12
       can be found by employing a certain translator who will be always available by
       phone", ﬁve respondents mentioned "Challenge no.12 can also be resolved by
       having a translator on-site for the customer" and other respondent mentioned
       "Challenge 12 was overcome by the introduction of a special apps that helps in
       language translation to diﬀerent language".

<!-- Page 62 -->
6.1. Survey results                                                                55
   • Challenge 13: Inappropriate selection of communication technolo-
     gies.
     According to the ﬁgure for challenge 13 there are eight mitigation strategies
     proposed. There are ﬁve categories of themes for challenge 13 which are com-
     munication, technology, system, tools and training From the ﬁrst code which is
     communication the mitigation strategies proposed by the respondents are "To
     resolve challenge no13, communication platforms should be set in place before
     project starts", other respondent mentioned "This challenge is overcome by us-
     ing eﬀective communication channels". The second code which is technology,
     the mitigation strategies proposed by respondents are "Challenge 13 was over-
     come by going back to choose an eﬀective communication technology which are
     very reliable and give us the best communication network which do not glitch
     at all", other respondent mentioned "To resolve challenge no 13 - It’s good to
     discuss technological scheme and equipment selection (before purchasing) with
     Project Designer". The third code which is system, the mitigation strategies
     proposed by respondents are "Challenge 13 could be overcome by implementing
     one uniﬁed system for collecting data and messaging". The fourth code which
     is tool, the mitigation strategies proposed by the respondents are "Challenge 13
     can be resolved by referencing tools used in other successful projects, and agree
     with the customers on an appropriate tool" and other respondent mentioned
     "This challenge is overcome by more careful selection of the technologies". The
     ﬁfth code which is training, the mitigation strategy proposed by respondent is
     "To overcome the challenge 13 introduce training to customers and employees".

<!-- Page 63 -->
56                                                          Chapter 6. Survey results
                   Figure 6.16: Thematic map for challenge 14 & 15
    From the above ﬁgure 6.16 the mitigation for the challenges 14 and 15 are men-
tioned below.
     • Challenge 14: Lack of communication training.
       According to the ﬁgure for challenge 14 there are fourteen mitigation strate-
       gies proposed. There are three categories of themes for challenge 14 which
       are communication,technology and training. From the ﬁrst code which is com-
       munication, the mitigation strategies proposed by the respondents are "Our
       organization trains each employee and develops their communication skills, in
       order to be able to create strong relationships with partners and customers and
       be able to adapt to every change that is presented", three respondents men-
       tioned "Challenge no. 14 is overcome by Improving Communication skills",
       other respondent mentioned "Challenge 14 is overcome by providing serious
       communication workshops". The second code which is technology, the mitiga-
       tion strategies proposed by the respondents are "Challenge 14 can be overcome
       by recruiting the communication technology professionals to always be around
       to guide the users on communication throughout the project and to also correct
       any glitch that might occur along the line during usage". The third code which
       is training, the mitigation strategies proposed by the respondents are "Chal-
       lenge no. 14 is also resolved by choosing to learn and understand other’s culture
       for faster communication", three respondents mentioned "Challenge 14 is over-
       come by giving communication training and tools that can be use while leading
       a meeting.", one respondent mentioned "challenge 14 can be solved providing
       on boarding training to every participant in the project about the methodolo-

<!-- Page 64 -->
6.1. Survey results                                                               57
     gies an roles in the project" and other respondent mentioned "Challenge 14 is
     overcome by doing more online staﬀ training".
   • Challenge 15: New person on role at customers side.
     According to the ﬁgure for challenge 15 there are six mitigation strategies pro-
     posed. There are three categories of themes for challenge 15 which are customer
     contact, ﬂexible and training. From the ﬁrst code which is customer contact,
     the mitigation strategies proposed by the respondents are "Challenge 15 is
     solved by contacting the person above to obtain the necessary information",
     other respondent mentioned "Challenge number 15 can be solved by preparing
     a list of questions and further tracing back to the customer in case of a confu-
     sion" and other respondent mentioned "Challenge 15 is overcome by providing
     support for the new person in the company by the customer". The second code
     which is ﬂexible, the mitigation strategy proposed by the respondent is "Chal-
     lenge no.15 can be resolved by being ﬂexible". The third code which is training,
     the mitigation strategies proposed by the respondents are "Challenge 15 can
     overcome from mentorship with other clients" and other respondent mentioned
     "This challenge can be overcome by pre-training the client".
               Figure 6.17: Thematic map for challenge 16, 17 & 18
  From the above ﬁgure 6.17 the mitigation for the challenges 16, 17 and 18 are
mentioned below.

<!-- Page 65 -->
58                                                         Chapter 6. Survey results
     • Challenge 16: Lack of communication training.
       According to the ﬁgure for challenge 16 there are eleven mitigation strategies
       proposed. There is one category of theme for challenge 16 which is commu-
       nication tools. From the code which is communication tools, the mitigation
       strategies proposed by the respondents are "Challenge no. 16 - Tried to call
       or e-mail instead of going to the site. Tried to send the documentation by post
       oﬃce rather than personally and we resorted to the use of emails and social me-
       dia channels to reduce cost", eight respondents mentioned "Challenge no. 16 is
       overcome by using cheaper communication tools" and "It is a good example, we
       try to use communication tools close to and available from around the world,
       so that customers feel informed at all times" and other respondent mentioned
       "For overcoming challenge 16 use free apps like skype, slack or discord. There
       are many that are good and free".
     • Challenge 17: Weak relationship between customer and project lead.
       According to the ﬁgure for challenge 17 there are fourteen mitigation strate-
       gies proposed. There are four categories of themes for challenge 17 which are
       meetings, project, relationship and training. From the code which is meetings,
       the mitigation strategies proposed by the respondents are " Challenge 17 can
       be solved with frequent meetings with the customer". The second code which is
       project, the mitigation strategies proposed by the respondents are "Challenge
       17 can be solved by doing project sampling by customers before projects comple-
       tion" and three respondents mentioned "Challenge 17 is overcome by creating
       a good relationship between project lead and customer". The third code which
       is relationship, the mitigation strategies proposed by the respondents are "Ac-
       cording to me Challenge no.17 can be resolve by getting to know your customer"
       and other respondent mentioned "Our organization trains each employee and
       develops their communication skills, in order to be able to create strong rela-
       tionships with partners and customers and be able to adapt to every change
       that is presented". The fourth code which is training, the mitigation strate-
       gies proposed by the respondents are "Challenge 17 could have been averted
       with greater staﬀ training", two respondents mentioned "Challenge no. 17 is
       overcome by training all our team in building better relationships and problem
       solving" and other two respondents mentioned "Challenge 17 could be solved
       by workshops and intense training".
     • Challenge 18: Communication lapse due to sudden change in re-
       quirements.: Weak relationship between customer and project lead.
       According to the ﬁgure for challenge 18 there are thirteen mitigation strate-
       gies proposed. There are three categories of themes for challenge 18 which are
       changes, communication and tools. From the code which is changes, the mit-
       igation strategies proposed by the respondents are "Challenge number 18 can
       be bypassed with a meeting where you will say all you want to change and apply
       only those needed", seven respondents mentioned "Challenge no.18 can also be
       resolved by properly discussing the changes in requirements without changing
       the entire scope of project". The second code which is communication, the
       mitigation strategies proposed by the respondents are "Challenge no. 18 is

<!-- Page 66 -->
6.1. Survey results                                                              59
     overcome by direct communications", other respondent mentioned "Challenge
     18 can also be resolved by more frequent communication (obviously) despite the
     change in requirements" and other respondent can be solved by "Challenge
     18 can be solved by improving communication skills". The third code which is
     tools, the mitigation strategies proposed by the respondents are "Challenge no.
     18 can be resolved by use of pictures and the use of questionnaires for clarity
     purpose" and other respondent mentioned "Challenge 18 can be resolved by the
     use of video conferencing".

<!-- Page 67 -->
Chapter 7
                                                                   Discussion
This research aims to ﬁnd out the customer communication challenges, prioritize
these challenges and also mitigation strategies to the challenges that are faced dur-
ing requirements engineering phase in Agile software development. The reason for
selecting this research topic is that there are researches focusing on challenges in Ag-
ile and requirements engineering but a very few on challenges faced due to customer
communication. Many researches mentioned that more research must be done in
this area and also to ﬁnd the solutions to overcome these challenges. Also there are
no researches that prioritizes these customer communication challenges which this
thesis intends to do.
    Initially, to ﬁnd out the customer communication challenges a systematic mapping
study was conducted. From this mapping study a list of challenges were mapped.
From this list of challenges a survey was conducted to prioritize and ﬁnd out solutions
to overcome these challenges. The discussion on research questions and explanation
of results are mentioned below.
RQ.1: What are the customer communication challenges faced
in Requirement engineering process in Agile software develop-
ment?
The summary of results from the systematic mapping study is by identifying the chal-
lenges that are faced by customer communication in Agile requirements engineering.
While the previous literature mostly focused on the challenges in Agile software de-
velopment and Agile requirements engineering, this research focuses on challenges
solely related to customer communication in Agile requirements engineering. From
the collected papers(S1-S22), a total of 38 communication challenges are identiﬁed.
Further, These challenges are reduced to 18 main challenges as few of the challenges
are redundant that are related to the aim of this thesis.
The challenges identiﬁed from the systematic mapping study that are mapped in this
study are found that they eﬀect the project and causes risk in a real-time project.
The veriﬁcation of challenges is done from the real time data collected from the
survey where the respondents mention the aﬀects of these challenges. These are as
follows:
   1. The non-availability of customers for requirements negotiation, clar-
iﬁcation and feedback : The respondents mentioned that this challenge aﬀects
the usability, project life cycle and productivity of the project.
                                          60

<!-- Page 68 -->
                                                                                  61
   2. Lack of customer involvement: The respondents mentioned that this
challenge aﬀects the determination of what the customer really wants , productivity
and the completion time of the project.
   3. Too big number of customers that lead to too diverse and contro-
versial requirements: The respondents mentioned that this challenge aﬀected the
cost and the completion time of project.
    4. Lack of trust between stakeholders: The respondents mentioned that
this challenge aﬀects the productivity and the funding of the project.
   5. Communication challenge between teams and customers due to
temporal distance: The respondents mentioned that this challenge had a negative
impacts on the productivity of the project and also aﬀects the completion time of
projects.
   6. Lack of communication infrastructure due to spacial distance: The
respondents mentioned that this challenge aﬀects the productivity, eﬃciency and
completion time of the product.
    7. Communication issues between stakeholders with diﬀerent cultures
and language: The respondent mentioned that this challenge no.7 aﬀected the de-
livery time, execution time and the productivity of the project.
   8. Under speciﬁed requirements that are too abstract and allow vari-
ous interpretations: The respondents mentioned that this challenge 8 aﬀects the
eﬀective design of implementation, the productivity and the lead time of the project.
   9. Misunderstanding of requirements communication due to diﬀerence
in cultural values and languages: The respondents mentioned that this challenge
aﬀects the productivity of the project.
    10. Misunderstanding of knowledge during customer communication:
The respondents mentioned that this challenge aﬀected the completion time ,the
productivity and delay in the implementation of the project which resulted in a lack
of response from the client.
   11. Communication challenges due to overscoping of requirements: The
respondents mentioned that this challenge aﬀected the release time , eﬀectiveness,
cost, time and the productivity of the project.
    12. Insuﬃcient communication with customers due to lack of docu-
mentation: The respondents mentioned that this challenge decrease the produc-
tivity rate, aﬀects the communication skills, productivity and delays the product
development.

<!-- Page 69 -->
62                                                             Chapter 7. Discussion
   13. Inappropriate selection of communication technologies: The respon-
dents mentioned that this challenge aﬀects the progress of the project, hinders team
performance, the time and cost of the project.
   14. Lack of communication training: The respondent mentioned that this
challenge leads to slower negotiations with client, leads to imbalance in meeting cus-
tomers need, leads to a low productivity rate"and also impacts negatively on the
productivity of the team member thereby aﬀecting the product quality.
    15. New person on role at customers side: The respondent mentioned that
this challenge aﬀects the delivery time and leads to diverse requirements in a project.
   16. Increased communication costs: The respondents mentioned that this
challenge aﬀects the time and leads to diverse requirements.
   17. Weak relationship between customer and project lead: The respon-
dents mentioned that this challenge lead to delay in project.
    18. Communication lapse due to sudden change in requirements: The
respondent mentioned that this challenge directly impacts on the performance on
the process requirements collection, leads to random dismissal of task and leads to
increased lead time of the project.
     These are the real time eﬀects mentioned by the respondents which shows that the
18 identiﬁed challenges that are selected from the systematic mapping study are valid
challenges that occur in real time agile environment. This mapping of the customer
communication challenges helps the agile practitioners identify the challenges that
are faced in their real time agile projects. There are not much previous researches
that solely focuses on the customer communication challenges and it is hard to ﬁnd
out all the possible challenges from the researches. This thesis maps all the possible
customer communication challenges which helps the practitioners and researchers by
making it easy to ﬁnd all of these challenges at one place and help them be aware of
all these customer communication challenges that can be faced in their Agile projects.
RQ2: How are the customer communication challenge priori-
tized?
This research question is answered from conducting a survey. The challenges iden-
tiﬁed from the above research question is a base for preparing this survey. While
previous studies like (S1-S22) mentioned in table 5.4 focuses on the challenges in Ag-
ile requirements engineering, there is no research that focuses on the prioritization of
the customer communication challenges in Agile RE. The prioritization of challenges
is to identify which challenge causes high risk in an Agile project. This is done by
calculating the risk factor and arranging the challenges based on its risk from highest
risk to lowest risk. Most of the researches focuses on identifying the challenges and
solutions for the challenges but do not mention which challenge tends to causes more

<!-- Page 70 -->
                                                                                    63
amount of risk among them. Finding this out helps in giving more attention and
eﬀort in avoiding the challenges that causes high risk in the projects. The factors re-
quired to ﬁnd the risk analysis are gathered from the survey. Table 6.5 mentions the
prioritized challenges. The results obtained from this research questions helps the
members of the agile team avoid these customer communication challenges that are
faced in their real time agile projects based on the risks that these challenges cause.
This prioritization of challenges helps the agile team members by preparing them the
level of risk a challenge causes on a project that helps them give more attention dur-
ing requirements engineering. Initially, by knowing which challenge is a high risk the
members of agile team can avoid these challenges at early stages during requirements
engineering phase based on the level of risk caused by these customer communication
challenges. Secondly, if these challenges occurs in their projects then they can have a
checklist that helps in prioritizing the challenges to which more and early attention
must be given to remove the challenge. This prioritization of challenges helps the
agile projects in terms of cost, eﬀort, time and eﬃciency. The risks in a project leads
to lot of extra costs in removing of these risks, so this prioritization of challenges
helps in avoiding these risks and also this list helps in reducing the challenge that
cause more risk and the low risk challenges can be avoided which helps in reducing
the cost of the project. This prioritization list of customer communication challenges
helps the agile team members give more eﬀort in avoiding the challenges that cause
more amount of risk to the project that leads to increasing eﬃciency due to low risk
of the project. This prioritized challenges helps identify the challenges that cause
low risks in the projects that helps the agile members to avoid giving more attention
to these challenges that helps in reducing the eﬀort and time of the agile project.
RQ3: What are the mitigation strategies that can be proposed
for these challenges?
This research question is answered from the survey. This answer aims to ﬁnd so-
lutions to overcome the challenges that are identiﬁed from the systematic mapping
study. This is answered in the form of open ended question. A total of 96 responses
are gathered for this question and a total of 76 responses are taken into consideration
after removing the empty and unrelated responses. The challenges proposed by the
respondents help to overcome the customer communication challenges in real time
Agile projects. The solutions mentioned are gathered from the respondents working
in diﬀerent type of organizations, experience and locations. The real time mitigation
strategies proposed by this diverse set of respondents helps to overcome the chal-
lenges in diﬀerent situations and cases. These mitigation strategies are mentioned in
ﬁgures 6.11- 6.17.
    It is observed form the responses that some of mitigation strategies proposed by
the respondents for the challenges are similar to the solutions found from the lit-
erature and some are unique that help to overcome these customer communication
challenges. For example, according to Inayat et al [20] the mitigation strategy men-
tioned to overcome challenge 1- "The non-availability of customers for requirements
negotiation, clariﬁcation and feedback" is to have an on-site customer representa-

<!-- Page 71 -->
64                                                             Chapter 7. Discussion
tive and by moving a developer to the customer. In this thesis for challenge 1, ﬁve
mitigation strategies are proposed. Out of which the two mitigation strategies are
similar to the above mitigation strategies proposed by Inayat et al [20].
The mitigation strategies proposed for the customer communication challenges helps
the agile practitioners in overcoming these challenges that are faced in their real time
agile projects. There are not much previous researches that have provided solutions
in overcoming these challenges that are faced in real time. This thesis provided at
least 5-10 mitigation strategies for each challenge. These unique mitigation strategies
proposed in this thesis helps the agile practitioners and researchers in overcoming
these challenges in diﬀerent scenarios and cases. These mitigation strategies also act
as checklist for future studies. The proposed strategies help in solving the challenges
in real time agile projects by reducing the risk and improving the eﬃciency of the
agile projects.
The responses from the survey help to answer the RQ2 and RQ3. The survey was
open for around 40 days in which a total of 96 responses are collected. The ﬁrst set
of survey was sent out to collect feedback about the questionnaire and changes were
made and the survey was resent after making the changes . Out of the 96 responses
most of the responses are gathered from proliﬁc.co which is an online platform where
the paid respondents are found. Other sources of respondents are received from
Linkedin, facebook groups focusing on Agile environment.
7.0.1      Limitations of the study
The limitations in this study are mentioned below:
     • Survey time period : The survey questionnaire was open for around 40
       days according to the thesis timeline. A total of 96 responses are gathered from
       the survey which is a good amount of responses. If the survey was open for
       more time period then more amount of responses can be gathered that provides
       more amount of mitigation strategies for the challenges.
     • Database selection: To conduct the systematic mapping study in this thesis
       a total of four widely used popular databases are selected which are Scopus,
       ACM Digital library, ScienceDirect and Springer. A total of 22 primary studies
       are selected from this SMS and a total of 18 challenges are identiﬁed to answer
       RQ1. The results gathered from these databases are promising and achieved
       the aim of RQ1, but there is a possibility of leaving few papers out that can
       be available from other databases.
     • Customer side survey: Another survey can be conducted focusing from the
       perspective of the customers. This survey helps understand other problems
       that can be faced by the customer due to communication during requirements
       engineering.

<!-- Page 72 -->
Chapter 8
                                                  Threats to validity
This section discusses the threats to validity in this thesis. The research consisting
of results have threats and proper measures are taken to get productive and eﬃcient
results. Research studies are often subjected to threats due to various factors and
the nature of results. Wohlin et al.[44] in their paper proposed a set of guidelines
which are implemented in this study to avoid unexpected outcomes and risks.
8.1     SMS validity threats
The validity threats for the systematic mapping study are mentioned by following
the guidelines of Petersenn et al.[32] and Wohlin et al.[44].
8.1.1    Internal validity
Threats to internal validity are the properties that eﬀects the results and the proce-
dure of the research. For instance, consider a research with insuﬃcient or irrelevant
data which directly impact the results of the study. Hence a proper code of conduct
is to be followed and precautions should be employed.
    Initially, The major threat in any mapping study is the formulation of search
string and the selection of papers. If the search string is not properly constructed
then there may arise risks that eﬀects the results of the systematic mapping study.
To avoid this threat the search string is formulated by following the SPIDER search
strategy [8]. Second, the issue arises in selecting the relevant articles. After formu-
lating a proper search string, the papers from the database search are selected based
on the inclusion/exclusion criteria by following the guidelines of Petersenn et al.[32]
which is also veriﬁed by both thesis author and the supervisor.
8.2     Survey validity threats
In survey, four validity threats are mentioned as suggested by Linaker et al.[30] and
Wohlin et al.[44] which are Internal, external, construct and conclusion validity.
                                          65

<!-- Page 73 -->
66                                                      Chapter 8. Threats to validity
8.2.1      Internal validity
The threats related to conducting a survey concern how well the survey question-
naires are formulated and how are the survey respondents selected. If the survey
questionnaire is not answerable and the selection of target audience are not correct
then it might lead to poor responses and poor results. To overcome these risk in the
thesis,
     • After a meticulous reading of all the literature results, relevant challenges were
       used as a reference to formulated the questions followed by a thorough revision
       of the generated questionnaire by the author and supervisor. The ensures that
       there are no unknown repercussions in the survey results which might lead to
       inappropriate results.
     • The respondents selection for this study was supervised with the use of Pro-
       liﬁc.co website, a paid survey tool which enables ﬁltering the respondents based
       on their experience and background. Additionally, manual inspection was con-
       ducted for respondents from other sources like Linkedin and facebook groups
       the focus on Agile to avoid respondents who are not working in Agile team.
8.2.2      External Validity
Threats to external validity involve the generalizability and relevance to other similar
problems in this study. The results are utilized by the survey to provide mitigation
strategies and prioritization of customer communication challenges in Agile require-
ments engineering. This is achieved by using open source tools and commonly used
techniques to retrieve the data. Under the guidance of supervisor, Google forms
was used to generate the desired questionnaire and was circulated in online plat-
forms like Proliﬁc.co and Linkedin facebook groups that focus on Agile accessible
upon request. Further, if there were any issues they were resolved by revisiting the
respondent through emails.
8.2.3      Construct Validity
Threats to construct validity involve the ability to understand what is being examined
and analyzed from the results. If the formulation of questionnaire is not correct then
risks may arise when the the data collected from the survey is analysed. For this
a robust questionnaire formulation should be made as an insight into checking and
verifying the questionnaire before it is deployed to the respondents. This was tackled
by sending out initial questionnaire formulations and collecting feedback from few
respondents . Repeated revisions were made based on the feedback and veriﬁed by
the supervisor as well.
8.2.4      Conclusion Validity
Threats to Conclusion validity involve various aspects but concern three important
factors namely quality, correctness and Trust worthiness on the results. Risks may
arise if there is not proper data analysis methods to analyse the survey data as the

<!-- Page 74 -->
8.2. Survey validity threats                                                  67
survey gathers for open ended and close ended responses. A Risk impact approach
was utilized to prioritize the challenges. Due to the presence of both open and
close ended questions, Descriptive statistics was used for answering RQ2 followed
by thematic analysis was implemented to rule out unique answers and list all the
relevant results for RQ3.

<!-- Page 75 -->
Chapter 9
                                    Conclusion & future work
9.1     Conclusion
Requirements gathering is the initial and crucial step of any software development
lifecycle. The requirements are gathered from the customers. The process of gather-
ing requirements occurs at every stage of Agile software development. Communica-
tion plays an important role in gathering the requirements that help build a customer
satisfactory product. Problems in requirements engineering process leads to failure
of any project. To avoid risks in the project it is important to identify the challenges
that occur and to ﬁnd the solutions to overcome these challenges. This thesis aims
is to ﬁnd out the customer communication challenges, prioritize these challenges and
the mitigation strategies to overcome the challenges.
   To achieve the aim of this thesis two research methods were considered. The
data is collected through systematic mapping study and survey. First a systematic
mapping study is conducted to answer RQ1 and the data collected from the sms is
used to conduct the survey to answer the RQ2 and RQ3.
    The systematic mapping study is conducted to ﬁnd out the challenges that are
faced due to customer communication in Agile requirements engineering. From the
systematic mapping study a total of 22 papers were collected that are related to
achieve the aim of the thesis. A total of 18 customer communication challenges are
identiﬁed from the mapping study. From the identiﬁed challenges the survey ques-
tionnaire was prepared to answer RQ2 and RQ3.
    The purpose of the survey is to understand the challenges in customer communi-
cation during requirements engineering in Agile software development companies and
develop solutions to address the challenges. The survey is conducted to prioritize the
challenges and also to ﬁnd out the mitigation strategies to overcome these challenges.
A total of 96 responses are collected from the survey. The prioritization of challenges
to answer RQ2 was performed by calculating the risk that the challenges cause. This
risk analysis is calculated from the occurrence of challenges and the impact of the
challenges on the project. This data required to answer this was collected from he
survey. This prioritization of challenges help to identify the challenges that cause
more risk to the project so that they can be given more importance to reduce the
impact of the risks in the project.
                                          68

<!-- Page 76 -->
9.2. Future work                                                                  69
   The responses from the survey also helps to answer the RQ3 which is to ﬁnd out
the mitigation strategies to the challenges. Thematic analysis is used to extract the
data to ﬁnd out the solutions to overcome all the identiﬁed 18 challenges.
9.2     Future work
In this thesis, a total of 18 customer communication challenges are identiﬁed, pri-
oritised and mitigation strategies to overcome the challenges are also mentioned.
Further research can be conducted to,
   • Provide a checklist to understand how these challenges eﬀect diﬀerent compa-
     nies. A checklist can be provided to ﬁnd out the challenges and the eﬀects
     that these challenges causes is diﬀerent cases and scenarios of companies, i.e,
     companies with diﬀerent domains, sizes, location, etc.
   • Adapt the mitigation strategies for speciﬁc domain and company. As a future
     work, the mitigation strategies can be provided based on the diﬀerent cases and
     scenarios of companies, i.e, companies with diﬀerent domains, sizes, location,
     etc.
   • A survey can be conducted from the customers perspective and ﬁnd out the
     challenges they face and also solutions for those challenges.

<!-- Page 77 -->
                                                                 References
 [1] Wasim Alsaqaf, Maya Daneva, and Roel Wieringa. Quality requirements chal-
     lenges in the context of large-scale distributed agile: An empirical study. Infor-
     mation and software technology, 110:39–55, 2019.
 [2] Muhammad Ali Babar, Alan W Brown, and Ivan Mistrík. Agile Software Ar-
     chitecture: Aligning Agile Processes and Software Architectures. Newnes, 2013.
 [3] Izak Benbasat, David K Goldstein, and Melissa Mead. The case research strat-
     egy in studies of information systems. MIS quarterly, pages 369–386, 1987.
 [4] Elizabeth Bjarnason, Krzysztof Wnuk, and Björn Regnell. A case study on
     beneﬁts and side-eﬀects of agile practices in large-scale requirements engineering.
     In Proceedings of the 1st Workshop on Agile Requirements Engineering, pages
     1–5, 2011.
 [5] Elizabeth Bjarnason, Krzysztof Wnuk, and BjöRn Regnell. Are you biting
     oﬀ more than you can chew? a case study on causes and eﬀects of overscop-
     ing in large-scale software engineering. Information and Software Technology,
     54(10):1107–1124, 2012.
 [6] Virginia Braun and Victoria Clarke. Using thematic analysis in psychology.
     Qualitative research in psychology, 3(2):77–101, 2006.
 [7] Lan Cao and Balasubramaniam Ramesh. Agile requirements engineering prac-
     tices: An empirical study. IEEE software, 25(1):60–67, 2008.
 [8] Alison Cooke, Debbie Smith, and Andrew Booth. Beyond pico: the spider tool
     for qualitative evidence synthesis. Qualitative health research, 22(10):1435–1443,
     2012.
 [9] Karina Curcio, Tiago Navarro, Andreia Malucelli, and Sheila Reinehr. Require-
     ments engineering: A systematic mapping study in agile software development.
     Journal of Systems and Software, 139:32–50, 2018.
[10] P Curtis and M Carey. Risk assessment in practice. deloitte & touche llp, 2012.
[11] Ivonei Freitas Da Silva, Paulo Anselmo da Mota Silveira Neto, Pádraig O’Leary,
     Eduardo Santana De Almeida, and Silvio Romero de Lemos Meira. Software
     product line scoping and requirements engineering in a small and medium-sized
     enterprise: An industrial case study. Journal of Systems and Software, 88:189–
     206, 2014.
                                          70

<!-- Page 78 -->
References                                                                       71
[12] Andrea De Lucia and Abdallah Qusef. Requirements engineering in agile
     software development. Journal of emerging technologies in web intelligence,
     2(3):212–220, 2010.
[13] Heba Elshandidy and Sherif Mazen. Agile and traditional requirements engi-
     neering: A survey. International Journal of Scientiﬁc & Engineering Research,
     4(9):473–482, 2013.
[14] D Méndez Fernández, Stefan Wagner, Marcos Kalinowski, Michael Felderer,
     Priscilla Mafra, Antonio Vetrò, Tayana Conte, M-T Christiansson, Desmond
     Greer, Casper Lassenius, et al. Naming the pain in requirements engineering.
     Empirical software engineering, 22(5):2298–2338, 2017.
[15] Martin Fowler, Jim Highsmith, et al. The agile manifesto. Software Develop-
     ment, 9(8):28–35, 2001.
[16] Helen Gavin. Thematic analysis. Understanding research methods and statistics
     in psychology, pages 273–282, 2008.
[17] Ilyuza Gizzatullina. Empirical study of customer communication problem in
     agile requirements engineering. In Proceedings of the 2019 27th ACM Joint
     Meeting on European Software Engineering Conference and Symposium on the
     Foundations of Software Engineering, pages 1262–1264. ACM, 2019.
[18] Ville T Heikkilä, Daniela Damian, Casper Lassenius, and Maria Paasivaara. A
     mapping study on requirements engineering in agile software development. In
     2015 41st Euromicro conference on software engineering and advanced applica-
     tions, pages 199–207. IEEE, 2015.
[19] Anne Hess, Philipp Diebold, and Norbert Seyﬀ. Understanding information
     needs of agile teams to improve requirements communication. Journal of Indus-
     trial Information Integration, 14:3–15, 2019.
[20] Irum Inayat, Siti Salwah Salim, Sabrina Marczak, Maya Daneva, and Shaha-
     boddin Shamshirband. A systematic literature review on agile requirements
     engineering practices and challenges. Computers in human behavior, 51:915–
     929, 2015.
[21] Gibrail Islam and Tim Storer. A case study of agile software development for
     safety-critical systems projects. Reliability Engineering & System Safety, page
     106954, 2020.
[22] Mira Kajko-Mattsson. Problems in agile trenches. In Proceedings of the Sec-
     ond ACM-IEEE international symposium on Empirical software engineering and
     measurement, pages 111–119, 2008.
[23] Marcos Kalinowski, Rodrigo Oliveira Spínola, Tayana Conte, Rafael Priklad-
     nicki, Daniel Méndez Fernández, and Stefan Wagner. Towards building knowl-
     edge on causes of critical requirements engineering problems. 2015.

<!-- Page 79 -->
72                                                                       References
[24] Marja Käpyaho and Marjo Kauppinen. Agile requirements engineering with
     prototyping: A case study. In 2015 IEEE 23rd International requirements engi-
     neering conference (RE), pages 334–343. IEEE, 2015.
[25] Maryam Kausar and Adil Al-Yasiri. Using distributed agile patterns for sup-
     porting the requirements engineering process. In Requirements Engineering for
     Service and Cloud Computing, pages 291–316. Springer, 2017.
[26] Mikko Korkala and Frank Maurer. Waste identiﬁcation as the means for improv-
     ing communication in globally distributed agile software development. Journal
     of Systems and Software, 95:122–140, 2014.
[27] Jason Chong Lee, Tejinder K Judge, and Donald Scott McCrickard. Evaluating
     extreme scenario-based design in a distributed agile team. In CHI’11 Extended
     Abstracts on Human Factors in Computing Systems, pages 863–877. 2011.
[28] Seiyoung Lee and Hwan-Seung Yong. Distributed agile: project management in
     a global environment. Empirical Software Engineering, 15(2):204–217, 2010.
[29] Timo OA Lehtinen, Risto Virtanen, Ville T Heikkilä, and Juha Itkonen. Why the
     development outcome does not meet the product owners’ expectations? In In-
     ternational Conference on Agile Software Development, pages 93–104. Springer,
     2015.
[30] Johan Linåker, Sardar Sulaman, Martin Host, and Rafael de Mello. Guidelines
     for conducting surveys in software engineering. 05 2015.
[31] Bashar Nuseibeh and Steve Easterbrook. Requirements engineering: a roadmap.
     In Proceedings of the Conference on the Future of Software Engineering, pages
     35–46. ACM, 2000.
[32] Kai Petersen, Robert Feldt, Shahid Mujtaba, and Michael Mattsson. Systematic
     mapping studies in software engineering. In 12th International Conference on
     Evaluation and Assessment in Software Engineering (EASE) 12, pages 1–10,
     2008.
[33] Balasubramaniam Ramesh, Lan Cao, and Richard Baskerville. Agile require-
     ments engineering practices and challenges: an empirical study. Information
     Systems Journal, 20(5):449–480, 2010.
[34] Knut H Rolland. ’desperately’seeking research on agile requirements in the
     context of large-scale agile projects. In Scientiﬁc Workshop Proceedings of the
     XP2015, pages 1–6, 2015.
[35] Kenneth H Rose. A guide to the project management body of knowledge (pm-
     bok® guide)—ﬁfth edition. Project management journal, 3(44):e1–e1, 2013.
[36] Mohammad Shameem, Rakesh Ranjan Kumar, Chiranjeev Kumar, Bibhas
     Chandra, and Arif Ali Khan. Prioritizing challenges of agile process in dis-
     tributed software development environment using analytic hierarchy process.
     Journal of Software: Evolution and Process, 30(11):e1979, 2018.

<!-- Page 80 -->
References                                                                       73
[37] Mohammad Shameem, Rakesh Ranjan Kumar, Mohammad Nadeem, and
     Arif Ali Khan. Taxonomical classiﬁcation of barriers for scaling agile meth-
     ods in global software development environment using fuzzy analytic hierarchy
     process. Applied Soft Computing, 90:106122, 2020.
[38] Suprika V Shrivastava and Urvashi Rathod. Categorization of risk factors for
     distributed agile projects. Information and Software Technology, 58:373–387,
     2015.
[39] D. I. K. Sjoberg, T. Dyba, and M. Jorgensen. The future of empirical methods
     in software engineering research. In Future of Software Engineering (FOSE ’07),
     pages 358–378, 2007.
[40] Jonathan A Smith. Qualitative psychology: A practical guide to research meth-
     ods. Sage Publications, Inc, 2003.
[41] Manasvi Talluri and Hisham M Haddad. Best managerial practices in agile
     development. In Proceedings of the 2014 ACM Southeast Regional Conference,
     pages 1–5, 2014.
[42] VN Vithana, David Asirvatham, and MGM Johar. An empirical study on us-
     ing agile methods in global software development. In 2018 18th International
     Conference on Advances in ICT for Emerging Regions (ICTer), pages 150–156.
     IEEE, 2018.
[43] Stefan Wagner, Daniel Méndez Fernández, Michael Felderer, and Marcos Kali-
     nowski. Requirements engineering practice and problems in agile projects: re-
     sults from an international survey. arXiv preprint arXiv:1703.08360, 2017.
[44] Claes Wohlin, Per Runeson, Martin Höst, Magnus C Ohlsson, Björn Regnell,
     and Anders Wesslén. Experimentation in software engineering. Springer Science
     & Business Media, 2012.

<!-- Page 81 -->
Appendix A
                               Survey Guide
A.1   Survey Invitation
                          74

<!-- Page 82 -->
A.2. Survey Questionnaire      75
A.2     Survey Questionnaire
A.2.1    Demographics

<!-- Page 83 -->
76   Appendix A. Survey Guide

<!-- Page 84 -->
A.2. Survey Questionnaire   77
A.2.2    Challenges

<!-- Page 85 -->
78   Appendix A. Survey Guide

<!-- Page 86 -->
A.2.3   Mitigation strategies

<!-- Page 87 -->
Faculty of Computing, Blekinge Institute of Technology, 371 79 Karlskrona, Sweden

<!-- Page 88 -->

