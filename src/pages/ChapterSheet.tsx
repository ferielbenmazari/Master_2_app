import { ChevronLeft, Printer } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { ReaderContext } from '@/components/content/ReaderContext'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Icon from '@/components/ui/Icon'
import LangToggle from '@/components/ui/LangToggle'
import { getChapterIndex, getCourse, getSourceTitle, loadChapter } from '@/content/loader'
import type { Chapter, SourceRef } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { pickLang } from '@/lib/bilingual'
import { usePrefs } from '@/store/PrefsProvider'

/** Numéros de notes (impression) : une note par passage (fichier + localisation), dans l'ordre d'apparition. */
function useNotes(chapter: Chapter | null) {
  return useMemo(() => {
    const notes: SourceRef[] = []
    const refs = (src: SourceRef[]) =>
      src.map((s) => {
        let i = notes.findIndex((n) => n.file === s.file && n.loc === s.loc)
        if (i < 0) i = notes.push(s) - 1
        return i + 1
      })
    const points = (chapter?.keyPoints ?? []).map((k) => refs(k.src))
    const terms = (chapter?.glossary ?? []).map((t) => refs(t.src))
    return { notes, points, terms }
  }, [chapter])
}

function Marks({ nums }: { nums: number[] }) {
  if (nums.length === 0) return null
  return <sup className="print-only">[{nums.join(', ')}]</sup>
}

/** Fiche synthèse d'un chapitre (route `…/chapitre/:chapterId/fiche`) : relisible en 3 min, imprimable. */
export default function ChapterSheet() {
  const { courseId = '', chapterId = '' } = useParams()
  const course = getCourse(courseId)
  const known = getChapterIndex(courseId).some((c) => c.id === chapterId)
  const { prefs, setPrefs } = usePrefs()
  const [state, setState] = useState<{ id: string; chapter: Chapter } | null>(null)

  useEffect(() => {
    if (!known) return
    let live = true
    loadChapter(chapterId).then((chapter) => live && setState({ id: chapterId, chapter }))
    return () => {
      live = false
    }
  }, [known, chapterId])

  const chapter = state?.id === chapterId ? state.chapter : null
  const glossary = useMemo(() => new Map((chapter?.glossary ?? []).map((t) => [t.id, t])), [chapter])
  const { notes, points, terms } = useNotes(chapter)

  if (!course || !known) return <Navigate to={`/matiere/${courseId}`} replace />
  if (!chapter) {
    return (
      <p className="mono dim" role="status">
        {UI.course.loading}
      </p>
    )
  }

  const mode = prefs.langMode
  const title = pickLang(chapter.title, mode)
  const base = `/matiere/${courseId}/chapitre/${chapterId}`
  const rich = (l: { fr: string; en: string }) => {
    const { main, alt } = pickLang(l, mode)
    return (
      <>
        <RichText noTerms lang={mode === 'en' ? 'en' : 'fr'} text={main} />
        {alt && (
          <span className="alt-lang block text-[13px] text-ink-soft" lang="en">
            <RichText noTerms lang="en" text={alt} />
          </span>
        )}
      </>
    )
  }

  return (
    <ReaderContext.Provider value={{ courseId, chapterId, glossary, quiz: new Map() }}>
      <article className="sheet-page flex flex-col gap-5">
        <div className="no-print flex items-center justify-between gap-3">
          <Link to={base} className="mono dim inline-flex min-h-11 items-center gap-1.5">
            <Icon icon={ChevronLeft} size={14} />
            {UI.sheet.backToChapter}
          </Link>
          <div className="flex items-center gap-2">
            <LangToggle value={mode} onChange={(langMode) => setPrefs({ langMode })} />
            <button type="button" className="btn" onClick={() => window.print()}>
              <Icon icon={Printer} size={16} />
              {UI.sheet.print}
            </button>
          </div>
        </div>

        <header>
          <p className="mono hl w-fit">
            {UI.sheet.title} · {UI.hub.chapter(chapter.order)}
          </p>
          <h1 className="display text-2xl">{title.main}</h1>
          {title.alt && <p className="text-sm text-ink-soft">{title.alt}</p>}
        </header>

        <section aria-labelledby="sheet-points" className="flex flex-col gap-3">
          <h2 id="sheet-points" className="display text-lg">
            {UI.sheet.keyPoints}
          </h2>
          <ol className="flex flex-col gap-3">
            {chapter.keyPoints.map((k, i) => (
              <li key={i} className="sheet-point flex gap-3">
                <span className="display hl shrink-0 self-start" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  {rich(k.text)}
                  <Marks nums={points[i] ?? []} />
                  <span className="no-print block">
                    <SourceChip src={k.src} />
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="sheet-terms" className="flex flex-col gap-3">
          <h2 id="sheet-terms" className="display text-lg">
            {UI.sheet.terms}
          </h2>
          <div className="sheet-table-wrap">
            <table className="sheet-table">
              <thead>
                <tr>
                  <th scope="col">{UI.sheet.colFr}</th>
                  <th scope="col">{UI.sheet.colEn}</th>
                  <th scope="col">{UI.sheet.colDef}</th>
                  <th scope="col" className="no-print">
                    {UI.sheet.colSrc}
                  </th>
                </tr>
              </thead>
              <tbody>
                {chapter.glossary.map((t, i) => (
                  <tr key={t.id}>
                    <th scope="row">{t.fr}</th>
                    <td lang="en">{t.en}</td>
                    <td>
                      {rich(t.definition)}
                      <Marks nums={terms[i] ?? []} />
                    </td>
                    <td className="no-print">
                      <SourceChip src={t.src} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="sheet-notes" className="print-only sheet-notes">
          <h2 id="sheet-notes">{UI.sheet.notes}</h2>
          <ol>
            {notes.map((s, i) => (
              <li key={i} value={i + 1}>
                {getSourceTitle(courseId, s.file)}, {s.loc}
              </li>
            ))}
          </ol>
        </section>
      </article>
    </ReaderContext.Provider>
  )
}
