<!-- Page 1 -->
(Software)
Product Line
Engineering

Camille SALINESI
Camilo CORREA RESTREO

<!-- Page 2 -->
          Objectif and schedule of the course
      Help you
      integrate
    Product Line
    Engineering
        (PLE):
      üin your
     developmen
     t practice &
      üin your
       research
        agenda

<!-- Page 3 -->
    In this part:
    Domain engineering = Engineering for reuse
      1.Analysis
        A. Some languages to specify PLMs
           a. Feature Models
           b. OVM
           c. DOPLER
           d. Constraint-based product line models
        B. Strategies to specify the requirements of a PL
           a. Requirements-driven strategy
           b. Low-end vs. high-end product strategy (reference-product strategy)
           c. Multiviewpoint strategy
        C. Verification, diagnosis and fixing processes
      2.Design
      3.Implementation

<!-- Page 4 -->
    1.Analysis
     A.Some languages to specify
       PLMs
       a. Feature Models
       b. OVM
       c. DOPLER
       d. Constraint-based product
          line models

<!-- Page 5 -->
    Domain Engineering: it’s all about the
    family

     Three main activities:
     1. Analysis: Identify the variability present in the product line
     2. Design: Develop an architecture and production plan
     3. Implementation: Develop all features with composability in mind

<!-- Page 6 -->
    Extensive representation: Matrix representation

       Components             Basic   Medium   Enriched
       …
       Chronometric reaction 1        1        2
       measure

       Photometric reaction   0       0        1
       measure

       Barcode productID      0       1        1
       RFID product ID        0       0        1

       Manual product ID      1       1        1

       External system PID    0       1        1

<!-- Page 7 -->
    Extensive representation: breakdown structure
                 Basic            Medium            Advanced

                 1 Chronometric    1 Chronometric    2 Chronometric
                    reaction          reaction          reaction
                    measure           measure           measure

                                                      1 Photometric
                   1 Manual          1 Barcode
                                                         reaction
                   product ID        productID
                                                         measure

                                     1 Manual           1 Barcode
                                     product ID         productID

                                      1 External      2 RFID product
                                     system PID             ID

                                                        1 Manual
                                                        product ID

                                                        1 External
                                                       system PID

<!-- Page 8 -->
    Benefits
    1. Big picture: clear vision of what is expected
    2. Completeness: coverage of functional & physical variants
    3. Consistency: avoid duplication of requirements by defining
       common & specific requirements
    4. Easy to matin
       • At system level
       • At feature level

<!-- Page 9 -->
    Scalability issue
                    Basic         Medium           Advanced
                How      to deal with
                  1 Chronometric
                                          common components?
                                    1 Chronometric   2 Chronometric
                Howmeasure
                         to identify/represent
                      reaction          reaction
                                       measure      themeasure
                                                            cross-tree
                                                         reaction

               constraints? How to easily incorporate 1 Photometric
                                                                     new
               components?
                     1 Manual
                     product ID    How      to create new
                                       1 Barcode
                                       productID
                                                         reaction
                                                         measure
                                                                 products
               with the existing components? How do you
               specify a productproduct lineIDof 1021 products
                                       1 Manual         1 Barcode
                                                        productID    with
                                 1000 components ?
                                      1 External     2 RFID product
                                     system PID            ID

                                                       1 Manual
                                                       product ID

                                                       1 External
                                                      system PID

<!-- Page 10 -->
            Product Line Models (PLMs): Intensive representation
                                                                                Decision A ?
                              Feature_A
                                                                           (Name: A, expected value     domain([A, B, C],
                                                           A

     At the domain
                                       <1,2>                                     1:2: {B, C})           0, 1),
                                                                [1,2]                                   B ≤ A,
                       Feature_B       Feature_C                                                        C ≤ A,
                                                                                                        A ≤ B + C ≤ A * 2
                         att_1           att_1

          level
                                                       B         C
                         att_2           att_1
                                                                            Asset1
                          (Kang et al. 1990,       (Pohl et al. 2005)                                  (Salinesi et al. 2010, 2011)
                        Czarnecki et al. 2005,                                            Asset2
                       Schobbens et al. 2007,
                         Michel et al. 2011)
                                                                        (Dhungana et al. 2006, 2010)

                      Product Models (PMs): Extensive representation

         At the         A          A               A                    Decision A = true,                 P1 = {A, B, C}
                                                                        B = 4,

      product level
                                                                                                           P2 = {A, B}
                                                                        C = 9.8,                           P3 = {A, C}
                        B          C           B       C                Asset1 = 1,
10                                                                      Asset2 = 1

<!-- Page 11 -->
     Feature Models: First example of FODA (Feature-Oriented
     Domain Analysis)

     Model:

     Semantics:
        C1: {Car, Transmission, Manual, Horsepower}
        C2: {Car, Transmission, Automatic, Horsepower}
        C3: {Car, Transmission, Manual, Horsepower > 100, Air conditioning}
        C4: {Car, Transmission, Automatic, Horsepower > 100, Air conditioning}
11          Kang K., Cohen S., Hess J., Novak W., Peterson S. Feature-Oriented Domain Analysis (FODA) Feasibility Study, Technical Report
                          CMU/SEI-90-TR-21, Software Engineering Institute, Carnegie Mellon University, November 1990.

<!-- Page 12 -->
     A feature    is…is an essential abstraction of a functionality or
           • A feature
               product characteristic relevant to stakeholders
               (Czarnecki & Eisenecker, 2000)
             • Features may be:
                üabstract vs concrete
                ücommon vs variable
             • Feature VS {Classes, Functions, Aspects…} :
               external characteristics VS Internal details
             • User-oriented needs VS developer, solution
               and quality concerns
             • Intentions VS prescribed solutions

<!-- Page 13 -->
      It can also be represented as a FODA diagram
     Root: main concept of the
     PL                                         F1

                                                               F4
     Nodes: features (concrete:      F2

     F2, F5, F6, F8, F9, F10, F11,             F3          F11
                                                                    F12

     F12; abstract: F3, F4, F7)
                                          F5             F6
                                               F7
     Tree: « composed of »
     relationships (refinement /                         F10
     decomposition)                       F8
                                                    F9

<!-- Page 14 -->
             FODA diagram

     Mandatory features                F1

                            F2                        F4

     Optional features                F3
                                                           F12
                                                  F11

                                 F5             F6
                                      F7

                                                F10
                                 F8        F9

<!-- Page 15 -->
              FODA diagram

     Semantics                                  F1

      {                                                   F4
      {F1, F2, F3, F4, F7},          F2
      {F1, F2, F3, F4, F5, F7},                F3
      {F1, F2, F3, F4, F6, F7},
      {F1, F2, F3, F4, F5, F6, F7}        F5         F6
      }                                        F7

<!-- Page 16 -->
     FODA diagram
     • Mandatory
                                       F1
       features
     • Optional features    F2                   F4

                                                      F12
     • Alternatives (XOR)             F3     F11

                                 F5         F6
                                      F7

<!-- Page 17 -->
         FODA diagram
     Semantics
     {                                                              F1
         {F1, F2, F3, F4, F7},
         {F1, F2, F3, F4, F5, F7},     x
                                                                              F4
         {F1, F2, F3, F4, F6, F7},                       F2
         {F1, F2, F3, F4, F5, F6, F7},
         {F1, F2, F3, F4, F7, F11},                                                F12
         {F1, F2, F3, F4, F5, F7, F11},                            F3     F11
                                             F11
         {F1, F2, F3, F4, F6, F7, F11},
         {F1, F2, F3, F4, F5, F6, F7, F11},
         {F1, F2, F3, F4, F7, F12},                           F5         F6
         {F1, F2, F3, F4, F5, F7, F12},
         {F1, F2, F3, F4, F6, F7, F12},      F12                   F7
         {F1, F2, F3, F4, F5, F6, F7, F12},
         {F1, F2, F3, F4, F7, F11, F12},
         {F1, F2, F3, F4, F5, F7, F11, F12},
         {F1, F2, F3, F4, F6, F7, F11, F12}, F11 & F12
         {F1, F2, F3, F4, F5, F6, F7, F11,
         F12}
     }

<!-- Page 18 -->
             FODA diagram

     • Mandatory features               F1

     • Optional features     F2                        F4

     • Alternatives (XOR)              F3          F11
                                                            F12

     • Group cardinalities        F5             F6
                                       F7
                                        1..1

                                                 F10
                                  F8        F9

<!-- Page 19 -->
     Semantics
     {                                 FODA diagram
     [F1,F2,F3,F4,F7,F8,F12],
     [F1,F2,F3,F4,F7,F8,F11],
     [F1,F2,F3,F4,F6,F7,F8,F12],
     [F1,F2,F3,F4,F6,F7,F8,F11],
     [F1,F2,F3,F4,F5,F7,F8,F12],       F8               F1
     [F1,F2,F3,F4,F5,F7,F8,F11],
     [F1,F2,F3,F4,F5,F6,F7,F8,F12],
     [F1,F2,F3,F4,F5,F6,F7,F8,F11],
                                             F2                       F4
     [F1,F2,F3,F4,F7,F9,F12],
     [F1,F2,F3,F4,F7,F9,F11],                                                F12
     [F1,F2,F3,F4,F6,F7,F9,F12],                       F3         F11
     [F1,F2,F3,F4,F6,F7,F9,F11],
     [F1,F2,F3,F4,F5,F7,F9,F12],
     [F1,F2,F3,F4,F5,F7,F9,F11],        F9        F5
     [F1,F2,F3,F4,F5,F6,F7,F9,F12],                              F6
     [F1,F2,F3,F4,F5,F6,F7,F9,F11],
                                                        F7
                                                        1..1
     [F1,F2,F3,F4,F7,F10,F12],
     [F1,F2,F3,F4,F7,F10,F12],
     [F1,F2,F3,F4,F6,F7,F10,F12],                  F8
     [F1,F2,F3,F4,F6,F7,F10,F11],
     [F1,F2,F3,F4,F5,F7,F10,F12],                           F9
     [F1,F2,F3,F4,F5,F7,F10,F11],
     [F1,F2,F3,F4,F5,F6,F7,F10,F12],   F10                             F10
     [F1,F2,F3,F4,F5,F6,F7,F10,F11]
     }

<!-- Page 20 -->
           FODA diagram

     • Mandatory features                  F1

     • Optional features
                                F2                        F4
     • Alternatives (XOR)                                      F12
                                          F3          F11
     • Group cardinalities
                                     F5             F6
     • Dependencies                                        requires
                                          F7
        • Requires                         1..1

                                                    F10
        • Mutex                                F9
                             mutex
                                     F8

<!-- Page 21 -->
                                               FODA diagram
     Semantics
     {
     [F1,F2,F3,F4,F7,F8,F12],
     [F1,F2,F3,F4,F7,F8,F11],
     [F1,F2,F3,F4,F6,F7,F8,F12],
     [F1,F2,F3,F4,F6,F7,F8,F11],
     [F1,F2,F3,F4,F5,F7,F8,F12],       mutex
     [F1,F2,F3,F4,F5,F7,F8,F11],
     [F1,F2,F3,F4,F5,F6,F7,F8,F12],
     [F1,F2,F3,F4,F5,F6,F7,F8,F11],                             F1

     [F1,F2,F3,F4,F7,F9,F12],
     [F1,F2,F3,F4,F7,F9,F11],
                                                     F2                        F4
     [F1,F2,F3,F4,F6,F7,F9,F12],
     [F1,F2,F3,F4,F6,F7,F9,F11],
     [F1,F2,F3,F4,F5,F7,F9,F12],                                                    F12
     [F1,F2,F3,F4,F5,F7,F9,F11],                               F3          F11
     [F1,F2,F3,F4,F5,F6,F7,F9,F12],
     [F1,F2,F3,F4,F5,F6,F7,F9,F11],
                                                          F5             F6     requires
     [F1,F2,F3,F4,F7,F10,F12],
     [F1,F2,F3,F4,F7,F10,F12],                                 F7
     [F1,F2,F3,F4,F6,F7,F10,F12],                               1..1
     [F1,F2,F3,F4,F6,F7,F10,F11],
     [F1,F2,F3,F4,F5,F7,F10,F12],                                        F10
     [F1,F2,F3,F4,F5,F7,F10,F11],
                                                                    F9
     [F1,F2,F3,F4,F5,F6,F7,F10,F12],
                                                  mutex
                                                          F8
     [F1,F2,F3,F4,F5,F6,F7,F10,F11]
     }

<!-- Page 22 -->
     Semantics

                                                 FODA diagram
     {
     [F1,F2,F3,F4,F7,F8,F12],
     [F1,F2,F3,F4,F7,F8,F11],
     [F1,F2,F3,F4,F6,F7,F8,F12],
     [F1,F2,F3,F4,F6,F7,F8,F11],
     [F1,F2,F3,F4,F5,F7,F8,F12],
     [F1,F2,F3,F4,F5,F7,F8,F11],       mutex
     [F1,F2,F3,F4,F5,F6,F7,F8,F12],
     [F1,F2,F3,F4,F5,F6,F7,F8,F11],
                                                                    F1
     [F1,F2,F3,F4,F7,F9,F12],
     [F1,F2,F3,F4,F7,F9,F11],
     [F1,F2,F3,F4,F6,F7,F9,F12],
                                                         F2                        F4
     [F1,F2,F3,F4,F6,F7,F9,F11],
     [F1,F2,F3,F4,F5,F7,F9,F12],
     [F1,F2,F3,F4,F5,F7,F9,F11],                                                        F12
     [F1,F2,F3,F4,F5,F6,F7,F9,F12],                                F3
     [F1,F2,F3,F4,F5,F6,F7,F9,F11],        Requires                            F11

     [F1,F2,F3,F4,F7,F10,F12],                                F5             F6
     [F1,F2,F3,F4,F7,F10,F12],                                                      requires
     [F1,F2,F3,F4,F6,F7,F10,F12],
     [F1,F2,F3,F4,F6,F7,F10,F11],                                  F7
     [F1,F2,F3,F4,F5,F7,F10,F12],                                   1..1
     [F1,F2,F3,F4,F5,F7,F10,F11],
     [F1,F2,F3,F4,F5,F6,F7,F10,F12],
     [F1,F2,F3,F4,F5,F6,F7,F10,F11]
                                                                             F10
     }
                                                              F8        F9
                                                      mutex

<!-- Page 23 -->
             FODA diagram
     Semantics
     {
     [F1,F2,F3,F4,F7,F9,F12],
     [F1,F2,F3,F4,F7,F9,F11],               F1
     [F1,F2,F3,F4,F6,F7,F9,F12]
     ,                              F2              F4
     [F1,F2,F3,F4,F5,F7,F9,F12]
                                                        F12
     ,                                    F3       F11
     [F1,F2,F3,F4,F5,F7,F9,F11]
     ,                                 F5        F6 requires
     [F1,F2,F3,F4,F5,F6,F7,F9,F            F7
     12],                                  1..1

                                                F10
     [F1,F2,F3,F4,F7,F10,F12],               F9
     [F1,F2,F3,F4,F7,F10,F12],  mutex
                                       F8

23
     [F1,F2,F3,F4,F6,F7,F10,F12
     ],

<!-- Page 24 -->
      FODA model

     • Mandatory features                  F1

     • Optional features        F2                        F4

     • Alternatives (XOR)                 F3
                                                               F12
                                                      F11
     • Group cardinalities
                                     F5             F6     requires
     • Dependencies                       F7
        • Requires                         1..1

                                                    F10
        • Mutex                      F8        F9
                             mutex
                                           F9 => NOT (F5∧F6)
     • Constraints

<!-- Page 25 -->
             FODA model
     Semantics
     {
     [F1,F2,F3,F4,F7,F9,F12],                   F1
     [F1,F2,F3,F4,F7,F9,F11],
     [F1,F2,F3,F4,F6,F7,F9,F12]                                F4
     ,                               F2
     [F1,F2,F3,F4,F5,F7,F9,F12]                F3          F11
                                                                    F12
     ,
     [F1,F2,F3,F4,F5,F7,F9,F11]           F5             F6     requires
     ,                                         F7
     [F1,F2,F3,F4,F5,F6,F7,F9,F                 1..1

     12],                                                F10
                                                    F9
     [F1,F2,F3,F4,F7,F10,F12],    mutex
                                          F8
     [F1,F2,F3,F4,F7,F10,F12],                 F9 => NOT (F5∧F6)
25
     [F1,F2,F3,F4,F6,F7,F10,F12
     ],

<!-- Page 26 -->
Exercise: Manual Analysis of FODA model
   1.   Construct at least 12
        unique products from                                     F1
        this model
   2.   What is the space of          F2               F3             F4         F5           F7
        possible combinations
        with these features?                                    F11        F12
                                F8           F10                                      mutex
   3.   How many are actually                      mutex

        allowed by the model?         F9
                                      1..1

                                          F15
                                                     requires
                                       F14
                                F13
                                                           F14 => NOT (F8∧F10)
                                                           F13 => F8∧ NOT(F7)

<!-- Page 27 -->
Exercise: Manual Analysis of FODA model
   • What is the space
     of possible                                     F1
     combinations with
     these features?         F2              F3         F4        F5       F7

   • Answer: 2^13         F8                       F11 F12
                                    F10 mutex                        mutex
     combinations
                              F9
   • How many are             1..1
     actually allowed by           F15
                                          requires
     the model?          F13
                               F14
   • Answer: 46                               F14 => NOT (F8∧F10)

   • Why?                                     F13 => F8∧ NOT(F7)

<!-- Page 28 -->
      Feature modelling dialects: FORE

     • Optional (F2 is optional regarding F1)             F1             F2

     • Mandatory (F2 is madatory regarding F1)            F1             F2

     • Requires (F2 is required by F1)                    F1             F2

     • Excludes (F2 is excluded by F1, and viseversa)
                                                          F1             F2

     • Group cardinality (between m and n leaf features             F0
       should be selected in a product if F0 is selected in
       the same product, and viceversa)
                                                                <m..n>
28                                                             F1        F2

<!-- Page 29 -->
                  Concepts included into the FODA
                  dialect
• Individual Cardinalities: Number of times                                                                          F1
  a feature can occur in a configuration
                                                                                                              [3..4] [6] [8] [16]

• Attributes: specific measurable                                                                                    F2

  characteristics of a feature, with a
  name, a domain and a value at a given                                                                              F1

  configuration time                                                                                          Att1: {Domain}
                                                                                                              Att2: {Domain}

• Complex constraints: Boolean, Arithmetic,                                                                   all_different(…)
  Symbolic                                                                                                     relation (…)
                                                                                                                 Equality
                                                                                                               Inequality...
                  Cardinalities (Riebisch et al. 2002, Czarnecki et al. 2005),
 29               Attributes (Streitferdt et al. 2003, Benavides et al. 2005c, White et al. 2009).
                                                                                                     Evolution in (Schobbens et al. 2007)
                  Complex contraints (Benavides et al. 2005, Batory 2005, Salinesi et al. 2011)

<!-- Page 30 -->
                                                                                              TurtleBot

                                                                                        1.0
                                                                                                     1.1
                                                                                                                                                                                                                                                                                       Version-Aware Constraints
                                                                                                                                                                                                                                                                                       1. Autonomous ® Detection
                                                                                                     2.0     2.1

                                          Engine                                Movement                                 Webservice                                       Detection
                                                                                                                                                                                                                                                                                       2. Keyboard Ú Gamepad ® Webservice
                                                                                                                                                                                                                                                                                       3. Infrared [³ 2.0] Ú Ultrasound ® Detection [³
                                                                                                                                                                                                                                             +
                                                 Create 1.2               1.0   1.1   1.2     2.0                    1.0      1.1                                   1.0      1.1
                                1.0     1.1
                                                 Kobuki 1.0
                                                                                            [1..1]                                                                                  [1..3]                                                                                                1.1]
                                                                                                                                                                                                                                                                                       4. TurtleBot [³ 2.0] ® Engine [³ Kobuki 1.0]
                                      Keyboard                  Gamepad          Autonomous                      Bump                       Infrared                     Ultrasound

                                                                                                                                                                                                                                     encode                                            5. TurtleBot [1.0 – 1.1] ® Engine [£ Create 1.2]
                                1.0                       1.0     2.0           1.0   1.1     2.0          1.0                        1.0        2.0         2.2    0.8      0.9      1.0
                                                                                                                                                                                                                                                                                       6. TurtleBot [³ 2.0] ® ?Webservice [³ 1.1]
     Requirement 1
     Support for feature versions                                                                                                                      Constraint Satisfaction Problem (CSP) Solver
     as units of configuration.
                                                                                                                                                                                                                               solve
     Requirement 2
     Specification of the relation of versions
     in logical development lines (i.e.,                                                                                                                           All Possible (Version) Configurations
     predecessor and successor versions
                                                                                                                                                                                                           select                                                                                                Scoring to find the
     including branching).                                                                                                                                                                                                                                                                                       "best" configuration

     Requirement 3
                                                                                                                                                                                                    TurtleBot

     Expression of dependencies on and                                                                                                                                                        1.0
                                                                                                                                                                                                          1.1

     incompatibilities with version ranges.
                                                                                                                                                                                                          2.0         2.1

     Requirement 4
                                                                                                                     Engine                                                  Movement                                               Webservice                                Detection

     Support for users in selecting suitable
                                                                                                                              Create 1.2                           1.0       1.1        1.2         2.0                       1.0      1.1                              1.0      1.1

                                                                                                       1.0         1.1
                                                                                                                                                                                                [1..1]                                                                                 [1..3]

     combinations of versions from a
                                                                                                                              Kobuki 1.0

     selection of features.
30
                                                                                                             Keyboard                            Gamepad                           Autonomous                               Bump                       Infrared               Ultrasound

                                                                                                       1.0                                 1.0         2.0                   1.0        1.1         2.0         1.0                              1.0     2.0      2.2   0.8      0.9       1.0

<!-- Page 31 -->
     FRoG: Feature Relations Graphs (A Visualisation Paradigm for Feature Constraints in PLs)

<!-- Page 32 -->
                                             Some problems of the FMs

                              Braking System

         Main (hydraulic) Brake                  Parking Brake

                                                       XOR
     [0..2]                 [0..2]
      Electronic                             Automatic            Manual
                           Anti                                   Parking
       Stability                              Parking
                         blocking
       Control                                 Brake               Brake

              includes
                                              <1..2>
              excludes              [0..2]               [0..2]
              optional                Puller       Caliper
              mandatory               Cable       Actuator
                                     Solution     Solution
     [m..n] feature cardinality
     <m..n> group cardinality

<!-- Page 33 -->
                                             Some problems of the FMs

                              Braking System

         Main (hydraulic) Brake                  Parking Brake

                                                       XOR
     [0..2]                 [0..2]
      Electronic                             Automatic            Manual
                           Anti                                   Parking
       Stability                              Parking
                         blocking
       Control                                 Brake               Brake

              includes
                                              <1..2>                decision
              excludes              [0..2]               [0..2]
              optional                Puller       Caliper
              mandatory               Cable       Actuator
                                     Solution     Solution
     [m..n] feature cardinality
     <m..n> group cardinality

<!-- Page 34 -->
                                             Some problems of the FMs

                              Braking System              decomposition

         Main (hydraulic) Brake                  Parking Brake

                                                       XOR              subtyping
     [0..2]                 [0..2]
      Electronic                             Automatic            Manual
                           Anti                                   Parking
       Stability                              Parking
                         blocking
       Control                                 Brake               Brake

              includes
                                              <1..2>                decision
              excludes              [0..2]               [0..2]
              optional                Puller       Caliper
              mandatory               Cable       Actuator
                                     Solution     Solution
     [m..n] feature cardinality
     <m..n> group cardinality

<!-- Page 35 -->
                                             Some problems of the FMs

                              Braking System              decomposition

         Main (hydraulic) Brake                  Parking Brake

                                                       XOR              subtyping
     [0..2]                 [0..2]
      Electronic                             Automatic            Manual
                           Anti                                   Parking
       Stability                              Parking
                         blocking
       Control                                 Brake               Brake

              includes
                                              <1..2>                decision
              excludes              [0..2]               [0..2]
              optional                Puller       Caliper
              mandatory               Cable       Actuator
                                     Solution     Solution
     [m..n] feature cardinality
     <m..n> group cardinality

<!-- Page 36 -->
                                             Some problems of the FMs

                              Braking System              decomposition

         Main (hydraulic) Brake                  Parking Brake

                                                       XOR              subtyping
     [0..2]                 [0..2]
      Electronic                             Automatic            Manual
                           Anti                                   Parking
       Stability                              Parking
                         blocking
       Control                                 Brake               Brake

              includes
                                              <1..2>                decision
              excludes              [0..2]               [0..2]
              optional                Puller       Caliper
              mandatory               Cable       Actuator
                                     Solution     Solution
     [m..n] feature cardinality
     <m..n> group cardinality

<!-- Page 37 -->
     Other feature dialects (basic concepts)
                          Mandatory   Optional
                 Type                             OR               XOR                 Particularities
                           features   features

     FODA        arbre       F          F             --               --

                                                                                 Relations d’implémentation, de
     FORM        graphe      F          F             --               --         spécialisation /généralisation

     FOPLE       graphe      F          F             --               --          Processus (orienté MPP)

     FeatuRSEB   arbre       F          F                                               Processus (UC)
                                                  F      F         F       F

     GP          arbre       F         F                                            Processus (génération)
                                                 F1          F2   F1        F2

                                                                                        Feature externe
     Bosch       arbre       F          F
                                                  F      F         F       F                   F

                                                                                    Relations obligatoires et
     FORE        graphe      F          F             0..*             1
                                                                                    optionnelles, cardinalités
                                                 F1          F2   F1       F2

<!-- Page 38 -->
       Other feature dialects (cardinalities)
     Cardinalities   FODA & FORM                       GP                       Bosch              FeatuRSEB

                                                                 Nom feature   Nom feature (XOR)     Nom VP (XOR)
                                     Nom feature
         0..1          Nom feature

                      Nom feature
          1                                        Nom feature                 Nom feature (XOR)     Nom VP (XOR)

                                       Nom feature               Nom feature                         Nom VP (OR)
                      Nom feature                                              Nom feature (OR)
         0..N

                       Nom feature   Nom feature                 Nom feature   Nom feature (OR)      Nom VP (OR)
         1..N

                                                                                                      Nom feature
                       Nom feature                 Nom feature
          N                                                                       Nom feature

<!-- Page 39 -->
Discussion (FODA dialects)
• Is there any concept, construct or relation type you think is missing
  from these types of models? Why?
• Do you believe these concepts are sufficient to express any product
  line? Why or why not?
• These models are by far the most popular model type used in
  industry, why do you think that is?

<!-- Page 40 -->
     Orthogonal Variability Model (OVM)

<!-- Page 41 -->
     Example of OVM: Using an auxiliary
     variation point to express constraints

            SOPA, SOPB, SOPC : three types of door opening systems
            LVAVMA : front manual window lifts
            LVAVEL : electric front lifts
            LVAVAP : front anti-pinch lifts
41          LVAVIP : electric impulse lifts
            LVCIPE : front electric impulse for driver side and electric for passenger side

<!-- Page 42 -->
                Example of OVM: variants know their implementations

     (c) Polh et al. 2010

<!-- Page 43 -->
                                         Customer visible variability         Customer

     With the OVM language you do not
                                         corresponds to the variability         visible
                                         stemming from the vehicle            variability
                                         level by the product division.
                                                                              Environ
                                         The context viewpoint contains       ment &
                                         different facets of the system       Stakehol
                                                                                ders
                                         context, such as: system
                                         boundary variability, enabling
                                         systems and vehicle
                                                                                 Functions
                                         environment.

                                         The design alternatives
                                         viewpoint specifies design
                                         decisions that impact the

                                                                                 Design & Allocation Alternatives

     always get well-structured models
                                         whole or parts of the
                                         technical solution.

                                         The variability entailed by the
                                         system internal behavior
                                         viewpoint impacts the states and
                                         transitions of the system physical
                                         and software components.

                                         The variability entailed by the
                                         physical architecture specifies
                                                                               Internal
                                         variability in component              Behavio
                                         decomposition, through optional           r
                                         or replaceable components, as
                                         well as physical interfaces
                                                                                Compone
43                                       variability between components.
                                                                                  nts
                                           (c) Dumitrescu et al. 2013

<!-- Page 44 -->
     The DOPLER language
                     Hierarchical                                                 Functional
                     and logical                                                 and structural
                    dependencies      1                                  1       dependencies

                                                       Inclusion
                                decision                                      asset
                                                       condition

                                 Name                                       Name
                                Question                                  Description
                                                                                            *
                               Description
                *           [domain-specific-
                               attributes]

         boolean decision           integer decision        string decision       enumeration decision

<!-- Page 45 -->
             DOPLER Decisions
     • Decisions can be of four types: Boolean, Integer, String or
      Enumeration.
     • DOPLER decision and its decision options can be seen as
       variables.
     • Expected value is used as a cardinality over decision options.

                                       Which tools?
                     (name: tools; expected val 1:3):
                                 {“CW”, “DK”, “PK”})

<!-- Page 46 -->
     DOPLER decision relationships
                                                                       Which tools?
                                                     (name: tools; expected val 1:3):   Decisions are related by
                                                                 {“CW”, “DK”, “PK”})
                                                                                        means of hierarchical
                                                                                        and logical
         width>=800 &&
         width<=1680                         contains(tools, “CW”)
                                                                                        dependencies
                                    Width?                 Default resolution?
                            (name: width;                  (name: resolution;

                                                                                        Visibility conditions and
                     expected val: number)                  expected val 1:1):
                                                              {“800x600”, …})

                                                                                        decision effects can be
                                                                                        seen as implications
                    if(resolution==”800x600”)then width=800

          Visibility Cond.         Decision Effect         Validity Cond.
                                                                                        Validity condition
                                                                                        restrict the domain of
                                                                                        the corresponding

<!-- Page 47 -->
     DOPLER Assets

                     Assets are related
                     by means of
                     functional and
                     structural
                     dependencies
                       • Requires
                       • Excludes

<!-- Page 48 -->
             DOPLER inclusion conditions
             DOPLER asset can be seen as boolean variables.

     Decisions and assets are linked with inclusion conditions defining
        traceability from the solution space to the problem space

            Include glossary?
             (name: glossary;
          expected val: bool)

<!-- Page 49 -->
                DOPLER variability model
                            Decision model                                                               Asset model
            to represent the product line’s problem space
                                                            What to buy?                    to represent the solution space
                                         (name: scope; expected val 1:1):
                                  {“assemble yourself”, “complete suite”})                                                  Plugin
                                                                                                    -name : string = Core Plugin
                                                                                                    -inclusion condition : string = true
                                                                                                    -description : string = .....
                                                                                                    -location : string = svn://...

          isTaken(scope)                         scope==“assemble yourself”
                                                                                                                    <<requires>>
              Include glossary?                                          Which tools?                         Plugin
               (name: glossary;                        (name: tools; expected val 1:3):
                                                                                          -name : string = Glossary Plugin
            expected val: bool)                                   {“CW”, “DK”, “PK”})     -inclusion condition : string = glossary == true
                                                                                          -description : string = .....
                                                                                          -location : string = svn://...
                                                                                                                                             <<requires>>

     width>=800 &&                                                                                                          Plugin
                                              contains(tools, “CW”)
     width<=1680                                                                                    -name : string = CW Plugin
                                                                                                    -inclusion condition : string = contains(tools, "CW")
                                Width?                       Default resolution?                    -description : string = .....
                        (name: width;                         (name: resolution;                    -location : string = svn://...
                 expected val: number)                         expected val 1:1):
                                                                 {“800x600”, …})
                                                                                                                   <<contributes to>>
                                                                                                                           Setting
                                                                                                    -name : string = Resolution width
                                                                                                    -inclusion condition : string = isTaken(width)
                                                                                                    -description : string = .....
                 if(resolution==”800x600”)then width=800                                            -width_value : string = width

     Visibility Cond.         Decision Effect                  Validity Cond.               Inclusion Condition

<!-- Page 50 -->
     Scope decision

<!-- Page 51 -->
     Dopler_tools
     decision

<!-- Page 52 -->
     DefaultDocumentationGenerator asset

<!-- Page 53 -->
        DOPLER variability model
                            Decision model                                                                   Asset model
            to represent the product line’s problem space
                                                            What to buy?                        to represent the solution space
                                         (name: scope; expected val 1:1):
                                  {“assemble yourself”, “complete suite”})                                                      Plugin
                                                                                                        -name : string = Core Plugin
                                                                                                        -inclusion condition : string = true
                                                                                                        -description : string = .....
                                                                                                        -location : string = svn://...

          isTaken(scope)
                                                          But Decision Model is more a
                                                 scope==“assemble yourself”
                                                                                                                        <<requires>>
              Include glossary?
               (name: glossary;                        process
                                                       (name:            model    1:3): than a variability
                                                                         Which tools?
                                                              tools; expected val
                                                                                                                  Plugin
                                                                                              -name : string = Glossary Plugin
            expected val: bool)                                   {“CW”, “DK”, “PK”})
                                                                                  model!      -inclusion condition : string = glossary == true
                                                                                              -description : string = .....
                                                                                              -location : string = svn://...
                                                                                                                                                 <<requires>>

     width>=800 &&                                                                                                              Plugin
                                              contains(tools, “CW”)
     width<=1680                                                                                        -name : string = CW Plugin
                                                                                                        -inclusion condition : string = contains(tools, "CW")
                                Width?                       Default resolution?                        -description : string = .....
                        (name: width;                         (name: resolution;                        -location : string = svn://...
                 expected val: number)                         expected val 1:1):
                                                                 {“800x600”, …})
                                                                                                                       <<contributes to>>
                                                                                                                               Setting
                                                                                                        -name : string = Resolution width
                                                                                                        -inclusion condition : string = isTaken(width)
                                                                                                        -description : string = .....
                 if(resolution==”800x600”)then width=800                                                -width_value : string = width

     Visibility Cond.         Decision Effect                  Validity Cond.                   Inclusion Condition

<!-- Page 54 -->
       Constraint-based product line language
                  element (…)                                                                                                                Value intervals
                                                                                                        Equivalence                                                                         Enumeration
              element_var (…)
                                       Superior                                  Equality               Implication                                 Integer                                   Boolean
              all_different (…)
                                     Superior or                            Disequality                          NOT
                   at_most (…)         equal
                                                                                                                  OR                                    Domain with                           Domain without
                                                                                                                                                        global order                           global order
                   at_least (…)        Inferior                             Inequality
                                                                                                                 XOR
                    exactly (…)       Inferior or                                                                AND
                                         equal
                   relation (…)                                                                                                         Order

                                  Symbolic                                        Arithmetic                     Boolean
                                                                                                                                                      Belongs to >
                                                                                                                                                                                        Domain
                                                                                                                                         *
                                                                                                                                                                                               1..*
                                                                                                                                        Variable
                                                                                                                           1..*                                1
                                                    0..*
       Mazo et al. 2012,            Operator                                                                                      valuated: boolean

                                                                                                                                                                     Is valuated by >
                                                                          0..*                                                                                                                 1..*
                                                                                                        1..*                                                                                                         0..*
     based on the previous                                                             Constraint                                               1                                                Value
                                                                          0..*                                 Applies to >
      version of Salinesi et                                                                                                                                                                   0..*

                                                                                                                                                                                                       attribute >
            al. 2011
                                                           Applies to >
                                                                                   Reified constraint                                                                                   1
                                                                                               1                    Is unified with >                              Valuation
                                                                                                                                                                                                      1..*

<!-- Page 55 -->
         Example of PLM as a contraint program
             Problem space                      Solution space

                                       Engine

     A          constraint1,       B             Body
                constraint2

          constraint 3
                                                Transmission
                               C

<!-- Page 56 -->
       Example of PLM as a contraint program
     Context               Problem space                 Solution space

                                                Engine

                         constraint1,                     Body
               A                            B
                         constraint2

                   constraint 3
                                                         Transmission
                                        C

<!-- Page 57 -->
       Example of PLM as a contraint program
     Context               Problem space                     Solution space

                                                    Engine

                                                              Body
               Variables: domain([A, B], [0, 1]),
                          domain([C], [1, 2]),
               Constraint1 : B è A,
               Constraint2 : at_least([A, B], 1),
                                                             Transmission
               Constraint3 : A ≤ B + C ≤ A * 2

<!-- Page 58 -->
     Example of PLM as a contraint program
     [UNIX, Kernel, Scheduling, ExecutingInstructions, InterpretingInstructions,
     AccomplishingTheTransferOfData, AllocatingTheMachinesMemory, Shell, FileSystem,
     UserInterface, Graphical, Process] ∈ {0, 1} ˄
     [WidthResolution] ∈ {0, 800, 1024, 1366} ˄ [HeightResolution] ∈ {0, 600, 768} ˄
     [Support_usb, Cdrom_atech, Pcmacia_support] ∈ {0,1,2} ˄
     [BoolSupport_usb, BoolCdrom_atech, BoolPcmacia_support] ∈ {0, 1} ˄
     UNIX = 1 ˄
     UNIX = Kernel ˄
     Kernel = AllocatingTheMachinesMemory ˄
     AllocatingTheMachinesMemory Þ Process ˄
     Kernel = Scheduling ˄
     Scheduling Þ Process ˄
     Kernel = AccomplishingTheTransferOfData ˄
     AccomplishingTheTransferOfData Þ Process ˄
                                      However, the constraint-based
     Shell Þ InterpretingInstructions ˄

     Shell Þ ExecutingInstructions ˄ representation can be difficult to
     Kernel = InterpretingInstructions ˄

     Kernel = ExecutingInstructions ˄
     Support_usb Û BoolSupport_usb ˄
                                        build (for certain people),
     Cdrom_atech Û BoolCdrom_atech ˄understand (for certain people) and
     Pcmacia_support Û BoolPcmacia_support ˄
                                        to use with stakeholders !
     0 ≤ BoolSupport_usb + BoolCdrom_atech + BoolPcmacia_support ≤ 3*Kernel ˄
     UNIX = Shell ˄
     UNIX = FileSystem ˄
     UNIX ≥ UserInterface ˄
     UserInterface = Graphical ˄
     Graphical=1 Û (WidthResolution=W1 ˄ HeightResolution=H1)˄
     Graphical = 0 Û (WidthResolution=0 ˄ HeightResolution=0)˄
     fd_relation([[800,600], [1024,768], [1366,768]], [W1,H1])˄
     UNIX ≥ Process ˄
     R1 = Process1 + Process2 + Process3 + Process4 + Process5˄
58   Process ≤ R1 ≤ Process*5

<!-- Page 59 -->
     1.Analysis
      A. …
      B. Strategies to elicit the
        requirements of a PL
        a. Requirements-driven
           strategy
        b. Low-end vs. high-end
           product strategy
           (reference-product
           strategy)
        c. Multiviewpoint strategy

<!-- Page 60 -->
      Requirements-driven strategy
     1. Start collecting and analysing the available
        documentation of the domain
     2. Identify commonality (mandatory) (no
        conditions) è mandatory requirements
     3. Identify variability (optionality) keywords
        èoptional requirements
     4. Identify keywords representing
        dependencies è optional requirements +
        constraints
     5. Complete with the documentation about the
        implementation assests and write the
60      requirements corresponding with a template

<!-- Page 61 -->
     Example of available documentation
      • UNIX has one KERNEL.
      • Some of the mandatory functions of the KERNEL are:
          • ALLOCATING THE MACHINE'S MEMORY to each PROCESS
          • SCHEDULING the PROCESSES
          • ACCOMPLISHING THE TRANSFER OF DATA from one part of the machine to another
      • UNIX can have several PROCESSES (or none) for each user. The collection of PROCESSES varies even when the
        UNIX product is full-configured. For the sake of presentation, this thesis will consider only five processes.
      • UNIX offers a logical view of the FILE SYSTEM. A FILE SYSTEM is a logical method for organising and storing large
        amounts of information in a way that makes its management easy.
      • The KERNEL is composed of static or dynamic software modules. If the kernel was compiled for a specific
        hardware platform and cannot be changed, it is called a static Kernel. If the Kernel has the ability to dynamically
        load modules so that it can 'adapt' to a platform, it is called a dynamic Kernel. For instance, the modules
        SUPPORT_USB, CDROM_ATECH, and PCMCIA_SUPPORT cannot be charged, can be charged in a static way or can
        be charged in a dynamic way.
      • The SHELL is a command interpreter; it takes each command and passes it to the KERNEL to be acted upon.
      • The GRAPHICAL interface is characterized by a WIDTH RESOLUTION and a HEIGHT RESOLUTION that can have the
        following couples of values [800,600], [1024,768] and [1366,768].

<!-- Page 62 -->
     Each requirement can be fully documented with the
     following table (adapted from (IEEE 830, 1998))

       <id>              Requirement descriptive name
       Version           <version number> (version creation date)
       Description       <use a template to specify the domain requirement in semi-
                         structured natural language, e.g., Mazo et al. 2020>
       Function/module   <functionality or module to which the requirement belongs>
       Type              <indicate here: FR, NFR, legal requirement, change requirement,
                         technical requirement, etc.>
       Variability       <specify if the requirement is optional or mandatory and the
                         alternatives that should be supported by this requirement>
       Priority          <Priority of the requirement in the product line>
       Delivery date     <indicate here the expected/needed delivery date>
       Stability         <risk of requirement evolution>
       Source            <role and name of contributors>

<!-- Page 63 -->
63   Template to the requirements specification of systems and families of (self) adaptive systems (Mazo et al., 2020)

<!-- Page 64 -->
     [Condition or event], ALL|SOME SYSTEMS OF THE <Product line name> <Priority> ...
     [Condition or event], THOSE SYSTEMS OF THE <Product line name> <Restriction> <Priority>…
     … (see template for more options)

          FR_P8.R5                  Configure a text for comparison with another element
          Version                   0.7 (01/01/2020)
          Description               In case the action of comparing text is included, those systems of
                                    the automation framework product line that only include the
                                    option to enter text shall provide the tester with the ability to
                                    configure a text for comparison with another element.
          Function/module           Requirements specification module
          Type                      FR
          Variability               Conditionally mandatory.
          Priority                  Essential requirement.
          Delivery date             01/05/2020
          Stability                 High
          Source                    Project leader, Raúl Mazo

<!-- Page 65 -->
                                      Terminology issue
     •   UNIX has one KERNEL.

     •   Some of the mandatory functions of the KERNEL are:
     •   ALLOCATING THE MACHINE'S MEMORY to each PROCESS
     •   SCHEDULING the PROCESSES
     •   ACCOMPLISHING THE TRANSFER OF DATA from one part of the machine to another

     •   UNIX can have several PROCESSES (or none) for each user. The collection of PROCESSES varies even when the UNIX product is full-
         configured. For the sake of presentation, this thesis will consider only five processes.
                                                  What if the document
     • UNIX offers a logical view of the(stakeholder          descriptions) doesn’t
                                         FILE SYSTEM. A FILE SYSTEM is a logical method for organising and storing large amounts of
                                             use the easy.
       information in a way that makes its management     « right » keywords ?
     •   The KERNEL is composed of static or dynamic software modules. If the kernel was compiled for a specific hardware platform and
         cannot be changed, it is called a static Kernel. If the Kernel has the ability to dynamically load modules so that it can 'adapt' to a
         platform, it is called a dynamic Kernel. For instance, the modules SUPPORT_USB, CDROM_ATECH, and PCMCIA_SUPPORT cannot
         be charged, can be charged in a static way or can be charged in a dynamic way.

     •   The SHELL is a command interpreter; it takes each command and passes it to the KERNEL to be acted upon.

     •   The GRAPHICAL interface is characterized by a WIDTH RESOLUTION and a HEIGHT RESOLUTION that can have the following
         couples of values [800,600], [1024,768] and [1366,768].

<!-- Page 66 -->
     And then, we design the domain
     requirements model…
                                                                   UNIX

                                Kernel                                                                        [0..*]
                                                    Shell          FileSystem             UserInterface       Process
                                           <0..3>
             Scheduling
                                                                  Support_usb                   Graphical
              ExecutingInstructions                                                        WidthResolution
                                                                 Cdrom_atech               HeightResolution
                       InterpretingInstructions
                                                                       Pcmacia_support
                            AccomplishingTheTransferOfData

                                                             AllocatingTheMachine'sMemory

             Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

                                                                                 [m..n]
                                                                                                       <m..n>
                Mandatory      Optional     Requires        Excludes      Feature cardinality      Group cardinality

<!-- Page 67 -->
     Then, we design, bind and implement the
     domain reusable components…
        Some of the mandatory
        functions of the KERNEL are:
        …
        ACCOMPLISHING THE
        TRANSFER OF DATA from one
        part of the machine to
        another

     Accomplishing

                                        …
      TheTransfer
        OfData

<!-- Page 68 -->
                                        Exercise
     Create the variability model (e.g., feature model) based on the following
     requirements and constraint of an appliance store product line.
     R1: SOME SYSTEMS OF THE appliance store PRODUCT LINE SHOULD PROVIDE the
     clients WITH THE ABILITY TO manage the products sold in the stores.
     R2: SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the
     clients WITH THE ABILITY TO validate themselves in the corresponding system.
     R3: ALL the SYSTEMS OF THE appliance store PRODUCT LINE SHALL PROVIDE the
     clients WITH THE ABILITY TO manage the payments of the products sold in the stores.
     R4: SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the
     clients WITH THE ABILITY TO pay by card.
     R5: SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the
     clients WITH THE ABILITY TO pay cash.
     C1: The client should be validated into each store system before managing the
68   products of the corresponding store.

<!-- Page 69 -->
                             Solution to the exercise
     Create the variability model (e.g., feature model) based on the following requirements and
     constraint of an appliance store product line.
     R1: SOME SYSTEMS OF THE appliance store PRODUCT LINE SHOULD PROVIDE the clients WITH THE ABILITY
     TO manage the products sold in the stores.
     R2: SOME SYSTEMS OF THE appliance store PRODUCT LINE COULD PROVIDE the clients WITH THE ABILITY
     TO validate themselves in the corresponding system.
     R3: ALL the SYSTEMS OF THE appliance store
     PRODUCT LINE SHALL PROVIDE the clients WITH THE
     ABILITY TO manage the payments of the products
     sold in the stores.
     R4: SOME SYSTEMS OF THE appliance store PRODUCT
     LINE COULD PROVIDE the clients WITH THE ABILITY
     TO pay by card.
     R5: SOME SYSTEMS OF THE appliance store PRODUCT
     LINE COULD PROVIDE the clients WITH THE ABILITY
     TO pay cash.
     C1: The client should be validated into each store
     system before managing the products of the
69   corresponding store.

<!-- Page 70 -->
     1.Analysis
      A. …
      B. Strategies to elicitate the
        requirements of a PL
        a. Requirements-driven
           strategy
        b. Low-end vs. high-end
           product strategy
           (reference-product
           strategy)
        c. Multiviewpoint strategy

<!-- Page 71 -->
     Low-end vs. high-end
     product strategy (or even,
     reference-product strategy)
     1.   Select a low-end and a high-end product
          • Compare the properties (material,
            dimensions, …) capacities (functions)
            and the qualities (performance,
            security,…) of these products and
            complete these characteristics with all
            the possibilities in the middle.
     2.   Specify the resulting variations points and the
          corresponding variants and define if they
          corresponds to the scope of the product line.
          • All that is in the scope will be part of
            the requirements of the product line
71   3.   Complete with the “convenient” characteristics
          according to the objectives, marketing strategy

<!-- Page 72 -->
     Low-end vs. high-end product
     strategy (or even, reference-
     product strategy)
     1. Select reference product
        • Create breakdown structure =>
          tree
     2. Select 2nd product (variant)
        • Identify & integrate variations
        • Identify & integrate constraints
     3. Select 3rd product …

<!-- Page 73 -->
     Low-end vs. high-end product
     strategy (or even, reference-
     product strategy)
     1. Select reference product                        Reference product
        • Create breakdown structure =>                breakdown structure
          tree                                                        UNIX

     2. Select 2nd product (variant)
        • Identify & integrate variations    Process       Shell
        • Identify & integrate constraints                         Kernel    FileSystem      UserInte
                                                                                              rface

     3. Select 3rd product …
                                             AllocatingM
                                                emory              Cdrom                     Graphical
                                                                   _atech
                                                                                          WidthResolution
                                              AccomplishingDat                            HeightResolution
                                                  aTransfer

<!-- Page 74 -->
     Low-end vs. high-end product
     strategy (or even, reference-
     product strategy)
     1. Select reference product
        • Create breakdown structure =>                            UNIX
          tree
     2. Select 2nd product (variant)
                                                                          FileSystem      UserInterface
        • Identify & integrate variations
        • Identify & integrate                 Process    Shell
          constraints                                                                      Graphical
                                                                      Kernel           WidthResolution
     3. Select 3rd product …                                                           HeightResolution
                                                                          <0..1>
                                    AllocatingMemory                               Support_usb
                                                                Cdrom_atech
                                    AccomplishingDataTransfer

<!-- Page 75 -->
     Low-end vs. high-end product
     strategy (or even, reference-
     product strategy)
      1. Select reference product
         • Create breakdown structure =>
           tree
      2. Select 2nd product (variant)
                                                And repeat the
         • Identify & integrate variations      activities of the
         • Identify & integrate constraints      second step…
      3. Select 3rd product …                 and and so on and so
                                                     forth!

<!-- Page 76 -->
     Low-end vs. high-end product
     strategy (or even, reference-
     product strategy)

                                                        UNIX

                  Process              Shell            Kernel          FileSystem        UserInterface

                                                          <0..1>
           AllocatingMemory                     Cdrom_atech        Support_usb             Graphical
                                                                                       WidthResolution
           AccomplishingDataTransfer                     Pcmcia_support                HeightResolution

           Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

<!-- Page 77 -->
     Low-end vs. high-end product
     strategy (or even, reference-
     product strategy)

                                      Domain missed UNIXopportunities?
                                   What is the influence of the choice
                                  of the first (/2nd / 3rd / etc) product ?
                  Process              Shell            Kernel          FileSystem        UserInterface

                                                          <0..1>
           AllocatingMemory                     Cdrom_atech        Support_usb             Graphical
                                                                                       WidthResolution
           AccomplishingDataTransfer                     Pcmcia_support                HeightResolution

           Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

<!-- Page 78 -->
     1.Analysis
      A. …
      B. Strategies to elicitate the
        requirements of a PL
        a. Requirements-driven
           strategy
        b. Low-end vs. high-end
           product strategy
           (reference-product
           strategy)
        c. Multiviewpoint strategy

<!-- Page 79 -->
     Multi-viepoints strategy

     1. Identify viewpoints

     2. Specify viewpoints
        (with/without variability)

     3. Identify dependencies

     4. Integrate

<!-- Page 80 -->
     Producing an OVM from multiple viewpoints
                                                                                                                       <<extends>>
                                                                                                                                             AutoTestSensor
                                                                                                                Sensor
                                Sensor                                                                                                                         <<includes>>

                                                                                         VehicleLocatorSystem
                                                                                                                            <<extends>>

                                                 [1, 4]                                                                                    SpeedSensor

               AutoTest         Speed            Position                                                                                                 <<includes>>

                                                                                                                 Feedback
                Sensor          Sensor            Sensor                                                                    [1, 3]
                                                                                                                                                  Audio
                                                                         Purchaser
                                                                         Actor1

                          (a)                                                                                                                 Vibration

                                                                                                                                (b)

                                                   Sensor                            SensorTest
                                                                                                                                 (c)
                                    [0,1]

                      SpeedSensor           PositionSensor   ConsistencyCheck        ResponseTimeCheck                       FunctionalityCheck

<!-- Page 81 -->
     Producing an OVM from multiple viewpoints
                                                                                                                  <<extends>>
                                                                                                                                        AutoTestSensor
                                                                                                           Sensor
                                Sensor                                                                                                              <<includes>>

                                                                                    VehicleLocatorSystem
                                                                                                                       <<extends>>

                                                   Granularity & language problems!SpeedSensor
                                                 [1, 4]

               AutoTest         Speed            Position                                                                                      <<includes>>

                                                                                                            Feedback
                Sensor          Sensor            Sensor                                                               [1, 3]
                                                     OVM (or your
                                                                Purchaser
                                                                Actor1
                                                                          pivot language) is Audio
                          (a)
                                                     maybe not rich enough to allow Vibration
                                                         representing individual (b)
                                                    cardinalities, attributes and other
                                                                constraints!
                                                   Sensor                       SensorTest
                                                                                                                            (c)
                                    [0,1]

                      SpeedSensor           PositionSensor   ConsistencyCheck   ResponseTimeCheck                       FunctionalityCheck

<!-- Page 82 -->
                                  Customer visible variability         Customer
                                  corresponds to the variability         visible
                                  stemming from the vehicle            variability
                                  level by the product division.

     Integration using OVM as a
                                                                       Environ
                                  The context viewpoint contains       ment &
                                  different facets of the system       Stakehol
                                                                         ders
                                  context, such as: system
                                  boundary variability, enabling
                                  systems and vehicle
                                                                          Functions
                                  environment.
                                  The design alternatives
                                  viewpoint specifies design
                                  decisions that impact the

                                                                          Design & Allocation Alternatives
                                  whole or parts of the
                                  technical solution.

     pivot language
                                  The variability entailed by the
                                  system internal behavior
                                  viewpoint impacts the states and
                                  transitions of the system physical
                                  and software components.

                                   The variability entailed by the
                                   physical architecture specifies
                                                                        Internal
                                   variability in component             Behavio
                                   decomposition, through                   r
                                   optional or replaceable
                                   components, as well as physical
                                                                         Compone
82                                 interfaces variability between
                                   components.                             nts

<!-- Page 83 -->
     Integration of different views
                                                                                                               <<includes>>
                                                                                                                                  Définir_mét
                                                                                                                                   hodologie
                                                                                                       Analyser_lepl
                                                                                                          asma                <<includes>>

                                                                                               <<includes>>
                                                                                                                                    Charger_les_
                        Diagnostiquer thrombose/ hémophilie
                                                                                                                                      produits
                                                                                    Diagnostiquer_throm
         Spécifier le facteur défaillant                                                                                  <<includes>>                  Transférer_
                                                                                      bose_hémophilie
                                                                                                                                                         résultats
                            Analyser le plasma                                                            <<includes>>              Mesurer_le
                                                                                        <<includes>>                                 _plasma         <<includes>>

         Utiliser méthodologie                                                                     Spécifier_le_facteu               <<includes>>
                                                                                                                                                        Imprimer_
                                                     Identifier les tubes                             r_défaillant                                       résultats
                        [1,2]                           [1,2]                                                      <<includes>>      Identifier_le
                    Figée                                          Manuelle                                                            s_tubes
         Paramétrable                                   Automatique

                    Charger les produits       Mesurer

                                [0,1]
                                        Transférer           Imprimer
          Continu                        résultats           résultats
                                              Type mesure
               Urgent      Aléatoire
      exclur        Tubes de la                      [1,3]      Chrono.
      e             concurrence            Immuno. Colori.
                                                                         requiert

<!-- Page 84 -->
     Integration of different views
                                                                                                               <<includes>>
                                                                                                                                  Définir_mét
                                                                                                                                   hodologie
                                                                                                       Analyser_lepl
                                                                                                          asma                <<includes>>

                                                                                               <<includes>>
                                                                                                                                    Charger_les_
                        Diagnostiquer thrombose/ hémophilie
                                                                                                                                      produits
                                                                                    Diagnostiquer_throm
         Spécifier le facteur défaillant                                                                                 <<includes>>
                                                               Granularity & language problems!
                                                                                      bose_hémophilie                                                   Transférer_
                                                                                                                                                         résultats
                            Analyser le plasma                                         <<includes>>                                 Mesurer_le
                                                                                        <<includes>>                                 _plasma         <<includes>>

         Utiliser méthodologie                              How this model mixes Spécifier_le_facteu
                                                     Identifier les tubes
                                                                                  all kinds of                                       <<includes>>
                                                                                                                                                        Imprimer_
                                                                                    r_défaillant
                                                         concepts and variability constraints?
                                                                                                                                                         résultats
                        [1,2]                           [1,2]                                    <<includes>>                        Identifier_le
                    Figée                                          Manuelle                                                            s_tubes

                                                         What is the semantic of the resulting
         Paramétrable                                   Automatique

                    Charger les produits       Mesurer

                                [0,1]
                                                                       model?
                                        Transférer           Imprimer
          Continu                        résultats           résultats
                                              Type mesure
               Urgent      Aléatoire
      exclur        Tubes de la                      [1,3]      Chrono.
      e             concurrence            Immuno. Colori.
                                                                         requiert

<!-- Page 85 -->
                                 References and recommended readings
     Czarnecki, Krzysztof, Paul Grünbacher, Rick Rabiser, Klaus Schmid, and Andrzej Wąsowski. "Cool features and tough decisions: a comparison of variability
        modeling approaches." In Proceedings of the sixth international workshop on variability modeling of software-intensive systems, pp. 173-182. ACM, 2012.
     Cordy, Maxime, Pierre-Yves Schobbens, Patrick Heymans, and Axel Legay. "Beyond boolean product-line model checking: dealing with feature attributes and
        multi-features." In Proceedings of the 2013 International Conference on Software Engineering, pp. 472-481. IEEE Press, 2013.
     Dhungana, Deepak, Paul Grünbacher, and Rick Rabiser. "The DOPLER meta-tool for decision-oriented variability modeling: a multiple case study." Automated
        Software Engineering 18, no. 1 (2011): 77-114.
     Dumitrescu Cosmin, Dauron Alain, Salinesi Camille, Mazo Raúl. La Réutilisation en Ingénierie de Systèmes à Base de Modèles: Processus et Activités IS pour
       l’Adoption d’une Approche Lignes de Produits. Genie Logiciel N° 105, pp. 52-59, Paris-France, Juin 2013.
     Nair, D.K., 2013. Variability-Modelling Practices in Industrial Software Product Lines: A Qualitative Study (Master's thesis, University of Waterloo).
     Bühne, Stan, Kim Lauenroth, and Klaus Pohl. "Why is it not sufficient to model requirements variability with feature models." In Proceedings of Workshop:
        Automotive Requirements Engineering, pp. 5-12. 2004.
     Mazo Raúl. Avantages et limites des modèles de caractéristiques dans la modélisation des exigences de variabilité. Journal "Génie Logiciel", No. 111, Paris-
       France, pp. 42-48, Dec. 2014.
     Mazo Raúl, Salinesi Camille, Diaz Daniel, Djebbi Olfa, Lora-Michiels Alberto. Constraints: the Heart of Domain and Application Engineering in the Product Lines
       Engineering Strategy. International Journal of Information System Modeling and Design IJISMD. pp. 33-68. ISSN 1947-8186, eISSN 1947-819, Vol. 3, No. 2.
       April-June 2012
     Dumitrescu Cosmin, Tessier Patrick, Salinesi Camille, Gérard Sebastien, Dauron Alain, Mazo Raúl. Capturing Variability in Model-based Systems Engineering
       Process. Complex Systems Design & Management (CSD&M) Conference, Springer Press, Paris-France, p. 125-140, 2013.
     Birk, A., Heller, G., John, I., Schmid, K., von der Maßen, T. and Muller, K., 2003. Product line engineering, the state of the practice. IEEE software, 20(6), pp.52-
         60.
     Galster, M., Weyns, D., Tofan, D., Michalik, B. and Avgeriou, P., 2014. Variability in software systems—a systematic literature review. IEEE Transactions on
        Software Engineering, 40(3), pp.282-306.
     Mazo Raúl. Guía para la adopción industrial de líneas de productos de software. Editorial Eafit, ISBN 978-958-720-506-0, Medellín-Colombia, 2018.
