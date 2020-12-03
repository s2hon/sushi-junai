import React, {useState, Link} from "react";
import { useHistory } from "react-router-dom";
import Image from "./../Image";
import Counter from "../Counter"
import { useStoreContext } from '../../utils/GlobalStore';
import { AUTH_SET_LOGGED_OUT} from "../../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
//components from reactstrap
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";
import SubMenu from "./SubMenu";


import "./style.css";


function NavBar () {

  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  //this controls the responsive navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

    //handles the logout
    const logout = () => {
      dispatch({
        type: AUTH_SET_LOGGED_OUT
      })
      history.push("/")
    }
    return (
        <div>
          <Navbar color="light" light expand ="md">
            <NavbarBrand href="/">
            <Image src={"../assets/logo.png"} alt={"sushi-junai-logo"}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to={"/"}>
                    Home
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to={"/reservation"}>
                    Reservation
                  </NavLink>
                </NavItem>
                <NavLink tag={Link} to={"/alacarte"}>
                    A La Carte
                </NavLink>
                <NavLink tag={Link} to={"/ayce"}>
                    All You Can Eat
                </NavLink>
                <NavItem>
                  <NavLink tag={Link} to={"/ordersummary"}>
                    Ordersummary</NavLink>
                </NavItem>
                <NavLink tag={Link} to={"/favorite"}>
                  <FontAwesomeIcon icon={faHeart} />
                  Favorite
                </NavLink>
                <SubMenu title="Home" icon={faHome} items={
                  [
                    {
                    title: "Login",
                    target: "login",
                    },
                    {
                    title: "signup",
                    target: "signup",
                    },
                    {
                    itle: "Logout",
                    target: "logout",
                    },
                  ]} />
                <NavItem className={!state.userLoggedIn ? "hide": ""}>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
                <NavItem>
                  <Counter />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
  }

export default NavBar;