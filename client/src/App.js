import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState} from "./localstorage";
import AllRoute from './Router/index'

const store = createStore(reducer);
data.forEach((item) => store.dispatch({
    "type" : "ADD_LISTING",
    "item" : item
}));
store.subscribe(() => {
    saveState("menuCart", store.getState().menuCart)
    saveState("favCart", store.getState().favCart)
});

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AllRoute/>
            </Router>
        </Provider>
    );
}

export default App;