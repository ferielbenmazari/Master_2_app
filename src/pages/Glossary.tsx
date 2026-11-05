import { ChevronLeft, Quote, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { ReaderContext } from '@/components/content/ReaderContext'
import { SourcesSheet } from '@/components/content/SourceChip'
import TermDetail from '@/components/content/TermDetail'
import Icon from '@/components/ui/Icon'
import LangToggle from '@/components/ui/LangToggle'
import Sheet from '@/components/ui/Sheet'
import { getCourse } from '@/content/loader'
import { useChapters } from '@/content/use-chapters'
import { UI } from '@/i18n/ui'
import { buildGlossary, filterGlossary, groupByLetter, type GlossaryEntry } from '@/lib/glossary'
import { usePrefs } from '@/store/PrefsProvider'

/** Glossaire d'une matière (route `/matiere/:courseId/glossaire`) : recherche instantanée FR/EN. */
export default function Glossary() {
  const { courseId = '' } = useParams()
  const course = getCourse(courseId)
  const chapters = useChapters(courseId)
  const { prefs, setPrefs } = usePrefs()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState<GlossaryEntry | null>(null)
  const [showSrc, setShowSrc] = useState(false)

  const all = useMemo(() => buildGlossary(chapters ?? []), [chapters])
  const lang = prefs.langMode === 'en' ? 'en' : 'fr'
  const groups = useMemo(() => groupByLetter(filterGlossary(all, query), lang), [all, query, lang])
  const total = groups.reduce((n, g) => n + g.entries.length, 0)

  if (!course) return <Navigate to="/" replace />
  const other = lang === 'fr' ? 'en' : 'fr'

  return (
    <ReaderContext.Provider value={{ courseId, chapterId: '', glossary: new Map(), quiz: new Map() }}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Link to={`/matiere/${courseId}`} className="mono dim inline-flex min-h-11 items-center gap-1.5">
            <Icon icon={ChevronLeft} size={14} />
            {course.code.replace(/^S\d+-/, '')}
          </Link>
          <LangToggle value={prefs.langMode} onChange={(langMode) => setPrefs({ langMode })} />
        </div>
        <h1 className="display text-2xl">{UI.glossary.title}</h1>
        <label className="gloss-search">
          <Icon icon={Search} size={16} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={UI.glossary.search}
            aria-label={UI.glossary.search}
            autoComplete="off"
          />
        </label>
        {chapters === null ? (
          <p className="mono dim" role="status">
            {UI.course.loading}
          </p>
        ) : (
          <>
            <p className="mono dim" role="status">
              {UI.glossary.count(total)}
            </p>
            {total === 0 && <p className="text-ink-soft">{UI.glossary.none}</p>}
            {groups.map((g) => (
              <section key={g.letter} aria-label={g.letter}>
                <h2 className="gloss-letter display" aria-hidden="true">
                  {g.letter}
                </h2>
                <ul>
                  {g.entries.map((e) => (
                    <li key={e.term.id}>
                      <button type="button" className="gloss-item" onClick={() => setOpen(e)}>
                        <b>{e.term[lang]}</b>
                        <span className="text-ink-soft" lang={other}>
                          {e.term[other]}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </>
        )}
      </div>

      <Sheet open={open !== null && !showSrc} onClose={() => setOpen(null)} title={open?.term[lang] ?? ''}>
        {open && (
          <div className="flex flex-col gap-2">
            <TermDetail term={open.term} />
            <div className="flex flex-wrap justify-between gap-2">
              <button type="button" className="tag min-h-11 cursor-pointer" onClick={() => setShowSrc(true)}>
                <Icon icon={Quote} size={12} />
                {UI.reader.source}
              </button>
              <Link
                to={`/matiere/${courseId}/chapitre/${open.chapterId}/lire`}
                className="tag min-h-11 cursor-pointer"
              >
                {UI.glossary.openChapter} {String(open.chapterOrder).padStart(2, '0')}
              </Link>
            </div>
          </div>
        )}
      </Sheet>
      {open && (
        <SourcesSheet src={open.term.src} open={showSrc} onClose={() => setShowSrc(false)} />
      )}
    </ReaderContext.Provider>
  )
}
