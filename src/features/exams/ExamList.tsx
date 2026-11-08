import { ChevronLeft, ClipboardList } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import EmptyState from '@/components/ui/EmptyState'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { getCourse, getExamIndex, loadExam } from '@/content/loader'
import type { Exam } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { pickLang } from '@/lib/bilingual'
import { loadExamSession } from '@/store/exam-session'
import { usePrefs } from '@/store/PrefsProvider'
import { getAttempts } from '@/store/progress'
import { bestScores, flattenQuestions } from './exam-logic'
import { formatNote } from './ExamCorrection'

interface Row {
  slug: string
  exam: Exam
}

/** Annales d'abord (récentes en tête), puis partiels blancs dans l'ordre des fichiers. */
function sortRows(rows: Row[]): Row[] {
  return [...rows].sort(
    (a, b) =>
      Number(b.exam.kind === 'past') - Number(a.exam.kind === 'past') ||
      (b.exam.year ?? 0) - (a.exam.year ?? 0) ||
      a.slug.localeCompare(b.slug),
  )
}

/** Onglet « Partiels » : annales et partiels blancs, durée, meilleur score. */
export default function ExamList() {
  const { courseId = '' } = useParams()
  const course = getCourse(courseId)
  const { prefs } = usePrefs()
  const [rows, setRows] = useState<Row[] | null>(null)
  const [best, setBest] = useState<ReadonlyMap<string, number>>(new Map())

  useEffect(() => {
    let live = true
    const refs = getExamIndex(courseId)
    void Promise.all(refs.map(async (r) => ({ slug: r.slug, exam: await loadExam(courseId, r.slug) }))).then(
      (r) => live && setRows(sortRows(r)),
      () => live && setRows([]),
    )
    void getAttempts({ kind: 'exam' }).then((a) => live && setBest(bestScores(a)))
    return () => {
      live = false
    }
  }, [courseId])

  if (!course) return <Navigate to="/" replace />
  const code = course.code.replace(/^S\d+-/, '')

  return (
    <section aria-labelledby="exams-title" className="flex flex-col gap-4">
      <Link to={`/matiere/${courseId}`} className="mono dim inline-flex min-h-11 items-center gap-1.5 self-start">
        <Icon icon={ChevronLeft} size={14} />
        {code}
      </Link>
      <h1 id="exams-title" className="display text-2xl">
        {UI.exams.title}
      </h1>
      {rows === null ? (
        <p className="mono dim" role="status">
          {UI.exams.loading}
        </p>
      ) : rows.length === 0 ? (
        <EmptyState icon={ClipboardList} title={UI.exams.title} text={UI.exams.empty} />
      ) : (
        <ul aria-label={UI.exams.list} className="stagger flex flex-col gap-3">
          {rows.map(({ slug, exam }, i) => {
            const title = pickLang(exam.title, prefs.langMode)
            const score = best.get(exam.id)
            const running = loadExamSession(exam.id) !== null
            return (
              <li key={slug} style={{ '--i': i } as CSSProperties}>
                <Link to={`/matiere/${courseId}/partiel/${slug}`} className="block">
                  <Panel hi drop className="flex min-h-[72px] flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag tilt="left">{UI.exams.kinds[exam.kind]}</Tag>
                      {exam.year !== undefined && <Tag>{exam.year}</Tag>}
                      <span className="mono dim">{UI.exams.duration(exam.durationMinutes)}</span>
                      <span className="mono dim">{UI.exams.questions(flattenQuestions(exam).length)}</span>
                      {running && <Tag>{UI.exams.inProgress}</Tag>}
                    </div>
                    <h2 className="display text-[15px] leading-tight">{title.main}</h2>
                    {title.alt && <p className="text-sm text-ink-soft">{title.alt}</p>}
                    <p className="mono dim">{score === undefined ? UI.exams.noAttempt : UI.exams.best(formatNote(score))}</p>
                  </Panel>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
