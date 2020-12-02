import React from "react";
import { useStoreContext } from "../utils/GlobalStore";
import {Route, useLocation, Redirect} from "react-router-dom";

function PrivateRoute({ children , ...rest}) {
    const [state, dispatch] = useStoreContext();
    const location = useLocation();
    const {from} = location.state || { from: {pathname: "/"}}

    return (
    <Route {...rest}
    render={(location.state)=>state.isLoggedIn ? (children) : 
    (<Redirect to={{pathname: "/login",state: {from: location}}}/>)}/>
    )
}

export default PrivateRoute;