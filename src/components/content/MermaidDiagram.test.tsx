import { render, screen } from '@testing-library/react'
import { UI } from '@/i18n/ui'
import { PrefsProvider } from '@/store/PrefsProvider'
import MermaidDiagram from './MermaidDiagram'

const mm = vi.hoisted(() => ({
  initialize: vi.fn(),
  render: vi.fn(async () => ({
    svg: '<svg onload="alert(1)"><script>alert(1)</script><g onclick="x()"><text>ok</text></g><foreignObject><img src=x onerror=alert(1)></foreignObject></svg>',
  })),
}))
vi.mock('mermaid', () => ({ default: mm }))

describe('MermaidDiagram', () => {
  it('mode strict, startOnLoad off, et SVG malveillant neutralisé avant insertion', async () => {
    const { container } = render(
      <PrefsProvider>
        <MermaidDiagram code={'graph TD; A["<img src=x onerror=alert(1)>"]-->B'} />
      </PrefsProvider>,
    )
    await screen.findByRole('img', { name: 'Schéma' })
    expect(mm.initialize).toHaveBeenCalledWith(
      expect.objectContaining({ securityLevel: 'strict', startOnLoad: false }),
    )
    expect(container.querySelector('script, img, iframe')).toBeNull()
    expect(container.innerHTML).not.toMatch(/onerror|onload|onclick/i)
    expect(container.textContent).toContain('ok')
  })

  it('erreur de syntaxe : message lisible, pas de crash', async () => {
    mm.render.mockRejectedValueOnce(new Error('Parse error'))
    render(
      <PrefsProvider>
        <MermaidDiagram code="graph TD; A-->-->" />
      </PrefsProvider>,
    )
    expect(await screen.findByText(UI.reader.diagramError)).toBeTruthy()
  })
})
