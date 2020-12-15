import { combineReducers } from 'redux';
import menuCart from './menuCart';
import favCart from './favCart';
import clearCart from './clearCart';
import oldCart from './oldCart';

const shoppingCartApp = combineReducers({
    oldCart,
    menuCart,
    clearCart,
    favCart
    //add reducer from file
});

export default shoppingCartApp;