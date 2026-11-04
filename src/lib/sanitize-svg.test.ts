import { sanitizeSvg } from './sanitize-svg'

function dom(html: string): HTMLElement {
  const d = document.createElement('div')
  d.innerHTML = html
  return d
}

describe('sanitizeSvg', () => {
  const evil =
    '<svg onload="alert(1)"><script>alert(1)</script><g onclick="x()"><text>ok</text></g>' +
    '<a href="javascript:alert(1)"><text>l</text></a><a xlink:href="data:text/html,x"><text>d</text></a>' +
    '<foreignObject><img src=x onerror=alert(1)><iframe src="//evil"></iframe><p onmouseover="x()">label</p></foreignObject>' +
    '<style>.a{fill:red}</style></svg>'

  it('retire scripts, gestionnaires on*, liens javascript:/data:, img et iframe', () => {
    const out = dom(sanitizeSvg(evil))
    expect(out.querySelector('script, img, iframe')).toBeNull()
    for (const el of out.querySelectorAll('*')) {
      for (const a of Array.from(el.attributes)) expect(a.name.startsWith('on')).toBe(false)
    }
    expect(sanitizeSvg(evil)).not.toMatch(/javascript:|data:text/i)
  })

  it('conserve le contenu légitime (texte, style, ancres internes)', () => {
    const out = sanitizeSvg(
      '<svg><style>.a{fill:red}</style><use href="#n1"/><g><text>ok</text></g></svg>',
    )
    expect(out).toContain('<text>ok</text>')
    expect(out).toContain('<style>')
    expect(out).toContain('href="#n1"')
  })

  it('aucune ressource externe (image, use, feImage) ; liens <a> http(s) conservés', () => {
    const out = sanitizeSvg(
      '<svg><image href="http://evil/x.png"/><use href="https://evil/a.svg#a"/><a href="https://ok.example"><text>l</text></a></svg>',
    )
    expect(out).not.toMatch(/evil/)
    expect(out).toContain('href="https://ok.example"')
  })
})
