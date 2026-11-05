       SOFTWARE DEVELOPMENT




                           Get Ready for
                           Agile Methods,
                           with Care
                            Although many of their advocates consider the agile and plan-driven
                            software development methods polar opposites, synthesizing the two can
                            provide developers with a comprehensive spectrum of tools and options.


                                    aced with the conflicting pressures of accel-     I believe that both agile and plan-driven ap-



                           F
     Barry Boehm
     University of                  erated product development and users who        proaches have a responsible center and overinter-
     Southern California            demand that increasingly vital systems be       preting radical fringes. Although each approach has
                                    made ever more dependable, software             a home ground of project characteristics within
                                    development has been thrown into turmoil.       which it performs very well, and much better than
                           Traditionalists advocate using extensive planning,       the other, outside each approach’s home ground, a
                           codified processes, and rigorous reuse to make           combined approach is feasible and preferable.
                           development an efficient and predictable activity
                           that gradually matures toward perfection. Mean-          THE PLANNING SPECTRUM
                           while, a new generation of developers cites the             We can place various agile and plan-driven devel-
                           crushing weight of corporate bureaucracy, the rapid      opment approaches along a spectrum of increasing
                           pace of information technology change, and the           emphasis on plans, as Figure 1 shows. In this con-
                           dehumanizing effects of detailed plan-driven devel-      text, the term “plan” includes documented process
                           opment as cause for revolution. In their rallying cry,   procedures that involve tasks and milestone plans,
                           the Manifesto for Agile Software Development             and product development strategies that involve
                           (http://www.agileAlliance.org), and in columns1,2        requirements, designs, and architectural plans.
                           such as those the “Ongoing Debate” sidebar                  Compared to unplanned and undisciplined hack-
                           describes, these developers call for a revitalized       ing, agile methods emphasize a fair amount of plan-
                           approach to development that dispenses with all          ning. Their general view, though, places more value
                           but the essentials. Unsurprisingly, many developers      on the planning process than the resulting docu-
                           who favor plan-driven methods have reacted to the        mentation,1 so these methods often appear less plan
                           manifesto with scathing criticism.                       oriented than they really are. Although hard-core
                             Real-world examples argue for and against agile        hackers can use agile principles to claim that the
                           methods. Responding to change has been cited as          work they do is agile, in general these methods have
                           the critical technical success factor in the Internet    criteria, such as Extreme Programming’s 12 prac-
                           browser battle between Microsoft and Netscape.           tices, that help determine whether an organization
                           But overresponding to change has been cited as the       is using an agile method or not.
                           source of many software disasters, such as the $3           Another encouraging trend is that the buzz of
                           billion overrun of the US Federal Aviation               agile methods such as XP is drawing many young
                           Administration’s Advanced Automation System for          programmers away from the cowboy role model
                           national air traffic control.                            and toward the more responsible agile methods.

64                    Computer                                                                                 0018-9162/02/$17.00 © 2002 IEEE
                                                            Ongoing Debate

                                                              In the Software Management column in Computer’s September and
                                                           November 2001 issues, Jim Highsmith and Alistair Cockburn summa-
                                                           rized and rationalized the shared value propositions embodied in the
The price that XP pays for this benefit, however, is       Manifesto for Agile Software Development. The developers of several
a reluctance by more conservative managers to              emerging software development methods, such as Adaptive Software
sanction a method called “extreme.”3                       Development (ASD), Agile Modeling, Crystal Methods, Dynamic System
   Plan-driven methods also have a responsible cen-        Development Methodology (DSDM), Extreme Programming (XP),
ter focused on major milestones and their overall          Feature Driven Development, Lean Development, and Scrum emphasize
content, rather than on micromilestones (or inch           the following values:
pebbles) locked into an ironbound contract. Ex-
cessively prespecified plans overconstrain the devel-         • individuals and interactions over processes and tools,
opment team even at minor levels of change in                 • working software over comprehensive documentation,
personnel, technology, or commercial off-the-shelf            • customer collaboration over contract negotiation,
upgrades. Such plans also provide a source of major           • responding to change over following a plan.
contention, rework, and delay at high-change lev-
els. On the other hand, when reviewing projects            That is, while there is value in the items on the right, agile method pro-
using the risk-driven spiral model, I find that to         ponents value the items on the left more.
keep from losing their way, such projects, particu-           Although their advocates have used each of these agile methods suc-
larly larger ones, need to have at least three major       cessfully in practice, critics who prefer process-based methods remain
anchor-point milestones to serve as project progress       skeptical. In a letter1 to Computer, Steven Rakitin indicates that in his
indicators and stakeholder commitment points.4             experience, the items on the right are essential, while those on the left
   Figure 1 also shows the location of the current         serve only as easy excuses for hackers to keep on irresponsibly throwing
software Capability Maturity Model and its suc-            code together with no regard for engineering discipline. He provides
cessor, the Capability Maturity Model Integrated,          “hacker interpretations” that turn agile value propositions such as
in the planning spectrum. Its proponents often use         “responding to change over following a plan” into chaos generators.
the software CMM in an overly restrictive and              Rakitin’s hacker interpretation of “responding to change over following
bureaucratic way, but it can be interpreted to             a plan” is roughly “Great! Now I have a reason to avoid planning and to
include some forms of milestone risk-driven mod-           just code up whatever comes next.”
els. Software CMM leaders are also showing how
liberal versus literal interpretations can include         Reference
major portions of XP as being software CMM-                 1. S. Rakitin, “Manifesto Elicits Cynicism,” Computer, Dec. 2001, p. 4.
compliant.5 We can also interpret the CMMI,
which adds process areas for risk management,
integrated teaming, and an organizational envi-
ronment for integration, to include agile methods.
                                                                                                                                   Inch-
COMPARING THE METHODS                                                                 Adaptive  Milestone       Milestone         pebble
   The agile and plan-driven approaches each have                                       SW     risk-driven     plan-driven     ironbound
strengths and weaknesses, as a direct comparison           Hackers       XP         development models           models          contract
                                                                                       …                 …
of several key areas shows.

Developers                                                                 Agile methods
   Alistair Cockburn and Jim Highsmith emphasize                                                              Software CMM
several critical people factors for agile methods: ami-
cability, talent, skill, and communication.2 Larry                                  CMM
Constantine’s independent assessment identifies a
potential problem for agile methods: “There are only
so many Kent Becks in the world to lead the team.         Figure 1. The planning spectrum. Unplanned and undisciplined hacking occupies
All of the agile methods put a premium on having          the extreme left, while micromanaged milestone planning, also known as inch-
premium people.…”6                                        pebble planning, occupies the extreme right.
   When you work with premium people, High-
smith and Cockburn’s statement that “A few                tic that 49.9999 percent of the world’s software
designers sitting together can produce a better           developers are below average.
design than each could produce alone”1 rings true.           This is not to say that agile methods require uni-
Without premium people, however, you’re more              formly high-capability people. Many agile projects
likely to get a design-by-committee mess. A signif-       have succeeded with mixes of experienced and
icant consideration here is the unavoidable statis-       junior people, as have plan-driven projects. The

                                                                                                              January 2002                  65
                              main difference is that agile methods derive        this, the traditional emphasis on having complete,
                              much of their agility by relying on the tacit       consistent, precise, testable, and traceable require-
     Agile methods derive     knowledge embodied in the team, rather than         ments will encounter difficult to insurmountable
     much of their agility    writing the knowledge down in plans.7               requirements-update problems. Yet this emphasis
       by relying on the        When the team’s tacit knowledge is suffi-         is vital for stable, safety-critical embedded soft-
       tacit knowledge        cient for the application’s life-cycle needs,       ware.
                              things work fine. But there is also the risk that
       embodied in the        the team will make irrecoverable architec-          Architecture
      team, rather than       tural mistakes because of unrecognized short-          The agile manifesto values working software
          writing the         falls in its tacit knowledge. Plan-driven           over comprehensive documentation, and empha-
       knowledge down         methods reduce this risk by investing in life-      sizes simplicity: maximizing the amount of work
                              cycle architectures and plans, and using these      not done. This principle can be interpreted in many
           in plans.
                              to facilitate external-expert reviews. In doing     ways. Most are quite good, but some interpreta-
                              so, however, they accept a risk that rapid          tions can cause problems. For example, based on
                              change will make the plans obsolete or very         the YAGNI precept: “You Aren’t Going to Need
                              expensive to keep up to date.                       It,” XP advocates doing extra work to get rid of
                                                                                  architectural features that do not support the sys-
                        Customers                                                 tem’s current version. This approach works fine
                           In USC’s rapid-development electronic services         when future requirements are largely unpredictable.
                        projects, we have found that unless customer par-         However, in situations where future requirements
                        ticipants are committed, knowledgeable, collabo-          are predictable, this practice not only throws away
                        rative, representative, and empowered, the                valuable architectural support for them, it also cre-
                        developed products generally do not transition into       ates problems with customers who want develop-
                        use successfully, even though they may satisfy the        ers to believe that their priorities and evolution
                        customer. Participants in the XP 2001 “Customer           requirements are worth accommodating. Some
                        Involvement in XP” workshop reached similar con-          agile methods such as Crystal and DSDM do more
                        clusions.8 Agile methods work best when such cus-         architectural preplanning.
                        tomers operate in dedicated mode with the                    As with requirements, plan-driven methods that
                        development team, and when their tacit knowledge          emphasize heavyweight architecture and design
                        is sufficient for the full span of the application.       documentation will encounter difficult to insur-
                        Again, though, these methods risk tacit knowledge         mountable problems in keeping up with rapidly
                        shortfalls, which the plan-driven methods reduce          changing requirements. On the other hand, if the
                        via documentation and use of architecture review          architecture anticipates and accommodates re-
                        boards and independent expert project reviews to          quirements changes, plan-driven methods can keep
                        compensate for onsite customer shortfalls.                even million-line applications within budget and
                                                                                  schedule. Walker Royce provided a good example
                        Requirements                                              of such an effort in his description of the CCPDS-
                          Highsmith and Cockburn emphasize that agile             R project.9
                        approaches “are most applicable to turbulent, high-
                        change environments.” According to their world            Refactoring
                        view, organizations are complex adaptive systems             With great developers and small systems, the
                        in which requirements are emergent rather than            assumption that refactoring is essentially free is
                        prespecifiable.1 However, while agile manifesto           valid. If so, the YAGNI approach is low-risk.
                        tenets such as the second principle—welcome               However, empirical evidence indicates that with
                        changing requirements, even late in development—          less-than-great developers, refactoring effort
                        offer great potential for success, developers can mis-    increases with the number of requirements or sto-
                        apply them, with disastrous results.                      ries. For very large systems, our Pareto analysis of
                          Plan-driven methods work best when developers           rework costs at TRW indicated that the 20 percent
                        can determine the requirements in advance—                of the problems causing 80 percent of the rework
                        including via prototyping—and when the require-           came largely from “architecture-breakers,” such as
                        ments remain relatively stable, with change rates         architecture discontinuities to accommodate per-
                        on the order of one percent per month. In the             formance, fault-tolerance, or security problems, in
                        increasingly frequent situations in which the             which no amount of refactoring could put Humpty
                        requirements change at a much higher rate than            Dumpty back together again.

66                 Computer
                                                                                   High P(L): inadequate plans
                                                                                   High S(L): major problems                   High P(L): plan breakage, delay
                                                                                   (oversights, delays, rework)                High S(L): value capture delays




                                                                RE = P(L) × S(L)
Size
   Cockburn and Highsmith conclude that “Agile
                                                                                                                  Sweet spot
development is more difficult for larger teams,” but
they cite occasional successful larger agile projects                              Low P(L): few plan                                     Low P(L): thorough
with up to 250 people.2 Larry Constantine finds                                              delays                                                 plans
                                                                                   Low S(L): early value                                  Low S(L): minor
agile methods highly attractive for small projects,                                          capture                                                problems
but he concludes that “The tightly coordinated
teamwork needed for these methods to succeed
becomes increasingly difficult beyond 15 or 20                                                        Time and effort invested in plans
developers.”6
   Plan-driven methods scale better to large projects
like the million-line CCPDS-R project. But a                Figure 2. Risk exposure (RE) profile. This planning detail for a sample e-services
bureaucratic, plan-driven organization that requires        company shows the probability of loss P(L) and size of loss S(L) for several signifi-
an average of a person-month just to get a project          cant factors.
authorized and started won’t be very efficient on
small projects.                                             driven methods. Risk management offers another
                                                            approach that can help balance agility and disci-
Primary objective                                           pline and answer questions such as “How much is
   The first principle of the agile manifesto states that   enough?”4 I apply risk management here to address
“Our highest priority is to satisfy the customer            the question “How much planning is enough?”
through early and continuous delivery of valuable              A central concept in risk management involves
software.” “Early” and “continuous” are reasonably          determining the risk exposure for a given course of
compatible goals for small systems developed by             action. To determine RE, you assess the probabil-
great people. But overfocus on early results in large       ity of loss, P(L), involved in a course of action, the
systems can lead to major rework when the archi-            corresponding size of loss, S(L), and then compute
tecture doesn’t scale up. In such cases, a good deal of     the risk exposure as the expected loss: RE = P(L) ×
planning will be necessary, in the spirit of the eighth     S(L). Loss can include profits, reputation, quality of
principle of Lean Programming: “Ban Local                   life, or other value-related attributes.
Optimization.”10 Some agile methods are experi-                Figure 2 shows risk exposure profiles for a sam-
menting with concepts similar to the “software archi-       ple e-services company with
tecture skeleton” used in the CCPDS-R project.
   Plan-driven methods are most needed in high-               • a sizable installed base and thus the desire for
assurance software. Scott Ambler, the originator of             high assurance,
agile modeling, says, “I would be leery of applying           • a rapidly changing marketplace and thus the
agile modeling to life-critical systems.”11 Another             desire for agility and rapid value, and
major set of objectives for the more traditional              • an internationally distributed development
plan-driven methods, and for the software CMM,                  team with a mix of skill levels and thus the
has been predictability, repeatability, and opti-               need for some level of documented plans.
mization. But in a world involving frequent, radi-
cal changes, having processes as repeatable and                The black curve in Figure 2 shows the variation
optimized as a dinosaur’s may not be a good objec-          in risk exposure from inadequate plans as a func-
tive. Fortunately, the CMMI and associated risk-            tion of the company’s level of investment in its pro-
driven methods provide a way to migrate toward              jects’ process and product plans. At the left, a
more adaptability.                                          minimal investment corresponds to a high P(L) that
                                                            the plans will have loss-causing gaps, ambiguities,
BALANCING AGILITY AND DISCIPLINE                            and inconsistencies. It also corresponds to a high
  Particularly in the e-services sector, companies          S(L) that these deficiencies will cause major project
with a large customer base don’t need just rapid            oversights, delays, and rework costs. At the right,
value or high assurance—they need both. Pure                we see that the more thorough the plans, the less
agility or pure plan-driven discipline alone can’t          probability that plan inadequacies will cause prob-
meet these needs. A mix of each is needed.                  lems, and the smaller the size of the associated
  Martin Fowler’s “Is Design Dead?”12 essay and             losses.
Jim Highsmith’s Adaptive Software Development13                The red curve in Figure 2 shows the variation in
book describe ways for combining agile and plan-            RE from market share erosion caused by delays in

                                                                                                                                   January 2002                  67
      Table 1. Home ground for agile and plan-driven methods.
      Home-ground area                         Agile methods                                          Plan-driven methods
      Developers                               Agile, knowledgeable, collocated, and collaborative    Plan-oriented; adequate skills; access to external knowledge
      Customers                                Dedicated, knowledgeable, collocated, collaborative,   Access to knowledgeable, collaborative, representative, and
                                               representative, and empowered                          empowered customers
      Requirements                             Largely emergent; rapid change                         Knowable early; largely stable
      Architecture                             Designed for current requirements                      Designed for current and foreseeable requirements
      Refactoring                              Inexpensive                                            Expensive
      Size                                     Smaller teams and products                             Larger teams and products
      Primary objective                        Rapid value                                            High assurance



                                                                                                               The blue curve in Figure 2 shows the sum of the
                                                                                                            risk exposures from inadequate plans and market
                                                                                                            share erosion. The very low and very high invest-
                                                                                                            ments in plans have high overall risk exposures,
                                                                                                            and the sweet spot when overall risk exposure is


         RE = P(L) × S(L)
                            Low S(L):                    Mainstream
                                                         sweet spot                                         minimized occurs in the middle, indicating “how
                            easy rework
                                                                                                            much planning is enough” for this company’s oper-
                                    Agile                                                                   ating profile.
                                  sweet spot
                                                                                                               With the sample company situation as a refer-
                                                                                                            ence point, we can run comparative risk exposure
                                                                                                            profiles for companies occupying the home ground
                                                                                                            of either agile methods or plan-driven methods, as
                                               Time and effort invested in plans                            summarized in Table 1.
                                                                                                               For example, Figure 3 shows the comparative RE
                                                                                                            profile for an e-services company with a small
     Figure 3. Comparative RE profile for an agile home-ground company with a small                         installed base, a rapidly changing marketplace, a
     installed base and less need for high assurance.                                                       collocated team of highly capable and collabora-
                                                                                                            tive developers and customers, and less need for
                                                                                                            high assurance. With this profile, the major change
                                                                                                            in risk exposure from Figure 2 involves less rework
                                                  Higher S(L):                                              loss from minimal plans because the team can
                                                  large system rework
                                                                                                            rapidly replan and refactor, thus the company’s
                                                                  Plan-driven
                                                                  sweet spot                                sweet spot moves to the left, toward agile methods.
                                                                                                               Figure 4 shows the corresponding RE profile for
                                                  Mainstream                                                a company in the plan-driven home ground, with


         RE = P(L) × S(L)
                                                    sweet
                                                     spot                                                   a more stable product line of larger, more safety-
                                                                                                            critical systems. Here, the major difference from
                                                                                                            Figure 2 involves more rework loss from minimal
                                                                                                            plans, with a resulting shift of the company’s sweet
                                                                                                            spot toward higher investments in plans.

                                                                                                            ASSESSING RISK EXPOSURE
                                               Time and effort invested in plans                               In practice, quantifying estimates of P(L) and S(L)
                                                                                                            is difficult. But if you’re combining agile and plan-
                                                                                                            driven methods, you can use each method’s home-
     Figure 4. Comparative RE profile for a plan-driven home-ground company that                            ground attributes to determine relative risks. So,
     produces large, safety-critical systems.                                                               for example, if your company or project fits an agile
                                                                                                            home-ground profile except for having a mix of
                                          product introduction. Spending minimal time in                    equally important customers with less-than-ideal
                                          planning will get at least a demo product into the                development representatives, you can reduce your
                                          marketplace early, enabling early value capture.                  risk exposure by conducting stakeholder require-
                                          Spending too much time in planning carries a high                 ments negotiations among the developers and cus-
                                          loss probability because of the time lost to planning             tomers. Then you can document the results to
                                          and because rapid changes will cause delays via plan              minimize the risk of future customer misunder-
                                          breakage. Longer planning times will also cause                   standings.
                                          higher-sized losses because the delays will let stronger             Or, if your project fits a plan-driven home-
                                          competitors capture most of the market share.                     ground profile except for highly volatile user inter-

68                                  Computer
face requirements, you can use risk-driven specifi-      References
cations4 to document those requirements that pose         1. J. Highsmith and A. Cockburn, “Agile Software
a high risk if they remain unspecified, such as crit-        Development: The Business of Innovation,” Com-
ical message formats, but to avoid documenting               puter, Sept. 2001, pp. 120-122.
volatile user interface requirements whose specifi-       2. A. Cockburn and J. Highsmith, “Agile Software
cation would be high risk. Risk-driven spiral meth-          Development: The People Factor,” Computer, Nov.
ods and frameworks such as the Rational Unified              2001, pp. 131-133.
Process (RUP),9 Model-Based Architecting and              3. L. Copeland, “Developers Approach Extreme Pro-
Software Engineering (MBASE),14 and the CMMI                 gramming with Caution,” Computerworld, 22 Oct.
provide guidelines for finding a good balance of             2001, p. 7.
discipline and flexibility, although the current          4. B. Boehm and W. Hansen, “The Spiral Model as a
CMMI approach needs more explicit support for                Tool for Evolutionary Acquisition,” CrossTalk, May
agility.                                                     2001, pp. 2-11; http://www.stsc.hill.af.mil/crosstalk/
                                                             crostalk.html (current Dec. 2001).
                                                          5. M. Paulk, “Extreme Programming from a CMM Per-
       gile and plan-driven methods both form part

A
                                                             spective,” IEEE Software, Nov.-Dec. 2001, pp. 19-
       of the planning spectrum. Despite certain             26.
       extreme terminology, each is part of the           6. L. Constantine, “Methodological Agility,” Software
responsible center rather than the radical fringe.           Development, June 2001, pp. 67-69.
Indeed, agile methods perform a valuable service          7. A. Cockburn, “Agile Software Development Joins
by drawing erstwhile cowboy programmers toward               the ‘Would-Be Crowd,’” Cutter IT J., vol. 15, no. 1,
a more responsible center.                                   2002, pp. 6-12.
   Both agile and plan-driven methods have a home         8. A. van Deursen, “Customer Involvement in Extreme
ground of project characteristics in which each              Programming: XP2001 Workshop Report,” ACM
clearly works best, and where the other will have            Software Eng. Notes, Nov. 2001, pp. 70-73.
difficulties. Hybrid approaches that combine both         9. W.E. Royce, Software Project Management: A Uni-
methods are feasible and necessary for projects that         fied Framework, Addison Wesley Longman, Read-
combine a mix of agile and plan-driven home-                 ing, Mass., 1998.
ground characteristics. Risk analysis of your pro-       10. M. Poppendieck, “Lean Programming: Part 2,” Soft-
ject’s characteristics versus a given method’s               ware Development, June 2001, pp. 71-75.
home-ground characteristics can help determine           11. S. Ambler, “When Does(n’t) Agile Modeling Make
the best balance of agile and plan-driven disciplines.       Sense?”; http://www.agilemodeling.com/essays/when
   Although information technology trends are                DoesAMWork.htm (current Dec. 2001).
moving us closer to agile methods’ emergent              12. M. Fowler, “Is Design Dead?” Extreme Program-
requirements and rapid change home-ground char-              ming Explained, G. Succi and M. Marchesi, eds.,
acteristics, increasing dependability concerns call          Addison Wesley Longman, Reading, Mass., 2001.
for measures best implemented with plan-based            13. J. Highsmith, Adaptive Software Development,
solutions. To meet these disparate needs, organi-            Dorset House, New York, 2000.
zations must carefully evolve toward the best bal-       14. B. Boehm and D. Port, “Balancing Discipline and
ance of agile and plan-driven methods that fits their        Flexibility with the Spiral Model and MBASE,”
situation. I expect we will see agile methods used           CrossTalk, Dec. 2001, pp. 23-28; http://www.stsc.
increasingly for projects such as financial services;        hill.af.mil/crosstalk/crostalk.html (current Dec.
electronic commerce; air traffic control; and dis-           2001).
tributed, mobile, semiautomated, network-centric
military or medical systems. ■



Acknowledgments
  This work was supported by the National
Science Foundation, the Department of Defense
Software Intensive Systems Directorate, and the          Barry Boehm is director of the University of South-
Affiliates of the USC Center for Software Engi-          ern California Center for Software Engineering.
neering, http://sunset.usc.edu.                          Contact him at boehm@sunset.usc.edu.

                                                                                                              January 2002   69
