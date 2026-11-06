import { HashRouter } from 'react-router'
import AppRoutes from './routes'
import UpdateToast from './components/layout/UpdateToast'
import { PrefsProvider } from './store/PrefsProvider'

export default function App() {
  return (
    <PrefsProvider>
      <HashRouter>
        <AppRoutes />
        <UpdateToast />
      </HashRouter>
    </PrefsProvider>
  )
}
