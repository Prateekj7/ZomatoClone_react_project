import { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth"
import LoadingSpinner from "./LoadingSpinner";


export const UserContext = createContext<firebase.User | null>(null)

interface IProps{
    children: React.ReactNode;
}

export default function UserProvider(props:IProps){
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setUser(user);
            setLoading(false);
        });
    }, []);
    return (
        <UserContext.Provider value={user}>
            {loading && <LoadingSpinner />}
            {!loading && props.children}
        </UserContext.Provider>
    )
}

/*
In code we will read those keys -> firebase sdk -> firebase object -> ...
we will store data in firebase database

This file is a global listener.

global listener ->  listen to user actions.
if user signs in -> global listener will store the cookie 
if user signs out -> global listener will delete the cookie

global listener we will implement using useContext.

        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>

        This refers to state pass to all children getting the login information


*/