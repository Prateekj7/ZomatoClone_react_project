import React from "react"

interface IProps{
    a: number;
}

interface IState{
    b:number;
}
export default class LifeCycle extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props); 
        this.state ={
            b:5
        }
        console.log("Life Cycle is invoked");
    }
    static getDerivedStateFromProps(props: IProps, state:IState){
        console.log("Lifecycle getDerivedStateFromProps invoked");
        return state;
    }
    public render(): JSX.Element{
        console.log("render invoked");
        
        return(
        <>
            <div>Life Cycle component</div>
            <div>
                {"props is " + this.props.a}
            </div>
            <div>
                {"state is " + this.state.b}
            </div>
            <button onClick={() => this.increment()}>
                increment by 1
            </button>
        </>
        );
    }
    private increment(){
        const p = this.state.b + 1
        this.setState({ b:p });
    }
    //API's should be mounted inside this because this is called only once.
    public componentDidMount(){
        console.log("componentDidMount invoked");
    }
    public shouldComponentUpdate(){
        console.log("shouldComponentUpdate invoked");
        return true;
    }
    public componentDidUpdate(){
        console.log("componentDidUpdate invoked");
        return true;
    }
    public getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate invoked");
        return true;
    }
}
//This is During updation
//getDerivedStateFromProps  --> shouldComponentUpdate --> render --> getSnapshotbeforUpdate --> 
//      component did update

//In initial stage
// Constructor --> getDerivedStateFromProps --> render --> ComponentDidMount
