import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import {saveState, loadState} from "./localstorage";
import AllRoute from "./Router/index"

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
<<<<<<< HEAD
                <AllRoute/>
=======
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
>>>>>>> ebf7870dbf8daf9fbfb7ccd33a36e68c0d728b9f
            </Router>
        </Provider>
    );
}

export default App;