import { Redirect, Route, Switch } from "react-router-dom";
import ClassSearch from "./ClassSearch";
import ComponentC from "./ComponenetC";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import FCParent, { FCChild } from "./FCParent";
import FunctionSearch from "./FCSearch";
import LoadingSpinner from "./LoadingSpinner";
import ParentClass from "./ParentClass";
import ReactHookUI from "./ReactHookUI";
import UseContextEx from "./UseContextEx";
import UseEffectMount from "./UseEffectMount";
import UseEffectUpdate from "./UseEffectUpdate";
import UseRefEx from "./UseRefEx";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Home from "./Home";
import StoreData from "./StoreData";
import UsersReducersUI from "./UsersReducersUI";
import CheckReducer from "./CheckReducer";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function App() {
  const userContext = useContext(UserContext);
  const renderProfile = () => {
    if(userContext && userContext.uid) return <Profile />
    return <Redirect to="/Home" />
  }

  return (
    <Switch>

      {/* simple routing */}
      <Route path={'/a'} component={ComponentA} exact={true}></Route>
      {/* routing with variables */}
      <Route path={'/b/:name'} component={ComponentB} exact={true}></Route>
      {/* history object - back and push */} 
      <Route path={'/c'} component={ComponentC} exact={true}></Route>

      {/* simple class based component */}
      <Route path={'/classBased'} component={ParentClass} exact={true}></Route>
      <Route path={'/ClassSearch'} component={ClassSearch} exact={true}></Route>

      {/* simple function based component */}
      <Route path={'/functionBased'} component={FCParent} exact={true}></Route>
      {/* this below uses props for function based components */}
      <Route path={'/functionChildBased'} render={() => <FCChild initNum={10} />} exact={true}></Route> 
      <Route path={'/FunctionSearch'} component={FunctionSearch} exact={true}></Route>
      <Route path={'/UseEffectMount'} component={UseEffectMount} exact={true}></Route>
      <Route path={'/UseEffectUpdate'} component={UseEffectUpdate} exact={true}></Route>
      <Route path={'/UseContextEx'} component={UseContextEx} exact={true}></Route>
      <Route path={'/UseRefEx'} component={UseRefEx} exact={true}></Route>

      {/* redux class */}
      <Route path={'/StoreData'} component={StoreData} exact={true}></Route>
      <Route path={'/UsersReducersUI'} component={UsersReducersUI} exact={true}></Route>
      <Route path={'/CheckReducer'} component={CheckReducer} exact={true}></Route>

      {/* Libraries */}
      <Route path={'/ReactHookUI'} component={ReactHookUI} exact={true}></Route>
      <Route path={'/LoadingSpinner'} component={LoadingSpinner} exact={true}></Route>

      {/* ui project */}
      <Route path={'/Login'} component={Login} exact={true}></Route>
      <Route path={'/SignUp'} component={SignUp} exact={true}></Route>
      <Route path={'/Profile'} render={renderProfile} exact={true}></Route>
      <Route path={'/Home'} component={Home} exact={true}></Route>
      <Route path={'/'} render={() => <Redirect to="/Home" />} exact={true}></Route>


    </Switch>
  );
}

/*
b ---> a
change urls using history
*/