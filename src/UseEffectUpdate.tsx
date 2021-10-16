import { useEffect, useState } from "react";

export default function UseEffectUpdate() { 
    const [title, setTitle] = useState("");
    const [num, setNum] = useState(1);

    useEffect(() => {

        async function api(){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + num);
            if(response.ok){
                const json = await response.json();
                setTitle(json.title);
            }
            else{
                setTitle("There was an Error")
            }
            
        }

        api();
    }, [num])

    return (
        <>
            <input 
                type="text" 
                onChange={(event) => setNum(Number(event?.target.value))}/>
            <label>{title}</label>
        </>
    )
}