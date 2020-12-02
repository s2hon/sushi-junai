import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

function Cart(props) {
    const { shoppingCart } = props
    const total = shoppingCart.reduce((acc, val) => acc + val.price, 0)
    const count = shoppingCart.length
    if (!count) return <h1>get some sushi and order with a dining staff!</h1>

    return (
        <div className="cart">
            <div className="cartRow">
                <div className="cartRowflex">
                    <div className="cartLeft">
                        <div className="cartHeader">
                            <Link to="/" className="backButton">{"<"}</Link>
                            <span className="cartHeading">Order Summary</span>
                        </div>
                        <div className="cartSummary">
                            <span className="first">Items ({count})</span>
                            <span className="second">Qty</span>
                            <span className="third">Price</span>
                        </div>
                        <div className="cardTable">
                            {shoppingCart.map((item, idx) => <CartItem key={idx} item={item} />)}
                        </div>
                    </div>
                    <div className="cartRight">
                        <div className="cartRightTop">
                            <div className="summaryHeader">Total</div>
                            <div className="price total">
                                <span>Items ({count}) : ${total}</span>
                            </div>
                        </div>
                        <div className="price orderTotal">
                            <span className="centerVertically">
                                You just saved:
                            </span>
                            <span className="centerVertically">
                                ${total-32.95}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;