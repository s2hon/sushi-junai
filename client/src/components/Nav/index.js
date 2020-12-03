import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Image from "./../Image";
import Counter from "../Counter"
import { useStoreContext } from '../../utils/GlobalStore';
import { AUTH_SET_LOGGED_OUT} from "../../utils/actions";
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


import "./style.css";


function NavBar (props) {
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
            <Image src={"../assets/logo.png"} alt={"sushi-junai logo"}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/alacarte">A La Carte</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/ayce">All You Can Eat</NavLink>
                </NavItem>
                <NavItem className={!state.userLoggedIn ? "hide": ""}>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/favorite">Favorites</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/ordersummary">Ordersummary</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Login">Log-In</NavLink>
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