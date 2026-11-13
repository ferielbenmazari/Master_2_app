<!-- Source externe évaluée par les pairs (hors supports du cours ISI1), ajoutée le 2026-11-13 (docs/06 §9.6).
Référence : L. Karlsson, T. Thelin, B. Regnell, P. Berander, C. Wohlin, « Pair-wise comparisons versus planning game partitioning — experiments on requirements prioritisation techniques », Empirical Software Engineering 12:3-33, 2007, DOI 10.1007/s10664-006-7240-4.
URL : https://lup.lub.lu.se/search/files/2753026/774695.pdf (dépôt de l'université de Lund) — consulté le 2026-11-13. Extraits copiés tels quels (pdftotext). -->

# Karlsson et al. (2007) — extraits

## 2.2 Pair-Wise Comparisons (PWC)
2.2 Pair-Wise Comparisons (PWC)
Pair-wise comparisons involves comparing all possible pairs of requirements, in
order to determine which of the two requirements is of higher priority, and to what
extent. If there are n requirements to prioritise, the total number of comparisons to
perform is n(n-1)/ 2. For each requirement pair the decision maker estimates the
relation between the requirements on the scale {9, 7, 5, 3, 1} where 1 represent equal
importance and 9 represent one requirement being much more important than the
other.
This relation results in a dramatically increasing number of comparisons as the
number of requirements increases. However, due to redundancy of the pair-wise
comparisons, PWC is rather insensitive to judgement errors. Furthermore, PWC
includes a consistency check where judgement errors can be identified and a consistency ratio can be calculated.
PWC is used in the Analytic Hierarchy Process (AHP) (Saaty and Vargas, 2001).
In AHP it is possible to take the system perspective into account, so that a system
structure of related requirements can be abstracted into a hierarchy that describes



requirements on different abstraction levels. Hence, AHP can take the whole
system into account during decision making since it prioritises the requirements on
each level in the hierarchy (Saaty and Vargas, 2001).
In the investigation by Karlsson et al. (1998), the authors conclude that PWC
[called AHP in Karlsson et al. (1998)] was the most promising approach because
they found it trustworthy and fault tolerant. It also includes a consistency check
and it is based on a ratio scale, i.e., it includes the priority distance. PWC was
the only technique in the evaluation that satisfied all these criteria. However,

## 3.4.4 Consistency Ratio
3.4.4 Consistency Ratio
The consistency ratio (CR) describes the amount of judgement errors that is
imposed during the pair-wise comparisons. The CR is described with a value
between 0 and 1 and the lower CR value, the higher consistency. Saaty and Vargas
(2001) have recommended that CR should be lower than 0.10 in order for the
prioritisation to be considered trustworthy. However, CR exceeding the limit 0.10
occurs frequently in practice (Karlsson and Ryan, 1997).
