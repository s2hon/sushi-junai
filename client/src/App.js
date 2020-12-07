import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState} from "./localstorage";
import AllRouter from "./Router/index";
import moment from "moment";

const store = createStore(reducer);
data.forEach((item) => store.dispatch({
    "type" : "ADD_LISTING",
    "item" : item
}));
store.subscribe(() => {
    saveState("menuCart", store.getState().menuCart)
    saveState("clearCart", store.getState().clearCart)
    saveState("favCart", store.getState().favCart)
    //add save state 
});

if (localStorage.getItem("date") !== moment().format('MMMM Do YYYY')) {
    localStorage.clear()
}


function App() {

    return (
        <Provider store={store}>
            <Router>
                <AllRouter />
            </Router>
        </Provider>
    );
}

export default App;