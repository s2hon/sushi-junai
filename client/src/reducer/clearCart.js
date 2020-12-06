import {loadState} from "../localstorage";

const persistedState = loadState("clearCart");

const clearCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'CLEAR_CART':{
            const { cartTotal } = action.payload
            return [...state, cartTotal]
        }
        default:
            return state
    }
};

export default clearCart;
