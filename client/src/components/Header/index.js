import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import { useStoreContext } from '../../utils/GlobalStore';
import {Button} from "reactstrap"
import { AUTH_SET_LOGGED_OUT} from "../../utils/actions";
import PopLoggin from '../PopLoggin'
import Nav from "../Nav/index";
import './style.css';
import Counter from "../Counter";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
                    <div className="col-md-4 col-sm-12 col-12">
                        <Link to="/home">
                            <Image src={"../assets/logo.png"} alt={"sushi-junai logo"} width="40%"/>
                        </Link>
                    </div>
                    <div className="col col-md-4 col-sm-8 col-8">
                        <ul>
                            <li className={state.userLoggedIn ? "hide": ""}><PopLoggin/></li>
                            <li className={state.userLoggedIn ? "hide": ""}><PopSignUp/></li>
                            <li className={!state.userLoggedIn ? "hide": ""}>
                                <Button outline color="secondary" onClick={logout}>Logout</Button></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <Counter/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2 text-left">
                        <FontAwesomeIcon icon={faBars} />
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;