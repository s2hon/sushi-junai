import {loadState} from "../localstorage";

const persistedState = loadState("menuCart");

const menuCart = (state = persistedState || [], action) => {
    switch (action.type) {
        case 'ADD_MENU_ITEM':
            const { item } = action.payload
            console.log(state);
            return [...state, {
                name: item.name,
                price: item.price,
                category: item.category
            }];
        default:
            return state
    }
};

export default menuCart;