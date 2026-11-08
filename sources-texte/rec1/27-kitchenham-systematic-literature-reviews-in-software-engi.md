<!-- Page 1 -->
                                                                              Information and Software Technology 52 (2010) 792–805
                                                                                    Contents lists available at ScienceDirect
                                                            Information and Software Technology
                                                                journal homepage: www.elsevier.com/locate/infsof
Systematic literature reviews in software engineering – A tertiary study
Barbara Kitchenham a,*, Rialette Pretorius b, David Budgen b, O. Pearl Brereton a, Mark Turner a,
Mahmood Niazi a, Stephen Linkman a
a
    School of Computing and Mathematics, Keele University, Staffordshire ST5 5BG, UK
b
    School of Engineering and Computing Sciences, Durham University, DH1 3LE, UK
a r t i c l e               i n f o                                       a b s t r a c t
Article history:                                                          Context: In a previous study, we reported on a systematic literature review (SLR), based on a manual
Received 7 July 2009                                                      search of 13 journals and conferences undertaken in the period 1st January 2004 to 30th June 2007.
Received in revised form 17 March 2010                                    Objective: The aim of this on-going research is to provide an annotated catalogue of SLRs available to soft-
Accepted 20 March 2010
                                                                          ware engineering researchers and practitioners. This study updates our previous study using a broad
Available online 27 March 2010
                                                                          automated search.
                                                                          Method: We performed a broad automated search to ﬁnd SLRs published in the time period 1st January
Keywords:
                                                                          2004 to 30th June 2008. We contrast the number, quality and source of these SLRs with SLRs found in the
Systematic literature review
Mapping study
                                                                          original study.
Software engineering                                                      Results: Our broad search found an additional 35 SLRs corresponding to 33 unique studies. Of these
Tertiary study                                                            papers, 17 appeared relevant to the undergraduate educational curriculum and 12 appeared of possible
                                                                          interest to practitioners. The number of SLRs being published is increasing. The quality of papers in con-
                                                                          ferences and workshops has improved as more researchers use SLR guidelines.
                                                                          Conclusion: SLRs appear to have gone past the stage of being used solely by innovators but cannot yet be
                                                                          considered a main stream software engineering research methodology. They are addressing a wide range
                                                                          of topics but still have limitations, such as often failing to assess primary study quality.
                                                                                                                                              Ó 2010 Elsevier B.V. All rights reserved.
Contents
    1.    Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 793
    2.    Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 794
          2.1.   The research questions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 794
          2.2.   The search process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 794
          2.3.   Study selection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 795
          2.4.   Quality assessment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 795
          2.5.   Data extraction process. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 796
    3.    Data extraction results. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 797
    4.    Discussion of research questions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 799
          4.1.   RQ1: How many SLRs were published 1st January 2004 and 30th June 2008 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 799
          4.2.   What research topics are being addressed? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 799
          4.3.   RQ3: Which individuals and organizations are most active in SLR-based research? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 802
          4.4.   RQ4: Are the limitations of SLRs, as observed in the original study, still an issue? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 802
                4.4.1.      Review topics and extent of evidence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 802
                4.4.2.      Practitioner orientation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 803
                4.4.3.      Evaluating primary study quality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 803
          4.5.   RQ5: Is the quality of SLRs improving? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 803
    5.    Study limitations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 804
    * Corresponding author. Tel.: +44 71782 733979; fax: +44 1782 734268.
      E-mail address: b.a.kitchenham@cs.keele.ac.uk (B. Kitchenham).
0950-5849/$ - see front matter Ó 2010 Elsevier B.V. All rights reserved.
doi:10.1016/j.infsof.2010.03.006

<!-- Page 2 -->
                                                             B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805                                                                                         793
 6.   Conclusions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 804
      Acknowledgement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 804
        References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 804
1. Introduction                                                                                                               ing experiments [9] which led to a series of follow-on SLRs
                                                                                                                              including [10,11]. In addition, some mapping studies are con-
   In a series of three papers Kitchenham, Dybå and Jørgensen sug-                                                            cerned about how academics undertake research in software
gested that software engineers in general, and empirical software                                                             engineering (e.g. [13]) rather than what we know about a spe-
engineering researchers in particular, should adopt evidence-based                                                            ciﬁc software engineering topic. The study reported in this
practice as pioneered in the ﬁelds of medicine and sociology [1–3].                                                           paper is a mapping study.
They proposed a framework for Evidence-based Software Engi-
neering (EBSE), derived from medical standards, that relies on                                                           This distinction between mapping studies and conventional
aggregating best available evidence to address engineering ques-                                                     SLRs can be somewhat fuzzy. Some mapping studies (like this
tions posed by practitioners and researchers. The most reliable evi-                                                 one) provide a more detailed review of the topics covered in each
dence comes from aggregating all empirical studies on a particular                                                   primary study including issues such as major outcomes and quality
topic. The recommended methodology for aggregating empirical                                                         evaluations of primary studies.
studies is a systematic literature review (SLR) (see for example                                                         We believe secondary studies can play a vital role both in sup-
[4–6]). Kitchenham adapted the medical guidelines for SLRs to                                                        porting further research efforts and also in providing information
software engineering [7], and later updated them to include in-                                                      about the impact of methods and tools to assist software engineer-
sights from sociology research [8].                                                                                  ing practitioners and managers [2,1]. However, these studies need
   SLRs are a means of aggregating knowledge about a software                                                        to be readily available to those who would beneﬁt from them. For
engineering topic or research question [5–8]. The SLR methodology                                                    example, researchers entering a new ﬁeld would beneﬁt from map-
aims to be as unbiased as possible by being auditable and repeat-                                                    ping studies in the area, whereas standards writers would beneﬁt
able. SLRs are referred to as secondary studies and the studies they                                                 from conventional SLRs evaluating the beneﬁts of speciﬁc tech-
analyse are referred to as primary studies. There are two different                                                  niques. Academics would also beneﬁt from mapping studies and
types of SLRs:                                                                                                       conventional SLRs when preparing teaching materials or writing
                                                                                                                     text books. For this reason we believe it is important to catalogue
   Conventional SLRs aggregate results related to a speciﬁc                                                         and evaluate all such papers.
    research question e.g. ‘‘Is testing technique a more effective                                                       We recently published the results of a mapping study aimed at
    at defect detection than testing technique b?” If there are suf-                                                 identifying software engineering SLRs [12]. The study is referred to
    ﬁcient comparable primary studies with quantitative esti-                                                        as a tertiary study, because it was a SLR of secondary studies.The
    mates of the difference between methods, meta-analysis can                                                       goal of the study was to identify how many SLRs had been pub-
    be used to undertake a formal statistically-based aggregation.                                                   lished, what research topics were being addressed, and the limita-
    However, we have found that meta-analysis is seldom possi-                                                       tions of current SLRs. For that study we used a manual search of a
    ble for SLRs in software engineering because there are often                                                     targeted set of 13 conferences and journals during the period Jan-
    insufﬁcient primary studies.                                                                                     uary 1st 2004 to 30th June 2007. The sources were selected be-
   Mapping studies. These studies aim to ﬁnd and classify the pri-                                                  cause they were known to include empirical studies and
    mary studies in a speciﬁc topic area. They have coarser-                                                         literature surveys, and had been used as sources for other mapping
    grained research questions such as ‘‘What do we know about                                                       studies (e.g. [9,13]). This search identiﬁed 20 SLRs of which eight
    topic x?” They may be used to identify available literature                                                      were mapping studies and one a meta-analysis.
    prior to undertaking conventional SLRs. They use the same                                                            In this paper, we report the results of a broad automated search
    methods for searching and data extraction as conventional                                                        covering the period 1st January 2004 to 30th June 2008, and con-
    SLRs but rely more on tabulating the primary studies in spe-                                                     trast them with our previous results. In effect we compare three
    ciﬁc categories. An example is the study of software engineer-                                                   sets of SLRs:
                                                                                           Fig. 1. The three sets of papers.

<!-- Page 3 -->
794                                     B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
   Those reported in the original study, covering the time period                 Therefore in this study we have changed the fourth question to
    January 2004 to June 30th 2007 [12].                                        be:
   Those found in the time period January 2004 to June 30th
    2007 that were found by the broad automated search and                          RQ4 Are the limitations of SLRs, as observed in the original
    were not included in the original study. We discuss the differ-                 study, still an issue?
    ences between the results of the manual search and the broad
    automated search in [14].                                                       We also address an additional research question:
   Those found in the time period July 1st 2007 to June 30th
    2008.                                                                           RQ5 Is the quality of SLRs improving?
   These are illustrated in Fig. 1. For convenience and to simplify
referencing, these sets papers are respectively referred to as T1,              2.2. The search process
T2-1 and T2-2 respectively in the rest of the paper (T for ‘tertiary’).
The original study [12] is referred to as T1, this one as T2.                      Pretorius was responsible for most of the search process. She
   Section 2 reports our methodology. Section 3 reports data we                 searched four digital libraries and one broad indexing service: IEEE
extracted from each SLR. Section 4 answers our research questions.              Computer Society Digital Library; ACM; Citeseer; SpringerLink;
We report the limitations of our study in Section 5 and our conclu-             Web of Science. In addition, Kitchenham searched the SCOPUS
sions in Section 6.                                                             indexing system. All searches were based on title, keywords and
                                                                                abstract. The searches took place between July and August 2008.
                                                                                For all the sources except SCOPUS the researcher used a set of sim-
2. Method
                                                                                ple search strings and aggregated the outcome from each of the
                                                                                searches for each source:
    We applied the basic SLR method as described by Kitchenham
and Charters [8]. The main differences between the methods used
                                                                                    1. ‘‘Software engineering” AND ‘‘review of studies”.
in this study compared with the method used for the original study
                                                                                    2. ‘‘Software engineering” AND ‘‘structured review”.
were that:
                                                                                    3. ‘‘Software engineering” AND ‘‘systematic review”.
                                                                                    4. ‘‘Software engineering” AND ‘‘literature review”.
   We used a broad automated search rather than a restricted
                                                                                    5. ‘‘Software engineering” AND ‘‘literature analysis”.
    manual search process.
                                                                                    6. ‘‘Software engineering” AND ‘‘in-depth survey”.
   Three researchers collected quality and classiﬁcation data. For
                                                                                    7. ‘‘Software engineering” AND ‘‘literature survey”.
    the papers found in the same time period as the original
                                                                                    8. ‘‘Software engineering” AND ‘‘meta-analysis”.
    search, they took the median or mode value (as appropriate)
                                                                                    9. ‘‘Software engineering” AND ‘‘past studies”.
    as the consensus value. For the set of papers found after the
                                                                                   10. ‘‘Software engineering” AND ‘‘subject matter expert”.
    time period of the original search, they used a ‘‘consensus”
                                                                                   11. ‘‘Software engineering” AND ‘‘analysis of research”.
    and ‘‘minority report” process for data extraction as described
                                                                                   12. ‘‘Software engineering” AND ‘‘empirical body of knowledge”.
    in Section 2.3.
                                                                                   13. ‘‘Evidence-based software-engineering” OR ‘‘evidence-based
                                                                                       software engineering”.
2.1. The research questions                                                        14. ‘‘Software engineering” AND ‘‘overview of existing research”.
                                                                                   15. ‘‘Software engineering” AND ‘‘body of published research”.
   The ﬁrst three research questions investigated in this study were
equivalent to the research questions used in the original study [12]:              Since SCOPUS allowed easy construction of complex searches,
                                                                                and reducing the number of searches reduces the problem of inte-
      RQ1 How many SLRs were published between 1st January 2004                 grating of search results, the SCOPUS search was based on only two
      and 30th June 2008?                                                       complex searches over two time periods:
      RQ2 What research topics are being addressed?
                                                                                    Search 1, conducted separately for 2004–2007, and then for
   The third question in our original study was ‘‘Who is leading the                2008 only
research effort?”. However, since we actually measured activity                     TITLE-ABS-KEY(‘‘software”) AND TITLE-ABS-KEY(‘‘evidence-
not leadership we have revised the research question to be:                         based software engineering” OR ‘‘review of studies” OR ‘‘struc-
                                                                                    tured review” OR ‘‘systematic review” OR ‘‘literature review”
      RQ3: Which individuals and organizations are most active in                   OR ‘‘literature analysis” OR ‘‘in-depth survey” OR ‘‘literature
      SLR-based research?                                                           survey” OR ‘‘meta-analysis” OR ‘‘Past studies”) AND
                                                                                    SUBJAREA(comp).
   In our original study, our fourth research question was ‘‘What                   Search 2, conducted separately for 2004–2007, and then for
are the limitations of current research?” The original study identi-                2008 only
ﬁed several problems with existing SLRs:                                            TITLE-ABS-KEY(‘‘software engineering research”1 OR ‘‘subject
                                                                                    matter expert” OR roadmap) AND SUBJAREA(comp).
   A relatively large number of studies were investigating
    research methods rather than software engineering topics
    (8 of 20).                                                                     The search process was validated against the papers found by
   The spread of software engineering topics was limited.                      the original study (set T1). The automated search found 15 of the
   The number of primary studies was much greater for map-                     18 studies found in the original study through manual search
    ping studies than for SLRs.                                                 (and excluding the two papers that were found by other means).
   Relatively few SLRs assessed the quality of primary studies.
   Relatively few papers provided advice that was oriented to                    1
                                                                                    Note the two researchers used slightly different strings which may not be strictly
    the needs of practitioners.                                                 equivalent.

<!-- Page 4 -->
                                       B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805                               795
Two of the missed papers were ‘‘border line” for inclusion (one was                Step 1: Three researchers screened each paper for inclusion
a small-scale review that was not the main topic of the paper and                           independently. Two researchers from a pool of ﬁve
the other a computer science rather than software engineering                               researchers, excluding Kitchenham, were assigned at
study), and the remaining missed study used the term ‘‘review”                              random to each paper. Kitchenham reviewed every
but not ‘‘literature review”. Therefore we concluded that the auto-                         paper. Each paper was screened to identify papers that
mated search was almost as good as the manual search for the                                could be rejected based on abstract and title on the
most important software engineering sources.                                                basis that they did not include literature reviews or were
   However, the search missed three relevant papers of which we                              not software engineering topics. Any disagreements were
were aware:                                                                                 discussed but the emphasis was on not rejecting any
                                                                                            disputed papers. This led to the exclusion of 42 papers.
  Jefferies et al. [15].                                                          Step 2: We obtained full copies of the remaining 119 papers and
  Bailey et al. [16]                                                                      undertook a more detailed second screening using the
  MacDonell and Shepperd [17].                                                            following inclusion and exclusion criteria:
                                                                                             That there was a full paper (not a PowerPoint presen-
   We re-checked the output of the SCOPUS search performed in                                 tation or extended abstract)
July 2008 and conﬁrmed that the papers had not been detected                                 That the paper included a literature review where
by the search (i.e. we had not missed the papers when looking at                              papers were included based on a deﬁned search process.
the search results). Using the same search string on 6/07/2009                               The paper should be related to software engineering
for the time period 2007–2008 (we refer to this as the ‘‘2009                                 rather than IS or computer science.
search”), we found all three papers, thus it seems that the three pa-
pers were not in the indexing system when the original search was              As previously the process was:
performed. We also checked all the papers found by the search and
no other relevant papers were identiﬁed.                                          To assign two of ﬁve researchers at random to review each
   We reviewed the results from the 2009 search in more detail to                  paper and for Kitchenham to review each paper.
assess whether it was likely that our initial search (conducted dur-              Disagreements were discussed and resolved.
ing July–August 2008) had missed any other relevant papers. The                   The emphasis was on not rejecting any possibly relevant
2009 search found 9 of the other 16 SLRs published in the time per-                papers.
iod July 1st 2007 to June 30th 2008. Seven of the SLRs missed by
the 2009 search used non-standard terminology:                                     This selection process rejected 54 papers that performed a liter-
                                                                               ature survey but did not have any deﬁned search process. Another
   Did not use the term ‘‘literature review” (e.g. used terms such            25 papers were rejected because either they included only a re-
    as ‘‘literature survey” [18] or ‘‘assembly of studies” [19], or            lated research section, or were duplicate papers, or were not soft-
    just the term ‘‘review” without any qualiﬁcation [20,21]).                 ware engineering papers. The remaining 40 papers were split into
   Did not use any terms related to review (e.g. explained that               two sets. The ﬁrst set of 14 papers (T2-1) comprised papers pub-
    they ‘‘searched publication channels” [22] or ‘‘analyzed soft-             lished in the time period 1st January 2004 to 30th June 2007; the
    ware engineering experiments” [10]).                                       second set (T2-2) comprised 26 papers published after 1st July
   Did not appear to be indexed by the SCOPUS system [23].                    2007. We completed the quality assessment and data extraction
                                                                               for the 14 papers in T2-1 before we began work on the quality
    The remaining two papers missed by the 2009 search used the                assessment and data extraction for the 26 papers in T2-2.
term ‘‘literature review” and were also missed by the 2008 search                  Of the 26 papers in T2-2, four papers were excluded since they
[24,25]. However, when the term ‘‘AND TITLE-ABS-KEY(‘‘soft-                    were published after 20th June 2008, leaving 22 papers, of which
ware”)” was removed from the July 2009 search, the two papers                  three referred to the same SLR, leaving 20 individual SLRs. Including
were included in the search output (although the number of papers              the three studies missed by the search process, we found a total of 23
returned increased from 134 to 578). Thus, the search did not iden-            SLRs that were included in the data extraction process (see Fig. 2).
tify the papers as mainstream software engineering literature re-
views which appears reasonable since one paper was about web                   2.4. Quality assessment
design for accessibility [24] and the other was about collaborative
conceptual modeling [25].                                                         Each SLR was evaluated using the York University, Centre for
    Thus, the July 2009 SCOPUS-based search found all the papers               Reviews and Dissemination (CDR) Database of Abstracts of Re-
that used standard terminology and were mainstream software                    views of Effects (DARE) criteria [26]. The criteria are based on four
engineering studies, found the three relevant papers missed in                 questions:
the original search, and did not ﬁnd any other relevant studies.
Therefore, we concluded that we had probably not missed any                         Are the review’s inclusion and exclusion criteria described
other relevant mainstream papers, and did not need to undertake                      and appropriate?
any more detailed searches for missing studies.                                     Is the literature search likely to have covered all relevant
                                                                                     studies?
                                                                                    Did the reviewers assess the quality/validity of the included
2.3. Study selection                                                                 studies?
                                                                                    Were the basic data/studies adequately described?
   Pretorius integrated the results for the different searches and
undertook an initial screening of the 1757 papers found, based                     The questions were scored as follows:
on title, abstract and keywords. This screening was based on
excluding studies that were obviously irrelevant, or duplicates, or                 Question 1: Y (yes), the inclusion criteria are explicitly
SLRs that we had already found [12].                                                 deﬁned in the paper, P (Partly), the inclusion criteria are
   The remaining 161 papers were then subject to a more detailed                     implicit; N (no), the inclusion criteria are not deﬁned and can-
assessment:                                                                          not be readily inferred.

<!-- Page 5 -->
796                                     B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
                                                            40 SLRs found by the broad automated
                                                            search and screening process
                                                                                     including
                                    14 SLRs published before                                          26 SLRs published after
                                    1st July 2007                                                     30th June 2007
                                                                                including
                              4 SLRs published after 30th               4 out of time frame reviews
                                                                        were removed leaving            22 SLRs published before
                              June 2008
                                                                                                        30th June 2008
                                                                 including
                                3 papers reporting                           2 duplicates removed
                                                                             leaving                    20 unique SLRS published
                                same SLR
                                                                                                        before 30th June 2008
                                                              missing
                                  3 additional papers                   3 missing papers included
                                  known by researchers                                                  23 unique SLRs published
                                                                                                        before 30th June 2008
                                                                 including
                                  4 papers rejected                                                     19 unique SLRs
                                  during data extraction            4 rejected papers
                                                                                                        published before 30th
                                                                   excluded leaving                     June 2008
                                                            Fig. 2. Identiﬁcation of included SLRs.
   Question 2: Y, the authors have either searched four or more                      the papers. The median value was taken to represent the consensus
    digital libraries and included additional search strategies or                    view.
    identiﬁed and referenced all journals addressing the topic of                        We used a more rigorous process to answer the quality ques-
    interest; P, the authors have searched 3 or 4 digital libraries                   tions for papers published in the time period 1st July 2007 to
    with no extra search strategies, or searched a deﬁned but                         30th June 2008 (set T2-2). We refer to the process as a ‘‘consensus
    restricted set of journals and conference proceedings; N, the                     and minority report” process whereby:
    authors have searched up to 2 digital libraries or an extremely
    restricted set of journals. Note that scoring question 2 also                           1. Two from a pool of ﬁve researchers, excluding Pretorius and
    requires the evaluator to consider whether the digital                                     Kitchenham, were randomly allocated to each study.
    libraries were appropriate for the speciﬁc SLR.                                         2. The two researchers independently answered the quality
   Question 3: Y, the authors have explicitly deﬁned quality cri-                             questions, and provided a justiﬁcation for each answer.
    teria and extracted them from each primary study; P, the                                3. The two researchers compared their results and came to a
    research question involves quality issues that are addressed                               consensus.
    by the study; N no explicit quality assessment of individual                            4. Kitchenham answered the quality questions for all SLRs pro-
    papers has been attempted or quality data has been extracted                               viding a justiﬁcation for each answer.
    but not used. (Note the decision to penalize papers that col-                           5. The consensus result was then compared with a third inde-
    lected quality data but did not use it was applied only to                                 pendent extraction (performed by Kitchenham) and the two
    papers published after 30th June 2007.)                                                    original data extractors discussed any disagreements until
   Question 4: Y, Information is presented about each paper so                                they reached ﬁnal consensus. Note Kitchenham did not take
    that the data summaries can clearly be traced to relevant                                  part in the ﬁnal discussion in order for one person not to have
    papers; P, only summary information is presented about indi-                               too much inﬂuence on the results.
    vidual papers e.g. papers are grouped into categories but it is
    not possible to link individual studies to each category; N, the                  This process is illustrated in Fig. 3.
    results of the individual studies are not speciﬁed i.e. the indi-
    vidual primary studies are not cited.                                             2.5. Data extraction process
    The scoring procedure was Y = 1, P = 0.5, N = 0.                                     The data extraction for quality data and classiﬁcation data was
    These are the same criteria that were used to evaluate quality in                 undertaken at the same time using the procedures described
the original tertiary study 1 [12], except for scoring N for Q3 if pa-                above. In addition to the quality assessment the following data,
pers collected quality data but did not use it. It should be noted                    which were collected in the original study, were also extracted:
that the information provided to help determine the answer for
each question is intended to provide support for the assessment;                             The type of study (SLR or mapping study).
it is not a strict mutually exclusive classiﬁcation process.                                 The review focus i.e. whether the SLR was software engineer-
    We used two different methods for quality data extraction. For                            ing oriented or research methods oriented.
the additional papers in set T2-1, three researchers extracted infor-                        The number of primary studies included in the SLR (to
mation from each paper. Two researchers were assigned at random                               address the issue of whether there are sufﬁcient primary
from the pool of four researchers while Kitchenham reviewed all                               studies in software engineering for SLRs to be useful).

<!-- Page 6 -->
                                      B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805                              797
                                                       Kitchenham allocated papers
                                                       to two reviewers at random
                                   data extraction               data extraction                 data extraction
                                   by reviewer 1                 by reviewer 2                   by Kitchenham
                                             reviewer 1 & 2 compare
                                             results and form a consensus
                                                                 reviewer 1 & 2 compare consensus
                                                                 with Kitchenham’s results and
                                                                 produce a final consensus
                                           Fig. 3. ‘‘Consensus and minority report” data extraction process.
   For papers published before 1st July 2007 (set T2-1), the median              Thus, we found 19 relevant studies in the time period 1st July
of nominal scale data items was used, and any disagreement about              2007 to 30th June 2008, so overall, the broad search covering January
the number of primary studies was discussed and a ﬁnal value                  1st 2004 to June 30th 2008 (set T2) found 33 additional studies
agreed. Data for all other aspects was extracted by all three                 which reported an SLR (even if the authors themselves did not use
researchers, but these were non-subjective factors i.e. publication           the term ‘‘systematic” to describe their review). The process by
sources, publication type, authors, and author’s afﬁliations and              which we arrived at 19 relevant SLRs is shown in Fig. 2. Data obtained
there was no disagreement. For papers published after 30th June               from the SLRs are reported in detail in Sections 3 and 4, and com-
2007 (set T2-2), data extraction for subjective values was done               pared with the 20 SLRs discussed in the original study (set T1) [12].
by three researchers using the ‘‘consensus and minority report pro-
cess”; data for non-subjective factors were extracted by one per-             3. Data extraction results
son, i.e. Kitchenham.
   During the data extraction for papers found after June 30th                   The 33 SLRs that were published in the time period 1st January
2007, four further papers were excluded from the set of relevant              2004 to 30th June 2008 (excluding those reported in the original
studies after agreement among three reviewers for the following               tertiary study) are shown in Table 1. For each review we identify:
reasons:
                                                                                    Whether it posed detailed technical questions (RQ) or was
   Two papers were excluded because apart from the search                           interested primarily in trends in a particular software engi-
    there was nothing systematic about their literature review                       neering topic area (SERT) or the way in which software engi-
    [27,28].                                                                         neers undertake research (RT).
   Two papers were excluded because of incompleteness. One                         The quality score assigned to the study.
    speciﬁed that it was presenting preliminary results based                       The year of publication.
    on the papers found to date [29]. The other was a short paper                   Whether the study positioned itself explicitly as an EBSE
    which did not report any aggregation of the identiﬁed papers                     study by citing any of the EBSE papers [2,1] or the SLR guide-
    [30].                                                                            lines [7,8].

<!-- Page 7 -->
798                                              B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
Table 1
Additional software engineering SLRs published from 1st January 2004 to 30th June 2008 (studies above the double lines were published before July 1st 2007, studies below the
double lines were published after June 30th 2007).
     Study    Review      Quality    Year      Cited     Cited         Paper type                      Number       Practitioner    Review topic
     ref.     focus       total                EBSE      guidelines                                    primary      guidelines
                          score                paper                                                   studies
     [32]     RQ          2.5        2005      No        Yes           Conference                      8            N               Cost estimation – impact of clients on
                                                                                                                                    estimate accuracy
     [33]     RQ          2          2005      No        No            Journal                         70           Y               Cost estimation – Guidelines for
                                                                                                                                    estimating uncertainty
     [36]     RT          2.5        2005      No        Yesa          Workshop                        50           N               Cost estimation – data sets used to
                                                                                                                                    evaluate models
     [39]     RT          1.5        2005      No        No            Workshop                        119          N               Evidence produced by empirical
                                                                                                                                    software engineers
     [40]     RT          2          2005      No        Yes           Conference                      13           N               Classifying context in SE experiments
     [41]     SERT        2.5        2005      No        No            Conference                      105          N               Mobile systems development
     [34]     RQ          3.5        2006      Yes       Yes           Conference                      26           Y               Requirements elicitation techniques
     [37]     SERT        1.5        2006      No        No            Workshop                        57           N               Conceptual model of outsourcing
     [42]     SERT        1          2006      No        No            Technical report                750          N               Software architecture
     [35]     SERT        1.5        2007      Yes       No            Workshop                        653          N               Cost estimation challenges
     [38]     SERT        1.5        2007      No        No            Journal                         80           N               Approaches for mining software
                                                                                                                                    repositories in the context of
                                                                                                                                    evolution
     [43]     SERT        1.5        2007      No        No            Book chapter (working           4089         N               Requirements Engineering
                                                                       conference)                                                  publications
     [44]     RT          1.5        2007      No        No            Book chapter (workshop)         133          N               Evidence produced by empirical
                                                                                                                                    software engineers
     [45]     SERT        2          2007      No        No            Book chapter (working           155          N               Developing open source software –
                                                                       conference)                                                  analysis of research
     [11]     RT          2.5        2007      No        Yes           Journal                         103          N               Empirical software engineering –
                                                                                                                                    effect size
     [16]     SERT        2.5        2007      No        Yes           Conference                      138          No              Software design – Object-oriented
     [17]     RQ          4          2007      No        Yes           Conference                      10           No              Cost estimation-local vs. global
                                                                                                                                    estimation models
     [19]     RQ          3.5        2007      No        Yes           Book chapter (conference)       5            N               Software development process –
                                                                                                                                    tailoring and introduction of rational
                                                                                                                                    uniﬁed process
     [20]     RQ          2.5        2007      No        Yes           Journal                         11           N               Reuse – economic beneﬁts
     [21]     SERT        1          2007      No        No            Journal                         137          N               Tool integration – a research agenda
     [24]     SERT        3.5        2007      No        Yes           Conference                      53           N               Web application development –
                                                                                                                                    design for accessibility
     [10]     RQ          2.5        2008      No        Yes           Journal                         103          N               Empirical software engineering – the
                                                                                                                                    value of laboratory experiments
     [15]     SERT        2.5        2008      No        Yes           Conference                      28           No              Re-engineering – multi-channel
                                                                                                                                    access
     [18]     RQ          1.5        2008      No        No            Book chapter (conference)       21           N               Metrics – measurement programme
                                                                                                                                    evolution
     [22]     RQ          2.5        2008      Yes       No            Book chapter (conference)       25           N               Model-driven engineering
     [23]     RQ          3          2008      No        Yes           Workshop                        14           N               Architecture – deﬁnition of
                                                                                                                                    architectural knowledge
     [25]     SERT        1.5        2008      No        No            Book chapter (workshop)         46           Y               Collaborative conceptual modeling
     [31]     SERT        3.5        2008      No        Yes           Journal                         85           N               Model based testing
     [46]     RT          3          2008      No        Yes           Workshop                        23           N               Empirical software engineering –
                                                                                                                                    data set quality
     [47]     RQ          3          2008      No        Yes           Journal                         45           Y               Software process improvement – in
                                                                                                                                    SMEs
                                                                                                             b
     [48]     SERT        2          2008      No        Yes           Journal                         100          N               Metrics – overview
     [49]     RQ          3.5        2008      No        Yes           Journal                         43           N               Software process improvement –
                                                                                                                                    motivations for adoption
     [50]     RQ          3          2008      Yes       Yes           Book chapter (workshop)         96           N               Software process simulation
                                                                                                                                    modeling
 a
      This paper did not reference the guidelines in the context of using the method, so we do not count this paper as EBSE-related.
 b
      Not explicitly reported – estimated from number of references.
      The source in which the SLR was reported (i.e. journal, work-                          All the papers that cited one of the EBSE papers used the EBSE
       shop, conference, book chapter).                                                        concept as a justiﬁcation for their study.
      The number of primary studies used as stated by the author                             All papers that quoted one of the Guidelines papers, except
       explicitly or in tabulations.                                                           [36], did so in the context of the methodology they selected.
      Whether the study included guidelines for practitioners.                                In addition one paper, quoted the Guidelines as an input to
      The topic of the SLR.                                                                   the Biolochini et al. template [51] which they adopted for
                                                                                               their review [23]. Another paper referenced both the guide-
   With respect to the nature of references to the EBSE papers and                             lines and the Biolchini et al. paper to describe their review
SLR Guidelines:                                                                                method [47]. Several other papers said they were similar to,

<!-- Page 8 -->
                                                B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805                                       799
      or inspired by, or informed by the Guidelines or used criteria                       The 14 additional papers found in the time period 1st January
      for inclusion exclusion as suggested by the Guidelines                            2004 to 30th June 2007 (set T2-1) were discussed previously in
      [10,19,20,11].                                                                    the context of the implications of broad and restricted search strat-
                                                                                        egies [14,52]. Table 2 shows the quality assessments and type for
   Thus we consider all papers that referenced either the Guide-                        each paper. The impact of the ‘‘consensus and minority report pro-
lines or the EBSE papers, to be EBSE-positioned papers, except [36].                    cess” for assessing quality is discussed in [52].
   With respect to the number of primary studies, some values
seem unusually high, but were based on the reports of the authors:                      4. Discussion of research questions
    Davis et al. [43] based their study on a database of 4089                             This section addresses our speciﬁc research questions and iden-
     requirements engineering papers collected over a period of                         tiﬁes any changes between SLRs discussed in our original study
     18 years and describe how the database was obtained.                               and SLRs found in this study.
    Shaw and Clements [42] searched CiteSeer using the term
     ‘‘software architecture”. They consolidated variant citations                      4.1. RQ1: How many SLRs were published 1st January 2004 and 30th
     and ignored self-citations which they say yielded ‘‘a sample                       June 2008
     of about 5500 citations to about 750 papers”. They compared
     the top 24 papers in that group with a similar set of refer-                           In the year from July 1st 2007 to June 30th 2008 (set T2-2), we
     ences found in 2001 giving a set of 34 papers. The paper itself                    found 19 SLRs of which eight were mapping studies. All but three
     references a total of 97 papers including the 34 papers.                           were EBSE-positioned SLRs (i.e. referenced either one of the EBSE
    Shepperd states that he searched ISI Scientiﬁc Citation Index                      papers or the SLR guidelines). This compares with 34 studies of
     Web of Knowledge with terms related to software cost esti-                         which 18 were mapping studies in the three and one half year per-
     mation and found 320 journal papers and 333 conference                             iod 1 January 2004 to 30th June 2007 (T1 + T2-1). The number of
     papers [35].                                                                       studies per year is shown in Table 3. Table 3 suggests an increase
                                                                                        in the number of SLRs with the number of studies per year between
    Table 2 shows that we categorized all three of these studies as                     2004 and 2006 being comparable with the number of studies per
mapping studies and that all three scored less that 2 on the quality                    half year since 2007. Furthermore between July 2007 and June
scale. Thus, a large number of papers can be obtained but the                           2008, there has been an increase in the proportion of reviews posi-
resulting studies may lack quality, in particular traceability from                     tioning themselves as EBSE SLRs.
primary studies to conclusions (Q4) and repeatability (Q1) are
likely to be compromised and individual papers will probably not                        4.2. What research topics are being addressed?
be assessed for quality (Q3).
                                                                                           Table 1 suggests that many different topics are being addressed.
                                                                                        In order to have some baseline to evaluate the extent to which soft-
Table 2                                                                                 ware engineering topics are being addressed, we considered how
Scores for each quality question (studies above the double lines were published         well the SLRs of relevance both to education and to practice related
before July 1st 2007, studies below the double lines were published after June 30th
2007).
                                                                                        to the Software Engineering 2004 Curriculum Guidelines for
                                                                                        Undergraduate Degree Program [53] and the Software Engineers’
  Study ref.      Study type      Q1       Q2       Q3      Q4       Total score        Book of Knowledge (SWEBOK) [54] (see Table 4). We believe that
  [32]            SLR             Y        P        N       Y        2.5                SLRs could be used by academics to help prepare course material
  [33]            SLR             P        Y        N       P        2                  and text books, so we were interested in assessing coverage with
  [36]            SLR             Y        P        P       P        2.5
                                                                                        respect to the undergraduate curriculum. In addition, we used
  [39]            MS              Y        N        N       P        1.5
  [40]            SLR             P        Y        N       P        2                  the SWEBOK because from an EBSE viewpoint SLRs are supposed
  [41]            MS              Y        Y        N       P        2.5                to be of relevance to practitioners, and the SWEBOK is intended
  [34]            SLR             Y        Y        Y       P        3.5                to identify knowledge needed by practitioners with up to 5 years
  [37]            MS              N        Y        N       P        1.5
                                                                                        experience.
  [42]            MS              Y        N        N       N        1
  [35]            MS              P        P        N       P        1.5                   Table 5 shows the distribution of SLR topics against the curric-
  [38]            MS              P        P        N       P        1.5                ulum and conﬁrms that coverage of core SE topics is extremely
  [43]            MS              P        Y        N       N        1.5                sparse. (A similar result is found if papers are mapped to the
  [44]            MS              Y        N        N       P        1.5                SWEBOK [55].)
  [45]            MS              P        Y        N       P        2
                                                                                           Restricting SLRs to those deemed to be good quality SLRs (i.e.
  [11]            SLR             Y        Y        N       P        2.5
  [16]            MS              Y        Y        N       P        2.5                those that scored 2 or more on the quality scale) would remove
  [17]            SLR             Y        Y        Y       Y        4                  four of the SLRs relevant to practitioners and educators. However,
  [19]            SLR             Y        P        Y       Y        3.5                even if an SLR is of relatively low quality, it might still provide a
  [20]            SLR             Y        P        N       Y        2.5
  [21]            MS              N        P        N       P        1
  [24]            MS              Y        Y        Y       P        3.5                Table 3
  [10]            MS              Y        Y        N       P        2.5                Number of SLRs per year.
  [15]            MS              Y        P        N       Y        2.5
  [18]            SLR             Y        P        N       N        1.5                   Time period                 Number    Average number      Number of EBSE-
  [22]            SLR             P        Y        N       Y        2.5                                               of SLRs   of SLRS per month   positioned SLRs
  [23]            SLR             Y        Y        N       Y        3
                                                                                           2004                         6        0.50                 1
  [25]            MS              N        Y        N       P        1.5
                                                                                           2005                        11        0.92                 5
  [31]            MS              Y        Y        P       Y        3.5
                                                                                           2006                         9        0.75                 6
  [46]            SLR             Y        Y        N       Y        3
                                                                                           2007 (ﬁrst 6 months)         8        1.33                 3
  [47]            SLR             Y        Y        N       P        3
                                                                                           2007 (second 6 months)       7        1.12                 6
  [48]            MS              Y        Y        N       N        2
                                                                                           2008 (ﬁrst 6 months)        12        2.0                 10
  [49]            SLR             Y        Y        Y       P        3.5
  [50]            SLR             Y        P        Y       P        3                     Total                       53                            31

<!-- Page 9 -->
                                                                                                                                                                                                                                  800
Table 4
Relationship between SLRs and the undergraduate curriculum and the SWEBOK (good quality SLRs in bold).
  Study   Review    Quality   Review topic                Useful for   Useful for      Why?                                              Mapping to topic area in the SE curriculum (using   Mapping to SWEBOK (using the
  ref.    type      total                                 education    practitioners                                                     the curriculum section codes)                       SWEBOK section references)
                    score
  [32]    SLR       2.5       Cost estimation – impact    Yes          Yes             Overview of existing research plus another        MGT.pp.4 software management; project               Effort, schedule, and cost
                              of clients on estimate                                   large survey                                      planning, Section 4                                 estimation. chapter 8, Section 2.3
                              accuracy
  [33]    SLR       2         Cost estimation –           Yes          Yes             Practical evidence-based guidelines for           MGT.pp4 software management; project                Effort, schedule, and cost
                              guidelines for estimating                                managers                                          planning, Section 4                                 estimation. chapter 8, Section 2.3
                                                                                                                                                                                                                                  B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
                              uncertainty
  [36]    SLR       2.5       Cost estimation – data      No           No              More appropriate for researchers.
                              sets used to evaluate
                              models
  [39]    MS        1.5       Evidence produced by        No           No              Aimed at researchers
                              empirical software
                              engineers
  [40]    SLR       2         Classifying context in SE   No           No              More appropriate for researchers
                              experiments
  [41]    MS        2.5       Mobile systems              Yes          Yes             Good overview of topic area                       SAS.mob system and application specialties;         N/A
                              development                                                                                                systems for small and mobile platforms
  [34]    SLR       3.5       Requirements elicitation    Yes          Yes             Important results conﬁrming the                   MAA.er.2 software modeling and analysis;            Requirements elicitation
                              techniques                                               importance of using structured interviews         eliciting requirements, Section 2                   techniques chapter 2, Section 3.2
  [37]    MS        1.5       Conceptual model of         Yes          Yes             An example of a process model in an               PRO.imp.2 software process; implementation.         Maintenance issues outsourcing
                              outsourcing                                              important topic area                              Section 2                                           chapter 6, Section 2.2.5
  [42]    MS        1         Software architecture       Yes          Possibly        High level overview of the topic with a list of   DES.ar software design; architectural design        Software design software
                                                                                       popular references                                                                                    architecture chapter 3, Section 3
  [35]    MS        1.5       Cost estimation             No           No              More appropriate for researchers
                              challenges
  [38]    MS        1.5       Approaches for mining       No           No              More appropriate for researchers
                              software repositories in
                              the context of evolution
  [43]    MS        1.5       Requirements engineering    No           No              High level statistical analysis of numbers of
                              publications                                             papers in different categories, so more
                                                                                       appropriate for researchers.
  [44]    MS        1.5       Evidence produced by        No           No              Aimed at researchers
                              empirical software
                              engineers
  [45]    MS        2         Developing open source      No           No              High level statistical analysis of numbers of
                              software                                                 papers in different categories, so more
                                                                                       appropriate for researchers
  [11]    SLR       2.5       Empirical software          No           No              Aimed at researchers
                              engineering – effect size
  [16]    MS        2.5       Software design – object-   No           No              Statistical analysis of papers in various
                              oriented                                                 categories, so more appropriate for
                                                                                       researchers
  [17]    SLR       4         Cost estimation-local vs.   Possibly     Possibly        Rather specialized topic area (also an            MGT.pp4 Software Management; Project                Software project planning.
                              global estimation models                                 intentional replication of a previous SLR)        planning, Section 4                                 effort, schedule, and cost
                                                                                                                                                                                             estimation. chapter 8, Section 2.3
  [19]    SLR       3.5       Software development        Possibly     Yes             Rather specialized for undergraduates but         PRO.imp.6 software process; implementation,         chapter 9, Section 2.4
                              process – tailoring and                                  illustrates the practical problems of using       Section 6
                              introduction of rational                                 even well-deﬁned processes
                              uniﬁed process

<!-- Page 10 -->
[21]   MS    1     Tool integration – a       No         No         Aimed at researchers
                   research agenda
[20]   SLR   2.5   Reuse – economic           Possibly   Yes        Good overview of arguments concerning          FND.ec.3 mathematical and engineering             Software construction. practical
                   beneﬁts                                          the value of reuse                             fundamentals; engineering economics for           considerations chapter 4,
                                                                                                                   software, Section 3                               Section 3.5
[24]   MS    3.5   Web application            Possibly   Yes        Has some general discussion of issues but      Des.con.6 software design; design concepts,       Software design chapter 3
                   development – design                             doesn’t specify all the papers used in the     Section 6
                   for accessibility                                review
[10]   MS    2.5   Empirical software         No         No         Aimed at researchers
                   engineering – the value
                   of laboratory
                   experiments
[15]   MS    2.5   Re-engineering – multi-    Possibly   Yes        This is a specialized topic but relevant to    SAS.mob system and application specialties;       Maintenance techniques. re-
                   channel access                                   mobile computing                               systems for small and mobile platforms            engineering chapter 6, Section
                                                                                                                                                                     4.2
[18]   SLR   1.5   Metrics – measurement      Possibly   Yes        Rather specialized but highlights important    MGT.ctl.3 software management; project control,   Software engineering
                   programme evolution                              practical considerations about management      Section 3                                         measurement. Establish and
                                                                                                                                                                                                         B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
                                                                    process evolution                                                                                sustain measurement
                                                                                                                                                                     commitment, chapter 8, Section
                                                                                                                                                                     6.1
[22]   SLR   2.5   Model-driven               Yes        Yes        An important topic highlighting its current    MAA.md software modeling and analysis;            Software design strategies.
                   engineering                                      limitations                                    modeling foundations                              Other methods chapter 3,
                                                                                                                                                                     Section 6.6
[23]   SLR   3     Architecture – deﬁnition   Possibly   Yes        Highlights the difﬁculty of deﬁning            Des.ar software design; architectural design      Software design software
                   of architectural                                 architectural knowledge                                                                          architecture chapter 3, Section 3
                   knowledge
[25]   MS    1.5   Collaborative conceptual   Possibly   Yes        Rather specialized but highlights important    MAA.er.2 software modeling and analysis;          Requirements analysis.
                   modeling                                         practical considerations                       eliciting requirements, Section 2                 conceptual modeling chapter 2,
                                                                                                                                                                     Section 4.2
[31]   MS    3.5   Model based testing        Possibly   Yes        The information is quite high-level but the    VAV.tst Software veriﬁcation and validation;      Testing from formal
                                                                    topic is of importance and the additional      testing                                           speciﬁcations chapter 5, Section
                                                                    on-line material provides information                                                            3.2.5
                                                                    about all relevant studies
[46]   SLR   3     Empirical software         No         No         More appropriate for researchers
                   engineering – data set
                   quality
[47]   SLR   3     Software process           No         Yes        Statistical analysis of papers but with some                                                     Software engineering process,
                   improvement – in SMEs                            guidelines for practitioners                                                                     process assessment methods
                                                                                                                                                                     chapter 9, Section 3.2
[48]   MS    2     Metrics – overview         Possibly   Possibly   Narrative discussion giving an overview of     FND.ef.3 Mathematical and engineering             Software engineering
                                                                    the metrics area.                              fundamentals; engineering economics for           measurement chapter 8, Section
                                                                                                                   software, Section 3 MGT.ctl.3 Software            6. Process and product
                                                                                                                   Management; Project control, Section 3            measurement chapter 9, Section
                                                                                                                                                                     4
[49]   SLR   3.5   Software process           No         Yes        Aimed at practitioners rather than                                                               Software engineering process.
                   improvement –                                    undergraduates.                                                                                  Process assessment. process
                   motivations for adoption                                                                                                                          assessment models chapter 9,
                                                                                                                                                                     Section 3.1
[50]   SLR   3     Software process           No         No         Aimed at researchers not undergraduates
                   simulation modeling                              or practitioners.
                                                                                                                                                                                                         801

<!-- Page 11 -->
802                                              B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
Table 5
Distribution of SLRs over the SE sections of the University curriculum guidelines.
     Section                               Number of    Number of January 1st 2004 to June 30th January 1st 2004 to June July 1st 2007 to             Total Total
                                           sub-sections sub-topics 2007 manual search [12]      30th 2007 additional     June 30th                    SLRs sub-topics
                                                                                                papers (broad search)
                                                                       SLRs             Num subs      SLRs       Num subs       SLRs      Num subs
                                                                                        addressed                addressed                addressed
     Software modeling and analysis         7              41                                         [34]       1              [22,25]   2            3   3
     Software design                        7              37          [56]             0             [42]       0              [23,24]   0            4   0a
     Software validation and veriﬁcation   40               5          [61,65,66]b,c    5                                       [31]      0            5   5
     Software evolution                     2              13
     Software process                       2              14                                         [37]       1              [19]       1           2   2
     Software quality                       5              28          [57]             1                                                  –           1   1
     Software management                    5              32          [58–60,62–64]    1             [32,33]    1              [17,18,48] 2          11   2
     Computing essentials                   4              41          [67]             1                                                              1   1
     Mathematical and engineering           3              22                                                                   [22,48]   2            2   2
        fundamentals
     System and application specialties    42                                                         [41]       1              [15]      1            2   1
     Total                                                233          12               8             6          4              11d       8           29   17
 a
   The papers addressed a general topic, not a speciﬁc technique.
 b
   This paper addressed four sub-topics of the subsection testing.
 c
   This paper addressed testing methods and inspection methods.
 d
   Paper [48] addressed two topics.
useful starting point for academics planning course material or                             Moløkken-Østvold, and Juristo). In contrast between July 2007
writing text books – as long as all the relevant primary studies                            and June 2008, 51 researchers in total co-authored studies and
are fully cited.                                                                            no researcher contributed to more than two studies. Six research-
    Excluding general overview papers, we found four studies from                           ers co-authored more than one SLR (Brereton, Kitchenham, Han-
those identiﬁed in set T2-1 in the time period 1st January 2004 to                          nay, Mohagheghi, Shepperd, and Turner).
30th June 2007 (additional to those in set T1 discussed in [12]), and                          In terms of afﬁliations, between January 2004 and 30th June
eight studies published between July 1st 2007 and June 30th 2008                            2007, Simula Laboratory researchers contributed to 11 studies;
(i.e. set T2-2), that are of possible interest to practitioners (omit-                      Brunel University and Universidade Politécnica de Madrid
ting the replication SLR [17]). These 12 papers are:                                        researchers contributed to three studies. In the following year, SIN-
                                                                                            TEF employees co-authored four different reviews, Simula Labora-
      Jørgensen’s paper [33] which presents seven evidence-based                           tory and Keele University researchers co-authored three different
       guidelines to help estimators in industry assess the uncer-                          reviews.
       tainty in software cost estimates.                                                      In terms of adopter types [68], these results suggest that groups
      Davis et al.’s paper [34] on requirements elicitation methods                        and individuals undertaking systematic literature reviews are no
       which unexpectedly found that structured interviews                                  longer just the innovators, but can increasingly be regarded as early
       appeared to be the most effective elicitation method, out-per-                       adopters.
       forming other more sophisticated methods.                                               With respect to nationalities, as we observed previously, few re-
      Mohagheghi and Conradi paper [20] which reported evidence                            views are co-authored by researchers living in the USA. Only 7 of
       of the beneﬁts of reuse found in industry studies.                                   the 34 studies published before 30th June 2007, and only one of
      Four papers related to model-driven engineering                                      the 19 studies published after 30th June 2007 were co-authored
       [22,31,25,19]. All except [31] based their reviews on indus-                         by researchers with US afﬁliations. Most of the studies were co-
       try-based studies.                                                                   authored by Europeans (42 of the 53).
      Five other papers including two papers related to process
       improvement [47,49], one paper considering outsourcing
       [37], one paper considering the impact of client ion estima-                         4.4. RQ4: Are the limitations of SLRs, as observed in the original study,
       tion accuracy [32] and a paper considering the evolution of                          still an issue?
       metrics programmes [18].
                                                                                            4.4.1. Review topics and extent of evidence
    A problem common to these 12 SLRs was a lack of reliable quan-                             Compared with our previous study [12], the 33 reviews dis-
titative results concerning the beneﬁts of the various techniques                           cussed in this paper addressed a broader range of software engi-
which makes it difﬁcult to offer clear-cut recommendations to                               neering topics. There is no longer a preponderance of cost
practitioners. However, it is encouraging to see that seven of the                          estimation studies and more general software engineering topics
SLRs concentrated on industrial case studies or industrial surveys                          have been addressed. In the previous study, 8 of the 20 SLRs were
that might be of more relevance to practitioners, rather than on                            concerned with research methods. In the 33 studies reported in
small-scale studies and laboratory experiments.                                             this paper, 15 were primarily aimed at researchers; of these, six
                                                                                            were concerned with research methods, while the other nine pa-
4.3. RQ3: Which individuals and organizations are most active in SLR-                       pers were mapping studies related to a speciﬁc software engineer-
based research?                                                                             ing topic. Thus, the proportion of papers directed at research
                                                                                            methods has reduced from 40% to 18%.
   In the period January 2004 to June 2007, the studies were dom-                              As we found previously, mapping studies analyze more primary
inated by a speciﬁc researcher, Magne Jørgensen, who co-authored                            studies than conventional SLRs (see Table 6). However, there ap-
eight studies. Martin Shepperd contributed to four studies and                              pears to be sufﬁcient primary studies to undertake SLRs in some
three other researchers contributed to three studies (Sjöberg,                              topic areas.

<!-- Page 12 -->
                                                  B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805                                             803
Table 6
Median number of primary studies including in mapping studies and SLRs.
  Statistic                                                           Time period 1st January            Time period 1st January 2004               Time Period 1st July
                                                                      2004 to 30th June 2007             to 30th June 2007 broad                    2007 to 30th June
                                                                      targeted search [12] T1            search (extra papers) [14] T2-2            2008 broad search T2-2
  Median number of primary studies in SLRs                             20                                 26                                        23
  Number of SLRs (Including meta-analyses)                             11                                  5                                        11
  Median number of primary studies in mapping studies                 103                                133                                        92.5
  Number of mapping studies                                             9                                  9                                        8
4.4.2. Practitioner orientation                                                               1. Guidelines with a parameter estimate = 0.55 and 95% conﬁ-
   Twelve of the reviews (addressing 10 different topic areas)                                   dence interval (0.257 to 1.123).
seemed targeted at issues of interest to practitioners with seven                             2. Mapping Study with a parameter estimate = 0.48 and 95%
of the reviews explicitly concentrating on industrial studies.                                   conﬁdence interval ( 0.876 to 0.090).
However, only four papers explicitly provided practitioner-
oriented advice.                                                                              The results of the regression analysis changes slightly if studies
                                                                                           published in Springer book chapters were treated as a separate
4.4.3. Evaluating primary study quality                                                    publication category. In that case the impact of guidelines is no
   The number of SLRs that undertake quality evaluations of the                            longer signiﬁcant at the 0.05 level (with p = 0.06), but the differ-
primary studies is still very low. Only six SLRs (including one map-                       ence between mapping studies remains signiﬁcant (p < 0.01).
ping study) performed a full quality evaluation and two more per-                             A threat to the validity of these results is that our assessment of
formed a partial quality evaluation.                                                       SLR quality might have been inﬂuenced by knowledge that an SLR
                                                                                           did or did not reference the guidelines. For the 14 SLRs published
                                                                                           between 1st January 2004 and 30th June 2007, this threat was re-
4.5. RQ5: Is the quality of SLRs improving?
                                                                                           duced by organizing the data collection form such that quality data
                                                                                           was extracted before other data. For the 19 SLRs published after
    Table 7 compares the mean quality score for SLRs in set T1. It
                                                                                           30th June 2007, the citation information was collected by Kitchen-
illustrates the difference in quality scores for papers that cited
                                                                                           ham after she extracted the quality data, and other researchers
the SLR guidelines and those that did not. Table 8 shows the aver-
                                                                                           were not asked to collect citation information. However, there
age quality for studies published in different sources. It appears
                                                                                           was no attempt to formally blind the reviewers to the SLR refer-
that the lack of quality in ‘‘grey literature” studies observed in
                                                                                           ences during the quality extraction process.
[14] is not discernable in the most recent time period.
                                                                                              Overall the quality of studies appears to have improved, per-
    We collected information about several factors that might
                                                                                           haps as a result of more studies utilizing the SLR guidelines. In par-
potentially impact quality: publication year, review type (i.e.
                                                                                           ticular, the quality scores of book chapters and workshop papers
whether it was mapping study or not), whether it referenced the
                                                                                           are higher in the period July 1st 2007 to June 30th 2008 than in
guidelines (where paper [36] was excluded from the count of pa-
                                                                                           the earlier time period. However, mapping studies, on average,
pers that cited the guidelines), whether it referenced the EBSE pa-
                                                                                           have a lower quality score than conventional SLRs. This is because
pers, and publication type (journal, conference or workshop). We
                                                                                           mapping studies seldom assess the quality of primary studies and
undertook a regression analysis using all these factors with the to-
                                                                                           often do not have clear traceability between individual studies and
tal quality score as the dependent variable and found only two fac-
                                                                                           their individual characteristics.
tors that were statistically signiﬁcant:
Table 7
SLR quality.
  Cited guidelines     Statistic           Time period 1st January 2004 to 30th     Time period 1st January 2004 to 30th June 2007         Time period 1st July 2007 to 30th
                                           June 2007 targeted search [12] T1        broad search (extra papers) [14] T2-1                  June 2008 broad search T2-2
  No                   Number of SLRs      12                                       12                                                     5
                       Mean                2.42                                     1.75                                                   2.0
  Yes                  Number of SLRs      8                                        2                                                      14
                       Mean                2.70                                     3.00                                                   2.93
Table 8
SLR quality for different sources.
  Source                             Time period 1st January 2004 to 30th June 2007 T1 and T2-1                   Time period 1st July 2007 to 30th June 2008 T2-2
                                     Number of SLRs                         Average quality                       Number of SLRs                     Average quality
  Journal                            17                                     2.42                                  8                                  2.56
  Conference                         8                                      2.69                                  4                                  3.12
  Workshop                           5                                      1.9                                   2                                  3
  Book chapter                       3                                      1.7                                   5                                  2.4
    Conference                       0                                      n/a                                   3                                  2.5
    Working conference               2                                      1.75                                  0                                  n/a
    Workshop                         1                                      1.5                                   2                                  2.25
  Technical report                   1                                      1                                     0                                  n/a

<!-- Page 13 -->
804                                    B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805
5. Study limitations                                                           not a targeted manual search of a limited number of software engi-
                                                                               neering conferences and journals. However, ensuring complete-
    One of the major problems with SLRs is ﬁnding all the relevant             ness of an automated search remains problematic. We strongly
studies. In this case, we used an automated search of six sources              recommend authors to use the terms ‘‘systematic review” or ‘‘sys-
which found most of the papers we found in a previous manual                   tematic literature review” in their keywords or title if they want
search. However, the search missed three papers that should have               their studies to be easily found. It seems also that there may be
been found, since it appears that they were not indexed when the               considerable delay between a conference paper being published
original searches took place. The additional search performed in               and information about the paper appearing in any indexing sys-
July 2009 found all papers that used conventional terminology                  tem. Furthermore, this problem is likely to affect any SLR not just
and were mainstream software engineering papers. However,                      our tertiary study and suggests that, for completeness, automated
there is a probability that we have missed some studies that are               searches need to be backed up with manual searches of the most
on the borderline between software engineering, information tech-              recent relevant conference proceedings. It may also be wise to
nology and computer science. In addition, our search strings were              undertake another search using an indexing system such as SCO-
designed to ﬁnd the maximum number of known SLRs, so it is pos-                PUS prior to publishing the results of an SLR.
sible that they missed some studies that used different terminol-                 The results of this study are consistent with previous results in
ogy to describe their literature review (e.g. ‘‘study aggregation”             that:
or ‘‘study synthesis”) without using terms such as ‘‘literature re-
view” or ‘‘literature survey”.                                                      Few SLRs include practitioner guidelines.
    We have also omitted a search for technical reports or graduate                 Few SLRs evaluate the quality of primary studies. We suggest
theses. We make the assumption that good quality grey literature                     authors should provide a rationale if they do not evaluate pri-
studies will appear as journal or conference papers – particularly                   mary study quality, for example, this is reasonable for a large
now that interest in systematic reviews is increasing. Furthermore,                  scale mapping study where follow-on SLRs would be
the main reason for grey literature not being formally published is                  expected to consider the quality of the primary studies.
publication bias, which occurs when negative results are not pub-                   Few SLRs are authored by researchers from the USA.
lished. However, this does not appear to be a problem for system-
atic reviews in software engineering. For example, two recent                     This study has also considered the relationships between SLR
meta-analyses reported fairly negative results but were still pub-             topics and the software engineering undergraduate curriculum.
lished [69,70].                                                                Currently coverage of the undergraduate curriculum topics is lim-
    Another limitation is that the quality assessment in the study             ited. Whether this is because of a lack of primary studies we do not
was performed in two different ways: by using a median in studies              know. However coverage is increasing. Furthermore, we believe it
published before June 30th 2007 and a ‘‘consensus and minority                 would be a worthy long-term goal for empirical software engineer-
report” process for papers published after June 30th 2007. Further-            ing research to provide empirical support for topics identiﬁed in
more a different process was used in the original study i.e. an                the undergraduate curriculum and assist academics preparing edu-
extractor and checker process. However, quality comparisons                    cational material or text books.
within each group of studies are comparable, so our conclusion
that recent SLRs score better with respect to quality is reliable.
    A ﬁnal issue with respect to SLR selection and extracting subjec-          Acknowledgement
tive data, is that one person (Kitchenham) reviewed and extracted
data from all the papers. Although this might potentially have                    This study was funded by the UK Engineering and Physical Sci-
introduced bias, we felt it was important for one person to have               ences Research Council project EPIC/E046983/1.
an overview of all the papers and Kitchenham took this role since
she was the most experienced researcher in this ﬁeld.
                                                                               References
                                                                                [1] B.A. Kitchenham, T. Dybå, M. Jørgensen, Evidence-based software engineering,
6. Conclusions
                                                                                    in: Proceedings of the 26th International Conference on Software Engineering,
                                                                                    (ICSE ’04), IEEE Computer Society, Washington DC, USA, 2004, pp. 273–281.
   The results of this study show two main changes compared                     [2] T. Dybå, B.A. Kitchenham, M. Jørgensen, Evidence-based software engineering
with our previous study:                                                            for practitioners, IEEE Software 22 (1) (2005) 58–65.
                                                                                [3] M. Jørgensen, T. Dybå, B.A. Kitchenham, Teaching evidence-based software
                                                                                    engineering to university students, in: 11th IEEE International Software
   The number of SLRs being published appears to be increasing.                    Metrics Symposium (METRICS’05), 2005, p. 24.
    However, it is still the case that many literature reviews are              [4] Khan S. Khalid, Regina Kunz, Jos Kleijnen, Gerd Antes, Systematic Reviews to
                                                                                    Support Evidence-based Medicine, Springer, 2003.
    not performed in accordance with any methodology. Over                      [5] A. Fink, Conducting Research Literature Reviews. From the Internet to Paper,
    the time period January 1st 2004 to 30th June 2008, we found                    Sage Publication, Inc., 2005.
    53 SLRs (of varying degrees of quality) but we also found 54                [6] Mark Petticrew, Helen Roberts, Systematic Reviews in the Social Sciences: A
                                                                                    Practical Guide, Blackwell Publishing, 2005.
    literature reviews that did not use any deﬁned search strategy              [7] B.A. Kitchenham, Procedures for Undertaking Systematic Reviews, Joint
    (see Section 3.2). This set of 54 studies does not include either               Technical Report, Computer Science Department, 2004, Keele University (TR/
    the 14 candidate SLRs we rejected in the original tertiary                      SE-0401) and National ICT Australia Ltd (0400011T.1).
                                                                                [8] B.A. Kitchenham, S. Charters, Guidelines for Performing Systematic Literature
    study [12] or the four studies we excluded during data extrac-                  Reviews in Software Engineering Technical Report EBSE-2007-01, 2007.
    tion (see Section 3.4).                                                     [9] D.I.K. Sjøberg, J.E. Hannay, O. Hansen, V.B. Kampenes, A. Karahasanovic, N.K.
   The quality of SLRs being published appears to have increased                   Liborg, A.C. Rekdal, A survey of controlled experiments in software
                                                                                    engineering, IEEE Transactions on Software Engineering 31 (9) (2005) 733–
    among all types of publication, particularly workshop publi-
                                                                                    753.
    cations, with the exception of studies where the authors                   [10] J. Hannay, M. Jørgensen, The role of deliberate artiﬁcial design elements in
    appear unaware of the SLR guidelines.                                           software engineering experiments, IEEE Transactions on Software Engineering
                                                                                    34 (2) (2008) 242–259.
                                                                               [11] V.B. Kampenes, T. Dybå, J.E. Hannay, I. Dag, K. Sjøberg, A systematic review of
  These results make it clear that the task of cataloguing high                     effect size in software engineering experiments, Information and Software
quality SLRs must be based on a broad search of all sources and                     Technology 49 (11–12) (2007) 1073–1086.

<!-- Page 14 -->
                                                  B. Kitchenham et al. / Information and Software Technology 52 (2010) 792–805                                              805
[12] B. Kitchenham, O.P. Brereton, D. Budgen, M. Turner, J. Bailey, S. Linkman,            [41] J.H. Hosbond, P.A. Nielsen, Mobile Systems development – a literature review,
     Systematic literature reviews in software engineering – a systematic literature            in: Proceedings of IFIP 8.2 Annual Conference, 2005.
     review, Information and Software Technology 51 (2009) 7–15.                           [42] M. Shaw, P. Clements, The Golden Age of Software Architecture: A
[13] R.L. Glass, I. Vessey, V. Ramesh, Research in software engineering: an analysis            Comprehensive Survey. Technical Report CMU-ISRI-06-101, Software
     of the literature, Information and Software Technology 44 (8) (2002) 491–506.              Engineering Institute, Carnegie Mellon University, 2006.
[14] B. Kitchenham, P. Brereton, M. Turner, M. Niazi, P. Pretorius, D. Budgen, The         [43] A. Davis, A. Hickey, O. Dieste, N. Juristo, A.M. Moreno, A Quantitative
     impact of search procedures for systematic literature reviews – a participant-             Assessment of Requirements Engineering Publications – 1963–2006, LNCS
     observer case study, in: Proceedings of Symposium on Empirical Software                    4542/2007, Requirements Engineering: Foundation for Software Quality, 2007,
     Engineering & Metrics, ESEM, 2009, pp. 336–345.                                            pp. 129–143.
[15] C. Jefferies, P. Brereton, M. Turner, A systematic literature review to investigate   [44] A. Höfer, W.F. Tichy, Status of empirical research in software engineering, in:
     reengineering existing systems for multi-channel access, in: Conference on                 V. Basili et al. (Eds.), Empirical Software Engineering Issues, Springer-Verlag,
     Software Maintenance and Reengineering (CSMR), Athens, April 2008, pp.                     2007, pp. 10–19 (LNCS 4336).
     258–262.                                                                              [45] J. Feller, P. Finnegan, D. Kelly, M. MacNamara, Developing Open Source
[16] J. Bailey, D. Budgen, M. Turner, B. Kitchenham, P. Brereton, S. Linkman,                   Software: A Community-Based Analysis of Research, IFIP International
     Evidence relating to object-oriented software design: a survey, in: Proceedings            Federation for Information Processing, 208/2006, Social Inclusion: Societal
     of Empirical Software Engineering and Measurement, IEEE Computer Society                   and Organizational Implications for Information Systems, 2006, pp. 261–
     Press, 2007, pp. 482–484.                                                                  278.
[17] S. MacDonell, M. Shepperd, Comparing local and global effort estimation               [46] G.A. Liebchen, M. Shepperd, Data sets and data quality in software engineering,
     models reﬂections on a systematic reviews, in: Proceedings of Empirical                    in: PROMISE ‘08: Proceedings of the 4th International Workshop on Predictor
     Software Engineering and Measurement, IEEE Computer Society Press, 2007.                   Models in Software Engineering, May 2008, pp. 39–44.
[18] L. Harjumaa, J. Markkula, M. Oivo, How does a Measurement Programme                   [47] F.J. Pino, F. García, M. Piattini, Software process improvement in small
     Evolve in Software Organizations? PROFES 2008, LNCS 5089, 2008, pp. 230–                   and medium enterprises: a review, Software Quality Journal 16 (2008)
     243.                                                                                       237–261.
[19] G.K. Hanssen, F.O. Bjørnson, and H. Westerheim, Tailoring and Introduction of         [48] C.G. Bellini, R.D.C.D.F. Pereira, J.L. Becker, Measurement in software
     the Rational Uniﬁed Process, EuroSPI 2007, LNCS 4764, 2007, pp. 7–18.                      engineering from the roadmap to the crossroads, International Journal of
[20] P. Mohagheghi, R. Conradi, Quality, productivity and economic beneﬁts of                   Software Engineering and Knowledge 18 (1) (2008) 37–64.
     software reuse: a review of industrial studies, Empirical Software Engineering        [49] M. Staples, M. Niazi, Systematic review of organizational motivation for
     12 (2007) 471–516.                                                                         adopting CMM-based SPI, Information and Software Technology 50 (2008)
[21] M.N. Wicks, R.G. Dewar, A new research agenda for tool integration, Journal of             605–620.
     Systems and Software 80 (2007) 1567–1585.                                             [50] H. Zhang, B. Kitchenham, D. Pfahl, Reﬂections on 10 years of software process
[22] P. Mohagheghi, V. Dehlen, Where Is the Proof? – A Review of Experiences from               simulation modeling: a systematic review. International Workshop on
     Applying MDE in Industry, ECMDA-FA, LNCS 5095, 2008, pp. 432–443.                          Software Process Simulation Modeling, LNCS 5007, 2008, pp. 345–356.
[23] R.C. de Boer, R. Farenhorst, In search of ’architectural knowledge’, in: SHARK        [51] J. Biolchini, P.G. Mian, A.C.C. Natali, G.H. Travassos, Systematic Review in
     ’08: Proceedings of the 3rd International Workshop on Sharing and Reusing                  Software Engineering. Technical Report ES 679/05, 2005.
     Architectural Knowledge, May 2008, pp. 71–78.                                         [52] B. Kitchenham, P. Brereton, M. Turner, M. Niazi, S. Linkman, R. Pretorius, D.
[24] A.P. Freire, R. Goularte, R.P.M. Fortes, Techniques for developing more                    Budgen, Reﬁning the systematic literature review process – two participant-
     accessible web applications: a survey towards a process classiﬁcation, in:                 observer case studies, Empirical Software Engineering, submitted for
     SIGDOC ‘07: Proceedings of the 25th Annual ACM International Conference on                 publication.
     Design of Communication, October 2007, pp. 162–169.                                   [53] Software Engineering 2004 Curricula Guidelines for Undergraduate Degree
[25] M. Renger, G.L. Kolfschoten, G.-J. de Vreede, Challenges in Collaborative                  Programs in Software Engineering. Joint Task Force on Computing Curricula
     Modeling: A Literature Review, CIAO! 2008 and EOMAS 2008, LNBIP 10, 2008,                  IEEE Computer Society Association for Computing Machinery, 2004.
     pp. 61–77.                                                                            [54] A. Abran, J. Moore, P. Bourque, T. Dupuis (Eds.), Guide to Software Engineering
[26] Centre for Reviews and Dissemination, What are the Criteria for the Inclusion              Body of Knowledge, IEEE Computer Society, 2004.
     of Reviews on DARE? 2007, <http://www.york.ac.uk/inst/crd/faq4.htm>                   [55] B. Kitchenham, D. Budgen, P. Brerton, Evidence-based software engineering
     (accessed 24.07.07).                                                                       and systematic literature reviews. Upgrade, The Journal of CEPIS (Council of
[27] F. Dong, M. Li, Y. Zhao, J. Li, Y. Yang, Software Multi-Project Resource                   European Professional Informatics Societies), 2009.
     Scheduling: A Comparative Analysis, ICSP 2008, LNCS 5007, pp. 63–75.                  [56] R.F. Barcelos, G.H. Travassos, Evaluation approaches for Software
[28] M.I. Kamata, A.Y. Yoshida, H. Yoshida, N. Aoji, Figure out the current software            Architectural Documents: A systematic Review, Ibero-American Workshop
     requirements engineering – what practitioners expect to requirements                       on Requirements Engineering and Software Environments (IDEAS), La Plata,
     engineering? in: 14th Asia-Paciﬁc Software Engineering Conference, 2007,                   Argentina, 2006.
     pp. 89–96.                                                                            [57] D. Galin, M. Avrahami, Are CMM program investments beneﬁcial? Analyzing
[29] A. Trifonova, S.U. Ahmed, L. Jaccheri, SArt: towards innovation at the                     past studies, IEEE Software 23 (6) (2006) 81–87.
     intersection of software engineering and art, in: Proceedings of the 16th             [58] S. Grimstad, M. Jorgensen, K. Molokken-Ostvold, Software effort estimation
     International Conference on Information Systems Development, 2007.                         terminology: the tower of Babel, Information and Software Technology 48 (4)
[30] E. Hasnain, T. Hall, Investigating the Role of Trust in Agile Methods Using a              (2006) 302–310.
     Light Weight Systematic Literature Review, XP 2008, LNBIP 9, 2008, pp. 204–           [59] M. Jørgensen, A review of studies on expert estimation of software
     207.                                                                                       development effort, Journal of Systems and Software 70 (1–2) (2004) 37–60.
[31] A.D. Neto, R. Subramanyan, M. Viera, G.H. Travassos, F. Shull, Improving              [60] M. Jørgensen, Estimation of software development work effort: evidence on
     evidence about software technologies, a look at model-based testing, IEEE                  expert judgement and formal models, International Journal of Forecasting 3 (3)
     Software 25 (6) (2008) 242–249.                                                            (2007) 449–462.
[32] S. Grimstad, M. Jorgensen, K. Møløkken-Østvold, 2005 The clients’ impact on           [61] N. Juristo, A.M. Moreno, S. Vegas, M. Solari, In search of what we
     effort estimation accuracy in software development projects, in: 11th IEEE                 experimentally know about unit testing, IEEE Software 23 (6) (2006) 72–80.
     International Software Metrics Symposium (METRICS’05), p. 3.                          [62] B. Kitchenham, E. Mendes, G.H. Travassos, A systematic review of cross- vs.
[33] M. Jørgensen, Evidence-based guidelines for assessment of software                         within-company cost estimation studies, IEEE Trans on SE 33 (5) (2007) 316–
     development cost uncertainty, IEEE Transactions on Software Engineering                    329.
     (2005) 942–954.                                                                       [63] C. Mair, M. Shepperd, The consistency of empirical comparisons of regression
[34] A. Davis, O. Dieste, A. Hickey, N. Juristo, A.M. Moreno, Effectiveness of                  and analogy-based software project cost prediction, in: International
     requirements elicitation techniques: empirical results derived from a                      Symposium on Empirical Software Engineering, 2005.
     systematic review, in: 14th IEEE International Requirements Engineering               [64] K.J. Moløkken-Østvold, M. Jørgensen, S.S. Tanilkan, H. Gallis, A.C. Lien, S.E.
     Conference (RE’06), 2006, pp. 179–188.                                                     Hove, A survey on software estimation in the norwegian industry, in:
[35] M. Shepperd, Software Project Economics: A Roadmap, FOSE’07, 2007.                         Proceedings Software Metrics Symposium, 2004.
[36] M. Mair, M. Shepperd, M. Jørgensen, An Analysis of Data Sets Used to Train and        [65] H. Petersson, T. Thelin, P. Runeson, C. Wohlin, Capture–recapture in software
     Validate Cost Prediction Systems, PROMISE’05 Workshop, 2005.                               inspections after 10 years research – theory, evaluation and application,
[37] A. Yalaho, A conceptual model of ICT-supported uniﬁed process of international             Journal of Systems and Software 72 (2004) 249–264.
     outsourcing of software production, in: 10th International Enterprise                 [66] P. Runeson, C. Andersson, T. Thelin, A. Andrews, T. Berling, What do we know
     Distributed Object Computing Conference Workshops (EDOCW’06), 2006.                        about defect detection methods?, IEEE Software 23 (3) (2006) 82–86
[38] H. Kagdi, M.L. Collard, J.I. Maletic, A survey and taxonomy of approaches for         [67] M. Torchiano, M. Morisio, Overlooked aspects of COTS-based development,
     mining software repositories in the context of software evolution, Journal of              IEEE Software 21 (2) (2004) 88–93.
     Software Maintenance and Evolution: Research and Practice 19 (2) (2006) 77–           [68] E.M. Rogers, Diffusion of Innovations, forth ed., FreePress, New York, 1995.
     131.                                                                                  [69] J.E. Hannay, T. Dybå, E. Arisholm, D.I.K. Sjøberg, The effectiveness of pair-
[39] J. Segal, A. Grinyer, H. Sharp, The Type of Evidence Produced by Empirical                 programming: a meta-analysis, IST 51 (7) (2009) 1110–1122.
     Software Engineers, REBSE’05, 2005.                                                   [70] M. Ciolkowski, What do we know about perspective-based reading? An
[40] M. Höst, C. Wohlin, T. Thelin, Experimental context classiﬁcation: incentives              approach for quantitative aggregation in software engineering, in: Third
     and experience of subjects, in: ICSE’05, Proceedings of the 27th International             International Symposium in Empirical Software Engineering and
     Conference on Software Engineering, ACM, 2005.                                             Measurement, 2009, pp. 133–144.

<!-- Page 15 -->

