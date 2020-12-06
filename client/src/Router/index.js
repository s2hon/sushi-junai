import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Alacarte from "../pages/Alacarte";
import AYCEMenu from "../pages/AYCEMenu";
import Favorite from "../pages/Favorite";
import OrderSummary from "../pages/OrderSummary";
import Signup from "../pages/Signup";
import Choice from "../pages/Choice";
import Rules from "../pages/Rules";
import Login from "../pages/Login";
import Drinks from "../pages/Drinks"
import Header from "../components/Header/index";
import Footer from "../components/Footer/index"
import LunchMenu from '../pages/LunchMenu';
import StaticAYCEMenu from '../pages/StaticAYCEMenu';

const AllRoute = () => { 

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/alacarte" component={Alacarte}/>
        <Route exact path="/ayce" component={AYCEMenu}/>
        <Route exact path="/dinein" component={Choice}/>
        <Route exact path="/favorite" component={Favorite}/>
        <Route exact path="/ordersummary" component={OrderSummary}/> 
        <Route exact path="/Signup" component={Signup}/>            
        <Route exact path="/rules" component={Rules}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/drinks" component={Drinks}/>
        <Route exact path="/lunch" component={LunchMenu}/>
        <Route exact path="/aycestatic" component={StaticAYCEMenu}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default AllRoute;
