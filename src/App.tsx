import { HashRouter } from 'react-router'
import AppRoutes from './routes'
import { PrefsProvider } from './store/PrefsProvider'

export default function App() {
  return (
    <PrefsProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </PrefsProvider>
  )
}
