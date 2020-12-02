export const addItem = item => {
    return {
        type: 'ADD_ITEM',
        payload: { item }
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