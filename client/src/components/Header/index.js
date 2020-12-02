import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'
import Image from "./../Image";

const Header = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="logo">
                        <Link className="navbar-brand" to="/" id="name">
                            <Image src={"../assets/logo.png"} alt={"sushi-junai logo"}/>
                        </Link>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                                {/* <li className={!state.userLoggedIn ? "nav-item hide": "nav-item"}>
                                    <Link
                                        to="/logout"
                                        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                                    >
                                        Logout
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;