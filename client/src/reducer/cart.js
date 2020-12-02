const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const { item } = action.payload
            return [...state, {
                name: item.name,
                price: item.price,
                category: item.category
            }];
        default:
            return state
    }
};

export default shoppingCart;