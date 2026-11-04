import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('affiche l’onboarding au premier lancement', () => {
    localStorage.clear()
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
    render(<App />)
    expect(screen.getByRole('dialog', { name: 'Choisis ton pseudo' })).toBeInTheDocument()
  })
})
