import { useEffect, useRef } from 'react'
import { RefreshCw } from 'lucide-react'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Icon from '@/components/ui/Icon'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import { UI } from '@/i18n/ui'
import { cn } from '@/lib/cn'
import type { Flashcard } from '@/content/schema'

interface Props {
  card: Flashcard
  /** Langue du recto (`trainLang`) ; le verso montre toujours FR + EN. */
  lang: 'fr' | 'en'
  flipped: boolean
  onFlip: () => void
}

/** Carte à deux faces. La face cachée est `inert` + `aria-hidden` (invisible aussi pour les lecteurs d'écran). */
export default function FlashcardCard({ card, lang, flipped, onFlip }: Props) {
  const hit = useRef<HTMLButtonElement>(null)
  const back = useRef<HTMLDivElement>(null)

  // Focus : sur la carte à chaque nouvelle question (Espace/Entrée retourne), sur le verso une fois retournée.
  useEffect(() => {
    if (flipped) back.current?.focus({ preventScroll: true })
    else hit.current?.focus({ preventScroll: true })
  }, [flipped, card.id])

  return (
    <div className={cn('flip', flipped && 'on')}>
      <div className="in">
        <Panel live brackets drop className="face front" inert={flipped} aria-hidden={flipped || undefined}>
          <Tag>{lang === 'fr' ? UI.flashcards.questionFr : UI.flashcards.questionEn}</Tag>
          <p className="q" lang={lang}>
            <RichText lang={lang} text={card.front[lang]} noTerms />
          </p>
          <span className="mono dim flex items-center gap-1.5" aria-hidden="true">
            <Icon icon={RefreshCw} size={14} />
            {UI.flashcards.flipHint}
          </span>
          <button ref={hit} type="button" className="face-hit" aria-label={UI.flashcards.flip} onClick={onFlip} />
        </Panel>
        <Panel hi className="face back" inert={!flipped} aria-hidden={!flipped || undefined}>
          <div ref={back} tabIndex={-1} className="flex flex-1 flex-col justify-between gap-4 outline-none">
            <Tag course="lime">{UI.flashcards.answer}</Tag>
            <div>
              <p className="text-base leading-relaxed" lang="fr">
                <b>FR</b> — <RichText lang="fr" text={card.back.fr} />
              </p>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft" lang="en">
                <b>EN</b> — <RichText lang="en" text={card.back.en} />
              </p>
              {card.src && <SourceChip src={card.src} />}
            </div>
            <span className="mono dim">{UI.flashcards.rateHint}</span>
          </div>
        </Panel>
      </div>
    </div>
  )
}
