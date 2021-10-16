import { AppBar, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";


interface IPerson{
    email: string;
    name: string;
    avatar: string;
}

interface IAjaxPerson{
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface IState{
    loading: string;
    persons: IPerson[];
    search: string;
}

export default class ClassSearch extends React.Component<{}, IState>{
    constructor(props: {}){
        super(props);
        this.state = {
            loading : "this is loading....",
            persons: [],
            search: ""
        }
    }

    private async ajaxCall(){
        const response = await fetch("https://reqres.in/api/users");
        if(response.ok){
            const json = await response.json();
            const persons = json.data.map((x:IAjaxPerson) => ({
                email: x.email,
                avatar: x.avatar,
                name: `${x.first_name} ${x.last_name}`
            }));
            this.setState({ 
                persons:persons, 
                loading:"Completed"});
        }
    }

    public componentDidMount(){
        this.setState({loading:"Started"});
        this.ajaxCall();
    }

    public render(){
        return(
            <>
                <div>{this.state.loading}</div>
                {
                    this.state.loading === "Completed" && this.renderPersons()                    
                }
            </>
        );
    }
    private renderPersons(){
        return(
        <>
            <AppBar position="static">
                <div>
                    <SearchIcon />
                    <input type="text" onChange={(event)=>this.setState({search: event.target.value})} />
                </div>
                   
            </AppBar>
            
            <Grid container spacing={3}>
                {this.state.persons.filter(x => x.name.includes(this.state.search)).map(this.renderPerson)}
            </Grid>
        </>
        );
    }
    private renderPerson(person: IPerson, index: number){
        return(
            <>
            <div className="grid-item" key={index}>
                
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={person.avatar}
                            alt="person"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {person.name}
                            </Typography>
                            <Typography variant="body2">
                                {person.email}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            </>
        );
    }
}



/*

Problems with Class based Components -
1. Inheritance is difficult to debug
2. We need to remember Many Lifecycle Methods (Did Mount, did Update, ... etc)
3. We cannot share the lifecycle methods with different components. 
    In functional based components we can solve this by sharing hooks.
4. No need to extend React.Component

Why People prefer function based components?
1. No inheritance, inheritance is difficult to debug.
2. lifecycle methods too many --- elimineted by -- "useeffect" -- Will do componentDidMount & componentDidUpdate.
3. sharing code between 2 class based components is difficult.
    Sharing lifecycle methods is difficult. We can use function based components to share code by creating custom hooks.

    -- In function based components there is only one lifecycle method called "useeffect"


-- Hooks that are common. Hooks are methods/function and we need to invoke them to get a feature.
    1. useState - like IState
    2. useEffect - componentDidMount + componentDidUpdate
    3. useRef 
    4. useContext - implementing login page and need user ID
    5. useMemo
    6. useCallback
    7. useReducer

*/