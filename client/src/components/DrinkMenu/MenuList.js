import React from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faLeaf, faBreadSlice } from "@fortawesome/free-solid-svg-icons";


function Menu(props) {
    const drinkMenu = menu.filter(item => item.menu === "drinks");
    const houseSake = drinkMenu.filter(item => item.name == "House Hot Sake")
    const sake = drinkMenu.filter(item => item.category === "sake");
    //eventually users will be able to favorite items straight from the menu (if logged-in) 
    return (
        <>
            <Container>
                <Row>
                    <h3>Drink Menu</h3>
                </Row>
                <Row>
                    <h4 id="Sake">Sake</h4>
                    <Container>
                        <div className="card text-center">
                            <div className="card-body d-flex justify-content-between">
                                <MenuItems name={houseSake.name} smallPrice={houseSake.smallPrice} largePrice={houseSake.largePrice} size={houseSake.size} description={houseSake.description}>
                                </MenuItems>
                            </div>
                        </div>
                        {
                            sake.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} subtitle={item.subtitle} size={item.size} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>

            </Container>
        </>
    );
}

export default Menu;