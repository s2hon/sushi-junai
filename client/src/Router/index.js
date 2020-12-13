import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Home from "../pages/Home/index";
import Alacarte from "../pages/Alacarte";
import AYCEMenu from "../pages/AYCEMenu";
import Favorite from "../pages/Favorite";
import OrderSummary from "../pages/OrderSummary";
import Signup from "../pages/Signup";
import Dinein from "../pages/Dinein";
import Rules from "../pages/Rules";
import Signin from "../components/SignIn";
import Drinks from "../pages/Drinks";
import Footer from "../components/Footer/index";
import LunchMenu from '../pages/LunchMenu';
import StaticAYCEMenu from '../pages/StaticAYCEMenu';
import SignupSignin from '../pages/SignupSignIn';
import Takeout from '../pages/Takeout';
import Header from "../components/Header";

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
        <Route exact path="/favorite" component={Favorite}/>
        <Route exact path="/ordersummary" component={OrderSummary}/> 
        <Route exact path="/Signup" component={Signup}/>            
        <Route exact path="/rules" component={Rules}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/drinks" component={Drinks}/>
        <Route exact path="/lunch" component={LunchMenu}/>
        <Route exact path="/aycestatic" component={StaticAYCEMenu}/>
        <Route exact path="/signinsignup" component={SignupSignin}/>
        <Route exact path="/takeout" component={Takeout}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default AllRoute;
