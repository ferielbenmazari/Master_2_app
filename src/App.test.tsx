import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('affiche le styleguide', () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('M2 // Arena')
  })
})
