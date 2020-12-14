import {loadState} from "../localstorage";

const persistedState = loadState("oldCart");

const oldCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'SAVE_PAST_CART':{
            const { menuCart } = action.payload
            if (!state.length) {
                state = menuCart
            }
            else {
                return [...state, ...menuCart]
            } 
        }
        default:
            return state
    }
}
export default oldCart;
