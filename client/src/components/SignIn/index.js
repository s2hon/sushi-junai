import React, {useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { AUTH_SET_LOGGED_IN } from "../../utils/actions";
import { useStoreContext } from '../../utils/GlobalStore';

function SignIn () {
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
        console.log("The globalStore: "+ store);
    }

    return (
        <div className="form-container sign-in-container">
            <form className="signupform" onSubmit={handleLogin}>
                <h1 className="form-title">Welcome Back!</h1>

                <input className="inputsignin" type="email" placeholder="email" ref={emailRef}/>
                <input className="inputsignin" type="password" placeholder="password" ref={passwordRef} />

                <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                </div>

                <button className="form-button">sign in</button>
                {/* <a className="find-password" href="#">forgot password</a> */}
            </form>
        </div>
    )
}

export default SignIn;