import React from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import MobileNav from "../MobileNav/index";
import './style.css';

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(	
	<div className="middle-header header-style-3">
        <div className="container">
            <div className="header-content">
            <div className="row">
                <div className="col-lg-4 col-md-10 col-sm-10 col-10">
                    <div className="logo">
                        <Link to="/home" title="">
                            <Image className="center-block" src={"../assets/logo.png"} alt={"sushi-junai logo"} width="175px"/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                            <li>
                                <Link className="active" to="/home" title="">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu" title="">Menu</Link>
                                <ul>
                                    <li><Link to="/drinks" title="">Drinks</Link></li>
                                    <li><Link to="/lunch" title="">Lunch Specials (Mon-Fri)</Link></li>
                                    <li><Link to="/alacarte" title="">À La Carte</Link></li>
                                    <li><Link to="/aycestatic" title="">All You Can Eat</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/reservation" title="">Reservation</Link>
                            </li>
                            <li>
                                <Link to="/takeout" title="">Take out</Link>
                            </li>
                            <li>
                                <Link to="/about" title="">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileNav/>
                </div>
            </div>
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;