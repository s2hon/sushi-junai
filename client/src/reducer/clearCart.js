import {loadState} from "../localstorage";

const persistedState = loadState("clearCart");

const clearCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'CALCULATE_CART':{
            const { accumulativeTotal } = action.payload
            let newTotal;
            if (!state.length) {
                newTotal = accumulativeTotal
            }
            else {
                newTotal = parseFloat(state)+accumulativeTotal
            } 
            return newTotal;
        }
        default:
            return state
    }
};

export default clearCart;
