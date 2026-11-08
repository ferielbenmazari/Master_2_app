/**
 * Copie en cours d'un partiel (brouillon des réponses + heure de démarrage), conservée dans le navigateur
 * (localStorage, comme les brouillons d'exercices). Le minuteur est dérivé de `startedAt` : il survit au rechargement.
 */

export interface ExamAnswer {
  /** Vrai/faux : réponse choisie. */
  bool?: boolean
  /** Vrai/faux : justification ; question ouverte : réponse rédigée. */
  text?: string
  /** QCM : indices ORIGINAUX des options cochées. */
  picks?: number[]
}

export interface ExamSession {
  examId: string
  /** Démarrage du minuteur (ms depuis 1970). */
  startedAt: number
  /** Index de la section affichée. */
  section: number
  answers: Record<string, ExamAnswer>
  /** Copie rendue (ms) : passe en correction. */
  submittedAt?: number
  /** Questions ouvertes : indices des critères du `gradingGuide` cochés. */
  grading: Record<string, number[]>
}

const PREFIX = 'm2rev:exam:'

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)
const isIndexes = (v: unknown): v is number[] => Array.isArray(v) && v.every((n) => Number.isInteger(n) && n >= 0)

function cleanAnswer(v: unknown): ExamAnswer | null {
  if (!isObj(v)) return null
  const a: ExamAnswer = {}
  if (typeof v.bool === 'boolean') a.bool = v.bool
  if (typeof v.text === 'string') a.text = v.text
  if (isIndexes(v.picks)) a.picks = v.picks
  return a
}

/** Lit la copie en cours ; `null` si aucune ou si le contenu stocké est inutilisable. */
export function loadExamSession(examId: string): ExamSession | null {
  try {
    const raw = localStorage.getItem(PREFIX + examId)
    if (!raw) return null
    const v: unknown = JSON.parse(raw)
    if (!isObj(v) || v.examId !== examId || typeof v.startedAt !== 'number' || !Number.isFinite(v.startedAt)) return null
    const answers: Record<string, ExamAnswer> = {}
    if (isObj(v.answers)) {
      for (const [id, a] of Object.entries(v.answers)) {
        const c = cleanAnswer(a)
        if (c) answers[id] = c
      }
    }
    const grading: Record<string, number[]> = {}
    if (isObj(v.grading)) {
      for (const [id, g] of Object.entries(v.grading)) if (isIndexes(g)) grading[id] = g
    }
    const section = typeof v.section === 'number' && Number.isInteger(v.section) && v.section >= 0 ? v.section : 0
    const submittedAt = typeof v.submittedAt === 'number' && Number.isFinite(v.submittedAt) ? v.submittedAt : undefined
    return { examId, startedAt: v.startedAt, section, answers, grading, ...(submittedAt !== undefined ? { submittedAt } : {}) }
  } catch {
    return null
  }
}

export function saveExamSession(s: ExamSession): void {
  try {
    localStorage.setItem(PREFIX + s.examId, JSON.stringify(s))
  } catch {
    /* stockage indisponible : la copie reste valable pour la session */
  }
}

export function clearExamSession(examId: string): void {
  try {
    localStorage.removeItem(PREFIX + examId)
  } catch {
    /* stockage indisponible */
  }
}

/** Supprime toutes les copies en cours (réinitialisation). */
export function removeExamSessions(): void {
  try {
    for (const k of Object.keys(localStorage)) if (k.startsWith(PREFIX)) localStorage.removeItem(k)
  } catch {
    /* stockage indisponible */
  }
}
