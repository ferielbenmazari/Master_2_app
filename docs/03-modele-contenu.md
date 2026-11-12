# 03 — Modèle de contenu

> **Contrat entre les agents de contenu et l'app.** Les règles de qualité (citations, notions, difficulté, attention) sont dans **`06-qualite-contenu.md`** — obligatoire.
> Le schéma Zod (`src/content/schema.ts`) doit être la traduction exacte de ce fichier.
> **Exemple de référence (gold standard) :** `content/rec1/chapters/05-qualite-validite-ethique.json`. En cas de doute, l'imiter.

## Fichiers

```
content/<courseId>/course.json                 # 1 par matière
content/<courseId>/sources.json                # manifeste des sources + niveaux de confiance
content/<courseId>/notions.json                # carte des notions (voir 06)
content/<courseId>/PROFIL-PROF.md              # style d'examen du prof (voir 06)
content/<courseId>/chapters/<nn>-<slug>.json   # 1 par chapitre (nn = 01, 02…)
content/<courseId>/exams/<slug>.json           # 1 par partiel (annale ou blanc)
```

## Types (TypeScript de référence)

```ts
/** Texte bilingue. Markdown inline autorisé (**gras**, *italique*, `code`) + références de termes [[termId]] ou [[termId|texte affiché]]. */
type L = { fr: string; en: string };

type CourseColor = "lime" | "coral" | "cyan" | "gold" | "orange";

/** Citation vérifiable — voir 06 §2. quote = extrait EXACT du fichier (4-40 mots). */
type SourceRef = { file: string; loc: string; quote: string };
type Level = "remember" | "understand" | "apply" | "analyze";

interface Course {
  id: string;                 // "rec1" — minuscules, = nom du dossier
  code: string;               // "S3-REC1"
  title: L;
  teacher?: string;
  color: CourseColor;
  icon: string;               // nom d'icône lucide-react, ex. "ClipboardList" (pas d'emoji)
  description: L;             // 1-2 phrases
  examDate?: string;          // "2026-11-12" — affiche un compte à rebours
  objectives?: L[];           // objectifs du module (carte de la matière)
  chapterOrder?: string[];    // ordre d'affichage (ids) ; absent = numéro du fichier. Insérer un chapitre sans changer d'id.
}

interface Chapter {
  id: string;                 // "<courseId>-<nn>-<slug>", ex. "rec1-05-qualite-validite-ethique"
  courseId: string;
  order: number;              // 1, 2, 3… (= position dans course.chapterOrder si présent)
  title: L;                   // titre accrocheur
  hook: L;                    // 1 phrase d'accroche
  // --- conception pédagogique (docs/06 §7) — facultatif dans le schéma, attendu pour tout chapitre refondu
  question?: L;               // question directrice : à quoi le chapitre répond
  objectives?: Objective[];   // 3 à 6 objectifs évaluables (« À la fin, tu sais… »)
  examFocus?: { documented?: L[]; probable?: L[] }; // au partiel : prouvé (annale, consigne, témoignage) vs estimé
  prerequisites?: L;          // ce qu'il faut savoir avant (chapitres)
  next?: L;                   // ce que le chapitre prépare
  synthesis?: { mustKnow: L[]; mustDo: L[]; distinctions?: L[]; links?: L[] }; // fin de lecture
  estimatedMinutes: number;   // temps de lecture de l'histoire
  sources: string[];          // chemins relatifs au repo (ressources/… ou sources-texte/…)
  status: "draft" | "reviewed";
  story: StoryBlock[];        // 12 à 60 blocs (checkpoints inclus)
  glossary: Term[];           // 6 à 20 termes
  notions: string[];          // ids de notions.json couverts par ce chapitre
  keyPoints: KeyPoint[];      // 5 à 10 → fiche synthèse
  flashcards: Flashcard[];    // 8 à 25
  quiz: QuizItem[];           // 8 à 20, au moins 50 % de true_false
  exercises: Exercise[];      // 2 à 16 (REC1-01 en porte 15 : 4 exercices de cours + 11 corrigés du devoir)
  writing: WritingItem[];     // 4 à 12, chaque kind au moins 1 fois
}

interface Objective { id: string /* "o1" */; text: L; level: Level }

type StoryBlock =
  | { type: "heading"; text: L }                         // un heading = début d'épisode (3-4 min)
  | { type: "paragraph"; text: L; src?: SourceRef[]; narrative?: boolean; explain?: boolean; notions?: string[] }
      // explain: true = explication pédagogique : relie des faits sourcés AILLEURS dans le chapitre, n'en ajoute aucun
  | { type: "method"; title: L; steps: { do: L; why: L }[]; src?: SourceRef[]; notions?: string[] } // méthode pas à pas (2-8 étapes)
  | { type: "list"; ordered?: boolean; items: L[]; src: SourceRef[]; notions?: string[] }
  | { type: "callout"; variant: "tip" | "warning" | "exam" | "analogy" | "repere"; text: L; src?: SourceRef[] } // repere = contexte secondaire, jamais quizzé
  | { type: "table"; headers: L[]; rows: L[][]; src: SourceRef[]; notions?: string[] }
  | { type: "diagram"; mermaid: string; caption: L; src?: SourceRef[] }   // Mermaid valide, libellés en anglais
  | { type: "quote"; text: L; source: string }
  | { type: "checkpoint"; quizId: string };               // renvoie à un item de `quiz`
// paragraph : src obligatoire sauf narrative: true ou explain: true · callout : src obligatoire sauf variant "analogy"

interface KeyPoint { text: L; src: SourceRef[]; notions?: string[] }

interface Term {
  id: string;                 // "term-internal-validity" (unique dans tout le contenu)
  fr: string;                 // "validité interne"
  en: string;                 // "internal validity"
  definition: L;
  example?: L;
  pitfall?: L;                // confusion fréquente / piège d'examen
  src: SourceRef[];           // ≥ 1, niveau "cours" obligatoire pour la définition
  notion?: string;
}

interface Flashcard { id: string; front: L; back: L; termId?: string; src?: SourceRef[]; notions?: string[] } // src obligatoire si pas de termId

type QuizItem =
  | { id: string; type: "true_false"; statement: L; answer: boolean; justification: L; level: Level; src: SourceRef[]; notions?: string[]; objective?: string; trap?: L }
  | { id: string; type: "mcq"; question: L; options: L[]; correct: number[]; explanation: L; level: Level; src: SourceRef[]; notions?: string[]; objective?: string; trap?: L };
  // objective = id d'un objectif du chapitre ; trap = la confusion à éviter (affichée dans la correction)

interface Exercise {
  id: string;
  title: L;
  difficulty: 1 | 2 | 3;
  statement: L;               // markdown autorisé (listes, tableaux)
  hints: L[];                 // 1 à 3, du plus vague au plus précis
  solution: L;                // corrigé détaillé, markdown autorisé
  examStyle?: boolean;        // true si calqué sur un format de partiel
  level: Level;
  src: SourceRef[];
  notions?: string[];
  objective?: string;         // id d'un objectif du chapitre
  trap?: L;                   // erreur typique à éviter
}

type WritingItem =
  | { id: string; kind: "reorder"; prompt: L; answer: string; accepted?: string[] }
  | { id: string; kind: "cloze"; prompt: L; text: string; translation: string }
      // text : "Internal validity {{controls|controls for}} extraneous variables."
      // {{a|b}} = un trou, réponses acceptées séparées par |. translation = version FR complète.
  | { id: string; kind: "spot_error"; prompt: L; sentence: string; error: string; corrected: string; explanation: L }
      // error = fragment exact de `sentence` qui est faux
  | { id: string; kind: "free"; prompt: L; modelAnswer: string; keywords: string[]; checklist: L[]; usefulPhrases?: string[] };

interface Exam {
  id: string;                 // "isi1-exam-2013-janvier"
  courseId: string;
  title: L;
  kind: "past" | "mock";      // annale réelle ou partiel blanc généré
  year?: number;
  durationMinutes: number;
  source?: string;            // chemin de l'annale d'origine
  correctionStatus: "proposed" | "official";  // "proposed" = corrigé rédigé par agent, non officiel
  instructions: L;
  sections: ExamSection[];
}
interface ExamSection { title: L; points: number; instructions: L; questions: ExamQuestion[] }
type ExamQuestion =
  | { id: string; type: "true_false"; points: number; statement: L; answer: boolean; justification: L; level: Level; src: SourceRef[] }
  | { id: string; type: "mcq"; points: number; question: L; options: L[]; correct: number[]; explanation: L; level: Level; src: SourceRef[] }
  | { id: string; type: "open"; points: number; prompt: L; material?: string; correction: L; gradingGuide: L[]; level: Level; src: SourceRef[] };
      // material = schéma/énoncé en markdown ou bloc ```mermaid```, gradingGuide = barème point par point
```

## Règles de validation (appliquées par `npm run validate:content`)

1. Le JSON respecte le schéma (zod, `strict` : aucun champ inconnu).
2. Les `id` de chapitres, examens, flashcards, quiz, exercices, writing et questions d'examen sont **uniques dans tout `content/`** et préfixés par l'id court du chapitre ou de l'examen (`rec1-05-qz-03`). Les `id` de termes (`term-…`) sont uniques **dans un même glossaire** ; un même terme peut être redéfini dans plusieurs chapitres d'une matière (même notion → même id, c'est voulu).
3. Chaque `[[termId]]` d'un texte existe dans le `glossary` du chapitre (ou d'un chapitre de la même matière).
4. Chaque `checkpoint.quizId` existe dans le `quiz` du chapitre.
5. `mcq.correct` : indices valides, au moins 1. `options` : 3 à 5.
6. `cloze.text` contient au moins un `{{…}}`. `spot_error.error` est une sous-chaîne de `sentence`.
7. Aucun champ `fr` ou `en` vide. `chapter.courseId` = nom du dossier.
8. `sources` et chaque `src[].file` : le fichier existe et n'est pas classé `ignore` dans `sources.json`.
9. **Citations** : chaque `src[].quote` est retrouvée dans son fichier (normalisation + tolérance 90 %, voir 06 §2). Erreur bloquante.
10. **Sourçage obligatoire** selon le tableau de 06 §2. Erreur bloquante.
11. `notions` : chaque id existe dans `content/<courseId>/notions.json` (si ce fichier existe).
12. **Ordre** : si `course.chapterOrder` existe, il liste chaque chapitre une fois et `chapter.order` = sa position (R13).
13. **Objectifs** : ids uniques ; `objective` d'un quiz/exercice existe dans `objectives` (R14). Avertissements : chapitre sans question/objectifs/synthèse (`W-pedago`), objectif visé par aucun quiz ni exercice, quiz sans objectif.
14. **Avertissements** (n'empêchent pas le build, mais doivent être traités avant `reviewed`) : quotas de `level`, détecteur de questions évidentes, longueurs (paragraphe > 90 mots, épisode > 450 mots sans checkpoint), couverture des notions ★★★/★★. Voir 06 §3-§6.

## Charte éditoriale (pour les agents auteurs)

> Résumé — la version complète et prioritaire est `06-qualite-contenu.md`.

**Cours narratif (`story`)**
- Tutoiement, ton chaleureux, phrases courtes. Un **fil rouge** par chapitre, **de préférence un cas ou exemple du prof** (MemoriaTech, gardes britanniques…) ; sinon un personnage simple (paragraphes `narrative: true`).
- Découpage en **épisodes** de 3-4 min : `heading` → question d'accroche → notion → exemple → piège → `checkpoint`.
- Ordre type : accroche → problème concret → notion (avec `[[terme]]`) → exemple → analogie → piège d'examen → mini-checkpoint → récap.
- **Chaque terme technique** est introduit avec `[[termId]]` à sa première apparition et défini dans `glossary`.
- **Fidélité** : n'invente aucune définition, aucun chiffre, aucun auteur. Tout doit venir des `sources`. Si une notion d'examen manque dans les sources, ne l'invente pas : signale-la dans le rapport de tâche.
- Version **EN** : anglais simple et correct (niveau B2), phrases courtes, **réutilise exactement les termes anglais du cours**. C'est un modèle de ce que l'étudiant doit savoir écrire.

**Quiz** : chaque item a `level` et `src`. Style des partiels (« Répondez VRAI ou FAUX, justifiez si FAUX »). Les énoncés faux doivent être *plausibles* (inversion interne/externe, OR/XOR, mauvais auteur…). `justification` explique toujours, même si VRAI.

**Exercices** : niveau Master, appliqués à un cas concret ; au moins un `examStyle: true` par chapitre quand la matière a des annales.

**Atelier anglais (`writing`)** : phrases que l'on pourrait réellement écrire en examen (définir, comparer, justifier). `spot_error` cible les erreurs typiques des francophones (faux-amis : *actually/actuellement*, *eventually/éventuellement* ; « informations » au pluriel ; « depend of » ; accord du *s* à la 3ᵉ personne ; ordre adjectif-nom).
