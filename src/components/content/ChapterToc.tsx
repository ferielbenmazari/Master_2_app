import { Link } from 'react-router'
import { plainText, tocAnchor, tocParam, type TocPart } from '@/lib/toc'

type Lang = 'fr' | 'en'

/** Préfixe le numéro si le titre n'en porte pas déjà un (« 1. … », « 1.2 … », « 1.2.1 … »). */
const numbered = (label: string, no: string) => (/^\d/.test(label) ? label : `${no} ${label}`)

interface Props {
  toc: TocPart[]
  lang: Lang
  /** Lecteur : défile jusqu'à l'ancre. */
  onJump?: (anchor: string) => void
  /** Sommaire général : lien vers le lecteur à cet endroit (`?partie=n`, `n.m` ou `n.m.k`). */
  hrefFor?: (param: string) => string
}

/** Liste des parties, sous-parties et sous-parties de 3ᵉ niveau d'un chapitre ; boutons (lecteur) ou liens (sommaire général). */
export default function ChapterToc({ toc, lang, onJump, hrefFor }: Props) {
  const item = (label: string, n: number, m?: number, k?: number) =>
    hrefFor ? (
      <Link to={hrefFor(tocParam(n, m, k))} className="toc-link">
        {label}
      </Link>
    ) : (
      <button type="button" className="toc-link" onClick={() => onJump?.(tocAnchor(n, m, k))}>
        {label}
      </button>
    )
  return (
    <ol className="toc-list">
      {toc.map((p) => (
        <li key={p.n} className="toc-part">
          {item(numbered(plainText(p.text[lang]), `${p.n}.`), p.n)}
          {p.subs.length > 0 && (
            <ol className="toc-subs">
              {p.subs.map((s) => (
                <li key={s.m}>
                  {item(numbered(plainText(s.text[lang]), `${p.n}.${s.m}`), p.n, s.m)}
                  {s.subs.length > 0 && (
                    <ol className="toc-subsubs">
                      {s.subs.map((x) => (
                        <li key={x.k}>
                          {item(
                            numbered(plainText(x.text[lang]), `${p.n}.${s.m}.${x.k}`),
                            p.n,
                            s.m,
                            x.k,
                          )}
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  )
}
