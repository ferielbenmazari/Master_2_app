import type { Term } from '@/content/schema'
import { UI } from '@/i18n/ui'
import RichText from './RichText'

/** Corps d'une définition : FR + EN, exemple, piège (la source est ouverte par l'appelant). */
export default function TermDetail({ term }: { term: Term }) {
  return (
    <>
      <div className="flex flex-wrap gap-1.5">
        <span className="tag">
          {UI.reader.termFr} · {term.fr}
        </span>
        <span className="tag" style={{ '--course': 'var(--cyan)' } as React.CSSProperties}>
          {UI.reader.termEn} · {term.en}
        </span>
      </div>
      <p className="text-sm leading-normal">
        <RichText noTerms text={term.definition.fr} />
      </p>
      <p className="text-[13px] leading-normal text-ink-soft" lang="en">
        <RichText noTerms lang="en" text={term.definition.en} />
      </p>
      {term.example && (
        <p className="text-[13px] leading-normal">
          <b>{UI.reader.termExample}.</b> <RichText noTerms text={term.example.fr} />
        </p>
      )}
      {term.pitfall && (
        <p className="text-[13px] leading-normal">
          <b>{UI.reader.termPitfall}.</b> <RichText noTerms text={term.pitfall.fr} />
        </p>
      )}
    </>
  )
}
