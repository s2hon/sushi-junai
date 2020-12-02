import React from "react";


function Image(props) {
    return (
        <img width="100%" src={`${props.src}`} alt={`${props.alt}`} />
    );
}

export default Image;