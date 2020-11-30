import React from "react";

function MenuItems(props) {
    return (
        <>
        <h5>{props.name}</h5>
        <h6>{props.price}</h6>
        <p>{props.description}</p>
        {props.children}
        </>
    )
}

export default MenuItems;