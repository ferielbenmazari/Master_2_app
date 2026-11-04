import { BookOpen, ChevronLeft, Check } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import Bilingual from '@/components/content/Bilingual'
import { ReaderContext } from '@/components/content/ReaderContext'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import StoryBlockView from '@/components/content/StoryBlockView'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import LangToggle from '@/components/ui/LangToggle'
import Panel from '@/components/ui/Panel'
import Squiggle from '@/components/ui/Squiggle'
import Tag from '@/components/ui/Tag'
import XpBar from '@/components/ui/XpBar'
import { getChapterIndex, getCourse, loadChapter } from '@/content/loader'
import type { Chapter, StoryBlock } from '@/content/schema'
import { UI } from '@/i18n/ui'
import { celebrate } from '@/lib/celebrate-read'
import { layoutFor, scrollRatio, splitEpisodes } from '@/lib/reader'
import { useMediaQuery } from '@/lib/use-media-query'
import { usePrefs } from '@/store/PrefsProvider'
import { getReading, setReading } from '@/store/progress'

/** Lecteur du cours narratif d'un chapitre (route `…/chapitre/:chapterId/lire`). */
export default function Reader() {
  const { courseId = '', chapterId = '' } = useParams()
  const course = getCourse(courseId)
  const known = getChapterIndex(courseId).some((c) => c.id === chapterId)
  const { prefs, setPrefs } = usePrefs()
  const wide = useMediaQuery('(min-width: 1024px)')
  const [state, setState] = useState<{ id: string; chapter: Chapter } | null>(null)
  const [ratio, setRatio] = useState(0)
  const [finished, setFinished] = useState(false)
  const maxRatio = useRef(0)
  const done = useRef(false)

  useEffect(() => {
    if (!known) return
    let live = true
    loadChapter(chapterId).then((chapter) => live && setState({ id: chapterId, chapter }))
    getReading(chapterId).then((r) => {
      if (!live) return
      setFinished(Boolean(r?.finishedAt))
      done.current = Boolean(r?.finishedAt)
    })
    return () => {
      live = false
    }
  }, [known, chapterId])

  // progression de lecture (barre collée en haut) ; mémorisée à la sortie si le chapitre n'est pas terminé
  useEffect(() => {
    maxRatio.current = 0
    const update = () => {
      const r = scrollRatio(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight,
      )
      maxRatio.current = Math.max(maxRatio.current, r)
      setRatio(r)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (!done.current && maxRatio.current > 0.02) {
        const seen = maxRatio.current
        void getReading(chapterId).then((prev) =>
          setReading(chapterId, Math.max(seen, prev?.progress ?? 0)),
        )
      }
    }
  }, [chapterId, state?.id])

  const chapter = state?.id === chapterId ? state.chapter : null
  const glossary = useMemo(
    () => new Map((chapter?.glossary ?? []).map((t) => [t.id, t])),
    [chapter],
  )
  const tableNos = useMemo(() => {
    const m = new Map<StoryBlock, number>()
    for (const b of chapter?.story ?? []) if (b.type === 'table') m.set(b, m.size + 1)
    return m
  }, [chapter])
  const { episodes, total } = useMemo(() => splitEpisodes(chapter?.story ?? []), [chapter])

  if (!course || !known) return <Navigate to={`/matiere/${courseId}`} replace />
  if (!chapter) {
    return (
      <p className="mono dim" role="status">
        {UI.reader.loading}
      </p>
    )
  }

  const layout = layoutFor(prefs.langMode, wide)
  const base = `/matiere/${courseId}/chapitre/${chapterId}`
  const code = course.code.replace(/^S\d+-/, '')

  async function finish() {
    done.current = true
    await setReading(chapterId, 1, true)
    setFinished(true)
    celebrate()
  }

  return (
    <ReaderContext.Provider value={{ courseId, chapterId, glossary }}>
      <article className="reader">
        <div className="reader-bar">
          <div className="mb-2 flex items-center justify-between gap-3">
            <Link to={base} className="mono dim inline-flex min-h-11 items-center gap-1.5">
              <Icon icon={ChevronLeft} size={14} />
              {UI.reader.back(code)}
              {String(chapter.order).padStart(2, '0')}
            </Link>
            <LangToggle value={prefs.langMode} onChange={(langMode) => setPrefs({ langMode })} />
          </div>
          <XpBar value={ratio * 100} label={UI.reader.progress} />
        </div>

        <div className="reader-flow">
          <header className="flex flex-col gap-2">
            <Tag tilt="left" icon={BookOpen} className="self-start">
              {UI.hub.chapter(chapter.order)} · {UI.course.minutes(chapter.estimatedMinutes)}
            </Tag>
            <Bilingual
              layout={layout}
              render={(lang, alt) =>
                alt ? (
                  <div>
                    <p className="display text-xl text-ink-soft">{chapter.title[lang]}</p>
                    <p className="text-ink-soft">{chapter.hook[lang]}</p>
                  </div>
                ) : (
                  <div>
                    <h1 className="display text-2xl">{chapter.title[lang]}</h1>
                    <Squiggle />
                    <p className="text-ink-soft">{chapter.hook[lang]}</p>
                  </div>
                )
              }
            />
          </header>

          {episodes.map((ep, i) => (
            <section
              key={i}
              aria-label={ep.heading ? ep.heading.text[layout === 'en' ? 'en' : 'fr'] : undefined}
              className="reader-flow"
            >
              {ep.heading && (
                <StoryBlockView
                  block={ep.heading}
                  layout={layout}
                  episode={{ n: ep.n, total }}
                  quizHref={`${base}/quiz`}
                />
              )}
              {ep.blocks.map((b, j) => (
                <StoryBlockView
                  key={j}
                  block={b}
                  layout={layout}
                  quizHref={`${base}/quiz`}
                  tableNo={tableNos.get(b) ?? 1}
                />
              ))}
            </section>
          ))}

          <section aria-labelledby="summary" className="mt-8">
            <Panel hi brackets className="flex flex-col gap-3">
              <h2 id="summary" className="display text-lg">
                {UI.reader.summaryTitle}
              </h2>
              <ul className="flex flex-col gap-3">
                {chapter.keyPoints.slice(0, 3).map((k, i) => (
                  <li key={i} className="flex gap-2">
                    <Icon icon={Check} size={16} className="mt-1.5 shrink-0 text-[var(--course)]" />
                    <Bilingual
                      layout={layout}
                      className="min-w-0 flex-1"
                      render={(lang, alt) => (
                        <div>
                          <RichText lang={lang} text={k.text[lang]} />
                          {!alt && <SourceChip src={k.src} />}
                        </div>
                      )}
                    />
                  </li>
                ))}
              </ul>
              {finished ? (
                <div className="flex flex-wrap items-center gap-3">
                  <Tag icon={Check}>{UI.reader.finished}</Tag>
                  <Link to={base} className="btn">
                    {UI.reader.backToChapter}
                  </Link>
                </div>
              ) : (
                <Button
                  variant="primary"
                  icon={Check}
                  onClick={() => void finish()}
                  className="self-start"
                >
                  {UI.reader.finish}
                </Button>
              )}
            </Panel>
          </section>
        </div>
      </article>
    </ReaderContext.Provider>
  )
}
