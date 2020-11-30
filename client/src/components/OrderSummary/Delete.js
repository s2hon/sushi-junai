import React from 'react';
import PropTypes from 'prop-types';
import OrderItems from './Items';

const Cart = ({ items, total, currency, removeFromOrder }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="ordersummary">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="order__body">
                                {items.map(item => (
                                    <OrderItems key={item.id} {...item} onClick={() => removeFromOrder(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="order__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromOrder: PropTypes.func.isRequired
}

export default Cart;