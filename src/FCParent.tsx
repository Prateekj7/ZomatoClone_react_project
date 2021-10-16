import { useState } from "react";

interface IProps{
    initNum: number;
}

export default function FCParent(){
    const [currentValue, setCurrentValue] = useState(""); //initial value in useState
    const [num, setNum] = useState(1);

    return(
        <>
            <input type="textbox" onChange={(event) => setCurrentValue(event.target.value)}/>
            <label>{currentValue}</label>
            <div>
                <button onClick={() => setNum(num+1)}>increment by 1</button>
                <label htmlFor="">{num}</label>
            </div>
        </>
    );
}

/*
useState returns an array. So in [currentValue, setCurrentValue] --> currentValue is the 0th index current value.
and setCurrentValue is the setter for changing the values of currentValue. 


Below is giving initial value using props.
*/


export function FCChild(props: IProps){
    const [currentValue, setCurrentValue] = useState(""); //initial value in useState
    const [num, setNum] = useState(props.initNum);

    return(
        <>
            <input type="textbox" onChange={(event) => setCurrentValue(event.target.value)}/>
            <label>{currentValue}</label>
            <div>
                <button onClick={() => setNum(num+1)}>increment by 1</button>
                <label htmlFor="">{num}</label>
            </div>
        </>
    );
}

/*
useEffect is another hook which combines both DidMount & DidUpdate

componentDidMount = only 1 time during its life cycle during 1st render
componentDidUpdate = from 2nd re-render onwards, unlimited time. Only occur when update in state or props
*/

