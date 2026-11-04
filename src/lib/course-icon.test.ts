import { BookOpen, GitBranch } from 'lucide-react'
import { courseIcon } from './course-icon'

describe('courseIcon', () => {
  it('mappe un nom lucide connu', () => {
    expect(courseIcon('GitBranch')).toBe(GitBranch)
  })
  it('retombe sur l’icône de repli pour un nom inconnu, vide ou piégé', () => {
    expect(courseIcon('NomInconnu')).toBe(BookOpen)
    expect(courseIcon('')).toBe(BookOpen)
    expect(courseIcon('constructor')).toBe(BookOpen)
    expect(courseIcon('__proto__')).toBe(BookOpen)
  })
})
