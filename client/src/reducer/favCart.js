import {loadState} from "../localstorage";

const persistedState = loadState("favCart");

const favCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'ADD_FAV_ITEM':
            const { item } = action.payload
            return [...state, {
                name: item.name,
                category: item.category
            }];
        default:
            return state
    }
};

export default favCart;