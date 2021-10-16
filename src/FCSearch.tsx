import { useEffect, useState } from "react";


interface IPerson{
    email: string;
    name: string;
    avatar: string;
    first_name: string;
    last_name: string;
}

export default function FunctionSearch(){
    const [persons, setPerson] = useState([]);
    const [loading, setLoading] = useState("Not Started");
    const [search, setSearch] = useState("");

    useEffect(() => {

        async function apiCall(){
            setLoading("Starting");
            const response = await fetch("https://reqres.in/api/users");
            if(response.ok){
                const json = await response.json();
                // setPerson(json.data);  --> we can use directly this also
                const persons = json.data.map((x:IPerson) => ({
                    "email": x.email,
                    "avatar": x.avatar,
                    "name": `${x.first_name} ${x.last_name}`
                }));
                setPerson(persons);
                setLoading("Completed")
            }
            else{
                alert("There is some error")
            }
        }
        apiCall();
    }, [])
    
    return (
        <>
            <div>{loading}</div>
                {
                    loading === "Completed" && renderPersons(persons)                    
                }
        </>
    );

    function renderPersons(persons: IPerson[]){
        return(
            <>
                <input type="text" onChange={(event) => setSearch(event.target.value)} />
                <div className="grid-container">
                    {persons.filter(x => x.name.toLowerCase().includes(search)).map(renderPerson)}  
                </div>
            </>
        );
    }

    function renderPerson(persons: IPerson, index:number){
        return(
            <div className="grid-item" key={index}>
                <img src={persons.avatar} alt="" />
                <div>{persons.name}</div>
                <div>{persons.email}</div>
            </div>
        );
    }
}

