import { clearExamSession, loadExamSession, removeExamSessions, saveExamSession, type ExamSession } from './exam-session'

const s: ExamSession = {
  examId: 'rec1-exam-x',
  startedAt: 1_700_000_000_000,
  section: 1,
  answers: { q1: { bool: false, text: 'parce que' }, q2: { picks: [0, 2] } },
  grading: { q3: [0, 1] },
}

beforeEach(() => localStorage.clear())

describe('exam-session', () => {
  it('aller-retour fidèle', () => {
    saveExamSession(s)
    expect(loadExamSession(s.examId)).toEqual(s)
    saveExamSession({ ...s, submittedAt: s.startedAt + 5000 })
    expect(loadExamSession(s.examId)?.submittedAt).toBe(s.startedAt + 5000)
  })
  it('aucune copie → null', () => {
    expect(loadExamSession('absent')).toBeNull()
  })
  it('contenu corrompu → null, sans exception', () => {
    localStorage.setItem('m2rev:exam:a', '{pas du json')
    localStorage.setItem('m2rev:exam:b', JSON.stringify({ examId: 'b', startedAt: 'hier' }))
    localStorage.setItem('m2rev:exam:c', JSON.stringify({ examId: 'autre', startedAt: 1 }))
    expect(loadExamSession('a')).toBeNull()
    expect(loadExamSession('b')).toBeNull()
    expect(loadExamSession('c')).toBeNull()
  })
  it('ignore les champs mal formés mais garde le minuteur', () => {
    localStorage.setItem(
      'm2rev:exam:d',
      JSON.stringify({ examId: 'd', startedAt: 42, section: -3, answers: { q: { bool: 'oui', picks: [-1] }, r: 7 }, grading: { o: ['x'] } }),
    )
    expect(loadExamSession('d')).toEqual({ examId: 'd', startedAt: 42, section: 0, answers: { q: {} }, grading: {} })
  })
  it('clear et removeAll', () => {
    saveExamSession(s)
    saveExamSession({ ...s, examId: 'autre' })
    clearExamSession(s.examId)
    expect(loadExamSession(s.examId)).toBeNull()
    expect(loadExamSession('autre')).not.toBeNull()
    removeExamSessions()
    expect(loadExamSession('autre')).toBeNull()
  })
})
