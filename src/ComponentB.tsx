import { useParams } from "react-router";

export default function ComponentB(){
    //useParams hook from react-router
    const {name} = useParams<{name:string}>();  //generic function and deconstruction concepts used
    return <div>{"component b file " + name}</div>;
}