import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav/index";

import Home from "../pages/Home";
import Alacarte from "../pages/Alacarte";
import AYCEMenu from "../pages/AYCEMenu";
import Favorite from "../pages/Favorite";
import OrderSummary from "../pages/OrderSummary";
import Signup from "../pages/Signup";
import Choice from "../pages/Choice";
import Rules from "../pages/Rules";
import Login from "../pages/Login";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <Nav toggleSidebar={toggleSidebar} />
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
    </Container>
);

export default Content;
