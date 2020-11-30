import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";



function Nav (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/" id="name">
            <Image src={"./assests/logo.png"} alt={"fish logo for restraunt"} style={{height: "100px",
      width: "100px"}}/>
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
                  to="/alacarte"
                  className={window.location.pathname === "/alacarte" ? "nav-link active" : "nav-link"}
                >
                  AlaCarte
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
                <Link
                  to="/ayce"
                  className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                >
                  AYCE
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    

export default Nav;