import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';


function Login() {

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [store, dispatch] = useStoreContext();//use dispatch to get info

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        API.login(loginData).then(response => {
            setShowError(false);
            const { email } = response.data;
            //could set local storage w/ email here
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            })
            history.push("/choice");
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred during login");
        })
        console.log("The globalStore: "+ JSON.stringify(store));
    }

    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="signup" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                    <br />
                </div>
            </div>    
            <div className="row">
                <p>Don't have an account? <Link to="/signup">Become a part of the Junai Fam</Link> </p>
            </div>           
            <div className="row">
                <p><Link to="/rules">Or continue as guest</Link> </p>
            </div>           
        </div>
    </React.Fragment>
    )
}

export default Login;