import {loadState} from "../localstorage";

const persistedState = loadState("menuCart");

const menuCart = (state = persistedState || [], action) => {
    switch (action.type) {
        case 'ADD_MENU_ITEM': {
            const { item } = action.payload
            const findItem = state.find( x => x.name == item.name)
            if (findItem) {
                if (findItem !== "Beef" 
                || "Screaming \"O\" (3/8 pcs)" 
                || "White \"O\" (3/8 pcs)" 
                || "Conch (Makigai)"
                || "Tako Wasabi"
                || "Sweet Shrimp (Ama Ebi)"
                || "Sashimi Special (4 pcs)"
                || "Mochi Ice Cream") {
                    return state.map(x => {
                        if (x.name == item.name) x.quantity++
                        return x
                    })
                }
                else {
                
            }
            }
            else {
                return [...state, {
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    quantity: 1
                }];
            }
        }
        case 'INCREMENT_MENU_ITEM': {
            const { item } = action.payload
                return state.map(x => {
                    if (x.name == item.name) x.quantity++
                    return x
                })
        }
        case 'DECREMENT_MENU_ITEM': {
            const { item } = action.payload
                if (item.quantity > 1){
                    return state.map(x => {
                        if (x.name == item.name) x.quantity--
                        return x
                    })
                }
                else {
                    return state.filter(x => x.name !== item.name) 
                }
            }
        case 'DELETE_MENU_ITEM': {
            const { item } = action.payload
            return state.filter(x => x.name !== item.name) 
        }
        case 'CLEAR_CART':{
            return [];
        }
        default:
            return state
    }
};

export default menuCart;