import React from "react";

function MenuItems(props) {
    return (
        <>
        <div className="col">
            <h5 className={props.oncePerOrder}>{props.name}<i className={`${props.fish}`}></i></h5>
        </div>
        <div className="col">
            <h6>{props.price}</h6>
        </div>
        <div className="col">
            <p>{props.description}</p>
        </div>
        {props.children}
        </>
    )
}

export default MenuItems;