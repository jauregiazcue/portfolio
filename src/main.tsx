import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@style/vars.scss'
import "@style/clean.scss"
import "@style/font.scss"
import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
