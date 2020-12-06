import React, { useState } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
        <Nav tabs>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                    Menu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem active><a href="ayce#appetizers">Appetizers</a></DropdownItem>
                    <DropdownItem active><a href="ayce#salad">Salads</a></DropdownItem>
                    <DropdownItem active><a href="ayce#soup">Soup/Noodles</a></DropdownItem>
                    <DropdownItem active><a href="ayce#rice">Rice</a></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem active><a href="ayce#classicRoll">Classic Rolls/Hand Rolls</a></DropdownItem> 
                    <DropdownItem active><a href="ayce#sushi">Sushi(Nigiri)</a></DropdownItem> 
                    <DropdownItem active><a href="ayce#chefsSpecial">Chef's Special Rolls</a></DropdownItem> 
                    <DropdownItem active><a href="ayce#tempura">Tempura Rolls</a></DropdownItem> 
                    <DropdownItem active><a href="ayce#bakedRolls">Baked Rolls</a></DropdownItem> 
                    <DropdownItem divider />
                    <DropdownItem active><a href="ayce#desserts">Desserts</a></DropdownItem> 
                    <DropdownItem divider />
                    <DropdownItem active><a href="/ordersummary">Order Summary</a></DropdownItem> 
                    <DropdownItem active><a href="/favorite">Favorite</a></DropdownItem> 
                </DropdownMenu>
            </Dropdown>
        </Nav>
        </div>
    )
}

export default NavBar;