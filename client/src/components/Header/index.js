import React from 'react';
import {Link}  from 'react-router-dom';
import Image from "./../Image";
import { useStoreContext } from '../../utils/GlobalStore';
import { AUTH_SET_LOGGED_OUT} from "../../utils/actions";
import Nav from "../Nav/index";
import './style.css';
import Counter from "../Counter";

function Header (props) {
    const [state, dispatch] = useStoreContext();
    // const history = useHistory();

    // //handles the logout
    // const logout = () => {
    //     dispatch({
    //         type: AUTH_SET_LOGGED_OUT
    //     })
    //     history.push("/")
    // }

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
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                            {/* <li className={!state.userLoggedIn ? "hide": ""}>
                                <Link onClick={logout}>Logout</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <Counter/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-2">
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;