import { useContext } from "react"
import { ThemeContext } from "./App"


export default function Button({ children }){
    const theme = useContext(ThemeContext)
    const className = `${theme === 'dark' ? "bg-black text-white border-2 flex justify-center w-1/3": "bg-white text-black border-2 border-black flex justify-center w-1/3"}`

    return (
        <button className={className }>
            {children}
        </button>
    )
}