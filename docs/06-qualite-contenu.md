# 06 — Qualité du contenu : exact, fidèle aux profs, et addictif

> Exigence de l'utilisatrice (2026-11-03) : « Le fond doit être aussi parfait que la forme. La validité des informations, la proximité avec le cours et les idées des professeurs doivent se voir et se sentir. Pas d'hallucination, pas de quiz trop faciles, trop évidents ou éloignés du style des profs. Apprendre beaucoup en peu de temps, sans être assommé. »
>
> Ce document est **obligatoire** pour tous les agents de contenu. Il prime sur toute autre consigne de style.

## 1. Les 5 garanties

| # | Garantie | Comment elle est assurée | Vérifiée par |
|---|---|---|---|
| G1 | **Zéro invention** | Chaque fait porte une **citation exacte** de la source (`src.quote`), vérifiée **mécaniquement** | `npm run validate:content` (vérificateur de citations) + agent `fact-checker` |
| G2 | **Tout le cours, rien que le cours** | **Carte des notions** (`notions.json`) extraite des sources avant d'écrire ; chaque notion ★★★ est couverte | validateur (rapport de couverture) + `content-reviewer` |
| G3 | **Le style des profs** | **Profil du prof** (`PROFIL-PROF.md`) tiré des annales et des supports : formats, tournures, pièges, exemples | `content-reviewer` (grille « prof ») |
| G4 | **La bonne difficulté** | Niveau cognitif sur chaque question (`level`), quotas par chapitre, détecteur de questions « évidentes » | validateur (lint) + `content-reviewer` (test de l'étudiant pressé) |
| G5 | **Ça se lit tout seul** | Épisodes de 3-4 min, rappel actif toutes les ~400 mots, limites de longueur, exemples du prof | validateur (lint) + `content-reviewer` |

Et dans l'app, **la fidélité se voit** : chaque définition, point clé, question et corrigé a une puce **Source** (icône `Quote`) qui ouvre l'extrait exact du cours (« Ce que dit le cours : “…” · REC1 · *Threats to validity* »). Un badge **Vérifié** apparaît sur les chapitres `status: "reviewed"`.

## 2. G1 — Citations vérifiables

### Format
```ts
type SourceRef = {
  file: string;   // chemin dans le repo : "ressources/S3__REC1/Markdown/5_recmeth_5.md" ou "sources-texte/isi1/05-elicitation.md"
  loc: string;    // repère lisible : "Validation of results", "slide 14", "p. 87", "§10.2"
  quote: string;  // extrait EXACT du fichier, 4 à 40 mots, dans la langue du fichier
};
```

### Règle du vérificateur
`quote` doit se retrouver **dans `file`** après normalisation (casse, espaces, ponctuation typographique, marqueurs markdown `* _ \` # >`, ligatures). Tolérance : ≥ 90 % des mots dans l'ordre (pour les coupures de ligne des PDF). Sinon : **erreur bloquante**.
Ce n'est pas une preuve que la reformulation est juste — c'est la garantie que **l'agent a lu un vrai passage**, et le `fact-checker` vérifie ensuite que le contenu dit bien la même chose que la citation.

### Ce qui doit être sourcé
| Élément | `src` |
|---|---|
| `glossary[]` (définition) | **obligatoire** |
| `keyPoints[]` | **obligatoire** |
| `quiz[]`, questions d'examen, `exercises[]` (corrigé) | **obligatoire** |
| `flashcards[]` | obligatoire, sauf si `termId` (hérite du terme) |
| blocs `paragraph`, `list`, `table`, `callout` (exam/tip/warning) | **obligatoire**, sauf `narrative: true` (pure mise en scène, sans fait nouveau) |
| `callout` `analogy`, `callout` `retenir` (récapitulatif sans fait nouveau), `heading`, `subheading`, `checkpoint`, `diagram` | facultatif |
| `writing[]` | facultatif (exercice de langue) — mais la phrase modèle ne doit énoncer que des faits sourcés ailleurs dans le chapitre |

### Hiérarchie des sources (voir `content/<id>/sources.json`)
| Niveau | Contenu | Utilisation |
|---|---|---|
| `cours` | supports du prof (slides, notes de cours) et leur transcription | **source principale**, seule autorisée pour les définitions |
| `annale` | sujets d'examen | style et notions attendues |
| `lecture` | chapitres de livres / articles **donnés comme lecture du cours** | compléments si le cours y renvoie |
| `complement` | autres articles du dossier | uniquement pour un approfondissement **demandé**, jamais pour une définition |
| `ignore` | doublons, hors sujet | jamais |

En cas de **contradiction** entre `cours` et une autre source : le cours gagne, et l'écart est signalé dans le rapport.
**Attention aux transcriptions** : les Markdown de `ressources/` sont des transcriptions (parfois traduites) des PDF. Pour les notions ★★★, le `fact-checker` recoupe avec le texte extrait du PDF original (`sources-texte/`) ; en cas d'écart, le PDF fait foi.

## 2 bis. Aligné sur la classe, complété dans la thématique

- **Périmètre** = ce qui a été fait en classe : lignes `[x]`/`[ ]` de `content/<id>/PROGRAMME.md` (cochées par l'utilisatrice) + « Vu en classe mais absent » + notes de cours (`ressources/S3__<ID>/NOTES/`, source prioritaire pour l'ordre, les exemples et l'insistance). Les lignes `[-]` ne sont pas traitées.
- **Ordre de production** : 1) le cours de tous les chapitres, 2) les quiz, 3) le reste.
- **Compléments** : uniquement pour éclairer une notion du périmètre, tirés des sources `lecture` puis `complement` de la matière, **cités** comme le reste, présentés dans un `callout` `tip` commençant par « **Pour aller plus loin** — », au plus 20 % du chapitre. Une notion vue en classe sans aucune source est marquée ` → ⚠ absent des supports` dans PROGRAMME.md, jamais inventée.

## 3. G2 — Carte des notions (`content/<id>/notions.json`)

Produite par l'agent `course-analyst` **avant** toute rédaction, validée par l'utilisatrice.
```ts
type Notion = {
  id: string;                 // "n-internal-validity"
  label: L;                   // { fr, en }
  importance: 1 | 2 | 3;      // 3 = ★★★ : dans une annale, OU répétée dans plusieurs supports, OU dans les objectifs du cours
  why: string;                // justification courte de l'importance ("annale 2014 Q6 + slides 3 et 12")
  chapter: string;            // numéro de chapitre du PLAN ("05")
  src: SourceRef[];           // où la notion est définie
};
```
Chaque item de chapitre (`quiz`, `flashcards`, `exercises`, blocs) peut porter `notions: string[]`.
**Règles** : toute notion ★★★ du chapitre → ≥ 1 bloc d'histoire + ≥ 1 quiz + ≥ 1 flashcard ; toute ★★ → ≥ 1 bloc + ≥ 1 quiz ou flashcard. Le validateur imprime un **rapport de couverture** par matière (`✔ 41/43 notions ★★★ couvertes — manquantes : n-ahp, n-triage`).

## 4. G3 — Profil du prof (`content/<id>/PROFIL-PROF.md`)

Produit par `course-analyst` à partir des annales, des consignes et des supports. Sections imposées :
1. **Formats d'évaluation** (ex. ISI1 : V/F « justifiez si et seulement si FAUX », correction de modèles, spécification d'exigences fautives, calcul AHP, réflexion argumentée).
2. **Tournures typiques** des énoncés, copiées telles quelles.
3. **Pièges récurrents** (ex. Kano « must have » ≠ satisfaction ; OR ≠ XOR ; « parfaitement », « jamais », « garantir »…).
4. **Notions sur lesquelles le prof insiste** (répétées, encadrées, « important »).
5. **Exemples et cas fétiches** du prof (deadbot MemoriaTech, gardes britanniques, VOD…) → **à réutiliser en priorité** dans les exemples corrigés et les exercices.
6. **Vocabulaire exact** FR/EN employé par le prof (et termes à ne pas utiliser).
7. **Ce qui rapporte des points** (barèmes, attendus des livrables).

Les quiz, exercices et partiels **imitent** ce profil : même format, même longueur, mêmes tournures, mêmes pièges, mais appliqués à **toutes** les notions.

## 5. G4 — Calibrer la difficulté

Chaque `quiz[]`, question d'examen et `exercises[]` porte `level` :
| `level` | Ce que ça demande | Exemple |
|---|---|---|
| `remember` | restituer une définition / une liste | « Les 4 critères de qualité ? » |
| `understand` | distinguer, reformuler, expliquer pourquoi | « Interne ou externe ? Pourquoi ? » |
| `apply` | appliquer à un cas nouveau | « Cette remarque du jury est une menace à quelle validité ? » |
| `analyze` | critiquer, trouver l'erreur, comparer, justifier un choix | « Corrigez ce modèle KAOS », « Quelle méthode et pourquoi ? » |

**Quotas par chapitre** (validateur, avertissement) : `remember` ≤ 30 % ; `apply` + `analyze` ≥ 35 % ; au moins 1 exercice `analyze` ; partiels blancs : même répartition que les annales de la matière.

**Détecteur de questions évidentes** (validateur, avertissement — le `content-reviewer` doit traiter chaque alerte) :
- V/F : proportion de FAUX entre 40 et 65 % ; les mots absolus (« toujours », « jamais », « parfaitement », « garantir », « uniquement ») ne doivent pas apparaître **seulement** dans les énoncés faux ;
- QCM : la bonne réponse n'est pas systématiquement la plus longue ; position de la bonne réponse variée ; pas d'option absurde (chaque distracteur = une confusion réelle, idéalement un `pitfall` du glossaire ou un piège du PROFIL-PROF) ;
- aucune question dont la réponse figure mot pour mot dans l'énoncé.

**Test de l'étudiant pressé** (`content-reviewer`) : pour chaque question, « un étudiant qui n'a pas ouvert le cours mais qui est malin trouverait-il la réponse ? » Si oui → réécrire.

## 6. G5 — Apprendre beaucoup, vite, avec envie

> **Forme remplacée par §10 et §11** (format structuré, orienté sommaire et partiel, depuis le 2026-11-17) : plus d’épisodes narratifs ni d’accroches. Restent valables : rappel actif (un `checkpoint` par partie), double codage (schémas du cours redessinés), exemples du prof, pièges d’examen visibles ; les limites de longueur sont indicatives.

Principes (sciences cognitives) appliqués à chaque chapitre :
1. **Épisodes courts** : l'histoire est découpée en épisodes de 3-4 min (≈ 350-450 mots FR), chacun commençant par un `heading` et finissant par un `checkpoint` (rappel actif immédiat).
2. **Accroche par une question** au début de chaque épisode (curiosité) ; la réponse arrive dans l'épisode.
3. **Exemples du prof d'abord** (cas, schémas, métaphores des supports) ; un exemple inventé doit être marqué `narrative: true` et ne contenir aucun fait non sourcé.
4. **Une idée par paragraphe**, ≤ 90 mots FR ; listes ≤ 7 items ; tableaux pour comparer (le prof compare souvent).
5. **Pièges d'examen visibles** (`callout exam`) : ≥ 1 par épisode quand le PROFIL-PROF en fournit.
6. **Double codage** : un `diagram` (mermaid) dès qu'un processus ou une structure s'y prête — reproduire les schémas du cours.
7. **Récupération espacée et entrelacée** : les flashcards reprennent chaque notion sous 2 angles (définition → terme, terme → définition / exemple → notion).
8. **Récompense** : fin de chapitre = « Ce que tu sais maintenant » (3 phrases) + XP ; mode **Express 5 min** (1 point clé + 3 flashcards + 2 quiz) pour garder l'élan.

Limites contrôlées par le validateur (avertissements) : paragraphe > 90 mots ; épisode > 450 mots sans `checkpoint` ; chapitre > 15 min de lecture → le découper.

## 7. La chaîne de production (résumé — détail dans `04-pipeline-contenu.md`)

```
sources.json ─► course-analyst ─► notions.json + PROFIL-PROF.md ─► [validation utilisatrice]
                                                │
        pour chaque chapitre :  content-author ─► fact-checker ─► content-reviewer ─► validate ─► commit
                                 (rédige, cite)   (vérifie CHAQUE   (prof, difficulté,
                                                   fait vs source)   attention, couverture)
```
- Le `fact-checker` ne voit **que** le JSON et les sources (pas le raisonnement de l'auteur) et a pour consigne d'être adversarial.
- Un chapitre ne passe `reviewed` que si : 0 erreur de validation, 0 citation invalide, 0 fait non confirmé, alertes de difficulté traitées.

## 8. Boucle de correction par les utilisateurs

Dans l'app, bouton **Signaler** sur chaque bloc/question → ouvre une *issue* GitHub pré-remplie (id de l'item, chapitre, texte, commentaire). Commande `/corriger-signalements` : l'agent `fact-checker` traite les issues ouvertes, corrige, commente et ferme.

## 9. Conception pédagogique (refonte du 2026-11-12) — prioritaire sur le style

> Constat de l'audit : des chapitres exacts mais construits comme des slides commentées (un épisode par slide, une question par notion). Un chapitre doit **faire apprendre**, pas transcrire. Ce paragraphe prime sur « couvrir chaque ligne » (§2 bis) : on couvre ce qui sert l'examen, au bon poids.

### 9.1 Hiérarchiser par la preuve
| Niveau | Signification | Traitement |
|---|---|---|
| **A** | preuve directe d'évaluation (annale, consigne d'examen, témoignage de l'utilisatrice sur un contrôle) | développé, méthode + corrigé + transfert, quiz |
| **B** | importance fortement étayée (récurrent, central, travaillé en exercice) | développé, quiz |
| **C** | fondement nécessaire pour comprendre A/B | expliqué brièvement, relié |
| **D** | contexte (chiffres, outils, logistique, historique) | encadré `repere`, **jamais quizzé** |
| **E** | importance incertaine (lectures, approfondissements) | court, étiqueté, signalé |

Cible : A + B ≥ 70 % du récit et des quiz. Ne jamais présenter une hypothèse sur l'examen comme un fait : `examFocus.documented` (preuve) ≠ `examFocus.probable` (estimation).

### 9.2 Gabarit d'un chapitre
1. `question` directrice ; 3 à 6 `objectives` évaluables (définir, distinguer, expliquer, diagnostiquer, appliquer, justifier) ; `examFocus` ; `prerequisites` / `next`.
2. Épisodes : chacun sert au moins un objectif ; il part d'un besoin (question d'accroche, situation), introduit la notion, **explique pourquoi elle existe et à quoi elle se relie**, puis l'applique.
3. Pour chaque compétence : un bloc `method` (étapes + pourquoi), un **corrigé commenté** (l'exercice du prof : chaque étape dit pourquoi on la fait), puis un **exercice de transfert** sur un cas absent du cours.
4. `synthesis` : à restituer, à savoir faire, distinctions, liens avec les autres chapitres (la structure, pas un résumé).
5. Court : 10 à 15 min. Couper le contexte avant de couper l'explication.

### 9.3 Statut des textes (zéro invention, mais de l'explication)
- **Fait de cours** : `src` obligatoire (inchangé).
- **Explication** (`paragraph.explain: true`) : relie, compare ou applique des faits **déjà sourcés dans le chapitre** ; n'introduit aucun fait de cours nouveau. Le fact-checker vérifie ce point.
- **Méthode de l'app** (bloc `method`) : construction pédagogique à partir de plusieurs slides ; chaque `why` nomme ce qui la fonde. Ce que le cours ne définit pas est signalé (« le cours ne précise pas… »), jamais comblé.
- **Récit** (`narrative: true`) : mise en scène, aucun fait.

### 9.4 Exercices des profs
Ne jamais confondre l'énoncé et l'objectif. Pour chaque exercice représentatif : objectif réel → notions mobilisées → méthode → résolution commentée → transfert. **Interdit** : un quiz qui demande le résultat d'un exercice du cours (« le modèle autorise 46 produits ? ») ; un épisode qui raconte l'exercice sans en extraire la méthode.

### 9.5 Quiz
Chaque item a un `objective` ; `trap` nomme la confusion visée quand il y en a une. La correction dit pourquoi, quelle notion, quel raisonnement. Distracteurs = confusions réelles. Rien sur le niveau D.

### 9.6 Sources hors supports
Autorisées (décision de l'utilisatrice, 2026-11-12) quand une notion d'examen manque dans les supports ou reste trop obscure : d'abord les lectures du prof (`lecture`), sinon une source **fiable** (article évalué par les pairs, ouvrage de référence, norme, syllabus officiel). L'extrait utilisé est enregistré dans `sources-texte/<id>/ext-<slug>.md` (en-tête : référence complète, URL, date de consultation), déclaré `complement` dans `sources.json`, cité comme le reste, et annoncé dans le texte (« d'après X, hors supports du cours »). Un terme de glossaire doit avoir une source `cours` **ou** une `annale` qui l'emploie.

## 10. Présentation structurée (refonte du 2026-11-17) — prime sur §6 et §9.2 pour la forme

> Décision de l'utilisatrice (2026-11-17), d'abord appliquée à ISI1 (`content/isi1/REFONTE-ARCHITECTURE.md`). Elle révise par cœur : le cours doit faciliter la **mémorisation**, la **restitution** et l'**application** en étude de cas. Objectif : **pas un cours plus long, un cours mieux conçu.**

### 10.1 Sélectionner : un budget par notion
Le niveau de détail dépend de l'importance pour le partiel (preuve, §9.1), jamais de la place dans les slides ni d'un temps de lecture à remplir.
| Niveau | Traitement |
|---|---|
| A (annale, projet) | définition encadrée + distinctions utiles + méthode + **un exemple entièrement corrigé** (les autres exemples plus synthétiques) + piège d'examen |
| B (insistance du prof) | définition + liste ou tableau + un exemple |
| C (fondement nécessaire) | 2 à 4 lignes |
| D (culture : chiffres, organismes, historique, études de cas, auteurs) | 1 à 3 lignes en `repere`, ou supprimé |
| E (support sans signal d'examen) | supprimé, ou gardé en référence complémentaire courte ; pas de fiche systématique |

### 10.2 Structurer
- **Fidélité = alignement sur les notions, pas sur la forme** (décision du 2026-11-17) : définitions, propriétés, classifications et listes du cours sont exactes et sourcées ; la structure, l'ordre, la formulation, les explications et les exemples sont libres (ne pas paraphraser les slides).
- Les slides sont une **source**, pas un plan : on extrait, on regroupe, on réordonne.
- Le cours complet d'une matière couvre **toutes** ses notions (contrôle par `notions.json`), chacune au niveau de détail que justifie le partiel.
- **Sommaire** : chaque partie est un `heading` numéroté (« 1. … ») et chaque sous-partie un `subheading` (« 1.2 … ») ; ils alimentent le sommaire du chapitre (lecteur) et le sommaire général (onglet « Sommaire »). **Sommaire détaillé** (demande de l'utilisatrice, 2026-11-18) : chaque partie est découpée en sous-parties `subheading` numérotées « n.m », nommées par la notion qu'elles traitent (pas « Définition » tout court) ; un 3ᵉ niveau « n.m.k » (`subheading` avec `level: 3`) quand il est naturel (exemple corrigé sous une méthode, éléments d'une boîte à outils).
- **Définition d'abord** : chaque notion fondamentale s'ouvre sur un `callout` `definition` (src obligatoire).
- `heading` = partie numérotée (« 1. … ») ; `subheading` = sous-partie (« 1.2 … »).
- Un **ensemble à mémoriser** (qualités, catégories, étapes, facteurs) est présenté **complet et au même endroit**, en `list` numérotée ou en `table` ; le nombre d'éléments est annoncé.
- **Distinctions** : seulement celles qui évitent une confusion réelle ou servent un exercice, en tableau « comment trancher ».
- **Méthode** : `method` (étapes et pourquoi), suivie **immédiatement** d'un exemple corrigé dans le cours (pas renvoyé aux exercices).
- Chaque partie se termine par un `callout` `retenir` (3 à 6 lignes, aucun fait nouveau).
- Des notions différentes restent séparées et nommées comme telles (ex. ISI1 : erreurs de classement de Glinz ≠ défauts de rédaction bruit / silence…).
- Corrigés d'annales : pièges en fin de partie, corrigés détaillés dans `exercises`.

### 10.3 Style
- **Abandon du style narratif** : pas d'accroche (« Imagine… »), pas de fil rouge romancé, pas de `narrative: true` ; tutoiement possible mais phrases directes.
- Tableaux et listes dès qu'ils facilitent la mémorisation ; paragraphes courts mais complets.
- Les limites de §6 deviennent indicatives : `W-paragraph-long`, `W-episode-long` et `W-chapter-long` se traitent au cas par cas (une notion A peut justifier une partie plus longue ; un chapitre court est préférable).
- Les débats de chercheurs ne restent que s'ils expliquent une notion, en quelques lignes.


## 11. Méthode orientée sommaire et réussite au partiel (2026-11-18) — standard pour toutes les matières

> Décision de l'utilisatrice après la refonte d'ISI1 : « la version structurée et synthétique est infiniment mieux que la version narrative… Prioriser les notions, ne pas insister sur les notions secondaires, mettre en valeur et développer les notions importantes, trier les informations et zapper les notions inutiles : je gagne du temps, sachant que je n'ai pas le temps de tout apprendre. » Mais : « je n'aime pas l'idée de retirer une notion qui pourrait tomber au partiel ; on peut la synthétiser, mais si elle peut tomber, on la garde. »
> Outils : `/refondre-cours` (cours existant) et `/rediger-cours` (nouveau cours). Modèle : ISI1 (`content/isi1/REFONTE-ARCHITECTURE.md` et ses chapitres). Ce paragraphe prime sur §6 et §9.2.

### 11.1 Quatre principes
1. **Sommaire d'abord.** Avant d'écrire, on refait le sommaire de la matière (chapitres → parties → sous-parties) à partir des notions classées par preuve d'examen (§9.1), et on le fait **valider par l'utilisatrice**. Les slides sont une source, pas un plan.
2. **Orienté partiel.** La place d'une notion dépend de ses chances de tomber : A et B **développés** (définition, tableau complet, méthode, exemple corrigé, piège d'annale), C **condensé** (2 à 4 lignes), D en `repere` (1 à 3 lignes) ou supprimé, E en fiche courte.
3. **Ne jamais supprimer une notion qui peut tomber** : la synthétiser (une ligne, une case de tableau, une flashcard) est permis, la retirer non. Ce qu'on supprime, c'est le **parasite** : récits, accroches, anecdotes, débats d'auteurs qui n'expliquent rien, historiques, chiffres sans enjeu, répétitions, paraphrase des slides. En cas de doute sur une notion : on la garde, condensée.
4. **Du plus important au moins important**, tant que ça reste compréhensible. Ordre des chapitres = progression logique (souvent le plan du prof). Ordre des parties dans un chapitre = priorité au partiel (A d'abord), sauf si une notion en suppose une autre : on place alors 2 lignes de fondement avant, pas une partie entière.

### 11.2 Ce que contient un chapitre
- **Court** : 5 à 12 min (≤ 2 000 mots de récit) ; fiches complémentaires (E) ≤ 5 min. Un chapitre trop long se resserre (parasites, cellules de tableau, doublons) avant de se découper.
- **Chaque partie** : `heading` numéroté, découpé en sous-parties `subheading` « n.m » (3ᵉ niveau « n.m.k » si naturel, §10.2) → `definition` → tableau ou liste **complète** (nombre d'éléments annoncé) → si c'est une compétence : `method` puis **exemple corrigé** juste après → piège d'annale (`exam` : énoncé + corrigé proposé en 1 ou 2 lignes) → `retenir` → `checkpoint`.
- **Liens entre notions** visibles : une phrase ou un `callout tip` « Le lien avec… » quand une notion en éclaire une autre (ex. Kano ↔ familles de techniques ; cas complémentaires ↔ raffinement ET) ; `synthesis.links` ; `prerequisites` / `next` à jour. Renvoyer à un chapitre par son **titre**, jamais par son numéro.
- **Schémas et illustrations** : tout schéma des supports qui porte une notion A ou B est **redessiné** en bloc `diagram` (Mermaid, libellés en anglais, légende FR/EN « … (redessiné) », `src` vers la slide). Une méthode en étapes peut devenir un arbre de décision ; un exemple corrigé gagne à montrer l'avant (modèle fautif) et l'après ; une famille de techniques, une carte mentale ; une courbe du cours, un `xychart-beta` (valeurs dites « illustratives »). Au moins un schéma par chapitre dès que le cours en contient.
- Corrigés détaillés d'annales dans `exercises` ; quiz au format du prof (`/quiz-essentiel`).
- **Vocabulaire du prof et liens entre classifications** (demande de l'utilisatrice, 2026-11-18, valable pour toutes les matières) : tout terme employé par le prof — dans une annale, un titre de slide, une consigne — reçoit une **définition rapide**, même si ses supports ne le définissent pas (d'abord les autres supports du cours, sinon une source fiable, §9.6 ; le rapprochement est signalé). Quand une notion appartient à une **classification**, on dit sur quel **axe** elle classe et on donne les **correspondances** avec les autres classifications (ex. ISI1 : « must have » ↔ dissatisfier ↔ connaissance subconsciente ↔ exigence **implicite**, d'où l'annale 2013 Q2), dans un tableau « axes » ou « correspondances », avec les pièges de vrai / faux qui croisent deux classifications (« implicite = non fonctionnelle » : FAUX). Objectif : ne jamais rater une bonne réponse parce qu'un terme n'a pas été vu.

### 11.3 Contrôles avant commit (en plus de §7)
- `npm run validate:content` : 0 erreur et **0 avertissement** sur les chapitres touchés ; couverture ★★★ / ★★ intacte.
- `npm run check` (inclut `src/content/diagrams.test.ts`, qui refuse tout schéma Mermaid invalide).
- **Rendu à l'écran** des schémas : `npm run build`, puis `npx vite preview --port 4179 --strictPort` en arrière-plan, puis `node tools/cours/capture-schemas.mjs <id> <chapitre…>` et regarder les captures (lisibles en largeur téléphone ?). **Ne jamais lancer un second `npm run dev`** : celui de l'utilisatrice tourne souvent sur 5173 et Vite efface alors son cache (les schémas ne s'affichent plus chez elle).
- `node tools/cours/outline.mjs <id> <chapitre>` : le sommaire se lit comme un plan de révision, parties dans l'ordre de priorité, mots ≤ cible.

### 11.4 Pièges techniques déjà rencontrés
- En-tête de tableau vide → erreur « champ vide » : toujours nommer la première colonne.
- Terme de glossaire : au moins une source `cours` ou une annale qui l'emploie ; une source externe seule est refusée.
- Citations : 4 à 40 mots, recopiées du fichier (le texte extrait peut différer du PDF : « no-binding »). Réutiliser les citations déjà vérifiées : `node tools/cours/citations.mjs <id> "<extrait>"`.
- V/F : 40 à 65 % de FAUX, et les mots absolus (toujours, jamais, garantir, uniquement…) aussi dans des énoncés VRAIS.
- Déplacer une notion : mettre à jour son `chapter` dans `notions.json` (la couverture se calcule par préfixe d'id de chapitre), renommer les ids des items déplacés (`<chapitre>-qz-…`), remapper leur `objective`, vérifier que chaque `checkpoint` vise un quiz du chapitre.
- `story` ≤ 80 blocs, titres et sous-titres compris (T28) ; paragraphe > 90 mots → le passer en liste ; liste ≤ 7 items, sinon tableau.
- `explain: true` seulement pour relier des faits déjà sourcés dans le chapitre ; sinon un `src`.
- Mermaid : `xychart-beta` avec `%%{init: {"themeVariables": {"xyChart": {"plotColorPalette": "…"}}}}%%` (sinon la première courbe est presque invisible) et couleurs nommées dans la légende ; chaîne en `TB`, arbre large en `LR` (lisible sur téléphone) ; libellés entre guillemets s'ils contiennent des parenthèses.
- Changer l'ordre des chapitres : `course.json.chapterOrder` **et** le champ `order` de chaque chapitre.
- **Serveur de dev de l'utilisatrice (5173) : écrire `src/` et `content/` de façon atomique** (fichier temporaire puis `os.replace` / `fs.renameSync`), jamais `open(…, 'w')` ni `writeFileSync` en place : Vite peut relire le fichier vide pendant l'écriture et garder une version tronquée en cache (2026-11-18 : « does not provide an export named 'plainText' », sommaire ISI1 resté noir). Après une modification de `src/`, ouvrir la page touchée sur `http://localhost:5173` avec Playwright (lecture seule) et vérifier qu'il n'y a pas d'erreur ; si un module est figé, `touch` le fichier suffit.
