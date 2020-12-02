import React from 'react';

const CartItem = (props) => {
    const { name, category, price } = props.item
    return (
        <div className="cartItem">
            <div className="cartItemName first">
                <span>
                    <span className="centerVertically">
                        {name}
                    </span>
                    <span className="centerVertically">
                        {category}
                    </span>
                </span>
                <span className="centerVertically" onClick={() => {}}>X</span>
            </div>
            <div className="cartItemQty second">
                1
            </div>
            <div className="cartItemNamePrice third">
                {price}
            </div>
        </div>
    )
};

export default CartItem;