import {loadState} from "../localstorage";
import menuCart from "./menuCart";

const persistedState = loadState("oldCart");

const oldCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'SAVE_PAST_CART':{
            const { menuCart } = action.payload
            if (!state.length) {
                state = menuCart
            }
            else {
                const combined = [...state, ...menuCart]

                const itemsObj = {}
                combined.reduce(((key) => itemsObj[key] = itemsObj), {})
                console.log(itemsObj)

                for (let i = 0; i < combined.length; ++i) {
                    const name = combined[i].name
                    if (itemsObj[name] === undefined) {
                        itemsObj[name] = combined[i]
                    } else {
                        const newQuantity = itemsObj[name].quantity + combined[i].quantity
                        itemsObj[name].quantity = newQuantity
                        console.log(itemsObj)
                    }
                }

                state = Object.keys(itemsObj).map(key => {
                    return itemsObj[key];
                })
            }
        } 
        default:
            return state
    }
}
export default oldCart;
