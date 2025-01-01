import Button from "./Button";
import Panel from "./Panel";


export default function Form() {
    return (
        <div className={ " border-l-gray-950 " + `  w-6/12 m-auto p-6 rounded-md h-4/6 flex items-center`}>
            <Panel title='welcome'>
                <Button>Sign up</Button>
                <Button>Log in</Button>
            </Panel>
        </div>
    )
}