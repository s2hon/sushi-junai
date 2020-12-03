import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState} from "./localstorage";

import Home from "./pages/Home";
import Alacarte from "./pages/Alacarte";
import AYCEMenu from "./pages/AYCEMenu";
import Favorite from "./pages/Favorite";
import OrderSummary from "./pages/OrderSummary";
import Signup from "./pages/Signup";
import Choice from "./pages/Choice";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
 

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
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/alacarte" component={Alacarte}/>
                <Route exact path="/menu" component={AYCEMenu}/>
                <Route exact path="/choice" component={Choice}/>
                <Route exact path="/favorite" component={Favorite}/>
                <Route exact path="/ordersummary" component={OrderSummary}/> 
                <Route exact path="/Signup" component={Signup}/>            
                <Route exact path="/rules" component={Rules}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        </Provider>
    );
}

export default App;