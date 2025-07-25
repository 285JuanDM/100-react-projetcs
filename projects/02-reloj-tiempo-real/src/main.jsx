import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './style.css'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
