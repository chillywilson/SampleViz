import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import App from './App'
import { CharacterAnimationsProvider } from './characterAnimation'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    
      <App />
  </StrictMode>)
