/** Logique pure des partiels : notation, note /20, meilleure tentative, découpage du `material`. */
import type { Exam, ExamQuestion } from '@/content/schema'
import { isCorrect } from '@/features/quiz/quiz-logic'
import type { Attempt } from '@/store/db'
import type { ExamAnswer } from '@/store/exam-session'

type OpenQuestion = Extract<ExamQuestion, { type: 'open' }>

export const PASS_NOTE = 10
export const NOTE_MAX = 20

/** Questions à plat (ordre du sujet) avec leur section et leur numéro. */
export interface FlatQuestion {
  q: ExamQuestion
  section: number
  /** 1..n sur tout le partiel. */
  n: number
}

export function flattenQuestions(exam: Exam): FlatQuestion[] {
  let n = 0
  return exam.sections.flatMap((s, section) => s.questions.map((q) => ({ q, section, n: ++n })))
}

/** Somme des points des questions (le barème réel, pas le champ `points` des sections). */
export function totalPoints(exam: Exam): number {
  return exam.sections.reduce((t, s) => t + s.questions.reduce((u, q) => u + q.points, 0), 0)
}

/** Note ramenée sur 20, arrondie au centième ; 0 si le barème est vide. */
export function toNote20(earned: number, total: number): number {
  if (!(total > 0)) return 0
  const note = Math.round((earned / total) * NOTE_MAX * 100) / 100
  return Math.min(NOTE_MAX, Math.max(0, note))
}

/** Points d'une question à correction automatique (vrai/faux, QCM) : tout ou rien, comme le quiz. */
export function autoPoints(q: Exclude<ExamQuestion, OpenQuestion>, a: ExamAnswer | undefined): number {
  if (!a) return 0
  if (q.type === 'true_false') return a.bool === undefined ? 0 : isCorrect(q, a.bool) ? q.points : 0
  return a.picks && a.picks.length > 0 && isCorrect(q, a.picks) ? q.points : 0
}

/**
 * Points d'un critère du `gradingGuide`, lus dans le texte français : « … (2 pts) », « (1,5 pt) »,
 * « 1,5 pt par situation… ». `null` si le critère n'indique pas de points.
 */
export function criterionPoints(fr: string): number | null {
  const m = /(\d+(?:[.,]\d+)?)\s*pts?\b/i.exec(fr)
  if (!m) return null
  const v = Number((m[1] as string).replace(',', '.'))
  return Number.isFinite(v) && v > 0 ? v : null
}

/** Poids relatifs des critères (un critère sans points pèse comme la moyenne des autres, ou 1). */
export function criteriaWeights(q: OpenQuestion): number[] {
  const raw = q.gradingGuide.map((g) => criterionPoints(g.fr))
  const known = raw.filter((v): v is number => v !== null)
  const fallback = known.length > 0 ? known.reduce((a, b) => a + b, 0) / known.length : 1
  return raw.map((v) => v ?? fallback)
}

/** Points d'une question ouverte : part des poids cochés × points de la question (jamais plus que `points`). */
export function openPoints(q: OpenQuestion, checked: readonly number[]): number {
  const w = criteriaWeights(q)
  const sum = w.reduce((a, b) => a + b, 0)
  if (!(sum > 0)) return 0
  const got = [...new Set(checked)].reduce((t, i) => t + (w[i] ?? 0), 0)
  return Math.round(Math.min(1, got / sum) * q.points * 100) / 100
}

export interface QuestionScore {
  id: string
  earned: number
  max: number
  /** Question non traitée : aucune réponse (vrai/faux, QCM) ou texte vide (ouverte). */
  blank: boolean
}

export interface ExamScore {
  earned: number
  total: number
  note: number
  questions: QuestionScore[]
}

/** Une réponse est « vide » si rien n'a été saisi ni coché. */
export function isBlank(q: ExamQuestion, a: ExamAnswer | undefined): boolean {
  if (!a) return true
  if (q.type === 'true_false') return a.bool === undefined && !(a.text ?? '').trim()
  if (q.type === 'mcq') return !a.picks || a.picks.length === 0
  return !(a.text ?? '').trim()
}

/** Note complète : correction automatique + critères cochés (`grading[idQuestion]`) pour les questions ouvertes. */
export function scoreExam(
  exam: Exam,
  answers: Readonly<Record<string, ExamAnswer>>,
  grading: Readonly<Record<string, readonly number[]>>,
): ExamScore {
  const questions = flattenQuestions(exam).map(({ q }): QuestionScore => {
    const earned = q.type === 'open' ? openPoints(q, grading[q.id] ?? []) : autoPoints(q, answers[q.id])
    return { id: q.id, earned, max: q.points, blank: isBlank(q, answers[q.id]) }
  })
  const earned = Math.round(questions.reduce((t, s) => t + s.earned, 0) * 100) / 100
  const total = totalPoints(exam)
  return { earned, total, note: toNote20(earned, total), questions }
}

/** Nombre de questions auxquelles on a répondu dans une section. */
export function answeredCount(exam: Exam, section: number, answers: Readonly<Record<string, ExamAnswer>>): number {
  const qs = exam.sections[section]?.questions ?? []
  return qs.filter((q) => !isBlank(q, answers[q.id])).length
}

/** Meilleure tentative (note la plus haute ; à égalité, la plus récente). `undefined` s'il n'y en a pas. */
export function bestAttempt(attempts: readonly Attempt[]): Attempt | undefined {
  let best: Attempt | undefined
  for (const a of attempts) {
    if (a.score === undefined) continue
    if (!best || a.score > (best.score ?? 0) || (a.score === best.score && a.at > best.at)) best = a
  }
  return best
}

/** Meilleure note par partiel, d'après l'historique des tentatives `exam`. */
export function bestScores(attempts: readonly Attempt[]): Map<string, number> {
  const byExam = new Map<string, Attempt[]>()
  for (const a of attempts) if (a.kind === 'exam') byExam.set(a.itemId, [...(byExam.get(a.itemId) ?? []), a])
  const out = new Map<string, number>()
  for (const [id, list] of byExam) {
    const b = bestAttempt(list)
    if (b?.score !== undefined) out.set(id, b.score)
  }
  return out
}

export type MaterialPart = { kind: 'md'; text: string } | { kind: 'mermaid'; code: string }

/** Découpe le `material` : blocs ```mermaid → schéma ; le reste (markdown, ASCII en bloc de code) → markdown. */
export function splitMaterial(material: string): MaterialPart[] {
  const parts: MaterialPart[] = []
  const re = /^```mermaid[^\S\n]*\n([\s\S]*?)^```[^\S\n]*$/gm
  let last = 0
  for (const m of material.matchAll(re)) {
    const before = material.slice(last, m.index)
    if (before.trim()) parts.push({ kind: 'md', text: before })
    parts.push({ kind: 'mermaid', code: (m[1] as string).trim() })
    last = m.index + m[0].length
  }
  const rest = material.slice(last)
  if (rest.trim()) parts.push({ kind: 'md', text: rest })
  return parts
}
