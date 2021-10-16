import { createContext, useContext, useState } from "react";

interface IUserContext{
    username: string;
}
const UserContext = createContext<IUserContext>({username: ""});

export default function UseContextEx(){
    const [username, setUserName] = useState(""); 
    return(
        <>
            <input type="text" onChange={(event) => setUserName(event.target.value)}/>
            <UserContext.Provider value={{username:username}}> 
                <ChildContext />
            </UserContext.Provider>
        </>
    );
}
/*
In <UserContext.Provider value={{username:username}}> 

one username is coming from interface as context and other from state deconstructor
*/

function ChildContext(){
    const userContext = useContext(UserContext);
    return <label htmlFor="">{userContext.username}</label>
}


