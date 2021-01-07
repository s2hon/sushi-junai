
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Alacarte from "../pages/Alacarte";
import AYCEMenu from "../pages/AYCEMenu";
import OrderSummary from "../pages/OrderSummary";
import Dinein from "../pages/Dinein";
import Rules from "../pages/Rules";
import Drinks from "../pages/Drinks";
import LunchMenu from '../pages/LunchMenu';
import StaticAYCEMenu from '../pages/StaticAYCEMenu';
import Delivery from '../pages/Delivery';
import ToGo from '../pages/ToGo';
import Header from "../components/Header";
import Footer from '../components/Footer';

const AllRoute = () => { 

    return (
        <div id="top">
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
        </div>
    );
}

export default AllRoute;