import React, { useState } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <>
        <Nav tabs>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem active><a href="#appetizers">Appetizers</a></DropdownItem>
                    <DropdownItem active><a href="#salad">Salads</a></DropdownItem>
                    <DropdownItem active><a href="#soup">Soup/Noodles</a></DropdownItem>
                    <DropdownItem active><a href="#rice">Rice</a></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem active><a href="#entree">Entrees</a></DropdownItem>
                    <DropdownItem active><a href="#sushiSashimi">Sushi & Sashimi</a></DropdownItem>
                    <DropdownItem active><a href="#platters">Sashimi Platters</a></DropdownItem>
                    <DropdownItem active><a href="#classicRoll">Classic Rolls/Hand Rolls</a></DropdownItem> 
                    <DropdownItem active><a href="#sushi">Sushi(Nigiri)</a></DropdownItem> 
                    <DropdownItem active><a href="#chefsSpecial">Chef's Special Rolls</a></DropdownItem> 
                    <DropdownItem active><a href="#tempura">Tempura Rolls</a></DropdownItem> 
                    <DropdownItem active><a href="#bakedRolls">Baked Rolls</a></DropdownItem> 
                    <DropdownItem divider />
                    <DropdownItem active><a href="#desserts">Desserts</a></DropdownItem> 
                </DropdownMenu>
            </Dropdown>
        </Nav>
        </>
    )
}

export default NavBar;