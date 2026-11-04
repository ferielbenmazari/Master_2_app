import { courseStyle } from './course-color'
import { cn } from './cn'

describe('courseStyle', () => {
  it('mappe lime sur acid et les autres sur leur variable', () => {
    expect(courseStyle('lime')).toEqual({ '--course': 'var(--acid)' })
    expect(courseStyle('coral')).toEqual({ '--course': 'var(--coral)' })
  })
  it('ne pose rien sans couleur', () => {
    expect(courseStyle()).toBeUndefined()
  })
})

describe('cn', () => {
  it('ignore les valeurs vides', () => {
    expect(cn('a', false, undefined, 'b', null)).toBe('a b')
  })
})
