import React from "react";
import { Link } from "react-router-dom";
import Image from "./../Image";
import { useStoreContext } from '../../utils/GlobalStore';
import "./style.css";


function Nav (props) {
    const [state] = useStoreContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/" id="name">
            <Image src={"../assets/logo.png"} alt={"sushi-junai logo"}/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse">
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/alacarte"
                  className={window.location.pathname === "/alacarte" ? "nav-link active" : "nav-link"}
                >
                  A La Carte
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/menu"
                  className={window.location.pathname === "/menu" ? "nav-link active" : "nav-link"}
                >
                  AYCE
                </Link>
              </li>
              <li className={!state.userLoggedIn ? "nav-item hide": "nav-item"}>
                <Link
                  to="/logout"
                  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                >
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/favorites"
                  className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
                >
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ordersummary"
                  className={window.location.pathname === "/ordersummary" ? "nav-link active" : "nav-link"}
                >
                  OrderSummary
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    

export default Nav;