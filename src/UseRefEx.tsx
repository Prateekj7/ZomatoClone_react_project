/*
sending data from child to parent using useRef

props is for sending data from parent to child
*/

import { useRef } from "react";

export default function UseRefEx(){
    const ref = useRef<HTMLInputElement>(null);
    return(
        <>
            <input type="text"  ref={ref} onChange={() => alert(ref.current?.value)}/>
        </>
    );
}

