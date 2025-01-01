import { createContext,useState } from "react"
import Form from "./Form"

export const ThemeContext = createContext<string | null>(null)

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className=" flex h-lvh bg-pink-200">
      <ThemeContext.Provider value={theme}>
        <Form handleClick={()=>{
          setTheme( theme==="dark" ? "light": "dark")
        }}/>
      </ThemeContext.Provider>
      
    </div>
  )
}

export default App
