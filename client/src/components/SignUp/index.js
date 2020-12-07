import React, {useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { AUTH_SET_LOGGED_IN } from "../../utils/actions";
import { useStoreContext } from '../../utils/GlobalStore';

function  SignUp () {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSignup = (event) => {
        event.preventDefault();
        const signupData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        console.log(signupData);
        API.signup(signupData).then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            });
            history.push("/choice")
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred while signing up");
        })
    }

    return (
        <div className="form-container sign-up-container">
            <form className="signupform" onSubmit={handleSignup}>
                <h1 className="form-title">Hello, Friend!</h1>

                <input className="inputsignin" type="text" placeholder="Sign Up" />
                <input className="inputsignin" type="email" placeholder="Email" ref={emailRef}/>
                <input className="inputsignin" type="password" placeholder="Password" ref={passwordRef}/>
                <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                </div>
                <button className="form-button">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;