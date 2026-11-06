import { Check, Lightbulb } from 'lucide-react'
import RichText from '@/components/content/RichText'
import SourceChip from '@/components/content/SourceChip'
import Button from '@/components/ui/Button'
import Panel from '@/components/ui/Panel'
import Tag from '@/components/ui/Tag'
import type { KeyPoint } from '@/content/schema'
import { UI } from '@/i18n/ui'

interface Props {
  point: KeyPoint
  onDone: () => void
}

/** Un point clé du chapitre à lire (FR + EN, sourcé), puis « Compris ». */
export default function KeyPointStep({ point, onDone }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Panel hi brackets drop className="flex flex-col gap-3">
        <Tag icon={Lightbulb}>{UI.express.kinds.keypoint}</Tag>
        <p className="text-lg leading-relaxed" lang="fr">
          <b>FR</b> — <RichText lang="fr" text={point.text.fr} />
        </p>
        <p className="leading-relaxed text-ink-soft" lang="en">
          <b>EN</b> — <RichText lang="en" text={point.text.en} />
        </p>
        <div className="flex">
          <SourceChip src={point.src} />
        </div>
      </Panel>
      <Button variant="primary" block icon={Check} onClick={onDone} autoFocus>
        {UI.express.keypointDone}
      </Button>
    </div>
  )
}
