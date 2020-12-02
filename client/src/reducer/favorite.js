const addFavorite = (state = [], action) => {
    switch(action.type) {
        case 'ADD_FAVORITE':
        return action.payload
    default:
        return state
    }
};

export default addFavorite;