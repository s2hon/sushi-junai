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

export const removeItem = (item) => {
    return {
        type: 'REMOVE_LISTING',
        payload: { item }
    }
};

export const addFavorite = (favoriteData) => ({
    type: 'ADD_FAVORITE',
    payload: favoriteData,
})