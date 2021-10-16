export interface IUser{
    name: string;
}

interface IUserAction{
    type: string; //case type
    payload: string; // first person's name
}

//dispatch({type: "name", payload: json[0].name})

export const UserReducer = (state:IUser, action: IUserAction): IUser => {
    switch(action.type){
        case "name": 
            state.name = action.payload; 
            return {...state, name: action.payload}; 
    }
    return {name:""};
}