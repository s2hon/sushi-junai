import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";



function Nav (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/" id="name">
            <Image src={"../assets/logo.png"} alt={"sushi-junai logo"}/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Welcome
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/menu"
                  className={window.location.pathname === "/menu" ? "nav-link active" : "nav-link"}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item"> 
                <button className="headerButton">
                  <Link
                    to="/ordersummary"
                    className={window.location.pathname === "/ordersummary" ? "nav-link active" : "nav-link"}
                  >
                    Order Summary
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    

export default Nav;