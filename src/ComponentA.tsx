import { useHistory } from "react-router-dom";

export default function ComponentA(){
    const history = useHistory();
    return (
    <>
    <div>component a file</div>
    <button onClick={() => history.goBack()}>go back</button>
    </>
    );
}