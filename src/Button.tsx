import { useContext } from "react"
import { ThemeContext } from "./main"


export default function Button({ children }){
    const theme = useContext(ThemeContext)
    const className = `button-${theme}`

    return (
        <button className={className}>
            {children}
        </button>
    )
}