import { useHistory } from "react-router";

export default function ComponentC(){
    const history = useHistory();
    return (
    <>
    <div>component c file</div>
    <button onClick={() => history.push('/a')}>go to a</button>
    </>
    );
}