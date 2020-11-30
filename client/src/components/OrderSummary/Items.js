import React from "react";

const OrderItems = ({props}) => {
    return (
        <div className="order-item">
            <div>
                <button className="btn btn-danger" onClick={props.onClick}>-</button>
                <span className="order-item-name">{props.name}</span>
            </div>
            <div className="order-item-price">{props.price} {props.currency}</div>
        </div>
    )
}

export default OrderItems;