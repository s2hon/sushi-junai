import React from "react";


function Button(props) {
    return (
        <button type={`${props.type}`} className={`${props.btn}`}><i className={`${props.icon}`} onClick={`${props.function}`}></i>{props.children}</button>
    );
}

export default Button;