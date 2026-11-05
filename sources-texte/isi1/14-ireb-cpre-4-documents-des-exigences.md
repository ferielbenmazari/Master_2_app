Requirements Engineering (IV)

     Training for the IREB CPRE
       Foundation Level test
        Prof. Camille Salinesi
2h

EU 4 – REQUIREMENTS
DOCUMENTATION
                   Terms
• Requirements Document,
• Requirements Specification
               A few myths that hurt
⚫   “requirements are known”
⚫   “requirements don’t change”
⚫   “only technical requirements are
    to be described”
⚫   “only features are to be described”
⚫   “requirements must focus of the
    solution”
⚫   “requirements are only about the
    software”
⚫   “the requirements are specified by
    the use cases”
⚫   “the requirements descriptions
    are independent from other
    descriptions”
Requirements exchange models


         Oral communication
                              Formal requirements models
                                 (UML/SySML modeller)




  Written requirements
      (Excel, Word)
            Different ways to document
                   requirements
          Oral                As a written data          As an information

Most frequent, typically   • Typically Excel tables   • Typically repository
the first form of            and requirements           and formal
communication                templates                  requirements models
 Difficult to manage       • If « known », every      • Ability to
(traceability,               partner has its own        communicate
                             definition and has to      requirements « in
configuration
                             interprate the other       their context »
managements, etc)            ones                     • Facilitates
 Easy to make mistakes
                           • If « negociated », the     synchronization
                             meaning of properties    • Improves traceability
                             is shared and
                             communication is
                             easier
       Requirements documentation
       « as an information system »
Call for                                       Design
                      Initial Requ                               Detailed
tender                                        document
                      irements d                                functional
                       ocument                                 specification
           Proposal

                                                                       Code
 Opportunity
    study                            Requirements
                                      repository
                                                                       Training
                                                                      documents

                  Planning                      Detailed technical
                                                  specifications
                               Architecture                                    Helps
                                document
       Requirements documentation:
              two dimension
External structure            Internal structure
•   The different kinds of    • The different kinds of
    documents or containers     information (goals, context,
    with their mission          problem statements,
•   Relationships between       solution statements,
    them                        purpose and motivations,
                                etc) contained in the
                                documents
                              • The internal organisation of
                                the document
Requirements repository structure
        (Source : AFIS)
                                                                         Source
                                                               1

                                                                    Nom
                                                                    Domaine: acquéreur/partie
                                                                    prenante/conception
                                      Emitted by
  Justification
                                                                          Valable under
       1
                                                                                                             n
                                                   n       n
               Supported by                                               Results from
                              n                                      n                               Condition
                                            Exigence
                              1                                      n
                                                       n

               Verified by
                                                                   Presents               0.1
                                                                                                  Compromise
                                    Allocated to

           1                                           n


  Verification                               Product                                      n
                                                                                                         Risk
 Description                      Nature: terminal/enabling                                     Description
 Means                            Type: fonction/Physical component…                            Severity: weak .. strong
                Use standards for structuring
                      reqts documents
• Easy way to structure documentation
• Provides a reference structure for requirements-related
  artefacts (goals, scenarios, FRs, quality attributes, constraints)
• Benefits of the reference struture:
   – Better requirements authoring
   – Finding the blanks and filling the gaps
   – Training stakeholders
   – Provides easy acces to information (eg for tests)
   – Reuse
Intrenal structuring ofan SRS :
            IEEE 830
     1 Introduction
         Purpose of the requirements document
         Scope of the product
         Definitions, acronyms and abbreviations
         References
         Overview of the remainder of the document
     2 General description
         Product perspective
         Product functions
         User characteristics
         General constraints
         Assumptions and dependencies
     3 Specific requirements
         functional requirements
         non-functional requirements
         interface requirements
                                                     …
           External structuring of SRS :
                IEEE 1233 (SyRS)
                     Requirements document



                         System requirements          Project plan
                     specification (IEEE1233- SyRS)

                                                            Configuration
 HW     Mechanical      Software requirements               management
spec.     spec.       specification (IEEE 830 SRS)              plan


                         Software Architecture                Test plan
                             Specification


                                                                etc.
                      Specification of Interfaces




                                  Etc.
Quality criteria for a requirements
             document

                  Complete



                  Consistent


             Clear, modifiable and
             extensible structure
                         Organize a review
                                                    Are there missing requirements?
                                     Completness:




                                                                      Are their
                     Modifiability                    Consistency     requirements
                                                                      that contradict
                                                                      each other?
Will it be easy to
change the
requirements?

                                     Comprehensi
                                                    Is the requirements document
                                        bility
                                                    easy to interpret?
           Other verifications
• Unique: no redundancy
• Annotated: each requirements has all the needed
  information (context, priority, release, etc)
• Organized: a place for each requirements and
  each requirements at its place
• Design independentant : solutions described
  elsewhere
• Traced : author, source and justification are
  documented
                      Define a
                dictionnary/glossary

             Terms
                          Acronyms



     Shared
understainding of
                                Definitions
    business
  terminology



                          Synonyms
                         Good practice
      – provide a simple, precise and intelligible definition for each relevant
        term in the field, and a list of accepted synonyms.
      – choose a term for an object, and stick to it (e.g. "handset", "mobile",
        "mobile phone", "Terminal Equipment", "TE", "telephone"..)
      – The glossary should be "appropriated" by all stakeholders.
      – and accessible to all (e.g. in the form of a "wiki").




                           Fondamentaux de l'Ingénierie des
                           Exigences, J1, Sept. & Oct. 2011, Mastère
10/09/2011                                                                  Page 17
                           MSI, École Centrale Paris
    Inconsistencies and conflicts risks

• Terminology clash due to synonymes
  – Eg: « base screen » =« idle screen »
  – Eg: « main screen » = « home screen »
• Designation clash due to homonyms
  – Eg : « ring tone » = « sms bip » + « wake up tone »
    + « telephone ring », etc
                               Complete
⚫   The specification contains everything the product is supposed to do
⚫   The requirements defined represent exactly the needs of the users
⚫   It is difficult to verify completeness:




        Inspect those               Define the                Do not leave a
       present to find               system's               "to be completed
       those who are               behavior with              later" section
           absent.               respect to all I/O            (incomplete)
    Complete with elicitation techniques
⚫ Interviews
⚫ Questionnaires

⚫ Focus group

⚫ Brainsoriming

⚫ Document review (standards,

  manuals, laws, etc.)
⚫ Prototyping

⚫ Field observation (quick and

  dirty ethnography)
⚫ etc
          Complete by exploring in both
                   directions
Bottom up                        Top down
• Questioning the existing       • Using analogical reasoning
  situation and the              • Being creative involves
  recommended solutions            "inventing" requirements as
• Identify problems                needed
• Abstracting from the details   • Identify the parameters of
• Generalize at the domain         the solutions already
  level                            identified and decline them
• Ask the question of why (of    • Recombine
  the project, the system, the
  organization, etc.)
             Keep quality criteria in mind
⚫       Standard IEEE 830   •   Other
    −   Unambiguous              ⚫  Annotated
    −   Complete                 ⚫  Real
    −   Consistent               ⚫  Comprehensible
    −   Verifiable               ⚫  Expressive
    −   Editable                 ⚫  Testable
    −   Traceable                ⚫  Building
    −   Usable
                  No need to overdo it!


  Costs   Cost of Quality                             Cost of non-quality




                               Sweet spot




                                                              Failures

Coût de la fiabilité des systèmes
Source: « Le marketing des SI », Guillaume Puiseux, Eyrolles 2008
Stability issue: the « requirements drift »
                            Misalignment with known
                            requirements when the project
                            does not know how to take
                            changes into account
  Known
  Requirements
  Qty




                                                                 Time


   Start of the   Delivery of the                      Go live
   requirements   specifications, start of
   analysis       development
         Takaway: Design your requirements
                  documentation!
   • Many standards exist (e.g. IEEE 830-1998 SRS
     and IEEE 1233-1998 SysRS)
   • Simple way to structure documentation
   • Goals, scenarios, and functional requirements,
     quality requirements, constraints, etc.
   • The benefits of these reference structures:
   • Writing (clarifies expected information)
   • Search for gaps (completeness)
   • Staff training
   • Access to information (e.g. testing) and reuse

Fondamentaux de l'Ingénierie des Exigences, J1, Sept. & Oct. 2011, Mastère MSI, École Centrale Paris   10/09/201
www.exibri.com                                                                                                     Page 25
                                                                                                       1
