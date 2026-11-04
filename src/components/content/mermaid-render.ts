import { sanitizeSvg } from '@/lib/sanitize-svg'

let seq = 0
let current: 'dark' | 'light' | null = null

/**
 * Rend un diagramme Mermaid en SVG assaini.
 * `mermaid` n'est JAMAIS importé statiquement : import dynamique ici uniquement (chunk séparé).
 */
export async function renderMermaid(code: string, theme: 'dark' | 'light'): Promise<string> {
  const { default: mermaid } = await import('mermaid')
  if (current !== theme) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: theme === 'dark' ? 'dark' : 'default',
      fontFamily: 'Manrope, system-ui, sans-serif',
    })
    current = theme
  }
  const id = `mmd-${++seq}`
  try {
    const { svg } = await mermaid.render(id, code)
    return sanitizeSvg(svg)
  } finally {
    // en cas d'erreur de syntaxe, Mermaid laisse un conteneur « Syntax error in text » dans <body>
    document.getElementById(`d${id}`)?.remove()
  }
}
