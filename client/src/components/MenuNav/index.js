import React, { useState } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <>
        <Nav tabs>
            <Dropdown  nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    <span className="mainFont">Menu</span>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><a  className="mainFont" href="#appetizers">Appetizers</a></DropdownItem>
                    <DropdownItem><a className="mainFont" href="#salad">Salads</a></DropdownItem>
                    <DropdownItem><a className="mainFont" href="#soup">Soup/Noodles</a></DropdownItem>
                    <DropdownItem><a className="mainFont" href="#rice">Rice</a></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><a className="mainFont" href="#classicRoll">Classic Rolls/Hand Rolls</a></DropdownItem> 
                    <DropdownItem><a className="mainFont" href="#sushi">Sushi (Nigiri)</a></DropdownItem> 
                    <DropdownItem><a className="mainFont" href="#chefsSpecials">Chef's Special Rolls</a></DropdownItem> 
                    <DropdownItem><a className="mainFont" href="#tempura">Tempura Rolls</a></DropdownItem> 
                    <DropdownItem><a className="mainFont" href="#bakedRolls">Baked Rolls</a></DropdownItem> 
                    <DropdownItem divider />
                    <DropdownItem><a className="mainFont" href="#desserts">Desserts</a></DropdownItem> 
                </DropdownMenu>
            </Dropdown>
        </Nav>
        </>
    )
}

export default NavBar;