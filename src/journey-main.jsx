import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mono-font.js'
import './index.css'
import Journey from './Journey.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Journey />
  </StrictMode>,
)
