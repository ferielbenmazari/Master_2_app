import { UI } from '@/i18n/ui'
import type { CalendarCell } from '@/lib/streak'

/** Calendrier type « contributions » (semaines en colonnes, lundi en haut). Décoratif pour les lecteurs d'écran : un résumé suffit. */
export default function ActivityCalendar({ weeks }: { weeks: CalendarCell[][] }) {
  const cells = weeks.flat()
  const active = cells.filter((c) => c.count > 0).length
  return (
    <div className="flex flex-col gap-2">
      <div className="heat" role="img" aria-label={UI.stats.calendarLabel(active)} data-testid="heatmap">
        {cells.map((c) => (
          <i
            key={c.date}
            title={c.future ? undefined : UI.stats.calendarDay(c.date, c.count)}
            data-level={c.level}
            data-future={c.future ? '' : undefined}
          />
        ))}
      </div>
      <div className="mono dim flex items-center gap-1.5 text-[10px]" aria-hidden="true">
        {UI.stats.calendarLess}
        <span className="heat !flex !gap-1">
          {[0, 1, 2, 3, 4].map((l) => (
            <i key={l} data-level={l} className="!h-3 !w-3 !min-h-0" />
          ))}
        </span>
        {UI.stats.calendarMore}
      </div>
    </div>
  )
}
