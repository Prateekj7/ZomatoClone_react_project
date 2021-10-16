import { useEffect, useState } from "react";

export default function UseEffectMount() { 
    const [title, setTitle] = useState("");

    useEffect(() => {

        async function api(){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
            const json = await response.json();
            setTitle(json.title);
        }

        api();
    }, []) //here [] refers to useEffect being used as DidMount

    return <label>{title}</label>
}