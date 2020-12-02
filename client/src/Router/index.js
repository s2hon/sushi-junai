import React from 'react';
import {BrowserRouter as Switch, Route } from 'react-router-dom'

import Home from "../pages/Home";
import Alacarte from "../pages/Alacarte";
import VisibleItemList from "../pages/Ayce";
import Favorite from "../pages/Favorite";
import VisibleCart from "../pages/OrderSummary";
import Signup from "../pages/Signup";
import Choice from "../pages/Choice";
import Rules from "../pages/Rules";
import Login from "../pages/Login"; 

const AllRoute = () => { 

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/alacarte" component={Alacarte}/>
        <Route exact path="/ayce" component={VisibleItemList}/>
        <Route exact path="/menu" component={Choice}/>
        <Route exact path="/favorite" component={Favorite}/>
        <Route exact path="/ordersummary" component={VisibleCart}/> 
        <Route exact path="/SignUp" component={Signup}/>
        <Route exact path="/rules" component={Rules}/>
      </Switch>
    </div>
  );
}

export default AllRoute;
