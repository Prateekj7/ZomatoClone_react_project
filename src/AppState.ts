//https://reqres.in/api/users


import { combineReducers, createStore } from "redux";
import { UserReducer } from "./UserReducer";
import { UsersReducers } from "./UsersReducers";
import {devToolsEnhancer } from "redux-devtools-extension";
import { HotelReducers } from "./HotelReducer";


export const rootReducer = combineReducers({
    userReducer: UserReducer,
    usersReducers: UsersReducers,
    hotelReducer: HotelReducers
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
    return createStore(rootReducer, {}, devToolsEnhancer({})); //initial object is empty {}.
}



/*
1. Redux 
-- Use state in n components using redux
 
2. For this we need a reducer which will store a data and have two methods.

useDispatch() & useSelector()

3. useDispatch() -> dispatches objects
-- dispatch({actionObject, actionName}) --> pass the data to reducer and then reducer will save the data

useSelector(table name, object) ---> getting the data


4. So as an overview we have two flows.

flow 1 : ajax call -> data -> dispatch object to pass the data to reducer -> reducer will save the data.
flow2: useSelector -> will select the data from reducer -> displaying the data in react.
*/


/*
mention all tables in datbase
useSelector --> AppState --> userReducer --> name

reducer1 -> table -> usernames
reducer2 -> table -> salary

app state = union of user names and user salary

AppState.tableName.attributeName
AppState.userReducer.userName
*/