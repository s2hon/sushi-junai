import { combineReducers } from 'redux';
import shoppingCart from './cart';
import itemListing from './listing';
import addFavorite from './favorite'

const shoppingCartApp = combineReducers({
    shoppingCart,
    itemListing,
    addFavorite
});

export default shoppingCartApp;