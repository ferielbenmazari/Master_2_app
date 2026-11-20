import { render } from '@testing-library/react'
import type { Term } from '@/content/schema'
import { ReaderContext } from './ReaderContext'
import RichText from './RichText'

const term: Term = {
  id: 'term-originality',
  fr: 'originalité',
  en: 'originality',
  definition: { fr: 'd', en: 'd' },
  src: [{ file: 'f', loc: 'l', quote: 'q' }],
}
const wrap = (ui: React.ReactNode) => (
  <ReaderContext.Provider
    value={{ courseId: 'rec1', chapterId: 'c', glossary: new Map([[term.id, term]]), quiz: new Map() }}
  >
    {ui}
  </ReaderContext.Provider>
)

describe('libellé des termes sans |label', () => {
  it('FR : terme du glossaire en français', () => {
    const { container } = render(wrap(<RichText lang="fr" text="Voir [[term-originality]]." />))
    expect(container.querySelector('button.term')?.textContent).toBe('originalité')
  })
  it('EN : terme du glossaire en anglais', () => {
    const { container } = render(wrap(<RichText lang="en" text="See [[term-originality]]." />))
    expect(container.querySelector('button.term')?.textContent).toBe('originality')
  })
  it('|label explicite prioritaire', () => {
    const { container } = render(wrap(<RichText lang="en" text="[[term-originality|novelty]]" />))
    expect(container.querySelector('button.term')?.textContent).toBe('novelty')
  })
  it('terme inconnu : repli sur l’id', () => {
    const { container } = render(wrap(<RichText lang="fr" text="[[term-nope]]" />))
    expect(container.textContent).toBe('term-nope')
  })
  it('sans bulle (noTerms) : même libellé', () => {
    const { container } = render(wrap(<RichText noTerms lang="en" text="[[term-originality]]" />))
    expect(container.querySelector('strong')?.textContent).toBe('originality')
  })
})

describe('liens dans une correction', () => {
  it('lien interne (#/…) : même onglet ; lien externe : nouvel onglet', () => {
    const text = '- ✘ **b.** raison\n\n→ Revoir : [§ 2.3](#/matiere/inf4/chapitre/c/lire?partie=2.3) et [source](https://a.fr)'
    const { container } = render(wrap(<RichText block noTerms lang="fr" text={text} />))
    const [internal, external] = Array.from(container.querySelectorAll('a'))
    expect(internal?.getAttribute('href')).toBe('#/matiere/inf4/chapitre/c/lire?partie=2.3')
    expect(internal?.getAttribute('target')).toBeNull()
    expect(external?.getAttribute('target')).toBe('_blank')
    expect(container.querySelector('li')?.textContent).toContain('raison')
  })
})
