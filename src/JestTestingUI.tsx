import { useState } from "react";

export default function JestTestingUI() {
    const [name, setName] = useState("");
    return (
        <>
           <input type="text" value={name} onChange={(e) => setName(e.target.value) } data-testid="input"/>
           <label data-testid="output">{`Hello ${name}`}</label>
        </>
    );
}
