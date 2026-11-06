<!-- Page 1 -->
See discussions, stats, and author profiles for this publication at: https://www.researchgate.net/publication/221390199

Validity Threats in Empirical Software Engineering Research - An Initial Survey.

Conference Paper · January 2010
Source: DBLP

CITATIONS                                                                                                 READS
121                                                                                                       3,105

2 authors, including:

               Ana Magazinius
               Chalmers University of Technology
               6 PUBLICATIONS 192 CITATIONS

                 SEE PROFILE

 All content following this page was uploaded by Ana Magazinius on 14 August 2014.

 The user has requested enhancement of the downloaded file.

<!-- Page 2 -->
   Validity Threats in Empirical Software Engineering Research - An Initial Survey

                                                 Robert Feldt, Ana Magazinius
                                          Dept. of Computer Science and Engineering
                                              Chalmers University of Technology
                                                SE-412 96 Gothenburg, Sweden
                                                Email: robert.feldt@chalmers.se

   Abstract—In judging the quality of a research study it is           In this study we survey how validity threats are analyzed in
very important to consider threats to the validity of the study     recent papers published in ESE and discuss the current state-
and the results. This is particularly important for empirical       of-the-art and what may have caused it. We then propose
research where there is often a multitude of possible threats.
With a growing focus on empirical research methods in               ways that can help in improving the analysis of validity
software engineering it is important that there is a consensus      threats. In particular we address the research questions:
in the community on this importance, that validity analysis is         • RQ1. What are the existing advice on and checklists
done by every researcher and that there is common terminology             for VTs in ESE?
and support on how to do and report it. Even though there are
                                                                       • RQ2. What is the current practice in discussing and
previous relevant results they have primarily focused on quan-
titative research methods and in particular experiments. Here             handling validity threats in research studies in ESE?
we look at the existing advice and guidelines and then perform         • RQ3. Is the current practice of sufficient quality and, if
a review of 43 papers published in the ESEM conference in                 not, how can it be improved?
2009 and analyse the validity analysis they include and which
threats and strategies for overcoming them that were given
                                                                       To limit the scope the survey presented here has been
by the authors. Based on this analysis we then discuss what         constrained to only cover one year of a major ESE publication
is working well and less well in validity analysis of empirical     venue. Because of this our results are only preliminary.
software engineering research and present recommendations              Section II below describes existing advice on validity
on how to better support validity analysis in the future.           threats in software engineering. In Section III we describe
   Keywords-Validity threats, Empirical research, Software en-      the methodology for the survey we have performed on VT
gineering, Research methodology                                     analysis and mitigation in ESE. Section IV gives the results
                                                                    of the survey and analyses them. Finally, Section V discusses
                      I. I NTRODUCTION                              the VTs of this study itself and future work, while Section
                                                                    VI concludes.
   Empirical research in software engineering (ESE) is
increasingly important to advance the state-of-the-art in a          II. VALIDITY IN S OFTWARE E NGINEERING R ESEARCH
scientific manner [1]. A critical element of any empirical
research study is to analyze and mitigate threats to the validity      Validity of research is concerned with the question of
of the results. A number of summaries, models and lists of          how the conclusions might be wrong, i.e. the relationship
validity threats (VTs) have been presented to help a researcher     between conclusions and reality [2]. This is distinct from the
in analyzing validity and mitigate threats [1, 2]. Many of          larger question of how a piece of research might have low
these results focus on VT analysis for quantitative research        quality since quality has more aspects than validity alone, for
such as experiments [1] while other consider VT analysis            example relevance and replicability. In non-technical terms
for qualitative research [2].                                       validity is concerned with ‘How the results might be wrong?’
   For a researcher in ESE it may not be clear if the existing      not with the larger questions of ‘How this research might be
checklists are consistent or which one applies to a particular      bad?’. In many cases they overlap, though.
study. In particular for qualitative ESE research this can be          Validity is a goal, not something that can be proven or
a problem since few studies with results specific to software       assured with the use of specific procedures. A validity threat
engineering has been presented. Furthermore, several recent         (VT) is a specific way in which you might be wrong [2].
results have pointed to problems in how ESE research is             In a validity analysis (VA) you identify possible threats and
conducted or reported in sub-areas [3, 4, 5]. In this paper,        discuss and decide how to address them. A specific choice
we want to analyse in particular how validity threats are           or action used to increase validity by addressing a specific
analysed and mitigated in ESE research studies. Ultimately          threat we call a mitigation strategy.
this will lead to additional support and guidelines for how            For quantitative research in software engineering, such as
to more consistently perform such analysis and mitigation           experiments, specific advice on validity analysis and threats
and thus increase the validity of future ESE results.               was given by Wohlin et al [1] structured according to previous

<!-- Page 3 -->
results from Cook et al [6]. Wohlin et al discuss four main            provide invalid information) and researcher bias (assumptions
types of validity threats: conclusion, internal, construct and         and personal beliefs of the researcher might affect the study)
external.                                                              as main threats. Maxwell focuses on the researcher and
   Conclusion validity focus on how sure we can be that the            lists description (of the collected data), interpretation (of
treatment we used in an experiment really is related to the            the collected data) and theory (not considering alternative
actual outcome we observed. Typically this concerns if there           explanations) as the main threats [2].
is a statistically significant effect on the outcome.                     Table I below summarizes the main validity threats that
   If there is a statistically significant relationship the Internal   have been discussed above.
validity focus on how sure we can be that the treatment
actually caused the outcome. There can be other factors that                          III. R EVIEW M ETHODOLOGY
have caused the outcome, factors that we do not have control              Below we describe how we selected the papers to be
over or have not measured.                                             included in the review, the overall process used and the
   Construct validity focus on the relation between the theory         forms used in the analysis of each paper.
behind the experiment and the observation(s). Even if we
have established that there is a casual relationship between           A. Selection of papers
the treatment of our experiment and the observed outcome,
the treatment might not correspond to the cause we think we               To limit the scope of our initial review we wanted to
have controlled and altered. Similarly, the observed outcome           select only recent papers published in ESE. This is also
might not correspond to the effect we think we are measuring.          motivated by the fact that ESE has been maturing and if we
   Finally, the External validity is concerned with whether we         would include too many years back these papers might not be
can generalize the results outside the scope of our study. Even        representative of current practice. Based on this we selected
if we have established a statistically significant casual relation     all full research papers published in the Empirical Software
between a treatment and an outcome and they correspond to              Engineering and Measurement (ESEM) conference in 2009.
the casue and effect we set out to investigate the results are         Even though this is a limited selection our assumption is
of little use if the cause and effect we have established does         that ESEM is the state-of-the-art conference on empirical
not hold in other situations.                                          software engineering research and as such can be expected
   For qualitative research methods there are not software             to have higher expectations, standards and experience of
engineering specific results and we have to turn to other fields       empirical research.
of study. Epistemologically qualitative research stretches                A total of 43 full papers was published in ESEM 2009
between positivism as one extreme and interpretivism as                and are thus included in our results and analysis below.
the other [7]. The two similar notions of subtle realism and
                                                                       B. Process for Review
anti-realism have also been used by some authors [8].
   The fundamental difference between the two resides in                  For each of the papers we read and filled in one form
the interepretivists belief that the humans differ from the            summarizing the type of and empirical content of the paper
subjects/objects of study in the natural sciences since social         (Paper form). For each validity threat or issue discussed in
reality has a meaning for humans. That meaning is the                  the paper we then filled in a form with detailed information
basis both for human actions and the meanings that humans              about each threat and any mitigation strategies mentioned
attribute to their own actions as well as the actions of               for it (VT form). The forms used are presented in Tables II
others [7]. Positivists on the other hand view humans as               and III respectively and described in more detail below.
any other data source that can be sensed, measured and                    The forms themselves were created in discussions between
positively verified [7].                                               the researchers based on the review of the existing literature
   Both positivistic and interpretivistic scientists are interested    on validity threats and analysis presented above. These initial
in assessing whether they are observing, measuring or                  forms were then piloted on a random selection of 4 papers
identifying what they think and say they are [9]. However,             which was reviewed independently by both authors. The pilot
since their research questions, methods and views on reality           test did not uncover any discrepancies between the analyses
differ, so do the methods to assess the quality of their               of the two authors. It only prompted clarification of where to
work. Positivists usually use natural sciences criteria: internal      record what and the exclusion of a redundant question. Since
and external validity, reliability and objectivity [7]. The            we used the same papers in this step this also validated that
interpretivists use a set of alternative criteria: credibility,        we had the same interpretation of the forms and used them
transferability, dependability and confirmability [10]. No             in the same way. We also discarded the idea of classifying
matter the criteria, there are threats to the validity of the          each identified threat since there is no clear unified model
research. Lincoln and Guba suggest reactivity (researchers             for how this can be done.
presence might influence the setting and subjects behaviour),             The remaining 39 papers was then reviewed by one of the
respondent bias (where subjects knowingly or unknowingly               authors and the corresponding forms filled in. During this

<!-- Page 4 -->
                                      Table I: Main types of Validity threats discussed in the literature.
 Validity threat type                  Example of typical questions to be answered
 Conclusion validity                   Does the treatment/change we introduced have a statistically significant effect on the outcome we measure?
 Internal validity                     Did the treatment/change we introduced cause the effect on the outcome? Can other factors also have had an effect?
 Construct validity                    Does the treatment correspond to the actual cause we are interested in? Does the outcome correspond to the effect
                                       we are interested in?
 External validity, Transferability    Is the cause and effect relationship we have shown valid in other situations? Can we generalize our results? Do the
                                       results apply in other contexts?
 Credibility                           Are we confident that the findings are true? Why?
 Dependability                         Are the findings consistent? Can they be repeated?
 Confirmalibity                        Are the findings shaped by the respondents and not by the researcher?

review work, whenever some aspect of a paper were unclear
the paper were discussed jointly by the authors.
   In total this resulted in 43 Paper forms and a total of                       Table II: Summary of ‘Paper form’ with questions for each
136 VT Issue forms filled out. One paper is excluded from                        analysed paper.
our analysis since it was a theoretical paper without any                           Question                         Alternatives
empirical content or any analysis of validity. Descriptive                          1. Software Engineering Per-     Business, Architecture/Technology,
statistics, aggregation and analysis of the forms was then                          spective?                        Process, Organisation, Other
                                                                                    2. Software Engineering Ar-      Requirements Engineering, Design
done cooperatively between the researchers.                                         eas?                             or Architecture, Implementation,
                                                                                                                     Testing or V&V, Management, Met-
C. Paper form                                                                                                        rics or Measurement, People is-
                                                                                                                     sues or Human factors, Economics,
   Table II presents the paper form that was filled out for                                                          Methodology, Other
each of the reviewed papers.                                                        3. Sub-area(s) within main       List main keywords in order of
                                                                                    area?                            decreasing importance
   The questions on the form aimed to characterize the                              4. Type of methodology or        Quantitative, Qualitative, Both, Un-
overall characteristics of the paper (Questions numbered                            outlook?                         clear
1-3), the research methods used (Q4-5), the type and amount                         5.    Research   Methodol-       Controlled Experiment, Experiment,
                                                                                    ogy(ies)?                        Survey, Case study (comparative),
of empirical material (Q6) and additional comments (Q7).                                                             Case study (exploratory), Multiple
For each of the VTs identified we then filled in a VT form                                                           Case Study, Design of Solution,
detailed below. We also noted a derived measure based on                                                             Improvement of Solution, Design
                                                                                                                     of Education, Design of Methodol-
whether there was zero (noted value ‘No’) or at least one                                                            ogy, Observation study, Grounded
(‘Yes’) VT forms filled out for each paper. All the sheets                                                           Theory Study
and the answers to each question were collected, sorted per                         6. Data sources and collection   Describe type as well as number of
                                                                                    methods?                         subjects/groups/companies etc
paper, in an excel sheet for further analysis.                                      7. Comments?                     Free form for any important addi-
                                                                                                                     tional comments
D. Validity threat form
   For each validity issue discussed in one of the papers we
used the form summarized in Table III to describe it.
   The first two questions on the form (Q1-2) asked the
reviewer to describe the validity threat and if the authors
gave the threat any ‘formal’ name according to Table II                          Table III: Summary of ‘Validity threat form’ with questions
above. Then two questions (Q3-4) were filled out for each                        for each validity issue.
mitigation strategy associated with a validity threat. One
                                                                                    Question                         Alternatives
questions focused on describing the mitigation strategy itself                      1. Summary of validity           Summarize based on how threat is
(in the authors own words) while the other asked the reviewer                       threat?                          described in the paper
to estimate which part of the study had been affected by                            2. Classification or naming of   Note according to validity threats
                                                                                    threat by author?                listed in Table I
the mitigation. The included parts to be judged were the                            3. Mitigation strategy for       Summarize strategy based on how
design, the collected data or the analysis of the results. If the                   threat?                          described in the paper
mitigation strategy had not actually been used but was just                         4. Mitigation strategy af-       Design of study, Implementation /
                                                                                    fected which part of study?      Collected data, Analysis of results,
noted as a possible future strategy it was marked as affecting                                                       Future work
the ‘Future Work’.
   The total time needed for reviewing each paper was also
noted in the excel sheet that collected all information.

<!-- Page 5 -->
Table IV: Num. of papers for different types of research            Table V: Num. of papers for different research methodologies.
methodology.                                                          Method                   Num. papers     Percentage    Avg. VTs
              Type of Method      Number      Percentage              Experiment                    9            21.4%         5.22
                Quantitative        30          71.4%                 Design of Solution            8            19.0%         1.38
                Qualitative         4            9.5%                 Case studies                  7            16.7%         4.14
                   Both             7           16.7%                 Multiple case studies         4             9.5%         2.25
                  Unclear           1            2.4%                 Design of Improvement         4             9.5%         1.25
                 TOTAL              42          100%                  Survey                        3             7.1%         4.33
                                                                      Design of Methodology         3             7.1%         1.67
                                                                      Controlled experiment         1             2.4%          11
                                                                      Design of education           1             2.4%           3
                                                                      Observation study             1             2.4%           2
                 IV. R ESULTS AND A NALYSIS                           Grounded theory               1             2.4%           2
A. Summary of quantitative data                                       TOTAL                        42            100%          3.26

   From the 42 paper forms included in the analysis only
one focused on the Business perspective, 11 on the Architec-
ture/Technology perspective, 28 on the Process perspective
and four on the Organisational perspective1 . One paper was
focused on Education.
   Table IV shows the distribution of papers for the differ-
ent types of research methodology (Q4 on ‘Paper form’).
Unfortunately the distribution is very skewed and have too
few Qualitative papers for us to be able to compare the two
different methodologies.
   Table V summarizes the number of papers and their
average number of validity threats for each research method-
ology employed. Overall 34 papers (79.1%) discussed at
least one validity threat while 9 papers (20.9%) lacked
any such discussion. We can see that interestingly enough
there seems to be a difference in the number of validity
threats that are discussed in quantitative studies compared to
qualitative ditto. If we consider the experiments, controlled
experiments and surveys as quantitative methods and consider
case studies, multitude case studies, observation study and
action research as qualitative (since the latter used grounded
theory it seems plausible), the former group considers an
                                                                    Figure 1: Boxplot of num. of validity threats for different
average of 5.46 validity threats while the latter considers 3.23.
                                                                    research methods
Since we cannot assume the number of validity threats follow
a normal distribution and since they are few, we compared
these differences in mean with the Wilcoxon rank sum non-
parametric statistical test. The difference between them are        69 identified strategies it was not possible to judge which
statistically significant at the α = 0.05 level (p = 0.029).        phase they affected. For the rest there is no clear trend, other
   Figure 1 shows a boxplot of the number of validity threats       than the fact that many mitigation strategies (26.5%) even
for the papers employing qualitative or quantitative research       if they are discussed are just mentioned as future work and
methods, respectively. We can see that the difference is quite      have not affected the results in the reviewed study at all.
clear as confirmed by the statistical test.
   The number of mitigation strategies (69) was much lower
than the number of validity threats (136) with an average
of only 1.60 mitigation strategies per paper and 0.49 per           Table VI: Num. of mititgation strategies that affects each
validity threat. So on average only for about half of the           phase.
validity threats that were discussed did the paper authors                   Affected phase              Num. strategies    Percentage
also discuss a way to overcome the threat.                                        Design                      20              31.2%
                                                                              Future Work                     17              26.5%
   Table VI lists the number of mitigation strategies deemed                     Analysis                     14              21.9%
to affect a certain phase of a study. We note that for 5 of the       Implementation / Data collection        13              20.3%
                                                                                 TOTAL                        64              100%
  1 Note that a few papers had more than one perspective

<!-- Page 6 -->
B. Analysis of validity threats in reviewed papers                 many researchers seem to describe threats based on their
   Almost no authors had classified their threats based on any     within-study terminology and understanding. The current
of the standard methods or names as presented in Section II.       terminology is more abstract which may limit its uptake and
The only widespread name was ‘Generalizability’ which is           use and thus the level of support it gives.
the same as External validity.                                        To remedy this situation we proposed that a new and
   A fairly common threat was the questioning of the ‘quality      simpler terminology is introduced that is more directly linked
of the raw data’, ‘limited sample size’ and ‘convenience           to the actual elements of the study and is adapted to the
sampling’. Quite common was also the use of different types        type of method, data source and analysis method employed.
of biases to describe threats. Example of such biases that         Ideally such a framework should support both quantitative
were mentioned are the ‘researcher intervention bias’, ‘mono-      and qualitative methods. We see little reason that this should
operation bias’, ‘mono-method bias’, ‘researcher bias’, and        not be possible as long as variation is allowed along the
‘vested interest might cause bias’.                                dimensions discussed above. As a starting point a common
   Overall it was not clear how to map many of the discussed       and abstract process model of most research studies can be
threats into the formal nomenclature. Most authors used            used along the lines presented for case studies in [11] or for
their own naming and did not try to relate to the published        experiments in [1]. These two models both have five steps
literature with lists of threats to be checked. Many authors       with the same meaning and only slightly varying names.
seemed to consider the validity threats mostly as a post-             That the number of mitigation strategies is low compared to
research walkthrough of limitations with only limited actual       the number of threats might seem alarming. However, many
effect on the study. However, we need to study the data in         threats are stated just as limitations for which there is no way
more detail, and find a unified framework in which to analyse      the author could have mitigated the it. A typical example is
the many different threats stated before we can investigate        that the sample size is too small so the results might not be
this in more detail.                                               statistically significant. However, the reason often seem to be
   We also investigated how easy it was to find the validity       one of convenience sampling, i.e. the researchers interviewed
discussion in the reviewed papers. Only 25 of the investigated     or performed experiments on the subjects that were available
43 papers had an explicitly named section discussing validity      in the studied organisation; they could not get access to any
threats.                                                           additional subjects.
                                                                      There also seem to be some room for more extensive
                       V. D ISCUSSION                              validity analysis. For the 25 reviewed papers that had a
   Overall more than 20% of the reviewed papers lacked             validity discussion they covered 5.44 threats on average per
any analysis of validity threats. This is an alarmingly high       paper. Since there are typically several threats to each part
figure. Empirical researchers should know that there is always     and phase of a study this number seems low and it seems
several threats to the validity of any research study and they     that there may be a lot of ommission errors. However, it
should be examined both before and while designing the             can also be the case that because of length restrictions the
study as well as throughout the other phases of a study.           researchers have considered more threats but only includes
   The average number of validity threats discussed was 3.26       the most severe ones in the actual paper. For these reasons
overall, but higher for quantitative studies (5.46) and slightly   it might be useful to have more complete validity analysis
lower for qualitative studies (3.23) and the lowest for studies    available on home pages for respective papers or similar.
that designed a new method, approach or solution. We think         Standardized forms for this type of analysis and reporting
this can be explained by the fact that the existing guidelines     might be valuable to promote this practice. However, we first
for validity analysis of software engineering research focus       need to extend the analysis in this paper to better understand
on experiments. It thus becomes more likely that researchers       the quality of validity analysis today.
doing quantitative research in the area would eventually get
reviewer comments or take preparatory courses etc where            A. Validity threats
they are introduced to these guidelines. The same is not as           There are several validity threats to the design of this study.
likely for qualitative researchers which would have to go          Our choice of venue is limited to a single venue and a single
outside of the software engineering field to find relevant         year. In extending this work we should of course include
guidelines and support.                                            more venues and more years. This would both give more
   It is apparent from our study that the existing terminology     data and allow better and more detailed statistical analysis as
for analysing validity threats is not used. Only in a few cases    well as allowing a broader coverage of the field of software
was the terms Internal, Conclusion, Construct or External          engineering. Care should be taken to ensure that also quality
validity used, even in experiments and other quantitative          studies are found and included.
studies. We propose that one explanation can be the fact              During data collection we mostly used a single researcher
that these terms are not more directly linked to the actual        to review each paper. Although we tried to mitigate this threat
elements of the studies, what has been done etc. Rather            by noting any unclear issues and discuss them together there

<!-- Page 7 -->
  is still a higher risk that a single reviewer can be biased and          engineering: an introduction.        Kluwer Academic
  consistently extract the wrong information. For the future we            Publishers, 2000.
  hope to have the resources to have at least two reviewers for        [2] J. Maxwell, Qualitative research design: An interactive
  each paper. The pilot with co-review of four papers should               approach. Sage Publications Inc., 2004.
  have helped to create a common understanding though.                 [3] D. Šmite, C. Wohlin, T. Gorschek, and R. Feldt,
     Another threat to the data collection is that our chosen              “Empirical evidence in global software engineering: a
  categories did not always fit the papers, threats and/or                 systematic review,” Empirical Software Engineering,
  mitigation strategies. Based on the experience from this initial         vol. 15, no. 1, pp. 91–118, February 2010. [Online].
  survey we will update the form further to ensure consistent              Available: http://dx.doi.org/10.1007/s10664-009-9123-y
  collection and analysis of results.                                  [4] S. Ali, L. Briand, H. Hemmati, and R. Panesar-
     We see few threats to the numerical analysis, however                 Walawege, “A Systematic Review of the Application
  there are several threats to the analysis of the threat and              and Empirical Investigation of Search-based Test-Case
  strategy summaries. Since we had no unified framework with               Generation,” Technical Report Simula. SE. 293. Simula
  which to classify the threats or strategies our analysis at this         Research Laboratory, Norway, Tech. Rep., 2009.
  stage is only indicative; without statistics on which threats        [5] K. Petersen and C. Wohlin, “Context in industrial
  are common and not the analysis is unreliable.                           software engineering research,” in Proceedings of the
                                                                           2009 3rd International Symposium on Empirical Soft-
                         VI. C ONCLUSIONS                                  ware Engineering and Measurement. IEEE Computer
                                                                           Society, 2009, pp. 401–404.
     To investigate the current state-of-practice in analysing
                                                                       [6] T. Cook, D. Campbell, and G. Fankhauser, Quasi-
  validity threats among researchers in empirical software
                                                                           experimentation: Design & analysis issues for field
  engineering we have reviewed all full research papers from
                                                                           settings. Houghton Mifflin Boston, 1979.
  the ESEM conference in 2009. More than 20% of these
                                                                       [7] A. Bryman and E. Bell, Business research methods.
  papers contains no discussion of validity threats and the
                                                                           Oxford University Press, USA, 2007.
  ones that do discuss on average only 5.44 threats. For only
                                                                       [8] N. Mays and C. Pope, “Qualitative research in health
  half of the discussed threats are any strategy to overcome
                                                                           care: Assessing quality in qualitative research,” British
  or mitigate the threat discussed by the paper authors of the
                                                                           Medical Journal, vol. 320, pp. 50–52, 2000.
  reviewed papers. And more than 25% of these mitigation
                                                                       [9] J. Mason, Qualitative researching. Sage Publications
  strategies mentioned have not been used in the studies but
                                                                           Ltd, 2002.
  are just discussed as future work. Furthermore, the situation
                                                                      [10] Y. Lincoln and E. Guba, Naturalistic inquiry. Sage
  seems to be worse for qualitative studies than for quantitative,
                                                                           Publications Inc., 1985.
  possibly because the little advice there is for validity analysis
                                                                      [11] P. Runeson and M. Höst, “Guidelines for conducting and
  in software engineering has been presented for experiments.
                                                                           reporting case study research in software engineering,”
  However, even the existing advice seem to have found little
                                                                           Empirical Software Engineering, vol. 14, no. 2, pp.
  use, in particular, no common terminology seemed to be
                                                                           131–164, 2009.
  used for validity analysis; researchers use their own terms
  or use no specific terms at all.
     We propose that a common model for the process of
  conducting empirical research in software engineering is
  created and that a simpler terminology for validity threats
  and analysis is adapted to this model. Specific guidelines
  for different research methods, data sources and collection
  methods can then be attached to the model and allow
  adaptation to the specifics of each study. Such a model
  would also allow for more detailed analysis of which threats
  are currently analysed and which have been missed. In
  future work we will developed such a model and framework
  and apply it to more research papers to validate it as well
  as deepen our knowledge of the state-of-the-art in validity
  analysis.

                           R EFERENCES
     [1] C. Wohlin, M. Höst, P. Runeson, M. Ohlsson, B. Reg-
         nell, and A. Wesslén, Experimentation in software

View publication stats
