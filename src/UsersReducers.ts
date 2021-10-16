export interface IUsers {
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}

export interface IStatusizedUsers{
    loading: string;
    users: IUsers[];
}

export interface IUsersAction{
    type:string;
    payload: IUsers[];
}

export const UsersReducers = (state: IStatusizedUsers, action: IUsersAction): IStatusizedUsers => {
    switch(action.type){
        case "not started": return {...state, loading:"not started"};
        case "started": return {...state, loading:"started"};
        case "completed": return {...state, users: action.payload, loading:"completed"};
    }
    return {loading:"not started", users: []};
} 