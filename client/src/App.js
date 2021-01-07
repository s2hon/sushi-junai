import React from "react";
import {saveState} from "./localstorage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import data from './db/menu.json';
import Home from "./pages/Home";
import Alacarte from "./pages/Alacarte";
import AYCEMenu from "./pages/AYCEMenu";
import OrderSummary from "./pages/OrderSummary";
import Dinein from "./pages/Dinein";
import Rules from "./pages/Rules";
import Drinks from "./pages/Drinks";
import LunchMenu from './pages/LunchMenu';
import StaticAYCEMenu from './pages/StaticAYCEMenu';
import Delivery from './pages/Delivery';
import ToGo from './pages/ToGo';
import Header from "./components/Header";
import Footer from './components/Footer';
import moment from "moment";
import ScrollToTop from "./components/ScrollToTop"

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
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/alacarte" component={Alacarte}/>
                        <Route exact path="/ayce" component={AYCEMenu}/>
                        <Route exact path="/dinein" component={Dinein}/>
                        <Route exact path="/ordersummary" component={OrderSummary}/>            
                        <Route exact path="/rules" component={Rules}/>
                        <Route exact path="/drinks" component={Drinks}/>
                        <Route exact path="/lunch" component={LunchMenu}/>
                        <Route exact path="/aycestatic" component={StaticAYCEMenu}/>
                        <Route exact path="/togo" component={ToGo}/>
                        <Route exact path="/delivery" component={Delivery}/>
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        </Provider>
    );
}

export default App;