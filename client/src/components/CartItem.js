import React from 'react';

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <div className="cartItemName first">
                <span>
                    <span className="centerVertically">
                        {props.name}
                    </span>
                    <span className="centerVertically">
                        {props.category}
                    </span>
                </span>
                <span className="centerVertically" onClick={() => props.removeItem(props.id)}>X</span>
            </div>
            <div className="cartItemQty second">
                {props.quantity}
            </div>
            <div className="cartItemNamePrice third">
                ${props.quantity*props.price}
            </div>
        </div>
    )
};

export default CartItem;