import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { initEffects } from './store/effects'
import App from './App'
import { registerSW } from 'virtual:pwa-register'

import { watchSwUpdate } from './lib/sw-update'

initEffects()
watchSwUpdate(navigator.serviceWorker, sessionStorage)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Service worker enregistré une fois la page chargée : ne retarde pas le premier affichage.
if (import.meta.env.PROD) window.addEventListener('load', () => registerSW({ immediate: true }))
