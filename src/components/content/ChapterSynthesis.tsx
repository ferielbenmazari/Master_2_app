import { ArrowRightLeft, Brain, Check, Link2, Wrench, type LucideIcon } from 'lucide-react'
import Icon from '@/components/ui/Icon'
import type { L, Synthesis } from '@/content/schema'
import { UI } from '@/i18n/ui'
import type { Layout } from '@/lib/reader'
import Bilingual from './Bilingual'
import RichText from './RichText'

interface Props {
  synthesis: Synthesis
  layout: Layout
}

function Group({
  title,
  icon,
  items,
  layout,
}: {
  title: string
  icon: LucideIcon
  items: L[]
  layout: Layout
}) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="mono dim flex items-center gap-1.5">
        <Icon icon={icon} size={14} />
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2">
            <Icon icon={Check} size={16} className="mt-1.5 shrink-0 text-[var(--course)]" />
            <Bilingual
              layout={layout}
              className="min-w-0 flex-1"
              render={(lang) => <RichText lang={lang} text={t[lang]} />}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Synthèse structurée de fin de chapitre : restituer, savoir faire, distinctions, liens. */
export default function ChapterSynthesis({ synthesis, layout }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Group title={UI.reader.mustKnow} icon={Brain} items={synthesis.mustKnow} layout={layout} />
      <Group title={UI.reader.mustDo} icon={Wrench} items={synthesis.mustDo} layout={layout} />
      {synthesis.distinctions && synthesis.distinctions.length > 0 && (
        <Group
          title={UI.reader.distinctions}
          icon={ArrowRightLeft}
          items={synthesis.distinctions}
          layout={layout}
        />
      )}
      {synthesis.links && synthesis.links.length > 0 && (
        <Group title={UI.reader.links} icon={Link2} items={synthesis.links} layout={layout} />
      )}
    </div>
  )
}
