
import React, { useState } from 'react';
import Products from './Menu';
import Cart from '../components/Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
        (sum, { quantity }) => sum + quantity,
        0
        );
    };

    return (
        <div className="App">
        <header>
            <button onClick={() => navigateTo(PAGE_CART)}>
            Go to Order Summary ({getCartTotal()})
            </button>

            <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
            View Menu
            </button>
        </header>
        {page === PAGE_PRODUCTS && (
            <Products cart={cart} setCart={setCart} />
        )}
        {page === PAGE_CART && (
            <Cart cart={cart} setCart={setCart} />
        )}
        </div>
    );
}

export default App;