import { Save } from 'lucide-react'
import { useMemo } from 'react'
import Bilingual from '@/components/content/Bilingual'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import type { Exam } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { examDeadline } from '@/lib/exam-timer'
import type { ExamSession } from '@/store/exam-session'
import ConfirmAction from './ConfirmAction'
import { flattenQuestions, PASS_NOTE, scoreExam } from './exam-logic'
import ExamReview from './ExamReview'
import { useExamLayout } from './use-exam-layout'

export const formatNote = (n: number) => String(Math.round(n * 100) / 100).replace('.', ',')

/** Correction : questions fermées notées automatiquement, ouvertes via les critères cochés ; note finale /20. */
export default function ExamCorrection({
  exam,
  session,
  onChange,
  onSave,
  onQuit,
}: {
  exam: Exam
  session: ExamSession
  onChange: (patch: Partial<ExamSession>) => void
  /** Enregistre la tentative (note /20) et clôt la copie. */
  onSave: (note: number) => void | Promise<void>
  onQuit: () => void
}) {
  const { layout, bothLayout } = useExamLayout()
  const score = useMemo(() => scoreExam(exam, session.answers, session.grading), [exam, session.answers, session.grading])
  const all = useMemo(() => flattenQuestions(exam), [exam])
  const byId = new Map(score.questions.map((s) => [s.id, s]))
  const timedOut =
    session.submittedAt !== undefined && session.submittedAt >= examDeadline(session.startedAt, exam.durationMinutes)

  function toggle(id: string, i: number) {
    const cur = session.grading[id] ?? []
    onChange({ grading: { ...session.grading, [id]: cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i] } })
  }

  return (
    <div className="flex flex-col gap-5">
      <Panel hi brackets className="flex flex-col gap-3">
        <h2 className="mono dim">{UI.exams.correctionTitle}</h2>
        <div aria-live="polite" aria-atomic="true" className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className="display text-5xl" style={{ color: score.note >= PASS_NOTE ? 'var(--ok)' : 'var(--bad)' }}>
            <span className="sr-only">{UI.exams.noteLabel(formatNote(score.note))}</span>
            <span aria-hidden="true">
              {formatNote(score.note)}
              <span className="dim text-2xl"> / 20</span>
            </span>
          </p>
          <span className="mono dim">
            {UI.exams.points20(formatNote(score.earned), formatNote(score.total))}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag tilt="left">{exam.correctionStatus === 'proposed' ? UI.exams.proposed : UI.exams.official}</Tag>
          {timedOut && <Tag>{UI.exams.expiredNote}</Tag>}
        </div>
      </Panel>

      {exam.sections.map((s, si) => (
        <section key={si} aria-labelledby={`corr-sec-${si}`} className="flex flex-col gap-4">
          <h3 id={`corr-sec-${si}`} className="display text-lg leading-tight">
            <Bilingual
              layout={layout === 'columns' ? 'stack' : layout}
              render={(lang, alt) => (alt ? <span className="text-ink-soft">{s.title[lang]}</span> : s.title[lang])}
            />
          </h3>
          <ol className="flex flex-col gap-4">
            {all
              .filter((f) => f.section === si)
              .map(({ q, n }) => (
                <li key={q.id}>
                  <ExamReview
                    q={q}
                    n={n}
                    total={all.length}
                    layout={layout}
                    bothLayout={bothLayout}
                    answer={session.answers[q.id]}
                    score={byId.get(q.id)!}
                    checked={session.grading[q.id] ?? []}
                    onToggle={(i) => toggle(q.id, i)}
                  />
                </li>
              ))}
          </ol>
        </section>
      ))}

      <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-4">
        <Button variant="primary" icon={Save} className="self-start" onClick={() => onSave(score.note)}>
          {UI.exams.save}
        </Button>
        <ConfirmAction
          variant="ghost"
          label={UI.exams.quitNoSave}
          message={UI.exams.quitAsk}
          confirmLabel={UI.exams.quitConfirm}
          onConfirm={onQuit}
        />
      </div>
    </div>
  )
}
