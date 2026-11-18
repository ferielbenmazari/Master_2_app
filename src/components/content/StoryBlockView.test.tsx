import { render, screen } from '@testing-library/react'
import { ReaderContext } from './ReaderContext'
import StoryBlockView from './StoryBlockView'

const L = (s: string) => ({ fr: s, en: `${s} (en)` })
const src = [{ file: 'f', loc: 'l', quote: 'q' }]
const wrap = (ui: React.ReactNode) => (
  <ReaderContext.Provider value={{ courseId: 'isi1', chapterId: 'c', glossary: new Map(), quiz: new Map() }}>
    {ui}
  </ReaderContext.Provider>
)

describe('StoryBlockView : structure du cours (T26)', () => {
  it('sous-titre : rendu en h3, sans numéro de partie', () => {
    const { container } = render(
      wrap(<StoryBlockView block={{ type: 'subheading', text: L('1.1 Définir') }} layout="fr" quizHref="#" />),
    )
    expect(container.querySelector('h3')?.textContent).toBe('1.1 Définir')
    expect(container.querySelector('h2')).toBeNull()
    expect(screen.queryByText(/Partie/)).toBeNull()
  })

  it('sous-titre de 3ᵉ niveau (T28) : rendu en h4', () => {
    const { container } = render(
      wrap(
        <StoryBlockView
          block={{ type: 'subheading', text: L('1.1.1 Dissatisfier'), level: 3 }}
          layout="fr"
          quizHref="#"
        />,
      ),
    )
    expect(container.querySelector('h4')?.textContent).toBe('1.1.1 Dissatisfier')
    expect(container.querySelector('h3')).toBeNull()
  })

  it('encadré « Définition à connaître » avec sa source', () => {
    render(
      wrap(
        <StoryBlockView
          block={{ type: 'callout', variant: 'definition', text: L('Une NFR est un attribut ou une contrainte.'), src }}
          layout="fr"
          quizHref="#"
        />,
      ),
    )
    expect(screen.getByText('Définition à connaître')).toBeInTheDocument()
    expect(screen.getByText('Une NFR est un attribut ou une contrainte.')).toBeInTheDocument()
  })

  it('encadré « À retenir » sans source', () => {
    const { container } = render(
      wrap(<StoryBlockView block={{ type: 'callout', variant: 'retenir', text: L('Trois points.') }} layout="fr" quizHref="#" />),
    )
    expect(screen.getByText('À retenir')).toBeInTheDocument()
    expect(container.querySelector('.callout-retenir')).not.toBeNull()
  })
})
