import React, {useState} from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Overlay from "../../components/Overlay";

import "./style.css";

function SignupSignin () {
    const [rightPanelActive, setRightPanelActive] = useState(false);

    const toggle = () => {
        setRightPanelActive(!rightPanelActive)
    };

    return(<>
    <Counter/>
        <div
            className={`containersignup ${rightPanelActive ? `right-panel-active` : ``}`}
            id="container"
        >
            <SignUp />
            <SignIn />
            <Overlay
                toggle={toggle}
            />
        </div>
        </>
    ) 

}

export default SignupSignin;