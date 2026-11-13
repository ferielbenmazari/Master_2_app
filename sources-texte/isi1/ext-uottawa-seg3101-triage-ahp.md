<!-- Source externe (hors supports du cours ISI1), ajoutée le 2026-11-13 (docs/06 §9.6).
Référence : G. v. Bochmann, SEG3101 Software Requirements Analysis, chapitre 2.4 « Requirements Triage and Negotiation », University of Ottawa, automne 2010 (d'après A. Davis, « The art of requirements triage », IEEE Computer 2003, et J. Karlsson & K. Ryan, « A cost-value approach for prioritizing requirements », IEEE Software 1997).
URL : https://www.site.uottawa.ca/~bochmann/SEG3101/Notes/SEG3101-ch2-4%20-%20Requirements%20Triage%20and%20Negotiation.pdf — consulté le 2026-11-13. Texte des slides copié tel quel (pdftotext) ; les sections « Transcription » recopient des slides présentées en image. -->

# SEG3101 — Requirements Triage and Negotiation (extraits)

## Slide 11 — Requirements Prioritization and Triage

• Requirements prioritization is also referred to as triage
• Need to decide which requirements really matter or on those
that need to be implemented in the current release
• Need for compromise, negotiation, priorities
• Prioritization is needed because there will almost always be
the need for trade-offs (e.g., required functionality vs. time
and resources)
• Must help:
• Make acceptable tradeoffs among goals of value, cost, time-to-market
• Allocate resources based on importance of requirements to the project
as a whole (project planning)

## Slide 15 — 1st Technique – Prioritization Scales

• Determine criteria, granularity, scale dimensions
• Frequently used:
• Urgency
• High (mission critical requirement; required for next release)
• Medium (supports necessary system operations; required eventually but
could wait until a later release if necessary)
• Low (a functional or quality enhancement; would be nice to have someday
if resources permit)
• Importance
• Essential (product unacceptable unless these requirements are satisfied)
• Conditional (would enhance the product, but the product is acceptable if
absent)
• Optional (functions that may

## Slides 21-22 — Pairwise Comparisons

• Finding scores and weights is difficult and subjective
• Potential solution: pairwise comparison
• Which requirements (A or B) is more important:
A << < = > >> B
• Benefits
• Indicates what is important to the client
• Identifies requirements of high value and low cost (priority!)
• Identifies requirements of low value and high cost (likely to be
removed)
• Has already been used to assist numerous corporate and government
decision makers
• Choosing a telecommunication system, formulating a drug policy, choosing
a product marketing strategy
Introduction
Pairwise Comparisons (2)
• New problems
• Large number of pairs – pairwise comparison can be tedious
• Solved using transitivity and other tricks!
• Mathematical optimization of the number of pairs to be considered (no
need to cover all)
• Many dependencies between requirements
• Can actually be used to further reduce the # of pairs
• E.g., group many requirements as features, use cases, services…
• Example approach
• Analytic Hierarchy Process1
[1] Karlsson, J. and Ryan, K. A cost-value approach for prioritizing requirements, IEEE Software, Sept/Oct 1997
Introduction

## Slide 23 — 4th Technique – Analytic Hierarchy Process (AHP)

• Developed by Karlsson and Ryan (1997) based on work by
Saaty (early 1970)
• see also http://en.wikipedia.org/wiki/Analytic_Hierarchy_Process
• Use cost-value diagrams to analyze and discuss candidate
requirements
• Useful for requirements triage and release planning (but also
applicable in many other situations where complex decisions
are to be made)
• Basic procedure for rating a set of criteria
• Develop pairwise comparison matrix of each criterion
• Normalize the matrix

## Slide 24 — Basic Rating Procedure (1) — transcription de l'image
Pairwise comparison rating scale
RATING 1 = Equally preferred
RATING 3 = Moderately preferred
RATING 5 = Strongly preferred
RATING 7 = Very strongly preferred
RATING 9 = Extremely strongly preferred
Values 2, 4, 6, or 8 represent preferences halfway between the integers on either side

## Slides 26-28 — Basic Rating Procedure (3)-(5) — transcription des images
Suppose three products with the following pairwise comparison (for one given criteria)
Matrix: A row = 1, 3, 2 ; B row = 1/3, 1, 1/5 ; C row = 1/2, 5, 1
Normalize the matrix: First add up all the values in each column. Column sums: A = 11/6, B = 9, C = 16/5.
Next the values in each column are divided by the corresponding column sums. Note: the values in each column add up to 1.
Average the value of each row to get corresponding rating: A = 0.5012, B = 0.1185, C = 0.3803. A has highest rank.

## Slide 29 — Analytic Hierarchy Process – Steps

• Requirements engineers check individual requirements for
ambiguities, completeness…
• Apply AHP’s pairwise comparison to estimate the relative
value of candidate requirements
• Experienced software engineers use AHP’s pairwise
comparison to estimate the cost of candidate requirements
• Plot these values on a cost-value diagram
• Stakeholders use this diagram for analysis and to make
