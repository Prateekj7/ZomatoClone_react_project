import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppState } from "./AppState";
import { IStatusizedUsers } from "./UsersReducers";

export default function CheckReducer(){
    const history = useHistory();
    const usersReducer: IStatusizedUsers = useSelector(
        (state: AppState) => state?.usersReducers
    );
    return(
        <>
        <div>{usersReducer.users.length}</div>
        <button onClick={() => history.goBack()}>go back</button>
        </>
    )
}