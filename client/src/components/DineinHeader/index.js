import React from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import Lunch from "./LunchButton"
import MobileNav from "../DineinMobileNav/index";
import moment from "moment";
import './style.css';

const Header = () => {
    const currentHour = moment().format("HH");
    const currentDay = moment().day();

    return(	
	<div className="middle-header">
        <div className="container">
            <div className="header-content">
            <div className="row">
                <div className="col-lg-4 col-md-10 col-sm-10 col-10">
                    <div className="logo">
                        <Link to="" title="">
                            <Image className="center-block" src={"../assets/logo.png"} alt={"sushi-junai logo"} width="175px"/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                            <li>
                                <Link title="">Menu</Link>
                                <ul>
                                    <li><Link to="/dinein-drinks" title="">Drinks</Link></li>
                                    {currentHour<15 && (currentDay % 6 !== 0) ? <Lunch /> : ""}
                                    <li><Link to="/dinein-alacarte" title="">À La Carte</Link></li>
                                    <li><Link to="/rules" title="">All You Can Eat</Link></li>
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