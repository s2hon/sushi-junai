import { combineReducers } from 'redux';
import menuCart from './menuCart';
import favCart from './favCart'

const shoppingCartApp = combineReducers({
    menuCart,
    favCart
});

export default shoppingCartApp;