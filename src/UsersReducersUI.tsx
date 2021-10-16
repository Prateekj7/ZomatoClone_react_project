import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { IStatusizedUsers, IUsers } from "./UsersReducers";
import "./ClassSearch.css";
import { useHistory } from "react-router";

export default function UsersReducersUI(){
    const dispatch = useDispatch();
    const history = useHistory();

    //accessing data from reducer
    const usersReducer: IStatusizedUsers = useSelector((state: AppState) => state?.usersReducers);
    useEffect (() => {
        async function api(){
            dispatch({type: "started", payload: []});
            const response = await fetch("https://reqres.in/api/users");
            if(response.ok){
                const json = await response.json();
                dispatch({type:"completed", payload: json.data});
            }
        }
        if(usersReducer.loading === "not started")
            api();
    }, [dispatch, usersReducer.loading]);

    return(
        <>
            {usersReducer.loading !== "completed" && <div>loading ...</div>}
            {usersReducer.loading === "completed" && renderUsers()}
        </>
    );


    function renderUsers(){
        return (
        <> 
            <div className="grid-container">
                {usersReducer.users.map(renderPerson)}
            </div>
            <button onClick={ () => history.push("/CheckReducer")}>check reducer</button>
        </>
        );
        
    }

    function renderPerson(person: IUsers, index: number){
        return(
            <div className="grid-item" key={index}>
                <img src={person.avatar} alt="person"></img>
                <div>{person.first_name + person.last_name}</div>
                <div>{person.email}</div>
            </div>
        );
    }
}