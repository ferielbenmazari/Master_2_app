import { ChevronLeft, ChevronRight, Flag } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Bilingual from '@/components/content/Bilingual'
import RichText from '@/components/content/RichText'
import Button from '@/components/ui/Button'
import TimerRing from '@/components/ui/TimerRing'
import type { Exam } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { pickLang } from '@/lib/bilingual'
import { announceBucket, examDeadline, examTimer, formatClock } from '@/lib/exam-timer'
import { useNow } from '@/lib/use-now'
import type { ExamAnswer, ExamSession } from '@/store/exam-session'
import { usePrefs } from '@/store/PrefsProvider'
import ConfirmAction from './ConfirmAction'
import { answeredCount, flattenQuestions, isBlank } from './exam-logic'
import ExamQuestionField from './ExamQuestionField'
import { useExamLayout } from './use-exam-layout'

/** Passage du partiel : minuteur (HUD), navigation par sections, réponses sauvegardées au fil de l'eau. */
export default function ExamPlay({
  exam,
  session,
  onChange,
  onSubmit,
  onAbandon,
}: {
  exam: Exam
  session: ExamSession
  onChange: (patch: Partial<ExamSession>) => void
  /** `at` = heure de remise (ms). */
  onSubmit: (at: number) => void
  onAbandon: () => void
}) {
  const { prefs } = usePrefs()
  const { layout, inputLang } = useExamLayout()
  const now = useNow(1000)
  const timer = examTimer(session.startedAt, exam.durationMinutes, now)
  const sectionCount = exam.sections.length
  const index = Math.min(session.section, sectionCount - 1)
  const section = exam.sections[index]!
  const all = flattenQuestions(exam)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)

  // temps écoulé (y compris pendant que l'onglet était fermé) : copie rendue à l'heure de fin
  const submitRef = useRef(onSubmit)
  useEffect(() => {
    submitRef.current = onSubmit
  })
  useEffect(() => {
    if (timer.expired) submitRef.current(examDeadline(session.startedAt, exam.durationMinutes))
  }, [timer.expired, session.startedAt, exam.durationMinutes])

  // changement de section : focus sur son titre (pas au premier affichage)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    headingRef.current?.focus()
    headingRef.current?.scrollIntoView?.({ block: 'start' })
  }, [index])

  function setAnswer(id: string, a: ExamAnswer) {
    onChange({ answers: { ...session.answers, [id]: a } })
  }

  const blank = all.filter(({ q }) => isBlank(q, session.answers[q.id])).length
  const minutes = Math.floor(timer.remainingSec / 60)
  const bucket = announceBucket(timer.remainingSec)
  const title = pickLang(exam.title, prefs.langMode).main

  return (
    <div className="flex flex-col gap-4">
      <div className="exam-hud" data-tone={timer.tone}>
        <TimerRing
          seconds={timer.remainingSec}
          total={timer.totalSec}
          label={String(Math.ceil(timer.remainingSec / 60))}
          tone={timer.tone}
          ariaLabel={`${UI.exams.timerLabel} : ${UI.exams.timerValue(minutes, timer.remainingSec % 60)}`}
        />
        <div className="min-w-0 flex-1">
          <div className="mono dim truncate">{title}</div>
          <span className="exam-clock" aria-hidden="true">
            {UI.exams.clock(formatClock(timer.remainingSec))}
          </span>
        </div>
        <span className="mono dim">{UI.exams.sectionOf(index + 1, sectionCount)}</span>
      </div>
      {/* annonce rare (paliers 5 min, 10, 2, 1, 0) : le lecteur d'écran n'entend pas chaque seconde */}
      <div role="status" aria-live="polite" className="sr-only">
        {UI.exams.announce(bucket)}
      </div>

      <nav aria-label={UI.exams.sectionNav}>
        <ol className="exam-nav">
          {exam.sections.map((s, i) => {
            const count = answeredCount(exam, i, session.answers)
            const t = pickLang(s.title, prefs.langMode).main
            return (
              <li key={i} className="flex">
                <button
                  type="button"
                  aria-current={i === index ? 'step' : undefined}
                  aria-label={`${t}, ${UI.exams.answeredLabel(count, s.questions.length)}`}
                  onClick={() => onChange({ section: i })}
                >
                  <span className="text-sm font-bold">{t}</span>
                  <span className="mono dim" aria-hidden="true">
                    {UI.exams.answered(count, s.questions.length)}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </nav>

      <section aria-labelledby="exam-section-title" className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <h2 id="exam-section-title" ref={headingRef} tabIndex={-1} className="display text-xl leading-tight outline-none">
            <Bilingual
              layout={layout === 'columns' ? 'stack' : layout}
              render={(lang, alt) => (alt ? <span className="text-ink-soft">{section.title[lang]}</span> : section.title[lang])}
            />
          </h2>
          <Bilingual
            layout={layout}
            render={(lang, alt) => (
              <div className={alt ? 'text-ink-soft' : undefined}>
                <RichText block noTerms lang={lang} text={section.instructions[lang]} />
              </div>
            )}
          />
        </header>
        <ol className="flex flex-col gap-4">
          {all
            .filter((f) => f.section === index)
            .map(({ q, n }) => (
              <li key={q.id}>
                <ExamQuestionField
                  q={q}
                  n={n}
                  total={all.length}
                  layout={layout}
                  inputLang={inputLang}
                  answer={session.answers[q.id]}
                  onChange={(a) => setAnswer(q.id, a)}
                />
              </li>
            ))}
        </ol>
      </section>

      <div className="flex flex-wrap items-center gap-3">
        {index > 0 && (
          <Button icon={ChevronLeft} onClick={() => onChange({ section: index - 1 })}>
            {UI.exams.prevSection}
          </Button>
        )}
        {index < sectionCount - 1 && (
          <Button variant="primary" icon={ChevronRight} onClick={() => onChange({ section: index + 1 })}>
            {UI.exams.nextSection}
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-4">
        <ConfirmAction
          variant={index === sectionCount - 1 ? 'primary' : 'secondary'}
          icon={Flag}
          label={UI.exams.submit}
          message={UI.exams.submitAsk(blank)}
          confirmLabel={UI.exams.confirm}
          onConfirm={() => onSubmit(Date.now())}
        />
        <ConfirmAction
          variant="ghost"
          label={UI.exams.abandon}
          message={UI.exams.abandonAsk}
          confirmLabel={UI.exams.abandonConfirm}
          onConfirm={onAbandon}
        />
      </div>
    </div>
  )
}
