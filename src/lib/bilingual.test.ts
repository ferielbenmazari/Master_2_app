import { pickLang } from './bilingual'

const l = { fr: 'Bonjour', en: 'Hello' }
describe('pickLang', () => {
  it('suit le mode de langue', () => {
    expect(pickLang(l, 'fr')).toEqual({ main: 'Bonjour' })
    expect(pickLang(l, 'en')).toEqual({ main: 'Hello' })
    expect(pickLang(l, 'both')).toEqual({ main: 'Bonjour', alt: 'Hello' })
  })
})
