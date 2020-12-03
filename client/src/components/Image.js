import React from "react";
    
function Image(props) {
    return (
        <img src={`${props.src}`} width={props.width} alt={`${props.alt}`}/>
    );
}

export default Image;