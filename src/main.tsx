import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


export const ThemeContext = createContext<string | null>(null)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContext.Provider value='dark'>
      <App />
    </ThemeContext.Provider>
  
  </StrictMode>,
)
