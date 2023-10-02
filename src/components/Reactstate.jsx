import { useState } from "react";

export default function Reactstate() {
    const [input, setInput] = useState("");

    // function dataChanged(event) {
    //     console.log.event.target.value
    //     setInput(event.target.value)
    // }

    return (
        <section>
            <form>
                <input placeholder="Your name" value={input} 
                onChange={e => setInput(e.target.value)}></input>
            </form>
            <p>Hello, {input}</p>
        </section>
    )
}