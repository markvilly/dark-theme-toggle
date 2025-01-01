import { useContext } from "react";
import Button from "./Button";
import Panel from "./Panel";
import { ThemeContext } from "./App";

export default function Form({handleClick}) {
    const theme = useContext(ThemeContext)
    const className = `${theme === 'dark' ? "bg-black text-white border-2 flex justify-center w-1/3": "bg-white text-black border-2 border-black flex justify-center w-1/3"}`

    return (
        <div className={ `${theme==='dark' ? 'bg-black': "bg-white"}  w-6/12 m-auto p-6  border-2 rounded-md h-4/6 flex flex-col items-center justify-center`}>
            <Panel title='Welcome to 2025'>
                <Button>Sign up</Button>
                <Button>Log in</Button>
            </Panel>
            <button onClick={handleClick} className={className}>Toggle Theme</button>
        </div>
    )
}