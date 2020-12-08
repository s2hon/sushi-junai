import { combineReducers } from 'redux';
import menuCart from './menuCart';
import favCart from './favCart';
import clearCart from './clearCart';

const showNotification = (state=false, action) => {
    if(action.type === "SHOW_NOTIFICATION")
        state = true;
    else if(action.type === "REMOVE_NOTIFICATION")
        state = false;
    return state;
};

const shoppingCartApp = combineReducers({
    menuCart,
    favCart,
    clearCart,
    showNotification
    //add reducer from file
});

export default shoppingCartApp;