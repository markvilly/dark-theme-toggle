import { useContext } from "react"
import { ThemeContext } from "./App"

export default function Panel({title, children}){
    const theme = useContext(ThemeContext)
    const className = `${theme === 'dark' ? "bg-black": "bg-white"}`
    return (
        <>
            <section >
                <h1 className={theme === 'dark' ? "text-white text-4xl font-bold": "text-black text-4xl font-bold"}>{title}</h1>
                <div  className=" flex justify-around py-6">
                {children}
                </div>
            </section>
        </>
    )
}