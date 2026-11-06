/**
 * Texte enrichi sûr : markdown inline + `[[termes]]` → arbre de nœuds (jamais de HTML).
 * Le contenu est généré par des agents : on le traite comme non fiable. Aucune chaîne HTML
 * n'est produite ; le rendu React (RichText.tsx) ne crée que les balises de la liste blanche.
 */
import { getDefaults, Lexer, type Token, type Tokens } from 'marked'
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

/** Remplace les `[[termes]]` par des placeholders ; renvoie le source et la table des libellés. */
function prepare(text: string): { src: string; labels: Ctx['labels'] } {
  const labels: Ctx['labels'] = []
  let src = ''
  for (const seg of parseTermRefs(text.replaceAll(OPEN, '').replaceAll(CLOSE, ''))) {
    if (seg.type === 'text') src += seg.value
    else {
      src += `${OPEN}${labels.length}${CLOSE}`
      labels.push(seg.label ? { termId: seg.termId, label: seg.label } : { termId: seg.termId })
    }
  }
  return { src, labels }
}

/** Analyse un texte de cours en arbre sûr. */
export function parseRich(text: string): RichNode[] {
  const { src, labels } = prepare(text)
  return convert(Lexer.lexInline(src), { labels })
}

/** Bloc de texte enrichi (markdown bloc) : paragraphes, listes, tableaux, citations, code. */
export type RichBlock =
  | { kind: 'p'; children: RichNode[] }
  | { kind: 'heading'; children: RichNode[] }
  | { kind: 'list'; ordered: boolean; start: number; items: RichBlock[][] }
  | { kind: 'table'; head: RichNode[][]; rows: RichNode[][][] }
  | { kind: 'quote'; children: RichBlock[] }
  | { kind: 'code'; text: string }
  | { kind: 'hr' }

function convertBlocks(tokens: Token[], ctx: Ctx): RichBlock[] {
  const out: RichBlock[] = []
  for (const t of tokens) {
    switch (t.type) {
      case 'space':
        break
      case 'paragraph':
      case 'text': {
        const inline = (t as Tokens.Paragraph | Tokens.Text).tokens
        out.push({
          kind: 'p',
          children: inline ? convert(inline, ctx) : withTerms(decode(t.raw), ctx.labels),
        })
        break
      }
      case 'heading':
        out.push({ kind: 'heading', children: convert((t as Tokens.Heading).tokens, ctx) })
        break
      case 'list': {
        const l = t as Tokens.List
        out.push({
          kind: 'list',
          ordered: l.ordered,
          start: typeof l.start === 'number' ? l.start : 1,
          items: l.items.map((it) => convertBlocks(it.tokens, ctx)),
        })
        break
      }
      case 'table': {
        const tb = t as Tokens.Table
        out.push({
          kind: 'table',
          head: tb.header.map((c) => convert(c.tokens, ctx)),
          rows: tb.rows.map((r) => r.map((c) => convert(c.tokens, ctx))),
        })
        break
      }
      case 'blockquote':
        out.push({ kind: 'quote', children: convertBlocks((t as Tokens.Blockquote).tokens, ctx) })
        break
      case 'code':
        out.push({ kind: 'code', text: (t as Tokens.Code).text })
        break
      case 'hr':
        out.push({ kind: 'hr' })
        break
      default:
        // HTML brut et le reste : affiché comme texte inerte
        out.push({ kind: 'p', children: [{ kind: 'text', value: t.raw.trim() }] })
    }
  }
  return out
}

/** Analyse un texte markdown « bloc » en arbre sûr (jamais de HTML). */
export function parseRichBlocks(text: string): RichBlock[] {
  const { src, labels } = prepare(text)
  // breaks : un retour à la ligne simple reste un retour à la ligne (énoncés « a) … \n b) … »)
  return convertBlocks(Lexer.lex(src, { ...getDefaults(), breaks: true }), { labels })
}
