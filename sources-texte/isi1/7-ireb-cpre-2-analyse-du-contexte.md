<!-- Source: ressources/S3__ISI1/EPI/7_IREB CPRE (2 - Analyse du contexte).pdf | pdftotext -layout | 34 pages -->

<!-- Page 1 -->

Requirements Engineering (II)

    Training for the IREB CPRE
       Foundation Level test
       Prof. Camille Salinesi

<!-- Page 2 -->

1h1/4

EU 2 – SYSTEM AND SYSTEM
CONTEXT

<!-- Page 3 -->

   At the end of this chapter, you
               should
1 Know system context, system boundary
  and context boundary
2 Master and use system boundary and
  context boundary

<!-- Page 4 -->

        The system context
• A system is always part of an environment
• The system environment influences the
  system requirements in a significant way
• The system context is the relevant part of
  the environment
• Requirements only exist in a context

                                            irements
                         [Pohl 2010] « Requ
                             Engineering » §5.1

<!-- Page 5 -->

    Principles of structuration of the
                 context
1. Devide the context into facets

                                         [Pohl 2010]
                                        « Requirements
                                                       6.1
                                    Engineering » Fig.

<!-- Page 6 -->

   Les principes de structuration du
              contexte :
2. Classify aspects within facets

                                         [Pohl 2010]
                                        « Requirements
                                                       6.2
                                    Engineering » Fig.

<!-- Page 7 -->

    The 4 facets of the context
• Subject
  Objects and events that need to be represented in
  the system
• Usage
  how people and other systems use the system
• IT
  operating/technical environment, physical and
  software components, IS processes and strategies
• Development
  all aspects that influence development procedures

<!-- Page 8 -->

                                         [Pohl 2010]
                                        « Requirements
      3 aspects in each facet:        Engineering » §6.2

• Requirements sources:
  – stakeholders, documents, other systems
• Objects of the context:
  – People and artefacts that should be
    consideredduring RE
• Properties and relationships:
  – How things and poeple in the context relate to
    each other

<!-- Page 9 -->

4 facets, 3 aspects

                   [Pohl 2010]
                  « Requirements
                                 6.3
              Engineering » Fig.

<!-- Page 10 -->

Boundaries

                            irements
         [Pohl 2010] « Requ
             Engineering » §5.1

<!-- Page 11 -->

The grey zone

                             irements
          [Pohl 2010] « Requ
              Engineering » §5.2

<!-- Page 12 -->

          System boundary
• Separates modifiable and stable artefacts
• Initially not known with precision (« grey
  zone »)
• Adjustments will be needed

<!-- Page 13 -->

System interface

                              irements
           [Pohl 2010] « Requ
               Engineering » §5.2

<!-- Page 14 -->

   Limits of the system context
• Boundary between the
  relevant and the
  irrelevant part of the
  environment
• Its definition changes
  during the project
• Only the relevant part is
  taken into account

<!-- Page 15 -->

Yet another grey zone

                                  irements
               [Pohl 2010] « Requ
                   Engineering » §5.3

<!-- Page 16 -->

       Document the context
• Requirements depend on the context
  – Domain knowledge
  – business rules, business processes, the
    organisation, the corporates strategy, etc
  – Law, norms, standards, etc
  – Other systems, technology,
• Be careful, they can be assumptions
  about the future !                [Pohl 2010]
                                   « Requirements
                                            Engineering »
                                                 §5.4

<!-- Page 17 -->

The context of a requirement

                                                                    irements
                                                 [Pohl 2010] « Requ
                                                     Engineering » §5.4

             Fondamentaux de l'Ingénierie des
             Exigences, J1, Sept. & Oct. 2011,
10/09/2011                                                          Page 17
             Mastère MSI, École Centrale Paris
             www.exibri.com

<!-- Page 18 -->

                            Strategic goals:
                          Ishikawa’s diagram

Source : « strategy-management-diagrams » http://www.conceptdraw.com/

<!-- Page 19 -->

Frontiers of the system
  Context diagrams

<!-- Page 20 -->

      Stakeholders
« stakeholder diagram »

<!-- Page 21 -->

      Example : influences amongt stakeholders
               in a videogame project
                                                                   The Wider
                                                                   Environment

                                                                     The Containing
                                                                     System
                                                         Interfacing
                                                                                                            Competitor        Pressure to
                                                          System         The                                (Negative
                                                                                                            Stakeholder)
                                                                                                                              innovate
                                                                         System
                                         User / Consumer                              Maintenance
                                                                                       Operator

                     Pressure to                                          The Product                                   The Public
                                                                        (a Video Game)
                     make game                 Player     Player                              Operational

  Ian F. Alexander   enjoyable            (Functional
                                          Beneficiary)
                                                         (Normal
                                                         Operator)
                                                                                                  Support

2005 "A Taxonomy of
                    n
Stakeholders - Huma                                                                                                  Politician

   Roles in System             Director

     Development"
                              Shareholder                                                                                            Pressure to
                               (Financial
         http://              Beneficiaries)                                                                                      regulate violent &
easyweb.easynet.co
                   .u                                                                                        Media
                                                                                                            Regulator
                                                                                                                                   sexual imagery
                    /         Pressure to                  Product
 k/iany/consultancy                                        Manager
                    my        make profit
 stakeholder_taxono
                                                          (Purchaser)

              /
                    my
 stakeholder_taxono                                                            Developer

            .htm
     10/09/2011

<!-- Page 22 -->

     Usages
Use Case Diagrams

<!-- Page 23 -->

           Use Case Diagrams
Do                           Don’t
• Identify actors            • CRUD
• Identify their goals       • « Manage »
• Reify (services provided   • Mix up levels of details
  by the system)             • Alternative cases (non
• Complementary cases          nominal cases,
  (nominal)                    exceptions, etc)

<!-- Page 24 -->

                  Exercise
• What is the context?
• Who are the
  stakeholders ?
• What are the main
  use cases?

<!-- Page 25 -->

                    Don’t forget
• Domain knowledge               • Assumptions about:
• Tacit knowledge and implicit      – Market
  requirements                      – Physical environment
• Law, norms, standards             – Business environement
                                      (organiation, process, rules,
• Constraints                         etc)
• Context evolution                 – Users (skills, expectations,
• Project requirements                needs…)
• Associated systems
• Orthogonal requirements
• Interfaces with other
  systems and interoperability
  issues
• Legacy integration issues

<!-- Page 26 -->

Domain dictionary
         • Terms: actors,
           ressources, tasks
           information, rules,
           etc
         • Acronyms,
           abreviations
         • Definitions
         • References/Sources
         • Author

<!-- Page 27 -->

             Domain models
• Formalized description of
  real world                      Order

• Shared by all
• Not implemented (abstract     Order line
  only)
                              - quantity
• Uses a notation (E/R,       - discount
  BPMn, etc)
                                   Item

                                - Unit price

                                   Stock

<!-- Page 28 -->

Ontologies
     • Notations
        – Formal network of concepts
        – Logical rules
     • Tools
        – Term extractors
        – Editors/modelers
        – Mapping tools
        – Solvers

<!-- Page 29 -->

                  Legacy analysis
Goal :
   – Understand the current
       situation
   – Exploit requirements and
       knowledge that are already
       documented
Means:
   – Gather, evaluate, fitler
       information (plans, code,
       diagrams) or
Limitations :
   – Needs critical view
Practices:
   – System archeology
   – « perspective-based » reading   Source : [Pohl-Rupp
                                                          2011]
   – Requirements reuse                                 neering
                                     “Requirements Engi
                                                          IREB”
                                     Fundamentals – CPRE

<!-- Page 30 -->

Cost and performance analysis
                                   • Process execution
                                     time and frequencies
                                   • Productivity issues,
                                     idle time, bottelnecks
                                   • Latency, size of work
                                     piles, communication
                                     delays
                                   • Error rates
                                   • etc

Source: www.ibis-instruments.com

<!-- Page 31 -->

« quick and dirty » Ethnography

       Source: theoryfamily.files.wordpress.com

<!-- Page 32 -->

                Take away
• Start by understanding the context
  – Discuss it
  – Descibre it
  – Eliminate the “fat”
  – Foresee its evolutions
  – Look for its impacts on the requirements

<!-- Page 33 -->

                   Bad assumptions

… occur either                            –   Needs
  because requirement authors do not      –   Goals
  have access to sufficient information   –   Objectives
  or                                      –   Constraints
  the information does not exist about:   –   Missions
                                          –   Operations Concept
                                          –   Budget
                                          –   Schedule
                                          –   Management/Organization

<!-- Page 34 -->

Terms and definitions to remember
• System Context
• System Boundary
• Context Boundary
