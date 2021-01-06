import {loadState} from "../localstorage";

const persistedState = loadState("oldCart");

const oldCart = (state=persistedState || [], action) => {
    switch (action.type) {
        case 'SAVE_PAST_CART':{
            const { menuCart } = action.payload

            const convertArrayToObject = (array, key) => {
                const initialValue = {};
                return array.reduce((obj, item) => {
                    return {
                        ...obj,
                        [key]: item
                    };
                }, initialValue);
            };

            if (!state.length) {
                state = menuCart
            }
            else {
                const combinedArray = [...state, ...menuCart]
                const itemsObj = convertArrayToObject(combinedArray, "name")

                for (let i = 0; i < combinedArray.length; ++i) {
                    const name = combinedArray[i].name
                    if (itemsObj[name] === undefined) {
                        itemsObj[name] = combinedArray[i]
                    } else {
                        const newQuantity = itemsObj[name].quantity + combinedArray[i].quantity
                        itemsObj[name].quantity = newQuantity
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
