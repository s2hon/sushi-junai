import React from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import { useStoreContext } from '../../utils/GlobalStore';
import Button from "../Button"
import { AUTH_SET_LOGGED_OUT} from "../../utils/actions";
import PopLoggin from '../PopLoggin'
import Nav from "../Nav/index";
import './style.css';
import Counter from "../Counter";
import PopSignUp from "../PopSignUp";


function Header (props) {
    const [state, dispatch] = useStoreContext();
    // const history = useHistory();

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
                        <div className="col-2">
                            <Nav/>
                        </div>
                        <div className="col-6">
                            <Link to="/home">
                                <Image src={"../assets/logo.png"} alt={"sushi-junai logo"} width="175px"/>
                            </Link>
                        </div>
                        
                        
                        <div className="col-2 text-right">
                            <ul>
                                <li className={state.userLoggedIn ? "hide": ""}><PopLoggin/></li>
                                <li className={state.userLoggedIn ? "hide": ""}><PopSignUp/></li>
                                <li className={!state.userLoggedIn ? "hide": ""}>
                                    <Button type="button" btn="btn btn1" onClick={logout}>Logout</Button></li>
                            </ul>
                            <Counter className="counter"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Header;