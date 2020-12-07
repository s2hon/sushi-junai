import {loadState} from "../localstorage";

const persistedState = loadState("clearCart");

const clearCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'CLEAR_CART':{
            const { accumulativeTotal } = action.payload
            const newTotal = parseFloat(state)+accumulativeTotal
            return newTotal;
        }
        default:
            return state
    }
};

export default clearCart;
