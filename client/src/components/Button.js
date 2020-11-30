import React from "react";


function Button(props) {
    return (
        <button type={`${props.type}`} className={`${props.btn}`} onClick={`${props.function}`}><i className={`${props.icon}`}></i>{props.children}</button>
    );
}

export default Button;