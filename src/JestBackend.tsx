import { useEffect, useState } from "react";
import { apiCall, Iuser } from "./Api";

export default function JestBackend(){
    const [users, setUsers] = useState<Iuser[]>([]);
    useEffect(() => {
        async function api(){
            const user = await apiCall();
            setUsers(user);
        }
        api();
    },[])

    return(
        <>
            {users.length>0 && users.map((x, index) => <div key={x.email} data-testid={`email${index}`}>{x.email}</div>)}
        </>
    );
}


