export const addItem = id => {
    return {
        type: 'ADD_ITEM',
        item: {
            id: id
        }
    }
};


export const changeQuantity = (id, quantity) => {
    return {
        type: 'CHANGE_ITEM',
        item: {
            id: id,
            quantity: quantity
        }
    }
};

export const decrementItem = (id) => {
    return {
        type: 'DECREMENT_ITEM',
        item: {
            id: id
        }
    }
};