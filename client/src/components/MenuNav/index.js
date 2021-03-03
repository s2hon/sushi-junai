import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
    return (
        <div>
            <Nav>
                <NavItem>
                <NavLink href="#appetizers" active>Appetizers</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#salad">Salads</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#soup">Soup/Noodles</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#rice">Rice</NavLink>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                <NavLink href="#classicRoll" active>Classic Rolls/Hand Rolls</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#sushi">Sushi (Nigiri)</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#chefsSpecials">Chef's Special Rolls</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#tempura">Tempura Rolls</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#bakedRolls">Baked Rolls</NavLink>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                <NavLink href="#desserts" active>Desserts</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default NavBar;