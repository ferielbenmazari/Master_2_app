import { lazy, Suspense, useMemo } from 'react'
import RichText from '@/components/content/RichText'
import Panel from '@/components/ui/Panel'
import { UI } from '@/i18n/ui'
import { splitMaterial } from './exam-logic'

const MermaidDiagram = lazy(() => import('@/components/content/MermaidDiagram'))

/** Document joint à une question : markdown, blocs ```mermaid (schéma), ASCII en bloc de code (police mono). */
export default function ExamMaterial({ material, lang }: { material: string; lang: 'fr' | 'en' }) {
  const parts = useMemo(() => splitMaterial(material), [material])
  return (
    <Panel className="flex flex-col gap-2" role="group" aria-label={UI.exams.document}>
      <span className="mono dim" aria-hidden="true">
        {UI.exams.document}
      </span>
      {parts.map((p, i) =>
        p.kind === 'mermaid' ? (
          <Suspense key={i} fallback={null}>
            <MermaidDiagram code={p.code} />
          </Suspense>
        ) : (
          <RichText key={i} block noTerms lang={lang} text={p.text} />
        ),
      )}
    </Panel>
  )
}
