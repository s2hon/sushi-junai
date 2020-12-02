import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState, loadState} from "./localstorage";

import AllRoute from './Router/index'

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