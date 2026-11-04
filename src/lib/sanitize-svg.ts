/**
 * Filet de sécurité appliqué au SVG produit par Mermaid avant insertion dans le DOM
 * (Mermaid tourne déjà en `securityLevel: 'strict'` ; ceci est une seconde barrière).
 * Le SVG est analysé dans un <template> : inerte, rien ne s'exécute ni ne se charge pendant l'analyse.
 */
const FORBIDDEN = new Set([
  'script',
  'iframe',
  'object',
  'embed',
  'link',
  'meta',
  'base',
  'set',
  'animate',
  'animatetransform',
  'audio',
  'video',
  'img',
])
const HREF_ATTRS = new Set(['href', 'xlink:href', 'src', 'action', 'formaction'])

function safeRef(value: string, tag: string): boolean {
  // eslint-disable-next-line no-control-regex
  const v = value.replace(/[\s\x00-\x1F]+/g, '').toLowerCase()
  // références internes partout ; http(s) seulement pour de vrais liens <a> (pas image/use/feImage : requêtes réseau)
  return v.startsWith('#') || (tag === 'a' && /^https?:/.test(v))
}

export function sanitizeSvg(svg: string): string {
  const tpl = document.createElement('template')
  tpl.innerHTML = svg
  for (const el of Array.from(tpl.content.querySelectorAll('*'))) {
    if (FORBIDDEN.has(el.localName.toLowerCase())) {
      el.remove()
      continue
    }
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase()
      const value = attr.value
      // eslint-disable-next-line no-control-regex
      const flat = value.replace(/[\s\x00-\x1F]+/g, '').toLowerCase()
      if (
        name.startsWith('on') ||
        (HREF_ATTRS.has(name) && !safeRef(value, el.localName.toLowerCase())) ||
        (name === 'style' && /expression\(|javascript:|@import/.test(flat))
      ) {
        el.removeAttribute(attr.name)
      }
    }
  }
  return tpl.innerHTML
}
