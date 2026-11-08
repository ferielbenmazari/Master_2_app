import { Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import Bilingual from '@/components/content/Bilingual'
import RichText from '@/components/content/RichText'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import type { Exam } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { pickLang } from '@/lib/bilingual'
import { usePrefs } from '@/store/PrefsProvider'
import type { Attempt } from '@/store/db'
import { getAttempts } from '@/store/progress'
import { bestAttempt, flattenQuestions, totalPoints } from './exam-logic'
import { formatNote } from './ExamCorrection'
import { useExamLayout } from './use-exam-layout'

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })

/** Écran d'instructions + historique des tentatives. Le minuteur ne démarre qu'au clic. */
export default function ExamIntro({
  exam,
  notice,
  onStart,
}: {
  exam: Exam
  /** Message après enregistrement d'une note. */
  notice: string | null
  onStart: () => void
}) {
  const { prefs } = usePrefs()
  const { layout } = useExamLayout()
  const [attempts, setAttempts] = useState<Attempt[] | null>(null)

  useEffect(() => {
    let live = true
    void getAttempts({ itemId: exam.id, kind: 'exam' }).then((a) => live && setAttempts(a))
    return () => {
      live = false
    }
  }, [exam.id, notice])

  const best = attempts ? bestAttempt(attempts) : undefined
  const total = flattenQuestions(exam).length

  return (
    <div className="flex flex-col gap-4">
      {notice && (
        <p role="status" className="panel hi p-3 text-sm font-bold">
          {notice}
        </p>
      )}
      <Panel hi brackets className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Tag tilt="left">{UI.exams.kinds[exam.kind]}</Tag>
          {exam.year !== undefined && <Tag>{exam.year}</Tag>}
          <Tag>{UI.exams.duration(exam.durationMinutes)}</Tag>
          <Tag>{UI.exams.questions(total)}</Tag>
          <Tag>{UI.exams.points(totalPoints(exam))}</Tag>
        </div>
        <h2 className="display text-xl leading-tight">{pickLang(exam.title, prefs.langMode).main}</h2>
        <section aria-labelledby="exam-rules" className="flex flex-col gap-2">
          <h3 id="exam-rules" className="mono dim">
            {UI.exams.introHeading}
          </h3>
          <Bilingual
            layout={layout}
            render={(lang, alt) => (
              <div className={alt ? 'text-ink-soft' : undefined}>
                <RichText block noTerms lang={lang} text={exam.instructions[lang]} />
              </div>
            )}
          />
          <p className="text-sm text-ink-soft">{UI.exams.rules(exam.durationMinutes)}</p>
        </section>
        <section aria-labelledby="exam-sections" className="flex flex-col gap-2">
          <h3 id="exam-sections" className="mono dim">
            {UI.exams.sectionsHeading}
          </h3>
          <ul className="flex flex-col gap-1 text-sm">
            {exam.sections.map((s, i) => (
              <li key={i}>
                {UI.exams.sectionLine(pickLang(s.title, prefs.langMode).main, s.points, s.questions.length)}
              </li>
            ))}
          </ul>
        </section>
        <Button variant="primary" icon={Play} className="self-start" onClick={onStart}>
          {UI.exams.start}
        </Button>
      </Panel>

      <section aria-labelledby="exam-history" className="flex flex-col gap-2">
        <h3 id="exam-history" className="display text-lg">
          {UI.exams.historyTitle}
        </h3>
        {attempts === null ? null : attempts.length === 0 ? (
          <p className="text-sm text-ink-soft">{UI.exams.historyEmpty}</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {[...attempts].reverse().map((a) => (
              <li key={a.id ?? a.at} className="ex-row">
                <span className="mono">{UI.exams.historyRow(fmtDate(a.at), formatNote(a.score ?? 0))}</span>
                {best && best.id === a.id && best.at === a.at && <Tag tilt="right">{UI.exams.best(formatNote(a.score ?? 0))}</Tag>}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
