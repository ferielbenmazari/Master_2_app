import { render, screen } from '@testing-library/react'
import type { Chapter } from '@/content/schema'
import ChapterGuide, { hasGuide } from './ChapterGuide'
import ChapterSynthesis from './ChapterSynthesis'

const L = (s: string) => ({ fr: s, en: `${s} (en)` })
const base = {
  question: undefined,
  objectives: undefined,
  examFocus: undefined,
  prerequisites: undefined,
  next: undefined,
} as unknown as Chapter

describe('ChapterGuide', () => {
  it('ne rend rien sans élément pédagogique', () => {
    expect(hasGuide(base)).toBe(false)
    const { container } = render(<ChapterGuide chapter={base} layout="fr" />)
    expect(container).toBeEmptyDOMElement()
  })

  it('affiche question, objectifs avec niveau, partiel documenté / probable, avant / après', () => {
    const ch = {
      ...base,
      question: L('Comment poser une bonne RQ ?'),
      objectives: [{ id: 'o1', text: L('Diagnostiquer une RQ'), level: 'analyze' }],
      examFocus: {
        documented: [L('Contrôle de novembre')],
        probable: [L('V/F sur la check-list')],
      },
      prerequisites: L('Chapitre 1'),
      next: L('Chapitre 3'),
    } as Chapter
    render(<ChapterGuide chapter={ch} layout="fr" />)
    expect(screen.getByText('Comment poser une bonne RQ ?')).toBeInTheDocument()
    expect(screen.getByText('Diagnostiquer une RQ')).toBeInTheDocument()
    expect(screen.getByText('Analyse')).toBeInTheDocument()
    expect(screen.getByText('Documenté')).toBeInTheDocument()
    expect(screen.getByText('Probable')).toBeInTheDocument()
    expect(screen.getByText('Chapitre 1')).toBeInTheDocument()
    expect(screen.getByText('Ce que ça prépare')).toBeInTheDocument()
    expect(screen.queryByText('Comment poser une bonne RQ ? (en)')).toBeNull()
  })
})

describe('ChapterSynthesis', () => {
  it('affiche les 4 rubriques, en FR + EN en mode empilé', () => {
    render(
      <ChapterSynthesis
        layout="stack"
        synthesis={{
          mustKnow: [L('k')],
          mustDo: [L('d')],
          distinctions: [L('x ≠ y')],
          links: [L('→ ch.5')],
        }}
      />,
    )
    for (const t of [
      'À savoir restituer',
      'À savoir faire',
      'Ne pas confondre',
      'Liens avec la suite',
    ]) {
      expect(screen.getByText(t)).toBeInTheDocument()
    }
    expect(screen.getByText('x ≠ y (en)')).toBeInTheDocument()
  })
})
