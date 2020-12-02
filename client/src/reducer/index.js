import { combineReducers } from 'redux';
import shoppingCart from './cart';
import itemListing from './listing';

const shoppingCartApp = combineReducers({
    shoppingCart,
    itemListing
});

export default shoppingCartApp;