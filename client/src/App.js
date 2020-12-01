import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alacarte from "./pages/Alacarte";
import Menu from "./pages/Menu";
import Favorite from "./pages/Favorite";
import OrderSummary from "./pages/OrderSummary";
import Signup from "./pages/Signup";
import Choice from "./pages/Choice";
import Rules from "./pages/Rules";


function App() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/alacarte" component={Alacarte}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/choice" component={Choice}/>
            <Route exact path="/favorite" component={Favorite}/>
            <Route exact path="/ordersummary" component={OrderSummary}/> 
<<<<<<< HEAD
            <Route exact path="/rules" component={Rules}/>
=======
            <Route exact path="/SignUp" component={Signup}/>
>>>>>>> 079760bb209dd98eef1de4588bcf230840868996
        </Router>
    );
}

export default App;