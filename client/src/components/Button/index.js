import React from "react";
import "./button.css";

function Button(props) {
    return (
        <button type={`${props.type}`} className={`${props.btn}`} onClick={props.function}><i className={`${props.icon}`}></i>{props.children}</button>
    );
}

export default Button;