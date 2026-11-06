import { Link } from 'react-router'
import Panel from '@/components/ui/Panel'
import SegBar from '@/components/ui/SegBar'
import type { Course } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { pickLang } from '@/lib/bilingual'
import type { CourseStats } from '@/lib/stats'
import type { LangMode } from '@/store/prefs'

function Row({ label, value, children }: { label: string; value: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm text-ink-soft">{label}</span>
        <span className="display text-base">{value}</span>
      </div>
      {children}
    </div>
  )
}

/** Statistiques d'une matière : lecture, réussite au quiz, cartes maîtrisées, notions les plus ratées. */
export default function CourseStatsPanel({ course, stats, langMode }: { course: Course; stats: CourseStats; langMode: LangMode }) {
  const t = UI.stats
  const empty = stats.chaptersTotal === 0
  return (
    <Panel course={course.color} hi className="flex flex-col gap-4">
      <h3 className="display text-[13.5px] leading-tight">
        {pickLang(course.title, langMode).main}
        <span className="mono dim ml-2 text-[11px]">{course.code}</span>
      </h3>
      {empty ? (
        <p className="text-sm text-ink-soft">{t.preparing}</p>
      ) : (
        <>
          <Row label={t.chaptersRead} value={`${stats.readPercent} %`}>
            <SegBar done={stats.chaptersRead} total={stats.chaptersTotal} course={course.color} label={UI.home.chaptersRead(stats.chaptersRead, stats.chaptersTotal)} />
          </Row>
          <Row label={t.quizRate} value={stats.quizPercent === null ? '—' : `${stats.quizPercent} %`}>
            <span className="text-xs text-ink-dim">
              {stats.quizPercent === null ? t.quizNone : t.quizDetail(stats.quizCorrect, stats.quizAttempts)}
            </span>
          </Row>
          <Row label={t.cardsMastered} value={`${stats.cardsMastered} / ${stats.cardsTotal}`} />
          <div>
            <h4 className="mono dim mb-2">{t.weakTitle}</h4>
            {stats.weakSpots.length === 0 ? (
              <p className="text-sm text-ink-soft">{t.weakNone}</p>
            ) : (
              <ol className="flex flex-col gap-1">
                {stats.weakSpots.map((w) => (
                  <li key={w.id}>
                    <Link
                      to={`/matiere/${course.id}/chapitre/${w.chapterId}`}
                      className="flex min-h-11 items-center justify-between gap-3 border border-line px-3 text-sm hover:border-line-hi"
                    >
                      <span>{pickLang(w.label, langMode).main}</span>
                      <span className="mono dim shrink-0">{t.weakMissed(w.missed, w.total)}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </>
      )}
    </Panel>
  )
}
