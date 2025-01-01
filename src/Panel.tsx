import { useContext } from "react"
import { ThemeContext } from "./main"

export default function Panel({title, children}){
    const theme = useContext(ThemeContext)
    const className = `${theme === 'dark' ? "bg-black": "bg-white"}`
    return (
        <>
            <section >
                <h1 className={theme === 'dark' ? "text-white": "text-black" + " text-4xl"}>{title}</h1>
                <div  className=" flex flex-col">
                {children}
                </div>
            </section>
        </>
    )
}