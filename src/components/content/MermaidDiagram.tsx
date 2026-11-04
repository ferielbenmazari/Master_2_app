import { useEffect, useState } from 'react'
import { UI } from '@/i18n/ui'
import { usePrefs } from '@/store/PrefsProvider'

/** Schéma Mermaid (chargé à la demande). Le SVG est rendu en `strict` puis assaini (voir mermaid-render.ts). */
export default function MermaidDiagram({ code }: { code: string }) {
  const { resolvedTheme } = usePrefs()
  const [state, setState] = useState<{ key: string; svg: string | null; error: boolean } | null>(
    null,
  )
  const key = `${resolvedTheme}|${code}`

  useEffect(() => {
    let live = true
    import('./mermaid-render')
      .then((m) => m.renderMermaid(code, resolvedTheme))
      .then((svg) => live && setState({ key, svg, error: false }))
      .catch(() => live && setState({ key, svg: null, error: true }))
    return () => {
      live = false
    }
  }, [code, resolvedTheme, key])

  const cur = state?.key === key ? state : null
  if (cur?.error) return <p className="mono dim">{UI.reader.diagramError}</p>
  if (!cur?.svg)
    return (
      <p className="mono dim" role="status">
        {UI.reader.diagramLoading}
      </p>
    )
  return (
    // SEUL dangerouslySetInnerHTML de l'app : le SVG vient de mermaid (securityLevel 'strict') puis de
    // sanitizeSvg() (scripts, on*, javascript:/data:, img, iframe retirés). Jamais de HTML issu du contenu brut.
    <div
      className="diagram"
      role="img"
      aria-label={UI.reader.diagram}
      dangerouslySetInnerHTML={{ __html: cur.svg }}
    />
  )
}
