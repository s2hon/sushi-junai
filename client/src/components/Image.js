import React from "react";


function Image(props) {
    return (
        <img src={`${props.src}`} alt={`${props.alt}`}>{props.children}</img>
    );
}

export default Image;