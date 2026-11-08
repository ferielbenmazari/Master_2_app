import { ChevronLeft } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { ReaderContext } from '@/components/content/ReaderContext'
import Icon from '@/components/ui/Icon'
import { getCourse, getExamIndex, loadExam } from '@/content/loader'
import type { Exam } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { examDeadline } from '@/lib/exam-timer'
import { clearExamSession, loadExamSession, saveExamSession, type ExamSession } from '@/store/exam-session'
import { recordAttempt } from '@/store/progress'
import { usePrefs } from '@/store/PrefsProvider'
import { pickLang } from '@/lib/bilingual'
import ExamCorrection, { formatNote } from './ExamCorrection'
import ExamIntro from './ExamIntro'
import ExamPlay from './ExamPlay'
import { PASS_NOTE } from './exam-logic'

/** Route `/matiere/:courseId/partiel/:examId` : consignes → passage chronométré → correction → note enregistrée. */
export default function ExamRunner() {
  const { courseId = '', examId = '' } = useParams()
  const course = getCourse(courseId)
  const known = getExamIndex(courseId).some((e) => e.slug === examId)
  const [loaded, setLoaded] = useState<Exam | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!known) return
    let live = true
    loadExam(courseId, examId).then(
      (e) => live && setLoaded(e),
      () => live && setFailed(true),
    )
    return () => {
      live = false
    }
  }, [known, courseId, examId])

  const list = `/matiere/${courseId}/partiels`
  if (!course || !known || failed) return <Navigate to={known ? list : `/matiere/${courseId}`} replace />
  const exam = loaded && loaded.courseId === courseId ? loaded : null
  if (!exam)
    return (
      <p className="mono dim" role="status">
        {UI.exams.loading}
      </p>
    )
  return <ExamFlow key={exam.id} exam={exam} list={list} code={course.code.replace(/^S\d+-/, '')} />
}

function ExamFlow({ exam, list, code }: { exam: Exam; list: string; code: string }) {
  const { prefs } = usePrefs()
  const [session, setSession] = useState<ExamSession | null>(() => loadExamSession(exam.id))
  const [notice, setNotice] = useState<string | null>(null)
  const glossary = useMemo(() => new Map(), [])
  const saving = useRef(false)

  // sauvegarde automatique de la copie à chaque modification
  useEffect(() => {
    if (session) saveExamSession(session)
  }, [session])

  const patch = (p: Partial<ExamSession>) => setSession((s) => (s ? { ...s, ...p } : s))

  function start() {
    setNotice(null)
    setSession({ examId: exam.id, startedAt: Date.now(), section: 0, answers: {}, grading: {} })
  }
  function submit(at: number) {
    // jamais après l'heure de fin ; sans effet si la copie est déjà rendue
    const end = (s: ExamSession) => Math.min(at, examDeadline(s.startedAt, exam.durationMinutes))
    setSession((s) => (s && s.submittedAt === undefined ? { ...s, submittedAt: end(s) } : s))
  }
  function quit() {
    clearExamSession(exam.id)
    setSession(null)
  }
  async function save(note: number) {
    if (saving.current) return
    saving.current = true
    try {
      // on attend l'écriture : l'historique relu aux consignes doit contenir cette tentative
      await recordAttempt({ itemId: exam.id, kind: 'exam', correct: note >= PASS_NOTE, score: note })
      clearExamSession(exam.id)
      setSession(null)
      setNotice(UI.exams.saved(formatNote(note)))
    } finally {
      saving.current = false
    }
  }

  const phase = !session ? 'intro' : session.submittedAt === undefined ? 'play' : 'correction'

  return (
    <ReaderContext.Provider value={{ courseId: exam.courseId, chapterId: '', glossary, quiz: new Map() }}>
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {phase === 'intro' && (
          <>
            <Link to={list} className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start">
              <Icon icon={ChevronLeft} size={14} />
              {UI.exams.back(code)}
            </Link>
            <h1 className="display text-2xl">{pickLang(exam.title, prefs.langMode).main}</h1>
            <ExamIntro exam={exam} notice={notice} onStart={start} />
          </>
        )}
        {phase === 'play' && session && (
          <ExamPlay exam={exam} session={session} onChange={patch} onSubmit={submit} onAbandon={quit} />
        )}
        {phase === 'correction' && session && (
          <ExamCorrection exam={exam} session={session} onChange={patch} onSave={save} onQuit={quit} />
        )}
      </div>
    </ReaderContext.Provider>
  )
}
