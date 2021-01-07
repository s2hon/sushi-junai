import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import moment from "moment";
import ScrollToTop from "./components/ScrollToTop";

const store = createStore(reducer);
data.forEach((item) => store.dispatch({
    "type" : "ADD_LISTING",
    "item" : item
}));
store.subscribe(() => {
    saveState("menuCart", store.getState().menuCart)
    saveState("clearCart", store.getState().clearCart)
    saveState("oldCart", store.getState().oldCart)
    //add save state 
});

if (localStorage.getItem("date") !== moment().format('MMMM Do YYYY')) {
    localStorage.clear()
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <ScrollToTop>
                    <AllRouter />
                </ScrollToTop>
            </Router>
        </Provider>
    );
}

export default App;