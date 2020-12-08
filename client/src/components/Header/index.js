import React, { useEffect } from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import { useStoreContext } from '../../utils/GlobalStore';
import Button from "../Button"
import { AUTH_SET_LOGGED_OUT} from "../../utils/actions";
import Nav from "../Nav/index";
import './style.css';


function Header (props) {
    const [state, dispatch] = useStoreContext();
    
    //handles the logout
    const logout = () => {
        dispatch({
            type: AUTH_SET_LOGGED_OUT
        })
    }
    
        return (
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Nav/>
                        </div>
                        <div className="col-6">
                            <Link to="/home">
                                <Image className="center-block" src={"../assets/logo.png"} alt={"sushi-junai logo"} width="175px"/>
                            </Link>
                        </div>
                        <div className="col-sm-3 col-xs-12 text-right">
                            <ul>
                                <li className={state.userLoggedIn ? "hide": ""}>
                                    <Link to="/signinsignup">
                                        <Button type={"button"} btn={"btn btn1"}>Login/Signup</Button>
                                    </Link>
                                </li>
                                <li className={!state.userLoggedIn ? "hide": ""}>
                                    <Button type={"button"} btn={"btn btn1"} onClick={logout}>Logout</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Header;