import React from "react"

interface IProps{
    a: number;
    b: number;
}
export default class ChildAddition extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props); 
        console.log("child addition constructor is invoked");
    }
    public render(): JSX.Element{
        const sum = this.props.a + this.props.b;
        return(
        <>
            <div>child component</div>
            <div>
                {"addition is "+sum}
            </div>
        </>
        );
    }
}