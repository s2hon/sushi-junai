import { combineReducers } from 'redux';
import menuCart from './menuCart';
import clearCart from './clearCart';
import oldCart from './oldCart';

const showNotification = (state=false, action) => {
    if(action.type === "SHOW_NOTIFICATION")
        state = true;
    else if(action.type === "REMOVE_NOTIFICATION")
        state = false;
    return state;
};

const shoppingCartApp = combineReducers({
    oldCart,
    menuCart,
    clearCart,
    showNotification
});

export default shoppingCartApp;