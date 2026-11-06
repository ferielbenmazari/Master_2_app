<!-- Page 1 -->
 Introduction

Notions de base
  du langage

Notions de base
  de la POO

   Notions
avancées de la
    POO
                        (Software) Product Line
  Gestion des
    erreurs
                              Engineering
Flux d’entrée et
   de sortie
                                           Camille Salinesi
   Interface
homme-machine                       Camilo Correa Restrepo

          Structures
    1     collectives

<!-- Page 2 -->
 Introduction
                        1. Analysis
Notions de base
  du langage
                           A.…
Notions de base
  de la POO                B.…
   Notions
avancées de la
    POO
                           C.Transformation,
  Gestion des
    erreurs
                            verification,
Flux d’entrée et
   de sortie
                            diagnosis and fixing
   Interface
homme-machine
                            processes
          Structures
   2      collectives

<!-- Page 3 -->
       What is model-to-text transformation?
    Model transformation aims to provide a mean to specify the way to produce target models
    from a number of source models.
    Formally, a simple model transformation has to define the way for generating a model Mb,
    conforming to a metamodel MMb, from a model Ma conforming to a metamodel MMa.

      MMa                                                                              MMb

       Ma                                                                               Mb

<!-- Page 4 -->
                  Tranformation framework

                             Mapping and transformation
                               rules from concepts of
    Metamodel A                                                     Metamodel B
                   Request   Metamodel A to concepts of   Request
                                   Metamodel B

                                      Executes
    Conforms to                                                      Conforms to

                      Read                                Write
                                   Transformation
       Model A                                                        Model B
                                       Engine

<!-- Page 5 -->
             Why to transform a PLM?

     Graphical representation of models makes it impossible to
    directly reason on them. Because of this, models are usually
    transformed to executable code in order to reason on them.

                         In the case of PLMs:
                          Batory, D.S., 2005.
                   Benavides et al. 2005, 2007, 2010
                    Van Deursen, A., Klint, P., 2002
                          Karataş et al. 2010
                           Mazo et al. 2011

<!-- Page 6 -->
           Transforming FMs to constraint
         programming: the optional concept
            If {F1, F2} ∈ {true, false}:
    F1
            then
            • F2 ⇒ F1
            • ¬F2 ˅ F1
    F2
            If {F1, F2} ∈ {0, 1}: then
            F1 ≥ F2

            If {F1, F2} ∈ N+ U {0}: then
6           F2 ≥ 1 ⇒ F1 ≥ 1

<!-- Page 7 -->
       Transforming FMs to constraint
    programming: the mandatory concept

    F1   If {F1, F2} ∈ {true, false}: then
         • F1 ⇔ F2
         • (¬F1 ˅ F2)^(F1 ˅ ¬F2)
    F2
         If {F1, F2} ∈ {0, 1}: then
         F1 = F2

         If {F1, F2} ∈ N+ U {0}: then
         F2 ≥ 1 ⇔ F1 ≥ 1

<!-- Page 8 -->
           Transforming FMs to constraint
         programming: the requires concept

               If {F1, F2} ∈ {true, false}: then
               • F1 ⇒ F2
               • ¬F1 ˅ F2

    F1    F2   If {F1, F2} ∈ {0, 1}: then
               • (1-F1 + F2) > 0
               • F2 ≥ F1

               If {F1, F2} ∈ N+ U {0}: then
               F1 ≥ 1 ⇒ F2 ≥ 1

<!-- Page 9 -->
           Transforming FMs to constraint
         programming: the excludes concept

              If {F1, F2} ∈ {true, false} then
              • (F1 ˄ ¬F2) ˅ (¬F1 ˄ F2) ˅ (¬F1 ˄ ¬F2)
              • ¬(F1 ˄ F2)
              • ¬F1 ˅ ¬F2

    F1   F2   If {F1, F2} ∈ {0, 1} then
              F1 + F2 ≤ 1

              If {F1, F2} ∈ N+ U {0}: then
              F1 * F2 = 0

<!-- Page 10 -->
                  Transforming FMs to constraint
               programming: Group cardinality with
                        <m..n>boundaries
                             If {F0, F1, F2, …, Fn} ∈ {0, 1} then
                             F0 ≥ F1 ˄
               F0            F0 ≥ F2 ˄ …
                             F0 ≥ Fn ˄
                    <m..n>   F0 ==> (m ≤ F1+ F2 + … + Fn ≤ n)
                             Or simply:
                             m*F0 ≤ F1+ F2 + … + Fn ≤ n*F0

     F1   F2    ...    Fn    If {F0, F1, F2, …, Fn} ∈ N+ U {0} then
                             (F0 > 0) ⇔ BoolF0 ˄
                             (F1 > 0) ⇔ BoolF1 ˄ … ˄ (Fn > 0) ⇔ BoolFn ˄
                             m*BoolF0 ≤ BoolF1 + … + BoolFn ≤ n*BoolF0

<!-- Page 11 -->
             Transforming FMs to constraint
          programming: individual cardinalities
A               A                  If {A, B1, …, Bn} ∈ {0, 1} then:
                      [m..n]       A ≥ B1 ˄ ...˄ A ≥ Bn ˄
 [m..n]                            A ==> (m ≤ B1 + … + Bn ≤ n)
B          B1 … Bm … Bn            Or simply:
                                   A <==> (m ≤ B1 + … + Bn ≤ n)

Exercise 1:         [p..q]         [m..n]   Exercise 2:       [p..q]       [m..n]
                A              B                          A            B

<!-- Page 12 -->
           Transforming FMs to constraint
          programming: feature attributes

              F1              F1 ∈ {true, false} ˄
                              Att1 ∈ {value1, …} ˄
         Att1: {value1}       F1 ⇔ (Att1 > 0)
     Att2: {value2, value3}
                              Example:
                              Att2 ∈ {0, 2, 4, 16, 32} ˄
                              F1 ⇔ (Att2 > 0)

<!-- Page 13 -->
               Exercise : with GNU Prolog
     Let’s transform the following model                 F1
     into a constraint program in GNU
                                                                        F4
     Prolog, and:                             F2
     1. What is the resulting code?                                          F12
                                                        F3          F11
     2. How to generate some
         configurations automatically?             F5             F6     requires
     3. Which is the semantics of the                   F7
         model?                                          1..2

     4. How many products in the model?                           F10
     5. Are there some problems in the             F8        F9
                                           mutex
         model? Which ones?
                                           F9 => NOT((F5∧F6) ˅ F11)

<!-- Page 14 -->
      1. What is the
                                              productLine.pl
     resulting code?                          productline(L):-
     Match the colors                         % L is the list of variables of the model
                                              L = [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12],
                                              % this function defines the domain L; all variables can be 0 or 1
                   F1                         fd_domain(L, 0, 1),
                                              F1 #= 1,
                                              F1 #= F2,
                                  F4          F1 #= F3,
        F2                                    F1 #= F4,
                                              F3 #= F7,
                                       F12    F3 #>= F5,
                  F3          F11             F3 #>= F6,
                                              F7 #=< F8 + F9 + F10,
             F5                               F8 + F9 + F10 #=< F7 * 2,
                            F6     requires   F4 #>= F11,
                  F7                          F4 #>= F12,
                   1..2                       F4 #= F11 + F12,
                                              F2 + F8 #=< 1,
                            F10               F6 #==> F12,
             F8        F9                     F9 #==> #\((F5 #/\ F6) #\/ F11),
     mutex                                    %to finish the constraint program and give a value to each variable
                                              fd_labeling(L).
14    F9 => NOT((F5∧F6) ˅ F11)

<!-- Page 15 -->
          2. How to generate some configurations automatically?
                                                    Step 1: create a file and call it productLine.pl in a plain text editor
                                                    (the extension should be .pl)
     productline(L):-
     % L is the list of variables of the model                Step 2: start GNU Prolog (gprolog) with double click on the
     L = [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12], executable file (Win) or executing the gprolog command in your
     fd_domain(L, 0, 1),
     F1 #= 1,                                                 terminal. Then, compile the productLine.pl file with consult:
     F1 #= F2,
     F1 #= F3,
     F1 #= F4,
     F3 #>= F5,
     F3 #= F7,
     F3 #>= F6,
     F7 #=< F8 + F9 + F10,
     F8 + F9 + F10 #=< F7 * 2,
     F4 #>= F11,
     F4 #>= F12,
     F4 #= F11 + F12,                                        Step 3: call your program with productline(L). as follows:
     F2 + F8 #=< 1,
     F6 #==> F12,
     F9 #==> #\((F5 #/\ F6) #\/ F11),
     fd_labeling(L).
                                                  Step 4: with ; you can generate more and more solutions:

<!-- Page 16 -->
                     3. Which is the semantics of the model?
        There are two ways to generate all the solutions (products) or the
        semantics of the model:

        First way to do it: generating one by one with ; as presented here:

     Second way to do it: with the findall function:

<!-- Page 17 -->
                    4. How many products in the model?
     There are two ways to know the number of products in the product
     line:

     First way to do it: counting the generated product. Thus, if you count
     the products just in front you get 12 products.

     Second way to do it: you generate all the solutions with findall
     and you put the answer into a list variable (for instance, called
     Semanctis), and then you count the number of elements in the
     resulting list (i.e., Semantics) with the length function:

<!-- Page 18 -->
     5. There are some problems in the model? Which ones?
     Yes, there are!
                                                                         F1
     For instance, you have maybe noticed that the
     feature F8 is never selected, in any                                               F4
     configuration, right?                                    F2
     Why, because F2 is full mandatory and the F8 is                                         F12
     optional, so, F8 has no chances to be selected,                    F3          F11
     never!
     So, F8 is called a dead feature because is                    F5             F6     requires
     represented in the product line model but in
                                                                        F7
     reality, it is a dead variable because it cannot be
                                                                         1..2
     used in any product!
                                                                                  F10
                                                                   F8        F9
     This explanation is enough for now, it was just       mutex
     good to introduce the next subject of the
     course: Verification of product line models!          F9 => NOT((F5∧F6) ˅ F11)

<!-- Page 19 -->
     Exercise: represent the following PLM as a
     high-level (solver-independent) constraint
                       program

                     Movement Control System
            [1..1]                                   [1..2]

         SpeedSensor                              Processor
                                   [0..4]

                          PositionSensor                  [1..2]
                                               Internal Memory

                                            Size:{128,512,1024}

<!-- Page 20 -->
            Solution: PLM represented with a high level constraint language
     [MovementControlSystem, SpeedSensor,
     PositionSensor, PositionSensor1,                          Movement Control System
     PositionSensor2, PositionSensor3,                [1..1]                                   [1..2]
     PositionSensor4, Processor, Processor1,       SpeedSensor
                                                                             [0..4]         Processor
     Processor2, InternalMemory1,
     InternalMemory2, Size] ˄                                       PositionSensor                  [1..2]

     [MovementControlSystem, SpeedSensor,                                                Internal Memory
     PositionSensor, PositionSensor1,                                                 Size:{128,512,1024}
     PositionSensor2, PositionSensor3,
     PositionSensor4, Processor, Processor1,
     Processor2, InternalMemory1,              PositionSensor ⇒ (0 ≤ PositionSensor1 + PositionSensor2 +
     InternalMemory2] ∈ {0,1} ˄                PositionSensor3+PositionSensor4 ≤ 4)˄
     Size ∈ {0, 128,512,1024}                  Processor ⇒ ( 1 ≤ Processor1 + Processor2 ≤ 2) ˄
     PositionSensor1 ⇒ PositionSensor ˄        InternalMemory ⇒ (1 ≤ InternalMemory1 + InternalMemory2 ≤2)
     PositionSensor2 ⇒ PositionSensor ˄        MovementControlSystem ⇔ SpeedSensor ˄
     PositionSensor3 ⇒ PositionSensor ˄        MovementControlSystem ⇔ Processor ˄
     PositionSensor4 ⇒ PositionSensor ˄        Processor ⇔ InternalMemory ˄
     Processor1 ⇒ Processor ˄                  (MovementControlSystem ⇒ PositionSensor ≥ 0) ˄
     Processor2 ⇒ Processor ˄                  (PositionSensor ⇒ MovementControlSystem) ˄
     InternalMemory1 ⇒ InternalMemory ˄        InternalMemory ⇔ Size > 0 ˄
     InternalMemory2 ⇒ InternalMemory ˄        SpeedSensor ⇒ PositionSensor

<!-- Page 21 -->
     Exercise: Represent and execute some configurations of this
     model in GNU Prolog…How many products in the model?...

<!-- Page 22 -->
     Exercise: Represent and execute some configurations of this model
            in GNU Prolog…How many products in the model?...

<!-- Page 23 -->
                Verification,
     at the domain engineering level, consists
       of finding defects in the product line
                      model

<!-- Page 24 -->
       Why verification of PLMs is important?

     • The success of this development paradigm highly depends on
      the quality of the PLMs.
     • Defects that are not identified or not corrected will
        • inevitably spread to the products created from the product
          line or
        • affect the evolution of the product line
        which can drastically diminish the benefits of the product line
        strategy (Von der Maßen & Lichter 2004, Benavides 2007)

<!-- Page 25 -->
        Why verification is difficult?
     • Product line modeling is
       an error-prone activity
       (Von der Maßen et al. 2004,
       Batory et al. 2005)

     • Product line verification
       is a NP-complete problem
       (Yan et al. 2009).

     • A product line
       specification represents
       not one, but a collection
       of products that is defined
       implicitly and that may
       include contradictory
       requirements
       (Lauenroth et al. 2010).

<!-- Page 26 -->
       Generic verification of product line
                     models

     Generic and adaptable   Generic semantics-
     Conformance checking    related verification

<!-- Page 27 -->
                 Dependencies among common product line
                             model elements
                                             Product LineModel
                             has_root
                                                                  has_reusableElement
                         1..*
                                                                              1..*
                                                                                             belongs_to      property
                                                                 reusableElement                           Name: {unique}
                             root                                                            1                 Type
                                                                                                    0..*      Value
                                                                 is_a
                              is_a
                                                                                      is_a
                                                                                                   is_a                     groups
                                                 artefact         relates
                                                               2..*                dependency              optional                   groupCardinality
     individualCardinality                   Name : {unique}                1..*                                        2..*   0..1
                                0..1    1                                                                                                   Min
             Min                                                                                                                            Max
             Max                  is_associated_to

         Root uniqueness/multiplicity                                                                      Properties belonging to a single
                                                                                                                         reusable element
         Reusable elements uniqueness/multiplicity                                                                    Association of individual
                                                                                                                      cardinalities to artefacts
         Dependency completeness
                                                                                             Non-overlap of the properties that belong
         Non-overlap of the artefact in                                                                 to the same reusable element
         a same model
27                                                                                           Optional dependencies in group cardinality

<!-- Page 28 -->
              Dependencies among common PLM elements
                                             Product LineModel
                             has_root
                                                                  has_reusableElement
                         1..*
                                                                              1..*
                                                                                             belongs_to      property
                                                                 reusableElement                           Name: {unique}
                             root                                                            1                 Type
                                                                                                    0..*      Value
                                                                 is_a
                              is_a
                                                                                      is_a
                                                                                                   is_a                     groups
                                                 artefact         relates
                                                               2..*                dependency              optional                   groupCardinality
     individualCardinality                   Name : {unique}                1..*                                        2..*   0..1
                                0..1    1
                                                                                                                                            Min
             Min                                                                                                                            Max
             Max                  is_associated_to

            Predicates:
            •has_root(M, R) returns true if the artefact R is a root of the product line model M , and false otherwise.
            •has_reusableElement(M, R) returns true if there is a reusable element R in M, and false otherwise.
            •belongs_to(R, P) reuturns true if P is a property of R, and false otherwise.
            •is_a(A, B) returns true if B is a subclass of A, and false otherwise.
            •relates(D, [A1, A2]) : evaluates if there a list of artefacts [A1, A2, …, Ai] that are related to a dependency D.
            •is_associated_to(A, IC): evaluates if there is an individual cardinality IC associated to an artefact A.
            •groups(GC, [O1, O2]) returs true if the optional dependencies O1 and O2 belong to the group cardinality GC.
            •isOptional(M, A): returs true if the artefact A is modeled as optional in the model M, and false otherwise.
            •oneProduct(M): returns true if a given PLM M allows the configuration of at least one product, and false otherwise.
            •oneProductWithConstraint(M,C): returns true if M allows the configuration of at least one product that respects a constraint C.
            •find(M, n): returns true if n different products can be derived from a PLM M, and false otherwise.

28          Functions:
            isPLMofOptional(O), semanticOf(M), eraseOneDependency(M, D),isPLMofDependency(D)

<!-- Page 29 -->
                                                                                                                                                                    Generic Metamodel
                                                                             Product LineModel

                                                        1..*
                                                                                                                              1..*
                                                                                                                                             belongs_to       property

     The case of Feature Models
                                                                                                          reusableElement                                   Name: {unique}
                                                          root                                                                               1
                                                                                                                                                                Type
                                                                                                                                                    0..*       Value

                                                                                                                                                                             groups
                                                                                  artefact                 relates
                                                                                                        2..*                  dependency                    optional                   groupCardinality
                                  individualCardinality                        Name : {unique}                       1..*                                                2..*   0..1
                                                               0..1      1                                                                                                                   Min
                                          Min                                                                                                                                                Max
                                          Max                    is_associated_to

                                                                                    Feature Model
                                                                                                                                                                   Feature Model Metamodel
                                                                      attribute
                                                                Name: {unique}
                                                                   Domain                0..*
                                                                                                                                                            1..*
                                                                                                                       2..*
                                                                                                    1                                 from 0..*
                                                                                                             feature                              dependency
                                                               featureCardinality
                                                                                                                                       to 0..*
                                                                         Min                0..1         Name : {unique}
                                                                                                    1
                                                                         Max
                                                  1

                                                      root
                                                                                                                                     {complete, disjoint}
                                                  groupCardinality
                                                                                          2..*
                                                       Min                                         optional                 mandatory             requires         excludes
29
                                                                                  0..1
                                                       Max

<!-- Page 30 -->
            Conformance checking

              Consistency verification

              Conformance checking

      In conformance checking “it is checked that a
      model satisfies the constraints captured in the
     meta-model, i.e., that the model is indeed a valid
     instance of the meta-model” (Paige et al. 2007).

<!-- Page 31 -->
       Typology of verification criteria
                                              PLM Correctness

                1. Conformance checking criteria              2. Semantics-related criteria

                                                                                 2.3 Redundancy-free
     Root uniqueness/                          Non-overlap of the
       multiplicity                              properties that
                                               belong to the same                         Non- redundant
                                                reusable element                           dependencies
     Reusable elements
        uniqueness/
        multiplicity                         Non-overlap of                 2.2 Error-free
                                              the artefacts
           Dependency                                                                           Non-false
           completeness                     Optional                                            optional
                                         dependencies in                                        artefacts
                Properties              group cardinalities
             belonging to a                                                                   Non-dead
                                                                2.1 Expressiveness
             single reusable                                                                  artefacts
                               Association of individual
                 element       cardinalities to artefacts                                 Attainable
                                                                Non-void    Non-false      domains

<!-- Page 32 -->
                                                  UNIX                                    MacOS X

            Process              Shell            Kernel            FileSystem         UserInterface
                                                      <0..1>
     AllocatingMemory                     Cdrom_atech          Support_usb              Graphical
                                                                                    WidthResolution
     AccomplishingDataTransfer                       Pcmcia_support                 HeightResolution

     Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

                                                 UNIX                           MacOS X

                  Process        Shell      Kernel         FileSystem      UserInterface

                         Support_usb                                          Graphical
                                                                        WidthResolution : 1024
                            AllocatingMemory                            HeightResolution : 768

32                                         AccomplishingDataTransfer

<!-- Page 33 -->
                                                         Feature Model

     FM meta-model
                                            attribute
                                          Name: {unique}
                                             Domain            0..*
                                                                                                                       1..*
                                                                                       2..*
                                                                          1                      from 0..*
                                                                                 feature                     dependency
                                          featureCardinality
                                                                                                  to 0..*
                                                Min               0..1        Name : {unique}
                                                                          1
                                                Max
                                  1

                                   root
                                                                                                {complete, disjoint}
                                  groupCardinality              2..*
                                       Min                               optional        mandatory           requires           excludes
                                                        0..1
                                       Max

                     Conformance checking

                                                                              UNIX                                               MacOS X

                               Process             Shell                      Kernel                  FileSystem                UserInterface

     FM                   AllocatingMemory                      Cdrom_atech
                                                                                 <0..1>
                                                                                                Support_usb                       Graphical
                                                                                                                              WidthResolution
                         AccomplishingDataTransfer                            Pcmcia_support                                  HeightResolution

<!-- Page 34 -->
                                                           Feature Model

          FM Meta-model
                                              attribute
                                            Name: {unique}
                                               Domain            0..*
                                                                                                                         1..*
                                                                                        2..*
                                                                            1                      from 0..*
                                                                                   feature                     dependency
                                            featureCardinality
                                                                                                    to 0..*
                                                  Min               0..1
                                                                            1
                                                                                Name : {unique}
                                                  Max
                                 1

                                     root
                                                                                                  {complete, disjoint}
                                  groupCardinality
                                                                  2..*
                                       Min                                 optional        mandatory           requires         excludes
                                                          0..1
                                       Max

                                                                        Represent it

     CLP representation   feature(IdFeature, Name, LIdAttributes).
                                                                                           dependency(IdDependency,
                                                                                           IdFeature1, IdFeature2,
                          attribute(IdAttribute, Name, Domain).                            DependencyType).

     of the meta-model
                          root(IdFeature).                                                 groupCardinality(LIdDependencies,
                          featureCardinality(IdFeature, Min, Max).                         Min, Max).

<!-- Page 35 -->
                     feature(IdFeature, Name, LIdAttributes).
                     root(IdFeature).
                     attribute( IdAttribute, Name, Domain).
                     dependency(IdDependency, IdFeature1,
                     IdFeature2, DependencyType).
                     groupCardinality(LIdDependencies, Min, Max).
                     featureCardinality(IdFeature, Min, Max).

                                   Conforms to
     Conforms to
                   (1) root(fea1).
                   (2) feature(fea1, 'UNIX',[]).
                   (3) root(fea2).
                   (4) feature(fea2, ‘MacOSX',[]).
                   (5) feature(fea3, ‘UserInterface', []).
                   (6) feature(fea4, ‘Graphical', [att1,att2]).
                   (7) attribute(att2, ‘HeightResolution ', [600,768]).
                   (8) dependency(dep1, fea1, fea3, optional).
                   (9) dependency(dep2, fea2, fea3, requires).
35                 (10) dependency…

<!-- Page 36 -->
                       Conformance rules – Example 1
                                                    Root uniqueness/multiplicity

     Formalization
                      ∀M,∃R.producLineModel(M)˄ root(R)˄ has_root(M,R)      adapted
                                                                             from

                          In our feature-based formalism, product line models and
                               product models should have one and only one root.

                        (1) conformance_1(LRootId) :-

     Implementation
                        (2)   findall(FeatureId, root(FeatureId), LRootId),

                        (3)   length(LRootId, N),

36                      (4)   N \ == 1.

<!-- Page 37 -->
                      Conformance rules – Example 2
                                      Optional dependencies in group cardinalities

     Formalization
                      ∀G,∃X1,∃X2.groupCardinality(G) ˄ optional(X1) ˄        adapted
                      optional(X2) ˄ X1 ≠ X2 ˄ isPLMofOptional(X1) =          from
                      isPLMofOptional(X2) ˄ groups(G, [X1, X2])

                            Features intervening in a group cardinality dependency
                                                 should not be mandatory features

                      (1) conformance_2(DepId, FeatureId) :-

     Implementation
                      (2) groupCardinality(LDepId, _, _),

                      (3) member(DepId, LDepId),

37                    (4) dependency(DepId, _, FeatureId, mandatory).

<!-- Page 38 -->
     Conformance Checker
      of Feature Models
         Built in GNU Prolog 1.3

<!-- Page 39 -->
                                                                                  Conformance checking.
                                    Validation of our approach with 49 FMs up to 10000 features
                                     35              (1)                                                       20                  (2)                                                                  35             (3)
                                     30                                                                                                                                                                 30
                                     25                                                                        15                                                                                       25
                                     20                                                                                                                                                                 20
                                                                                                               10
                                     15                                                                                                                                                                 15
                                     10                                                                          5                                                                                      10
                                      5                                                                                                                                                                  5
                                      0                                                                          0                                                                                       0
                                    Time                                                                      Time                                                                                     Time
                                    (ms)   1                10         100           1000          10000      (ms)       1                 10            100             1000             10000        (ms)   1               10        100           1000           10000
                                                                                                                                                                                  Number of features
                                               Number of features                                                                                                                                                 Number of features
                                                                     Some feature-based product line models                             Features intervening in a group cardinality                                                      A feature should not have two
                                                                       should not have more than one root                             relationship should not be mandatory features                                                      attributes with the same name

                                     35           (4)                                                           70                                        (5)                                           160                             (6)
                                     30                                                                         60                                                                                      140
                                     25                                                                         50                                                                                      120
                                                                                                                                                                                                        100
                                     20                                                                         40
                                                                                                                                                                                                         80

     Execution time (ms)
                                     15                                                                         30
                                                                                                                                                                                                         60
                                     10                                                                         20                                                                                       40
                                      5                                                                         10                                                                                       20
                                      0                                                                              0                                                                                    0
                                    Time                                                                       Time                                                                                    Time
                                    (ms)
                                           1                10       100            1000         10000         (ms)      1                 10            100             1000            10000         (ms)   1                10       100            1000          10000
                                                                                                                                                                                                                  Number of features
                                               Number of features   Two features should not                                     Number of features       One feature must not be optional                                              Two features cannot be required and
                                                                     have the same name                                                                  and mandatory at the same time                                                mutually excluded at the same time

                                                                                                               35                  (7)
                                                                                                               30
                                                                                                               25
                                                                                                               20
                                                                                                               15
                                                                                                               10
                           Log 10 (Number of features)                                                           5
                                                                                                                 0
39                                                                                                            Time
                                                                                                              (ms)       1                 10            100             1000              10000
                                                                                                                             Number of features
                                                                                                                                                       Each dependency relates two
                                                                                                                                                        or several different features

<!-- Page 40 -->
             Semantics-related
                verification

     Semantics-related verification is about
       the identification of non-structural
         defects on product line models.

<!-- Page 41 -->
           Semantics-related verification
                                               PLM Correctness

                 1. Conformance checking criteria             2. Semantics-related criteria

                                               Non-overlap of the                   2.3 Redundancy-free
     Root uniqueness/
       multiplicity                              properties that
                                               belong to the same
                                                reusable element                               Non- redundant
     Reusable elements                                                                          dependencies
        uniqueness/
        multiplicity                         Non-overlap of the
                                                 artefacts                    2.2 Error-free

           Dependency                                                                              Non-false
           completeness                     Optional                                               optional
                                         dependencies in                                           artefacts
                                        group cardinalities
        Properties belonging                                                                    Non-dead
                                                                  2.1 Expressiveness
         to a single reusable                                                                   artefacts
               element          Association of individual
                                cardinalities to artefacts                                    Attainable
                                                                Non-void      Non-false        domains

<!-- Page 42 -->
                     Semantics-related verification
                 Example: Non-void product line models
                                                  UNIX

            Process            Shell            Kernel           FileSystem         UserInterface
                                                    <0..2>
     AllocatingMemory                                           Support_usb          Graphical
                                          Cdrom_atech
                                                                                 WidthResolution
     AccomplishingDataTransfer                     Pcmcia_support                HeightResolution

     Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

                getOneSolution(M)                     “false”             Void model

<!-- Page 43 -->
          Semantics-related verification
      Example: Non-void product line models
     A void PLM is defined as a model that does not permit
               the configuration of any product.

          Formalization by the following Boolean function:

      nonVoidPLM(M) ≙ producLineModel(M) ∧ find(M,1)

                           Algorithm:

                 nonVoidPLM(PLM M) {
                       Answer = getOneSolution(M);
                       If (Answer ≠ “false”){
                                Write (Answer);
                       }
                       Else{
                                Write (“Void PLM”);
                       }
43               }

<!-- Page 44 -->
                         Semantics-related verification
                          Example: Non-dead features
                                                  UNIX

            Process              Shell            Kernel            FileSystem       UserInterface
                                                      <0..1>
     AllocatingMemory                     Cdrom_atech             Support_usb          Graphical
                                                                                   WidthResolution
     AccomplishingDataTransfer                       Pcmcia_support                HeightResolution

     Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

                                              UNIX

                           Process                   FileSystem

                                 Shell      Kernel                   UserInterface is a dead feature

                                 AllocatingMemory           AccomplishingDataTransfer

<!-- Page 45 -->
                           Semantics-related verification
                            Example: Non-dead features
     An artefact is dead if it cannot appear in any product of the product line

                                           Formalization:
            ∀M, ∀R, ∀A . producLineModel(M) ˄ reusableElement(R) ˄
            artefact(A) ˄ has_reusableElement(M, R) ˄ is_a(R, A) ˄
                       oneProductWithConstraint(M, ‘A>0’)

                                             Algorithm:
          DeadArtefacts(PLM M) {
                    DeadArtefactsList = all artefacts of M;
                    For (each variable V de DeadArtefactsList) {
                    Product = oneProductWithConstraintn(M, “V > 0”);
                              If (Product = “false”) {
                                        Write (“The artefact ” + V + “ is dead”);
                              }
                              Else {
                    Erase V and all the other non-zero variables in Product, from DeadArtefactsList;
                              }
                    }
45        }

<!-- Page 46 -->
     Semantics-related verification. Example: Non-dead features
                                                             UNIX

                    Process                Shell                             FileSystem
                                                            Kernel                                UserInterface
                                                                <0..2>
              AllocatingMemory                      Cdrom_atech           Support_usb              Graphical
                                                                                               WidthResolution
              AccomplishingDataTransfer                       Pcmcia_support                   HeightResolution

             Graphical→ relation([WidthResolution, HeightResolution], {[800, 600], [1024,768], [1366,768]})

      0   If the model is not void:

      1 deadArtefactsList = [ UNIX, Process, Shell, Kernel, AllocatingMemory, AccomplishingDataTransfer, FileSystem,
                           UserInterface, Graphical, Cdrom_atech, Pcmacia_support, Support_usb].

      2 oneProductWithConstraint(M, ‘Kernel > 0’)

      3 P1 = [UNIX=1, Process=1, Shell=1, Kernel=1, AllocatingMemory=1, AccomplishingDataTransfer=1, FileSystem=1,
          UserInterface=0, Graphical=0, Cdrom_atech=1, Pcmacia_support=1, Support_usb=0]

      4 deadArtefactsList = [UserInterface, Graphical, Support_usb].
      5 oneProductWithConstraint(M, ‘UserInterface > 0’)                 “false”          UserInterface is a dead feature

<!-- Page 47 -->
                   Multi-model verification
             The case of Dopler variability models
                             Decision model                                                         Asset model
       to represent the product line’s  problem space
                                    What to buy?                                           to represent the solution space
                                          (name: scope; expected val 1:1):
                                   {“assemble yourself”, “complete suite”})

           isTaken(¬scope)                        scope==“assemble yourself”

                Buy a glossary?                                           Which tools?
               (name: glossary;                         (name: tools; expected val 1:3):
             expected val: bool)                                   {“CW”, “DK”, “PK”})

      Height >= 600 &&
                                               contains(tools, “CW”)
      Height <= 1680
                                 Width?                       Default resolution?
                         (name: width;                         (name: resolution;
                  expected val: number)                         expected val 1:1):
                                                                  {“800x600”, …})

                  if(resolution==”800x600”)then width=800

47   Visibility Cond.          Decision Effect                  Validity Cond.                 Inclusion Condition

<!-- Page 48 -->
                    Domain-specific verification
          Example: Non-void (DOPLER) product line models
     A void PLM is defined as a model that does not permit the configuration of
                                   any product.

                   Formalization by the following Boolean function:

               nonVoidPLM(M) ≙ producLineModel(M) ∧ find(M,1)

                                    Algorithm:

                          nonVoidPLM(PLM M) {
                                Answer = getOneSolution(M);
                                If (Answer ≠ “false”){
                                         Write (Answer);
                                }
                                Else{
                                         Write (“Void PLM”);
48                              }
                          }

<!-- Page 49 -->
     Exercise: How to proceed to know if the models is void or
          not, and how to find the dead feature(s) if any?

<!-- Page 50 -->
      The first step to verify PLMs with a solver is to
     transform them into the language of the solver

           Concept                   CP representation
               Root                           Root = 1
            Mandatory                     Father < = > Child
             Optional                      Father >= Child
             Requires                  Requiring ==> Required
                                           Alternatively
                                   (1 – Requiring) + Required > 0
            Exclusion                  Excluding * Excluded = 0
                                             Alternatively
                                 (1 – Excluding) v ( 1 – Excluded) > 0
         Group cardinality   M*Father ≤ Child1+...+ChildN ≤ N*Father
50                                                                       (Mazo 2011)

<!-- Page 51 -->
     The first step to verify PLMs with GNU Prolog is to
       transform them into the GNU Prolog language
                               Create a fact that represents the PLM
                                                pl(L):-
                               Create the list of variables of the PLM
                              L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
                                           Give a domain to
                                             the variables
                                          fd_domain (L, 0, 1),
                                                 Root
                                               Root #= 1,
                                               Mandatory
                                               Root #= F1,
                                                F4 #= F8,
                                                F1 #= F6,

<!-- Page 52 -->
     The first step to verify PLMs with GNU Prolog is to
       transform them into the GNU Prolog language

                                                  Optional
                                                 F1 #>= F5,
                                                 F4 #>= F9,
                                                 F3 #>= F7,
                                                   Requires
                                              (1 - F8) + F7 #> 0,
                                              (1 - F5) + F9 #> 0,
                                              Another way to
                                           represent the requires
                                                F8 #==> F7,
                                                F5 #==> F9,

<!-- Page 53 -->
     The first step to verify PLMs with GNU Prolog is to
       transform them into the GNU Prolog language

                                                  Excludes
                                           (1 - F3) + (1 - F8) > 0,
                                           (1 - F5) + (1 - F3) > 0,

                                             Another way to
                                              represent the
                                                exclusions
                                               F3 * F8 #= 0,
                                               F3 * F5 #= 0,

                                                 Groupal
                                           Root #= F2 + F3 + F4,

<!-- Page 54 -->
     To verify a PLM with the help of a solver we need it as a Constraint
     program and some times we also need a “verification constraint”

      F5 =1,                             This is the “verification constraint”
        PLM as a Constraint Program

      Root=1,
      F4 <=> F8,
      Root <=> F1,
      F1 <=> F6
                           This part
                                                               SOLVER
      F1 >= F5,
      F4 >= F9,            is
      F3 >= F7,            satisfiable
      (1 - F8) + F7 > 0,
      (1 - F5) + F9 > 0,
                                                           There is no solution
      (1 - F3) + (1 - F8) > 0,
      (1 - F5) + (1 - F3) > 0,
      Root = F2 + F3 + F4,                                 F5 is a dead feature

<!-- Page 55 -->
              All the “verification constraint” for the different verification criteria

        Defect                                  Verification constraint

      Void model          It is not required since the constraint program is already Unsatisfiable.
                        It is not required. This defect is solved if the defects regarding dead and
       False PLM
                                             false optional elements are fixed.
                        A verification constraint must be created to force that the potential dead
                       element to analyze belongs to at least one product of the PL. For instance,
     Dead elements
                        to analyze whether F5 is dead of not, we add the verification constraint:
                                                         F5 #= 1
                           A verification constraint must be created to force that the optional
     False optional       elements take the 0 value (i.e., are are not selected). For instance, to
        element            analyze whether the optional feature F5 is really optional, the verif.
                                                   constraint is: F5 #= 0
                        The verification constraint must represent the negation of the potential
                                         redundant dependency to be analyzed.
     Redundancies
                        For instance, to analyze whether the exclusion dependency between F3
                       and F8 is redundant or not, the verification constraint is: 1 – (F3 * F8 #= 0)

<!-- Page 56 -->
     Homework: verify if this evolved model is void or not

<!-- Page 57 -->
                          Now we have the PLM in GNU Prolog.
                 To compile it: consult ('nameOfTheFile.pl').
                       To verify that the PLM is not void: pl(L).
     pl(L):-
     L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
     fd_domain(L, 0, 1),
     Root #= 1,                                Root
     Root #= F1,
     F1 #= F6,                 Mandatory
     F4 #= F8,                                             SOLVER
     F1 #= F5,
     F4 #>= F9,
                               Optional
     F3 #>= F7,
     F8 #==> F7,                                        There is no solution
                               Requires
     F5 #==> F9,
     F3 * F8 #= 0,
                               Excludes                  The PLM is void
     F3 * F5 #= 0,
     Root #= F2 + F3 + F4,          Group cardinality
     fd_labeling(L).

<!-- Page 58 -->
                         Typology of verification criteria
                                                                               PLM Correctness

                                           1. Conformance checking criteria                         2. Semantics-related criteria

                                                                                  Non-overlap of the
                                                                                                                                  2.3 Redundancy-free
                        Root                                                   properties that belong to
                uniqueness/multiplicity                                       the same reusable element
                  ∀ M, ∃ R .                                        ∀M, ∀R, ∀P1, ∀P2 . producLineModel(M)
                                                                            ˄ reusableElement(R) ˄                           Non- redundant
              producLineModel(M)
                                                                        property(P1) ˄ property(P2) ˄                         dependencies
                 ˄ root(R) ˄                                             has_reusableElement(M, R) ˄        redundancyDependency(D) ≙ dependency(D) ˄
                has_root(M, R)                                      belongs_to(R, P1) ˄ belongs_to(R, P2)       (semanticOf(isPLMofDependency(D)) =
                                                                        ˄ P1 ≠ P2 → P1.Name ≠ P2.Name semanticOf(eraseOneDependency(isPLMofDependency(D), D))
               Reusable elements uniqueness/
                                                                            Non-overlap of the                            2.2 Error-free
                        multiplicity
                                                                         artefact in a same model
         ∀M, ∃R . producLineModel(M)                  ∀M, ∀R1, ∀R2, ∀A1, ∀A2 . producLineModel(M) ˄                                   Attainable domains
           ˄ reusableElement(R) ˄                              has_reusableElement(M, R1) ˄                       ∀M, ∀R, ∀A. Domaini . producLineModel(M) ˄
                                                               has_reusableElement(M, R2) ˄
          has_reusableElement(M, R)                                                                                    reusableElement(R) ˄ artefact(A) ˄
                                                        reusableElement(R1) ˄ reusableElement(R2) ˄
                                                       artefact(A1) ˄ artefact(A2) ˄ is_a(R1, A1) ˄                has_reusableElement(M, R) ˄ is_a(R, A) ˄
                     Dependency completeness         is_a(R2, A2) ˄ (A1 ≠ A2) → (A1.Name ≠ A2.Name)               oneProductWithConstraint(M, ‘A= A.Domaini’)
             ∀M, ∀R1, ∀D, ∃R2, ∃R3, ∃A1, ∃A2 .                     Optional dependencies in                                         Non-false optional artefacts
         producLineModel(M) ˄ reusableElement(R1) ˄                                                                                 ∀M, ∀R, ∀A . producLineModel(M) ˄
                                                                      group cardinalities
        reusableElement(R2) ˄ reusableElement(R3) ˄        ∀G, ∃X1, ∃X2 . groupCardinality(G)                                       reusableElement(R) ˄ artefact(A) ˄
       dependency(D) ˄ has_reusableElement(M, R1) ˄        ˄ optional(X1) ˄ optional(X2) ˄ X1                                     has_reusableElement(M, R) ˄ is_a(R, A)
                has_reusableElement(M, R2) ˄                  ≠ X2 ˄ isPLMofOptional(X1) =                 2.1 Expressiveness              ˄ isOptional(M, A) →
         has_reusableElement(M, R3) ˄ is_a(R1, D) ˄         isPLMofOptional(X2) ˄ groups(G,                                         oneProductWithConstraint(M, ‘A=0’)
       artefact(A1) ˄ artefact(A2) ˄ is_a(R2, A1) ˄                     [X1, X2])
      is_a(R2, A2) ˄ relates(D, [A1, A2]) ˄ A1 ≠ A2.                                                                             Non-dead artefacts
                                                         Association of individual
                                                                                                                                ∀M, ∀R, ∀A . producLineModel(M) ˄
                         Properties belonging to a       cardinalities to artefacts                                             reusableElement(R) ˄ artefact(A) ˄
                                                                                                  Non-void
                          single reusable element   ∀C, ∀A1, ∀A2 .
                                                                                                                                has_reusableElement(M, R) ˄ is_a(R, A)
                                              individualCardinality(C) ˄                                                        ˄ oneProductWithConstraint(M, ‘A>0’)
           ∀P, ∀R1, ∀R2 . property(P) ˄                                   nonVoidPLM(M) ≙
                                             artefact(A1) ˄ artefact(A2)                       Non-false
               reusableElement(R1) ˄          ˄ is_associated_to(A2, C) producLineModel(M) ∧   nonFalsePLM(M) ≙
58   reusableElement(R2) ˄ belongs_to(R1, P) ˄ is_associated_to(A1, C) →     find(M,1)
                                                        A1 = A2                              producLineModel(M) ∧
           ˄ belongs_to(R2, P) → R1 = R2
                                                                                                                                    find(M,2)

<!-- Page 59 -->
                                            Semantics-related verification.
                                      Validation with 43 FMs up to 2000 features
                  20                                                               1                                                          25000
                                (1)                                               0,8         (2)                                             20000             (3)
                  15
                                                                                  0,6                                                         15000
                  10
                                                                                  0,4                                                         10000
                   5                                                              0,2                                                          5000
                   0                                                               0                                                               0
                                                                                                                                              ms
                   ms 0               500         1000      1500          2000    ms 0              500      1000        1500         2000             0          500        1000       1500         2000

                                                                    N° Features             False FMs - VariaMos             N° Features           Non Attainable Domains - VariaMos           N° Features
                                        Not Void FMs - VariaMos

                  10000                                                           40                                                          10000
                   8000               (4)                                                    (5)                                               8000               (6)
                                                                                  30
                   6000                                                                                                                        6000
                                                                                  20
                   4000                                                                                                                        4000
                   2000                                                           10                                                           2000
                        0                                                          0                                                               0
     Execution     ms                                                                                                                         ms
                            0               500    1000      1500         2000    ms 0              500      1000        1500         2000              0         500        1000       1500         2000
     time(ms)
                                 Dead Features - VariaMos           N° Features                                                 N° Features                                                    N° Features
                                                                                        Redundant Relationships - VariaMos                             False Optional Features - VariaMos

                 Number of features

<!-- Page 60 -->
                                       Scalability: VariaMos vs. FaMa

     Execution time (ms)

60                         Log 10 (Number of features)

<!-- Page 61 -->
          Diagnosis & fixing
     Find the source of defects in the PLMs
              and fix these defects

<!-- Page 62 -->
     Let’s diagnose, by manual inspection, why the
                      model is void

<!-- Page 63 -->
     Let’s diagnose, by manual inspection, why the
                      model is void

<!-- Page 64 -->
     Let’s try to fix the defect which make the model void:
        Erasing some constraints (e.g., the exclusions)?

<!-- Page 65 -->
                   However, erasing these two constraints is not enough.
                  To compile it: consult ('nameOfTheFile.pl').
                        To verify that the PLM is not void: pl(L).
     pl(L):-
     L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
     fd_domain(L, 0, 1),
     Root #= 1,
                                                              SOLVER
                                Root
     Root #= F1,
                                                                  pl(L).
     F1 #= F6,
                                 Mandatory
     F4 #= F8,
                                                           There is no solution
     F1 #= F5,
     F4 #>= F9,
                                 Optional
     F3 #>= F7,                                             The PLM is void
     F8 #==> F7,
     F5 #==> F9,                Requires
     F3 * F8 #= 0,
                                 Excludes
     F3 * F5 #= 0,
     Root #= F2 + F3 + F4,       Group cardinality
     fd_labeling(L).

<!-- Page 66 -->
     Let’s try to fix the defect which make the model void by relaxing
       the cardinality [1..1] to [1..3], and then diagnosing it again

                              3
                              /

<!-- Page 67 -->
               And then: consult ('nameOfTheFile.pl').
                   To verify that the PLM is not void: pl(L).
     pl(L):-
     L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
     fd_domain(L, 0, 1),
     Root #= 1,                Root                           SOLVER
     Root #= F1,
     F1 #= F6,                                                    pl(L).
                               Mandatory
     F4 #= F8,
     F1 #= F5,                                            There is one solution
     F4 #>= F9,                Optional
     F3 #>= F7,
     F8 #==> F7,                                         The PLM is NOT void
                               Requires
     F5 #==> F9,                                                    ;
     F3 * F8 #= 0,             Excludes
     F3 * F5 #= 0,                                      There is another solution
     Root #=< F2 + F3 + F4,
                                    Group cardinality
     F2 + F3 + F4 #=< Root*3,
67
     fd_labeling(L).
                                                        The PLM is NOT false

<!-- Page 68 -->
     Let’s show a sub-set of constraints (MUS) that can be used to fix
               the model (erasing but also relaxing them)

<!-- Page 69 -->
     Exercise: Try to fix the defect which make the model
           void: erasing a MUS (e.g., one requires)

<!-- Page 70 -->
               To compile it: consult('nameOfTheFile.pl').
                    To verify that the PLM is not void: pl(L).
     pl(L):-
     L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
     fd_domain(L, 0, 1),                                                 SOLVER
     Root #= 1,                  Root
     Root #= F1,                                                              pl(L).
     F1 #= F6,
                                 Mandatory
     F4 #= F8,                                                       There is one solution
     F1 #= F5,                                               S = [1,1,0,0,1,1,1,0,1,1]
     F4 #>= F9,
                                 Optional                           The PLM is NOT void
     F3 #>= F7,
     F8 #==> F7,                                                                ;
                                Requires
     F5 #==> F9,
     F3 * F8 #= 0,                                                    There is NO more
                                 Excludes
     F3 * F5 #= 0,                                                        solutions
     Root #= F2 + F3 + F4,      Group cardinality                     The PLM is false
     fd_labeling(L).                                 And therefore this solution is not good in PLE

<!-- Page 71 -->
     Let’s fix the defect which make the model void
     (using another MUS) : Relaxing a dependency

<!-- Page 72 -->
           To compile it: consult('nameOfTheFile.pl').
                To verify that the PLM is not void: pl(L).
     pl(L):-
     L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
     Fd_domain(L, 0, 1),                                   SOLVER
     Root #= 1,                  Root
     Root #= F1,                                               pl(L).
     F1 #= F6,                  Mandatory
     F4 #= F8,                                         There is one solution
     F1 #>= F5,
     F4 #>= F9,                  Optional
                                                      The PLM is NOT void
     F3 #>= F7,
     F8 #==> F7,                                                 ;
                                Requires
     F5 #==> F9,
     F3 * F8 #= 0,               Excludes            There is another solution
     F3 * F5 #= 0,
     Root #= F2 + F3 + F4,      Group cardinality    The PLM is NOT false
     fd_labeling(L).

<!-- Page 73 -->
     Now, let’s verify if F5 is a dead feature

<!-- Page 74 -->
      Then, to verify that a certain element (e.g., F5) is not dead, we add the
     “verification constraint” F5 #= 1 into the CP and we should re-compile it:
                      consult('nameOfTheFile.pl').
                 Or as an external constraint : F5 #= 1, pl(L).
        pl(L):-
        L=[Root, F1, F2, F3, F4, F5, F6, F7, F8, F9],
        Fd_domain(L, 0, 1),                             The verification constraint (to verify
        F5 #= 1,                                        whether F5 is dead or not) inside the
        Root #= 1,                                      constraint program
        F4 #= F8,
        Root #= F1,
        F1 #= F6
        F1 #>= F5,
                                                                     SOLVER
        F4 #>= F9,
        F3 #>= F7,
        F8 #==> F7,
        F5 #==> F9,
                                                                    There is no solution
        F3 * F8 #= 0,
        F3 * F5 #= 0,
        Root = F2 + F3 + F4,
74                                                                 F5 is a dead feature
        fd_labeling(L).

<!-- Page 75 -->
     Exercise: diagnose, by manual inspection, why F5 is
      a dead feature? Why F4, F8 and F9 are also dead?

<!-- Page 76 -->
     Exercise: propose two solutions to fix the "F5 dead
                       feature" error

<!-- Page 77 -->
     Exercise: Diagnose and fix the rest of defects in this model

<!-- Page 78 -->
Why are side airbags incompatible with exterior rear-view
  mirrors in this Renault product line model excerpt?

                                       Airbags latéraux

                                       Rétro électriques

<!-- Page 79 -->
     MEthod to Diagnose InConsistent
                  PLMs

<!-- Page 80 -->
     Results of the experimentation of
                 Medic-PLM

<!-- Page 81 -->
      Results of the experimentation of
                  Medic-PLM

<!-- Page 82 -->
           Domain analysis (research opportunities)

     1. How to automatically discover (and guide the specification of) domain
         requirements and constraints?
     2. How to connect domain requirements and their formal representations?
     3. How to automatically transform natural language requirements into formal
         conceptual models (which languages?)?
     4. How to make evolve domain requirements maintaining the consistency of
         the entire product line?
     5. How to specify, represent and reason on domain non-functional
         requirements?
     6. How to deal with automatic diagnosis and correction of product line
         models (from the problem and solution space perspectives)?
