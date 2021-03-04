import React from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import MobileNav from "../MobileNav/index";
import './style.css';

const Header = () => {
    
    return(	
	<div className="middle-header">
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
                                <Link to="/home" title="">Home</Link>
                            </li>
                            <li>
                                <Link title="">Menu</Link>
                                <ul>
                                    <li><Link to="/drinks" title="">Drinks</Link></li>
                                    <li><Link to="/lunch" title="">Lunch Specials (Mon-Fri)</Link></li>
                                    <li><Link to="/alacarte" title="">À La Carte</Link></li>
                                    <li><Link to="/aycestatic" title="">All You Can Eat</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/togo" title="">Carry Out</Link>
                            </li>
                            <li>
                                <Link to="/delivery" title="">Delivery</Link>
                            </li>
                            <li>
                                <Link title="">Dine In</Link>
                                <ul>
                                    <li><Link to="/dinein" title="">Click Here if you're at Sushi Junai & ready to roll!</Link></li>
                                </ul>
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