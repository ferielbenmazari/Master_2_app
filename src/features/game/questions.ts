import type { Chapter } from '@/content/schema'
import { prepareQuiz, type PreparedItem } from '@/features/quiz/quiz-logic'
import type { BattleQuestion, QuestionOrigin } from './engine'

/** Vrai/faux ou QCM du cours → question de jeu. Pour un QCM, options et bonnes réponses suivent l'ordre mélangé affiché. */
export function toBattleQuestion(
  { item, order }: PreparedItem,
  origin?: QuestionOrigin,
): BattleQuestion {
  if (item.type === 'true_false') {
    return {
      ...(origin && { origin }),
      id: item.id,
      kind: 'tf',
      text: item.statement,
      options: [],
      correct: item.answer,
      explanation: item.justification,
    }
  }
  const options = order.map((orig) => item.options[orig]!)
  const correct = order.flatMap((orig, shown) => (item.correct.includes(orig) ? [shown] : []))
  return {
    ...(origin && { origin }),
    id: item.id,
    kind: 'mcq',
    text: item.question,
    options,
    correct,
    explanation: item.explanation,
  }
}

/**
 * Tire `count` questions (vrai/faux justifié + QCM) dans les `quiz` des chapitres choisis.
 * Déterministe pour une graine donnée ; chaque question une seule fois ; moins de `count` si le fonds est plus petit.
 */
export function pickBattleQuestions(
  chapters: readonly Chapter[],
  count: number,
  seed: number,
): BattleQuestion[] {
  const seen = new Set<string>()
  const origins = new Map<string, QuestionOrigin>()
  const items = chapters
    .flatMap((c) =>
      c.quiz.map((q) => {
        if (!origins.has(q.id)) {
          origins.set(q.id, { course: c.courseId.toUpperCase(), chapter: c.order, title: c.title })
        }
        return q
      }),
    )
    .filter((q) => !seen.has(q.id) && (seen.add(q.id), true))
  return prepareQuiz(items, seed)
    .slice(0, Math.max(0, count))
    .map((p) => toBattleQuestion(p, origins.get(p.item.id)))
}

/** Nombre de questions disponibles dans ces chapitres (pour afficher « 54 questions disponibles »). */
export function countQuizItems(chapters: readonly Chapter[]): number {
  return new Set(chapters.flatMap((c) => c.quiz.map((q) => q.id))).size
}
