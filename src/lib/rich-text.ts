/**
 * Texte enrichi sûr : markdown inline + `[[termes]]` → arbre de nœuds (jamais de HTML).
 * Le contenu est généré par des agents : on le traite comme non fiable. Aucune chaîne HTML
 * n'est produite ; le rendu React (RichText.tsx) ne crée que les balises de la liste blanche.
 */
import { Lexer, type Token, type Tokens } from 'marked'
import { parseTermRefs } from '@/content/richtext'

export type RichTag = 'strong' | 'em' | 'del' | 'code' | 'sup' | 'sub' | 'a'

export type RichNode =
  | { kind: 'text'; value: string }
  | { kind: 'br' }
  | { kind: 'term'; termId: string; label?: string }
  | { kind: 'el'; tag: RichTag; href?: string; children: RichNode[] }

const OPEN = ''
const CLOSE = ''
const PLACEHOLDER = /(\d+)/g
const ENTITIES: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
}

/** Seuls http(s) et mailto sont acceptés ; `javascript:`, `data:`, etc. → `null`. */
export function safeHref(href: string | null | undefined): string | null {
  const h = (href ?? '').trim()
  // retire les caractères de contrôle/espaces que les navigateurs ignorent dans le schéma (« java\tscript: »)
  // eslint-disable-next-line no-control-regex
  const compact = h.replace(/[\s\x00-\x1F]+/g, '')
  return /^(https?:\/\/|mailto:)[^\s]/i.test(compact) ? h : null
}

function decode(s: string): string {
  return s.replace(/&(?:amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m] ?? m)
}

/** Texte brut avec placeholders de termes → nœuds texte / terme. */
function withTerms(text: string, labels: { termId: string; label?: string }[]): RichNode[] {
  const out: RichNode[] = []
  let last = 0
  for (const m of text.matchAll(PLACEHOLDER)) {
    if (m.index > last) out.push({ kind: 'text', value: text.slice(last, m.index) })
    const t = labels[Number(m[1])]
    if (t) out.push({ kind: 'term', ...t })
    last = m.index + m[0].length
  }
  if (last < text.length) out.push({ kind: 'text', value: text.slice(last) })
  return out
}

type Ctx = { labels: { termId: string; label?: string }[] }

function convert(tokens: Token[], ctx: Ctx): RichNode[] {
  const root: RichNode[] = []
  // pile de <sup>/<sub> ouverts ; le tout reste dans la liste blanche
  const stack: { tag: 'sup' | 'sub'; children: RichNode[] }[] = []
  const push = (...n: RichNode[]) =>
    (stack.length ? stack[stack.length - 1]!.children : root).push(...n)

  for (const t of tokens) {
    switch (t.type) {
      case 'text':
      case 'escape':
        push(...withTerms(decode((t as Tokens.Text).text), ctx.labels))
        break
      case 'strong':
        push({ kind: 'el', tag: 'strong', children: convert((t as Tokens.Strong).tokens, ctx) })
        break
      case 'em':
        push({ kind: 'el', tag: 'em', children: convert((t as Tokens.Em).tokens, ctx) })
        break
      case 'del':
        push({ kind: 'el', tag: 'del', children: convert((t as Tokens.Del).tokens, ctx) })
        break
      case 'codespan':
        push({
          kind: 'el',
          tag: 'code',
          children: [{ kind: 'text', value: decode((t as Tokens.Codespan).text) }],
        })
        break
      case 'br':
        push({ kind: 'br' })
        break
      case 'link': {
        const l = t as Tokens.Link
        const href = safeHref(l.href)
        const children = convert(l.tokens, ctx)
        if (href) push({ kind: 'el', tag: 'a', href, children })
        else push(...children) // lien neutralisé : on garde le texte
        break
      }
      case 'image':
        push({ kind: 'text', value: (t as Tokens.Image).text }) // jamais d'<img>
        break
      case 'html': {
        const raw = (t as Tokens.HTML).text.trim()
        const m = /^<(\/)?(sup|sub)>$/i.exec(raw)
        if (m && !m[1]) stack.push({ tag: m[2]!.toLowerCase() as 'sup' | 'sub', children: [] })
        else if (m && m[1] && stack.length) {
          const top = stack.pop()!
          push({ kind: 'el', tag: top.tag, children: top.children })
        } else if (/^<br\s*\/?>$/i.test(raw)) push({ kind: 'br' })
        else push({ kind: 'text', value: (t as Tokens.HTML).text }) // HTML brut : affiché comme texte inerte
        break
      }
      default:
        push({ kind: 'text', value: t.raw })
    }
  }
  while (stack.length) {
    const top = stack.pop()!
    push({ kind: 'el', tag: top.tag, children: top.children })
  }
  return root
}

/** Analyse un texte de cours en arbre sûr. */
export function parseRich(text: string): RichNode[] {
  const labels: { termId: string; label?: string }[] = []
  let src = ''
  for (const seg of parseTermRefs(text.replaceAll(OPEN, '').replaceAll(CLOSE, ''))) {
    if (seg.type === 'text') src += seg.value
    else {
      src += `${OPEN}${labels.length}${CLOSE}`
      labels.push(seg.label ? { termId: seg.termId, label: seg.label } : { termId: seg.termId })
    }
  }
  return convert(Lexer.lexInline(src), { labels })
}
