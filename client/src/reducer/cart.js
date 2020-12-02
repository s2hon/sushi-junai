const decrementItem = (state = {}, action) => {
 
    return [];
};
const changeItem = (state = {}, action) => {

    return [];
};

const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const { item } = action.payload
            return [...state, {
                name: item.name,
                price: item.price,
                category: item.category
            }];
        case 'CHANGE_ITEM':
            return changeItem(state, action);
        case 'DECREMENT_ITEM':
            return decrementItem(state, action);
        default:
            return state
    }
};

export default shoppingCart;