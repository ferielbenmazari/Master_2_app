import { parseRich, safeHref, type RichNode } from './rich-text'

/** Tous les nœuds, à plat. */
function walk(nodes: RichNode[]): RichNode[] {
  return nodes.flatMap((n) => (n.kind === 'el' ? [n, ...walk(n.children)] : [n]))
}
const tags = (t: string) => walk(parseRich(t)).flatMap((n) => (n.kind === 'el' ? [n.tag] : []))
const plain = (t: string) =>
  walk(parseRich(t))
    .flatMap((n) => (n.kind === 'text' ? [n.value] : []))
    .join('')

describe('parseRich', () => {
  it('rend gras, italique, code, retour à la ligne', () => {
    expect(tags('**a** *b* `c`')).toEqual(['strong', 'em', 'code'])
    expect(parseRich('a  \nb').some((n) => n.kind === 'br')).toBe(true)
  })

  it('texte brut inchangé (dont $…$ et chevrons mathématiques)', () => {
    expect(plain('Quoting $> 30$ words')).toBe('Quoting $> 30$ words')
    expect(plain('1 < 2 &amp; 3')).toBe('1 < 2 & 3')
  })

  it('termes : [[id|label]] et imbrication dans du gras', () => {
    const nodes = parseRich('Voir **[[term-validity|validité]]** et [[term-x]].')
    const terms = walk(nodes).flatMap((n) => (n.kind === 'term' ? [n] : []))
    expect(terms).toEqual([
      { kind: 'term', termId: 'term-validity', label: 'validité' },
      { kind: 'term', termId: 'term-x' },
    ])
    expect(tags('**[[term-validity|v]]**')).toEqual(['strong'])
  })

  it('sup / sub appariés ; non fermés restent confinés', () => {
    expect(tags('x<sup>2</sup> H<sub>2</sub>O')).toEqual(['sup', 'sub'])
    expect(tags('x<sup>2')).toEqual(['sup'])
  })

  it('les caractères réservés aux placeholders sont retirés de l’entrée', () => {
    expect(walk(parseRich('a0b')).some((n) => n.kind === 'term')).toBe(false)
  })
})

describe('injection', () => {
  it('<script> et <img onerror> : jamais d’élément, affichés comme texte inerte', () => {
    for (const bad of [
      '<script>alert(1)</script>',
      '<img src=x onerror=alert(1)>',
      '<iframe src="x"></iframe>',
    ]) {
      const nodes = parseRich(`avant ${bad} après`)
      expect(walk(nodes).every((n) => n.kind !== 'el')).toBe(true)
      expect(plain(`avant ${bad} après`)).toContain('avant')
    }
  })

  it('[x](javascript:…) : lien neutralisé, texte conservé', () => {
    for (const bad of [
      'javascript:alert(1)',
      'JaVaScRiPt:alert(1)',
      'data:text/html,<script>1</script>',
      'vbscript:x',
    ]) {
      const nodes = parseRich(`[clique](${bad})`)
      expect(tags(`[clique](${bad})`)).not.toContain('a')
      expect(walk(nodes).some((n) => n.kind === 'text' && n.value === 'clique')).toBe(true)
    }
  })

  it('liens http(s) et mailto conservés', () => {
    const a = walk(parseRich('[doc](https://exemple.fr/x) [m](mailto:a@b.fr)')).flatMap((n) =>
      n.kind === 'el' && n.tag === 'a' ? [n.href] : [],
    )
    expect(a).toEqual(['https://exemple.fr/x', 'mailto:a@b.fr'])
  })

  it('images : aucun <img>, texte alternatif seulement', () => {
    expect(tags('![alt](https://x.fr/a.png)')).toEqual([])
    expect(plain('![alt](https://x.fr/a.png)')).toBe('alt')
  })

  it('un terme ne peut pas injecter de balise via son label', () => {
    const nodes = parseRich('[[term-a|<img src=x onerror=1>]]')
    expect(nodes).toEqual([{ kind: 'term', termId: 'term-a', label: '<img src=x onerror=1>' }])
  })
})

describe('safeHref', () => {
  it('liste blanche de schémas', () => {
    expect(safeHref('https://a.fr')).toBe('https://a.fr')
    expect(safeHref('java\tscript:alert(1)')).toBeNull()
    expect(safeHref('//evil.fr')).toBeNull()
    expect(safeHref('/relatif')).toBeNull()
    expect(safeHref('')).toBeNull()
  })
})
