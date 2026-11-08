<!-- Page 1 -->
Case Studies for
Method and
Tool Evaluation
and L.EUJZY PKXARD,
National Computing Centre
SHARI LAWRENCE
PFLEEGER,
City University
BARBARA
.
*
Casestudies help industry
evaluate the benefits of
methodsand toolsand provide
a cost-effectiveway to ensure
that processchangesprovide
the desiredresults. However,
unlike formal experimentsand
surveys, casestudiesdo not have
a well-understoodtheoretical
basis. This article provides
guidelinesfor organizing and
and&zing casestudiesso that
they producemeaning@ results.
52
KITCHENHAM
Y
ou have read about a tive improvement?
new technique or tool in IEEE Software
Norman Fenton, Shari Lawrence
or elsewhere, and you are considering Pfleeger, and Robert Glass suggest
its use on your project. If it worked for that rigorous experimentation is needsomeone else, how do you know it will
ed to evaluate new technologies and
work for you? The last decade has seen their effects on our organizations,
explosive growth in the number of processes, and products.2 Such scientifsoftware-engineering
methods and ic investigation is essential to undertools, each one offering to improve
standing our processes and products,
some characteristic of software, its to increasing our customers’ confidevelopment, or its maintenance. With
dence in our products, and to making
an increasing awareness of the compet- software engineering’a science rather
itive advantage to be gained from con- than an art.
tinuing process improvement, we all
Suppose you have decided to evaluseek methods and tools that will make ate a technology. How do you prous more productive and improve the ceed? Do you do a survey? An experiquality of our software. But disaster ment? A case study? In this article, we
discuss the conditions under which
can result from introducing inapproeach type of investigation is appropripriate technology to a software-production department.’ How do we ~ ate. Then, because good case studies
ensure that our changes lead to posi- 1 are as rare as they are powerful and
07407459/94/§04
w D 1994 IEEE
JULY
1995

<!-- Page 2 -->
informative, we focus on how to do a
proper and effective case study.
Although they cannot achieve the scientific rigor of formal experiments,
case studies can provide sufficient
information to help you judge if specific technologies will benefit your own
organization or project. Even when
you cannot do a case study of your
own, the principles of good case-study
analysis will help you determine if the
case-study results you read about are
applicable to your situation.
EMPIRICALINVESTIGATION
METHODS
In their landmark paper, Victor Basili,
Richard Selby, and David Hutchens
described a framework for quantitative
software-engineering studies.3 They
defined software-engineering experiments in terms of a two-dimensional
classification scheme:
+ Single-projectstudies,which examine objects across a single team and a
single project.
+ Multiproject studies, which examine objects across a single team and a
set of projects.
+ Replicated-project studies, which
examine objects across a set of teams
and a single project.
+ Blocked subject-project studies,
which examine objects across a set of
teams and a set of projects.
Many published software-engineering experiments and case studies refer
to this classification scheme when
explaining how their studies were carried out, and it is very useful for understanding how the investigation was
done; the box on pp. 54 defines some
other common experimental terms.
However, we believe this classification
must be extended to consider the formality of the experimental design.
+ If the study focuses on a single
project, we prefer to ‘call it a casestudy,
because it is not possible to have a forma1 experiment without replication.
+ If the study involves many projects or a single type of project that is
replicated several times, it can be
IEEE
SOFTWARE
either a case study or a formal experiment. A formal experiment requires
appropriate levels of replication, and
experimental subjects and objects that
are chosen at random within the constraints of an experimental design.
+ If the study looks at many teams
and many projects, it
may be a formal experiment or a survey, de-
::i$% % ‘+it’itkt:
For all three investigative techniques, you must understand which
variables you can control and how to
measure the results. Formal experiments are sometimes difficult to conduct when the degree of control is limited. In order to impose full control,
formal experiments are
often small, which is a
DIFFERENT
METHODS
;;“;!‘,~;~e;h~y~
YIELD
DIFFERENT
from the laboratory to a
real project. Thus, case
ENVIRONMENTAL
studies are particularly
important for industrial
DESIGNS,
ANALYSIS
evaluation of softwareTECHNIQUES,
AND engineering
methods
and tools because they
CONCLUSIONS.
projects was planned or
post hoc. Thus, any
investigation
can be
considered a case study,
formal experiment, or
survey.
I
However, the differences among these
methods are also reflected in their
scale. By their nature, since formal
experiments must be carefully controlled, they are often small in scale:
“research-in-the-small.” Case studies
usually look at what is happening on a
typical project: “research-in-the-typiCal.”And surveys try to capture what is
happening broadly over large groups
of projects: “research-in-the-large.”
The differences among research methods is important because the experimental design, analysis techniques,
and conclusions they yield differ with
each type.
Choosinga technique.Thus, the choice
of investigative method depends in
part on the size and nature of the organization or project that you want to
investigate. It also depends on whether
you are studying the technology in
advance or after the fact. If you are trying to choose among several competing methods or tools, you may organize your study as a formal experiment
or a case study. If you are establishing
a pilot project to assessthe effects of a
change, you will probably choose to do
a case study. But after the change has
already been implemented across a
large number of projects, a survey will
help you to d ocument the benefits of
the change.
can avoid scale-up problems. Whereas formal
experiments sample over the variables
that are being manipulated (so that you
have a case representing each possible
situation), case studies sample from the
variables (representing the typical situation).
Case studies are easier to plan than
experiments but are harder to interpret
and difficult to generalize. A case study
can show you the effects of a technology in a typical situation, but it cannot
be generalized to every possible situation. For example, a case study may
show you that the use of object-oriented languages increases the level of
reuse on your banking-system project,
but it cannot verify that object orientation always improves reuse.
On the other hand, a formal experiment is likely to be useful for investigating alternative methods of performing self-standing tasks. For example,
you can perform an experiment to
assess the effects of several programdesign notations, such as flowcharts or
pseudocode, on the resulting reliability
or understandability.
Here, formal
experiments are appropriate because
+ self-standing tasks can be isolated
from the overall product-development
process and investigated formally
without being unrepresentative of the
way they are actually performed;
+ the results of self-standing tasks
53

<!-- Page 3 -->
EXPERIMENTAL TERMIWOLORY
The most important concept in a formal experiment is the evrperimewzl
~~/&esis, which defines what the experiment is intended to test. For example, a
software experiment may investigate if design.method .A leads to better qualit)
software than design method B. The corresponding hypothesis is: Design
method A yields better quality software than design method B.
,*
An experimental hypothesis usually asserts that different ireaments have different effects on experimental subjects or objects. In the context of software
experiments, a treatment is usually a method or tool. To draw any conclusions
from an experiment, there rnu~t be at least~U‘Otreatments,because hypothesis testing is comparative. Thus, the result of applying one treatment is compared with
the result of applying another treatment, to determine if there is any difference.
In many experiments, one of the treatments, the ~.oo,rt~ol,
is equivalent to the
status quo. The use of a new method or tool is then compared with the control.
However, software experiments have sometimes used the concept of a control
incorrectly by assuming that the alternative to using method X is not using the
method at all. However, if software staff using method X produce better products than software staff who do not use X, we cannot draw a valid conclusion
about the effectivenessof X. We cannot tell if the difference in product quality
is due to using X or simply due to the discipline of using a method. Moreover,
we cannot tell if “not using x” means not using a method at all, or whether the
status-quo group is actually using an informal or undocumented method of
some kind. This distinction may not be important if your project is deciding
whether or not to use X, but it is very important if another project or company
wants to apply experimental results generated by other research groups. Thus,
for experimental results to be generalized, there must be either two alternative
treatments or a well-defined control.
We measure the effects of the change in method or tool by measuring the
rarponrrvatiables,measurestaken to test the hypothesis. A difference iri treatments should be visible by examining differences in the values of the response
variables. The specific responsevariables should be derived directly from the
hypothesis. However, we often use surrogatemeasuresinstead of direct measures. For example, we may measure product reliability by counting the number
of faults detected during testing, even though reliability reflects problems
encountered by the user. Use of surrogate measuresshould be explicitly justified, becausepoor surrogate measurescan invalidate the results of an experime&.
Esprrimental subjectsand experi~~entalo&e@ are the people or things involved
in an experiment. In s&ware experiments, experimental subjects are individuals
or groups (teams) who use a method or tool. Experimental objects may be the
programs,.algorithms, or problems to which the methods or tools are applied.
Srute vti&
are measuresused to describe the experimental subject,
objects, and conditions. They capture facts that are likely to affect the
responsevariables.
i
can be judged immediately, rather than
awaiting the results of a long development process, so that the experiment
‘does not delay project completion; and
+ the results of self-standing tasks
can be assessedin isolation from other
project processes, so that small benefits can be identified and distinguished
from other variables:
-’ Intvw
r&s.’ The reward for a
well-designed exptiriment is results
ttfiat are easier to generalize. Formal
experiments are essential if you are
a.
54
looking for results that are broadl!
applicable across many types of pro,
jects and processes. Thus, forma
experiments are important for the soft
ware-engineering research community
but they may not be necessary for :
process-improvement
program tha
applies only to your particular organi
zation. For example, if you want tc
find out if using Ada will improve youl
project’s software, but you do not neec
to know if using Ada will improve
everyone’s software, then a forma
experiment may be overkill - you car
on a case studv.
/! relyHowever,
even with formal experiments you must be careful - formal
experiments do not generalize outside
the controlled experimental conditions. For example, if you demonstrate
that Ada improves real-time software
using a formal experiment, you cannot
guarantee Ada will improve software
for data-processing systems.
A case study is usually preferable to
a formal experiment if
+ the process changes are very wideranging. This means that the effect of
the change can be assessedonly at a high
level because the proces change represents many detailed changes
throughout the development process.
For example, if your project is changing from structured to object-oriented
methods, the repercussions could affect all aspects of your processes and
products - too much for you to control and measure.
+ the effects of the change cannot
be identified immediately. For example, if you want to know if a new design tool increases reliability, you may
have to wait until after delivery to assess the effect on failures.
Case studies are a standard method
of empirical study in various “soft” sciences such as sociology, medicine, and
psychology, but there is little formal
documentation available on how to
perform a proper case study; Robert
Ym’s book is a notable exception! However, Yin says that a case study should
be used when “a how or why question
is being asked about a contemporary
set of events, over which the investigator has little or no control.” For software engineering, we need case studies
to evaluate not only how or why, but
also “which is better.” In this article we
concentrate on the “which is better”
type of case study.
Survey advantages.By combining the
advantages of case studies (applicability
to real-world projects) with those of
experiments (replication that minimizes the problems of unusual results)
surveys are particularly useful. Surveys
JULY
1995

<!-- Page 4 -->
II
CHECKllSTFORCASE=STUDYPl.AWWlWG
This checklist, along with the seven steps to design and administer case
studies, will help you undertake a valid investigation.
Cars study context
1. What are the objectives of your case study?
2. What is the baseline against which you will compare the results of the
can be used to ensure that process
changes are successful throughout an
organization, because they collate experience from several different projects. However, data collection can
take a great deal of time, and the results may not be available until after
many projects are completed. In medical research, millions of patients may
undergo a particular treatment or use a
particular drug simultaneously, so it is
relatively easy to build up a large amount of data quickly. There are fewer
such opportunities in software engineering because it is more difficult to
find comparable experimental objects,
because software measures are not used
consistently, and because there is no
framework to review and collate experimental results.
The most common form of survey
is based on distributing questionnaires
that elicit opinions about the benefits
of technology.’ In a different type of
study, David Card, Frank McGarry,
and Gerry Page6 analyzed project data
from the University of Maryland’s Software Engineering Laboratory, looking
at the effects of technology on NASA’s
produc&ty and quality. Card’s group
analyzed existing data, rather than soliciting new information, a technique
used frequently in other disciplines.
No one type of empirical study is
better than any other; each is appropriate in particular situations. But experiments and surveys are traditional “hardscience” techniques that are supported
by a rich literature describing how to
design and administer them. Thus, for
the rest of,this article, we concentrate
on case studies in order to provide
more rigor to a neglected discipline of
investigation.
CASESTUDYGUIDELINES
There are seven steps to follow in designing and administering case studies:
1. Define the hypothesis.
2. Select the pilot projects.
3. Identify the method of comparison.
4. Minimize the effect of confoundIEEE
SOFTWARE
I’
evaluation?
3. What are your external project constraints?
Settingthe hypothesis
4. IVhat is your evaluation hypothesis?
5. How do you define, in measurable terms, what you want to evaluate (that
is, what are your response variables and how will you measure them)?
6. What are the experimental subjects and objects of the case study?
7. When in the development process or life cyle will the method be used?
8. When in the development or life cycle will the response variables be
measured?
vdiiting the hypothesis.
9. Can you collect the data you need to calculate the selected measures?
10. Can you clearly identify the effects of the treatment you want to evaluate
and isolate them from the other influences on the development?
11. Have you taken adequate procedures to ensure that the method or tool is
being correctly used?
12. If you intend to integrate the method or tool into your development
process, is the method or tool likely to have an effect other than the one
you want to investigate?
13. Which state variables or project characteristics are most important to
your case study?
14. Do you need to generalize the result to o;her projects? If so, is your pro
posed case study project typical of those projects?
15. Do you need a high level of confidence in your evaluation result? If so,
do you need to do a multiproject study?
Amlyhg the results
16. How are you going to analyze the case study results?
17. Is the tyPe of case study going to provide the level of confidence you
require?
ing factors.
5. Plan the case study.
6. Monitor the case study against
the plan.
7. Analyze and report the results.
These steps, which help ensure that
you can draw valid conclusions from
your investigation, are related to the
four criteria for research-design quality:4
+ Construct validity. Establish correct operational measures for the concepts being studied.
+ Internal validity. Establish a causal
relationship and distinguish spurious
relationships.
* External validity. Establish the
domain to which a study’s findings can
be generalized.
+ Experimental reliability. Demonstrate that the study can be repeated
with the same results.
For simplicity, we explain the steps
by assuming that you are testing a new
method on an actual software-development project. The box on this page
provides a checklist to help you plan a
case study.
Define the hypothesis. You begin by
defining the effect you expect the
method to have. This definition must
be detailed enough to make clear what
measurements are needed to demonstrate the effect. For example, if you
expect the new method to improve
productivity, you must state if effort
55

<!-- Page 5 -->
., -
Variable
MethodA
,
-----~
~~ -.-~-~~~~~~~~~~
~-~
Productivity
(function points/hour)
0.054
Size (function points)
118
168
Team experience (years)
1
1
Project management
experience bears)
1
1
Duration (months)
10
9
Function point
2s
27
and duration will be affected and how.
Without this information, you cannot
identify, measure, and collect the data
you need to draw valid conclusions.
It is also important to define what is
not expected to happen. Formally, we
can never prove hypotheses, we can
only disprove them, so we state a null
hypothesis to say that there is no difference between treatments. However,
research is proposed and funded based
on studying the alternative hypothesis:
there is a significant difference between treatments. The formal casestudy data analysis and evaluation addresses the null hypothesis, but you
should be ready to present your findings to managers and staff in terms of
the alternative.
The more clearly you define your
hypotheses, the more likely you are to
collect the right measures, test them
properly, and achieve construct validity. You must specify carefully what
really interests you. For example, process-improvement programs often define quality as the reduction of rework
and waste, presenting quality in terms
of defect rates from the perspective of
a software developer. However, this
definition differs from the user’s point
of view, in which operational reliability, efficiency, and usability reflect how
the user sees the software.
S&el the pilot pr*.
The pilot projects you choose must be representative of the type of projects your organization or company usually undertakes. Ideally, you can describe projects in terms of significant characteristics, such as application domain, programming language, design method,
and degree,ofmuse,andthenusethissta~
variable information to select projects
58
,’
I/
that are most typical. Your selection
should consider not only project type
but also the frequency with which each
type is developed. In practice, it may
be difficult to control the choice of casestudy projects. However, the extent to
which the case-study project is typical
of the organization is central to the
issue of external validity. If your case
study is atypical of the projects you
usually undertake, you will not get
very useful results.
* If the method applies to indiridrlal
:I
components, apply it at random
to some
I
product components find not to others. )
Here, the case study resembles a for- ~1
ma1 experiment, because you can use i
replicated values and standard statistical methods to analvze the response ”
variables. But because the projects are 1’
I
not drawn at random from the population of all projects, this is not a true
formal experiment. This kind of study
is useful for methods that may be
applied to different degrees. For
example, if you want to know what
level of structural testing is most costeffective, you can measure the level of
structural testing achieved for different modules and compare testing
effort and subsequent defect rates (or
defect-detection efficiency, if you have
seeded errors).
Identify the methodof comparison.Your
case study is by nature comparative,
contrasting the results of using one
method with the results of using another. To avoid bias and ensure internal validity, you must identify a valid,
basis for assessing the results of, the
case study. There are three ways to
organize your study to facilitate this
comparison:
l Select a sister project with which to
compare. Here, the case study involves
two projects, one that uses the new
method and another that uses the current method. Each project should be
typical of your organization, and both
should have similar characteristics according to the state variables you have
chosen. The box on this page describes
variants of this design.
l Compare the results of using the
new method against a company baseline.
In this case, your company gathers
data from projects as a standard practice and makes data available on such
things as average productivity
or
defect rate. You can compare the
response-variable values from your
case study, which involves a single project using the new method, to the corresponding variables from previous
projects or a subset of similar projects.
Minimize the effect of confoundingfactors. When the effect of one factor
cannot be properly distinguished from
the effect of another factor, the two
factors are confounded. For example, if
expert software engineers tested tool X
and novice software engineers tested
tool B, we cannot tell if the higher quality software produced by the experts
was the result of their experience or of
using tool A. Confounding factors can
affect the internal validity of the study.
Software case studies often have
confounding factors. The most significant are likely to be:
+ Learning hoi~’to use a method 01
tool as you try to assessits benefits. In
this case, the effects of learning to use
the method or tool might interfere
with the benefits of using it. For example, a decrease in productivity caused
by the learning curve might hide productivity improvements. To avoid this
effect, you must separate activities
aimed at learning how to use a new
technology from those aimed at evaluating it.
l
Using staff‘x-ho are either very
enthusiastic or z?ervskeptical about the
method or- tool. Staff morale can have a
large effect on productivity and quality. Differences in the response variable
JULY
1995

<!-- Page 6 -->
,
may be due to staff enthusiasm, or to
differences in enthusiasm from one
developer to another. To minimize this
effect, you must staff a case-study project using your normal staff-allocation
method.
l Comparing different application
types.For example, the productivity of
real-time system developers is usually
lower than for data-processing systems,
so case studies should not compare
across application domains. Appropriate selection of case-study projects
will avoid this problem.
Sometimes it is possible to control a
confounding effect rather than eliminate it. This usually involves designing
a multiproject case study in which the
different projects experience different
conditions. For example, to investigate
if the benefits of some method or tool
are influenced by application type, we
can identify a pair of case-study projects for each application type: one to
use the new method and one to use the
current method.
You can sometimes control confounding by measuring the confounding fac$or and adjusting the results
accordingly. For example, to study how
different levels of reuse affect quality
and productivity, you may select a casestudy project in which components
(specifications, designs, or code) are
being reused, measure the amount of
each component that is reused, the
development productivity
for each
component, and the defect rate. If you
suspect that, in addition to reuse, component complexity affects productivity
and defect .rates, you can record component complexity and use partial correlation to assess the relationship
between percentage reuse, productivity,
and defect rates, adjusted for complexity.
Plan the case study. Basili, Selby, and
Hutchens emphasize’that organizations
undertaking experiments should prepare an evaluation p1an.j This plan
identifies all the issues to be addressed
so that the evaluation runs smoothly,
including the training requirements,
IEEE
SOFTWARE
the necessary measures, the data-collection procedures, and the people
responsible for data collection and
analysis. Attention to detail contributes
to experimental reliability.
The evaluation should also have a
budget, schedule, and staffing plan
separate from those of the actual project. A separate plan and budget is
needed to ensure that the budget for
the evaluation does not become a contingency fund for the project itself!
Clear lines of authority are needed for
resolving the inevitable conflicts of
interest that occur when a development project is used to host an evaluation exercise.
Kruskall-Wallis method, which bases
the analysis on rank rather than on raw
data. (See the box on pp. 59 for references to useful analysis texts.) If you
have only one value from each method
or tool being evaluated, no analysis
techniques are available; you can only
present the results as we describe next.
ANALYSISMETHODSFORCASESTUDIES
Once you have designed your case
study and collected the data, you must
analyze it to determine what has happened and if the results are significant.
Suppose your case study involves a sister experiment with one response value
Monitor the case study against the plan. per project. For example, for each proThe case study’s progress and results ject participating in the study, you meashould be compared with the plan. In sure productivity in function points per
particular, ensure that the methods or staff hour using method A (the current
tools under investigation are used cor- method) and method B (the new merectly, and that any factors that would thod). Table 1, using real data,’shows
bias the results are recorded (such as what you might find.
The data in Table 1 indicate that
change of staff, or a change in the priority of the case-study projects). It is the projects are quite similar with respect to the state variables: size, team
essential that you audit conformance
to the experimental plan and record
experience, project-manager experianv changes. At the end
ence, duration, and function-point adjustment facof’the scdy, you should
write an evaluation report
tor. Thus, the results suggest that using method B
including recommendawould improve productions for changes in protivity. However, to draw
cedures.
that conclusion, you must
Analyzeand report the rebe sure that both projects
are typical of those unsults. The analysis prodertaken by the organizacedures you follow depend
tion. You must also underon the number of data
items you must analyze
stand the factors that are
(that is, the number of
important for software
response-variable values
deielopment in the orgathat are available). If your case study nization that might affect the successcompared treatments assigned to com- ful use of methods A and B.
In addition to looking at the quantiponents at random, you can use standard statistical methods, such as analy- tative results, you can investigate how
sis-of-variance and contingency tables. typical these projects are by reviewing
Data distribution is important in choos- the distribution of state-variable values
ing an analysis technique. If you can- over all the projects undertaken by the
organization. Simple frequency plots
not guarantee that the data is distribare useful for depicting the distribuuted normally (according to a bellshaped Gaussian curve), then you must tion of discrete state-variable values for
use nonparametric tests such as the an organization. For example, Figure 1
MAKE
SURE
TO
SEPARATE
THE
EVALUATION
BUDGET
SO HAT
ITDOES
NOT
GET
SPENT
ONTHE
PROJECT
ITSELF.
57

<!-- Page 7 -->
Upper
tail Oultien :
loo
0
zoo
300
so0
sizecr”2mpllinkr
600
7al
ow
Figure 1. Frequency plot showing the
distribution of discrete values, in this
case the team experience for the set of
projects from which the case-study projects were selected. The plot shows that
it is not unuszrai for a team to have
only one year oj‘experience.
Figure 2. Boxplot sbo7i’ing a distribution of‘data zlalaes over a xtide range, ia
this case the prodact size. Box plots are constructed from jiue statistics: the median, the upper jbrrrtb (or upper gua?i?ie), the lower fowtb,
the upper tail, and the
lower tail. The upper and iouer fourths are the 75- and 25-percentile points.
The upper tail is constructed by multiplying the box length &v 1.5, adding the
value to the upper jburtb, and truncating to the nearest actual value. The love7
tuii is constructed .$va similar process. Values that are larger than the ripper tail
or smaller than the lover tail are called outiiers.
shows the team experience for the set
of projects from which the case-study
projects were selected. As you can see,
it is not unusual for a team to have
only one year of experience.
When you have state variables that
cover a wide range of values (such as
counts or rat&), a boxplot can help
you evaluate the distribution of data
values, particularly when data values
are skewed. Figure 2 shows a boxplot
of product-size data.
Boxplots give a simple visual display
of the distribution of a data set and
help you see how representative a single point is. If the data set were distributed as a classic Gaussian (normal) distribution, the mean would be in the
center of the box, the tail lengths
would be approximately equal, and the
distance from the median to the upper
(or lower) tail would be approximately
three standard deviations.
It is clear from Figure 2 that the
product-size data set is skewed, and
that the two pilot projects were relatively small ones (in the lower 25-percent range). Thus, there is some doubt
about whether the case-study projects
were truly representative of the organization’s projects. Any productivity
improvements resulting from method
B might occur only on smaller projects.
Boxplots are also useful for constructing a company baseline. Figure 3
shows productivity distributions data
from 46 projects that used method A.
There are no outliers in the data set,
so the baseline for average projects is case studies were performed, fairly
some productivity value between the small teams (two to eight people)
upper (0.044) and lower (0.076) ~ worked on specific timcti’onal subsysfourths; the upper and lower tails give tems. Staff turnover was low, and peo- ‘i
the upper and lower bounds for the ple worked on the same team for many
organization. If you place the produc- years. The operating system was writtivity of a case-study project using
ten in a variant of Algol 68 and supmethod B on the figure as an asterisk, ported by a special-purpose database
it becomes clear that the case study environment that maintained records
had unusually high productivity com- of literals, data types, and module
pared to the company baseline. The
interfaces, all supported with configubaseline can be refined further by ration control.
reconstructing it using projects that
have similar state-variable characterisCase study 1. The first case study
tics to the case study.
used a single project to investigate if il
Fagan &swtions would increase software q&i+
%ithour’ resulting in a
SAMPl.ECASESTUDIES
decrease in productivity. FamtalI~, the
hypothesis stated that,rhe use of Fagan
To see how software-engineering
inspections ,has no effect ~4 quality or
case studies can be improved, we turn productivity; Forty-three oft the pronow to three studies”’ aimed at assess- ject’s 73 bragrams were given detailed
ing the benefits of Fagan inspections.“’ design inspections; the rest were not.
The studies represent not only the dif- Thus, iWas fiossihle to compare the
ferent tvnes we have discussed but also oostdesign fault nrofile of insuected
the many uroblems that can result
brograr& with the postdesign fault
from imbroper case-study planning
profile of uninspectcd programs. The
and administration.
response variables were fault counts
The first study compared differentand staff effort, with t5ults related to
ly treated components, the second where t~~v;ulPi~‘discired~ the major
used a company baseline, and the third
stage in the de+:t~p+en~.por>cess or
involved sister projects. Each study postrelease (for a six-month ,period).
was run for ICL’s VME development Total project effort and inspection
group. VME is a large general-purpose’ effort were both recorded.
operating system (approximately two
+ Design-inspectivrr sesnlts. The
million lines of code) that has been case-study procedure ensured that
under continual evolution since its first several productivin. and quality mearelease in the early 1970s. When the surements were m;~dc. The design
58
,I
JULY
1995

<!-- Page 8 -->
U S E F U L A N A L Y S IS T E X T S
+ W .G . C o c h r a n a n d G M . Cox, E x p e r i m e n t a lDesigns,2 n d ed.,J o h n W iley
& S o n s ,N e w York, 1957: S t a n d a r dstatistical text.
+ D.T. C a m p b e l l a n dJ. S tanley,E x p e r i m e n t a l a ? ~ d
Quasi-fiperi~zetal
DesignsfirR e s e a r c hR,a n dMcNally, Chicago, 1 9 6 6 :Practicalindustrial experimental design.
+ S .L. P fleeger,“E x p e r i m e n t a lD e s i g n a n d Analysisin Software
Vol. 1 No. 1, pp. I-20; D e s i g n
E n g i n e e r i n g , ”.InnuLr of S o j k w r e E n g i n e e r i n g ,
issuesfor softwareexperiments.
,
I
inspections detected 5 0 p e r c e n t of all
faults f o u n d for this d e v e l o p m e n t ( u p
to n i n e m o n t h s postrelease). T h e
inspections a c c o u n t e d for 6 p e r c e n t of
S u r v e yantdysis
the total d e v e l o p m e n t costs. T h e
+ W .G . C o c h r a n ,S a m p l i n gTecbniqzres,
2 n d ed.,J o h n W iley & S o n s ,N e w
fault-detection rate w a s approximately
York, 1963: Discussionof m e t h o d o l o g i c a lissuesof surveys,in particular h o w to
I.2 h o u r s p e r bult. H o w e v e r , a m a j o r
s a m p l ea finite p o p u l a t i o ns o that surveyresultsc a n b e generalized.
p r o b l e n l w a s that t h e r e w a s n o basis
+ D. C o g g o n ,G . Rose,a n d D.J.P. Barker,E p i d e m i o l o gfw
y the Uninitiated,
for identieing if these results w e r e
3rd. ed. , British MedicalJournal, L o n d o n , 1 9 9 3 :S u r v e yt e c h n i q u e su s e din
g o o d o r b a d b e c a u s et h e r e w a s n o t h medical research.
i n g to c o m p a r e t h e m with!
4 Postinspection
fa d rates. T a b l e 2
M a atdysis
s h o w s the m a i n r e s p o n s e variable + P .G . Hoel, introductionto Mathematical& & ties, 3rd. ed.,J o h n W iley &
the n u m b e r of faults detected s u b s e S o n s ,N e w York, 1 9 6 2 .
q u e n t to c o d e production, a s m e a s u r e d
+ S . S i e g e la n d NJ. Caste&m,Jr., N q a r e
fw the B e b a v h a i
SW
for e a c h g r o u p of m o d u l e s for different
Sciences,
2 n d ed., McGraw-Hill, N e w York, 1 9 8 8 :Classictext o n n o n p a r a m e t r i c
defect types. H o w e v e r , the m o d u l e s
analysistechniques.
w e r e not allocated to d e s i g n inspection
+ D.C. Hoaglin, F. Mosteller, a n dJ.W . Tukey, Un&rstandingExploratoty
randomly. In fact, the project staff seD a t a Analysis,J o h n W iley & S o n s ,N e w Yark, 1 9 8 3 ;D & P t i o n s of b o x p l o e
lected for inspection only those m o d a n d o t h e r exploratorydata-analysisIII& +
ules they t h o u g h t w e r e “difficult”;
“e a s y ”m o d u l e s w e r e not g i v e n d e s i g n j ~
mspectlons.
T h e l o w e r ovCrall-error rate indicates that the u n i n s p e c t e d p r o g r a m s
w e r e simpler. But the inspected p r o - i
F o ~ ~ ph es r 1 0 0 linesof c o d e
1 ’.
g r a m s r e v e a l e dtheir faults earlier in the ~
I/
C o d einspected
C o d enot inspected
d e v e l o p m e n t p r o c e s s t h a n the u n i n - 1
i
( 13,334linesof c o d e )
(8,852linesof c o d e )
, i
s p e c t e d p r o g r a m s . B y the time they )
r e a c h e dsystem test, inspectedp r o g r a m s
0.97
0.45
Code reading
a p p e a r e d to h a v e h i g h e r quality t h a n
Unit test
0.82
0.0x
u n i n s p e c t e dp r o g r a m s , a situation c o n firmed b y the postreleasefault rates.
0.36
0.20
Systemtest
* Proltiems ritb r d s estvdy 1. This
0.04
pilot project w a s c h o s e n b e c a u s e the
0.012
Customer
t e a m w a n t e d to participate. T h e r e w a s
2.0
1.54
I
n o formal selection to e n s u r e that the ~ Overall
I
pilot w a s representativeof typical ICL
projects. Furthermore, this predisposition to b e helpful p r o b a b l y b i a s e d the
results in favor of the inspection technique. But the m a j o r p r o b l e m with
this study w a s the n o n r a n d o m selection of m o d u l e s that w e r e subjected to
detailed d e s i g n inspections. T h e d e v e l o p m e n t staff m e m b e r s themselvesd e cided which modules would be given
detailed inspections, a n d they selected
only those that w e r e difficult. This w a s
a sensiblea p p r o a c h for the project, but
it h a d a disastrouseffect o n the e v a l u a - F i g u r e 3. Boxplot u s e dto constlzrcta c o m p a n ybaseline.In this irue, 4 6 projects
tion’s validity. H a d the allocation b e e n u s i n g m e t h o d A a r e c o m p a r e d with o n e project u s i n g nrethocl Il. T h e boxplot
r a n d o m , a n analysis-of-varianceo n the s h o w sthat this single c a s estudy b a d zznzzszzaliy
h i g h p r o d z h i ’i< v ~ ~ o l u p a r etod the ,m
p o s t d e s i g n quality of e a c h m o d u l e
c o m p a n ybaseline.
.~
T
‘I E E E
SOFTWARE
59
,

<!-- Page 9 -->
(measured in defects per hundred lines
of code) would have revealed if the
inspections made a significant difference. But because difficult modules
exhibit more defects than simple modules even after design reviews, this
analysis was not valid. Thus the only
useful result is the overall defect rate
for each major postdesign activity.
This problem could have been avoided
if the case study had been planned and
controlled as an activity in its own
right, rather than as an adjunct to the
development effort.
Other problems resulted from this
lack of planning. For example, several
other response variables were collected
but could not be properly interpreted
because there was no basis of comparison. Thus, it was impossible to tell if
inspections decreased productivity.
Casestudy 2. The second case study
looked at whether Fagan inspections
would increase software quality through
a cost-effective detection of defects. A
single project was used and compared
with a baseline made up of all other
concufrent projects. Thus, it was possi-
ble to compare the postdesign fault profile of the pilot project with the postdesign fault profile of other projects.
The response variables were fault
counts and staff effort. Here, faults
were again related to each major stage
in the development process. In addition, faults were classified as design or
coding faults. Total project effort, effort
for conventional testing, and inspection
effort were recorded. As before, the
pilot project was self-selected because
the development team was interested in
the inspection technique.
+ Design-inspectionresults. This second casestudy, involving the production
of a new subsystem of approximately
39,000 lines of code, gave results broadly similar to the first. However, because
this case study collected data on testing
and inspection effort, it was possible to
assessthe relative costs of fault detection and correction. The inspections
detected 41 percent of in-house faults
at a cost of 9 percent of the projectdevelopment effort. The cost-per-fault
was approximately 1.6 hours, with an
average cost-per-fault detected postdesign of 8.5 hours. This result suggests
REPLICATED PRODUCT DESIGN
It is sometimes possible to develop a product a second time using a different
development method. This is called a replicatedpladact design.To use it:
1. Replicate an existing product using the new method or tool.
2. Measure the responsevariables on both versions of the product.
3. Compare the two sets of response variables.
The advantageof this design is that some of the differences between the sister projects is eliminated because they both produce the same project.
However, usually only one of the products is produced under normal commercial conditions.
This method is often used when a research group wants to demonstrate the
superiority of a new method compared with current development methods.
However, if the research group also undertakes the replication project, the
results will be biased because the research group will usually have more experience with the new method than would the development staff and are more
motivated to see itsucceed.
These problems can be overcome if the research group sponsors the devel-
opment group to undertake both projects to commercial standards,and the
product that performs best in final system test (or acceptancetest) is the one
releasedto customers.
that inspections are a very cost-effective fault-detection method.
+ Postdesignfault profile. When the
fault profile of the pilot project postdesign was compared with the fault profile found for other projects during the
same time, it appeared that postdesign
faults were again being found earlier in
the development process, as Table 3
shows. However, the baseline does not
include any assessmentof variability.
+ Fault types. Table 4 shows the
types of fault found postdesign, indicating that inspections reduced the number of design faults but not the number
of interface faults (which can be regarded as a kind of design fault). These findings were reviewed with the development group, which pointed out that the
faults were found in code that interfaced to a subsystem developed by team
members who refused to attend inspections. Thus, they reasoned, the results
actually supported the need for inspections. This result emphasizes the importance of monitoring the pilot project for unexpected effects. If the interface problems had not been traced back
to the nonparticipating group, the results might have been misinterpreted.
+ Problems with casestudy 2. As in
the first case study, the pilot project
was not chosen using any formal selection process. However, the more
significant problems occurred at the
analysis stage. The construction of the
baseline would have been greatly improved by using a boxplot to indicate
the extent of natural variability. In some
circumstances, it might have been better to use a direct measure of faults
per hundred lines of code during system test as the response measure
rather than percentages. However, in
this particular environment, there was
a considerable variation in basic fault
rates from different types of project.
The pilot project was a new utility project and was expected to have lower
fault rates than some of the more complex enhancement projects; a baseline
based on faults per hundred lines of
code would have to have been derived
from a very small selection of similar
JULY
1995

<!-- Page 10 -->
lest Method
projects. A baseline based on internal
distribution of faults was valid for all
projects because they all use the same
development process.
Finally, it is important to note that
the case study used a surrogate measure of quality. Actual quality depends
on the defects found during use, but
the analysis was based on the defects
found during in-house testing. Thus
the conclusions may be misleading.
PertentogeFaults
Pilot Project
All Ptojetts
Code reading
57.5
37.6
Cnit test
38.4
SL.’
’ System test
4.1
11.2
!
1 F&Type
1
PercentageFaults
Pilot Project
All Projects
I
5.8
2.1
Casestudy 3. The third investigation
~ Interface
was not planned as a case study. Rather, 1 Design
8.1
13.3
it occurred naturally as two parts of the i
same project were developed in differ81.0
/ Code
70.3
ent ways. At first, the primary part of /
5.1
14.2
the project was planned; however, later ! Orher
a large additional functional development was required. The same team
produced both subprojects, and testing and number of modules. In addition,
hat is the next step?
on each was done by the same staff code from the subproject done without
Software-engineering experimember. Although these subprojects
design inspections was of poor quality mentation is a necessary adjunct to
were not selected to be part of a case (in terms of fault rates) and was more process improvement, and objective,
study, they were typical of the commerexpensive than the inspected code.
meaningful case studies can help us
cial projects undertaken by the group.
The case study is convincing be- understand our processes and control
Because the project manager want- cause the difference in results is so dra- the improvements. Many case studies
ed to get the second part of the project matic. In addition, many of the typical are performed, but few are done well.
completed as quickly as possible, he problems with case-study control and The case-study process is itself in need
did nor permit any detailed design in- variation were absent because the same of improvement.
spections. His unstated hypothesis was, personnel were involved, the same
Good case studies involve:
therefore, that detailed design inspec- development environment was used,
+ Specifying the hypothesis under
tions cause delays to product develop- and the applications were related.
test.
ment and do not have a major influ+ Problem with case&y 3. Clear+ Using state variables for project
ence on quality. In effect, what result- ly, the study was not planned in ad- selection and data analysis.
ed was a case study based on sister sub- Vance. Nevertheless, it conformed
+ Establishing a basis for comparprojects, with response variables de- quite well to case-study requirements
isons.
fined as time to complete production,
and resulted in sufficient information
+ Planning case studies properly.
effort, and fault rates.
to reject the hypothesis that inspec* Using appropriate presentation
+ Results. The results, shown in tions increase time to market and do and analysis techniques to assess the
Table 5, indicate that trading quality
not affect quality. However, this study results.
for productivity simply did not work,
is not completely without problems.
We must stop and assess each tool
and the hypothesis can be firmly re- The quality measure was based on and technology before we jump on a
jetted. The subproject without inspec- prerelease rather than postrelease de- promotional bandwagon. Even when
tions took far longer to produce than fects, again reflecting a developer’s
formal experiments are not available or
the much larger “high-quality” sub- rather than a user’s view of software possible, we can perform case studies to
project. Additional time and effort
quality. A more subtle problem indetermine if the tool or technology is
were needed to test the code that had volves whether or not the two parts of helpful on our typical projects. That is,
not been subject to design inspections. the project are really comparable. Ac- we need not wait until a method is
This diminished productivity is clear, cording to the subjective opinion of proven effective in every environment;
even though the state variables show the staff involved, the two subprojects we can run careful tests to see if the
were similar in complexity; however,
that the subproject without inspecmethod is useful in our particular envitions was much smaller than the other there were no objective measures to ronments.
subproject in terms of absolute size ~ confirm this claim.
But such investigation requires the
W
IEEE
SOFTWARE
61

<!-- Page 11 -->
,.
tioners who are seeking new or improved ways of developing and maintaining software.
The results of case studies are context-dependent, but we can be more
confident that a method is generally
beneficial if encouraging results are
reported by a number of different organizations under a number of different
conditions. We can also better under-
investment of time and effort, not only
in planning and carrying out the case
studies, but also in analyzing and
reporting the results. The findings of
academic experiments are often widely
publicized, as universities encourage
their staff to publish and disseminate
results. But the results of industrial case
studies, less often made available to the
public, are no less relevant to practi-
Lesley Pickard is an inde-
ACKNOWLEDGMENTS
This article is based on research undertaken as part of the Desmet project, a collaborative project funded by the UK Deparnnent of Trade and Industry and the Science and
Engineering Research Council. The aim of the project was to develop and validate a
methodology for evaluating software-engineering methods and tools. We are also indebted to the referees, who provided valuable suggestions that we have incorporated into the
final version.
REFERENCES
1. D.R. Lindstrom,
55-58.
“Five Ways to Destroy
a Development
2. N. Fenton, S.L. Pfleeger, and R.L. Glass, “Science
neers,” IEEE Sofnare, July 1994, pp. 86-95.
Project,” IEEE So$mare, Sept. 1993, pp.
and Substance: A Challenge
3. V.R. Basili, R.W. Selby, and D.H. Hutchens, “Experimentation
Tranmtimr
Software Eng., July 1986, pp. 758-773.
in Software
4. R.K. Yin, Case Study Research Design and Methods, Sage Publications,
5. C.R. Necco, R.N.W. Tsa, and K.W.
,v&mzgement, May 1989.
6. D.N. Card, F.M. McGarry,
ZEEE Tramactiom S@uare
stand the limits of methods and tools if
we get conflicting reports from different
casestudies.
We encourage you to assessthe work
of others, not only in terms of the issues
raised here, but also in terms of whether
it is applicable to your projects. And we
encourage you to publish your casestudy results, to the benefit of the general software-engineering community. +
Hoogeston,
“Current
and G.T. Page, “Evaluating
Eng., July 1987, pp. 845.851.
to Software
Engineering,”
IEEE
Beverley Hills, Calif.,
Usage of CASE Software,“~.
Software-Engineering
Engi-
pendent consultant. In the
last 10 years she has been
involved in researching the
use of statistical techniques
and software metrics for
the monitoring
and control
of software development.
Much of her work has been
part of European collabo&ive projec&. She has
written several technical papers.
Pickard received a BSc in applied mathematics
from Abertay University, Scotland, and a PhD in
computer science from the City University, London.
She is a fellow of the Royal StatIstical Society.
1984.
Systems
Technologies,”
a
7. J.-M. Desharnais, Analyze Statirtique de la Productivitie des Pnject de Developpment en Infonnatique
Partir de la Technique der Point des Fonction, master’s thesis, University of Quebec, Montreal,
1989;
in French.
8. B.A. Kitchenham,
A.P. Kitchenham,
and J.P. Fellows, “The Effects of Inspections
Quality and Productivity,”
ZCL Technical3., May 1986, pp. 112-122.
9. B.A. Kitchenham,
“Management
Metrics,” S&are
B. Lit&wood,
ed., Blackwell Scientific Publications,
10. M.E. Fagan, “Design and Code Inspections
IBMSystmJ.,
Mar. 1976, pp. 219-248.
on Software
Reliability Achievement and Asmment,
Barking, UK, 1987,~~. 113.124.
to Reduce Errors
in Program
Development,”
Barbara Kitchenham is a software-engineering
consultant at Britain’s National
Computing
Centre. Her interests are software metrics and their application to
project management, quality control, and evaluation of software technologies.
She was a programmer for [CL’s Operating System Division before becoming
involved with a number of UK and European research projects on software quality, software-cost estimation, and evaluation methodologies
for software technology. She has written more than 30 papers on software metrics.
Kitchenham
received a PbD from the University of Leeds. She is an associate
fellow of the Insitute of Mathematics and Its Applications and a fellow of the
Royal Statistical Society.
Address questions
@ “CC.C”.uk.
62
about this article
t” Kitchenham
at National
Computing
Centre,
Oxford
House,
Oxford
pal scientist at both the
Contel Technology
Center and Mitre. She is currently a visiting professorial research fellow at the
Centre for Software Reliability, investigating how
software-engineering
techniques affect software
quality. She has written two software-engineering
texm and several dozen articles.
Pfleeger received a PbD in informanon
technology from George iMason University. She is an
adviser to IEEE Sprctrum.
Rd., Manchester
Ml
7ED,
UK;
barbarakitchenham
JULY
1995

<!-- Page 12 -->

