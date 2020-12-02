import React from 'react'
import {Link}  from 'react-router-dom'
import Header from '../Header/index'
import MobileNav from '../MobileNav/index'
import './style.css';
import Row from '../Row'

const Nav = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()}

  return(	
	  <div className="middle-header header-style-3">
      <Header/>
        <div className="container">
          <div className="header-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-4">
              </div>
              <div className="col-lg-8 d-lg-block d-none">
                <nav>
                  <ul>
                    <li>
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
                    <li>
                      <Link
                        to="/alacarte"
                        className={window.location.pathname === "/alacarte" ? "nav-link active" : "nav-link"}
                      >
                        A La Carte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ayce"
                        className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                      >
                        AYCE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ordersummary"
                        className={window.location.pathname === "/ordersummary" ? "nav-link active" : "nav-link"}
                      >
                        OrderSummary
                      </Link>
                    </li>
                    <li>                              
                      <Link
                        to="/favorites"
                        className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
                      >
                        Favorites
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-3 col-sm-3 col-3">
                <MobileNav/>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav;
