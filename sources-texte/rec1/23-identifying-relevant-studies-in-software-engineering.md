<!-- Page 1 -->
                                                             Information and Software Technology 53 (2011) 625–637
                                                                  Contents lists available at ScienceDirect
                                                Information and Software Technology
                                                   journal homepage: www.elsevier.com/locate/infsof
Identifying relevant studies in software engineering
He Zhang a,⇑, Muhammad Ali Babar b, Paolo Tell b
a
    National ICT Australia, University of New South Wales, Australia
b
    IT University of Copenhagen, Denmark
a r t i c l e           i n f o                            a b s t r a c t
Article history:                                           Context: Systematic literature review (SLR) has become an important research methodology in software
Available online 28 December 2010                          engineering since the introduction of evidence-based software engineering (EBSE) in 2004. One critical
                                                           step in applying this methodology is to design and execute appropriate and effective search strategy. This
Keywords:                                                  is a time-consuming and error-prone step, which needs to be carefully planned and implemented. There
Search strategy                                            is an apparent need for a systematic approach to designing, executing, and evaluating a suitable search
Quasi-gold standard                                        strategy for optimally retrieving the target literature from digital libraries.
Systematic literature review
                                                           Objective: The main objective of the research reported in this paper is to improve the search step of
Evidence-based software engineering
                                                           undertaking SLRs in software engineering (SE) by devising and evaluating systematic and practical
                                                           approaches to identifying relevant studies in SE.
                                                           Method: We have systematically selected and analytically studied a large number of papers (SLRs) to
                                                           understand the state-of-the-practice of search strategies in EBSE. Having identiﬁed the limitations of
                                                           the current ad-hoc nature of search strategies used by SE researchers for SLRs, we have devised a system-
                                                           atic and evidence-based approach to developing and executing optimal search strategies in SLRs. The pro-
                                                           posed approach incorporates the concept of ‘quasi-gold standard’ (QGS), which consists of collection of
                                                           known studies, and corresponding ‘quasi-sensitivity’ into the search process for evaluating search perfor-
                                                           mance.
                                                           Results: We conducted two participant–observer case studies to demonstrate and evaluate the adoption
                                                           of the proposed QGS-based systematic search approach in support of SLRs in SE research.
                                                           Conclusion: We report their ﬁndings based on the case studies that the approach is able to improve the
                                                           rigor of search process in an SLR, as well as it can serve as a supplement to the guidelines for SLRs in EBSE.
                                                           We plan to further evaluate the proposed approach using a series of case studies on varying research top-
                                                           ics in SE.
                                                                                                                                Ó 2011 Elsevier B.V. All rights reserved.
1. Introduction                                                                            primary studies relevant to the research questions as possible
                                                                                           using an unbiased search strategy. The rigor of the search process
   Systematic reviews (also referred as systematic literature re-                          is one critical factor that distinguishes systematic reviews from
views, SLRs) aim to identify, assess and combine the evidence from                         traditional (ad-hoc) literature reviews.
primary research studies using an explicit and rigorous method.                                Similar to other disciplines, many researchers doing SLRs rely
This method has been widely implemented in some disciplines,                               on searches of digital libraries for identifying relevant studies in
such as medicine and sociology. Since the publication of the sem-                          software engineering (SE). However, these database searches have
inal paper of Evidence-Based Software Engineering (EBSE) [25] in                           typically been designed using methods lacking in scientiﬁc rigor,
ICSE 2004, systematic review has become an important methodol-                             instead often relying solely on investigator’s past experience and
ogy of EBSE, and many SLRs have been conducted and reported.                               knowledge of the subject matter [8]. In practice, identifying pri-
   EBSE involves ﬁve distinct steps [16]. The second step, ‘search                         mary studies can be difﬁcult for several reasons, including inade-
the literature for the best available evidence to answer the question’,                    quate search strategy, heterogeneity of language describing the
builds the basis for evidence aggregation, appraisal and further                           subject matter, and limited range of indexing terms describing
integration with decision making practice. Kitchenham and                                  study methodology [11]. Though Biolchini et al. suggest evaluating
Charters [24] also state that the aim of an SLR is to ﬁnd as many                          search engines to verify if they are capable of executing search
                                                                                           strings during the planning phase [7], no concrete instruction has
    ⇑ Corresponding author. Tel.: +61 2 9376 2227; fax: +61 2 9376 2023.                   been provided for search strategy evaluation.
   E-mail addresses: he.zhang@nicta.com.au (H. Zhang), maba@itu.dk (M.A. Babar),               Despite the current state that neither the above EBSE methodol-
pate@itu.dk (P. Tell).                                                                     ogy papers nor the SLR guidelines include the practical instructions
0950-5849/$ - see front matter Ó 2011 Elsevier B.V. All rights reserved.
doi:10.1016/j.infsof.2010.12.010

<!-- Page 2 -->
626                                         H. Zhang et al. / Information and Software Technology 53 (2011) 625–637
about how to improve and evaluate the rigor and performance of a                  reported SLRs in SE have also employed manual search, alone or
search strategy, some issues related to literature search in SE                   combined with automated search, in speciﬁc venues (e.g., [19]).
have emerged and been reﬂected in SLRs on different topics in                         In manual (hand) search, investigators scan the venues (e.g.,
SE, such as                                                                       journals or conferences) paper by paper and issue by issue. This
                                                                                  search method may ensure the capture of relevant studies in the
  How to design a rigorous search strategy that maximizes the collec-            speciﬁed venues, but in the meantime, consumes a signiﬁcant
   tion of relevant studies?                                                      amount of effort in examining many irrelevant studies. Instead,
  What are the criteria of an affordable and reliable strategy to effec-         automated search uses search strings, which represent the identi-
   tively balance the search sensitivity (recall) and precision (effort)?         ﬁers of the subject, to retrieve results from search engines (digital
  Is it possible to evaluate a predeﬁned search strategy and the cor-            libraries). Compared to manual search, this method is more efﬁ-
   responding search strings?                                                     cient, but its performance depends on the quality of search string,
                                                                                  capability of search engine, and diversity of the subject.
    Moreover, the most recent version of guidelines [24] also                         Where to search? ‘Search venue’ was used as a general term for
encourage software engineering researchers to develop and pub-                    where relevant studies can be published and retrieved. We use
lish such strategies including identiﬁcation of relevant digital                  ‘search venue’ distinct from ‘search engine’ in deﬁning search
libraries. Hence, there is an apparent need for validating search                 strategies. As automated search always retrieves results from
strategies for SLRs that optimize retrieval of relevant papers from               search engines [24], in contrast, the former is dedicated to the ven-
digital libraries and electronic databases for researchers and prac-              ues speciﬁed in citations (e.g., journals and conferences) in this pa-
titioners. This paper purposes to contribute to the efforts aimed at              per, they are speciﬁed and scanned in manual search. As illustrated
addressing the above mentioned needs. We have devised a system-                   in Fig. 1, there exist many-to-many relationships between them:
atic and practical approach for search strategy development in or-                one engine can cover a number of venues, while one venue may
der to improve the rigor of search processes in SLRs. This approach               also be retrievable from more than one engine.
also strives to balance the retrieval of validated set of relevant pa-                What to search? Subject and article type, which are normally de-
pers in SE and the effort consumed in this phase.                                 ﬁned in protocol, are two important ﬁlters to remove irrelevant
    This paper is structured as follows. Section 2 introduces                     studies and low quality studies. For SLRs in SE, the most commonly
concepts related to search strategies for SLRs and briefs the                     used subjects are ‘computer science’ and ‘software engineering’.
state-of-the-practice of literature search in SLRs in SE. In Section 3,           Search strings, which connect keywords with logic operators, are
we describe the proposed systematic and practical approach for                    inputs to search engines in automated search. This paper proposes
implementing a relatively rigorous literature search. This search                 a systematic search approach that improves search string develop-
approach is then demonstrated and evaluated by two ‘replicated’                   ment and evaluation.
literature searches (participant-observer case studies) and com-                      When and what time span to search? Time span of the studies in
pared to their original SLRs in Sections 4 and 5 respectively. We                 search is determined by the purpose of an intended SLR and its fo-
discuss the ﬁndings from the case studies designed to assess the                  cused research questions. For example, trend analysis for a given
proposed systematic search approach and the threats to validity                   period, or synthesis of collection of full evidence for answering a
in Sections 6 and 7 respectively. They are followed by an overview                speciﬁed question. As it normally takes (at least) several months
of the related research in Section 8. Finally, Section 9 draws the                from the initial search to the appearance of an SLR for public access,
conclusions of this paper.                                                        the search date(s) should be denoted in the report to make an SLR
                                                                                  transparent and repeatable, i.e. when the search was conducted?
2. Search strategy in systematic literature reviews                               2.2. Evaluating search strategy
2.1. Deﬁning search strategy                                                          Subjective vs. objective evaluation. The performance of a search
                                                                                  strategy can be evaluated by examining the answers to the above
   A necessary and crucial step of SLR is the identiﬁcation of as                 search design questions and the results retrieved from the search
much relevant literature to research questions as possible. Search                process in which the strategy applies. The evaluation can be imple-
strategy, which deﬁnes the methods to retrieve the relevant liter-                mented in subjective and/or objective forms.
ature, has been developed in many ways, but the typical approach                      In subjective evaluation, some external experts review the pre-
can be for information professionals (in subject matter) to use their             deﬁned search strategy as a part in an SLR protocol before the stage
combined knowledge of databases (digital libraries), search tech-                 of conducting the review. After the automated search, some pre-indi-
niques, thesauri and the ﬁeld of interest, to explore, often itera-               cated studies (based on expert’s awareness of domain knowledge)
tively, combinations of terms which capture the concepts of                       are compared to the search results. However, the reliability of
interest [29]. An optimum search strategy is expected to provide
effective solutions to a series of questions for search process in SLR:
1. Which approach to be used in search process (e.g., manual or auto-
   mated search)?
2. Where (venues or databases) to search, and which part of article
   (ﬁeld) should be searched?
3. What (subject, evidence type) to be searched, and what are queries
   (search strings) fed into search engines?
4. When is the search carried out, and what time span to be
   searched?
   Which approach(es)? The guidelines [7,24] emphasise the litera-
ture search through web search engines provided by digital li-
braries, i.e. automated search. However, in practice, many                                            Fig. 1. Search venues and search engines.

<!-- Page 3 -->
                                                 H. Zhang et al. / Information and Software Technology 53 (2011) 625–637                                  627
subjective evaluation highly relies on their personal knowledge in a                   Table 1
speciﬁc domain, which is difﬁcult to be quantiﬁed. Apart from the                      Search engines and venues.
subjective approach, objective evaluation employs a set of quanti-                        Rank            Search engine            # of SLRs      % of SLRs
tative criteria to assess performance of a search strategy.                               (a) Search engines used more than once
    Sensitivity and precision. Two important criteria borrowed from                       1                IEEE Xplore             24             92
medicine can be used for evaluating the quality and efﬁciency of                          2                ACM digital library     21             81
a search strategy. Sensitivity for a given topic is deﬁned as the pro-                    3                ScienceDirect           15             58
                                                                                          4                ISI Web of Science      10             38
portion of relevant studies retrieved for that topic; and precision is                    5                EI Compendex             9             35
the proportion of retrieved studies that are relevant studies. Fig. 2                     6                SpringerLink             8             31
shows different search strategies within search universe and the                          6                Wiley InterScience       8             31
relation with gold standard (being explained in this subsection).                         6                Inspec                   8             31
                                                                                          9                Google Scholar           6             23
    In automated search, given search strings, the selected search
                                                                                          10               SCOPUS                   2              8
engine (library) retrieves a certain number of results (studies).                         10               Kluwer                   2              8
Then the sensitivity and precision corresponding to the search
                                                                                          (b) Search venues used more than once
strings and engine can be calculated as:                                                  1               IEEE Software             4             27
               Number of relev ant studies retriev ed                                     1               ESEM                      4             27
Sensitiv ity ¼                                        100%                   ð1Þ          1               ISESE                     4             27
                 Total number of relev ant studies
                                                                                          4               TSE                       3             20
             Number of relev ant studies retriev ed                                       4               ICSE                      3             20
Precision ¼                                          100%                    ð2Þ
                  Number of studies retriev ed                                            4               JSS                       3             20
                                                                                          4               IEEE Computer             3             20
Gold standard. The ‘gold standard’ represents, as accurately as possi-                    8               Metrics                   2             13
ble, the known set of identiﬁed primary studies in a collection                           8               TOSEM                     2             13
according to the deﬁnition of research questions in an SLR. Gold                          8               ESE                       2             13
standard normally plays two distinct roles in the evaluation frame-                       8               WWW                       2             13
                                                                                          8               ICSM                      2             13
work. For SLRs, it is assumed to be truth in appraising the sensitivity                   8               MISQ                      2             13
of a search strategy; it is also a source of training samples for reﬁn-
ing search strings [29]. In practice, it may be appropriate to bifur-
cate the gold standard for these two purposes.                                         2.3.1. Automated search vs. manual search
    A highly sensitive search strategy will retrieve most of the stud-                    To investigate the realistic implementation of search strategies
ies in the gold standard, but may also retrieve many unwanted arti-                    in EBSE, we conducted a search of SLRs published in SE, which ex-
cles (Fig. 2). A highly precise search strategy will retrieve only a                   tends the search reported in the tertiary study [22] with the up-
small portion of irrelevant articles, but may miss a large number                      dated records by the end of 2008. This up-to-date SLR search
of papers in the gold standard. A perfect search strategy would be                     identiﬁed 38 SLRs (including systematic mapping studies). The
100% sensitive as well as 100% precise, capturing exactly the gold                     search results consists of 68% (26 out of 38) reported SLRs using
standard without any irrelevant ones.                                                  automated search; 39% (15 out of 38) using manual search; and
    Gold standard has been used for improving literature search in                     26% (10 out of 38) combining the both. Several SLRs did not report
systematic reviews in other disciplines, such as medicine, clinical                    the search method they used, or were conducted based on the
research and social science [11,29]. Nevertheless, it is not possible                  studies identiﬁed by other SLRs, such as [18].
to have ‘gold standard’ for most SLRs in SE. Accordingly, this paper                      Methodologically, the manual and automated searches were
introduces the concept of ‘quasi-gold standard’ that is a set of                       independently used in the existing SLRs in SE. Even for the SLRs
known studies from related publication venues on a research topic.                     using the both, they designed their manual and automated search
                                                                                       respectively and simply combined the results from the both meth-
2.3. State of the practice                                                             ods. These SLRs neither discover any relationships between the
                                                                                       search methods (i.e. automated and manual), nor established the
   Since the introduction of EBSE and SLR, the number of SLRs in SE                    methodological linkage between and integration of them.
has been growing rapidly. This subsection brieﬂy summarizes the
state-of-the-practice of search strategies in EBSE from the above                      2.3.2. Search engines (digital libraries) and search venues
aspects.                                                                                   Table 1a summarizes 11 search engines (digital libraries) used
                                                                                       more than once in SLRs for searching relevant studies in SE, which
                                                                                       are ranked in the order of their frequencies. Among them, IEEE
                                                                                       Xplore and ACM DigitalLibrary are the main search portals for most
                                                                                       SLRs in SE. Table 1b lists top venues for manual search used twice
                                                                                       or more in SLRs. The venues related to SE in general (e.g., IEEE Soft-
                                                                                       ware, TSE, ICSE) and empirical software engineering (e.g., ESEM, IS-
                                                                                       ESE) were most consulted in manual search in the existing SLRs.
                                                                                           In addition, some SLRs employed more speciﬁc sources for their
                                                                                       literature search, such as BESTweb [17] and university library ser-
                                                                                       vices, which are dedicated to one subject in SE but sometimes not
                                                                                       accessible for external researchers.
                                                                                       3. QGS-based systematic search approach
                                                                                          Based on the concept of quasi-gold standard (QGS), this section
                                                                                       constructs a systematic, repeatable, and practical literature search
                                                                                       approach for SE, which provides a mechanism for search strategy
            Fig. 2. Search sensitivity, precision, and gold standard.                  development and evaluation.

<!-- Page 4 -->
628                                           H. Zhang et al. / Information and Software Technology 53 (2011) 625–637
3.1. Mechanism and overview                                                            Fig. 3 shows the mechanism underpinning the proposed search
                                                                                    approach. The results (papers) from manual search are used for
   To avoid the possible limitations of applying single search                      establishing a QGS, which can further elicit the search strings for
method (automated or manual) in SLR and to provide a practical                      automated search, or later evaluate the search strategy. In the
and relatively rigorous method for search string evaluation, we                     opposite direction, automated search complements manual search,
propose a systematic literature search approach, as a complement                    expands the coverage and capture most of the relevant studies in a
to the existing SLR guidelines, in support of retrieval of relevant                 relatively rigorous form.
studies. It recommends that an optimum search strategy should
be an effective integration of manual search and automated search,                  3.1.2. Approach overview
which are able to support each other (as illustrated in Fig. 3).                        Fig. 4 presents an overview of the proposed search approach,
                                                                                    which starts with identifying venues for manual search and en-
3.1.1. QGS: quasi-gold standard                                                     gines (libraries and databases) for automated search. The QGS is
    In terms of our observation [32] (that is also conﬁrmed by the                  established by performing manual search in the selected venues,
results from the ﬁrst case study), most of the reported SLRs in SE                  and the identiﬁed studies are then grouped by their respective li-
developed their search strategies subjectively. Even for the well-                  braries and databases.
conducted SLRs, search strategies were developed by teams with                          The design of search string can be in a subjective or objective
expertise and tested on collections of ‘well-known’ samples to as-                  approach. In subjective method, the search strings are devised by
sess the search performance. Unfortunately, such preset ‘well-                      researchers according to their knowledge in the subject matter
known’ samples, which highly depend on reviewers’ knowledge                         (like many previous SLRs), then tested by the ‘quasi-gold standard’.
on a subject matter, cannot replace the gold standard for evalua-                   The objective approach elicits keywords for search automatically
tion, as a full set of primary studies is impossible to be accessed                 from articles in the QGS through word frequency or content anal-
prior to the execution of an SLR.                                                   ysis tools. They are connected by logic operators and input to auto-
    Instead, we introduce the concept of ‘quasi-gold standard’, which               mated search, and search results will be combined with the QGS
is a set of known studies from the related venues, e.g., domain-                    once they are assessed as ‘acceptable’ in evaluation.
speciﬁc conferences and journals recognized by the community
in the subject, for a given time span. Note that compared to a gold                 3.2. The systematic search process
standard, there are two more constraints associated with a ‘quasi-
gold standard’: venues (where) and period (time span). In other                         The systematic literature search process proposed in this paper
words, a ‘quasi-gold standard’ can be regarded as a ‘gold standard’                 is composed of ﬁve steps.
in the conditions where these constraints apply. Accordingly, a
more objective method for devising and testing search strategies
                                                                                    3.2.1. Step 1: Identify related venues and databases
is developed and integrated into a systematic search process,
                                                                                       The literature search process starts with the identiﬁcation of the
which may rely on an analysis of information from the available
                                                                                    relevant publication venues. In SE, many digital libraries are avail-
records (QGS) rather than subjective input from searchers’ percep-
                                                                                    able for automated search, and even more venues for manual
tions (like many SLRs did). On the other hand, for the subjective
                                                                                    search.
approach of search string design, QGS can also be used for evaluat-
                                                                                       Select publication venues for manual search. Research questions
ing the search strategy (see Section 4).
                                                                                    for an SLR are motivated by the research in a particular subject
       Fig. 3. Mechanism underpinning the systematic search approach.                          Fig. 4. Workﬂow of the proposed systematic search process.

<!-- Page 5 -->
                                            H. Zhang et al. / Information and Software Technology 53 (2011) 625–637                                 629
matter (domain) in SE. For an experienced and knowledgeable re-                   In the objective approach, a frequency analysis of citation informa-
searcher working in this area, the related domain-speciﬁc venues                  tion of the papers in QGS is undertaken followed by a statistical
can be identiﬁed without much difﬁculty. These venues consist                     analysis of the most frequently occurring words or phrases. This
of a collection of proceedings of the conferences specialized in that             analysis determines which terms or phrases would best distinguish
domain and major journals where the community often publishes                     relevant studies from irrelevant ones.
their research.                                                                       Some textual analysis packages, such as SimStat and WordStat
    As manual search is time-consuming, a large number of selected                [3], are able to facilitate the identiﬁcation of the frequently
venues may lag behind the overall progress of SLR. In order to im-                occurring terms in particular items of studies. For instance, the
prove the efﬁciency of manual search, as well as to secure the qual-              title-abstract-keywords of the papers in QGS are imported into the
ity of QGS, the nominated venues for manual search also need to be                analysis software for frequency analysis. This may produce all
evaluated by independent experts in this domain, and any emerg-                   the words or phrases being ranked according to the number of re-
ing disagreements must be resolved before the next step.                          cords in which each word appears by case. This technique is able to
    Select libraries (databases) for automated search. The selection              identify the candidate search terms and their relations with excep-
depends on the distribution of related venues across libraries, the               tion of some stop words which are deliberately excluded [29] (e.g.,
coverage and overlapping among them, and their accessibility to                   ‘the’ and ‘of’).
searchers. Whereas, by observing the most existing SLRs, IEEE                         Note that although the statistical software for textual analysis
Xplore and ACM DigitalLibrary become the must-have literature                     can help the search terms elicitation, especially for a large scale
portals that are recommended for consideration of any automated                   QGS, subjective judgement might also be needed to ﬁnally con-
search of future SLRs in SE.                                                      struct the string for automated search based on the frequency list
    Given the many-to-many relationships between search venues                    generated through the computer aided analysis.
and search engines (Fig. 1), an optimum combination of both
should cover a maximum number of search venues with a mini-                       3.2.4. Step 4: Conduct automated search
mum set of search engines (libraries), in other words, eliminate                     In this step, the digital libraries are searched using the strings,
as much overlap as possible.                                                      which are (subjectively) deﬁned or (objectively) elicited. As the
                                                                                  search syntax varies between search engines, the search strings
3.2.2. Step 2: Establish QGS                                                      need to be coded correspondingly in advance by following the spe-
   The manual search is conducted by screening all papers, one by                 ciﬁc syntax and criteria of each search engine (library). Given the
one, published in the selected publication venues (e.g., proceedings              capability limitations of some search engines (for example ACM
and journals) during a given time. The title-abstract-keywords ﬁelds              DigitalLibrary [14]), the automated search sometimes has to be
of a paper are often ﬁrst checked. The inclusion and exclusion cri-               implemented by splitting the combination of search terms into
teria should be explicitly deﬁned in advance. As recommended in                   multiple simple ones. Note that due to the overlapping (such as be-
the guidelines [24], the reliability of inclusion decision should be              tween IEEE and ACM), the duplicate papers retrieved from different
assessed using the Kappa statistic between researchers, or re-                    search engines also need to be identiﬁed and removed in this step.
viewed by an external panel. If selection decision could not be
made, the other ﬁelds (like conclusion or even full-text) need to                 3.2.5. Step 5: Evaluate search performance
be further examined.                                                                  The search results need to be evaluated against QGS for ensur-
   One important assumption underlying the manual search pro-                     ing the quality of automated search.
cesses in the previous SLRs is that all relevant papers within the                    Calculate ‘quasi-sensitivity’. In EBSE, missing important studies
indicated venues could be identiﬁed by carefully screening all                    from an SLR may lead to the generation of inaccurate evidence.
the articles. Hence, once the screening is completed and agreement                Accordingly, compared to precision, sensitivity becomes the top cri-
on the selection is reached, all these identiﬁed papers are used to               teria considered when evaluating the search performance in most
form the QGS.                                                                     SLRs. Unfortunately, as the gold standard for the subject is un-
   As QGS is venue- and period-speciﬁc, the venues selected in Step               known, the corresponding sensitivity cannot be calculated (Eq. 1)
1 can also be grouped by digital libraries (engines). For a large scale           at this stage. Whereas, our systematic search approach uses the
SLR, in addition to an overall QGS, this step may produce more than               quasi-gold standard (from the manually selected venues) to mea-
one subset of QGS, each of which corresponds to one dedicated                     sure quasi-sensitivity instead of the search universe (Fig. 2).
search engine. They enable testing search string’s performance                        Researchers calculate the number of relevant papers retrieved
for individual library.                                                           from the selected venues (Step 1) through automated search (Step
                                                                                  4). Obviously, this number must not be greater than the number of
3.2.3. Step 3: Deﬁne or elicit search strings                                     papers identiﬁed in Step 2. Divided by the pool size of QGS, the cor-
    Since search strings for automated search can be deﬁned based                 responding ‘quasi-sensitivity’ can be calculated.
on subjective expertise or elicited from the ‘quasi-gold standard’,                   Evaluate performance. The quasi-sensitivity could be up to 100%
the search process bifurcates at this step.                                       but is often less. It needs to be compared against a rational thresh-
    Subjective search string deﬁnition. Most previously reported SLRs             old to ﬁnally determine if the performance of automated search is
in SE used automated search in a subjective form. The reviewers                   acceptable. Although sensitivity and precision are the important cri-
deﬁned their search strings based on their domain knowledge                       teria for evaluating search strategies and a tradeoff is always being
and past experiences. Though the strings they chose could be eval-                pursued between them in search strategies, a high sensitivity is
uated later by QGS, in the subjective approach, it would be in-                   usually more desired than a high precision in terms of the goals
spected by experts in the subject matter to reduce the number of                  of SLRs.
possible iterations and further save effort. Fig. 4 displays there                    Table 2 displays the search strategy scales used for evaluating
might be backward link from the ‘decision’ to Step 3. In this case,               search terms in [13], which was inferred from the sensitivity and
the set of search terms has to be reﬁned or enriched in order to                  precision ranges of SLRs in medicine. Based on the scales, we sug-
capture more samples in QGS through next round of automated                       gest a threshold between 70% and 80% (acceptable) as a reference
search.                                                                           for sensitivity evaluation of search performance.
    Objective search terms elicitation. One of the uses of QGS is to eli-             For example, if we choose 80% as the threshold for search string
cit the recommended search terms and phrases using text mining.                   evaluation, then

<!-- Page 6 -->
630                                                 H. Zhang et al. / Information and Software Technology 53 (2011) 625–637
Table 2                                                                                   engineering was selected as reference for the case study. This SLR
Search strategy scales.                                                                   performed a manual search in 13 venues with the explicit time
  Strategy            Sensitivity    Precision   Comments                                 span from Jan 2004 through the middle of 2007. As an SLR is a type
                      (%)            (%)                                                  of secondary study, their work can be regarded as a tertiary study.
  High sensitivity    85–90          7–15        Max sensitivity despite low              It retrieved 34 candidate papers, among which 20 SLRs were ﬁnally
                                                 precision                                identiﬁed as relevant studies and included in the SLR-1.
  High precision      40–58          25–60       Max precision rate despite low
                                                 recall
  Optimum             80–99          20–25       Maximize both sensitivity &
                                                                                          4.2. Search implementation
                                                 precision
  Acceptable          72–80          15–25       Fair sensitivity & precision             4.2.1. Search venues and libraries
                                                                                              At the manual search stage, we chose the venues (journals and
                                                                                          conferences) related to Empirical Software Engineering (ESE) and
                                                                                         EBSE. By carefully considering the publication venues available in
                              P 80%; then; move forward . . . ;
quasi  sensitiv ity                                                              ð3Þ     SE community with reference to the rankings [2,1], 9 of them were
                              < 80%; then; go back to Step 3:
                                                                                          selected by the ﬁrst two authors for this study (Table 3). Note that
    If the search performance is considered acceptable (quasi-sensi-                      the selected venues for manual search in this case study are differ-
tivity P80%), the results from the automated search can be merged                         ent to the original SLR somehow for two reasons: (1) though the
with the QGS, and the search process terminates. Otherwise, the                           replicated search strategy is designated for the same research
process has to go back to Step 3 for search string reﬁnement, which                       questions, the authors may have slightly different recognition of
may form an iterative improvement of search strings until the per-                        the ‘related’ venues from the original researchers of the SLR-1;
formance becomes acceptable. However, in practice, the decision                           (2) the purpose of the manual search here is to establish the
of an appropriate threshold need to consider a number of relevant                         QGS, rather to strive to capture as many relevant papers as possi-
factors to the characteristics of a given research topic (such as the                     ble. Therefore, some originally used venues were ignored at the
diversity of subject, scope of research questions, and the scattering                     manual search stage, and two additional venues, EASE and ESEM,
of the descriptive keywords). The values of the threshold may                             were added to the list because of their tight linkages to ESE and
slightly vary from case to case.                                                          EBSE.
    The following two sections investigate the proposed systematic                            The nominated venues can be grouped into ﬁve libraries (Table
search approach using participant–observer case studies (deﬁned                           3), four of which were selected for the automated search due to
by [30]), in which the literature searches of two published SLRs                          their popularity in SE research, i.e. IEEE Xplore, ACM DigitalLibrary,
were replicated and compared. The two case studies chose to                               ScienceDirect and SpringerLink. Note that other libraries can also
implement different search string deﬁnition methods: the ﬁrst case                        be employed for automated search, but given this selection, the
study used the subjective string deﬁnition; the second imple-                             QGS is only valid for evaluating the searches through them.
mented the objective terms elicitation.
                                                                                          4.2.2. QGS and automated search
                                                                                              In this case study, the target papers should be ‘systematic re-
4. Case study 1
                                                                                          views in software engineering’. Accordingly, we slightly reﬁned the
                                                                                          inclusion and exclusion criteria reported in the original SLR-1
   The ﬁrst case study was performed by the ﬁrst two authors in
                                                                                          [22]. Two authors screened all papers published in the venues from
order to formally trial the systematic search process. A partici-
                                                                                          2004 to 2008 during the manual search independently until
pant–observer case study allowed us to access the case informa-
                                                                                          reached joint agreements on all included SLRs. In total, 21 pub-
tion without any barrier [30]. The original search of a tertiary
                                                                                          lished SLRs were retrieved and 20 of them were used for building
study in software engineering was replicated in this case study,
                                                                                          the QGS. One paper published by BCS was excluded from the
and the subjective search string deﬁnition method was applied.
                                                                                          QGS since it is impossible to be retrieved by the above selected li-
                                                                                          braries for the QGS (BCS exclusive), but was included in the ﬁnal
4.1. The original SLR-1                                                                   relevant studies. Table 3 shows the venues and their numbers of
                                                                                          relevant papers (by 2007 and 2008 respectively).
   In order to avoid any subjective bias during the search and                                The case study implemented automated search by following the
screening process, the original SLR-1 should be carefully selected                        subjective deﬁnition approach, in which the search strings were
as the reference to this case study. Some criteria were applied:                          constructed based on the authors’ knowledge about EBSE, and their
                                                                                          observation of the papers (SLRs) included in the QGS. As we were
1. The search strategy and search venues and/or databases applied                         looking for SLRs in SE, we intuitively initiated the automated
   in the original SLR must be explicitly described in the published                      search with the string (software AND systematic AND review)
   SLR report.
2. Relevant studies can be identiﬁed with minimum possible
                                                                                          Table 3
   ambiguity. That minimizes the subjective bias due to knowl-
                                                                                          Selected venues for manual search in CS-1.
   edge difference between the researchers in the original and
   the replicated searches.                                                                  Venue                    Library/publisher   2007 mid   2008 end
3. The articles included in the original SLR must be explicitly con-                         TSE                      IEEE                 4          4
   strained in deﬁnite time frame for an easy replication. Some                              IEEE Software            IEEE                 1          1
   SLRs with search end date open ‘to present’ are excluded here.                            ESEM (’07, ’08)          IEEE/ACM             0          2
                                                                                             ISESE (’04–’06)          IEEE/ACM             2          2
4. The publication that reports SLR must include the list of identi-                         Metrics (’04, ’05)       IEEE                 0          0
   ﬁed papers, which may enable a detailed comparison with the                               0.9 IST                  Elsevier             2          7
   results from the replicated search.                                                       JSS                      Elsevier             2          2
                                                                                             EMSE                     Springer             0          2
                                                                                             EASE (’06–’08)           IEE/BCS              0          1
   In terms of the above criteria, The SLR-1 by Kitchenham et al.
                                                                                             Total                                        11         21
[22] that summarizes and reports the impact of SLRs in software

<!-- Page 7 -->
                                                H. Zhang et al. / Information and Software Technology 53 (2011) 625–637                                  631
into the ﬁelds of title-abstract-keywords through the above li-                        search (QGS) and the automated search. By combining the papers
braries. The search strings then were coded to ﬁt the syntax                           from manual search, the systematic search process ﬁnally identi-
requirements and capability of each search engine.                                     ﬁed 38 SLRs for the tertiary study. A full list of the identiﬁed SLRs
                                                                                       is available in [32].
4.2.3. Evaluation and reﬁnement
    Table 4 summarizes the number of studies retrieved by each                         4.3. Performance comparison
search engine with the initial and reﬁned search strings. For exam-
ple, there are 12 relevant studies retrieved by IEEE Xplore, ﬁve in                        Although the similar inclusion and exclusion criteria were em-
the QGS. In total, 13 papers in QGS were retrieved through the ini-                    ployed in both the original and the replicated searches in this case
tial automated search. In terms of the sample size of QGS, the qua-                    study, we excluded several ‘relevant’ papers that were selected in
si-sensitivity was calculated to be 65% (13/20), which is below the                    the original SLR-1 during the manual search and selection due to
desirable threshold (70–80%) suggested in Section 3.2.5. As re-                        the deviation caused by how strictly the inclusion/exclusion crite-
quired, the search process had to go back to improve the string.                       ria were followed. For example, [31] was excluded from our study
    By carefully checking the SLRs included in the QGS but ignored                     as its random sampling of ICSE papers is not repeatable.
in the initial automated search, we found most of them published                           Because of the slight disagreement on identifying SLRs between
in the early years in the period (2004–2008) when the method sys-                      the original and the replicated searches, it is not appropriate to di-
tematic literature review was just introduced in SE. Some authors                      rectly compare the numbers of identiﬁed studies from them.
claimed their review studies using other terms (e.g., ‘survey’). So                    Rather we focus on the comparison of performance between the
we reﬁned the string as follows and performed the automated                            implementations of different search strategies. Table 5 summarizes
search again.                                                                          the numbers of SLR retrieved by following different strategies for
                                                                                       the same research questions. The row headed with ‘manual only’
   (software AND (systematic OR controlled                                             indicates how many studies can be identiﬁed if manually searching
   OR structured OR exhaustive OR comparative) AND                                     the venues reported in [22] from 2004 till 2008. Two more SLRs
   (review OR survey OR ‘‘literature search’’))                                        could be found when screening their speciﬁed venues (more than
                                                                                       our manual search venues). The row with ‘automated only’ shows
    The revised automated search was able to capture 17 studies                        the automated search performance without evaluation and reﬁne-
from the QGS (Table 4), which increased the quasi-sensitivity up                       ment. The bottom row presents the results through the QGS-based
to 85% (i.e. ‘acceptable’). Fig. 5 illustrates the result compositions                 systematic search process. Fig. 6 shows a graphic comparison be-
of the initial and ﬁnal search, and the contributions by the manual                    tween the results by different search strategies.
           Table 4
           Results from automated search in CS-1.
                                          Initial search                                               Final search
              Search engine               # Retrieved            # QGS            # Relevant           # Retrieved         # QGS     # Relevant
              IEEE Xplore                 146                     5               12                   270                  8        15
              ACM DigitalLibrary           34                     1                5                   160                  1         6
              ScienceDirect                31                     6                6                    82                  7         7
              SpringerLink                 42                     1                5                   145                  1         6
              Overall                     253                    13               28                   657                 17        34
                                            Fig. 5. Compositions of initial and ﬁnal search results in CS-1 (2004–2008).

<!-- Page 8 -->
632                                                   H. Zhang et al. / Information and Software Technology 53 (2011) 625–637
Table 5                                                                                     to exclude the papers published before 2000 from their search. A
Compositions of the different search strategies in CS-1.                                    list of 59 relevant studies is included in the appendix of the SLR-
  Search method                                  SLRs              Quasi-sensitivity        2 [28].
  Manual only                                    22                n/a
  Automated only (w/o evaluation)                28                65%                      5.2. Search implementation
  Systematic                                     38                85%
                                                                                                The student was given the SLR guidelines [24], the QGS-based
                                                                                            search process [33], and the original SLR-2 [28] as the learning
                                                                                            material prior to implementing the search step. The student was
5. Case study 2                                                                             allowed to consult other published SLRs in SE as examples. The ﬁrst
                                                                                            two authors were responsible for answering his questions related
   The second case study was aimed to independently follow and                              to SLR methodology and the systematic search process. After learn-
evaluate the proposed systematic search process by replicating                              ing the SLR methodology, the student developed the search proto-
the literature search of a recently published domain-speciﬁc SLR                            col for replicating the search process of the original SLR by
[28]. The case study was mainly done by a PhD student whose re-                             following the systematic search process presented in this paper.
search topic is related to global software engineering. The ﬁrst two
authors developed the case study protocol and acted as supervisor
                                                                                            5.2.1. Search venues and libraries
and checker in this case. Different from the ﬁrst case study de-
                                                                                                In order to establish the QGS, the student under the supervision
scribed in Section 4, the objective method to elicit relevant terms
                                                                                            chose the venues (high quality conferences and journals in terms of
and phrases was applied for developing search strings in this case
                                                                                            the rankings [1,2]) for manual search that are related to empirical
study.
                                                                                            software engineering, global software engineering, and generic soft-
                                                                                            ware engineering (summarized in Table 6). In terms of their pub-
5.1. The original SLR-2                                                                     lishers, these venues can be grouped into 5 libraries: IEEE, ACM,
                                                                                            Elsevier (ScienceDirect), Springer, and Wiley.
    This case study conforms to the SLR selection criteria addressed
in Section 4.1. To minimize the potential effect of domain knowl-                           5.2.2. QGS and automated search
edge, a recent SLR-2 on empirical evidence in global software engi-                             By following the study inclusion/exclusion criteria reported in
neering (GSE) [28] was selected for replicating the search process                          [28], the manual search of the literature venues in Table 6 identi-
in this case study. The original SLR-2 was designed to answer the                           ﬁed 52 relevant papers published between 2000 and 2007. These
following two research questions:                                                           52 papers formed the QGS for this case study.
                                                                                                In order to investigate the alternative approaches to deﬁning
RQ.1 ‘‘What is the state-of-the-art in empirical studies of GSE?’’                          search string (Section 3.2.3), this case study applied the objective
RQ.2 ‘‘What is the strength of the empirical evidence reﬂected in the                       method of eliciting search terms, in which the high-frequency
     empirical GSE literature?’’                                                            terms and their relations are revealed by textual analysis tool
                                                                                            based on the sample data (e.g., titles, abstracts, and keywords) of
    Another main difference between the original SLR chosen in our                          the papers from the QGS.
case studies is the search methods used. Unlike the SLR-1 that used                             The text analysis tool used in this case study was WordStat 6.1
manual search only, the SLR-2 used automated search only to re-                             [3] that is able to provide a graphic representation of the fre-
trieve the relevant studies. The search strings used in SLR-2 were                          quently occurring terms and their relations. In this case, the stu-
based on the experience from pilot searches and consisted of a                              dent chose the term frequency (TF) and inverse document
Boolean expression like ((A1 OR A2 OR A3 OR A4) AND (B1 OR                                  frequency (IDF) from the algorithms offered by WordStat. The sta-
B2 OR B3 OR B4)), where                                                                     tistical analysis, Jaccard’s similarity coefﬁcient used in this case, en-
                                                                                            ables a researcher to determine the importance of a term or phrase
  A1:      global software development                       B1:     empirical
                                                                                            to a collection of documents by comparing the similarity and diver-
  A2:      global software engineering                       B2:     industrial
                                                                                            sity of the sample sets.
  A3:      distributed software development                  B3:     experiment
                                                                                                After removing the irrelevant words, the terms with a frequency
  A4:      distributed software engineering                  B4:     case study
                                                                                            factor of 30 or higher remained as the candidate terms for con-
   The original search started in November 2007. Full-text ﬁeld                             structing the search strings. Fig. 7 shows these terms in two dend-
was searched using the above query through seven digital libraries                          ograms: the top one (a) assesses the importance of the original
including Compendex, IEEE Xplore, SpringerLink, ISI Web of                                  terms (from SLR-2) in the QGS; the bottom one (b) was obtained
Knowledge, ScienceDirect, Wiley InterScience, and ACM DigitalLi-                            by crossing out the words ‘software’ and ‘development’ in order to
brary. The authors of the original SLR-2 [28] intentionally decided                         have a better visible representation, in terms of recurrence, of
                                                Fig. 6. Comparison and composition of the different search strategies in CS-1.

<!-- Page 9 -->
                                                H. Zhang et al. / Information and Software Technology 53 (2011) 625–637                                  633
Table 6                                                                               nal string, the ﬁrst dendogram (Fig. 7a) shows some original terms
Selected venues for manual search in CS-2.                                            are not strongly connected with each other. For instance, ‘software
  Venue                     Library/publisher            Papers (2000–2007)           engineering’ seldom appeared as a phrase in the analysis of the
  ICGSE                     IEEE                         13                           QGS, and ‘global’ was not closely connected with ‘software
  SPIP                      Wiley                        11                           development’.
  CSCW                      ACM                           7                               For the second part of the original search string, the terms (i.e.
  IST                       Elsevier                      6                           ‘empirical’, ‘industrial’, ‘experiment’, and ‘case study’) are not even
  ICSE                      IEEE/ACM                      5
  ISESE/ESEM                IEEE/ACM                      3
                                                                                      present. Although the dendogram only shows the combinations
  TSE                       IEEE                          2                           of the terms with at least a frequency factor of 30 and was not de-
  JSS                       Elsevier                      2                           rived from the entire gold standard, we do believe that 11 relevant
  FSE                       ACM                           1                           venues provide a good sample set representing the use of key-
  EMSE                      Springer                      1
                                                                                      words in the papers related to a given research topic.
  ICSP                      Springer                      1
  Total                                                  52                               According to the comparison of the terms and phrases used in
                                                                                      SLR-2 as well as identiﬁed by text frequency analysis (Table 7),
                                                                                      the student decided to lower the restriction of the ﬁrst part of
                                                                                      the original string, as well as to introduce a few more interesting
the terms and phrases frequency in the QGS. Compared to Fig. 7a,
                                                                                      terms to the second part based on the observation and analysis
the terms relevant to the research topic (such as ‘distributed’ and
                                                                                      of the QGS. The string for automated search became:
‘collaboration’) became more visible in Fig. 7b.
                                                                                          (‘‘software engineering’’ OR ‘‘software development’’
5.2.3. Evaluation and reﬁnement                                                           OR ‘‘distributed team’’) AND (global OR
   The student ﬁrst tried to adopt the original search string used in                     distributed) AND (empirical OR ‘‘case study’’
the SLR-2, and retrieved 20 papers in QGS. Divided by the sample                          OR experiment OR industrial OR interview)
size of the QGS (52), the quasi-sensitivity of the original query is
40% (21/52), which is much lower than the recommended thresh-                            By isolating the words ‘global’ and ‘distributed’ from ‘software
old (e.g., 70–80%) in Section 3.2.5.                                                  development’ and ‘software engineering’ and including more featur-
   Although the frequency analysis of the QGS conﬁrmed some                           ing words denoting empirical studies, seven more papers in QGS
terms employed in the original search of the SLR-2, like ‘software                    were retrieved by the reﬁned automated search. Further, consider-
development’, ‘distributed’, and ’global’ for the ﬁrst part of the origi-             ing the capabilities of different search engines in dealing with
                                                           Fig. 7. Terms and phrases with high-frequency.

<!-- Page 10 -->
634                                                  H. Zhang et al. / Information and Software Technology 53 (2011) 625–637
stemming (e.g., experimental, experiments, and experimentation for                           with the intention of retrieving more papers in QGS. However,
‘experiment’), the string was extended as follows:                                           the improvement was very slim. On the contrary, the number of
                                                                                             irrelevant papers increased dramatically. Therefore, the student
      (’’software engineering’’ OR ‘‘software development’’                                  decided to apply the above mentioned search string for the ﬁnal
      OR ‘‘distributed team") AND (global OR                                                 automated search. Correspondingly, the ﬁnal quasi-sensitivity in-
      distributed) AND (empirical OR ‘‘case study’’ OR                                       creased to 73% (38/52), which results in a fairly acceptable recall
      ‘‘case studies’’ OR lesson OR lessons OR experience                                    with reference to the suggested threshold range (70–80%) in Sec-
      OR experiment OR experiments OR experimentation                                        tion 3.2.5.
      OR experimental OR experimenting OR industrial                                             Finally, it has to be noticed that the new query string is a sup-
      OR interview OR interviews OR survey OR                                                erset of the original one; hence all the publications retrieved by
      surveys OR ‘‘test case’’ OR ‘‘test cases")                                             the original search string in the SLR-2 [28] are also retrieved by
                                                                                             the new one.
   The search on the digital libraries by the above query was able
to retrieve 38 papers belonging to the QGS through the search en-
gines. Afterward, the student further strived to reﬁne the string                            5.3. Performance comparison
                                                                                                 Table 8 summarizes the overall search results and performance
Table 7                                                                                      evaluation of both search strategies. On one side, the original SLR-2
Key phrases and their quasi-sensitivities.                                                   applied automated search only and identiﬁed 59 relevant papers
  Phrase used in SLR-2          Hits   %      Phrase identiﬁed             Hits    %
                                                                                             (40% of the papers in the QGS). On the other side, the new search
                                              from QGS                                       string, developed and reﬁned based on the analysis of the terms
  ‘‘Global software             23     44     ‘‘Software development’’     39      75
                                                                                             used in the QGS, identiﬁed 73% of the papers in the QGS resulting
      development’’                                                                          in 83% performance increase (i.e. from 40% to 73%) in terms of the
  ‘‘Distributed software        13     25     ‘‘Software engineering’’     10      19        number of retrieved papers found in the QGS (quasi-sensitivity).
      development’’                                                                              Table 9, which synthesizes some of the search phase data,
  ‘‘Global software              0       0    Collaboration AND            16      30
                                                                                             shows that after the screening of 2404 papers 150 publications
      engineering’’                           communication
  ‘‘Distributed software         1       2    ‘‘Distributed team’’          6      11        were selected as relevant. Therefore, considering the two phases,
      engineering’’                                                                          the total number of papers selected is 164: 52 papers coming from
  Empirical                     16     30     Practice AND research         6      11        the manual search and 150 from the automated one (38 overlap-
  Industrial                     1      2     ‘‘Tool support’’              2       4        ping, illustrated in Fig. 8). As a subset of the results by the repli-
  Experiment                     7     13     ‘‘Process model’’             3       6
  ‘‘Case study’’                16     30     ‘‘Empirical study’’           8      15
                                                                                             cated search in this case study, the original search of the SLR-2
                                                                                             could ﬁnd only 36% (59/164) of the relevant papers identiﬁed
                                                                                             through the systematic search process presented in this paper.
                                                                                                 Note that after restructuring and reﬁning the search query, the
Table 8                                                                                      search with the new string is able to capture all the papers re-
Comparing the original with replicated searches in CS-2.                                     trieved from the QGS by the original string of the SLR-2. It is also
                                        Relevant papers        Quasi-sensitivity (%)         noticeable that CSCW (ACM Conference on Computer Support
  Original search                        59                    40
                                                                                             Cooperative Work) contributes a signiﬁcant number of relevant
  Replicated (systematic) search        150                    73                            studies (7%) to the QGS, however no relevant paper from this venue
                                                                                             was reported in the search of the original SLR-2 [28].
Table 9
Results from automated searches in CS-2.
  Search engine                      # QGS               Original search                                               Final search
                                                         # Retrieved              # in QGS        # Relevant           # Retrieved     # in QGS        # Relevant
  IEEE Xplore                  23                        –                        10              23                   231             20              75
  ACM DigitalLibrary           8                         –                        0               7                    92              2               19
  ScienceDirect                8                         –                        3               9                    63              5               11
  SpringerLink                 2                         –                        0               10                   140             1               20
  Wiley InterScience           11                        –                        8               5                    399             10              14
  Web of knowledge and compendex                         –                        n/a             5                    1479            n/a             11
  Overall                      52                        387                      21              59                   2404            38              150
                                                   Fig. 8. Composition of the systematic search results in CS-2 (2000–2007).

<!-- Page 11 -->
                                           H. Zhang et al. / Information and Software Technology 53 (2011) 625–637                                 635
6. Discussion                                                                    of case studies which would consider both metrics to further assess
                                                                                 the presented systematic search process.
    The research reported in this paper was motivated by an                          Based on our observation of the existing SLRs in SE [32], auto-
important need for improving the search process of conducting                    mated search often consults the ﬁelds of title–abstract–keywords,
SLRs. Like many other practitioners of EBSE [23], the case studies               the search performance is also related to the quality and structure
reported in this paper have also illustrated the limitations of                  of these ﬁelds. An indicative title/abstract will increase search sen-
applying automated or manual search methods alone. A manual                      sitivity. Budgen et al. [10] investigated the possible inﬂuence of the
search can consume a huge amount of effort when scanning a                       quality of abstract to SLRs by experiments, and concluded that
large number of literature venues. On the other hand, the perfor-                structured abstracts can improve the likelihood of understanding
mance of automated search is highly dependent upon the quality                   and identiﬁcation of studies. We assert that structured abstracts
of search strings used. It is quite common that researchers have                 are also likely to further improve the search accuracy.
to continuously reﬁne the search strings through several trials
with different search engines. While some of the previously                      7. Threats to validity
reported SLRs have applied both automated and manual searches,
almost all of them simply merged the search results achieved                        Aiming to demonstrate and evaluate the different implementa-
from both kinds of search methods. Our ﬁrst case study has dem-                  tions of search string development of the systematic search
onstrated that neither the automated search with intuitive search                approach, we conducted two case studies on different topics in-
terms nor the manual search in limited number of literature ven-                 stead of a single case study. However, the cases were not randomly
ues could retrieve an ‘‘acceptable’’ number of relevant papers                   selected due to the considerations (criteria) discussed in Section 4.1
alone.                                                                           as well as the resource available to us when planning them.
    In contrast, the QGS-based systematic search approach aims to                   Due to the focus of this paper, only the study search and selec-
achieve the tradeoff between them while targeting an acceptable                  tion steps of the original SLRs were replicated in the case studies.
performance (in terms of sensitivity in the reported case studies).
                                                                                 According to our observation of existing SLRs in SE, we also notice
It not only combines the results from the two search methods to-                 that for some SLRs the study exclusion may still take place in data
gether, but establishes linkage between them for leveraging the
                                                                                 extraction activity because normally the full-text of paper is not
strengthens of both kinds of search methods (i.e. automated and                  checked in the prior study screening, which means the sensitivity
manual). Our systematic search approach also provides a mecha-
                                                                                 and precision might be also related to other activities in an SLR.
nism of quantitatively determining when a researcher can stop                    However, we believe the portion of the studies excluded in data
the iterative reﬁnement of search strings for automatic search
                                                                                 extraction is much smaller compared to search and selection steps.
method. We also assert that the presented approach can help cap-                 In practice, these residual irrelevant studies are difﬁcult to remove
ture considerable number of studies identiﬁed in QGS with a rea-
                                                                                 no matter whether or not a systematic search process is applied.
sonable amount of effort.                                                        Hence, their inﬂuence on the ﬁndings of the case studies is quite
    The performance improvement of the systematic search process
                                                                                 limited.
is conﬁrmed with different search settings used in the two case                     Our two case studies observed the literature search processes
studies. The SLR-1 applied manual search only, while the SLR-2
                                                                                 being performed by both experienced researchers and research
used automated search. The improvements to the original searches                 student, which we believe are typical practitioners of SLR method-
were observed in both cases when adopting the systematic search
                                                                                 ology in software engineering [4].
process. In particular, a large number of new relevant papers were                  The CS-2 was mainly performed by a research student.
identiﬁed to complement the papers included in the original SLR-2.
                                                                                 Although he was able to consult with the experienced researchers,
Although many more papers retrieved by the search engines had to                 the most ﬁnal decisions were made by himself. The student was
be screened in the second case, we believe a more comprehensive
                                                                                 provided with the original SLR-2 as background material at the
collection of the relevant papers for SLR makes the required extra               beginning of the CS-2. We notice that it may inﬂuence the stu-
effort worthwhile. Additionally, the two reported case studies
                                                                                 dent’s performance of the search process. However, even if the stu-
demonstrate the beneﬁts and limitations of the subjective and                    dent had been intentionally blinded from the SLR-2 (as we
objective methods for identifying the relevant terms and phrases,                originally planned), because the SLR-2 had already been published,
and developing search strings.                                                   he would have been able to ﬁnd and read the original study in
    If a researcher can ﬁnd a set of secondary studies, which may                terms of the information like research questions. Hence we
have been identiﬁed and screened by some other researcher during                 decided to avoid such uncertainty in the case study. On the other
a review of a related topic, those studies can be added to the QGS in            hand, the original SLR-2 has been published by a quality journal,
order to reduce the effort required for the manual search during                 which implies the quality of their review (including their literature
the development of QGS. For instance, a few previous SLRs                        search) is acceptable in the research community. Accordingly, we
[15,18,20,21] directly used studies identiﬁed by [26] as their full              believe that the comparison of the both searches is justiﬁable.
set of primary studies. As another example, the results from the
mapping study [19] can be directly used to build QGS for more spe-
ciﬁc SLRs on software cost estimation. In such cases, the results                8. Related work
may need to be tailored in terms of subject and time that conform
to the scope of the new SLR.                                                        Systematic literature reviewers in software engineering are
    As the aim of an SLR is to ﬁnd as many primary studies relevant              aware of the importance of literature search, as well as the chal-
to the research questions as possible [24], ‘sensitivity’ is usually the         lenges involved in searching relevant studies when applying SLR
top priority in deﬁning search strategies in most SLRs. Accordingly,             methodology in different sub-disciplines of software engineering
we have focused on this metric when describing the case studies.                 and computer science. Many SE researches have reported various
Though another metric ‘precision’ has received relatively less atten-            kinds of difﬁculties during the ‘‘searching relevant studies’’ step of
tion in the initial set of evaluation case studies reported in this              SLR methodology [4]. Several experienced systematic literature
paper, we consider that ‘‘precision’’ is also important to measure               reviewers have also discussed the issues related to literature
the productivity of a search strategy. We are undertaking a series               search in SE. In the following paragraphs, we brief the work of

<!-- Page 12 -->
636                                       H. Zhang et al. / Information and Software Technology 53 (2011) 625–637
other researchers who have tried to propose different approaches                  Describing an explicit scope of search strategy and its evalua-
to improving the literature search step of SLR in SE.                              tion in searching relevant studies in SE.
    Brereton et al. identiﬁed several issues of electronic (i.e. auto-            Introducing the concepts of ‘quasi-gold standard’ and ‘quasi-sen-
mated) search derived from their experience in conducting SLRs                     sitivity’ for developing and evaluating search strategy for a given
[9]. Based on their extensive experience with SLR methodology,                     SLR.
they conclude that researchers must select and justify a search                   Proposing a systematic, evidence-based, and rigorous approach
strategy that is appropriate for their research questions. They also               for practical search strategy development, implementation and
advised against retrieving the primary studies from a single venue.                evaluation.
Bailey et al. [6] analyzed the overlapping phenomenon between re-                 Conducting and reporting two case studies that replicated the
sults returned from different search engines in SE.                                literature searches of existing SLRs by following the QGS-based
    Dieste et al. [13,12] investigated the optimal search strategies               systematic search process but applying different search string
using the combination of alternative search strings for automated                  development methods.
search in SLR. They used the studies identiﬁed in another SLR
[26] to establish the ‘gold standard’ for calculating the search sen-               Literature search is the ﬁrst and critical step of any forms of lit-
sitivity. However, it is almost impossible for most of the research-            erature reviews. Although the QGS-based literature search ap-
ers in SE to have access to such pre-made ‘gold standard’ during                proach is proposed for improving the performance of search
the planning stage of their intended SLRs. In other words, a ‘gold              processes in SLRs and EBSE, it is also useful in other forms of liter-
standard’ in this case provides no help to search strategy evalua-              ature reviews in SE, and beneﬁts the researchers and practitioners
tion, or to ensure the retrieval quality of relevant studies in SLRs.           who intend to retrieve a relatively comprehensive collection of rel-
    Kitchenham et al. reported an participant-observer case study               evant studies (to a given subject matter and time span) with reason-
[23] that investigated several impact factors for the literature                able effort.
search in SLRs: search breadth, gray literature, and performance                    Currently this approach is being actively and effectively applied
of manual and automated search. The results support the idea that               in some systematic reviews in SE, such as [34,5]. We will continue
a restricted manual search targeting an appropriate set of venues               the evaluation and improvement of this approach by conducting
may help to avoid the omission of good quality papers. Despite                  more case studies with the research interests in both sensitivity
the fact that most systematic reviewers appeared to prefer auto-                and precision on varying topics in software engineering. In addi-
mated search method in their SLRs (68% reported SLRs by 2008                    tion, the future methodological work in empirical software engi-
using automated search), the ﬁnding reported by Kitchenham                      neering community may identify other issues and limitations of
and her colleagues conﬁrms the value of manual search for SLRs                  the existing SLRs reported in software engineering, and further to
in SE.                                                                          suggest practical improvements and enhancements to the guide-
    As an alternative to search engine based search strategy, a ref-            lines of systematic literature reviews.
erence list driven search method can be another option for retriev-
ing relevant studies. This method was innovated with the concepts               Acknowledgments
of co-citation and bibliographic coupling, and has been proposed in
SE [27]. However, it is well-known fact that most of the major dig-                NICTA is funded by the Australian Government as represented
ital libraries in SE are not designed for supporting this kind of               by the Department of Broadband, Communications and the Digital
search. Accordingly, it can be very time-consuming in terms of                  Economy and the Australian Research Council through the ICT Cen-
manually retrieving studies from reference lists. Thus this search              tre of Excellence program.
method appears to be not practical enough unless being supported
by major digital libraries in SE. As suggested by the SLR guidelines
[24], this method can be used as a supplementary venue for a full               References
SLR.                                                                             [1] The excellence in research for Australia ranked conference list. Australian
    Although the above mentioned studies discuss a number of as-                     Research Council, 2007 & 2010. <http://www.arc.gov.au/era/default.htm>.
pects of literature search for SLRs and propose a few potential ap-              [2] The excellence in research for australia ranked journal list. Australian Research
                                                                                     Council, 2007 & 2010. <http://www.arc.gov.au/era/default.htm>.
proaches, we are not aware of any instructive and practical
                                                                                 [3] Simstat v.2.5 and wordstat v.6.1. Provalia Research, May 2010. <http://
literature search approach, which is able to provide systematic                      www.provalisresearch.com/>.
and rigorous process for integrating different search methods,                   [4] M. AliBabar, H. Zhang, Systematic literature reviews in software engineering:
deﬁning the relevant search terms and phrases, and evaluating                        preliminary results from interviews with researchers, in: Proceedings of the
                                                                                     3rd International Symposium on Empirical Software Engineering and
search queries to improve search performance for SLRs in SE. The                     Measurement (ESEM’09), Lask Buena Vista, FL, October 2009. IEEE Computer
presented case studies provide primary evidence to support the                       Society, pp. 346–355.
practicability of the proposed systematic search approach.                       [5] X. Bai, L. Huang, H. Zhang. On scoping stakeholders and artifacts in software
                                                                                     process, in: Proceedings of International Conference on Software Process 2010
                                                                                     (ICSP 2010), vol. LNCS 6195, Paderborn, Germany, July 2010, Spinger-Verlag,
                                                                                     pp. 39–51.
9. Conclusions                                                                   [6] J. Bailey, C. Zhang, D. Budgen, M. Turner, S. Charters, Search engine overlaps:
                                                                                     Do they agree or disagree? in: Proceedings of 2nd International Workshop on
                                                                                     Realising Evidence-Based Software Engineering (REBSE’07), Minneapolis, MN,
    Systematic literature reviews have become an important empir-                    USA, May 2007, IEEE Computer Society.
ical research methodology in software engineering. An increasing                 [7] J. Biolchini, P.G. Mian, A.C.C. Natali, G.H. Travassos. Systematic Review in
                                                                                     Software Engineering, Technical Report, Universidade Federal do Rio de
number of SLRs are being conducted and reported. In SLR, an effec-                   Janeiro, 2005.
tive and rigorous literature search plays a critical role in evidence            [8] J. Boynton, J. Glanville, D. McDaid, C. Lefebvre, Identifying systematic reviews
aggregation. In order to enhance the rigor and comprehension of                      in medline: developing an objective approach to search strategy design,
                                                                                     Journal of Information Science 24 (3) (1998) 137–154.
the methodology, with reference to the experience of SLRs in other
                                                                                 [9] P. Brereton, B.A. Kitchenham, D. Budgen, M. Turner, M. Khalil, Lessons from
disciplines (e.g., medicine and sociology), this paper proposes a                    applying the systematic literature review process within the software
systematic literature search approach based on the concept of qua-                   engineering domain, Journal of Systems and Software 80 (1) (2007) 571–583.
si-gold standard for retrieving and identifying relevant studies in             [10] D. Budgen, B.A. Kitchenham, S.M. Charters, M. Turner, P. Brereton, S.G.
                                                                                     Linkman, Presenting software engineering results using structured abstracts: a
software engineering. The major contributions of this paper can                      randomised experiment, Empirical Software Engineering 13 (4) (2008) 435–
be concluded as:                                                                     468.

<!-- Page 13 -->
                                                    H. Zhang et al. / Information and Software Technology 53 (2011) 625–637                                                 637
[11] K. Dickersin, R. Scherer, C. Lefebvre, Systematic reviews: identifying relevant           Measurement (ESEM’09), Lask Buena Vista, FL, October 2009. IEEE Computer
     studies for systematic reviews, British Medical Journal 309 (6964) (1994)                 Society, pp. 336–345.
     1286–1291.                                                                           [24] B. Kitchenham, S. Charters, Guidelines for Performing Systematic Literature
[12] O. Dieste, A. Griman, N. Juristo, Developing search strategies for detecting              Reviews in Software Engineering (version 2.3), Technical Report, Keele
     relevant experiments, Empirical Software Engineering 14 (5) (2009) 513–539.               University and University of Durham, 2007.
[13] O. Dieste, A.G. Padua. Developing search strategies for detecting relevant           [25] B. Kitchenham, T. Dyba, M. Jorgensen, Evidence-based software engineering,
     experiments for systematic reviews, in: Proceedings of 1st International                  in: Proceedings of 26th International Conference on Software Engineering
     Symposium on Empirical Software Engineering and Measurement (ESEM’07),                    (ICSE’04), Edinburgh, Scotland, UK, May 2004. IEEE Computer Society, pp. 273–
     Madrid, Spain, September 2007, IEEE Computer Society, pp. 215–224.                        284.
[14] T. Dyba, T. Dingsoyr, G.K. Hanssen. Applying systematic reviews to diverse           [26] D.I. Sjoberg, J.E. Hannay, O. Hansen, V.B. Kampenes, A. Karahasanovic, N.-K.
     study types: an experience report, in: Proceedings of 1st International                   Liborg, A.C. Rekdal, A survey of controlled experiments in software
     Symposium on Empirical Software Engineering and Measurement (ESEM’07),                    engineering, IEEE Transactions on Software Engineering 31 (9) (2005) 733–
     Madrid, Spain, September 2007. IEEE Computer Society, pp. 225–234.                        753.
[15] T. Dyba, V.B. Kampenes, D.I. Sjoberg, A systematic review of statistical power       [27] M. Skoglund, P. Runeson. Reference-based search strategies in systematic
     in software engineering experiments, Information and Software Technology                  reviews, in: Proceedings of 13th International Conference on Evaluation and
     48 (8) (2006) 745–755.                                                                    Assessment in Software Engineering (EASE’09), Durham, England, April 2009.
[16] T. Dyba, B. Kitchenham, M. Jorgensen, Evidence-based software engineering                 BCS.
     for practitioners, IEEE Software 22 (1) (2005) 158–165.                              [28] D. Smite, C. Wohlin, T. Gorschek, R. Feldt, Empirical evidence in global software
[17] S. Grimstad, M. Jorgensen, K. Molokken-Ostvold, Software effort estimation                engineering: a systematic review, Empirical Software Engineering 15 (1)
     terminology: the tower of babel, Information and Software Technology 48 (4)               (2010) 91–118.
     (2006) 302–310.                                                                      [29] V. White, J. Glanville, C. Lefebvre, T. Sheldon, A statistical approach to
[18] J.E. Hannay, D.I. Sjoberg, T. Dyba, A systematic review of theory use in software         designing search ﬁlters to ﬁnd systematic reviews: objectivity enhances
     engineering experiments, IEEE Transactions on Software Engineering 33 (2)                 accuracy, Journal of Information Science 27 (6) (2001) 357–370.
     (2007) 87–107.                                                                       [30] R.K. Yin, Case Study Research: Design and Methods, fourth ed. Sage
[19] M. Jorgensen, M. Shepperd, A systematic review of software development cost               Publication, 2009.
     estimation studies, IEEE Transactions on Software Engineering 33 (1) (2007)          [31] C. Zannier, G. Melnik, F. Maurer. On the success of empirical studies in the
     33–53.                                                                                    international conference on software engineering, in: Proceedings of 28th
[20] V.B. Kampenes, T. Dyba, J.E. Hannay, D.I. Sjoberg, A systematic review of effect          International Conference on Software Engineering (ICSE’06), Shanghai, China,
     size in software engineering experiments, Information and Software                        May 2006. ACM, pp. 341–350.
     Technology 49 (11–12) (2007) 1073–1086.                                              [32] H. Zhang, M. AliBabar, Adopting Systematic Reviews in Software Engineering:
[21] V.B. Kampenes, T. Dyba, J.E. Hannay, D.I.K. Sjoerg, A systematic review of                An Evidence-based Report. Technical report, Lero Software Engineering
     quasi-experiments in software engineering, Information and Software                       Research Centre, 2009.
     Technology 51 (1) (2009) 71–82.                                                      [33] H. Zhang, M. AliBabar, On searching relevant studies in software engineering,
[22] B. Kitchenham, O.P. Brereton, D. Budgen, M. Turner, J. Bailey, S. Linkman,                in: Proceedings of 14th International Conference on Evaluation and
     Systematic literature reviews in software engineering: a systematic literature            Assessment in Software Engineering (EASE’10), Keele, England, April 2010.
     review, Information and Software Technology 51 (1) (2009) 7–15.                           BCS.
[23] B. Kitchenham, P. Brereton, M. Turner, M. Niazi, S. Linkman, R. Pretorius, D.        [34] H. Zhang, B.A. Kitchenham, D. Pfahl, Software process simulation modeling: an
     Budgen. The impact of limited search procedures for systematic literature                 extended systematic review, in: Proceedings of International Conference on
     reviews – a participant–observer case study, in: Proceedings of the 3rd                   Software Process 2010 (ICSP 2010), vol. LNCS 6195, Paderborn, Germany, July
     International Symposium on Empirical Software Engineering and                             2010. Springer-Verlag, pp. 309–320.

<!-- Page 14 -->

