import React from "react";

function Overlay(props) {

    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p className="overlay-description">
                        Please log in with your personal info<br />
                    </p>
                    <button
                        className="ghost form-button"
                        id="signIn"
                        onClick={props.toggle}
                    >Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p className="overlay-description">
                        Enter your personal details and start saving your favorite items!<br />
                    </p>
                    <button
                        className="ghost form-button"
                        id="signUp"
                        onClick={props.toggle}
                    >Sign Up</button>
                </div>
            </div>
        </div>
    )

}

export default Overlay;