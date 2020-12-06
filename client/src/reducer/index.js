import { combineReducers } from 'redux';
import menuCart from './menuCart';
import favCart from './favCart';
import clearCart from './clearCart';

const shoppingCartApp = combineReducers({
    menuCart,
    favCart,
    clearCart
    //add reducer from file
});

export default shoppingCartApp;