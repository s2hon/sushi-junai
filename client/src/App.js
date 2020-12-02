import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState, loadState} from "./localstorage";

import Home from "./pages/Home";
import Alacarte from "./pages/Alacarte";
import AYCEMenu from "./pages/AYCEMenu";
import Favorite from "./pages/Favorite";
import OrderSummary from "./pages/OrderSummary";
import Signup from "./pages/Signup";
import Choice from "./pages/Choice";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
 

const persistedState = loadState("shoppingCart");
const store = createStore(reducer, {shoppingCart: persistedState});
data.forEach((item) => store.dispatch({
    "type" : "ADD_LISTING",
    "item" : item
}));
store.subscribe(() => {
    saveState("shoppingCart", store.getState()["shoppingCart"])
});



function App() {
    return (
        <Provider store={store}>
            <Router itemListing = {store.getState()["itemListing"]}>
                <AllRoute/>
            </Router>
        </Provider>
    );
}

export default App;