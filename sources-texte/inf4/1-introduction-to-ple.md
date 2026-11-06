<!-- Page 1 -->
                                                    Variability and
                                                    Software Product
                                                    Line Engineering
                                                    Prof Camille SALINESI
                                                    Camilo CORREA RESTREPO
                                                    © Prof Raul MAZO PENA

                                                                             1

1

    Prof. Camille Salinesi

    • SW Engineering with focus on IS
    • RE expert
    • 150+ publications
    • H-index 22
    • Head of CRI
    • Former VP of IREB
    • VP @ University Paris 1 Panthéon - Sorbonne

    Camille.Salinesi@univ-paris1.fr

                                                                             2

<!-- Page 2 -->
    Research contributions
    @ P1 Panthéon- Sorbonne
    • VARIAMOS             • Early 90’s
    • CREWS-L’Ecritoire        • OO methods
                               • Event-driven design
    • MAP goal modelling
                           • Late 90’s
    • MENTOR                   • Goal oriented RE
    • O*                       • Use Cases and scenarios
    • REMORA               • Early 2000:
                               • Enterprise Architecture
                               • Software Product Lines
                           • Late 2000
                               • Security RE
                               • Sustainable software Design
                           • Early 10’s
                               • Innovation
                               • Self-adaptive Systems

                                                               3

3

    Industry collaborations

                                                               4

<!-- Page 3 -->
        Domains of application

5

               Goal and organization of the course

                Help you integrate
          Product Line Engineering (PLE):
         üin your development practice &
            üin your research agenda
                                            Part 1: Introduction to variability
                                            and PLE
                                            Part 2: PLE processes and how to
                                            implement them
                                            Part3: Application Engineering

    6

<!-- Page 4 -->
                                                      What is a
                                                    variabiliity?
    7

7

        Today

        1.   Introduction
        2.   Craft
        3.   Engineering
        4.   Reuse and product lines
        5.   Benefits of product line engineering

                                                                8

<!-- Page 5 -->
                                                         Let’s play!
                                                         Find a way to describe both
                                                         AT THE SAME TIME !

                                                                                9

9

          Let’s play!

          Find a way to
          describe both
          AT THE SAME
             TIME !

     10
               hat size   nose   moustache   button   gloves   stripes     shadow

<!-- Page 6 -->
          Commonality
                Persons and things have common characteristics or features

                   Examples
                   • They are British guards
                   • They have moustache
                   • They have a jacket, hat, pants, belts and shoes
                   • They have 2 eyes each one
                   • They have the right leg raised

     11

11

          Variability

              Besides, they are distinguished by their varying features

                Examples:
                • Hat size
                • Moustache type
                • Stripes color

     12

<!-- Page 7 -->
          Dependencies

           Features can be related, or depend on each other

             • Big hat projects big shadow

     13

13

                        Summary

                Commonality    Variability   Dependencies

     14

<!-- Page 8 -->
             Let’s play another game!

                                       Task
                               Set up a sandwich store
                                                                                                                       min
                                Requirements
                         1. Offer a variety of sandwiches
                          2. Minimize ingredients waste
                    How would you approach this task?

     15

15

            One possible solution
          1. Analyze the problem
             • Types of sandwiches in the
                store
             • Identify common and
                different characteristics of
                sandwiches
          2. Design
             • Recipes for each type of
                sandwich
                                               © Apel, S., Batory, D., Kästner, C., & Saake, G. (2013). Feature-Oriented Software
             • Ingredients and cooking         Product Lines: Concepts and Implementation (p. 308). Springer Berlin
                                               Heidelberg.
                procedures
     16

<!-- Page 9 -->
          Introduction:
          Product Line
          Engineering

                                                                               17

17

              QUIZ: Can you distinguish the following
              definitions?
                      Match the following terms with their definitions:

              Design       ___               W. Skillful or artful contrivance
                                             applying measurable, reproductible,
              Engineering ___                scientific and mathematical
                                             principles
                                             X. Use of skill, taste and imagination
              Craft         ___              in the production of aesthetic
                                             objects
              Art           ___              Y. Deliberative, purposive planning
                                             Z. Skilled occupation
     18

<!-- Page 10 -->
                              Craft
     19

19

          At the beginning…

     20

<!-- Page 11 -->
          And then…

     21

21

               Reuse and production lines
           Used in Venice in the 12th century
              • to build ships with role specialization (each
                shipyard specializes in the production of certain
                parts, sells, buys what it needs and assembles)
           Conceived in France during its revolution
              • Fire arms production
           Pioneered in USA in late 19th century
                                                                                       1830
                                                                            Delacroix,
           Classical example
              • Henry Ford Model T production line
              • Produced from 1908 to 1927

                   The problem with Production Lines is that they do
     22
                  not have the ability to deliver individualised (tailor-
                    made as software industry use to do) products.

<!-- Page 12 -->
          Engineering

     23

23

                                      Garmisch conference (1968)
                          created the software engineering discipline and
                          discussed many topics that are challenges even
                          now:
                          1. how to industrialize software production
                          2. getting requirements right
                          3. designing adequate architectures
 24
                          4. doing implementation effectively and
                             correctly
                          5. verifying the quality of the result
                          6. maintaining software systems with targeted
                             functionality and high code quality over
           “Software production today appears in the scale of industrialization
             somewhere below the more backward construction industries.
               I think its proper place is considerably higher, and would like
                               to investigate the prospects for
                  mass-production techniques in software.”
           M. D. McIlroy. Mass produced software components, NATO-sponsored
               meeting on Software Engineering, Garmisch, Germany, 1968.

<!-- Page 13 -->
     Software PL and
     families

     First reference to software product lines or families

       “A program [therefore] should be conceived and
       understood as a member of a family; it should be
       so structured out of components that various
       members of this family, sharing components, do
       not only share the correctness demonstration of
       the shared components but also of the shared
       substructure”

     Edsger W. Dijkstra, Notes in Structure Programming,
       1969.

                                                                                                                 25

25

                                                             Product lines and software

                                                             “Program families are defined as set of programs
                                                               whose common properties are so extensive that
                                                               it is advantageous to study the common
                                                               properties of the programs before analyzing the
                                                               individual members.”

                                                             David Parnas. On the design and development of
                                                             program families. IEEE transactions on software
                                                             engineering. Vol. SE 2, N° 1. 1976.

                                                                                                         26

<!-- Page 14 -->
                                         Neighbors (1989) introduced the concepts of domain and domain analysis, and provided
                                         the first systematic approach to domain engineering, known as Draco

                      27

27

                      28
                                         Mass customization
                                Problem                                 Solution
                                                                                            Software is everywhere and for everything, so it must
                                                                                             be mass-produced and customized. However, mass

Domain Engineering
                                 Space                                   Space
                                                                                             production does not meet this high demand of the
                                                                                                 market in terms of product customization.

                                                                                            Mass customization techniques, such as Product Line
                                                                                           Engineering, are emerging, because there is a demand
                             Configuration and capitalization processes
                                                                                            for customized products to be manufactured at the
                                                                                                       price of mass-produced ones.
                                                                  Deployment, delivery                                      (Mayer et al., 2016).

Product Engineering
                              Software project
                               management        Implementation
                                                                     and evolution
                                                                     management          “A software product line is a set of software-intensive
                                                                                          systems sharing a common, managed set of features
                                                    Analysis
                                                       &
                                                                                          that satisfy the specific needs of a particular market
                                                     design                                segment or mission and that are developed from a
                                                                                            common set of core assets in a prescribed way.”
                                                                                                                 SEI, 2001
                       2000 & 2010 Software Product Line Engineering

<!-- Page 15 -->
                     Mass customization and softwarisation
                        Problem                         Solution   “Nowadays, software is tightly coupled with physical
                         Space                           Space     processes and controls a lot of the technical and
                                                                   social activities of the world. So, a big challenge is
                                                                   maintenance and resilience. We have to
                                  Domain Engineering
                                                                   understand how to design and implement reliable
                                                                   software such that maintenance, changeability, and
                                                                   variability is easier to handle. A key is to work on
                                                                   software which is adaptive and to a large extent
                                  Product Engineering              autonomous prepared for all the different use
                                                                   cases and their special demands that may come
                                                                   up”.

                                                                   How will software engineering look tomorrow?
                               Adaptation Engineering
                                                                   “Software engineering will be part of systems
                                                                   engineering of cyber physical systems closely
                                                                   connected to the real world”.

                                                                             Broy, Manfred. "Yesterday, today, and tomorrow: 50 years of
          2010 & 2020 … Domain-based Adaptive Cyber Physical Systems        software engineering." IEEE Software 35, no. 5 (2018): 38-43.

29

                                                                                   About
                                                                                   reuse

     30

<!-- Page 16 -->
          An historical perspective on reuse
          (1960-2000)

              • 60s : subroutines
              • 70s : modules            Small grain focus
              • 80s : objects            Results din’t meet business goals

              • 90s : components
              • 2000 : services
              • 2000 : product lines

                                                                             31

31

                               Six reuse mechanisms

                     1. Duplication (aka « copy & own »)
                     2. Δ based reuse
                     3. Evolution - Configuration management
                     4. Componenent-based reuse
                     5. Aspects
                     6. Product lines
     32

<!-- Page 17 -->
             Duplication-based Reuse

                               Copy/paste
               Requirements                    Requirements        …             Requirements

                                                                    Copy/paste

                        Design                           Design            …              Design

                                                                            Copy/paste
                                            Copy/paste
                          Implementation                  Implementation         …          Implementation

     33                        Project 1                      Project 2                         Project N

33

          Pros/cons of duplication-based reuse
                              Pros.                                        Cons.
               Simple.                             Hard to evolve. This kind of reuse
                                                   easily becomes a maintenance issue.
               Without collateral
               effects on the other                «Author’s noise» over each new
               existing products.                  product.

                                                   Oportunistic reuse of artefacts
                                                   (software, tests ..) : artefacts are not
                                                   explicitly developed for reuse.
     34

<!-- Page 18 -->
          Duplication-based reuse VS PL
                            Duplication                                   PL.
                Scatered view                           Integrated view

                Extensive specification                 Intensive specification

                Oportunistic reuse                      Design for reuse

                Multiple products that are viewed The product line is treated as a
                and maintained separately         whole

                Product-level quality                   Family-level quality

     35

35

          Δ based reuse
                   Ref. product       Baseline 1       Baseline 2       Baseline 3

                                                           Δ                         …
                                  Δ

                                  Δ
                                                           Δ                         …
                                  Δ
                                                   Δ
                                                                    Δ
                                                                                     …

                                          Δ
                                                                    Δ                …
     36

<!-- Page 19 -->
                   ROE : it doesn't always work well!
                                                                          The Ariane rocket disaster of
           © Science Photo Library                                             1996, two reasons:
           Ariane 4 rocket versions                                     1. A numeric overflow error:
                                                                            attempt to fit a 64-bit format
                                                                             data (float) in 16-bit space
                                                                             (integer) and there was no
                                                                            exception handler associated
                                                                                 with that conversion.
                                                                         2. Code reuse in a different
                                                                             context without testing: as
                                                                              the facility that failed was
                                                                              not required for Ariane 5,
                                                                             there was no requirement
                                                                                 associated with it and
                                                                               therefore there were no
                                                                                tests of that part of the
                                                                                software and hence no
                       © Hackaday
                                                                            possibility of discovering the
                          Ariane 5
     37                                                                                 problem!

37

          Pros/cons of Δ based reuse
                                      Pros.                            Cons.
                    Simple and sometimes very             Non governance of common
                    efficient (e.g., Mitsubishi           assets: how to manage a
                    Phones)                               product "B" that wants to
                                                          correct an error of an asset that
                    Adapted for simple                    inherits from a product "A"?
                    modifications over stables
                    baselines                             Complexity explosion when the
                                                          number of variants increases
                    Tooling is very efficient (e.g., HP
                    QC, Polarion, etc.)
     38

<!-- Page 20 -->
          Δ based reuse VS PL
                               Δ based                                            PL.
               One reference product evolution driven       Core architecture family driven

               Δs are not predefined                        Variability is specified in advance

               Reuse is not necessarily planed              Reuse is strategically planned, and applies
                                                            across the entire PL

               No guaranty on quality                       Some guaranties provided

               No capitalization                            Learning process

               Vendors who release subsequent versions All versions are of interest
               try to retire earlier versions as soon as
               they can
     39

39

             Configuration management
               System                                                                      Makefile
                          Module 1               Module 2           Module n

                                                     Sub-sub-module

     40

<!-- Page 21 -->
             Configuration management
                           Pros.                                Cons.
              Low initial investment            Difficult compatibility
                                                management

              Know baseline                     Difficult to reuse at the level of
                                                transversal aspects

              Individual work on concepts       Reuse on the context of one
                                                product

     41

41

          Configuration management VS PL
                  Configuration management                       PL.
                One reference product         “PL is all about planning a plurality of
                evolution driven              products that will exist in the field and
                                              be maintained simultaneously” SEI,
                                              2001

                No guaranty on quality        Some guaranties provided

                Reuse on the context of one   Reuse on the context of one family of
                product                       products

                Configuration oriented        Prescription oriented
     42

<!-- Page 22 -->
              Component-based reuse

                                                                             Service discovery in a
                                                                           microservices architecture

                   Two components expressed in UML 2.0.
             The checkout component, responsible for facilitating
              the customer's order, requires the card processing
               component to charge the customer's credit/debit
                 card (functionality that the latter provides).
     43

43

          Component-based reuse
                              Pros.                                   Cons.
                 Separation of concerns              No prescription on component choice

                 Black box view                      No strategic view on assembling rules

                 Weak configuration                  Knowledge of assembly is lost

                 Focus on interfaces                 No guarantee on side effects

                                                     No vision on cross cutting concerns

     44

<!-- Page 23 -->
          Component-based reuse VS PL
                    Component based                                        PL
              Selection of components from a Components in PL and the
              library or the marketplace to  relationships among them are
              build products                 all specified by the product line
                                             architecture

              Usually is missing strategic and       Product lines involve the
              systematic reuse                       strategic use of components

     45

45

             PLE reuse across problem and solution spaces
               Software engineering is a             A
               problem-solving approach (A):     B
               Problem definition and                      Problem                         Solution
               Problem solution.                            Space                           Space
               Product line engineering needs
               two different processes (B):
               Domain engineering and                                Domain Engineering
               Application Engineering.
               Configuration is a step-wise
               requirement process allowing              Configuration and capitalization processes
               deliver new applications that
               satisfy both: the domain
               constraints and the                                   Product Engineering
               stakeholders’ requirements.

     46

<!-- Page 24 -->
                                                             Problem Definition                        Problem Solution

                                                                                                             Electric Actuator
            Domain
                                     Operational viewpoint

          engineering
                                                                                                    Puller Cable

                                                                Configuration Process

            Product engineering
                                  Partial Configuration A1              Partial Configuration A2

     47
                                  Partial Configuration B1               Partial Configuration B2

47

          Product line engineering framework

     48

<!-- Page 25 -->
             A Framework for Software Product Line Practice
             © SEI.
              (1) Domain engineering
                                                               (2) Domain engineering (processes)

                                                        (3) Application engineering

          “Leadership is
          required for software
          product line success”
                                       Introduction - Product Line Engineering
                                                                                                    49

49

                                                                     Why PLE?
                                                                     Observed
                                                                      benefits
                                                                    and pitfals
     50

<!-- Page 26 -->
          Product Lines Pros
                                                               Improved productivity : 10x

                                                               Increased quality : 10x

                                                               Decreased cost : - 60%

                                                               Decreased labour needs : - 87%

                                                               Decreased time to market (to field, to launch) : - 98%

                                                               Ability to move into new markets : months, not years

     51   Source : SEI
          https://insights.sei.cmu.edu/news/sei-software-product-lines-course-materials-now-freely-available/

51

          REX : CelsiusTech Systems
                   Hardware-to-software cost ratio
                   changed from 35:65 to 80:20
                   70 + % reuse
                   Over 55 variants built so far

                                         The staff levels were
                                            too high: 150

            Project
            staffing
            levels: 20                                                                           Enough numbers of reusable components
            to 30                                                                                to facilitate the design of other systems.
            people
                                                                                                        Designers were needed less and
                                                                                                        were reassigned to other projects.
     52
                           1986   1987   1988   1989   1990   1991   1992   1993   1994   1995   1996

<!-- Page 27 -->
                          Other Examples of Product Line Success
           Motorola - FLEXworks Project (family of one-way pagers)
            o 4x cycle time improvement
            o 80% reuse

           Hewlett Packard - printer systems                         https://splc.net/fame.html

            o reuse rate of about 70% for new products
            o development time reduced by 67%
            o -25% of the staff resources
            o shipped 5x number of products
             –that were 4x as complex
             –and had 3x the number of features
             –and 96% fewer defects
     53

53

                                BAXTER Case study
          Baxter International Inc. is a global healthcare
          company.
          Treatments of complex medical conditions:
          hemophilia, immune disorders, kidney disease,
          cancer, trauma and other conditions

                    Conclusions from our work at Baxter
                    (2009)
                    Domain engineer helps to retrieve
                    BoM errors.
                    Financial Benefit at the ordering step
                    estimated at: 50.000 Euros/ Year due
                    to BOMs monthly check with this
     54             tool.

<!-- Page 28 -->
                    Decreased time to market (to field, to
                    launch) by as much as 98%

                    Time to
                    market
                                           Time to build the   Development cycles
                                           core assets         reduced due to reuse

                                                                         Individual products

                                                                           PL strategy

                                                               Number of products
     55

55

                 Minimizing the time to market
          1. Greatly improved time to
             market.
          2. Options to quickly develop new
             products.
          3. The options and ability to growth
             in the market & capture new
             market niches.

                    The revenue loss from being
                    late to market can be much
                     greater than the costs you
                        incur designing and
                        manufacturing your
     56                       product!

<!-- Page 29 -->
     Product line investment curves

            (a)
     big bang approach

              © Schmid K., Verlage M. The Economic Impact of Product Line
              Adoption and Evolution. IEEE SOFTWARE July/August 2002
                                                                                   57

57

     Product line investment curves

                                                                                     (b)
                                                                                  big bang
                                                                                     VS
                                                                            incremental approach

              © Schmid K., Verlage M. The Economic Impact of Product Line
              Adoption and Evolution. IEEE SOFTWARE July/August 2002
                                                                                   58

<!-- Page 30 -->
     Many stakeholders can see benefits from the
     PLE approach

     Project management:

       • Efficient use of workforce
       • Ability to target new markets segments/technologies/products
       • Maintain a cohesive structure throughout the product portfolio

                                                               59

59

     Many stakeholders can see benefits from the
     PLE approach
     Software development teams:

       •   Can focus on truly unique aspects of products
       •   Simplifies integration of software
       •   Fewer delays
       •   Avoidance of duplication of work

                                                               60

<!-- Page 31 -->
           Costs and Benefits from the Requirements
           Point of View
                                        Benefit                Additional Costs
                  The requirements      Requirements are       Capturing
                  are written for the   reused and tailored    requirements for a
                  PL as a whole with:                          group of systems
                                        New systems in the     may require:
                  • Commonality         PL will be much        • sophisticated
                                        simpler to specify     analysis and
                  • Variability                                • agree on common
                                        Analysis and           and variable
                                        verification of        requirements that
                                        requirements only      are acceptable for all
                                        once for all the       the systems.
                                        systems.
     61

61

          Costs and Benefits from the Architecture Point
          of View
                                        Benefit                Additional Costs
                  The architecture      Design for a family of Variability of the PL
                  defines how each      systems and not just imposes an
                  product is            for a single system.   additional constraint
                  assembled by                                 on the architecture
                  means of              Reuse of the           and requires greater
                  components.           architecture for all   talent to define it.
                                        the systems.

                                                                          62

<!-- Page 32 -->
     Costs and Benefits from the Software
     Components Point of View
                               Benefit                   Additional Costs
          The software         The interfaces for        Components must be
         components form       components are            designed to be
         the building blocks   reused.                   generic and
         for each product in                             extensible without
         the PL              Capitalization of           loss of performance.
                             design decisions, data
         Some will be reused structures, algorithms, Variation points must
         without alteration. documentation,          be anticipated.
                             reviews, code, and
         Others will be      debugging effort.
         tailored.
                                                                                63

63

     Costs and Benefits from the Analysis,
     Verification, and Validation Point of View
                                  Benefit                    Additional Costs
           Analysis: extraction of Analysis, verification    Analysis, verification
           information from the and validation have          and validation
           PL specification        already been developed    techniques
                                   and reviewed for:         appropriated for
           Verification:                                     models with variability.
           “Verification gets the • the components that
           requirements model      are reused &              Analysis, verification
           right” [Boehm 81]                                 and validation may
                                   • the architecture that   impose constraints on
           Validation:             relates these             modifying, creating or
           “Validation gets the    components                synchronizing existing
           right requirements                                processes/models.
           model” [Boehm 81]
                                                                                64

<!-- Page 33 -->
     Costs and Benefits from the Tools and Processes
     Point of View     Benefit         Additional Costs
            The                  Reuse of software and       The boards,
            infrastructure       process.                    process, tools, and
            for turning out                                  procedures must be
            a PL requires        Tools and                   more robust to
            appropriate:         environments                manage product
            processes and        purchased for one           lines and single
            tools.               product can be              products.
                                 amortized across the
                                 entire product line.

                                                                            65

65

     Costs and Benefits from the skills and training
     Point of View
                             Benefit                  Additional Costs
            Working on a     Personnel can be more    Personnel must be trained
            single product   easily transferred       beyond general system
            è working on     among product projects   engineering to ensure that
            the entire       as required.             they understand software
            product line                              product line practices
                             Productivity (number of
                             products to which staff As product lines mature, the
                             work applies) rises     skills required tend to change
                             dramatically.           (eg. from programming to
                                                     relevant domain expertise and
                             Resources spent on      technology forecasting)
                             training are expended
                             only once.
                                                                            66

<!-- Page 34 -->
     In Summary

     1. Improved productivity by as much as 10x
     2. Increased quality by as much as 10x
     3. Decreased cost by as much as 60%
     4. Decreased labour needs by as much as 87%
     5. Decreased time to market (to field, to launch) by as
        much as 98%
     6. Ability to move into new markets in months, not years
                                                                                                                               67

67

     Recommended readings
     Parnas, D.L., 1976. On the design and development of program families. IEEE Transactions on software engineering, (1), pp.1-9.
     McGregor, J.D., Northrop, L.M., Jarrad, S. and Pohl, K., 2002. Initiating software product lines. IEEE Software, 19(4), pp.24-27.
     Birk, A., Heller, G., John, I., Schmid, K., von der Maßen, T. and Muller, K., 2003. Product line engineering, the state of the practice. IEEE
        software, 20(6), pp.52-60.
     Neighbors, J.M., 1984. The Draco approach to constructing software from reusable components. IEEE Transactions on Software
       Engineering, (5), pp.564-574.
     Mazo Raúl. Guía para la adopción industrial de líneas de productos de software. Editorial Eafit, Medellín-Colombia, 2018
     Schmid K., Verlage M. The economic impact of product line adoption and evolution. IEEE software, 19(4), 2002.
     Jeffrey Paulin. Measuring Software Reuse: Principles, Practices and Economic Models, Addison Wesley, 1997.
     Rincon Luisa, Mazo Raúl, Salinesi Camille. Evaluating company's readiness for adopting product line engineering: a second evaluation
        round. Complex Systems Informatics and Modeling Quarterly journal (CSIMQ), ISSN: 2255-9922, December, 2018.
     Rincón Luisa, Mazo Raúl, Salinesi Camille. A multi-company empirical evaluation of a framework that evaluates the convenience of
        adopting product line engineering. Proceedings of the 24th ACM International Systems and Software Product Line Conference-
        Volume B. 2020
     Rincón Luisa, Mazo Raúl, Salinesi Camille. Analyzing the convenience of adopting a product line engineering approach: an industrial
        qualitative evaluation. In Proceedings of the 23rd International Systems and Software Product Line Conference-Volume B, pp. 73-
        83, ACM, Paris-France, 2019.

                                                                                                                               68
