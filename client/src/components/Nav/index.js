import React, {useState} from "react";
import { Link } from "react-router-dom";
import Image from "./../Image";
import { useStoreContext } from '../../utils/GlobalStore';
//components from reactstrap

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // DropdownToggle,
  // DropdownItem,
  NavbarToggler
} from "reactstrap";


import "./style.css";


function NavBar (props) {
    const [state] = useStoreContext();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

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
                  <NavLink href="/menu">Menu</NavLink>
                </NavItem>
                <NavItem className={!state.userLoggedIn ? "hide": ""}>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/favorites">Favorites</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/ordersummary">Ordersummary</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    

export default NavBar;