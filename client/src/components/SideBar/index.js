import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Image from "./../Image";

const SideBar = ({ isOpen, toggle }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
            &times;
        </span>
        <Image src={"../assets/sushi.png"} alt={"sushi-me"} width="100%" />
        </div>
        <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
            <p>ROLL CALL</p>
            <SubMenu title="Dine-In" icon={faCopy} items={submenus[1]} />
            <NavItem>
            <NavLink tag={Link} to={"/reservation"}>
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Reservation
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to={"/online"}>
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Order Online
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to={"/ordersummary"}>
                <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                Order Summary
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to={"/favorites"}>
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Favorite
            </NavLink>
            </NavItem>
            <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        </Nav>
        </div>
    </div>
    );

    const submenus = [
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
    ],
    [
        {
        title: "A La Carte",
        target: "alacarte",
        },
        {
        title: "All You Can Eat",
        target: "ayce",
        },
    ],
];

export default SideBar;
