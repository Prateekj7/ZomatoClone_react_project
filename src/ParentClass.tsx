import React from "react"
import ChildAddition from "./ChildAddition";
import ChildIncrement from "./ChildIncrement";
import ClassAjax from "./ClassAjax";
import LifeCycle from "./LifeCycle";


// Example of Class Based Component
//React.Component<props, state> - 2 things as input
//props is way of accepting arguments

export default class ParentClass extends React.Component<{}, {}> {
    // constructor(props: {}){
    //     super(props); //invoking constructor of parent class
    // }
    public render(): JSX.Element{
        return(
        <>
            <div>learning class based components.</div>
            <ChildAddition a={10} b={20} />
            <ChildIncrement init={10}/>
            <LifeCycle a={200}/>
            <ClassAjax />
        </>
        )
    }
}

/*
Parent invokes the Child

return (
    <div>
    <Child a={5} b={10} />
    </div>
)
-- If the child component requires arguments like above.

Child - calculator - arguments number, number
interface IProps{
    a:number,
    b:number
}
child extends react.Components<IProps, {})

//props
-- way of sending data from parent classs to child class

//states

-- States are for passing variables from props to itself for further manipulation
*/