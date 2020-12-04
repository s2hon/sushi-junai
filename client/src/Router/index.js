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
import Header from "../components/Header/index"

const AllRoute = () => { 

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/alacarte" component={Alacarte}/>
        <Route exact path="/ayce" component={AYCEMenu}/>
        <Route exact path="/choice" component={Choice}/>
        <Route exact path="/favorite" component={Favorite}/>
        <Route exact path="/ordersummary" component={OrderSummary}/> 
        <Route exact path="/Signup" component={Signup}/>            
        <Route exact path="/rules" component={Rules}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default AllRoute;
