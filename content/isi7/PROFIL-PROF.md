# PROFIL-PROF — ISI7 Systèmes décisionnels (R. Bijaoui)

> Profil **provisoire**, établi à partir de deux sources seulement (diapositives transcrites `isi7.md` et compte rendu de la séance du 14 octobre 2026 `cours_14092026.md`). **Il n'existe aucune annale et aucun partiel précédent** : le style d'examen du prof n'est donc connu que par ce qu'il en a dit et par la forme de ses supports. Tout ce qui est marqué *à confirmer* est une lecture, pas un fait. À valider par l'utilisatrice.
> Les citations sont copiées des sources (extraits vérifiés dans `notions.json` et les chapitres).

## 1. Formats d'évaluation

| Élément | Source | Détail |
|---|---|---|
| Date, durée | diapositives | « Final exam date : February 22nd, 10am / Duration : 1h30 » |
| Questions de définitions et de concepts | compte rendu | « L'examen comprendra des questions sur les définitions et concepts clés vus en classe » ; à l'oral : « just to validate that you have in mind the definitions and concepts » |
| Exercice pratique sur interview | compte rendu | « Un exercice pratique sera proposé pour identifier les pain points, caractéristiques, principes et niveaux de maturité à partir d'exemples concrets » ; « one exercise of that type… One small interview » ; scénarios « simulated » |
| Poids | compte rendu | Sections 1 et 2 (introduction, concepts principaux) = **majeure partie** ; architecture (couches, rôles, niveau conceptuel) = **une partie** ; leçons 5 à 10 (modèle dimensionnel) = **partie courte** |
| Quatre compétences « observables à l'examen » | diapositives | Situate, Architect, Model, Evolve |
| Critère de notation annoncé | diapositives (séance 9) | « les rapports de l'année 1 gardent leur sens » |
| Cas complet « au format d'examen » | diapositives (séance 10) | correction collective |

*Inconnus* : barème, nombre de questions, QCM ou rédaction, usage de documents, langue du sujet.

## 2. Tournures typiques

Aucun énoncé d'examen disponible. Les seules formulations du prof sont celles de ses supports : questions types d'utilisateurs (« Why did on-time delivery drop? », « Which deals will close this quarter? »), verbatims de l'atelier (« Every Monday I ask three people for the weekend's sales… »), et la grille « User quote · Pain point or hidden requirement · Expected characteristic · Principle / requirement · Maturity level ». Les sujets des partiels blancs reprennent ces formes (interview courte + grille) et **ne prétendent pas reproduire** son style.

## 3. Pièges récurrents (annoncés par le prof)

- **Piège de vocabulaire** (encadré de la diapositive de maturité) : « The levels describe the type of question, not the tool. A dashboard that drills down to causes is diagnostic; a spreadsheet forecast is still predictive. »
- **Prévisible ≠ prédictif** : « same rules applied on same numbers. Input numbers should output always the same figures » (prévisible) contre niveau de maturité (prédictif) — le prof insiste à l'oral sur la ressemblance des mots.
- **Tout KPI est un indicateur, pas l'inverse** ; « You cannot drill below the stored grain ».
- **« Operational steering is still steering »** : opérationnel = niveau de détail, pas « opérer ».
- **Tension 3 contre 5** (explorer librement / résultats cohérents) à nommer, avec la réponse (modèle gouverné, couche sémantique).
- **Pas de saut de niveau** : « A model trained on scattered data gives confident but wrong answers ».
- Ne pas courir après la technologie : « don't fall for the run after the technology if it's not justified by user pain point ».

## 4. Notions sur lesquelles le prof insiste

- Encadrés ou messages répétés : « Trust » (fil rouge des pain points), « Designed backwards » (symptôme → caractéristique → composant), « Five characteristics, three principles that every BI component must guarantee ».
- **Messages clés de clôture** (compte rendu) : la BI est une discipline vivante ; les principes restent constants — définitions partagées, modélisation par mesures et axes d'analyse, fiabilité, prédictabilité, disponibilité, sécurité ; l'analyse et le design avant la technologie ; la modélisation reste pertinente « after more than 30 years ».
- **Change management dès le début**, anecdote du projet « purement informatique », « replace, don't add », mesure d'adoption (exemple 70 %).
- Objectifs d'apprentissage répétés en séquencement : grain, faits, dimensions, dimensions conformes, bus matrix, SCD de type 2, faits sans mesure, interview « année +1 ».

## 5. Exemples et cas fétiches (à réutiliser comme fil rouge)

- **Les extraits de l'atelier** : A (distribution : trois chiffres de ventes, chiffre au conseil modifié), B (hôpital : savoir avant 8 h quelles unités manqueront de personnel), C (logistique : trois semaines pour un rapport, données de l'entrepôt contre celles des transporteurs). Extrait D : **absent des sources**.
- **Exemples de vocabulaire** : chiffre d'affaires par mois et région ; livraison à l'heure, cible 95 % ; prises de commandes contre marge trimestrielle ; transaction / jour / mois.
- **Cas d'oral** : produit codé différemment dans plusieurs systèmes ; « client → commande → produit → famille » (ontologie) ; fournisseur A qui sert l'usine B (graphe) ; clôture mensuelle sans temps réel contre alerte à la fraude ; disponibilité 24/7 conçue alors que le besoin est 9 h-17 h.
- Fils rouges des chapitres de modélisation (livraisons, ventes de détail) : **les nôtres**, marqués comme tels.

## 6. Vocabulaire exact FR/EN

Le cours est **en anglais** ; les termes sont repris tels quels dans les glossaires : *pain point*, *characteristic*, *reliable / predictable / available*, *single version of the truth*, *semantic layer*, *staging area*, *data warehouse*, *data mart*, *row-level security*, *data owner*, *grain*, *drill-down*, *data freshness*, *leading / lagging*, *descriptive / diagnostic / predictive / prescriptive*, *conformed dimensions*, *bus matrix*, *SCD type 2*. « Learning & growth » (diapositive) ≠ « innovation and learning » (article de 1992). Les séquencements sont en français dans les sources, les diapositives en anglais.

## 7. Ce qui rapporte des points (déduit, à confirmer)

- Pour l'exercice d'interview : repérer **chaque** pain point d'un verbatim, nommer la bonne caractéristique, le bon principe et le niveau de maturité d'après la **question** (jamais l'outil), mentionner une exigence cachée (sécurité, adaptabilité) quand rien ne colle.
- Pour l'architecture : justifier le rôle de **chaque** couche par un besoin et un principe, dire qui y accède, nommer ce que l'on perd dans une variante simplifiée.
- Pour le modèle : déclarer le grain avant dimensions et faits ; relier les éléments partagés d'une interview à l'autre ; critère « les rapports de l'année 1 gardent leur sens ».
- Aucun barème n'est connu : les partiels blancs en proposent un, indicatif.
