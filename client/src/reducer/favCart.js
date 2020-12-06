import {loadState} from "../localstorage";

const persistedState = loadState("favCart");

const favCart = (state=persistedState || [], action) => {
    switch (action.type) {

        
        default:
            return state
    }
};

export default favCart;