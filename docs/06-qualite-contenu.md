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
| `callout` `analogy`, `heading`, `checkpoint`, `diagram` | facultatif |
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
5. **Exemples et cas fétiches** du prof (deadbot MemoriaTech, gardes britanniques, VOD…) → **à réutiliser en priorité** comme fil rouge et dans les exercices.
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
