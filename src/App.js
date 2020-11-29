import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alacarte from "./pages/Alacarte";
import Menu from "./pages/Menu";
import Ayce from "./pages/AYCE";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/alacarte" component={Alacarte}/>
          <Route exact path="/menu" component={Menu}/> 
          <Route exact path="/ayce" component={Ayce}/> 
    </Router>
  );
}

export default App;
