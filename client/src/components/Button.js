import React from "react";


function Button(props) {
    return (
        <button type={`${props.type}`} className={`${props.btn}`}>{props.children}</button>
    );
}

export default Button;