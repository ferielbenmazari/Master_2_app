<!-- Page 1 -->
           Design Science Research Methods

                     Prof. Dr. Roel Wieringa
                      University of Twente,
                        The Netherlands
                    www.cs.utwente.nl/~roelw

UFPE 26 sept 2016            © R.J. Wieringa

<!-- Page 2 -->
           Research methodology accross the
                     disciplines
• Do these disciplines have the same methodology?
      – Technical science: Build cool stuff; test it; iterate
      – Social science: Observe people, interpret what they do or say; or
        select a sample, do a lot of statistics; iterate.
          • For social scientists, engineers are slightly autistic tinkerers
          • For technical scientists, social scientists are chatterboxes
      – Physical science: Build instruments, create phenomena, analyze data,
        create theories; iterate.
          • For physicists, other sciences are like stamp collecting
      – Mathematics: Read, think, write, think; iterate.
          • Mathematicians think that they provide the foundations of
            civilization

<!-- Page 3 -->
                         Our approach
• All research in all disciplines is problem‐solving
• The problems in design science research are design problems
   – Goal is to design something useful
   – Research method is the design cycle
• The problems in empirical research are knowledge questions
   – Goal is to acquire theoretical knowledge
   – Research method is the empirical cycle

• Wieringa, R.J. (2014) Design science methodology for information
  systems and software engineering. Springer Verlag

<!-- Page 4 -->
                    Outline

1. What is design science?
2. Research goals and problems
3. The design and engineering cycles
4. The empirical cycle

<!-- Page 5 -->
                    What is design science?

• Design science is the design and investigation of
  artifacts in context

UFPE 26 sept 2016            © R.J. Wieringa

<!-- Page 6 -->
             Two kinds of research problems in design
                              science
To design an artifact      Problems & Artifacts                 To answer knowledge
    to improve a           to investigate                   questions about the artifact in
  problem context               Knowledge,                             context
                                Design problems
•    Design software to estimate                      •    Is the DoA estimation accurate
     Direction of Arrival of plane                         enough`in this context?
     waves, to be used in satellite TV
                                                      •    Is it fast enough?
     receivers in cars

                                                      •    Is this routing algorithm
•    Design a Multi‐Agent Route
                                                           deadlock‐free on airports?
     Planning system to be used for
     aircraft taxi route planning                     •    How much delay does it produce?

•    Design a data location regulation                •    Is the method usable and useful
     auditing method                                       for consultants?
Is the artifact useful?                                    Is the answer true?
    UFPE 26 sept 2016                    © R.J. Wieringa

<!-- Page 7 -->
                          Reality check

• What research problem(s) are you investigating?
      – Artifact and context

• NB
      – The title of your thesis is the shortest summary of your research
        project.
      – Often, it mentions the artifact and the context.

<!-- Page 8 -->
           Framework for design science
    Social context:               • Source of relevance.
    Location of stakeholders      • Relevance, and money, comes and goes

                        Goals, budgets                       Designs

                                         Design science
    Improvement design                                           Answering knowledge
                                                                 questions

Existing problem‐       New problem‐                    Existing answers      New answers to
solving knowledge,      solving knowledge,              to knowledge          knowledge
Old designs             New designs                     questions             questions
                                         • Source and destination of theories
    Knowledge context:
                                         • Theories are forever
    Mathematics, social science, natural science, design science, design
    specifications, useful facts, practical knowledge, common sense, other beliefs

    UFPE 26 sept 2016                      © R.J. Wieringa

<!-- Page 9 -->
                    Outline

1. What is design science?
2. Research goals and problems
3. The design and engineering cycles
4. The empirical cycle

<!-- Page 10 -->
                    Goal structure: example
             To achieve stakeholder goals: Reduce national health care cost
Social
                 Contributions
context
           To improve a problem context: To provide mobile home care for the elderly

                                   Contribution

                       To (re)design an artifact:       Contribution
                 A remote health monitoring system
Design                                                          To answer knowledge
research                                   Contribution         questions: Is it usable?
                                                               Does it save time? What
                  To (re)design a research instruments:            quality of care is
                   a questionnaire, the setup of a field            experienced?
                                experiment

<!-- Page 11 -->
                    Goal structure: example
              To achieve stakeholder goals Reduce  national
                                              Utility       health
                                                      (sponsor), funcare cost
                                                                     (designer),
Social                                              curiosity (empirical researcher)
                 Contributions
context
           To improve a problem context: To provide mobile home care for the elderly

                                    Contribution

                        To (re)design an artifact        Contribution
                  A remote health moitioring system
Design                                                           To answer knowledge
research                                    Contribution         questions: Is it usable?
                                                                Does it save time? What
                   To (re)design a research instruments             quality of care is
                    a questionnaire, the setup of a field            experienced?
                                 experiment

<!-- Page 12 -->
      Three kinds of design research questions
                      Problems to be investigated,
 Improvement          artifacts to be investigated         Answering knowledge questions
 design

                               Knowledge

1. Design research                            2. Empirical knowledge questions
   problems (a.k.a.                                 – To ask questions about the real
   technical research                                 world.
   questions)                                 3. Analytical knowledge questions
  –      To improve some kind of
         artifact in some kind of                   – To ask questions about the logical
         context.                                     consequences of definitions

  UFPE 26 sept 2016                      © R.J. Wieringa

<!-- Page 13 -->
                    Template for design problems

•   Improve <problem context>
•   by <treating it with a (re)designed artifact>
•   such that <artifact requirements>
•   in order to <stakeholder goals>

•   Reduce my headache
•   by taking a medicine
•   that reduces pain fast and is safe
•   in order for me to get back to work

<!-- Page 14 -->
                    Template for design problems

•   Improve <problem context>
•   by <treating it with a (re)designed artifact>
•   such that <artifact requirements>
•   in order to <stakeholder goals>

•   Reduce my headache
•   by taking a medicine                             Problem context and   Stakeholder
                                                     stakeholder goals.    language
•   that reduces pain fast and is safe
•   in order for me to get back to work

<!-- Page 15 -->
                    Template for design problems

•   Improve <problem context>
•   by <treating it with a (re)designed artifact>
•   such that <artifact requirements>
•   in order to <stakeholder goals>

•   Reduce my headache
•   by taking a medicine                       Artifact and its desired   Technical
                                               properties.                language
•   that reduces pain fast and is safe
•   in order for me to get back to work

<!-- Page 16 -->
    Also works for research problems rather than
           individual practical problems

•   Improve <problem context>
•   by <treating it with a (re)designed artifact>
•   such that <artifact requirements>
•   in order to <stakeholder goals>

•   Reduce patients’ headaches                        The problem is now to design
                                                      an artifact that helps a class
•   by treating it with a medicine
                                                      of stakeholders achieve a
•   that reduces pain fast and is safe                class of goals.
•   in order for them to function as they wish

<!-- Page 17 -->
  • The design problem template relates the artifact to the problem
    context and stakeholder goals, and adds requirements

             To achieve stakeholder goals: Reduce  national
                                              Utility       health
                                                      (sponsor), funcare cost
                                                                     (designer),
Social                                               curiosity (empirical researcher)
                 Contributions
context
           To improve a problem context: To provide mobile home care for the elderly

                                     Contribution

                         To (re)design an artifact             Contribution
                        That satisfies requirements
Design                                                                To answer knowledge
research                                    Contribution              questions: Is it usable?
                                                                     Does it save time? What
                   To (re)design a research instruments:                 quality of care is
                    a questionnaire, the setup of a field                 experienced?
                                experiment

<!-- Page 18 -->
                             Discussion
• Who are the stakeholders of your project?
    – Real or hypothetical: Stakeholders may not know they are
      stakeholders
• What is/are your top‐level design problem(s), using our
  template?
    – Improve <problem context>
    – by <treating it with a (re)designed artifact>
    – such that <artifact requirements>
    – in order to <stakeholder goals>

• NB some parts may be currently uncertain, fuzzy, or unknown.
• But surely, some parts are currently known!

<!-- Page 19 -->
     There is no single “correct”problem
                  statement
• A good problem statement forces the reader to think focussed
  about the artifact while remaining aware of the intended
  problem context

• Next two examples extracted from two M.Sc theses
      – http://essay.utwente.nl/67945/
      – http://essay.utwente.nl/69399/

<!-- Page 20 -->
•   BPMN Plus : a modelling language for         Artifact
    unstructured business processes.               Context
•   The objective of this study is
     – To investigate the way through which
       unstructured business processes can be
       modelled and managed without limiting their           – Improve <problem context
       run‐time flexibility.                                   in which unstructured
                                                               business process is to be
•   Research questions
                                                               modelled>
     – Q1 What are the differences between
       structured and unstructured business                  – by <introducing a modeling
       processes?                                              language for unstructured
     – Q2 What are the differences between Business            business processes>
       Process Management and Case Management                – such that <requirements
       in dealing with unstructured business                   such as run‐time flexibility,
       processes?                                              and ... learnability etc?>
     – Q3 What are the capabilities of existing
                                                             – in order to <stakeholder
       modelling notations to deal with unstructured
       business processes?
                                                               goals, e.g. provide better
                                                               process improvement
     – Q4 How to model an unstructured business
       process while providing run‐time flexibility?           advice to clients>

<!-- Page 21 -->
                    Outline

1. What is design science?
2. Research goals and problems
3. The design and engineering cycles
4. The empirical cycle

<!-- Page 22 -->
                                                             This is a checklist. See appendix
                                                             A in the book & on my web site
                               Engineering cycle
! = Action
? = Knowledge question

                                         Implementation evaluation =
 Design                                  Problem investigation
 implementation                         •Stakeholders? Goals?
                                        •Conceptual problem framework?
                                        •Phenomena? Causes, mechanisms, reasons?
                                        •Effects? Positive/negative goal contribution?

  Treatment validation                               Treatment design

 •Context & Artifact → Effects?               •Specify requirements!
 •Effects satisfy Requirements?              •Requirements contribute to goals?
 •Trade‐offs for different artifacts?        •Available treatments?
 •Sensitivity for different Contexts?        •Design new ones!

    UFPE 26 sept 2016                   © R.J. Wieringa

<!-- Page 23 -->
       Implementation is introducing the
   treatment in the intended problem context
• If problem context is a real‐world context…. implementation of a
  solution is technology transfer to the real world.
   – Not part of a research project

• If the problem is to learn about the performance of a design ...
  Implementation of a solution is the construction of a prototype
  and test environment.
   – Part of a research project

<!-- Page 24 -->
                                 Nesting of cycles
                        Problem investigation
                        Treatment design
                        Treatment validation          Problem investigation (How to do the
Research
                                                      validation?)
project:
design                                                Experiment design & validation (design and
cycle                                                 validate a prototype & test environment)
                                                      Implementation (construction of prototype &
                                                      test environment, lab or field)
                                                      Evaluation (analyze results)
                        Implementation
                        (tech transfer)
                        Implementation evaluation
                        (in the field)
                                                      This is a very special engineering cycle,
                                                      called the empirical cycle.

<!-- Page 25 -->
                    Questions?

<!-- Page 26 -->
                                                             Real-world problem-
                                                             oriented research or
                                 Design cycle                evaluation research
    Real-world design
                                          Real-world implementation evaluation =
    implementation
                                          Real-world problem investigation
                                        •Stakeholders? Goals?
                                        •Conceptual problem framework?
                                        •Phenomena? Causes, mechanisms, reasons?
                                        •Effects? Positive/negative goal contribution?
                           Design
                           cycle

Treatment validation                      Treatment design
•Context & Artifact → Effects?
                                            •Specify requirements!
•Effects satisfy Requirements?
                                            •Requirements contribute to goals?
•Trade‐offs for different artifacts?
                                            •Available treatments?
•Sensitivity for different Contexts?
                                            •Design new ones!
                                                                   Solution-oriented
                                                                   research
    UFPE 26 sept 2016                  © R.J. Wieringa

<!-- Page 27 -->
   Two kinds of design science research
                 projects
• Problem‐oriented research and evaluation research
   – Investigate the real world to learn about artifacts and how they
     are used by stakeholders
             • How is the UML used in small and medium sized companies?
             • What is the cause if large SE projects being late?
             • How is RE done in large‐scale agile projects?
• Solution‐oriened: technical research
   – Design an artifact, and validate it by simulation
             • Design & validate a multi‐agent system for autonomous route
               planning
             • Design & validate a system for remote health monitoring for the
               elderly
             • Design & validate a requirements engineering technique for agile
               global software engineering projects

<!-- Page 28 -->
        Example, missing question added

•    BPMN Plus : a modelling language for unstructured business processes.
•    The objective of this study is
      – To investigate the way through which the unstructured business processes can
        be modelled and managed without limiting their run‐time flexibility.
•    Research questions
      – Q1 What are the differences between structured and unstructured business
        processes?
      – Q2 What are the differences between Business Process Management and Case
        Management in dealing with unstructured business processes?
      – Q3 What are the capabilities of existing modelling notations to deal with
        unstructured business processes?
      – Q4 How to model an unstructured business process while providing run‐time
        flexibility?
•    “The practical usefulness of newly proposed modelling notation is
     investigated by demonstrating it with the help of an example.
•    Moreover, the proposed modelling notation is validated by conducting
     interviews with experienced practitioners.”

<!-- Page 29 -->
Problem
• Stakeholders? Goals? : BiZZDesign consultants. To provide high‐quality consultancy.
• Conceptual problem framework? Business process modelling, structured &
   unstructured. See Q1.
• Phenomena? Causes, mechanisms, reasons? BPMN does not allow for modelling
   flexible business processes; but case‐management systems almost impose no
   constraints. Simple explanation: the languages lack facilities. See Q2.
• Effects? Positive/negative goal contribution? Limits to consultancy advice.
Treatment
• Specify requirements! Omitted research question. May be part of Q2.
• Requirements contribute to goals? Omitted too.
• Available treatments? See Q3.
• Design new ones! See Q4.
Validation Omitted questions, but done by means of interviews.
• Context & Ar fact → Effects? Does it work?
• Effects satisfy Requirements? Does it work as desired?
• Trade‐offs for different artifacts? Performance of different languages on similar
   cases?
• Sensitivity       for different Contexts? Performance
     UFPE 26 sept 2016                        © R.J. Wieringa
                                                              the designed language in different
   cases?

<!-- Page 30 -->
          Research questions reformulated (and
                     renumbered)
Problem investigation
• Q1 Who are the stakeholders, what are their goals, and what problems do they
   encounter when modeling unstructured business processes?
• Q2 How to define structured and unstructured business processes?
• Q3 What are the capabilities of BPM and CM systems to deal with unstructured
   processes?
Treatment design
• Q4 What are the requirements of the language? E.g., usability, utility?
• Q5 What are the capabilities of existing business process modelling notations to
   deal with unstructured business processes? How do they score on the
   requirements?
• Q6 Design a language to model unstructured business processes
Treatment validation
• Q7 Can the language model known and expected unstructured business processes?
• Q8 Does it satisfy the requirements? How does that compare the other available
   languages

<!-- Page 31 -->
    Sequence of design cycles to reduce
    uncertainty & manage cost and risk
• Design the product idea
      – Sketch the problem – design the principle of operation – analytical
        validation of soundness of the idea
• Sketch the product
      – Describe problem – sketch product architecture – provide argument that
        this exhibits the necessary mechanisms to produce desired behavior
• Feasibility study
      – Same, but now validate by building small prototype in test environment
• Specify the product
      – Describe problem mechanisms and goals – Specify product requirements
        and structure – validate analytically and empirically
• Etc.

<!-- Page 32 -->
                                 Recap
• Design science designs and investigates artifacts in context
      – Design problems versus knowledge questions
• Engineering cycle:
      – problem – design – validation – implementation – evaluation
• Design cycle:
      – problem – design – validation
      – Nesting of design cycles to solve subproblems
      – Sequence of design cycles to refine global design

<!-- Page 33 -->
                    Questions?

<!-- Page 34 -->
                    Outline

1. What is design science?
2. Research goals and problems
3. The design and engineering cycles
4. The empirical cycle

<!-- Page 35 -->
            Research problems in design science
                       Problems to be investigated,
 Improvement                                                Answering knowledge questions
                       artifacts to be investigated
 design

                               Knowledge

Design research problems
• Improve <problem context>                    2. Empirical knowledge questions
• by <treating it with a (re)designed                – To ask questions about the real
   artifact>                                           world: about the problem or about
• such that <artifact requirements>                    the artifact in context.
• in order to <stakeholder goals>.
                                               3. Analytical knowledge questions
Design cycle
• Problem investigation                              – Yields definitions, assumptions,
                                                       theorems.
• Treatment design
• Treatment validation
   UFPE 26 sept 2016                      © R.J. Wieringa

<!-- Page 36 -->
       Empirical knowledge questions
• Descriptive knowledge questions:
      – What happened?
      – How much? How often?
      – When? Where?                                    Journalistic questions.
      – What components were involved?                  Yield facts.

      – Who was involved?
      – Etc. etc.
• Explanatory knowledge questions:
   – Why?
             1.     What has caused the phenomena?
             2.     Which mechanisms produced the phenomena?   Beyond the facts.
                                                               Yields theories.
             3.     For what reasons did people do this?

<!-- Page 37 -->
  Three kinds of explanations: Example
• Descriptive question: Is the light on?
      – Based on observation: Yes.
      – When? Now.
      – Where? Here.
• Explanatory question: Why is it on?
      1.      Cause: because someone turned the light switch, it is on (and not
              off). Explains difference with off‐state.
      2.      Why does this cause the light to switch on? Mechanism: because the
              switch and light bulbs are connected by wires to an electricity
              source, in this architecture …, and these components have these
              capabilities ….. Explains how on‐state is produced.
      3.      By why did someone turn the light on? Reasons: Because we wanted
              sufficient light to be able to read, and it was too dark to read.
              Explains which stakeholder goal is contributed to.

<!-- Page 38 -->
             Another example: software
• Descriptive question: What is the performance of this program?
      – Execution time for different classes of inputs?
      – Memory usage?
      – Accuracy?
      – Etc. etc.
• Explanatory question: Why does this program have this
  performance (compared to others)?
      1.      Cause: Variation in execution time is caused by variation in input; etc.
      2.      Mechanism: Execution time varies this way because it has this
              architecture with these components
      3.      Reasons: Observed execution time varies this way because users want to
              be on‐line all the time, and therefore provide these inputs

<!-- Page 39 -->
               Another example: method
• Descriptive question: What is the performance of this method
  for developing software?
      – Understandability for practioners
      – Learnability
      – Quality of the result
      – Perceived utility
      – Etc. etc.
• Explanatory question: Why does this method have this
  performance?
      1.      Cause: Difference in understanding of methods by software
              engineers is attributed to differences in the methods.
      2.      Mechanism: These differences are explained by the structure of the
              method and/or the structure of cognition.
      3.      Reasons: No explanation in terms of reasons here.

<!-- Page 40 -->
         Research questions reformulated again
Problem investigation
• Q1 Who are the stakeholders, what are their goals, and what problems do they
   encounter when modeling unstructured business processes?
• Q2 How to define structured and unstructured business processes?
• Q3 What are the capabilities of BPM and CM systems to deal with unstructured
   processes?
Treatment design
• Q4 What are the requirements of the language? Why?
• Q5 What are the capabilities of existing business process modelling notations to
   deal with unstructured business processes? How do they score on the
   requirements?
• Q6 Design a language to model unstructured business processes
Treatment validation
• Q7 Can the language model known and expected unstructured business processes?
   Why (not)?
• Q8 Does it satisfy the requirements? How does that compare the other available
   languages

<!-- Page 41 -->
            Research problems in design science
                       Problems to be investigated,
 Improvement                                                Answering knowledge questions
                       artifacts to be investigated
 design

                               Knowledge

Design research problems
• Improve <problem context>                    2. Empirical knowledge questions
• by <treating it with a (re)designed                – Descriptive: what, how, when,
   artifact>                                           where, who, etc.→ Facts
• such that <artifact requirements>
                                                     – Explanatory: Why → Theories
• in order to <stakeholder goals>.
Design cycle                                   3. Analytical knowledge questions
• Problem investigation                              – Yields definitions, assumptions,
• Treatment design                                     theorems.
• Treatment validation
   UFPE 26 sept 2016                      © R.J. Wieringa

<!-- Page 42 -->
           We want to develop theories of
             problems and of designs
Example of a problem theory:
• A theory of modeling of unstructured business processes
      – Scope of such a theory: the population of all cases in which
        unstructured business processes are modeled.

Example of a design theory:
• A theory of a particular notation for modeling unstructured
  business processes
      – Scope of such a theory: the population of all cases in which this
        notation is used to model an unstructured business process

<!-- Page 43 -->
                 Two way to go beyond facts:
                generalization and explanation
                                                                Descriptive theory of the
Facts
                                                                population
                         • By analogy from cases                Unobserved population
        Observed sample of• cases
                             By inferential statistics
                             from sample

 • What happens in these cases?                    • What happens in all cases?
 • What average, variance in this sample?          • What average, variance in this population?
         Explain by                                         Explain by
         • Causes                                           • Causes
         • Mechanisms                                       • Mechanisms
         • Reasons                                          • Reasons

            • Why?                                               • Why?
Explanatory theory of the                                     Explanatory theory of the
case/sample                                                   population

<!-- Page 44 -->
                    To support generalization and explanation,
                     we need sound empirical research design

<!-- Page 45 -->
   Design decisions for research setup
                        Treatment data                                  Which populaton?

Which treatment
(if any?)                  Treatment
                        instruments &Y
                          procedures                           Sample
                                                                   How to sample?
                                                                                     Po‐
                                         Objects
                                          ObjectsofofStudy
                                                       Study                         pu‐
  Researcher
                                            Object of Study                           la‐
                                                                    Representation
                                                                                     tion

                        Measurement
                        instruments &
                          procedures                   Which objects of study?

Which measurements?
                       Measurement data

<!-- Page 46 -->
                               Research designs
                                    Observational study        Experimental study
                                    (no treatment)             (treatment)
Case‐based:                         Observational case study   •   Expert opinion (mental
investigate single cases, look at                                  simulation by experts),
architecture and mechanisms                                    •   Mechanism experiments
                                                                   (simulations, prototyping),
                                                               •   Technical action research
                                                                   (experimental use of the
                                                                   artifact in the real world)
Sample‐based: investigate           Survey                     •   Statistical difference‐
samples drawn from a                                               making experiment
population, look at averages                                       (treatment group – control
and variation                                                      group experiments)

   Next two slides: Single checklist for all of these research designs

<!-- Page 47 -->
                       Checklist to establish context
                                1.   Improvement goal?
                                2.   Knowledge goal?
                                3.   Current knowledge?
      Design cycle                                                   Empirical cycle
                                                                       4. …
                                                                       ….
                                                                       16. …

                           17. Contribution to knowledge goal?
                           18. Contribution to improvement goal?

Designing something useful                                Answering a knowledge question

   UFPE 26 sept 2016                    © R.J. Wieringa

<!-- Page 48 -->
                      Data analysis                          This is a checklist for
                                                             • research design,
                      12. Data?
                                                             • research reporting,
                      13. Observations?
                                                             • reading a report.
                      14. Explanations?                      App. B in my book &
                      15. Generalizations?                   my web site
                      16. Answers?

 Research execution
                                                  Research problem analysis
 11. What happened?
                                                  4. Conceptual framework?
                          Empirical               5. Knowledge questions?
                                                  6. Population?
                            cycle

Design validation                      Research & inference design
7. Object of study validity?           7. Object of study?           Research
                                                                     setup
8. Treatment specification validity?   8. Treatment specification?
9. Measurement specification validity? 9. Measurement specification?
10. Inference validity?                10. Inference?                Inference
 UFPE 26 sept 2016              © R.J. Wieringa

<!-- Page 49 -->
                                     Summary
                       Problems to be investigated,
 Improvement                                               Answering knowledge questions
                       artifacts to be investigated
 design

                              Knowledge

Design research problems                      Empirical knowledge questions
• Improve <problem context>
                                             • Descriptive: what, how, when, where,
• by <treating it with a (re)designed
   artifact>                                    who, etc.→ Facts
• such that <artifact requirements>          • Explanatory: Why → Explanations
• in order to <stakeholder goals>.            Empirical cycle
Design cycle
                                              • Research problem analysis
• Problem investigation
• Treatment design                            • Research design & validation
• Treatment validation                        • Research execution
Artifacts → Design cycle → Artefacts          • Data analysis
                                              Theories → Empirical cycle → Theories
                                              Analytical knowledge questions
   UFPE 26 sept 2016                     © R.J. Wieringa

<!-- Page 50 -->
     Design science research strategy

<!-- Page 51 -->
   More robust                                                             Street
   generalizations                                                         credibility
Population                                                                 (works in
                                                                           practice)

Large samples
                                                                             More realistic
                                                                             conditions of
                                                                             practice
Small samples

                    Idealized                                  Practical
Laboratory
credibility
(works in                  •    Just like New Drug Research
theory)

    UFPE 26 sept 2016                        © R.J. Wieringa

<!-- Page 52 -->
   More robust                                                            Street
   generalizations                                                        credibility
Population

Large samples                 Statistical difference‐making experiments

Small samples              Single‐case                                      More realistic
                                                               Technical action
                                                                  research conditions of
                          mechanism
                          experiments
                    Idealized                                 Practical     practice
Laboratory                                                      Expert opinion
credibility

• Scaling up:
     – Single‐case mechanism experiment (laboratory simulation)
     – Expert opinion
     – Single‐case mechanism experiment (field simulation)
     – TAR (apply technique in a real‐world project)
    UFPE 26 sept 2016                       © R.J. Wieringa

<!-- Page 53 -->
                            Take‐home
• Design science designs and investigates artifacts in context
   – Design problems versus knowledge questions
• Solve design problems with design cycle:
   – Problem investigation – treatment design – treatment validation
   – Nesting and sequencing of design cycles
   – → Useful ar facts for a context
• Answer empirical knowledge questions with the empirical cycle
   – Research problem investigation – research design – validation – execution –
     analysis
   – Case‐based or sample‐based designs, observational or experimental designs
   – → Theories about artifact in context
• Research strategy: Scaling up from lab to practice

<!-- Page 54 -->
•      Wieringa, R.J. and Daneva, M. (2015) Six strategies for generalizing software
       engineering theories. Science of computer programming, 101. pp. 136‐152.

•      Wieringa, R.J. (2014) Design science methodology for information systems and
       software engineering. Springer Verlag

•      Wieringa, R.J. (2014) Empirical research methods for technology validation: Scaling up
       to practice. Journal of systems and software, 95. pp. 19‐31.

•      Wieringa, R.J. and Morali, A. (2012) Technical Action Research as a Validation Method
       in Information Systems Design Science. In: Design Science Research in Information
       Systems. Advances in Theory and Practice 7th International Conference, DESRIST
       2012, 14‐15 May 2012, Las Vegas, USA. pp. 220‐238. Lecture Notes in Computer
       Science 7286. Springer.

•      Wieringa, R.J. (2010) Relevance and problem choice in design science. In: Global
       Perspectives on Design Science Research (DESRIST). 5th International Conference, 4‐5
       June, 2010, St. Gallen. pp. 61‐76. Lecture Notes in Computer Science 6105. Springer.

•      Wieringa, R.J. (2009) Design Science as Nested Problem Solving. In: Proceedings of the
       4th International Conference on Design Science Research in Information Systems and
       Technology, Philadelphia. pp. 1‐12. ACM.
